# Environment Strategy

Status: Phase 00 active  
Owner: Phase 00 - Baseline + New Environment Setup

## Purpose

Define safe Contentful environment handling before content types, entries, assets, frontend clients, adapters, preview, or production configuration are introduced.

## Environment Roles

| Environment | Purpose | Phase 00 status | Rule |
|---|---|---|---|
| `master` | Blank source baseline | Not verified in Batch 00.1-00.2 | Do not target for bootstrap or verification work |
| `dev` | Migration and model review environment | Not created or verified in Batch 00.1-00.2 | Create only after blank `master` is confirmed |
| `verification` | Clean model-only import target | Not created or verified in Batch 00.1-00.2 | Use only to prove exported model portability |

## Operating Rules

- Use explicit environment IDs for every Contentful command.
- Keep `CONTENTFUL_ENVIRONMENT_ID` and `CONTENTFUL_TARGET_ENVIRONMENT_ID` different.
- Reject `master` in local bootstrap, export, import, and environment validation wrappers.
- Do not create or mutate environments during Batch 00.1-00.2 repair.
- Record organization, space, locale, and environment readiness only after direct verification.
