# Validation + Editorial Contract

## Approval Status

Phase:
Phase 02

Batch:
02.4 — References + Validations + Editorial Contract

Status:
APPROVED V1

External validation:
PASS WITH NOTES

Approved scope:

- requiredness rules;
- routeKey rules;
- slug rules;
- scalar validation rules;
- SEO override rules;
- URL rules;
- date rules;
- controlled values;
- Rich Text rules;
- Asset rules;
- accessibility rules;
- public-safety rules;
- singleton rules;
- display-field contract;
- type-level editor guidance;
- high-risk-field guidance;
- editorial ordering rules;
- derived/code/system exclusions.

Migration syntax:
APPROVED RE2-CORRECTED / EXECUTED SUCCESSFULLY IN DEV by Batch 02.6

Owner: Phase 02 - Content Model Contract + Bootstrap Migration

This is the approved v1 validation and editor-facing contract for the approved 10-type Contentful model. It completes requiredness rules, slug and route-key policy, scalar validations, controlled values, Rich Text and Asset rules, accessibility guidance, singleton behavior, display fields, and editorial help after external Batch 02.4 validation.

This document itself does not implement migration syntax, run Contentful, create fixtures, add fields, or remove fields.

## Validation Philosophy

Hard validations protect semantic integrity:

- structurally invalid data;
- impossible route identifiers;
- malformed slugs;
- wrong reference targets;
- invalid controlled values;
- invalid URL/email/file types;
- impossible required relationships;
- clearly pathological lengths.

Editorial guidance handles:

- writing quality;
- tone;
- case-study depth;
- SEO display-length recommendations;
- optional content completeness;
- public-safety review judgment;
- route-readiness decisions that need context.

Do not convert every recommendation into a schema validator.

## Requiredness Rules

- Preserve Batch 02.3 required/optional intent.
- Required scalar and asset fields define the entry's semantic identity or route-readiness baseline.
- Optional fields enrich content, metadata, links, media, classification, or contact context without blocking valid entry creation.
- Relationship fields are required only when the source entry loses meaning without the target.
- Conditional route readiness remains application/editorial workflow unless Batch 02.3 already approved a required field.

Reference requiredness approved by Batch 02.4:

- required: `siteSettings.primaryNavigationItems`, `article.authorProfile`, `skillGroup.skills`;
- optional: all other relationship fields;
- derived reverse: not authored and not required.

## Slug Rules

Approved slug fields:

- `project.slug`;
- `article.slug`.

Hard structural validation:

- lowercase ASCII letters and numbers;
- hyphen-separated words;
- no leading slash;
- no route prefix such as `projects/` or `writing/`;
- no uppercase characters;
- no spaces or underscores;
- no leading or trailing hyphen;
- no empty segments.

Recommended pattern:

```text
^[a-z0-9]+(?:-[a-z0-9]+)*$
```

Uniqueness:

- slugs must be unique within their content type;
- Project and Article slugs may overlap because their route prefixes differ;
- canonical URLs derive from route contract plus slug and are not entered in Contentful.

Soft guidance:

- keep slugs durable, readable, and content-specific;
- avoid dates unless the date is part of the public title;
- do not change published slugs casually.

## routeKey Rules

Approved field:

- `navigationItem.routeKey`.

Allowed values:

| routeKey | Route | Notes |
|---|---|---|
| `home` | `/` | Optional. Logo/name always links home; Home does not need primary-navigation text. |
| `about` | `/about` | Approved navigation destination. |
| `work` | `/work` | Approved navigation destination. |
| `projects` | `/projects` | Approved collection destination. |
| `writing` | `/writing` | Approved collection destination. |
| `tools` | `/tools` | Approved collection/reference destination. |
| `contact` | `/contact` | Approved conversion destination. |

Excluded from `navigationItem.routeKey`:

- `/projects/[slug]`;
- `/writing/[slug]`;
- arbitrary internal paths;
- external URLs;
- query strings;
- hash-only links.

Dynamic detail routes are reached through Project and Article entries, not global Navigation Item entries.

## Scalar Validation Rules

| Field Family | Hard Validation | Soft Guidance | Notes |
|---|---|---|---|
| Entry titles/names | Required where approved; max 120 characters for titles/names. | Use clear, recognizable entry names. | Applies to `project.title`, `article.title`, `personProfile.name`, `skill.name`, `skillGroup.name`, `tool.name`, and similar identity fields. |
| Navigation labels | Required; max 40 characters. | Prefer one or two words. | Destination comes from `routeKey`, not label text. |
| Professional titles | Required/optional per ledger; max 120 characters. | Keep role/title language current and public-safe. | OD-02 and OD-03 content choices remain open. |
| Short summaries/excerpts | Required/optional per ledger; max 300 characters. | Aim for concise preview copy that can stand alone. | Applies to `project.summary`, `article.excerpt`, short descriptions, and route preview text. |
| Longer plain Text fields | Required/optional per ledger; max 1,200 characters unless field-specific evidence later requires less. | Use complete but scannable public-safe copy. | Applies to role, context, problem, approach, outcome, metrics, usage context, and similar fields. |
| SEO title override | Optional; max 90 characters. | Often most useful around 50-70 characters, but not a hard search rule. | Fallback uses content title when empty. |
| SEO description override | Optional; max 220 characters. | Often most useful around 140-170 characters, but not a hard search rule. | Fallback uses summary/excerpt when empty. |
| Tags | Optional; unique values within entry; max 12 tags; each tag max 40 characters. | Use visible classification labels, not meta keywords. | No dedicated taxonomy type. |
| Sort order | Optional integer; minimum 0. | Prefer relationship array order when order is context-specific. | `socialLink.sortOrder` and `skillGroup.sortOrder` provide global fallback ordering. |

## SEO Override Rules

Approved optional fields:

- `project.seoTitle`;
- `project.seoDescription`;
- `project.socialImage`;
- `article.seoTitle`;
- `article.seoDescription`;
- `article.socialImage`.

Rules:

- SEO overrides are never required.
- `seoTitle` hard maximum: 90 characters.
- `seoDescription` hard maximum: 220 characters.
- Soft recommendations may mention common display ranges, but they are not indexing guarantees.
- Project fallback: `seoTitle -> title`; `seoDescription -> summary`; `socialImage -> heroImage -> site default image`.
- Article fallback: `seoTitle -> title`; `seoDescription -> excerpt`; `socialImage -> heroImage -> site default image`.
- Canonical URL, robots/indexability, sitemap eligibility, breadcrumbs, structured data, preview exclusion, and metadata fallback resolution remain code/state-derived.

Excluded:

- `canonicalUrl`;
- `noIndex`;
- `noFollow`;
- `metaKeywords`;
- arbitrary structured-data JSON;
- sitemap checkbox.

## URL Rules

External URL fields:

- `socialLink.url`;
- `project.liveUrl`;
- `project.repositoryUrl`;
- `experienceItem.companyUrl`;
- `tool.externalUrl`.

Hard validation:

- absolute URL;
- `https://` required for public web destinations;
- no relative paths;
- no internal route paths;
- no JavaScript/data URLs;
- no private local network URLs.

Migration enforcement note:

- Contentful schema uses a RE2-compatible structural HTTPS DNS-style URL regex.
- Private/local destination policy remains an approved semantic rule enforced through application validation, QA, and editorial governance where Contentful regex cannot safely express it.

Email:

- `personProfile.publicEmail` must be a valid public professional email address if present.
- Do not enter `mailto:` URLs in URL fields.

Internal navigation:

- `navigationItem.routeKey` owns internal navigation destinations.
- Project and Article detail URLs derive from slug and route contract.

## Date Rules

Approved date fields:

- `article.publishDate`;
- `article.updatedDate`;
- `experienceItem.startDate`;
- `experienceItem.endDate`.

Rules:

- `article.publishDate` is required.
- `article.updatedDate` is optional and should not precede `publishDate`.
- `experienceItem.startDate` is required.
- `experienceItem.endDate` is optional and should not precede `startDate`.
- If `experienceItem.isCurrentRole` is true, `endDate` should normally be empty.
- Date precision should be consistent enough for public display; exact private dates are not required when public month/year context is safer.

Cross-field date rules may require editor guidance or application validation if the migration API cannot enforce them directly.

## Controlled Values

Controlled values are lean v1 enums, not taxonomy entries.

| Field | Values | Status |
|---|---|---|
| `navigationItem.routeKey` | `home`, `about`, `work`, `projects`, `writing`, `tools`, `contact` | HARD VALIDATION |
| `project.projectType` | `case-study`, `cms-architecture`, `content-modeling`, `migration-replatforming`, `frontend-integration`, `content-operations`, `workflow-automation` | HARD VALIDATION |
| `project.projectStatus` | `completed`, `ongoing`, `in-progress`, `archived` | HARD VALIDATION |
| `article.contentPillar` | `cms-architecture`, `frontend-implementation`, `content-operations`, `migration-strategy`, `seo-accessibility-content-quality`, `ai-assisted-workflows` | HARD VALIDATION; OD-04 and OD-05 content validation remain open |
| `article.category` | `technical-guide`, `field-note`, `strategy-note`, `case-study-note`, `reflection` | HARD VALIDATION |
| `experienceItem.employmentType` | `full-time`, `contract`, `consulting`, `freelance`, `part-time`, `internship`, `volunteer` | HARD VALIDATION |
| `tool.category` | `cms-platform`, `frontend-framework`, `language-runtime`, `design-qa`, `seo-analytics`, `deployment-devops`, `collaboration-workflow`, `automation-ai` | HARD VALIDATION |
| `socialLink.platform` | `linkedin`, `github`, `personal-site`, `figma`, `medium`, `devto`, `substack`, `x`, `bluesky`, `mastodon`, `other` | HARD VALIDATION |

Tags remain freeform within the tag rules above. They must not become meta keywords or a hidden taxonomy system.

## Rich Text Rules

| Field | Intended Use | Restrictions / Guidance | Status |
|---|---|---|---|
| `personProfile.longBio` | LONG-FORM NARRATIVE | Paragraphs, headings 2-3, lists, quotes, and links. No embedded entries. Avoid duplicating route layout. | APPROVED V1 |
| `personProfile.learningHighlights` | LIGHTWEIGHT STRUCTURED TEXT | Short credential/learning notes, bullets, and public links. No credential database, expiration workflow, or embedded entries. | APPROVED V1 |
| `project.caseStudyBody` | CASE-STUDY BODY | Optional deeper narrative that extends required case-study fields. Headings 2-3, lists, quotes, links, code marks, and embedded assets only when they are meaningful figures. No embedded entries or page sections. | APPROVED V1 |
| `article.body` | FULL ARTICLE BODY | Full writing body with headings 2-3, lists, quotes, code marks/blocks, links, and embedded assets when needed. No embedded entries or page-builder sections. | APPROVED V1 |
| `experienceItem.responsibilities` | LIGHTWEIGHT STRUCTURED TEXT | Prefer concise lists or paragraphs. No embedded entries/assets. | APPROVED V1 |
| `experienceItem.achievements` | LIGHTWEIGHT STRUCTURED TEXT | Public-safe outcomes and accomplishments. No embedded entries/assets. | APPROVED V1 |

No Rich Text field creates a hidden component model, PageSection architecture, HeroSection system, or generic content block framework.

## Asset Rules

| Asset Field | Semantic Purpose | Required? | File Expectation | Accessibility Requirement | Public-Safety Requirement | Reuse Notes |
|---|---|---:|---|---|---|---|
| `personProfile.profileImage` | Canonical profile/author image. | Yes | Public-safe image. | Asset title/description describes the person and context. | No private locations, IDs, or sensitive background details. | May be reused for author contexts. |
| `personProfile.resume` | Downloadable public resume. | No | PDF document. | Link text must identify it as a resume PDF. | Must exclude private address, private phone, and confidential details. | Reuse only as current public resume. |
| `project.heroImage` | Representative project image and social fallback. | Yes | Public-safe image/screenshot/diagram. | Asset title/description supplies meaningful alt context. | Redact/anonymize confidential UI, credentials, client data, and unreleased material. | May support social fallback. |
| `project.galleryImages` | Supporting project media. | No | Public-safe images. | Each Asset needs meaningful title/description. | Same public-safety rules as hero image. | Use only when media clarifies the case study. |
| `project.socialImage` | Optional editorial social image override. | No | Public-safe image. | Metadata still required; frontend may treat as social-only. | No hidden claims or confidential screenshots. | May reuse hero image if suitable. |
| `article.heroImage` | Optional article image and social fallback. | No | Public-safe image. | Asset metadata describes the image if meaningful. | No confidential screenshots or third-party material without rights. | May be omitted when article is text-led. |
| `article.socialImage` | Optional editorial social image override. | No | Public-safe image. | Metadata still required; frontend may treat as social-only. | No hidden claims or confidential material. | May reuse hero image if suitable. |
| `experienceItem.companyLogo` | Optional company/organization logo. | No | Logo image. | Text company name remains required; logo can be decorative in frontend. | Use only public-safe logos with rights to display. | Avoid depending on logo for meaning. |
| `tool.logo` | Optional tool/platform logo. | No | Logo/icon image. | Text tool name remains required; logo can be decorative in frontend. | Use only public-safe assets with rights to display. | Do not replace `tool.name`. |

No standalone Media type is approved. No universal duplicate `altText` field is added.

## Accessibility Rules

- Contentful Asset title and description are the primary v1 accessibility metadata source.
- Meaningful images need Asset metadata that can become useful alt text or figure context.
- Decorative logos/icons may have empty alt in frontend, but the related text label must be present.
- Screenshots and diagrams require enough metadata for a visitor to understand what the image demonstrates.
- Resume links must communicate that the target is a PDF.
- Reused Assets can have contextual alt limitations; v1 accepts this constraint and relies on owning-entry context plus Asset metadata instead of duplicating `altText` fields everywhere.
- Links in Rich Text and URL fields must use descriptive labels in visible content.

## Public-Safety Rules

Do not publish:

- credentials;
- tokens;
- private environment IDs;
- private API details;
- confidential screenshots;
- customer, employee, or user personal data;
- unreleased material;
- proprietary internal architecture;
- unsupported confidential metrics;
- private job-search or compensation details.

Allowed when accurate and useful:

- anonymized examples;
- generalized client or industry descriptions;
- recreated screenshots;
- redacted media;
- aggregated outcomes;
- public documentation links;
- public repositories.

No `publicSafety`, `confidential`, `approvedForPublic`, or `safeToPublish` boolean field is approved. Public safety remains governance, editorial review, and route-readiness policy.

## Singleton Rules

| Type | Semantic Rule | Runtime Selection Rule | Duplicate Behavior | Empty Behavior |
|---|---|---|---|---|
| `siteSettings` | One active v1 entry owns global site identity, navigation, and global social links. | Query published `siteSettings` with `limit=2`. | More than one published entry is a configuration error and should surface diagnostics. | Missing entry yields a controlled missing-site-configuration state. |
| `personProfile` | One active v1 entry owns canonical professional identity and author/profile context. | Query published `personProfile` with `limit=2`. | More than one published entry is a configuration error and should surface diagnostics. | Missing entry yields controlled missing-profile states. |

No new singleton field is added.

## Display Field Contract

| Type | Display Field | Status |
|---|---|---|
| `siteSettings` | `siteName` | APPROVED DISPLAY FIELD CANDIDATE |
| `personProfile` | `name` | APPROVED DISPLAY FIELD CANDIDATE |
| `socialLink` | `label` | APPROVED DISPLAY FIELD CANDIDATE |
| `navigationItem` | `label` | APPROVED DISPLAY FIELD CANDIDATE |
| `project` | `title` | APPROVED DISPLAY FIELD CANDIDATE |
| `article` | `title` | APPROVED DISPLAY FIELD CANDIDATE |
| `experienceItem` | `role` | APPROVED DISPLAY FIELD CANDIDATE |
| `skill` | `name` | APPROVED DISPLAY FIELD CANDIDATE |
| `skillGroup` | `name` | APPROVED DISPLAY FIELD CANDIDATE |
| `tool` | `name` | APPROVED DISPLAY FIELD CANDIDATE |

Every display field uses an approved Batch 02.3 field ID.

## Type-Level Editor Guidance

| Type | Purpose | Create When | Reuse | Do Not Use For | Public Safety |
|---|---|---|---|---|---|
| `siteSettings` | Global editorial site identity, navigation, and global links. | Once for the active site. | Do not duplicate; update the singleton. | Secrets, environment config, technical SEO, or page layout. | Keep public copy generic and safe. |
| `personProfile` | Canonical professional identity, bio, contact, resume, and author context. | Once for the active profile. | Do not duplicate; update the singleton. | Per-route page copy or private contact details. | Avoid private personal data and unsupported claims. |
| `socialLink` | Public professional/social destination. | A reusable public destination is needed. | Reuse identical platform/profile destinations. | Icons, styling, or private contact methods. | Link only to public-safe profiles. |
| `navigationItem` | Label and route key for approved v1 navigation. | A header/footer navigation destination is needed. | Reuse matching entries across nav lists. | Arbitrary URLs, dynamic detail routes, or page creation. | Labels should be clear and non-sensitive. |
| `project` | Public-safe case study or project proof. | A project has enough public-safe evidence for collection/detail use. | Reference existing Skills, Tools, Articles, and Experience. | Confidential delivery notes, page sections, or private metrics. | Redact or generalize sensitive client/work details. |
| `article` | Public writing or guide. | A complete public article is ready. | Reference existing Projects, Skills, Tools, and profile author. | Draft notes, private documentation, or hidden SEO content. | Avoid confidential examples or unapproved code/screenshots. |
| `experienceItem` | Professional role/history evidence. | A role or engagement should appear in work/about contexts. | Reference existing Skills, Tools, Articles; derive related projects. | Resume-only duplication or private HR details. | Generalize sensitive company/team context. |
| `skill` | Professional capability. | A reusable capability appears across proof contexts. | Reuse existing Skills before creating near-duplicates. | Tools, platforms, proficiency scores, or years precision. | Claims should be evidence-backed. |
| `skillGroup` | Small curated capability grouping. | A group helps organize Skills for v1 presentation. | Keep to 2-4 groups. | Nested taxonomy, broad categories, or page layout groups. | Group labels should be public and accurate. |
| `tool` | Product/platform/framework/software used to exercise capabilities. | A reusable technology supports projects, work, articles, or `/tools`. | Reuse existing Tool entries. | Skills, hardware inventory, minor packages, or exhaustive stacks. | Use public-safe names, URLs, and logos. |

## High-Risk Field Guidance

| Field / Family | Guidance |
|---|---|
| `navigationItem.routeKey` | Choose only approved route keys; do not paste URLs. |
| `project.slug`, `article.slug` | Enter only the route segment, never a full URL or route prefix. |
| `project.caseStudyBody` | Extend the structured case-study fields; do not build page sections or duplicate all fields. |
| `personProfile.learningHighlights` | Keep lightweight; do not create a hidden certification database. |
| SEO overrides | Use only when the visible title/summary is not the best metadata. Leave empty to use fallback. |
| Tags/classification | Support discovery and grouping; never use as meta keywords. |
| Metrics | Include only credible, public-safe, non-confidential metrics with enough context. |
| Asset fields | Confirm rights, redaction, and Asset metadata before publishing. |
| Relationship fields | Reference existing entries when the relationship improves visitor evidence; avoid graph completeness. |

## Editorial Ordering Rules

| Area | Ordering Strategy | Notes |
|---|---|---|
| Primary navigation | ORDER BY REFERENCE ARRAY | `siteSettings.primaryNavigationItems`. |
| Footer navigation | ORDER BY REFERENCE ARRAY | `siteSettings.footerNavigationItems`. |
| Site/profile social links | ORDER BY REFERENCE ARRAY; `socialLink.sortOrder` is fallback only | Relationship order wins for context-specific lists. |
| Skill groups | ORDER BY ENTRY FIELD | `skillGroup.sortOrder` controls group order. |
| Skills inside a group | ORDER BY REFERENCE ARRAY | `skillGroup.skills`. |
| Project skills/tools | DERIVED SORT | Display can sort by group/category/name unless later UI contract needs priority. |
| Article/experience skills/tools | DERIVED SORT | Display can sort by group/category/name. |
| Related projects/articles | ORDER BY REFERENCE ARRAY | Manual related lists use editorial priority. |
| Project collections | DERIVED SORT | Publication/readiness and future UI contract decide. No `project.order` field is approved. |
| Article collections | DERIVED SORT | Publish date and route readiness decide. Reading time remains derived. |
| Experience chronology | DERIVED SORT | Current roles first, then date logic unless future contract changes. |
| Tool collections | DERIVED SORT | Category/name and relationship evidence decide. |

## Derived / Code / System Exclusions

Do not model:

- canonical URLs;
- route URLs;
- route state;
- breadcrumbs;
- robots/indexability;
- sitemap eligibility;
- structured-data JSON;
- reading time;
- `sys.id`, created date, updated date, version, or publish state;
- site origin, environment IDs, runtime flags, deployment configuration, or secrets;
- icon component names, CSS classes, brand colors, presentation variants;
- public-safety booleans;
- Media wrapper type;
- page-builder or section-builder fields.

## OD Review

| Decision | Starting State | Proposed Outcome | Current Status |
|---|---|---|---|
| OD-06 | PROPOSED / OPEN | SkillGroup remains a small flat v1 grouping type; membership and order live on `skillGroup.skills`; no nested groups; each Skill should appear in one primary group by editorial rule. | RESOLVED / APPROVED |
| OD-12 | PROPOSED / OPEN | No dedicated taxonomy type; no nested taxonomy; lean controlled values for route/category/status fields; freeform tags only where intentional; SkillGroup is capability grouping, not a generic taxonomy. | RESOLVED / APPROVED |
| OD-13 | PROPOSED / OPEN | Use a hybrid strategy: explicit authored references where editor intent matters, plus derived reverse relationships where duplicate authoring would drift. | RESOLVED / APPROVED |

OD-01, OD-02, OD-03, OD-04, OD-05, OD-09, OD-10, and OD-14 remain open content-authoring decisions. OD-06, OD-07, OD-08, OD-11, OD-12, OD-13, and OD-15 remain RESOLVED / APPROVED.

## Evidence Limitations

- No Contentful command was run and no live CMS state was read while approving this Batch 02.4 contract.
- The RE2-corrected migration was approved after Batch 02.5 and executed successfully in `dev` during Batch 02.6.
- Successful type creation does not yet prove every validation or editor interface; full live comparison remains Batch 02.7.
- No fixtures, frontend adapters, or route implementations were created.
- Cross-field validations may require application/editorial enforcement if Contentful schema validation cannot express them directly.

## Migration Handoff

Batch 02.5 records approved RE2-corrected migration syntax, migration diff, and non-mutating preflight evidence.

| Area | Batch 02.5 Approved RE2-Corrected Result |
|---|---|
| Types | Removed legacy `seoMetadata`; added approved `tool`; kept approved type IDs. |
| Fields | Aligned to `FIELD-ID-LEDGER.md`; removed legacy derived/code-owned fields. |
| References | Implemented externally approved authored references and target restrictions. |
| Validations | Implemented approved regex, enum, size, URL, asset, and link-type validations where the migration API supports them. |
| Display fields | Set display fields from this contract. |
| Editor guidance/interface | Added concise field help and widgets where supported. |
| SEO legacy | Replaced `seo` references with owning-type SEO fields. |
| Derived values | Did not implement reading time, canonical URL, route path, robots, sitemap, breadcrumbs, or structured data fields. |
| Safety | Batch 02.6 execution succeeded in `dev`; its authorization is consumed and additional bootstrap execution is not authorized. |
