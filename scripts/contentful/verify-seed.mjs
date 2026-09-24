import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, realpathSync, statSync } from "node:fs";
import { extname, isAbsolute, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateRichTextDocument } from "@contentful/rich-text-types";
import { createSyntheticApprovedSnapshot } from "./verify-snapshot.mjs";

export const ROOT = fileURLToPath(new URL("../../", import.meta.url));
export const DEFAULT_MANIFEST = resolve(ROOT, "content-model/seed/phase-05/seed-manifest.json");
export const MIGRATION_SHA = "4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24";
export const EXPECTED_ENTRIES = Object.freeze({
  "seed05-site-settings-primary": "siteSettings",
  "seed05-person-profile-gilberto-haro": "personProfile",
  "seed05-social-link-linkedin": "socialLink",
  "seed05-social-link-github": "socialLink",
  "seed05-navigation-item-about": "navigationItem",
  "seed05-navigation-item-work": "navigationItem",
  "seed05-navigation-item-projects": "navigationItem",
  "seed05-navigation-item-writing": "navigationItem",
  "seed05-navigation-item-tools": "navigationItem",
  "seed05-navigation-item-contact": "navigationItem",
  "seed05-project-enterprise-cms-migration": "project",
  "seed05-project-contentful-greenfield-starter": "project",
  "seed05-project-ui-gallery-system": "project",
  "seed05-article-web-development-certifications-learning-journey": "article",
  "seed05-article-state-management-in-react": "article",
  "seed05-article-about-me": "article",
  "seed05-experience-hogarth-wwp-apple-content-manager": "experienceItem",
  "seed05-experience-whoi-frontend-developer": "experienceItem",
  "seed05-experience-robert-half-marketing-web-developer": "experienceItem",
  "seed05-experience-digitalnest-web-development-specialist": "experienceItem",
  "seed05-skill-group-frontend-ui-engineering": "skillGroup",
  "seed05-skill-group-content-cms-operations": "skillGroup",
  "seed05-skill-group-quality-discoverability": "skillGroup",
  "seed05-skill-group-automation-delivery": "skillGroup",
  "seed05-tool-contentful": "tool",
  "seed05-tool-adobe-experience-manager": "tool",
  "seed05-tool-wordpress": "tool",
  "seed05-tool-react": "tool",
  "seed05-tool-typescript": "tool",
  "seed05-tool-storybook": "tool",
  "seed05-skill-frontend-development": "skill",
  "seed05-skill-design-systems": "skill",
  "seed05-skill-accessibility-wcag": "skill",
  "seed05-skill-content-modeling": "skill",
  "seed05-skill-cms-operations": "skill",
  "seed05-skill-content-migration": "skill",
  "seed05-skill-localization": "skill",
  "seed05-skill-web-qa-uat": "skill",
  "seed05-skill-seo-metadata-governance": "skill",
  "seed05-skill-workflow-automation": "skill",
  "seed05-skill-api-integration": "skill",
  "seed05-skill-technical-documentation-governance": "skill"
});
export const EXPECTED_ASSETS = Object.freeze([
  "seed05-asset-profile-portrait",
  "seed05-asset-resume-public",
  "seed05-asset-project-enterprise-cms-migration",
  "seed05-asset-project-contentful-greenfield-starter",
  "seed05-asset-project-ui-gallery-system",
  "seed05-asset-project-system-diagram",
  "seed05-asset-article-learning-journey",
  "seed05-asset-site-social-default"
]);
export const TYPE_COUNTS = Object.freeze({ siteSettings: 1, personProfile: 1, socialLink: 2, navigationItem: 6, project: 3, article: 3, experienceItem: 4, skill: 12, skillGroup: 4, tool: 6 });
export const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const isObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const nonempty = (v) => typeof v === "string" && v.trim().length > 0;
const tokenPattern = /\[\[PLACEHOLDER:([^\[\]\r\n]+)\]\]/g;
const isPlaceholder = (v) => typeof v === "string" && /^\[\[PLACEHOLDER:[^\[\]\r\n]+\]\]$/.test(v);
const debtIds = ["hogarth-start", "whoi-location", "digitalnest-role", "primary-title", "linkedin-canonical", "resume-contact", "enterprise-metrics", "article-completeness", "asset-sources"];

export function readManifest(path = DEFAULT_MANIFEST) {
  if (!String(path).endsWith(".json") || /(^|[\\/])\.env/i.test(String(path))) throw new Error("MANIFEST_JSON_REQUIRED");
  const root = resolve(ROOT, "content-model/seed/phase-05");
  const local = relative(root, realpathSync(path));
  if (local.startsWith("..") || isAbsolute(local)) throw new Error("MANIFEST_OUTSIDE_SEED_DIRECTORY");
  return JSON.parse(readFileSync(path, "utf8"));
}

export function modelContract() {
  // Reuse the existing checksum-anchored, credential-free migration collector.
  return createSyntheticApprovedSnapshot().contentTypes;
}

export function scanPlaceholders(value) {
  const found = [], malformed = [];
  function walk(v, path, entryId, assetId) {
    if (typeof v === "string") {
      const matches = [...v.matchAll(tokenPattern)];
      for (const m of matches) {
        if (!m[1].trim() || m[1] !== m[1].trim()) malformed.push(path);
        else found.push({ path, entryId, assetId });
      }
      const remainder = v.replace(tokenPattern, "");
      if (/\[[^\r\n]*PLACEHOLDER|PLACEHOLDER\s*[:\]]/i.test(remainder)) malformed.push(path);
    } else if (Array.isArray(v)) {
      v.forEach((x, i) => walk(x, `${path}[${i}]`, path === "entries" ? x?.id : entryId, path === "assets" ? x?.id : assetId));
    } else if (isObject(v)) {
      for (const [k, x] of Object.entries(v)) walk(x, path ? `${path}.${k}` : k, entryId, assetId);
    }
  }
  walk(value, "", undefined, undefined);
  return {
    placeholder_count: found.length,
    placeholder_paths: found.map((x) => x.path),
    placeholder_entry_ids: [...new Set(found.map((x) => x.entryId).filter(Boolean))].sort(),
    placeholder_asset_ids: [...new Set(found.map((x) => x.assetId).filter(Boolean))].sort(),
    malformed_paths: [...new Set(malformed)].sort(),
  };
}

export function dependencyOrder(entries, assets, edges) {
  const result = assets.map((a) => a.id), seen = new Set(result);
  const remaining = new Set(entries.map((e) => e.id));
  while (remaining.size) {
    const layer = [...remaining].filter((id) => edges.filter((e) => e.source === id).every((e) => seen.has(e.target))).sort();
    if (!layer.length) return { order: result, blocked: [...remaining].sort() };
    for (const id of layer) { result.push(id); seen.add(id); remaining.delete(id); }
  }
  return { order: result, blocked: [] };
}

export function operationLedger(manifest) {
  const a = manifest.assets.length, e = manifest.entries.length, writes = a * 3 + e;
  return {
    assetUploads: a, assetCreates: a, assetProcessing: a, entryCreates: e,
    assetMetadataUpdates: 0, entryUpdates: 0, entryPublications: 0, assetPublications: 0,
    deletes: 0, unpublishes: 0, readinessGET: { planned: a, maximum: a * 5 },
    jitGET: 23, postExecutionExtraGET: 0, finalValidationGET: 23, writes,
    executionRequests: { planned: writes + a + 46, maximum: writes + a * 5 + 46 },
    preExecutionGET: 23,
    crossStageRequests: { planned: writes + a + 69, maximum: writes + a * 5 + 69 },
  };
}

export function inspectAssetFile(input, expected, root = ROOT) {
  if (!nonempty(input) || isPlaceholder(input)) throw new Error("SOURCE_UNRESOLVED");
  const candidate = resolve(root, input);
  const forbidden = (p) => /(^|[\\/])\.env[^\\/]*|(^|[\\/])\.git([\\/]|$)|phase-04|qa04-/i.test(p);
  const safeExtension = (p) => [".jpg", ".jpeg", ".png", ".pdf"].includes(extname(p).toLowerCase());
  if (forbidden(candidate) || !safeExtension(candidate) || /(^|[\\/])\.[^\\/]/.test(candidate)) throw new Error("PROHIBITED_ASSET_PATH");
  if (!existsSync(candidate)) throw new Error("SOURCE_MISSING");
  const real = realpathSync(candidate);
  if (forbidden(real) || !safeExtension(real) || /(^|[\\/])\.[^\\/]/.test(real)) throw new Error("PROHIBITED_ASSET_PATH");
  if (!statSync(real).isFile()) throw new Error("SOURCE_NOT_FILE");
  const bytes = readFileSync(real);
  const fixtureDir = resolve(ROOT, "content-model/fixtures/phase-04");
  for (const name of ["qa04-image-primary.jpg", "qa04-image-secondary.png", "qa04-resume-pdf.pdf"]) {
    const p = resolve(fixtureDir, name);
    if (existsSync(p) && sha256(readFileSync(p)) === sha256(bytes)) throw new Error("PHASE04_FIXTURE_BYTES");
  }
  const mime = bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) ? "image/png"
    : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255 ? "image/jpeg"
    : bytes.subarray(0, 5).toString("ascii") === "%PDF-" ? "application/pdf" : "UNKNOWN";
  if (mime !== expected.mime) throw new Error("MIME_MISMATCH");
  if (bytes.length !== expected.bytes) throw new Error("SIZE_MISMATCH");
  if (sha256(bytes) !== expected.sha256) throw new Error("HASH_MISMATCH");
  return { path: input, mime, bytes: bytes.length, sha256: sha256(bytes) };
}

export function validateManifest(manifest, options = {}) {
  const errors = [], debt = [], missing = [], deferred = [], edges = [], monthConversions = [], assetResults = [];
  const placeholders = scanPlaceholders(manifest);
  const error = (code, path) => errors.push({ code, path });
  const notReady = (code, path) => debt.push({ code, path });
  const exactKeys = (object, allowed, path) => {
    if (!isObject(object)) { error("OBJECT_REQUIRED", path); return; }
    for (const k of Object.keys(object)) if (!allowed.includes(k)) error("UNEXPECTED_PROPERTY", path + "." + k);
  };
  const entries = Array.isArray(manifest?.entries) ? manifest.entries : [];
  const assets = Array.isArray(manifest?.assets) ? manifest.assets : [];
  exactKeys(manifest, ["manifestVersion", "modelVersion", "migrationSha256", "target", "locale", "sources", "sourceDebt", "publicationPolicy", "entries", "assets", "dependencyOrder", "operationLedger"], "manifest");
  const models = modelContract(), schemas = new Map(models.map((t) => [t.sys.id, t]));
  if (manifest?.manifestVersion !== 1 || manifest?.modelVersion !== "v1.0.0" || manifest?.migrationSha256 !== MIGRATION_SHA) error("MODEL_IDENTITY", "manifest");
  if (manifest?.target !== "dev" || manifest?.locale !== "en-US") error("TARGET_OR_LOCALE", "manifest");
  if (entries.length !== 42 || assets.length !== 8) error("INVENTORY_COUNT", "manifest");
  const counts = {};
  const entryMap = new Map(), assetMap = new Map();
  for (const [kind, items, map] of [["entry", entries, entryMap], ["asset", assets, assetMap]]) {
    for (const item of items) {
      if (!isObject(item)) { error("RECORD_REQUIRED", kind); continue; }
      if (map.has(item.id) || entryMap.has(item.id) && kind === "asset") error("DUPLICATE_ID", String(item.id));
      if (typeof item.id !== "string" || !/^seed05-[a-z0-9-]{1,57}$/.test(item.id)) error("INVALID_ID", String(item.id));
      map.set(item.id, item);
      if (kind === "entry") {
        counts[item.type] = (counts[item.type] || 0) + 1;
        if (EXPECTED_ENTRIES[item.id] !== item.type) error("IDENTITY_TYPE", String(item.id));
      } else if (!EXPECTED_ASSETS.includes(item.id)) error("ASSET_IDENTITY", String(item.id));
    }
  }
  for (const [type, n] of Object.entries(TYPE_COUNTS)) if (counts[type] !== n) error("TYPE_COUNT", type);
  for (const id of Object.keys(EXPECTED_ENTRIES)) if (!entryMap.has(id)) error("MISSING_ENTRY_ID", id);
  for (const id of EXPECTED_ASSETS) if (!assetMap.has(id)) error("MISSING_ASSET_ID", id);
  for (const path of placeholders.malformed_paths) error("MALFORMED_PLACEHOLDER", path);
  if (placeholders.placeholder_count) notReady("PLACEHOLDERS", "manifest");

  const sourceIds = new Set((Array.isArray(manifest?.sources) ? manifest.sources : []).map((s) => s?.id));
  if (!sourceIds.size) error("SOURCE_REGISTRY", "sources");
  function provenance(value, path) {
    if (!Array.isArray(value?.classes) || !value.classes.length || value.classes.some((c) => !["A", "B", "C", "D"].includes(c))) error("SOURCE_CLASSIFICATION", path);
    if (!Array.isArray(value?.basis) || !value.basis.length || value.basis.some((id) => !sourceIds.has(id))) error("SOURCE_PROVENANCE", path);
  }
  function approval(value, path) {
    if (!isObject(value) || !nonempty(value.status) || !nonempty(value.evidence)) error("APPROVAL_METADATA", path);
    if (value?.status !== "APPROVED" || isPlaceholder(value?.evidence)) notReady("APPROVAL_REQUIRED", path);
  }
  const debts = Array.isArray(manifest?.sourceDebt) ? manifest.sourceDebt : [];
  for (const id of debtIds) {
    const rows = debts.filter((d) => d?.id === id);
    if (rows.length !== 1) { error("SOURCE_DEBT_RECORD", id); continue; }
    const d = rows[0];
    if (!Array.isArray(d.evidence) || !d.evidence.length) error("SOURCE_DEBT_EVIDENCE", id);
    if (id === "primary-title") {
      if (d.status !== "DEFERRED_NOT_ADOPTED" && d.status !== "RESOLVED") error("TITLE_DISPOSITION", id);
    } else if (d.status !== "RESOLVED") notReady("SOURCE_CONFLICT", id);
    else if (!nonempty(d.resolution)) error("RESOLUTION_EVIDENCE", id);
  }

  function addLink(value, spec, entry, field, path) {
    if (!isObject(value) || Object.keys(value).length !== 1 || !isObject(value.sys) ||
        !same(Object.keys(value.sys).sort(), ["id", "linkType", "type"]) ||
        value.sys.type !== "Link" || value.sys.linkType !== spec.linkType || !nonempty(value.sys.id)) {
      error("LINK_SHAPE", path); return;
    }
    const kind = spec.linkType, target = value.sys.id;
    const targetRecord = kind === "Entry" ? entryMap.get(target) : assetMap.get(target);
    if (!targetRecord) error("REFERENCE_TARGET_MISSING", path);
    for (const validation of spec.validations ?? []) {
      if (kind === "Entry" && validation.linkContentType && !validation.linkContentType.includes(targetRecord?.type)) error("REFERENCE_TARGET_TYPE", path);
      if (kind === "Asset" && validation.linkMimetypeGroup) {
        const mime = targetRecord?.source?.mime;
        const group = mime?.startsWith("image/") ? "image" : mime === "application/pdf" ? "pdfdocument" : "unknown";
        if (!validation.linkMimetypeGroup.includes(group)) error("REFERENCE_ASSET_MIME", path);
      }
    }
    edges.push({ source: entry.id, field, target, kind, path });
  }

  const uniqueValues = new Map();
  function valueCheck(value, spec, entry, field, path) {
    if (isPlaceholder(value) && ["Symbol", "Text", "Date", "Integer", "Boolean"].includes(spec.type)) {
      deferred.push(path); return;
    }
    const type = spec.type;
    if ((type === "Symbol" || type === "Text") && (!nonempty(value))) error("TEXT_SHAPE", path);
    if (type === "Integer" && !Number.isInteger(value)) error("INTEGER_SHAPE", path);
    if (type === "Boolean" && typeof value !== "boolean") error("BOOLEAN_SHAPE", path);
    if (type === "Date" && (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}(?:T.*Z)?$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0,10) !== value.slice(0,10))) error("DATE_SHAPE", path);
    if (type === "Link") addLink(value, spec, entry, field, path);
    if (type === "Array") {
      if (!Array.isArray(value)) error("ARRAY_SHAPE", path);
      else {
        value.forEach((v, i) => valueCheck(v, spec.items, entry, field, path + "[" + i + "]"));
        if (new Set(value.map((v) => JSON.stringify(v))).size !== value.length) error("DUPLICATE_ARRAY_VALUE", path);
      }
    }
    if (type === "RichText") {
      try { if (validateRichTextDocument(value).length) error("RICH_TEXT_SHAPE", path); }
      catch { error("RICH_TEXT_SHAPE", path); }
      const nodes = spec.validations?.find((v) => v.enabledNodeTypes)?.enabledNodeTypes ?? [];
      const marks = spec.validations?.find((v) => v.enabledMarks)?.enabledMarks;
      let meaningful = false;
      function walk(node, at) {
        if (!isObject(node)) return;
        if (node.nodeType === "text" && nonempty(node.value)) meaningful = true;
        if (node.nodeType === "embedded-asset-block") meaningful = true;
        if (!["document", "paragraph", "list-item", "text", ...nodes].includes(node.nodeType)) error("RICH_TEXT_NODE", at);
        if (marks && node.marks?.some((m) => !marks.includes(m.type))) error("RICH_TEXT_MARK", at);
        if (node.nodeType === "embedded-asset-block") addLink(node.data?.target, { linkType: "Asset" }, entry, field, at);
        if (node.nodeType === "hyperlink" && !/^https:\/\//.test(node.data?.uri ?? "")) error("RICH_TEXT_PUBLIC_URL", at);
        if (Array.isArray(node.content)) node.content.forEach((n, i) => walk(n, at + ".content[" + i + "]"));
      }
      walk(value, path);
      if (!meaningful) error("RICH_TEXT_EMPTY", path);
    }
    for (const validation of spec.validations ?? []) {
      if (validation.in && !validation.in.includes(value)) error("CONTROLLED_VALUE", path);
      if (validation.regexp && typeof value === "string" && !new RegExp(validation.regexp.pattern, validation.regexp.flags).test(value)) error("REGEXP", path);
      if (validation.size && (typeof value === "string" || Array.isArray(value))) {
        if (value.length < (validation.size.min ?? 0) || value.length > (validation.size.max ?? Infinity)) error("SIZE", path);
      }
      if (validation.range && typeof value === "number" && (value < (validation.range.min ?? -Infinity) || value > (validation.range.max ?? Infinity))) error("RANGE", path);
      if (validation.unique) {
        const key = entry.type + "." + field + ":" + value;
        if (uniqueValues.has(key)) error("UNIQUE_FIELD", path);
        uniqueValues.set(key, true);
      }
    }
  }

  for (const entry of entries.filter(isObject)) {
    const path = "entries[" + entries.indexOf(entry) + "]", schema = schemas.get(entry.type);
    exactKeys(entry, ["id", "type", "fields", "publication", "source", "publicSafety", "optionalFields", "orderedArrays", "datePrecision"], path);
    if (!schema || !isObject(entry.fields)) { error("ENTRY_SHAPE", path); continue; }
    const byField = new Map(schema.fields.map((f) => [f.id, f]));
    provenance(entry.source, path + ".source");
    if (entry.source?.status !== "APPROVED") notReady("SOURCE_REVIEW", path + ".source");
    approval(entry.publicSafety, path + ".publicSafety");
    if (entry.publication !== "draft") error("ENTRY_PUBLICATION", path);
    for (const f of schema.fields) {
      const present = Object.hasOwn(entry.fields, f.id);
      if (f.required && !present) { missing.push(entry.id + "." + f.id); error("REQUIRED_FIELD", path + ".fields." + f.id); }
      if (!f.required) {
        const d = entry.optionalFields?.[f.id];
        if (d?.decision !== (present ? "include" : "omit") || !nonempty(d?.reason)) error("OPTIONAL_DECISION", path + "." + f.id);
      }
    }
    for (const [field, localized] of Object.entries(entry.fields)) {
      const at = path + ".fields." + field, spec = byField.get(field);
      if (!spec) { error("UNEXPECTED_FIELD", at); continue; }
      if (!isObject(localized) || !same(Object.keys(localized), ["en-US"])) { error("LOCALE_SHAPE", at); continue; }
      const value = localized["en-US"];
      valueCheck(value, spec, entry, field, at + ".en-US");
      if (spec.type === "Array" && spec.items.type === "Link" && Array.isArray(value)) {
        if (!same(entry.orderedArrays?.[field], value.map((v) => v?.sys?.id))) error("ARRAY_ORDER_METADATA", at);
      }
      if (spec.type === "Date" && !isPlaceholder(value) && entry.type === "experienceItem") {
        const date = entry.datePrecision?.[field];
        if (!date || date.sourcePrecision !== "month" || !/^\d{4}-\d{2}$/.test(date.sourceValue) || date.cmsValue !== value || value !== date.sourceValue + "-01" || date.dayIsEncoding !== true) error("DATE_PRECISION", at);
        else monthConversions.push({ entryId: entry.id, field, ...date });
      }
    }
    for (const k of Object.keys(entry.optionalFields ?? {})) if (!byField.has(k) || byField.get(k).required) error("OPTIONAL_METADATA_FIELD", path + "." + k);
    for (const k of Object.keys(entry.orderedArrays ?? {})) if (byField.get(k)?.type !== "Array" || !entry.fields[k]) error("ORDER_METADATA_FIELD", path + "." + k);
    for (const k of Object.keys(entry.datePrecision ?? {})) if (byField.get(k)?.type !== "Date" || !entry.fields[k]) error("DATE_METADATA_FIELD", path + "." + k);
    const val = (f) => entry.fields[f]?.["en-US"];
    if (entry.type === "article" && val("authorProfile")?.sys?.id !== "seed05-person-profile-gilberto-haro") error("CANONICAL_AUTHOR", path);
    if (entry.type === "personProfile" && val("primaryTitle") !== "Web Content & Marketing Technologist") error("GOVERNING_TITLE", path);
    const [start, end] = entry.type === "article" ? [val("publishDate"), val("updatedDate")] : [val("startDate"), val("endDate")];
    if (start && end && !isPlaceholder(start) && !isPlaceholder(end) && Date.parse(end) < Date.parse(start)) error("DATE_ORDER", path);
    if (entry.type === "experienceItem" && val("isCurrentRole") === true && val("endDate")) error("CURRENT_ROLE_END_DATE", path);
  }

  for (const asset of assets.filter(isObject)) {
    const path = "assets[" + assets.indexOf(asset) + "]";
    exactKeys(asset, ["id", "role", "source", "title", "description", "accessibility", "rights", "publicSafety", "provenance", "publication"], path);
    provenance(asset.provenance, path + ".provenance");
    approval(asset.rights, path + ".rights"); approval(asset.publicSafety, path + ".publicSafety");
    if (asset.publication !== "unpublished") error("ASSET_PUBLICATION", path);
    if (!["meaningful", "decorative"].includes(asset.accessibility?.treatment) || !nonempty(asset.accessibility?.text)) error("ACCESSIBILITY", path);
    for (const field of ["title", "description"]) if (!nonempty(asset[field])) error("ASSET_METADATA", path + "." + field);
    const src = asset.source ?? {};
    if (!["image/jpeg", "image/png", "application/pdf"].includes(src.mime)) error("MIME_CLASS", path);
    if (asset.id === "seed05-asset-resume-public" ? src.mime !== "application/pdf" : !src.mime?.startsWith("image/")) error("ROLE_MIME", path);
    if (!Number.isSafeInteger(src.bytes) || src.bytes <= 0) notReady("ASSET_SIZE_REQUIRED", path);
    if (typeof src.sha256 !== "string" || !/^[a-f0-9]{64}$/.test(src.sha256)) notReady("ASSET_HASH_REQUIRED", path);
    let fileStatus = "UNRESOLVED";
    if (!nonempty(src.path) || isPlaceholder(src.path)) notReady("ASSET_SOURCE_REQUIRED", path);
    else try {
      if (/phase-04|qa04-|(^|[\\/])\\.env/i.test(src.path)) throw new Error("PROHIBITED_ASSET_PATH");
      const actual = (options.inspectFile ?? inspectAssetFile)(src.path, src, options.root ?? ROOT);
      if (actual.mime !== src.mime) throw new Error("MIME_MISMATCH");
      if (actual.bytes !== src.bytes) throw new Error("SIZE_MISMATCH");
      if (actual.sha256 !== src.sha256) throw new Error("HASH_MISMATCH");
      fileStatus = "VERIFIED";
    } catch (e) {
      const code = ["PROHIBITED_ASSET_PATH", "PHASE04_FIXTURE_BYTES", "MIME_MISMATCH", "SIZE_MISMATCH", "HASH_MISMATCH", "SOURCE_MISSING", "SOURCE_NOT_FILE"].includes(e.message) ? e.message : "ASSET_SOURCE_INVALID";
      notReady(code, path); fileStatus = code;
    }
    assetResults.push({ id: asset.id, source: fileStatus, mime: fileStatus === "VERIFIED" ? "VERIFIED" : "PLANNING_ONLY", size: Number.isSafeInteger(src.bytes) ? "DECLARED" : "UNRESOLVED", sha256: /^[a-f0-9]{64}$/.test(src.sha256 ?? "") ? "DECLARED" : "UNRESOLVED", rights: asset.rights?.status, safety: asset.publicSafety?.status, accessibility: scanPlaceholders(asset.accessibility).placeholder_count ? "UNRESOLVED" : asset.accessibility?.treatment });
  }

  const policy = manifest?.publicationPolicy;
  if (policy?.entries !== "draft" || policy?.assets !== "unpublished") error("PUBLICATION_POLICY", "publicationPolicy");
  if (policy?.unpublishedAssetReferences?.status !== "VERIFIED" || !nonempty(policy?.unpublishedAssetReferences?.evidence)) notReady("UNPUBLISHED_ASSET_REFERENCES_UNPROVEN", "publicationPolicy");
  const graph = dependencyOrder(entries.filter(isObject), assets.filter(isObject), edges);
  if (graph.blocked.length) error("DEPENDENCY_CYCLE_OR_UNRESOLVED", "dependencyOrder");
  if (!same(manifest?.dependencyOrder, graph.order)) error("DEPENDENCY_ORDER", "dependencyOrder");
  const ledger = operationLedger({ entries, assets });
  if (!same(manifest?.operationLedger, ledger)) error("OPERATION_LEDGER", "operationLedger");
  const cycles = [];
  const visiting = new Set(), visited = new Set();
  function visit(id) {
    if (visiting.has(id)) { cycles.push(id); return; }
    if (visited.has(id)) return;
    visiting.add(id);
    for (const edge of edges.filter((e) => e.source === id && e.kind === "Entry")) visit(edge.target);
    visiting.delete(id); visited.add(id);
  }
  for (const id of entryMap.keys()) visit(id);
  const optionalImages = entries.filter(isObject).filter((e) => e.type === "project" || e.type === "article" && e.id !== "seed05-article-web-development-certifications-learning-journey").map((e) => ({ entryId: e.id, field: e.type === "project" ? "socialImage" : "heroImage", decision: e.optionalFields?.[e.type === "project" ? "socialImage" : "heroImage"]?.decision }));
  const ready = !errors.length && !debt.length && !placeholders.placeholder_count && !deferred.length;
  return {
    inventory: { entries: entries.length, assets: assets.length, types: counts },
    identities: { expectedEntries: 42, expectedAssets: 8, unique: new Set([...entryMap.keys(), ...assetMap.keys()]).size },
    required_fields: { missing, deferred, invalid: errors.filter((e) => /SHAPE|FIELD|CONTROLLED|REGEXP|RICH_TEXT|SIZE|RANGE/.test(e.code)) },
    placeholders, source_readiness: { debts: debt, conflicts: debts },
    assets: assetResults, month_precision_conversions: monthConversions,
    references: { field_qualified_edges: edges.length, entry_links: edges.filter((e) => e.kind === "Entry").length, asset_links: edges.filter((e) => e.kind === "Asset").length, distinct_pairs: new Set(edges.map((e) => e.source + "\0" + e.target)).size, populated_fields: new Set(edges.map((e) => e.source + "\0" + e.field)).size, cycles: [...new Set(cycles)], unresolved_required_targets: errors.filter((e) => e.code === "REFERENCE_TARGET_MISSING"), target_type_mismatches: errors.filter((e) => e.code === "REFERENCE_TARGET_TYPE"), optional_images: optionalImages, optional_unresolved_edges: optionalImages.filter((e) => !["include", "omit"].includes(e.decision)).length, second_pass_updates: graph.blocked.length ? null : 0 },
    dependency_order: graph, publication_policy: policy, operation_ledger: ledger,
    structural_validity: errors.length ? "INVALID" : "VALID_DEVELOPMENT_SKELETON",
    errors, final_readiness: ready ? "READY" : "NOT READY",
  };
}

export function runSelfTests() {
  const base = readManifest();
  const model = new Map(modelContract().map((t) => [t.sys.id, t]));
  function finalString(v) {
    if (typeof v === "string") return v.replace(tokenPattern, "Synthetic test content");
    if (Array.isArray(v)) return v.map(finalString);
    if (isObject(v)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, finalString(x)]));
    return v;
  }
  const valid = finalString(base);
  valid.sourceDebt = valid.sourceDebt.map((d) => ({ ...d, status: d.id === "primary-title" ? "DEFERRED_NOT_ADOPTED" : "RESOLVED", resolution: "Synthetic self-test evidence only." }));
  valid.publicationPolicy.unpublishedAssetReferences = { status: "VERIFIED", evidence: "Synthetic self-test only, not live proof." };
  for (const entry of valid.entries) {
    entry.source.status = "APPROVED"; entry.publicSafety = { status: "APPROVED", evidence: "Synthetic test review." };
    const schema = model.get(entry.type);
    for (const f of schema.fields) {
      if (!entry.fields[f.id]) continue;
      const v = entry.fields[f.id]["en-US"];
      if (f.type === "Date" && !Number.isFinite(Date.parse(v))) {
        entry.fields[f.id]["en-US"] = "2025-01-01";
        if (entry.type === "experienceItem") entry.datePrecision[f.id] = { sourcePrecision: "month", sourceValue: "2025-01", cmsValue: "2025-01-01", dayIsEncoding: true };
      }
      if (f.validations.some((x) => x.in)) entry.fields[f.id]["en-US"] = f.validations.find((x) => x.in).in[0];
      if (f.validations.some((x) => x.regexp) && !["slug"].includes(f.id)) entry.fields[f.id]["en-US"] = f.id === "publicEmail" ? "synthetic@example.test" : "https://example.test/synthetic";
    }
  }
  const bytes = Buffer.from("synthetic in-memory test bytes, not a seed Asset");
  const hash = sha256(bytes);
  for (const asset of valid.assets) {
    asset.source = { path: "synthetic-only/" + asset.id, mime: asset.source.mime, bytes: bytes.length, sha256: hash };
    asset.rights = { status: "APPROVED", evidence: "Synthetic test." };
    asset.publicSafety = { status: "APPROVED", evidence: "Synthetic test." };
  }
  const inspectFile = (_path, expected) => ({ mime: expected.mime, bytes: bytes.length, sha256: hash });
  const check = (m) => validateManifest(m, { inspectFile });
  const passed = [];
  const test = (name, run) => { run(); passed.push(name); };
  const fails = (name, mutate, code) => test(name, () => {
    const m = structuredClone(valid); mutate(m);
    const result = check(m);
    assert.equal(result.final_readiness, "NOT READY");
    if (code) assert.ok([...result.errors, ...result.source_readiness.debts].some((e) => e.code === code), name + ": " + JSON.stringify(result.errors));
  });
  test("complete synthetic contract accepted (memory only)", () => assert.equal(check(valid).final_readiness, "READY", JSON.stringify(check(valid).errors)));
  fails("duplicate Entry ID rejected", (m) => { m.entries[1].id = m.entries[0].id; }, "DUPLICATE_ID");
  fails("duplicate Asset ID rejected", (m) => { m.assets[1].id = m.assets[0].id; }, "DUPLICATE_ID");
  fails("wrong type count rejected", (m) => { m.entries[0].type = "article"; }, "TYPE_COUNT");
  fails("missing required field rejected", (m) => { delete m.entries[0].fields.siteName; }, "REQUIRED_FIELD");
  fails("bad reference target rejected", (m) => { m.entries[0].fields.primaryNavigationItems["en-US"][0].sys.id = "seed05-missing"; }, "REFERENCE_TARGET_MISSING");
  fails("wrong reference target type rejected", (m) => { m.entries[0].fields.primaryNavigationItems["en-US"][0].sys.id = m.entries[1].id; }, "REFERENCE_TARGET_TYPE");
  fails("cycle rejected", (m) => {
    const a = m.entries.filter((e) => e.type === "article");
    for (const [x, y] of [[a[0], a[1]], [a[1], a[0]]]) {
      x.fields.relatedArticles = { "en-US": [{ sys: { type: "Link", linkType: "Entry", id: y.id } }] };
      x.optionalFields.relatedArticles = { decision: "include", reason: "Synthetic cycle" }; x.orderedArrays.relatedArticles = [y.id];
    }
  }, "DEPENDENCY_CYCLE_OR_UNRESOLVED");
  fails("malformed Rich Text rejected", (m) => { m.entries[1].fields.longBio["en-US"] = { nodeType: "document", data: {}, content: [{ nodeType: "paragraph", data: {}, content: [{ nodeType: "text", marks: [], data: {} }] }] }; }, "RICH_TEXT_SHAPE");
  for (const marker of ["[[PLACEHOLDERfoo]]", "[[PLACEHOLDER]]", "[PLACEHOLDER:x]", "[[ PLACEHOLDER:x ]]", "[[PLACEHOLDER: x ]]"]) {
    fails("malformed marker rejected: " + marker, (m) => { m.entries[0].fields.siteName["en-US"] = marker; }, "MALFORMED_PLACEHOLDER");
  }
  test("valid placeholder diagnostic includes path and Entry ID", () => {
    const m = structuredClone(valid); m.entries[0].fields.siteName["en-US"] = "[[PLACEHOLDER:site-name]]";
    const r = check(m); assert.equal(r.placeholders.placeholder_count, 1); assert.deepEqual(r.placeholders.placeholder_entry_ids, [m.entries[0].id]); assert.ok(r.placeholders.placeholder_paths[0].endsWith(".en-US")); assert.equal(r.final_readiness, "NOT READY");
  });
  test("recursive metadata, array, Rich Text and Asset diagnostics", () => {
    const r = scanPlaceholders({ entries: [{ id: "entry", extra: [{ nested: "[[PLACEHOLDER:nested]]" }], fields: { body: { content: [{ value: "[[PLACEHOLDER:rich]]" }] } } }], assets: [{ id: "asset", accessibility: { text: "[[PLACEHOLDER:alt]]" }, source: { path: "[[PLACEHOLDER:path]]" } }] });
    assert.equal(r.placeholder_count, 4); assert.deepEqual(r.placeholder_entry_ids, ["entry"]); assert.deepEqual(r.placeholder_asset_ids, ["asset"]);
  });
  fails("unresolved Asset source rejected", (m) => { m.assets[0].source.path = "[[PLACEHOLDER:path]]"; }, "ASSET_SOURCE_REQUIRED");
  fails("hash mismatch rejected", (m) => { m.assets[0].source.sha256 = "0".repeat(64); }, "HASH_MISMATCH");
  fails("Phase 04 fixture path rejected", (m) => { m.assets[0].source.path = "content-model/fixtures/phase-04/qa04-image-primary.jpg"; }, "PROHIBITED_ASSET_PATH");
  fails("invalid Entry publication rejected", (m) => { m.entries[0].publication = "published"; }, "ENTRY_PUBLICATION");
  fails("invalid Asset publication rejected", (m) => { m.assets[0].publication = "published"; }, "ASSET_PUBLICATION");
  fails("unexpected CMS field rejected", (m) => { m.entries[0].fields.newField = { "en-US": "invalid" }; }, "UNEXPECTED_FIELD");
  fails("derived reverse authoring rejected", (m) => { m.entries.find((e) => e.type === "tool").fields.projects = { "en-US": [] }; }, "UNEXPECTED_FIELD");
  fails("controlled value rejected", (m) => { m.entries.find((e) => e.type === "socialLink").fields.platform["en-US"] = "LinkedIn"; }, "CONTROLLED_VALUE");
  fails("ordered-array change rejected", (m) => { m.entries[0].fields.primaryNavigationItems["en-US"].reverse(); }, "ARRAY_ORDER_METADATA");
  fails("date precision is mandatory", (m) => { m.entries.find((e) => e.type === "experienceItem").datePrecision = {}; }, "DATE_PRECISION");
  fails("unresolved source conflict independently blocks", (m) => { m.sourceDebt[0].status = "UNRESOLVED"; }, "SOURCE_CONFLICT");
  fails("unverified Asset reference mechanics block", (m) => { m.publicationPolicy.unpublishedAssetReferences.status = "UNRESOLVED"; }, "UNPUBLISHED_ASSET_REFERENCES_UNPROVEN");
  fails("operation count tampering rejected", (m) => { m.operationLedger.writes++; }, "OPERATION_LEDGER");
  fails("unapproved public safety independently blocks", (m) => { m.entries[0].publicSafety.status = "REVIEW_REQUIRED"; }, "APPROVAL_REQUIRED");
  fails("governing title preserved", (m) => { m.entries[1].fields.primaryTitle["en-US"] = "Web Engineer & Content Systems"; }, "GOVERNING_TITLE");
  fails("empty Rich Text is not required content", (m) => { m.entries[1].fields.longBio["en-US"].content = []; }, "RICH_TEXT_EMPTY");
  fails("bad primitive rejected", (m) => { m.entries[0].fields.siteName["en-US"] = 7; }, "TEXT_SHAPE");
  fails("illegal locale rejected", (m) => { m.entries[0].fields.siteName = { "fr-FR": "test" }; }, "LOCALE_SHAPE");
  fails("missing source classification rejected", (m) => { delete m.entries[0].source.classes; }, "SOURCE_CLASSIFICATION");
  fails("missing rights classification rejected", (m) => { delete m.assets[0].rights; }, "APPROVAL_METADATA");
  fails("missing Asset title rejected", (m) => { m.assets[0].title = ""; }, "ASSET_METADATA");
  fails("missing Asset size independently rejected", (m) => { m.assets[0].source.bytes = null; }, "ASSET_SIZE_REQUIRED");
  fails("missing Asset hash independently rejected", (m) => { delete m.assets[0].source.sha256; }, "ASSET_HASH_REQUIRED");
  fails("missing accessibility metadata rejected", (m) => { delete m.assets[0].accessibility; }, "ACCESSIBILITY");
  fails("wrong Asset MIME rejected", (m) => { m.assets[1].source.mime = "image/png"; }, "ROLE_MIME");
  test("missing concrete source file rejected", () => assert.throws(() => inspectAssetFile("/__seed05_missing_asset_file__.jpg", valid.assets[0].source), /SOURCE_MISSING/));
  test("secret-bearing filename rejected before file read", () => assert.throws(() => readManifest(".env.local"), /MANIFEST_JSON_REQUIRED/));
  return { status: "PASS", tests: passed.length, passed, networkRequests: 0, credentials: 0, syntheticAssetsWritten: 0 };
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  try {
    const args = process.argv.slice(2);
    if (args.length === 1 && args[0] === "--self-test") console.log(JSON.stringify(runSelfTests(), null, 2));
    else if (args.length === 0 || args.length === 2 && args[0] === "--manifest") {
      const result = validateManifest(readManifest(args[1] ?? DEFAULT_MANIFEST));
      console.log(JSON.stringify(result, null, 2));
      process.exitCode = result.final_readiness === "READY" ? 0 : 1;
    } else { console.error("Usage: verify-seed.mjs [--manifest path | --self-test]"); process.exitCode = 2; }
  } catch {
    console.error("Seed validation stopped: local input or self-test invalid. No network operation occurred.");
    process.exitCode = 2;
  }
}
