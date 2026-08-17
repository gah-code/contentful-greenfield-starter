# SEO and Metadata Contract

Status: Phase 01 / Batch 01.3 — APPROVED / FROZEN FOR PHASE 02 INPUT
Owner: Phase 01 — Content Strategy + Route Contract
Source strategy: `docs/system/CONTENT-STRATEGY.md`
Source route contract: `docs/system/ROUTE-CONTRACT.md`

## Purpose

This is the canonical Phase 01 / Batch 01.3 surface for SEO and metadata behavior before Contentful fields, frontend metadata APIs, static fixtures, adapters, or live CMS integration are implemented.

This document defines what SEO information exists, who owns it, how it falls back, when routes are indexable, how routes become canonical, which structured-data candidates are justified, and what Phase 02 must reconcile.

This document does not define Contentful field IDs, Contentful field placement, migrations, frontend route code, Next.js metadata, sitemap files, robots files, JSON-LD components, static fixtures, adapters, or view models.

## Approved Inputs

Approved v1 routes:

- `/`
- `/about`
- `/work`
- `/projects`
- `/projects/[slug]`
- `/writing`
- `/writing/[slug]`
- `/tools`
- `/contact`

OD-07 remains RESOLVED / APPROVED by the Batch 01.2 route contract.

OD-08 is RESOLVED / APPROVED by Batch 01.4. Skill = professional capability. Tool = product, platform, framework, technology, or software used to exercise that capability. Exact Tool Contentful representation remains deferred to Phase 02.

## Batch 01.3 Approval

Status: APPROVED

External validation: PASS

Approved architecture:

- hybrid SEO ownership;
- optional editorial SEO title override;
- optional editorial SEO description override;
- optional editorial social-image override;
- code-derived canonicals;
- route/publication-state-derived robots and indexability;
- code/state-derived sitemap eligibility;
- code-generated structured data;
- code-generated breadcrumbs;
- deterministic preview exclusion;
- no meta-keywords strategy;
- no page-level editorial noFollow;
- no freeform editorial canonical in v1.

Exact Contentful representation remains deferred to Phase 02.

## Option 2 Alignment Audit

Batch 01.3 adopts Option 2 — Hybrid / Lean SEO Ownership.

| Surface | Classification | Finding | Batch 01.3 direction |
|---|---|---|---|
| `docs/system/ROUTE-CONTRACT.md` SEO intent | CURRENT | Route SEO intent is approved, while detailed metadata behavior was deferred to Batch 01.3. | Use as route input. |
| `docs/system/CONTENT-STRATEGY.md` OD-15 | CURRENT | SEO overrides vs generated defaults was open for Batch 01.3. | Resolve in this contract. |
| `docs/content-model/CONTENT-TYPE-LEDGER.md` `seoMetadata` type | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Existing model proposal includes reusable SEO Metadata. | Do not treat as approved schema truth. |
| `docs/content-model/FIELD-ID-LEDGER.md` `seoMetadata.title` and `description` | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Existing proposal includes required title and description fields. | Reconcile against optional override contract in Phase 02. |
| `docs/content-model/REFERENCE-MAP.md` SEO references | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Existing proposal references `seoMetadata` from site settings, projects, and articles. | Compare direct Project/Article fields against reduced reusable reference in Phase 02. |
| `content-model/migrations/0001-bootstrap-portfolio-model.js` broad SEO fields | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Migration currently proposes `canonicalUrl`, `openGraphImage`, `noIndex`, and `noFollow`. | Do not run or mutate; reconcile before Phase 02 approval. |
| hard title/description lengths in migration | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Proposed title max 70 and description max 170 appear in migration validations. | Treat as proposed guidance only, not a Batch 01.3 publication gate. |
| `meta keywords` | CURRENT EXCLUSION | No current strategy requires meta keywords. | Exclude from v1 SEO contract. |

No approved decision was found that requires editors to own canonical URLs, robots/indexability, sitemap inclusion, structured-data JSON, breadcrumb JSON, preview indexing behavior, or meta keywords.

## SEO Principles

1. Route intent precedes metadata.
2. Metadata must accurately represent visible page content.
3. Public canonical routes receive stable metadata.
4. Draft and preview state must never become a public canonical target.
5. Canonicals are derived from approved route identity.
6. Editorial overrides are limited to editorially meaningful properties.
7. Code owns technical SEO behavior.
8. CMS may later own editorial SEO overrides where justified.
9. Derived metadata should be preferred over duplicated metadata when reliable.
10. Structured data must describe visible content.
11. Sitemap inclusion follows public/indexable route readiness.
12. No SEO field exists merely because Contentful supports creating it.
13. Technical SEO controls must remain deterministic.
14. Editorial SEO must remain simple enough for one editor to use reliably.
15. Future Contentful modeling should prefer the smallest schema that satisfies the approved contract.

`meta keywords` are explicitly excluded.

Tags and taxonomy may support content organization, filtering, related content, and editorial classification, but they must not become a meta-keyword strategy.

## Architecture Order

```text
Content Strategy
-> Approved Route Contract
-> SEO + Metadata Contract
-> Content Requirements Matrix
-> Future Content Model
-> Static Fixtures / UI Contracts
-> CMS Mapping
-> Implementation
```

SEO fields must not be designed first and then used to force the website around them.

## Metadata Ownership

### Global Code-Owned Configuration

Code/application configuration owns:

- site origin
- canonical base URL
- site name
- default locale
- global title template
- global safe title fallback
- global safe description fallback
- default social image
- canonical derivation logic
- route-to-canonical mapping
- robots behavior
- sitemap eligibility
- route-state SEO behavior
- structured-data generation
- breadcrumb generation
- metadata fallback resolver
- metadata sanitization
- technical Open Graph defaults

Do not introduce a CMS entry solely to store technical defaults unless a future editorial requirement justifies it.

### Static Route Metadata

Static routes do not require CMS SEO entries in v1:

- `/`
- `/about`
- `/work`
- `/projects`
- `/writing`
- `/tools`
- `/contact`

Their metadata should be derived from the approved route contract, approved page content, and global defaults.

### Future CMS-Owned Editorial Overrides

Potential future editorial ownership is limited to optional overrides:

```text
seoTitle?
seoDescription?
socialImage?
```

Primary future consumers:

- Project
- Article

These overrides must not become required merely to make metadata work.

### Derived Metadata

Prefer derivation for:

- project title fallback
- article title fallback
- project summary -> description
- article excerpt -> description
- hero or representative image -> social image
- slug -> canonical route
- publication state -> indexability
- publish date
- updated date
- author identity
- breadcrumb labels
- route relationships
- sitemap eligibility

### Explicitly Code/State-Owned

Editors do not receive freeform v1 control over:

- canonical URL
- robots/noindex
- nofollow
- sitemap inclusion
- structured-data JSON
- breadcrumb JSON
- preview indexing behavior
- meta keywords

## Editorial Override Contract

OD-15 — SEO override/default strategy is RESOLVED / APPROVED:

SEO metadata uses an override-with-fallback strategy. Editors may later override SEO title, SEO description, and social image for dynamic editorial content. Canonical URLs, robots/indexability, sitemap inclusion, preview exclusion, breadcrumbs, and structured data are derived by application code from the approved route contract, publication state, and normalized content. Static-route metadata remains code-owned. Arbitrary canonical, robots, meta-keywords, and structured-data fields are excluded from the v1 editorial contract.

Global fallback hierarchy:

```text
Editorial override
-> Canonical semantic content
-> Global safe fallback
```

## Fallback Contract

| Area | Fallback |
|---|---|
| Project title | SEO title override -> project title -> global safe fallback |
| Article title | SEO title override -> article title -> global safe fallback |
| Project description | SEO description override -> project summary -> global safe fallback |
| Article description | SEO description override -> article excerpt -> global safe fallback |
| Social image | social image override -> representative / hero image -> site default social image |
| Canonical | approved public route -> absolute canonical URL |
| Robots | route state + publication state -> deterministic indexing behavior |
| Structured data | normalized route/content data -> code-generated structured data |

Canonical, robots, and structured data have no editorial fallback.

## Title Contract

Titles should be accurate, descriptive, concise, aligned with visible content, unique where practical, free from keyword stuffing, and free from excessive boilerplate.

Do not use hard SEO character-count publication gates in Batch 01.3. Exact CMS validation thresholds, if any, belong to Phase 02.

| Route | Title pattern |
|---|---|
| `/` | `[Professional Name] - Web Content & Marketing Technologist` |
| `/about` | `About [Professional Name] | [Site Name]` |
| `/work` | `Work & Experience | [Site Name]` |
| `/projects` | `Projects & Case Studies | [Site Name]` |
| `/projects/[slug]` | `[Resolved Project SEO Title] | [Site Name]` |
| `/writing` | `Writing | [Site Name]` |
| `/writing/[slug]` | `[Resolved Article SEO Title] | [Site Name]` |
| `/tools` | `Tools & Platforms | [Site Name]` |
| `/contact` | `Contact | [Site Name]` |

For dynamic routes, resolved title means:

```text
editorial override
-> content title
-> safe fallback
```

OD-01 remains open. Batch 01.3 does not choose the canonical one-sentence positioning statement.

## Description Contract

Descriptions must summarize page value, reflect visible content, differentiate the route, avoid generic filler, avoid unsupported claims, and avoid keyword lists.

Do not write final production descriptions in Batch 01.3 unless approved copy already exists.

| Route | Description intent |
|---|---|
| `/` | Communicate professional identity, CMS/content-systems specialization, frontend/content-operations capability, and portfolio value. |
| `/about` | Communicate career evolution, systems-focused approach, and professional differentiation. |
| `/work` | Communicate professional experience, CMS/content operations, delivery responsibility, and measurable/public-safe impact. |
| `/projects` | Communicate case studies, CMS/frontend/content systems work, and problem-solving evidence. |
| `/projects/[slug]` | SEO description override -> project summary -> global fallback. |
| `/writing` | Communicate professional writing and technical/CMS/content-systems knowledge. |
| `/writing/[slug]` | SEO description override -> article excerpt -> global fallback. |
| `/tools` | Communicate professional platforms, frameworks, tools, and practical context. |
| `/contact` | Communicate professional contact and relevant role/collaboration context. |

## Canonical Contract

Canonical URLs are code-derived:

```text
PUBLIC READY ROUTE
-> approved route identity
-> normalized pathname
-> absolute [SITE_ORIGIN] URL
```

Dynamic detail routes:

```text
published slug
-> approved detail route
-> absolute canonical URL
```

Examples:

```text
[SITE_ORIGIN]/projects/example-project
[SITE_ORIGIN]/writing/example-article
```

Do not hardcode an unapproved production domain in Batch 01.3.

Never use these as canonical URLs:

- preview URL
- draft URL
- Contentful URL
- editor URL
- environment URL
- deployment-preview URL
- query-string tracking variation
- missing detail route
- alternate stale slug

Do not canonicalize a missing detail route to a parent collection.

Do not create freeform canonical CMS input in v1. A future cross-domain canonical requirement requires a new architecture decision.

## Indexability Contract

Indexability is state-driven.

| State | Indexability | Sitemap | Canonical |
|---|---|---|---|
| READY public static route | `index, follow` when route readiness is satisfied | Eligible | Route-derived canonical |
| READY published dynamic detail | `index, follow` when published, public-safe, content-ready, and canonical exists | Eligible | Slug-derived canonical |
| EMPTY collection | Default `noindex, follow` until enough meaningful content exists | Not eligible by default | Route canonical may exist only if route is intentionally public |
| MISSING | Not indexable; future behavior should use 404 / not-found semantics | Not eligible | No canonical |
| DRAFT / PREVIEW | Not publicly indexable; explicitly addressable preview surfaces prefer `noindex, nofollow` plus access control | Not eligible | No public canonical |
| ERROR | Not indexable | Not eligible | No canonical |

An exception for a meaningful standalone empty-state route may be approved later, but it is not the default.

## Robots Contract

`robots.txt` and page-level robots metadata are separate concerns:

```text
robots.txt != page indexability
```

`robots.txt` controls crawler access behavior. Page-level robots metadata controls indexing/search presentation behavior. Preview/security requires application access control plus noindex where applicable.

Do not use `robots.txt` as the security mechanism for preview content.

Do not allow arbitrary editor-entered robots values.

Page-level editorial `noFollow` is not part of v1. Editors should not decide whether an entire Project or Article instructs crawlers not to follow page links.

If a future individual-link policy requires special link treatment, that belongs to a link contract, security/UGC/sponsorship policy, or implementation logic.

## Open Graph / Social Metadata

READY public routes require:

- resolved social title
- resolved social description
- canonical social URL
- representative social image
- social image descriptive context where supported
- site identity

Fallbacks:

```text
Resolved SEO title
-> social title
```

```text
Resolved SEO description
-> social description
```

```text
editorial social image override
-> representative content image
-> site default social image
```

Do not introduce separate CMS fields for `ogTitle`, `ogDescription`, `twitterTitle`, or `twitterDescription` unless future evidence establishes a real editorial requirement.

Do not implement Open Graph tags in Batch 01.3.

## Image Metadata Contract

Future social/SEO images require:

- stable public URL
- representative subject
- adequate quality
- intentional crop/composition
- editorial context
- appropriate accessible alternative treatment

Accessibility text and social-card presentation are related but not necessarily identical concerns.

Do not freeze pixel dimensions unless another approved design/platform contract owns them.

Do not create image fields in Batch 01.3.

## Structured Data Contract

Structured data must reflect visible content and route hierarchy. Never promise rich-result eligibility merely because a schema type exists.

| Route | Candidate | Search feature / general semantic | Status |
|---|---|---|---|
| `/` | WebSite; Person relationship | General semantic candidate | CANDIDATE |
| `/about` | ProfilePage; Person | General semantic candidate; validate semantic fit before implementation | CANDIDATE |
| `/work` | WebPage only if later useful | General semantic only | NO SPECIAL REQUIREMENT |
| `/projects` | None required | Do not treat ItemList as an SEO requirement | NO REQUIRED STRUCTURED DATA |
| `/projects/[slug]` | WebPage; CreativeWork | General semantic candidate; no rich-result promise | CANDIDATE |
| `/writing` | None required | No required collection rich result | NO REQUIRED STRUCTURED DATA |
| `/writing/[slug]` | Article or BlogPosting | Search-feature candidate only when content fit and visible properties support it | CANDIDATE |
| `/tools` | None required | General WebPage semantics only if later useful | NO REQUIRED STRUCTURED DATA |
| `/contact` | None required | General WebPage semantics only if later useful | NO REQUIRED STRUCTURED DATA |

Potential later derived properties for `/writing/[slug]`:

- headline
- description
- image
- author
- datePublished
- dateModified
- mainEntityOfPage

BreadcrumbList is a candidate for `/projects/[slug]` and `/writing/[slug]`, and potentially other routes later if visible breadcrumb UI exists.

No arbitrary structured-data JSON CMS field exists in v1.

## Sitemap Contract

Sitemap eligibility is deterministic:

```text
isPublic
AND isPublished where applicable
AND isReady
AND isIndexable
AND hasCanonicalRoute
```

Include:

- READY canonical static routes
- READY published Project details
- READY published Article details

Exclude:

- drafts
- previews
- missing routes
- errors
- temporary deployment URLs
- query variants
- intentionally noindexed routes
- EMPTY/noindex routes

Use only canonical preferred URLs.

No CMS sitemap checkbox exists in v1.

Do not implement a sitemap in Batch 01.3.

## Internal-Link SEO Contract

The approved Batch 01.2 relationship map remains authoritative.

SEO intent:

```text
Home
-> Projects
-> Work
-> Writing
-> Contact

About
-> Work
-> Projects
-> Contact

Work
-> related Projects

Projects
-> Project detail

Project detail
-> related Projects
-> related Writing where meaningful
-> Contact

Writing
-> Article detail

Article detail
-> related Writing
-> related Projects where meaningful

Tools
-> related Projects
-> related Work
```

Requirements:

- important routes must not be orphaned
- link labels must be meaningful
- related links must be contextually justified
- do not add links solely for search manipulation
- OD-13 remains OPEN unless separately resolved

## Route SEO Matrix

| Route | Indexable when | Title source | Description source | Canonical | OG | Structured data candidate | Sitemap |
|---|---|---|---|---|---|---|---|
| `/` | READY | route contract | route content/default | `/` | Yes | WebSite/Person candidate | Yes |
| `/about` | READY | route pattern | route content/default | `/about` | Yes | ProfilePage/Person candidate | Yes |
| `/work` | READY | route pattern | route content/default | `/work` | Yes | None required | Yes |
| `/projects` | READY | route pattern | route content/default | `/projects` | Yes | None required | Yes |
| `/projects/[slug]` | published + READY | override -> project title -> fallback | override -> summary -> fallback | derived slug route | Yes | WebPage/CreativeWork candidate | Yes |
| `/writing` | READY | route pattern | route content/default | `/writing` | Yes | None required | Yes |
| `/writing/[slug]` | published + READY | override -> article title -> fallback | override -> excerpt -> fallback | derived slug route | Yes | Article/BlogPosting | Yes |
| `/tools` | READY | route pattern | route content/default | `/tools` | Yes | None required | Yes |
| `/contact` | READY | route pattern | route content/default | `/contact` | Yes | None required | Yes |

State exceptions in the Indexability Contract override this matrix.

Do not encode this matrix into application code in Batch 01.3.

## Global Metadata Resolver Contract

Global resolver order:

```text
route-specific/editorial metadata
-> semantic content-derived metadata
-> site-wide safe defaults
```

Static routes:

```text
route contract
-> global defaults
```

Projects and Articles:

```text
editorial override
-> semantic content
-> global default
```

Never allow:

- empty title because CMS override is absent
- empty description solely because optional metadata is absent
- accidental preview canonical
- arbitrary editor robots behavior
- missing image because optional social override is absent

## Phase 02 CMS Handoff

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

Preferred Phase 02 representation remains direct Project/Article overrides unless Phase 02 finds a real reuse requirement:

```text
Project
├── seoTitle?
├── seoDescription?
└── socialImage?

Article
├── seoTitle?
├── seoDescription?
└── socialImage?
```

This representation is not frozen in Batch 01.3.

Phase 02 must compare:

```text
A. direct optional Project/Article fields — preferred

versus

B. reduced reusable seoMetadata reference
```

Choose the reduced reusable `seoMetadata` reference only if real reuse, lifecycle, governance, or editorial workflow evidence justifies the extra reference complexity.

Legacy broad `seoMetadata` model status:

| Existing assumption | Classification | Batch 01.3 direction | Phase 02 action |
|---|---|---|---|
| `seoMetadata` reusable type | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Do not treat as approved schema truth. | Compare against preferred direct optional fields. |
| `title` | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Use only as conceptual title override input. | Decide optional direct field vs reduced reference. |
| `description` | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Use only as conceptual description override input. | Decide optional direct field vs reduced reference. |
| `canonicalUrl` | EXCLUDED FROM EDITORIAL V1 | Canonical is code-derived. | Remove or omit unless a new architecture decision exists. |
| `openGraphImage` | REFINED | Concept becomes optional `socialImage?` override. | Decide direct field vs reduced reference. |
| `noIndex` | EXCLUDED FROM EDITORIAL V1 | Indexability is route/state-derived. | Remove or omit unless a new architecture decision exists. |
| `noFollow` | EXCLUDED FROM EDITORIAL V1 | Page-level editorial noFollow excluded. | Remove or omit. |
| hard title length | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Treat as guidance, not a hard publication gate. | Decide validation only after field placement is approved. |
| hard description length | PROPOSED / REQUIRES PHASE 02 RECONCILIATION | Treat as guidance, not a hard publication gate. | Decide validation only after field placement is approved. |

Do not modify content-model ledgers or migrations in Batch 01.3.

## Decision Reconciliation

| Decision | Status |
|---|---|
| OD-07 — Final formal v1 route contract | RESOLVED / APPROVED; unchanged. |
| OD-08 — Skills vs Tools semantic boundary | RESOLVED / APPROVED by Batch 01.4 external validation. Exact Tool Contentful representation remains deferred to Phase 02. |
| OD-15 — SEO overrides vs generated defaults | RESOLVED / APPROVED by this contract. |

OD-15 resolution:

```text
SEO uses hybrid ownership.

Editorial:
- SEO title override
- SEO description override
- social image override

Technical:
- canonical
- robots/indexability
- sitemap
- structured data
- breadcrumbs
- preview exclusion

Exact Contentful representation remains deferred to Phase 02.
```

Remaining open decisions:

- OD-01 — canonical one-sentence positioning statement
- OD-02 — secondary professional title / specialty
- OD-03 — desired work type
- OD-04 — final status of AI-Assisted Workflows & Automation pillar
- OD-05 — final status of SEO, Accessibility & Content Quality pillar
- OD-06 — final skill-group taxonomy
- OD-09 — which three projects become homepage features
- OD-10 — which enterprise projects are safely publishable
- OD-11 — certification representation
- OD-12 — taxonomy depth
- OD-13 — manual vs derived related content
- OD-14 — public-safe homepage proof metrics

## Evidence Limitations

- External Batch 01.3 validation passed.
- No frontend metadata implementation was created.
- No sitemap, robots, Open Graph, or structured-data code was created.
- No static fixtures were created.
- No Contentful command was run.
- No Contentful schema, locale, environment, export, import, migration, field ID, reference, or seed mutation occurred.
- Exact Contentful SEO field representation remains deferred to Phase 02.
- Content Requirements Matrix work is approved in `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`.
- Batch 01.5 — Phase 01 Validation + Freeze — is approved, and Phase 01 is complete / frozen.

## Closeout State

Batch 01.3 is approved after external validation:

- At Batch 01.3 closeout, Phase 01 was ACTIVE. Phase 01 is now COMPLETE / FROZEN.
- Batch 01.1 is APPROVED.
- Batch 01.2 is APPROVED.
- Batch 01.3 is APPROVED.
- At Batch 01.3 closeout, Batch 01.4 advanced to NEXT. This is historical, not the current Batch 01.4 state.
- At Batch 01.3 closeout, Batch 01.5 was LATER. This is historical, not the current Batch 01.5 state.
- At Batch 01.3 closeout, Phase 02 was DEFERRED. Phase 02 is now ACTIVE; Batch 02.1 is approved, and Batch 02.2 is NEXT.
- Option 2 hybrid SEO ownership is documented.
- OD-15 is RESOLVED / APPROVED.
- OD-07 remains RESOLVED / APPROVED.
- OD-08 is RESOLVED / APPROVED by Batch 01.4 external validation.
- all nine approved v1 routes have SEO contract coverage.
- route-state SEO behavior is documented.
- technical SEO remains code/state-owned.
- future editorial SEO overrides are limited to title, description, and social image.
- legacy broad `seoMetadata` assumptions are classified for Phase 02 reconciliation.
- no Contentful schema, migration, seed, fixture, or frontend implementation occurred.
- bootstrap migration remains BLOCKED / NOT RUN.
- seed content remains NOT STARTED.
- no files are staged.
- no commit or push occurs in this implementation pass.
