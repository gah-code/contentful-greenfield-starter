# Personal Website CMS — Greenfield Contentful Starter

Status: active  
Current phase: Phase 00 — Baseline + New Environment Setup  
Architecture direction: static UI contracts first, Contentful adapters later  
CMS bootstrap direction: migration-created model → model-only export → clean verification import

## Purpose

This repository scaffold establishes a controlled, repeatable starting point for a new Contentful environment supporting a personal portfolio website.

The first model is intentionally lean. It supports:

- site settings and navigation
- personal profile content
- projects and case studies
- writing and articles
- experience history
- skills and skill groups
- reusable SEO metadata

It does **not** begin with a generic page builder, visual component content types, or raw CMS data inside UI components.

## Current Operating Rule

```text
Plan the model
→ create it in a development environment through a migration
→ export a model-only snapshot
→ import that snapshot into a second clean environment
→ verify editorial behavior
→ seed representative content
→ integrate through adapters
```

## Start Here

1. Copy `.env.example` to `.env.local`.
2. Add your Contentful space ID and management token.
3. Install dependencies:

```bash
npm install
```

4. Authenticate or verify the CLI:

```bash
npm run cms:help
npm run cms:env:check
```

5. Complete `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md`.
6. Create the `dev` and `verification` Contentful environments.
7. Run the bootstrap migration only after Phase 00 is closed.

## Safety Rules

- Never commit `.env.local` or a management token.
- Never target `master` during bootstrap work.
- Always name the environment explicitly.
- Export after every approved model change.
- Treat exports as portable snapshots, not the sole history of change.
- Use migration scripts for changes after the first baseline.
- Keep UI components independent from raw Contentful response shapes.
- Keep route composition in the frontend until a page-composition model is proven necessary.

## Project State

See:

- `TASKS.md` — current work queue
- `docs/PROJECT-STATE.md` — compact truth for handoff and context recovery
- `docs/IMPLEMENTATION-ROADMAP.md` — canonical phase sequence
- `docs/DECISIONS.md` — decisions and tradeoffs
- `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md` — active Phase 00 requirements and closeout notes
- `docs/system/` — environment, content strategy, route contract, and security strategy
- `docs/content-model/` — content type, field ID, and reference ledgers
- `CHANGELOG.md` — meaningful completed changes
