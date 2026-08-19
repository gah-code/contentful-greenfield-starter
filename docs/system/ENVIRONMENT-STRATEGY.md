# Environment Strategy

Status: Phase 00 complete; Phase 02 complete / frozen; Phase 03 active; Batches 03.1 and 03.2 approved; Batch 03.3 next
Owner: Phase 00 — Baseline + Two-Environment Setup
Canonical environment topology: `master` + `dev`

## Current Physical Topology

| Environment | Role | Rules | Verification state |
|---|---|---|---|
| `master` | Permanent protected baseline and future production/release target | No bootstrap migration, no experimental schema work, no imports during development | Protected blank baseline; 0 types / 0 entries / 0 assets / en-US after approved Batch 02.7 validation |
| `dev` | Only non-master sandbox | Validated Phase 02 model environment and later clean-room verification target after controlled deletion and recreation | Approved v1 schema; 10 types / 99 fields / 18 authored references / 0 entries / 0 assets / en-US; 0 material drift |

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

Batch 03.2 externally passed with notes and approved hardened export/import credential binding, strict model-only scope, and exact local snapshot verification. Batch 03.3 export/snapshot work is next but not started, and export remains unauthorized. Export has not run, no snapshot exists, destructive authorization is not granted, and import has not run.

Seed content remains NOT STARTED.

## Serial Clean-Room Workflow

Phase 03 proves model portability through separately approved serial gates while rebuilding the same `dev` environment ID:

```text
validated dev
-> export approval
-> governed model-only export
-> snapshot validation and checksum approval
-> separate destructive approval
-> delete dev exactly once
-> recreate dev exactly once from protected master
-> independent blank-state validation
-> separate import approval
-> import snapshot exactly once
-> semantic comparison
-> freshly recreated verified dev
```

The environment ID remains `dev` before and after the clean-room recreation.

## Destructive Gate

Deleting `dev` requires explicit human approval in the active session after all recoverability evidence exists:

- committed migration history
- verified model-only snapshot
- recorded snapshot checksum
- recorded CLI/runtime metadata
- pre-deletion model evidence
- confirmation that `dev` has no irreplaceable content
- documented recovery procedure

Current destructive authorization: NOT GRANTED.

Batch 03.2 approved the existing policy without requiring a repository lifecycle helper. A future destructive gate may use separately approved exact one-time CLI commands for one delete and one recreate, followed by post-operation evidence and an independent blank-state check. No automatic retry, cleanup-and-rerun behavior, import, or seed is part of that authorization.

## Environment Variable Contract

Use one active Contentful environment variable:

```dotenv
CONTENTFUL_ENVIRONMENT_ID=dev
```

Do not configure a separate target environment for normal development or verification. Scripts that mutate model state must reject `master`.

## Closeout Searches

Before Phase 03 deletion readiness, search active documentation and scripts for stale three-environment instructions and classify any remaining historical references explicitly.
