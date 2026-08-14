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
Model target: 10 semantic content types

## Project Mantra

Content strategy before content models.
Routes before templates.
UI contracts before CMS data.
Static fixtures before Contentful.
Validation before closeout.
Documentation is part of the build.

## Current State

- Phase 00 — COMPLETE.
- Phase 01 — ACTIVE.
- 01.1 — APPROVED.
- 01.2 — APPROVED.
- 01.3 — NEXT.
- 01.4 — LATER.
- 01.5 — LATER.
- Phase 02 — DEFERRED.
- Bootstrap migration — BLOCKED / NOT RUN.
- Seed content — NOT STARTED.

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
