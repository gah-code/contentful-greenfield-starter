# Project State

Project: `contentful-greenfield-starter`
Current phase: Phase 00 — COMPLETE
Current work item: Phase 01 — Content Strategy + Route Contract — NEXT
Latest approved batch: Batch 00.5 — Phase 00 Closeout — APPROVED

## Phase 00 Batch State

| Batch | Name | Status | Evidence |
|---|---|---|---|
| 00.1 | Repository and Project Truth | Approved | Repository identity, canonical docs, and initial deviation recorded |
| 00.2 | Runtime and Contentful Tooling | Approved | Runtime/package declarations and local CLI wrapper documented |
| 00.3 | Two-Environment Strategy Alignment + Secret Safety | Approved | External validation passed; repository secret-safety controls verified without reading `.env.local` contents |
| 00.4 | Contentful Space and Environment Verification | Approved | Project space, Starter capacity, `master` + `dev` inventory, clean environment state, and `en-US` locale compatibility verified |
| 00.5 | Phase 00 Closeout | Approved | External validation passed; Phase 00 final state approved |

Phase 01 is next. Bootstrap migration remains blocked and not run. Seed content has not started.

## Phase 00 Achievement Summary

- repository baseline established
- runtime/tooling verified
- secret-safety boundary established
- Contentful project identity verified
- Starter two-environment capacity verified
- `master` + `dev` topology verified
- `master` clean protected baseline verified
- `dev` clean rotating sandbox verified
- `en-US` locale compatibility verified
- migration intentionally not run

## Confirmed Architecture

| Area | Current truth |
|---|---|
| Physical environments | `master` + `dev` only |
| `master` role | Permanent protected baseline and future release target |
| `dev` role | Single rotating sandbox for schema development, model review, and editorial QA |
| Verification | Workflow state, not a persistent environment ID |
| Phase 03 target | Freshly recreated `dev` after protected `master` clone/recreation process |
| Model target | 10 semantic content types |
| Bootstrap target | Never `master`; later approved migration work targets `dev` |

## Batch 00.4 Contentful Verification Evidence

Verified Contentful evidence:

- project space: `Personal Website CMS — Greenfield Starter`
- organization: `Gilberto A Haro Web Technology`
- plan: Starter
- environment usage: 2 of 2
- live topology: `master` + `dev`
- `master`: ready, 0 content types, 0 entries, 0 assets, 1 locale, default locale `en-US`
- `dev`: ready, 0 content types, 0 entries, 0 assets, 1 locale, default locale `en-US`
- `testing`: absent from the intended project space
- `verification`: absent as a persistent environment
- locale compatibility: PASS
- `master` baseline suitability: safe protected baseline
- `dev` suitability: ready for future Phase 02 bootstrap work
- no Contentful schema, content, locale, or environment mutation occurred

Temporary investigation exports were removed from the repository and were not promoted to canonical Phase 03 snapshots.

## Batch 00.3 Secret-Safety Evidence

External validation: PASS. Batch 00.3 is approved. No secret exposure was detected. Live Contentful verification was deferred to Batch 00.4.

Verified repository controls:

- `.env.local` was checked for presence without reading contents.
- `.env.local` is present locally.
- `.env.local` is ignored by Git.
- `.env.local` is untracked.
- `.env.local` has no Git history.
- tracked environment-file inventory is limited to `.env.example`.
- `.env.example` uses placeholder variable names only.
- management, delivery, and preview credentials use separate variable names.
- no browser-public sensitive credential prefix was found in tracked files.
- Contentful helper scripts do not pass token values through CLI arguments.
- Contentful helper scripts do not print token values or dump the full environment.
- tracked credential references were reviewed without exposing values.

Not verified in Batch 00.3:

- actual credential values
- token equality or difference
- token validity
- token scopes
- Contentful authentication
- Contentful space access
- live `master` or `dev` state
- default locale

## Runtime and Tooling Evidence

| Tool | Detected version | Evidence source |
|---|---:|---|
| Node.js | `v22.2.0` | `node -v` during Phase 00 audit |
| npm | `10.8.3` | `npm -v` during Phase 00 audit |
| contentful-cli | `4.0.4` | installed package version |
| contentful-migration | `5.1.0` | installed package version |
| contentful-export | `8.1.1` | installed package version |
| contentful-import | `10.0.18` | installed package version |

The Contentful CLI binary may report `0.0.0-determined-by-semantic-release`; the installed package version remains the authoritative package evidence.

## Serial Clean-Room Verification Strategy

Phase 03 uses a serial workflow with the same `dev` environment ID:

```text
develop model in dev
-> technical + editorial model review
-> export approved model-only snapshot
-> verify snapshot structure
-> record checksum
-> record CLI/runtime metadata
-> record pre-deletion model evidence
-> confirm committed migration history
-> confirm dev contains no irreplaceable content
-> confirm recovery procedure
-> obtain explicit human approval
-> delete dev
-> recreate dev from protected master
-> confirm fresh dev state
-> import model-only snapshot into dev
-> compare rebuilt dev to pre-deletion evidence
-> declare dev verified
-> continue using dev
```

No deletion automation is part of this repair.

## Current Risks

| Risk | Status | Control |
|---|---|---|
| Accidental `master` mutation | Open | Migration/import scripts reject `master` |
| `dev` deletion before recoverability | Open | Require committed migrations, snapshot, checksum, pre-deletion evidence, recovery procedure, and explicit human approval |
| Stale three-environment documentation | Open | Search for obsolete topology terms during closeout and Phase 03 readiness |
| Token exposure | Controlled in repository | Ignore local env files, avoid CLI token args, avoid browser prefixes, and print presence only |
| Locale mismatch | Open | Record default locale in Phase 00 and check before Phase 03 clean-room import |
| Historical baseline commit mixed CMS/model artifacts | Accepted deviation | Do not rewrite history; use focused commits in future batches |

## Current Phase Boundary

Phase 00 is complete. Batch 00.1, Batch 00.2, Batch 00.3, Batch 00.4, and Batch 00.5 are approved. Phase 01 is next. Bootstrap migration, seed content, environment deletion, and Contentful model mutation remain out of scope.
