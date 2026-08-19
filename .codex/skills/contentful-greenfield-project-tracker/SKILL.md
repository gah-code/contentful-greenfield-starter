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
Model target: approved and frozen 10-type v1 semantic model; RE2-corrected migration executed successfully in `dev`; Batch 02.7 live validation approved with zero material drift; Phase 03 Batch 03.3 governed export complete and snapshot externally approved for recovery use

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
- `dev` — 10 types / 99 fields / 18 authored references / 0 entries / 0 assets / en-US.
- Live contract drift — 0 material mismatches / externally approved.
- `master` — blank / protected / untouched.
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
- Export + Snapshot Approval Reconciliation — EXTERNALLY VALIDATED / PASS WITH NOTES.
- Final Approval Reconciliation — COMPLETE.
- External Final Reconciliation Validation — PASS WITH NOTES.
- Batch 03.3 checkpoint — ESTABLISHED.
- 03.4 — DESTRUCTIVE DEV ROTATION + BLANK-STATE VALIDATION — NEXT / NOT STARTED.
- 03.4 destructive execution — NOT AUTHORIZED.
- 03.5 — SNAPSHOT IMPORT + CLEAN-ROOM COMPARISON — LATER.
- 03.6 — PHASE 03 VALIDATION + CLOSEOUT — LATER.
- Pre-export tooling — APPROVED.
- Second export — NOT AUTHORIZED.
- Destructive rotation — NOT AUTHORIZED.
- Import — NOT AUTHORIZED / NOT RUN.
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

One explicit export authorization was granted and consumed. Exactly one top-level governed export from `dev` exited 0 and produced the ignored snapshot `contentful-model.dev.v1.20260819T210704Z.json` with SHA-256 `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`. The SDK internally retried three rate-limited read-only GET requests inside that invocation; these were not equivalent to a second export attempt, and no second export operation occurred. Semantic verification passed with 0 material failures, and external validation returned PASS WITH NOTES and approved the snapshot for recovery use. The Export + Snapshot Approval Reconciliation and External Final Reconciliation Validation each returned PASS WITH NOTES. Batch 03.3 is approved / checkpointed. Batch 03.4 is next / not started, but its destructive execution is not authorized. A second export, destructive rotation, `dev` deletion/recreation, import, bootstrap, and seed remain unauthorized.

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
