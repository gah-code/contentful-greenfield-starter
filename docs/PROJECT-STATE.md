# Project State

Last updated: 2026-07-24
Status: active  
Current phase: Phase 00 — Baseline + New Environment Setup  
Current batch: 00.1-00.2 — Repository and Runtime Tooling Repair
Next recommended batch: Remaining Phase 00 Contentful environment verification

## Direction

Build a new Contentful foundation from a blank environment.

```text
Bootstrap migration in dev
→ model-only export
→ clean import into verification
→ editorial QA
→ baseline freeze
→ incremental migrations
→ adapters
→ runtime integration
```

## Completed

- Greenfield implementation direction approved
- Contentful CLI selected
- Export/import selected for quick environment replication
- Migration scripts selected for ongoing schema history
- Initial core model proposed
- Page builder and component-mirroring model deferred
- Tracking documents scaffolded
- Package identity aligned to `contentful-greenfield-starter`
- npm package manager declared as `npm@10.8.3`
- Node major pinned in `.nvmrc`
- Canonical system and content-model documentation surfaces created
- Local Contentful CLI wrappers updated to use `npx --no-install`
- Management tokens removed from CLI argument construction
- Historical baseline commit deviation accepted and recorded

## In Progress

- Contentful credentials and environment configuration
- Blank `dev` and `verification` environment setup
- Phase 00 evidence collection

## Next Up

- Verify Contentful organization, space, default locale, and blank `master`
- Create `dev` and `verification` environments from blank `master`
- Run environment validation commands after `.env.local` is configured
- Close Phase 00
- Confirm route and content inventory
- Review field IDs and model ownership
- Run the initial model migration in `dev`

## Deferred

- Page and page-section content types
- Generic component content types
- Contentful delivery client
- Preview client and preview route
- Frontend adapters and view models
- Seed content import
- Dynamic route integration
- Production cutover

## Active Risks

| Risk | Status | Mitigation |
|---|---|---|
| Accidentally targeting `master` | Open | Scripts reject `master` by default |
| Field IDs drifting after use | Open | Approve `docs/content-model/FIELD-ID-LEDGER.md` before migration |
| Model mirrors UI component tree | Controlled | Semantic types only |
| Export treated as full history | Controlled | Keep migrations and changelog |
| Raw CMS data reaches UI | Controlled | Adapter boundary required later |
| Initial commit mixed baseline and CMS/model artifacts | Accepted deviation | Do not rewrite history; use focused commits in future batches |

## Verification

| Check | Result | Date |
|---|---|---|
| Repository identity aligned | Verified | 2026-07-24 |
| Package manager declared | Verified | 2026-07-24 |
| Node version pinned | Verified | 2026-07-24 |
| Runtime/tool versions recorded | Verified | 2026-07-24 |
| CLI installed | Verified | 2026-07-24 |
| CLI help surface inspected | Verified | 2026-07-24 |
| CLI token argument removed | Verified | 2026-07-24 |
| Canonical documentation surfaces created | Verified | 2026-07-24 |
| Historical baseline commit deviation recorded | Verified | 2026-07-24 |
| Environment variables validated | Pending | |
| `dev` environment ready | Pending | |
| `verification` environment ready | Pending | |
| `master` untouched | Pending | |

## Handoff Summary

A new contributor or agent should read, in order:

1. `README.md`
2. `docs/PROJECT-STATE.md`
3. `TASKS.md`
4. `docs/IMPLEMENTATION-ROADMAP.md`
5. the active phase document
6. `docs/DECISIONS.md`
7. the latest `CHANGELOG.md` entry
