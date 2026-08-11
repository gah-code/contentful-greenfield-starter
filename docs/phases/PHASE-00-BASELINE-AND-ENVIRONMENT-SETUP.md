# Phase 00 — Baseline + Two-Environment Setup

Status: active
Owner: repository maintainer

## Outcome

A safe repository, secure tooling boundary, and governed two-environment Contentful operating model using protected `master` + `dev`.

Phase 00 does not create content types, seed content, frontend integrations, or Contentful environment mutations during documentation alignment repairs.

## Batch Model

| Batch | Name | Status | Scope |
|---|---|---|---|
| 00.1 | Repository and Project Truth | Approved | Repository identity, canonical docs, git history deviation |
| 00.2 | Runtime and Contentful Tooling | Approved | Node/npm declarations, local Contentful packages, CLI wrapper safety |
| 00.3 | Two-Environment Strategy Alignment + Secret Safety | Approved | External validation passed; repository secret-safety checks complete without reading `.env.local` contents |
| 00.4 | Contentful Space and Environment Verification | Approved | Project space, Starter capacity, `master` + `dev`, clean state, and locale compatibility |
| 00.5 | Phase 00 Closeout | Next | Final risk review, evidence table, Phase 01 readiness decision |

Batch 00.3 approval is limited to repository secret-safety controls and two-environment documentation alignment.

## Repository and Runtime Evidence

| Item | Required | Recorded evidence |
|---|---|---|
| Package name | `contentful-greenfield-starter` | `package.json` name |
| Package manager | `npm@10.8.3` | `package.json` packageManager |
| Node engine | `>=22` | `package.json` engines |
| Node major pin | `22` | `.nvmrc` |
| Node runtime | `v22.2.0` | `node -v` during Phase 00 audit |
| npm runtime | `10.8.3` | `npm -v` during Phase 00 audit |
| contentful-cli | `4.0.4` | installed package version |
| contentful-migration | `5.1.0` | installed package version |
| contentful-export | `8.1.1` | installed package version |
| contentful-import | `10.0.18` | installed package version |

The Contentful CLI binary may report `0.0.0-determined-by-semantic-release`; do not attempt to repair that binary metadata.

## Approved Environment Model

| Environment | Role | Current evidence state |
|---|---|---|
| `master` | Permanent protected baseline and future release target | Verified ready, clean, and locale-compatible in Batch 00.4 |
| `dev` | Single rotating sandbox for migration development, model review, editorial QA, and later serial clean-room verification | Verified ready, clean, and suitable for future Phase 02 bootstrap work |

Verification is a workflow state, not a persistent Contentful environment ID.

## Batch 00.4 Contentful Evidence

Batch 00.4 verified the intended Contentful project space, Starter two-environment constraint, `master`/`dev` topology, clean environment state, and locale compatibility.

| Item | Verified evidence |
|---|---|
| Space | `Personal Website CMS — Greenfield Starter` |
| Organization | `Gilberto A Haro Web Technology` |
| Plan | Starter |
| Environment capacity | 2 of 2 |
| Topology | `master` + `dev` |
| `testing` | absent from intended project space |
| `verification` | workflow state only; no persistent environment |
| `master` | ready; 0 content types; 0 entries; 0 assets; 1 locale; `en-US` default; no fallback |
| `dev` | ready; 0 content types; 0 entries; 0 assets; 1 locale; `en-US` default; no fallback |
| Locale compatibility | PASS |
| `master` suitability | SAFE PROTECTED BASELINE |
| `dev` suitability | READY FOR FUTURE PHASE 02 BOOTSTRAP |

The earlier `testing` observation was resolved as stale/wrong CLI context and did not represent the intended live topology.

Temporary investigation exports were removed and were never promoted to canonical Phase 03 snapshots.

## Script Safety Requirements

- CMS helper scripts use locally installed Contentful tooling.
- Management tokens are not passed through command-line arguments.
- Secret values are not printed.
- Migration and import scripts reject `master`.
- Import targets the configured active environment, which must be `dev` for current development and future Phase 03 fresh-dev verification.

## Batch 00.3 Secret-Safety Evidence

### Objective

Verify local secret-handling controls without reading credential values or touching Contentful.

### Checks Performed

- checked whether `.env.local` exists without reading it
- verified `.env.local` is present locally
- verified `.env.local` is ignored
- verified `.env.local` is untracked
- verified `.env.local` has no Git history
- verified tracked env-file inventory
- verified `.env.example` placeholder contract
- verified management, delivery, and preview credential variable names are separate
- verified no browser-public sensitive credential prefix appears in tracked files
- verified Contentful helper scripts do not pass token values through CLI arguments
- verified helper scripts do not print secret values or dump the full environment
- reviewed tracked credential references
- verified two-environment regression search remains clean except prohibitive skill wording

### Safe Evidence Collected

Batch 00.3 validates repository controls and variable contracts only. It does not inspect or validate actual token values.

External validation: PASS. Batch 00.3 approved. No secret exposure detected. Live Contentful verification was deferred to Batch 00.4.

### Files Changed

- `TASKS.md`
- `docs/PROJECT-STATE.md`
- `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md`
- `docs/system/SECURITY-AND-SECRETS.md`
- `CHANGELOG.md`
- `.codex/skills/contentful-greenfield-project-tracker/SKILL.md`

### Security Boundaries

- `.env.local` contents were not opened, grepped, sourced, hashed, parsed, or printed.
- No broad environment dump was run.
- No Contentful authentication or live API call was run.
- No migration, export, import, environment operation, or seed operation was run.

### Known Limitations

- Actual token values, equality/difference, validity, and scopes are not verified.
- Contentful account, space, environment inventory, `master`, `dev`, and default locale evidence were deferred to Batch 00.4 and are recorded in the Batch 00.4 Contentful Evidence section.

### Warnings

`.env.local` values must remain untracked and must not be inspected by this batch. Token validity and token scopes remain outside Batch 00.3 evidence.

### Blockers

No suspected credential exposure was found.

### Review Status

APPROVED — external validation passed.

## Phase 03 Dependency

Phase 03 will export the approved model from `dev`, verify the snapshot, prove recoverability, obtain explicit human approval, delete `dev`, recreate `dev` from protected `master`, import the model-only snapshot into fresh `dev`, compare results, and continue using verified `dev`.

No destructive `dev` deletion or recreation is implemented in Phase 00.

## Historical Baseline Deviation

Git history shows `46125d2 Initial commit` included repository baseline files together with CMS/model artifacts, including the initial bootstrap migration and Contentful scripts.

Accepted deviation: do not rewrite Git history during Phase 00 repair. Future batches should use focused commits that separate repository baseline, tooling, documentation, model, and Contentful environment changes.

## Closeout Requirements

Phase 00 closes only after:

1. Batch 00.3 secret-safety and two-environment alignment audit passes.
2. Batch 00.4 records direct Contentful account, space, locale, and environment evidence.
3. Batch 00.5 records final risks and confirms Phase 01 readiness.
4. `docs/PROJECT-STATE.md`, `TASKS.md`, `CHANGELOG.md`, and this document agree.

Phase 00 remains active.
