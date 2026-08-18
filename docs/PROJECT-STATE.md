# Project State

Project: `contentful-greenfield-starter`
Current phase: Phase 02 — ACTIVE
Latest completed phase: Phase 01 — COMPLETE / FROZEN
Latest approved batch: Batch 02.5 — Bootstrap Migration Reconciliation + Preflight — APPROVED
Current work item: Batch 02.6 — Bootstrap Migration Execution — NEXT
Bootstrap migration: APPROVED / RECONCILED V1 / NOT RUN / BLOCKED PENDING 02.6 EXECUTION GATES
Seed content: NOT STARTED

Batch 01.1 external validation passed.
Batch 01.2 external validation passed.
Batch 01.3 external validation passed.
Batch 01.4 external validation passed.
Batch 01.5 external validation passed with notes.
Batch 02.1 external validation passed with notes.
Batch 02.2 external validation passed with notes.
Batch 02.3 external validation passed with notes.
Batch 02.4 external validation passed with notes.
Batch 02.5 external validation passed with notes.

The content-strategy foundation is approved with open decisions intentionally carried forward to later Phase 01 batches.

Batch 01.2 approved the formal v1 route system.

Batch 01.2 defines route purposes, audiences, visitor questions, CTA direction, required and optional content, content domains consumed, CMS/code/derived ownership, reuse, route composition intent, route states, content readiness, internal linking, responsive intent, accessibility intent, directional SEO intent, future CMS implications, deferred behavior, and decision reconciliation.

OD-07 is resolved and approved by the formal v1 route contract.

Batch 01.3 approved Option 2 hybrid SEO ownership. Editorial SEO override scope is limited conceptually to SEO title, SEO description, and social image for dynamic editorial content. Canonical URLs, robots/indexability, sitemap eligibility, preview exclusion, breadcrumbs, structured data, and metadata fallback behavior remain code/state-derived. Exact Contentful field representation remains Phase 02 work.

Batch 01.4 approved the implementation-facing Content Requirements Matrix in `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`. The matrix maps approved route, content-strategy, and SEO requirements to semantic content domains, ownership, reuse, route readiness, future fixture needs, media/accessibility/SEO/public-safety requirements, and directional Phase 02 handoff classifications. It does not create Contentful schema, field IDs, migrations, fixtures, frontend implementation, or seed content.

OD-08 is resolved and approved: Skill = professional capability. Tool = product, platform, framework, technology, or software used to exercise a capability. Batch 02.2 later approves Tool as a standalone v1 type; Batch 02.3 approves Tool field IDs; Batch 02.4 approves Tool references and validations.

Batch 01.5 approved the Phase 01 requirements freeze after external validation. Nine v1 routes, content strategy, route responsibilities, SEO architecture, content requirements, editorial/code/derived ownership, fixture requirements, and the Phase 02 handoff are frozen as Phase 02 inputs. Open decisions are classified by downstream owner; none blocks the Phase 01 requirements freeze. At Phase 01 closeout, content-model artifacts remained proposed Phase 02 inputs pending reconciliation. No Contentful schema, migration, fixture, frontend, or seed implementation started.

Batch 02.1 approved the entry and existing model reconciliation against frozen Phase 01 contracts. At Batch 02.1 closeout, the proposed field-ID ledger, reference map, bootstrap migration, snapshots, reports, and Contentful scripts remained reconciliation inputs only. Migration execution remains gated.

Batch 02.2 approved the v1 semantic content type inventory in `docs/content-model/CONTENT-TYPE-LEDGER.md`. The approved standalone v1 content types are `siteSettings`, `personProfile`, `socialLink`, `navigationItem`, `project`, `article`, `experienceItem`, `skill`, `skillGroup`, and `tool`. Approved standalone type count: 10. Content type IDs are approved; Batch 02.3 later approves fields and field IDs. References, cardinality, validations, editor interfaces, and migration implementation remain unfrozen.

Batch 02.2 approved type-level outcomes: broad `seoMetadata` is absorbed into owning Project/Article SEO override fields, Tool is a standalone v1 type, SkillGroup is a standalone v1 type, Learning/Certification is lightweight profile-owned content, Contact is composed from owning sources, Media uses Contentful Assets without a wrapper type, dedicated taxonomy is deferred, and generic Page/PageSection/component-shaped modeling remains code-owned.

OD-11 is resolved and approved: Certification / learning evidence is lightweight profile-owned content in v1. No standalone Certification or Learning content type is required. Batch 02.3 approves exact profile-owned field representation as `personProfile.learningHighlights`.

Batch 02.5 approved the reconciled v1 bootstrap migration implementation and static/non-mutating preflight. The migration implements the approved v1 type, field, reference, validation, asset, Rich Text, localization, and display-field contract. Execution has not run; Batch 02.6 owns live `dev` mutation evidence after execution-time gates and explicit human approval.

Batch 02.1 carry-forward notes: public safety remains a governance/readiness requirement unless later evidence proves explicit CMS state is needed. Media alt/context requirements remain representation questions and do not automatically approve a dedicated media wrapper or exact asset-metadata strategy.

Batch 02.3 approved the field and field-ID contract in `docs/content-model/FIELD-ID-LEDGER.md` after external validation returned PASS WITH NOTES. The approved contract covers all 10 approved types, direct Project/Article SEO override fields, lightweight profile-owned Learning/Certification, relationship field intents, required/optional intent, v1 localization, legacy field reconciliation, non-modeled technical/derived/governance exclusions, route coverage, fixture compatibility, and migration impact preview.

Batch 02.4 approved the reference, validation, and editorial contract in `docs/content-model/REFERENCE-MAP.md` and `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md` after external validation returned PASS WITH NOTES. It approves authored reference direction, derived reverse relationships, cardinality, target restrictions, required relationship state, routeKey values, slug rules, scalar and controlled-value validation, SEO override guidance, URL/date rules, Rich Text and Asset rules, accessibility/public-safety guidance, singleton behavior, display fields, type-level editor guidance, orphan-risk mitigation, and migration handoff. Supplemental external decision validation resolves OD-06, OD-12, and OD-13 without changing the approved model contracts.

Type contract: APPROVED V1.

Field contract: APPROVED V1.

Field IDs: APPROVED V1.

Reference contract: APPROVED V1.

Validation contract: APPROVED V1.

Editorial contract: APPROVED V1.

Migration implementation: APPROVED / RECONCILED V1.

Migration execution: NOT RUN.

Static preflight: APPROVED.

Contentful commands: NONE.

`dev` mutation: NONE.

`master` mutation: NONE.

Bootstrap: BLOCKED PENDING 02.6 EXECUTION GATES.

## Phase 02 Batch State

| Batch | Name | Status | Evidence |
|---|---|---|---|
| 02.1 | Entry + Existing Model Reconciliation | Approved | External validation passed with notes; Phase 01 frozen inputs confirmed; proposed ledgers, reference map, bootstrap migration, and Contentful scripts inspected read-only in `docs/phases/PHASE-02-CONTENT-MODEL-CONTRACT-AND-BOOTSTRAP-MIGRATION.md` |
| 02.2 | Content Type Contract | Approved | External validation passed with notes; 10 standalone v1 content types and stable type IDs approved in `docs/content-model/CONTENT-TYPE-LEDGER.md`; field/reference/migration work remains deferred |
| 02.3 | Field + Field-ID Contract | Approved | External validation passed with notes; approved field and field-ID contract recorded in `docs/content-model/FIELD-ID-LEDGER.md`; reference shape and validations remain deferred |
| 02.4 | References + Validations + Editorial Contract | Approved | External validation passed with notes; reference, validation, and editorial contract approved in `docs/content-model/REFERENCE-MAP.md` and `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md` |
| 02.5 | Bootstrap Migration Reconciliation + Preflight | Approved | External validation passed with notes; migration implementation approved / reconciled V1; non-mutating preflight report recorded in `content-model/reports/PHASE-02-BATCH-02.5-MIGRATION-PREFLIGHT.md`; migration execution not run |
| 02.6 | Bootstrap Migration Execution | Next | May execute approved bootstrap against `dev` only after execution-time gates and explicit human execution approval |
| 02.7 | Phase 02 Validation + Closeout | Later | Verifies model state, master protection, migration evidence, and Phase 03 readiness |

## Phase 01 Batch State

| Batch | Name | Status | Evidence |
|---|---|---|---|
| 01.1 | Content Strategy Foundation | Approved | External validation passed; Batch 01.1 strategy workbook reconciled into `docs/system/CONTENT-STRATEGY.md`, this phase state, `TASKS.md`, the roadmap, README, route-contract status, and the Phase 01 document |
| 01.2 | Route Contract | Approved | External validation passed; formal v1 route contract documented in `docs/system/ROUTE-CONTRACT.md`; OD-07 resolved; OD-08 preserved as open at Batch 01.2 closeout |
| 01.3 | SEO + Metadata Contract | Approved | External validation passed; `docs/system/SEO-AND-METADATA-CONTRACT.md` documents approved Option 2 hybrid SEO ownership, route metadata behavior, route-state SEO behavior, OD-15 resolution, and Phase 02 model reconciliation inputs |
| 01.4 | Content Requirements Matrix | Approved | External validation passed; `docs/system/CONTENT-REQUIREMENTS-MATRIX.md` maps approved strategy, route, and SEO contracts into route/domain requirements, readiness, reuse, fixture, media, accessibility, public-safety, and Phase 02 handoff inputs; OD-08 resolved |
| 01.5 | Phase 01 Validation + Freeze | Approved | External validation passed with notes; Phase 01 requirements freeze approved in `docs/phases/PHASE-01-CONTENT-STRATEGY-AND-ROUTE-CONTRACT.md` |

At Phase 01 closeout, Phase 02 advanced to NEXT without creating static fixtures, implementing frontend metadata, running migrations, running Contentful commands, or mutating Contentful state. Phase 02 is now active; Batch 02.1 is approved, Batch 02.2 is approved, Batch 02.3 is approved, Batch 02.4 is approved, Batch 02.5 is approved, and Batch 02.6 is next.

## Batch 01.1 Strategy Summary

Recorded strategy foundation:

- website mission and non-goals
- primary professional title and positioning direction
- primary audience: CMS / content leaders
- secondary audiences: hiring managers and engineering leaders
- brand voice and language rules
- approved and proposed content pillars
- v1 content domains
- preliminary route inventory for Batch 01.2
- homepage, profile, experience, project, writing, skills, tools, navigation, and contact strategy
- CMS-owned vs code-owned vs derived ownership boundary
- content reuse rules
- editorial lifecycle
- static fixture requirements
- content quality and accessibility rules
- responsive content intent
- localization: en-US only for v1
- privacy/confidentiality rules
- deferred/out-of-scope v1 features
- assumptions A-01 through A-09
- open decisions OD-01 through OD-05, OD-09, OD-10, and OD-14; OD-06, OD-12, and OD-13 are resolved/approved by supplemental Batch 02.4 decision reconciliation; OD-07 was resolved by Batch 01.2, OD-15 by Batch 01.3, OD-08 by Batch 01.4, and OD-11 by Batch 02.2

Non-blocking open decisions include canonical positioning sentence, secondary professional title, desired work type, proposed pillar validation, featured projects, public-safe enterprise projects, and homepage proof metrics. OD-06, OD-08, OD-11, OD-12, OD-13, and OD-15 are resolved.

## Phase 00 Batch State

| Batch | Name | Status | Evidence |
|---|---|---|---|
| 00.1 | Repository and Project Truth | Approved | Repository identity, canonical docs, and initial deviation recorded |
| 00.2 | Runtime and Contentful Tooling | Approved | Runtime/package declarations and local CLI wrapper documented |
| 00.3 | Two-Environment Strategy Alignment + Secret Safety | Approved | External validation passed; repository secret-safety controls verified without reading `.env.local` contents |
| 00.4 | Contentful Space and Environment Verification | Approved | Project space, Starter capacity, `master` + `dev` inventory, clean environment state, and `en-US` locale compatibility verified |
| 00.5 | Phase 00 Closeout | Approved | External validation passed; Phase 00 final state approved |

Phase 00 is complete. Bootstrap migration remains blocked and not run. Seed content has not started.

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
| Model target | Approved 10 standalone v1 semantic content types with approved fields, references, validations, and editorial contract; migration reconciled / in review / not run |
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
| Locale compatibility | Resolved | `master` and `dev` both use `en-US` as the default locale with no fallback; revalidate compatibility before the Phase 03 clean-room import |
| Historical baseline commit mixed CMS/model artifacts | Accepted deviation | Do not rewrite history; use focused commits in future batches |

## Current Phase Boundary

Phase 00 is complete. Batch 00.1, Batch 00.2, Batch 00.3, Batch 00.4, and Batch 00.5 are approved.

Phase 01 is complete / frozen. Batch 01.1 is approved. Batch 01.2 is approved after external validation. Batch 01.3 is approved after external validation. Batch 01.4 is approved after external validation. Batch 01.5 is approved after external validation. Phase 02 is active, Batch 02.1 is approved, Batch 02.2 is approved, Batch 02.3 is approved, Batch 02.4 is approved, Batch 02.5 is approved after external validation, and Batch 02.6 is next.

Bootstrap execution, seed content, environment deletion, Contentful model mutation, Contentful export/import, static fixtures, frontend implementation, and Batch 02.6 execution remain out of scope until the next approved execution pass.
