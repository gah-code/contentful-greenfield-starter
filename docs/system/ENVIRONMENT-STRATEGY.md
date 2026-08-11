# Environment Strategy

Status: Phase 00 active
Owner: Phase 00 — Baseline + Two-Environment Setup
Canonical environment topology: `master` + `dev`

## Current Physical Topology

| Environment | Role | Rules | Verification state |
|---|---|---|---|
| `master` | Permanent protected baseline and future production/release target | No bootstrap migration, no experimental schema work, no imports during development | Verified clean protected baseline in Batch 00.4 |
| `dev` | Only non-master sandbox | Migration development target, model/editorial QA target, later clean-room verification target after controlled deletion and recreation | Verified clean sandbox in Batch 00.4 |

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

- preserve the Batch 00.4 verified clean sandbox state unless a later approved phase changes it
- do not treat Batch 00.4 clean-state evidence as authorization to run the bootstrap migration
- do not delete or recreate `dev` during Phase 00 documentation alignment
- do not store irreplaceable content in `dev` before the Phase 03 recoverability gate

## Serial Clean-Room Workflow

Phase 03 proves model portability by rebuilding the same `dev` environment ID:

```text
modeled dev
-> technical + editorial model review
-> export approved model-only snapshot
-> verify snapshot structure
-> record checksum
-> record CLI/runtime metadata
-> record pre-deletion model evidence
-> confirm committed migration history
-> confirm dev contains no irreplaceable content
-> confirm recovery procedure
-> obtain explicit human approval
-> delete dev
-> recreate dev from protected master
-> confirm fresh dev state
-> import model-only snapshot into dev
-> compare rebuilt dev to pre-deletion evidence
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

No environment deletion automation belongs in this repository during this repair.

## Environment Variable Contract

Use one active Contentful environment variable:

```dotenv
CONTENTFUL_ENVIRONMENT_ID=dev
```

Do not configure a separate target environment for normal development or verification. Scripts that mutate model state must reject `master`.

## Closeout Searches

Before Phase 00 closeout and before Phase 03 deletion readiness, search active documentation and scripts for stale three-environment instructions and classify any remaining historical references explicitly.
