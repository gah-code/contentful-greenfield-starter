# Environment Strategy

Status: Phase 00 complete; Phase 02 complete / frozen; Phase 03 active; Batches 03.1 through 03.3 approved / checkpointed; Batch 03.4 next / not started
Owner: Phase 00 — Baseline + Two-Environment Setup
Canonical environment topology: `master` + `dev`

## Current Physical Topology

| Environment | Role | Rules | Verification state |
|---|---|---|---|
| `master` | Permanent protected baseline and future production/release target | No bootstrap migration, no experimental schema work, no imports during development | Protected blank baseline; 0 types / 0 entries / 0 assets / en-US after approved Batch 02.7 validation |
| `dev` | Only non-master sandbox | Validated Phase 02 model environment and source state for later rotation only after a separately approved destructive gate | Approved v1 schema; 10 types / 99 fields / 18 authored references / 0 entries / 0 assets / en-US; 0 material drift |

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

- preserve the externally validated Phase 02 schema until a later approved Phase 03 gate changes it
- Gate B authorization is consumed; do not run the bootstrap migration again without fresh explicit authorization
- do not delete or recreate `dev` outside a separately approved destructive gate
- do not store irreplaceable content in `dev` before the Phase 03 recoverability gate

## Phase 02 Recovery, Bootstrap, and Validation Record

After historical Attempt #2 left a partial schema, destructive `dev` recovery was separately authorized, completed, and externally approved. `dev` was recreated from protected blank `master`, Fresh Gate A passed, and overall Attempt #3 executed the current RE2-corrected migration successfully against `dev`.

The recovery authorization and Gate B authorization are consumed. Additional `dev` reset and additional bootstrap execution are not authorized. `master` remains blank and protected.

Batch 02.7 externally validated the live `dev` contract with zero material drift and closed Phase 02 as complete / frozen. Phase 03 Batch 03.1 externally passed with notes and is approved. Its GET-only baseline reconfirmed ready blank `master` and ready validated `dev`; no environment lifecycle action was authorized or executed.

Batch 03.2 externally passed with notes and approved hardened export/import credential binding, strict model-only scope, and exact local snapshot verification.

Batch 03.3 is APPROVED / CHECKPOINTED. Exactly one explicitly authorized governed export from `dev` completed successfully, and the one-export authorization is consumed. Three rate-limited read-only GET retries occurred inside that single export invocation; they were not additional governed export operations.

The approved recovery snapshot is `contentful-model.dev.v1.20260819T210704Z.json` with SHA-256 `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`. It is locally validated and externally approved for recovery use. The raw snapshot remains local and Git-ignored.

Batch 03.4 is NEXT / NOT STARTED. Destructive rotation, import, and additional bootstrap execution remain NOT AUTHORIZED.

Seed content remains NOT STARTED.

## Phase 03 / Batch 03.4 Safety Truth-Surface Reconciliation

Batch 03.4 Read-Only Destructive Preflight Attempt 1: BLOCKED / FAIL-CLOSED at the current-truth consistency gate.

- Attempt 1 Contentful reads: 0.
- Attempt 1 Contentful writes: 0.
- Attempt 1 environment mutations: 0.
- Safety Truth-Surface Reconciliation: COMPLETE.
- External Safety Truth-Surface Validation: PASS WITH NOTES.
- Final Approval Reconciliation: COMPLETE.
- External Final Validation: PASS WITH NOTES / APPROVED.
- Safety Truth-Surface Git Checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT.
- Batch 03.4 Read-Only Destructive Preflight Attempt 2: NEXT AFTER SUCCESSFUL CHECKPOINT VERIFICATION.

The current `dev` model description is the last approved validation state. Fresh live pre-deletion evidence has NOT yet been collected for Attempt 2 and must be collected before destructive authorization.

## Serial Clean-Room Workflow

Phase 03 proves model portability through separately approved serial gates while rebuilding the same `dev` environment ID:

```text
validated dev
-> approved snapshot
-> read-only destructive preflight
-> external validation
-> separate explicit destructive authorization
-> delete dev exactly once
-> recreate dev exactly once from protected master
-> STOP
-> independent blank-state validation
-> separate import approval
-> import snapshot exactly once
-> semantic comparison
-> freshly recreated verified dev
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

Current destructive authorization: NOT GRANTED.

Batch 03.4 read-only destructive preflight Attempt 1 stopped before Contentful access because active safety documentation contained stale current-state wording. This documentation reconciliation does not satisfy the full Batch 03.4 destructive preflight. The complete read-only preflight must be rerun after this correction is externally validated and checkpointed.

Batch 03.2 approved the existing policy without requiring a repository lifecycle helper. A future destructive gate may use separately approved exact one-time CLI commands for one delete and one recreate, followed by post-operation evidence and an independent blank-state check. No automatic retry, cleanup-and-rerun behavior, import, or seed is part of that authorization.

## Environment Variable Contract

Use one active Contentful environment variable:

```dotenv
CONTENTFUL_ENVIRONMENT_ID=dev
```

Do not configure a separate target environment for normal development or verification. Scripts that mutate model state must reject `master`.

## Closeout Searches

Before Phase 03 deletion readiness, search active documentation and scripts for stale three-environment instructions and classify any remaining historical references explicitly.
