# Phase 04 — Editorial QA + Model Freeze

## Status

| Scope | State |
| --- | --- |
| Phase 04 | ACTIVE BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 04.1 — Read-Only Planning + Editorial-Quality Preflight | APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT |
| Batch 04.2 — Editorial QA Scenario + Temporary Authoring Contract | NEXT / NOT STARTED AFTER SUCCESSFUL 04.1 CHECKPOINT VERIFICATION |
| Batch 04.3 — Controlled Temporary Editorial QA Execution | LATER |
| Batch 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections | LATER |
| Batch 04.5 — Editorial Workflow + Field Guidance | LATER |
| Batch 04.6 — Model Freeze Validation + Phase 04 Closeout | LATER |

Before the containing commit exists, committed repository truth remains Phase 04 — NEXT / NOT STARTED. The containing commit establishes the Phase 04 transition and the Batch 04.1 checkpoint; this uncommitted working tree does not claim that checkpoint already exists.

## Purpose

Phase 04 proves editorial usability through controlled temporary authoring before representative Phase 05 seed content. It tests the approved recovered model as an authoring system, assigns enforcement ownership, reconciles evidence before any correction, documents editorial workflow, and records a model-freeze decision only after the required evidence exists.

Batch 04.1 was repository/read-only planning plus GET-only preflight validation. Its external validation result was PASS WITH NOTES. This approval does not authorize Contentful authoring or any other Contentful operation.

## Starting Contract

The Phase 04 starting point is the approved recovered Phase 03 model.

| Contract fact | Approved baseline |
| --- | ---: |
| Content types | 10 |
| Stored fields | 99 |
| Authored references | 18 |
| Validation objects | 102 |
| Display fields | 10 |
| Regexp validations | 8 |
| Rich Text fields | 6 |
| Explicit editor overrides | 2 |
| Localized fields | 0 |

Exact content type IDs:

- `siteSettings`
- `personProfile`
- `socialLink`
- `navigationItem`
- `project`
- `article`
- `experienceItem`
- `skill`
- `skillGroup`
- `tool`

Frozen bootstrap migration:

- path: `content-model/migrations/0001-bootstrap-portfolio-model.js`
- SHA-256: `4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`

Approved recovery snapshot:

- filename: `contentful-model.dev.v1.20260819T210704Z.json`
- SHA-256: `0e731940722a86e9c70a9bc71a84a101f740a4efbed553bb998f12a840c9b64a`

Live state, **last freshly validated during Batch 04.1 preflight**:

- `master`: ready, protected blank baseline, 0 content types, 0 entries, 0 assets, 0 tags, `en-US`, default true, fallback null;
- `dev`: ready, approved recovered model, all 10 expected types published, 0 entries, 0 assets, 0 tags, `en-US`, default true, fallback null, 0 material drift;
- network audit: 23 GET, 0 retries, 0 POST, 0 PUT, 0 PATCH, 0 DELETE.

This evidence was not rerun during Final Approval Reconciliation. The reconciliation made zero Contentful calls.

## Phase 04 Batch Architecture

### 04.1 — Read-Only Planning + Editorial-Quality Preflight

Purpose:

- validate Phase 04 entry;
- confirm the frozen recovery model;
- inventory the editorial authoring surface;
- identify editorial-quality risks;
- plan controlled QA;
- establish the Phase 04 architecture.

Operation class: GET-only / repository reads.

State: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS DOCUMENT.

### 04.2 — Editorial QA Scenario + Temporary Authoring Contract

Purpose:

- define exact authoring scenarios and expected Contentful behavior;
- assign one primary enforcement owner to every scenario;
- define temporary QA artifact identification and dependency order;
- define future create, publish, update, and maximum-scope boundaries where justified;
- define cleanup inventory rules and a separate cleanup gate;
- resolve EF-05 enforcement ownership before any 04.3 mutation authorization.

Operation class: REPOSITORY-ONLY. No Contentful mutation.

State: NEXT / NOT STARTED AFTER SUCCESSFUL 04.1 CHECKPOINT VERIFICATION.

### 04.3 — Controlled Temporary Editorial QA Execution

Purpose: execute only externally approved temporary QA scenarios.

Operation class: CONTENTFUL MUTATION / SEPARATELY GATED.

Required authoring workflow:

```text
fresh read-only pre-execution gate
-> external validation
-> explicit human authorization
-> exact approved temporary QA authoring operations
-> immediate read-only evidence
-> STOP
-> external validation
```

Cleanup is not automatic. After QA evidence receives external validation, cleanup requires a separate gate, an exact temporary artifact inventory, separate explicit cleanup authorization, cleanup of only approved temporary entries/assets, read-only zero-content proof, and external validation.

If authoring fails unexpectedly, stop, preserve evidence, and do not automatically clean up.

### 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections

Purpose:

- reconcile 04.3 evidence;
- determine whether a model or Editor Interface correction is necessary;
- document `NO MODEL CORRECTION REQUIRED` when appropriate;
- perform corrections only when separately planned, externally validated, and explicitly authorized.

Operation class: repository reconciliation, plus conditional CMS/model mutation only when evidence requires it. This batch always exists even when no mutation is required. Batch 04.1 authorizes no correction.

### 04.5 — Editorial Workflow + Field Guidance

Purpose:

- document the authoring workflow, field guidance, and editorial lifecycle;
- capture validated authoring rules;
- prepare editor-facing quick-start material.

Operation class: REPOSITORY-ONLY. Contentful mutation remains prohibited unless a separately approved correction gate explicitly requires it.

### 04.6 — Model Freeze Validation + Phase 04 Closeout

Purpose:

- perform final read-only model/editorial validation;
- prove temporary QA content is removed or intentionally accounted for;
- reconcile the final model contract;
- explicitly record the model version/freeze decision;
- close Phase 04 only when all exit criteria pass.

Operation class: READ-ONLY + REPOSITORY RECONCILIATION. A new export or snapshot remains separately gated and is not implicitly authorized.

## Editorial QA Principles

- Test real authoring behavior, not schema shape alone.
- Assign one primary enforcement owner to every 04.2 scenario.
- Distinguish schema rejection from editorial, application, and governance rules.
- Temporary Phase 04 QA content is not Phase 05 representative seed content.
- Temporary QA cleanup requires separate review and authorization.
- Unexpected failures preserve evidence and trigger a stop; they do not trigger automatic cleanup.
- Model or Editor Interface corrections require direct evidence and a separate gate.
- Do not make a model correction solely to improve UI presentation without authoring evidence.
- Do not infer mutation authority from planning approval.

## Enforcement Owners

Every Batch 04.2 QA scenario must identify exactly one primary owner:

- `CONTENTFUL HARD VALIDATION`
- `EDITORIAL GUIDANCE`
- `APPLICATION / FUTURE FRONTEND`
- `GOVERNANCE`

Examples:

| Scenario | Primary owner |
| --- | --- |
| Invalid `projectType` enum | CONTENTFUL HARD VALIDATION |
| Duplicate tag | OWNERSHIP MUST BE RESOLVED IN 04.2 |
| Experience `endDate` before `startDate` | EDITORIAL GUIDANCE / APPLICATION |
| Private or local HTTPS destination | GOVERNANCE / APPLICATION |
| Canonical URL behavior | APPLICATION / FUTURE FRONTEND |

Contentful behavior is not a defect when the approved contract intentionally assigns enforcement elsewhere.

## EF-05 — Tag Uniqueness Ownership

Original observation: Project and Article tags are described as unique within an entry. The migration and live schema enforce array size and item length but do not directly enforce duplicate-value uniqueness.

Historical Phase 02 migration reconciliation records array-size and item-size validations, assigns uniqueness and semantic quality to editorial/QA, and classifies enforcement as PARTIAL.

Externally approved refined classification:

- KNOWN PHASE 02 CONTRACT / ENFORCEMENT OWNERSHIP AMBIGUITY
- NOT LIVE MODEL DRIFT
- NOT A 04.1 MODEL DEFECT
- NOT AUTHORIZATION FOR MODEL CORRECTION
- 04.2 REQUIRED INPUT
- 04.3 MUTATION AUTHORIZATION BLOCKED UNTIL OWNERSHIP IS RESOLVED

Batch 04.2 must evaluate without prejudging the result:

- Option A: supported hard Contentful uniqueness enforcement is expected, making this a later correction candidate;
- Option B: uniqueness is intentionally editorial/QA-owned, keeping the schema correct while clarifying wording and ownership;
- Option C: another supported mechanism owns the rule, requiring its exact owner and behavior to be documented.

No option is selected here. The frozen Phase 02 contract and migration remain unchanged.

## Other Editorial Findings

- `experienceItem.role` remains the approved display field; hands-on reference-picker clarity testing is required.
- Field-level help/grouping is currently limited to the two explicit slug controls; guidance or UI changes require 04.3 evidence.
- Machine-style enum values require comprehension testing; no enum changes are approved.
- Cross-field chronology/current-role consistency remains editorial/application-owned where Contentful cannot enforce it.
- Project requiredness is substantial but intentional and must be tested before any relaxation.
- All six Rich Text fields remain approved. `paragraph` and `list-item` remain absent from explicit `enabledNodeTypes`; normal implicit behavior requires hands-on testing.
- Structural HTTPS validation remains schema-owned; private/local/trust policy remains governance/application-owned.

## Singleton Boundary

`siteSettings` and `personProfile` remain semantic singletons. Phase 04 may test editor-facing identification, whether multiple drafts can technically be created, whether instructions are understandable, and whether editorial discipline is sufficient.

No `singletonId`, `isPrimary`, `isSingleton`, `activeConfig`, or other duplicate-prevention field is approved. Phase 04 must not claim to prove future application `limit=2` duplicate diagnostics unless that runtime/query layer exists. Application duplicate diagnostics remain downstream responsibility.

## Migration Boundary

`content-model/migrations/0001-bootstrap-portfolio-model.js` is frozen and must not be edited during Phase 04 reconciliation.

If later evidence proves a model or Editor Interface correction is required:

- do not silently edit Contentful;
- do not rewrite migration 0001;
- prefer a new numbered migration under migration-first governance;
- define the exact artifact and plan in Batch 04.4;
- externally validate the plan before execution;
- explicitly authorize any live execution.

A likely next number is 0002, but no migration name or scope is approved and no 0002 migration is created by Batch 04.1. If a correction changes the recovery contract, a replacement export/snapshot requires its own gate and authorization.

## Model-Version Boundary

- Model version: NOT YET FROZEN.
- Current wording: Phase 04 freeze candidate / approved v1 model baseline / model freeze pending editorial QA.
- `v1.0.0` declaration: DEFERRED TO PHASE 04 CLOSEOUT EVIDENCE.

Batch 04.1 does not approve a version, tag the repository, or rename the recovery snapshot. Batch 04.6 may record a version only when Phase 04 evidence supports it.

## Authorization Rules

| Operation | Current authorization |
| --- | --- |
| Editorial QA entry create/update/publish/unpublish/delete | NOT AUTHORIZED |
| Asset create/update/publish/delete | NOT AUTHORIZED |
| Schema mutation | NOT AUTHORIZED |
| Editor Interface mutation | NOT AUTHORIZED |
| Migration execution or additional bootstrap | NOT AUTHORIZED |
| Export or snapshot creation | NOT AUTHORIZED |
| Import | NOT AUTHORIZED |
| Environment deletion/recreation | NOT AUTHORIZED |
| Manual repair | NOT AUTHORIZED |
| Seed | NOT STARTED |

No previous Phase 02 or Phase 03 one-time authorization is reusable.

## Phase 04 Exit Intent

Phase 04 exit criteria are not yet passed. Phase 04 may close only after:

- core authoring scenarios are exercised;
- validation behavior is understood;
- reference-picker usability is validated;
- Rich Text authoring is validated;
- the Asset/accessibility workflow is validated to Phase 04 scope;
- any approved corrections are reconciled;
- editorial guidance exists;
- temporary QA content is removed or intentionally accounted for;
- final model validation passes;
- the model version/freeze decision is explicitly recorded;
- all truth surfaces align.
