# Implementation Roadmap

Status: proposed and active  
Architecture style: greenfield, docs-first, reversible, contract-driven

## Phase Overview

| Phase | Name | Primary outcome | Runtime impact |
|---|---|---|---|
| 00 | Baseline + New Environment Setup | Safe repository and blank CMS environments | None |
| 01 | Content Strategy + Route Contract | Approved content inventory and ownership | None |
| 02 | Content Model Contract + Bootstrap Migration | Core model created in `dev` | CMS only |
| 03 | Model Export + Clean Import Verification | Portable, verified model snapshot | CMS only |
| 04 | Editorial QA + Model Freeze | Editor-friendly baseline v1 | CMS only |
| 05 | Representative Seed Content | Realistic draft entries | CMS only |
| 06 | Frontend Contracts + Adapter Boundary | Stable CMS-agnostic data contracts | Code only |
| 07 | Delivery Integration | Published content loaded route by route | Runtime |
| 08 | Preview + Editorial Workflow | Safe draft preview | Runtime |
| 09 | Quality Gates + Release | Contract, content, SEO, and deployment confidence | Production |

## Recommended Dependency Order

```text
00 → 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09
```

Do not skip Phase 03. A clean import into a second environment proves that the model is portable and that the export is usable.

## Phase 00 — Baseline + New Environment Setup

### Goal

Create a safe operating surface before any content type is created.

### Deliverables

- repository tracking files
- local CLI installation
- environment variable template
- blank `dev` and `verification` environments
- confirmed default locale
- `master` remains untouched
- completed Phase 00 closeout

### Exit criteria

- all Phase 00 tasks are checked
- environment IDs are documented
- safety scripts pass
- `docs/PROJECT-STATE.md` is current
- changelog entry is added

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

## Phase 03 — Model Export + Clean Import Verification

### Goal

Prove that the approved model is portable.

### Tasks

- export model from `dev`
- inspect the JSON
- import with `--content-model-only` into `verification`
- compare content types and editor interfaces
- record limitations and mismatches
- rerun export after any approved corrections

### Exit criteria

- clean import passes
- snapshot is stored and reviewed
- model count and field count match
- default locale is compatible
- no content, roles, or webhooks are required for the model bootstrap

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

Create enough realistic content to validate the website.

### Minimum seed

- 1 site settings entry
- 1 person profile
- 5–7 navigation items
- 3 projects
- 3 articles
- 4 experience items
- 12–20 skills
- 4–6 skill groups

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
