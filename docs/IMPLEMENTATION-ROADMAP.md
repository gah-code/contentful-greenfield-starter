# Implementation Roadmap

Status: Phase 00 closeout in review
Architecture style: greenfield, docs-first, reversible, contract-driven

## Phase Overview

| Phase | Name | Primary outcome | Runtime impact |
|---|---|---|---|
| 00 | Baseline + Two-Environment Setup | Safe repository, secure tooling boundary, and governed `master` + `dev` operating model; closeout in review | None |
| 01 | Content Strategy + Route Contract | Next after external Phase 00 approval; approved content inventory and ownership | None |
| 02 | Content Model Contract + Bootstrap Migration | Core model created in `dev` | CMS only |
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

## Phase 00 — Baseline + Two-Environment Setup

Current state: CLOSEOUT IN REVIEW. Phase 01 is next after external Phase 00 approval.

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

### Goal

Define what the website needs to communicate before finalizing CMS fields.

### Confirm

- routes and route intent
- homepage section inventory
- project and article detail requirements
- experience and skill presentation
- SEO metadata requirements
- media requirements
- content that remains code-owned

### Exit criteria

- content inventory approved
- route ownership documented
- field mapping gaps identified
- page builder remains deferred or is explicitly justified

## Phase 02 — Content Model Contract + Bootstrap Migration

### Goal

Create the lean core model in `dev`.

### Tasks

- review `0001-bootstrap-portfolio-model.js`
- approve content type IDs and field IDs
- run migration only against `dev`
- inspect entry titles, reference pickers, slugs, labels, and validations
- record adjustments as a new migration, not silent UI edits

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
