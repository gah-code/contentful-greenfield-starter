# Phase 03 — Model Export + Serial Clean-Room Verification

Status: COMPLETE / FROZEN BY THE COMMIT CONTAINING THIS DOCUMENT

Current / next: Phase 04 — Editorial QA + Model Freeze — NEXT / NOT STARTED AFTER SUCCESSFUL PHASE 03 CLOSEOUT CHECKPOINT VERIFICATION

Owner: repository maintainer

## Purpose

Prove that the validated Phase 02 model can be exported as a governed model-only recovery snapshot, imported into freshly recreated `dev`, and validated with zero semantic drift while `master` remains blank and protected.

Phase 03 uses the existing two-environment topology. `master` is the permanent protected blank baseline; `dev` is the single rotating sandbox. Verification is a serial workflow state, not a third environment.

## Current State

| Item | State |
|---|---|
| Phase 02 | COMPLETE / FROZEN |
| Phase 03 | COMPLETE / FROZEN BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 03.1 | APPROVED |
| Batch 03.2 | APPROVED |
| Batch 03.3 | APPROVED / CHECKPOINTED |
| Snapshot naming/configuration correction | EXTERNALLY APPROVED / PASS WITH NOTES |
| Batch 03.4 | APPROVED / CHECKPOINTED |
| Batch 03.5 | APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 03.6 | APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT |
| Phase 04 | NEXT / NOT STARTED AFTER SUCCESSFUL CHECKPOINT VERIFICATION |
| `master` | ready; 0 types / 0 entries / 0 assets / 0 tags / `en-US`; default true / fallback null; protected |
| `dev` | ready; approved recovered v1 model; 10 types / 0 entries / 0 assets / 0 tags / `en-US`; zero material drift |
| Pre-export tooling | APPROVED |
| Export | COMPLETE / ONE AUTHORIZATION CONSUMED / EXIT 0 |
| Snapshot | CREATED / EXTERNALLY APPROVED FOR RECOVERY USE |
| Destructive rotation | COMPLETE EXACTLY ONCE / AUTHORIZATION CONSUMED |
| Second rotation | NOT AUTHORIZED |
| Import | EXECUTED EXACTLY ONCE / AUTHORIZATION CONSUMED / EXIT 1 AFTER HTTP 429 |
| Semantic recovery | PASS / `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT` / ZERO MATERIAL DRIFT |
| Second import / repair | NOT AUTHORIZED / NOT NEEDED FOR SEMANTIC RECOVERY |
| Seed | NOT STARTED |

## Batch 03.1 Result

External validation returned PASS WITH NOTES and approved Batch 03.1. The non-destructive preflight passed repository, canonical-state, migration-integrity, configuration, helper-syntax, and GET-only live-baseline gates. It identified three export-blocking tooling corrections:

- TG-01 — explicitly bind the environment-loaded Management credential through installed programmatic export/import APIs;
- TG-02 — explicitly exclude tags from the model-only export;
- TG-03 — expand snapshot verification to enforce all exact Phase 02 semantic invariants.

TG-04 does not require a repository lifecycle helper. Separately approved exact one-time CLI commands, explicit pre/post evidence, and the independent blank-state gate align with existing policy.

Those corrections were delegated to Batch 03.2. See `content-model/reports/PHASE-03-BATCH-03.1-EXPORT-CLEAN-ROOM-PREFLIGHT.md`.

## Batch 03.2 Closeout

Status: APPROVED

External validation: PASS WITH NOTES

TG-01: CORRECTED

TG-02: CORRECTED

TG-03: CORRECTED

TG-04: NO CORRECTION REQUIRED

Pre-export tooling: APPROVED

Actual export: NOT RUN

Snapshot: NOT CREATED

Destructive authorization: NOT GRANTED

Import: NOT RUN

Seed: NOT STARTED

The approved result preserves:

- TG-01 — CORRECTED: export/import use installed programmatic APIs with the environment-loaded Management credential and no persisted CLI authentication;
- TG-02 — CORRECTED: governed export explicitly excludes content, assets, tags, roles, and webhooks while preserving content types, editor interfaces, and locales;
- TG-03 — CORRECTED: local snapshot verification enforces the checksum-locked Phase 02 semantic contract and all approved aggregate invariants;
- TG-04 — NO CHANGE REQUIRED: future lifecycle work remains separately authorized exact commands with pre/post gates.

The positive synthetic fixture and all required negative mutations passed. Temporary fixtures remained outside the repository and were removed. No Contentful call, export, snapshot, import, lifecycle action, migration, bootstrap, or seed occurred. See `content-model/reports/PHASE-03-BATCH-03.2-TOOLING-HARDENING.md`.

Next: Batch 03.3 — Governed Model Export + Snapshot Validation.

Batch 03.3 requires its own explicit export authorization and does not authorize destructive `dev` rotation.

## Serial Gate Structure

```text
pre-export gate
✓

one governed export
✓

snapshot validation
✓

snapshot external approval
✓

approval reconciliation
✓

external reconciliation validation
✓

final approval reconciliation
✓

external final validation
✓

Batch 03.3 Git checkpoint
✓

03.4 read-only destructive preflight
✓

credential-path corrective gate
✓

destructive authorization
✓ CONSUMED

delete dev exactly once
✓

recreate dev from master exactly once
✓

STOP MUTATIONS
✓

independent blank-state validation
✓

external rotation validation
✓ PASS WITH NOTES

post-rotation truth reconciliation
✓

external reconciliation validation
✓ PASS WITH NOTES

final approval reconciliation
✓

external final validation
✓ PASS WITH NOTES

Batch 03.4 Git checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS DOCUMENT

03.5 snapshot import pre-execution gate
✓

retry-semantics corrective gate
✓

import authorization
✓ CONSUMED

JIT blank-state baseline
✓

single import invocation
✓ EXECUTED / EXIT 1 / 429 INCIDENT

STOP MUTATIONS
✓

post-failure GET-only forensics
✓

semantic clean-room comparison
✓ PASS / ZERO DRIFT

external semantic recovery validation
✓ PASS WITH NOTES

incident + recovery truth reconciliation
✓ COMPLETE

external reconciliation validation
✓ PASS WITH NOTES

final approval reconciliation
✓ COMPLETE

external final validation
✓ PASS WITH NOTES

Batch 03.5 Git checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS DOCUMENT

03.6 initial final-live validation
! EVIDENCE UNRECOVERABLE / RESULT UNRESOLVED / 0 WRITES / NO RETRY

03.6 corrective final-live validation
✓ PASS / 23 GETs / 0 WRITES

Phase 03 exit criteria
✓ 22 / 22 PASS

03.6 closeout reconciliation
✓ COMPLETE

Content Strategy scope correction
✓ COMPLETE

External Batch 03.6 Validation
✓ PASS WITH NOTES

Final Approval Reconciliation
✓ COMPLETE

External Final Validation
✓ PASS WITH NOTES

Batch 03.6 / Phase 03 closeout Git checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS DOCUMENT

Phase 03
✓ COMPLETE / FROZEN

Phase 04
-> NEXT / NOT STARTED AFTER SUCCESSFUL CHECKPOINT VERIFICATION
```

Each gate fails closed. No gate authorizes the next destructive or mutating action implicitly.

## Recovery Snapshot Contract

Include content types, editor interfaces, and locale configuration. Exclude entries, assets, tags, roles, webhooks, API keys, secrets, seed content, and unrelated space configuration.

The raw timestamped `dev` JSON snapshot remains ignored by Git under the existing repository policy. Capture its SHA-256 and sanitized validation evidence in a tracked Markdown report. Semantic comparison ignores only non-semantic CMA/runtime metadata.

## 03.3 Pre-Execution Attempt 1

Result: BLOCKED

Blocker: invalid local snapshot override

Stopped before: snapshot governance and the fresh live Contentful baseline

Contentful reads: 0

Contentful writes: 0

Export: 0

## Snapshot Naming + Configuration Contract Correction

Status: TRACKED IMPLEMENTATION EXTERNALLY APPROVED

External validation: PASS WITH NOTES

Final reconciliation: EXTERNALLY VALIDATED / PASS WITH NOTES

Corrective Git checkpoint: COMPLETE / COMMITTED / PUSHED / CLEAN 0 0

Human local selector correction: COMPLETE

Full 03.3 pre-execution gate: PASS WITH NOTES / EXTERNALLY VALIDATED

### Approved Selector Contract

- `CONTENTFUL_MODEL_SNAPSHOT` unset or blank: the export helper generates `contentful-model.dev.v1.<YYYYMMDDTHHMMSSZ>.json` using the current UTC timestamp.
- `CONTENTFUL_MODEL_SNAPSHOT` explicitly set: the value must match the governed `dev` v1 timestamp pattern and must not collide with an existing output.
- A fixed `current` snapshot alias is not an approved active default.
- Direct snapshot verification requires an explicit snapshot path.

The fixed `current` alias is historical only and is not an active default. The corrective-gate approval did not itself authorize export; the later full pre-execution gate and explicit one-time export authorization remained separate gates.

## Batch 03.3 Result

Status: APPROVED / CHECKPOINTED

Pre-execution gate: PASS WITH NOTES / EXTERNALLY VALIDATED

One-export authorization: CONSUMED

Export: COMPLETE / 1 TOP-LEVEL INVOCATION / EXIT 0

Snapshot: CREATED / LOCALLY VALIDATED / EXTERNALLY APPROVED FOR RECOVERY USE

Export + Snapshot Approval Reconciliation: PASS WITH NOTES / EXTERNALLY VALIDATED

Final Approval Reconciliation: COMPLETE

External Final Reconciliation Validation: PASS WITH NOTES

Batch 03.3: APPROVED

Checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT

Evidence: `content-model/reports/PHASE-03-BATCH-03.3-GOVERNED-MODEL-EXPORT-AND-SNAPSHOT-VALIDATION.md`

Current raw CMA environment evidence represented readiness through `sys.status.sys.id = ready`; `sys.state` was absent in the observed payload. Historical temporary checks that expected `sys.state` remain preserved as diagnostic evidence.

Exactly one governed model export from `dev` produced `contentful-model.dev.v1.20260819T210704Z.json` with SHA-256 `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`. The SDK internally retried three rate-limited GET requests inside that single top-level invocation; no second export operation occurred.

Semantic verification passed the exact 10 content types / 99 fields / 18 references / 102 validations / 10 display fields / 8 regex validations / 6 Rich Text fields / 2 editor overrides contract, with 0 entries, 0 assets, `en-US`, and 0 material failures. Structural validation found 0 secret-bearing keys and 0 excluded-category violations. External validation returned PASS WITH NOTES and approved the snapshot for recovery use.

At the Batch 03.3 checkpoint, destructive rotation, `dev` deletion/recreation, import, bootstrap, and seed remained unauthorized. Batch 03.4 read-only destructive preflight was the next gate; that checkpoint did not authorize destructive execution.

## Batch 03.4 Result

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT

External Final Validation: PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT

Checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT

Evidence: `content-model/reports/PHASE-03-BATCH-03.4-DESTRUCTIVE-DEV-ROTATION-AND-BLANK-STATE-VALIDATION.md`

Preflight history:

- Attempt 1 blocked before Contentful access because active safety truth surfaces were stale; reads, writes, and environment mutations were all 0.
- The safety correction was externally approved and checkpointed at `e7a613a7710e15050b5d5959d3e71b88f8598432`.
- Attempt 2 passed Gates A–J with 23 fresh GETs and 0 writes.
- Initial Gate K blocked because its probe loaded uncompiled CLI source rather than the installed compiled runtime.
- The corrective read-only credential gate selected the public `contentful-management` SDK path and made 0 Contentful requests.

Authorization and false-negative execution stop:

- explicit destructive authorization was granted;
- the first execution start blocked before Contentful access because a root-depth package check incorrectly required a direct dependency;
- that stop made 0 requests, 0 DELETE attempts, and 0 CREATE attempts;
- external review approved continuation of the still-unconsumed authorization without package changes.

Successful resumed execution:

- 13 JIT GETs reconfirmed exact `dev` + `master` topology, blank protected `master`, and the exact approved 10-type pre-deletion `dev` model;
- public `contentful-management` 12.10.0 was used with in-process credential binding;
- `dev` DELETE attempts: 1 / success;
- `dev` recreation attempts: 1 / success;
- source environment: `master`;
- mutation methods: one `DELETE` and one `PUT`;
- automatic destructive retries: 0;
- `master` mutations: 0;
- destructive authorization: CONSUMED.

Independent post-recreation validation:

- 14 GETs;
- 1 readiness poll;
- physical topology exactly `dev` + `master`;
- recreated `dev`: ready / 0 types / 0 entries / 0 assets / 0 tags / `en-US` / default true / fallback null;
- protected `master`: ready / 0 types / 0 entries / 0 assets / 0 tags / `en-US` / default true / fallback null;
- Contentful writes during verification: 0;
- blank-state validation: PASS;
- external validation: PASS WITH NOTES.

The approved snapshot remains local, Git-ignored, unchanged, and approved for recovery use. It represents the 10-type recovery model; it does not describe current live `dev`, which is intentionally blank.

Historical Batch 03.4 checkpoint state: post-rotation reconciliation was complete, external reconciliation validation returned PASS WITH NOTES, final approval reconciliation was complete, and external final validation approved the Git checkpoint. At that checkpoint, Batch 03.5 was next / not started; only its read-only pre-execution gate was next, and import was not authorized or run.

## Batch 03.5 Result

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT

External semantic recovery validation: PASS WITH NOTES

Evidence: `content-model/reports/PHASE-03-BATCH-03.5-SNAPSHOT-IMPORT-AND-CLEAN-ROOM-COMPARISON.md`

Pre-execution history:

- the initial Gate G stopped on a static-assertion false negative without import or mutation;
- the corrected read-only pre-execution gate passed;
- the retry-semantics corrective gate proved `contentful-import` 10.0.18, `contentful-management` 12.10.0, and `contentful-sdk-core` 9.4.5 used SDK-default `retryOnError = true` with `retryLimit = 0` and 0 effective automatic request replays;
- `CMA_MUTATING_RETRIES_DISABLED=PROVEN`.

Authorized execution:

- one explicit import authorization was granted for `dev` and the approved recovery snapshot;
- 13 JIT GETs reconfirmed blank `dev`, blank protected `master`, exact topology, and locale compatibility;
- exactly one top-level import invocation began, consuming the authorization;
- the command exited 1 after an HTTP 429 during Editor Interface import;
- automatic request replays: 0;
- low-level HTTP requests/writes internal to the single import invocation: not asserted;
- no second import, repair, reset, bootstrap, additional export, or seed followed.

Post-failure evidence:

- forensic mode: GET only;
- forensic GETs: 23;
- forensic writes, retries, and mutating requests: 0;
- topology: exactly `dev` + `master`;
- protected `master`: ready / blank / 0 types / 0 entries / 0 assets / 0 tags / `en-US`;
- current `dev`: ready / 10 types / 0 entries / 0 assets / 0 tags / `en-US`;
- all 10 approved type IDs are present and published;
- all 10 expected Editor Interfaces are present;
- missing or unexpected types and missing Editor Interfaces: none.

The checksum-anchored semantic verifier returned `ok = true`, 0 failures, and the exact 10 types / 99 fields / 18 references / 102 validations / 10 display fields / 8 regex validations / 6 Rich Text fields / 2 editor overrides contract. The post-failure classification is `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT`.

Import command outcome: FAILED OPERATIONALLY / EXIT 1 / HTTP 429.

Semantic recovery outcome: PASS.

Clean-room comparison: PASS / ZERO MATERIAL DRIFT.

External failed-import handling validation returned PASS ON FAIL-CLOSED HANDLING. External forensic validation passed, and external semantic recovery, reconciliation, and final validation returned PASS WITH NOTES. Final Approval Reconciliation is complete. No second import or repair is required to establish the approved semantic recovery state; both remain unauthorized. The commit containing this document establishes the Batch 03.5 checkpoint.

## Batch 03.6 Result

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT

Evidence: `content-model/reports/PHASE-03-BATCH-03.6-PHASE-03-VALIDATION-AND-CLOSEOUT.md`

Initial Gate F:

- result: unresolved evidence-capture incident;
- process: completed;
- terminal evidence: unrecoverable;
- semantic result: unresolved;
- writes: 0;
- retry: 0.

Corrective final-live validation:

- external corrective authorization: GET only;
- corrective validator invocations: 1;
- GET requests: 23;
- Contentful writes: 0;
- retries: 0;
- mutating requests: 0;
- result: PASS / externally accepted with notes.

Final validated state:

- physical topology: exactly `dev` + `master`;
- `master`: ready / blank / protected;
- `dev`: ready / approved recovered v1 model;
- all 10 approved content types: present and published;
- all 10 expected Editor Interfaces: found;
- semantic contract: 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2;
- entries / assets / tags: 0 / 0 / 0;
- locale: `en-US` / default true / fallback null;
- material drift: 0.

Content Strategy pointer correction: COMPLETE.

External Batch 03.6 validation: PASS WITH NOTES.

Final Approval Reconciliation: COMPLETE.

External Final Validation: PASS WITH NOTES / APPROVED FOR PHASE 03 CLOSEOUT GIT CHECKPOINT.

Phase 03 closeout checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT.

All 22 Phase 03 technical exit criteria pass. Closeout truth reconciliation and the Content Strategy pointer correction are complete. External Batch 03.6 validation and External Final Validation returned PASS WITH NOTES, and Final Approval Reconciliation is complete. The commit containing this document establishes Batch 03.6 as approved / checkpointed and Phase 03 as complete / frozen. Phase 04 is next / not started after successful checkpoint verification.

## Clean-Room Success Contract

The rebuilt `dev` must match the approved Phase 02 model exactly: 10 content types, 99 stored fields, 18 authored references, 102 validation objects, 10 display fields, 8 regexp validations, 6 Rich Text fields, 2 explicit editor-interface overrides, no missing/unexpected IDs, and zero material drift. It must remain at 0 entries / 0 assets / `en-US`.

`master` must remain untouched at 0 types / 0 entries / 0 assets / `en-US`.

## Failure Contract

A nonzero exit, partial schema, unexpected schema, entries/assets, or material drift stops the workflow. No automatic retry, manual repair, second import, additional reset, bootstrap, or seed is allowed without new explicit authorization.

## Batch Architecture

Batch 03.1 external approval established this Phase 03 sequence:

| Batch | Name | Status |
|---|---|---|
| 03.1 | Model Export + Serial Clean-Room Verification Preflight | APPROVED |
| 03.2 | Export, Import + Snapshot Verification Tooling Hardening | APPROVED |
| 03.3 | Governed Model Export + Snapshot Validation | APPROVED / CHECKPOINTED |
| 03.4 | Destructive Dev Rotation + Blank-State Validation | APPROVED / CHECKPOINTED |
| 03.5 | Snapshot Import + Clean-Room Comparison | APPROVED / CHECKPOINTED |
| 03.6 | Phase 03 Validation + Closeout | APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT |

Batch 03.3 final approval reconciliation and external final validation are complete. The commit containing this document establishes the checkpoint. The one-export authorization is consumed; no second export is authorized.

## Current Boundary

Phase 03 is complete / frozen by the commit containing this document after all 22 technical exit criteria passed and External Final Validation returned PASS WITH NOTES. Batch 03.5 remains approved / checkpointed with the operational exit 1 / HTTP 429 incident explicitly distinct from semantic recovery PASS and zero material drift. Batch 03.6 is approved / checkpointed by the containing commit. Phase 04 is next / not started after successful checkpoint verification. A second export, second import, second rotation, `dev` deletion/recreation, manual repair, bootstrap, and seed remain unauthorized. Package files, tooling, Phase 02 artifacts, and the ignored raw snapshot remain unchanged.
