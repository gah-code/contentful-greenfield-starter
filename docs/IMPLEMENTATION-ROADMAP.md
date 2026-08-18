# Implementation Roadmap

Status: Phase 00 complete; Phase 01 complete / frozen; Phase 02 active; Batch 02.1 approved; Batch 02.2 approved; Batch 02.3 approved; Batch 02.4 approved; Batch 02.5 re-approved after compatibility correction; Batch 02.6 blocked pending fresh Gate A
Architecture style: greenfield, docs-first, reversible, contract-driven

## Phase Overview

| Phase | Name | Primary outcome | Runtime impact |
|---|---|---|---|
| 00 | Baseline + Two-Environment Setup | Complete; safe repository, secure tooling boundary, and governed `master` + `dev` operating model | None |
| 01 | Content Strategy + Route Contract | Complete / frozen; requirements system approved for Phase 02 input | None |
| 02 | Content Model Contract + Bootstrap Migration | Active; Batch 02.5 re-approved after compatibility correction; Batch 02.6 blocked pending fresh Gate A | CMS only |
| 03 | Model Export + Serial Clean-Room Verification | Approved model-only snapshot rebuilt into fresh `dev` from protected `master` | CMS only |
| 04 | Editorial QA + Model Freeze | Editor-friendly baseline v1 | CMS only |
| 05 | Representative Seed Content | Realistic draft entries after clean-room verification | CMS only |
| 06 | Frontend Contracts + Adapter Boundary | Stable CMS-agnostic data contracts | Code only |
| 07 | Delivery Integration | Published content loaded route by route | Runtime |
| 08 | Preview + Editorial Workflow | Safe draft preview | Runtime |
| 09 | Quality Gates + Release | Contract, content, SEO, and deployment confidence | Production |

## Recommended Dependency Order

```text
00 -> 01 -> 02 -> 03 -> 04 -> 05 -> 06 -> 07 -> 08 -> 09
```

Do not skip Phase 03. A serial clean-room rebuild of `dev` proves that the approved model snapshot is portable before seed content begins.

## Current Progression

```text
Phase 00 — COMPLETE

Phase 01 — COMPLETE / FROZEN
Batch 01.1 — APPROVED
Batch 01.2 — APPROVED
Batch 01.3 — APPROVED
Batch 01.4 — APPROVED
Batch 01.5 — APPROVED

Phase 02 — ACTIVE
Batch 02.1 — APPROVED
Batch 02.2 — APPROVED
Batch 02.3 — APPROVED
Batch 02.4 — APPROVED
Batch 02.5 — RE-APPROVED AFTER COMPATIBILITY CORRECTION
Batch 02.6 — BLOCKED PENDING FRESH GATE A
Batch 02.7 — LATER
```

## Phase 00 — Baseline + Two-Environment Setup

Current state: COMPLETE.

### Goal

Create a safe operating surface before any content type is created.

### Deliverables

- repository tracking files
- local CLI installation
- environment variable template
- documented two-environment strategy: protected `master` + rotating `dev`
- pending evidence list for Contentful account, space, locale, `master`, and `dev`
- explicit Phase 00 batch model
- completed Phase 00 closeout after all gates pass

### Exit criteria

- Batch 00.3 alignment and secret-safety evidence passes
- Batch 00.4 Contentful account, space, locale, and environment evidence passes
- Batch 00.5 records final risks and closeout verdict
- `docs/PROJECT-STATE.md` is current
- changelog entry is added without claiming premature phase completion

## Phase 01 — Content Strategy + Route Contract

Current state: COMPLETE / FROZEN. Latest approved batch: 01.5 — Validation + Freeze — APPROVED. Current phase: 02 — Content Model Contract + Bootstrap Migration — ACTIVE.

### Goal

Define what the website needs to communicate before finalizing CMS fields.

### Batch Decomposition

| Batch | Name | Status |
|---|---|---|
| 01.1 | Content Strategy Foundation | APPROVED |
| 01.2 | Route Contract | APPROVED |
| 01.3 | SEO + Metadata Contract | APPROVED |
| 01.4 | Content Requirements Matrix | APPROVED |
| 01.5 | Phase 01 Validation + Freeze | APPROVED |

### Confirm

- routes and route intent
- homepage section inventory
- project and article detail requirements
- experience and skill presentation
- SEO metadata requirements
- media requirements
- content that remains code-owned

### Approved Batch 01.1 Evidence

- `docs/system/CONTENT-STRATEGY.md` contains the reconciled strategy foundation.
- `docs/phases/PHASE-01-CONTENT-STRATEGY-AND-ROUTE-CONTRACT.md` records Phase 01 scope and Batch 01.1 approval state.
- `docs/system/ROUTE-CONTRACT.md` originally recorded preliminary route inventory that Batch 01.2 later formalized and approved.
- Bootstrap migration remains blocked and not run.
- Seed content remains not started.

### Approved Batch 01.2 Evidence

- External Batch 01.2 validation passed.
- `docs/system/ROUTE-CONTRACT.md` formalizes and approves all nine v1 route contracts.
- Route responsibility boundaries, route states, content readiness, internal linking, responsive intent, accessibility intent, directional SEO intent, and future CMS implication boundaries are documented.
- OD-07 — final formal v1 route contract — is resolved and approved.
- OD-08 — Skills vs Tools semantic boundary — is resolved and approved by Batch 01.4; Batch 02.2 later approves Tool as a standalone v1 type, and Batch 02.3 approves Tool field IDs.
- Detailed SEO metadata behavior remains deferred to Batch 01.3.
- Contentful schema and bootstrap migration work remain deferred.

### Approved Batch 01.3 Evidence

- External Batch 01.3 validation passed.
- `docs/system/SEO-AND-METADATA-CONTRACT.md` documents the formal SEO + metadata contract.
- Option 2 hybrid SEO ownership is approved.
- Future editorial SEO overrides are limited conceptually to SEO title, SEO description, and social image.
- Canonical URLs, robots/indexability, sitemap eligibility, structured data, breadcrumbs, preview exclusion, and fallback resolution remain code/state-derived.
- The broad legacy `seoMetadata` proposal was classified as PROPOSED / REQUIRES PHASE 02 RECONCILIATION by Batch 01.3; Batch 02.2 later rejects it as a standalone v1 type and absorbs SEO override concepts into owning content.
- OD-15 — SEO override/default strategy — is resolved by the Batch 01.3 contract.
- Exact Contentful field representation, frontend metadata implementation, and bootstrap migration work remain deferred.

### Approved Batch 01.4 Evidence

- External Batch 01.4 validation passed.
- `docs/system/CONTENT-REQUIREMENTS-MATRIX.md` documents the canonical Content Requirements Matrix.
- All nine approved v1 routes are represented.
- Required, optional, conditional, deferred, and not-applicable requirements are classified.
- Editorial, code, derived, and mixed ownership is classified.
- Canonical reuse, route readiness, fixture, media, accessibility, SEO-input, public-safety, and Phase 02 handoff requirements are documented.
- Content-type pressure remains controlled and below the 25-type cap.
- OD-08 — Skills vs Tools semantic boundary — is resolved.
- Contentful schema work, frontend implementation, fixtures, seed content, and bootstrap migration work remain deferred.
- Batch 01.5 — Phase 01 Validation + Freeze — is approved.

### Batch 01.5 Validation Evidence

- `docs/phases/PHASE-01-CONTENT-STRATEGY-AND-ROUTE-CONTRACT.md` records the Phase 01 freeze validation and closeout.
- External Batch 01.5 validation returned PASS WITH NOTES and approved the Phase 01 requirements freeze.
- Content Strategy, Route Contract, SEO + Metadata Contract, and Content Requirements Matrix inputs are cross-validated.
- Remaining open decisions are classified as content authoring or Phase 02 model decisions and do not block the Phase 01 requirements freeze.
- Proposed Contentful model artifacts remain Phase 02 reconciliation inputs only.
- No Contentful schema work, migration, fixtures, frontend implementation, seed content, or Phase 02 implementation is authorized by Phase 01 closeout.

### Exit criteria

- content inventory approved
- route ownership documented
- field mapping gaps identified
- page builder remains deferred or is explicitly justified

## Phase 02 — Content Model Contract + Bootstrap Migration

Current state: ACTIVE. Latest approved batch: 02.5 — Bootstrap Migration Reconciliation + Preflight — RE-APPROVED AFTER COMPATIBILITY CORRECTION. Batch 02.6 is blocked pending fresh Gate A after a clean Git checkpoint.

### Goal

Translate frozen Phase 01 requirements into a lean, stable, migration-governed Contentful model, then create the approved core model in `dev` only after the execution gate passes.

### Batch Decomposition

| Batch | Name | Status |
|---|---|---|
| 02.1 | Entry + Existing Model Reconciliation | APPROVED |
| 02.2 | Content Type Contract | APPROVED |
| 02.3 | Field + Field-ID Contract | APPROVED |
| 02.4 | References + Validations + Editorial Contract | APPROVED |
| 02.5 | Bootstrap Migration Reconciliation + Preflight | RE-APPROVED AFTER COMPATIBILITY CORRECTION |
| 02.6 | Bootstrap Migration Execution | BLOCKED PENDING FRESH GATE A |
| 02.7 | Phase 02 Validation + Closeout | LATER |

### Approved Batch 02.1 Evidence

- Frozen Phase 01 contracts are authoritative inputs.
- Existing content-model ledgers remain proposed.
- The bootstrap migration remains proposed and read-only until later approval.
- At Batch 02.1 closeout, legacy broad `seoMetadata`, Tool representation, Learning/Certification representation, Skill/SkillGroup scope, taxonomy, related content, field IDs, references, validations, and migration diff were queued for Phase 02 decisions.
- Public-safety requirements do not automatically imply a CMS field.
- Media alt/context requirements do not automatically approve a media wrapper or exact asset-metadata strategy.
- Bootstrap migration remains BLOCKED / NOT RUN.
- Seed content remains NOT STARTED.

### Approved Batch 02.2 Evidence

- External Batch 02.2 validation returned PASS WITH NOTES.
- `docs/content-model/CONTENT-TYPE-LEDGER.md` approves the v1 standalone content type inventory and stable type IDs.
- Approved standalone types: `siteSettings`, `personProfile`, `socialLink`, `navigationItem`, `project`, `article`, `experienceItem`, `skill`, `skillGroup`, and `tool`.
- Approved standalone type count: 10, under the <=25 cap.
- Approved non-standalone concepts: broad `seoMetadata`, Learning/Certification, Contact, Media, dedicated Taxonomy, and generic Page/PageSection/component types do not become standalone v1 types.
- OD-11 — certification / learning representation — is resolved as lightweight profile-owned content.
- At Batch 02.2 closeout, fields, field IDs, references, validations, editor interfaces, and migration implementation remained deferred. Batch 02.3 later approves fields and field IDs.

### Approved Batch 02.3 Evidence

- External Batch 02.3 validation returned PASS WITH NOTES.
- `docs/content-model/FIELD-ID-LEDGER.md` approves the field and field-ID contract for all 10 approved types.
- Project and Article SEO override field IDs are `seoTitle`, `seoDescription`, and `socialImage`.
- Relationship field intents are approved, and Batch 02.4 approves the reference map, validations, display fields, singleton rules, and editor guidance after external validation.
- Legacy `canonicalUrl`, `noIndex`, `noFollow`, `readingTimeMinutes`, `proficiency`, broad `seoMetadata`, and presentation-shaped fields are reconciled as remove/replace/derived/code-owned as applicable.
- Lightweight Learning/Certification is approved as profile-owned `learningHighlights`.
- Public safety remains governance/readiness-owned, not a blanket CMS boolean.
- Bootstrap migration files, snapshots, reports, Contentful scripts, fixtures, and frontend/application files remain unchanged.
- Batch 02.4 — References + Validations + Editorial Contract — is approved.

### Approved Batch 02.5 Evidence

- `content-model/migrations/0001-bootstrap-portfolio-model.js` is reconciled to the approved v1 model contract.
- The migration implements exactly the 10 approved standalone type IDs and adds approved `tool`.
- Legacy broad SEO, technical SEO, derived reading-time, skill proficiency, and page-builder schema drift are removed from the active migration schema.
- Approved fields, authored references, target restrictions, requiredness, hard validations where supported, Asset/Rich Text boundaries, v1 non-localization, and display fields are implemented.
- `content-model/reports/PHASE-02-BATCH-02.5-MIGRATION-PREFLIGHT.md` records non-canonical preflight evidence, enforcement gaps, wrapper safety review, and Batch 02.6 execution gates.
- External Batch 02.5 validation returned PASS WITH NOTES.
- `node --check content-model/migrations/0001-bootstrap-portfolio-model.js` passes.
- No Contentful command was run.
- Migration execution remains NOT RUN.
- Bootstrap remains blocked pending Batch 02.6 execution gates.

### Reopened Batch 02.5 Reapproval Evidence

- First Batch 02.6 Gate B execution was attempted once and exited nonzero.
- Live read-only checks found `dev` still blank: 0 content types, 0 entries, 0 assets, and `en-US` locale.
- Investigation identified unsupported Rich Text `enabledNodeTypes` in the migration and a secondary missing noninteractive confirmation flag.
- Batch 02.5 was reopened for narrow compatibility correction and re-approved after external revalidation.
- Corrected migration remains unexecuted.
- Batch 02.6 retry remains unauthorized.
- Next operational step is fresh Gate A after commit/push and clean `0 0`.

### Execution Gate

Bootstrap migration execution remains blocked until fresh Batch 02.6 Gate A verifies:

- content type inventory
- type IDs
- field ledger
- reference map
- validations
- approved migration diff
- Batch 02.5 external approval recorded
- explicit target environment = `dev`
- master protection
- expected blank `dev` baseline
- explicit human approval before execution

### Exit criteria

- model exists in `dev`
- no model exists in `master`
- editor interface is usable
- every field has a clear frontend purpose

## Phase 03 — Model Export + Serial Clean-Room Verification

### Goal

Prove that the approved model-only snapshot is portable by rebuilding `dev` from protected `master` and importing the snapshot into fresh `dev`.

### Destructive gates before deleting `dev`

- verified model-only snapshot exists
- snapshot checksum is recorded
- CLI/runtime metadata is recorded
- pre-deletion model evidence is recorded
- committed migration history is confirmed
- `dev` contains no irreplaceable content
- recovery procedure is documented
- explicit human approval is given in the active session

### Tasks

- develop and review the model in `dev`
- export the approved model-only snapshot
- verify the snapshot structure
- record checksum and CLI/runtime metadata
- record pre-deletion model evidence
- complete the destructive gates
- delete `dev` only after explicit approval
- recreate `dev` from protected `master`
- confirm fresh `dev` state
- import the model-only snapshot into `dev`
- compare rebuilt `dev` to pre-deletion evidence
- declare `dev` verified and continue using it

### Exit criteria

- clean-room import into fresh `dev` passes
- snapshot is stored and reviewed
- model count and field count match pre-deletion evidence
- default locale is compatible
- no seed content starts before verified `dev` is declared

## Phase 04 — Editorial QA + Model Freeze

### Goal

Freeze model version `1.0.0`.

### Tasks

- create one draft entry of every type
- test entry titles and reference selection
- test required fields and error messages
- test media selection
- test slug workflow
- confirm model names make sense to an editor
- write editorial guidance

### Exit criteria

- editor QA passes
- model ledger is complete
- baseline export is labeled `1.0.0`
- later changes require numbered migrations

## Phase 05 — Representative Seed Content

### Goal

Create enough realistic content to validate the website after Phase 03 clean-room verification succeeds.

### Minimum seed

- 1 site settings entry
- 1 person profile
- 5-7 navigation items
- 3 projects
- 3 articles
- 4 experience items
- 12-20 skills
- 4-6 skill groups

### Exit criteria

- all primary references resolve
- draft and published states are understood
- sample content supports frontend implementation

## Phase 06 — Frontend Contracts + Adapter Boundary

### Goal

Freeze UI-facing data shapes before connecting Contentful.

### Rules

- no raw `fields`, `sys`, or includes inside UI components
- routes consume normalized page data
- adapters own reference resolution and URL construction
- static fixtures remain available

### Exit criteria

- contracts documented
- adapters tested with representative entries
- UI still works with static fixtures

## Phase 07 — Delivery Integration

### Goal

Replace fixtures route by route.

### Order

1. global settings and navigation
2. profile and homepage data
3. projects index
4. project detail
5. writing index
6. article detail
7. experience and skills

### Exit criteria

- published content renders
- missing references fail safely
- SEO metadata resolves
- static fallback remains available until parity

## Phase 08 — Preview + Editorial Workflow

### Goal

Render draft content through a controlled preview path.

### Exit criteria

- preview token remains server-side
- draft state is visibly labeled
- exit-preview behavior works
- published runtime is unaffected

## Phase 09 — Quality Gates + Release

### Goal

Validate the complete content system.

### Checks

- model contract checks
- route smoke tests
- accessibility
- responsive behavior
- SEO metadata
- sitemap or route inventory
- bundle secret scan
- documentation closeout
- rollback procedure
