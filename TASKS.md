# Tasks

Last reviewed: 2026-07-24
Current phase: Phase 00 — Baseline + New Environment Setup  
Current batch: 00.1-00.2 — Repository and Runtime Tooling Repair

## Now

### Phase 00 / Batch 00.1-00.2 — Repository and Runtime Tooling Repair

- [x] Confirm repository name and local path
- [x] Change package name to `contentful-greenfield-starter`
- [x] Declare `packageManager` as `npm@10.8.3`
- [x] Pin supported Node major in `.nvmrc`
- [x] Preserve `engines.node` compatibility with Node 22
- [x] Record runtime and Contentful package versions in the Phase 00 runtime table
- [x] Rename the active Phase 00 document to the canonical setup filename
- [x] Create canonical system documentation surfaces
- [x] Create canonical content-model ledger surfaces
- [x] Convert older model docs to concise canonical pointers
- [x] Update local Contentful CLI wrappers to use `npx --no-install`
- [x] Stop passing management tokens as command-line arguments
- [x] Record the accepted Git history deviation
- [x] Update project truth surfaces for Batch 00.1-00.2 repair

## Next

### Remaining Phase 00 — Contentful Environment Verification

- [ ] Create `.env.local` from `.env.example`
- [ ] Confirm `.env.local` is ignored
- [ ] Confirm Contentful organization and space
- [ ] Confirm default locale
- [ ] Record the blank `master` environment state
- [ ] Create `dev` environment from blank `master`
- [ ] Create `verification` environment from blank `master`
- [ ] Run `npm run cms:env:check`
- [ ] Run `npm run cms:env:list`
- [ ] Add final Phase 00 closeout evidence
- [ ] Record final Phase 00 completion in `CHANGELOG.md`

### Phase 01 — Content Strategy + Route Contract

- [ ] Confirm v1 routes
- [ ] Confirm homepage content inventory
- [ ] Confirm project detail requirements
- [ ] Confirm writing detail requirements
- [ ] Confirm experience and skills needs
- [ ] Confirm SEO requirements
- [ ] Identify content that remains code-owned

### Phase 02 — Content Model Contract + Bootstrap Migration

- [ ] Review the proposed 10-type core model
- [ ] Confirm field IDs before first migration
- [ ] Confirm references and validations
- [ ] Run bootstrap migration against `dev`
- [ ] Review editor interfaces and entry titles

## Later

- [ ] Export approved model snapshot from `dev`
- [ ] Import snapshot into `verification`
- [ ] Compare model behavior between environments
- [ ] Seed representative draft content
- [ ] Freeze frontend-facing contracts
- [ ] Build Contentful adapters
- [ ] Integrate published content route by route
- [ ] Add preview workflow
- [ ] Add contract and route validation
- [ ] Prepare production release

## Completed

- [x] Greenfield CMS direction selected
- [x] Export/import selected as the fast reusable bootstrap path
- [x] Migrations selected as the ongoing history of model changes
- [x] Generic page builder deferred
- [x] Raw Contentful shapes prohibited from UI components
- [x] Batch 00.1-00.2 repository and runtime tooling repair recorded
