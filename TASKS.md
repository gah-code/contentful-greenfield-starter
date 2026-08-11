# Tasks

This tracker records current project truth. Do not mark future batches complete without direct repository, command, or Contentful evidence.

## Now

### Phase 00 — Baseline + Two-Environment Setup

#### Approved

- [x] Batch 00.1 — Repository and Project Truth
- [x] Batch 00.2 — Runtime and Contentful Tooling

##### Batch 00.3 — Two-Environment Strategy Alignment + Secret Safety

Status: APPROVED — external validation passed; live Contentful verification was deferred to Batch 00.4.

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
- [x] Record external validation approval

##### Batch 00.4 — Contentful Space and Environment Verification

Status: APPROVED — project space, two-environment capacity, clean baseline state, and locale compatibility verified.

- [x] Correct project space verified
- [x] Organization verified
- [x] Starter plan verified
- [x] 2-of-2 environment capacity verified
- [x] `master` + `dev` live inventory verified
- [x] Persistent `verification` environment absent
- [x] `testing` environment absent from intended project space
- [x] `master` ready state verified
- [x] `master` zero-state verified
- [x] `master` default locale verified
- [x] `dev` ready state verified
- [x] `dev` zero-state verified
- [x] `dev` default locale verified
- [x] `master`/`dev` locale compatibility verified
- [x] `master` baseline suitability verified
- [x] `dev` future bootstrap suitability assessed
- [x] Read-only access verified
- [x] Secret-safety regression passed
- [x] No Contentful mutation performed
- [x] Temporary export evidence removed from repository
- [x] Evidence limitations recorded

#### Approved

##### Batch 00.5 — Phase 00 Closeout

Status: APPROVED — external validation passed; Phase 00 is complete.

- [x] Batch 00.1 approved
- [x] Batch 00.2 approved
- [x] Batch 00.3 approved
- [x] Batch 00.4 approved
- [x] repository preflight passed
- [x] runtime verified
- [x] Contentful tooling verified
- [x] secret-safety regression passed
- [x] temporary investigation exports absent
- [x] `master` + `dev` architecture remains canonical
- [x] `master` protected baseline remains verified
- [x] `dev` rotating sandbox remains verified
- [x] `master`/`dev` `en-US` compatibility verified
- [x] destructive Phase 03 safety gate preserved
- [x] bootstrap migration remains blocked/not run
- [x] seed content remains not started
- [x] Phase 01 implementation remains not started
- [x] architecture regression search passed
- [x] script syntax verification passed
- [x] canonical truth surfaces aligned
- [x] external Phase 00 / Batch 00.5 validation

## Next

### Phase 01 — Content Strategy + Route Contract

- [ ] Confirm content inventory
- [ ] Confirm route ownership
- [ ] Confirm frontend/CMS boundaries
- [ ] Keep static fixtures until parity work is explicitly approved
- [ ] Do not begin Phase 02 bootstrap migration until Phase 01 approval is recorded

## Deferred

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

- Phase 00 is complete.
- Batch 00.1, Batch 00.2, Batch 00.3, Batch 00.4, and Batch 00.5 are approved.
- Phase 01 is next.
- Bootstrap migration remains blocked and not run.
- Seed content remains not started.
- No Contentful environment mutation is authorized by Phase 00 final approval.
