import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const APPROVED_MIGRATION_SHA256 =
  "4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24";
const MIGRATION_PATH = fileURLToPath(
  new URL(
    "../../content-model/migrations/0001-bootstrap-portfolio-model.js",
    import.meta.url
  )
);

const REQUIRED_METRICS = Object.freeze({
  types: 10,
  fields: 99,
  references: 18,
  validations: 102,
  displayFields: 10,
  regex: 8,
  richText: 6,
  editorOverrides: 2,
  entries: 0,
  assets: 0,
  locale: "en-US",
});

const REQUIRED_TYPE_IDS = Object.freeze([
  "siteSettings",
  "personProfile",
  "socialLink",
  "navigationItem",
  "project",
  "article",
  "experienceItem",
  "skill",
  "skillGroup",
  "tool",
]);

const REQUIRED_DISPLAY_FIELDS = Object.freeze({
  siteSettings: "siteName",
  personProfile: "name",
  socialLink: "label",
  navigationItem: "label",
  project: "title",
  article: "title",
  experienceItem: "role",
  skill: "name",
  skillGroup: "name",
  tool: "name",
});

const REQUIRED_RICH_TEXT_FIELDS = Object.freeze([
  "personProfile.longBio",
  "personProfile.learningHighlights",
  "project.caseStudyBody",
  "article.body",
  "experienceItem.responsibilities",
  "experienceItem.achievements",
]);

const SLUG_PATTERN = "^[a-z0-9]+(?:-[a-z0-9]+)*$";
const EMAIL_PATTERN = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
const URL_PATTERN =
  "^https:\\/\\/(?:[A-Za-z0-9-]+\\.)+[A-Za-z]{2,}(?::[0-9]+)?(?:\\/[^\\s]*)?$";

const ALLOWED_TOP_LEVEL_KEYS = new Set([
  "contentTypes",
  "editorInterfaces",
  "locales",
  "entries",
  "assets",
  "tags",
  "roles",
  "webhooks",
]);
const EXCLUDED_ARRAY_KEYS = ["entries", "assets", "tags", "roles", "webhooks"];
const SECRET_KEY_NAMES = new Set([
  "apikey",
  "apikeys",
  "credential",
  "credentials",
  "accesstoken",
  "accesstokens",
  "managementtoken",
  "deliverytoken",
  "previewtoken",
  "webhooksecret",
  "secret",
  "secrets",
]);

const require = createRequire(import.meta.url);
let cachedContract;

function clone(value) {
  return value === undefined ? undefined : structuredClone(value);
}

class FieldCollector {
  constructor(id) {
    this.data = {
      id,
      name: null,
      type: null,
      linkType: null,
      localized: false,
      required: false,
      disabled: false,
      omitted: false,
      defaultValue: null,
      validations: [],
      items: null,
    };
  }

  name(value) {
    this.data.name = value;
    return this;
  }

  type(value) {
    this.data.type = value;
    return this;
  }

  linkType(value) {
    this.data.linkType = value;
    return this;
  }

  localized(value) {
    this.data.localized = value;
    return this;
  }

  required(value) {
    this.data.required = value;
    return this;
  }

  validations(value) {
    this.data.validations = clone(value);
    return this;
  }

  items(value) {
    this.data.items = clone(value);
    return this;
  }
}

class ContentTypeCollector {
  constructor(id, editorOverrides) {
    this.data = {
      id,
      name: null,
      description: null,
      displayField: null,
      fields: [],
    };
    this.editorOverrides = editorOverrides;
  }

  name(value) {
    this.data.name = value;
    return this;
  }

  description(value) {
    this.data.description = value;
    return this;
  }

  displayField(value) {
    this.data.displayField = value;
    return this;
  }

  createField(id) {
    const field = new FieldCollector(id);
    this.data.fields.push(field.data);
    return field;
  }

  changeFieldControl(fieldId, widgetNamespace, widgetId, settings = {}) {
    this.editorOverrides.push({
      contentTypeId: this.data.id,
      fieldId,
      widgetNamespace,
      widgetId,
      settings: clone(settings),
    });
    return this;
  }
}

class MigrationCollector {
  constructor() {
    this.contentTypes = [];
    this.editorOverrides = [];
  }

  createContentType(id) {
    const contentType = new ContentTypeCollector(id, this.editorOverrides);
    this.contentTypes.push(contentType.data);
    return contentType;
  }
}

function canonicalize(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, canonicalize(value[key])])
    );
  }

  return value;
}

function sameValue(left, right) {
  return JSON.stringify(canonicalize(left)) === JSON.stringify(canonicalize(right));
}

function normalizeItems(items) {
  if (!items) {
    return null;
  }

  return {
    type: items.type ?? null,
    linkType: items.linkType ?? null,
    validations: clone(items.validations ?? []),
  };
}

function normalizeField(field) {
  return {
    id: field.id ?? null,
    name: field.name ?? null,
    type: field.type ?? null,
    linkType: field.linkType ?? null,
    localized: Boolean(field.localized),
    required: Boolean(field.required),
    disabled: Boolean(field.disabled),
    omitted: Boolean(field.omitted),
    defaultValue: clone(field.defaultValue ?? null),
    validations: clone(field.validations ?? []),
    items: normalizeItems(field.items),
  };
}

function normalizeContentType(contentType) {
  return {
    id: contentType?.sys?.id ?? contentType?.id ?? null,
    name: contentType?.name ?? null,
    description: contentType?.description ?? null,
    displayField: contentType?.displayField ?? null,
  };
}

function countValidationObjects(contentTypes) {
  return contentTypes.reduce(
    (total, contentType) =>
      total +
      contentType.fields.reduce(
        (fieldTotal, field) =>
          fieldTotal +
          (field.validations?.length ?? 0) +
          (field.items?.validations?.length ?? 0),
        0
      ),
    0
  );
}

function authoredReferences(contentTypes) {
  return contentTypes.flatMap((contentType) =>
    contentType.fields
      .filter(
        (field) =>
          (field.type === "Link" && field.linkType === "Entry") ||
          (field.type === "Array" &&
            field.items?.type === "Link" &&
            field.items?.linkType === "Entry")
      )
      .map((field) => `${contentType.id}.${field.id}`)
  );
}

function regexpValidations(contentTypes) {
  return contentTypes.flatMap((contentType) =>
    contentType.fields.flatMap((field) =>
      [...(field.validations ?? []), ...(field.items?.validations ?? [])]
        .filter((validation) => validation.regexp)
        .map((validation) => ({
          field: `${contentType.id}.${field.id}`,
          regexp: validation.regexp,
        }))
    )
  );
}

function prohibitedRegexpCount(contentTypes) {
  return contentTypes.reduce(
    (total, contentType) =>
      total +
      contentType.fields.reduce(
        (fieldTotal, field) =>
          fieldTotal +
          [...(field.validations ?? []), ...(field.items?.validations ?? [])].filter(
            (validation) => Object.hasOwn(validation, "prohibitRegexp")
          ).length,
        0
      ),
    0
  );
}

function calculateMetrics(contentTypes, editorOverrides, data = {}) {
  return {
    types: contentTypes.length,
    fields: contentTypes.reduce((total, contentType) => total + contentType.fields.length, 0),
    references: authoredReferences(contentTypes).length,
    validations: countValidationObjects(contentTypes),
    displayFields: contentTypes.filter((contentType) => contentType.displayField).length,
    regex: regexpValidations(contentTypes).length,
    richText: contentTypes.reduce(
      (total, contentType) =>
        total + contentType.fields.filter((field) => field.type === "RichText").length,
      0
    ),
    editorOverrides: editorOverrides.length,
    entries: Array.isArray(data.entries) ? data.entries.length : 0,
    assets: Array.isArray(data.assets) ? data.assets.length : 0,
    locale: Array.isArray(data.locales) && data.locales.length === 1
      ? data.locales[0]?.code ?? null
      : null,
  };
}

function assertExpectedContract(metrics, contentTypes) {
  for (const [metric, required] of Object.entries(REQUIRED_METRICS)) {
    if (["entries", "assets", "locale"].includes(metric)) {
      continue;
    }
    if (metrics[metric] !== required) {
      throw new Error(`approved migration collector mismatch for ${metric}`);
    }
  }

  const typeIds = contentTypes.map((contentType) => contentType.id);
  if (!sameValue([...typeIds].sort(), [...REQUIRED_TYPE_IDS].sort())) {
    throw new Error("approved migration collector type IDs do not match v1 contract");
  }
}

function loadExpectedContract() {
  if (cachedContract) {
    return cachedContract;
  }

  const migrationSource = readFileSync(MIGRATION_PATH);
  const migrationHash = createHash("sha256").update(migrationSource).digest("hex");
  if (migrationHash !== APPROVED_MIGRATION_SHA256) {
    throw new Error("approved migration checksum mismatch");
  }

  delete require.cache[require.resolve(MIGRATION_PATH)];
  const migrationDefinition = require(MIGRATION_PATH);
  const collector = new MigrationCollector();
  migrationDefinition(collector);
  const metrics = calculateMetrics(collector.contentTypes, collector.editorOverrides);
  assertExpectedContract(metrics, collector.contentTypes);

  cachedContract = {
    contentTypes: collector.contentTypes,
    editorOverrides: collector.editorOverrides,
    metrics,
  };
  return cachedContract;
}

function mapById(items, getId) {
  const result = new Map();
  const duplicates = new Set();
  for (const item of items) {
    const id = getId(item);
    if (!id) {
      continue;
    }
    if (result.has(id)) {
      duplicates.add(id);
    }
    result.set(id, item);
  }
  return { result, duplicates: [...duplicates].sort() };
}

function compareContentTypes(actualContentTypes, expectedContentTypes, failures) {
  const actual = mapById(actualContentTypes, (item) => item?.sys?.id);
  const expected = mapById(expectedContentTypes, (item) => item.id);

  if (actual.duplicates.length > 0) {
    failures.push(`duplicate content type IDs: ${actual.duplicates.join(", ")}`);
  }

  const missingTypes = [...expected.result.keys()].filter((id) => !actual.result.has(id));
  const unexpectedTypes = [...actual.result.keys()].filter((id) => !expected.result.has(id));
  if (missingTypes.length > 0) {
    failures.push(`missing content type IDs: ${missingTypes.sort().join(", ")}`);
  }
  if (unexpectedTypes.length > 0) {
    failures.push(`unexpected content type IDs: ${unexpectedTypes.sort().join(", ")}`);
  }

  for (const [contentTypeId, expectedType] of expected.result) {
    const actualType = actual.result.get(contentTypeId);
    if (!actualType) {
      continue;
    }

    const expectedTypeSummary = normalizeContentType(expectedType);
    const actualTypeSummary = normalizeContentType(actualType);
    for (const property of ["name", "description", "displayField"]) {
      if (!sameValue(actualTypeSummary[property], expectedTypeSummary[property])) {
        failures.push(`content type mismatch: ${contentTypeId}.${property}`);
      }
    }

    const actualFields = mapById(actualType.fields ?? [], (field) => field?.id);
    const expectedFields = mapById(expectedType.fields, (field) => field.id);
    if (actualFields.duplicates.length > 0) {
      failures.push(
        `duplicate field IDs in ${contentTypeId}: ${actualFields.duplicates.join(", ")}`
      );
    }

    const missingFields = [...expectedFields.result.keys()].filter(
      (id) => !actualFields.result.has(id)
    );
    const unexpectedFields = [...actualFields.result.keys()].filter(
      (id) => !expectedFields.result.has(id)
    );
    if (missingFields.length > 0) {
      failures.push(`missing field IDs in ${contentTypeId}: ${missingFields.sort().join(", ")}`);
    }
    if (unexpectedFields.length > 0) {
      failures.push(
        `unexpected field IDs in ${contentTypeId}: ${unexpectedFields.sort().join(", ")}`
      );
    }

    for (const [fieldId, expectedField] of expectedFields.result) {
      const actualField = actualFields.result.get(fieldId);
      if (!actualField) {
        continue;
      }
      const expectedSummary = normalizeField(expectedField);
      const actualSummary = normalizeField(actualField);
      for (const property of Object.keys(expectedSummary)) {
        if (!sameValue(actualSummary[property], expectedSummary[property])) {
          failures.push(`field mismatch: ${contentTypeId}.${fieldId}.${property}`);
        }
      }
    }
  }
}

function contentTypeIdForEditorInterface(editorInterface) {
  return editorInterface?.sys?.contentType?.sys?.id ?? null;
}

function verifyEditorInterfaces(data, expected, failures) {
  const editorInterfaces = Array.isArray(data.editorInterfaces)
    ? data.editorInterfaces
    : [];
  const interfaceMap = mapById(editorInterfaces, contentTypeIdForEditorInterface);
  const missingInterfaces = REQUIRED_TYPE_IDS.filter(
    (id) => !interfaceMap.result.has(id)
  );
  const unexpectedInterfaces = [...interfaceMap.result.keys()].filter(
    (id) => !REQUIRED_TYPE_IDS.includes(id)
  );

  if (interfaceMap.duplicates.length > 0) {
    failures.push(`duplicate editor interface IDs: ${interfaceMap.duplicates.join(", ")}`);
  }
  if (missingInterfaces.length > 0) {
    failures.push(`missing editor interfaces: ${missingInterfaces.join(", ")}`);
  }
  if (unexpectedInterfaces.length > 0) {
    failures.push(`unexpected editor interfaces: ${unexpectedInterfaces.join(", ")}`);
  }

  const actualSlugControls = editorInterfaces.flatMap((editorInterface) =>
    (editorInterface.controls ?? [])
      .filter(
        (control) =>
          control.widgetNamespace === "builtin" && control.widgetId === "slugEditor"
      )
      .map((control) => ({
        contentTypeId: contentTypeIdForEditorInterface(editorInterface),
        fieldId: control.fieldId,
        widgetNamespace: control.widgetNamespace,
        widgetId: control.widgetId,
        settings: { trackingFieldId: control.settings?.trackingFieldId ?? null },
      }))
  );

  const expectedSlugControls = expected.editorOverrides.map((control) => ({
    ...control,
    settings: { trackingFieldId: control.settings?.trackingFieldId ?? null },
  }));
  const sortControls = (controls) =>
    [...controls].sort((left, right) =>
      `${left.contentTypeId}.${left.fieldId}`.localeCompare(
        `${right.contentTypeId}.${right.fieldId}`
      )
    );

  if (!sameValue(sortControls(actualSlugControls), sortControls(expectedSlugControls))) {
    failures.push("editor-interface slug overrides do not match project.slug/article.slug contract");
  }

  return actualSlugControls;
}

function verifyLocales(data, failures) {
  const locales = Array.isArray(data.locales) ? data.locales : [];
  if (locales.length !== 1) {
    failures.push(`locale count must be 1; detected ${locales.length}`);
    return null;
  }

  const locale = locales[0];
  if (locale?.code !== "en-US") {
    failures.push("default locale code must be en-US");
  }
  if (locale?.default !== true) {
    failures.push("en-US locale must be default");
  }
  if (locale?.fallbackCode !== null && locale?.fallbackCode !== undefined) {
    failures.push("en-US locale fallback must be none");
  }
  return locale?.code ?? null;
}

function verifyExcludedContent(data, failures) {
  for (const key of EXCLUDED_ARRAY_KEYS) {
    if (data[key] !== undefined && !Array.isArray(data[key])) {
      failures.push(`${key} must be absent or an empty array`);
    } else if (Array.isArray(data[key]) && data[key].length > 0) {
      failures.push(`${key} must be empty`);
    }
  }

  const unexpectedTopLevel = Object.keys(data).filter(
    (key) => !ALLOWED_TOP_LEVEL_KEYS.has(key)
  );
  if (unexpectedTopLevel.length > 0) {
    failures.push(`unexpected top-level categories: ${unexpectedTopLevel.sort().join(", ")}`);
  }
}

function findSecretBearingKeys(value, path = [], matches = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      findSecretBearingKeys(item, [...path, String(index)], matches)
    );
    return matches;
  }

  if (!value || typeof value !== "object") {
    return matches;
  }

  for (const [key, nestedValue] of Object.entries(value)) {
    const normalized = key.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (SECRET_KEY_NAMES.has(normalized)) {
      matches.push([...path, key].join("."));
    }
    findSecretBearingKeys(nestedValue, [...path, key], matches);
  }
  return matches;
}

function verifyRegexContract(contentTypes, failures) {
  const regex = regexpValidations(contentTypes);
  const patterns = regex.map((item) => item.regexp.pattern);
  const uniquePatterns = new Set(patterns);
  const countPattern = (pattern) => patterns.filter((value) => value === pattern).length;

  if (regex.length !== REQUIRED_METRICS.regex) {
    failures.push(`regexp validation count must be 8; detected ${regex.length}`);
  }
  if (prohibitedRegexpCount(contentTypes) !== 0) {
    failures.push("prohibitRegexp validations are not allowed");
  }
  if (uniquePatterns.size !== 3) {
    failures.push(`unique regexp pattern count must be 3; detected ${uniquePatterns.size}`);
  }
  if (countPattern(URL_PATTERN) !== 5) {
    failures.push(`URL regexp field count must be 5; detected ${countPattern(URL_PATTERN)}`);
  }
  if (countPattern(SLUG_PATTERN) !== 2) {
    failures.push(`slug regexp field count must be 2; detected ${countPattern(SLUG_PATTERN)}`);
  }
  if (countPattern(EMAIL_PATTERN) !== 1) {
    failures.push(`email regexp field count must be 1; detected ${countPattern(EMAIL_PATTERN)}`);
  }

  for (const { field, regexp } of regex) {
    const pattern = regexp.pattern ?? "";
    if (
      pattern.includes("(?=") ||
      pattern.includes("(?!") ||
      pattern.includes("(?<=") ||
      pattern.includes("(?<!")
    ) {
      failures.push(`RE2-incompatible lookaround in ${field}`);
    }
    if (/\\[1-9]/.test(pattern)) {
      failures.push(`RE2-incompatible backreference in ${field}`);
    }
    if (Object.hasOwn(regexp, "flags") && regexp.flags === null) {
      failures.push(`regexp flags must be omitted, not null, in ${field}`);
    }
  }

  return regex;
}

function verifyRichTextContract(contentTypes, failures) {
  const richTextFields = contentTypes.flatMap((contentType) =>
    contentType.fields
      .filter((field) => field.type === "RichText")
      .map((field) => `${contentType.id}.${field.id}`)
  );

  if (!sameValue([...richTextFields].sort(), [...REQUIRED_RICH_TEXT_FIELDS].sort())) {
    failures.push("Rich Text field set does not match approved six-field contract");
  }

  for (const contentType of contentTypes) {
    for (const field of contentType.fields.filter((item) => item.type === "RichText")) {
      for (const validation of field.validations ?? []) {
        const enabledNodeTypes = validation.enabledNodeTypes ?? [];
        if (enabledNodeTypes.includes("paragraph")) {
          failures.push(`unsupported Rich Text node paragraph in ${contentType.id}.${field.id}`);
        }
        if (enabledNodeTypes.includes("list-item")) {
          failures.push(`unsupported Rich Text node list-item in ${contentType.id}.${field.id}`);
        }
      }
    }
  }

  return richTextFields;
}

function contentTypesForMetrics(data) {
  return (Array.isArray(data.contentTypes) ? data.contentTypes : []).map((contentType) => ({
    id: contentType?.sys?.id ?? null,
    displayField: contentType?.displayField ?? null,
    fields: (contentType?.fields ?? []).map(normalizeField),
  }));
}

export function verifySnapshotData(data) {
  const failures = [];
  let expected;

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {
      ok: false,
      failures: ["snapshot root must be a JSON object"],
      metrics: null,
    };
  }

  try {
    expected = loadExpectedContract();
  } catch {
    return {
      ok: false,
      failures: ["approved migration contract could not be loaded or verified"],
      metrics: null,
    };
  }

  const actualContentTypes = Array.isArray(data.contentTypes) ? data.contentTypes : [];
  if (!Array.isArray(data.contentTypes)) {
    failures.push("contentTypes must be an array");
  }

  compareContentTypes(actualContentTypes, expected.contentTypes, failures);
  const slugControls = verifyEditorInterfaces(data, expected, failures);
  const locale = verifyLocales(data, failures);
  verifyExcludedContent(data, failures);

  const secretBearingKeys = findSecretBearingKeys(data);
  if (secretBearingKeys.length > 0) {
    failures.push(`secret-bearing keys are not allowed: ${secretBearingKeys.sort().join(", ")}`);
  }

  const normalizedContentTypes = contentTypesForMetrics(data);
  const regex = verifyRegexContract(normalizedContentTypes, failures);
  const richTextFields = verifyRichTextContract(normalizedContentTypes, failures);
  const metrics = calculateMetrics(normalizedContentTypes, slugControls, {
    entries: data.entries,
    assets: data.assets,
    locales: [{ code: locale }],
  });
  metrics.regex = regex.length;
  metrics.richText = richTextFields.length;

  for (const [metric, required] of Object.entries(REQUIRED_METRICS)) {
    if (metrics[metric] !== required) {
      failures.push(`${metric} must be ${required}; detected ${metrics[metric]}`);
    }
  }

  for (const [contentTypeId, displayField] of Object.entries(REQUIRED_DISPLAY_FIELDS)) {
    const contentType = normalizedContentTypes.find((item) => item.id === contentTypeId);
    if (contentType?.displayField !== displayField) {
      failures.push(`display field mismatch: ${contentTypeId} must use ${displayField}`);
    }
  }

  return {
    ok: failures.length === 0,
    failures: [...new Set(failures)],
    metrics,
  };
}

function printResult(result) {
  if (!result.ok) {
    console.error("Snapshot verification FAIL");
    for (const failure of result.failures) {
      console.error(`- ${failure}`);
    }
    return;
  }

  const rows = [
    ["types", result.metrics.types],
    ["fields", result.metrics.fields],
    ["references", result.metrics.references],
    ["validations", result.metrics.validations],
    ["display fields", result.metrics.displayFields],
    ["regex", result.metrics.regex],
    ["Rich Text", result.metrics.richText],
    ["editor overrides", result.metrics.editorOverrides],
    ["entries", result.metrics.entries],
    ["assets", result.metrics.assets],
    ["locale", result.metrics.locale],
  ];

  console.log("Snapshot verification PASS");
  console.log("");
  for (const [label, value] of rows) {
    console.log(`${label.padEnd(20)}${value}`);
  }
  console.log("");
  console.log("material failures   0");
}

export function verifySnapshotFile(snapshotPath, options = {}) {
  let data;

  if (!snapshotPath || !existsSync(snapshotPath)) {
    const result = {
      ok: false,
      failures: ["snapshot file does not exist"],
      metrics: null,
    };
    if (!options.quiet) {
      printResult(result);
    }
    return result;
  }

  try {
    data = JSON.parse(readFileSync(snapshotPath, "utf8"));
  } catch {
    const result = {
      ok: false,
      failures: ["snapshot file is not valid JSON"],
      metrics: null,
    };
    if (!options.quiet) {
      printResult(result);
    }
    return result;
  }

  const result = verifySnapshotData(data);
  if (!options.quiet) {
    printResult(result);
  }
  return result;
}

export function createSyntheticApprovedSnapshot() {
  const expected = loadExpectedContract();
  const overrideMap = new Map(
    expected.editorOverrides.map((control) => [
      `${control.contentTypeId}.${control.fieldId}`,
      control,
    ])
  );

  return {
    contentTypes: expected.contentTypes.map((contentType) => ({
      sys: { id: contentType.id },
      name: contentType.name,
      description: contentType.description,
      displayField: contentType.displayField,
      fields: contentType.fields.map((field) => ({
        ...clone(field),
        linkType: field.linkType ?? undefined,
        items: field.items ?? undefined,
      })),
    })),
    editorInterfaces: expected.contentTypes.map((contentType) => ({
      sys: { contentType: { sys: { id: contentType.id } } },
      controls: contentType.fields.flatMap((field) => {
        const override = overrideMap.get(`${contentType.id}.${field.id}`);
        return override
          ? [
              {
                fieldId: field.id,
                widgetNamespace: override.widgetNamespace,
                widgetId: override.widgetId,
                settings: clone(override.settings),
              },
            ]
          : [];
      }),
    })),
    locales: [
      {
        sys: { id: "en-US" },
        name: "English (United States)",
        code: "en-US",
        default: true,
        fallbackCode: null,
      },
    ],
    entries: [],
    assets: [],
    tags: [],
    roles: [],
    webhooks: [],
  };
}

const isMain = process.argv[1]
  ? pathToFileURL(process.argv[1]).href === import.meta.url
  : false;

if (isMain) {
  const snapshotPath = process.argv[2];

  if (!snapshotPath) {
    console.error(
      "Missing required snapshot path. Pass an explicit governed snapshot file."
    );
    process.exitCode = 1;
  } else {
    const result = verifySnapshotFile(snapshotPath);

    if (!result.ok) {
      process.exitCode = 1;
    }
  }
}
