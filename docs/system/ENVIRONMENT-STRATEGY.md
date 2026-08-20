# Environment Strategy

Status: Phase 00 complete; Phase 02 complete / frozen; Phase 03 active; Batches 03.1 and 03.2 approved; Batches 03.3 through 03.5 approved / checkpointed; Batch 03.6 next / not started after successful checkpoint verification
Owner: Phase 00 — Baseline + Two-Environment Setup
Canonical environment topology: `master` + `dev`

## Current Physical Topology

| Environment | Role | Rules | Verification state |
|---|---|---|---|
| `master` | Permanent protected baseline and future production/release target | No bootstrap migration, no experimental schema work, no imports during development | Ready / protected blank; 0 types / 0 entries / 0 assets / 0 tags / `en-US`; default true / fallback null |
| `dev` | Only non-master rotating sandbox | Recreated once from protected `master`; one authorized import invocation is complete and no second import or repair is authorized | Ready / approved recovered v1 model; 10 types / 0 entries / 0 assets / 0 tags / `en-US`; default true / fallback null; zero material drift |

Verification is a workflow state, not an environment ID. This project does not maintain a separate physical environment for verification.

## `master`

`master` is the protected baseline. It should remain blank until release/production work explicitly changes that role in a future accepted decision.

Current limits:

- never run the bootstrap migration against `master`
- never run experimental schema work against `master`
- never import model snapshots into `master` during Phase 00 through Phase 03
- preserve the Batch 00.4 verified clean protected baseline unless a later approved phase changes it

## `dev`

`dev` is the single rotating sandbox.

Approved uses:

- active model and migration development
- content model review
- editor interface QA
- snapshot export source after the model is approved
- Phase 03 clean-room verification target after controlled deletion and recreation

Current limits:

- preserve the independently verified recovered v1 model; no second import or repair is authorized
- Gate B authorization is consumed; do not run the bootstrap migration again without fresh explicit authorization
- Batch 03.4 destructive authorization is consumed; a second deletion or recreation is not authorized
- do not store irreplaceable content in `dev` before the Phase 03 recoverability gate

## Phase 02 Recovery, Bootstrap, and Validation Record

After historical Attempt #2 left a partial schema, destructive `dev` recovery was separately authorized, completed, and externally approved. `dev` was recreated from protected blank `master`, Fresh Gate A passed, and overall Attempt #3 executed the current RE2-corrected migration successfully against `dev`.

The recovery authorization and Gate B authorization are consumed. Additional `dev` reset and additional bootstrap execution are not authorized. `master` remains blank and protected.

Batch 02.7 externally validated the live `dev` contract with zero material drift and closed Phase 02 as complete / frozen. Phase 03 Batch 03.1 externally passed with notes and is approved. Its GET-only baseline reconfirmed ready blank `master` and ready validated `dev`; no environment lifecycle action was authorized or executed.

Batch 03.2 externally passed with notes and approved hardened export/import credential binding, strict model-only scope, and exact local snapshot verification.

Batch 03.3 is APPROVED / CHECKPOINTED. Exactly one explicitly authorized governed export from `dev` completed successfully, and the one-export authorization is consumed. Three rate-limited read-only GET retries occurred inside that single export invocation; they were not additional governed export operations.

The approved recovery snapshot is `contentful-model.dev.v1.20260819T210704Z.json` with SHA-256 `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`. It is locally validated and externally approved for recovery use. The raw snapshot remains local and Git-ignored.

Batch 03.4 completed exactly one separately authorized `dev` deletion and exactly one recreation from protected `master`. The lifecycle operation used public `contentful-management` 12.10.0 with in-process credential binding, one `DELETE`, one `PUT`, and 0 automatic destructive retries. Independent validation passed with 14 GETs and 1 readiness poll: recreated `dev` and protected `master` are ready and blank at 0 types / 0 entries / 0 assets / 0 tags / `en-US`. External validation returned PASS WITH NOTES.

Batch 03.4 destructive authorization is CONSUMED. Delete count is 1, recreation count is 1, source is `master`, automatic retries are 0, and blank-state validation is PASS. Post-rotation reconciliation is COMPLETE, external reconciliation validation is PASS WITH NOTES, and final approval reconciliation is COMPLETE. External final validation returned PASS WITH NOTES, and the Batch 03.4 checkpoint is established. A second rotation and additional bootstrap execution remain NOT AUTHORIZED.

Batch 03.5 passed its corrected pre-execution and retry-semantics gates, then consumed one explicit import authorization. The sole top-level import command exited 1 after an HTTP 429 during Editor Interface import. Effective automatic request replays were 0; no second import, repair, reset, bootstrap, additional export, or seed followed. Twenty-three GET-only forensic requests independently confirmed protected blank `master` and current `dev` with all 10 approved types published, all 10 Editor Interfaces present, 0 entries / 0 assets / 0 tags, and `en-US`. The semantic verifier passed the exact 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2 contract with zero material drift. External semantic recovery, reconciliation, and final validation returned PASS WITH NOTES. Truth-surface and Final Approval Reconciliation are complete; the commit containing this document establishes the Batch 03.5 checkpoint, and Batch 03.6 is next / not started after successful checkpoint verification.

Seed content remains NOT STARTED.

## Phase 03 / Batch 03.4 Safety Truth-Surface Reconciliation

Batch 03.4 Read-Only Destructive Preflight Attempt 1: BLOCKED / FAIL-CLOSED at the current-truth consistency gate.

- Attempt 1 Contentful reads: 0.
- Attempt 1 Contentful writes: 0.
- Attempt 1 environment mutations: 0.
- Safety Truth-Surface Reconciliation: COMPLETE.
- External Safety Truth-Surface Validation: PASS WITH NOTES.
- Safety Truth-Surface Final Approval Reconciliation: COMPLETE.
- Safety Truth-Surface External Final Validation: PASS WITH NOTES / APPROVED.
- Safety Truth-Surface Git Checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT.
- Batch 03.4 Read-Only Destructive Preflight Attempt 2: PASS / Gates A–J / 23 fresh GETs / 0 writes.
- Initial Gate K: BLOCKED because the probe loaded uncompiled CLI source instead of the installed compiled runtime.
- Corrective credential-path gate: PASS WITH NOTES / public `contentful-management` SDK selected / 0 Contentful requests.
- Initial destructive execution start: BLOCKED BEFORE CONTENTFUL ACCESS by a false root-depth dependency assertion / 0 DELETE / 0 CREATE / authorization not consumed.
- External false-negative review: continuation of the existing unconsumed authorization approved.
- Resumed JIT baseline: PASS / 13 GETs / exact pre-deletion topology and model IDs confirmed.
- Authorized rotation: 1 successful DELETE / 1 successful recreation from `master` / 0 automatic retries.
- Independent blank-state validation: PASS / 14 GETs / 1 readiness poll / 0 writes.
- Destructive authorization: CONSUMED.

The Batch 03.4 result above is historical pre-import evidence. Current `dev` is ready with the approved recovered v1 model after the single authorized Batch 03.5 import incident. The approved recovery snapshot remains local, ignored, unchanged, and approved for recovery use.

## Serial Clean-Room Workflow

Phase 03 proves model portability through separately approved serial gates while rebuilding the same `dev` environment ID:

```text
validated dev
✓

approved snapshot
✓

read-only destructive preflight
✓

external validation
✓

separate explicit destructive authorization
✓ CONSUMED

delete dev exactly once
✓

recreate dev exactly once from protected master
✓

STOP MUTATIONS
✓

independent blank-state validation
✓

post-rotation reconciliation
✓

external reconciliation validation
✓ PASS WITH NOTES

final approval reconciliation
✓

external final validation
✓ PASS WITH NOTES

Batch 03.4 checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS DOCUMENT

03.5 snapshot import pre-execution gate
✓

import authorization
✓ CONSUMED

import snapshot exactly once
✓ EXECUTED / EXIT 1 / 429 INCIDENT

post-failure GET-only forensics
✓

semantic recovery
✓ PASS / ZERO MATERIAL DRIFT

03.5 reconciliation
✓ COMPLETE

external reconciliation validation
✓ PASS WITH NOTES

final approval reconciliation
✓ COMPLETE

external final validation
✓ PASS WITH NOTES

03.5 checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS DOCUMENT

03.6 Phase 03 Validation + Closeout
-> NEXT / NOT STARTED AFTER SUCCESSFUL CHECKPOINT VERIFICATION
```

The environment ID remains `dev` before and after the clean-room recreation.

## Destructive Gate

Deleting `dev` requires explicit human approval in the active session after the complete read-only preflight reconfirms:

- committed migration history
- approved recovery snapshot
- matching snapshot checksum
- recorded CLI/runtime metadata
- fresh pre-deletion live evidence
- confirmation that governed scope contains no irreplaceable project content
- documented recovery procedure
- explicit human authorization

Current destructive authorization: CONSUMED.

Batch 03.4 read-only destructive preflight Attempt 1 stopped before Contentful access because active safety documentation contained stale current-state wording. That safety correction was externally validated and checkpointed. Attempt 2 and its credential-path correction later passed, and the separately authorized lifecycle operation completed exactly once.

The executed lifecycle mechanism was the public `contentful-management` 12.10.0 SDK with process-only credential binding. It performed one delete and one recreation from `master`, then stopped mutations. No automatic retry, cleanup-and-rerun behavior, import, or seed was part of that authorization. A second lifecycle execution is not authorized.

## Environment Variable Contract

Use one active Contentful environment variable:

```dotenv
CONTENTFUL_ENVIRONMENT_ID=dev
```

Do not configure a separate target environment for normal development or verification. Scripts that mutate model state must reject `master`.

## Closeout Searches

Before Phase 03 deletion readiness, search active documentation and scripts for stale three-environment instructions and classify any remaining historical references explicitly.
