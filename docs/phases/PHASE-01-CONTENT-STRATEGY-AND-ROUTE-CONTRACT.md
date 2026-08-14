# Phase 01 — Content Strategy + Route Contract

Status: ACTIVE
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
| 01.2 | Route Contract | NEXT |
| 01.3 | SEO + Metadata Contract | LATER |
| 01.4 | Content Requirements Matrix | LATER |
| 01.5 | Phase 01 Validation + Freeze | LATER |

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

Batch 01.1 records preliminary route input. Batch 01.2 owns the formal route contract.

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

Open SEO decision: which content requires dedicated editorial SEO overrides versus generated defaults.

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
| OD-07 | Final formal v1 route contract |
| OD-08 | Exact content boundary between `/tools` and skills |
| OD-09 | Which three projects become homepage features |
| OD-10 | Which enterprise projects are safely publishable |
| OD-11 | Certification representation |
| OD-12 | Taxonomy depth |
| OD-13 | Manual vs derived related content |
| OD-14 | Public-safe homepage proof metrics |
| OD-15 | SEO overrides vs generated defaults |

Most open decisions belong naturally to later Phase 01 batches and are not Batch 01.1 failures.

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

Open decisions remain intentionally unresolved and do not block Batch 01.2.

Next: Batch 01.2 — Route Contract

Closeout state:

- Phase 01 is ACTIVE.
- Batch 01.1 is APPROVED.
- Batch 01.2 is NEXT.
- Phase 02 is DEFERRED.
- `docs/system/CONTENT-STRATEGY.md` contains the reconciled strategy foundation.
- `docs/system/ROUTE-CONTRACT.md` records preliminary route inventory without approving the formal route contract.
- assumptions remain assumptions.
- open decisions remain visible.
- bootstrap migration remains BLOCKED / NOT RUN.
- seed content remains NOT STARTED.
- no Contentful mutation, frontend implementation, fixture creation, staging, commit, or push occurred.
