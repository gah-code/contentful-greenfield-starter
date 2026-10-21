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

Recorded during Phase 01 / Batch 01.4 final approval reconciliation. Phase 01 and Phase 02 are complete / frozen. Batch 02.1 through Batch 02.4 are approved, Batch 02.5 is re-approved after compatibility corrections, Batch 02.6 is approved after successful bootstrap execution in `dev`, and Batch 02.7 is approved after external validation confirmed zero material live-contract drift. At that Phase 02 completion handoff, Phase 03 was next / not started. Current project lifecycle is owned by [Project State](PROJECT-STATE.md#phase-05-closeout-containing-commit-rule), using accepted 05.5 evidence from `2026-09-29T08:54:11.057Z`; no October live refresh is claimed.

Batch 01.5 open-decision triage is recorded in `docs/phases/PHASE-01-CONTENT-STRATEGY-AND-ROUTE-CONTRACT.md`. No unrelated open decision is resolved by that validation pass.

Phase 01 freeze did not require all downstream content-authoring or model decisions to be resolved. Current state: OD-01 through OD-05, OD-09, OD-10, and OD-14 remain open; OD-06, OD-12, and OD-13 are resolved by Phase 02 / Batch 02.4 supplemental decision reconciliation; OD-11 is resolved by Phase 02 / Batch 02.2.

### Decision

Skills and Tools are semantically distinct.

Skill represents professional capability.

Tool represents a product, platform, framework, technology, or software used to exercise that capability.

### Scope

This decision resolves semantic responsibility only.

### Not Decided

OD-08 itself did not decide exact Contentful representation. Phase 02 / Batch 02.2 later approved Tool as a standalone v1 content type. Batch 02.3 approves Tool field IDs; Batch 02.4 approves Tool references and validations; Batch 02.5 records the approved RE2-corrected migration.

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

Phase 02 / Batch 02.1 approved the model decision queue in `docs/phases/PHASE-02-CONTENT-MODEL-CONTRACT-AND-BOOTSTRAP-MIGRATION.md` as reconciliation findings and carry-forward questions. Batch 02.2 approves the content type contract in `docs/content-model/CONTENT-TYPE-LEDGER.md`; Batch 02.3 approves the field contract in `docs/content-model/FIELD-ID-LEDGER.md`; Batch 02.4 approves references, validations, and editorial rules; Batch 02.5 records the approved RE2-corrected migration.

Remaining queue items cover bootstrap execution gates. OD-06, OD-12, and OD-13 are now resolved/approved by supplemental external decision validation.

Do not treat this queue as approval of migration execution. Formal decision records should be added only when a later Phase 02 batch makes an actual architectural decision.

---

## ADR-010 — Phase 06 Frontend Repository and Contract Ownership

Status: 06.1/06.2/06.3 APPROVED / CHECKPOINTED; accepted rendering/hosting/ownership decisions unchanged. 06.4 conditional non-release reconciliation is governed by [D-064-01](#d-064-01) and the [proposed conditional rule](phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-064-conditional-qualifying-checkpoint-rule); exact-byte External Final Validation remains PENDING.

### Decision

- **A — repository:** select `gah-code/ui-gallery-system` at the owner-confirmed local root; no third application repository is inferred or created.
- **B — historical 06.1 runtime deferral:** Storybook remains the implemented component/gallery surface. The existing Vite app is the leading portfolio-runtime candidate, not the approved final production architecture. 06.2 must compare pathname routing in that app with explicit deep-link/host-rewrite/prerender/metadata strategy, a separate entry or package in the same repository, and another runtime only if evidence shows the existing structure cannot meet route, metadata, deployment, preview or static-output needs safely. The exact comparison criteria are owned by the [Phase 06 plan](phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md); no gallery-root replacement, router, route, package or dependency change follows.
- **C — routes:** retain the nine [Formal V1 pathname routes](system/ROUTE-CONTRACT.md#formal-v1-route-inventory). Prototype fragment anchors do not implement them.
- **D — ownership:** CMS owns frozen semantics, field/reference/validation policy, route intent, Greenfield governance and the canonical [mapping/version ledger](system/FRONTEND-CONTRACT-MAPPING.md). Frontend owns normalized TypeScript/domain/page contracts, fixtures, adapters, resolution, URLs, Rich Text, assemblers, SEO, tests and consumers after separate authorization. No shared package exists or is authorized.
- **E — phase independence:** Greenfield Phase 06 and frontend Phase 9 coordinate deliverables and checkpoint references without automatically starting, approving or closing each other.

### Historical 06.1 consequences

The existing generic component APIs and gallery metadata remain UI-native. No implemented portfolio contracts, routes, adapters or test passes are inferred from the accepted inventory. 06.2 freezes the architecture/contracts/fixture specification; that freeze itself grants no route, router, package, framework or runtime implementation authority. Live Contentful access is not needed for offline 06.2–06.5 work. The first later approved frontend implementation records the canonical CMS ledger version and checkpoint as a reciprocal pointer rather than duplicating its mapping authority.

### Historical 06.2 owner amendment and reconciliation

The completed comparison records owner-selected **Option B**, a separate portfolio entry in the existing npm package, **Cloudflare Pages** as intended host and native document navigation. Preserve gallery/Storybook; no router/framework/package migration. R1/R2 and N1/N2 dispositions remain accepted; provider/runtime, real publication eligibility and preview authentication proof are deferred. The exact Node 22.23.3 / bundled npm 10.9.9 amendment was frontend-only, with unchanged dependency graph and isolated official distribution.

Six type modules, source/normalized fixtures and offline checks now exist and are externally accepted. The preceding inventory consequences describe 06.1 and do not negate this implementation. The [06.2 report](../content-model/reports/PHASE-06-BATCH-06.2-RENDERING-CONTRACT-AND-FIXTURE-FREEZE.md) records the chronology, immutable evidence and limitations. Current reconciliation changes documentation only.

This owner authorization selects candidate ledger revision `06.2-reconciliation-1` and reserved contract label `portfolio-contract-v1.0.0`; these were not chosen by the earlier review. No conflicting approved naming convention was found in the current canonical plan, ledger, ADR or tracker. The [proposed qualifying rule](phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-062-qualifying-checkpoint-rule) awaits External Final Validation and requires both qualifying containing commits before approval/version/freeze takes effect. Effective version remains UNASSIGNED UNTIL 06.2 APPROVAL. It is not a package version, model version, runtime constant or tag.

### Historical 06.3 lifecycle and evidence continuation

The preceding 06.2 reconciliation wording is preserved as history; its containing-commit rule is now satisfied by the established pair recorded in the [ledger](system/FRONTEND-CONTRACT-MAPPING.md). `portfolio-contract-v1.0.0` remains EFFECTIVE / FROZEN and unchanged. The owner selects candidate documentation revision `06.3-reconciliation-1` and an explicitly proposed 06.3 qualifying rule for External Final Validation. Formal 06.3 approval/checkpoint is NOT ESTABLISHED. The [06.3 report](../content-model/reports/PHASE-06-BATCH-06.3-PURE-ADAPTERS-RESOLUTION-URLS-AND-FOCUSED-OFFLINE-TESTS.md) records I-063-01 CLOSED, inherited 183-test PASS without rerun, retained N-063-01, and the original NEEDS REVISION history. This is a lifecycle/evidence continuation, with no new architecture decision or change to frontend Phase 9.

The preceding 06.3 proposal was subsequently resolved by the established pair: CMS `dac8d6b97244dbf8e5e6f34aab250902d023e282` / tree `5499f187173a58435822cd40fdd8aae4f622f0dc`; frontend `f1a281c58848f94d2b420f4130fe1dad3233e3fc` / tree `25b49f2dadeea2594148147871b8d6325ad4bba8`. External Checkpoint Validation PASS WITH NOTES established `06.3-reconciliation-1`; historical PENDING/PROPOSED text above remains event-time evidence.

<a id="d-064-01"></a>
## D-064-01 — Conditional non-release browser-verification deferral

Status: EXTERNALLY ACCEPTED WITH CONDITIONS / OWNER ADOPTED; candidate documentation revision `06.4-reconciliation-1` PENDING External Final Validation and a qualifying future pair. Risk owner: **Gilberto Haro**. Adoption was explicitly submitted in the current IDE user request and recorded at 2026-10-21T22:31:47.863156+00:00; the exact message-send timestamp was not supplied. It is not backdated to the manual package seal.

The original pinned Playwright/Chromium method could not run on the recorded host. Ordinary Firefox method `06.4-manual-browser-1` was then selected, but manual observations remained incomplete. Accepted source/non-browser evidence plus limited visual evidence supports only bounded non-release scheduling progression; it does not prove browser behavior.

The decision binds the eighteen exact corrected members: correction `ARTIFACT-INDEX.json` SHA-256 `94ff91658d27ffb1af7e566990ba09f36141916385aa260fc83e1632373358d6`, correction ZIP `7b9d19fd697f9b112cc67c030deb8a43e23a9d2bff7798dfd621e529c1205f4e`. `portfolio-contract-v1.0.0` is EFFECTIVE / FROZEN / UNCHANGED; I-063-01 remains closed at its preserved metadata bytes.

- All MB-001–MB-246 remain **NOT RUN**. VISUAL-001–VISUAL-006 remain **PARTIAL**. Twenty unique screenshots occur at two archive locations; forty physical members are not forty observations. Preserve all definitions, expected results, route/browser/viewport dimensions, JavaScript/text-enlargement requirements, null execution times/observers, and FAIL/BLOCKED history. The new adoption event is separate from execution status and from final-validation/checkpoint status.
- The exact [deferred inventory](../content-model/reports/PHASE-06-BATCH-06.4-FIXTURE-CONSUMER-PARITY-AND-ROUTE-RUNTIME-INTEGRATION.md#deferred-case-inventory) points to the immutable complete case objects. No case is waived or promoted to PASS.
- Due gate: **06.5 — Consolidated Frontend Validation, before its final acceptance**. No invented calendar date and no automatic extension. An equivalent later method requires explicit complete coverage mapping and review; an unqualified waiver cannot replace evidence.
- Until required evidence is satisfied, 06.5 final acceptance, 06.6/Phase 06 closeout, browser-verified-readiness claims and all public preview/deployment/publication/release remain blocked. No public build or hosting authority follows. Local offline non-release progression is the only risk disposition.
- I-064-01/I-064-02 stay closed for the accepted code defects. I-064-03 code/non-browser remedy is accepted but browser-dependent closure remains **OPEN**. V-064-01 retains Playwright **BLOCKED / NOT RUN**; the manual replacement remains incomplete. N-063-01 is accepted only for local emitted ordering/membership, not provider/cache/deployment proof.
- Changed source/configuration/dependency/media identities require impact review and updated bindings. No silent rebinding, failure suppression or automatic deferral extension is allowed.
- This exact combined candidate and the [proposed conditional paired-checkpoint rule](phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-064-conditional-qualifying-checkpoint-rule) require External Final Validation, separate bounded Git authorization, both qualifying commits/pushes, clean synchronization and External Checkpoint Validation before 06.5 eligibility. Separate 06.5 execution authorization remains mandatory.

Residual risks are unverified hydration/node retention/error recovery, accessibility/responsive and text-zoom behavior, navigation/history/media/PDF interactions, original gallery and Storybook interactions, and actual provider behavior. The portfolio case study does not test the gallery application. Screenshot pixels do not establish HTTP status, refresh, Console cleanliness, exact viewport, JavaScript state or keyboard behavior. Frontend Phase 9 and Phase 07 remain independent and unchanged.

Controlling external records (logical handoff paths, not repository files): `review/PHASE-06.4-EXTERNAL-MANUAL-EVIDENCE-AND-DEFERRAL-REVIEW.md` SHA-256 `93abfeebe68992f4ceb434fec11326d0e2a192177c49caf4e4319b5a9a38a389`; companion results SHA-256 `d1f6cd4a5256c456588c8b0376ae5ccaa4a8d7b1fd09f61a1d00c46a1ffde4ae`. The [06.4 report](../content-model/reports/PHASE-06-BATCH-06.4-FIXTURE-CONSUMER-PARITY-AND-ROUTE-RUNTIME-INTEGRATION.md) owns chronology, every input identity and evidence limitations. Sealed historical requested/not-approved dispositions remain unchanged; this review and owner adoption are later events.
