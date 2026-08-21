# Phase 04 — Editorial QA + Model Freeze

## Status

| Scope | State |
| --- | --- |
| Phase 04 | ACTIVE BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 04.1 — Read-Only Planning + Editorial-Quality Preflight | APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 04.2 — Editorial QA Scenario + Temporary Authoring Contract | APPROVED / CHECKPOINTED AT `a85ebb37ef0f182b98d914221e70454cebb1351f` |
| Batch 04.2 — Post-Checkpoint Truth-Surface Correction | IMPLEMENTATION COMPLETE / EXTERNAL VALIDATION PASS WITH NOTES / FINAL APPROVAL RECONCILIATION COMPLETE |
| Correction External Final Validation | REQUIRED PRE-COMMIT GATE |
| Corrective checkpoint | ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT AFTER EXTERNAL FINAL VALIDATION |
| Batch 04.3 — Controlled Temporary Editorial QA Execution | BEFORE CORRECTIVE CONTAINING COMMIT BLOCKED; AFTER SUCCESSFUL CHECKPOINT VERIFICATION NEXT / NOT STARTED WITH READ-ONLY PRE-EXECUTION FIRST |
| Batch 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections | LATER |
| Batch 04.5 — Editorial Workflow + Field Guidance | LATER |
| Batch 04.6 — Model Freeze Validation + Phase 04 Closeout | LATER |

The Phase 04 transition and Batch 04.1 checkpoint are established at `33e01ae068769631b3bd997b28711535f7c7b340`. Batch 04.2 External Validation and External Final Validation returned PASS WITH NOTES, and its checkpoint is established at `a85ebb37ef0f182b98d914221e70454cebb1351f`. External checkpoint validation passed Git mechanics but returned NEEDS REVISION because stale pre-checkpoint status remained on canonical surfaces. This Post-Checkpoint Truth-Surface Correction implementation is complete, External Validation returned PASS WITH NOTES, and Final Approval Reconciliation is complete. Correction External Final Validation is a required pre-commit gate, and the corrective checkpoint is established by the commit containing this document only after that validation. Before the corrective containing commit exists, Batch 04.3 remains blocked; after successful checkpoint verification it becomes next / not started.

## Purpose

Phase 04 proves editorial usability through controlled temporary authoring before representative Phase 05 seed content. It tests the approved recovered model as an authoring system, assigns enforcement ownership, reconciles evidence before any correction, documents editorial workflow, and records a model-freeze decision only after the required evidence exists.

Batch 04.1 was repository/read-only planning plus GET-only preflight validation. Its external validation result was PASS WITH NOTES. This approval does not authorize Contentful authoring or any other Contentful operation.

## Starting Contract

The Phase 04 starting point is the approved recovered Phase 03 model.

| Contract fact | Approved baseline |
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

Exact content type IDs:

- `siteSettings`
- `personProfile`
- `socialLink`
- `navigationItem`
- `project`
- `article`
- `experienceItem`
- `skill`
- `skillGroup`
- `tool`

Frozen bootstrap migration:

- path: `content-model/migrations/0001-bootstrap-portfolio-model.js`
- SHA-256: `4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`

Approved recovery snapshot:

- filename: `contentful-model.dev.v1.20260819T210704Z.json`
- SHA-256: `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`

Live state, **last freshly validated during Batch 04.1 preflight**:

- `master`: ready, protected blank baseline, 0 content types, 0 entries, 0 assets, 0 tags, `en-US`, default true, fallback null;
- `dev`: ready, approved recovered model, all 10 expected types published, 0 entries, 0 assets, 0 tags, `en-US`, default true, fallback null, 0 material drift;
- network audit: 23 GET, 0 retries, 0 POST, 0 PUT, 0 PATCH, 0 DELETE.

This evidence was not rerun during Final Approval Reconciliation. The reconciliation made zero Contentful calls.

## Phase 04 Batch Architecture

### 04.1 — Read-Only Planning + Editorial-Quality Preflight

Purpose:

- validate Phase 04 entry;
- confirm the frozen recovery model;
- inventory the editorial authoring surface;
- identify editorial-quality risks;
- plan controlled QA;
- establish the Phase 04 architecture.

Operation class: GET-only / repository reads.

State: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT.

### 04.2 — Editorial QA Scenario + Temporary Authoring Contract

Purpose:

- define exact authoring scenarios and expected Contentful behavior;
- assign one primary enforcement owner to every scenario;
- define temporary QA artifact identification and dependency order;
- define future create, publish, update, and maximum-scope boundaries where justified;
- define cleanup inventory rules and a separate cleanup gate;
- resolve EF-05 enforcement ownership before any 04.3 mutation authorization.

Operation class: REPOSITORY-ONLY. No Contentful mutation.

State: APPROVED / CHECKPOINTED AT `a85ebb37ef0f182b98d914221e70454cebb1351f`.

Canonical contract: `docs/system/EDITORIAL-QA-AND-TEMPORARY-AUTHORING-CONTRACT.md`.

Implementation evidence: `content-model/reports/PHASE-04-BATCH-04.2-EDITORIAL-QA-SCENARIO-AND-TEMPORARY-AUTHORING-CONTRACT.md`.

### 04.3 — Controlled Temporary Editorial QA Execution

Purpose: execute only externally approved temporary QA scenarios.

Operation class: CONTENTFUL MUTATION / SEPARATELY GATED.

Before the corrective containing commit: BLOCKED. After successful corrective checkpoint verification: NEXT / NOT STARTED. First action: READ-ONLY PRE-EXECUTION GATE. Mutation remains NOT AUTHORIZED.

Required authoring workflow:

```text
fresh read-only pre-execution gate
-> external validation
-> explicit human authorization
-> exact approved temporary QA authoring operations
-> immediate read-only evidence
-> STOP
-> external validation
```

Cleanup is not automatic. After QA evidence receives external validation, cleanup requires a separate gate, an exact temporary artifact inventory, separate explicit cleanup authorization, cleanup of only approved temporary entries/assets, read-only zero-content proof, and external validation.

If authoring fails unexpectedly, stop, preserve evidence, and do not automatically clean up.

### 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections

Purpose:

- reconcile 04.3 evidence;
- determine whether a model or Editor Interface correction is necessary;
- document `NO MODEL CORRECTION REQUIRED` when appropriate;
- perform corrections only when separately planned, externally validated, and explicitly authorized.

Operation class: repository reconciliation, plus conditional CMS/model mutation only when evidence requires it. This batch always exists even when no mutation is required. Batch 04.1 authorizes no correction.

### 04.5 — Editorial Workflow + Field Guidance

Purpose:

- document the authoring workflow, field guidance, and editorial lifecycle;
- capture validated authoring rules;
- prepare editor-facing quick-start material.

Operation class: REPOSITORY-ONLY. Contentful mutation remains prohibited unless a separately approved correction gate explicitly requires it.

### 04.6 — Model Freeze Validation + Phase 04 Closeout

Purpose:

- perform final read-only model/editorial validation;
- prove temporary QA content is removed or intentionally accounted for;
- reconcile the final model contract;
- explicitly record the model version/freeze decision;
- close Phase 04 only when all exit criteria pass.

Operation class: READ-ONLY + REPOSITORY RECONCILIATION. A new export or snapshot remains separately gated and is not implicitly authorized.

## Editorial QA Principles

- Test real authoring behavior, not schema shape alone.
- Assign one primary enforcement owner to every 04.2 scenario.
- Distinguish schema rejection from editorial, application, and governance rules.
- Temporary Phase 04 QA content is not Phase 05 representative seed content.
- Temporary QA cleanup requires separate review and authorization.
- Unexpected failures preserve evidence and trigger a stop; they do not trigger automatic cleanup.
- Model or Editor Interface corrections require direct evidence and a separate gate.
- Do not make a model correction solely to improve UI presentation without authoring evidence.
- Do not infer mutation authority from planning approval.

## Enforcement Owners

Every Batch 04.2 QA scenario must identify exactly one primary owner:

- `CONTENTFUL HARD VALIDATION`
- `EDITORIAL GUIDANCE`
- `APPLICATION / FUTURE FRONTEND`
- `GOVERNANCE`

Examples:

| Scenario | Primary owner |
| --- | --- |
| Invalid `projectType` enum | CONTENTFUL HARD VALIDATION |
| Duplicate tag | EDITORIAL GUIDANCE |
| Experience `endDate` before `startDate` | EDITORIAL GUIDANCE |
| Private or local HTTPS destination | GOVERNANCE |
| Canonical URL behavior | APPLICATION / FUTURE FRONTEND |

Contentful behavior is not a defect when the approved contract intentionally assigns enforcement elsewhere.

## EF-05 — Tag Uniqueness Ownership

Original observation: Project and Article tags are described as unique within an entry. The migration and live schema enforce array size and item length but do not directly enforce duplicate-value uniqueness.

Historical Phase 02 migration reconciliation records array-size and item-size validations, assigns uniqueness and semantic quality to editorial/QA, and classifies enforcement as PARTIAL.

Externally approved refined classification:

- KNOWN PHASE 02 CONTRACT / ENFORCEMENT OWNERSHIP AMBIGUITY
- NOT LIVE MODEL DRIFT
- NOT A 04.1 MODEL DEFECT
- NOT AUTHORIZATION FOR MODEL CORRECTION
- 04.2 REQUIRED INPUT
- 04.3 MUTATION AUTHORIZATION BLOCKED UNTIL OWNERSHIP IS RESOLVED

Batch 04.2 External Validation returned PASS WITH NOTES and accepted **Option B — EDITORIAL / QA OWNERSHIP**:

- primary owner: `EDITORIAL GUIDANCE`;
- classification: `EF-05 = RESOLVED OWNERSHIP CLARIFICATION`;
- schema: CORRECT AS IMPLEMENTED;
- model correction required from EF-05 alone: NO.

Migration 0001 enforces tag array size and item length but not duplicate-value distinctness. Phase 02 evidence explicitly assigns uniqueness and semantic quality to editorial/QA, and installed local package source/types provide no supported Array-of-Symbol duplicate-value validator contract. The schema is correct as implemented, live drift is NO, and EF-05 alone creates no Batch 04.4 correction candidate. A narrow downstream ownership clarification is now recorded in the frozen Phase 02 validation/editorial contract without changing migration 0001, schema semantics, or validation counts.

## Batch 04.2 Implementation Record

Status: External Validation PASS WITH NOTES / Final Approval Reconciliation COMPLETE / External Final Validation PASS WITH NOTES / CHECKPOINT ESTABLISHED AT `a85ebb37ef0f182b98d914221e70454cebb1351f`.

- Complete countable QA matrix: 102 scenarios.
- Frozen Contentful validation-object count: 102. Equality with the QA scenario count is coincidental; no one-to-one or coupled invariant exists.
- Primary-owner partition: 56 Contentful hard validation / 36 editorial guidance / 2 application or future frontend / 8 governance.
- Planned temporary inventory: 19 Entries / 3 Assets, all reserved under `qa04-` deterministic IDs.
- Future authoring envelope: 19 Entry creates / 3 Asset creates / 51 Entry update absolute ceiling / 3 Asset metadata updates / 3 planned ingestion operations / 3 Asset processing invocations / conditional readiness ceiling 15 / 4 Entry publish attempts / 2 successful Entry publishes / 3 Asset publishes / 0 unpublishes.
- Separate future cleanup envelope: 2 Entry unpublishes / 19 Entry deletes / 3 Asset unpublishes / 3 Asset deletes.
- Contentful calls during 04.2: 0.
- Contentful mutations during 04.2: 0.
- The correction External Validation returned PASS WITH NOTES and Final Approval Reconciliation is complete. External Final Validation remains a required pre-commit gate, and the corrective checkpoint is established by the commit containing this document only after that validation. Before that commit, Batch 04.3 remains blocked. After successful corrective checkpoint verification it becomes NEXT / NOT STARTED; its first action is a read-only pre-execution gate. Mutation remains NOT AUTHORIZED.

### Post-Checkpoint Truth-Surface Correction

External checkpoint validation confirmed Git mechanics PASS but returned NEEDS REVISION for canonical truth consistency because stale pre-checkpoint status survived checkpoint `a85ebb37ef0f182b98d914221e70454cebb1351f`. Correction implementation is COMPLETE, External Validation is PASS WITH NOTES, and Final Approval Reconciliation is COMPLETE. Correction External Final Validation is the required pre-commit gate. The corrective checkpoint is established by the commit containing this correction only after that validation; before that commit exists, Batch 04.3 remains blocked.

The 04.3 read-only gate must reverify Git/checkpoint state, migration integrity, protected blank `master`, expected recovered `dev`, zero existing reserved QA artifacts, the exact 19 Entry and 3 Asset identities, the exact Asset ingestion method and JPEG/PNG/PDF sources, processing path, exact readiness limit, retry semantics, authoring envelope, cleanup prohibition, and seed state. Passing that gate does not authorize mutation.

## Other Editorial Findings

- `experienceItem.role` remains the approved display field; hands-on reference-picker clarity testing is required.
- Field-level help/grouping is currently limited to the two explicit slug controls; guidance or UI changes require 04.3 evidence.
- Machine-style enum values require comprehension testing; no enum changes are approved.
- Cross-field chronology/current-role consistency remains editorial/application-owned where Contentful cannot enforce it.
- Project requiredness is substantial but intentional and must be tested before any relaxation.
- All six Rich Text fields remain approved. `paragraph` and `list-item` remain absent from explicit `enabledNodeTypes`; normal implicit behavior requires hands-on testing.
- Structural HTTPS validation remains schema-owned; private/local/trust policy remains governance/application-owned.

## Singleton Boundary

`siteSettings` and `personProfile` remain semantic singletons. Phase 04 may test editor-facing identification, whether multiple drafts can technically be created, whether instructions are understandable, and whether editorial discipline is sufficient.

No `singletonId`, `isPrimary`, `isSingleton`, `activeConfig`, or other duplicate-prevention field is approved. Phase 04 must not claim to prove future application `limit=2` duplicate diagnostics unless that runtime/query layer exists. Application duplicate diagnostics remain downstream responsibility.

## Migration Boundary

`content-model/migrations/0001-bootstrap-portfolio-model.js` is frozen and must not be edited during Phase 04 reconciliation.

If later evidence proves a model or Editor Interface correction is required:

- do not silently edit Contentful;
- do not rewrite migration 0001;
- prefer a new numbered migration under migration-first governance;
- define the exact artifact and plan in Batch 04.4;
- externally validate the plan before execution;
- explicitly authorize any live execution.

A likely next number is 0002, but no migration name or scope is approved and no 0002 migration is created by Batch 04.1. If a correction changes the recovery contract, a replacement export/snapshot requires its own gate and authorization.

## Model-Version Boundary

- Model version: NOT YET FROZEN.
- Current wording: Phase 04 freeze candidate / approved v1 model baseline / model freeze pending editorial QA.
- `v1.0.0` declaration: DEFERRED TO PHASE 04 CLOSEOUT EVIDENCE.

Batch 04.1 does not approve a version, tag the repository, or rename the recovery snapshot. Batch 04.6 may record a version only when Phase 04 evidence supports it.

## Authorization Rules

| Operation | Current authorization |
| --- | --- |
| Editorial QA entry create/update/publish/unpublish/delete | NOT AUTHORIZED |
| Asset ingestion/upload/create/metadata update/process/publish/delete | NOT AUTHORIZED |
| Schema mutation | NOT AUTHORIZED |
| Editor Interface mutation | NOT AUTHORIZED |
| Migration execution or additional bootstrap | NOT AUTHORIZED |
| Export or snapshot creation | NOT AUTHORIZED |
| Import | NOT AUTHORIZED |
| Environment deletion/recreation | NOT AUTHORIZED |
| Manual repair | NOT AUTHORIZED |
| Seed | NOT STARTED |

No previous Phase 02 or Phase 03 one-time authorization is reusable.

## Phase 04 Exit Intent

Phase 04 exit criteria are not yet passed. Phase 04 may close only after:

- core authoring scenarios are exercised;
- validation behavior is understood;
- reference-picker usability is validated;
- Rich Text authoring is validated;
- the Asset/accessibility workflow is validated to Phase 04 scope;
- any approved corrections are reconciled;
- editorial guidance exists;
- temporary QA content is removed or intentionally accounted for;
- final model validation passes;
- the model version/freeze decision is explicitly recorded;
- all truth surfaces align.
