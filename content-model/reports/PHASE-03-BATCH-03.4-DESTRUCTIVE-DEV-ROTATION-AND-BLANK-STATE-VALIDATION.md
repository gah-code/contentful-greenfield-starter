# Phase 03 / Batch 03.4 — Destructive Dev Rotation + Blank-State Validation

## Status

EXECUTION COMPLETE

BLANK-STATE VALIDATION PASS

POST-ROTATION RECONCILIATION COMPLETE

EXTERNAL POST-ROTATION RECONCILIATION VALIDATION

PASS WITH NOTES

FINAL APPROVAL RECONCILIATION

COMPLETE

EXTERNAL FINAL VALIDATION

PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT

GIT CHECKPOINT

ESTABLISHED BY THE COMMIT CONTAINING THIS REPORT

## Purpose

Record sanitized evidence for the separately authorized Phase 03 / Batch 03.4 rotation of the single `dev` sandbox and the independent verification that recreated `dev` is ready and blank while protected `master` remains unchanged.

This report records completed execution. It does not authorize or perform another environment lifecycle operation, import, bootstrap, export, or seed.

## Starting Checkpoint

| Item | Evidence |
|---|---|
| Branch | `master` |
| HEAD | `e7a613a7710e15050b5d5959d3e71b88f8598432` |
| Checkpoint subject | `docs: checkpoint Phase 03.4 safety truth` |
| Working tree | clean |
| HEAD vs `origin/master` | `0 0` |
| Staged files | none |

## Recovery Snapshot

Path:

`content-model/snapshots/contentful-model.dev.v1.20260819T210704Z.json`

SHA-256:

`0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`

State:

- LOCAL;
- GIT-IGNORED;
- LOCALLY VALIDATED;
- EXTERNALLY APPROVED FOR RECOVERY USE;
- UNCHANGED.

Approved model represented by the snapshot:

| Invariant | Value |
|---|---:|
| Content types | 10 |
| Stored fields | 99 |
| Authored references | 18 |
| Validation objects | 102 |
| Display fields | 10 |
| Regex validations | 8 |
| Rich Text fields | 6 |
| Editor overrides | 2 |
| Entries | 0 |
| Assets | 0 |
| Locale | `en-US` |
| Material failures | 0 |

The snapshot describes the approved recovery model. The current live `dev` environment is intentionally blank.

## Preflight History

### Attempt 1 — Safety Truth Block

Result:

BLOCKED / FAIL-CLOSED

Reason:

Stale active safety truth surfaces.

| Operation | Count |
|---|---:|
| Contentful reads | 0 |
| Contentful writes | 0 |
| Environment mutations | 0 |

### Safety Truth Correction

The safety truth surfaces were reconciled, externally approved, and checkpointed at:

`e7a613a7710e15050b5d5959d3e71b88f8598432` — `docs: checkpoint Phase 03.4 safety truth`

### Attempt 2

Result:

GATES A–J PASS

| Operation | Count |
|---|---:|
| Fresh Contentful GETs | 23 |
| Contentful writes | 0 |
| Automatic retries | 0 |

Initial Gate K result:

BLOCKED

Reason:

The probe loaded uncompiled `contentful-cli` source instead of its installed compiled runtime.

### Credential-Path Corrective Gate

The read-only corrective gate established:

- the compiled CLI internal path was technically viable but remained an internal API;
- the public `contentful-management` SDK was technically viable and was the preferred public API;
- `contentful-management` runtime version `12.10.0` was selected for the one-time lifecycle operation;
- corrective-gate Contentful requests were 0;
- external credential-path validation returned PASS WITH NOTES.

## Destructive Authorization

Initial explicit destructive authorization:

GRANTED

Authorized scope:

- delete `dev` exactly once;
- recreate `dev` exactly once from protected `master`;
- perform no automatic destructive retry;
- stop mutations after recreation;
- independently verify readiness and blank state;
- do not import, bootstrap, export, or seed.

## Initial Execution False-Negative Stop

Result:

BLOCKED BEFORE CONTENTFUL ACCESS

The initial execution gate used `npm ls contentful-management --depth=0`, which incorrectly required the runtime package to be a direct root dependency. Repository lockfile truth established that `contentful-management@12.10.0` was installed transitively and available without a package manifest or lockfile change.

| Operation | Count |
|---|---:|
| Contentful requests | 0 |
| DELETE attempts | 0 |
| CREATE attempts | 0 |

Authorization consumed at this stop:

NO

External review discarded the false root-depth assertion and approved continuation of the existing, unconsumed authorization.

## Resumed JIT Baseline

Result:

PASS

GET requests:

13

Physical topology:

`dev` + `master`

| Environment | Status | Content types | Entries | Assets | Tags | Locale |
|---|---|---:|---:|---:|---:|---|
| `master` | ready | 0 | 0 | 0 | 0 | `en-US` |
| `dev` | ready | 10 | 0 | 0 | 0 | `en-US` |

Exact approved `dev` content type IDs:

- `article`
- `experienceItem`
- `navigationItem`
- `personProfile`
- `project`
- `siteSettings`
- `skill`
- `skillGroup`
- `socialLink`
- `tool`

Exact type-ID verification:

PASS

## Destructive Rotation Execution

Credential mechanism:

Public `contentful-management` SDK

Runtime package version:

`12.10.0`

Credential binding:

In process only through `process.env.CONTENTFUL_MANAGEMENT_TOKEN`

| Item | Evidence |
|---|---|
| Token in command arguments | NO |
| Token printed | NO |
| Persisted CLI authentication | NOT USED |
| DELETE attempts | 1 |
| DELETE success | YES |
| CREATE attempts | 1 |
| CREATE success | YES |
| Created environment ID | `dev` |
| Source environment | `master` |
| Mutation methods | `DELETE`, `PUT` |
| Automatic destructive retries | 0 |
| Master mutations | 0 |

## Post-Recreation Readiness

Readiness polls:

1

Recreated `dev` status:

ready

Physical topology after recreation:

exactly `dev` + `master`

## Independent Blank-State Validation

Result:

PASS

GET requests:

14

| Environment | Status | Content types | Entries | Assets | Tags | Locale | Default | Fallback |
|---|---|---:|---:|---:|---:|---|---|---|
| `dev` | ready | 0 | 0 | 0 | 0 | `en-US` | true | null |
| `master` | ready | 0 | 0 | 0 | 0 | `en-US` | true | null |

Contentful writes during verification:

0

## Protected master Evidence

`master` remained the ready, blank, protected baseline:

- environment ID: `master`;
- status: ready;
- content types: 0;
- entries: 0;
- assets: 0;
- tags: 0;
- locale: `en-US`;
- default locale: true;
- fallback locale: null;
- mutations during Batch 03.4: 0.

## Request / Mutation Audit

| Operation | Count |
|---|---:|
| Attempt 1 Contentful requests | 0 |
| Attempt 2 preflight GETs | 23 |
| Corrective credential-gate Contentful requests | 0 |
| Initial false-negative execution Contentful requests | 0 |
| Resumed JIT GETs | 13 |
| DELETE attempts | 1 |
| CREATE attempts | 1 |
| Automatic destructive retries | 0 |
| Post-recreation GETs | 14 |
| Readiness polls | 1 |
| `master` mutations | 0 |
| Import attempts | 0 |
| Bootstrap attempts | 0 |
| Export attempts after Batch 03.3 | 0 |
| Seed attempts | 0 |

## Authorization Consumption

| Item | State |
|---|---|
| Initial explicit destructive authorization | GRANTED |
| False-negative stop consumed authorization | NO |
| Continuation externally reviewed | YES |
| Authorization consumed | YES, when the single DELETE was invoked |
| Authorized deletion count | 1 / COMPLETE |
| Authorized recreation count | 1 / COMPLETE |

## Current Recovery Boundary

| Operation | State |
|---|---|
| Destructive authorization | CONSUMED |
| Second rotation | NOT AUTHORIZED |
| Second `dev` deletion | NOT AUTHORIZED |
| Second `dev` recreation | NOT AUTHORIZED |
| Import | NOT AUTHORIZED / NOT RUN |
| Additional bootstrap | NOT AUTHORIZED |
| Second export | NOT AUTHORIZED |
| Seed | NOT STARTED |

Recreated `dev` is ready and blank. It awaits a later, separately authorized snapshot import.

## External Validation

Destructive preflight:

PASS WITH NOTES / EXTERNALLY VALIDATED

Credential path:

PASS WITH NOTES

Destructive rotation and independent blank-state validation:

PASS WITH NOTES / EXTERNALLY VALIDATED

Post-rotation reconciliation:

PASS WITH NOTES — APPROVED FOR FINAL APPROVAL RECONCILIATION

External Final Validation:

PASS WITH NOTES — APPROVED FOR BATCH 03.4 GIT CHECKPOINT

External validation note:

- the remote committed checkpoint was independently confirmed;
- because the ten-file reconciliation remains local and uncommitted, its exact wording and diff contents were validated from paste-back evidence rather than directly from GitHub;
- this is a non-blocking evidence limitation.

## Current Batch State

Phase 03:

ACTIVE

Batch 03.4:

APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS REPORT

Batch 03.4 approval/checkpoint:

ESTABLISHED BY THE COMMIT CONTAINING THIS REPORT

Batch 03.5:

NEXT AFTER SUCCESSFUL CHECKPOINT VERIFICATION

## Next Gate

After successful checkpoint verification: Phase 03 / Batch 03.5 — Snapshot Import + Clean-Room Comparison — read-only pre-execution gate.

Do not import yet. A later Batch 03.5 import requires separate explicit authorization after Batch 03.4 is approved and checkpointed.
