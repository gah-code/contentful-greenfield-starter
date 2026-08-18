# Phase 01 — Content Strategy + Route Contract

Status: COMPLETE / FROZEN
Owner: repository maintainer

## Goal

Define what the website needs to communicate before finalizing CMS fields, frontend templates, adapters, route contracts, or live Contentful integration.

Phase 01 turns content strategy into controlled project truth, then converts that strategy into route, metadata, and content-requirement contracts.

## Scope

- mission and professional positioning
- audience model
- brand voice and language rules
- content pillars
- v1 content domains
- preliminary route inventory
- homepage priorities
- profile, experience, project, writing, skills, tools, navigation, and contact strategy
- CMS-owned vs code-owned boundaries
- content reuse rules
- editorial lifecycle
- static fixture requirements
- accessibility content rules
- responsive content intent
- localization intent
- privacy/confidentiality controls
- deferred v1 scope
- assumptions and open decisions

## Out of Scope

- Contentful schema implementation
- content type creation
- field ID changes or field freezes
- migration execution
- bootstrap migration authorization
- export/import execution
- seed content
- static fixture creation
- frontend route implementation
- React components
- Contentful adapters or view models
- SEO implementation or structured-data implementation
- generic page builders
- arbitrary CMS-driven visual component models

## Phase Batches

| Batch | Name | Status |
|---|---|---|
| 01.1 | Content Strategy Foundation | APPROVED |
| 01.2 | Route Contract | APPROVED |
| 01.3 | SEO + Metadata Contract | APPROVED |
| 01.4 | Content Requirements Matrix | APPROVED |
| 01.5 | Phase 01 Validation + Freeze | APPROVED |

## Batch 01.1 — Content Strategy Foundation

Status: APPROVED

### Source Evidence

Batch 01.1 reconciles the completed Phase 01 / Batch 01.1 Content Strategy Foundation Intake Workbook into repository truth.

Canonical strategy surface:

- `docs/system/CONTENT-STRATEGY.md`

Supporting status surfaces:

- `README.md`
- `TASKS.md`
- `docs/PROJECT-STATE.md`
- `docs/IMPLEMENTATION-ROADMAP.md`
- `docs/system/ROUTE-CONTRACT.md`
- `.codex/skills/contentful-greenfield-project-tracker/SKILL.md`

### Website Mission

The site presents professional experience, technical skills, CMS knowledge, projects, writing, thinking process, and creative qualities so hiring teams can understand what was built and how the work was approached.

It also serves as a long-term professional system for consistent building, continued writing, and fresh professional content.

The site is not a generic design portfolio, résumé clone, personal social feed, arbitrary page builder, large publication, or client portal.

### Professional Positioning

| Item | Status | Strategy |
|---|---|---|
| Primary title | APPROVED | Web Content & Marketing Technologist |
| Canonical one-sentence positioning statement | NEEDS FINAL SELECTION | Candidate A and Candidate B remain open |
| Secondary professional title / specialty | TBD | No final answer supplied |
| Desired work type | TBD / non-blocking | Do not infer from target roles |

Target direction: senior-level web content and content systems work with greater ownership across CMS architecture, content operations, frontend implementation, AI-enabled workflows, and digital-platform delivery strategy.

Target roles:

- Content Systems Specialist
- Website Operations Specialist
- CMS Consultant
- Web Content Technologist
- Content Marketing Technologist
- Senior Web Producer
- CMS / Content Operations Lead

### Audience Strategy

| Audience | Status | Priority |
|---|---|---|
| CMS / content leaders | APPROVED | Primary |
| Hiring managers | APPROVED | Secondary |
| Engineering leaders | APPROVED | Secondary |
| Recruiters | Recorded | High |
| Content operations teams | Recorded | High |
| Frontend engineers | Recorded | Medium |
| Marketing leaders | Recorded | Medium |
| Potential clients | Recorded | Low |
| Technical peers | Recorded | Low |

Primary audiences need evidence of complex CMS/content operations, content systems judgment, workflow improvement, governance, migration, and reliable delivery quality.

### Brand Voice

Approved voice inputs: Modern and Engaging.

Rejected voice: Unauthentic.

Supported characteristics: professional, specific, evidence-focused, systems-oriented, clear, credible, and practical.

Preferred language and language exclusions are recorded in `docs/system/CONTENT-STRATEGY.md`.

### Content Pillars

| Pillar | Status |
|---|---|
| CMS Architecture & Content Systems | APPROVED |
| Content Operations, Migration & Governance | APPROVED |
| Frontend & CMS Integration | APPROVED |
| AI-Assisted Workflows & Automation | PROPOSED |
| Technical Writing & Systems Documentation | APPROVED |
| SEO, Accessibility & Content Quality | PROPOSED |

Real project and article inventory should validate whether proposed pillars remain independent pillars or become supporting themes.

### V1 Content Domains

Content domains are strategy categories, not automatic Contentful content types.

Recorded v1 domains:

- site configuration
- navigation
- personal profile
- social links
- work / experience
- projects / case studies
- writing / articles
- skills
- skill groups
- tools / stack
- learning / certifications
- SEO metadata
- contact information

Conditional: reusable calls-to-action, only if later reuse justifies editorial control.

### Preliminary Route Inventory

Batch 01.1 records preliminary route input. Batch 01.2 approved the formal route contract in `docs/system/ROUTE-CONTRACT.md`.

The statuses below are historical Batch 01.1 planning inputs, not the current approved Batch 01.2 route-contract status.

| Route | Status |
|---|---|
| `/` | PROPOSED |
| `/about` | PROPOSED |
| `/work` | PROPOSED |
| `/projects` | PROPOSED |
| `/projects/[slug]` | PROPOSED |
| `/writing` | PROPOSED |
| `/writing/[slug]` | PROPOSED |
| `/tools` | PROPOSED |
| `/contact` | PROPOSED |

Supporting decisions:

- `/tools` is preferred over `/uses`.
- Home does not need a primary-nav label; logo/name links to `/`.
- Résumé is a downloadable PDF rather than a standalone route.
- No additional v1 routes are currently required.

### Homepage Priorities

Preferred order:

1. Hero / positioning
2. Credibility / proof metrics
3. Featured projects
4. Work / experience snapshot
5. Writing highlights
6. Skills / expertise
7. Tools
8. Contact CTA

Homepage must include positioning, professional summary, projects CTA, credibility/evidence, featured projects, experience snapshot, writing highlights, core expertise, and contact CTA.

It must not include the full résumé, every project, every article, exhaustive skill/tool lists, long case-study copy, duplicate deeper-route content, or low-value filler sections.

Preferred homepage project count: 3. Final three projects remain an open fixture/content decision.

### Profile Strategy

Use one canonical profile source with multiple presentation contexts: Home, About, Article author, Contact, SEO/structured data, Footer, and Résumé CTA context.

Important requirements include full name, professional title, short bio, long bio, profile image, résumé link, email, LinkedIn, and GitHub.

### About Strategy

The About page should support professional story, career evolution, CMS philosophy, frontend philosophy, content operations philosophy, AI/automation philosophy, collaboration style, learning approach, and values.

Personal interests are optional and low priority.

The page must not become a résumé dump, duplicate of `/work`, or full case-study collection.

### Work / Experience Strategy

Approved direction: Combination.

Work/Experience should include relevant CMS/web/content/frontend experience, concise summaries, selected achievements, and career progression. It should not copy/paste the résumé.

Earlier photography/creative work may appear in condensed form. Use About for fuller career-transition context.

### Projects / Case Studies Strategy

A project qualifies when it demonstrates a meaningful problem, contribution, approach, technical or operational complexity, outcomes/learning, and public-safe evidence.

Candidate initial projects are recorded in `docs/system/CONTENT-STRATEGY.md`.

Do not finalize homepage featured projects in Batch 01.1.

### Writing Strategy

Writing demonstrates expertise, teaches, documents projects, builds search authority, supports job search, records learning, and builds professional voice.

Representative initial article quantity: 6.

Proposed article titles remain fixture candidates, not published commitments.

### Skills / Tools Strategy

Skills should prove capability through real professional evidence. Do not use subjective proficiency percentages, proficiency bars, or false-precision expertise scores.

Skill grouping status: PROPOSED.

`/tools` is approved as the route. Tools should communicate professional stack, hiring evidence, and connection between tools and actual work. Hardware is deferred.

### Navigation + Contact Strategy

Navigation direction: About, Work, Projects, Writing, Tools, Contact.

Contact CTA: Get in touch.

V1 channels: Email primary, LinkedIn important, GitHub supporting technical evidence.

Contact form: DEFERRED.

### SEO Strategy Input

Batch 01.1 records planning input only. Batch 01.3 owns the formal SEO + Metadata Contract.

Resolved downstream SEO decision: Batch 01.3 uses hybrid SEO ownership. Editorial overrides are limited conceptually to SEO title, SEO description, and social image; technical SEO is code/state-derived.

### Media Rules

Required v1 media: profile photo, project hero image, downloadable résumé PDF.

Optional media: project screenshots, project gallery, diagrams, article hero image, article inline images, public-safe company/project logos.

Deferred media: video.

Meaningful image alt text is required; decorative images use empty alt text.

### CMS-Owned vs Code-Owned

Preserve:

```text
CMS owns meaning.
Code owns behavior.
Derived data owns what can be reliably calculated.
```

CMS later owns editorial meaning such as profile, navigation labels/URLs, social links, projects, featured-project selection, articles, experience, skills, skill groups, tools, contact copy, and entry/route-specific SEO metadata.

Code owns page section order, layout, responsive behavior, component styling, animation, empty-state UI, error-state UI, and global SEO fallback behavior.

Derived data owns reading time, canonical URL, breadcrumbs, route paths, and reliable derived relationships where justified.

### Content Reuse

Canonical reuse rule:

```text
Model the concept once when the meaning is the same;
vary presentation at the route/component layer.
```

Reuse relationships for Profile, Social links, Navigation, Projects, Articles, Experience, Skills, Skill groups, Tools, SEO defaults, and Contact CTA are recorded in `docs/system/CONTENT-STRATEGY.md`.

### Editorial Lifecycle

Preserve:

```text
Draft
-> Review
-> Publish
-> Maintain
-> Archive / Retire
```

Projects, articles, experience, and SEO metadata require higher review. Skills, tools, contact, and profile updates may use lighter review.

One editor is an assumption, not an immutable architecture rule.

### Static Fixture Requirements

Representative fixture targets are recorded in `docs/system/CONTENT-STRATEGY.md`.

Fixture production does not occur in Batch 01.1.

### Content Quality

Summaries should be 1-3 sentences, approximately 30-70 words, and specific/evidence-focused.

Project metrics are preferred when credible and public-safe. Article excerpts are manual. Experience/project dates use month + year. Article dates use full dates. Technology naming uses official capitalization.

### Accessibility Content Rules

Accessibility is part of content quality, not only frontend QA.

Baseline rules include meaningful alt text, decorative empty alt text, descriptive links, logical heading hierarchy, avoiding "click here," transcripts when relevant, captions when relevant, plain language, and not relying on color/icons/position alone.

### Responsive Content Intent

Small viewports stack and simplify while preserving meaningful content. Medium viewports group related content and use two columns when useful. Large viewports can show richer supporting context.

Secondary content may collapse, but meaningful content required to understand the page must remain available.

No frontend breakpoints are created in Batch 01.1.

### Localization

Approved v1 localization: en-US only.

Possible future candidate: Spanish.

Future localization should remain possible without adding it to v1 scope.

### Privacy + Confidentiality

Do not publish credentials, tokens, private environment data, internal URLs, confidential screenshots, customer/employee data, unreleased work, private architecture, proprietary workflows, sensitive analytics, private residential/contact information, or unsupported/confidential metrics.

Use public-safe transformations: anonymize, generalize, recreate diagrams, remove sensitive data, describe problem class + role + approach + outcome, and publish only authorized evidence.

### Deferred Scope

Deferred: localization beyond en-US, testimonials, complex taxonomy, recommendations, related-content engine, search, contact form, video, experimentation / A-B testing, and advanced analytics dashboards.

Out of scope: generic page builder, arbitrary page composition, CMS-driven visual components, newsletter, multiple authors, personalization, comments, and likes/reactions.

Lightweight v1: certifications.

### Assumptions

| ID | Preserved assumption |
|---|---|
| A-01 | en-US only |
| A-02 | one editor sufficient |
| A-03 | no real-time public update requirement |
| A-04 | fixtures temporary, not production source |
| A-05 | Contentful later owns structured editorial content |
| A-06 | page layout code-owned |
| A-07 | project remains under content-type cap |
| A-08 | projects/writing are strongest proof engines |
| A-09 | current route inventory sufficient for v1 |

Assumptions are not validated until their validation gates produce evidence.

### Open Decisions

| ID | Open decision |
|---|---|
| OD-01 | Canonical one-sentence positioning statement |
| OD-02 | Secondary professional title / specialty |
| OD-03 | Desired work type |
| OD-04 | Final status of AI-Assisted Workflows & Automation pillar |
| OD-05 | Final status of SEO, Accessibility & Content Quality pillar |
| OD-06 | Final skill-group taxonomy |
| OD-09 | Which three projects become homepage features |
| OD-10 | Which enterprise projects are safely publishable |
| OD-11 | Certification representation |
| OD-12 | Taxonomy depth |
| OD-13 | Manual vs derived related content |
| OD-14 | Public-safe homepage proof metrics |

Most open decisions belong naturally to later Phase 01 batches and are not Batch 01.1 failures.

### Resolved Decisions

| ID | Resolved decision |
|---|---|
| OD-07 | Final formal v1 route contract was RESOLVED / APPROVED by Phase 01 / Batch 01.2 external validation. Approved v1 routes: `/`, `/about`, `/work`, `/projects`, `/projects/[slug]`, `/writing`, `/writing/[slug]`, `/tools`, `/contact`. |
| OD-08 | Skills vs Tools semantic boundary is RESOLVED / APPROVED by Phase 01 / Batch 01.4 external validation. Skill = professional capability; Tool = product, platform, framework, technology, or software used to exercise a capability. Exact Tool Contentful representation remains deferred to Phase 02. |
| OD-15 | SEO override/default strategy is RESOLVED / APPROVED by Phase 01 / Batch 01.3. SEO uses hybrid ownership: editorial overrides are limited conceptually to title, description, and social image; technical SEO is code/state-derived. Exact Contentful representation remains deferred to Phase 02. |

### Batch 01.1 Evidence Limitations

- Batch 01.1 documents strategy only.
- Batch 01.1 does not validate final route contracts.
- Batch 01.1 does not approve SEO metadata behavior.
- Batch 01.1 does not create or modify Contentful schemas.
- Batch 01.1 does not create fixtures or frontend implementation.
- Batch 01.1 preserves TBD, PROPOSED, DEFERRED, and open-decision statuses from the workbook.

### Batch 01.1 Closeout

Status: APPROVED

External validation: PASS

Approved foundation:

- website mission
- audience hierarchy
- professional positioning direction
- brand voice
- approved/proposed content pillars
- v1 content domains
- homepage priorities
- profile strategy
- experience strategy
- project/case-study strategy
- writing strategy
- skills/tools direction
- navigation/contact direction
- CMS/code ownership boundary
- reuse rules
- editorial lifecycle
- static fixture requirements
- accessibility content rules
- responsive content intent
- en-US localization boundary
- confidentiality rules
- deferred v1 scope
- assumptions register
- open-decision register

At Batch 01.1 closeout, open decisions intentionally carried forward did not block Batch 01.2 approval.

Next at Batch 01.1 closeout: Batch 01.2 — Route Contract

Batch 01.1 closeout state:

- Phase 01 is ACTIVE.
- Batch 01.1 is APPROVED.
- At Batch 01.1 closeout, Batch 01.2 advanced to NEXT. This is historical, not the current Batch 01.2 state.
- Phase 02 is DEFERRED.
- `docs/system/CONTENT-STRATEGY.md` contains the reconciled strategy foundation.
- `docs/system/ROUTE-CONTRACT.md` records preliminary route inventory without approving the formal route contract.
- assumptions remain assumptions.
- open decisions remain visible.
- bootstrap migration remains BLOCKED / NOT RUN.
- seed content remains NOT STARTED.
- no Contentful mutation, frontend implementation, fixture creation, staging, commit, or push occurred.

## Batch 01.2 — Route Contract

Status: APPROVED

### Goal

Convert the approved Batch 01.1 content-strategy foundation into a formal, route-by-route contract for the v1 website without defining Contentful fields, React component APIs, frontend implementation, fixtures, or detailed SEO metadata behavior.

### Route Inventory

| Route | Type | Contract status |
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

### Contract Areas

- route purpose
- primary and secondary audiences
- primary visitor question
- primary and secondary CTA direction
- required and optional content
- content domains consumed
- CMS/code/derived ownership
- reuse rules
- route composition intent
- route states
- internal linking
- responsive intent
- accessibility intent
- directional SEO intent
- future CMS implications
- deferred behavior
- open decisions

### Route Responsibility Boundaries

- Home provides curated summaries; deeper routes own fuller canonical content.
- About owns professional narrative, philosophy, evolution, values, and approach.
- Work owns employment context, responsibilities, outcomes, and career progression.
- Projects own problem/approach/solution/outcome evidence.
- Project and writing indexes own discovery and previews; detail routes own full narratives.
- `/tools` owns the professional tools/platform inventory, while skills remain capability concepts.
- Contact owns the low-friction professional conversion path.

### Route State Model

The Batch 01.2 contract defines READY, EMPTY, MISSING, DRAFT / PREVIEW, and ERROR states.

Collection routes define empty behavior where relevant. Detail routes define missing behavior. Draft/preview delivery is documented as outside normal public delivery, with preview security deferred.

### Content Readiness

A route is content-ready when required content exists, intended relationships resolve, public-safety requirements pass, meaningful media has accessibility metadata where applicable, the route can answer its primary visitor question, public/draft state is unambiguous, and intended internal links are valid.

API success alone is not route readiness.

### Ownership Rules

Preserve:

```text
CMS owns editorial meaning.
Code owns behavior.
Derived data owns what can be reliably calculated.
```

Page composition remains code-owned. Raw Contentful shapes are not introduced.

### Internal Linking

Batch 01.2 documents strategic route relationships between Home, About, Work, Projects, Writing, Tools, Contact, detail routes, résumé PDF, LinkedIn, and GitHub.

Related-content behavior may remain editorial/manual until a later decision resolves manual vs derived relationships.

### Responsive Intent

Small layouts stack and simplify while preserving primary content and CTAs. Medium layouts may group related content and use two columns where useful. Large layouts may provide fuller editorial presentation and richer supporting context.

Meaningful content required to understand a route must remain available.

### Accessibility Intent

Route-level requirements include one clear primary heading, logical heading hierarchy, descriptive links, meaningful CTA labels, meaningful-image alt text, decorative media handling, semantic content order, and no critical meaning conveyed only by color, icon, or position.

### SEO Boundary

Batch 01.2 records directional SEO intent only.

Batch 01.3 owns title patterns, description rules, canonical behavior, Open Graph behavior, structured-data decisions, and metadata fallback/override logic.

### Future CMS Implications

Future CMS implications are documented only directionally as route-to-domain, reusable-content, editorial-selection, derived-value, and code-owned composition inputs.

No Contentful field IDs, schema changes, migrations, or content-model ledger changes are made in Batch 01.2.

### Decision Reconciliation

Resolved route decision:

- OD-07 — final formal v1 route contract: RESOLVED / APPROVED by `docs/system/ROUTE-CONTRACT.md` and external Batch 01.2 validation.

At Batch 01.2 closeout, this route-related decision was narrowed but still open:

- OD-08 — `/tools` vs skills responsibility boundary: narrowed to a PROPOSED WORKING BOUNDARY where skill = capability and tool = product/platform/framework/technology.

Open route-adjacent decisions remain unresolved:

- OD-09 — homepage featured-project selection
- OD-10 — public-safe enterprise-project selection
- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content
- OD-14 — public-safe homepage proof metrics

Unrelated open decisions remain unresolved.

### Approval Evidence

- External Batch 01.2 validation: PASS.
- The formal route contract is approved for all nine v1 routes: `/`, `/about`, `/work`, `/projects`, `/projects/[slug]`, `/writing`, `/writing/[slug]`, `/tools`, and `/contact`.
- Route responsibility boundaries, route states, content readiness, ownership rules, internal linking, responsive intent, accessibility intent, directional SEO intent, and future CMS implication boundaries are documented.
- OD-07 is resolved and approved.
- At Batch 01.2 approval, OD-08 remained PROPOSED / OPEN.
- No frontend implementation was created.
- No static fixtures were created.
- No Contentful command was run.
- No Contentful schema, locale, environment, export, import, migration, or seed mutation occurred.
- Detailed SEO metadata behavior remains deferred to Batch 01.3.
- Future CMS implications remain directional and are not model approval.

### Batch 01.2 Closeout

Status: APPROVED

External validation: PASS

Batch 01.2 closeout state:

- Phase 01 is ACTIVE.
- Batch 01.1 is APPROVED.
- Batch 01.2 is APPROVED.
- At Batch 01.2 closeout, Batch 01.3 advanced to NEXT. This is historical, not the current Batch 01.3 state.
- At Batch 01.2 closeout, Batch 01.4 and Batch 01.5 remained LATER. This is historical, not the current Batch 01.4 state.
- Phase 02 is DEFERRED.
- `docs/system/ROUTE-CONTRACT.md` contains formal contracts for all nine v1 routes.
- route responsibility boundaries are explicit.
- route states, readiness, ownership, internal linking, responsive intent, accessibility intent, directional SEO intent, and future CMS implication boundaries are documented.
- OD-07 is RESOLVED / APPROVED.
- At Batch 01.2 closeout, OD-08 remained PROPOSED / OPEN.
- detailed SEO metadata remains deferred to Batch 01.3.
- no Contentful schema, migration, seed, fixture, or frontend implementation occurred.
- bootstrap migration remains BLOCKED / NOT RUN.
- seed content remains NOT STARTED.
- no files are staged.
- no commit or push occurs in this implementation pass.

## Batch 01.3 — SEO + Metadata Contract

Status: APPROVED

Canonical detailed contract:

- `docs/system/SEO-AND-METADATA-CONTRACT.md`

### Goal

Convert the approved Batch 01.2 route-level SEO intent into a formal SEO and metadata contract without defining Contentful fields, migrations, frontend metadata APIs, static fixtures, adapters, or live CMS integration.

### Option 2 Architecture Decision

Batch 01.3 uses Option 2 — Hybrid / Lean SEO Ownership.

Editorial SEO may later own only optional SEO title, SEO description, and social image overrides, primarily for Projects and Articles.

Technical SEO remains deterministic and code/state-owned: canonical URLs, robots/indexability, sitemap eligibility, preview exclusion, structured data, breadcrumbs, canonical Open Graph URL, and fallback resolution.

This direction reduces Contentful model complexity, avoids dangerous editor controls, keeps canonical and indexing behavior predictable, and preserves future flexibility without over-modeling v1.

### Approved Route Inputs

The approved v1 route inventory remains unchanged:

- `/`
- `/about`
- `/work`
- `/projects`
- `/projects/[slug]`
- `/writing`
- `/writing/[slug]`
- `/tools`
- `/contact`

OD-07 remains RESOLVED / APPROVED. No routes are added or removed in Batch 01.3.

### SEO Principles

Preserve these Batch 01.3 principles:

- route intent precedes metadata
- metadata must represent visible content
- public canonical routes receive stable metadata
- draft and preview state must not become public canonical targets
- canonicals are derived from approved route identity
- technical SEO controls remain deterministic
- editorial SEO remains simple enough for one editor
- metadata should be derived when reliable
- structured data must describe visible content
- sitemap inclusion follows public/indexable route readiness
- `meta keywords` are excluded

### Metadata Ownership

Code/application configuration owns site origin, canonical base URL, site name, default locale, title template, safe defaults, default social image, canonical derivation, route-to-canonical mapping, robots behavior, sitemap eligibility, route-state SEO behavior, structured-data generation, breadcrumb generation, fallback resolution, sanitization, and technical Open Graph defaults.

Static routes do not require CMS SEO entries in v1. Their metadata should derive from the approved route contract, approved visible page content, and global defaults.

### Editorial Override Contract

Future editorial override scope is limited conceptually to:

```text
seoTitle?
seoDescription?
socialImage?
```

These overrides are optional and primarily intended for dynamic editorial content such as Projects and Articles.

### Technical SEO Ownership

Editors do not receive v1 freeform control over canonical URL, robots/noindex, nofollow, sitemap inclusion, structured-data JSON, breadcrumb JSON, preview indexing behavior, or meta keywords.

Page-level editorial `noFollow` is excluded from v1. Future individual-link treatment belongs to a link, security, UGC, sponsorship, or implementation policy.

### Fallback Contract

Global fallback hierarchy:

```text
Editorial override
-> canonical semantic content
-> global safe fallback
```

Projects and Articles use override -> semantic title/summary/excerpt -> safe fallback. Static routes use route contract -> global defaults.

### Title Contract

Title patterns are documented in `docs/system/SEO-AND-METADATA-CONTRACT.md` for all nine routes.

Titles should be accurate, descriptive, concise, aligned with visible content, unique where practical, free from keyword stuffing, and free from excessive boilerplate.

Hard title character-count publication gates are not approved by Batch 01.3. Exact CMS validation thresholds, if any, belong to Phase 02.

### Description Contract

Description intent is documented for all nine routes.

Descriptions must summarize page value, reflect visible content, differentiate the route, avoid generic filler, avoid unsupported claims, and avoid keyword lists.

Final production descriptions are not written in Batch 01.3 unless approved copy already exists.

### Canonical Contract

Canonical URLs are derived from approved public route identity, normalized pathname, and absolute `[SITE_ORIGIN]` URL.

Dynamic detail canonicals derive from published slugs on approved detail routes.

Preview URLs, draft URLs, Contentful URLs, editor URLs, environment URLs, deployment-preview URLs, query-string variations, missing details, and stale slugs are never canonical targets.

### Indexability Contract

Indexability is route-state and publication-state driven:

- READY public static routes: `index, follow`
- READY published dynamic details: `index, follow`
- EMPTY collections: default `noindex, follow`
- MISSING: not indexable
- DRAFT / PREVIEW: not publicly indexable; addressable preview surfaces prefer `noindex, nofollow`
- ERROR: not indexable

### Route-State SEO Behavior

Route-state SEO behavior follows the approved Batch 01.2 route states: READY, EMPTY, MISSING, DRAFT / PREVIEW, and ERROR.

State exceptions override the route SEO matrix.

### Open Graph / Social Metadata

READY public routes require resolved social title, resolved social description, canonical social URL, representative social image, social image descriptive context where supported, and site identity.

Social image fallback is:

```text
editorial social image override
-> representative content image
-> site default social image
```

Separate CMS fields for `ogTitle`, `ogDescription`, `twitterTitle`, or `twitterDescription` are not introduced without future evidence.

### Image Metadata

Future social/SEO images require stable public URL, representative subject, adequate quality, intentional crop/composition, editorial context, and appropriate accessible alternative treatment.

Pixel dimensions are not frozen in Batch 01.3.

### Structured Data Candidates

Structured-data candidates are documented route by route. They are candidates only and do not promise rich-result eligibility.

Primary candidates include WebSite/Person for `/`, ProfilePage/Person for `/about`, WebPage/CreativeWork for project details, Article or BlogPosting for writing details, and BreadcrumbList for project and writing detail routes where visible breadcrumb UI exists.

Arbitrary structured-data JSON CMS fields are excluded from v1.

### Sitemap Contract

Sitemap eligibility is deterministic:

```text
isPublic
AND isPublished where applicable
AND isReady
AND isIndexable
AND hasCanonicalRoute
```

READY canonical static routes, READY published Project details, and READY published Article details are eligible. Drafts, previews, missing routes, errors, temporary URLs, query variants, intentionally noindexed routes, and EMPTY/noindex routes are excluded.

No CMS sitemap checkbox is introduced.

### Robots Contract

`robots.txt` is not page indexability and is not a preview security mechanism.

Preview/security requires application access control plus noindex where applicable.

Arbitrary editor-entered robots values are excluded from v1.

### Internal-Link SEO Contract

The approved Batch 01.2 internal-link relationship map remains authoritative.

Important routes must not be orphaned, link labels must be meaningful, related links must be contextually justified, and links must not be added solely for search manipulation.

At Batch 01.3 closeout, OD-13 remained OPEN. It is later RESOLVED / APPROVED by supplemental Phase 02 / Batch 02.4 decision validation.

### Phase 02 CMS Handoff

Approved conceptual editorial contract:

```text
seoTitle?
seoDescription?
socialImage?
```

Excluded from editorial SEO v1:

```text
canonicalUrl
noIndex
noFollow
robots
sitemap inclusion
structured-data JSON
meta keywords
```

Preferred Phase 02 representation remains direct optional SEO override fields on Project and Article unless Phase 02 finds a real reuse requirement for a reduced reusable SEO metadata reference.

The legacy broad `seoMetadata` type and current proposed migration fields are PROPOSED / REQUIRES PHASE 02 RECONCILIATION. They are not silently preserved as approved schema truth.

### Decision Reconciliation

- OD-07 — Final formal v1 route contract: RESOLVED / APPROVED; unchanged.
- OD-08 — Exact content boundary between `/tools` and skills: PROPOSED / OPEN at Batch 01.3 closeout; now resolved by Batch 01.4.
- OD-15 — SEO override/default strategy: RESOLVED / APPROVED by Batch 01.3.

Unrelated open decisions remain unresolved.

### Evidence Limitations

- External Batch 01.3 validation passed.
- No frontend metadata implementation was created.
- No sitemap, robots, Open Graph, or structured-data code was created.
- No static fixtures were created.
- No Contentful command was run.
- No Contentful schema, locale, environment, export, import, migration, field ID, reference, or seed mutation occurred.
- Exact Contentful SEO field representation remains deferred to Phase 02.
- At Batch 01.3 approval, Content Requirements Matrix work remained next and was not started. This is historical; current Batch 01.4 work is recorded below.

### Batch 01.3 Closeout

Status: APPROVED

External validation: PASS

Approved:

- Option 2 hybrid SEO ownership;
- metadata ownership contract;
- title contract;
- description contract;
- fallback hierarchy;
- canonical behavior;
- route-state indexability;
- robots behavior;
- Open Graph/social metadata contract;
- social-image fallback;
- structured-data candidates;
- sitemap eligibility;
- internal-link SEO intent;
- Phase 02 SEO-model handoff.

Resolved:

- OD-15 — SEO override/default strategy.

Preserved:

- At Batch 01.3 closeout, OD-08 remained PROPOSED / OPEN; it is now resolved by Batch 01.4.
- Legacy broad `seoMetadata` requires Phase 02 reconciliation.

Next:

- Batch 01.4 — Content Requirements Matrix.

Batch 01.3 closeout state was:

- Phase 01 — ACTIVE.
- Batch 01.1 — APPROVED.
- Batch 01.2 — APPROVED.
- Batch 01.3 — APPROVED.
- At Batch 01.3 closeout, Batch 01.4 was NEXT. This is historical, not the current Batch 01.4 state.
- At Batch 01.3 closeout, Batch 01.5 was LATER. This is historical, not the current Batch 01.5 state.
- Phase 02 — DEFERRED.
- Bootstrap migration — BLOCKED / NOT RUN.
- Seed content — NOT STARTED.
- no files are staged.
- no commit or push occurs in this implementation pass.

## Batch 01.4 — Content Requirements Matrix

Status: APPROVED

Canonical detailed contract:

- `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`

### Goal

Translate the approved content strategy, route contract, and SEO + metadata contract into implementation-facing route and content-domain requirements without defining Contentful fields, migrations, frontend implementation, static fixtures, adapters, seed content, or live CMS integration.

### Approved Inputs

- Phase 01 is ACTIVE.
- Batch 01.1 is APPROVED.
- Batch 01.2 is APPROVED.
- Batch 01.3 is APPROVED.
- Approved v1 routes remain `/`, `/about`, `/work`, `/projects`, `/projects/[slug]`, `/writing`, `/writing/[slug]`, `/tools`, and `/contact`.
- OD-07 remains RESOLVED / APPROVED.
- OD-08 is RESOLVED / APPROVED.
- OD-15 remains RESOLVED / APPROVED.
- Option 2 hybrid SEO ownership remains approved.
- Phase 02 remains DEFERRED.

### Requirement Taxonomy

The matrix classifies requirements as REQUIRED, OPTIONAL, CONDITIONAL, DEFERRED, or NOT APPLICABLE.

### Route Requirements

All nine approved v1 routes are represented in `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`.

The matrix records required, optional, conditional, deferred, and excluded content for:

- `/`
- `/about`
- `/work`
- `/projects`
- `/projects/[slug]`
- `/writing`
- `/writing/[slug]`
- `/tools`
- `/contact`

### Content Domain Requirements

Content domains remain semantic planning sources, not Contentful types.

The matrix covers Profile, Navigation, Social Links, Experience, Project, Article, Skill, Skill Group, Tool, Learning / Certification, Contact, SEO Editorial Override, Global Site Configuration, and Media.

### Ownership

The approved rule is preserved:

```text
CMS owns editorial meaning.
Code owns behavior.
Derived data owns what can be reliably calculated.
```

Page composition remains code-owned.

### Reuse Matrix

The matrix records canonical reuse for Profile, Experience, Project, Article, Skills, Tools, Social Links, Contact, and SEO editorial overrides.

Same meaning uses the same canonical source. Different presentation remains presentation-layer variation.

### Route Readiness

The matrix defines minimum readiness for every approved route and preserves READY, EMPTY, MISSING, DRAFT/PREVIEW, and ERROR implications from the route contract.

API success alone is not route readiness.

### Fixture Requirements

Future representative fixture needs are recorded for Profile, Experience, Project, Article, Skill Group, Skills, Tools, Navigation, Social Links, Contact, SEO override/fallback, collection EMPTY, detail MISSING, detail DRAFT/PREVIEW, and media present/optional states.

No fixtures are created in Batch 01.4.

### Media Requirements

The matrix records required, optional, and deferred media by domain.

Profile photo, Project hero/representative image, and downloadable resume PDF remain required for the intended v1 system. Project screenshots/gallery, Article media, Experience logos, and Tool logos/icons remain optional. Video remains deferred.

### Accessibility Requirements

Accessibility content requirements are part of content readiness.

The matrix covers meaningful alt text, decorative empty alt, descriptive links, clear page headings, heading hierarchy, semantic reading order, non-color-only meaning, captions/transcripts where relevant, and public-safe descriptive media.

### SEO Inputs

The approved SEO contract is consumed without redesign.

Static-route metadata remains code-owned. Project and Article detail content may later use optional `seoTitle?`, `seoDescription?`, and `socialImage?` concepts with semantic fallbacks.

Canonicals, robots/indexability, sitemap eligibility, structured data, breadcrumbs, preview exclusion, and metadata resolution remain code/state-derived.

### Public-Safety Requirements

The matrix records cross-cutting public-safety rules for credentials, tokens, private environment data, internal URLs, confidential screenshots, customer data, employee data, unreleased work, proprietary architecture, confidential analytics, and unsupported/confidential metrics.

Allowed transformations include anonymizing, generalizing, recreating, redacting, aggregating, describing the problem class, describing role/contribution, and describing public-safe outcomes.

### Phase 02 Handoff

Directional classifications are recorded:

- LIKELY FIELD
- LIKELY REFERENCE
- DERIVED — DO NOT MODEL
- CODE CONFIG — DO NOT MODEL
- NEEDS PHASE 02 DECISION
- DEFERRED

These are not field IDs, content types, or approved reference contracts.

### Model Pressure Review

The current requirements fit the existing semantic direction and remain comfortably below the 25 content-type cap.

New or still-open Phase 02 model questions include Tool representation, lightweight Learning / Certification representation, taxonomy depth, related-content strategy, and SEO override representation.

### Decision Reconciliation

Resolved decisions preserved:

- OD-07 — Final formal v1 route contract.
- OD-08 — Skills vs Tools semantic boundary.
- OD-15 — SEO override/default strategy.

External validation approved the OD-08 boundary:

```text
Skill = professional capability.
Tool = product, platform, framework, technology, or software used to exercise capability.
```

Resolving OD-08 does not decide whether Tool becomes a standalone Contentful content type. Exact Tool representation remains Phase 02 model work.

Remaining open decisions:

- OD-01
- OD-02
- OD-03
- OD-04
- OD-05
- OD-06
- OD-09
- OD-10
- OD-11
- OD-12
- OD-13
- OD-14

### Evidence Limitations

- External Batch 01.4 validation passed.
- No Contentful command was run.
- No Contentful schema, field ID, reference, migration, locale, environment, export, import, or seed mutation occurred.
- No fixtures were created.
- No frontend implementation was created.
- No SEO implementation was created.
- Exact Contentful representation remains deferred to Phase 02.
- Batch 01.5 is now approved, and Phase 01 is complete / frozen.

### Batch 01.4 Closeout

Status: APPROVED

External validation: PASS

Approved:

- canonical Content Requirements Matrix;
- all nine route requirement sets;
- requirement and ownership taxonomies;
- reuse model;
- route-readiness contract;
- representative fixture requirements;
- media requirements;
- accessibility requirements;
- SEO semantic inputs;
- public-safety requirements;
- directional Phase 02 model handoff;
- model-pressure review.

Resolved:

- OD-08 — Skills vs Tools semantic boundary.

Preserved:

- Phase 02 model representation decisions remain deferred.
- At Batch 01.4 closeout, OD-01 through OD-06 and OD-09 through OD-14 remained unresolved as applicable. Later Phase 02 validation resolves OD-06, OD-11, OD-12, and OD-13.
- no model artifacts were changed.

Next:

- Batch 01.5 — Phase 01 Validation + Freeze.

Batch 01.4 is approved after external validation:

- Phase 01 is ACTIVE.
- Batch 01.1 is APPROVED.
- Batch 01.2 is APPROVED.
- Batch 01.3 is APPROVED.
- Batch 01.4 is APPROVED.
- At Batch 01.4 closeout, Batch 01.5 advanced to NEXT. Batch 01.5 is now APPROVED.
- At Batch 01.4 closeout, Phase 02 was DEFERRED. Phase 02 is now NEXT after Phase 01 closeout.
- all nine approved routes have content requirements.
- requirement level, ownership, reuse, readiness, fixture, media, accessibility, SEO-input, public-safety, Phase 02 handoff, and model-pressure coverage is documented.
- OD-07, OD-08, and OD-15 are RESOLVED / APPROVED.
- unrelated open decisions remain visible.
- no Contentful schema, migration, seed, fixture, or frontend implementation occurred.
- bootstrap migration remains BLOCKED / NOT RUN.
- seed content remains NOT STARTED.
- no files are staged.
- no commit or push occurs in this implementation pass.

## Batch 01.5 — Validation + Freeze

Status: APPROVED

### Goal

Validate the approved Phase 01 contracts as a coherent freeze candidate before any Phase 02 content-model, migration, fixture, or frontend implementation work begins.

### Freeze Definition

Phase 01 freeze means the content strategy, route contract, SEO + metadata contract, and Content Requirements Matrix are internally consistent enough to hand off to Phase 02.

During validation, freeze-candidate status did not mean Phase 01 was complete or Batch 01.5 was approved. After external closeout approval, Phase 01 is complete / frozen, but Phase 02 is not active, content types are not frozen, field IDs are not approved, fixtures are not created, and Contentful work is not authorized.

### Approved Inputs

| Input | Status | Validation finding |
|---|---|---|
| `docs/system/CONTENT-STRATEGY.md` | APPROVED / FROZEN | Strategy, audience, ownership, reuse, quality, accessibility, confidentiality, assumptions, and open-decision surfaces are present. |
| `docs/system/ROUTE-CONTRACT.md` | APPROVED / FROZEN | The nine-route v1 contract, route states, ownership, readiness, internal linking, accessibility, and route implications are present. |
| `docs/system/SEO-AND-METADATA-CONTRACT.md` | APPROVED / FROZEN | Hybrid SEO ownership, fallback behavior, route-state indexability, structured-data candidates, sitemap eligibility, and Phase 02 SEO handoff are present. |
| `docs/system/CONTENT-REQUIREMENTS-MATRIX.md` | APPROVED / FROZEN | Route/content requirements, ownership, reuse, route readiness, fixture, media, accessibility, SEO, public-safety, and Phase 02 handoff classifications are present. |
| `docs/DECISIONS.md` | CURRENT | ADR-009 is the architectural rationale for OD-15; OD-08 is recorded as resolved without freezing Tool representation. |
| `docs/content-model/*`, `content-model/migrations/*` | PROPOSED INPUTS | Existing model artifacts remain read-only proposed Phase 02 inputs, not approved Phase 01 schema truth. |

### Cross-Contract Validation Matrix

| Contract | Validated against | Result | Note |
|---|---|---|---|
| Content Strategy | Route Contract | PASS | Route purpose, audience intent, ownership, non-goals, and reuse align. |
| Content Strategy | SEO Contract | PASS | SEO inputs derive from semantic content and do not override strategy ownership boundaries. |
| Content Strategy | Content Requirements Matrix | PASS | Requirements preserve content domains instead of collapsing to Contentful fields. |
| Route Contract | SEO Contract | PASS | Canonicals, robots/indexability, sitemap eligibility, and preview exclusion follow route state. |
| Route Contract | Content Requirements Matrix | PASS | All nine approved routes have corresponding requirements and readiness rules. |
| SEO Contract | Content Requirements Matrix | PASS | Editorial SEO remains limited to title, description, and social image concepts; technical SEO remains code/state-derived. |
| Approved contracts | Proposed model artifacts | PASS WITH NOTES | Phase 02 must reconcile legacy `seoMetadata`, Tool representation, taxonomy, related content, and SEO override representation before migration. |

### Route Inventory Validation

| Route | Status | Matrix coverage | SEO coverage | Result |
|---|---|---|---|---|
| `/` | APPROVED V1 | Yes | Yes | PASS |
| `/about` | APPROVED V1 | Yes | Yes | PASS |
| `/work` | APPROVED V1 | Yes | Yes | PASS |
| `/projects` | APPROVED V1 | Yes | Yes | PASS |
| `/projects/[slug]` | APPROVED V1 | Yes | Yes | PASS |
| `/writing` | APPROVED V1 | Yes | Yes | PASS |
| `/writing/[slug]` | APPROVED V1 | Yes | Yes | PASS |
| `/tools` | APPROVED V1 | Yes | Yes | PASS |
| `/contact` | APPROVED V1 | Yes | Yes | PASS |

Rejected or deferred route ideas remain rejected or deferred:

- `/uses` is not a v1 route.
- `/resume` is not a standalone v1 route; résumé access remains a PDF/download/link pattern.
- `/blog` and `/articles` are not v1 routes; writing uses `/writing` and `/writing/[slug]`.
- `/skills` is not a standalone v1 route.

### Ownership Validation

| Ownership area | Current truth | Result |
|---|---|---|
| Editorial meaning | CMS/editorial owned later, expressed as semantic content requirements now. | PASS |
| Route composition | Code-owned in v1. | PASS |
| Page-builder behavior | Out of scope for v1. | PASS |
| Technical SEO | Code/state-derived. | PASS |
| Content readiness | Mixed: editorial sufficiency plus route-state logic. | PASS |
| Publication/indexability | Route state plus publication state. | PASS |
| Preview exclusion | Code/security-owned. | PASS |

### Reuse Validation

Approved reuse remains semantic and source-oriented:

- Profile content can support homepage, about, contact, metadata fallbacks, and author context.
- Project content can support homepage features, project collections, project detail routes, related content, media, SEO fallbacks, and public-safe proof.
- Article content can support writing collection, writing detail routes, related content, topic authority, metadata fallbacks, and structured-data candidates.
- Experience content can support `/work`, homepage proof, project context, and public-safe career evidence.
- Skill content represents professional capability.
- Tool content represents product, platform, framework, technology, or software used to exercise capability.

Reuse does not justify duplicated fields, generic page sections, or route-specific copies of the same semantic content.

### Route Readiness Validation

Route readiness remains based on whether content can answer the route's visitor question, not merely whether data exists.

The approved route states remain:

- READY
- EMPTY
- MISSING
- DRAFT / PREVIEW
- ERROR

Collection empty states are valid when content is intentionally absent. Detail routes require approved route identity, publication state, and sufficient public-safe content.

### SEO / Content Alignment

SEO alignment passes with the approved hybrid ownership model:

- editorial overrides are limited conceptually to SEO title, SEO description, and social image;
- title fallback uses editorial override, semantic title, then safe global fallback;
- description fallback uses editorial override, summary/excerpt, then safe global fallback;
- social image fallback uses editorial override, representative image, then site default image;
- canonical URLs are code-derived from approved route identity;
- robots/indexability is derived from route state and publication state;
- sitemap eligibility is code/state-derived;
- structured data and breadcrumbs are code-generated from normalized content;
- preview exclusion remains code/security-owned;
- meta keywords, freeform editorial canonical URLs, arbitrary robots directives, page-level editorial noFollow, sitemap checkboxes, and arbitrary structured-data JSON remain excluded from v1 editorial SEO.

### Media Validation

Media requirements are sufficient for Phase 01:

- project detail media is required when needed to tell the case study and must remain public-safe;
- project preview media is optional unless needed for the presentation pattern;
- writing hero or inline media is optional and requires alt text when used;
- tool logos are optional and cannot be the only meaningful label;
- inaccessible, confidential, internal, or unsupported media is not content-ready.

No asset schema, image transform implementation, fixture, or frontend rendering decision is approved by this batch.

### Accessibility Validation

Accessibility content requirements remain active:

- meaningful images need editorial alt text or a clear decorative treatment;
- link labels must be descriptive;
- headings and labels must preserve semantic meaning;
- metrics, categories, tools, and skills must be readable as text;
- content cannot rely on color, logos, screenshots, or icon-only meaning.

Implementation-level accessibility QA remains later frontend work.

### Public-Safety Validation

Public-safety requirements are sufficient for Phase 01 requirements freeze status:

- confidential client, employer, customer, environment, URL, analytics, architecture, credential, or private personal details must not be published;
- public claims need evidence or must be generalized;
- projects and experience can remain content-ready with redaction, anonymization, aggregation, or omission when the route question is still answered;
- unsupported metrics must not be invented for proof.

OD-10 and OD-14 remain open content decisions, not Phase 01 blockers.

### Fixture Requirement Validation

Fixture requirements are defined but not created:

- representative Project, Article, Experience, Skill, Tool, Profile, Contact, and media states are identified;
- READY, EMPTY, MISSING, DRAFT/PREVIEW, and ERROR behavior needs later fixture coverage where relevant;
- public-safe and redacted variants are required for meaningful validation later;
- fixture creation remains outside Phase 01 / Batch 01.5.

### Open Decision Triage

| Decision | Current status | Freeze classification | Blocks Phase 01 freeze? | Handoff |
|---|---|---|---|---|
| OD-01 — Canonical positioning sentence | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Copy/content selection before final published content. |
| OD-02 — Secondary professional title / specialty | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Profile/about/contact copy decision. |
| OD-03 — Desired work type | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Contact/profile positioning decision. |
| OD-04 — AI-assisted workflow pillar validation | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Validate against real project/article inventory. |
| OD-05 — SEO/accessibility/content-quality pillar validation | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Validate as pillar or supporting theme against real content. |
| OD-06 — Skill-group taxonomy | RESOLVED / APPROVED AFTER PHASE 01 | PHASE 02 MODEL DECISION | No | Resolved by supplemental Phase 02 / Batch 02.4 decision validation. |
| OD-09 — Exact homepage featured projects | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Choose public-safe featured Project entries later. |
| OD-10 — Exact public-safe enterprise projects | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Confidentiality review before publication. |
| OD-11 — Certification representation | RESOLVED / APPROVED AFTER PHASE 01 | PHASE 02 MODEL DECISION | No | Resolved by Phase 02 / Batch 02.2. |
| OD-12 — Taxonomy depth | RESOLVED / APPROVED AFTER PHASE 01 | PHASE 02 MODEL DECISION | No | Resolved by supplemental Phase 02 / Batch 02.4 decision validation. |
| OD-13 — Manual vs derived related content | RESOLVED / APPROVED AFTER PHASE 01 | PHASE 02 MODEL DECISION | No | Resolved by supplemental Phase 02 / Batch 02.4 decision validation. |
| OD-14 — Homepage proof metrics | PROPOSED / OPEN | CONTENT AUTHORING DECISION | No | Choose credible public-safe metrics only if available. |

Resolved decisions remain unchanged:

- OD-07 — RESOLVED / APPROVED.
- OD-08 — RESOLVED / APPROVED.
- OD-15 — RESOLVED / APPROVED.

### Phase 01 Blocker Review

| Potential blocker | Finding | Status |
|---|---|---|
| Missing approved route contract | All nine v1 routes are approved. | Not blocking |
| Missing SEO ownership contract | Option 2 hybrid SEO ownership is approved. | Not blocking |
| Missing requirements matrix | Content Requirements Matrix is approved. | Not blocking |
| Open content copy decisions | Open decisions are authoring or Phase 02 handoff items. | Not blocking |
| Contentful model mismatch | Existing artifacts are proposed inputs and explicitly require Phase 02 reconciliation. | Not blocking |
| Migration readiness | Bootstrap migration remains blocked and not run. | Not blocking |
| Fixture absence | Fixtures are required later but intentionally not created in Phase 01. | Not blocking |
| Phase 02 authorization | At validation time, Phase 02 remained deferred. After closeout, Phase 02 is NEXT but not active. | Not blocking |

### Phase 02 Handoff Validation

Phase 02 receives directional requirements only:

| Phase 02 input | Current handoff | Resolution required before migration? |
|---|---|---|
| Tool representation | Semantic boundary approved; exact representation not frozen. | Yes |
| Learning / Certification representation | Optional evidence approved; exact representation not frozen. | Yes |
| Skill / Skill Group taxonomy | Skill capability model approved; taxonomy depth unresolved. | Yes |
| Related content | Relationship need identified; manual vs derived unresolved. | Yes |
| SEO override representation | Hybrid ownership approved; direct optional Project/Article fields preferred unless reuse evidence justifies reduced reference. | Yes |
| Legacy `seoMetadata` model | Broad proposal requires reconciliation with approved lean SEO contract. | Yes |
| Field IDs and validations | No final field IDs, cardinalities, validations, or editor interfaces approved by Phase 01. | Yes |

Approved Phase 02 handoff classifications remain directional only:

- LIKELY FIELD
- LIKELY REFERENCE
- DERIVED — DO NOT MODEL
- CODE CONFIG — DO NOT MODEL
- NEEDS PHASE 02 DECISION
- DEFERRED

### Legacy Model Reconciliation Notes

Read-only review of proposed model artifacts found no Phase 01 blocker:

| Proposed model concept | Freeze classification | Note |
|---|---|---|
| `siteSettings` | NEEDS PHASE 02 RECONCILIATION | Global settings are directionally useful; SEO defaults must reconcile with code-owned technical SEO. |
| `personProfile` | ALIGNED WITH PHASE 01 | Supports profile/about/contact/author context. |
| `socialLink` | ALIGNED WITH PHASE 01 | Supports public contact and profile links. |
| `navigationItem` | ALIGNED WITH PHASE 01 | Navigation labels and route links are useful; route composition remains code-owned. |
| `project` | ALIGNED WITH PHASE 01 | Core Project domain is approved; fields, validations, relationships, and SEO overrides remain Phase 02 work. |
| `article` | ALIGNED WITH PHASE 01 | Core Article domain is approved; fields, validations, relationships, and SEO overrides remain Phase 02 work. |
| `experienceItem` | ALIGNED WITH PHASE 01 | Supports `/work`, homepage proof, and project context. |
| `skill` | ALIGNED WITH PHASE 01 | Skill means professional capability. |
| `skillGroup` | RECONCILED AFTER PHASE 01 | Grouping depth resolved by supplemental Phase 02 / Batch 02.4 decision validation. |
| `seoMetadata` | NEEDS PHASE 02 RECONCILIATION | Broad reusable SEO proposal conflicts with approved lean/hybrid v1 direction unless reduced and justified. |
| Tool concept | NEEDS PHASE 02 RECONCILIATION | Tool is semantically approved but exact representation is not frozen. |
| Learning / Certification concept | NEEDS PHASE 02 RECONCILIATION | Optional evidence is approved; model shape remains open. |

No content-model ledger, migration, snapshot, report, or Contentful script was modified.

### Content-Type Pressure Review

The current proposed model target remains 10 semantic content types, below the 25-type constraint.

Batch 01.5 does not approve additional content types. Phase 02 must prevent uncontrolled growth by justifying any new Tool, Learning, Certification, taxonomy, related-content, media, page, or SEO-support type against reuse, editorial lifecycle, and route-readiness value.

Generic page builders and CMS-driven component composition remain deferred/out of scope for v1.

### Stale Reference Review

| Area | Current classification | Finding |
|---|---|---|
| Phase state references | CURRENT / HISTORICAL | Current state is Phase 01 COMPLETE / FROZEN, Batch 01.5 APPROVED, and Phase 02 NEXT. Earlier freeze-candidate and next-batch states are historical. |
| Route references | CURRENT / PROHIBITIVE | Approved v1 route inventory remains the nine-route set. `/uses`, `/resume`, `/blog`, `/articles`, and `/skills` are not active v1 routes. |
| Decision references | CURRENT / HISTORICAL | OD-07, OD-08, OD-15, and later Phase 02 decisions OD-06, OD-11, OD-12, and OD-13 are resolved/approved. OD-01 through OD-05, OD-09, OD-10, and OD-14 remain open. Earlier open references are historical. |
| SEO/model references | CURRENT / PROPOSED | Hybrid SEO is approved. Broad legacy `seoMetadata` remains proposed and requires Phase 02 reconciliation. |
| Page-builder references | CURRENT / PROHIBITIVE | Generic page builders and CMS-driven page composition remain excluded from v1. |
| Model artifacts | PROPOSED | Proposed model ledgers and bootstrap migration are Phase 02 inputs only. |

No stale reference was found that blocks Phase 01 requirements freeze status.

### Freeze Verdict

APPROVED — External Batch 01.5 validation returned PASS WITH NOTES. Phase 01 is internally consistent and frozen, with non-blocking open decisions explicitly classified and handed off.

Phase 01 is complete / frozen after external closeout validation approved Batch 01.5.

### Evidence Limitations

- This validation is repository-only.
- No live Contentful command was run.
- No `.env.local` contents were read.
- No Contentful schema, field ID, reference validation, migration, locale, environment, export, import, or seed mutation occurred.
- No fixtures were created.
- No frontend implementation was created.
- No SEO implementation was created.
- No files were staged.
- No commit or push occurred.

### External Closeout Gate

External validation returned PASS WITH NOTES. The Batch 01.5 approval gate is satisfied, and the Phase 01 requirements freeze is approved.

Phase 02 advances to NEXT, but Phase 02 implementation has not started. Bootstrap migration remains BLOCKED / NOT RUN, and seed content remains NOT STARTED.

## Batch 01.5 Closeout

Status: APPROVED

External validation: PASS WITH NOTES

Freeze verdict: APPROVED

Validated:

- Content Strategy
- Route Contract
- SEO + Metadata Contract
- Content Requirements Matrix
- route inventory
- ownership boundaries
- canonical reuse
- route readiness
- route states
- SEO/content alignment
- media requirements
- accessibility requirements
- public-safety requirements
- future fixture requirements
- open-decision triage
- Phase 02 handoff
- content-type pressure
- stale-reference review

No Phase 01 blockers remain.

External validation notes are non-blocking and remain represented as downstream carry-forward decisions and Phase 02 reconciliation questions.

# Phase 01 Closeout

Status: COMPLETE / FROZEN

External validation: PASS WITH NOTES

Completed batches:

- 01.1 — APPROVED
- 01.2 — APPROVED
- 01.3 — APPROVED
- 01.4 — APPROVED
- 01.5 — APPROVED

Frozen outputs:

- Content Strategy
- Route Contract
- SEO + Metadata Contract
- Content Requirements Matrix
- Phase 01 Validation + Freeze evidence

Resolved decisions:

- OD-07
- OD-08
- OD-15

Remaining open decisions:

- OD-01
- OD-02
- OD-03
- OD-04
- OD-05
- OD-06
- OD-09
- OD-10
- OD-11
- OD-12
- OD-13
- OD-14

Remaining open decisions are classified downstream and do not block the Phase 01 requirements freeze.

Next:

- Phase 02 — Content Model Contract + Bootstrap Migration

Status: NEXT

Phase 02 implementation has not started.
