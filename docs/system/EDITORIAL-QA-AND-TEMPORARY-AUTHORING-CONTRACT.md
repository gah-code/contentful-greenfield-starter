# Editorial QA + Temporary Authoring Contract

## Status

Phase 04 / Batch 04.2: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS CONTRACT, subject to External Final Validation and that future commit.

External Validation: PASS WITH NOTES. Final Approval Reconciliation: COMPLETE. This document is a repository-only plan. It authorizes no Contentful request or mutation. Batch 04.3 remains separately gated and not authorized.

## Purpose

Define the exact, countable editorial-QA scenarios and minimum disposable artifact set needed to test the approved v1 model in a future Batch 04.3. The contract separates Contentful validation, editorial guidance, future application behavior, and governance; bounds every planned mutation; and defines cleanup before any authoring begins.

## Governing Project Tracker Skill

Operational project context is assisted by `.codex/skills/contentful-greenfield-project-tracker/SKILL.md`. Canonical truth remains owned by the repository truth surfaces referenced by that skill.

## Frozen Starting Contract

| Metric | Frozen value |
| --- | ---: |
| Content types | 10 |
| Stored fields | 99 |
| Authored references | 18 |
| Validation objects | 102 |
| Display fields | 10 |
| Regexp validations | 8 |
| Rich Text fields | 6 |
| Explicit editor overrides | 2 |
| Localized fields | 0 |

- Migration: `content-model/migrations/0001-bootstrap-portfolio-model.js`
- Migration SHA-256: `4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`
- Recovery snapshot: `contentful-model.dev.v1.20260819T210704Z.json`
- Recovery snapshot SHA-256: `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`
- Model version: NOT YET FROZEN.

The 102 QA scenarios defined below and the frozen model's 102 Contentful validation objects are separate, independently derived counts. Their equality is coincidental: there is no one-scenario-per-validation invariant, and neither count constrains the other. Future scenario changes do not imply schema validation changes, and future schema validation changes do not imply scenario-count equality.

## Enforcement Owner Model

Every scenario has exactly one primary owner:

- `CONTENTFUL HARD VALIDATION`: field requiredness, type, range, size, enum, regexp, link target, MIME group, or per-type uniqueness enforced by the approved schema.
- `EDITORIAL GUIDANCE`: authoring quality, cross-field reasoning, ordering, semantic uniqueness, lifecycle discipline, and picker comprehension.
- `APPLICATION / FUTURE FRONTEND`: behavior that requires a delivery, preview, query, routing, or rendering layer that does not yet exist.
- `GOVERNANCE`: public safety, confidentiality, trust, rights, and approved content-policy decisions.

A secondary responsibility never changes the primary owner or scenario count.

## Scenario Design Rules

- IDs are stable and use `QA04-<type>-<number>`; `SS`, `PP`, `SL`, `NI`, `PR`, `AR`, `EX`, `SK`, `SG`, and `TL` map to the ten approved content types.
- Invalid hard-validation cases may be accepted as incomplete drafts by Contentful; the required result is a visible validation failure and publication blocker. A future gate must record the actual UI/API timing without redefining ownership.
- Scenario state is reached by bounded updates to the planned entries, not by creating a new entry per test.
- No scenario silently proves runtime behavior that does not exist.
- `TE-*` and `TA-*` identify the temporary Entry and Asset inventory defined below.
- `Yes` under future mutation means the scenario needs a separately authorized Batch 04.3 mutation. It is not present authorization.

## Complete QA Scenario Matrix

| Scenario ID | Type | Field / surface | Scenario | Test class | Primary enforcement owner | Secondary responsibility | Expected Contentful result | Expected editorial result | Required artifact | Future mutation needed | Cleanup impact | Failure significance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| QA04-SS-001 | siteSettings | `siteName`, `primaryNavigationItems` | Complete valid singleton draft | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept draft; publishable when dependencies are published | Required global identity is understandable | TE-12, TE-01 | Yes | Delete TE-12 | defect if valid values fail |
| QA04-SS-002 | siteSettings | `siteName` | Omit required site name | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Required message is clear | TE-12 | Yes | Restore before delete | defect if publishable |
| QA04-SS-003 | siteSettings | `primaryNavigationItems` | Use an empty required array | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Empty-state message is clear | TE-12 | Yes | Restore before delete | defect if publishable |
| QA04-SS-004 | siteSettings | navigation arrays | Reverse reference order and verify authored order | ordering | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept | Editor can predict primary/footer order | TE-12, TE-01, TE-02 | Yes | References removed with TE-12 | guidance defect |
| QA04-SS-005 | siteSettings | footer/social references | Add and remove optional references | valid | EDITORIAL GUIDANCE | CONTENTFUL HARD VALIDATION | Accept | Optional relationships are clearly optional and intentionally selected | TE-12, TE-01, TE-02, TE-03 | Yes | References removed with TE-12 | guidance defect if optional intent is unclear |
| QA04-SS-006 | siteSettings | display identity | Distinguish the intended singleton in lists/pickers | comprehension | EDITORIAL GUIDANCE | - | Accept | `siteName` gives clear identity | TE-12, TE-13 | Yes | Delete both | guidance/UI finding |
| QA04-SS-007 | siteSettings | singleton lifecycle | Create a second marked draft | lifecycle | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept draft; no duplicate-prevention claim | Editor recognizes duplicate and does not publish it | TE-13 | Yes | Delete TE-13 | guidance finding, not schema defect |
| QA04-PP-001 | personProfile | required identity/profile fields | Complete valid profile draft | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept draft; publishable with published image | Required workload is coherent | TE-09, TA-01 | Yes | Delete TE-09 | defect if valid values fail |
| QA04-PP-002 | personProfile | required fields | Omit name, title, positioning, short/long bio, or image one at a time | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Each required message identifies the missing field | TE-09 | Yes | Restore before delete | defect if publishable |
| QA04-PP-003 | personProfile | `publicEmail` | Enter malformed email | invalid | CONTENTFUL HARD VALIDATION | GOVERNANCE | Accept draft with validation; publish blocker | Invalid public address is rejected | TE-09 | Yes | Restore before delete | validation defect |
| QA04-PP-004 | personProfile | `longBio` | Author approved standard Rich Text | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept approved nodes; disallowed nodes block publication | Editor understands available structure | TE-09 | Yes | Delete TE-09 | Rich Text defect |
| QA04-PP-005 | personProfile | `learningHighlights` | Author optional simple Rich Text | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept approved nodes; disallowed nodes block publication | Narrow learning format is understandable | TE-09 | Yes | Delete TE-09 | Rich Text defect |
| QA04-PP-006 | personProfile | `resume` | Select PDF Asset | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept PDF | Resume selection is clear | TE-09, TA-03 | Yes | Delete TE-09 and TA-03 | defect if PDF rejected |
| QA04-PP-007 | personProfile | `resume` | Select image instead of PDF | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Wrong-file guidance is clear | TE-09, TA-01 | Yes | Restore before delete | validation defect |
| QA04-PP-008 | personProfile | `socialLinks` | Select and reorder reusable Social Links | ordering | EDITORIAL GUIDANCE | - | Accept | Labels distinguish choices and order is intentional | TE-09, TE-03, TE-04 | Yes | References removed with TE-09 | picker/guidance finding |
| QA04-PP-009 | personProfile | display identity | Confirm `name` identifies author references | comprehension | EDITORIAL GUIDANCE | - | Accept | Picker identity is unambiguous | TE-09, TE-10 | Yes | Delete both | picker finding |
| QA04-PP-010 | personProfile | singleton lifecycle | Create a second marked profile draft | lifecycle | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept draft; no duplicate-prevention claim | Editor recognizes duplicate and does not publish it | TE-10 | Yes | Delete TE-10 | guidance finding, not schema defect |
| QA04-PP-011 | personProfile | profile copy | Review public-safe positioning, work preference, and contact copy | comprehension | GOVERNANCE | EDITORIAL GUIDANCE | Accept structurally valid content | Open content decisions remain explicit | TE-09 | Yes | Delete TE-09 | governance/content finding |
| QA04-SL-001 | socialLink | required fields | Valid platform, label, public HTTPS URL, nonnegative order | valid | CONTENTFUL HARD VALIDATION | GOVERNANCE | Accept | Reusable destination is understandable | TE-03 | Yes | Delete TE-03 | defect if valid values fail |
| QA04-SL-002 | socialLink | `platform` | Use value outside enum | invalid | CONTENTFUL HARD VALIDATION | - | Accept draft with validation; publish blocker | Controlled choices are understandable | TE-03 | Yes | Restore before delete | validation defect |
| QA04-SL-003 | socialLink | `label` | Omit or exceed maximum label length | invalid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept draft with validation; publish blocker | Label guidance supports picker clarity | TE-03 | Yes | Restore before delete | validation defect |
| QA04-SL-004 | socialLink | `url` | Use HTTP, localhost, IP, relative, or malformed URL | invalid | CONTENTFUL HARD VALIDATION | - | Accept draft with validation; publish blocker | Structural public-HTTPS boundary is clear | TE-03 | Yes | Restore before delete | validation defect |
| QA04-SL-005 | socialLink | `url` | Use structurally valid but private, untrusted, or unsafe destination | comprehension | GOVERNANCE | APPLICATION / FUTURE FRONTEND | Accept if regexp-valid | Editor rejects destination on trust/public-safety grounds | TE-03 | Yes | Restore before delete | governance finding, not schema defect |
| QA04-SL-006 | socialLink | `sortOrder` | Use negative integer | invalid | CONTENTFUL HARD VALIDATION | - | Accept draft with validation; publish blocker | Nonnegative rule is clear | TE-03 | Yes | Restore before delete | validation defect |
| QA04-SL-007 | socialLink | `sortOrder` vs relationship order | Compare numeric fallback with authored array order | ordering | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept both | Editor understands relationship order is primary in arrays | TE-03, TE-04, TE-12 | Yes | Delete marked artifacts | guidance finding |
| QA04-SL-008 | socialLink | display identity | Distinguish similar reusable links by label | comprehension | EDITORIAL GUIDANCE | - | Accept | Labels are picker-safe | TE-03, TE-04 | Yes | Delete both | picker finding |
| QA04-NI-001 | navigationItem | `label`, `routeKey` | Valid label and approved route key | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept | Route choice and label are clear | TE-01 | Yes | Delete TE-01 | defect if valid values fail |
| QA04-NI-002 | navigationItem | `routeKey` | Use unapproved route key | invalid | CONTENTFUL HARD VALIDATION | - | Accept draft with validation; publish blocker | Allowed route choices are visible | TE-01 | Yes | Restore before delete | validation defect |
| QA04-NI-003 | navigationItem | `label` | Omit or exceed 40 characters | invalid | CONTENTFUL HARD VALIDATION | - | Accept draft with validation; publish blocker | Navigation label constraint is clear | TE-01 | Yes | Restore before delete | validation defect |
| QA04-NI-004 | navigationItem | `description` | Exceed optional 300-character limit | invalid | CONTENTFUL HARD VALIDATION | - | Accept draft with validation; publish blocker | Optional description limit is clear | TE-01 | Yes | Restore before delete | validation defect |
| QA04-NI-005 | navigationItem | route/label semantics | Pair misleading label with a valid route | comprehension | EDITORIAL GUIDANCE | GOVERNANCE | Accept | Editor recognizes semantic mismatch | TE-01 | Yes | Restore before delete | guidance finding |
| QA04-NI-006 | navigationItem | display identity | Distinguish navigation choices in arrays | comprehension | EDITORIAL GUIDANCE | - | Accept | Label is sufficient picker identity | TE-01, TE-02 | Yes | Delete both | picker finding |
| QA04-PR-001 | project | required model surface | Complete valid Project draft | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept; publishable after required dependencies | Approved required workload works | TE-16 and dependencies | Yes | Delete TE-16 | defect if valid draft fails |
| QA04-PR-002 | project | required workload | Assess title, slug, summary, type, role, problem, approach, outcome, hero image | comprehension | EDITORIAL GUIDANCE | - | Accept when populated | Editor understands why each field is required | TE-16 | Yes | Delete TE-16 | guidance/contract finding |
| QA04-PR-003 | project | required fields | Omit each required field one at a time | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Missing-field messages are actionable | TE-16 | Yes | Restore before delete | validation defect |
| QA04-PR-004 | project | `slug` editor | Generate from title, then make an intentional manual change | lifecycle | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept valid generated/manual values | Editor understands URL identity consequences | TE-16 | Yes | Delete TE-16 | workflow finding |
| QA04-PR-005 | project | `slug` | Test uppercase, spaces, underscore, full URL, route prefix, edge hyphen, double hyphen | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Lowercase route-segment rule is clear | TE-16 | Yes | Restore before delete | validation defect |
| QA04-PR-006 | project | `slug` uniqueness | Duplicate another Project slug | invalid | CONTENTFUL HARD VALIDATION | - | Same-type uniqueness failure; publish blocker | Duplicate conflict is visible | TE-16, TE-17 | Yes | Delete both | validation defect |
| QA04-PR-007 | project | `projectType`, `projectStatus` | Use values outside approved enums | invalid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Validation failure; publish blocker | Machine-style choices are understandable | TE-16 | Yes | Restore before delete | validation/UI finding |
| QA04-PR-008 | project | `tags` | Enter the same tag twice | invalid | EDITORIAL GUIDANCE | - | Accept duplicate values under current schema | Editor identifies and removes duplicate | TE-16 | Yes | Restore before delete | EF-05 guidance failure, not schema drift |
| QA04-PR-009 | project | `tags` | Enter more than 12 tags | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Maximum is visible | TE-16 | Yes | Restore before delete | validation defect |
| QA04-PR-010 | project | `tags` item | Enter a tag longer than 40 characters | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Item limit is visible | TE-16 | Yes | Restore before delete | validation defect |
| QA04-PR-011 | project | URL fields | Use valid public HTTPS destinations | valid | CONTENTFUL HARD VALIDATION | GOVERNANCE | Accept | Editor understands structural URL requirement | TE-16 | Yes | Delete TE-16 | defect if valid URL fails |
| QA04-PR-012 | project | URL fields | Use private/local or untrusted HTTPS destination | invalid | GOVERNANCE | APPLICATION / FUTURE FRONTEND | Accept if regexp-valid | Editor blocks unsafe destination | TE-16 | Yes | Restore before delete | governance finding |
| QA04-PR-013 | project | `heroImage`, optional images | Select valid image Asset; pair wrong-file case in Asset matrix | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept image; non-image is a publish blocker | Required image workflow is usable | TE-16, TA-01, TA-03 | Yes | Delete references/assets | Asset validation defect |
| QA04-PR-014 | project | `galleryImages` | Reorder two images | ordering | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept authored order | Editor understands gallery sequence | TE-16, TA-01, TA-02 | Yes | Delete references/assets | guidance/rendering finding |
| QA04-PR-015 | project | `caseStudyBody` | Exercise approved and prohibited Rich Text features | invalid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Approved nodes/marks accepted; prohibited nodes block publication | Toolbar and limits are comprehensible | TE-16, TA-01 | Yes | Delete TE-16 | Rich Text defect |
| QA04-PR-016 | project | related Experience/Projects | Select similar Experience and self-related Project records | comprehension | EDITORIAL GUIDANCE | - | Accept valid targets, including Project self-type links | Correct records can be distinguished | TE-16, TE-14, TE-15, TE-17 | Yes | Remove refs, delete entries | picker finding |
| QA04-PR-017 | project | Skills/Tools | Reuse and reorder capability/technology references | ordering | EDITORIAL GUIDANCE | - | Accept valid targets/order | Skill/Tool distinction and order are clear | TE-16, TE-05, TE-07 | Yes | Remove refs, delete entries | picker/guidance finding |
| QA04-PR-018 | project | SEO/route behavior | Record fallback, canonical, cross-type slug, and route consequences as deferred | comprehension | APPLICATION / FUTURE FRONTEND | - | N/A beyond accepting optional overrides | Editor owns only optional override inputs | TE-16, TE-18 | No | No extra cleanup | frontend contract risk |
| QA04-PR-019 | project | all public content | Review confidentiality, claims, metrics, media rights, and publication readiness | comprehension | GOVERNANCE | EDITORIAL GUIDANCE | Accept structurally valid content | Unsafe content is withheld | TE-16 | Yes | Delete TE-16 | governance failure |
| QA04-AR-001 | article | required model surface | Complete valid Article draft | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept; publishable after required dependencies | Core article workflow works | TE-18 and dependencies | Yes | Delete TE-18 | defect if valid draft fails |
| QA04-AR-002 | article | `authorProfile` | Omit author or use wrong target type | invalid | CONTENTFUL HARD VALIDATION | - | Required/target validation; publish blocker | Author selection is clear | TE-18, TE-09 | Yes | Restore before delete | reference validation defect |
| QA04-AR-003 | article | `body`, `publishDate` | Omit required body or date | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Required messages are actionable | TE-18 | Yes | Restore before delete | validation defect |
| QA04-AR-004 | article | `slug` editor | Generate from title, then make intentional manual change | lifecycle | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept valid generated/manual values | URL identity consequences are understood | TE-18 | Yes | Delete TE-18 | workflow finding |
| QA04-AR-005 | article | `slug` | Test invalid slug families from slug matrix | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Lowercase route-segment rule is clear | TE-18 | Yes | Restore before delete | validation defect |
| QA04-AR-006 | article | `slug` uniqueness | Duplicate another Article slug | invalid | CONTENTFUL HARD VALIDATION | - | Same-type uniqueness failure; publish blocker | Conflict is visible | TE-18, TE-19 | Yes | Delete both | validation defect |
| QA04-AR-007 | article | `contentPillar`, `category` | Use values outside approved enums | invalid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Validation failure; publish blocker | Controlled choices are understandable | TE-18 | Yes | Restore before delete | validation/UI finding |
| QA04-AR-008 | article | `tags` | Enter the same tag twice | invalid | EDITORIAL GUIDANCE | - | Accept duplicate values under current schema | Editor identifies and removes duplicate | TE-18 | Yes | Restore before delete | EF-05 guidance failure, not schema drift |
| QA04-AR-009 | article | `tags` | Exceed array maximum or item length | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Limits are visible | TE-18 | Yes | Restore before delete | validation defect |
| QA04-AR-010 | article | `body` | Exercise approved/prohibited Rich Text features | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Approved nodes/marks accepted; prohibited nodes block publication | Core writing toolbar is usable | TE-18, TA-01 | Yes | Delete TE-18 | Rich Text defect |
| QA04-AR-011 | article | image fields | Select valid images and test PDF rejection through Asset matrix | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Images accepted; PDF is a publish blocker | Picker and MIME feedback are clear | TE-18, TA-01, TA-02, TA-03 | Yes | Delete refs/assets | Asset validation defect |
| QA04-AR-012 | article | related Projects/Articles | Select related records, including similar Article titles | comprehension | EDITORIAL GUIDANCE | - | Accept valid targets and self-type links | Correct records can be distinguished | TE-18, TE-16, TE-19 | Yes | Remove refs, delete entries | picker finding |
| QA04-AR-013 | article | Skills/Tools | Reuse capability and technology records | comprehension | EDITORIAL GUIDANCE | - | Accept valid targets | Skill/Tool distinction remains clear | TE-18, TE-05, TE-07 | Yes | Remove refs, delete entries | picker finding |
| QA04-AR-014 | article | reference arrays | Reverse authored reference order | ordering | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept order | Editor understands intended sequence | TE-18 and references | Yes | Remove refs | guidance/rendering finding |
| QA04-AR-015 | article | SEO/route behavior | Record fallback, canonical, cross-type slug, and route consequences as deferred | comprehension | APPLICATION / FUTURE FRONTEND | - | N/A beyond accepting optional overrides | Editor owns only optional override inputs | TE-18, TE-16 | No | No extra cleanup | frontend contract risk |
| QA04-AR-016 | article | dates | Set `updatedDate` before `publishDate` | comprehension | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept | Editor recognizes chronology error | TE-18 | Yes | Restore before delete | guidance finding |
| QA04-AR-017 | article | public content | Review claims, attribution, confidentiality, links, and media rights | comprehension | GOVERNANCE | EDITORIAL GUIDANCE | Accept structurally valid content | Unsafe content is withheld | TE-18 | Yes | Delete TE-18 | governance failure |
| QA04-EX-001 | experienceItem | required model surface | Complete valid current-role draft | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept | Required work-history surface works | TE-14 | Yes | Delete TE-14 | defect if valid draft fails |
| QA04-EX-002 | experienceItem | required fields | Omit role, company, start date, summary, responsibilities, or achievements | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Missing-field messages are actionable | TE-14 | Yes | Restore before delete | validation defect |
| QA04-EX-003 | experienceItem | `employmentType` | Use value outside enum | invalid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Validation failure; publish blocker | Controlled choice is understandable | TE-14 | Yes | Restore before delete | validation/UI finding |
| QA04-EX-004 | experienceItem | current role dates | Set current true with empty end date | valid | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept | Correct current-role convention is understood | TE-14 | Yes | Delete TE-14 | guidance finding if unclear |
| QA04-EX-005 | experienceItem | current role dates | Set current true with populated end date | comprehension | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept | Editor identifies cross-field inconsistency | TE-14 | Yes | Restore before delete | guidance finding, not schema defect |
| QA04-EX-006 | experienceItem | chronology | Set end date before start date | comprehension | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept | Editor identifies chronology error | TE-14 | Yes | Restore before delete | guidance finding |
| QA04-EX-007 | experienceItem | `responsibilities` | Author approved simple Rich Text | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Approved nodes accepted; prohibited nodes block publication | Toolbar limits are clear | TE-14 | Yes | Delete TE-14 | Rich Text defect |
| QA04-EX-008 | experienceItem | `achievements` | Author approved simple Rich Text | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Approved nodes accepted; prohibited nodes block publication | Toolbar limits are clear | TE-14 | Yes | Delete TE-14 | Rich Text defect |
| QA04-EX-009 | experienceItem | `companyUrl` | Use structurally invalid URL | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Public-HTTPS boundary is clear | TE-14 | Yes | Restore before delete | validation defect |
| QA04-EX-010 | experienceItem | `companyUrl` | Use private/local or untrusted HTTPS destination | comprehension | GOVERNANCE | APPLICATION / FUTURE FRONTEND | Accept if regexp-valid | Editor blocks unsafe destination | TE-14 | Yes | Restore before delete | governance finding |
| QA04-EX-011 | experienceItem | `companyLogo` | Select PDF instead of image | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Wrong-file guidance is clear | TE-14, TA-03 | Yes | Restore before delete | Asset validation defect |
| QA04-EX-012 | experienceItem | Skills/Tools/Articles | Select, reuse, and reorder approved targets | ordering | EDITORIAL GUIDANCE | - | Accept valid targets/order | Relationship intent is clear | TE-14, TE-05, TE-07, TE-18 | Yes | Remove refs, delete entries | picker/guidance finding |
| QA04-EX-013 | experienceItem | display identity | Distinguish same/similar role entries in Project picker | comprehension | EDITORIAL GUIDANCE | - | Accept | Role display value is sufficiently clear or finding is recorded | TE-14, TE-15, TE-16 | Yes | Delete marked entries | EF-02 picker finding |
| QA04-SK-001 | skill | `name` | Valid required capability name | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept | Capability is clearly named | TE-05 | Yes | Delete TE-05 | defect if valid value fails |
| QA04-SK-002 | skill | `name` | Omit or exceed maximum length | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Required/length feedback is clear | TE-05 | Yes | Restore before delete | validation defect |
| QA04-SK-003 | skill | summaries | Use valid summary and proof-summary boundaries | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept within limits; excessive text blocks publication | Editor understands summary roles | TE-05 | Yes | Delete TE-05 | validation/guidance finding |
| QA04-SK-004 | skill | semantic identity | Create duplicate/near-duplicate capability name | comprehension | EDITORIAL GUIDANCE | GOVERNANCE | Accept | Editor consolidates duplicates | TE-05, TE-06 | Yes | Delete both | guidance/taxonomy finding |
| QA04-SK-005 | skill | display/reuse | Select Skill from Tool, Project, Article, Experience, and Skill Group | comprehension | EDITORIAL GUIDANCE | - | Accept valid targets | `name` supports reuse and picker clarity | TE-05 and consumers | Yes | Remove refs, delete entries | picker finding |
| QA04-SK-006 | skill | model scope | Confirm no proficiency score is requested or inferred | comprehension | GOVERNANCE | APPLICATION / FUTURE FRONTEND | N/A | Editor uses evidence, not unsupported scoring | TE-05 | No | No extra cleanup | governance/model-boundary risk |
| QA04-SG-001 | skillGroup | required model surface | Valid name with one or more Skills | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept | Group purpose is understandable | TE-11, TE-05 | Yes | Delete TE-11 | defect if valid draft fails |
| QA04-SG-002 | skillGroup | `skills` | Use empty required array | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Empty-state message is clear | TE-11 | Yes | Restore before delete | validation defect |
| QA04-SG-003 | skillGroup | `skills` | Reverse ordered membership | ordering | EDITORIAL GUIDANCE | APPLICATION / FUTURE FRONTEND | Accept order | Editor understands curated sequence | TE-11, TE-05, TE-06 | Yes | Remove refs, delete entries | guidance/rendering finding |
| QA04-SG-004 | skillGroup | `sortOrder` | Use negative integer | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Nonnegative rule is clear | TE-11 | Yes | Restore before delete | validation defect |
| QA04-SG-005 | skillGroup | `skills` | Add same Skill twice | comprehension | EDITORIAL GUIDANCE | - | Accept if current editor permits duplicate links | Editor removes duplicate membership | TE-11, TE-05 | Yes | Restore before delete | guidance finding |
| QA04-SG-006 | skillGroup | display identity | Confirm name distinguishes groups and members | comprehension | EDITORIAL GUIDANCE | - | Accept | Picker identity is clear | TE-11, TE-05, TE-06 | Yes | Delete marked entries | picker finding |
| QA04-TL-001 | tool | required model surface | Valid name, category, and usage context | valid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Accept | Technology record is understandable | TE-07 | Yes | Delete TE-07 | defect if valid draft fails |
| QA04-TL-002 | tool | `category` | Use value outside approved enum | invalid | CONTENTFUL HARD VALIDATION | EDITORIAL GUIDANCE | Validation failure; publish blocker | Machine-style choice is understandable | TE-07 | Yes | Restore before delete | validation/UI finding |
| QA04-TL-003 | tool | required fields | Omit name or usage context | invalid | CONTENTFUL HARD VALIDATION | - | Accept incomplete draft; publish blocker | Required messages are actionable | TE-07 | Yes | Restore before delete | validation defect |
| QA04-TL-004 | tool | `externalUrl` | Use invalid structural URL | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Public-HTTPS boundary is clear | TE-07 | Yes | Restore before delete | validation defect |
| QA04-TL-005 | tool | `externalUrl` | Use private/local or untrusted HTTPS destination | comprehension | GOVERNANCE | APPLICATION / FUTURE FRONTEND | Accept if regexp-valid | Editor blocks unsafe destination | TE-07 | Yes | Restore before delete | governance finding |
| QA04-TL-006 | tool | `logo` | Select PDF instead of image | invalid | CONTENTFUL HARD VALIDATION | - | Validation failure; publish blocker | Wrong-file guidance is clear | TE-07, TA-03 | Yes | Restore before delete | Asset validation defect |
| QA04-TL-007 | tool | `skills` | Select/reorder Skills and test duplicate link discipline | ordering | EDITORIAL GUIDANCE | - | Accept valid target/order | Capability relationships are clear | TE-07, TE-05, TE-06 | Yes | Remove refs, delete entries | picker/guidance finding |
| QA04-TL-008 | tool | semantic/display identity | Create duplicate/near-duplicate Tool name | comprehension | EDITORIAL GUIDANCE | GOVERNANCE | Accept | Editor consolidates duplicate technologies | TE-07, TE-08 | Yes | Delete both | picker/taxonomy finding |
| QA04-TL-009 | tool | Skill-vs-Tool boundary | Classify capability vs product/framework/software examples | comprehension | EDITORIAL GUIDANCE | GOVERNANCE | N/A beyond accepting record | Approved semantic distinction is understood | TE-05, TE-07 | No | No extra cleanup | model-comprehension finding |

## Rich Text QA Matrix

`paragraph` and `list-item` are intentionally absent from explicit `enabledNodeTypes`; they remain implicit primitives and must not be reintroduced solely because they are tested.

| Field | Scenario | Paragraph/list | Headings | Links | Marks | Quote/code | Asset embeds | Entry embeds | Publication implication |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `personProfile.longBio` | QA04-PP-004 | implicit / expected | H2/H3 allowed | allowed | not explicitly restricted | blockquote allowed; code not specifically enabled | rejected | rejected | disallowed explicit node is a blocker |
| `personProfile.learningHighlights` | QA04-PP-005 | implicit / expected | rejected | allowed | not explicitly restricted | rejected | rejected | rejected | disallowed explicit node is a blocker |
| `project.caseStudyBody` | QA04-PR-015 | implicit / expected | H2/H3 allowed | allowed | bold/italic/code | blockquote and code mark allowed | block Asset allowed | rejected | disallowed node/mark is a blocker |
| `article.body` | QA04-AR-010 | implicit / expected | H2/H3 allowed | allowed | bold/italic/code | blockquote and code mark allowed | block Asset allowed | rejected | disallowed node/mark is a blocker |
| `experienceItem.responsibilities` | QA04-EX-007 | implicit / expected | rejected | allowed | not explicitly restricted | rejected | rejected | rejected | disallowed explicit node is a blocker |
| `experienceItem.achievements` | QA04-EX-008 | implicit / expected | rejected | allowed | not explicitly restricted | rejected | rejected | rejected | disallowed explicit node is a blocker |

Editor comprehension evidence must record visible toolbar controls, successful paragraph/list authoring, and the observed validation behavior for prohibited nodes. Entry embeds are not approved anywhere.

## Reference + Picker QA Matrix

| Source field | Target | Cardinality | Required | Ordering | Target display field | Ambiguity risk | Scenario IDs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `siteSettings.primaryNavigationItems` | navigationItem | many | yes, min 1 | authored | `label` | similar labels | QA04-SS-001, 003, 004, QA04-NI-006 |
| `siteSettings.footerNavigationItems` | navigationItem | many | no | authored | `label` | similar labels | QA04-SS-004, 005 |
| `siteSettings.socialLinks` | socialLink | many | no | authored | `label` | similar labels/order precedence | QA04-SS-005, QA04-SL-007, 008 |
| `personProfile.socialLinks` | socialLink | many | no | authored | `label` | similar labels | QA04-PP-008, QA04-SL-008 |
| `project.skills` | skill | many | no | authored | `name` | near-duplicate names | QA04-PR-017, QA04-SK-004, 005 |
| `project.tools` | tool | many | no | authored | `name` | near-duplicate names | QA04-PR-017, QA04-TL-008 |
| `project.relatedExperience` | experienceItem | one | no | N/A | `role` | same role at similar companies | QA04-PR-016, QA04-EX-013 |
| `project.relatedProjects` | project | many | no | authored | `title` | similar titles/self-type choices | QA04-PR-016 |
| `article.authorProfile` | personProfile | one | yes | N/A | `name` | duplicate singleton drafts | QA04-AR-002, QA04-PP-009, 010 |
| `article.relatedProjects` | project | many | no | authored | `title` | similar titles | QA04-AR-012 |
| `article.relatedArticles` | article | many | no | authored | `title` | similar titles/self-type choices | QA04-AR-012, 014 |
| `article.skills` | skill | many | no | authored | `name` | near-duplicate names | QA04-AR-013, QA04-SK-005 |
| `article.tools` | tool | many | no | authored | `name` | near-duplicate names | QA04-AR-013, QA04-TL-008 |
| `experienceItem.skills` | skill | many | no | authored | `name` | near-duplicate names | QA04-EX-012, QA04-SK-005 |
| `experienceItem.tools` | tool | many | no | authored | `name` | near-duplicate names | QA04-EX-012, QA04-TL-008 |
| `experienceItem.relatedArticles` | article | many | no | authored | `title` | similar titles | QA04-EX-012, QA04-AR-012 |
| `skillGroup.skills` | skill | many | yes, min 1 | authored | `name` | duplicate/near-duplicate names | QA04-SG-002, 003, 005, 006 |
| `tool.skills` | skill | many | no | authored | `name` | duplicate/near-duplicate names | QA04-TL-007, QA04-SK-005 |

All 18 authored references are accounted for. No reverse authored relationship is added or implied.

## Slug QA Matrix

Each case applies independently to `project.slug` and `article.slug` through QA04-PR-004/005/006/018 and QA04-AR-004/005/006/015.

| Variant | Example | Expected Contentful result | Primary owner |
| --- | --- | --- | --- |
| Valid lowercase hyphenated | `qa04-clean-room-proof` | accept | CONTENTFUL HARD VALIDATION |
| Uppercase | `QA04-proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Spaces | `qa04 proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Underscore | `qa04_proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Full URL | `https://example.com/qa04-proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Route prefix | `projects/qa04-proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Leading hyphen | `-qa04-proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Trailing hyphen | `qa04-proof-` | publish blocker | CONTENTFUL HARD VALIDATION |
| Empty segment | `qa04--proof` | publish blocker | CONTENTFUL HARD VALIDATION |
| Same-type duplicate | two Projects or two Articles use `qa04-proof` | uniqueness blocker | CONTENTFUL HARD VALIDATION |
| Cross-type overlap | Project and Article both use `qa04-cross-type` | accept; route prefixes separate identity | APPLICATION / FUTURE FRONTEND |
| Generate from title | slug editor tracks `title` | valid generated value accepted | EDITORIAL GUIDANCE |
| Manual change | replace generated value with valid route segment | accept; downstream consequences deferred | EDITORIAL GUIDANCE |
| Redirect/canonical after change | N/A in CMS-only Phase 04 | not testable | APPLICATION / FUTURE FRONTEND |

Same-type uniqueness is hard Contentful validation. Cross-type reuse is allowed because Projects and Articles have distinct route prefixes.

## Asset + Accessibility QA Matrix

| Surface | QA plan | Primary owner | Expected result |
| --- | --- | --- | --- |
| Required image fields | Use TA-01 on profile and Project hero fields | CONTENTFUL HARD VALIDATION | image accepted; missing/wrong MIME blocks publication |
| Optional image fields | Reuse TA-01/TA-02 on logos, hero/social/gallery fields | CONTENTFUL HARD VALIDATION | image accepted; PDF rejected |
| Resume PDF | Use TA-03 on `personProfile.resume` | CONTENTFUL HARD VALIDATION | PDF accepted; image rejected |
| Asset title/description | Give every Asset a marked title and useful description | EDITORIAL GUIDANCE | picker and metadata are understandable |
| Contextual alt/decorative rendering | Record as deferred | APPLICATION / FUTURE FRONTEND | no universal `altText` field invented |
| Rights/confidentiality/public safety | Use synthetic non-sensitive files and review suitability | GOVERNANCE | unsafe/unlicensed material is not used |

## Singleton QA Matrix

| Type | Planned primary | Diagnostic duplicate | Expected Contentful behavior | Expected editorial behavior | Runtime claim |
| --- | --- | --- | --- | --- | --- |
| siteSettings | TE-12 | TE-13 | both marked drafts can exist unless observed otherwise | retain one canonical record; do not publish diagnostic | no duplicate-prevention claim |
| personProfile | TE-09 | TE-10 | both marked drafts can exist unless observed otherwise | retain one canonical record; do not publish diagnostic | no `limit=2` claim |

## EF-05 Resolution

**Externally validated: OPTION B — EDITORIAL / QA OWNERSHIP.**

- Primary owner: `EDITORIAL GUIDANCE`.
- Classification: `EF-05 = RESOLVED OWNERSHIP CLARIFICATION`.
- Schema: CORRECT AS IMPLEMENTED.
- Hard Contentful correction required: NOT REQUIRED.
- Live drift: NO.
- Batch 04.4 correction candidate from EF-05 alone: NO.

Evidence: the frozen editorial contract describes tag uniqueness, while Phase 02 migration evidence explicitly assigns uniqueness and semantic quality to editorial/QA and calls enforcement partial. Migration 0001 enforces array maximum 12 and Symbol item maximum 40 only. Installed `contentful-migration` schemas and `contentful-management` types expose generic validation objects, including a generic `unique` property, but local source provides no supported contract demonstrating duplicate-value distinctness within this Array-of-Symbol shape. The migration uses `unique: true` only for slug fields, where it means entry-field uniqueness, not distinct items within one array.

The Phase 02 downstream clarification now explicitly records duplicate tag values as an editorial QA rule without changing migration 0001 or the live schema. Contentful may technically accept duplicate values in these arrays; editorial QA must report them as failing the project's editorial-quality contract. That acceptance is not a schema defect.

## Temporary Artifact Identification Contract

Reserved marker: `qa04-`.

Local `contentful-management` 12.10.0 types expose `createEntryWithId(contentTypeId, id, data)` and `createAssetWithId(id, data)`, so deterministic Entry and Asset IDs are supported. Every display value also starts with `QA04` for human recognition. A future gate must fail closed if any reserved ID already exists; it must not overwrite, adopt, or clean it automatically.

## Temporary Entry Inventory

| Ref | Deterministic ID | Type | Display value | Dependencies | Scenario purpose | Lifecycle | Max updates | Cleanup |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| TE-01 | `qa04-navigation-home` | navigationItem | QA04 Home | none | valid/invalid route and label; ordering | draft | 2 | delete |
| TE-02 | `qa04-navigation-projects` | navigationItem | QA04 Projects | none | order and picker contrast | draft | 1 | delete |
| TE-03 | `qa04-social-primary` | socialLink | QA04 Primary Link | none | URL, platform, label, sort order | draft | 3 | delete |
| TE-04 | `qa04-social-ambiguous` | socialLink | QA04 Primary Link Similar | none | picker and ordering ambiguity | draft | 1 | delete |
| TE-05 | `qa04-skill-content-modeling` | skill | QA04 Content Modeling | none | valid Skill and reuse | draft | 2 | delete |
| TE-06 | `qa04-skill-content-modeling-near` | skill | QA04 Content Model Design | none | near-duplicate picker test | draft | 1 | delete |
| TE-07 | `qa04-tool-contentful` | tool | QA04 Contentful | TE-05/06, TA-01 | Tool validation and Skill links | draft | 3 | delete |
| TE-08 | `qa04-tool-contentful-near` | tool | QA04 Contentful Platform | none | near-duplicate picker test | draft | 1 | delete |
| TE-09 | `qa04-person-profile` | personProfile | QA04 Primary Profile | TA-01/03, TE-03/04 | singleton, Rich Text, media, author target | draft | 5 | delete |
| TE-10 | `qa04-person-profile-duplicate` | personProfile | QA04 Primary Profile Duplicate | TA-01 | singleton diagnostic/picker ambiguity | draft | 0 | delete |
| TE-11 | `qa04-skill-group` | skillGroup | QA04 Core Capabilities | TE-05/06 | required/ordered Skill membership | draft | 3 | delete |
| TE-12 | `qa04-site-settings` | siteSettings | QA04 Site Settings | TE-01/02/03/04 | singleton and global arrays | draft | 3 | delete |
| TE-13 | `qa04-site-settings-duplicate` | siteSettings | QA04 Site Settings Duplicate | TE-01 | singleton diagnostic | draft | 0 | delete |
| TE-14 | `qa04-experience-primary` | experienceItem | QA04 Content Architect | TE-05/07/18, TA-01 | dates, Rich Text, URLs, refs | draft | 5 | delete |
| TE-15 | `qa04-experience-similar-role` | experienceItem | QA04 Content Architect Similar | none | role-picker ambiguity | draft | 0 | delete |
| TE-16 | `qa04-project-primary` | project | QA04 Clean-Room Project | TE-05/07/14/17, TA-01/02 | complete Project QA | draft then one successful publish | 10 | unpublish then delete |
| TE-17 | `qa04-project-duplicate-slug` | project | QA04 Clean-Room Project Duplicate | TA-01 | same-type slug blocker/self picker | draft; one blocked publish attempt | 1 | delete |
| TE-18 | `qa04-article-primary` | article | QA04 Clean-Room Article | TE-09/16/19/05/07, TA-01/02 | complete Article QA | draft then one successful publish | 9 | unpublish then delete |
| TE-19 | `qa04-article-duplicate-slug` | article | QA04 Clean-Room Article Duplicate | TE-09 | same-type slug blocker/self picker | draft; one blocked publish attempt | 1 | delete |

Exact temporary Entry count: **19**. The per-entry update maxima sum to **51**. All values are synthetic QA markers, not portfolio seed content.

## Temporary Asset Inventory

| Ref | Deterministic ID | File class | Display title | Purpose | Expected metadata | Scenario IDs | Publish required | Cleanup |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TA-01 | `qa04-image-primary` | `image/jpeg` | QA04 Primary Image | required images, logos, Rich Text embed | marked title; useful neutral description | QA04-PP-001/007, QA04-PR-013/015, QA04-AR-010/011, QA04-EX-011, QA04-TL-006 | yes | unpublish/delete |
| TA-02 | `qa04-image-secondary` | `image/png` | QA04 Secondary Image | gallery order, optional images, picker contrast | marked title; distinct useful description | QA04-PR-014, QA04-AR-011 | yes | unpublish/delete |
| TA-03 | `qa04-resume-pdf` | `application/pdf` | QA04 Resume PDF | valid resume and wrong-file image tests | marked title; document description | QA04-PP-006, QA04-PR-013, QA04-AR-011, QA04-EX-011, QA04-TL-006 | yes | unpublish/delete |

Exact temporary Asset count: **3**. Each Asset may receive at most one metadata update after creation, for **3 Asset metadata updates** total. Ingestion and processing are counted separately below.

### Future Asset Lifecycle Boundary

The future Asset lifecycle is explicitly separated:

```text
Asset source acquisition
-> upload / ingestion
-> deterministic Asset creation
-> metadata update if required
-> processing
-> readiness confirmation
-> publication
```

- Asset ingestion/upload operations: maximum 3 planned; exact API operation type remains to be frozen.
- Asset creates: maximum 3.
- Asset metadata updates: maximum 3.
- Asset processing invocations: maximum 3, assuming one invocation per temporary Asset.
- Processing readiness checks: CONDITIONAL PLANNING CEILING of 15 GET-style checks, assuming no more than five checks per Asset.
- Asset publications: maximum 3.

Processing is not a generic Asset update. The 15-check ceiling is not an approved polling implementation or retry policy. Batch 04.3 read-only pre-execution must replace it with the exact reviewed bound for the selected installed SDK/API path. Unbounded polling and automatic retry are prohibited.

The exact ingestion method is not frozen by Batch 04.2. Before any Asset mutation authorization, Batch 04.3 pre-execution must identify the exact installed Contentful management API method; exact JPEG, PNG, and PDF source-file mechanisms; deterministic ID handling; upload/ingestion count; create count; processing count; readiness limit; publication count; retry semantics; and fail-closed behavior. No media binary is added by this contract.

## Dependency + Creation Order

```text
temporary QA Assets
-> Skills
-> Social Links + Navigation Items
-> Person Profile
-> Skill Groups + Tools
-> Site Settings
-> Experience Items
-> Projects
-> Articles
-> second-pass related/self references
```

Assets must exist before required media links. Skills have no dependencies and feed Tools, groups, and proof content. Social Links and Navigation Items feed singletons. Person Profile is required by Articles. Tools depend on Skills. Experience feeds Projects; Projects then feed Articles. Self-type and Article/Experience cross-references are applied only after both endpoints exist.

## Draft / Publish / Update Test Contract

- All 19 entries begin as drafts; invalid states are exercised through bounded updates and restored before later dependent checks.
- Entry updates are capped at 51 according to the inventory. Each update must cite its scenario ID in the evidence ledger.
- Publish TE-16 once to prove a valid Project with required references/media and approved Rich Text can complete core lifecycle.
- Publish TE-18 once to prove a valid Article with required author/body/date and approved Rich Text can complete core lifecycle.
- Attempt to publish TE-17 once and TE-19 once to prove same-type slug uniqueness blocks publication.
- Do not publish singleton, taxonomy, navigation, social, Tool, Skill, SkillGroup, or Experience QA entries merely to imitate a full site lifecycle.
- Publish TA-01, TA-02, and TA-03 once because published linked media is required for the two successful Entry lifecycle proofs and MIME/picker evidence.
- Authoring includes no Entry or Asset unpublish. Unpublish belongs only to the separate cleanup gate.

### Scenario Operation Classification

One mutation may provide evidence for multiple scenarios, but each scenario maps to an explicit operation class:

| Operation class | Scenario IDs / artifacts | Evidence proved |
| --- | --- | --- |
| Draft Entry create | TE-01 through TE-19, initially populated for QA04-NI-001/006, QA04-SL-001/008, QA04-SK-001/004, QA04-TL-001/008, QA04-PP-001/010, QA04-SG-001, QA04-SS-001/007, QA04-EX-001/013, QA04-PR-001/006, QA04-AR-001/006 | deterministic identity, baseline valid draft, diagnostic/duplicate records |
| Asset ingestion/create/metadata update | TA-01 through TA-03 | deterministic identity, source ingestion, MIME class, title/description, picker availability |
| Asset processing/readiness | TA-01 through TA-03 | one bounded processing invocation per Asset and exact pre-approved readiness checks |
| Invalid save/update attempt | all 39 matrix rows with test class `invalid` | observed editor/API validation timing and required publish blocker or editorial/governance finding |
| Valid/comprehension/ordering/lifecycle update | every `Future mutation needed = Yes` row not fully established by initial creation or invalid update | authoring usability, field semantics, order, Rich Text, references, singleton discipline, and public-safety review |
| Entry publish attempt | QA04-PR-001, QA04-PR-006, QA04-AR-001, QA04-AR-006 | two valid lifecycle successes and two same-type slug blockers |
| Successful Entry publication | QA04-PR-001, QA04-AR-001 | valid required Project and Article lifecycle |
| Asset publication | TA-01, TA-02, TA-03 | linked published media availability and MIME/picker evidence |
| Unpublish | none during authoring | reserved for the separate cleanup gate |
| No CMS operation | QA04-PR-018, QA04-AR-015, QA04-SK-006, QA04-TL-009 | deferred application/governance boundary recorded from contract evidence |

The per-entry maximum update allocation in the inventory is the controlling count. A future execution plan must map each actual update to all scenario IDs it covers before mutation.

## Future Batch 04.3 Mutation Envelope

PLANNING ONLY — NOT AUTHORIZATION.

Counts are maximum top-level operation attempts. Expected validation failures still consume their planned attempt; no failed operation may be retried automatically.

The 51 Entry updates are an absolute ceiling, not an expected count, required count, or field-change count. Every future Entry update must map to one or more approved `QA04-*` scenario IDs; the ceiling is not permission to improvise scenarios.

| Operation | Maximum planned count |
| --- | ---: |
| Entry creates | 19 |
| Asset creates | 3 |
| Entry updates | 51 |
| Asset metadata updates | 3 |
| Asset ingestion/upload operations | 3 planned maximum; exact operation type required in 04.3 pre-execution |
| Asset processing invocations | 3 |
| Processing readiness checks | 15 conditional planning ceiling |
| Entry publish attempts | 4 |
| Successful Entry publishes | 2 |
| Asset publishes | 3 |
| Unpublish operations | 0 |

Any required count increase needs a new contract and external review.

## Read-Only Evidence Requirements

Before authoring, a fresh separately approved gate must prove:

- clean synchronized repository and unchanged frozen checksums;
- explicit configured and resolved target is `dev`, never `master`;
- live model still matches 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2;
- `dev` entries, Assets, and tags are zero;
- all 22 reserved `qa04-` Entry/Asset IDs are absent;
- all 19 planned Entry identities and all 3 planned Asset identities match this contract exactly;
- Contentful credential presence is verified without printing secrets;
- the exact installed Asset ingestion and processing API path, exact JPEG/PNG/PDF sources, deterministic ID behavior, upload/create/process/publication counts, readiness-check limit, retry behavior, request capture, stop behavior, and complete mutation envelope are externally reviewed;
- cleanup remains not authorized and seed remains not started;
- human authorization is explicit and limited to the authoring envelope.

Execution evidence must record timestamp, target, scenario ID, artifact ID, operation, expected result, observed result, status/version, non-secret request/response summary, cumulative count, and stop decision.

## Failure / Stop Policy

Future Batch 04.3 is fail-closed:

```text
unexpected state -> STOP
unexpected validation behavior -> STOP
unexpected mutation result -> STOP
partial mutation -> STOP
HTTP/network failure -> STOP
wrong environment -> STOP
reserved QA artifact already present -> STOP
```

There is no automatic retry, repair, cleanup, fallback mutation, schema correction, or continuation after an unexpected result. Preserve partial-state evidence for external review.

## Cleanup Inventory Contract

A created-object ledger must record every deterministic ID, CMA version, publication state, dependencies, and scenarios. The final authoring evidence must derive the exact cleanup list from that ledger before cleanup is proposed.

Safe deletion order:

```text
unpublish published Articles and Projects
-> remove/resolve inbound second-pass references if required
-> delete Articles
-> delete Projects
-> delete Experience Items
-> delete Site Settings
-> delete Skill Groups + Tools
-> delete Person Profiles
-> delete Social Links + Navigation Items
-> delete Skills
-> unpublish Assets
-> delete Assets
```

## Separate Cleanup Gate

PLANNING ONLY — NOT AUTHORIZATION.

| Operation | Maximum planned count |
| --- | ---: |
| Entry unpublishes | 2 |
| Entry deletes | 19 |
| Asset unpublishes | 3 |
| Asset deletes | 3 |

Required future flow:

```text
04.3 authoring
-> evidence
-> external validation
-> exact cleanup inventory
-> separate read-only cleanup gate
-> external validation
-> explicit human cleanup authorization
-> exact cleanup
-> read-only zero-content proof
-> external validation
```

## Phase 04 QA vs Phase 05 Seed Boundary

Phase 04 QA artifacts are disposable, scenario-driven, minimal, visibly marked, non-public portfolio content, and fully accounted for before freeze. Phase 05 seed will be representative, public-safe, strategy-driven, portfolio-relevant, and intentionally drafted/published. No QA artifact may silently become seed. Phase 05 remains NOT STARTED.

## Explicitly Deferred Application Behavior

The following are not provable in this CMS-only batch: singleton `limit=2` diagnostics; canonical URL generation; redirects after slug changes; cross-type route resolution; metadata fallback; contextual image alt/decorative rendering; reverse derived relationships; sitemap; robots/indexability; structured data; breadcrumbs; preview exclusion; route 404 behavior; publication-state route behavior; and final reference rendering/order. They remain application/future-frontend responsibilities where applicable.

## Authorization Boundary

Entry and Asset creation/update/publish/unpublish/delete, schema and Editor Interface mutation, migration/bootstrap, export/import, environment lifecycle, cleanup, and seed are NOT AUTHORIZED. Batch 04.2 made zero Contentful requests and zero Contentful mutations.

## Batch 04.3 Entry Preconditions

Batch 04.3 becomes NEXT only after External Final Validation of this reconciliation, an approved Git checkpoint, and a clean synchronized `master` at `0 0`. Its first action is a READ-ONLY PRE-EXECUTION GATE, not mutation.

That gate must reverify clean Git state and the exact 04.2 checkpoint; Phase 04/04.2/04.3 state; migration checksum; protected blank `master`; expected recovered `dev`; zero existing reserved QA Entries/Assets; all 19 Entry and 3 Asset identities; the exact Asset ingestion method and file sources; processing path and readiness limit; retry semantics; complete authoring envelope; cleanup unauthorized; and seed not started. A successful read-only pre-execution gate still does not authorize mutation. The execution mechanism and evidence capture must then receive external review and explicit one-time human authorization. Cleanup remains excluded.
