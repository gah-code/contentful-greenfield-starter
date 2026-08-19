# Phase 03 / Batch 03.1 — Model Export + Serial Clean-Room Verification Preflight

## Status

Status: APPROVED

Phase: Phase 03 — ACTIVE

Pre-export tooling: HARDENING REQUIRED

External validation: PASS WITH NOTES

Export: NOT RUN

Snapshot: NOT CREATED

Destructive authorization: NOT GRANTED

Import: NOT RUN

Seed: NOT STARTED

## Starting State

| Check | Result |
|---|---|
| Branch | `master` |
| Working tree | clean |
| `HEAD...origin/master` | `0 0` |
| Staged files | none |
| Phase 02 | COMPLETE / FROZEN |
| Batch 02.7 | APPROVED |
| Phase 02 checkpoint | COMPLETE |

## Phase Entry Validation

The repository, phase-state, migration-integrity, secret-safe configuration, and live GET-only environment gates passed. Canonical current-state conflicts: 0.

Phase 03 planning is active and Batch 03.1 is in review. This state does not authorize export, snapshot creation, environment lifecycle operations, import, or seed.

## Phase 02 Baseline

Approved migration:

`content-model/migrations/0001-bootstrap-portfolio-model.js`

Approved and detected SHA-256:

`4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`

Migration syntax: PASS

Bootstrap wrapper syntax: PASS

Approved live model invariants:

- 10 content types;
- 99 stored fields;
- 18 authored references;
- 102 validation objects;
- 10 display fields;
- 8 regexp validations;
- 6 Rich Text fields;
- 2 explicit editor-interface overrides;
- 0 material drift.

## Environment Baseline

| Environment | Exists | Status | Content Types | Entries | Assets | Locale | Role |
|---|---:|---|---:|---:|---:|---|---|
| `master` | Yes | ready | 0 | 0 | 0 | `en-US` | Protected blank baseline |
| `dev` | Yes | ready | 10 | 0 | 0 | `en-US` | Validated Phase 02 model and Phase 03 source |

- Configured target: `dev`.
- `dev != master`: confirmed.
- Contentful operations used for this baseline: GET only.
- Contentful writes: none.

## Tooling Inventory

| Tool | Purpose | Contentful Read/Write | Local Write | Target Guard | Credential Path | Phase 03 Role |
|---|---|---|---|---|---|---|
| `check-env.mjs` | Validate local configuration and secret presence | None | None | Requires `dev`; rejects `master` | Reads process environment; prints presence only | Preflight guard |
| `list-environments.mjs` | List environments | GET only | None | Uses configured space | CLI persisted authentication path | Inventory only |
| `export-model.mjs` | Export model data | GET | Creates snapshot directory and JSON/log output | Requires `dev`; rejects `master` through `check-env.mjs` | CLI persisted authentication path | Requires hardening |
| `import-model.mjs` | Import model snapshot | Write | Reads snapshot; CLI may write error logs | Requires `dev`; rejects `master` through `check-env.mjs` | CLI persisted authentication path | Requires hardening before import |
| `verify-snapshot.mjs` | Validate snapshot JSON | None | None | Not applicable | None | Requires hardening |
| `run-cli.mjs` | Spawn local Contentful CLI | Depends on caller | Depends on caller | None internally | Inherits environment but does not bind `CONTENTFUL_MANAGEMENT_TOKEN` to CLI auth | Shared CLI wrapper |
| `run-bootstrap-migration.mjs` | Execute approved migration | Write | None expected | Requires `dev`; rejects `master` | Inherited environment | Not authorized in Phase 03 |

No repository helper exists for environment deletion/recreation or semantic snapshot comparison.

## Tool Versions

| Tool | Detected version |
|---|---|
| Node | `v22.2.0` |
| npm | `10.8.3` |
| Contentful CLI package | `4.0.4` |
| `contentful-export` | `8.1.1` |
| `contentful-import` | `10.0.18` |
| `contentful-management` | `12.10.0` |

The CLI `--version` output was `0.0.0-determined-by-semantic-release`. This is a non-blocking display anomaly; installed package metadata is authoritative.

All relevant Phase 03 `.mjs` helpers passed `node --check`.

## TG-01 Credential Binding

Classification: BLOCKING CORRECTION REQUIRED

`check-env.mjs` verifies that `CONTENTFUL_MANAGEMENT_TOKEN` is present, but the export and import wrappers invoke Contentful CLI 4.0.4 without explicitly binding that value. The installed CLI resolves a management token from an explicit CLI option or persisted CLI context; it does not map the repository's `CONTENTFUL_MANAGEMENT_TOKEN` environment variable to CLI authentication. Passing the token as a CLI argument is prohibited.

Installed `contentful-export` 8.1.1 and `contentful-import` 10.0.18 support an in-process `managementToken` option. A later authorized tooling-hardening batch should call those programmatic APIs with `process.env.CONTENTFUL_MANAGEMENT_TOKEN`, preserve `dev`/`master` guards, and propagate errors without printing the credential. This eliminates persisted CLI authentication from the export/import path.

Export blocking: YES.

## TG-02 Snapshot Scope / Tags

Classification: BLOCKING CORRECTION REQUIRED

The current export wrapper includes content types, editor interfaces, locales, and tags. It excludes entries/assets through `--skip-content`, roles through `--skip-roles`, and webhooks through `--skip-webhooks`. The installed export tool supports `--skip-tags` and programmatic `skipTags: true`; the wrapper does not currently use either.

A later authorized correction must explicitly set `skipTags: true`. Strict model-only scope is achievable with the installed library.

Export blocking: YES.

## TG-03 Snapshot Verifier Coverage

Classification: BLOCKING CORRECTION REQUIRED

| Invariant | Required | Current Verifier Coverage |
|---|---:|---|
| Content types | 10 | SUPPLEMENTARY ONLY: requires non-empty array |
| Exact type IDs | 10 | SUPPLEMENTARY ONLY: reports IDs and detects duplicates |
| Stored fields | 99 | MISSING |
| Authored references | 18 | MISSING |
| Validation objects | 102 | MISSING |
| Display fields | 10 | MISSING |
| Regex validations | 8 | MISSING |
| Rich Text fields | 6 | MISSING |
| Explicit editor overrides | 2 | MISSING |
| Entries | 0 | MISSING |
| Assets | 0 | MISSING |
| Locale | `en-US` | MISSING |
| Missing IDs | 0 | MISSING |
| Unexpected IDs | 0 | MISSING |

The current verifier cannot approve a recovery snapshot. A later authorized correction must enforce the exact Phase 02 semantic invariants, exact IDs, excluded categories, locale, and useful non-secret failure output.

Export blocking: YES because the export gate requires a sufficient validator before snapshot creation.

## TG-04 Environment Lifecycle Guard

Classification: NO CORRECTION REQUIRED

No repository lifecycle helper exists. Existing policy permits separately approved, exact, one-time CLI commands with pre/post evidence. That approach better preserves the explicit human destructive gate and avoids embedding deletion automation in the repository.

Installed semantic commands:

```text
contentful space environment delete --space-id <configured-space> --environment-id dev

contentful space environment create --space-id <configured-space> --environment-id dev --name dev --source master --await-processing --processing-timeout 5
```

The installed create command polls while awaiting processing. The detected `--processing-timeout 5` value is five minutes. Its timeout path may report that processing is incomplete without providing sufficient proof of readiness, so the independent blank-state gate remains mandatory. API/command failures propagate as failures, but readiness must still be proven independently. Credential execution mechanics must be reviewed with the future destructive authorization; absence of a repository helper is not itself a blocker.

Destructive-gate blocking: NO.

## Export Contract

- Helper: `scripts/contentful/export-model.mjs`.
- Current underlying tool: local Contentful CLI 4.0.4 using `contentful-export` 8.1.1.
- Target: explicit configured space and `dev`; `master` rejected by the wrapper guard.
- Credential handling: currently dependent on persisted CLI authentication; blocking.
- Interaction: no prompt expected.
- Included: content types, editor interfaces, locales, and currently tags.
- Excluded: entries, assets, roles, webhooks.
- API keys: unsupported by this export path and not exported.
- Output: `content-model/snapshots/`, default `contentful-model.current.json`.
- Filename/overwrite: `CONTENTFUL_MODEL_SNAPSHOT` can select a governed unique filename; the fixed default permits replacement of an existing path and must not be used for an approved snapshot.
- Errors: CLI child exit propagates; generated error logs may be written with the export output.
- Export executed: NO.

The approved correction direction is a direct programmatic `contentful-export` call with explicit `managementToken`, `environmentId: 'dev'`, strict skip options including `skipTags: true`, and a unique governed output filename.

## Import Contract

- Helper: `scripts/contentful/import-model.mjs`.
- Current underlying tool: local Contentful CLI 4.0.4 using `contentful-import` 10.0.18.
- Target: explicit configured space and `dev`; `master` rejected by the wrapper guard.
- Credential handling: currently dependent on persisted CLI authentication; blocking.
- Input: explicit argument or configured snapshot filename under `content-model/snapshots/`.
- `content-model-only`: imports content types, editor interfaces, and locales while excluding entries/assets and webhooks.
- Tags: must be absent from the governed snapshot because the installed import task can process tags independently of the content-model-only display scope.
- Conflict/partial failure: import may leave a partial schema; any nonzero exit or partial state fails closed.
- Retry: no wrapper-level retry; one explicitly authorized top-level attempt only.
- Import executed: NO.

The approved correction direction is a direct programmatic `contentful-import` call with the same explicit environment credential and fail-closed error propagation.

## Governed Snapshot Scope

| Category | Disposition |
|---|---|
| Content types | INCLUDE |
| Editor interfaces | INCLUDE |
| Locales | INCLUDE / VERIFY |
| Entries | EXCLUDE |
| Assets | EXCLUDE |
| Tags | EXCLUDE |
| Roles | EXCLUDE |
| Webhooks | EXCLUDE |
| API keys | EXCLUDE |
| Credentials/secrets | EXCLUDE |
| Unrelated configuration | EXCLUDE |

The snapshot is a recovery artifact for the approved semantic model, not a whole-space export.

## Snapshot Governance

- Directory: `content-model/snapshots/`.
- Filename: `contentful-model.dev.v1.<YYYYMMDDTHHMMSSZ>.json`.
- Environment marker: `dev`.
- Timestamp: UTC at successful generation.
- Checksum: SHA-256 over the raw JSON bytes.
- Raw artifact: ignored by Git under the existing policy; retain securely through Phase 03 closeout and any separately approved backup procedure.
- Normalized projection: separate ignored deterministic artifact used for semantic comparison if needed.
- Repository evidence: sanitized Markdown report records filename, checksum, tool versions, scope, and validation results.
- Secret scan: mandatory before snapshot approval; reject credentials and unexpected top-level categories.
- Snapshot created: NO.

## Semantic Comparison Contract

Compare:

- content type IDs, contract-owned names, and display fields;
- field IDs, primitives, requiredness, localization, and contract-owned disabled/omitted states;
- Entry and Asset link shapes, Array item types, cardinality, and target restrictions;
- hard validations, regex semantics, and Rich Text validation semantics;
- explicit editor-interface controls;
- locale code, default state, and fallback.

Normalize or ignore only non-semantic CMA/runtime metadata, including `sys.version`, `sys.publishedVersion`, timestamps, revision counters, environment links, generated timestamps, and environment-specific identifiers. Do not ignore authoring or model semantics.

## Clean-Room Success Criteria

| Metric | Required |
|---|---:|
| Content types | 10 |
| Stored fields | 99 |
| Authored references | 18 |
| Validation objects | 102 |
| Display fields | 10 |
| Regexp validations | 8 |
| Rich Text fields | 6 |
| Explicit editor overrides | 2 |
| Missing/unexpected type IDs | 0 / 0 |
| Missing/unexpected field IDs | 0 / 0 |
| Primitive/required/localization/reference/validation/editor drift | 0 |
| Material drift | 0 |
| Entries | 0 |
| Assets | 0 |
| Locale | `en-US` |

`master` must remain protected and untouched at 0 types / 0 entries / 0 assets / `en-US`.

## Failure Contract

Future destructive and import work fails closed. A nonzero exit, partial schema, unexpected schema, entries/assets, or material drift must stop the workflow. Automatic retry, manual repair, and a second import without new explicit approval are prohibited.

## Export Gate

Before export: Git clean and synchronized; Batch 03.1 approved; migration checksum unchanged; validated `dev` at 10 types / 0 entries / 0 assets / `en-US`; blank protected `master`; snapshot scope, credential path, output, checksum policy, and sufficient validator finalized; seed not started.

Export authorized: NO.

Export executed: NO.

## Snapshot Approval Gate

Require a snapshot, validated scope, passed secret scan, captured SHA-256, exact semantic invariants, recovery suitability, and known Git/evidence state. Snapshot approval does not authorize destructive rotation.

## Destructive Rotation Gate

Require separately approved snapshot evidence, matching checksum, validator PASS, ready blank `master`, expected `dev`, 0 entries/assets, reviewed exact commands, and explicit human authorization for exactly one delete and one recreate. Additional reset remains unauthorized.

Destructive authorization: NOT GRANTED.

## Blank-State Gate

After recreation, stop and independently prove: `dev` exists, is ready, differs from `master`, and has 0 types / 0 entries / 0 assets / `en-US`; `master` remains blank. Import remains unauthorized until this passes.

## Import Gate

Require proven blank `dev`, approved snapshot and matching SHA-256, validator PASS, exact `dev` target, finalized credential path and import command, one explicitly authorized attempt, no top-level retry, and seed disabled.

Import authorized: NO.

Import executed: NO.

## Post-Import Evidence Plan

Retain start/end UTC, target, snapshot identity and SHA-256, attempt number, non-secret stdout/stderr, exit code and signal, all model invariant counts, entries/assets/locale, semantic drift, master protection, and Git state. Raw logs stay outside the repository; only sanitized evidence is committed. Credentials are never pasted or committed.

## Phase 03 Proposed / Existing Batch Architecture

No canonical Phase 03 sub-batch sequence existed before this preflight. The following sequence is PROPOSED / AWAITING EXTERNAL APPROVAL:

| Batch | Purpose | Status |
|---|---|---|
| 03.1 | Model Export + Serial Clean-Room Verification Preflight | IN REVIEW |
| 03.2 | Phase 03 Tooling Hardening | PROPOSED |
| 03.3 | Governed Model Export + Snapshot Validation | PROPOSED |
| 03.4 | Destructive `dev` Rotation + Blank-State Validation | PROPOSED |
| 03.5 | Snapshot Import + Clean-Room Comparison | PROPOSED |
| 03.6 | Phase 03 Validation + Closeout | PROPOSED |

Only Batch 03.1 is active. Proposed numbering is not approved until external review accepts it.

## Pre-Export Tooling Readiness

| Gap | Classification | Blocks Export | Required Correction |
|---|---|---:|---|
| TG-01 credential binding | BLOCKING CORRECTION REQUIRED | Yes | Use programmatic export/import APIs with explicit environment-loaded management credential |
| TG-02 tag exclusion | BLOCKING CORRECTION REQUIRED | Yes | Set `skipTags: true` in the governed export path |
| TG-03 snapshot verifier | BLOCKING CORRECTION REQUIRED | Yes | Enforce complete exact Phase 02 invariants and scope exclusions |
| TG-04 lifecycle guard | NO CORRECTION REQUIRED | No | Use separately approved exact one-time CLI commands and independent post-state gates |

Overall: TOOLING HARDENING REQUIRED BEFORE EXPORT.

## Security Boundaries

- `.env.local` was not opened, printed, grepped, or sourced.
- Management credential presence was checked without displaying its value.
- No credential was passed through a CLI argument.
- `contentful config list` was not run.
- No raw API payloads or logs are recorded here.
- No persisted CLI authentication state is copied into the repository.

## Mutation Audit

| Operation | Result |
|---|---|
| Contentful GET reads | YES — baseline only |
| Contentful writes | NONE |
| Export | NO |
| Snapshot creation | NO |
| Import | NO |
| Migration/bootstrap | NO |
| Schema/content/locale mutation | NO |
| Environment deletion/creation | NO |
| `master` mutation | NO |
| Seed | NO |
| Tooling/package changes | NO |

## Open Gaps

- TG-01 explicit secret-safe credential binding.
- TG-02 explicit tag exclusion.
- TG-03 exact semantic snapshot verification.

No new governance decision is required. TG-04 uses the existing explicit-approval policy.

## Recommended Next Gate

STOP. Run external validation of Batch 03.1. Then request separately authorized Phase 03 tooling hardening. Do not export, create a snapshot, rotate `dev`, import, or seed.

## Batch 03.1 Approval

Status: APPROVED

External validation: PASS WITH NOTES

- TG-01 was delegated to Batch 03.2.
- TG-02 was delegated to Batch 03.2.
- TG-03 was delegated to Batch 03.2.
- TG-04 requires no correction.

This approval authorized only the separately scoped Batch 03.2 tooling hardening. It did not authorize export, snapshot creation, destructive rotation, import, bootstrap, or seed.
