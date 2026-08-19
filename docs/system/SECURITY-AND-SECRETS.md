# Security and Secrets

Status: Phase 00 complete
Owner: Phase 00 — Baseline + Two-Environment Setup

## Secret Boundaries

- Keep real Contentful values in ignored local files such as `.env.local`.
- Keep `.env.example` limited to variable names and safe placeholders.
- Do not commit management, delivery, preview, personal access, or OAuth tokens.
- Do not expose Contentful secret values through browser-prefixed environment variables.
- Do not print secret values in helper scripts, logs, docs, screenshots, or paste-back summaries.

## Local Secret File Policy

`.env.local` is the local-only file for Contentful secret values. It must be ignored by Git, must not be tracked, and must not be read or printed during Batch 00.3 evidence collection.

Batch 00.3 may check whether `.env.local` exists, whether Git ignores it, whether it is tracked, and whether the filename appears in Git history. Batch 00.3 must not inspect the file contents.

## Credential Variable Contract

| Variable | Purpose | Batch 00.3 evidence boundary |
|---|---|---|
| `CONTENTFUL_MANAGEMENT_TOKEN` | migrations, model export/import, management operations | variable name and presence checks only |
| `CONTENTFUL_DELIVERY_TOKEN` | future server-side published-content delivery layer | variable name only |
| `CONTENTFUL_PREVIEW_TOKEN` | future server-side draft preview layer | variable name only |

Management, delivery, and preview credentials use separate variable names. Batch 00.3 does not prove that actual token values are different, valid, properly scoped, unexpired, or working.

Do not expose sensitive Contentful variables through browser-public prefixes such as `VITE_`, `NEXT_PUBLIC_`, or `PUBLIC_`.

## CLI Boundaries

- Use locally installed Contentful tooling only.
- Prefer `npx --no-install contentful` or direct local binary execution.
- Do not pass the Contentful management token as a command-line argument.
- Do not pass delivery or preview tokens as command-line arguments.
- Pass credentials through environment state only, with values hidden from output.
- Do not run authentication, environment mutation, migration, export, or import commands unless the current batch explicitly authorizes them.

## Phase 03 Export / Import Credential Contract

Phase 03 export and import helpers use `process.env.CONTENTFUL_MANAGEMENT_TOKEN` as the explicit Management credential source. They supply it directly to the installed programmatic `contentful-export` and `contentful-import` APIs.

Persisted Contentful CLI authentication is not the approved export/import credential path. The helpers must fail closed when the environment-loaded token is absent.

Token values are never:

- printed;
- passed through command-line arguments;
- serialized into snapshots;
- stored in reports;
- copied from persisted CLI state into the repository.

## Presence-Only Verification

Helper scripts may report that a required value is configured, present, missing, or not configured. Helper scripts must not print actual secret values, serialize `process.env`, dump the shell environment, or include token substrings in errors.

If suspected exposure is found in tracked files, terminal output, or Git history:

1. stop the batch,
2. report only the affected file and variable/category,
3. recommend rotating or revoking the affected credential,
4. do not reproduce the credential,
5. do not rewrite Git history without explicit owner approval.

## Future Hosting Boundary

Future hosting, delivery, and preview integrations must keep sensitive Contentful values server-side. Browser-exposed variables may be used only for values intentionally public and non-secret.

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

Batch 00.3 verifies credential handling and variable separation without reading credential values. Actual token validity, scopes, equality/difference, and live Contentful access are not verified in Batch 00.3.

Batch 00.4 recorded direct account, space, environment inventory, default locale, `master`, and `dev` evidence. Batch 00.5 external validation approved Phase 00.

Phase 01 and Phase 02 are complete / frozen. Phase 03 is ACTIVE. Batches 03.1 through 03.3 are APPROVED / CHECKPOINTED.

Batch 03.4 is NEXT / NOT STARTED.

One governed export from `dev` completed under explicit authorization. That one-export authorization is CONSUMED. The recovery snapshot exists and is externally approved for recovery use.

Current authorization boundary:

- Second export: NOT AUTHORIZED.
- Destructive `dev` rotation: NOT AUTHORIZED.
- `dev` deletion: NOT AUTHORIZED.
- `dev` recreation: NOT AUTHORIZED.
- Import: NOT AUTHORIZED.
- Additional bootstrap: NOT AUTHORIZED.
- Seed: NOT STARTED.

The approved export/import helpers use explicit programmatic environment-token binding. The successful Gate B and destructive recovery authorizations are consumed. Credentials stay in ignored local environment state, never appear in CLI arguments or logs, and `contentful config list` remains prohibited.

### Destructive Lifecycle Credential Boundary

The future Batch 03.4 destructive lifecycle credential path must pass read-only review before destructive authorization. Do not infer that persisted Contentful CLI authentication is approved merely because the CLI is installed. No management token may be placed in command-line arguments. No authentication mutation or login command is authorized by this documentation reconciliation.

The upcoming read-only Batch 03.4 preflight must still review:

- exact local CLI lifecycle commands;
- credential execution mechanics;
- token non-exposure;
- the one-delete / one-recreate boundary;
- independent post-recreation blank-state verification.

## Phase 03 / Batch 03.4 Safety Truth-Surface Reconciliation

Batch 03.4 Attempt 1: BLOCKED before Contentful access at the current-truth consistency gate because `ENVIRONMENT-STRATEGY.md` and `SECURITY-AND-SECRETS.md` still contained pre-03.3 current-state wording.

- Attempt 1 Contentful reads: 0.
- Attempt 1 Contentful writes: 0.
- Attempt 1 environment mutations: 0.
- Safety Truth-Surface Reconciliation: COMPLETE.
- External Validation: PASS WITH NOTES.
- Final Approval Reconciliation: COMPLETE.
- External Final Validation: PASS WITH NOTES / APPROVED.
- Safety Truth-Surface Git Checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT.
- Batch 03.4 Preflight Attempt 2: NOT YET RUN / NEXT AFTER CLEAN CHECKPOINT.
- Safety reconciliation Contentful reads: 0.

The reconciliation is documentation-only. The current `dev` model description reflects the last approved validation state and is not fresh Batch 03.4 live proof. Attempt 2 must independently collect fresh pre-deletion evidence.

Snapshot recoverability approval does not approve the destructive credential path and does not grant destructive execution authorization. This reconciliation corrects documentation only and grants no destructive authorization.
