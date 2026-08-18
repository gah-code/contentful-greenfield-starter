# Decisions

## ADR-001 — Greenfield Contentful Environment

Status: accepted

Start from a new space or a blank Contentful environment rather than adapting an inherited model.

### Why

- removes legacy assumptions
- makes field ownership explicit
- allows model verification before content migration
- supports clean export/import testing

---

## ADR-002 — Migration First, Export Second

Status: accepted; environment-target portion superseded by ADR-008

Create the first model in `dev` through a migration, then export the approved model.

Historical note: this ADR originally imported the approved model into a separate verification target. That environment topology is superseded by ADR-008. The migration-first and export-second sequencing remains accepted.

### Why

A hand-authored Contentful export JSON is fragile. A migration is easier to review and reason about. The export then becomes the portable quick-start artifact.

---

## ADR-003 — Export Is a Snapshot, Not the Change Log

Status: accepted

The repository keeps both:

- model snapshots for replication and comparison
- migration scripts for the history of intentional changes

---

## ADR-004 — No Generic Page Builder in v1

Status: accepted

Homepage, About, Work, Projects, Writing, Tools, and Contact composition remain frontend-owned initially.

### Revisit when

- editors need to reorder major sections without code
- multiple page layouts share a proven composition pattern
- page-level preview requirements justify the complexity

---

## ADR-005 — CMS-Agnostic UI Boundary

Status: accepted

Presentational components receive frontend-facing contracts, never raw Contentful entry shapes.

```text
Contentful response
→ query layer
→ adapter/view model
→ page contract
→ UI components
```

---

## ADR-006 — Initial Model Cap

Status: accepted; SEO metadata ownership refined by ADR-009

Start with 10 semantic content types:

1. SEO Metadata
2. Social Link
3. Navigation Item
4. Site Settings
5. Person Profile
6. Project
7. Article
8. Experience Item
9. Skill
10. Skill Group

Historical note: the broad SEO Metadata model remains proposed Phase 02 input. Batch 01.3 refines SEO ownership through ADR-009 and does not freeze the reusable `seoMetadata` type or its fields as approved schema truth.

---

## ADR-007 — Accepted Initial Commit Scope Deviation

Status: accepted

Git history shows `46125d2 Initial commit` included repository baseline files together with CMS/model artifacts, including the initial bootstrap migration and Contentful scripts.

### Decision

Do not rewrite Git history during Phase 00 repair. Record the deviation and keep future batches focused by separating repository baseline, tooling, documentation, model, and Contentful environment changes.

### Why

- avoids destructive history edits
- preserves the current remote branch shape
- makes the deviation explicit for future audits
- sets the expectation that later work should use smaller scoped commits

### Revisit when

- a repository owner explicitly approves history rewriting before wider collaboration
- release or compliance requirements require a recreated baseline repository

---

## ADR-008 — Two-Environment Constraint and Serial Clean-Room Verification

Status: accepted

### Context

Contentful Starter permits two total environments for this project.

### Decision

Use `master` + `dev` only.

`master` is the permanent protected baseline and future release target. Bootstrap migration and experimental schema work never target `master`.

`dev` is the single rotating sandbox for schema development, model review, editorial QA, and serial clean-room verification.

Verification is a workflow state, not a persistent environment ID.

### Phase 03

Phase 03 will:

- export the approved `dev` model as a model-only snapshot
- prove recoverability through snapshot verification, checksum, runtime metadata, pre-deletion evidence, committed migrations, and recovery procedure
- confirm `dev` contains no irreplaceable content
- require explicit human approval in the active session before deletion
- delete `dev`
- recreate `dev` from protected `master`
- import the model-only snapshot into fresh `dev`
- compare rebuilt `dev` to pre-deletion evidence
- continue using verified `dev`

Seed content waits until serial clean-room verification succeeds.

### Supersedes

The prior `master`/`dev`/`verification` architecture.

### Why

- fits the two-environment project constraint
- preserves `master` as the protected baseline
- keeps the operating model simple
- still proves snapshot portability before seed content
- makes destructive `dev` deletion depend on recoverability evidence and explicit approval

---

## ADR-009 — Hybrid SEO Ownership

Status: accepted

### Context

Phase 01 / Batch 01.3 resolves OD-15 — SEO override/default strategy.

ADR-009 provides the durable architectural rationale for OD-15. OD-15 remains the decision/status tracker for the approved SEO override/default strategy.

The existing proposed model documentation and bootstrap migration include a broad reusable `seoMetadata` type with title, description, canonical URL, Open Graph image, noindex, and nofollow controls. Those surfaces are proposed Phase 02 inputs, not approved schema truth.

### Decision

Use hybrid SEO ownership.

Editorial SEO scope is limited conceptually to optional overrides:

- SEO title override
- SEO description override
- social image override

Technical SEO remains code/state-derived:

- canonical URLs
- robots/indexability
- sitemap eligibility
- structured data
- breadcrumbs
- preview exclusion
- metadata fallback behavior

Exact Contentful field representation is deferred to Phase 02. The preferred Phase 02 direction is direct optional Project/Article SEO override fields unless a real reuse or lifecycle requirement justifies a reduced reusable SEO metadata reference.

### Exclusions

The v1 editorial SEO contract excludes:

- arbitrary canonical URL fields
- page-level editorial robots/noindex controls
- page-level editorial nofollow controls
- sitemap checkboxes
- arbitrary structured-data JSON
- meta keywords

### Why

- keeps editorial meaning in the CMS
- keeps deterministic technical SEO in application code
- avoids dangerous technical controls for editors
- reduces Contentful model complexity
- lowers reference and adapter overhead
- keeps canonical/indexing behavior predictable
- preserves future flexibility without over-modeling v1

---

## OD-08 — Skills vs Tools Semantic Boundary

Status: RESOLVED / APPROVED

Recorded during Phase 01 / Batch 01.4 final approval reconciliation. Phase 01 is complete / frozen. Phase 02 is active; Batch 02.1 through Batch 02.4 are approved, Batch 02.5 is re-approved after compatibility correction, and Batch 02.6 is blocked pending fresh Gate A.

Batch 01.5 open-decision triage is recorded in `docs/phases/PHASE-01-CONTENT-STRATEGY-AND-ROUTE-CONTRACT.md`. No unrelated open decision is resolved by that validation pass.

Phase 01 freeze did not require all downstream content-authoring or model decisions to be resolved. Current state: OD-01 through OD-05, OD-09, OD-10, and OD-14 remain open; OD-06, OD-12, and OD-13 are resolved by Phase 02 / Batch 02.4 supplemental decision reconciliation; OD-11 is resolved by Phase 02 / Batch 02.2.

### Decision

Skills and Tools are semantically distinct.

Skill represents professional capability.

Tool represents a product, platform, framework, technology, or software used to exercise that capability.

### Scope

This decision resolves semantic responsibility only.

### Not Decided

OD-08 itself did not decide exact Contentful representation. Phase 02 / Batch 02.2 later approved Tool as a standalone v1 content type. Batch 02.3 approves Tool field IDs; Batch 02.4 approves Tool references and validations; Batch 02.5 re-approves the corrected reconciled migration implementation.

---

## OD-11 — Certification / Learning Representation

Status: RESOLVED / APPROVED

Recorded during Phase 02 / Batch 02.2 final approval reconciliation after external validation returned PASS WITH NOTES.

### Decision

Certification / learning evidence is lightweight profile-owned content in v1.

No standalone Certification, Learning, Credential, or Course content type is required for v1.

### Scope

This decision resolves type-level ownership only.

### Not Decided

Exact field ownership, field ID, field type, and required-state intent are approved by Batch 02.3 as `personProfile.learningHighlights`. Validation, ordering, references, and display structure are approved by Batch 02.4 where documented.

---

## OD-06 — Skill-Group Taxonomy

Status: RESOLVED / APPROVED

Recorded during Phase 02 / Batch 02.4 implementation, preserved after Batch 02.4 approval, and resolved by supplemental external decision validation.

### Decision

SkillGroup remains a small flat v1 capability grouping type.

Membership and order live on `skillGroup.skills`.

Skill does not own a back-reference to SkillGroup.

Nested groups are not supported in v1.

Each Skill should appear in one primary SkillGroup by editorial rule; duplicate group membership should be diagnosed during content QA or adapter validation if it appears.

### Scope

This proposal resolves grouping mechanics for the approved `skill` and `skillGroup` types only.

### Not Decided

This proposal does not create a generic taxonomy framework, skill detail routes, proficiency scoring, years-of-experience precision, or nested skill hierarchy.

---

## OD-12 — Taxonomy Depth

Status: RESOLVED / APPROVED

Recorded during Phase 02 / Batch 02.4 implementation, preserved after Batch 02.4 approval, and resolved by supplemental external decision validation.

### Decision

V1 uses a lean taxonomy strategy:

- no dedicated taxonomy content type;
- no nested taxonomy;
- controlled field values where route/model evidence supports them;
- freeform tags only where intentionally useful;
- SkillGroup is limited to capability grouping and is not a generic taxonomy framework.

### Scope

This proposal covers Article classification, Project type/status/tags, Tool category, route-key values, and SkillGroup capability grouping.

### Not Decided

This proposal does not finalize future filtering UI, search behavior, large publication taxonomy, or localized taxonomy labels.

---

## OD-13 — Manual vs Derived Related Content

Status: RESOLVED / APPROVED

Recorded during Phase 02 / Batch 02.4 implementation, preserved after Batch 02.4 approval, and resolved by supplemental external decision validation.

### Decision

Use a hybrid related-content strategy.

Author explicit semantic references where editor intent matters.

Derive reverse relationships where duplicate authoring would drift.

### Proposed Authoring Rule

Authored examples include Project Skills/Tools/Experience/Related Projects, Article author/Related Projects/Related Articles/Skills/Tools, Experience Skills/Tools/Related Articles, SkillGroup Skills, and Tool Skills.

Derived examples include Project Related Articles from Article Related Projects, Experience Related Projects from Project Related Experience, Tool Projects from Project Tools, Tool Experience from Experience Tools, and Tool Articles from Article Tools.

### Not Decided

This proposal does not create a generalized recommendation engine, relevance-scoring system, page-builder relationship model, or homepage featured-project field. Exact homepage featured project choices remain OD-09.

---

## Phase 02 Model Decision Queue

Status: reference only; no new decision recorded

Phase 02 / Batch 02.1 approved the model decision queue in `docs/phases/PHASE-02-CONTENT-MODEL-CONTRACT-AND-BOOTSTRAP-MIGRATION.md` as reconciliation findings and carry-forward questions. Batch 02.2 approves the content type contract in `docs/content-model/CONTENT-TYPE-LEDGER.md`; Batch 02.3 approves the field contract in `docs/content-model/FIELD-ID-LEDGER.md`; Batch 02.4 approves references, validations, and editorial rules; Batch 02.5 re-approves the corrected reconciled migration implementation.

Remaining queue items cover bootstrap execution gates. OD-06, OD-12, and OD-13 are now resolved/approved by supplemental external decision validation.

Do not treat this queue as approval of migration execution. Formal decision records should be added only when a later Phase 02 batch makes an actual architectural decision.
