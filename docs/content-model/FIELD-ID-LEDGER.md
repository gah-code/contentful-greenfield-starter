# Field + Field-ID Ledger

Status: Phase 02 / Batch 02.3 — APPROVED V1 FIELD + FIELD-ID CONTRACT
Owner: Phase 02 - Content Model Contract + Bootstrap Migration

## Status

Batch 02.3: APPROVED V1.

Field contract status: APPROVED V1 FIELD + FIELD-ID CONTRACT.

This ledger records approved V1 Contentful fields, field IDs, primitive shapes, required-state intent, v1 localization state, semantic purpose, relationship semantic intent, and downstream follow-up questions for the approved 10-type v1 inventory. External Batch 02.3 validation returned PASS WITH NOTES.

Do not run the bootstrap migration from this ledger. Batch 02.5 approves the reconciled migration implementation against the approved field, reference, validation, and editorial-interface contracts and leaves execution blocked pending Batch 02.6 execution gates.

Batch 02.4 approves reference cardinality, target restrictions, validation rules, display fields, and editor guidance in `docs/content-model/REFERENCE-MAP.md` and `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md`. Those documents do not rename approved field IDs or approve migration execution.

## Approval Status

Phase:
Phase 02

Batch:
02.3 — Field + Field-ID Contract

Status:
APPROVED V1

External validation:
PASS WITH NOTES

Approved scope:

- field existence;
- stable field IDs;
- scalar/asset primitive direction;
- required/optional intent;
- en-US non-localized v1 behavior;
- semantic relationship field intent;
- derived/code/system exclusions.

Not approved here:

- reference cardinality, target restrictions, allowed-value validation, detailed scalar validation, Rich Text restrictions, editor-interface behavior, display fields, and singleton technical behavior, which are approved by Batch 02.4 in `docs/content-model/REFERENCE-MAP.md` and `docs/content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md`;
- migration implementation or execution.

## Governing Rules

- Type IDs are approved by Phase 02 / Batch 02.2.
- Field IDs in this ledger are approved by external Batch 02.3 validation.
- Field IDs use lower camel case, semantic names, and no route, layout, framework, widget, or visual-component terminology.
- Fields store editorial meaning only.
- Derived values, code configuration, route state, Contentful system metadata, and governance-only readiness concerns are not modeled as editorial fields.
- References are expressed in this ledger only as relationship field intent. Batch 02.4 approves reference direction, cardinality, target restrictions, required counts, and validations.
- Validations, allowed values, editor widgets, help text, display fields, field groups, and sidebar/editor layout are governed by the approved Batch 02.4 validation/editorial contract where documented.
- Migration implementation and migration diff are approved / reconciled V1 by Batch 02.5. Migration execution, field creation in Contentful, and any live Contentful mutation remain deferred to Batch 02.6 or later approval.
- Localization is `NO — V1` for every approved field unless a later approved localization contract changes that.
- Contentful Asset remains the media object. No standalone Media wrapper type is approved.

## Approved Type Inventory Reference

The approved Batch 02.2 standalone v1 content types are:

| Type | Type ID | Batch 02.3 Field Status |
|---|---|---|
| Site Settings | `siteSettings` | APPROVED V1 FIELD LAYER |
| Person Profile | `personProfile` | APPROVED V1 FIELD LAYER |
| Social Link | `socialLink` | APPROVED V1 FIELD LAYER |
| Navigation Item | `navigationItem` | APPROVED V1 FIELD LAYER |
| Project | `project` | APPROVED V1 FIELD LAYER |
| Article | `article` | APPROVED V1 FIELD LAYER |
| Experience Item | `experienceItem` | APPROVED V1 FIELD LAYER |
| Skill | `skill` | APPROVED V1 FIELD LAYER |
| Skill Group | `skillGroup` | APPROVED V1 FIELD LAYER |
| Tool | `tool` | APPROVED V1 FIELD LAYER |

Approved standalone type count remains 10.

## Field Contract by Type

| Type | Field | Field ID | Classification | Primitive / Shape | Required? | Localized? | Semantic Purpose | 02.4 Follow-up | Status |
|---|---|---|---|---|---|---|---|---|---|
| `siteSettings` | Site Name | `siteName` | APPROVED FIELD | Symbol | YES | NO — V1 | Global public site/brand name. | Display-field candidate; singleton guidance. | APPROVED V1 FIELD ID |
| `siteSettings` | Site Description | `siteDescription` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Global public description/fallback copy where editorial meaning is needed. | Confirm whether static-route fallback uses this or code-only fallback. | APPROVED V1 FIELD ID |
| `siteSettings` | Primary Navigation Items | `primaryNavigationItems` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Header navigation consumes approved route-label entries. | Direction, cardinality, ordering, and target validation. | APPROVED V1 FIELD ID |
| `siteSettings` | Footer Navigation Items | `footerNavigationItems` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Footer navigation consumes approved route-label entries. | Direction, cardinality, ordering, and target validation. | APPROVED V1 FIELD ID |
| `siteSettings` | Social Links | `socialLinks` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Global footer/contact social destinations. | Direction, cardinality, ordering, and reuse with profile. | APPROVED V1 FIELD ID |
| `personProfile` | Name | `name` | APPROVED FIELD | Symbol | YES | NO — V1 | Canonical professional identity and author name. | Display-field candidate; singleton guidance. | APPROVED V1 FIELD ID |
| `personProfile` | Primary Title | `primaryTitle` | APPROVED FIELD | Symbol | YES | NO — V1 | Approved primary professional title. | Allowed value/help text after content copy finalization. | APPROVED V1 FIELD ID |
| `personProfile` | Secondary Title | `secondaryTitle` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Optional specialty or secondary positioning. | OD-02 remains open; field may remain empty. | APPROVED V1 FIELD ID |
| `personProfile` | Positioning Statement | `positioningStatement` | APPROVED FIELD | Text | YES | NO — V1 | Canonical one-sentence positioning copy used by home/about/contact contexts. | OD-01 copy selection remains open. | APPROVED V1 FIELD ID |
| `personProfile` | Short Bio | `shortBio` | APPROVED FIELD | Text | YES | NO — V1 | Concise professional summary for previews and route introductions. | Length guidance in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Long Bio | `longBio` | APPROVED FIELD | RichText | YES | NO — V1 | Full professional narrative, philosophy, career evolution, and approach. | Rich-text node rules/editor help in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Profile Image | `profileImage` | APPROVED ASSET FIELD | Asset | YES | NO — V1 | Required v1 profile/photo media for profile and author contexts. | Asset alt/title/description rule in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Public Email | `publicEmail` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public professional contact method when email is used. | Contact readiness rule must allow social/contact alternatives. | APPROVED V1 FIELD ID |
| `personProfile` | Location | `location` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public professional location context. | Public-safety/editorial guidance in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Availability Status | `availabilityStatus` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Optional availability or current openness signal. | OD-03 remains open; allowed values deferred. | APPROVED V1 FIELD ID |
| `personProfile` | Work Preference | `workPreference` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Desired role, collaboration, or work-context copy. | OD-03 remains open; help text in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Contact Intro | `contactIntro` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Contact-route invitation and conversion context. | Confirm route-level fallback if empty. | APPROVED V1 FIELD ID |
| `personProfile` | Resume | `resume` | APPROVED ASSET FIELD | Asset | NO | NO — V1 | Public-safe downloadable resume PDF. | Asset type guidance and link-label help in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Learning Highlights | `learningHighlights` | APPROVED OPTIONAL FIELD | RichText | NO | NO — V1 | Lightweight profile-owned learning/certification evidence with optional public links. | Rich-text/link guidance in 02.4. | APPROVED V1 FIELD ID |
| `personProfile` | Social Links | `socialLinks` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Profile/contact social destinations reused from Social Link entries. | Direction, cardinality, ordering, and reuse with site settings. | APPROVED V1 FIELD ID |
| `socialLink` | Platform | `platform` | APPROVED FIELD | Symbol | YES | NO — V1 | Public platform or network name. | Allowed values/icon derivation in 02.4. | APPROVED V1 FIELD ID |
| `socialLink` | Label | `label` | APPROVED FIELD | Symbol | YES | NO — V1 | Accessible editorial label for the destination. | Help text for descriptive links. | APPROVED V1 FIELD ID |
| `socialLink` | URL | `url` | APPROVED FIELD | Symbol | YES | NO — V1 | Public social/professional destination URL. | URL validation in 02.4. | APPROVED V1 FIELD ID |
| `socialLink` | Sort Order | `sortOrder` | APPROVED OPTIONAL FIELD | Integer | NO | NO — V1 | Optional global/profile link ordering when relationship order is insufficient. | Confirm whether relationship ordering replaces this. | APPROVED V1 FIELD ID |
| `navigationItem` | Label | `label` | APPROVED FIELD | Symbol | YES | NO — V1 | Navigation text shown for an approved route. | Display-field candidate. | APPROVED V1 FIELD ID |
| `navigationItem` | Route Key | `routeKey` | APPROVED FIELD | Symbol | YES | NO — V1 | Approved v1 route identity key, not an arbitrary URL. | Allowed route-key values and validation in 02.4. | APPROVED V1 FIELD ID |
| `navigationItem` | Description | `description` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Optional accessible/helpful route description. | Confirm display surfaces and max length in 02.4. | APPROVED V1 FIELD ID |
| `project` | Title | `title` | APPROVED FIELD | Symbol | YES | NO — V1 | Project/case-study title and SEO title fallback. | Display-field candidate. | APPROVED V1 FIELD ID |
| `project` | Slug | `slug` | APPROVED FIELD | Symbol | YES | NO — V1 | Detail-route identity segment. | Slug regex/uniqueness validation in 02.4. | APPROVED V1 FIELD ID |
| `project` | Summary | `summary` | APPROVED FIELD | Text | YES | NO — V1 | Preview summary and SEO description fallback. | Length guidance in 02.4. | APPROVED V1 FIELD ID |
| `project` | Project Type | `projectType` | APPROVED FIELD | Symbol | YES | NO — V1 | Public project classification. | OD-12 resolved/approved; allowed values approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `project` | Project Status | `projectStatus` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Editorial project lifecycle/status such as ongoing or completed. | Allowed values and route use in 02.4. | APPROVED V1 FIELD ID |
| `project` | Role | `role` | APPROVED FIELD | Text | YES | NO — V1 | Public-safe role, contribution, or responsibility context. | Help text for public-safe wording. | APPROVED V1 FIELD ID |
| `project` | Context Summary | `contextSummary` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Organization, timeframe, team, client, or engagement context when public-safe. | Public-safety guidance in 02.4. | APPROVED V1 FIELD ID |
| `project` | Problem | `problem` | APPROVED FIELD | Text | YES | NO — V1 | Public-safe problem and constraint summary. | Rich-text need and help text in 02.4. | APPROVED V1 FIELD ID |
| `project` | Approach | `approach` | APPROVED FIELD | Text | YES | NO — V1 | Approach, process, and solution summary. | Rich-text need and help text in 02.4. | APPROVED V1 FIELD ID |
| `project` | Outcome | `outcome` | APPROVED FIELD | Text | YES | NO — V1 | Outcomes, lessons, or evidence-backed results. | Metric/public-safe guidance in 02.4. | APPROVED V1 FIELD ID |
| `project` | Case Study Body | `caseStudyBody` | APPROVED OPTIONAL FIELD | RichText | NO | NO — V1 | Optional long-form narrative that extends the structured case-study fields. | Rich-text rules and page-builder guardrails in 02.4. | APPROVED V1 FIELD ID |
| `project` | Metrics | `metrics` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Conditional public-safe proof metrics or outcomes. | OD-14 remains open; help text required. | APPROVED V1 FIELD ID |
| `project` | Hero Image | `heroImage` | APPROVED ASSET FIELD | Asset | YES | NO — V1 | Required representative project media and social fallback candidate. | Asset alt/public-safety rule in 02.4. | APPROVED V1 FIELD ID |
| `project` | Gallery Images | `galleryImages` | APPROVED ASSET FIELD | Asset field; exact collection shape deferred | NO | NO — V1 | Optional screenshots, diagrams, or supporting media. | Asset cardinality, alt/context, and file rules in 02.4. | APPROVED V1 FIELD ID |
| `project` | Live URL | `liveUrl` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public live-project destination when available and safe. | URL validation/external-link guidance in 02.4. | APPROVED V1 FIELD ID |
| `project` | Repository URL | `repositoryUrl` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public repository or technical evidence URL when available. | URL validation/external-link guidance in 02.4. | APPROVED V1 FIELD ID |
| `project` | Tags | `tags` | APPROVED OPTIONAL FIELD | Array of Symbol | NO | NO — V1 | Lightweight labels for discovery/classification, not meta keywords. | OD-12 resolved/approved; tag guidance approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `project` | SEO Title | `seoTitle` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Optional editorial SEO title override. | Length/help text in 02.4. | APPROVED V1 FIELD ID |
| `project` | SEO Description | `seoDescription` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Optional editorial SEO description override. | Length/help text in 02.4. | APPROVED V1 FIELD ID |
| `project` | Social Image | `socialImage` | APPROVED ASSET FIELD | Asset | NO | NO — V1 | Optional editorial social image override. | Asset alt/fallback guidance in 02.4. | APPROVED V1 FIELD ID |
| `project` | Skills | `skills` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Capabilities used or demonstrated by the project. | Direction, cardinality, and reverse-lookup strategy. | APPROVED V1 FIELD ID |
| `project` | Tools | `tools` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Platforms/frameworks/software used in project work. | Direction, cardinality, and reverse-lookup strategy. | APPROVED V1 FIELD ID |
| `project` | Related Articles | `relatedArticles` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Writing that explains or supports the project. | OD-13 resolved/approved; derived reverse behavior approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `project` | Related Experience | `relatedExperience` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Experience context connected to the project. | Direction and duplication review in 02.4. | APPROVED V1 FIELD ID |
| `project` | Related Projects | `relatedProjects` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Related case studies when editorially useful. | OD-13 resolved/approved; relationship behavior approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `article` | Title | `title` | APPROVED FIELD | Symbol | YES | NO — V1 | Article title and SEO title fallback. | Display-field candidate. | APPROVED V1 FIELD ID |
| `article` | Slug | `slug` | APPROVED FIELD | Symbol | YES | NO — V1 | Detail-route identity segment. | Slug regex/uniqueness validation in 02.4. | APPROVED V1 FIELD ID |
| `article` | Excerpt | `excerpt` | APPROVED FIELD | Text | YES | NO — V1 | Article preview summary and SEO description fallback. | Length guidance in 02.4. | APPROVED V1 FIELD ID |
| `article` | Body | `body` | APPROVED FIELD | RichText | YES | NO — V1 | Complete article content. | Rich-text node rules/editor help in 02.4. | APPROVED V1 FIELD ID |
| `article` | Publish Date | `publishDate` | APPROVED FIELD | Date | YES | NO — V1 | Public article publication date. | Date validation and display guidance in 02.4. | APPROVED V1 FIELD ID |
| `article` | Updated Date | `updatedDate` | APPROVED OPTIONAL FIELD | Date | NO | NO — V1 | Editorial update date when displayed. | Validation relationship to publish date in 02.4. | APPROVED V1 FIELD ID |
| `article` | Content Pillar | `contentPillar` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | High-level strategy/pillar classification. | OD-05 remains open; OD-12 resolved/approved; allowed values approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `article` | Category | `category` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Lean article category for collection grouping. | OD-12 resolved/approved; validation/control strategy approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `article` | Tags | `tags` | APPROVED OPTIONAL FIELD | Array of Symbol | NO | NO — V1 | Lightweight labels for discovery/classification, not meta keywords. | OD-12 resolved/approved; tag guidance approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `article` | Hero Image | `heroImage` | APPROVED ASSET FIELD | Asset | NO | NO — V1 | Optional article media and social fallback candidate. | Asset alt/public-safety guidance in 02.4. | APPROVED V1 FIELD ID |
| `article` | SEO Title | `seoTitle` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Optional editorial SEO title override. | Length/help text in 02.4. | APPROVED V1 FIELD ID |
| `article` | SEO Description | `seoDescription` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Optional editorial SEO description override. | Length/help text in 02.4. | APPROVED V1 FIELD ID |
| `article` | Social Image | `socialImage` | APPROVED ASSET FIELD | Asset | NO | NO — V1 | Optional editorial social image override. | Asset alt/fallback guidance in 02.4. | APPROVED V1 FIELD ID |
| `article` | Author Profile | `authorProfile` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Canonical profile/author context. | Direction, singleton handling, and requiredness in 02.4. | APPROVED V1 FIELD ID |
| `article` | Related Projects | `relatedProjects` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Project evidence related to the article. | OD-13 resolved/approved; relationship behavior approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `article` | Related Articles | `relatedArticles` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Related writing when editorially useful. | OD-13 resolved/approved; relationship behavior approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `article` | Skills | `skills` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Capabilities discussed or demonstrated by the article. | Direction and taxonomy-depth review in 02.4. | APPROVED V1 FIELD ID |
| `article` | Tools | `tools` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Tools/platforms discussed by the article. | Direction and reverse-lookup strategy in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Company | `company` | APPROVED FIELD | Symbol | YES | NO — V1 | Public company/organization label or generalized employer context. | Public-safe wording help in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Role | `role` | APPROVED FIELD | Symbol | YES | NO — V1 | Professional role/title. | Display-field candidate. | APPROVED V1 FIELD ID |
| `experienceItem` | Start Date | `startDate` | APPROVED FIELD | Date | YES | NO — V1 | Public start date for chronology. | Date precision and validation in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | End Date | `endDate` | APPROVED OPTIONAL FIELD | Date | NO | NO — V1 | Public end date when not current or ongoing. | Relationship to `isCurrentRole` in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Is Current Role | `isCurrentRole` | APPROVED OPTIONAL FIELD | Boolean | NO | NO — V1 | Editorial current-role semantics when end date alone is ambiguous. | Validation interplay with `endDate` in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Summary | `summary` | APPROVED FIELD | Text | YES | NO — V1 | Concise role summary for work/about/home contexts. | Length guidance in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Responsibilities | `responsibilities` | APPROVED FIELD | RichText | YES | NO — V1 | Public-safe responsibilities and contribution details. | Rich-text/list guidance in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Achievements | `achievements` | APPROVED FIELD | RichText | YES | NO — V1 | Public-safe achievements and outcomes. | Metric/public-safety help text in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Location | `location` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public work location context. | Public-safety guidance in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Employment Type | `employmentType` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Optional employment/engagement classification. | Allowed values in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Company URL | `companyUrl` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public company/organization URL when useful. | URL validation/external-link guidance in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Company Logo | `companyLogo` | APPROVED ASSET FIELD | Asset | NO | NO — V1 | Optional public logo for experience context. | Asset alt/decorative guidance in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Metrics | `metrics` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Conditional public-safe role metrics or evidence. | OD-14 remains open; help text required. | APPROVED V1 FIELD ID |
| `experienceItem` | Context Summary | `contextSummary` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Market, team scale, CMS/platform, or professional context when public-safe. | Public-safety/editorial guidance in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Related Projects | `relatedProjects` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Projects that evidence the experience item. | Direction and duplication review in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Skills | `skills` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Capabilities used in the role. | Direction and cardinality in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Tools | `tools` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Platforms/frameworks/software used in the role. | Direction and cardinality in 02.4. | APPROVED V1 FIELD ID |
| `experienceItem` | Related Articles | `relatedArticles` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Writing that explains related work or methods. | OD-13 resolved/approved; relationship behavior approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `skill` | Name | `name` | APPROVED FIELD | Symbol | YES | NO — V1 | Professional capability label. | Display-field candidate; duplicate-prevention help. | APPROVED V1 FIELD ID |
| `skill` | Summary | `summary` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Brief explanation of the capability. | Length/help guidance in 02.4. | APPROVED V1 FIELD ID |
| `skill` | Proof Summary | `proofSummary` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Optional evidence-oriented description without proficiency scoring. | Help text to avoid unsupported claims. | APPROVED V1 FIELD ID |
| `skillGroup` | Name | `name` | APPROVED FIELD | Symbol | YES | NO — V1 | Curated capability group label. | Display field approved by Batch 02.4; OD-06/OD-12 resolved/approved. | APPROVED V1 FIELD ID |
| `skillGroup` | Description | `description` | APPROVED OPTIONAL FIELD | Text | NO | NO — V1 | Optional explanation of the grouping. | Length/help guidance in 02.4. | APPROVED V1 FIELD ID |
| `skillGroup` | Sort Order | `sortOrder` | APPROVED OPTIONAL FIELD | Integer | NO | NO — V1 | Optional global order for the small v1 grouping set. | Confirm whether relationship ordering replaces this. | APPROVED V1 FIELD ID |
| `skillGroup` | Skills | `skills` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Skills included in the curated group. | Direction, cardinality, ordering, and validation in 02.4. | APPROVED V1 FIELD ID |
| `tool` | Name | `name` | APPROVED FIELD | Symbol | YES | NO — V1 | Product, platform, framework, technology, or software name. | Display-field candidate; duplicate-prevention help. | APPROVED V1 FIELD ID |
| `tool` | Category | `category` | APPROVED FIELD | Symbol | YES | NO — V1 | Lean tool category for `/tools` grouping and discovery. | OD-12 resolved/approved; allowed values approved by Batch 02.4. | APPROVED V1 FIELD ID |
| `tool` | Usage Context | `usageContext` | APPROVED FIELD | Text | YES | NO — V1 | Professional context explaining how/why the tool is used. | Length/help guidance in 02.4. | APPROVED V1 FIELD ID |
| `tool` | External URL | `externalUrl` | APPROVED OPTIONAL FIELD | Symbol | NO | NO — V1 | Public product/documentation URL when useful. | URL validation/external-link guidance in 02.4. | APPROVED V1 FIELD ID |
| `tool` | Logo | `logo` | APPROVED ASSET FIELD | Asset | NO | NO — V1 | Optional public logo/icon; text label remains required. | Asset rights/decorative-alt guidance in 02.4. | APPROVED V1 FIELD ID |
| `tool` | Skills | `skills` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Capabilities exercised with the tool. | Direction, cardinality, and duplicate-reference review. | APPROVED V1 FIELD ID |
| `tool` | Projects | `projects` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Projects that prove tool usage. | Direction and reverse-lookup strategy in 02.4. | APPROVED V1 FIELD ID |
| `tool` | Experience | `experience` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Experience items that prove tool usage. | Direction and reverse-lookup strategy in 02.4. | APPROVED V1 FIELD ID |
| `tool` | Articles | `articles` | APPROVED RELATIONSHIP FIELD INTENT — SHAPE DEFERRED TO 02.4 | Relationship intent | NEEDS 02.4 DECISION | NO — V1 | Articles that discuss the tool. | Direction and reverse-lookup strategy in 02.4. | APPROVED V1 FIELD ID |

## Non-Modeled Requirements

| Requirement / Concept | Classification | Reason | Follow-up |
|---|---|---|---|
| `canonicalUrl` / freeform canonical URL | DERIVED / CODE-OWNED — DO NOT MODEL | Canonicals derive from approved route identity, slug, and production URL configuration. | Migration removal/replacement in 02.5. |
| `noIndex` / page-level editorial noindex | CODE / STATE — DO NOT MODEL | Robots/indexability derives from route state, publication state, and preview state. | Validation/editorial help should explain absence in 02.4. |
| `noFollow` / page-level editorial nofollow | CODE / STATE — DO NOT MODEL | Page-level editorial nofollow is excluded from the approved SEO contract. | Migration removal/replacement in 02.5. |
| `metaKeywords` | CODE CONFIG — DO NOT MODEL | No meta-keywords strategy exists in v1. Tags are content classification only. | Keep excluded. |
| `structuredData` / `schemaJson` | CODE CONFIG — DO NOT MODEL | Structured data is code-generated from normalized content. | Keep excluded. |
| `readingTimeMinutes` | DERIVED — DO NOT MODEL | Reading time can be calculated from article body if needed. | Migration removal/replacement in 02.5. |
| Breadcrumb labels/paths | DERIVED — DO NOT MODEL | Breadcrumbs derive from route and content title. | Keep in metadata/adapters. |
| Sitemap inclusion/priority | DERIVED — DO NOT MODEL | Sitemap eligibility follows public/indexable route readiness. | Keep code-owned. |
| Route URL/path | DERIVED — DO NOT MODEL | Route path derives from route contract and slug fields where applicable. | Slug validation in 02.4. |
| READY / EMPTY / MISSING / DRAFT / PREVIEW / ERROR route states | DERIVED — DO NOT MODEL | Route state is application behavior based on content sufficiency and publication state. | Fixtures later validate states. |
| Contentful `sys.id`, created/updated timestamps, publication version | SYSTEM METADATA — DO NOT MODEL | Contentful owns these system values. | Use only through adapter/system layers. |
| Public-safety checkbox or `approvedForPublic` field | GOVERNANCE — DO NOT MODEL | Public safety is a readiness/governance requirement; no evidence justifies an editorial boolean as the v1 gate. | 02.4 help text and editorial workflow must preserve public-safety guidance. |
| Site origin, canonical base, environment IDs, API keys, runtime flags, secrets, deployment config | CODE CONFIG — DO NOT MODEL | Technical configuration belongs to application/runtime, never CMS editorial fields. | Keep out of migration. |
| Favicon, technical default social image, robots defaults | CODE CONFIG — DO NOT MODEL | Technical metadata defaults remain code/application owned in v1. | Revisit only with new editorial requirement. |
| Social icon component, CSS class, brand color, presentation variant | CODE CONFIG — DO NOT MODEL | Rendering and icon mapping derive from `platform` and application code. | Editor help can list supported platforms in 02.4. |
| Navigation `href` as arbitrary URL | NEEDS 02.4 DECISION | Navigation must target approved route keys, not create CMS-owned routes. | Validate `routeKey` against approved routes in 02.4. |
| Contact form fields | DEFER FROM V1 | Contact form is deferred and no Contact type is approved. | Future phase only. |
| Hardware inventory | DEFER FROM V1 | `/tools` is for professional products/platforms/frameworks/software in v1. | Revisit only if content strategy changes. |

## Relationship Field Intents

These are approved relationship semantic field IDs only. They do not freeze Link shape, cardinality, target restrictions, required counts, direction, or reverse-query strategy.

| Field Intent | Classification | 02.4 Question |
|---|---|---|
| `siteSettings.primaryNavigationItems` -> Navigation Item | LIKELY REFERENCE INTENT | Should header navigation be driven by singleton references, and how is order constrained? |
| `siteSettings.footerNavigationItems` -> Navigation Item | LIKELY REFERENCE INTENT | Should footer navigation reuse the same entries or a separate ordered set? |
| `siteSettings.socialLinks` -> Social Link | LIKELY REFERENCE INTENT | Should global and profile social links share references or have separate curated lists? |
| `personProfile.socialLinks` -> Social Link | LIKELY REFERENCE INTENT | Which source owns ordering and required LinkedIn/GitHub presence? |
| `project.skills` -> Skill | LIKELY REFERENCE INTENT | Which direction avoids duplicate skill maintenance across projects/tools/work? |
| `project.tools` -> Tool | LIKELY REFERENCE INTENT | Which direction powers `/tools` without duplicating reverse references? |
| `project.relatedArticles` -> Article | NEEDS 02.4 DECISION | Is related writing manual, derived, or mixed? |
| `project.relatedExperience` -> Experience Item | NEEDS 02.4 DECISION | Should project evidence point to experience, experience point to projects, or both? |
| `project.relatedProjects` -> Project | NEEDS 02.4 DECISION | Is related-project selection manual, derived, or mixed? |
| `article.authorProfile` -> Person Profile | LIKELY REFERENCE INTENT | Is a reference needed for a singleton author or should the app select the profile? |
| `article.relatedProjects` -> Project | NEEDS 02.4 DECISION | Is related project selection manual, derived, or mixed? |
| `article.relatedArticles` -> Article | NEEDS 02.4 DECISION | Should article-to-article related content be manual, derived, or mixed? |
| `article.skills` -> Skill | POSSIBLE REFERENCE INTENT | Should article classification use skills or only lean text fields? |
| `article.tools` -> Tool | POSSIBLE REFERENCE INTENT | Should tool mentions become references or remain body content unless route needs them? |
| `experienceItem.relatedProjects` -> Project | NEEDS 02.4 DECISION | Which direction minimizes duplicate project/work maintenance? |
| `experienceItem.skills` -> Skill | LIKELY REFERENCE INTENT | How should role capabilities be curated and ordered? |
| `experienceItem.tools` -> Tool | LIKELY REFERENCE INTENT | How should role technology/platform context be curated and ordered? |
| `experienceItem.relatedArticles` -> Article | POSSIBLE REFERENCE INTENT | Is writing evidence better manual or derived? |
| `skillGroup.skills` -> Skill | LIKELY REFERENCE INTENT | Should group membership live on group, skill, or both? |
| `tool.skills` -> Skill | NEEDS 02.4 DECISION | Should capability mapping be tool-owned, skill-owned, or derived from project/experience usage? |
| `tool.projects` -> Project | DERIVABLE — QUESTION REFERENCE | Could project-tool relationships derive the tool route instead of duplicating reverse links? |
| `tool.experience` -> Experience Item | DERIVABLE — QUESTION REFERENCE | Could experience-tool relationships derive this instead of duplicating reverse links? |
| `tool.articles` -> Article | DERIVABLE — QUESTION REFERENCE | Could article-tool relationships derive this instead of duplicating reverse links? |
| Homepage featured projects selection | NEEDS 02.4 DECISION | Should homepage feature selection be a `siteSettings` relationship, Project field, query rule, or code configuration? |

## Legacy Field Reconciliation

| Legacy Field / Concept | Approved Current Direction | Reason |
|---|---|---|
| `seoMetadata` type | REMOVE FROM V1 CONTRACT | Batch 02.2 absorbs broad SEO metadata into owning Project/Article fields. |
| `seoMetadata.internalName` | REMOVE FROM V1 CONTRACT | No standalone SEO entry remains. |
| `seoMetadata.title` | REPLACE WITH NEW FIELD | Use optional `project.seoTitle` and `article.seoTitle`. |
| `seoMetadata.description` | REPLACE WITH NEW FIELD | Use optional `project.seoDescription` and `article.seoDescription`. |
| `canonicalUrl` | DERIVED / CODE-OWNED — DO NOT MODEL | Canonical is route/code-derived from approved route identity. |
| `openGraphImage` | REPLACED BY `socialImage` ON OWNING TYPES | Use optional owning-type `socialImage`; fallback to representative/hero image. |
| `noIndex` | CODE / STATE — DO NOT MODEL | Indexability derives from route state, publication state, and preview state. |
| `noFollow` | CODE / STATE — DO NOT MODEL | Page-level editorial nofollow is excluded from v1. |
| `socialLink.platform` | KEEP / REUSE ID | Platform is semantic and supports code-derived icon mapping. |
| `socialLink.label` | KEEP / REUSE ID | Accessible label is editorial content. |
| `socialLink.url` | KEEP / REUSE ID | Public social destination is editorial content. |
| `socialLink.iconKey` | REMOVE FROM V1 CONTRACT | Icon mapping derives from `platform` in code unless 02.4 proves need. |
| `socialLink.order` | REPLACE WITH NEW FIELD | Use `sortOrder` only if relationship ordering is insufficient. |
| `socialLink.isActive` | REMOVE FROM V1 CONTRACT | Publication state and relationship selection own active/eligible use. |
| `navigationItem.href` | REPLACE WITH NEW FIELD | Use `routeKey` to preserve code-governed route inventory. |
| `navigationItem.order` | NEEDS 02.4 DECISION | Prefer relationship ordering; field retained only if needed. |
| `navigationItem.openInNewTab` | CODE CONFIG — DO NOT MODEL | v1 navigation should target approved internal routes. |
| `navigationItem.isActive` | REMOVE FROM V1 CONTRACT | Publication/relationship selection owns eligibility. |
| `siteSettings.defaultSeo` | REMOVE FROM V1 CONTRACT | Standalone SEO references are rejected; technical defaults are code-owned. |
| `siteSettings.logo` | DEFER FROM V1 | No current route requires editable logo asset. |
| `siteSettings.favicon` | CODE CONFIG — DO NOT MODEL | Favicon is technical/app-owned in v1. |
| `personProfile.professionalTitle` | REPLACE WITH NEW FIELD | Use `primaryTitle` and optional `secondaryTitle`. |
| `personProfile.availabilityLabel` | REPLACE WITH NEW FIELD | Use `availabilityStatus` with OD-03 preserved. |
| `personProfile.heroImage` | REPLACE WITH NEW FIELD | Use `profileImage` for semantic identity media. |
| `personProfile.resumeUrl` | REPLACE WITH NEW FIELD | Use `resume` Asset instead of a freeform resume URL. |
| `project.body` | REPLACE WITH NEW FIELD | Use lean hybrid `caseStudyBody` plus required semantic summary fields. |
| `project.category` | REPLACE WITH NEW FIELD | Use `projectType`; taxonomy depth is resolved by OD-12. |
| `project.technologies` | REPLACE WITH RELATIONSHIP INTENT | Tools are standalone v1 content; reference shape deferred to 02.4. |
| `project.seo` | REPLACE WITH NEW FIELDS | Use direct optional `seoTitle`, `seoDescription`, and `socialImage`. |
| `project.featured` | NEEDS 02.4 DECISION | Homepage feature selection method remains open. |
| `project.publishedDate` | REMOVE FROM V1 CONTRACT | Project route visibility follows Contentful publication/readiness; project timeframe is contextual. |
| `article.readingTimeMinutes` | DERIVED — DO NOT MODEL | Calculate from article body if needed. |
| `article.seo` | REPLACE WITH NEW FIELDS | Use direct optional `seoTitle`, `seoDescription`, and `socialImage`. |
| `article.featured` | NEEDS 02.4 DECISION | Homepage/writing highlight selection remains a 02.4 decision. |
| `experienceItem.current` | REPLACE WITH NEW FIELD | Use clearer `isCurrentRole`. |
| `experienceItem.highlights` | REPLACE WITH NEW FIELDS | Split into `responsibilities` and `achievements`. |
| `experienceItem.tags` | REPLACE WITH RELATIONSHIP INTENT | Skills/tools carry capability and technology meaning. |
| `experienceItem.order` | NEEDS 02.4 DECISION | Sorting may derive from dates or editor ordering rules. |
| `skill.slug` | REMOVE FROM V1 CONTRACT | No v1 skill detail route is approved. |
| `skill.category` | REPLACE WITH RELATIONSHIP INTENT | Skill grouping belongs to `skillGroup` relationship strategy. |
| `skill.iconKey` | CODE CONFIG — DO NOT MODEL | Icon rendering is presentational. |
| `skill.proficiency` | REMOVED / DO NOT MODEL | Proficiency bars/percentages/scores are explicitly excluded. |
| `skill.yearsExperience` | REMOVE FROM V1 CONTRACT | Unsupported precision; use evidence in proof contexts instead. |
| `skill.featured` | NEEDS 02.4 DECISION | Selection strategy belongs to relationship/query/editorial contract. |
| `skill.order` | NEEDS 02.4 DECISION | Ordering belongs to group/reference/editorial contract. |
| `skillGroup.slug` | REMOVE FROM V1 CONTRACT | No v1 skill-group detail route is approved. |
| `skillGroup.order` | REPLACE WITH NEW FIELD | Use `sortOrder` only for global group ordering if approved. |
| `tool` fields | ADD | Batch 02.2 approved Tool as a standalone v1 type absent from migration. |

## Batch 02.4 Follow-Up Queue

| Topic | 02.4 Question |
|---|---|
| References | Decide direction, cardinality, target restrictions, required counts, and reverse-query strategy. |
| Singleton behavior | Decide how `siteSettings` and `personProfile` are selected and documented. |
| Display fields | Confirm display-field candidates without encoding UI behavior. |
| Required-state validation | Confirm which approved required-intent fields become schema-required versus editorial-readiness required. |
| Slugs | Define validation and uniqueness for Project and Article slug fields only. |
| Navigation route keys | Define allowed route keys from the approved nine-route inventory. |
| SEO overrides | Define length/help guidance for `seoTitle` and `seoDescription`; confirm `socialImage` asset rules. |
| Asset accessibility | Define whether Contentful Asset title/description is sufficient for v1 alt/context and when owning-entry guidance is required. |
| Public safety | Convert governance rules into editor help/readiness workflow, not a blanket boolean field. |
| Learning highlights | Define RichText/link guidance for lightweight profile-owned credentials. |
| Article classification | Define allowed values for `contentPillar`, `category`, and `tags` without creating taxonomy types. |
| Project classification | Define allowed values for `projectType`, `projectStatus`, and tags without creating taxonomy types. |
| Tool category | Define lean category values without broad taxonomy architecture. |
| Homepage selections | Decide featured Project/Article/Tool selection mechanism without resolving exact OD-09 project choices. |
| Related content | OD-13 resolved/approved; implement the approved authored plus derived reverse strategy. |
| Migration diff | Approved / reconciled V1 by Batch 02.5; execution remains deferred to Batch 02.6 gates. |

## Project Long-Form Strategy

Approved strategy: lean hybrid.

`project` uses required structured semantic fields for title, slug, summary, type, role, problem, approach, outcome, and hero image. Optional `caseStudyBody` supports richer narrative without introducing a page builder, component sections, or arbitrary layout blocks.

This avoids a single unstructured body as the only proof source while also avoiding a large set of page-builder sections.

Project reference density is reviewed and mitigated in the approved Batch 02.4 reference contract so relationship intents do not turn the highest-pressure type into a dense bidirectional graph.

## Article Classification Strategy

`article` uses lean owning-entry fields:

- `contentPillar`
- `category`
- `tags`

No dedicated taxonomy content type is approved. OD-05 remains open for pillar validation; OD-12 is resolved/approved. Allowed values and editor guidance are governed by the approved Batch 02.4 validation/editorial contract.

## Learning / Certification Representation

Owner: `personProfile`.

Approved v1 field: `learningHighlights`.

Primitive / shape: RichText.

Rationale: current requirements need lightweight optional profile-owned evidence with occasional public credential links, not standalone Certification, Learning, Credential, or Course entries. A single RichText field keeps the representation simple while preserving editorial context.

## Media Accessibility Representation

Approved v1 direction: Asset metadata sufficient for v1, with Batch 02.4 editorial rules.

This ledger approves semantic asset fields on owning entries and does not add alt/caption fields everywhere. Batch 02.4 defines how Contentful Asset title/description support meaningful alt text, decorative treatment, public-safe media notes, and link text for the resume asset.

## Field Count Pressure

| Type | Approved Scalar/Asset Fields | Relationship Intents | Total Pressure | Assessment |
|---|---:|---:|---:|---|
| `siteSettings` | 2 | 3 | 5 | LEAN |
| `personProfile` | 14 | 1 | 15 | REASONABLE |
| `socialLink` | 4 | 0 | 4 | LEAN |
| `navigationItem` | 3 | 0 | 3 | LEAN |
| `project` | 20 | 5 | 25 | HIGH — REVIEW |
| `article` | 13 | 5 | 18 | REASONABLE |
| `experienceItem` | 14 | 4 | 18 | REASONABLE |
| `skill` | 3 | 0 | 3 | LEAN |
| `skillGroup` | 3 | 1 | 4 | LEAN |
| `tool` | 5 | 4 | 9 | REASONABLE |

No type is rated EXCESSIVE. `project` has the highest pressure because a case study must carry public-safe narrative, proof, media, classification, SEO fallback, and relationship context. The mitigation is the lean hybrid long-form strategy and deferring reference/cardinality and validation complexity to 02.4.

## Duplicate Meaning Review

| Potential Duplication | 02.3 Treatment |
|---|---|
| `siteDescription` versus route SEO description | `siteDescription` is editorial global copy only; static-route metadata remains code-owned. |
| `personProfile.primaryTitle` versus `secondaryTitle` | Primary title is required approved positioning; secondary title remains optional and OD-02 open. |
| `project.summary` versus `seoDescription` | Summary is visible content; SEO description is optional override. |
| `article.excerpt` versus `seoDescription` | Excerpt is visible preview content; SEO description is optional override. |
| `project.heroImage` versus `socialImage` | Hero image is visible representative media; social image is optional metadata override. |
| `article.heroImage` versus `socialImage` | Hero image is visible article media; social image is optional metadata override. |
| `project.tags` / `article.tags` versus `metaKeywords` | Tags are visible or organizational classification only; meta keywords remain excluded. |
| `skillGroup` versus `skill.category` | Grouping is relationship-owned by `skillGroup`; no separate skill category field is approved. |
| `tool.category` versus taxonomy type | Tool category remains a lean field; no taxonomy type is created. |
| Reverse relationship fields | Several reverse-looking intents are queued as 02.4 questions and may be derived instead of stored. |

## Field-Level Route Coverage

| Route | Required CMS Semantics Covered? | Status | Remaining 02.4 Questions |
|---|---:|---|---|
| `/` | Yes | PASS | Homepage featured Project/Article/Tool selection and ordering. |
| `/about` | Yes | PASS | Profile long-bio guidance, learning highlights, and social/contact relationships. |
| `/work` | Yes | PASS | Experience-skill-tool-project relationship direction and public-safe metrics guidance. |
| `/projects` | Yes | PASS | Project eligibility, ordering/filtering, and featured/related strategy. |
| `/projects/[slug]` | Yes | PASS | Slug validation, public-safety workflow, asset accessibility, and relationships. |
| `/writing` | Yes | PASS | Article eligibility, classification values, ordering/filtering, and highlights. |
| `/writing/[slug]` | Yes | PASS | Author profile relationship, related content, asset accessibility, and SEO override guidance. |
| `/tools` | Yes | PASS | Tool-skill-project-experience relationship direction and category values. |
| `/contact` | Yes | PASS | Contact method fallback between profile email and social links; resume asset guidance. |

## Fixture Compatibility

Future fixture work can represent:

- one Profile fixture with identity, title, bios, image, contact, resume, learning highlights, and social links;
- 2-3 Experience fixtures with current and past states;
- 2-3 Project fixtures with required case-study fields, optional metrics, media, SEO override/fallback states, and relationship variants;
- at least two Article fixtures with publish/update/body/classification and SEO override/fallback states;
- 2-4 Skill Group fixtures;
- 8-12 Skill fixtures;
- 6-12 Tool fixtures;
- complete Navigation fixtures constrained to the nine approved routes;
- 2-4 Social Link fixtures;
- collection READY/EMPTY states for `/projects`, `/writing`, and `/tools`;
- detail READY/MISSING/DRAFT or PREVIEW states for Project and Article;
- SEO override and fallback cases for Project and Article.

No fixtures are created by Batch 02.3.

## Contentful Primitive Compatibility

| Approved Primitive / Shape | Status |
|---|---|
| Symbol | Supported for short labels, keys, URLs, titles, and simple classifications. |
| Text | Supported for summaries, role/context copy, and longer plain text. |
| RichText | Supported for biography, article body, case-study narrative, responsibilities, achievements, and learning highlights. |
| Date | Supported for article and experience dates. |
| Boolean | Supported only for `isCurrentRole`; route/readiness booleans are excluded. |
| Integer | Supported for optional `sortOrder`; numeric validation waits for 02.4. |
| Asset | Supported for profile image, resume, project media, article media, logos, and social images. |
| Array of Symbol | Supported only for lightweight `tags`; allowed values wait for 02.4. |
| Object / JSON | Not approved in Batch 02.3. |

## Migration Impact Preview

Planning only. Do not edit or run the migration in Batch 02.3.

| Existing Migration Field | Approved Type | Approved V1 Direction | Future Action |
|---|---|---|---|
| `seoMetadata.*` | N/A | Remove standalone type and replace title/description/image concepts with owning fields. | REMOVED / RECONCILED IN 02.5 |
| `socialLink.platform` | `socialLink` | Keep. | KEEP |
| `socialLink.label` | `socialLink` | Keep. | KEEP |
| `socialLink.url` | `socialLink` | Keep. | KEEP |
| `socialLink.iconKey` | `socialLink` | Remove/code-derive from platform. | REMOVE |
| `socialLink.order` | `socialLink` | Replace with `sortOrder` only if 02.4 confirms need. | RENAME/REPLACE |
| `socialLink.isActive` | `socialLink` | Remove; use publication/relationship selection. | REMOVE |
| `navigationItem.label` | `navigationItem` | Keep. | KEEP |
| `navigationItem.href` | `navigationItem` | Replace with `routeKey`. | RENAME/REPLACE |
| `navigationItem.description` | `navigationItem` | Keep optional. | KEEP |
| `navigationItem.order` | `navigationItem` | Review against relationship ordering. | REVIEW IN 02.4 |
| `navigationItem.openInNewTab` | `navigationItem` | Remove from v1 internal route navigation. | REMOVE |
| `navigationItem.isActive` | `navigationItem` | Remove; use publication/relationship selection. | REMOVE |
| `siteSettings.siteName` | `siteSettings` | Keep. | KEEP |
| `siteSettings.tagline` | `siteSettings` | Replace with profile positioning/site description strategy. | RECONCILED IN 02.5 |
| `siteSettings.description` | `siteSettings` | Rename/refine as `siteDescription`. | RENAME/REPLACE |
| `siteSettings.logo` | `siteSettings` | Defer/remove unless 02.4 proves editorial need. | REVIEW IN 02.4 |
| `siteSettings.favicon` | `siteSettings` | Remove; code-owned. | REMOVE |
| `siteSettings.defaultSeo` | `siteSettings` | Remove; standalone SEO type rejected. | REMOVE |
| `siteSettings.navigationItems` | `siteSettings` | Keep intent as `primaryNavigationItems`; shape deferred. | REVIEW IN 02.4 |
| `siteSettings.footerNavigationItems` | `siteSettings` | Keep intent; shape deferred. | REVIEW IN 02.4 |
| `siteSettings.socialLinks` | `siteSettings` | Keep intent; shape deferred. | REVIEW IN 02.4 |
| `personProfile.name` | `personProfile` | Keep. | KEEP |
| `personProfile.professionalTitle` | `personProfile` | Replace with `primaryTitle`; optional `secondaryTitle`. | RENAME/REPLACE |
| `personProfile.availabilityLabel` | `personProfile` | Replace with `availabilityStatus`. | RENAME/REPLACE |
| `personProfile.shortBio` | `personProfile` | Keep. | KEEP |
| `personProfile.longBio` | `personProfile` | Keep. | KEEP |
| `personProfile.location` | `personProfile` | Keep optional. | KEEP |
| `personProfile.email` | `personProfile` | Rename/refine as `publicEmail`. | RENAME/REPLACE |
| `personProfile.heroImage` | `personProfile` | Rename/refine as `profileImage`. | RENAME/REPLACE |
| `personProfile.socialLinks` | `personProfile` | Keep relationship intent; shape deferred. | REVIEW IN 02.4 |
| `personProfile.resumeUrl` | `personProfile` | Replace with `resume` Asset. | RENAME/REPLACE |
| `project.title` | `project` | Keep. | KEEP |
| `project.slug` | `project` | Keep; validation deferred. | KEEP |
| `project.eyebrow` | `project` | Remove/defer; not a semantic requirement. | REMOVE |
| `project.summary` | `project` | Keep. | KEEP |
| `project.body` | `project` | Replace with lean hybrid `caseStudyBody` plus structured fields. | RENAME/REPLACE |
| `project.heroImage` | `project` | Keep. | KEEP |
| `project.gallery` | `project` | Replace/refine as `galleryImages`; shape deferred. | RENAME/REPLACE |
| `project.category` | `project` | Replace with `projectType`. | RENAME/REPLACE |
| `project.tags` | `project` | Keep optional. | KEEP |
| `project.technologies` | `project` | Replace with `tools` relationship intent. | RENAME/REPLACE |
| `project.liveUrl` | `project` | Keep optional. | KEEP |
| `project.repositoryUrl` | `project` | Keep optional. | KEEP |
| `project.seo` | `project` | Replace with `seoTitle`, `seoDescription`, `socialImage`. | RENAME/REPLACE |
| `project.featured` | `project` | Review homepage selection strategy. | REVIEW IN 02.4 |
| `project.publishedDate` | `project` | Remove unless later content need appears. | REMOVE |
| `project.order` | `project` | Review ordering/selection strategy. | REVIEW IN 02.4 |
| `article.title` | `article` | Keep. | KEEP |
| `article.slug` | `article` | Keep; validation deferred. | KEEP |
| `article.excerpt` | `article` | Keep. | KEEP |
| `article.body` | `article` | Keep. | KEEP |
| `article.heroImage` | `article` | Keep optional. | KEEP |
| `article.publishedDate` | `article` | Rename/refine as `publishDate`. | RENAME/REPLACE |
| `article.updatedDate` | `article` | Keep optional. | KEEP |
| `article.category` | `article` | Keep optional with `contentPillar`/`tags`; validation deferred. | KEEP |
| `article.tags` | `article` | Keep optional. | KEEP |
| `article.readingTimeMinutes` | `article` | Derived; remove. | REMOVE |
| `article.seo` | `article` | Replace with `seoTitle`, `seoDescription`, `socialImage`. | RENAME/REPLACE |
| `article.relatedProjects` | `article` | Keep as relationship intent; shape deferred. | REVIEW IN 02.4 |
| `article.featured` | `article` | Review selection strategy. | REVIEW IN 02.4 |
| `experienceItem.role` | `experienceItem` | Keep. | KEEP |
| `experienceItem.company` | `experienceItem` | Keep. | KEEP |
| `experienceItem.companyUrl` | `experienceItem` | Keep optional. | KEEP |
| `experienceItem.location` | `experienceItem` | Keep optional. | KEEP |
| `experienceItem.startDate` | `experienceItem` | Keep. | KEEP |
| `experienceItem.endDate` | `experienceItem` | Keep optional. | KEEP |
| `experienceItem.current` | `experienceItem` | Replace with `isCurrentRole`. | RENAME/REPLACE |
| `experienceItem.summary` | `experienceItem` | Keep. | KEEP |
| `experienceItem.highlights` | `experienceItem` | Replace with `responsibilities` and `achievements`. | RENAME/REPLACE |
| `experienceItem.tags` | `experienceItem` | Replace with skill/tool relationship intents. | RENAME/REPLACE |
| `experienceItem.order` | `experienceItem` | Review ordering strategy. | REVIEW IN 02.4 |
| `skill.name` | `skill` | Keep. | KEEP |
| `skill.slug` | `skill` | Remove; no skill detail route. | REMOVE |
| `skill.category` | `skill` | Replace with Skill Group relationship strategy. | RENAME/REPLACE |
| `skill.iconKey` | `skill` | Code-owned; remove. | REMOVE |
| `skill.proficiency` | `skill` | Excluded; remove. | REMOVE |
| `skill.yearsExperience` | `skill` | Excluded unsupported precision; remove. | REMOVE |
| `skill.featured` | `skill` | Review selection strategy. | REVIEW IN 02.4 |
| `skill.order` | `skill` | Review grouping/order strategy. | REVIEW IN 02.4 |
| `skillGroup.name` | `skillGroup` | Keep. | KEEP |
| `skillGroup.slug` | `skillGroup` | Remove; no skill-group detail route. | REMOVE |
| `skillGroup.description` | `skillGroup` | Keep optional. | KEEP |
| `skillGroup.skills` | `skillGroup` | Keep relationship intent; shape deferred. | REVIEW IN 02.4 |
| `skillGroup.order` | `skillGroup` | Rename/refine as `sortOrder` if approved. | RENAME/REPLACE |
| `tool.*` | `tool` | Add approved Tool fields. | ADD |
