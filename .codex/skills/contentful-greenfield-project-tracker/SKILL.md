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
Model target: approved 10 standalone v1 semantic content types; field and field-ID contract approved; reference, validation, and editorial contract approved; migration remains downstream Phase 02 work

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
- Phase 02 — ACTIVE.
- 02.1 — APPROVED.
- 02.2 — APPROVED.
- 02.3 — APPROVED.
- 02.4 — APPROVED.
- 02.5 — NEXT.
- 02.6 — LATER.
- 02.7 — LATER.
- Bootstrap migration — BLOCKED / NOT RUN.
- Seed content — NOT STARTED.

Batch 01.3 approved hybrid SEO ownership: editorial SEO overrides are limited conceptually to title, description, and social image; technical SEO remains code/state-derived. Exact Contentful representation and schema implementation remain deferred to Phase 02.

Batch 01.4 approved the Content Requirements Matrix and does not authorize Contentful schema, fixture, frontend, migration, bootstrap, seed, or Phase 02 implementation.

Batch 01.5 approved the Phase 01 requirements freeze after external validation returned PASS WITH NOTES.

Batch 02.1 is approved after external validation returned PASS WITH NOTES. It reconciled proposed model artifacts against frozen Phase 01 requirements and does not approve content types, fields, field IDs, references, validations, migration changes, bootstrap execution, fixtures, frontend implementation, or seed content.

Batch 02.2 is approved after external validation returned PASS WITH NOTES. It approves the v1 standalone content type inventory and stable type IDs in `docs/content-model/CONTENT-TYPE-LEDGER.md`; it does not approve fields, field IDs, references, validations, migration changes, bootstrap execution, fixtures, frontend implementation, or seed content.

Batch 02.3 is approved after external validation returned PASS WITH NOTES. It approves the field and field-ID contract in `docs/content-model/FIELD-ID-LEDGER.md`; it does not approve reference cardinality, target restrictions, validations, editor interfaces, migration changes, bootstrap execution, fixtures, frontend implementation, or seed content.

Batch 02.4 is approved after external validation returned PASS WITH NOTES. It approves the reference, validation, and editorial contract in `docs/content-model/REFERENCE-MAP.md` and `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md`; supplemental external decision validation resolves OD-06, OD-12, and OD-13 without changing the approved contracts. It does not approve migration changes, bootstrap execution, fixtures, frontend implementation, Contentful mutation, or seed content.

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
- Migration — BLOCKED / NOT RUN.
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
- Never use browser-public prefixes for sensitive values.
- Use locally installed CLI tooling only.
- Verify secret presence without exposing values.
- Stop if credential exposure is suspected.
- Recommend rotation or revocation after suspected exposure.
- Do not rewrite Git history unless the repository owner explicitly approves it.

## Serial Verification

Approved fresh-dev lifecycle:

```text
develop model in dev
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
