# Route Contract

Status: Phase 01 / Batch 01.2 — APPROVED / FROZEN FOR PHASE 02 INPUT
Owner: Phase 01 — Content Strategy + Route Contract
Source strategy: `docs/system/CONTENT-STRATEGY.md`

## Purpose

This is the canonical surface for v1 route inventory, route purpose, visitor intent, content responsibility, state expectations, ownership boundaries, internal linking, responsive intent, accessibility intent, directional SEO intent, and future CMS implications before Contentful data is integrated.

This document does not define Contentful field IDs, React component APIs, migration code, static fixtures, SEO implementation, or a CMS-driven page builder.

## Route-Contract Principles

- A route defines user intent and content responsibility.
- A route does not define Contentful field IDs.
- A route does not define React component APIs.
- A route does not become a CMS-driven page builder.
- Routes consume CMS-agnostic page data after later adapter normalization.
- Static fixtures remain the bridge until Contentful parity work is explicitly approved.
- Page composition remains code-owned in v1.

Ownership rule:

```text
CMS owns editorial meaning.
Code owns behavior.
Derived data owns what can be reliably calculated.
```

## Formal V1 Route Inventory

| Route | Type | Status |
|---|---|---|
| `/` | Landing | APPROVED V1 |
| `/about` | Narrative | APPROVED V1 |
| `/work` | Narrative / Collection hybrid | APPROVED V1 |
| `/projects` | Collection | APPROVED V1 |
| `/projects/[slug]` | Detail | APPROVED V1 |
| `/writing` | Collection | APPROVED V1 |
| `/writing/[slug]` | Detail | APPROVED V1 |
| `/tools` | Collection / Reference | APPROVED V1 |
| `/contact` | Utility / Conversion | APPROVED V1 |

## Batch 01.2 Approval

Status: APPROVED

External validation: PASS

The v1 route contract is approved for:

- `/`
- `/about`
- `/work`
- `/projects`
- `/projects/[slug]`
- `/writing`
- `/writing/[slug]`
- `/tools`
- `/contact`

The contract establishes:

- route purpose
- audience intent
- required and optional content
- route responsibility boundaries
- CMS/code/derived ownership
- route states
- content-readiness expectations
- internal-link relationships
- responsive intent
- accessibility intent
- directional SEO intent
- directional future CMS implications

Detailed SEO and metadata behavior is approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

No Contentful model or migration work was authorized by this approval.

Implementation-facing content requirements are now tracked in `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`.

Approved supporting decisions:

- `/tools` is preferred over `/uses`.
- The logo/name links to `/`.
- Home does not need a primary-navigation label.
- Résumé is a downloadable PDF, not a standalone `/resume` route.
- `/blog`, `/services`, `/page/[slug]`, generic CMS pages, and CMS-driven page composition are not v1 routes.

## Route Responsibility Boundaries

| Boundary | Route responsibility |
|---|---|
| Home vs deeper routes | Home provides curated summaries and conversion paths. Deeper routes own fuller canonical content. |
| About vs Work | About owns professional narrative, philosophy, evolution, values, and approach. Work owns employment context, responsibilities, outcomes, and career progression. |
| Work vs Projects | Work answers where and when contribution happened. Projects answer how specific problems were approached, solved, and evidenced. |
| Projects index vs detail | `/projects` owns discovery and summary. `/projects/[slug]` owns the full public-safe case study. |
| Writing index vs detail | `/writing` owns article discovery and previews. `/writing/[slug]` owns one complete public article. |
| Skills vs Tools | RESOLVED / APPROVED by Batch 01.4. Skill = professional capability. Tool = product, platform, framework, technology, or software used to exercise that capability. Exact Tool Contentful representation remains deferred to Phase 02. |
| Contact vs social links | `/contact` owns the conversion context. Social links are reused contact/profile data. |

## Route State Vocabulary

| State | Meaning |
|---|---|
| READY | The route has enough eligible content to fulfill its purpose and answer its primary visitor question. |
| EMPTY | The route exists but has no eligible collection content. |
| MISSING | A resource identifier such as a slug does not resolve to public content. |
| DRAFT / PREVIEW | Editorial content exists but is not part of normal public delivery. Preview security is deferred. |
| ERROR | A controlled application or data failure state. UI implementation is deferred. |

## Route State Matrix

| Route | Ready | Empty | Missing | Draft / Preview | Error |
|---|---:|---:|---:|---:|---:|
| `/` | Yes | N/A | N/A | N/A | Yes |
| `/about` | Yes | N/A | N/A | N/A | Yes |
| `/work` | Yes | Yes | N/A | N/A | Yes |
| `/projects` | Yes | Yes | N/A | N/A | Yes |
| `/projects/[slug]` | Yes | N/A | Yes | Yes | Yes |
| `/writing` | Yes | Yes | N/A | N/A | Yes |
| `/writing/[slug]` | Yes | N/A | Yes | Yes | Yes |
| `/tools` | Yes | Yes | N/A | N/A | Yes |
| `/contact` | Yes | N/A | N/A | N/A | Yes |

## Content Readiness

A route is content-ready when, where applicable:

- required content exists
- required intended relationships resolve
- public-safety requirements pass
- required meaningful media has accessibility metadata
- the route has enough content to answer its primary visitor question
- public, draft, preview, and missing states are unambiguous
- internal links have valid intended destinations

API success alone is not route readiness.

## Internal Linking Contract

| Origin | Destination | Relationship | Intent |
|---|---|---|---|
| `/` | `/projects` | Primary proof path | Move from positioning to case-study evidence |
| `/` | `/work` | Experience path | Show professional context and progression |
| `/` | `/writing` | Authority path | Show thinking, documentation, and expertise |
| `/` | `/contact` | Conversion path | Enable role or collaboration contact |
| `/about` | `/work` | Narrative to experience | Connect story to employment evidence |
| `/about` | `/projects` | Narrative to proof | Connect approach to concrete work |
| `/about` | `/contact` | Conversion | Continue a professional conversation |
| `/work` | `/projects/[slug]` | Related evidence | Connect roles to specific problem/solution examples |
| `/work` | `/contact` | Conversion | Invite relevant role or collaboration contact |
| `/projects` | `/projects/[slug]` | Collection to detail | Let visitors inspect a case study |
| `/projects/[slug]` | `/projects/[slug]` | Related projects | Continue case-study exploration when editorially relevant |
| `/projects/[slug]` | `/writing/[slug]` | Related writing | Connect implementation evidence to explanatory writing |
| `/projects/[slug]` | `/contact` | Conversion | Convert after proof review |
| `/writing` | `/writing/[slug]` | Collection to detail | Let visitors read a full article |
| `/writing/[slug]` | `/writing/[slug]` | Related writing | Continue topical exploration when relevant |
| `/writing/[slug]` | `/projects/[slug]` | Related projects | Connect concepts to proof of work when relevant |
| `/writing/[slug]` | `/contact` | Contextual conversion | Convert when article context supports it |
| `/tools` | `/projects/[slug]` | Tool to proof | Show where tools supported real work |
| `/tools` | `/work` | Tool to experience | Connect tools to professional context |
| `/contact` | résumé PDF | Supporting evidence | Provide portable career context |
| `/contact` | LinkedIn | External professional contact | Support professional follow-up |
| `/contact` | GitHub | External technical evidence | Support technical review |

Related-content behavior may remain editorial/manual until a later decision resolves manual vs derived relationships. Do not create an automated related-content engine in Batch 01.2.

## Global Responsive Intent

| Viewport intent | Contract |
|---|---|
| Small | Stacked, simplified, clear hierarchy, primary content visible, primary CTA available, meaningful content preserved, secondary metadata may collapse. |
| Medium | Related content may be grouped; two-column layouts may appear when relationships are clear; semantic reading order must be preserved. |
| Large | Full editorial layout, richer media, expanded supporting context, stronger visual relationships, and more spacious presentation. |

Responsive presentation may change. Meaningful content required to understand the route must remain available.

## Global Accessibility Intent

- Use one clear primary page heading per route.
- Preserve logical heading hierarchy.
- Use descriptive links and meaningful CTA labels.
- Require alt text for meaningful media.
- Treat decorative media as decorative.
- Keep content order understandable independent of visual layout.
- Do not convey critical meaning only by color, icon, or position.

Accessibility code implementation is deferred.

## SEO Boundary

Batch 01.2 records only route-level SEO intent.

Batch 01.3 owns:

- title patterns
- description rules
- canonical behavior
- Open Graph behavior
- structured-data decisions
- metadata fallback/override logic

Batch 01.3 approved this behavior in `docs/system/SEO-AND-METADATA-CONTRACT.md`. OD-15 is RESOLVED / APPROVED by that contract.

## Future CMS Implication Boundary

Allowed in this document:

- route-to-content-domain implications
- reusable content needs
- editorial selection needs
- derived values likely required
- code-owned composition behavior
- Phase 02 or Content Requirements Matrix inputs

Not allowed in this document:

- Contentful field IDs
- Contentful JSON schema
- migration code
- reference validations
- generic `page` or `pageSection` modeling
- React component props

## Route: `/`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Landing

### Purpose

Provide a curated summary route for professional positioning, credibility, selected proof of work, experience evidence, writing authority, capabilities, and conversion.

The homepage is not the canonical source for full project, work, article, or skills content.

### Primary Audience

- CMS / content leaders
- Hiring managers

### Secondary Audience

- Engineering leaders
- Recruiters
- Marketing leaders

### Primary Visitor Question

Who is this person, what do they specialize in, and why should I continue exploring their work?

### Primary CTA

View projects / case studies. Exact UI label remains implementation-owned.

### Secondary CTA

Explore work or get in touch. Final secondary CTA copy remains implementation-owned.

### Required Content

- professional positioning
- short professional summary
- credibility/proof evidence
- featured projects
- experience snapshot
- writing highlights
- core skills/expertise
- clear contact/conversion path

### Optional Content

- selected tools
- availability
- recent learning
- secondary About CTA
- public-safe proof metrics

### Content Domains Consumed

- personal profile
- projects / case studies
- work / experience
- writing / articles
- skills
- tools / stack
- contact information
- navigation
- social links
- SEO metadata planning input

### Content Ownership

#### CMS-owned later

Profile meaning, professional title, summary copy, featured-project selection, writing highlight selection or eligibility, experience summary content, skill/tool labels, contact copy, and route-specific SEO editorial meaning.

#### Code-owned

Section order, layout, presentation, responsive behavior, component selection, animation, empty/error display, CTA placement, and visual hierarchy.

#### Derived

Route path, canonical URL, breadcrumbs if used, freshness labels where reliable, and relationships that can be calculated safely from later normalized data.

### Reuse Rules

Reuse canonical profile, project previews, article previews, experience summaries, skill/tool concepts, social links, and contact CTA. Do not create homepage-only duplicate identity or content sources.

### Route Composition Intent

Sequence content from positioning to proof to deeper exploration to conversion. Keep summary content concise and route visitors to canonical deeper routes for detail.

### Route States

#### Ready

Profile, positioning, at least one proof path, and contact path are available.

#### Empty

Not applicable.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public homepage delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links strategically to `/projects`, `/work`, `/writing`, `/about` where useful, and `/contact`.

### Responsive Intent

#### Small

Stack sections, keep positioning and primary CTA visible early, preserve project/writing/work paths, collapse secondary metadata when needed.

#### Medium

Group proof, experience, and writing summaries where relationships are clear.

#### Large

Allow richer editorial layout, expanded supporting context, and stronger relationships between proof sections.

### Accessibility Intent

Use a clear primary heading, meaningful CTA labels, descriptive links to deeper routes, and meaningful alt text for profile or project media.

### SEO Intent

Professional identity and broad portfolio discovery. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Profile, Project preview, Article preview, Experience summary, Skill/Skill Group, Tool, Contact, Social Link, and SEO metadata domains. It may require editorially controlled featured-project selection and possibly writing highlight selection. This is Content Requirements Matrix and Phase 02 input only.

### Deferred Behavior

Final CTA labels, exact proof metrics, automated freshness logic, dynamic personalization, and SEO metadata implementation.

### Open Decisions

- OD-01 — canonical positioning sentence
- OD-09 — homepage featured projects
- OD-14 — public-safe homepage proof metrics

## Route: `/about`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Narrative

### Purpose

Own the professional narrative behind the résumé: career evolution, differentiation, CMS philosophy, frontend philosophy, content-operations philosophy, AI/automation philosophy, collaboration style, learning approach, and values.

### Primary Audience

- CMS / content leaders
- Hiring managers

### Secondary Audience

- Engineering leaders
- Recruiters
- Technical peers

### Primary Visitor Question

What shaped this person's expertise and how do they approach their work?

### Primary CTA

Explore work.

### Secondary CTA

View projects or get in touch.

### Required Content

- professional story
- positioning
- core expertise
- differentiation
- working philosophy
- career direction

### Optional Content

- personal interests
- certifications
- learning history
- values
- career-transition context

### Content Domains Consumed

- personal profile
- work / experience
- skills
- tools / stack where relevant
- learning / certifications
- social links
- contact information

### Content Ownership

#### CMS-owned later

Profile meaning, bio, professional story, philosophy copy, values, selected supporting experience references, certification/learning summaries where included, and contact/social meaning.

#### Code-owned

Narrative layout, section order, media placement, responsive behavior, CTA placement, and presentation of optional context.

#### Derived

Route path, canonical URL, breadcrumbs if used, and reliable links to related Work or Projects content.

### Reuse Rules

Consume the canonical profile rather than creating an About-only identity source. Reuse work, skill, tool, and contact concepts only where they support the narrative.

### Route Composition Intent

Move from identity and story to philosophy, differentiation, working style, learning, and next-step links. Avoid résumé duplication.

### Route States

#### Ready

Canonical profile and sufficient narrative content exist to explain expertise and approach.

#### Empty

Not applicable.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public About delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to `/work`, `/projects`, and `/contact`. May link to relevant writing when it supports professional philosophy.

### Responsive Intent

#### Small

Maintain readable narrative flow with stacked sections and clear CTA paths.

#### Medium

Group narrative with supporting context or selected proof where useful while preserving reading order.

#### Large

Allow richer supporting context and media, but keep the narrative readable and focused.

### Accessibility Intent

Use clear headings for story, philosophy, and supporting context. Avoid generic link text and ensure any portrait or meaningful media has useful alt text.

### SEO Intent

Professional background and expertise discovery. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Profile, Experience summary, Skill, Tool, Certification/Learning, Social Link, Contact, and SEO metadata domains. It may need editorial guidance for distinguishing short bio, long bio, and About narrative. This is Content Requirements Matrix input only.

### Deferred Behavior

Final certification representation, personal-interest depth, and structured-data behavior.

### Open Decisions

- OD-02 — secondary professional title / specialty
- OD-03 — desired work type
- OD-11 — certification representation

## Route: `/work`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Narrative / Collection hybrid

### Purpose

Own professional employment context and career progression.

`/work` answers where this person contributed, in what role, at what scale, and with what professional impact.

`/projects` answers how this person approached and solved specific problems.

### Primary Audience

- CMS / content leaders
- Hiring managers

### Secondary Audience

- Engineering leaders
- Recruiters

### Primary Visitor Question

Where did this person contribute, in what role, at what scale, and with what professional impact?

### Primary CTA

View related projects.

### Secondary CTA

Get in touch.

### Required Content

- company
- role
- dates
- summary
- responsibilities
- achievements
- tools / technologies
- CMS / platform where relevant

### Optional Content

- employment type
- location
- credible metrics
- related projects
- related articles
- company URL
- logo
- markets/team scale

### Content Domains Consumed

- work / experience
- projects / case studies
- writing / articles where relevant
- skills
- tools / stack
- contact information
- SEO metadata planning input

### Content Ownership

#### CMS-owned later

Experience meaning, role summaries, responsibilities, achievements, dates, public-safe company context, related project/article selections, tools/technology labels, and route-specific SEO editorial meaning.

#### Code-owned

Timeline/list layout, grouping, filtering if later approved, responsive presentation, empty/error display, and CTA placement.

#### Derived

Date ordering, duration if reliable, route path, canonical URL, breadcrumbs if used, and relationship labels where derivable from later normalized data.

### Reuse Rules

Reuse canonical Experience entries and connect to Projects only when the relationship clarifies evidence. Do not duplicate full case-study content inside Work.

### Route Composition Intent

Present professional context, responsibilities, achievements, and progression. Earlier creative/photography experience may be condensed. Full career-transition story belongs primarily to `/about`.

### Route States

#### Ready

At least one public-safe experience item exists with enough context to show role and impact.

#### Empty

Show intentional route-level empty behavior if no public experience content is eligible. Do not invent final UI copy.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public Work collection delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to related `/projects/[slug]` where relevant and `/contact`. May link to related writing when it clarifies professional context.

### Responsive Intent

#### Small

Stack experience items, preserve role/date/company context, and keep achievements readable.

#### Medium

Group role metadata and achievements where relationships are clear.

#### Large

Allow fuller timeline or grouped professional context while preserving semantic order.

### Accessibility Intent

Use a logical heading hierarchy for roles and companies. Dates and outcomes must remain understandable without relying only on visual timeline position.

### SEO Intent

Professional experience and CMS/content operations career evidence. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Experience, Skill, Tool, Project, Article, Contact, and SEO metadata domains. It may need public-safe relationship guidance between roles and projects. This is Content Requirements Matrix input only.

### Deferred Behavior

Filtering, complex timeline interaction, confidential employer details, and exact metrics.

### Open Decisions

- OD-10 — public-safe enterprise projects
- OD-13 — manual vs derived related content
- OD-14 — public-safe homepage/proof metrics where experience evidence overlaps

## Route: `/projects`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Collection

### Purpose

Own portfolio discovery and case-study navigation.

### Primary Audience

- CMS / content leaders
- Hiring managers

### Secondary Audience

- Engineering leaders
- Technical peers
- Recruiters

### Primary Visitor Question

What has this person built, improved, migrated, standardized, or helped deliver?

### Primary CTA

Open a project case study.

### Secondary CTA

Explore work or get in touch.

### Required Content

- title
- summary
- project type
- role/context
- primary expertise
- relevant technology/tool indicators
- outcome summary where useful
- detail-route link

### Optional Content

- hero/thumbnail image
- featured status
- tags
- related experience
- related writing
- public-safe metric

### Content Domains Consumed

- projects / case studies
- skills
- tools / stack
- work / experience
- writing / articles
- SEO metadata planning input

### Content Ownership

#### CMS-owned later

Project preview meaning, public-safe summaries, project type, role/context, expertise labels, technology/tool indicators, outcome summaries, featured/curated status where used, and route-specific SEO editorial meaning.

#### Code-owned

Collection layout, card/list presentation, sorting display, optional filtering UI if later approved, empty/error display, and route composition.

#### Derived

Route path, canonical URL, project detail URLs, breadcrumbs if used, sort order if reliably derived, and counts if needed.

### Reuse Rules

Reuse canonical Project content as previews. Do not duplicate full case-study body content on the index.

### Route Composition Intent

Support discovery through concise project previews and clear navigation to detail routes. Do not require filters for v1 readiness.

### Route States

#### Ready

At least one public-safe project preview exists and links to a valid intended detail route.

#### Empty

Show intentional route-level empty behavior if no public projects exist. Do not invent final UI copy.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public project collection delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to `/projects/[slug]`. May link to `/work`, `/writing`, or `/contact` as supporting paths.

### Responsive Intent

#### Small

Stack previews with title, summary, and clear detail links.

#### Medium

Group previews in a scannable layout while preserving readable content order.

#### Large

Allow richer preview layouts and supporting metadata when content volume justifies it.

### Accessibility Intent

Project preview links must be descriptive. Meaningful project images require alt text. Tags and metadata must not be the only way to understand project relevance.

### SEO Intent

Portfolio and case-study discovery. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Project preview, Skill, Tool, Experience relationship, Article relationship, and SEO metadata domains. Filtering is optional/deferred unless content volume validates it. This is Content Requirements Matrix input only.

### Deferred Behavior

Search, complex filtering, automated related-content engine, final sort logic, and final featured-project selection.

### Open Decisions

- OD-09 — homepage featured projects
- OD-10 — public-safe enterprise projects
- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content

## Route: `/projects/[slug]`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Detail

### Purpose

Own the complete public-safe case-study narrative and serve as high-priority hiring evidence.

### Primary Audience

- CMS / content leaders
- Hiring managers

### Secondary Audience

- Engineering leaders
- Technical peers

### Primary Visitor Question

How did this person think through the problem, what did they own, what did they do, and what changed as a result?

### Primary CTA

Get in touch or view another related case study, depending on context.

### Secondary CTA

Read related writing or return to all projects.

### Required Content

- title
- summary
- project type
- status
- role
- problem
- constraints
- responsibilities
- approach
- process
- solution
- outcomes
- lessons learned
- hero image
- tags
- SEO metadata requirement

### Optional Content

- organization/client
- timeline
- team
- architecture
- CMS
- frontend stack
- tools
- challenges
- metrics
- screenshots
- gallery
- repository
- live URL
- related writing
- related experience

### Content Domains Consumed

- projects / case studies
- skills
- tools / stack
- work / experience
- writing / articles
- SEO metadata
- media
- contact information

### Content Ownership

#### CMS-owned later

Public-safe case-study meaning, narrative sections, project metadata, media meaning and alt text, related project/writing/experience selections where editorial, tags/categories if used, and route-specific SEO editorial meaning.

#### Code-owned

Case-study template, section order, presentation, responsive behavior, media gallery behavior, not-found/error presentation, and preview UI behavior when later implemented.

#### Derived

Route path from slug, canonical URL, breadcrumbs, related links where reliably calculated, and reading/progress indicators only if later justified.

### Reuse Rules

Reuse canonical Project content from preview through detail. Related writing, related experience, skills, and tools should support the case study and not duplicate unrelated content.

### Route Composition Intent

Move from summary and context into problem, constraints, responsibility, approach, solution, outcomes, and lessons learned. Confidential details may be anonymized, generalized, or recreated.

### Route States

#### Ready

The project is public-safe, complete enough to answer the visitor question, and available through normal public delivery.

#### Empty

Not applicable.

#### Missing

Unknown public slug resolves to deliberate not-found behavior. Implementation is deferred.

#### Draft / Preview

Draft or unpublished project content must not be available through normal public delivery. Preview authentication belongs to a later phase.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to related projects, related writing, related work context, `/projects`, and `/contact` when appropriate.

### Responsive Intent

#### Small

Keep problem, role, approach, and outcome readable in a stacked narrative. Media may simplify but meaningful content remains available.

#### Medium

Group project metadata and narrative sections where relationships are clear.

#### Large

Allow richer case-study layout, supporting media, and expanded context without hiding core narrative.

### Accessibility Intent

Use clear section headings, descriptive links, accessible media alt text, and content order that makes sense without visual layout. Case-study metrics must be understandable as text.

### SEO Intent

Public-safe case-study discovery and proof of CMS/content systems capability. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Project detail, media/asset, Skill, Tool, Experience, Article, Contact, and SEO metadata domains. It may require public-safety review workflow and editorial related-content selections. This is Phase 02 and Content Requirements Matrix input only.

### Deferred Behavior

Preview authentication, screenshot/gallery implementation, structured data, final SEO behavior, automated related-content engine, and confidential evidence approval workflow.

### Open Decisions

- OD-10 — public-safe enterprise projects
- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content

## Route: `/writing`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Collection

### Purpose

Own discovery of professional writing.

### Primary Audience

- CMS / content leaders
- Hiring managers

### Secondary Audience

- Engineering leaders
- Technical peers
- Content operations teams

### Primary Visitor Question

What does this person understand deeply enough to explain, document, teach, or analyze?

### Primary CTA

Read an article.

### Secondary CTA

View related projects or get in touch.

### Required Content

- title
- excerpt
- publish date
- content pillar/category
- tags
- article detail link

### Optional Content

- hero image
- reading time
- featured status
- related project
- updated date

### Content Domains Consumed

- writing / articles
- projects / case studies
- skills
- tools / stack
- SEO metadata planning input

### Content Ownership

#### CMS-owned later

Article preview meaning, manual excerpts, publish dates, category/pillar labels, tags, featured status where used, related project selection where editorial, and route-specific SEO editorial meaning.

#### Code-owned

Collection layout, sort/display behavior, optional filtering UI if later approved, empty/error display, and route composition.

#### Derived

Route path, canonical URL, article detail URLs, reading time where reliable, breadcrumbs if used, and sort order where based on dates.

### Reuse Rules

Reuse canonical Article content as previews. Do not duplicate full article bodies on the index.

### Route Composition Intent

Support writing discovery with concise previews and clear article links. Search and complex taxonomy are deferred.

### Route States

#### Ready

At least one published and quality-approved article preview exists and links to a valid intended detail route.

#### Empty

Show intentional route-level empty behavior if no public articles exist. Do not invent final UI copy.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public writing collection delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to `/writing/[slug]`. May link to related `/projects/[slug]` when relevant and `/contact` when context supports conversion.

### Responsive Intent

#### Small

Stack article previews with title, excerpt, date, and clear detail links.

#### Medium

Group previews and metadata while preserving reading order.

#### Large

Allow richer editorial browsing and supporting context when article volume justifies it.

### Accessibility Intent

Article links must be descriptive. Dates and tags must be text-readable. Meaningful media requires alt text.

### SEO Intent

Professional knowledge discovery. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Article preview, Project relationship, Skill/Tool labeling, and SEO metadata domains. Search, filtering, and complex taxonomy remain deferred unless content volume validates them. This is Content Requirements Matrix input only.

### Deferred Behavior

Search, complex taxonomy, filtering, automated related-content engine, final featured logic, and detailed metadata behavior.

### Open Decisions

- OD-05 — SEO, Accessibility & Content Quality pillar validation
- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content

## Route: `/writing/[slug]`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Detail

### Purpose

Own one public long-form article.

### Primary Audience

- CMS / content leaders
- Engineering leaders
- Technical peers

### Secondary Audience

- Hiring managers
- Content operations teams
- Recruiters

### Primary Visitor Question

What useful insight, method, lesson, system, or technical knowledge can this person contribute?

### Primary CTA

Read related writing or related project evidence where relevant.

### Secondary CTA

Get in touch when the article context supports professional follow-up.

### Required Content

- title
- excerpt/summary
- publish date
- author context
- content pillar/category
- tags
- article body
- SEO metadata requirement

### Optional Content

- updated date
- hero image
- table of contents
- references
- code examples
- related articles
- related projects
- reading time

### Content Domains Consumed

- writing / articles
- personal profile for author context
- projects / case studies where relevant
- skills
- tools / stack
- SEO metadata
- media
- contact information

### Content Ownership

#### CMS-owned later

Article meaning, body content, manual excerpt, publish/update dates, author context, category/pillar labels, tags, references, media meaning and alt text, related article/project selections where editorial, and route-specific SEO editorial meaning.

#### Code-owned

Article template, body rendering behavior, table-of-contents presentation if used, code-example presentation, not-found/error display, and preview UI behavior when later implemented.

#### Derived

Route path from slug, canonical URL, breadcrumbs, reading time where reliable, related links where safely calculated, and updated-status display where based on dates.

### Reuse Rules

Reuse canonical Article content for both preview and detail. Reuse canonical Profile for author context. Related projects should support the article topic rather than create a generic recommendation engine.

### Route Composition Intent

Lead with title, summary, date/context, then the article body. Supporting related content comes after the primary article unless implementation later proves another pattern.

### Route States

#### Ready

The article is published, quality-approved, and available through normal public delivery.

#### Empty

Not applicable.

#### Missing

Unknown public slug resolves to deliberate not-found behavior. Implementation is deferred.

#### Draft / Preview

Draft or experimental article content must not be available through normal public delivery. Preview authentication belongs to a later phase.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to related writing, related projects where relevant, `/writing`, and `/contact` when appropriate.

### Responsive Intent

#### Small

Keep article content readable, stack metadata, preserve code/example readability, and avoid hiding meaningful article content.

#### Medium

Group metadata and optional navigation aids where useful while preserving reading order.

#### Large

Allow richer article layout, optional table of contents, supporting references, and related content after the primary body.

### Accessibility Intent

Use a clear article heading, logical content headings, descriptive links, accessible code examples, and meaningful alt text for article media.

### SEO Intent

Topic-level authority and professional knowledge discovery. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Article detail, Profile, Project relationship, Skill/Tool labels, media/asset, and SEO metadata domains. It may need editorial related-content selections and body content guidance. This is Phase 02 and Content Requirements Matrix input only.

### Deferred Behavior

Preview authentication, structured data, canonical implementation, Open Graph rules, complex taxonomy, and manual vs derived related content.

### Open Decisions

- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content

## Route: `/tools`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Collection / Reference

### Purpose

Own the professional technology, platform, and tool inventory. This is not a personal lifestyle `/uses` page.

### Primary Audience

- Hiring managers
- Engineering leaders
- CMS / content leaders

### Secondary Audience

- Recruiters
- Technical peers

### Primary Visitor Question

What technologies and platforms does this person use professionally, and where do they fit into broader capabilities?

### Primary CTA

View related projects or work.

### Secondary CTA

Get in touch.

### Required Content

- tool name
- category
- professional usage context
- relationship to actual work

### Optional Content

- icon/logo
- related project
- related experience
- related skill
- featured status
- external docs link

### Content Domains Consumed

- tools / stack
- skills
- skill groups
- projects / case studies
- work / experience
- writing / articles where relevant
- SEO metadata planning input

### Content Ownership

#### CMS-owned later

Tool meaning, category labels, usage context, relationship to actual work, related project/experience/skill selections where editorial, and route-specific SEO editorial meaning.

#### Code-owned

Grouping layout, collection presentation, icon fallback/display behavior, optional filtering if later approved, empty/error display, and route composition.

#### Derived

Route path, canonical URL, breadcrumbs if used, relationship labels where safely calculated, and counts where needed.

### Reuse Rules

Tools and skills are related but distinct. Skill = professional capability. Tool = product, platform, framework, technology, or software used to exercise that capability. This distinction is RESOLVED / APPROVED by Batch 01.4. Exact Tool Contentful representation remains deferred to Phase 02.

Do not use proficiency percentages, proficiency bars, or a logo grid with no explanatory value.

### Route Composition Intent

Organize tools by professional category and explain usage context. Connect tools to real work when relevant.

### Route States

#### Ready

At least one tool has a category and professional usage context.

#### Empty

Show intentional route-level empty behavior if no tools are eligible. Do not invent final UI copy.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public tools collection delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to related projects and work. May link to related writing when tool usage is explained in an article.

### Responsive Intent

#### Small

Stack tools with category and usage context visible. Avoid icon-only meaning.

#### Medium

Group tools by category while preserving explanatory text.

#### Large

Allow richer reference layout with related evidence and categories.

### Accessibility Intent

Tool names must be text-readable. Icons/logos are decorative unless they convey meaningful content, in which case alt text is required. Do not rely on logo recognition alone.

### SEO Intent

Professional stack and platform capability discovery. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Tool, Skill, Skill Group, Project, Experience, Article, and SEO metadata domains. It may require a content requirements decision about whether tools remain embedded/structured data or become a later standalone model. This is Content Requirements Matrix and Phase 02 input only.

### Deferred Behavior

Final skills/tools taxonomy, standalone Contentful representation, filtering, ratings, hardware, and logo-wall behavior.

### Open Decisions

- OD-06 — final skill-group taxonomy
- OD-12 — taxonomy depth

## Route: `/contact`

### Status

Phase 01 / Batch 01.2 — APPROVED

### Route Type

Utility / Conversion

### Purpose

Own the simplest professional conversion path.

### Primary Audience

- CMS / content leaders
- Hiring managers
- Recruiters

### Secondary Audience

- Engineering leaders
- Potential collaborators

### Primary Visitor Question

How can I contact this person, and what kinds of professional conversations are appropriate?

### Primary CTA

Get in touch.

### Secondary CTA

Access résumé, LinkedIn, or GitHub where appropriate.

### Required Content

- short invitation
- email
- LinkedIn
- GitHub where useful
- availability/context where appropriate
- résumé access where appropriate

### Optional Content

- short profile summary
- role/collaboration context
- expected response guidance
- location/general timezone if later approved

### Content Domains Consumed

- contact information
- personal profile
- social links
- navigation
- downloadable résumé PDF
- SEO metadata planning input

### Content Ownership

#### CMS-owned later

Contact copy, email/contact destination meaning, LinkedIn/GitHub social links, availability/context copy where approved, résumé link meaning, and route-specific SEO editorial meaning.

#### Code-owned

Layout, interaction behavior, external-link handling, copy-to-clipboard behavior if later implemented, empty/error display, and form absence.

#### Derived

Route path, canonical URL, breadcrumbs if used, and external-link labeling where reliably calculated.

### Reuse Rules

Reuse canonical Profile, Social Links, Contact information, and résumé CTA context. Do not create separate contact-only social identity data.

### Route Composition Intent

Provide a low-friction professional contact route with clear channels and appropriate context. Keep it focused and avoid unnecessary personal data collection.

### Route States

#### Ready

At least one primary contact channel, preferably email, is available with supporting professional context.

#### Empty

Not applicable.

#### Missing

Not applicable.

#### Draft / Preview

Not applicable for normal public Contact delivery in this batch.

#### Error

Show controlled failure behavior while preserving navigation and avoiding raw data leakage. UI implementation is deferred.

### Internal Linking

Links to résumé PDF, LinkedIn, GitHub, and relevant profile/work/project context where useful.

### Responsive Intent

#### Small

Keep primary contact action visible, stack channels, and avoid dense supporting text.

#### Medium

Group contact channels with brief context.

#### Large

Allow supporting professional context while keeping contact actions primary.

### Accessibility Intent

Use descriptive link labels for email, LinkedIn, GitHub, and résumé. Avoid relying on icons alone. Do not require a form for v1.

### SEO Intent

Professional contact and hiring/collaboration discovery. Contact is currently intended to be indexable. Detailed metadata rules are approved in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

### Future CMS Implications

This route consumes Contact, Profile, Social Link, résumé asset/link, and SEO metadata domains. Contact form modeling is deferred and must not be introduced through route-contract work.

### Deferred Behavior

Contact form, phone number, residential address, private contact information, unnecessary personal data collection, and detailed structured data.

### Open Decisions

- OD-03 — desired work type

## Route-Level SEO Intent Summary

| Route | SEO intent |
|---|---|
| `/` | Professional identity and broad portfolio discovery |
| `/about` | Professional background and expertise discovery |
| `/work` | Professional experience and CMS/content operations career evidence |
| `/projects` | Portfolio and case-study discovery |
| `/projects/[slug]` | Public-safe case-study discovery and proof of CMS/content systems capability |
| `/writing` | Professional knowledge discovery |
| `/writing/[slug]` | Topic-level authority and professional knowledge discovery |
| `/tools` | Professional stack and platform capability discovery |
| `/contact` | Professional contact and hiring/collaboration discovery |

## Future CMS Implications Summary

| Route | Directional implication |
|---|---|
| `/` | Needs reusable profile, featured projects, writing highlights, experience snapshot, skills/tools, contact, and route SEO inputs. |
| `/about` | Needs canonical profile, long-form narrative, values/philosophy, optional learning/certification context, and route SEO inputs. |
| `/work` | Needs experience content, public-safe company/role context, related project/article links, skills/tools labels, and route SEO inputs. |
| `/projects` | Needs project preview content, public-safe summaries, optional featured/filter metadata, and route SEO inputs. |
| `/projects/[slug]` | Needs full project narrative, public-safe media, related content, tags/categories where justified, and route SEO inputs. |
| `/writing` | Needs article previews, manual excerpts, publish dates, tags/categories where justified, and route SEO inputs. |
| `/writing/[slug]` | Needs full article content, author context, media/accessibility metadata, related content, and route SEO inputs. |
| `/tools` | Needs tool inventory, category/context rules, relationships to skills/projects/work, and route SEO inputs. |
| `/contact` | Needs contact copy/channels, social links, résumé access, profile context, and route SEO inputs. |

These route-contract implications are now carried into the approved `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`. Batch 01.5 — Phase 01 Validation + Freeze — is approved, Batch 02.1 is approved, and Batch 02.2 is next. They remain directional Phase 02 inputs and do not change content-model ledgers.

## Deferred Behavior

- detailed SEO metadata contract
- canonical implementation
- Open Graph rules
- structured data
- Contentful schema design
- Contentful field IDs
- migrations
- frontend route files
- React components
- static fixtures
- preview authentication
- empty/not-found/error UI implementation
- search
- complex filtering
- automated related-content engine
- contact form
- generic page builder
- CMS-driven component composition

## Open Decisions

Existing open decisions remain visible in `docs/system/CONTENT-STRATEGY.md`.

Resolved route decision:

| ID | Status |
|---|---|
| OD-07 — Final formal v1 route contract | RESOLVED / APPROVED by this route contract and external Batch 01.2 validation. |

Resolved downstream route-related decision:

| ID | Status |
|---|---|
| OD-08 — Skills vs Tools semantic boundary | RESOLVED / APPROVED by Batch 01.4 external validation. Skill = professional capability; Tool = product, platform, framework, technology, or software used to exercise a capability. Exact Tool Contentful representation remains deferred to Phase 02. |

Route-adjacent decisions still unresolved:

- OD-09 — which three projects become homepage features
- OD-10 — which enterprise projects are safely publishable
- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content
- OD-14 — public-safe homepage proof metrics

Unrelated open decisions intentionally not resolved:

- OD-01 — canonical one-sentence positioning statement
- OD-02 — secondary professional title / specialty
- OD-03 — desired work type
- OD-04 — final status of AI-Assisted Workflows & Automation pillar
- OD-05 — final status of SEO, Accessibility & Content Quality pillar
- OD-06 — final skill-group taxonomy
- OD-11 — certification representation

Resolved downstream decision:

- OD-15 — SEO overrides vs generated defaults: RESOLVED / APPROVED by `docs/system/SEO-AND-METADATA-CONTRACT.md`.
