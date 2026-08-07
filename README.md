# Personal Website CMS — Greenfield Contentful Starter

Repository: `contentful-greenfield-starter`
Current phase: Phase 00 — Baseline + Two-Environment Setup
Model target: 10 semantic content types
CMS bootstrap direction: migration-created model -> model-only export -> serial clean-room verification in fresh `dev`

This repository is the planning, governance, and migration surface for a greenfield Contentful-backed personal website CMS.

## Current Operating Rule

Content strategy before content models.
Routes before templates.
UI contracts before CMS data.
Static fixtures before Contentful.
Validation before closeout.
Documentation is part of the build.

## Environment Strategy

The approved physical Contentful topology uses exactly two environments:

| Environment | Role | Phase 00 state |
|---|---|---|
| `master` | Permanent protected baseline and future release target | Blank-state verification pending Batch 00.4 |
| `dev` | Single rotating sandbox for migrations, model review, and editorial QA | Operational state verification pending Batch 00.4 |

Verification is a workflow state, not a persistent environment ID. During Phase 03, the approved model is exported from `dev`, recoverability evidence is recorded, explicit human approval is required, and `dev` is deleted and recreated from protected `master` before importing the model-only snapshot back into fresh `dev`.

Do not create a separate verification environment for this project.

## Start Here

1. Review the project state:
   - `docs/PROJECT-STATE.md`
   - `TASKS.md`
   - `CHANGELOG.md`
2. Copy `.env.example` to `.env.local` locally and fill only local secret values.
3. Verify local runtime and tooling:
   ```bash
   node -v
   npm -v
   npx --no-install contentful --help
   npm run cms:help
   ```
4. Review the environment contract:
   - `docs/system/ENVIRONMENT-STRATEGY.md`
   - `docs/system/SECURITY-AND-SECRETS.md`
5. Do not run migrations, exports, imports, or environment commands until the relevant phase gate explicitly approves them.

## Safety Rules

- Never target `master` during bootstrap, migration, model import, or experimental schema work.
- Use `CONTENTFUL_ENVIRONMENT_ID=dev` for approved CMS development operations.
- Never pass management tokens as command-line arguments.
- Never expose management, delivery, or preview tokens through browser-prefixed environment variables.
- Do not delete `dev` until Phase 03 recoverability evidence is complete and explicit human approval is given in the active session.
- Do not treat planned architecture as verified Contentful evidence. Batch 00.4 owns account, space, locale, and environment verification.

## Repository Structure

```text
content-model/
  migrations/
  snapshots/
  reports/

docs/
  content-model/
  phases/
  system/

scripts/
  contentful/
```

## Canonical Documents

- `docs/PROJECT-STATE.md` — current truth surface
- `TASKS.md` — phase and batch tracker
- `docs/DECISIONS.md` — architectural decisions
- `docs/IMPLEMENTATION-ROADMAP.md` — phase plan
- `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md` — active Phase 00 requirements
- `docs/system/ENVIRONMENT-STRATEGY.md` — two-environment operating model
- `docs/system/SECURITY-AND-SECRETS.md` — secret and CLI boundaries
- `docs/content-model/CONTENT-TYPE-LEDGER.md` — semantic content-type ledger
- `docs/content-model/FIELD-ID-LEDGER.md` — field ID contract ledger
- `docs/content-model/REFERENCE-MAP.md` — reference topology
