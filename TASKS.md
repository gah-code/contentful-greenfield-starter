# Tasks

This tracker records current project truth. Do not mark future batches complete without direct repository, command, or Contentful evidence.

## Now

### Phase 00 — Baseline + Two-Environment Setup

#### Approved

- [x] Batch 00.1 — Repository and Project Truth
- [x] Batch 00.2 — Runtime and Contentful Tooling

#### Active

##### Batch 00.3 — Two-Environment Strategy Alignment + Secret Safety

Status: IN REVIEW — implementation complete and awaiting external validation.

- [x] Verify two-environment strategy remains aligned
- [x] Verify local `.env.local` exists without reading contents
- [x] Verify `.env.local` ignore rule
- [x] Verify `.env.local` is untracked
- [x] Verify `.env.local` has no Git history
- [x] Verify tracked env-file inventory
- [x] Verify `.env.example` placeholders
- [x] Verify management, delivery, and preview credential variable separation
- [x] Verify no browser-exposed secret prefixes
- [x] Verify Contentful wrappers do not pass token values through CLI arguments
- [x] Verify scripts report secret presence only and do not dump the full environment
- [x] Review tracked credential references
- [x] Verify project skill secret rules
- [x] Align security documentation
- [x] Mark Batch 00.3 in review for external validation

#### Later

##### Batch 00.4 — Contentful Space and Environment Verification

- [ ] Record Contentful account and space evidence
- [ ] Confirm two-environment capacity
- [ ] Confirm default locale
- [ ] Verify `master` state
- [ ] Verify `dev` state
- [ ] Confirm environment inventory
- [ ] Retain redacted evidence

##### Batch 00.5 — Phase 00 Closeout

- [ ] Align all truth surfaces
- [ ] Record remaining risks
- [ ] Record closeout verdict
- [ ] Move Phase 01 to Next only after all Phase 00 gates pass

## Deferred

### Phase 01 — Content Strategy + Route Contract

- [ ] Confirm content inventory
- [ ] Confirm route ownership
- [ ] Confirm frontend/CMS boundaries
- [ ] Keep static fixtures until parity work is explicitly approved

### Phase 02 — Content Model Contract + Bootstrap Migration

- [ ] Review `content-model/migrations/0001-bootstrap-portfolio-model.js`
- [ ] Approve 10 semantic content types
- [ ] Approve field IDs and reference map
- [ ] Run bootstrap migration only after Phase 00 is closed and Phase 02 authorizes it

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

- [x] Repository identity recorded as `contentful-greenfield-starter`
- [x] Node major pinned through `.nvmrc`
- [x] npm package manager recorded as `npm@10.8.3`
- [x] Local Contentful tooling declared in `package.json`
- [x] Phase 00 document uses `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md`
- [x] Canonical documentation surfaces exist
- [x] Historical baseline commit deviation accepted and recorded

## Current Boundaries

- Phase 00 remains active.
- Batch 00.3 is in review; it is not approved and Batch 00.4 remains later.
- Phase 01 remains deferred.
- Bootstrap migration remains blocked and not run in this repair.
- No Contentful environment mutation is authorized in Phase 00 documentation alignment repair.
