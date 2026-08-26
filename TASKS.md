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

Status: COMPLETE / FROZEN BY THE COMMIT CONTAINING THIS FILE

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

Pre-export tooling: APPROVED. TG-01, TG-02, and TG-03 are corrected / approved. TG-04 remains no correction required. At Batch 03.2 closeout, every later destructive or mutating execution gate remained separately gated.

#### Batch 03.3 — Governed Model Export + Snapshot Validation

Status: APPROVED / CHECKPOINTED

- [x] Review/stage/commit/push Batch 03.1 + 03.2 checkpoint
- [x] Confirm clean synchronized `0 0`
- [x] Batch 03.3 export pre-execution gate — PASS WITH NOTES / externally validated
- [x] Explicit governed export authorization — GRANTED / CONSUMED
- [x] Execute governed model export exactly once — 1 invocation / exit 0
- [x] Validate real exported snapshot — PASS
- [x] Capture SHA-256
- [x] Secret-scan snapshot — PASS
- [x] Approve snapshot for recovery use — EXTERNAL PASS WITH NOTES
- [x] Create Batch 03.3 sanitized export/snapshot evidence report
- [x] Reconcile current Phase 03 truth surfaces
- [x] External Batch 03.3 approval reconciliation validation — PASS WITH NOTES
- [x] Final Batch 03.3 approval reconciliation
- [x] External Batch 03.3 final reconciliation validation — PASS WITH NOTES
- [x] Batch 03.3 Git checkpoint — established by this commit
- [x] Confirm clean synchronized `0 0` after Batch 03.3 checkpoint

##### 03.3 Pre-Execution Correction — Snapshot Naming + Configuration Contract

Status: TRACKED IMPLEMENTATION APPROVED / PASS WITH NOTES

Final approval reconciliation: EXTERNALLY VALIDATED / PASS WITH NOTES

Git checkpoint: COMPLETE / COMMITTED / PUSHED / CLEAN 0 0

- [x] Preserve blocked pre-execution evidence
- [x] Confirm no Contentful request occurred
- [x] Confirm export did not run
- [x] Identify stale snapshot alias contract
- [x] Remove active fixed alias from `.env.example`
- [x] Require explicit direct verifier snapshot path
- [x] Preserve export auto-generated governed filename
- [x] Preserve export overwrite protection
- [x] Preserve import governed filename contract
- [x] Preserve historical 03.1 evidence unchanged
- [x] Run local static verification
- [x] External corrective-gate validation — PASS WITH NOTES
- [x] Final approval reconciliation
- [x] External final reconciliation validation — PASS WITH NOTES
- [x] Git checkpoint — 62990af / committed / pushed / clean 0 0
- [x] Human local `CONTENTFUL_MODEL_SNAPSHOT` correction
- [x] Complete full 03.3 read-only export pre-execution gate — PASS WITH NOTES

#### Batch 03.4 — Destructive Dev Rotation + Blank-State Validation

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS FILE

Destructive authorization: CONSUMED

- [x] Safety truth correction checkpoint
- [x] Read-only destructive preflight Attempt 2
- [x] Credential-path corrective gate
- [x] Explicit destructive authorization
- [x] JIT baseline
- [x] Delete `dev` exactly once
- [x] Recreate `dev` exactly once from `master`
- [x] Automatic destructive retries = 0
- [x] Verify recreated `dev` ready
- [x] Verify recreated `dev` blank
- [x] Verify `master` remains blank
- [x] External rotation + blank-state validation
- [x] Post-rotation truth-surface reconciliation
- [x] External reconciliation validation — PASS WITH NOTES
- [x] Final approval reconciliation
- [x] External final validation — PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT
- [x] Batch 03.4 Git checkpoint — established by the commit containing this file
- [x] Confirm clean synchronized `0 0` after successful checkpoint push verification

Second rotation: NOT AUTHORIZED

#### Batch 03.5 — Snapshot Import + Clean-Room Comparison

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS FILE

Import authorization: CONSUMED

Import result: EXIT 1 / HTTP 429 DURING EDITOR INTERFACE IMPORT

Semantic recovery: PASS / `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT` / ZERO MATERIAL DRIFT

Second import: NOT AUTHORIZED

Seed content: NOT STARTED

- [x] Batch 03.4 checkpoint confirmed
- [x] Initial 03.5 read-only pre-execution attempt
- [x] Gate G static-assertion false negative identified
- [x] Corrected read-only pre-execution gate
- [x] Fresh blank `dev` / `master` baseline
- [x] Import runtime and verifier runtime validated
- [x] Retry-semantics corrective gate
- [x] Effective automatic request replays = 0
- [x] Explicit one-time import authorization
- [x] Fresh JIT pre-import baseline
- [x] Invoke governed import exactly once
- [x] Consume import authorization
- [x] Record nonzero exit / HTTP 429 incident
- [x] Perform no second import
- [x] Perform no repair / reset / bootstrap
- [x] Post-failure GET-only live-state forensics
- [x] Confirm exact `dev` / `master` topology
- [x] Confirm all 10 content types present and published
- [x] Confirm all 10 Editor Interfaces present
- [x] Semantic verifier PASS / zero material drift
- [x] Classify `COMPLETE_APPROVED_SEMANTIC_STATE_PRESENT`
- [x] External post-failure semantic recovery validation — PASS WITH NOTES
- [x] Import-incident + semantic-recovery truth reconciliation
- [x] External reconciliation validation — PASS WITH NOTES
- [x] Final approval reconciliation
- [x] External final validation — PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT
- [x] Batch 03.5 Git checkpoint — established by the commit containing this file
- [x] Confirm clean synchronized `0 0` after successful checkpoint push verification

#### Batch 03.6 — Phase 03 Validation + Closeout

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS FILE

- [x] Confirm Batch 03.5 approved / checkpointed
- [x] Confirm clean synchronized starting checkpoint
- [x] Inventory Phase 03 evidence
- [x] Validate recovery snapshot integrity
- [x] Validate migration integrity
- [x] Record original Gate F evidence-capture incident
- [x] Complete corrective GET-only validation
- [x] Confirm corrective validation used 23 GETs / 0 writes
- [x] Confirm exact `dev` + `master` topology
- [x] Confirm protected blank `master`
- [x] Confirm recovered `dev` model
- [x] Confirm exact 10 type IDs
- [x] Confirm all 10 published
- [x] Confirm all 10 Editor Interfaces
- [x] Confirm 10 / 99 / 18 / 102 / 10 / 8 / 6 / 2
- [x] Confirm entries 0
- [x] Confirm assets 0
- [x] Confirm tags 0
- [x] Confirm `en-US` / default true / fallback null
- [x] Confirm material drift 0
- [x] Validate authorization ledger
- [x] Preserve Batch 03.5 exit-1 / HTTP-429 incident
- [x] Preserve semantic recovery PASS
- [x] Confirm second import / rotation / export / repair unauthorized
- [x] Confirm seed not started
- [x] Evaluate all 22 Phase 03 exit criteria
- [x] Create Batch 03.6 closeout report
- [x] Reconcile current truth surfaces
- [x] Correct stale Content Strategy downstream pointer
- [x] External Batch 03.6 validation — PASS WITH NOTES
- [x] Final Approval Reconciliation

- [x] External Final Validation — PASS WITH NOTES / APPROVED FOR CLOSEOUT CHECKPOINT
- [x] Batch 03.6 / Phase 03 closeout Git checkpoint — established by the commit containing this file
- [x] Confirm clean synchronized `0 0` after successful checkpoint verification

## Phase 04 — Editorial QA + Model Freeze

Status: ACTIVE

The Phase 04 transition and Batch 04.1 checkpoint are established at `33e01ae068769631b3bd997b28711535f7c7b340`.

### Batch 04.1 — Read-Only Planning + Editorial-Quality Preflight

Status: APPROVED / CHECKPOINTED BY THE COMMIT CONTAINING THIS TRACKER

- [x] clean Git entry gate
- [x] truth-surface reconciliation
- [x] migration checksum verification
- [x] recovery snapshot verification
- [x] fresh master validation
- [x] fresh dev validation
- [x] zero-drift confirmation
- [x] network write audit
- [x] 10-type editorial surface review
- [x] Rich Text review
- [x] reference/picker review
- [x] slug QA planning
- [x] Asset/accessibility ownership review
- [x] singleton review
- [x] SEO boundary confirmation
- [x] open decision triage
- [x] future QA scenario planning
- [x] Phase 04 architecture proposal
- [x] external Batch 04.1 validation
- [x] Final Approval Reconciliation
- [x] checkpoint established by containing commit

### Batch 04.2 — Editorial QA Scenario + Temporary Authoring Contract

Status: APPROVED / CHECKPOINTED AT `a85ebb37ef0f182b98d914221e70454cebb1351f`

- [x] define enforcement owner for every scenario
- [x] resolve EF-05 ownership
- [x] define exact temporary QA scenarios
- [x] define expected schema rejection behavior
- [x] define editorial-guidance scenarios
- [x] define application-owned scenarios
- [x] define governance scenarios
- [x] define temporary artifact naming/identification
- [x] define authoring dependency order
- [x] define future mutation maximum scope
- [x] define publish/update scope if needed
- [x] define cleanup inventory strategy
- [x] define separate cleanup gate
- [x] confirm temporary QA != seed content
- [x] confirm no Contentful mutation in 04.2
- [x] external 04.2 validation — PASS WITH NOTES
- [x] Final Approval Reconciliation — COMPLETE
- [x] External Final Validation — PASS WITH NOTES / APPROVED FOR GIT CHECKPOINT
- [x] Batch 04.2 Git checkpoint — ESTABLISHED at `a85ebb37ef0f182b98d914221e70454cebb1351f`
- [x] External checkpoint validation — Git mechanics PASS / truth consistency NEEDS REVISION
- [x] Post-checkpoint truth-surface correction implemented
- [x] External Validation of post-checkpoint correction — PASS WITH NOTES
- [x] Post-checkpoint correction Final Approval Reconciliation — COMPLETE

Correction External Final Validation: COMPLETE / CHECKPOINT PREREQUISITE SATISFIED.

Corrective Git checkpoint: ESTABLISHED AT `46ba9c0ee0a0cf0a09736aa867eb76619f44d702`.

### Batch 04.3 — Controlled Temporary Editorial QA Execution

Status: STARTED / CONTROLLED AUTHORING STOPPED AFTER MUTATION / NOT COMPLETE / POST-STOP FORENSICS COMPLETE / OPTION B SELECTED / GOVERNED PARTIAL QA CLEANUP COMPLETE / ZERO-CONTENT DEV BASELINE RESTORED.

Latest one-time authoring authorization: GRANTED / CONSUMED by the first mutation, TA-01 Asset upload. The separate renewed cleanup authorization is also CONSUMED / CLOSED. Additional authoring, cleanup, continuation, retry, and repair are NOT AUTHORIZED.

Repository-only local Asset fixture prerequisite: PDF CLASSIFICATION EXTERNAL FINAL VALIDATION PASS WITH NOTES / FIXTURE CHECKPOINT ESTABLISHED AT `2c590bf674759159061dcdc8700993adb96d321d` / FIXTURE CHECKPOINT VALIDATION GIT MECHANICS PASS + CANONICAL TRUTH CONSISTENCY NEEDS REVISION / POST-CHECKPOINT TRUTH-SURFACE CORRECTION EXTERNAL FINAL VALIDATION PASS WITH NOTES / FIRST TRUTH CORRECTIVE CHECKPOINT ESTABLISHED AT `591725c3abdb0e829700cdbbb77a023628525781` / FIRST TRUTH CORRECTIVE CHECKPOINT VALIDATION GIT MECHANICS PASS + CANONICAL TRUTH CONSISTENCY NEEDS REVISION / CLOSURE-SEMANTICS CORRECTION IMPLEMENTED + EXTERNAL VALIDATION PASS WITH NOTES + FINAL APPROVAL RECONCILIATION COMPLETE.

- [x] Preserve initial 04.3 read-only attempt as BLOCKED on missing approved local Asset sources
- [x] Record external fixture generation as complete
- [x] Complete wrong-path fixture identity investigation — PASS / CLASS A
- [x] Move the exact four approved files to `content-model/fixtures/phase-04/` without transformation
- [x] Record local fixture preparation evidence with 0 Contentful requests and mutations
- [x] External validation of fixture location correction — PASS WITH NOTES
- [x] Fixture location correction Final Approval Reconciliation — COMPLETE
- [x] Fixture location correction External Final Validation — PASS WITH NOTES
- [x] Preserve first fixture Git checkpoint attempt as BLOCKED BEFORE COMMIT on PDF text auto-detection; no commit / no push
- [x] Add exact path-specific PDF binary classification without changing fixture bytes
- [x] External validation of PDF binary classification correction — PASS
- [x] PDF classification Final Approval Reconciliation — COMPLETE
- [x] PDF classification External Final Validation — PASS WITH NOTES / COMPLETE
- [x] Corrected QA fixture Git checkpoint — ESTABLISHED AT `2c590bf674759159061dcdc8700993adb96d321d`
- [x] External checkpoint validation — GIT MECHANICS PASS / CANONICAL TRUTH CONSISTENCY NEEDS REVISION
- [x] Implement post-checkpoint truth-surface correction with no Contentful access or fixture byte changes
- [x] External Validation of post-checkpoint truth-surface correction — PASS
- [x] Final Approval Reconciliation of post-checkpoint truth-surface correction — COMPLETE
- [x] External Final Validation of post-checkpoint truth-surface correction — PASS WITH NOTES / COMPLETE
- [x] First truth corrective checkpoint — ESTABLISHED AT `591725c3abdb0e829700cdbbb77a023628525781`
- [x] External validation of first truth corrective checkpoint — GIT MECHANICS PASS / CANONICAL TRUTH CONSISTENCY NEEDS REVISION
- [x] Closure-Semantics Correction — IMPLEMENTED / VALIDATED / CHECKPOINTED AT `503f1a6faee27062d0f3f3667b298fe37d62ffb2` / HISTORICAL

Closure-Semantics Correction checkpoint gate: SATISFIED BEFORE THE LATER BLOCKED AUTHORING ATTEMPT / HISTORICAL.

- [x] Authoring-Envelope Correction checkpoint — ESTABLISHED AT `0e2057d26031d3ba7264810d00173713d83c11ef`
- [x] Fresh read-only pre-execution and external authorization gates — completed before the controlled execution
- [x] Start exactly one guarded controlled-authoring process
- [x] Consume the new authorization with the TA-01 Asset upload
- [x] Create all 19 temporary Entries and all 3 temporary Assets
- [x] Stop fail-closed at R88 after response instrumentation recorded HTTP 422
- [x] Preserve partial state with 39 Entry update attempts, 0 Entry publication attempts, 0 retries, 0 repairs, and 0 cleanup
- [x] Record 28 PASS / 20 PASS WITH NOTE / 54 NOT EXECUTED DUE STOP
- [x] Reconcile the partial-authoring incident and durable forensic deferral in repository truth
- [x] Partial Authoring Incident + Deferral Reconciliation implementation — COMPLETE
- [x] Partial Authoring Incident + Deferral External Validation — PASS WITH NOTES
- [x] Partial Authoring Incident + Deferral Final Approval Reconciliation — COMPLETE

The Partial Authoring Incident + Deferral checkpoint is established at `93e4ff6dd995831af5d05475db02b1a60f027715`.

- [x] Complete the Post-Stop Partial-State + Branch-Sensitive Forensics gate with 14 GET-equivalent requests, 0 writes, and 0 retry/replay
- [x] Record external forensic validation — PASS WITH NOTES
- [x] Freshly confirm blank protected `master`, the exact zero-drift `dev` model, 19 unpublished Entries, 3 processed/published Assets, and TE-09 version 9
- [x] Confirm R88 atomic rejection and the transformed SDK error-shape guard defect
- [x] Prove the historical 111 ceiling insufficient and record 201 / 216 as non-controlling planning bounds
- [x] Record continuation planning totals 173 / 186 and evidence-contract insufficiency
- [x] Select Option B — Cleanup + Full Restart preferred for planning
- [x] Implement the repository-only Post-Stop Forensic Findings + Recovery Decision Reconciliation
- [x] Complete Post-Stop Forensic Findings + Recovery Decision Final Approval Reconciliation

The forensic/recovery decision checkpoint is established at `7f36c66e30b8a9297f3ee3a1a72baf76eef7d2a1`.

- [x] Complete the Partial QA Cleanup Read-Only Pre-Execution Gate and external validation
- [x] Preserve the first cleanup execution as BLOCKED PRE-CLEANUP on the invalid default ESM import / 0 Contentful requests / 0 mutations / authorization unconsumed
- [x] Complete the local ESM named-import correction preflight / External Validation PASS WITH NOTES / 0 Contentful requests
- [x] Consume the renewed cleanup authorization exactly once with the first `qa04-article-primary` delete
- [x] Delete all 19 unpublished QA Entries in the frozen dependent-first order
- [x] Prove the intermediate 0-Entry / exact 3-Asset / zero-drift state
- [x] Unpublish and delete all 3 QA Assets in the frozen order
- [x] Complete exactly 25 cleanup mutations with 29 GET-equivalent requests, 0 retries, and 0 replay
- [x] Prove protected blank `master` and zero-content, zero-drift `dev`
- [x] Record renewed cleanup execution External Validation — PASS WITH NOTES
- [x] Implement Partial QA Cleanup Result + Zero-Content Baseline Reconciliation and create the cleanup execution report
- [x] Partial QA Cleanup Result + Zero-Content Baseline Reconciliation External Validation — PASS WITH NOTES
- [x] Partial QA Cleanup Result + Zero-Content Baseline Final Approval Reconciliation — COMPLETE

Cleanup-result approval rule: External Final Validation is the required pre-commit gate. Only after it passes for this exact reconciled state may the containing commit establish the cleanup-result checkpoint. The next Guard + Branch-Safe Authoring / Evidence-Contract Correction Planning gate requires External Checkpoint Validation PASS for that containing commit.

Next planning gate: **Phase 04 / Batch 04.3 — Guard + Branch-Safe Authoring / Evidence-Contract Correction Planning**. It is repository/local-only and grants no Contentful authority.

### Batch 04.4 — Editorial QA Findings Reconciliation + Conditional Model / Editor-Interface Corrections

Status: LATER / DO NOT ADVANCE WHILE BATCH 04.3 IS UNRESOLVED

### Batch 04.5 — Editorial Workflow + Field Guidance

Status: LATER / REPOSITORY-ONLY

### Batch 04.6 — Model Freeze Validation + Phase 04 Closeout

Status: LATER / READ-ONLY + REPOSITORY RECONCILIATION

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
- Phase 03 — Model Export + Serial Clean-Room Verification — is complete / frozen by the commit containing this file after 22 of 22 technical exit criteria passed, external Batch 03.6 validation and External Final Validation returned PASS WITH NOTES, and Final Approval Reconciliation completed.
- Batch 03.1 — Model Export + Serial Clean-Room Verification Preflight — is approved after external validation returned PASS WITH NOTES.
- Batch 03.2 — Export, Import + Snapshot Verification Tooling Hardening — is approved after external validation returned PASS WITH NOTES.
- Pre-export tooling is approved; Batch 03.3 — Governed Model Export + Snapshot Validation — is approved / checkpointed after external final validation returned PASS WITH NOTES.
- The one-export authorization is consumed after exactly one successful top-level export invocation. The governed snapshot is locally validated and approved for recovery use; a second export remains unauthorized.
- Batch 03.4 — Destructive Dev Rotation + Blank-State Validation — is approved / checkpointed by the commit containing this file after external final validation returned PASS WITH NOTES.
- At the completed forensic gate, ready / blank / protected `master` and ready `dev` had the exact zero-drift 10-type model, 19 unpublished temporary Entries, 3 processed/published temporary Assets, and no unexpected `qa04-` artifacts.
- The destructive authorization is consumed. A second rotation and additional bootstrap are not authorized.
- Batch 03.5 used its one explicit import authorization. The only top-level import invocation exited 1 after an HTTP 429, with 0 automatic request replays; the authorization is consumed and no second import or repair is authorized.
- Batch 03.5 post-failure GET-only forensics and semantic comparison passed. Truth-surface and Final Approval Reconciliation are complete; external reconciliation and final validation returned PASS WITH NOTES. The commit containing this file establishes the Batch 03.5 checkpoint.
- Batch 03.6 records the original final-live process as an unresolved evidence-capture incident with 0 writes and no retry. One externally authorized corrective GET-only validator invocation then passed with 23 GETs and 0 writes.
- All 22 Phase 03 technical exit criteria pass, Batch 03.6 closeout truth reconciliation and the Content Strategy pointer correction are complete, and external Batch 03.6 validation and External Final Validation returned PASS WITH NOTES. The Phase 03 containing commit established Batch 03.6 as approved / checkpointed and Phase 03 as complete / frozen.
- Phase 04 is active and Batch 04.1 is approved / checkpointed at `33e01ae068769631b3bd997b28711535f7c7b340`. Batch 04.2 External Validation and External Final Validation returned PASS WITH NOTES, Final Approval Reconciliation is complete, and checkpoint `a85ebb37ef0f182b98d914221e70454cebb1351f` is established.
- External checkpoint validation passed Git mechanics but returned NEEDS REVISION for truth consistency. The post-checkpoint truth-surface correction implementation is complete, External Validation returned PASS WITH NOTES, and Final Approval Reconciliation is complete.
- EF-05 Option B is accepted: duplicate tag values are owned by editorial guidance, the schema is correct as implemented, no model correction is required, and there is no live drift.
- Batch 04.2 defines 102 QA scenarios and the model has 102 validation objects; equality is coincidental and not a coupled invariant.
- The historical authoring plan created 19 temporary Entries and 3 Assets. The historical 111 Entry-update ceiling remains part of the consumed contract but is proven insufficient and prohibited from execution reuse. Forensic planning bounds are 201 minimum branch-safe and 216 conservative no-sharing; neither is a controlling envelope or authorization.
- [x] Preserve the earlier controlled authoring attempt as historical BLOCKED PRE-WRITE evidence with the guarded process not started, first mutation not invoked, and 0 Contentful requests / writes.
- [x] Complete the 102-scenario feasibility investigation and record the exact `51 -> 111` proof.
- [x] Implement the narrow Batch 04.2 Authoring-Envelope Correction without changing scenario wording, model, migration, fixtures, tooling, packages, or Contentful state.
- [x] Authoring-Envelope Correction External Validation — PASS WITH NOTES.
- [x] Authoring-Envelope Correction Final Approval Reconciliation — COMPLETE.
- Authoring-Envelope Correction checkpoint `0e2057d26031d3ba7264810d00173713d83c11ef` was established before the later separately authorized controlled authoring execution.
- Batch 04.3 started and stopped after mutation at R88. Its incident and forensic evidence remain preserved, governed cleanup is complete, `dev` is restored to 0 Entries / 0 Assets / 0 tags with zero model drift, and the batch is not complete.
- The Partial Authoring Incident + Deferral Reconciliation lifecycle is complete and its checkpoint is established at `93e4ff6dd995831af5d05475db02b1a60f027715`.
- The previous 04.3 authoring authorization was GRANTED / UNCONSUMED. It is superseded and MUST NOT be reused. Any future execution decision requires the Post-Stop Partial-State + Branch-Sensitive Forensics gate first; no new authorization is currently available.
- The later one-time authoring authorization was GRANTED / CONSUMED. The separate renewed cleanup authorization was GRANTED / CONSUMED exactly once / CLOSED and was not a reuse of the first blocked cleanup authorization. Additional authoring, cleanup, continuation, retry, repair, schema or Editor Interface correction, export, import, migration, bootstrap, environment operation, or seed is not authorized.
- The historical 111 Entry-update ceiling is proven insufficient and must not authorize continuation or another run. Planning bounds 201 / 216 require later guard and evidence-contract redesign before any envelope can be frozen.
- Option B cleanup completed with exactly 19 Entry deletes, 3 Asset unpublishes, and 3 Asset deletes. Any future full restart remains unplanned and unauthorized until guard, branch-safe envelope, and evidence-contract corrections complete their own governed workflow.
- Phase 04 model version is not yet frozen.
- Seed content remains not started.
- This incident/recovery reconciliation is repository-only and authorizes no Contentful read, write, environment mutation, export, import, bootstrap, or seed operation.
