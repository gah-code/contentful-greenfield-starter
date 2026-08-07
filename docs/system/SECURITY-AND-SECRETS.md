# Security and Secrets

Status: Phase 00 active
Owner: Phase 00 — Baseline + Two-Environment Setup

## Secret Boundaries

- Keep real Contentful values in ignored local files such as `.env.local`.
- Keep `.env.example` limited to variable names and safe placeholders.
- Do not commit management, delivery, preview, personal access, or OAuth tokens.
- Do not expose Contentful secret values through browser-prefixed environment variables.
- Do not print secret values in helper scripts, logs, docs, screenshots, or paste-back summaries.

## CLI Boundaries

- Use locally installed Contentful tooling only.
- Prefer `npx --no-install contentful` or direct local binary execution.
- Do not pass the Contentful management token as a command-line argument.
- Pass credentials through environment state only, with values hidden from output.
- Do not run authentication, environment mutation, migration, export, or import commands unless the current batch explicitly authorizes them.

## Environment Safety

Approved physical environments are `master` and `dev`.

- `master` is the permanent protected baseline and must not receive bootstrap migrations, experimental schema work, or model imports during current phases.
- `dev` is the single rotating sandbox for approved migration and model work.
- Verification is a workflow state, not a persistent environment ID.
- All migration and import scripts must reject `master`.

## Current Risk Controls

| Risk | Control |
|---|---|
| Accidental `master` mutation | Local wrappers reject `master` for mutation-oriented operations |
| `dev` deletion before recoverability | Deletion requires committed migrations, verified snapshot, checksum, pre-deletion evidence, recovery procedure, and explicit human approval |
| Stale three-environment documentation | Closeout and Phase 03 readiness include topology searches |
| Token exposure | Local env files are ignored, CLI args omit tokens, browser prefixes are prohibited, and scripts print presence only |
| Locale mismatch | Default locale is recorded in Phase 00 and checked before Phase 03 clean-room import |

## Current Phase Boundary

Batch 00.3 owns secret-safety and two-environment alignment verification. Batch 00.4 owns direct account, space, environment inventory, default locale, `master`, and `dev` evidence. Phase 01 remains deferred.
