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
- Shell CLI invocation with `--management-token` is prohibited.
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
| Locale mismatch | Default locale is recorded in Phase 00 and checked before and after the Phase 03 clean-room import attempt |

## Current Phase Boundary

Batch 00.3 verifies credential handling and variable separation without reading credential values. Actual token validity, scopes, equality/difference, and live Contentful access are not verified in Batch 00.3.

Batch 00.4 recorded direct account, space, environment inventory, default locale, `master`, and `dev` evidence. Batch 00.5 external validation approved Phase 00.

Phase 01, Phase 02, and Phase 03 are complete / frozen. Batch 03.6 is approved / checkpointed by the commit containing this document. Phase 04 is next / not started, and no Phase 04 Contentful mutation is authorized. Batches 03.1 and 03.2 are APPROVED. Batches 03.3 through 03.6 are APPROVED / CHECKPOINTED.

Batch 03.5 used one explicit import authorization. The sole top-level import invocation exited 1 after an HTTP 429 during Editor Interface processing, with 0 effective automatic request replays. The authorization is consumed. GET-only forensics independently proved complete semantic recovery with zero material drift. External semantic recovery, reconciliation, and final validation returned PASS WITH NOTES. Incident/recovery truth reconciliation and Final Approval Reconciliation are complete; the commit containing this document establishes the Batch 03.5 checkpoint.

One governed export from `dev` completed under explicit authorization. That one-export authorization is CONSUMED. The recovery snapshot exists and is externally approved for recovery use.

Current authorization boundary:

- Second export: NOT AUTHORIZED.
- Completed destructive `dev` rotation: exactly one deletion and one recreation from protected `master`.
- Destructive authorization: CONSUMED.
- Second destructive `dev` rotation: NOT AUTHORIZED.
- Second `dev` deletion: NOT AUTHORIZED.
- Second `dev` recreation: NOT AUTHORIZED.
- Import authorization: CONSUMED after exactly one top-level invocation.
- Second import: NOT AUTHORIZED.
- Manual repair/reset: NOT AUTHORIZED.
- Additional bootstrap: NOT AUTHORIZED.
- Seed: NOT STARTED.

The approved export/import helpers use explicit programmatic environment-token binding. The successful Gate B and destructive recovery authorizations are consumed. Credentials stay in ignored local environment state, never appear in CLI arguments or logs, and `contentful config list` remains prohibited.

### Executed Destructive Lifecycle Credential Boundary

The approved one-time Batch 03.4 lifecycle mechanism was the public `contentful-management` SDK version `12.10.0`.

| Item | Executed evidence |
|---|---|
| Credential source | `process.env.CONTENTFUL_MANAGEMENT_TOKEN` |
| Binding | in-process only |
| Token in command arguments | NO |
| Persisted CLI authentication | NOT USED / NOT APPROVED |
| Token printed | NO |
| Authentication mutation | 0 |
| Automatic destructive retries | 0 |

Persisted Contentful CLI authentication is not approved merely because the CLI is installed. Shell CLI invocation with `--management-token` remains prohibited. No management token may be placed in command-line arguments, and no login or authentication mutation is authorized.

The selected public SDK path performed exactly one `dev` DELETE and one recreation from protected `master`. The destructive authorization is consumed, and a second lifecycle execution is not authorized.

The initial destructive execution start used `npm ls contentful-management --depth=0` and falsely required the runtime package to be a direct root dependency. The stop occurred before Contentful access with 0 DELETE and 0 CREATE attempts. Lockfile and runtime evidence established `contentful-management@12.10.0` without package corruption or any need to change `package.json` or `package-lock.json`. External review approved continuation of the still-unconsumed authorization.

The approved lifecycle evidence confirms:

- public SDK credential execution mechanics;
- process-only token binding and non-exposure;
- exactly one delete and one recreate;
- no automatic destructive retry;
- independent post-recreation blank-state verification;
- no persisted CLI authentication or dependency change.

### Executed Batch 03.5 Import Credential and Retry Boundary

| Item | Executed evidence |
|---|---|
| Import mechanism | `scripts/contentful/import-model.mjs` + `contentful-import` 10.0.18 |
| Management runtime | `contentful-management` 12.10.0 / `contentful-sdk-core` 9.4.5 |
| Credential source | `process.env.CONTENTFUL_MANAGEMENT_TOKEN` |
| Binding | in-process only |
| Token in command arguments | NO |
| Persisted CLI authentication | NOT USED / NOT APPROVED |
| `retryOnError` | SDK default `true` |
| `retryLimit` | `0` |
| Effective automatic request replays | `0` / PROVEN |
| One-time import authorization | CONSUMED |
| Second import | NOT AUTHORIZED |
| Repair/reset | NOT AUTHORIZED |

The single import invocation exited nonzero after an HTTP 429. No automatic replay or second import was attempted, and no credential exposure was detected. `retryLimit = 0` is the proved control on the request replay path; the evidence must not be restated as `retryOnError = false`. Low-level HTTP requests/writes internal to the single import invocation are not asserted.

After the incident, 23 GET-only forensic requests made 0 writes, retries, or mutating requests and proved that `dev` contains the complete approved semantic model with zero material drift. No second import or repair is required for semantic recovery; both remain unauthorized.

### Batch 03.6 Final Validation Security Boundary

The initial Batch 03.6 final-live validator process completed without recoverable terminal evidence. Its semantic result remains unresolved; it made 0 writes and was not retried.

External review separately authorized one corrective GET-only validator invocation. It completed with:

- GET requests: 23;
- Contentful writes: 0;
- retries: 0;
- mutating requests: 0;
- credential exposure: none;
- exact topology, `master` protection, recovered `dev` model, and semantic verification: PASS.

The resumed closeout reconciliation performs 0 Contentful reads and 0 writes. The Phase 03 security closeout is PASS. External Batch 03.6 validation and External Final Validation returned PASS WITH NOTES, and Final Approval Reconciliation is complete. The commit containing this document establishes the Phase 03 closeout checkpoint and Phase 03 complete / frozen state. One-export, destructive, and import authorizations remain consumed. A second export, second rotation, second import, manual repair/reset, additional bootstrap, and seed remain unauthorized or not started.

Batch 03.6 approval progression:

- closeout truth reconciliation: COMPLETE;
- external Batch 03.6 validation: PASS WITH NOTES;
- Final Approval Reconciliation: COMPLETE;
- external final validation: PASS WITH NOTES / APPROVED FOR PHASE 03 CLOSEOUT GIT CHECKPOINT;
- Batch 03.6 / Phase 03 closeout Git checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT;
- Phase 03 security closeout: PASS;
- Phase 03: COMPLETE / FROZEN.

## Phase 03 / Batch 03.4 Safety Truth-Surface Reconciliation

Batch 03.4 Attempt 1: BLOCKED before Contentful access at the current-truth consistency gate because `ENVIRONMENT-STRATEGY.md` and `SECURITY-AND-SECRETS.md` still contained pre-03.3 current-state wording.

- Attempt 1 Contentful reads: 0.
- Attempt 1 Contentful writes: 0.
- Attempt 1 environment mutations: 0.
- Safety Truth-Surface Reconciliation: COMPLETE.
- External Validation: PASS WITH NOTES.
- Safety Truth-Surface Final Approval Reconciliation: COMPLETE.
- Safety Truth-Surface External Final Validation: PASS WITH NOTES / APPROVED.
- Safety Truth-Surface Git Checkpoint: ESTABLISHED BY THE COMMIT CONTAINING THIS DOCUMENT.
- Batch 03.4 Preflight Attempt 2: PASS / 23 fresh GETs / 0 writes.
- Credential-path corrective gate: PASS WITH NOTES / public SDK selected / 0 Contentful requests.
- Initial destructive execution start: false-negative stop before Contentful access / authorization not consumed.
- External false-negative review: continuation approved.
- Resumed JIT baseline: PASS / 13 GETs.
- Authorized lifecycle operation: 1 DELETE / 1 PUT recreation / 0 automatic retries.
- Independent blank-state validation: PASS / 14 GETs / 1 readiness poll / 0 writes.
- Destructive authorization: CONSUMED.
- Safety reconciliation Contentful reads: 0.

This Batch 03.4 section records historical pre-import state. Its post-rotation reconciliation was documentation-only and performed no Contentful access. At that checkpoint, `dev` was ready / freshly recreated / blank and the approved recovery snapshot awaited separately authorized import.

External post-rotation reconciliation validation and external final validation returned PASS WITH NOTES, and final approval reconciliation is COMPLETE. The Batch 03.4 checkpoint remains established. Subsequent Batch 03.5 evidence is authoritative for current `dev` and import state.

Snapshot recoverability approval did not itself authorize import or a second lifecycle operation. The later one-time Batch 03.5 import authorization is now consumed. This reconciliation records completed evidence only and grants no Contentful authorization.
