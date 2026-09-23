# Representative Seed Content Contract

Status: Batch 05.1 Source-Readiness Reconciliation APPROVED AFTER EXTERNAL VALIDATION / PASS WITH NOTES
Final Approval Reconciliation: IMPLEMENTED
Scope: planning and local-only development; not an executable seed dataset
Owner: Phase 05 - Representative Seed Content

## Governance and Lifecycle

Phase 04 and semantic model `v1.0.0` are COMPLETE / FROZEN at checkpoint `6fdb16f06c5338e11f08ae0a44180b6db4251611`; its External Checkpoint Validation returned PASS WITH NOTES.

The initial Batch 05.1 planning/source-readiness gate remains historical **BLOCKED - representative seed contract could not yet be safely implemented; source readiness incomplete**. The user later supplied additional resume/public-source planning material and explicitly approved a planning-only placeholder strategy. Source-Readiness Reconciliation and its External Validation both returned PASS WITH NOTES. This Final Approval Reconciliation canonizes that later decision; it does not rewrite the initial result.

After External Final Validation PASS for this exact reconciliation, the containing commit establishes Phase 05 ACTIVE and Batch 05.1 APPROVED / CHECKPOINTED. Batch 05.2 becomes NEXT / LOCAL ONLY only after External Checkpoint Validation PASS for that containing commit. This document does not claim that either later validation or commit has already occurred.

Batch 05.3 is BLOCKED ON SOURCE COMPLETION and requires separate GET authorization. Batch 05.4 mutation is NOT AUTHORIZED. Batch 05.5 is LATER. Seed remains NOT STARTED. No Contentful access is authorized by Batch 05.1.

Phase plan: [Phase 05](../phases/PHASE-05-REPRESENTATIVE-SEED-CONTENT.md).
Lifecycle evidence: [Batch 05.1 report](../../content-model/reports/PHASE-05-BATCH-05.1-SEED-PLANNING-AND-SOURCE-READINESS.md).

## Frozen Upstream Truth

Use the approved [type ledger](../content-model/CONTENT-TYPE-LEDGER.md), [field ledger](../content-model/FIELD-ID-LEDGER.md), [reference map](../content-model/REFERENCE-MAP.md), [validation contract](../content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md), and [editorial guidance](EDITORIAL-WORKFLOW-AND-FIELD-GUIDANCE.md). Later approved reference decisions control over historical field-intent previews.

The frozen signature remains 10 types / 99 stored fields / 18 authored reference fields / 102 validation objects / 10 display fields / 8 regex validations / 6 Rich Text fields / 2 editor overrides / 0 localized fields. Phase 04 recorded 0 material drift; this repository-only reconciliation makes no fresh live claim.

Migration `0001-bootstrap-portfolio-model.js` is unchanged, SHA-256 `4a2319e069245d94a62e253acc9d4d67ad57f5e3450a143c71607f8c10360e24`. Migration `0002` is absent. No schema, Editor Interface, model contract, environment, locale, or frozen strategy change is approved.

## Exact Working Inventory

This is the exact 05.2 development inventory, not a declaration of final prose or source-file completeness.

| Type | Entries |
| --- | ---: |
| `siteSettings` | 1 |
| `personProfile` | 1 |
| `socialLink` | 2 |
| `navigationItem` | 6 |
| `project` | 3 |
| `article` | 3 |
| `experienceItem` | 4 |
| `skill` | 12 |
| `skillGroup` | 4 |
| `tool` | 6 |
| Total | 42 |

Selected Projects: Enterprise CMS Migration; Contentful Greenfield Starter; UI Gallery System.
Selected Articles: Web Development Certifications and Learning Journey; State Management in React; About Me.
Experience: Hogarth/WWP at Apple - Content Manager; Woods Hole Oceanographic Institution - Frontend Developer; Robert Half International - Marketing Web Developer; DigitalNEST - Web Development Specialist. These are planning identities, not resolutions of source wording or confidentiality questions.

## Deterministic Identities

Use `seed05-<type>-<semantic-key>` and `seed05-asset-<semantic-key>`. The type segment is the approved readable namespace below, not a new Contentful field. IDs are persistent semantic identities, not temporary QA IDs.

Reconciliation verified 42 Entry IDs and 8 Asset IDs, all unique; maximum length 62 characters. No random, environment-specific, private-contact-derived, or `qa04-` IDs are permitted. Live collisions have not been checked.

| Frozen Type | Approved Working Entry ID |
| --- | --- |
| `siteSettings` | `seed05-site-settings-primary` |
| `personProfile` | `seed05-person-profile-gilberto-haro` |
| `socialLink` | `seed05-social-link-linkedin` |
| `socialLink` | `seed05-social-link-github` |
| `navigationItem` | `seed05-navigation-item-about` |
| `navigationItem` | `seed05-navigation-item-work` |
| `navigationItem` | `seed05-navigation-item-projects` |
| `navigationItem` | `seed05-navigation-item-writing` |
| `navigationItem` | `seed05-navigation-item-tools` |
| `navigationItem` | `seed05-navigation-item-contact` |
| `project` | `seed05-project-enterprise-cms-migration` |
| `project` | `seed05-project-contentful-greenfield-starter` |
| `project` | `seed05-project-ui-gallery-system` |
| `article` | `seed05-article-web-development-certifications-learning-journey` |
| `article` | `seed05-article-state-management-in-react` |
| `article` | `seed05-article-about-me` |
| `experienceItem` | `seed05-experience-hogarth-wwp-apple-content-manager` |
| `experienceItem` | `seed05-experience-whoi-frontend-developer` |
| `experienceItem` | `seed05-experience-robert-half-marketing-web-developer` |
| `experienceItem` | `seed05-experience-digitalnest-web-development-specialist` |
| `skill` | `seed05-skill-frontend-development` |
| `skill` | `seed05-skill-design-systems` |
| `skill` | `seed05-skill-accessibility-wcag` |
| `skill` | `seed05-skill-content-modeling` |
| `skill` | `seed05-skill-cms-operations` |
| `skill` | `seed05-skill-content-migration` |
| `skill` | `seed05-skill-localization` |
| `skill` | `seed05-skill-web-qa-uat` |
| `skill` | `seed05-skill-seo-metadata-governance` |
| `skill` | `seed05-skill-workflow-automation` |
| `skill` | `seed05-skill-api-integration` |
| `skill` | `seed05-skill-technical-documentation-governance` |
| `skillGroup` | `seed05-skill-group-frontend-ui-engineering` |
| `skillGroup` | `seed05-skill-group-content-cms-operations` |
| `skillGroup` | `seed05-skill-group-quality-discoverability` |
| `skillGroup` | `seed05-skill-group-automation-delivery` |
| `tool` | `seed05-tool-contentful` |
| `tool` | `seed05-tool-adobe-experience-manager` |
| `tool` | `seed05-tool-wordpress` |
| `tool` | `seed05-tool-react` |
| `tool` | `seed05-tool-typescript` |
| `tool` | `seed05-tool-storybook` |

Do not create duplicate semantic identities, replace these with random IDs, or infer that an existing live ID may be overwritten.

## Required Model Mapping

| Planning Representation | Required Dataset Representation |
| --- | --- |
| Project `body` | Existing `caseStudyBody`; optional Rich Text, not a new field |
| Project `gallery` | Existing `galleryImages`; optional ordered Asset links |
| Social platform labels | Frozen lowercase enum values `linkedin` and `github` |
| Plain prose for Rich Text | Valid documents using approved nodes/marks |
| Reference ID strings | Correct Entry/Asset Link objects and field shapes |
| Month-only experience dates | Explicit source-precision-preserving date encoding; do not invent factual day precision |
| Manifest identity/provenance metadata | Local manifest metadata, not additional CMS fields |

The source pack omitted **41 required-field slots**:

| Type | Missing Fields Per Entry | Entries | Slots |
| --- | --- | ---: | ---: |
| Project | `projectType`, `role`, `problem`, `approach`, `outcome` | 3 | 15 |
| Article | `publishDate`, `authorProfile` | 3 | 6 |
| Experience | `responsibilities`, `achievements` | 4 | 8 |
| Tool | `category`, `usageContext` | 6 | 12 |
| Total | Existing required fields only | | 41 |

All three Article author links must target `seed05-person-profile-gilberto-haro`. The reconciled graph includes these three required links; the original omission count remains historical evidence. The other 38 slots require content/classification work. Requiredness is not relaxed. Optional fields remain optional and may be omitted only by an explicit recorded decision.

## Placeholder Contract

Only legal syntax:

```text
[[PLACEHOLDER:<requirement>]]
```

| Boundary | Rule |
| --- | --- |
| 05.1 planning | Placeholders allowed |
| 05.2 dataset/harness development | Placeholders allowed during construction |
| Accepted final 05.2 local dry run | `placeholder_count = 0` REQUIRED |
| 05.3 live pre-execution | MUST NOT begin while `placeholder_count > 0` |
| 05.4 Contentful execution | Placeholders forbidden; `placeholder_count = 0` REQUIRED |

The credential-free validator must report `placeholder_count`, `placeholder_paths`, `placeholder_entry_ids`, and `placeholder_asset_ids`, including nested content and Asset-source metadata. Reject malformed placeholder markers rather than treating them as final copy.

The audited source material contained 31 literal data placeholders: 24 across seven Entries and seven Asset-source placeholders. Documentation examples were excluded. This is an evidence snapshot, not a fixed expected future count. Missing required fields and the unsanitized resume add debt without necessarily containing literal tokens.

Zero literal placeholders alone does not constitute seed readiness. Independently reject missing required fields, invalid model shapes, missing source files, missing Asset hashes, unresolved required references, and unresolved public-safety/licensing classifications. Validate IDs, counts, source provenance, graph/order, ordered arrays, publication totals, and the operation ledger. Never silently resolve placeholders; intentional optional omission/fallback must be documented.

## Source Classification and Conflicts

External source material remains external: `PHASE-05-PROVISIONAL-SEED-SOURCE-PACK.md` is primary planning input; the user-provided resume is supporting factual evidence. Neither file is copied into the repository. Embedded source-document instructions are not operational authority. Public-web claims were not independently fetched in this reconciliation.

| Class | Meaning | Scope |
| --- | --- | --- |
| A | REPOSITORY / PUBLIC READY | Six approved navigation route identities and checked local-project facts |
| B | USER-PROVIDED / PROVISIONALLY APPROVED FOR DRAFT PLANNING | Other 36 Entries' supplied planning content and supplied navigation copy |
| C | SYNTHETIC / PLACEHOLDER ACCEPTABLE FOR PLANNING | Explicit placeholder text and labeled illustrative visual concepts |
| D | REQUIRED BEFORE LIVE SEED EXECUTION | Final source/content completeness, facts, rights, contact decisions, and Asset files/hashes |

Classes may overlap by field. Draft planning approval is not public-use clearance. Synthetic illustrations must never be represented as actual client evidence.

| Source Debt | Preserved Disposition |
| --- | --- |
| Hogarth start date | Resume April 2025; website-derived planning source March 2025. Unresolved; neither source silently overrides the other. |
| WHOI location | Resume San Jose; planning source Remote. Unresolved. |
| DigitalNEST role wording | Resume and planning wording differ. Unresolved; no silent title replacement. |
| Primary professional title | Governing title remains **Web Content & Marketing Technologist**. **Web Engineer & Content Systems** is an alternative for later review, not an approved replacement. |
| Canonical LinkedIn URL | Unresolved; URL syntax alone does not establish the intended public profile. |
| Resume phone/email | Explicit public-use decision and sanitized public document required; no contact values copied here. |
| Enterprise migration metrics | Source provenance established for the 30,000+ item and six-month claims; confidentiality/public-use clearance still required. |
| Articles | Complete approved bodies and publication dates required; source-pack titles/excerpts are not complete Articles. |
| Profile and positioning | Final bio, public contact and work-preference decisions remain source debt; no unrelated open decision is silently resolved. |
| SEO and optional images | Explicit override or omission/fallback decisions required. |
| Media | All final exact local paths, rights, hashes, and accessibility metadata remain unresolved. |

Apply the frozen public-safety guidance before live authoring even when every Entry remains a draft. Exclude secrets, private URLs/contact data, unapproved client details or metrics, and unlicensed/proprietary media.

## Eight-Asset Contract

MIME values below are planning targets; final files must be inspected, not trusted by extension.

| Approved Working Asset ID | Role | Proposed MIME | Final Local Source Path |
| --- | --- | --- | --- |
| `seed05-asset-profile-portrait` | Profile portrait | image/jpeg | UNRESOLVED |
| `seed05-asset-resume-public` | Sanitized public resume | application/pdf | UNRESOLVED |
| `seed05-asset-project-enterprise-cms-migration` | Enterprise CMS migration hero | image/png | UNRESOLVED |
| `seed05-asset-project-contentful-greenfield-starter` | Contentful Greenfield Starter hero | image/png | UNRESOLVED |
| `seed05-asset-project-ui-gallery-system` | UI Gallery System hero | image/png | UNRESOLVED |
| `seed05-asset-project-system-diagram` | Project architecture/system diagram | image/png | UNRESOLVED |
| `seed05-asset-article-learning-journey` | Learning-journey Article hero | image/png | UNRESOLVED |
| `seed05-asset-site-social-default` | Default social image | image/png | UNRESOLVED |

Portrait requires approved likeness/media rights. The resume requires a sanitized public copy, not automatic upload of the supplied factual source. The other visuals may use approved owned captures or clearly labeled synthetic illustrations. All final exact source paths remain unresolved.

Per-Asset final acceptance requires: exact local path, MIME, byte size, SHA-256, ownership/licensing, public-safety classification, title, description, and accessibility treatment. Meaningful media needs contextual alternative text; decorative treatment must be intentional and retain the associated text label.

Phase 04 fixtures remain TEMPORARY QA FIXTURES and are prohibited as seed Assets. No media is generated in 05.1. The default social-image role does not add a Site Settings field or move technical fallback ownership into the CMS.

## Reference Contract

Counts describe the reconciled concrete planning graph, not the model's 18 reference-field definitions.

| Measure | Count |
| --- | ---: |
| Field-qualified edges | 114 |
| Entry-link occurrences | 104 |
| Asset-link occurrences | 10 |
| Distinct source/target pairs | 110 |
| Populated source-Entry/reference-field groups | 46 |
| Missing concrete targets | 0 |
| Target-type mismatches | 0 |
| Cycles | 0 |
| Required second-pass updates | 0 |

The source pack's 111 concrete intended links become 114 through the explicit Project field mappings and three required Article author links. No authored reverse relationship is added.

Five optional Asset-link choices are still unresolved: `socialImage` on all three Projects, and `heroImage` on the State Management in React and About Me Articles. These are not counted as resolved edges. Do not freeze them until 05.2 records an explicit Asset or intentional omission/fallback; recalculate the final graph afterward.

Create dependencies before consumers: Assets; Skills/Social/Navigation; dependent Tools/Groups/Profile/Settings; dependent Experience/Projects/Articles. Derive the exact order from the final dataset, not type names alone. Current concrete graph needs no second-pass update. Preserve primary/footer navigation, social, group-skill, and gallery ordering. Skill/Tool relationship arrays do not invent editorial ranking. Related-content reverse views remain derived under the reference map.

## Route and Publication Contract

All nine routes have structural planning coverage: `/`, `/about`, `/work`, `/projects`, `/projects/[slug]`, `/writing`, `/writing/[slug]`, `/tools`, `/contact`. CONTENT COMPLETE and PUBLIC READY are not established by structural coverage or placeholders.

Planning baseline: 42 draft Entries / 0 Entry publications; 8 Asset uploads, creates, and processing calls / 0 Asset publications. Phase 05 representative completeness is not public Delivery API readiness.

Unpublished-Asset reference behavior remains a 05.2/05.3 verification item. Installed SDK create methods do not automatically publish, but that does not prove all intended API/reference behavior. Any technically required Asset publication needs explicit contract and envelope reconciliation before execution, not automatic escalation.

Editorial SEO remains limited to the approved title, description, and social-image overrides. Canonical URLs, robots, sitemap, structured data, breadcrumbs, preview exclusion, and metadata fallback behavior remain code/state-owned.

## Authoring Mechanism and Safety

Approved design for later 05.2 implementation: repository-owned seed manifest + guarded SDK harness + credential-free local dry run. No manifest, harness, seed content, or Asset is implemented by 05.1.

Require deterministic IDs; serialized operations; dev-only enforcement; no automatic upsert or overwrite; collision stop; source, placeholder, and Asset-hash validation; explicit operation ledger; explicit retry disablement on management and upload paths; zero application retry/replay; fail-closed behavior.

Stop on existing IDs, semantic duplicates, version mismatch, partial seed state, unexpected non-seed content, or frozen-model mismatch. Do not repair, clean up, delete/recreate, or automatically rerun. Seed is persistent representative content, not temporary QA.

SDK processing helpers can perform readiness GETs internally; the harness must bound/count every request and prohibit hidden retries. These safeguards are requirements, not claims of implemented tooling.

Future local dry run makes 0 requests and uses no credentials. A later separately authorized GET-only gate must verify the exact approved Git checkpoint, clean synchronized state, protected blank master, ready dev with the frozen model, expected blank content baseline, approved locale, and no collisions. Historical Phase 04 live evidence does not replace fresh authorization/evidence.

Future mutation authorization must be explicit. Local dry run and authorized GET-only preflight do not consume mutation authority. The first authorized mutation, planned as the first Asset upload, consumes it; any unexpected stop leaves it consumed, preserves partial state, and requires external incident review.

## Operation Envelope - Planning Only

These values are NOT authorized live maxima.

| Operation | Planned | Planning Maximum | Assumption |
| --- | ---: | ---: | --- |
| Asset uploads | 8 | 8 | One per approved source |
| Asset creates | 8 | 8 | Deterministic IDs; metadata in create |
| Asset processing | 8 | 8 | One locale per Asset |
| Asset metadata updates | 0 | 0 | Complete create payload |
| Entry creates | 42 | 42 | Complete dependency-ordered payloads |
| Entry updates, including second pass | 0 | 0 | Current graph is acyclic |
| Entry publications | 0 | 0 | Draft-only baseline |
| Asset publications | 0 | 0 | Requires later technical verification |
| Deletes | 0 | 0 | No automatic cleanup |
| Unpublishes | 0 | 0 | No automatic cleanup |
| Readiness GETs | 8 | 40 | One planned; at most five checks per Asset |
| JIT reads | 23 | 23 | Bounded baseline/model inventory |
| Post-execution extra reads | 0 | 0 | Captured responses; final reads below |
| Final-validation reads | 23 | 23 | Bounded final inventory/model comparison |
| Automatic retries | 0 | 0 | Explicitly disabled |
| Application retry/replay | 0 | 0 | Fail closed |
| Total writes | 66 | 66 | 8 + 8 + 8 + 42 |
| Execution requests | 120 | 152 | Writes + readiness + JIT + final reads |
| Separate 05.3 GET-only gate | 23 | 23 | Separate authorization |
| Cross-stage requests | 143 | 175 | 05.3 + execution ledger |

The 23-read comparison follows the bounded environment/model/locale/ten-Editor-Interface pattern recorded by Phase 04, with Entry/Asset responses checked against the relevant expected state. It must not silently paginate or issue extra reads.

Any change to publication, updates, Assets, graph assumptions, or request behavior requires recalculation and external review. Optional-image resolution must not silently expand the eight-Asset inventory. Phase 04's deferred QA envelopes are unrelated and cannot authorize seed execution.

## Protected Boundaries

Keep model ledgers, migration 0001, snapshots, Phase 04 fixtures/reports, package files, and Contentful scripts unchanged in this reconciliation. No migration 0002, credentials, Contentful requests, authoring, export/import, environment lifecycle, staging, commit, push, or Phase 06 work is authorized. Deferred QA Harness Hardening remains post-freeze debt required before another exhaustive QA run, not a requirement to implement that harness during seed planning.
