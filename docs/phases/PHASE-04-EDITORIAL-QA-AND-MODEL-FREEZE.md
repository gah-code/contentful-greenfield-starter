# Phase 04 — Editorial QA + Model Freeze

## Status

| Scope | State |
| --- | --- |
| Phase 04 | ACTIVE BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 04.1 — Read-Only Planning + Editorial-Quality Preflight | APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 04.2 — Editorial QA Scenario + Temporary Authoring Contract | HISTORICALLY APPROVED / CHECKPOINTED AT `a85ebb37ef0f182b98d914221e70454cebb1351f`; NARROW AUTHORING-ENVELOPE CORRECTION RECONCILED |
| Batch 04.2 — Post-Checkpoint Truth-Surface Correction | IMPLEMENTATION COMPLETE / EXTERNAL VALIDATION PASS WITH NOTES / FINAL APPROVAL RECONCILIATION COMPLETE |
| Correction External Final Validation | COMPLETE / CHECKPOINT PREREQUISITE SATISFIED |
| Corrective checkpoint | ESTABLISHED AT `46ba9c0ee0a0cf0a09736aa867eb76619f44d702` |
| Batch 04.2 — Authoring-Envelope Correction | CHECKPOINTED AT `0e2057d26031d3ba7264810d00173713d83c11ef`; HISTORICAL 111 ENTRY-UPDATE CEILING PROVEN INSUFFICIENT / NOT REUSABLE FOR EXECUTION |
| Batch 04.3 — Controlled Temporary Editorial QA Execution | STARTED / STOPPED AFTER MUTATION AT R88 / POST-STOP FORENSICS COMPLETE / OPTION B SELECTED / GOVERNED PARTIAL QA CLEANUP COMPLETE / ZERO-CONTENT DEV BASELINE RESTORED / NOT COMPLETE |
| Batch 04.3 — Partial Authoring Incident + Deferral Reconciliation | IMPLEMENTATION COMPLETE / EXTERNAL VALIDATION PASS WITH NOTES / FINAL APPROVAL RECONCILIATION COMPLETE |
| Batch 04.3 — Post-Stop Forensic Findings + Recovery Decision checkpoint | ESTABLISHED AT `7f36c66e30b8a9297f3ee3a1a72baf76eef7d2a1` |
| Batch 04.3 — Partial QA Cleanup Result + Zero-Content Baseline Reconciliation | IMPLEMENTATION COMPLETE / EXTERNAL VALIDATION PASS WITH NOTES / FINAL APPROVAL RECONCILIATION COMPLETE / EXTERNAL FINAL VALIDATION REQUIRED PRE-COMMIT |
| Partial Authoring Incident + Deferral checkpoint | ESTABLISHED AT `93e4ff6dd995831af5d05475db02b1a60f027715` |
| Batch 04.3 — Local Asset Fixture Prerequisite | PDF CLASSIFICATION EXTERNAL FINAL VALIDATION PASS WITH NOTES / CHECKPOINT ESTABLISHED AT `2c590bf674759159061dcdc8700993adb96d321d` |
| Batch 04.3 — Fixture Post-Checkpoint Truth-Surface Correction | IMPLEMENTED / EXTERNAL VALIDATION PASS / FINAL APPROVAL RECONCILIATION COMPLETE / EXTERNAL FINAL VALIDATION PASS WITH NOTES / COMPLETE / CHECKPOINT `591725c3abdb0e829700cdbbb77a023628525781` ESTABLISHED |
| Batch 04.3 — First Truth Corrective Checkpoint Validation | GIT MECHANICS PASS / CANONICAL TRUTH CONSISTENCY NEEDS REVISION |
| Batch 04.3 — Closure-Semantics Correction | IMPLEMENTED / VALIDATED / CHECKPOINTED AT `503f1a6faee27062d0f3f3667b298fe37d62ffb2` / HISTORICAL |
| Batch 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections | LATER / DO NOT ADVANCE WHILE 04.3 IS UNRESOLVED |
| Batch 04.5 — Editorial Workflow + Field Guidance | LATER |
| Batch 04.6 — Model Freeze Validation + Phase 04 Closeout | LATER |

The Phase 04 transition and Batch 04.1 checkpoint are established at `33e01ae068769631b3bd997b28711535f7c7b340`. Batch 04.2 remains historically approved / checkpointed, and its Authoring-Envelope Correction is checkpointed at `0e2057d26031d3ba7264810d00173713d83c11ef`. A later separately authorized Batch 04.3 process started and consumed its one-time authorization with the TA-01 Asset upload. It created all 19 temporary Entries and 3 temporary Assets, then stopped fail-closed at R88 after response instrumentation recorded HTTP 422. The completed 14-GET-equivalent forensic gate confirmed the partial state and zero model drift; External Validation returned PASS WITH NOTES. Option B was selected. A separately authorized corrected cleanup then completed exactly 25 mutations with zero retries or replay and restored zero-content, zero-drift `dev`. Batch 04.3 remains incomplete. The historical 111 ceiling is proven insufficient and must not be reused.

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

That historical blank-`dev` evidence was superseded by the later controlled Batch 04.3 execution. The repository-only deferral reconciliation initially preserved only last-known evidence. The subsequent GET-only forensic gate confirmed ready `dev`, the exact zero-drift 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2 model, all 19 planned unpublished Entries, all 3 planned processed/published Assets, and no unexpected `qa04-` artifacts. The later governed cleanup final proof now controls current state: `master` remains ready and protected blank, while `dev` is ready with the same exact zero-drift model and 0 Entries / 0 Assets / 0 tags / no `qa04-` or unexpected artifacts.

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

State: HISTORICALLY APPROVED / CHECKPOINTED AT `a85ebb37ef0f182b98d914221e70454cebb1351f`; NARROW AUTHORING-ENVELOPE CORRECTION RECONCILED.

Canonical contract: `docs/system/EDITORIAL-QA-AND-TEMPORARY-AUTHORING-CONTRACT.md`.

Implementation evidence: `content-model/reports/PHASE-04-BATCH-04.2-EDITORIAL-QA-SCENARIO-AND-TEMPORARY-AUTHORING-CONTRACT.md`.

### 04.3 — Controlled Temporary Editorial QA Execution

Purpose: execute only externally approved temporary QA scenarios.

Operation class: CONTENTFUL MUTATION / SEPARATELY GATED.

Status: STARTED / CONTROLLED AUTHORING STOPPED AFTER MUTATION / POST-STOP FORENSICS COMPLETE / GOVERNED PARTIAL QA CLEANUP COMPLETE / ZERO-CONTENT DEV BASELINE RESTORED / NOT COMPLETE.

Preserved execution result:

```text
one guarded process
-> first mutation: TA-01 Asset upload
-> latest one-time authorization consumed
-> 19 Entries and 3 Assets created
-> R88 response instrumentation: HTTP 422
-> fail-closed STOP
-> partial state preserved
-> post-stop forensics complete / External Validation PASS WITH NOTES
-> 14 GET-equivalent requests / 0 writes / 0 retry or replay
-> exact model and 19 Entry / 3 Asset forensic-stage inventory confirmed
-> historical 111 execution ceiling proven insufficient
-> Option B selected
-> separate corrected cleanup: 19 Entry deletes + 3 Asset unpublishes + 3 Asset deletes
-> exact 25 cleanup mutations / 29 GET-equivalent / 0 retries or replay
-> zero-content, zero-drift dev baseline restored
```

The previous 04.3 authoring authorization remains historically GRANTED / UNCONSUMED but superseded and not reusable. The later authoring authorization is CONSUMED. The separate renewed cleanup authorization was consumed exactly once by the first `qa04-article-primary` Entry delete and is closed. Additional authoring, continuation, retry, repair, and cleanup are not authorized.

The required **Phase 04 / Batch 04.3 — Post-Stop Partial-State + Branch-Sensitive Forensics** gate is complete, externally validated with PASS WITH NOTES, and checkpointed at `7f36c66e30b8a9297f3ee3a1a72baf76eef7d2a1`. Its TE-09 evidence remains historical; the QA content was removed by the governed cleanup and no separate restoration occurred.

Partial QA Cleanup Result + Zero-Content Baseline Reconciliation implementation is COMPLETE, External Validation returned PASS WITH NOTES, and Final Approval Reconciliation is COMPLETE. External Final Validation is the required pre-commit gate. Only after it passes for this exact reconciled state may the containing commit establish the cleanup-result checkpoint.

The next **Phase 04 / Batch 04.3 — Guard + Branch-Safe Authoring / Evidence-Contract Correction Planning** gate is repository/local-only and requires External Checkpoint Validation PASS for the cleanup-result containing commit. It grants no Contentful authority.

If authoring fails unexpectedly, stop, preserve evidence, and do not automatically clean up.

### 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections

Purpose:

- reconcile 04.3 evidence;
- determine whether a model or Editor Interface correction is necessary;
- document `NO MODEL CORRECTION REQUIRED` when appropriate;
- perform corrections only when separately planned, externally validated, and explicitly authorized.

Operation class: repository reconciliation, plus conditional CMS/model mutation only when evidence requires it. This batch always exists even when no mutation is required. Batch 04.1 authorizes no correction.

Current restriction: do not advance Batch 04.4 while Batch 04.3 remains unresolved.

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
- Corrected historical authoring envelope: 19 Entry creates / 3 Asset creates / 111 Entry update absolute safety ceiling / maximum 3 Asset metadata updates / 3 planned ingestion operations / 3 Asset processing invocations / conditional readiness ceiling 15 / 4 Entry publish attempts / 2 successful Entry publishes / 3 Asset publishes / 0 unpublishes / 0 automatic mutation retries. Completed post-stop forensics proved 111 insufficient for branch-sensitive execution; it is historical and prohibited from reuse.
- Separate future cleanup envelope: 2 Entry unpublishes / 19 Entry deletes / 3 Asset unpublishes / 3 Asset deletes.
- Contentful calls during 04.2: 0.
- Contentful mutations during 04.2: 0.
- The Batch 04.2 corrective checkpoint is established at `46ba9c0ee0a0cf0a09736aa867eb76619f44d702`.

Repository-only fixture prerequisite:

- Initial 04.3 read-only pre-execution attempt: BLOCKED on missing approved local Asset sources.
- Fixture generation: COMPLETE externally.
- Wrong-path identity investigation: PASS / CLASS A.
- Exact four-file move to `content-model/fixtures/phase-04/`: IMPLEMENTED.
- Fixture-correction External Validation: PASS WITH NOTES.
- Fixture-correction Final Approval Reconciliation: COMPLETE.
- Fixture-location External Final Validation: PASS WITH NOTES.
- First fixture Git checkpoint attempt: BLOCKED BEFORE COMMIT because the exact PDF inherited text auto-detection; no commit / no push.
- PDF binary-classification correction: IMPLEMENTED with exact path-specific `.gitattributes` rule and unchanged fixture bytes.
- PDF classification External Validation: PASS.
- PDF classification Final Approval Reconciliation: COMPLETE.
- PDF classification External Final Validation: PASS WITH NOTES / COMPLETE.
- Corrected QA fixture checkpoint: ESTABLISHED AT `2c590bf674759159061dcdc8700993adb96d321d`.
- External checkpoint validation: GIT MECHANICS PASS / CANONICAL TRUTH CONSISTENCY NEEDS REVISION.
- External checkpoint validation reason: committed truth surfaces retained stale pre-checkpoint wording after the valid checkpoint existed.
- Fixture post-checkpoint truth-surface correction: IMPLEMENTED / EXTERNAL VALIDATION PASS / FINAL APPROVAL RECONCILIATION COMPLETE / EXTERNAL FINAL VALIDATION PASS WITH NOTES / COMPLETE / NO CONTENTFUL ACCESS / NO FIXTURE BYTE CHANGES.
- First truth corrective checkpoint: ESTABLISHED AT `591725c3abdb0e829700cdbbb77a023628525781`.
- First truth corrective external checkpoint validation: GIT MECHANICS PASS / CANONICAL TRUTH CONSISTENCY NEEDS REVISION.
- First truth corrective external checkpoint validation reason: self-invalidating pre-checkpoint wording for its own completed validation and checkpoint state.
- Closure-Semantics Correction: IMPLEMENTED / VALIDATED / CHECKPOINTED AT `503f1a6faee27062d0f3f3667b298fe37d62ffb2` / HISTORICAL.
- Evidence: `content-model/reports/PHASE-04-BATCH-04.3-LOCAL-ASSET-FIXTURE-PREPARATION.md`.
- Fresh full 04.3 read-only pre-execution rerun prerequisite: External Checkpoint Validation PASS for the Authoring-Envelope Correction containing commit.
- Contentful requests and mutations during fixture preparation: 0.
- Mutation remains NOT AUTHORIZED; seed remains NOT STARTED.

### Batch 04.3 QA Fixture Post-Checkpoint Truth-Surface Correction

Commit `2c590bf674759159061dcdc8700993adb96d321d` is valid and unchanged. External checkpoint validation returned Git mechanics PASS and canonical truth consistency NEEDS REVISION because committed surfaces retained stale pre-checkpoint wording. The repository-only correction completed External Validation, Final Approval Reconciliation, and External Final Validation without Contentful access or fixture-byte changes. Its first truth corrective checkpoint is established at `591725c3abdb0e829700cdbbb77a023628525781`; external validation passed Git mechanics but returned canonical truth consistency NEEDS REVISION because the commit retained self-invalidating pre-checkpoint wording.

### Batch 04.3 Closure-Semantics Correction

The Closure-Semantics Correction is implemented, validated, and checkpointed at `503f1a6faee27062d0f3f3667b298fe37d62ffb2`. Its gate sequence is historical and was satisfied before the later separately authorized authoring attempt stopped pre-write. Any fresh full 04.3 read-only pre-execution gate is now governed by the Authoring-Envelope Correction containing-commit rule below.

### Batch 04.2 Authoring-Envelope Correction

The controlled 04.3 authoring process stopped PRE-WRITE. The guarded process did not start, the first mutation was not invoked, and Contentful requests and writes remained zero. The first observed conflict was `QA04-PP-002`: its six one-at-a-time required-field omissions plus restoration exceeded TE-09's old maximum of 5.

The complete feasibility investigation is externally validated with PASS WITH NOTES. CLASS A is accepted: scenario semantics are sound and the Entry-update envelope was too low. The exact corrected per-entry maxima sum to 111, replacing the old 51 maximum. All 102 scenarios, the `56 / 36 / 2 / 8` owner split, 19 Entry IDs, 3 Asset IDs, EF-05, dependency order, publication contract, other operation maxima, migration, model, and fixtures remain unchanged.

The Authoring-Envelope Correction completed its validation and reconciliation gates and is checkpointed at `0e2057d26031d3ba7264810d00173713d83c11ef`. Its fresh read-only and authorization gates were later satisfied for the consumed controlled execution. The previous human authorization remains historically GRANTED / UNCONSUMED but superseded and MUST NOT BE REUSED.

Evidence: `content-model/reports/PHASE-04-BATCH-04.3-PRE-WRITE-CONTRACT-ENVELOPE-FEASIBILITY.md`.

### Batch 04.3 Partial Authoring Incident + Deferral

The Partial Authoring Incident + Deferral lifecycle is complete and its checkpoint is established at `93e4ff6dd995831af5d05475db02b1a60f027715`.

The later one-time authorized controlled execution started and consumed its authorization with the TA-01 Asset upload. One guarded process invocation created all 19 temporary Entries and all 3 temporary Assets. The Assets were processed and published. After 39 Entry update attempts and before any Entry publication attempt, R88 occurred in the mapped Rich Text negative-validation sequence. Response instrumentation recorded HTTP 422, while the guard's catch-path status extractor could not safely attribute that status and therefore stopped fail-closed.

The incident parking record captured `qa04-person-profile` at version 9, unpublished, with prohibited `heading-1` remaining in `longBio`; the intended restoration did not persist. At that historical reconciliation point, exact field-level R88 attribution and live state were not freshly revalidated. This remains historical evidence and is not a claim of schema defect or confirmed guard correction.

Scenario accounting is 28 PASS, 20 PASS WITH NOTE, and 54 NOT EXECUTED DUE STOP. No Entry was published, no authoring unpublish or delete occurred, and cleanup was not run. Evidence: `content-model/reports/PHASE-04-BATCH-04.3-PARTIAL-AUTHORING-INCIDENT-AND-DEFERRAL.md`.

### Batch 04.3 Post-Stop Forensic Findings + Recovery Decision

The repository-only reconciliation implementation, External Validation, Final Approval Reconciliation, External Final Validation, and containing checkpoint are complete. The forensic/recovery decision checkpoint is `7f36c66e30b8a9297f3ee3a1a72baf76eef7d2a1`.

The required read-only forensic gate is COMPLETE and External Validation returned PASS WITH NOTES. Fourteen GET-equivalent requests made 0 writes and 0 retry/replay. They freshly confirmed protected blank `master`; ready `dev`; the exact 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2 model with 0 localized fields, 0 tags, and 0 material drift; all 19 planned unpublished Entries; all 3 planned processed/published Assets; and no missing or unexpected `qa04-` artifacts.

At the forensic stage, TE-09 was version 9 and unpublished. Its `longBio` contained prohibited `heading-1`; `learningHighlights` was a valid paragraph document; `publicEmail` was valid; `resume` linked TA-03; and `socialLinks` linked the primary and ambiguous records. This historical state did not differ from the parked evidence. The QA content was later governedly removed; no separate restoration occurred.

R88 returned HTTP 422. Raw Axios evidence exposed status at `error.response.status` and details at `error.response.data.details`; the installed SDK transformed the rejection to a plain `Error` whose JSON message exposed status and details. The exact body is unrecoverable and field attribution remains unresolved. R88 atomically rejected the complete update: neither `longBio` restoration nor the next `learningHighlights` state persisted. Classification is a guard status-extraction defect; no schema defect is established.

The historical 111 update ceiling is proven insufficient and cannot authorize continuation or a new run. Full-run values 201 minimum branch-safe and 216 conservative no-sharing, plus continuation totals 173 / 186 after 39 attempts and 134 additional branch-safe updates, are planning bounds only. The current four-publication plan is insufficient for broad publication-blocker claims. Hard-validation evidence is 10 fully proven, 15 accepted-invalid/restored partial, 2 rejected-without-attribution partial, and 29 unexecuted, with 0 publication blockers proven. Guard behavior and the publication/validation evidence contract require redesign before any future authoring.

Option B — Cleanup + Full Restart was selected. At this forensic decision point, 19 unpublished Entry deletes plus 3 Asset unpublishes and 3 Asset deletes were planning evidence only, not authorization. Evidence: `content-model/reports/PHASE-04-BATCH-04.3-POST-STOP-FORENSICS-AND-RECOVERY-DECISION.md`.

### Batch 04.3 Partial QA Cleanup Result + Zero-Content Baseline

The first cleanup process blocked before Contentful client creation because ESM module instantiation requested a nonexistent default export from `contentful-management@12.10.0`. It made 0 Contentful requests and 0 mutations, did not consume cleanup authorization, and did not rerun. A local correction preflight verified the named `createClient` import and received External Validation PASS WITH NOTES without real credentials, Contentful access, or repository changes.

A renewed cleanup authorization was granted and consumed exactly once at `2026-08-25T23:12:34.032Z` by the first `entry.delete()` request for `qa04-article-primary`. One corrected guarded process deleted all 19 Entries in dependent-first order, then unpublished and deleted the 3 Assets in reverse-creation order. All Entry and Asset deletes returned HTTP 204; all Asset unpublishes returned HTTP 200 and version 4. The exact envelope was 19 Entry deletes + 3 Asset unpublishes + 3 Asset deletes = 25 mutations, with 29 GET-equivalent requests, 0 retries, and 0 replay.

Final proof established protected blank `master` and ready `dev` with the exact 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2 model, 0 localized fields, 0 material drift, 0 Entries, 0 Assets, 0 tags, and no `qa04-` or unexpected artifacts. External validation returned PASS WITH NOTES. The renewed cleanup authorization is consumed and closed; additional cleanup is not authorized. Batch 04.3 remains incomplete. Evidence: `content-model/reports/PHASE-04-BATCH-04.3-PARTIAL-QA-CLEANUP-EXECUTION.md`.

### Batch 04.2 Post-Checkpoint Truth-Surface Correction

External checkpoint validation confirmed Git mechanics PASS but returned NEEDS REVISION for canonical truth consistency because stale pre-checkpoint status survived checkpoint `a85ebb37ef0f182b98d914221e70454cebb1351f`. Correction implementation, validation, and reconciliation are complete, and the corrective checkpoint is established at `46ba9c0ee0a0cf0a09736aa867eb76619f44d702`. At that historical checkpoint, Batch 04.3 was next / not started.

That historical pre-execution gate was required to reverify Git/checkpoint state, migration integrity, protected blank `master`, expected recovered `dev`, zero existing reserved QA artifacts, the exact 19 Entry and 3 Asset identities, the Asset ingestion method and JPEG/PNG/PDF sources, processing path, readiness limit, retry semantics, authoring envelope, cleanup prohibition, and seed state. It was satisfied before the later consumed controlled execution.

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
The latest Batch 04.3 authoring authorization is CONSUMED. The separate renewed cleanup authorization is CONSUMED / CLOSED. Additional authoring, continuation, retry, repair, cleanup, schema correction, Editor Interface correction, migration, environment lifecycle, and seed remain unauthorized.

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
