import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { closeSync, fsyncSync, openSync, readFileSync, realpathSync, writeSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { setTimeout as wait } from "node:timers/promises";
import { DEFAULT_MANIFEST, EXPECTED_ENTRIES, MIGRATION_SHA, ROOT, inspectAssetFile, readManifest, sha256, validateManifest } from "./verify-seed.mjs";
import { createSyntheticApprovedSnapshot, verifySnapshotData } from "./verify-snapshot.mjs";

const TYPES = [...new Set(Object.values(EXPECTED_ENTRIES))];
const same = (a, b) => {
  const normalize = (v) => Array.isArray(v) ? v.map(normalize) : v && typeof v === "object"
    ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, normalize(v[k])])) : v;
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
};
const guard = (condition, code) => { if (!condition) throw new Error(code); };
const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();

export function baselineOperations(space = "<configured-space>") {
  const root = "/spaces/" + space;
  const rows = [{ kind: "inventoryGET", method: "GET", url: root + "/environments", query: { limit: 100 } }];
  for (const environment of ["master", "dev"]) {
    const base = root + "/environments/" + environment;
    rows.push({ kind: "environmentGET", method: "GET", url: base });
    for (const collection of ["content_types", "entries", "assets", "tags", "locales"]) {
      rows.push({ kind: "collectionGET", method: "GET", url: base + "/" + collection, query: { limit: 1000 } });
    }
  }
  for (const type of TYPES) rows.push({ kind: "editorGET", method: "GET", url: root + "/environments/dev/content_types/" + type + "/editor_interface" });
  return rows;
}

export function buildPlan(manifest, result = validateManifest(manifest)) {
  const operations = baselineOperations().map((r) => ({ ...r, stage: "jit", planned: 1, maximum: 1 }));
  for (const asset of manifest.assets) {
    operations.push({ stage: "authoring", kind: "assetUpload", id: asset.id, method: "POST", planned: 1, maximum: 1 });
    operations.push({ stage: "authoring", kind: "assetCreate", id: asset.id, method: "PUT", planned: 1, maximum: 1 });
    operations.push({ stage: "authoring", kind: "assetProcess", id: asset.id, method: "PUT", planned: 1, maximum: 1 });
    operations.push({ stage: "authoring", kind: "assetReadiness", id: asset.id, method: "GET", planned: 1, maximum: 5 });
  }
  const entryIds = new Set(manifest.entries.map((e) => e.id));
  for (const id of result.dependency_order.order.filter((id) => entryIds.has(id))) operations.push({ stage: "authoring", kind: "entryCreate", id, method: "PUT", planned: 1, maximum: 1 });
  operations.push(...baselineOperations().map((r) => ({ ...r, stage: "final", planned: 1, maximum: 1 })));
  return {
    mode: "LOCAL PLAN ONLY", executable: result.final_readiness === "READY" ? "READY FOR SEPARATE AUTHORIZATION" : "NOT EXECUTABLE",
    final_readiness: result.final_readiness, placeholders: result.placeholders, errors: result.errors,
    source_debt: result.source_readiness.debts, operation_ledger: result.operation_ledger,
    recalculated_requests: { planned: operations.reduce((n, o) => n + o.planned, 0), maximum: operations.reduce((n, o) => n + o.maximum, 0) },
    operations, credentialsAccessed: false, contentfulClientCreated: false, contentfulRequests: 0,
  };
}

export function validateAuthorization(auth, result, context) {
  guard(context.execute === true, "EXPLICIT_EXECUTE_REQUIRED");
  guard(result.final_readiness === "READY" && result.placeholders.placeholder_count === 0, "MANIFEST_NOT_READY");
  guard(context.environment === "dev", "DEV_ONLY");
  guard(auth?.operation === "phase05-seed" && auth?.batch === "05.4" && auth?.decision === "AUTHORIZED_ONCE", "MUTATION_AUTHORIZATION_REQUIRED");
  guard(/^[a-zA-Z0-9_-]{8,80}$/.test(auth.id ?? ""), "AUTHORIZATION_ID");
  guard(auth.environment === "dev" && /^[a-zA-Z0-9]+$/.test(auth.spaceId ?? "") && context.spaceId === auth.spaceId, "TARGET_IDENTITY");
  guard(auth.checkpoint === context.head && /^[a-f0-9]{40}$/.test(auth.checkpoint ?? ""), "CHECKPOINT_MISMATCH");
  guard(auth.manifestSha256 === context.manifestHash, "MANIFEST_HASH_MISMATCH");
  guard(Number.isFinite(Date.parse(auth.expiresAt)) && Date.parse(auth.expiresAt) > context.now, "AUTHORIZATION_EXPIRED");
  guard(same(auth.limits, result.operation_ledger), "AUTHORIZED_ENVELOPE_MISMATCH");
  const gate = auth.gate03;
  guard(gate?.verdict === "PASS" && gate.checkpoint === context.head && gate.manifestSha256 === context.manifestHash &&
    gate.migrationSha256 === MIGRATION_SHA && gate.environment === "dev" && gate.spaceId === context.spaceId &&
    gate.collisionFree === true && gate.contentTypes === 10 && gate.entries === 0 && gate.assets === 0 && gate.tags === 0 &&
    gate.unpublishedAssetReferences === "VERIFIED" && typeof gate.externalApproval === "string" && gate.externalApproval.trim().length > 0,
  "SEPARATE_APPROVED_05_3_EVIDENCE_REQUIRED");
  guard(Number.isFinite(Date.parse(gate.validatedAt)) && Date.parse(gate.validatedAt) <= context.now &&
    context.now - Date.parse(gate.validatedAt) <= 60 * 60 * 1000, "PREFLIGHT_STALE");
}

function collection(data, label) {
  guard(Array.isArray(data?.items) && Number.isInteger(data.total) && data.total === data.items.length &&
    (data.skip === undefined || data.skip === 0) && !data.pages?.next, "UNBOUNDED_COLLECTION_" + label);
  guard(new Set(data.items.map((x) => x?.sys?.id)).size === data.items.length, "DUPLICATE_LIVE_ID");
  return data.items;
}

export function validateBaseline(responses, manifest, final = false) {
  guard(responses.length === 23, "BASELINE_READ_COUNT");
  const environments = collection(responses[0], "environments");
  guard(same(environments.map((e) => e.sys.id).sort(), ["dev", "master"]), "ENVIRONMENT_TOPOLOGY");
  for (const e of environments) guard(e.sys?.status?.sys?.id === "ready", "ENVIRONMENT_NOT_READY");
  for (const [offset, environment] of [[1, "master"], [7, "dev"]]) {
    const [identity, types, entries, assets, tags, locales] = responses.slice(offset, offset + 6);
    guard(identity?.sys?.id === environment && identity.sys?.status?.sys?.id === "ready", "ENVIRONMENT_IDENTITY");
    const ct = collection(types, "content-types"), es = collection(entries, "entries"), as = collection(assets, "assets");
    guard(collection(tags, "tags").length === 0, "UNEXPECTED_TAGS");
    const ls = collection(locales, "locales");
    guard(ls.length === 1 && ls[0].code === "en-US" && ls[0].default === true && ls[0].fallbackCode == null, "LOCALE");
    if (environment === "master") { guard(ct.length === 0 && es.length === 0 && as.length === 0, "MASTER_NOT_BLANK"); continue; }
    guard(ct.every((type) => Number.isInteger(type.sys?.publishedVersion) && type.sys.publishedVersion > 0), "UNPUBLISHED_MODEL_TYPE");
    const comparison = verifySnapshotData({ contentTypes: ct, editorInterfaces: responses.slice(13), locales: ls, entries: [], assets: [], tags: [] });
    guard(comparison.ok, "MODEL_DRIFT");
    if (!final) guard(es.length === 0 && as.length === 0, "COLLISION_OR_UNEXPECTED_CONTENT");
    else {
      guard(same(es.map((e) => e.sys.id).sort(), manifest.entries.map((e) => e.id).sort()), "FINAL_ENTRY_IDS");
      guard(same(as.map((a) => a.sys.id).sort(), manifest.assets.map((a) => a.id).sort()), "FINAL_ASSET_IDS");
      for (const expected of manifest.entries) {
        const actual = es.find((e) => e.sys.id === expected.id);
        guard(!actual.sys.publishedVersion && !actual.sys.archivedVersion && actual.sys.contentType?.sys?.id === expected.type && same(actual.fields, expected.fields), "FINAL_ENTRY_MISMATCH");
      }
      for (const expected of manifest.assets) {
        const actual = as.find((a) => a.sys.id === expected.id), file = actual.fields?.file?.["en-US"];
        guard(!actual.sys.publishedVersion && !actual.sys.archivedVersion && file?.url &&
          file.contentType === expected.source.mime && file.details?.size === expected.source.bytes &&
          actual.fields?.title?.["en-US"] === expected.title && actual.fields?.description?.["en-US"] === expected.description, "FINAL_ASSET_MISMATCH");
      }
    }
  }
}

export async function boundedReadiness(get, assetId, delay = wait) {
  for (let check = 1; check <= 5; check++) {
    const asset = await get(check);
    guard(asset?.sys?.id === assetId && !asset.sys.publishedVersion, "READINESS_IDENTITY");
    if (asset.fields?.file?.["en-US"]?.url) return asset;
    if (check < 5) await delay(3000);
  }
  throw new Error("ASSET_READINESS_LIMIT");
}

async function execute(manifestPath, authorizationPath) {
  // No environment or SDK access occurs in --plan, or before local readiness passes.
  const manifest = readManifest(manifestPath), manifestBytes = readFileSync(manifestPath);
  const result = validateManifest(manifest);
  guard(result.final_readiness === "READY", "MANIFEST_NOT_READY");
  guard(isAbsolute(authorizationPath ?? ""), "EXTERNAL_AUTHORIZATION_PATH_REQUIRED");
  const authPath = realpathSync(authorizationPath);
  const rel = relative(ROOT, authPath);
  guard((rel.startsWith("..") || isAbsolute(rel)) && !/(^|[\\/])\.env/i.test(authPath) && authPath.endsWith(".json"), "AUTHORIZATION_MUST_BE_EXTERNAL_JSON");
  const auth = JSON.parse(readFileSync(authPath, "utf8"));
  const context = { execute: true, environment: process.env.CONTENTFUL_ENVIRONMENT_ID, spaceId: process.env.CONTENTFUL_SPACE_ID, head: git("rev-parse", "HEAD"), manifestHash: sha256(manifestBytes), now: Date.now() };
  validateAuthorization(auth, result, context);
  const checkpoint = () => {
    guard(git("branch", "--show-current") === "master" && git("rev-parse", "HEAD") === auth.checkpoint &&
      git("rev-parse", "origin/master") === auth.checkpoint && git("status", "--porcelain") === "", "CLEAN_APPROVED_CHECKPOINT_REQUIRED");
    guard(sha256(readFileSync(manifestPath)) === context.manifestHash, "MANIFEST_CHANGED");
  };
  checkpoint();
  const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
  guard(typeof token === "string" && token.trim().length > 0, "MANAGEMENT_CREDENTIAL_REQUIRED");
  const runtime = JSON.parse(readFileSync(resolve(ROOT, "node_modules/contentful-management/package.json"), "utf8"));
  guard(runtime.version === "12.10.0", "SDK_REVIEW_REQUIRED");
  const sdkCore = JSON.parse(readFileSync(resolve(ROOT, "node_modules/contentful-sdk-core/package.json"), "utf8"));
  guard(sdkCore.version === "9.4.5", "RETRY_RUNTIME_REVIEW_REQUIRED");

  const fileBytes = new Map();
  for (const a of manifest.assets) {
    inspectAssetFile(a.source.path, a.source);
    const b = readFileSync(resolve(ROOT, a.source.path));
    guard(sha256(b) === a.source.sha256, "ASSET_CHANGED"); fileBytes.set(a.id, b);
  }
  const receiptPath = resolve(dirname(authPath), "seed05-" + auth.id + ".receipt.jsonl");
  const fd = openSync(receiptPath, "wx", 0o600);
  const receipt = (row) => {
    writeSync(fd, JSON.stringify({ at: new Date().toISOString(), ...row }) + "\n");
    fsyncSync(fd);
  };
  let active, consumed = false, attempted = 0;
  try {
    receipt({ state: "STARTED_UNCONSUMED", authorizationId: auth.id, manifestSha256: context.manifestHash, checkpoint: context.head });
    const { createClient } = await import("contentful-management");
    const client = createClient({
      accessToken: token, retryOnError: false, retryLimit: 0, throttle: 0,
      logHandler: () => {}, requestLogger: () => {}, responseLogger: () => {},
      onBeforeRequest(config) {
        guard(active && active.dispatches === 0, "UNPLANNED_REQUEST_OR_RETRY");
        const url = new URL(config.url, config.baseURL), method = (config.method ?? "GET").toUpperCase();
        guard(url.protocol === "https:" && ["api.contentful.com", "upload.contentful.com"].includes(url.hostname) &&
          url.pathname === active.url && method === active.method, "REQUEST_SCOPE");
        guard(method === "GET" || url.pathname.includes("/environments/dev/"), "MASTER_WRITE_REJECTED");
        config.maxRedirects = 0;
        active.dispatches++; return config;
      },
    });
    async function request(row, invoke) {
      guard(!active && attempted < result.operation_ledger.executionRequests.maximum, "REQUEST_LIMIT");
      guard(Date.now() < Date.parse(auth.expiresAt), "AUTHORIZATION_EXPIRED");
      if (row.method !== "GET" && !consumed) {
        guard(row.kind === "assetUpload", "FIRST_MUTATION");
        checkpoint();
        receipt({ state: "AUTHORIZATION_CONSUMED", firstMutation: row.kind }); consumed = true;
      }
      active = { ...row, dispatches: 0 }; attempted++;
      receipt({ state: "ATTEMPT", sequence: attempted, kind: row.kind, id: row.id ?? null, method: row.method });
      try {
        const response = await invoke();
        guard(active.dispatches === 1, "DISPATCH_COUNT");
        receipt({ state: "SUCCESS", sequence: attempted, responseId: response?.sys?.id ?? null, version: response?.sys?.version ?? null });
        return response;
      } catch {
        receipt({ state: "FAILED_STOP", sequence: attempted, consumed });
        throw new Error("REQUEST_FAILED_STOP_NO_RETRY");
      } finally { active = undefined; }
    }
    async function baseline(final) {
      const responses = [];
      for (const row of baselineOperations(auth.spaceId)) {
        responses.push(await request(row, () => client.raw.get(row.url, { params: row.query })));
      }
      validateBaseline(responses, manifest, final);
    }
    await baseline(false);
    const base = "/spaces/" + auth.spaceId + "/environments/dev";
    const completed = new Set();
    for (const asset of manifest.assets) {
      const uploadUrl = base + "/uploads", url = base + "/assets/" + asset.id;
      const upload = await request({ kind: "assetUpload", method: "POST", url: uploadUrl, id: asset.id }, () => client.upload.create({ spaceId: auth.spaceId, environmentId: "dev" }, { file: fileBytes.get(asset.id) }));
      guard(typeof upload?.sys?.id === "string", "UPLOAD_ID");
      const file = { contentType: asset.source.mime, fileName: asset.id + (asset.source.mime === "application/pdf" ? ".pdf" : asset.source.mime === "image/jpeg" ? ".jpg" : ".png"), uploadFrom: { sys: { type: "Link", linkType: "Upload", id: upload.sys.id } } };
      const fields = { title: { "en-US": asset.title }, description: { "en-US": asset.description }, file: { "en-US": file } };
      const created = await request({ kind: "assetCreate", method: "PUT", url, id: asset.id }, () => client.raw.put(url, { fields }, { headers: { "X-Contentful-Version": 0 } }));
      guard(created?.sys?.id === asset.id && created.sys.version === 1 && !created.sys.publishedVersion, "ASSET_CREATE_IDENTITY");
      const processUrl = url + "/files/en-US/process";
      await request({ kind: "assetProcess", method: "PUT", url: processUrl, id: asset.id }, () => client.raw.put(processUrl, null, { headers: { "X-Contentful-Version": created.sys.version } }));
      await boundedReadiness(() => request({ kind: "assetReadiness", method: "GET", url, id: asset.id }, () => client.raw.get(url)), asset.id);
      completed.add(asset.id);
    }
    const byId = new Map(manifest.entries.map((e) => [e.id, e]));
    for (const id of result.dependency_order.order) {
      const entry = byId.get(id); if (!entry) continue;
      const url = base + "/entries/" + entry.id;
      const created = await request({ kind: "entryCreate", method: "PUT", url, id }, () => client.raw.put(url, { fields: entry.fields }, { headers: { "X-Contentful-Version": 0, "X-Contentful-Content-Type": entry.type } }));
      guard(created?.sys?.id === id && created.sys.version === 1 && !created.sys.publishedVersion && same(created.fields, entry.fields), "ENTRY_CREATE_MISMATCH");
      completed.add(id);
    }
    guard(completed.size === 50, "CREATE_COMPLETENESS");
    await baseline(true);
    receipt({ state: "COMPLETE", consumed, requests: attempted, entries: 42, assets: 8, publications: 0 });
    console.log("Seed process complete; external validation required. No further operation authorized.");
  } catch {
    receipt({ state: "STOPPED", consumed, requests: attempted });
    throw new Error("SEED_STOPPED_NO_RETRY_OR_CLEANUP");
  } finally { closeSync(fd); }
}

export async function runHarnessSelfTests() {
  const passed = [];
  const test = async (name, run) => { await run(); passed.push(name); };
  const ready = { final_readiness: "READY", placeholders: { placeholder_count: 0 }, operation_ledger: { synthetic: true } };
  const context = { execute: true, environment: "dev", spaceId: "synthetic", head: "a".repeat(40), manifestHash: "b".repeat(64), now: Date.parse("2026-01-01T00:30:00Z") };
  const auth = { operation: "phase05-seed", batch: "05.4", decision: "AUTHORIZED_ONCE", id: "synthetic-test", environment: "dev", spaceId: "synthetic", checkpoint: context.head, manifestSha256: context.manifestHash, expiresAt: "2026-01-01T01:00:00Z", limits: ready.operation_ledger, gate03: { verdict: "PASS", checkpoint: context.head, manifestSha256: context.manifestHash, migrationSha256: MIGRATION_SHA, environment: "dev", spaceId: "synthetic", collisionFree: true, contentTypes: 10, entries: 0, assets: 0, tags: 0, unpublishedAssetReferences: "VERIFIED", externalApproval: "Synthetic test only", validatedAt: "2026-01-01T00:00:00Z" } };
  await test("synthetic guard inputs accepted without execution", () => validateAuthorization(auth, ready, context));
  for (const [name, mutate] of [
    ["master rejected", (a, r, c) => { c.environment = "master"; }],
    ["no execute flag rejected", (a, r, c) => { c.execute = false; }],
    ["incomplete manifest rejected", (a, r) => { r.final_readiness = "NOT READY"; }],
    ["placeholder rejected", (a, r) => { r.placeholders.placeholder_count = 1; }],
    ["wrong checkpoint rejected", (a) => { a.checkpoint = "c".repeat(40); }],
    ["wrong manifest hash rejected", (a) => { a.manifestSha256 = "c".repeat(64); }],
    ["expired authority rejected", (a) => { a.expiresAt = "2025-01-01T00:00:00Z"; }],
    ["missing collision proof rejected", (a) => { a.gate03.collisionFree = false; }],
    ["stale preflight rejected", (a) => { a.gate03.validatedAt = "2025-01-01T00:00:00Z"; }],
    ["changed envelope rejected", (a) => { a.limits = {}; }],
  ]) await test(name, () => { const a = structuredClone(auth), r = structuredClone(ready), c = structuredClone(context); mutate(a, r, c); assert.throws(() => validateAuthorization(a, r, c)); });
  await test("readiness stops after five checks", async () => {
    let calls = 0; await assert.rejects(boundedReadiness(async () => { calls++; return { sys: { id: "test" }, fields: {} }; }, "test", async () => {})); assert.equal(calls, 5);
  });
  await test("readiness returns on first ready response", async () => {
    let calls = 0; await boundedReadiness(async () => { calls++; return { sys: { id: "test" }, fields: { file: { "en-US": { url: "//synthetic.test/file" } } } }; }, "test", async () => {}); assert.equal(calls, 1);
  });
  await test("readiness error is never retried", async () => {
    let calls = 0; await assert.rejects(boundedReadiness(async () => { calls++; throw new Error("synthetic failure"); }, "test", async () => {})); assert.equal(calls, 1);
  });
  await test("baseline plan has exactly 23 GETs", () => { const rows = baselineOperations(); assert.equal(rows.length, 23); assert.ok(rows.every((r) => r.method === "GET")); });
  const snapshot = createSyntheticApprovedSnapshot();
  const list = (items) => ({ total: items.length, skip: 0, items });
  const environment = (id) => ({ sys: { id, status: { sys: { id: "ready" } } } });
  const types = snapshot.contentTypes.map((t) => ({ ...t, sys: { ...t.sys, publishedVersion: 1 } }));
  const baseline = [
    list([environment("master"), environment("dev")]),
    environment("master"), list([]), list([]), list([]), list([]), list(snapshot.locales),
    environment("dev"), list(types), list([]), list([]), list([]), list(snapshot.locales),
    ...snapshot.editorInterfaces,
  ];
  await test("synthetic blank baseline and frozen model accepted", () => validateBaseline(baseline, readManifest()));
  for (const [name, mutate] of [
    ["collision blocks before mutation", (b) => { b[9] = list([{ sys: { id: "unexpected" } }]); }],
    ["nonblank master blocks", (b) => { b[3] = list([{ sys: { id: "unexpected" } }]); }],
    ["pagination is not followed", (b) => { b[9].total = 1001; }],
    ["model field drift rejected", (b) => { b[8].items[0].fields.pop(); }],
    ["wrong environment identity rejected", (b) => { b[7].sys.id = "master"; }],
    ["unpublished model rejected", (b) => { delete b[8].items[0].sys.publishedVersion; }],
    ["wrong locale rejected", (b) => { b[12].items[0].code = "fr-FR"; }],
  ]) await test(name, () => { const b = structuredClone(baseline); mutate(b); assert.throws(() => validateBaseline(b, readManifest())); });
  await test("all Entry writes are create-only plan rows", () => {
    const plan = buildPlan(readManifest());
    assert.equal(plan.operations.filter((r) => r.kind === "entryCreate").length, 42);
    assert.ok(!plan.operations.some((r) => /update|delete|publish|upsert/i.test(r.kind)));
    assert.deepEqual(plan.recalculated_requests, { planned: 120, maximum: 152 });
  });
  return { status: "PASS", tests: passed.length, passed, credentials: 0, clients: 0, networkRequests: 0, executionPathInvoked: false };
}

const main = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (main) {
  try {
    const args = process.argv.slice(2);
    if (args.length === 1 && args[0] === "--self-test") console.log(JSON.stringify(await runHarnessSelfTests(), null, 2));
    else if (args[0] === "--plan" && (args.length === 1 || args.length === 3 && args[1] === "--manifest")) {
      const plan = buildPlan(readManifest(args[2] ?? DEFAULT_MANIFEST));
      console.log(JSON.stringify(plan, null, 2)); process.exitCode = plan.final_readiness === "READY" ? 0 : 1;
    } else if (args[0] === "--execute" && args.length === 5 && args[1] === "--manifest" && args[3] === "--authorization") {
      await execute(resolve(args[2]), args[4]);
    } else { console.error("Use --plan [--manifest path] or --self-test. Live mode requires separately authorized --execute --manifest path --authorization external-path."); process.exitCode = 2; }
  } catch {
    console.error("Seed tooling stopped safely. Inspect the non-secret local diagnostics/receipt; no automatic retry or cleanup.");
    process.exitCode = 2;
  }
}
