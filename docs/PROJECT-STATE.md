# Project State

Last updated: YYYY-MM-DD  
Status: active  
Current phase: Phase 00 — Baseline + New Environment Setup  
Current batch: 00.1 — Repository and CMS safety baseline  
Next recommended phase: Phase 01 — Content Strategy + Route Contract

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

## In Progress

- Repository baseline
- Contentful credentials and environment configuration
- Blank `dev` and `verification` environment setup
- Phase 00 evidence collection

## Next Up

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
| Field IDs drifting after use | Open | Approve field ledger before migration |
| Model mirrors UI component tree | Controlled | Semantic types only |
| Export treated as full history | Controlled | Keep migrations and changelog |
| Raw CMS data reaches UI | Controlled | Adapter boundary required later |

## Verification

| Check | Result | Date |
|---|---|---|
| Node version pinned | Pending | |
| CLI installed | Pending | |
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
