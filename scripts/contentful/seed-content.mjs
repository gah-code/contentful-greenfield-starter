import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { closeSync, fsyncSync, openSync, readFileSync, realpathSync, writeSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { setTimeout as wait } from "node:timers/promises";
import { DEFAULT_MANIFEST, EXPECTED_ENTRIES, MIGRATION_SHA, ROOT, inspectAssetFile, modelContract, readManifest, sha256, validateManifest } from "./verify-seed.mjs";
import { createSyntheticApprovedSnapshot, verifySnapshotData } from "./verify-snapshot.mjs";

const TYPES = [...new Set(Object.values(EXPECTED_ENTRIES))];
const same = (a, b) => {
  const normalize = (v) => Array.isArray(v) ? v.map(normalize) : v && typeof v === "object"
    ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, normalize(v[k])])) : v;
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
};
const guard = (condition, code) => { if (!condition) throw new Error(code); };
const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", env: { ...process.env, GIT_OPTIONAL_LOCKS: "0" } }).trim();

const WHOI = "seed05-experience-whoi-frontend-developer";
const RECOVERY_MANIFEST_SHA = "612e5fc20813267e3f1cbbbc53ec308286412eac212f74e96da6879e2adb3d6f";
const FORENSIC_SHA = "732bd68b475034a2b41e94a97168bd241089ce49ab22c06abd871b04a4a745fe";
const CLOSED_AUTHORIZATION = "phase05-seed-20260929-0254z";
const RECOVERY_EXISTING_IDS = Object.freeze([
  ...Object.entries(EXPECTED_ENTRIES).filter(([, type]) => ["navigationItem", "skill", "socialLink"].includes(type)).map(([id]) => id), WHOI,
]);
const has = (value, key) => value != null && Object.hasOwn(value, key);
const draft = (actual) => actual?.sys && !has(actual.sys, "publishedVersion") && !has(actual.sys, "archivedVersion");

// Requires the existing same() helper and modelContract imported from verify-seed.mjs.
// No locale, scalar, reference, order, Rich Text, or system metadata normalization.
export function entryFieldComparison(actualFields, expectedFields, typeId) {
  const record = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
  const type = modelContract().find((candidate) => candidate.sys.id === typeId);
  if (!type || !record(actualFields) || !record(expectedFields)) return { equal: false, normalizedPaths: [] };
  const expected = { ...expectedFields }, normalizedPaths = [];
  for (const spec of type.fields) {
    if (spec.type !== "Array" || spec.required !== false || !Object.hasOwn(expected, spec.id) || Object.hasOwn(actualFields, spec.id)) continue;
    const localized = expected[spec.id];
    if (record(localized) && Object.keys(localized).length === 1 && Object.hasOwn(localized, "en-US") &&
      Array.isArray(localized["en-US"]) && localized["en-US"].length === 0) {
      delete expected[spec.id];
      normalizedPaths.push("/fields/" + spec.id.replaceAll("~", "~0").replaceAll("/", "~1"));
    }
  }
  return { equal: same(actualFields, expected), normalizedPaths };
}

export function entryFieldsEqual(actualFields, expectedFields, typeId) {
  return entryFieldComparison(actualFields, expectedFields, typeId).equal;
}

// Strict identity and draft/archive guards remain separate from field equivalence.
export function entryDraftMatches(actual, expected, created = false) {
  return actual?.sys?.id === expected.id && actual.sys.contentType?.sys?.id === expected.type &&
    (!created || actual.sys.version === 1) &&
    !Object.hasOwn(actual.sys, "publishedVersion") && !Object.hasOwn(actual.sys, "archivedVersion") &&
    entryFieldsEqual(actual.fields, expected.fields, expected.type);
}

function validateEntry(actual, expected, { strict = false, version } = {}) {
  guard(entryDraftMatches(actual, expected) && (version === undefined || actual.sys.version === version) &&
    (!strict || same(actual.fields, expected.fields)), "ENTRY_MISMATCH");
}

export function auditEmptyArrays(manifest) {
  // Inspect field-localized values, never nested Rich Text marks/content arrays.
  return manifest.entries.flatMap((entry) => Object.entries(entry.fields).flatMap(([field, locales]) =>
    Object.entries(locales).filter(([, value]) => Array.isArray(value) && value.length === 0)
      .map(([locale]) => `${entry.id}.fields.${field}.${locale}`)));
}

function recoveryOrder(manifest, result) {
  guard(result.final_readiness === "READY", "MANIFEST_NOT_READY");
  guard(manifest.entries.length === 42 && manifest.assets.length === 8 && RECOVERY_EXISTING_IDS.length === 21, "RECOVERY_INVENTORY_CONTRACT");
  guard(same(auditEmptyArrays(manifest), [WHOI + ".fields.tools.en-US"]), "EMPTY_ARRAY_AUDIT_CHANGED");
  const expected = new Set(manifest.entries.map((e) => e.id));
  guard(RECOVERY_EXISTING_IDS.every((id) => expected.has(id)), "RECOVERY_EXISTING_IDS");
  const order = result.dependency_order.order.filter((id) => expected.has(id) && !RECOVERY_EXISTING_IDS.includes(id));
  guard(order.length === 21 && new Set(order).size === 21 && order[0] === "seed05-person-profile-gilberto-haro", "RECOVERY_ORDER_CHANGED");
  return order;
}

export function recoveryOperations(manifest, result = validateManifest(manifest), space) {
  const base = "/spaces/" + (space ?? "<configured-space>") + "/environments/dev/entries/";
  return [
    ...baselineOperations(space).map((row) => ({ ...row, stage: "jit" })),
    ...recoveryOrder(manifest, result).map((id) => ({ kind: "entryCreate", method: "PUT", url: base + id, id, stage: "authoring" })),
    ...baselineOperations(space).map((row) => ({ ...row, stage: "final" })),
  ].map((row) => ({ ...row, planned: 1, maximum: 1 }));
}

export function recoveryLedger(operations) {
  const count = (kind) => operations.filter((row) => row.kind === kind).length;
  const writes = operations.filter((row) => row.method !== "GET").length;
  const ledger = {
    assetUploads: count("assetUpload"), assetCreates: count("assetCreate"), assetProcessing: count("assetProcess"),
    entryCreates: count("entryCreate"), existingObjectWrites: 0, assetMetadataUpdates: 0, entryUpdates: 0,
    entryPublications: 0, assetPublications: 0, deletes: 0, unpublishes: 0, retries: 0, requestReplay: 0, automaticCleanup: 0,
    readinessGET: { planned: count("assetReadiness"), maximum: count("assetReadiness") },
    jitGET: operations.filter((row) => row.stage === "jit" && row.method === "GET").length,
    finalValidationGET: operations.filter((row) => row.stage === "final" && row.method === "GET").length,
    writes, executionRequests: { planned: operations.reduce((n, row) => n + row.planned, 0), maximum: operations.reduce((n, row) => n + row.maximum, 0) },
  };
  guard(writes === 21 && ledger.entryCreates === writes && operations.every((row) => row.method === "GET" ||
    row.method === "PUT" && row.kind === "entryCreate" && !RECOVERY_EXISTING_IDS.includes(row.id)), "RECOVERY_WRITES_SCOPE");
  guard(ledger.jitGET === 23 && ledger.finalValidationGET === 23 && ledger.executionRequests.planned === 67 && ledger.executionRequests.maximum === 67, "RECOVERY_ENVELOPE");
  return ledger;
}

export function validateRecoveryRequest(row, operations, attempted) {
  const expected = operations[attempted];
  guard(expected && row.kind === expected.kind && row.method === expected.method && row.url === expected.url &&
    row.id === expected.id && same(row.query ?? {}, expected.query ?? {}), "RECOVERY_REQUEST_ORDER");
}

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

export function validateRecoveryAuthorization(auth, result, context, ledger) {
  guard(context.execute === true && context.recoverPartial === true, "EXPLICIT_RECOVERY_EXECUTE_REQUIRED");
  guard(result.final_readiness === "READY" && result.placeholders.placeholder_count === 0, "MANIFEST_NOT_READY");
  guard(context.environment === "dev" && context.spaceId === "jvzhd54yw3k0", "RECOVERY_TARGET");
  guard(auth?.operation === "phase05-seed-recovery" && auth.batch === "05.4" && auth.decision === "AUTHORIZED_ONCE", "NEW_RECOVERY_AUTHORIZATION_REQUIRED");
  // A separate namespace excludes every earlier ordinary seed authorization.
  guard(/^phase05-seed-recovery-[a-zA-Z0-9_-]{8,60}$/.test(auth.id ?? "") && auth.id !== CLOSED_AUTHORIZATION, "NEW_RECOVERY_ID_REQUIRED");
  guard(auth.environment === context.environment && auth.spaceId === context.spaceId, "TARGET_IDENTITY");
  guard(auth.checkpoint === context.head && /^[a-f0-9]{40}$/.test(auth.checkpoint ?? ""), "CHECKPOINT_MISMATCH");
  guard(auth.manifestSha256 === context.manifestHash && context.manifestHash === RECOVERY_MANIFEST_SHA && auth.migrationSha256 === MIGRATION_SHA, "RECOVERY_IDENTITY");
  guard(Number.isFinite(Date.parse(auth.issuedAt)) && Date.parse(auth.issuedAt) > Date.parse("2026-09-29T03:35:46.993Z") &&
    Date.parse(auth.issuedAt) <= context.now && Number.isFinite(Date.parse(auth.expiresAt)) && Date.parse(auth.expiresAt) > context.now,
  "RECOVERY_AUTHORIZATION_TIME");
  guard(auth.forensicEvidenceSha256 === FORENSIC_SHA && auth.supersedesAuthorizationId === CLOSED_AUTHORIZATION &&
    typeof auth.externalApproval === "string" && auth.externalApproval.trim().length > 0, "EXTERNAL_RECOVERY_APPROVAL_REQUIRED");
  guard(same(auth.limits, ledger), "AUTHORIZED_ENVELOPE_MISMATCH");
}

function collection(data, label) {
  guard(Array.isArray(data?.items) && Number.isInteger(data.total) && data.total === data.items.length &&
    (data.skip === undefined || data.skip === 0) && !data.pages?.next, "UNBOUNDED_COLLECTION_" + label);
  guard(new Set(data.items.map((x) => x?.sys?.id)).size === data.items.length, "DUPLICATE_LIVE_ID");
  return data.items;
}

export function validateBaseline(responses, manifest, final = false) {
  guard([false, true, "partial"].includes(final), "BASELINE_MODE");
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
      const partial = final === "partial";
      const expectedEntries = partial ? manifest.entries.filter((entry) => RECOVERY_EXISTING_IDS.includes(entry.id)) : manifest.entries;
      guard(same(es.map((e) => e.sys.id).sort(), expectedEntries.map((e) => e.id).sort()), "FINAL_ENTRY_IDS");
      guard(same(as.map((a) => a.sys.id).sort(), manifest.assets.map((a) => a.id).sort()), "FINAL_ASSET_IDS");
      for (const expected of expectedEntries) {
        const actual = es.find((e) => e.sys.id === expected.id);
        validateEntry(actual, expected, { strict: partial && expected.id !== WHOI, version: partial ? 1 : undefined });
      }
      for (const expected of manifest.assets) {
        const actual = as.find((a) => a.sys.id === expected.id), file = actual.fields?.file?.["en-US"];
        guard(draft(actual) && (!partial || actual.sys.version === 2) && file?.url &&
          file.contentType === expected.source.mime && file.details?.size === expected.source.bytes &&
          actual.fields?.title?.["en-US"] === expected.title && actual.fields?.description?.["en-US"] === expected.description, "FINAL_ASSET_MISMATCH");
      }
    }
  }
}

export function validatePartialBaseline(responses, manifest, result = validateManifest(manifest)) {
  const remaining = recoveryOrder(manifest, result);
  validateBaseline(responses, manifest, "partial");
  return { existingEntryIds: [...RECOVERY_EXISTING_IDS], existingAssetIds: manifest.assets.map((a) => a.id), remainingEntryIds: remaining };
}

export function forensicResponses(evidence) {
  guard(evidence?.checkpoint === "7742e5f7fb251cec3db8b3c21947d61ae29a4f5b" &&
    evidence.configurationBinding?.spaceId === "jvzhd54yw3k0" && evidence.configurationBinding.environment === "dev" &&
    evidence.requests?.attempted === 23 && evidence.requests.completedAndValidated === 23 &&
    evidence.requests.httpSuccessful === 23 && evidence.requests.failedOrUnvalidatedAttempts === 0 &&
    same(evidence.mutations, { POST: 0, PUT: 0, PATCH: 0, DELETE: 0 }), "FORENSIC_EVIDENCE_CONTRACT");
  const rows = evidence.safeResponses, operations = baselineOperations("jvzhd54yw3k0");
  guard(Array.isArray(rows) && rows.length === operations.length, "FORENSIC_LEDGER");
  return rows.map((row, index) => {
    guard(row.sequence === index + 1 && row.path === operations[index].url && row.immediateValidation === "PASS", "FORENSIC_ROW_IDENTITY");
    const summary = row.summary;
    if (operations[index].kind === "environmentGET") {
      guard(summary?.id === (index === 1 ? "master" : "dev") && summary.status === "ready", "FORENSIC_ENVIRONMENT");
      return { sys: { id: summary.id, status: { sys: { id: summary.status } } } };
    }
    if (operations[index].kind === "editorGET") {
      guard(row.approvedResponse?.sys?.contentType?.sys?.id === summary?.contentType, "FORENSIC_EDITOR");
      return row.approvedResponse;
    }
    guard(Number.isInteger(summary?.total) && summary.total === summary.returned && summary.skip === 0 && summary.nextPage === false, "FORENSIC_COLLECTION");
    let response;
    if (index === 0) {
      guard(Array.isArray(row.environments), "FORENSIC_TOPOLOGY");
      response = { items: row.environments.map((e) => ({ sys: { id: e.id, status: { sys: { id: e.status } } } })), total: summary.total, skip: 0 };
    } else if (index === 9 || index === 10) {
      guard(Array.isArray(row.unknownContentSummaries) && row.unknownContentSummaries.length === 0 && Array.isArray(row.manifestKnownContentResponses), "FORENSIC_UNKNOWN_CONTENT");
      response = { items: row.manifestKnownContentResponses, total: summary.total, skip: 0 };
    } else if (row.approvedResponse) response = row.approvedResponse;
    else {
      guard(summary.total === 0 && same(summary.boundedIds, []), "FORENSIC_RAW_RESPONSE_MISSING");
      response = { items: [], total: 0, skip: 0 };
    }
    const items = collection(response, "forensic");
    guard(items.length === summary.total && same(items.map((item) => item.sys.id).sort(), [...summary.boundedIds].sort()), "FORENSIC_SUMMARY_MISMATCH");
    return response;
  });
}

export function readForensicEvidence(path) {
  guard(isAbsolute(path ?? "") && path.endsWith(".json") && !/(^|[\\/])\.env/i.test(path), "EXTERNAL_FORENSIC_JSON_REQUIRED");
  const actualPath = realpathSync(path), rel = relative(ROOT, actualPath);
  guard((rel.startsWith("..") || isAbsolute(rel)) && !/(^|[\\/])\.env/i.test(actualPath), "FORENSIC_MUST_BE_EXTERNAL");
  const bytes = readFileSync(actualPath);
  guard(bytes.length === 340651 && sha256(bytes) === FORENSIC_SHA, "FORENSIC_IDENTITY_MISMATCH");
  return { identity: { path: actualPath, bytes: bytes.length, sha256: sha256(bytes) }, responses: forensicResponses(JSON.parse(bytes)) };
}

export function buildRecoveryPlan(manifest, responses, result = validateManifest(manifest)) {
  const partial = validatePartialBaseline(responses, manifest, result);
  const operations = recoveryOperations(manifest, result);
  return {
    mode: "LOCAL RECOVERY PLAN ONLY", executable: "READY FOR SEPARATE AUTHORIZATION", final_readiness: result.final_readiness,
    existingEntries: partial.existingEntryIds.length, existingAssets: partial.existingAssetIds.length,
    remainingEntryCreates: partial.remainingEntryIds.length, remainingEntryIds: partial.remainingEntryIds,
    existingObjectWrites: 0, totalWrites: operations.filter((row) => row.method !== "GET").length,
    publications: 0, operation_ledger: recoveryLedger(operations), operations, emptyArrayAudit: auditEmptyArrays(manifest),
    credentialsAccessed: false, contentfulClientCreated: false, contentfulRequests: 0,
    limitations: "Historical external evidence only; execution requires new authorization, a clean approved checkpoint, and a fresh exact 23-GET partial-state baseline.",
  };
}

export function validateExistingPreserved(initial, final) {
  for (const index of [9, 10]) {
    for (const before of collection(initial[index], "initial-preserved")) {
      const after = collection(final[index], "final-preserved").find((item) => item.sys.id === before.sys.id);
      guard(after && same(after, before), "EXISTING_OBJECT_CHANGED");
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

async function execute(manifestPath, authorizationPath, recoverPartial = false) {
  // No environment or SDK access occurs in --plan, or before local readiness passes.
  const manifest = readManifest(manifestPath), manifestBytes = readFileSync(manifestPath);
  const result = validateManifest(manifest);
  guard(result.final_readiness === "READY", "MANIFEST_NOT_READY");
  guard(isAbsolute(authorizationPath ?? ""), "EXTERNAL_AUTHORIZATION_PATH_REQUIRED");
  const authPath = realpathSync(authorizationPath);
  const rel = relative(ROOT, authPath);
  guard((rel.startsWith("..") || isAbsolute(rel)) && !/(^|[\\/])\.env/i.test(authPath) && authPath.endsWith(".json"), "AUTHORIZATION_MUST_BE_EXTERNAL_JSON");
  const auth = JSON.parse(readFileSync(authPath, "utf8"));
  const context = { execute: true, recoverPartial, environment: process.env.CONTENTFUL_ENVIRONMENT_ID, spaceId: process.env.CONTENTFUL_SPACE_ID, head: git("rev-parse", "HEAD"), manifestHash: sha256(manifestBytes), now: Date.now() };
  const recoveryRows = recoverPartial ? recoveryOperations(manifest, result, auth.spaceId) : undefined;
  const ledger = recoverPartial ? recoveryLedger(recoveryRows) : result.operation_ledger;
  if (recoverPartial) validateRecoveryAuthorization(auth, result, context, ledger);
  else validateAuthorization(auth, result, context);
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
    receipt({ state: "STARTED_UNCONSUMED", authorizationId: auth.id, operation: auth.operation, manifestSha256: context.manifestHash, checkpoint: context.head,
      invocationAuthority: "CLOSED_FOR_REUSE", recoverPartial });
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
        if (recoverPartial) guard(url.hostname === "api.contentful.com" && !url.port && !url.username && !url.password && !url.hash && !url.search &&
          same(config.params ?? {}, active.query ?? {}), "RECOVERY_REQUEST_QUERY_OR_HOST");
        config.maxRedirects = 0;
        active.dispatches++; return config;
      },
    });
    async function request(row, invoke) {
      guard(!active && attempted < ledger.executionRequests.maximum, "REQUEST_LIMIT");
      if (recoverPartial) validateRecoveryRequest(row, recoveryRows, attempted);
      guard(Date.now() < Date.parse(auth.expiresAt), "AUTHORIZATION_EXPIRED");
      if (row.method !== "GET" && !consumed) {
        guard(recoverPartial ? row.kind === "entryCreate" && row.id === recoveryRows[23].id && attempted === 23 : row.kind === "assetUpload", "FIRST_MUTATION");
        checkpoint();
        receipt({ state: "AUTHORIZATION_CONSUMED", firstMutation: row.kind, id: row.id }); consumed = true;
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
      if (recoverPartial && !final) validatePartialBaseline(responses, manifest, result);
      else validateBaseline(responses, manifest, final);
      return responses;
    }
    const initial = await baseline(false);
    const base = "/spaces/" + auth.spaceId + "/environments/dev";
    const completed = new Set(recoverPartial ? [...RECOVERY_EXISTING_IDS, ...manifest.assets.map((asset) => asset.id)] : []);
    for (const asset of recoverPartial ? [] : manifest.assets) {
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
    for (const id of recoverPartial ? recoveryOrder(manifest, result) : result.dependency_order.order) {
      const entry = byId.get(id); if (!entry) continue;
      const url = base + "/entries/" + entry.id;
      const created = await request({ kind: "entryCreate", method: "PUT", url, id }, () => client.raw.put(url, { fields: entry.fields }, { headers: { "X-Contentful-Version": 0, "X-Contentful-Content-Type": entry.type } }));
      const comparison = entryFieldComparison(created?.fields, entry.fields, entry.type);
      receipt({ state: "ENTRY_COMPARISON", id, fieldsEqual: comparison.equal, normalizedPaths: comparison.normalizedPaths,
        expectedFieldsSha256: sha256(Buffer.from(JSON.stringify(entry.fields))), actualFieldsSha256: sha256(Buffer.from(JSON.stringify(created?.fields ?? null))) });
      guard(entryDraftMatches(created, entry, true), "ENTRY_CREATE_MISMATCH");
      completed.add(id);
    }
    guard(completed.size === 50, "CREATE_COMPLETENESS");
    const final = await baseline(true);
    if (recoverPartial) {
      guard(attempted === recoveryRows.length, "RECOVERY_REQUEST_COMPLETENESS");
      validateExistingPreserved(initial, final);
    }
    receipt({ state: "COMPLETE", consumed, requests: attempted, entries: 42, assets: 8, publications: 0,
      entryCreates: ledger.entryCreates, existingObjectWrites: 0, recoverPartial });
    console.log("Seed process complete; external validation required. No further operation authorized.");
  } catch (error) {
    const stopCode = /^[A-Z][A-Z0-9_]{0,100}$/.test(error?.message ?? "") ? error.message : "UNCLASSIFIED_STOP";
    receipt({ state: "STOPPED", consumed, requests: attempted, stopCode });
    throw new Error("SEED_STOPPED_NO_RETRY_OR_CLEANUP");
  } finally { closeSync(fd); }
}

export async function runHarnessSelfTests() {
  const passed = [];
  const test = async (name, run) => {
    try { await run(); passed.push(name); }
    catch (cause) { throw new Error("Harness self-test failed: " + name, { cause }); }
  };
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
  // Insert in runHarnessSelfTests(). All inputs are local synthetic JSON values.
  const optionalEmpty = { tools: { "en-US": [] } };
  const orderedLinks = ["first", "second"].map((id) => ({ sys: { type: "Link", linkType: "Entry", id } }));
  const entryFieldCases = [
    ["optional empty Array omitted accepted", {}, optionalEmpty, "experienceItem", true],
    ["optional empty Array retained accepted", structuredClone(optionalEmpty), optionalEmpty, "experienceItem", true],
    ["required empty Array omitted rejected", {}, { skills: { "en-US": [] } }, "skillGroup", false],
    ["nonempty optional Array omitted rejected", {}, { tools: { "en-US": orderedLinks } }, "experienceItem", false],
    ["optional empty Array replaced by null rejected", { tools: null }, optionalEmpty, "experienceItem", false],
    ["optional empty Array locale null rejected", { tools: { "en-US": null } }, optionalEmpty, "experienceItem", false],
    ["optional empty Array replaced by object rejected", { tools: {} }, optionalEmpty, "experienceItem", false],
    ["optional empty Array replaced by string rejected", { tools: { "en-US": "" } }, optionalEmpty, "experienceItem", false],
    ["wrong locale empty Array rejected", { tools: { "fr-FR": [] } }, optionalEmpty, "experienceItem", false],
    ["expected wrong locale does not normalize", {}, { tools: { "fr-FR": [] } }, "experienceItem", false],
    ["extra expected locale does not normalize", {}, { tools: { "en-US": [], "fr-FR": [] } }, "experienceItem", false],
    ["unknown Array field does not normalize", {}, { unknown: { "en-US": [] } }, "experienceItem", false],
    ["unknown Content Type does not normalize", {}, optionalEmpty, "unknown", false],
    ["reference Array order changed rejected", { tools: { "en-US": [...orderedLinks].reverse() } }, { tools: { "en-US": orderedLinks } }, "experienceItem", false],
    ["reference ID changed rejected", { tools: { "en-US": [orderedLinks[0]] } }, { tools: { "en-US": [orderedLinks[1]] } }, "experienceItem", false],
    ["non-Array field omitted rejected", {}, { location: { "en-US": "Remote" } }, "experienceItem", false],
    ["missing required field rejected", {}, { role: { "en-US": "Developer" } }, "experienceItem", false],
    ["Date value changed rejected", { startDate: { "en-US": "2025-03-02" } }, { startDate: { "en-US": "2025-03-01" } }, "experienceItem", false],
    ["Boolean value changed rejected", { isCurrentRole: { "en-US": true } }, { isCurrentRole: { "en-US": false } }, "experienceItem", false],
    ["Rich Text value changed rejected", { responsibilities: { "en-US": { nodeType: "document", data: {}, content: [] } } }, { responsibilities: { "en-US": { nodeType: "document", data: {}, content: [{ nodeType: "text", value: "Expected", marks: [], data: {} }] } } }, "experienceItem", false],
    ["unexpected actual field rejected", { other: { "en-US": "unexpected" } }, optionalEmpty, "experienceItem", false],
    ["missing entire actual fields rejected", undefined, optionalEmpty, "experienceItem", false],
    ["expected null is not an empty Array", {}, { tools: { "en-US": null } }, "experienceItem", false],
  ];
  for (const [name, actual, expected, type, equivalent] of entryFieldCases) await test(name, () => {
    const beforeActual = structuredClone(actual), beforeExpected = structuredClone(expected);
    assert.equal(entryFieldsEqual(actual, expected, type), equivalent);
    assert.deepEqual(actual, beforeActual); assert.deepEqual(expected, beforeExpected);
  });
  await test("only the approved field path is reported", () => assert.deepEqual(entryFieldComparison({}, optionalEmpty, "experienceItem"), { equal: true, normalizedPaths: ["/fields/tools"] }));
  const comparisonEntry = { id: "synthetic-experience", type: "experienceItem", fields: optionalEmpty };
  const comparisonDraft = { sys: { id: comparisonEntry.id, version: 1, contentType: { sys: { id: comparisonEntry.type } } }, fields: {} };
  await test("draft create keeps strict identity and bounded field rule", () => assert.equal(entryDraftMatches(comparisonDraft, comparisonEntry, true), true));
  for (const [name, mutate] of [
    ["unexpected publishedVersion rejected", (e) => { e.sys.publishedVersion = 1; }],
    ["zero publishedVersion is not absence", (e) => { e.sys.publishedVersion = 0; }],
    ["null publishedVersion is not absence", (e) => { e.sys.publishedVersion = null; }],
    ["archived Entry rejected", (e) => { e.sys.archivedVersion = 1; }],
    ["zero archivedVersion is not absence", (e) => { e.sys.archivedVersion = 0; }],
    ["wrong created Content Type rejected", (e) => { e.sys.contentType.sys.id = "project"; }],
    ["wrong created ID rejected", (e) => { e.sys.id = "other"; }],
    ["wrong created version rejected", (e) => { e.sys.version = 2; }],
  ]) await test(name, () => { const actual = structuredClone(comparisonDraft); mutate(actual); assert.equal(entryDraftMatches(actual, comparisonEntry, true), false); });

  const recoveryManifest = readManifest(), recoveryResult = validateManifest(recoveryManifest);
  const liveEntry = (entry) => ({ sys: { id: entry.id, version: 1, contentType: { sys: { id: entry.type } } }, fields: structuredClone(entry.fields) });
  const full = structuredClone(baseline);
  full[9] = list(recoveryManifest.entries.map(liveEntry));
  full[10] = list(recoveryManifest.assets.map((a) => ({ sys: { id: a.id, version: 2 }, fields: {
    title: { "en-US": a.title }, description: { "en-US": a.description }, file: { "en-US": { contentType: a.source.mime, details: { size: a.source.bytes }, url: "//synthetic.invalid/" + a.id } },
  } })));
  const partial = structuredClone(full);
  partial[9] = list(partial[9].items.filter((e) => RECOVERY_EXISTING_IDS.includes(e.sys.id)));
  delete partial[9].items.find((e) => e.sys.id === WHOI).fields.tools;
  delete full[9].items.find((e) => e.sys.id === WHOI).fields.tools;
  await test("all 42 Entries audited: exactly WHOI empty tools", () => assert.deepEqual(auditEmptyArrays(recoveryManifest), [WHOI + ".fields.tools.en-US"]));
  await test("ordinary execution still rejects accepted partial state", () => assert.throws(() => validateBaseline(partial, recoveryManifest, false)));
  await test("recovery refuses blank state", () => assert.throws(() => validatePartialBaseline(baseline, recoveryManifest, recoveryResult)));
  await test("recovery refuses already complete state", () => assert.throws(() => validatePartialBaseline(full, recoveryManifest, recoveryResult)));
  await test("exact partial plan recomputes 21 writes and 67 fixed requests", () => {
    const plan = buildRecoveryPlan(recoveryManifest, partial, recoveryResult);
    assert.equal(plan.existingEntries, 21); assert.equal(plan.existingAssets, 8);
    assert.equal(plan.remainingEntryCreates, 21); assert.equal(plan.remainingEntryIds[0], "seed05-person-profile-gilberto-haro");
    assert.equal(plan.totalWrites, 21); assert.equal(plan.existingObjectWrites, 0); assert.equal(plan.publications, 0);
    assert.deepEqual(plan.operation_ledger.executionRequests, { planned: 67, maximum: 67 });
    assert.equal(plan.operations.filter((row) => row.method === "GET").length, 46);
    assert.ok(plan.operations.filter((row) => row.method !== "GET").every((row) => row.method === "PUT" && row.kind === "entryCreate" && !RECOVERY_EXISTING_IDS.includes(row.id)));
  });
  await test("corrected final validation accepts omitted optional empty Array", () => validateBaseline(full, recoveryManifest, true));
  await test("corrected final validation also accepts retained empty Array", () => {
    const retained = structuredClone(full); retained[9].items.find((e) => e.sys.id === WHOI).fields.tools = { "en-US": [] };
    validateBaseline(retained, recoveryManifest, true);
  });
  for (const [name, mutate] of [
    ["missing existing Entry", (b) => { b[9] = list(b[9].items.slice(1)); }],
    ["unexpected Entry", (b) => { b[9].items[0].sys.id = "unexpected"; }],
    ["duplicate Entry", (b) => { b[9].items[1] = structuredClone(b[9].items[0]); }],
    ["remaining Entry already present", (b) => { b[9] = list([...b[9].items, full[9].items.find((e) => e.sys.id === "seed05-person-profile-gilberto-haro")]); }],
    ["first20 field mismatch", (b) => { b[9].items.find((e) => e.sys.id !== WHOI).fields.extra = { "en-US": "bad" }; }],
    ["WHOI wrong date", (b) => { b[9].items.find((e) => e.sys.id === WHOI).fields.startDate["en-US"] = "2025-03-02"; }],
    ["WHOI tools null", (b) => { b[9].items.find((e) => e.sys.id === WHOI).fields.tools = null; }],
    ["published existing Entry", (b) => { b[9].items[0].sys.publishedVersion = 0; }],
    ["archived existing Entry", (b) => { b[9].items[0].sys.archivedVersion = 1; }],
    ["existing Entry changed version", (b) => { b[9].items[0].sys.version = 2; }],
    ["wrong existing type", (b) => { b[9].items[0].sys.contentType.sys.id = "project"; }],
    ["missing Asset", (b) => { b[10] = list(b[10].items.slice(1)); }],
    ["unexpected Asset", (b) => { b[10].items[0].sys.id = "unexpected"; }],
    ["Asset metadata drift", (b) => { b[10].items[0].fields.title["en-US"] = "changed"; }],
    ["Asset MIME drift", (b) => { b[10].items[0].fields.file["en-US"].contentType = "text/plain"; }],
    ["Asset size drift", (b) => { b[10].items[0].fields.file["en-US"].details.size++; }],
    ["Asset unprocessed", (b) => { delete b[10].items[0].fields.file["en-US"].url; }],
    ["Asset published", (b) => { b[10].items[0].sys.publishedVersion = 1; }],
    ["Asset archived", (b) => { b[10].items[0].sys.archivedVersion = 1; }],
    ["Asset changed version", (b) => { b[10].items[0].sys.version = 3; }],
    ["master nonblank", (b) => { b[3] = list([full[9].items[0]]); }],
    ["model drift", (b) => { b[8].items[0].fields.pop(); }],
    ["authored Editor Interface override drift", (b) => {
      b.slice(13).find((e) => e.sys.contentType.sys.id === "article").controls = [];
    }],
    ["tags present", (b) => { b[11] = list([{ sys: { id: "bad" } }]); }],
    ["wrong locale", (b) => { b[12].items[0].code = "fr-FR"; }],
    ["incomplete collection", (b) => { b[9].total++; }],
  ]) await test("partial recovery rejects " + name, () => {
    const b = structuredClone(partial); mutate(b);
    assert.throws(() => buildRecoveryPlan(recoveryManifest, b, recoveryResult));
  });
  await test("final validation rejects wrong fields and publication", () => {
    const b = structuredClone(full); b[9].items[0].fields.extra = { "en-US": "bad" };
    assert.throws(() => validateBaseline(b, recoveryManifest, true));
    const c = structuredClone(full); c[9].items[0].sys.publishedVersion = 1;
    assert.throws(() => validateBaseline(c, recoveryManifest, true));
  });
  await test("all 29 existing objects unchanged across synthetic recovery", () => validateExistingPreserved(partial, full));
  for (const index of [9, 10]) await test("existing object version change detected at " + index, () => {
    const b = structuredClone(full); b[index].items.find((e) => e.sys.id === partial[index].items[0].sys.id).sys.version++;
    assert.throws(() => validateExistingPreserved(partial, b));
  });
  const recoveryRows = recoveryOperations(recoveryManifest, recoveryResult, "jvzhd54yw3k0"), limits = recoveryLedger(recoveryRows);
  await test("exact 67 recovery request rows accepted in order", () => recoveryRows.forEach((row, i) => validateRecoveryRequest(row, recoveryRows, i)));
  for (const [name, row, position] of [
    ["replay", recoveryRows[23], 24], ["extra request", recoveryRows[66], 67],
    ["publication", { ...recoveryRows[23], url: recoveryRows[23].url + "/published" }, 23],
    ["existing object write", { ...recoveryRows[23], id: WHOI, url: recoveryRows[23].url.replace(recoveryRows[23].id, WHOI) }, 23],
    ["pagination", { ...recoveryRows[0], query: { limit: 100, skip: 100 } }, 0],
    ["delete", { ...recoveryRows[23], method: "DELETE" }, 23],
  ]) await test("recovery dispatch rejects " + name, () => assert.throws(() => validateRecoveryRequest(row, recoveryRows, position)));
  const recoveryContext = { execute: true, recoverPartial: true, environment: "dev", spaceId: "jvzhd54yw3k0", head: "a".repeat(40), manifestHash: RECOVERY_MANIFEST_SHA, now: Date.parse("2026-10-01T00:30:00Z") };
  const recoveryAuth = { operation: "phase05-seed-recovery", batch: "05.4", decision: "AUTHORIZED_ONCE", id: "phase05-seed-recovery-synthetic", environment: "dev", spaceId: "jvzhd54yw3k0", checkpoint: recoveryContext.head, manifestSha256: RECOVERY_MANIFEST_SHA, migrationSha256: MIGRATION_SHA, issuedAt: "2026-10-01T00:00:00Z", expiresAt: "2026-10-01T01:00:00Z", forensicEvidenceSha256: FORENSIC_SHA, supersedesAuthorizationId: CLOSED_AUTHORIZATION, externalApproval: "Synthetic test only; not execution authority", limits };
  await test("distinct synthetic recovery authorization accepted without execution", () => validateRecoveryAuthorization(recoveryAuth, recoveryResult, recoveryContext, limits));
  for (const [name, mutate] of [
    ["ordinary seed operation", (a) => { a.operation = "phase05-seed"; }],
    ["consumed authorization ID", (a) => { a.id = CLOSED_AUTHORIZATION; }],
    ["earlier seed ID", (a) => { a.id = "phase05-seed-20260929-0242z"; }],
    ["old issuedAt", (a) => { a.issuedAt = "2026-09-29T03:00:00Z"; }],
    ["future issuedAt", (a) => { a.issuedAt = "2027-01-01T00:00:00Z"; }],
    ["expired authorization", (a) => { a.expiresAt = "2026-10-01T00:10:00Z"; }],
    ["no external approval", (a) => { a.externalApproval = ""; }],
    ["wrong incident evidence", (a) => { a.forensicEvidenceSha256 = "b".repeat(64); }],
    ["wrong checkpoint", (a) => { a.checkpoint = "b".repeat(40); }],
    ["wrong manifest", (a) => { a.manifestSha256 = "b".repeat(64); }],
    ["wrong migration", (a) => { a.migrationSha256 = "b".repeat(64); }],
    ["wrong request envelope", (a) => { a.limits = {}; }],
    ["master", (a, c) => { c.environment = "master"; }],
    ["wrong space", (a, c) => { c.spaceId = "other"; }],
    ["implicit recovery", (a, c) => { c.recoverPartial = false; }],
  ]) await test("recovery authorization rejects " + name, () => {
    const a = structuredClone(recoveryAuth), c = structuredClone(recoveryContext); mutate(a, c);
    assert.throws(() => validateRecoveryAuthorization(a, recoveryResult, c, limits));
  });
  await test("normal authorization rejects recovery authority", () => assert.throws(() => validateAuthorization(recoveryAuth, recoveryResult, recoveryContext)));

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
    } else if (args[0] === "--recover-partial" && args[1] === "--plan" && args[2] === "--evidence" &&
      (args.length === 4 || args.length === 6 && args[4] === "--manifest")) {
      const manifestPath = args[5] ?? DEFAULT_MANIFEST;
      const manifest = readManifest(manifestPath);
      guard(sha256(readFileSync(manifestPath)) === RECOVERY_MANIFEST_SHA, "RECOVERY_MANIFEST_IDENTITY");
      const evidence = readForensicEvidence(args[3]);
      console.log(JSON.stringify({ ...buildRecoveryPlan(manifest, evidence.responses), evidence: evidence.identity }, null, 2));
    } else if (args[0] === "--recover-partial" && args[1] === "--execute" && args.length === 6 && args[2] === "--manifest" && args[4] === "--authorization") {
      await execute(resolve(args[3]), args[5], true);
    } else { console.error("Use --plan [--manifest path], --self-test, or --recover-partial --plan --evidence absolute-external-json [--manifest path]. Live modes require separate authorization: [--recover-partial] --execute --manifest path --authorization external-path."); process.exitCode = 2; }
  } catch {
    console.error("Seed tooling stopped safely. Inspect the non-secret local diagnostics/receipt; no automatic retry or cleanup.");
    process.exitCode = 2;
  }
}
