# Tasks

Last reviewed: YYYY-MM-DD  
Current phase: Phase 00 — Baseline + New Environment Setup  
Current batch: 00.1 — Repository and CMS safety baseline

## Now

### Phase 00 / Batch 00.1 — Repository and CMS Safety Baseline

- [ ] Confirm repository name and local path
- [ ] Confirm package manager
- [ ] Confirm and pin Node version
- [ ] Install `contentful-cli`
- [ ] Create `.env.local` from `.env.example`
- [ ] Confirm `.env.local` is ignored
- [ ] Confirm Contentful organization and space
- [ ] Confirm default locale
- [ ] Record the blank `master` environment state
- [ ] Create `dev` environment from blank `master`
- [ ] Create `verification` environment from blank `master`
- [ ] Run `npm run cms:env:check`
- [ ] Run `npm run cms:env:list`
- [ ] Update `docs/PROJECT-STATE.md`
- [ ] Add Phase 00 closeout evidence
- [ ] Record completion in `CHANGELOG.md`

## Next

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
