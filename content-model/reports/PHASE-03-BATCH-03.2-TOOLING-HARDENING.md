# Phase 03 / Batch 03.2 — Tooling Hardening

## Status

Status: APPROVED

Phase: Phase 03 — ACTIVE

Batch 03.1: APPROVED

Pre-export tooling: APPROVED

Export: NOT RUN

Snapshot: NOT CREATED

Destructive authorization: NOT GRANTED

Import: NOT RUN

Seed: NOT STARTED

## Approval Status

Phase: Phase 03

Batch: 03.2 — Export, Import + Snapshot Verification Tooling Hardening

Status: APPROVED

External validation: PASS WITH NOTES

TG-01: CORRECTED / APPROVED

TG-02: CORRECTED / APPROVED

TG-03: CORRECTED / APPROVED

TG-04: NO CORRECTION REQUIRED

Pre-export tooling: APPROVED

Next: 03.3 — Governed Model Export + Snapshot Validation

## Authorization

This batch implements only TG-01 explicit export/import credential binding, TG-02 strict export scope, and TG-03 exact local snapshot verification. TG-04 requires no implementation change.

No Contentful read, write, export, import, migration, bootstrap, environment lifecycle, or seed operation was authorized or executed.

## Starting State

| Check | Result |
|---|---|
| Branch | `master` |
| Working tree | Batch 03.1 documentation/evidence only |
| `HEAD...origin/master` | `0 0` |
| Staged files | none |
| Phase 03 | ACTIVE |
| Batch 03.1 | Externally validated; approval reconciliation pending at start |
| Migration SHA-256 | `4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24` |

## TG-01 Before

`export-model.mjs` and `import-model.mjs` invoked Contentful CLI through `run-cli.mjs`. `check-env.mjs` confirmed that `CONTENTFUL_MANAGEMENT_TOKEN` existed, but the CLI invocation did not bind that value and therefore depended on persisted CLI authentication.

## TG-01 Correction

- Both helpers now load the installed programmatic libraries with `createRequire`.
- Both pass `process.env.CONTENTFUL_MANAGEMENT_TOKEN` through the library's in-process `managementToken` option.
- Neither helper places a token in `argv` or invokes `run-cli.mjs`.
- Both require `dev`, reject `master`, and fail closed when the credential is absent.
- Both use generic wrapper failure messages and discard package-generated error-log files through the platform null device.
- The import helper sets `retryLimit: 0` and contains no retry loop or fallback invocation.

The installed `contentful-import` ESM entry fails under the current local Node runtime because it imports a `date-fns` directory path. Its package exports also provide a supported CommonJS entry; `createRequire` loads that entry successfully without changing dependencies.

## TG-01 Verification

| Check | Result |
|---|---|
| Export programmatic API | PASS — `contentful-export` function |
| Import programmatic API | PASS — `contentful-import` CommonJS function |
| Credential source | `process.env.CONTENTFUL_MANAGEMENT_TOKEN` |
| Token CLI argument | absent |
| Persisted CLI authentication | not used by export/import |
| Missing-token behavior | nonzero before network access |
| Target | exact `dev` |
| `master` | rejected |

TG-01: CORRECTED.

## TG-02 Before

The CLI export excluded entries/assets, roles, and webhooks but did not exclude tags. The export therefore did not meet the governed model-only recovery scope.

## TG-02 Correction

The programmatic export explicitly configures:

```text
skipContent: true
skipAssets: true
skipRoles: true
skipWebhooks: true
skipTags: true
skipContentModel: false
skipEditorInterfaces: false
```

Content types, editor interfaces, and locales remain included. Entries, assets, tags, roles, and webhooks are excluded. API keys and other unrelated configuration are outside the installed export library's supported result categories.

The output remains under `content-model/snapshots/`. Generated and override filenames must match `contentful-model.dev.v1.<YYYYMMDDTHHMMSSZ>.json`; an existing destination fails closed instead of being overwritten.

## TG-02 Verification

- Installed tag option confirmed as `skipTags`.
- Static configuration confirms every required skip option.
- Output filename encodes `dev` and v1.
- No export or output file was created.

TG-02: CORRECTED.

## TG-03 Before

The previous verifier checked only file existence, non-empty content types, and duplicate type IDs. It could not approve a recovery snapshot.

## TG-03 Correction

The verifier now:

- verifies the approved migration SHA-256 before loading contract truth;
- executes the approved migration against an in-memory collector with no Contentful or network access;
- derives exact content types, fields, references, validations, display fields, Rich Text restrictions, and explicit editor controls from that checksum-locked artifact;
- compares exact type and field IDs plus semantic field shapes;
- verifies `10 / 99 / 18 / 102 / 10 / 8 / 6 / 2` invariants;
- verifies exact RE2-compatible URL, slug, and email regex contracts;
- rejects lookarounds, backreferences, `prohibitRegexp`, and `flags: null`;
- verifies only the six approved Rich Text fields and rejects `paragraph` and `list-item` node restrictions;
- verifies the two `builtin/slugEditor` overrides and `trackingFieldId: title`;
- requires exactly one default `en-US` locale with no fallback;
- requires entries, assets, tags, roles, and webhooks to be absent or empty;
- rejects unknown top-level categories and structurally obvious secret-bearing keys;
- prints concise semantic mismatches without dumping snapshot payloads.

The import helper invokes this verifier before any future import attempt. Snapshot approval and SHA matching remain external gates.

## TG-03 Verification

The checksum-locked collector produced the exact approved metrics:

| Invariant | Required | Detected |
|---|---:|---:|
| Content types | 10 | 10 |
| Stored fields | 99 | 99 |
| Authored references | 18 | 18 |
| Validation objects | 102 | 102 |
| Display fields | 10 | 10 |
| Regex validations | 8 | 8 |
| Rich Text fields | 6 | 6 |
| Explicit editor overrides | 2 | 2 |
| Entries | 0 | 0 |
| Assets | 0 | 0 |
| Locale | `en-US` | `en-US` |

TG-03: CORRECTED.

## TG-04 Decision

TG-04: NO CORRECTION REQUIRED.

No destructive lifecycle helper was added. Future `dev` rotation continues to require separate explicit authorization, reviewed exact commands, one delete, one recreate, pre/post evidence, an independent blank-state gate, and no retry.

## Export Helper Contract

- Helper: `scripts/contentful/export-model.mjs`.
- Library: `contentful-export` 8.1.1 programmatic API.
- Target: configured space and exact `dev`.
- Credential: environment-loaded Management token supplied in process memory.
- Scope: content types, editor interfaces, and locales only.
- Excluded: entries, assets, tags, roles, webhooks, API keys, and unrelated configuration.
- Output: unique governed JSON filename under `content-model/snapshots/`.
- Existing output: fail closed.
- Actual export: NO.

## Import Helper Contract

- Helper: `scripts/contentful/import-model.mjs`.
- Library: `contentful-import` 10.0.18 supported CommonJS programmatic API.
- Target: configured space and exact `dev`; `master` rejected.
- Credential: environment-loaded Management token supplied in process memory.
- Input: governed `dev` v1 snapshot under `content-model/snapshots/`.
- Verification: exact local semantic verifier must pass before library invocation.
- Mode: `contentModelOnly: true`.
- Retry: `retryLimit: 0`; no helper-level retry.
- Partial failure: stop and inspect live state; no second attempt without approval.
- Actual import: NO.

## Snapshot Verifier Contract

Expected semantic truth comes from the approved migration at the exact approved SHA-256, executed against an in-memory collector. Explicit aggregate constants, type IDs, display-field mappings, Rich Text field IDs, and final regex patterns independently guard collector behavior and key externally approved invariants.

This avoids maintaining a second 99-field manifest while preventing an unapproved migration edit from silently redefining expected truth.

The verifier reads one local JSON file, performs no network access, and writes only concise stdout/stderr diagnostics.

## Local Fixture Tests

Temporary synthetic fixtures were generated under `${TMPDIR}/contentful-snapshot-fixtures-*`, outside the repository, and removed after execution. They are not Contentful exports.

| Test | Expected | Result |
|---|---|---|
| Known-good synthetic snapshot | PASS | PASS |
| Wrong type ID | FAIL | PASS |
| Missing field | FAIL | PASS |
| Extra field | FAIL | PASS |
| Reference drift | FAIL | PASS |
| Validation drift | FAIL | PASS |
| Display-field drift | FAIL | PASS |
| Regex drift | FAIL | PASS |
| Rich Text drift | FAIL | PASS |
| Editor-interface drift | FAIL | PASS |
| Unexpected entry | FAIL | PASS |
| Unexpected asset | FAIL | PASS |
| Unexpected tag | FAIL | PASS |
| Wrong locale | FAIL | PASS |
| Secret-bearing category | FAIL | PASS |

## Secret-Safety Verification

- `.env.local` was not opened, printed, grepped, or sourced.
- No secret value was printed or recorded.
- No token appears in CLI arguments.
- No token is serialized to snapshots or evidence.
- Persisted CLI authentication is not used by export/import.
- Missing-token checks failed closed before any network operation.
- The verifier rejects secret-bearing structural keys and unknown top-level categories.

## Implementation Diff

| File | Change |
|---|---|
| `scripts/contentful/export-model.mjs` | Programmatic credential binding, strict scope, governed filename, overwrite guard |
| `scripts/contentful/import-model.mjs` | Programmatic credential binding, governed input, verifier gate, no retry |
| `scripts/contentful/verify-snapshot.mjs` | Exact checksum-anchored semantic verification and secret-safe diagnostics |

Unchanged: `run-cli.mjs`, package files, migration, bootstrap wrapper, lifecycle tooling.

## Mutation Audit

| Operation | Result |
|---|---|
| Contentful reads | NONE |
| Contentful writes | NONE |
| Export | NO |
| Governed snapshot creation | NO |
| Import | NO |
| Migration/bootstrap | NO |
| Environment deletion/creation | NO |
| `master` mutation | NO |
| Seed | NO |
| Temporary synthetic fixtures | Created outside repository and removed |

## Remaining Gaps

No implementation or approval-reconciliation gap remains in Batch 03.2. Actual export still requires separate explicit authorization in Batch 03.3.

## Export-Gate Readiness

Export tooling: APPROVED.

Batch 03.3: NEXT / NOT STARTED / EXPORT NOT AUTHORIZED.

STOP. Review the Batch 03.2 approval reconciliation. Do not export, create a governed snapshot, rotate `dev`, import, bootstrap, or seed.
