---
name: contentful-greenfield-project-tracker
description: "Audit, repair, implement, validate, and close phased work for the Personal Website CMS — Greenfield Contentful Starter. Track repository truth, Contentful governance, the two-environment strategy, migrations, snapshots, security, frontend contracts, editorial workflows, and release evidence."
---

# Contentful Greenfield Project Tracker

Use this skill for audit, repair, implementation, validation, and closeout work on the Personal Website CMS — Greenfield Contentful Starter.

Inspect the current repository before editing in every mode. Use current repository documentation as canonical truth and do not override newer accepted ADRs.

## Project Identity

Personal Website CMS — Greenfield Contentful Starter
Repository: `contentful-greenfield-starter`
Model target: approved and frozen 10-type v1 semantic model preserved in the externally approved recovery snapshot and independently verified in current `dev` after the single authorized Batch 03.5 import incident

## Project Mantra

Content strategy before content models.
Routes before templates.
UI contracts before CMS data.
Static fixtures before Contentful.
Validation before closeout.
Documentation is part of the build.

## Current State

- Phase 00 — COMPLETE.
- Phase 01 — COMPLETE / FROZEN.
- 01.1 — APPROVED.
- 01.2 — APPROVED.
- 01.3 — APPROVED.
- 01.4 — APPROVED.
- 01.5 — APPROVED.
- Phase 02 — COMPLETE / FROZEN.
- 02.1 — APPROVED.
- 02.2 — APPROVED.
- 02.3 — APPROVED.
- 02.4 — APPROVED.
- 02.5 — RE-APPROVED AFTER RE2 COMPATIBILITY CORRECTION.
- 02.6 — APPROVED / BOOTSTRAP EXECUTED SUCCESSFULLY IN DEV.
- 02.7 — APPROVED / LIVE CONTRACT VALIDATED.
- Bootstrap migration — APPROVED RE2-CORRECTED V1 / SUCCESSFULLY EXECUTED IN DEV.
- `dev` — READY / APPROVED RECOVERY MODEL PRESENT / 10 types / 99 fields / 18 references / 102 validations / 10 display fields / 8 regex / 6 Rich Text / 2 editor overrides / 0 entries / 0 assets / 0 tags / en-US / ZERO MATERIAL DRIFT.
- Pre-rotation live contract drift — 0 material mismatches / externally approved / model preserved in the recovery snapshot.
- `master` — READY / BLANK / PROTECTED / 0 types / 0 entries / 0 assets / 0 tags / en-US.
- Gate B authorization — CONSUMED.
- Additional bootstrap execution — NOT AUTHORIZED.
- Destructive dev recovery — COMPLETE / EXTERNALLY APPROVED / AUTHORIZATION CONSUMED.
- Additional dev reset — NOT AUTHORIZED.
- Phase 03 — Model Export + Serial Clean-Room Verification — ACTIVE.
- 03.1 — MODEL EXPORT + SERIAL CLEAN-ROOM VERIFICATION PREFLIGHT — APPROVED.
- 03.2 — EXPORT, IMPORT + SNAPSHOT VERIFICATION TOOLING HARDENING — APPROVED.
- 03.3 — GOVERNED MODEL EXPORT + SNAPSHOT VALIDATION — APPROVED / CHECKPOINTED.
- 03.3 pre-execution Attempt 1 — BLOCKED ON INVALID LOCAL SNAPSHOT OVERRIDE.
- Snapshot naming/configuration contract correction — EXTERNALLY APPROVED / PASS WITH NOTES.
- Final corrective reconciliation — EXTERNALLY VALIDATED / PASS WITH NOTES.
- Corrective Git checkpoint — COMPLETE / COMMITTED / PUSHED / CLEAN 0 0.
- Local snapshot selector correction — COMPLETE / LOCAL ONLY.
- 03.3 pre-execution gate — PASS WITH NOTES / EXTERNALLY VALIDATED.
- One-export authorization — GRANTED / CONSUMED.
- Export — COMPLETE / EXACTLY ONE TOP-LEVEL INVOCATION / EXIT 0.
- Snapshot — `contentful-model.dev.v1.20260819T210704Z.json`.
- Snapshot SHA-256 — `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`.
- Snapshot semantic validation — PASS / 0 MATERIAL FAILURES.
- Snapshot external approval — PASS WITH NOTES / APPROVED FOR RECOVERY USE.
- SDK internal GET retries — 3 / READ-ONLY / INSIDE ONE EXPORT INVOCATION.
- 03.3 Export + Snapshot Approval Reconciliation — EXTERNALLY VALIDATED / PASS WITH NOTES.
- 03.3 Final Approval Reconciliation — COMPLETE.
- 03.3 External Final Reconciliation Validation — PASS WITH NOTES.
- Batch 03.3 checkpoint — ESTABLISHED.
- 03.4 — DESTRUCTIVE DEV ROTATION + BLANK-STATE VALIDATION — APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS SKILL.
- 03.4 post-rotation reconciliation — COMPLETE.
- 03.4 external reconciliation validation — PASS WITH NOTES.
- 03.4 final approval reconciliation — COMPLETE.
- 03.4 external final validation — PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT.
- 03.4 checkpoint — ESTABLISHED BY THE COMMIT CONTAINING THIS SKILL.
- 03.4 destructive authorization — CONSUMED.
- 03.4 authorized deletion — 1 / COMPLETE.
- 03.4 authorized recreation from `master` — 1 / COMPLETE.
- 03.4 automatic destructive retries — 0.
- Second rotation — NOT AUTHORIZED.
- 03.5 — SNAPSHOT IMPORT + CLEAN-ROOM COMPARISON — APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS SKILL.
- 03.5 import operational result — EXIT 1 / HTTP 429 INCIDENT.
- 03.5 semantic recovery — PASS / ZERO MATERIAL DRIFT.
- 03.5 external final validation — PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT.
- 03.6 — PHASE 03 VALIDATION + CLOSEOUT — NEXT / NOT STARTED AFTER SUCCESSFUL CHECKPOINT VERIFICATION.
- Pre-export tooling — APPROVED.
- Second export — NOT AUTHORIZED.
- Import authorization — CONSUMED AFTER EXACTLY ONE TOP-LEVEL INVOCATION.
- Import operational result — EXIT 1 / HTTP 429 DURING EDITOR INTERFACE IMPORT.
- Effective automatic request replays — 0 / PROVEN.
- Post-failure forensics — PASS / 23 GETS / 0 WRITES.
- Semantic recovery — PASS / `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT` / ZERO MATERIAL DRIFT.
- Second import — NOT AUTHORIZED.
- Repair/reset — NOT AUTHORIZED.
- Seed content — NOT STARTED.

Batch 01.3 approved hybrid SEO ownership: editorial SEO overrides are limited conceptually to title, description, and social image; technical SEO remains code/state-derived. Exact Contentful representation and schema implementation remain deferred to Phase 02.

Batch 01.4 approved the Content Requirements Matrix and does not authorize Contentful schema, fixture, frontend, migration, bootstrap, seed, or Phase 02 implementation.

Batch 01.5 approved the Phase 01 requirements freeze after external validation returned PASS WITH NOTES.

Batch 02.1 is approved after external validation returned PASS WITH NOTES. It reconciled proposed model artifacts against frozen Phase 01 requirements and does not approve content types, fields, field IDs, references, validations, migration changes, bootstrap execution, fixtures, frontend implementation, or seed content.

Batch 02.2 is approved after external validation returned PASS WITH NOTES. It approves the v1 standalone content type inventory and stable type IDs in `docs/content-model/CONTENT-TYPE-LEDGER.md`; it does not approve fields, field IDs, references, validations, migration changes, bootstrap execution, fixtures, frontend implementation, or seed content.

Batch 02.3 is approved after external validation returned PASS WITH NOTES. It approves the field and field-ID contract in `docs/content-model/FIELD-ID-LEDGER.md`; it does not approve reference cardinality, target restrictions, validations, editor interfaces, migration changes, bootstrap execution, fixtures, frontend implementation, or seed content.

Batch 02.4 is approved after external validation returned PASS WITH NOTES. It approves the reference, validation, and editorial contract in `docs/content-model/REFERENCE-MAP.md` and `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md`; supplemental external decision validation resolves OD-06, OD-12, and OD-13 without changing the approved contracts. It does not approve migration changes, bootstrap execution, fixtures, frontend implementation, Contentful mutation, or seed content.

Batch 02.5 was approved after external validation returned PASS WITH NOTES, then reopened after first Gate B execution evidence. Historical Attempt #1 exited nonzero before creating schema because of Rich Text compatibility. Historical Attempt #2 exited nonzero after creating/publishing `siteSettings` and `personProfile` because of `socialLink.url` RE2 validation. Batch 02.5 was re-approved after the RE2 correction. Separately authorized destructive recovery completed, Fresh Gate A passed, and current Attempt #3 executed the RE2-corrected migration successfully against `dev` with exit 0. External Gate B validation returned PASS WITH NOTES and approved Batch 02.6. The Gate B and destructive recovery authorizations are consumed; additional bootstrap execution, additional dev reset, fixtures, frontend implementation, and seed content remain unauthorized.

Batch 02.7 is approved after external validation returned PASS WITH NOTES for a read-only live comparison with zero material contract drift across 10 content types, 99 stored fields, 18 authored references, 102 validation objects, 10 display fields, and 2 explicit editor-interface overrides. `master` remains blank and protected; `dev` remains at 0 entries / 0 assets / `en-US`. Phase 02 is complete / frozen.

Batch 03.1 is approved after external validation returned PASS WITH NOTES. Its non-destructive preflight passed repository, migration-integrity, helper-syntax, secret-safe configuration, and GET-only live-baseline gates. It delegated TG-01, TG-02, and TG-03 to Batch 03.2 and confirmed TG-04 required no correction.

Batch 03.2 is approved after external validation returned PASS WITH NOTES. TG-01 is corrected / approved through programmatic export/import APIs and explicit `process.env.CONTENTFUL_MANAGEMENT_TOKEN` binding without persisted CLI authentication. TG-02 is corrected / approved through strict content, Asset, tag, role, and webhook exclusion. TG-03 is corrected / approved through checksum-anchored exact semantic snapshot verification; the positive synthetic fixture and all required negative drift cases pass. TG-04 remains no correction required. At Batch 03.2 closeout, Batch 03.3 had not started and no Contentful call, export, snapshot creation, destructive rotation, import, bootstrap, or seed had occurred.

Batch 03.3 read-only pre-execution Attempt 1 stopped before any Contentful request because the local snapshot override was invalid under the governed timestamped filename contract. The tracked naming/configuration correction and final reconciliation are externally validated after PASS WITH NOTES verdicts. Blank/unset `CONTENTFUL_MODEL_SNAPSHOT` during export generates the governed UTC timestamped filename, while direct verifier invocation requires an explicit path. The corrective Git checkpoint and human local correction are complete. The full pre-execution gate later passed with notes and was externally validated.

Current CMA environment readiness evidence uses `sys.status.sys.id`. Observed `sys.state` was absent in the current raw response. Do not silently substitute one representation for the other; record which field the evidence actually used.

One explicit export authorization was granted and consumed. Exactly one top-level governed export from `dev` exited 0 and produced the ignored snapshot `contentful-model.dev.v1.20260819T210704Z.json` with SHA-256 `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`. The SDK internally retried three rate-limited read-only GET requests inside that invocation; these were not equivalent to a second export attempt, and no second export operation occurred. Semantic verification passed with 0 material failures, and external validation returned PASS WITH NOTES and approved the snapshot for recovery use. The Export + Snapshot Approval Reconciliation and External Final Reconciliation Validation each returned PASS WITH NOTES. Batch 03.3 is approved / checkpointed. At that checkpoint, Batch 03.4 was next / not started and destructive execution remained separately gated.

Batch 03.4 preflight Attempt 1 failed closed before Contentful access because of stale active safety truth. The correction was externally approved and checkpointed at `e7a613a7710e15050b5d5959d3e71b88f8598432`. Attempt 2 passed Gates A–J with 23 fresh GETs and 0 writes. Initial Gate K blocked on uncompiled CLI source loading; a read-only corrective gate selected the public `contentful-management` SDK and made 0 Contentful requests.

The initial execution start then stopped before Contentful access because `npm ls contentful-management --depth=0` falsely required a direct root dependency. It made 0 DELETE and 0 CREATE attempts, so authorization remained unconsumed. External review approved continuation without package changes. The resumed JIT baseline passed with 13 GETs. Public `contentful-management` 12.10.0 then deleted `dev` exactly once and recreated `dev` exactly once from protected `master`, using one `DELETE`, one `PUT`, and 0 automatic retries. Authorization is CONSUMED.

Historical Batch 03.4 checkpoint state: independent validation used 14 GETs and 1 readiness poll. Recreated `dev` and protected `master` were ready and blank at 0 types / 0 entries / 0 assets / 0 tags / `en-US`; external rotation validation returned PASS WITH NOTES. Post-rotation reconciliation, external reconciliation validation, final approval reconciliation, and external final validation established the Batch 03.4 checkpoint. At that checkpoint, Batch 03.5 was next / not started with its read-only pre-execution gate first; second export, second rotation, import, additional bootstrap, and seed remained unauthorized.

Batch 03.5 passed its corrected read-only pre-execution and retry-semantics gates. Runtime evidence preserved `contentful-import` 10.0.18, `contentful-management` 12.10.0, `contentful-sdk-core` 9.4.5, SDK-default `retryOnError = true`, `retryLimit = 0`, and 0 effective automatic request replays. One explicit import authorization was granted and consumed when the sole top-level import invocation began. The command exited 1 after an HTTP 429 during Editor Interface import. No second import, repair, reset, bootstrap, additional export, or seed followed.

Twenty-three GET-only forensic requests made 0 writes and found exact `dev` + `master` topology, blank protected `master`, all 10 approved types present and published in `dev`, all 10 Editor Interfaces present, and 0 entries / 0 assets / 0 tags / `en-US`. The checksum-anchored semantic verifier returned 0 failures across the exact 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2 contract. Classification is `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT`: the import command failed operationally, while semantic recovery and clean-room comparison passed with zero material drift. External semantic recovery, reconciliation, and final validation returned PASS WITH NOTES. Truth-surface and Final Approval Reconciliation are complete; the commit containing this skill establishes the Batch 03.5 checkpoint, and Batch 03.6 is next / not started after successful checkpoint verification.

Approved Batch 02.2 standalone type IDs:

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

Approved standalone type count: 10.

Contract layer status:

- Type contract — APPROVED.
- Field + field-ID contract — APPROVED.
- References — APPROVED.
- Validations — APPROVED.
- Editorial rules — APPROVED.
- Migration — APPROVED RE2-CORRECTED / SUCCESSFULLY EXECUTED IN DEV.
- Pre-RE2 correction checksum — `46d5702fe8685d1b995eaf37dfb3097fda717e2a02dc2913464328c315e38c0c`.
- Approved RE2-corrected checksum — `4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`.
- Static preflight — APPROVED.
- Live contract comparison — APPROVED / 0 MATERIAL MISMATCHES.
- Seed content — NOT STARTED.

Decision summary:

- OD-07 — RESOLVED / APPROVED.
- OD-08 — RESOLVED / APPROVED. Skill = professional capability. Tool = product, platform, framework, technology, or software used to exercise a capability. Batch 02.2 later approves Tool as a standalone v1 type; Batch 02.3 approves Tool field IDs; Batch 02.4 approves Tool references and validations.
- OD-11 — RESOLVED / APPROVED. Certification / learning evidence is lightweight profile-owned content in v1. Batch 02.3 approves `personProfile.learningHighlights`; Batch 02.4 approves validation and editor guidance.
- OD-06 — RESOLVED / APPROVED.
- OD-12 — RESOLVED / APPROVED.
- OD-13 — RESOLVED / APPROVED.
- OD-15 — RESOLVED / APPROVED.

Remaining open decisions preserved for downstream work:

- OD-01
- OD-02
- OD-03
- OD-04
- OD-05
- OD-09
- OD-10
- OD-14

## Environment Model

- `master` = permanent protected baseline
- `dev` = single rotating sandbox
- `verification` = workflow state

Do not leave active instructions for:

- `master` plus a separate verification target
- `dev` as an alternative to a separate verification target
- persistent verification environment
- create verification
- delete verification

## Secret Safety Rules

- Never print token values.
- Never commit `.env.local`.
- Never read `.env.local` unless the user explicitly authorizes that in a separate request.
- Never pass management, delivery, or preview tokens through CLI arguments.
- Phase 03 export/import must bind `process.env.CONTENTFUL_MANAGEMENT_TOKEN` through installed programmatic APIs and must not depend on persisted CLI authentication.
- Never use browser-public prefixes for sensitive values.
- Use locally installed CLI tooling only.
- Verify secret presence without exposing values.
- Stop if credential exposure is suspected.
- Recommend rotation or revocation after suspected exposure.
- Do not rewrite Git history unless the repository owner explicitly approves it.

## Serial Verification

Approved fresh-dev lifecycle:

```text
validated dev
-> export approval
-> governed model-only export
-> snapshot validation and checksum approval
-> explicit destructive approval
-> delete dev exactly once
-> recreate dev exactly once from protected master
-> independent blank-state validation
-> explicit import approval
-> import snapshot exactly once
-> semantic comparison
-> declare dev verified
-> continue using dev
```

Never delete `dev` automatically.

Deletion requires explicit human approval in the active session after recoverability evidence is proven.

Current serial position:

```text
approved snapshot
✓

destructive preflight and credential gate
✓

explicit destructive authorization
✓ CONSUMED

delete dev exactly once
✓

recreate dev exactly once from protected master
✓

independent blank-state validation
✓

Batch 03.4 final reconciliation
✓

external final validation
✓ PASS WITH NOTES

Batch 03.4 checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS SKILL

Batch 03.5 read-only pre-execution gate
✓

retry-semantics corrective gate
✓

import authorization
✓ CONSUMED

single import invocation
✓ EXECUTED / EXIT 1 / 429 INCIDENT

mutation stop
✓

post-failure GET-only forensics
✓

semantic clean-room comparison
✓ PASS / ZERO MATERIAL DRIFT

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

Batch 03.5 checkpoint
✓ ESTABLISHED BY COMMIT CONTAINING THIS SKILL

Batch 03.6 Phase 03 Validation + Closeout
-> NEXT / NOT STARTED AFTER SUCCESSFUL CHECKPOINT VERIFICATION
```

## Documentation Ownership

Maintain consistency across:

- README
- TASKS
- PROJECT-STATE
- IMPLEMENTATION-ROADMAP
- DECISIONS
- phase docs
- environment strategy
- security docs
- content-model ledgers
- migrations
- snapshots
- CHANGELOG

## Phase Model

- 00 Baseline + Two-Environment Setup
- 01 Content Strategy + Route Contract
- 02 Content Model Contract + Bootstrap Migration
- 03 Model Export + Serial Clean-Room Verification
- 04 Editorial QA + Model Freeze
- 05 Representative Seed Content
- 06 Frontend Contracts + Adapter Boundary
- 07 Delivery Integration
- 08 Preview + Editorial Workflow
- 09 Quality Gates + Release

## Architecture Boundaries

- semantic CMS model
- migration-first schema governance
- raw Contentful shapes never enter presentational UI
- adapters normalize CMS data
- server-side sensitive tokens
- static fixtures retained until parity

## Status Vocabulary

- PASS
- PASS WITH NOTES
- PARTIAL
- BLOCKED
- NEEDS REVISION

## Evidence Rules

Never mark a task complete merely because documentation says it was planned.

Require direct repository, command, or CMS evidence before marking work complete.

## IDE Operating Modes

- audit
- repair
- implementation
- validation
- closeout

Mode rules:

- Audit: inspect only and report direct evidence.
- Repair: edit only the approved scope, then run safe static checks.
- Implementation: make authorized changes after inspection and preserve accepted architecture.
- Validation: run authorized checks and classify evidence.
- Closeout: confirm all required evidence, risks, and docs are aligned before marking a phase or batch complete.
