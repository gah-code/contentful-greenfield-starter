# Implementation Roadmap

Status: Phase 00 complete; Phase 01 complete / frozen; Phase 02 complete / frozen; Phase 03 complete / frozen; Phase 04 active by the commit containing this roadmap; Batch 04.1 approved / checkpointed; Batch 04.2 next / not started after successful 04.1 checkpoint verification
Architecture style: greenfield, docs-first, reversible, contract-driven

## Phase Overview

| Phase | Name | Primary outcome | Runtime impact |
|---|---|---|---|
| 00 | Baseline + Two-Environment Setup | Complete; safe repository, secure tooling boundary, and governed `master` + `dev` operating model | None |
| 01 | Content Strategy + Route Contract | Complete / frozen; requirements system approved for Phase 02 input | None |
| 02 | Content Model Contract + Bootstrap Migration | Complete / frozen; approved live model has zero material drift | CMS only |
| 03 | Model Export + Serial Clean-Room Verification | Complete / frozen; 22 of 22 exit criteria pass; zero-drift recovered model checkpointed | CMS only |
| 04 | Editorial QA + Model Freeze | Active by the commit containing this roadmap; editor-tested, migration-governed v1 model freeze candidate | CMS only |
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

Phase 02 — COMPLETE / FROZEN
Batch 02.1 — APPROVED
Batch 02.2 — APPROVED
Batch 02.3 — APPROVED
Batch 02.4 — APPROVED
Batch 02.5 — RE-APPROVED AFTER RE2 COMPATIBILITY CORRECTION
Batch 02.6 — APPROVED — BOOTSTRAP EXECUTED SUCCESSFULLY IN DEV
Batch 02.7 — APPROVED — LIVE CONTRACT VALIDATED

Phase 03 — COMPLETE / FROZEN
Batch 03.1 — APPROVED
Batch 03.2 — APPROVED
Batch 03.3 — APPROVED / CHECKPOINTED
Batch 03.4 — APPROVED / CHECKPOINTED
Batch 03.5 — APPROVED / CHECKPOINTED
Batch 03.6 — APPROVED / CHECKPOINTED
Phase 04 — ACTIVE BY THE COMMIT CONTAINING THIS ROADMAP
Batch 04.1 — APPROVED / CHECKPOINTED
Batch 04.2 — NEXT / NOT STARTED
Batch 04.3 — LATER
Batch 04.4 — LATER
Batch 04.5 — LATER
Batch 04.6 — LATER
Pre-export tooling — APPROVED
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

Current state: COMPLETE / FROZEN. Latest approved batch: 01.5 — Validation + Freeze — APPROVED. Phase 02 and Phase 03 are COMPLETE / FROZEN. Phase 04 is ACTIVE BY THE COMMIT CONTAINING THIS ROADMAP; Batch 04.1 is APPROVED / CHECKPOINTED and Batch 04.2 is NEXT / NOT STARTED.

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
- At Batch 01.1 closeout, the bootstrap migration remained blocked and not run.
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

Current state: COMPLETE / FROZEN. Batch 02.6 — Bootstrap Migration Execution — is APPROVED after successful execution in `dev`. Batch 02.7 — Phase 02 Validation + Closeout — is APPROVED after external validation returned PASS WITH NOTES for a read-only comparison with zero material drift.

### Goal

Translate frozen Phase 01 requirements into a lean, stable, migration-governed Contentful model, then create the approved core model in `dev` only after the execution gate passes.

### Batch Decomposition

| Batch | Name | Status |
|---|---|---|
| 02.1 | Entry + Existing Model Reconciliation | APPROVED |
| 02.2 | Content Type Contract | APPROVED |
| 02.3 | Field + Field-ID Contract | APPROVED |
| 02.4 | References + Validations + Editorial Contract | APPROVED |
| 02.5 | Bootstrap Migration Reconciliation + Preflight | RE-APPROVED AFTER RE2 COMPATIBILITY CORRECTION |
| 02.6 | Bootstrap Migration Execution | APPROVED — EXECUTED SUCCESSFULLY IN DEV |
| 02.7 | Phase 02 Validation + Closeout | APPROVED |

### Approved Batch 02.1 Evidence

- Frozen Phase 01 contracts are authoritative inputs.
- Existing content-model ledgers remain proposed.
- The bootstrap migration remains proposed and read-only until later approval.
- At Batch 02.1 closeout, legacy broad `seoMetadata`, Tool representation, Learning/Certification representation, Skill/SkillGroup scope, taxonomy, related content, field IDs, references, validations, and migration diff were queued for Phase 02 decisions.
- Public-safety requirements do not automatically imply a CMS field.
- Media alt/context requirements do not automatically approve a media wrapper or exact asset-metadata strategy.
- At Batch 02.1 closeout, the bootstrap migration remained BLOCKED / NOT RUN.
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
- At the original Batch 02.5 closeout, no Contentful command was run and migration execution remained gated. Later incident and successful execution evidence is recorded below.

### Reopened Batch 02.5 Reapproval Evidence

- First Batch 02.6 Gate B execution was attempted once and exited nonzero.
- Live read-only checks found `dev` still blank: 0 content types, 0 entries, 0 assets, and `en-US` locale.
- Investigation identified unsupported Rich Text `enabledNodeTypes` in the migration and a secondary missing noninteractive confirmation flag.
- Batch 02.5 was reopened for narrow compatibility correction and re-approved after external revalidation.
- Corrected Gate B retry executed once after Fresh Gate A external validation and explicit human authorization.
- The retry failed on `socialLink.url` URL regex validation after creating/publishing `siteSettings` and `personProfile`.
- Batch 02.5 was reopened again for complete regex/RE2 compatibility correction and re-approved after external validation returned PASS WITH NOTES.
- At that incident closeout, migration retry and destructive dev recovery were unauthorized.
- A later separately authorized recovery completed, Fresh Gate A passed, and current Attempt #3 executed successfully.

### Recovery Sequence After RE2 Correction

Status: COMPLETE. Each authorization was single-use and is now consumed.

```text
02.5 RE2 correction approval
-> Git checkpoint
-> explicit dev recovery authorization
-> dev reset/recreation
-> verify blank dev
-> Fresh Gate A
-> new Gate B authorization
```

### Batch 02.6 Approval Evidence

- External Gate B validation returned PASS WITH NOTES.
- Overall Attempt #3, the first execution of the current RE2-corrected checksum, targeted `dev` and exited 0.
- All 10 approved content types were created and published with no missing or unexpected type IDs.
- Post-execution `dev`: 10 content types / 0 entries / 0 assets / en-US.
- `master` remained untouched and blank: 0 content types / 0 entries / 0 assets / en-US.
- Gate B authorization is consumed; additional bootstrap execution is not authorized.
- Destructive recovery completed under separate approval; additional environment reset is not authorized.
- Seed content remains NOT STARTED.
- Sanitized evidence is recorded in `content-model/reports/PHASE-02-BATCH-02.6-BOOTSTRAP-EXECUTION.md`.

### Batch 02.7 Approval Evidence

Status: APPROVED. External validation: PASS WITH NOTES.

Completed read-only validation:

- content type inventory
- type IDs
- field ledger
- reference map
- validations
- approved migration diff
- live model-versus-contract comparison
- editor controls and interfaces
- master protection evidence
- Phase 02 closeout and Phase 03 readiness review

Evidence: `content-model/reports/PHASE-02-BATCH-02.7-LIVE-SCHEMA-VALIDATION.md`.

Result: 10 / 10 types, 99 / 99 stored fields, 18 / 18 authored references, 102 / 102 validation objects, 10 / 10 display fields, 2 / 2 explicit editor controls, and 0 material mismatches.

Phase 02 and Phase 03 are COMPLETE / FROZEN. Batches 03.1 and 03.2 are APPROVED, and Batches 03.3 through 03.6 are APPROVED / CHECKPOINTED. Phase 04 is ACTIVE BY THE COMMIT CONTAINING THIS ROADMAP; Batch 04.1 is APPROVED / CHECKPOINTED and Batch 04.2 is NEXT / NOT STARTED.

### Exit criteria

- model exists in `dev`
- no model exists in `master`
- editor interface is usable
- every field has a clear frontend purpose

## Phase 03 — Model Export + Serial Clean-Room Verification

Current state: COMPLETE / FROZEN. Batch 03.1 — Model Export + Serial Clean-Room Verification Preflight — APPROVED. Batch 03.2 — Export, Import + Snapshot Verification Tooling Hardening — APPROVED. Batch 03.3 — Governed Model Export + Snapshot Validation — APPROVED / CHECKPOINTED. Batch 03.4 — Destructive Dev Rotation + Blank-State Validation — APPROVED / CHECKPOINTED. Batch 03.5 — Snapshot Import + Clean-Room Comparison — APPROVED / CHECKPOINTED. Batch 03.6 — Phase 03 Validation + Closeout — APPROVED / CHECKPOINTED. Phase 04 is ACTIVE BY THE COMMIT CONTAINING THIS ROADMAP.

Pre-export tooling: APPROVED. One governed export from `dev` completed under consumed one-time authorization, and the resulting snapshot remains externally approved for recovery use. Batch 03.4 completed exactly one authorized `dev` deletion and recreation from protected `master`. Batch 03.5 then consumed one import authorization; the sole top-level import command exited 1 after an HTTP 429 with 0 automatic request replays. Twenty-three GET-only forensic requests independently proved that current `dev` contains the complete approved recovery model at 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2, 0 entries / 0 assets / 0 tags / `en-US`, and zero material drift. External semantic recovery, reconciliation, and final validation returned PASS WITH NOTES. The commit containing this state establishes the Batch 03.5 checkpoint, and no second import or repair is authorized.

Seed content has not started.

### Goal

Prove that the approved model-only snapshot is portable by rebuilding `dev` from protected `master` and importing the snapshot into fresh `dev`.

### Batch Architecture

Batch 03.1 external approval established this Phase 03 sequence:

| Batch | Name | Status |
|---|---|---|
| 03.1 | Model Export + Serial Clean-Room Verification Preflight | APPROVED |
| 03.2 | Export, Import + Snapshot Verification Tooling Hardening | APPROVED |
| 03.3 | Governed Model Export + Snapshot Validation | APPROVED / CHECKPOINTED |
| 03.4 | Destructive Dev Rotation + Blank-State Validation | APPROVED / CHECKPOINTED |
| 03.5 | Snapshot Import + Clean-Room Comparison | APPROVED / CHECKPOINTED |
| 03.6 | Phase 03 Validation + Closeout | APPROVED / CHECKPOINTED BY THE CONTAINING COMMIT |

Batch 03.2 external validation returned PASS WITH NOTES. TG-01 credential binding, TG-02 strict export scope, and TG-03 exact snapshot verification are corrected / approved. TG-04 requires no repository lifecycle helper under the existing exact-command and separate-approval policy.

Batch 03.3 pre-execution Attempt 1 blocked on a local snapshot selector mismatch before any Contentful request. The tracked Snapshot Naming + Configuration Contract correction and final reconciliation are EXTERNALLY VALIDATED / PASS WITH NOTES, the corrective Git checkpoint is complete, and the human local selector correction is complete. The full read-only pre-execution gate later passed with notes; current raw CMA evidence represented readiness through `sys.status.sys.id = ready` while `sys.state` was absent.

Exactly one authorized governed export from `dev` exited 0. Three rate-limited GET requests were retried internally inside that single top-level invocation. The resulting ignored snapshot, `contentful-model.dev.v1.20260819T210704Z.json`, has SHA-256 `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a` and passed exact semantic and structural validation with zero material failures. External validation returned PASS WITH NOTES and approved it for recovery use. The Export + Snapshot Approval Reconciliation and External Final Reconciliation Validation each returned PASS WITH NOTES. Batch 03.3 is approved / checkpointed.

Batch 03.4 later passed the read-only destructive preflight and credential-path correction, then completed one separately authorized `dev` DELETE and one recreation from protected `master` with 0 automatic destructive retries. Independent validation confirmed recreated `dev` and protected `master` were ready and blank at 0 content types / 0 entries / 0 assets / 0 tags / `en-US`. Rotation/blank-state validation, external reconciliation validation, and external final validation returned PASS WITH NOTES, establishing the Batch 03.4 checkpoint.

Batch 03.5 passed its corrected pre-execution and retry-semantics gates, then consumed one explicit import authorization. The sole top-level import command returned nonzero after an HTTP 429 during Editor Interface processing. The workflow stopped mutations: no automatic replay, second import, repair, reset, bootstrap, additional export, or seed followed. Twenty-three GET-only forensic requests found all 10 approved content types published and all 10 Editor Interfaces present. The semantic verifier passed the exact recovery contract with zero failures and zero material drift, classified as `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT`. External semantic recovery, reconciliation, and final validation returned PASS WITH NOTES. The commit containing this state establishes the Batch 03.5 checkpoint.

Batch 03.6 preserves the initial final-live validator as an unresolved evidence-capture incident with 0 writes and no retry. One externally authorized corrective GET-only validator invocation passed with 23 GETs, 0 writes, exact topology, protected blank `master`, the complete recovered `dev` model, and zero material drift. All 22 Phase 03 technical exit criteria pass; external Batch 03.6 validation and External Final Validation returned PASS WITH NOTES. The containing commit establishes the Phase 03 closeout and Batch 03.6 checkpoint.

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

Current state: ACTIVE BY THE COMMIT CONTAINING THIS ROADMAP. Before that commit exists, committed repository truth remains Phase 04 — NEXT / NOT STARTED.

### Goal

Produce an editor-tested, migration-governed v1 model freeze candidate. The model version is NOT YET FROZEN; any version declaration is deferred to Batch 04.6 evidence.

### Batch Decomposition

| Batch | Name | Operation class | Status after containing commit |
| --- | --- | --- | --- |
| 04.1 | Read-Only Planning + Editorial-Quality Preflight | GET-only / repository reads | APPROVED / CHECKPOINTED |
| 04.2 | Editorial QA Scenario + Temporary Authoring Contract | REPOSITORY-ONLY | NEXT / NOT STARTED |
| 04.3 | Controlled Temporary Editorial QA Execution | SEPARATELY GATED CONTENTFUL MUTATION | LATER |
| 04.4 | Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections | Reconciliation / conditional mutation | LATER |
| 04.5 | Editorial Workflow + Field Guidance | REPOSITORY-ONLY | LATER |
| 04.6 | Model Freeze Validation + Phase 04 Closeout | READ-ONLY + REPOSITORY RECONCILIATION | LATER |

### Operating Boundaries

- Batch 04.2 assigns one primary enforcement owner to every scenario and resolves EF-05 ownership before 04.3 can be authorized.
- Temporary authoring in Batch 04.3 is not Phase 05 representative seed content.
- Batch 04.3 requires a fresh read-only gate, external validation, and explicit human authorization.
- Temporary QA cleanup is not automatic and requires separate evidence review, inventory, gate, authorization, zero-content proof, and external validation.
- Unexpected authoring failure stops execution and preserves evidence without automatic cleanup.
- Batch 04.4 always reconciles findings and may conclude `NO MODEL CORRECTION REQUIRED`.
- Any model or Editor Interface correction requires separate planning, external validation, explicit authorization, and migration-first governance; migration 0001 remains frozen.
- A new export or snapshot is not implicit in Phase 04 and remains separately gated.
- Seed remains NOT STARTED.

### Exit criteria

- core authoring scenarios are exercised
- validation behavior and enforcement ownership are understood
- reference-picker and Rich Text usability are validated
- Asset/accessibility workflow is validated to Phase 04 scope
- approved corrections, if any, are reconciled
- editorial workflow and field guidance exist
- temporary QA content is removed or intentionally accounted for
- final model validation passes
- model version/freeze decision is explicitly recorded
- truth surfaces align

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
