# Content Requirements Matrix

Status: Phase 01 / Batch 01.4 — APPROVED / FROZEN FOR PHASE 02 INPUT
Owner: Phase 01 — Content Strategy + Route Contract
Source strategy: `docs/system/CONTENT-STRATEGY.md`
Source route contract: `docs/system/ROUTE-CONTRACT.md`
Source SEO contract: `docs/system/SEO-AND-METADATA-CONTRACT.md`

## Purpose

This is the canonical Phase 01 / Batch 01.4 surface for implementation-facing content requirements.

The matrix translates the approved content strategy, route contract, and SEO + metadata contract into route-level and domain-level requirements before Contentful schema, fixtures, frontend routes, adapters, metadata code, or live CMS integration are implemented.

This document does not define Contentful field IDs, content types, migrations, frontend component APIs, fixture files, view models, adapters, sitemap code, robots code, structured-data code, or seed content.

## Approved Inputs

Approved current state:

```text
Phase 01 — COMPLETE / FROZEN
Batch 01.1 — APPROVED
Batch 01.2 — APPROVED
Batch 01.3 — APPROVED
Batch 01.4 — APPROVED
Batch 01.5 — APPROVED
Phase 02 — COMPLETE / FROZEN
Batch 02.1 — APPROVED
Batch 02.2 — APPROVED
Batch 02.3 — APPROVED
Batch 02.4 — APPROVED
Batch 02.5 — RE-APPROVED AFTER RE2 COMPATIBILITY CORRECTION
Batch 02.6 — APPROVED / BOOTSTRAP EXECUTED SUCCESSFULLY IN DEV
Batch 02.7 — APPROVED / LIVE CONTRACT VALIDATED

Phase 03 — NEXT / NOT STARTED
Bootstrap migration — APPROVED RE2-CORRECTED V1 / SUCCESSFUL IN DEV
Seed content — NOT STARTED
```

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

Approved decisions preserved:

- OD-07 — Final formal v1 route contract: RESOLVED / APPROVED.
- OD-08 — Skills vs Tools semantic boundary: RESOLVED / APPROVED.
- OD-15 — SEO override/default strategy: RESOLVED / APPROVED.

Approved SEO architecture preserved:

- editorial SEO may later own only optional `seoTitle?`, `seoDescription?`, and `socialImage?` concepts;
- technical SEO remains code/state-owned;
- canonical URLs, robots/indexability, sitemap eligibility, structured data, breadcrumbs, preview exclusion, and metadata fallback resolution remain derived from route state, publication state, normalized content, and application configuration;
- legacy broad `seoMetadata` remains proposed legacy field/reference/migration evidence, but Batch 02.2 rejects it as a standalone v1 content type.

## Batch 01.4 Approval

Status: APPROVED

External validation: PASS

Approved:

- route-level content requirements for all nine v1 routes;
- requirement classification taxonomy;
- ownership taxonomy;
- canonical reuse rules;
- route-readiness requirements;
- fixture requirements;
- media requirements;
- accessibility requirements;
- SEO semantic inputs;
- public-safety requirements;
- directional Phase 02 handoff classifications;
- content-type pressure review;
- <=25 content-type constraint.

Resolved through this batch:

- OD-08 — Skills vs Tools semantic boundary.

Phase 02 continues to own exact schema representation.

## Matrix Principles

1. Requirements are derived from approved route purpose.
2. Content domains describe meaning, not CMS implementation.
3. Required content must answer the route's primary visitor question.
4. Optional content must not become accidentally mandatory.
5. Conditional requirements need an explicit condition.
6. Reused content must have one canonical semantic source.
7. Presentation variation does not justify duplicated content.
8. Page composition remains code-owned.
9. Route readiness depends on content sufficiency, not merely API success.
10. Public-safety and confidentiality requirements are part of content readiness.
11. Accessibility metadata is part of content readiness.
12. SEO editorial overrides are optional and must have semantic fallbacks.
13. Technical SEO remains code/state-owned.
14. Static fixtures must eventually represent important route/data states.
15. Future CMS implications are directional Phase 02 inputs.
16. A content requirement does not equal a Contentful field; no requirement automatically becomes a field.
17. A content domain does not equal a Contentful content type; no content domain automatically becomes a type.
18. Reuse should reduce duplication without creating unnecessary reference complexity.

## Requirement Taxonomy

| Level | Definition |
|---|---|
| REQUIRED | The route/content experience cannot fulfill its approved purpose without it. |
| OPTIONAL | Adds value but does not block route readiness. |
| CONDITIONAL | Required only when an explicit content condition exists. |
| DEFERRED | Explicitly outside v1 requirements. |
| NOT APPLICABLE | Not relevant to the route/content requirement. |

## Ownership Taxonomy

| Ownership | Definition |
|---|---|
| EDITORIAL | Meaning is author/editor controlled. |
| CODE | Behavior, composition, configuration, rendering, or implementation policy is application-owned. |
| DERIVED | Reliably calculated from canonical content, route state, publication state, or application configuration. |
| MIXED | Responsibility genuinely crosses layers; do not use merely because implementation is uncertain. |

## Content Source Taxonomy

Content domains are semantic planning sources, not Contentful content types.

Supported domains for this matrix:

- Profile
- Navigation
- Social Links
- Experience
- Project
- Article
- Skill
- Skill Group
- Tool
- Learning / Certification
- Contact
- SEO Editorial Override
- Global Site Configuration
- Media

## Phase 02 Handoff Classifications

| Classification | Meaning |
|---|---|
| LIKELY FIELD | Directionally likely to become a field or field-like value in Phase 02. No field ID is approved here. |
| LIKELY REFERENCE | Directionally likely to become a reference or relationship in Phase 02. No reference contract is approved here. |
| DERIVED — DO NOT MODEL | Should be calculated from route/content state instead of modeled editorially. |
| CODE CONFIG — DO NOT MODEL | Belongs to application configuration, layout, or code policy. |
| NEEDS PHASE 02 DECISION | Must be compared during Phase 02 before schema approval. |
| DEFERRED | Outside v1 or later-phase work. |

## Matrix Schema

Each route matrix uses these columns:

| Column | Meaning |
|---|---|
| Requirement | Human-readable content requirement. |
| Domain | Canonical semantic source. |
| Level | REQUIRED, OPTIONAL, CONDITIONAL, DEFERRED, or NOT APPLICABLE. |
| Ownership | EDITORIAL, CODE, DERIVED, or MIXED. |
| Reuse Source | Canonical reusable source, if any. |
| Route State Impact | READY, EMPTY, MISSING, DRAFT/PREVIEW, or ERROR implication. |
| Public-Safety Rule | Confidentiality/publication requirement. |
| Accessibility Rule | Alt text, headings, links, order, or other content accessibility requirement. |
| SEO Dependency | SEO input required or derived behavior. |
| Media Requirement | Required, optional, deferred, or not applicable media rule. |
| Fixture Need | Future representative fixture evidence. |
| Future CMS Implication | Directional Phase 02 classification only. |
| Notes / Open Decision | Unresolved decision or boundary note. |

## Route Requirements

### `/`

Route type: Landing.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Professional identity/name | Profile | REQUIRED | EDITORIAL | Profile | READY requires identity | Must not expose private personal data beyond approved professional identity | Clear primary heading or equivalent identity text | Semantic fallback for route title and structured-data candidates | Profile photo supports intended v1 presentation | Profile fixture | LIKELY FIELD | Same profile source reused elsewhere |
| Primary professional title | Profile | REQUIRED | EDITORIAL | Profile | READY requires positioning context | Use approved professional title only | Text must remain visible and readable | Title fallback input | N/A | Profile fixture | LIKELY FIELD | Approved: Web Content & Marketing Technologist |
| Positioning statement | Profile | REQUIRED | EDITORIAL | Profile | READY requires route answer | Must avoid unsupported claims | Primary page heading/subheading relationship must be clear | Description fallback input | N/A | Profile fixture | LIKELY FIELD | OD-01 remains open |
| Short professional summary | Profile | REQUIRED | EDITORIAL | Profile | READY requires summary | No unsupported metrics or embellishment | Logical content order | Description fallback input | N/A | Profile fixture | LIKELY FIELD | Summary should stay concise |
| Credibility/proof evidence | Project / Experience / Article | REQUIRED | MIXED | Project, Experience, Article | READY requires at least one proof path | Must be public-safe and evidence-backed | Descriptive links to deeper proof | Supports route semantic fallback | Media optional unless project preview media is used | Project, Experience, Article fixtures | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Proof metrics are conditional, not required |
| Featured projects target of 3 | Project | REQUIRED | EDITORIAL | Project | READY requires selected proof path; final three not chosen here | Only public-safe projects eligible | Project links must be descriptive | Project title/summary/social image can feed fallback | Project media required on project detail, optional in preview | 2-3 Project fixtures with featured eligibility | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-09 remains open |
| Experience snapshot | Experience | REQUIRED | EDITORIAL | Experience | READY requires professional context | Confidential employer details may be generalized | Dates/roles understandable as text | Supports professional experience intent | Logo optional/public-safe | 2-3 Experience fixtures | LIKELY REFERENCE | Do not duplicate Work history wholesale |
| Writing highlights | Article | REQUIRED | EDITORIAL | Article | READY requires writing authority path when available for v1 intent | Published/public articles only | Article links descriptive | Article title/excerpt feed fallback | Article hero optional | 2+ Article fixtures | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Selection/freshness logic remains implementation/Phase 02 question |
| Core expertise/skills | Skill / Skill Group | REQUIRED | EDITORIAL | Skill, Skill Group | READY requires capability signal | No subjective percentage scores | Text labels required, not icon-only meaning | Supports route description | N/A | 8-12 Skill fixtures, 2-4 Skill Group fixtures | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-06 resolved by supplemental Batch 02.4 decision reconciliation |
| Contact/conversion path | Contact / Social Links | REQUIRED | MIXED | Contact, Social Links | READY requires viable contact path | No private phone/address requirement | CTA/link text must describe destination | Static route metadata code-owned | N/A | Contact fixture, Social Links fixtures | LIKELY FIELD / LIKELY REFERENCE | CTA copy implementation-owned |
| Public-safe proof metrics | Project / Experience | CONDITIONAL | EDITORIAL | Project, Experience | Can strengthen READY but must not block when absent | Only credible, public-safe, non-confidential metrics | Metrics must be understandable as text | May strengthen route description but not required | N/A | Metric-present and metric-absent fixture states | LIKELY FIELD / NEEDS PHASE 02 DECISION | OD-14 remains open |
| Selected tools | Tool | OPTIONAL | EDITORIAL | Tool | Does not block READY | Must connect to actual work | Avoid logo-only meaning | Supports professional stack intent | Tool logo optional | Tool fixture | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Do not require exhaustive inventory |
| Availability | Contact / Profile | OPTIONAL | EDITORIAL | Profile or Contact | Does not block READY | Avoid private scheduling details | Plain text | May inform route description when present | N/A | Contact fixture variant | LIKELY FIELD | OD-03 remains open |
| Secondary About CTA | Navigation | OPTIONAL | CODE | Navigation | Does not block READY | N/A | Descriptive link text | N/A | N/A | Navigation fixture | CODE CONFIG — DO NOT MODEL | Exact label implementation-owned |
| Learning/certification evidence | Learning / Certification | OPTIONAL | EDITORIAL | Profile or Learning | Does not block READY | Credential URLs must be public-safe | Link text names credential/provider | Supports expertise if present | N/A | Optional credential fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | OD-11 resolved by Batch 02.2 as lightweight profile-owned content; Batch 02.3 approves `personProfile.learningHighlights` |
| Full resume, all projects, all writing, exhaustive skills/tools, long project narratives | Profile / Project / Article / Skill / Tool | NOT APPLICABLE | MIXED | Deeper routes | Must not be homepage readiness requirement | N/A | Avoid overwhelming route purpose | N/A | N/A | Negative fixture not needed | CODE CONFIG — DO NOT MODEL | Deeper routes own full detail |

### `/about`

Route type: Narrative.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Canonical profile identity | Profile | REQUIRED | EDITORIAL | Profile | READY requires profile | Use approved professional identity only | Clear page heading | Static route metadata derives from profile/route contract | Profile photo required for intended v1 presentation | Profile fixture | LIKELY FIELD | Reuse, do not duplicate About-only identity |
| Professional narrative | Profile | REQUIRED | EDITORIAL | Profile | READY requires sufficient narrative | No unsupported/confidential claims | Logical heading structure | Description fallback input | Profile photo supports narrative | Profile fixture | LIKELY FIELD | Long bio vs About narrative is Phase 02 guidance |
| Career evolution | Profile / Experience | REQUIRED | EDITORIAL | Profile, Experience | READY requires context | Condense confidential or older creative details safely | Narrative order must remain understandable | Supports static route semantic fallback | N/A | Profile + Experience fixtures | LIKELY FIELD / LIKELY REFERENCE | Do not duplicate Work history wholesale |
| Differentiation | Profile / Skill | REQUIRED | EDITORIAL | Profile, Skill | READY requires route answer | Claims must be evidence-backed | Clear section heading | Description fallback input | N/A | Profile/Skill fixture | LIKELY FIELD / LIKELY REFERENCE | OD-02 may affect phrasing |
| CMS/content-systems philosophy | Profile / Skill | REQUIRED | EDITORIAL | Profile, Skill | READY requires approach | Avoid proprietary details | Heading required | Supports expertise intent | N/A | Profile fixture | LIKELY FIELD | N/A |
| Frontend philosophy | Profile / Skill | REQUIRED | EDITORIAL | Profile, Skill | READY requires approach | Avoid confidential implementation details | Heading required | Supports expertise intent | N/A | Profile fixture | LIKELY FIELD | N/A |
| Content-operations philosophy | Profile / Experience | REQUIRED | EDITORIAL | Profile, Experience | READY requires approach | Avoid private workflow/process details | Heading required | Supports expertise intent | N/A | Profile/Experience fixture | LIKELY FIELD / LIKELY REFERENCE | N/A |
| Collaboration/working approach | Profile | REQUIRED | EDITORIAL | Profile | READY requires professional fit | Avoid unsupported personality claims | Plain language | Description fallback input | N/A | Profile fixture | LIKELY FIELD | N/A |
| Learning orientation | Profile / Learning | REQUIRED | EDITORIAL | Profile, Learning | READY requires ongoing growth signal | Credential details public-safe only | Descriptive links for credentials | Supports expertise intent | N/A | Profile fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | Certifications themselves optional |
| Career direction | Profile / Contact | REQUIRED | EDITORIAL | Profile, Contact | READY requires current direction | Avoid over-specific private job-search details unless approved | Clear CTA/link text | Description fallback input | N/A | Profile/Contact fixture | LIKELY FIELD | OD-03 remains open |
| Values | Profile | OPTIONAL | EDITORIAL | Profile | Does not block READY | Avoid generic filler | Section heading if used | N/A | N/A | Optional profile fixture | LIKELY FIELD | N/A |
| Certifications | Learning / Certification | OPTIONAL | EDITORIAL | Learning / Certification | Does not block READY | Public credential only | Descriptive credential links | Can support expertise | N/A | Optional certification fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | OD-11 resolved by Batch 02.2 as lightweight profile-owned content; Batch 02.3 approves `personProfile.learningHighlights` |
| Personal interests | Profile | OPTIONAL | EDITORIAL | Profile | Does not block READY | Keep professional and non-private | Plain text | N/A | N/A | Optional profile fixture | LIKELY FIELD | N/A |
| Deeper career-transition context | Profile / Experience | OPTIONAL | EDITORIAL | Profile, Experience | Does not block READY | Public-safe only | Narrative clarity | N/A | N/A | Optional profile fixture | LIKELY FIELD | Earlier creative work may be condensed |

### `/work`

Route type: Narrative / Collection hybrid.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Company/organization | Experience | REQUIRED | EDITORIAL | Experience | READY requires at least one public-safe item | May generalize or anonymize if needed | Company/role heading readable | Static route metadata code-owned | Logo optional/public-safe | 2-3 Experience fixtures | LIKELY FIELD | Confidential employer details not required |
| Role | Experience | REQUIRED | EDITORIAL | Experience | READY requirement | Public-safe title only | Role text readable | Supports route semantic meaning | N/A | Experience fixture | LIKELY FIELD | N/A |
| Start/end dates | Experience | REQUIRED | EDITORIAL | Experience | READY requirement | Public-safe dates only | Dates text-readable, not position-only | N/A | N/A | Experience fixture | LIKELY FIELD | Duration may be derived if reliable |
| Concise role summary | Experience | REQUIRED | EDITORIAL | Experience | READY requirement | Avoid confidential specifics | Clear paragraph structure | Supports route description | N/A | Experience fixture | LIKELY FIELD | N/A |
| Responsibilities | Experience | REQUIRED | EDITORIAL | Experience | READY requirement | Generalize proprietary details | Lists/headings clear | Supports route content | N/A | Experience fixture | LIKELY FIELD | N/A |
| Achievements/outcomes | Experience | REQUIRED | EDITORIAL | Experience | READY requirement | Evidence-backed and public-safe | Outcomes readable as text | Supports route content | N/A | Experience fixture | LIKELY FIELD | Metrics conditional |
| Tools/technologies | Tool | REQUIRED | EDITORIAL | Tool | READY requirement where relevant | Do not expose private/internal tooling | Text labels required | Supports professional stack intent | Logos optional | Tool fixtures | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-08 boundary approved; Batch 02.2 approves Tool type; fields/references deferred |
| CMS/platform where appropriate | Tool | REQUIRED | EDITORIAL | Tool | READY requirement where relevant | Public platform names only | Text labels required | Supports CMS/content evidence | Logos optional | Tool fixture | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | N/A |
| Public-safe metrics | Experience / Project | CONDITIONAL | EDITORIAL | Experience, Project | Required only when credible public metric exists | Must not expose confidential analytics | Text explanation required | Can support description but not required | N/A | Metric-present/absent fixture states | LIKELY FIELD / NEEDS PHASE 02 DECISION | OD-14 remains open |
| Location, employment type, company URL, logo, team/market scale | Experience / Media | OPTIONAL | EDITORIAL | Experience | Does not block READY | Public-safe only | Link/logo accessibility where used | N/A | Logo optional | Optional experience fixture | LIKELY FIELD | N/A |
| Related projects or writing | Project / Article | CONDITIONAL | EDITORIAL | Project, Article | Required only when relationship clarifies evidence | Related content must be public-safe | Descriptive links | Supports internal-link SEO intent | N/A | Related-content fixture variant | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 resolved by supplemental Batch 02.4 decision reconciliation |
| Earlier creative experience condensed representation | Experience | CONDITIONAL | EDITORIAL | Experience | Valid when useful to narrative; not all history required | Public-safe only | Clear chronology | N/A | N/A | Optional experience fixture | LIKELY FIELD | Do not require confidential employer detail |

### `/projects`

Route type: Collection.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Eligible public project inventory | Project | REQUIRED | EDITORIAL | Project | READY requires at least one eligible Project; otherwise EMPTY | Only public-safe projects eligible | Collection heading and project links clear | EMPTY defaults noindex per SEO contract | Preview image optional | 2-3 Project fixtures plus EMPTY state | LIKELY REFERENCE | OD-10 remains open |
| Project preview title | Project | REQUIRED | EDITORIAL | Project | READY item requirement | Public-safe title | Detail link descriptive | Semantic fallback input for detail | N/A | Project fixture | LIKELY FIELD | N/A |
| Summary | Project | REQUIRED | EDITORIAL | Project | READY item requirement | No confidential specifics | Clear preview text | Description fallback for detail | N/A | Project fixture | LIKELY FIELD | N/A |
| Project type | Project | REQUIRED | EDITORIAL | Project | READY item requirement | Public-safe classification | Text label | Supports SEO semantic meaning | N/A | Project fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | Taxonomy depth open |
| Role/context | Project / Experience | REQUIRED | EDITORIAL | Project, Experience | READY item requirement | Public-safe | Text-readable | Supports description | N/A | Project fixture | LIKELY FIELD / LIKELY REFERENCE | N/A |
| Primary capabilities | Skill | REQUIRED | EDITORIAL | Skill | READY item requirement | Public-safe | Text labels | Supports semantic classification | N/A | Skill fixture | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-06/OD-12 resolved by supplemental Batch 02.4 decision reconciliation |
| Technologies/platform context | Tool | REQUIRED | EDITORIAL | Tool | READY item requirement | Public platform/tool names only | Text labels, not logo-only | Supports route intent | Logos optional | Tool fixture | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-08 boundary approved; Batch 02.2 approves Tool type; fields/references deferred |
| Outcome indicator where meaningful | Project | CONDITIONAL | EDITORIAL | Project | Required only when credible public-safe outcome exists | No unsupported/confidential metrics | Outcome readable as text | Supports route description | N/A | Project fixture with/without metric | LIKELY FIELD | OD-14 remains open |
| Detail-route link | Project | REQUIRED | DERIVED | Project | READY requires valid intended detail route | Only link public-safe eligible details | Link text must identify project | Canonical derived from slug | N/A | Detail READY fixture | DERIVED — DO NOT MODEL | Slug identity belongs to Project detail |
| Representative image | Media | OPTIONAL | EDITORIAL | Project media | Does not block collection READY | Public-safe only | Meaningful alt if used | Social fallback if selected by detail | Optional in collection | Media present/absent variants | LIKELY FIELD / NEEDS PHASE 02 DECISION | Required on detail |
| Featured state / selected tags | Project / Skill / Tool | OPTIONAL | EDITORIAL | Project, Skill, Tool | Does not block collection READY | Public-safe | Text labels | Supports discovery; no meta-keywords | N/A | Optional fixture variant | NEEDS PHASE 02 DECISION | Filtering optional/deferred |
| Filters and search | Project | DEFERRED | CODE | Project | Not required for READY | N/A | N/A | N/A | N/A | Not created | DEFERRED | Volume must justify need |

### `/projects/[slug]`

Route type: Detail.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Title and slug identity | Project | REQUIRED | MIXED | Project | READY requires published route; unknown slug MISSING | Title/slug must not expose confidential names when unsafe | H1 must be clear | Title and slug are fallback/canonical inputs | N/A | Detail READY and MISSING fixtures | LIKELY FIELD; slug route path DERIVED | No field ID approved |
| Summary | Project | REQUIRED | EDITORIAL | Project | READY requirement | Public-safe summary only | Clear lead text | Description fallback input | N/A | Project fixture | LIKELY FIELD | N/A |
| Project type/status | Project | REQUIRED | EDITORIAL | Project | READY requirement where relevant | Public-safe status only | Text labels | Supports schema candidate content | N/A | Project fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | Taxonomy depth open |
| Role | Project / Experience | REQUIRED | EDITORIAL | Project, Experience | READY requirement | Public-safe role/contribution only | Text-readable | Description support | N/A | Project fixture | LIKELY FIELD / LIKELY REFERENCE | N/A |
| Problem and constraints | Project | REQUIRED | EDITORIAL | Project | READY requirement | May anonymize/generalize proprietary problem details | Section headings | Content must match metadata | N/A | Project fixture | LIKELY FIELD | N/A |
| Responsibilities/contribution | Project | REQUIRED | EDITORIAL | Project | READY requirement | Avoid confidential internal ownership claims | Section headings | Content must match metadata | N/A | Project fixture | LIKELY FIELD | N/A |
| Approach, process, solution | Project | REQUIRED | EDITORIAL | Project | READY requirement | Generalize proprietary architecture if needed | Logical heading order | Structured-data content must describe visible content | Diagrams optional | Project fixture | LIKELY FIELD | N/A |
| Outcomes and lessons learned | Project | REQUIRED | EDITORIAL | Project | READY requirement | Outcomes must be supported and public-safe | Outcomes text-readable | Description support | N/A | Project fixture | LIKELY FIELD | Metrics conditional |
| Representative hero/media | Media | REQUIRED | EDITORIAL | Project media | READY requires accessible required media | Must be public-safe; recreate/redact when needed | Meaningful alt text required | Social image fallback input | Hero/representative image required | Media present fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | Screenshots/gallery optional |
| Public-safe classification | Project | REQUIRED | EDITORIAL | Project | READY requires public-safe approval | Must classify publishability before public route | N/A | Indexability depends on public-safe content | N/A | Public-safe and blocked fixture notes | LIKELY FIELD / NEEDS PHASE 02 DECISION | OD-10 remains open |
| Relevant tags/classification | Project / Skill / Tool | REQUIRED | EDITORIAL | Skill, Tool | READY classification requirement | Public-safe labels only | Text labels | Supports semantic grouping, not meta-keywords | N/A | Project/Skill/Tool fixtures | NEEDS PHASE 02 DECISION | OD-12 resolved by supplemental Batch 02.4 decision reconciliation |
| Canonical route state | Project | REQUIRED | DERIVED | Project slug/publication state | READY/MISSING/DRAFT depends on slug and publication | Draft/preview cannot be public canonical | N/A | Canonical code-derived | N/A | READY/MISSING/DRAFT fixtures | DERIVED — DO NOT MODEL | Do not create freeform canonical field |
| SEO fallback inputs | Project / SEO Editorial Override | REQUIRED | MIXED | Project | READY requires semantic fallback; overrides optional | Must not override with misleading metadata | Social image alt/context where used | `seoTitle?`, `seoDescription?`, `socialImage?` optional; title/summary/image fallback | Hero image supports social fallback | Override and fallback fixtures | LIKELY FIELD / NEEDS PHASE 02 DECISION | Exact representation deferred |
| Organization/client, timeline, team, metrics, architecture, CMS/platform, frontend stack, screenshots, gallery, repo/live URL, related writing/experience | Project / Experience / Article / Tool / Media | CONDITIONAL | EDITORIAL | Project, Experience, Article, Tool | Required only when available, public-safe, and useful | May anonymize, generalize, redact, or omit | Links/media need accessible labels/alt | Supports internal-link SEO intent where relevant | Screenshots/gallery optional; video deferred | Conditional fixture variants | LIKELY FIELD / LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 resolved by supplemental Batch 02.4 decision reconciliation |

### `/writing`

Route type: Collection.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Eligible public article inventory | Article | REQUIRED | EDITORIAL | Article | READY requires at least one eligible Article; otherwise EMPTY | Published/public content only | Collection heading and article links clear | EMPTY defaults noindex per SEO contract | Hero optional | 2+ Article fixtures plus EMPTY state | LIKELY REFERENCE | N/A |
| Article preview title | Article | REQUIRED | EDITORIAL | Article | READY item requirement | Public-safe title | Link identifies article | Title fallback input | N/A | Article fixture | LIKELY FIELD | N/A |
| Excerpt | Article | REQUIRED | EDITORIAL | Article | READY item requirement | Public-safe summary | Clear preview text | Description fallback input | N/A | Article fixture | LIKELY FIELD | Manual excerpt preferred |
| Publication date | Article | REQUIRED | EDITORIAL | Article | READY item requirement | Public publish date | Date text-readable | Required semantic article input | N/A | Article fixture | LIKELY FIELD | N/A |
| Pillar/category where available | Article / Skill | CONDITIONAL | EDITORIAL | Article, Skill | Required when article classification exists | Public-safe category names | Text labels | Supports semantic grouping, not meta-keywords | N/A | Article taxonomy variant | NEEDS PHASE 02 DECISION | OD-05 remains open; OD-12 resolved by supplemental Batch 02.4 decision reconciliation |
| Article detail link | Article | REQUIRED | DERIVED | Article slug | READY item requirement | Only public articles link | Descriptive link text | Canonical derived from slug | N/A | Detail READY fixture | DERIVED — DO NOT MODEL | N/A |
| Hero image, updated date, tags, reading time, related project, featured state | Article / Project / Media | OPTIONAL | MIXED | Article, Project | Does not block collection READY | Public-safe media/relationships only | Alt text if image used | Reading time derived; related links contextual | Hero optional | Media present/absent, related-content variants | LIKELY FIELD / LIKELY REFERENCE / DERIVED — DO NOT MODEL | OD-13 resolved by supplemental Batch 02.4 decision reconciliation |
| Search | Article | DEFERRED | CODE | Article | Not required for READY | N/A | N/A | N/A | N/A | Not created | DEFERRED | N/A |
| Complex taxonomy | Article / Skill | DEFERRED | EDITORIAL | Article, Skill | Not required for READY | Public-safe only if later used | Text labels | Not meta-keywords | N/A | Not created | DEFERRED / NEEDS PHASE 02 DECISION | OD-12 resolved by supplemental Batch 02.4 decision reconciliation |
| Filtering | Article | OPTIONAL | CODE | Article | Does not block READY | N/A | N/A | N/A | N/A | Optional future fixture only | NEEDS PHASE 02 DECISION | Volume must justify |

### `/writing/[slug]`

Route type: Detail.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Title and slug identity | Article | REQUIRED | MIXED | Article | Published/content-ready = READY; unknown slug = MISSING | Public-safe title/slug | H1 clear | Title and slug are fallback/canonical inputs | N/A | Detail READY and MISSING fixtures | LIKELY FIELD; slug route path DERIVED | No field ID approved |
| Excerpt/summary | Article | REQUIRED | EDITORIAL | Article | READY requirement | Public-safe summary | Lead/summary readable | Description fallback input | N/A | Article fixture | LIKELY FIELD | N/A |
| Publication date | Article | REQUIRED | EDITORIAL | Article | READY requirement | Public publish date | Date text-readable | Required semantic article input | N/A | Article fixture | LIKELY FIELD | N/A |
| Author/profile context | Profile | REQUIRED | EDITORIAL | Profile | READY requirement | Public profile only | Author link/text descriptive | Structured-data candidate input | Profile photo optional in article context | Profile fixture | LIKELY REFERENCE | Reuse canonical Profile |
| Body | Article | REQUIRED | EDITORIAL | Article | READY requirement | No confidential details | Logical headings, readable order, descriptive links | Metadata must match visible content | Inline media optional | Article fixture | LIKELY FIELD | N/A |
| Classification/pillar where applicable | Article / Skill | CONDITIONAL | EDITORIAL | Article, Skill | Required when classification exists | Public-safe labels | Text labels | Supports semantic grouping, not meta-keywords | N/A | Article classification variant | NEEDS PHASE 02 DECISION | OD-05 remains open; OD-12 resolved by supplemental Batch 02.4 decision reconciliation |
| Public publication state | Article | REQUIRED | MIXED | Article | Draft/unpublished = DRAFT/PREVIEW, not public READY | Draft content not public | N/A | Robots/indexability derived from publication state | N/A | Draft/preview fixture | LIKELY FIELD / DERIVED — DO NOT MODEL | Preview implementation unresolved |
| SEO fallback inputs | Article / SEO Editorial Override / Profile | REQUIRED | MIXED | Article, Profile | READY requires semantic fallback; overrides optional | Overrides must match article content | Social image alt/context where used | `seoTitle?`, `seoDescription?`, `socialImage?` optional; title/excerpt/image/author/date fallback | Hero optional | Override and fallback fixtures | LIKELY FIELD / NEEDS PHASE 02 DECISION | Exact representation deferred |
| Updated date, hero image, table of contents, references, code examples, tags, related articles, related projects, reading time | Article / Project / Media / Tool | OPTIONAL | MIXED | Article, Project, Tool | Does not block READY unless content pattern requires it | Public-safe references/code only | Code examples accessible; links descriptive; alt text if media used | Reading time derived; updated date semantic if shown | Hero/inline images optional; video deferred | Optional variants | LIKELY FIELD / LIKELY REFERENCE / DERIVED — DO NOT MODEL | OD-13 resolved by supplemental Batch 02.4 decision reconciliation |

### `/tools`

Route type: Collection / Reference.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Tool name | Tool | REQUIRED | EDITORIAL | Tool | READY requires at least one tool; otherwise EMPTY | Public tool/platform names only | Text label required | Static route metadata code-owned | Logo optional | 6-12 Tool fixtures | LIKELY FIELD / NEEDS PHASE 02 DECISION | Tool = product/platform/framework/software |
| Category | Tool / Skill Group | REQUIRED | EDITORIAL | Tool, Skill Group | READY requirement | Public-safe label | Text label | Supports discovery, not meta-keywords | N/A | Tool category fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | OD-06/OD-12 resolved by supplemental Batch 02.4 decision reconciliation |
| Professional usage context | Tool | REQUIRED | EDITORIAL | Tool | READY requirement | Must relate to real work without private details | Plain explanatory text | Supports route description | N/A | Tool fixture | LIKELY FIELD | Not a logo wall |
| Relationship to actual work | Project / Experience / Skill | REQUIRED | EDITORIAL | Project, Experience, Skill | READY requirement for meaningful route | Public-safe relationships only | Descriptive links | Supports internal-link SEO intent | N/A | Related project/experience fixture | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 resolved by supplemental Batch 02.4 decision reconciliation |
| Logo/icon | Media | OPTIONAL | EDITORIAL | Tool media | Does not block READY | Public-safe/logo rights considered later | Decorative unless meaningful; text label still required | N/A | Optional | Media present/absent fixture | LIKELY FIELD / NEEDS PHASE 02 DECISION | No icon-only meaning |
| External documentation URL | Tool | OPTIONAL | EDITORIAL | Tool | Does not block READY | Public URL only | Link text descriptive | External links policy later | N/A | Optional tool fixture | LIKELY FIELD | N/A |
| Featured state | Tool | OPTIONAL | EDITORIAL | Tool | Does not block READY | Public-safe | Text label if shown | N/A | N/A | Optional fixture | NEEDS PHASE 02 DECISION | N/A |
| Subjective proficiency percentage | Skill / Tool | DEFERRED | CODE | N/A | Not part of READY | Avoid false precision | N/A | N/A | N/A | Not created | DEFERRED | Do not model |
| Hardware inventory | Tool | DEFERRED | EDITORIAL | N/A | Not part of READY | N/A | N/A | N/A | N/A | Not created | DEFERRED | N/A |

### `/contact`

Route type: Utility / Conversion.

| Requirement | Domain | Level | Ownership | Reuse Source | Route State Impact | Public-Safety Rule | Accessibility Rule | SEO Dependency | Media Requirement | Fixture Need | Future CMS Implication | Notes / Open Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Short professional invitation | Contact / Profile | REQUIRED | EDITORIAL | Contact, Profile | READY requires professional context | Avoid unsupported availability claims | Clear page heading/intro | Static route metadata code-owned | N/A | Contact fixture | LIKELY FIELD | N/A |
| Primary email/contact method | Contact | REQUIRED | EDITORIAL | Contact | READY requires viable contact method | Do not expose private phone/address | Link label names email/contact action | Contact route intended indexable | N/A | Contact fixture | LIKELY FIELD | N/A |
| LinkedIn | Social Links | REQUIRED | EDITORIAL | Social Links | READY supporting professional contact | Public profile URL only | Descriptive link text; no icon-only link | Supports professional identity | N/A | Social Links fixture | LIKELY REFERENCE | N/A |
| Professional conversion intent | Contact / Profile | REQUIRED | EDITORIAL | Contact, Profile | READY requires route answer | Avoid private job-search details unless approved | CTA text descriptive | Description fallback input | N/A | Contact fixture | LIKELY FIELD | OD-03 remains open |
| GitHub | Social Links | OPTIONAL | EDITORIAL | Social Links | Does not block READY | Public profile URL only | Descriptive link text | Supports technical evidence | N/A | Social Links fixture | LIKELY REFERENCE | N/A |
| Resume access | Media / Profile | OPTIONAL | EDITORIAL | Profile / Media | Does not block Contact READY, but resume PDF is required v1 media | Public-safe resume only | Link identifies PDF | N/A | Downloadable PDF required for intended v1 system | Resume fixture target later | LIKELY FIELD / NEEDS PHASE 02 DECISION | Resume is asset/link, not a route |
| Availability/context and role/collaboration preference | Contact / Profile | OPTIONAL | EDITORIAL | Contact, Profile | Does not block READY | Keep public-safe and current | Plain text | May support route description | N/A | Contact variant | LIKELY FIELD | OD-03 remains open |
| Contact form | Contact | DEFERRED | CODE | N/A | Not part of READY | Avoid unnecessary personal data collection | N/A | N/A | N/A | Not created | DEFERRED | N/A |
| Residential address, private phone, unnecessary personal data | Contact | NOT APPLICABLE | EDITORIAL | N/A | Must not be required | Do not publish | N/A | N/A | N/A | Negative fixture not needed | CODE CONFIG — DO NOT MODEL | Explicitly excluded |

## Canonical Reuse Matrix

Rule:

```text
same meaning -> same canonical source
different presentation -> presentation layer variation
```

| Domain | Consumed By | Canonical Reuse Rule | Phase 02 Direction |
|---|---|---|---|
| Profile | `/`, `/about`, `/contact`, `/writing/[slug]` author context, SEO/structured-data input, footer/resume CTA contexts | One profile source owns identity, title, bio, photo, public contact context, and author context. | Semantic reuse likely justified. |
| Experience | `/`, `/about` where context is useful, `/work`, related Project evidence | Experience owns employment/role context; homepage and About consume summaries only. | Standalone domain likely justified. |
| Project | `/`, `/work` where related, `/projects`, `/projects/[slug]`, `/writing/[slug]` where related, `/tools` where evidence is relevant | Project owns preview and detail meaning; index/home/work/tools consume summaries or relationships. | Standalone domain clearly justified. |
| Article | `/`, `/projects/[slug]` where related, `/writing`, `/writing/[slug]` | Article owns writing meaning; homepage and related-content surfaces consume previews/relationships. | Standalone domain clearly justified. |
| Skill | `/`, `/about`, `/work`, `/projects/[slug]`, `/tools` relationships | Skill owns capability labels. Tools may connect to skills but do not replace them. | Skill model likely; taxonomy still open. |
| Tool | `/`, `/work`, `/projects/[slug]`, `/tools` | Tool owns product/platform/framework/software meaning and usage context. | Batch 02.2 approves Tool as a standalone v1 type; fields and relationships remain downstream. |
| Social Links | `/`, `/about`, `/contact`, footer/profile contexts | Social links own public social destinations. | Reuse likely justified. |
| Contact | `/`, `/about`, `/work`, `/projects/[slug]`, `/writing/[slug]`, `/contact` | Contact owns conversion context and approved contact methods. | Batch 02.2 rejects a standalone Contact type; compose from profile/site/social sources and code. |
| SEO Editorial Override | Project and Article detail content | Overrides are optional and only for title, description, and social image. Semantic fallbacks always exist. | Direct Project/Article fields remain preferred unless reuse evidence justifies reduced reference. |

Do not duplicate canonical editorial content simply because two pages render it differently.

## Skills vs Tools Decision Review

OD-08 entering state: PROPOSED / OPEN.

OD-08 approval state: RESOLVED / APPROVED by external Batch 01.4 validation.

The matrix can consistently classify:

| Example | Classification | Reason |
|---|---|---|
| Content modeling | Skill | Professional capability. |
| Accessibility QA | Skill | Professional capability and practice area. |
| Frontend development | Skill | Professional capability. |
| Content operations | Skill | Professional capability. |
| SEO | Skill | Professional capability and quality practice. |
| Migration strategy | Skill | Professional capability. |
| Contentful | Tool | CMS platform used to exercise CMS/content capabilities. |
| AEM | Tool | CMS platform. |
| Next.js | Tool | Framework used to exercise frontend capability. |
| React | Tool | Library/framework used to exercise frontend capability. |
| Siteimprove | Tool | SEO/accessibility platform. |
| GitHub | Tool | Developer/collaboration platform. |
| Figma | Tool | Design/collaboration platform. |

Batch 01.4 finding:

- The working boundary is materially supported by the requirements matrix.
- No counterexample in current v1 requirements requires merging skills and tools.
- External validation approved the semantic distinction.

Approved OD-08 resolution:

```text
Skill = professional capability.
Tool = product, platform, framework, technology, or software used to exercise capability.
```

OD-08 itself did not decide whether Tool becomes a standalone Contentful content type. Phase 02 / Batch 02.2 later approves Tool as a standalone v1 type; Batch 02.3 approves exact Tool field IDs; Batch 02.4 approves references and validations.

## Fixture Requirements Matrix

Future fixtures are required later for validation only. Batch 01.4 creates no fixtures.

| Domain / State | Minimum Representative Future Fixture | Purpose |
|---|---:|---|
| Profile | 1 | Identity, bio, author context, contact context, profile photo. |
| Experience | 2-3 | Current/relevant role evidence plus condensed earlier context. |
| Project | 2-3 | Public-safe project previews/details with at least one homepage-feature candidate. |
| Article | minimum 2 | Writing collection/detail coverage. |
| Skill Group | 2-4 | Grouping/taxonomy review. |
| Skills | 8-12 | Capability labels and relationships to projects/tools/work. |
| Tools | 6-12 | Tool inventory and skills-vs-tools validation. |
| Navigation | complete v1 | Header/footer route inventory and internal links. |
| Social Links | 2-4 | LinkedIn, GitHub, and other approved professional destinations. |
| Contact | 1 configuration | Contact copy, email/contact method, social links, resume access. |
| SEO Overrides | at least one override case + one fallback case | Validate optional override and semantic fallback behavior. |

Future route/state fixture coverage:

| State Need | Target |
|---|---|
| Collection READY | `/projects`, `/writing`, `/tools` with eligible content. |
| Collection EMPTY | At least one collection route with no eligible public content. |
| Detail READY | One published Project and one published Article detail. |
| Detail MISSING | One unknown Project slug and one unknown Article slug. |
| Detail DRAFT/PREVIEW | One draft/unpublished Project or Article state. |
| Metadata override | One Project or Article with optional SEO override concepts. |
| Metadata fallback | One Project or Article relying on title/summary/image fallback. |
| Media present | Profile photo and Project hero/representative image. |
| Media optional/absent | Article hero absent and optional logos/screenshots absent where permitted. |

## Media Requirements Matrix

| Domain | Media | Level | Accessibility Requirement | Public-Safety Requirement | Phase 02 Direction |
|---|---|---|---|---|---|
| Profile | Profile photo | REQUIRED | Meaningful alt text when image conveys identity. | Public-safe professional image only. | LIKELY FIELD / NEEDS PHASE 02 DECISION |
| Project | Hero / representative image | REQUIRED | Meaningful alt text required. | Must not reveal confidential screenshots, customer data, internal URLs, or unreleased work. | LIKELY FIELD / NEEDS PHASE 02 DECISION |
| Project | Screenshots | OPTIONAL | Meaningful alt text when used. | Redact, recreate, or omit confidential details. | NEEDS PHASE 02 DECISION |
| Project | Gallery | OPTIONAL | Each meaningful image needs alt/context. | Public-safe only. | NEEDS PHASE 02 DECISION |
| Project / Article | Diagram | OPTIONAL | Text alternative or explanatory caption where needed. | May recreate/generalize proprietary architecture. | NEEDS PHASE 02 DECISION |
| Project / Article | Video | DEFERRED | Captions/transcripts required if future video is used. | Public-safe only. | DEFERRED |
| Article | Hero image | OPTIONAL | Meaningful alt text when used. | Public-safe only. | NEEDS PHASE 02 DECISION |
| Article | Inline image | OPTIONAL | Meaningful alt text when used. | Public-safe only. | NEEDS PHASE 02 DECISION |
| Experience | Logo | OPTIONAL | Decorative or meaningful alt based on use. | Public logo/use only. | NEEDS PHASE 02 DECISION |
| Tool | Logo/icon | OPTIONAL | Decorative unless meaningful; text label still required. | Public-safe logo/icon only. | NEEDS PHASE 02 DECISION |
| Resume | Downloadable PDF | REQUIRED | Link text identifies PDF. | Public-safe resume only. | NEEDS PHASE 02 DECISION |

## Accessibility Requirement Matrix

Accessibility requirements are part of content readiness.

| Requirement | Applies To | Content Readiness Rule |
|---|---|---|
| Meaningful image alt text | Meaningful editorial images, Project hero, profile image, screenshots, diagrams | Required when image conveys meaning. |
| Decorative empty alt | Decorative media, repeated logos/icons where text label exists | Required when media is decorative. |
| Descriptive link text | All routes | Required for internal route links, external links, resume, social links, and related content. |
| Clear primary page heading | All routes | Required for route readiness. |
| Logical heading structure | All routes, especially narrative/detail pages | Required for route readability and accessibility. |
| Accessible content order | All routes | Required; visual layout may vary but semantic order must hold. |
| Non-color-only meaning | All routes | Required; tags, metrics, states, and categories need text meaning. |
| Captions/transcripts | Future video when used | Deferred until video exists, then required. |
| Public-safe descriptive media | Enterprise/project evidence | Required where media describes protected work without exposing confidential details. |

## SEO Requirement Inputs

This matrix consumes the approved SEO contract and does not redesign it.

| Route / Content | Editorial SEO Input | Required Semantic Fallback | Technical SEO | Phase 02 Direction |
|---|---|---|---|---|
| Static routes (`/`, `/about`, `/work`, `/projects`, `/writing`, `/tools`, `/contact`) | None required in v1 | Approved route contract and visible route content | Route metadata contract is code-owned | CODE CONFIG — DO NOT MODEL |
| Project detail | Optional `seoTitle?`, `seoDescription?`, `socialImage?` | Title, summary, representative image, slug, publication state | Canonical, robots/indexability, sitemap, structured data, breadcrumbs derived | LIKELY FIELD / NEEDS PHASE 02 DECISION |
| Article detail | Optional `seoTitle?`, `seoDescription?`, `socialImage?` | Title, excerpt, representative image if available, slug, publication state, author, publish date, updated date where applicable | Canonical, robots/indexability, sitemap, structured data, breadcrumbs derived | LIKELY FIELD / NEEDS PHASE 02 DECISION |
| Legacy broad `seoMetadata` | Not approved as broad editorial schema | N/A | Technical SEO excluded from editorial v1 | NEEDS PHASE 02 DECISION |

SEO exclusions preserved:

- no meta-keywords strategy;
- no freeform editorial canonical URL;
- no arbitrary editor robots directives;
- no page-level editorial `noFollow`;
- no sitemap checkbox;
- no arbitrary structured-data JSON.

## Public-Safety Requirements

Never require publication of:

- credentials;
- tokens;
- private environment data;
- internal URLs;
- confidential screenshots;
- customer data;
- employee data;
- unreleased work;
- proprietary architecture;
- confidential analytics;
- unsupported or confidential metrics;
- residential address;
- private phone number.

Allowed transformations:

- anonymize;
- generalize;
- recreate;
- redact;
- aggregate;
- describe problem class;
- describe role/contribution;
- describe public-safe outcome.

A Project or Experience item can remain content-ready when confidential details are intentionally omitted, provided the remaining public-safe content still answers the route's visitor question.

## Route Readiness Crosswalk

| Route | Minimum Readiness Condition | Empty / Missing / Draft Impact |
|---|---|---|
| `/` | Identity + positioning + proof path + navigation/conversion. | EMPTY/MISSING/DRAFT not applicable for normal public homepage; ERROR controlled by application. |
| `/about` | Sufficient narrative + canonical profile context. | EMPTY/MISSING/DRAFT not applicable; ERROR controlled by application. |
| `/work` | Enough public-safe experience content to fulfill professional context. | EMPTY supported when no eligible public experience content exists. |
| `/projects` | At least one eligible public Project preview, otherwise EMPTY. | EMPTY supported and should not be treated as API failure. |
| `/projects/[slug]` | Published + public-safe + required case-study content + accessible required media + valid route. | Unknown slug = MISSING; draft/unpublished = DRAFT/PREVIEW; ERROR controlled. |
| `/writing` | At least one eligible public Article preview, otherwise EMPTY. | EMPTY supported and should not be treated as API failure. |
| `/writing/[slug]` | Published + required article content + author context + public publication state. | Unknown slug = MISSING; draft/unpublished = DRAFT/PREVIEW; ERROR controlled. |
| `/tools` | Enough tool content with category and professional usage context, otherwise EMPTY. | EMPTY supported when no eligible tools exist. |
| `/contact` | Viable public contact method + professional conversion context. | EMPTY/MISSING/DRAFT not applicable; ERROR controlled by application. |

Do not implement readiness logic in Batch 01.4.

## Phase 02 Handoff Matrix

| Requirement Class | Example | Directional Classification | Note |
|---|---|---|---|
| Project title | Case-study title | LIKELY FIELD | No field ID approved. |
| Project slug | Detail route identity | LIKELY FIELD / DERIVED — DO NOT MODEL for canonical URL | Slug value may be modeled; canonical URL is derived. |
| Project related Article | Related writing | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Manual vs derived resolved by OD-13 and the approved Batch 02.4 reference contract. |
| Project canonical URL | Absolute route URL | DERIVED — DO NOT MODEL | Code/state-derived. |
| Project SEO title override | Optional editorial override | LIKELY FIELD / NEEDS PHASE 02 DECISION | Direct Project field preferred unless reuse evidence justifies reduced reference. |
| Article reading time | Estimated reading duration | DERIVED — DO NOT MODEL | Calculate from article body if reliable. |
| Article related Project | Evidence relationship | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 resolved by supplemental Batch 02.4 decision reconciliation. |
| Static route section order | Page composition | CODE CONFIG — DO NOT MODEL | ADR-004 preserved. |
| Homepage featured project selection | Curated project references | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Target is 3; exact projects remain OD-09. |
| Skills/tools relationship | Capability to technology mapping | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-08 semantic boundary approved; exact representation remains Phase 02 work. |
| Taxonomy/tags | Category labels | NEEDS PHASE 02 DECISION | OD-12 resolved by supplemental Batch 02.4 decision reconciliation. |
| Contact form | Form model | DEFERRED | Not v1. |
| Page-level `noFollow` | Editorial robots control | DERIVED — DO NOT MODEL / DEFERRED | Explicitly excluded from v1 editorial SEO. |
| Generic page/page section | CMS-driven page composition | DEFERRED | ADR-004 preserved. |

No field IDs, content types, or reference validations are approved by this matrix.

## Model Pressure Review

| Observation | Pressure | Direction |
|---|---|---|
| Profile is heavily reused. | Semantic reuse likely justified. | Keep Profile as canonical identity source. |
| Project is heavily reused. | Standalone domain clearly justified. | Project remains core proof domain. |
| Article is heavily reused. | Standalone domain clearly justified. | Article remains core writing domain. |
| Experience is independently meaningful and reused. | Likely standalone domain. | Experience remains professional context domain. |
| Skill vs Tool distinction is supported by requirements. | Boundary is materially valid. | OD-08 resolved; Batch 02.2 approves Tool as a standalone v1 type; fields approved by Batch 02.3; references/validations approved by Batch 02.4. |
| SEO override values are owned by Project/Article meaning. | Reuse requirement not demonstrated enough for a standalone type. | Batch 02.2 absorbs SEO override concepts into owning content; Batch 02.3 approves exact field IDs. |
| Learning/certification remains lightweight. | No standalone type required by current requirements. | OD-11 resolved by Batch 02.2 as lightweight profile-owned content; Batch 02.3 approves `personProfile.learningHighlights`. |
| Related content appears in Projects, Writing, and Work. | Relationship approach needs decision. | OD-13 resolved by supplemental Batch 02.4 decision reconciliation. |
| Taxonomy is useful but not deeply specified. | Avoid uncontrolled taxonomy types. | OD-12 resolved by supplemental Batch 02.4 decision reconciliation. |

## Content Type Cap Check

Current approved standalone v1 type count is 10 and remains comfortably below the Contentful cap of 25.

Batch 01.4 requirements do not currently demand uncontrolled type growth.

New or still-open Phase 02 model questions:

- exact Tool relationships and validation rules;
- exact lightweight Learning / Certification profile fields;
- whether taxonomy remains controlled text/arrays or requires referenced entries;
- whether related content is manual editorial selection, derived relationship, or mixed;
- exact SEO override fields on owning Project/Article content.

Do not create content types in Batch 01.4.

## Decision Reconciliation

Resolved decisions preserved:

- OD-07 — Final formal v1 route contract: RESOLVED / APPROVED.
- OD-08 — Skills vs Tools semantic boundary: RESOLVED / APPROVED.
- OD-11 — certification / learning representation: RESOLVED / APPROVED by Phase 02 / Batch 02.2 as lightweight profile-owned content.
- OD-06 — final skill-group taxonomy: RESOLVED / APPROVED by supplemental Phase 02 / Batch 02.4 decision validation.
- OD-12 — taxonomy depth: RESOLVED / APPROVED by supplemental Phase 02 / Batch 02.4 decision validation.
- OD-13 — manual vs derived related content: RESOLVED / APPROVED by supplemental Phase 02 / Batch 02.4 decision validation.
- OD-15 — SEO override/default strategy: RESOLVED / APPROVED.

Remaining open decisions:

- OD-01 — canonical one-sentence positioning statement.
- OD-02 — secondary professional title / specialty.
- OD-03 — desired work type.
- OD-04 — final status of AI-Assisted Workflows & Automation pillar.
- OD-05 — final status of SEO, Accessibility & Content Quality pillar.
- OD-09 — which three projects become homepage features.
- OD-10 — which enterprise projects are safely publishable.
- OD-14 — public-safe homepage proof metrics.

Requirement-related narrowing:

- OD-09: homepage requires 3 manually curated featured Project references; exact projects remain open.
- OD-10: project and experience readiness require public-safety classification; exact publishable enterprise projects remain open.
- OD-11: certifications remain optional/lightweight v1 and profile-owned; Batch 02.3 approves `personProfile.learningHighlights`.
- OD-12: taxonomy must support useful classification without filters or complex taxonomy in v1; resolved by supplemental Batch 02.4 decision reconciliation.
- OD-13: related content is required conceptually where useful; authored vs derived strategy resolved by supplemental Batch 02.4 decision reconciliation.
- OD-14: proof metrics are CONDITIONAL and public-safe only; final metrics remain open.

## Evidence Limitations

- External Batch 01.4 validation passed.
- No Contentful command was run.
- No Contentful schema, field ID, reference validation, migration, locale, environment, export, import, or seed mutation occurred.
- No fixtures were created.
- No frontend implementation was created.
- No SEO implementation was created.
- Field-level Contentful representation is approved by Phase 02 / Batch 02.3; references, validations, editor interfaces, and migration implementation remain downstream.
- Batch 01.5 is approved, Phase 01 is complete / frozen, and this matrix is frozen for Phase 02 input.

## Closeout State

Batch 01.4 is approved after external validation:

- At Batch 01.4 closeout, Phase 01 was ACTIVE. Phase 01 is now COMPLETE / FROZEN.
- Batch 01.1 is APPROVED.
- Batch 01.2 is APPROVED.
- Batch 01.3 is APPROVED.
- Batch 01.4 is APPROVED.
- At Batch 01.4 closeout, Batch 01.5 advanced to NEXT. Batch 01.5 is now APPROVED, and Phase 01 is complete / frozen.
- At Batch 01.4 closeout, Phase 02 was DEFERRED. Phase 02 is now COMPLETE / FROZEN; Batch 02.1 through Batch 02.4 are APPROVED, Batch 02.5 is RE-APPROVED AFTER COMPATIBILITY CORRECTIONS, Batch 02.6 is APPROVED after successful bootstrap execution in `dev`, and Batch 02.7 is APPROVED after external validation confirmed zero material live-contract drift. Phase 03 is NEXT / NOT STARTED.
- all nine approved routes have content requirements.
- required, optional, conditional, deferred, and not-applicable requirements are classified.
- editorial/code/derived/mixed ownership is classified.
- canonical reuse rules are documented.
- route readiness and route-state impacts are documented.
- future fixture, media, accessibility, SEO-input, public-safety, and Phase 02 handoff requirements are documented.
- content-type pressure remains controlled and below the 25-type cap.
- OD-07, OD-08, OD-11, and OD-15 are RESOLVED / APPROVED.
- unrelated open decisions remain visible.
- no Contentful schema, migration, seed, fixture, or frontend implementation occurred.
- at Batch 01.4 closeout, the bootstrap migration remained BLOCKED / NOT RUN; Batch 02.6 later executed the approved migration successfully in `dev`.
- seed content remains NOT STARTED.
- no files are staged.
- no commit or push occurs in this implementation pass.
