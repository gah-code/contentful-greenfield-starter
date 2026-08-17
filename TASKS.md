# Tasks

This tracker records current project truth. Do not mark future batches complete without direct repository, command, or Contentful evidence.

## Now

### Phase 01 — Content Strategy + Route Contract

Status: ACTIVE

#### Approved

- [x] Batch 01.1 — Content Strategy Foundation
- [x] Batch 01.2 — Route Contract
- [x] Batch 01.3 — SEO + Metadata Contract
- [x] Batch 01.4 — Content Requirements Matrix

Batch 01.1 external validation: PASS.
Batch 01.2 external validation: PASS.
Batch 01.3 external validation: PASS.
Batch 01.4 external validation: PASS.

Approved Batch 01.2 evidence:

- [x] Confirm formal v1 route inventory
- [x] Classify route types
- [x] Define route purpose
- [x] Define primary audience intent
- [x] Define primary visitor question
- [x] Define CTA direction
- [x] Define required content
- [x] Define optional content
- [x] Define content domains consumed
- [x] Define CMS/code/derived ownership
- [x] Define reuse rules
- [x] Define route composition intent
- [x] Define route states
- [x] Define content-readiness rules
- [x] Define internal linking
- [x] Define responsive intent
- [x] Define accessibility intent
- [x] Record SEO intent boundary
- [x] Record future CMS implications
- [x] Record deferred behavior
- [x] Preserve unresolved decisions
- [x] External Batch 01.2 validation
- [x] Resolve OD-07 — Final formal v1 route contract
- [x] Preserve OD-08 — `/tools` vs skills as PROPOSED / OPEN at Batch 01.2 closeout

#### Batch 01.3 — SEO + Metadata Contract

Status: APPROVED

- [x] Audit existing SEO/model assumptions
- [x] Classify broad `seoMetadata` proposal
- [x] Confirm Option 2 hybrid ownership
- [x] Confirm approved route SEO intent
- [x] Define metadata ownership
- [x] Define editorial override contract
- [x] Define technical SEO ownership
- [x] Define fallback hierarchy
- [x] Define title patterns
- [x] Define description intent
- [x] Define canonical behavior
- [x] Define route-state indexability
- [x] Define robots behavior
- [x] Remove editorial page-level `noFollow` from v1 contract
- [x] Define Open Graph requirements
- [x] Define social-image fallback
- [x] Define structured-data candidates
- [x] Distinguish search-feature candidates from semantic schema candidates
- [x] Define sitemap eligibility
- [x] Define internal-link SEO expectations
- [x] Record Phase 02 model reconciliation inputs
- [x] Resolve OD-15 — SEO override/default strategy
- [x] Preserve unrelated open decisions
- [x] External Batch 01.3 validation

#### Batch 01.4 — Content Requirements Matrix

Status: APPROVED

- [x] Confirm approved strategy/route/SEO inputs
- [x] Define requirement taxonomy
- [x] Define ownership taxonomy
- [x] Define route-level content requirements
- [x] Define required/optional/conditional content
- [x] Define content-domain ownership
- [x] Define canonical content reuse
- [x] Define route-readiness requirements
- [x] Define fixture requirements
- [x] Define route-state fixture coverage
- [x] Define media requirements
- [x] Define accessibility content requirements
- [x] Define SEO semantic inputs
- [x] Define public-safety requirements
- [x] Define Phase 02 handoff classifications
- [x] Review future model pressure
- [x] Preserve content-type cap
- [x] Review OD-08
- [x] Resolve OD-08 — Skills vs Tools semantic boundary
- [x] Review remaining requirements-related decisions
- [x] Preserve unrelated open decisions
- [x] External Batch 01.4 validation

#### Next

- [ ] Batch 01.5 — Phase 01 Validation + Freeze

## Deferred

### Phase 02 — Content Model Contract + Bootstrap Migration

Status: DEFERRED

- [ ] Review `content-model/migrations/0001-bootstrap-portfolio-model.js`
- [ ] Approve 10 semantic content types
- [ ] Approve field IDs and reference map
- [ ] Run bootstrap migration only after Phase 01 is approved and Phase 02 authorizes it

### Phase 03 — Model Export + Serial Clean-Room Verification

- [ ] Develop model in `dev`
- [ ] Export approved model-only snapshot
- [ ] Verify snapshot structure and checksum
- [ ] Record CLI/runtime metadata
- [ ] Record pre-deletion model evidence
- [ ] Confirm committed migration history
- [ ] Confirm `dev` contains no irreplaceable content
- [ ] Confirm recovery procedure
- [ ] Obtain explicit human approval before deleting `dev`
- [ ] Recreate `dev` from protected `master`
- [ ] Import model-only snapshot into fresh `dev`
- [ ] Compare rebuilt `dev` to pre-deletion evidence
- [ ] Declare `dev` verified before seed content begins

## Completed Evidence

### Phase 00 — Baseline + Two-Environment Setup

Status: COMPLETE

Approved batches:

- [x] Batch 00.1 — Repository and Project Truth
- [x] Batch 00.2 — Runtime and Contentful Tooling
- [x] Batch 00.3 — Two-Environment Strategy Alignment + Secret Safety
- [x] Batch 00.4 — Contentful Space and Environment Verification
- [x] Batch 00.5 — Phase 00 Closeout

Recorded Phase 00 evidence:

- [x] Repository identity recorded as `contentful-greenfield-starter`
- [x] Node major pinned through `.nvmrc`
- [x] npm package manager recorded as `npm@10.8.3`
- [x] Local Contentful tooling declared in `package.json`
- [x] Phase 00 document uses `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md`
- [x] Canonical documentation surfaces exist
- [x] Historical baseline commit deviation accepted and recorded
- [x] Repository preflight passed
- [x] Runtime verified
- [x] Contentful tooling verified
- [x] Secret-safety regression passed
- [x] Temporary investigation exports absent
- [x] `master` + `dev` architecture remains canonical
- [x] `master` protected baseline remains verified
- [x] `dev` rotating sandbox remains verified
- [x] `master`/`dev` `en-US` compatibility verified
- [x] Destructive Phase 03 safety gate preserved
- [x] Bootstrap migration remains blocked/not run
- [x] Seed content remains not started
- [x] Phase 00 external closeout validation passed

## Current Boundaries

- Phase 00 is complete.
- Batch 00.1, Batch 00.2, Batch 00.3, Batch 00.4, and Batch 00.5 are approved.
- Phase 01 is active.
- Batch 01.1 is approved.
- Batch 01.2 is approved after external validation.
- Batch 01.3 is approved after external validation.
- Batch 01.4 is approved after external validation.
- Batch 01.5 is next.
- Phase 02 is deferred.
- Bootstrap migration remains blocked and not run.
- Seed content remains not started.
- No Contentful environment, locale, schema, content, export, import, or seed mutation is authorized by Batch 01.4 approval reconciliation.
