# Phase 03 — Model Export + Serial Clean-Room Verification

Status: ACTIVE

Next batch: 03.3 — Governed Model Export + Snapshot Validation — NEXT / NOT STARTED

Owner: repository maintainer

## Purpose

Prove that the validated Phase 02 model can be exported as a governed model-only recovery snapshot, imported into freshly recreated `dev`, and validated with zero semantic drift while `master` remains blank and protected.

Phase 03 uses the existing two-environment topology. `master` is the permanent protected blank baseline; `dev` is the single rotating sandbox. Verification is a serial workflow state, not a third environment.

## Current State

| Item | State |
|---|---|
| Phase 02 | COMPLETE / FROZEN |
| Phase 03 | ACTIVE |
| Batch 03.1 | APPROVED |
| Batch 03.2 | APPROVED |
| Batch 03.3 | NEXT / NOT STARTED |
| Snapshot naming/configuration correction | EXTERNALLY APPROVED / PASS WITH NOTES |
| Batch 03.4 | LATER |
| Batch 03.5 | LATER |
| Batch 03.6 | LATER |
| `master` | ready; 0 types / 0 entries / 0 assets / `en-US`; protected |
| `dev` | ready; validated Phase 02 model; 10 types / 0 entries / 0 assets / `en-US` |
| Pre-export tooling | APPROVED |
| Export | NOT AUTHORIZED / NOT RUN |
| Snapshot | NOT AUTHORIZED / NOT CREATED |
| Destructive rotation | NOT AUTHORIZED |
| Import | NOT AUTHORIZED / NOT RUN |
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
export approval
-> governed model-only export
-> snapshot validation and checksum approval
-> separate destructive approval
-> delete dev exactly once
-> recreate dev exactly once from master
-> independent blank-state validation
-> separate import approval
-> import snapshot exactly once
-> full semantic comparison
-> Phase 03 closeout
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

Human local selector correction: PENDING

Full 03.3 pre-execution gate: NOT PASSED / MUST BE RERUN

### Approved Selector Contract

- `CONTENTFUL_MODEL_SNAPSHOT` unset or blank: the export helper generates `contentful-model.dev.v1.<YYYYMMDDTHHMMSSZ>.json` using the current UTC timestamp.
- `CONTENTFUL_MODEL_SNAPSHOT` explicitly set: the value must match the governed `dev` v1 timestamp pattern and must not collide with an existing output.
- A fixed `current` snapshot alias is not an approved active default.
- Direct snapshot verification requires an explicit snapshot path.

The fixed `current` alias is historical only and is not an active default. The corrective-gate approval does not approve the complete 03.3 export pre-execution gate and does not authorize export. Batch 03.3 remains NEXT / NOT STARTED; the corrective Git checkpoint is complete, while the human local selector correction and full pre-execution rerun remain pending.

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
| 03.3 | Governed Model Export + Snapshot Validation | NEXT |
| 03.4 | Destructive Dev Rotation + Blank-State Validation | LATER |
| 03.5 | Snapshot Import + Clean-Room Comparison | LATER |
| 03.6 | Phase 03 Validation + Closeout | LATER |

Batch 03.3 is next but not started. Export remains unauthorized.

## Current Boundary

Stop after Batch 03.2 approval reconciliation. Pre-export tooling is approved, but Batch 03.3 has not started and grants no execution authorization. Export, snapshot creation, destructive rotation, import, bootstrap, and seed remain unauthorized. Package files and Phase 02 artifacts are unchanged.
