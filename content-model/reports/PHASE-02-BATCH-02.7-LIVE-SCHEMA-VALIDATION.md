# Phase 02 / Batch 02.7 Live Schema Validation

Status: APPROVED / PHASE 02 CLOSEOUT EVIDENCE
Owner: Phase 02 - Content Model Contract + Bootstrap Migration

This report records sanitized read-only comparison evidence for the live `dev` schema. Canonical model truth remains in the approved ledgers and contracts under `docs/content-model/`.

## Approval Status

Phase:
Phase 02

Batch:
02.7 — Validation + Closeout

Status:
APPROVED

External validation:
PASS WITH NOTES

Material drift:
0

Phase 02 closeout:
APPROVED

## Scope

- Validate the live `dev` model against the complete approved Phase 02 v1 contract.
- Verify `master` remains a blank protected baseline.
- Record closeout evidence without changing Contentful.
- Preserve approved Phase 02 closeout evidence for the Phase 03 handoff.

Validation result: PASS with zero material contract drift.

Contentful operations: READ ONLY

Contentful writes: NONE

Migration: NOT RUN DURING 02.7

Seed: NOT STARTED

## Canonical Contract Inputs

- `docs/content-model/CONTENT-TYPE-LEDGER.md`
- `docs/content-model/FIELD-ID-LEDGER.md`
- `docs/content-model/REFERENCE-MAP.md`
- `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md`
- `content-model/migrations/0001-bootstrap-portfolio-model.js`
- `content-model/reports/PHASE-02-BATCH-02.5-MIGRATION-PREFLIGHT.md`
- `content-model/reports/PHASE-02-BATCH-02.6-BOOTSTRAP-EXECUTION.md`

Approved migration SHA-256:

`4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`

Checksum status: MATCH.

The field ledger contains 104 approved field IDs and semantic relationship intents. The approved reference map classifies five of those intents as derived reverse relationships that must not be authored: `project.relatedArticles`, `experienceItem.relatedProjects`, `tool.projects`, `tool.experience`, and `tool.articles`. The resulting approved stored-field contract is exactly 99 fields.

## Environment Evidence

| Environment | Exists | Status | Content Types | Entries | Assets | Locale | Role |
|---|---:|---|---:|---:|---:|---|---|
| `master` | Yes | ready | 0 | 0 | 0 | `en-US` | Protected blank baseline |
| `dev` | Yes | ready | 10 | 0 | 0 | `en-US` | Approved schema validation target |

- Configured environment: `dev`.
- Resolved live target: `dev`.
- `dev != master`: confirmed.
- Default locale: `en-US` in both environments.
- Locale fallback: none in both environments.
- Management credential: PRESENT; value not printed.
- A transient CMA rate limit occurred during read-only collection. The SDK retried GET requests only; the completed comparison is unaffected.

## Type Inventory

| Type ID | Name | Display Field | Published | Field Count | Status |
|---|---|---|---:|---:|---|
| `siteSettings` | Site Settings | `siteName` | Yes | 5 | PASS |
| `personProfile` | Person Profile | `name` | Yes | 15 | PASS |
| `socialLink` | Social Link | `label` | Yes | 4 | PASS |
| `navigationItem` | Navigation Item | `label` | Yes | 3 | PASS |
| `project` | Project | `title` | Yes | 24 | PASS |
| `article` | Article | `title` | Yes | 18 | PASS |
| `experienceItem` | Experience Item | `role` | Yes | 17 | PASS |
| `skill` | Skill | `name` | Yes | 3 | PASS |
| `skillGroup` | Skill Group | `name` | Yes | 4 | PASS |
| `tool` | Tool | `name` | Yes | 6 | PASS |

Exact-set comparison:

- approved types: 10;
- live types: 10;
- published types: 10;
- missing type IDs: 0;
- unexpected type IDs: 0.

## Field Inventory

Each row lists the exact contract and live field-ID set for the type. Every field was also compared individually for presence, primitive shape, link shape, requiredness, localization, disabled/omitted state, and validation payload.

| Type | Contract | Live | Exact Field IDs | Status |
|---|---:|---:|---|---|
| `siteSettings` | 5 | 5 | `siteName`, `siteDescription`, `primaryNavigationItems`, `footerNavigationItems`, `socialLinks` | PASS |
| `personProfile` | 15 | 15 | `name`, `primaryTitle`, `secondaryTitle`, `positioningStatement`, `shortBio`, `longBio`, `profileImage`, `publicEmail`, `location`, `availabilityStatus`, `workPreference`, `contactIntro`, `resume`, `learningHighlights`, `socialLinks` | PASS |
| `socialLink` | 4 | 4 | `platform`, `label`, `url`, `sortOrder` | PASS |
| `navigationItem` | 3 | 3 | `label`, `routeKey`, `description` | PASS |
| `project` | 24 | 24 | `title`, `slug`, `summary`, `projectType`, `projectStatus`, `role`, `contextSummary`, `problem`, `approach`, `outcome`, `caseStudyBody`, `metrics`, `heroImage`, `galleryImages`, `liveUrl`, `repositoryUrl`, `tags`, `seoTitle`, `seoDescription`, `socialImage`, `skills`, `tools`, `relatedExperience`, `relatedProjects` | PASS |
| `article` | 18 | 18 | `title`, `slug`, `excerpt`, `body`, `publishDate`, `updatedDate`, `contentPillar`, `category`, `tags`, `heroImage`, `seoTitle`, `seoDescription`, `socialImage`, `authorProfile`, `relatedProjects`, `relatedArticles`, `skills`, `tools` | PASS |
| `experienceItem` | 17 | 17 | `company`, `role`, `startDate`, `endDate`, `isCurrentRole`, `summary`, `responsibilities`, `achievements`, `location`, `employmentType`, `companyUrl`, `companyLogo`, `metrics`, `contextSummary`, `skills`, `tools`, `relatedArticles` | PASS |
| `skill` | 3 | 3 | `name`, `summary`, `proofSummary` | PASS |
| `skillGroup` | 4 | 4 | `name`, `description`, `sortOrder`, `skills` | PASS |
| `tool` | 6 | 6 | `name`, `category`, `usageContext`, `externalUrl`, `logo`, `skills` | PASS |

Totals:

- approved stored fields: 99;
- live stored fields: 99;
- missing field IDs: 0;
- unexpected field IDs: 0.

## Primitive Comparison

| Primitive / Shape | Contract | Live | Mismatches | Status |
|---|---:|---:|---:|---|
| Symbol | 34 | 34 | 0 | PASS |
| Text | 23 | 23 | 0 | PASS |
| Integer | 2 | 2 | 0 | PASS |
| Date | 4 | 4 | 0 | PASS |
| Boolean | 1 | 1 | 0 | PASS |
| RichText | 6 | 6 | 0 | PASS |
| Link -> Asset | 8 | 8 | 0 | PASS |
| Link -> Entry | 2 | 2 | 0 | PASS |
| Array -> Symbol | 2 | 2 | 0 | PASS |
| Array -> Link/Asset | 1 | 1 | 0 | PASS |
| Array -> Link/Entry | 16 | 16 | 0 | PASS |

Link types and array item shapes were normalized from CMA representation before comparison. Primitive mismatches: 0.

## Requiredness Comparison

| Metric | Contract | Live | Mismatches | Status |
|---|---:|---:|---:|---|
| Required fields | 40 | 40 | 0 | PASS |
| Optional fields | 59 | 59 | 0 | PASS |
| Required authored references | 3 | 3 | 0 | PASS |
| Optional authored references | 15 | 15 | 0 | PASS |

Every field's `required` state matches the final field/reference contract.

## Localization Comparison

| Metric | Contract | Live | Mismatches | Status |
|---|---:|---:|---:|---|
| Stored fields | 99 | 99 | 0 | PASS |
| Localized fields | 0 | 0 | 0 | PASS |

All approved v1 stored fields remain non-localized.

## Reference Comparison

| Source Field | Cardinality | Required | Target Restriction | Status |
|---|---|---:|---|---|
| `siteSettings.primaryNavigationItems` | Multi | Yes | `navigationItem` | PASS |
| `siteSettings.footerNavigationItems` | Multi | No | `navigationItem` | PASS |
| `siteSettings.socialLinks` | Multi | No | `socialLink` | PASS |
| `personProfile.socialLinks` | Multi | No | `socialLink` | PASS |
| `project.skills` | Multi | No | `skill` | PASS |
| `project.tools` | Multi | No | `tool` | PASS |
| `project.relatedExperience` | Single | No | `experienceItem` | PASS |
| `project.relatedProjects` | Multi | No | `project` | PASS |
| `article.authorProfile` | Single | Yes | `personProfile` | PASS |
| `article.relatedProjects` | Multi | No | `project` | PASS |
| `article.relatedArticles` | Multi | No | `article` | PASS |
| `article.skills` | Multi | No | `skill` | PASS |
| `article.tools` | Multi | No | `tool` | PASS |
| `experienceItem.skills` | Multi | No | `skill` | PASS |
| `experienceItem.tools` | Multi | No | `tool` | PASS |
| `experienceItem.relatedArticles` | Multi | No | `article` | PASS |
| `skillGroup.skills` | Multi | Yes | `skill` | PASS |
| `tool.skills` | Multi | No | `skill` | PASS |

Summary:

- approved authored references: 18;
- live authored references: 18;
- single references: 2;
- multi references: 16;
- cardinality mismatches: 0;
- target mismatches: 0;
- requiredness mismatches: 0;
- unexpected authored references: 0.

The five contract-designated reverse relationships remain absent as authored fields. Reverse views remain adapter/query responsibilities.

Asset fields also match the approved contract: 8 single Asset links and 1 Asset array. No standalone Media type, universal `altText` field, or public-safety boolean exists.

## Validation Comparison

Validation objects include field-level and array-item validation objects after normalized CMA comparison.

| Type | Contract Objects | Live Objects | Mismatches | Status |
|---|---:|---:|---:|---|
| `siteSettings` | 6 | 6 | 0 | PASS |
| `personProfile` | 15 | 15 | 0 | PASS |
| `socialLink` | 4 | 4 | 0 | PASS |
| `navigationItem` | 3 | 3 | 0 | PASS |
| `project` | 27 | 27 | 0 | PASS |
| `article` | 19 | 19 | 0 | PASS |
| `experienceItem` | 14 | 14 | 0 | PASS |
| `skill` | 3 | 3 | 0 | PASS |
| `skillGroup` | 5 | 5 | 0 | PASS |
| `tool` | 6 | 6 | 0 | PASS |
| **Total** | **102** | **102** | **0** | **PASS** |

- missing hard validations: 0;
- unexpected validation objects: 0;
- materially altered validation objects: 0;
- controlled-value set mismatches: 0;
- `navigationItem.routeKey` exact set: `home`, `about`, `work`, `projects`, `writing`, `tools`, `contact`.

All eight approved controlled-value families match exact allowed-value sets: `socialLink.platform`, `navigationItem.routeKey`, `project.projectType`, `project.projectStatus`, `article.contentPillar`, `article.category`, `experienceItem.employmentType`, and `tool.category`.

## Regex Comparison

| Family | Fields | Contract | Live | Status |
|---|---:|---:|---:|---|
| Structural HTTPS URL | 5 | 5 | 5 | PASS |
| Slug | 2 | 2 | 2 | PASS |
| Email | 1 | 1 | 1 | PASS |
| `regexp` total | 8 | 8 | 8 | PASS |
| `prohibitRegexp` total | 0 | 0 | 0 | PASS |
| Unique patterns | 3 | 3 | 3 | PASS |

Slug pattern:

`^[a-z0-9]+(?:-[a-z0-9]+)*$`

Email pattern:

`^[^\s@]+@[^\s@]+\.[^\s@]+$`

Regex safety:

- lookahead absent: yes;
- lookbehind absent: yes;
- backreferences absent: yes;
- `flags: null` absent: yes;
- regex mismatches: 0.

## Rich Text Comparison

| Field | Primitive | Required | Explicit Validation Match | Unsupported Prior Nodes Absent | Status |
|---|---|---:|---:|---:|---|
| `personProfile.longBio` | RichText | Yes | Yes | Yes | PASS |
| `personProfile.learningHighlights` | RichText | No | Yes | Yes | PASS |
| `project.caseStudyBody` | RichText | No | Yes | Yes | PASS |
| `article.body` | RichText | Yes | Yes | Yes | PASS |
| `experienceItem.responsibilities` | RichText | Yes | Yes | Yes | PASS |
| `experienceItem.achievements` | RichText | Yes | Yes | Yes | PASS |

`paragraph` and `list-item` remain absent from explicit `enabledNodeTypes`. Contentful implicit core Rich Text behavior was not treated as an explicit contract override.

## Display Field Comparison

| Type | Contract | Live | Status |
|---|---|---|---|
| `siteSettings` | `siteName` | `siteName` | PASS |
| `personProfile` | `name` | `name` | PASS |
| `socialLink` | `label` | `label` | PASS |
| `navigationItem` | `label` | `label` | PASS |
| `project` | `title` | `title` | PASS |
| `article` | `title` | `title` | PASS |
| `experienceItem` | `role` | `role` | PASS |
| `skill` | `name` | `name` | PASS |
| `skillGroup` | `name` | `name` | PASS |
| `tool` | `name` | `name` | PASS |

Display-field mismatches: 0.

## Editor Interface Comparison

The approved migration defines exactly two explicit editor-interface overrides. Default Contentful-generated controls are outside the equality comparison.

| Field | Contract Widget | Live Widget | Contract Settings | Live Settings | Status |
|---|---|---|---|---|---|
| `project.slug` | `builtin/slugEditor` | `builtin/slugEditor` | `trackingFieldId: title` | `trackingFieldId: title` | PASS |
| `article.slug` | `builtin/slugEditor` | `builtin/slugEditor` | `trackingFieldId: title` | `trackingFieldId: title` | PASS |

- explicit overrides expected: 2;
- explicit overrides detected: 2;
- missing overrides: 0;
- unexpected contract-relevant overrides: 0;
- mismatches: 0.

## Legacy Regression

Active legacy/unapproved model matches: 0.

Confirmed absent:

- standalone `seoMetadata`;
- `canonicalUrl`;
- `openGraphImage`;
- `noIndex`;
- `noFollow`;
- `metaKeywords`;
- `structuredData` / `schemaJson`;
- `readingTimeMinutes`;
- `proficiency`;
- standalone Media, Page, or PageSection types;
- generic page-builder fields such as `contentBlocks`;
- singleton enforcement fields such as `singletonId`, `isPrimary`, `isSingleton`, or `activeConfig`;
- nested SkillGroup reference;
- generic taxonomy type.

Project and Article each retain direct optional `seoTitle`, `seoDescription`, and `socialImage` fields. Skill retains no proficiency/percentage/rating field, and SkillGroup remains a flat grouping with the approved `skills` relationship.

## Master Protection

- `master` exists and is ready.
- `master` is not the configured or resolved validation target.
- `master` remains blank: 0 custom content types / 0 entries / 0 assets / `en-US`.
- No deep or mutating master operation was performed.
- Master mutation: NONE.

## Entries / Assets State

| Environment | Entries | Assets | Status |
|---|---:|---:|---|
| `master` | 0 | 0 | PASS |
| `dev` | 0 | 0 | PASS |

No fixtures or seed content exist. Singleton duplicate behavior and content-level route readiness cannot be exercised with zero entries.

## Drift Summary

| Contract Area | Expected | Live | Mismatches | Status |
|---|---:|---:|---:|---|
| Content types | 10 | 10 | 0 | PASS |
| Stored fields | 99 | 99 | 0 | PASS |
| Authored references | 18 | 18 | 0 | PASS |
| Localized fields | 0 | 0 | 0 | PASS |
| Display fields | 10 | 10 | 0 | PASS |
| Regex validations | 8 | 8 | 0 | PASS |
| Validation objects | 102 | 102 | 0 | PASS |
| Explicit editor controls | 2 | 2 | 0 | PASS |

Additional mismatch counts:

- missing type IDs: 0;
- unexpected type IDs: 0;
- missing field IDs: 0;
- unexpected field IDs: 0;
- primitive mismatches: 0;
- requiredness mismatches: 0;
- localization mismatches: 0;
- reference mismatches: 0;
- validation mismatches: 0;
- regex mismatches: 0;
- Rich Text mismatches: 0;
- display-field mismatches: 0;
- explicit editor-control mismatches: 0;
- legacy schema matches: 0.

Material drift total: 0.

## Enforcement Limitations

- Schema comparison does not prove editorial usability with representative content.
- Accessibility and public-safety quality require content and runtime validation.
- Singleton duplicate behavior cannot be exercised while `siteSettings` and `personProfile` have zero entries.
- Derived reverse query behavior remains an application/adapter responsibility.
- Private/local URL destination policy, public-safety interpretation, and semantic URL quality remain application, QA, and editorial-governance responsibilities beyond the structural HTTPS regex.
- Cross-field date consistency remains editor/application enforced where Contentful cannot express it.
- Contentful-generated default controls are not part of the explicit migration override contract.
- Clean-room export/import verification remains Phase 03 work.
- Seed content remains absent.

## Phase 02 Closeout Approval

Batch 02.7: APPROVED

External validation: PASS WITH NOTES

Phase 02: COMPLETE / FROZEN

Live contract: APPROVED / ZERO MATERIAL DRIFT

Phase 03 — Model Export + Serial Clean-Room Verification: NEXT / NOT STARTED

Phase 03 activated: NO

Seed started: NO

## Contentful Commands Executed

No Contentful CLI command was executed. Approved environment loading supplied credentials to temporary local validation helpers without printing values or passing tokens as CLI arguments.

| Command / Helper | Purpose | Target | Classification | Result |
|---|---|---|---|---|
| `node --env-file=.env.local scripts/contentful/check-env.mjs` | Validate target and credential presence | Local configuration | LOCAL / NON-MUTATING | PASS |
| Temporary CMA baseline helper using GET methods | Environment inventory and blank-state baseline | `master`, `dev` | READ ONLY | PASS |
| Temporary CMA contract comparator using GET methods | Types, entries, Assets, locales, fields, and editor interfaces | `dev` | READ ONLY | PASS / 0 material drift |

Successful live method families were limited to environment, content-type, entry, Asset, locale, and editor-interface GET operations. No raw API payload, environment ID, space ID, token, or credential value is stored in this report.

## Mutation Audit

| Operation | Result |
|---|---|
| Migration execution | NO |
| Bootstrap execution | NO |
| Content type mutation | NO |
| Field mutation | NO |
| Editor-interface mutation | NO |
| Entry mutation | NO |
| Asset mutation | NO |
| Locale mutation | NO |
| Environment mutation | NO |
| Master mutation | NO |
| Export/import | NO |
| Seed | NO |
