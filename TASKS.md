# Tasks

This tracker records current project truth. Do not mark future batches complete without direct repository, command, or Contentful evidence.

## Now

### Phase 01 — Content Strategy + Route Contract

Status: ACTIVE

#### Approved

- [x] Batch 01.1 — Content Strategy Foundation

Batch 01.1 external validation: PASS.

Approved Batch 01.1 evidence:

- [x] Capture website mission
- [x] Capture professional positioning direction
- [x] Capture audience hierarchy
- [x] Capture brand voice rules
- [x] Define approved/proposed content pillars
- [x] Define v1 content domains
- [x] Record preliminary route inventory
- [x] Define homepage content priorities
- [x] Define profile strategy
- [x] Define experience strategy
- [x] Define project/case-study strategy
- [x] Define writing strategy
- [x] Define skills/tools direction
- [x] Define navigation/contact direction
- [x] Define CMS vs code ownership
- [x] Define content reuse rules
- [x] Define editorial lifecycle
- [x] Define fixture requirements
- [x] Define accessibility content rules
- [x] Define responsive content intent
- [x] Define localization intent
- [x] Define confidentiality rules
- [x] Define deferred v1 scope
- [x] Record assumptions
- [x] Record open decisions
- [x] External Batch 01.1 validation

#### Next

- [ ] Batch 01.2 — Route Contract

Do not start Batch 01.2 implementation until the approval reconciliation is reviewed, committed, and pushed.

#### Later

- [ ] Batch 01.3 — SEO + Metadata Contract
- [ ] Batch 01.4 — Content Requirements Matrix
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
- Batch 01.2 is next.
- Batch 01.3, Batch 01.4, and Batch 01.5 are later.
- Phase 02 is deferred.
- Bootstrap migration remains blocked and not run.
- Seed content remains not started.
- No Contentful environment, locale, schema, content, export, import, or seed mutation is authorized by Batch 01.1 approval.
