# Tasks

This tracker records current project truth. Do not mark future batches complete without direct repository, command, or Contentful evidence.

## Completed

### Phase 02 — Content Model Contract + Bootstrap Migration

Status: COMPLETE / FROZEN

#### Batch 02.1 — Entry + Existing Model Reconciliation

Status: APPROVED

- [x] Confirm Phase 01 frozen
- [x] Confirm exact Phase 02 scope
- [x] Establish Phase 02 batch plan
- [x] Inspect frozen Phase 01 model implications
- [x] Audit proposed content type ledger read-only
- [x] Audit field-ID ledger read-only
- [x] Audit reference map read-only
- [x] Audit bootstrap migration read-only
- [x] Reconcile legacy `seoMetadata` direction
- [x] Review Tool model pressure
- [x] Review Learning/Certification model pressure
- [x] Review Skill/SkillGroup model pressure
- [x] Review taxonomy pressure
- [x] Review related-content pressure
- [x] Review Project model pressure
- [x] Review Article model pressure
- [x] Review Experience model pressure
- [x] Record model decision queue
- [x] Record migration execution gates
- [x] Preserve <=25 type cap
- [x] Confirm no schema/migration mutation
- [x] External Batch 02.1 validation

#### Batch 02.2 — Content Type Contract

Status: APPROVED

- [x] Confirm Batch 02.1 approved
- [x] Apply semantic content-type decision test
- [x] Review siteSettings
- [x] Review personProfile
- [x] Review socialLink
- [x] Review navigationItem
- [x] Review project
- [x] Review article
- [x] Review experienceItem
- [x] Review skill
- [x] Reconcile skillGroup
- [x] Reconcile seoMetadata
- [x] Decide proposed Tool representation
- [x] Decide proposed Learning/Certification representation
- [x] Confirm Contact does/does not need standalone type
- [x] Confirm Media does/does not need standalone type
- [x] Review taxonomy type pressure
- [x] Reject generic Page/PageSection model
- [x] Propose stable content type IDs
- [x] Validate route coverage
- [x] Validate reuse coverage
- [x] Review editorial usability
- [x] Review orphan-entry risk
- [x] Review type-count pressure
- [x] Preview migration impact
- [x] Update CONTENT-TYPE-LEDGER.md
- [x] Confirm no field contract was created
- [x] Confirm no migration mutation
- [x] External Batch 02.2 validation

#### Batch 02.3 — Field + Field-ID Contract

Status: APPROVED

- [x] Confirm Batch 02.2 approved
- [x] Inspect existing field-ID ledger
- [x] Inspect reference map read-only
- [x] Inspect bootstrap migration read-only
- [x] Compare existing fields against frozen Phase 01 contracts
- [x] Reconcile legacy technical SEO fields
- [x] Propose fields and field IDs for all 10 approved types
- [x] Classify required and optional field intent
- [x] Record v1 localization state
- [x] Propose Project and Article SEO override fields
- [x] Exclude canonical, robots, sitemap, structured data, and route-state fields
- [x] Exclude proficiency and derived reading time
- [x] Propose lightweight profile-owned Learning/Certification field
- [x] Record Contact composition ownership
- [x] Review media accessibility representation
- [x] Preserve public-safety governance boundary
- [x] Record relationship field intents without freezing reference shape
- [x] Review required/optional policy
- [x] Review field count pressure
- [x] Review duplicate meaning pressure
- [x] Validate route coverage across all nine v1 routes
- [x] Confirm future fixture compatibility
- [x] Preview migration impact without editing migration
- [x] Update FIELD-ID-LEDGER.md as proposed/in review
- [x] Confirm REFERENCE-MAP.md unchanged
- [x] Confirm no migration mutation
- [x] External Batch 02.3 validation

#### Batch 02.4 — References + Validations + Editorial Contract

Status: APPROVED

- [x] Confirm Batch 02.3 approved
- [x] Inventory all relationship intents
- [x] Determine authoritative authoring direction
- [x] Eliminate unnecessary bidirectional references
- [x] Finalize reference cardinality
- [x] Finalize reference ordering behavior
- [x] Finalize reference requiredness
- [x] Define target-type restrictions
- [x] Reconcile siteSettings references
- [x] Reconcile personProfile references
- [x] Reconcile Project references
- [x] Reconcile Article references
- [x] Reconcile Experience references
- [x] Reconcile SkillGroup references
- [x] Reconcile Tool relationships
- [x] Define related-content strategy
- [x] Define routeKey allowed values
- [x] Define slug rules
- [x] Define scalar validation rules
- [x] Define SEO override guidance
- [x] Define URL rules
- [x] Define date rules
- [x] Define controlled values
- [x] Define Rich Text rules
- [x] Define Asset rules
- [x] Define accessibility editorial rules
- [x] Preserve public-safety governance boundary
- [x] Define singleton enforcement strategy
- [x] Define display fields
- [x] Define type-level editor guidance
- [x] Review orphan-entry risk
- [x] Review Project reference density
- [x] Reconcile REFERENCE-MAP.md
- [x] Create/update validation/editorial contract
- [x] Review OD-06
- [x] Review OD-12
- [x] Review OD-13
- [x] Record Batch 02.5 migration handoff
- [x] Confirm migration unchanged
- [x] Confirm no Contentful commands
- [x] External Batch 02.4 validation
- [x] Supplemental OD-06 / OD-12 / OD-13 external decision validation
- [x] Resolve OD-06 / OD-12 / OD-13 after supplemental validation

#### Batch 02.5 — Bootstrap Migration Reconciliation + Preflight

Status: RE-APPROVED AFTER RE2 COMPATIBILITY CORRECTION

Previously approved after external validation returned PASS WITH NOTES, then reopened for Rich Text migration compatibility and re-approved. The corrected Gate B retry executed once and failed after partially mutating `dev`; Batch 02.5 was reopened again for RE2 URL-validation compatibility and complete regex audit, then externally re-approved after PASS WITH NOTES validation.

- [x] Confirm complete v1 model contract approved
- [x] Audit legacy migration
- [x] Reconcile exact 10-type inventory
- [x] Remove standalone `seoMetadata`
- [x] Add Tool type
- [x] Reconcile all approved fields
- [x] Remove `canonicalUrl`
- [x] Replace `openGraphImage` with `socialImage`
- [x] Remove `noIndex`
- [x] Remove `noFollow`
- [x] Remove `readingTimeMinutes`
- [x] Remove `skill.proficiency`
- [x] Reconcile references
- [x] Reconcile cardinality
- [x] Reconcile target restrictions
- [x] Reconcile requiredness
- [x] Reconcile routeKey validation
- [x] Reconcile slug validation
- [x] Reconcile scalar validations
- [x] Reconcile controlled values
- [x] Reconcile Rich Text contract
- [x] Reconcile Asset contract
- [x] Reconcile display fields
- [x] Preserve singleton strategy without new fields
- [x] Preserve public-safety governance boundary
- [x] Preserve accessibility ownership boundary
- [x] Audit derived reverse relationships
- [x] Run static syntax preflight
- [x] Review bootstrap safety wrapper read-only
- [x] Define Batch 02.6 execution gates
- [x] Record enforcement gaps
- [x] Confirm no Contentful commands
- [x] Confirm migration not executed
- [x] External Batch 02.5 validation

##### Batch 02.5 Reopen — Migration Compatibility Correction

Historical compatibility correction; superseded for execution readiness by the later RE2 correction and partial `dev` recovery boundary.

- [x] Diagnose first Gate B attempt
- [x] Confirm dev remained blank
- [x] Identify unsupported Rich Text node validation
- [x] Remove unsupported Rich Text enabledNodeTypes
- [x] Preserve 10 / 99 / 18 model contract
- [x] Add noninteractive migration confirmation
- [x] Re-run migration syntax check
- [x] Re-run wrapper syntax check
- [x] Re-run local validator compatibility
- [x] Calculate corrected migration checksum
- [x] External revalidation
- [x] Final approval reconciliation
- [x] Review / stage / commit / push current corrected artifacts
- [x] Confirm clean 0 0 after checkpoint
- [x] Fresh Gate A after separate dev recovery
- [x] Fresh explicit Gate B authorization

##### Batch 02.5 Reopen — RE2 URL Validation Compatibility

- [x] Preserve second Gate B failure evidence
- [x] Confirm partial dev state
- [x] Confirm no second retry
- [x] Inventory every migration regexp
- [x] Inventory every prohibitRegexp
- [x] Audit all patterns for RE2 unsupported syntax
- [x] Audit regex payload shape / flags
- [x] Correct shared URL validation
- [x] Audit slug regex
- [x] Audit all non-URL regex
- [x] Run local RE2 compatibility where available
- [x] Run local migration validation
- [x] Preserve static 10 / 99 / 18
- [x] Calculate new migration checksum
- [x] Ensure raw error log is outside repository
- [x] External revalidation
- [x] Final approval reconciliation
- [x] Review / stage / commit / push
- [x] Confirm clean 0 0
- [x] Obtain explicit destructive dev recovery approval
- [x] Recover/recreate blank dev
- [x] Verify blank dev
- [x] Fresh Gate A
- [x] Fresh Gate B authorization

#### Batch 02.6 — Bootstrap Migration Execution

Status: APPROVED — BOOTSTRAP EXECUTED SUCCESSFULLY IN DEV

- [x] Gate A preflight
- [x] First execution incident investigated
- [x] Migration compatibility corrected
- [x] Partial `dev` recovered
- [x] Fresh Gate A passed
- [x] RE2-corrected Gate B authorized
- [x] RE2-corrected migration executed once
- [x] Exit code 0
- [x] 10 approved content type IDs verified
- [x] Entries remain 0
- [x] Assets remain 0
- [x] Locale remains en-US
- [x] Master remained untouched
- [x] External Gate B validation passed

Migration implementation: APPROVED RE2-CORRECTED V1

Migration execution: SUCCESSFUL IN DEV / ATTEMPT #3 OVERALL / EXIT 0

Gate B authorization: CONSUMED

Additional bootstrap execution: NOT AUTHORIZED

Destructive dev recovery: COMPLETE / EXTERNALLY APPROVED

Additional dev reset: NOT AUTHORIZED

Seed content: NOT STARTED

#### Batch 02.7 — Phase 02 Validation + Closeout

Status: APPROVED

- [x] Verify exact 10 live content types
- [x] Verify exact 99 stored fields
- [x] Verify field IDs
- [x] Verify primitives
- [x] Verify requiredness
- [x] Verify non-localized v1 contract
- [x] Verify 18 authored references
- [x] Verify target restrictions
- [x] Verify derived reverses absent
- [x] Verify hard validations
- [x] Verify regex validations
- [x] Verify Rich Text restrictions
- [x] Verify 10 display fields
- [x] Verify explicit editor-interface overrides
- [x] Verify legacy schema absent
- [x] Verify master remains blank
- [x] Verify dev entries remain 0
- [x] Verify dev assets remain 0
- [x] Create Batch 02.7 validation report
- [x] External Batch 02.7 validation
- [x] Final Phase 02 approval reconciliation
- [x] Review / stage / commit / push Phase 02 closeout
- [x] Confirm clean synchronized 0 0

### Completed Phase 01 — Content Strategy + Route Contract

Status: COMPLETE / FROZEN

#### Approved

- [x] Batch 01.1 — Content Strategy Foundation
- [x] Batch 01.2 — Route Contract
- [x] Batch 01.3 — SEO + Metadata Contract
- [x] Batch 01.4 — Content Requirements Matrix
- [x] Batch 01.5 — Phase 01 Validation + Freeze

Batch 01.1 external validation: PASS.
Batch 01.2 external validation: PASS.
Batch 01.3 external validation: PASS.
Batch 01.4 external validation: PASS.
Batch 01.5 external validation: PASS WITH NOTES.

Approved Batch 01.2 evidence:

- [x] Confirm formal v1 route inventory
- [x] Classify route types
- [x] Define route purpose
- [x] Define primary audience intent
- [x] Define primary visitor question
- [x] Define CTA direction
- [x] Define required content
- [x] Define optional content
- [x] Define content domains consumed
- [x] Define CMS/code/derived ownership
- [x] Define reuse rules
- [x] Define route composition intent
- [x] Define route states
- [x] Define content-readiness rules
- [x] Define internal linking
- [x] Define responsive intent
- [x] Define accessibility intent
- [x] Record SEO intent boundary
- [x] Record future CMS implications
- [x] Record deferred behavior
- [x] Preserve unresolved decisions
- [x] External Batch 01.2 validation
- [x] Resolve OD-07 — Final formal v1 route contract
- [x] Preserve OD-08 — `/tools` vs skills as PROPOSED / OPEN at Batch 01.2 closeout

#### Batch 01.3 — SEO + Metadata Contract

Status: APPROVED

- [x] Audit existing SEO/model assumptions
- [x] Classify broad `seoMetadata` proposal
- [x] Confirm Option 2 hybrid ownership
- [x] Confirm approved route SEO intent
- [x] Define metadata ownership
- [x] Define editorial override contract
- [x] Define technical SEO ownership
- [x] Define fallback hierarchy
- [x] Define title patterns
- [x] Define description intent
- [x] Define canonical behavior
- [x] Define route-state indexability
- [x] Define robots behavior
- [x] Remove editorial page-level `noFollow` from v1 contract
- [x] Define Open Graph requirements
- [x] Define social-image fallback
- [x] Define structured-data candidates
- [x] Distinguish search-feature candidates from semantic schema candidates
- [x] Define sitemap eligibility
- [x] Define internal-link SEO expectations
- [x] Record Phase 02 model reconciliation inputs
- [x] Resolve OD-15 — SEO override/default strategy
- [x] Preserve unrelated open decisions
- [x] External Batch 01.3 validation

#### Batch 01.4 — Content Requirements Matrix

Status: APPROVED

- [x] Confirm approved strategy/route/SEO inputs
- [x] Define requirement taxonomy
- [x] Define ownership taxonomy
- [x] Define route-level content requirements
- [x] Define required/optional/conditional content
- [x] Define content-domain ownership
- [x] Define canonical content reuse
- [x] Define route-readiness requirements
- [x] Define fixture requirements
- [x] Define route-state fixture coverage
- [x] Define media requirements
- [x] Define accessibility content requirements
- [x] Define SEO semantic inputs
- [x] Define public-safety requirements
- [x] Define Phase 02 handoff classifications
- [x] Review future model pressure
- [x] Preserve content-type cap
- [x] Review OD-08
- [x] Resolve OD-08 — Skills vs Tools semantic boundary
- [x] Review remaining requirements-related decisions
- [x] Preserve unrelated open decisions
- [x] External Batch 01.4 validation

#### Batch 01.5 — Phase 01 Validation + Freeze

Status: APPROVED

- [x] Inspect repository state and current Phase 01 truth surfaces
- [x] Verify approved Content Strategy, Route Contract, SEO Contract, and Content Requirements Matrix inputs
- [x] Validate cross-contract alignment
- [x] Validate nine-route v1 inventory coverage
- [x] Validate ownership, reuse, route-readiness, media, accessibility, public-safety, fixture, and SEO alignment
- [x] Classify remaining open decisions by downstream owner
- [x] Confirm OD-07, OD-08, and OD-15 remain RESOLVED / APPROVED
- [x] Confirm unresolved decisions remain visible and non-blocking
- [x] Validate Phase 02 handoff classifications as directional only
- [x] Review legacy model artifacts as proposed Phase 02 inputs
- [x] Confirm content-type pressure remains below the 25-type constraint
- [x] Confirm no Contentful model, migration, fixture, frontend, seed, or SEO implementation work occurred
- [x] Record Phase 01 as complete / frozen
- [x] External Batch 01.5 / Phase 01 freeze validation

## Now

### Phase 03 — Model Export + Serial Clean-Room Verification

Status: ACTIVE

#### Batch 03.1 — Model Export + Serial Clean-Room Verification Preflight

Status: APPROVED

- [x] Confirm clean synchronized Phase 02 checkpoint
- [x] Confirm Phase 02 truth surfaces
- [x] Confirm current `master`/`dev` baseline through GET-only reads
- [x] Verify approved migration checksum and syntax
- [x] Inventory Phase 03 tooling
- [x] Verify helper syntax
- [x] Investigate credential binding
- [x] Investigate strict model-only export scope
- [x] Audit snapshot verifier coverage
- [x] Evaluate environment lifecycle guard requirement
- [x] Define snapshot governance
- [x] Define semantic comparison contract
- [x] Define export gate
- [x] Define snapshot approval gate
- [x] Define destructive gate
- [x] Define blank-state gate
- [x] Define import gate
- [x] Define post-import evidence plan
- [x] Create Batch 03.1 preflight report
- [x] External Batch 03.1 validation — PASS WITH NOTES

#### Batch 03.2 — Export, Import + Snapshot Verification Tooling Hardening

Status: APPROVED

- [x] Approve Phase 03 tooling-hardening scope
- [x] Inspect installed programmatic export/import APIs
- [x] Bind export credential explicitly
- [x] Bind import credential explicitly
- [x] Remove persisted CLI authentication dependency from export/import
- [x] Preserve exact `dev` target and `master` rejection
- [x] Exclude entries and assets from governed export
- [x] Exclude tags, roles, and webhooks from governed export
- [x] Preserve content types, editor interfaces, and locales
- [x] Enforce governed `dev` v1 snapshot filenames and overwrite protection
- [x] Implement exact snapshot verifier
- [x] Anchor expected semantic truth to the approved migration checksum
- [x] Preserve exact Phase 02 model invariants
- [x] Validate verifier against temporary synthetic fixtures
- [x] Validate all required negative drift cases
- [x] Preserve TG-04 gated CLI lifecycle without adding a helper
- [x] Confirm dependencies and Phase 02 artifacts are unchanged
- [x] Create Batch 03.2 tooling-hardening report
- [x] External Batch 03.2 validation — PASS WITH NOTES
- [x] TG-01 credential hardening approved
- [x] TG-02 strict export scope approved
- [x] TG-03 semantic snapshot verifier approved
- [x] TG-04 lifecycle strategy approved with no helper

Pre-export tooling: APPROVED. TG-01, TG-02, and TG-03 are corrected / approved. TG-04 remains no correction required. Export and every later execution gate remain unauthorized.

#### Batch 03.3 — Governed Model Export + Snapshot Validation

Status: NEXT / NOT STARTED

- [ ] Review/stage/commit/push Batch 03.1 + 03.2 checkpoint
- [ ] Confirm clean synchronized `0 0`
- [ ] Batch 03.3 export pre-execution gate
- [ ] Explicit governed export authorization
- [ ] Execute governed model export exactly once
- [ ] Validate real exported snapshot
- [ ] Capture SHA-256
- [ ] Secret-scan snapshot
- [ ] Approve snapshot for recovery use

Future separately gated work:

- [ ] Destructive `dev` rotation
- [ ] Import snapshot
- [ ] Seed content

## Completed Evidence

### Phase 00 — Baseline + Two-Environment Setup

Status: COMPLETE

Approved batches:

- [x] Batch 00.1 — Repository and Project Truth
- [x] Batch 00.2 — Runtime and Contentful Tooling
- [x] Batch 00.3 — Two-Environment Strategy Alignment + Secret Safety
- [x] Batch 00.4 — Contentful Space and Environment Verification
- [x] Batch 00.5 — Phase 00 Closeout

Recorded Phase 00 evidence:

- [x] Repository identity recorded as `contentful-greenfield-starter`
- [x] Node major pinned through `.nvmrc`
- [x] npm package manager recorded as `npm@10.8.3`
- [x] Local Contentful tooling declared in `package.json`
- [x] Phase 00 document uses `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md`
- [x] Canonical documentation surfaces exist
- [x] Historical baseline commit deviation accepted and recorded
- [x] Repository preflight passed
- [x] Runtime verified
- [x] Contentful tooling verified
- [x] Secret-safety regression passed
- [x] Temporary investigation exports absent
- [x] `master` + `dev` architecture remains canonical
- [x] `master` protected baseline remains verified
- [x] `dev` rotating sandbox remains verified
- [x] `master`/`dev` `en-US` compatibility verified
- [x] Destructive Phase 03 safety gate preserved
- [x] Bootstrap migration remains blocked/not run
- [x] Seed content remains not started
- [x] Phase 00 external closeout validation passed

## Current Boundaries

- Phase 00 is complete.
- Batch 00.1, Batch 00.2, Batch 00.3, Batch 00.4, and Batch 00.5 are approved.
- Phase 01 is complete / frozen.
- Batch 01.1 is approved.
- Batch 01.2 is approved after external validation.
- Batch 01.3 is approved after external validation.
- Batch 01.4 is approved after external validation.
- Batch 01.5 is approved after external validation.
- Phase 02 is complete / frozen.
- Batch 02.1 is approved after external validation.
- Batch 02.2 is approved after external validation.
- Batch 02.3 is approved after external validation.
- Batch 02.4 is approved after external validation.
- Batch 02.5 was approved after external validation returned PASS WITH NOTES, reopened after first Gate B execution evidence, re-approved after Rich Text compatibility correction, reopened again after corrected Gate B retry failed on URL regex compatibility, and re-approved after RE2 compatibility correction.
- Batch 02.6 is approved after external Gate B validation returned PASS WITH NOTES; the RE2-corrected migration executed successfully in `dev` on overall Attempt #3 and created all 10 approved type IDs.
- Migration implementation is approved RE2-corrected V1 and execution succeeded in `dev`.
- Attempts #1 and #2 remain historical failures; destructive recovery completed, the successful Gate B authorization is consumed, and no additional bootstrap or dev reset is authorized.
- Batch 02.7 is approved after external validation returned PASS WITH NOTES for the read-only comparison of 10 types, 99 stored fields, 18 authored references, 102 validation objects, 10 display fields, 2 explicit editor controls, and zero material drift.
- Phase 02 closeout review/stage/commit/push and clean synchronized `0 0` confirmation are complete.
- Phase 03 — Model Export + Serial Clean-Room Verification — is active.
- Batch 03.1 — Model Export + Serial Clean-Room Verification Preflight — is approved after external validation returned PASS WITH NOTES.
- Batch 03.2 — Export, Import + Snapshot Verification Tooling Hardening — is approved after external validation returned PASS WITH NOTES.
- Pre-export tooling is approved; Batch 03.3 — Governed Model Export + Snapshot Validation — is next but not started.
- Export has not run, no snapshot exists, destructive authorization is not granted, and import has not run.
- Seed content remains not started.
- No Contentful environment, locale, schema, content, export, import, bootstrap, dev cleanup, or seed mutation is authorized by Batch 03.2.
