# Content Strategy

Status: Phase 01 / Batch 01.1 — APPROVED / FROZEN FOR PHASE 02 INPUT
Owner: Phase 01 — Content Strategy + Route Contract
Current downstream consumer: Phase 02 — Content Model Contract + Bootstrap Migration — ACTIVE / Batch 02.3 NEXT

## Purpose

This is the canonical content-strategy surface for mission, audience, editorial intent, ownership, reuse, quality, accessibility, localization, confidentiality, assumptions, and open decisions.

This document is strategy evidence. It does not approve Contentful content types, field IDs, migrations, fixtures, frontend routes, templates, adapters, or live CMS integration.

## Mission

The site presents professional experience, technical skills, CMS knowledge, projects, writing, thinking process, and creative qualities in a way that helps hiring teams understand both what was built and how the work was approached.

The site also serves as an ongoing personal system that encourages consistent building, continued writing, and fresh professional content.

Secondary mission:

- establish technical credibility
- demonstrate CMS and content-systems thinking
- support recruiter and hiring-manager discovery
- document ongoing learning
- grow into a long-term professional knowledge hub

Explicit non-goals:

- generic design portfolio
- résumé clone
- personal social feed
- arbitrary page builder
- large publication
- client portal

The site should remain a focused professional system for credible work, structured knowledge, and reusable portfolio content.

## Positioning

| Item | Status | Current strategy |
|---|---|---|
| Primary professional title | APPROVED | Web Content & Marketing Technologist |
| Canonical one-sentence positioning statement | NEEDS FINAL SELECTION | Candidate A and Candidate B remain open |
| Secondary professional title / specialty | TBD | No final answer supplied |
| Desired work type | TBD / non-blocking | Full-time, contract, consulting, freelance, or other remains undecided |

Positioning themes:

- CMS architecture
- frontend implementation
- content operations
- content systems
- AI-assisted workflows
- publishing efficiency
- digital experience quality
- SEO and content quality
- brand and design awareness

Candidate A:

```text
I help teams construct scalable web content systems that connect modern CMS operations, frontend implementation, SEO quality, Brand design direction, and AI-assisted workflows.
```

Candidate B:

```text
I develop web content systems that connect CMS architecture, frontend implementation, content operations, and AI-assisted workflows to improve publishing efficiency and digital experience quality.
```

Professional summary direction:

- Results-driven Web Content & Marketing Technologist with several years of experience across CMS operations, frontend development, and content systems.
- Specializes in scalable publishing workflows and structured digital experiences that improve content quality, maintainability, and delivery efficiency.
- Experience includes large-scale migrations, global content operations, and workflow improvement.

Do not add unsupported metrics or embellishments.

## Audience Model

| Audience | Priority | What they need to evaluate |
|---|---|---|
| CMS / content leaders | Primary / APPROVED | Scalable and maintainable content systems, clear governance, publishing standards, reliable delivery across teams, channels, and markets |
| Hiring managers | Secondary / APPROVED | Technical and cross-functional capability, ownership, problem solving, delivery discipline, maintainable systems |
| Engineering leaders | Secondary / APPROVED | Implementation quality, frontend/CMS boundaries, system maintainability, delivery judgment |
| Recruiters | High | Clear positioning, relevant role fit, contact paths |
| Content operations teams | High | Workflow, migration, governance, and QA evidence |
| Frontend engineers | Medium | CMS-agnostic contracts, component architecture, integration discipline |
| Marketing leaders | Medium | Publishing efficiency, SEO/content quality, platform delivery |
| Potential clients | Low | Collaboration fit and proof of capability |
| Technical peers | Low | Shared technical learning and writing |

The site must answer:

- Can this person handle complex CMS/content operations?
- Can they connect strategy, architecture, and implementation?
- Is there evidence of improving workflows, migrations, governance, or delivery quality?

Primary journey:

```text
Visitor arrives
-> understands positioning
-> sees relevant expertise
-> reviews projects/case studies
-> sees systems/migration/delivery evidence
-> builds confidence
-> contacts about a role or collaboration
```

Secondary journey:

```text
Visitor explores writing/projects/documentation
-> understands professional approach more deeply
-> remembers/shares/follows work
-> returns later for a role, referral, collaboration, or conversation
```

## Brand Voice

Approved voice inputs:

- Modern
- Engaging

Rejected voice:

- Unauthentic

Supported voice characteristics:

- professional
- specific
- evidence-focused
- systems-oriented
- clear
- credible
- practical

Preferred domain language:

- content systems
- operational clarity
- headless CMS architecture
- frontend design implementation
- content modeling strategy
- modern migration strategy
- governance
- publishing workflows
- reusable systems
- scalability strategy
- maintainability
- marketing technologies
- measurable outcomes

Language to avoid:

- guru
- ninja
- rockstar
- cutting-edge
- world-class
- thought leader
- passionate about everything
- results-oriented without evidence
- responsible for
- helped with
- worked on
- various, many, or numerous
- seamless without explanation
- innovative without evidence
- highly skilled without proof
- jargon that obscures actual work

## Content Pillars

| Pillar | Status | Purpose / scope |
|---|---|---|
| CMS Architecture & Content Systems | APPROVED | Design, structure, govern, and improve scalable CMS-driven systems. Includes content modeling, Contentful architecture, AEM, governance, publishing workflows, metadata, reusable content structures, and CMS strategy. |
| Content Operations, Migration & Governance | APPROVED | Content migration, publishing operations, localization, metadata governance, QA, DAM coordination, redirects, launch readiness, and workflow standardization. |
| Frontend & CMS Integration | APPROVED | React, Next.js, component architecture, CMS-agnostic UI contracts, responsive development, accessibility, design systems, UX, and API integration. |
| AI-Assisted Workflows & Automation | PROPOSED | Validate against real project and article inventory before approving as an independent pillar. |
| Technical Writing & Systems Documentation | APPROVED | Architecture documentation, implementation guides, migration plans, governance standards, technical explainers, and decision records. |
| SEO, Accessibility & Content Quality | PROPOSED | Validate against real project and article inventory before approving as an independent pillar instead of a supporting theme. |

## Content Domains

Content domains are editorial planning concepts. They are not automatic Contentful content types.

Supported v1 editorial domains:

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

Conditional domain:

- reusable calls-to-action, only if real reuse later justifies editorial control

Current domain decisions:

- Learning / certifications: lightweight v1.
- Tools: v1. Batch 02.2 later approves Tool as a standalone v1 type; fields and references remain downstream Phase 02 work.
- Reusable CTA: do not automatically create a standalone model.
- Other: no speculative catch-all domain.

Do not change the 10-type model ledger merely because content domains are broader than existing candidate models.

## Preliminary Route Input

Batch 01.1 records route strategy input only. Batch 01.2 approved the formal route contract in `docs/system/ROUTE-CONTRACT.md`.

The statuses below are historical Batch 01.1 planning inputs, not the current approved Batch 01.2 route-contract status.

| Route | Current status |
|---|---|
| `/` | PROPOSED v1 route |
| `/about` | PROPOSED v1 route |
| `/work` | PROPOSED v1 route |
| `/projects` | PROPOSED v1 route |
| `/projects/[slug]` | PROPOSED v1 route |
| `/writing` | PROPOSED v1 route |
| `/writing/[slug]` | PROPOSED v1 route |
| `/tools` | PROPOSED v1 route |
| `/contact` | PROPOSED v1 route |

Approved supporting route decisions:

- `/tools` is preferred over `/uses`.
- Home does not need a primary-navigation label; logo/name links to `/`.
- Résumé is a downloadable PDF rather than a standalone route.
- No additional v1 routes are currently required.

## Homepage Priorities

Preferred information order:

1. Hero / positioning
2. Credibility / proof metrics
3. Featured projects
4. Work / experience snapshot
5. Writing highlights
6. Skills / expertise
7. Tools
8. Contact CTA

Must appear:

- positioning statement
- professional summary
- projects CTA
- credibility/evidence
- featured projects
- experience snapshot
- writing highlights
- core expertise
- contact CTA

Do not include:

- full résumé
- every project
- every article
- exhaustive skill list
- exhaustive tool list
- long case-study copy
- duplicate deeper-route content
- low-value filler sections

Featured behavior:

- Projects are manually curated.
- Writing may balance editorial curation with freshness.
- Preferred homepage project count is 3.
- Final three homepage projects are not selected yet.

## Profile Strategy

Use one canonical profile source with multiple presentation contexts.

Expected reuse contexts:

- Home
- About
- Article author
- Contact
- SEO / structured data
- Footer
- Résumé CTA context

Important profile requirements:

- full name
- professional title
- short bio
- long bio
- profile image
- résumé link
- email
- LinkedIn
- GitHub

Optional profile information:

- secondary title
- location
- availability
- values
- career philosophy

Do not create Contentful fields in Batch 01.1.

## Experience Strategy

Approved direction: combination.

The Work / Experience strategy includes relevant CMS, web, content, and frontend experience; concise experience summaries; selected achievements; and career progression.

It should not copy/paste the résumé.

Earlier photography and creative work may be included in condensed form. Use About for fuller career-transition context.

Important experience information:

- company
- role
- dates
- summary
- responsibilities
- achievements
- tools/technologies
- CMS/platform

Optional where appropriate:

- credible metrics
- location
- employment type
- related projects
- related writing
- company URL
- logo
- market/team scale

## Project Strategy

A project qualifies when it demonstrates a meaningful problem, the author's contribution, approach, technical or operational complexity, outcomes or learning, and public-safe evidence.

Projects may include:

- personal products
- enterprise initiatives
- migrations
- workflow improvements
- architecture labs
- design systems
- automation
- technical research

Important project content:

- title
- slug
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
- SEO metadata

Other fields remain conditional or optional where relevant.

Candidate initial projects:

- Enterprise CMS Publishing & Workflow Optimization
- Large-Scale AEM Content Migration
- Contentful Greenfield Starter
- Frontend UI Gallery / Design System
- AI-Assisted Reporting & Documentation Workflow
- Ticketing / Workflow Management System
- AEM Redirect Management Standardization
- Content Model Planning & CMS Architecture Lab

Do not finalize the homepage three in Batch 01.1.

Project confidentiality:

- preserve public-safe transformation rules
- do not turn confidential employer details into fabricated specifics

## Writing Strategy

Writing exists to demonstrate expertise, teach, document projects, build search authority, support job search, record learning, and build professional voice.

Primary topics:

- CMS architecture
- content modeling
- content operations
- publishing workflows
- migration
- governance
- frontend systems
- Contentful
- AEM
- AI-assisted workflows
- SEO/accessibility
- localization
- design systems
- technical documentation

Supported article formats:

- technical explainers
- tutorials
- case studies
- architecture notes
- CMS strategy
- migration lessons
- AI workflow notes
- SEO/accessibility
- career reflections
- implementation retrospectives
- workflow playbooks
- governance guides
- tool evaluations
- systems-thinking essays

Representative initial article quantity: 6.

Proposed titles are fixture candidates, not published commitments.

## Skills + Tools

Skills purpose: prove capability through real professional evidence.

Do not create subjective proficiency percentages, proficiency bars, or false-precision expertise scores.

Skill grouping status: PROPOSED.

Candidate groups:

- CMS & Content Systems
- Frontend Engineering
- Content Operations
- SEO & Accessibility
- AI & Automation
- Data, APIs & Integrations
- Tooling & Workflow
- Design Systems
- Project Delivery

Tools route: APPROVED as `/tools`.

Tools purpose:

- professional stack
- hiring evidence
- connection between tools and actual work

Candidate tool categories:

- CMS platforms
- frameworks
- developer tools
- design tools
- SEO/accessibility tools
- project-management tools
- AI/automation tools
- data/API tools

Hardware is deferred. Do not turn `/tools` into a logo wall.

Learning / certifications: lightweight v1 inclusion, secondary to projects, experience, and writing.

Potential certification information:

- name
- provider
- date
- credential URL where useful
- description
- related skills
- related project

Exact Contentful representation remains a later decision.

## Navigation + Contact

Current navigation direction:

- About
- Work
- Projects
- Writing
- Tools
- Contact

Navigation rules:

- logo/name links to `/`
- Work and Projects remain separate
- Work = professional context
- Projects = deeper problem/solution evidence
- Contact is a normal primary navigation item
- GitHub and LinkedIn are not primary navigation items
- GitHub and LinkedIn may appear in footer, contact, and profile contexts

Primary CTA wording: Get in touch.

V1 contact channels:

- Email: primary
- LinkedIn: important
- GitHub: supporting technical evidence

Contact form: DEFERRED.

## SEO Planning Input

Batch 01.1 records route-level discovery intent only. Batch 01.3 owns title patterns, description rules, canonical behavior, Open Graph behavior, structured-data decisions, and override strategy.

Batch 01.3 approved SEO behavior in `docs/system/SEO-AND-METADATA-CONTRACT.md`.

Current principles:

- Projects: index only when public-safe, complete, useful, and sufficiently distinct.
- Articles: index by default once published and quality-approved.
- Draft or experimental content: not public or indexable.
- Contact: currently intended to be indexable.

Resolved SEO decision: metadata uses hybrid ownership. Editorial overrides are limited conceptually to SEO title, SEO description, and social image; canonical URLs, robots/indexability, sitemap eligibility, structured data, breadcrumbs, preview exclusion, and fallback behavior are code/state-derived.

## Media Strategy

V1 expectations:

| Media | Strategy |
|---|---|
| Profile photo | Required |
| Project hero image | Required |
| Project screenshots | Optional |
| Project gallery | Optional |
| Diagrams | Optional |
| Article hero image | Optional |
| Article inline images | Optional |
| Video | Deferred |
| Downloadable résumé PDF | Required |
| Company/project logos | Optional and public-safe only |

Accessibility:

- meaningful image alt text required
- decorative images use empty alt text
- captions are optional and context-dependent

Do not expose confidential media.

## Editorial Ownership

Preserve the ownership rule:

```text
CMS owns meaning.
Code owns behavior.
Derived data owns what can be reliably calculated.
```

| Owner | Examples |
|---|---|
| CMS later | professional name, professional title, bio, navigation labels/URLs, social links, projects, featured-project selection, articles, experience, skills, skill groups, tools, contact copy, entry/route-specific SEO metadata |
| Code | page section order, layout, responsive behavior, component styling, animation, empty-state UI, error-state UI, global SEO fallback behavior |
| Derived | reading time, canonical URL, breadcrumbs, route paths, reliable derived relationships where justified |

Do not imply Contentful integration has begun.

## Reuse Rules

Canonical reuse principle:

```text
Model the concept once when the meaning is the same;
vary presentation at the route/component layer.
```

Reuse relationships:

| Concept | Reuse intent |
|---|---|
| Profile | Home, About, Article author, Contact, SEO/structured data, Footer, Résumé CTA |
| Social links | Profile, Footer, Contact |
| Navigation | Header, footer, sitemap/route inventory where useful |
| Projects | Project index, project detail, homepage features, related article context |
| Articles | Writing index, article detail, homepage highlights, related project context |
| Experience | Work, About, homepage snapshot |
| Skills | Skills sections, projects, experience, articles where meaningful |
| Skill groups | Skills organization and filters where justified |
| Tools | `/tools`, projects, articles, experience where evidence-based |
| SEO defaults | Site and route fallback behavior |
| Contact CTA | Home, About, Work, Projects, Writing, Contact |

This is strategy evidence only. Do not create schema references in Batch 01.1.

## Editorial Lifecycle

Canonical lifecycle:

```text
Draft
-> Review
-> Publish
-> Maintain
-> Archive / Retire
```

Higher-review content:

- projects
- articles
- experience
- SEO metadata

Lighter-review content:

- skills
- tools
- contact
- profile updates

One editor is currently an assumption, not an immutable architecture rule.

## Static Fixture Requirements

Fixture production does not occur in Batch 01.1.

| Area | Representative target | Real content readiness |
|---|---:|---|
| Profile | 1 | Available |
| Projects | 2-3 | Partial |
| Articles | 2 minimum | Partial |
| Experience | 2-3 | Available |
| Skill groups | 2-4 | Available |
| Skills | 8-12 | Available |
| Navigation | Complete set | Available |
| Social links | 2-4 | Available |
| Tools | 6-12 | Available |
| SEO metadata | Representative routes | Partial |

## Content Quality Rules

| Area | Rule |
|---|---|
| Summaries | 1-3 sentences, approximately 30-70 words, specific and evidence-focused |
| Project metrics | Preferred when credible and public-safe |
| Article excerpts | Manual |
| Experience/project dates | Month + year |
| Article dates | Full date |
| Technology naming | Official capitalization |

## Accessibility Requirements

Accessibility is part of content quality, not only frontend QA.

- meaningful alt text
- decorative empty alt text
- descriptive links
- logical heading hierarchy
- avoid "click here"
- video transcripts when relevant
- captions when relevant
- plain language
- do not rely on color, icons, or position alone

## Responsive Content Intent

| Viewport intent | Content behavior |
|---|---|
| Small | Stacked/simplified, but meaningful content remains accessible |
| Medium | Group related content; two columns when useful |
| Large | Richer supporting context and more spacious relationships |

Rule: secondary content may collapse, but meaningful content required to understand the page must remain available.

Do not create frontend breakpoints in Batch 01.1.

## Localization

Approved v1 localization: en-US only.

Possible future candidate: Spanish.

Future localization should remain possible without adding it to v1 scope.

## Privacy + Confidentiality

No-publish rules:

- credentials
- tokens
- private environment data
- internal URLs
- confidential employer/client screenshots
- customer/employee data
- unreleased work
- private architecture
- proprietary workflows
- sensitive analytics
- private residential/contact information
- unsupported/confidential metrics

Transformation rules:

- anonymize
- generalize
- recreate diagrams
- remove sensitive data
- describe problem class + role + approach + outcome
- publish only authorized evidence

## Deferred Scope

| Scope | Status |
|---|---|
| localization beyond en-US | DEFERRED |
| testimonials | DEFERRED |
| complex taxonomy | DEFERRED |
| recommendations | DEFERRED |
| related-content engine | DEFERRED |
| search | DEFERRED |
| contact form | DEFERRED |
| video | DEFERRED |
| experimentation / A-B testing | DEFERRED |
| advanced analytics dashboards | DEFERRED |
| certifications | LIGHTWEIGHT V1 |

Out of scope:

- generic page builder
- arbitrary page composition
- CMS-driven visual components
- newsletter
- multiple authors
- personalization
- comments
- likes/reactions

Do not reopen these without a documented reason.

## Assumptions

| ID | Assumption | Validation gate |
|---|---|---|
| A-01 | v1 is en-US only. | Revisit if bilingual content becomes a launch requirement. |
| A-02 | One editor is sufficient for v1. | Revisit during editorial workflow design. |
| A-03 | No real-time public update requirement exists for v1. | Revisit during delivery and preview planning. |
| A-04 | Fixtures are temporary validation data, not the production source. | Revisit during fixture and Contentful parity checks. |
| A-05 | Contentful later owns structured editorial content. | Revisit during content model contract approval. |
| A-06 | Page layout is code-owned. | Revisit only through a documented page-composition decision. |
| A-07 | The project remains under the 10-type model cap. | Revisit during Phase 02 model contract review. |
| A-08 | Projects and writing are the strongest proof engines. | Revisit after fixture validation. |
| A-09 | Current route inventory is sufficient for v1. | Validated by Batch 01.2 route contract external approval; revisit only if v1 scope changes. |

Do not mark these assumptions validated until their gates produce direct evidence.

## Open Decisions

| ID | Decision | Natural owner |
|---|---|---|
| OD-01 | Canonical one-sentence positioning statement | Batch 01.1 external validation or later copy pass |
| OD-02 | Secondary professional title / specialty | Profile/content copy decision |
| OD-03 | Desired work type | Positioning/career direction decision |
| OD-04 | Final status of AI-Assisted Workflows & Automation pillar | Fixture/content validation |
| OD-05 | Final status of SEO, Accessibility & Content Quality pillar | Fixture/content validation |
| OD-06 | Final skill-group taxonomy | Content requirements matrix |
| OD-09 | Which three projects become homepage features | Fixture/content decision |
| OD-10 | Which enterprise projects are safely publishable | Confidentiality review |
| OD-12 | Taxonomy depth | Content requirements matrix / Phase 02 |
| OD-13 | Manual vs derived related content | Content requirements / adapter contract |
| OD-14 | Public-safe homepage proof metrics | Content validation |

These are not Batch 01.1 failures unless they materially prevent the content-strategy foundation from being documented.

## Resolved Decisions

| ID | Decision | Resolution |
|---|---|---|
| OD-07 | Final formal v1 route contract | RESOLVED / APPROVED by Phase 01 / Batch 01.2 — Route Contract external validation. Approved v1 routes: `/`, `/about`, `/work`, `/projects`, `/projects/[slug]`, `/writing`, `/writing/[slug]`, `/tools`, `/contact`. |
| OD-08 | Skills vs Tools semantic boundary | RESOLVED / APPROVED by Phase 01 / Batch 01.4 — Content Requirements Matrix external validation. Skill = professional capability; Tool = product, platform, framework, technology, or software used to exercise a capability. Batch 02.2 later approved Tool as a standalone v1 type; fields and references remain downstream Phase 02 work. |
| OD-11 | Certification representation | RESOLVED / APPROVED by Phase 02 / Batch 02.2 — Content Type Contract. Certification / learning evidence is lightweight profile-owned content in v1; exact fields remain Batch 02.3 work. |
| OD-15 | SEO overrides vs generated defaults | RESOLVED / APPROVED by Phase 01 / Batch 01.3 — SEO + Metadata Contract. SEO uses hybrid ownership: optional future editorial overrides for SEO title, SEO description, and social image; technical SEO is code/state-derived. Exact Contentful representation remains deferred to Phase 02. |

## Downstream Consumers

Batch 01.1 prepares controlled strategy input for:

- Batch 01.2 — Route Contract
- Batch 01.3 — SEO + Metadata Contract
- Batch 01.4 — Content Requirements Matrix, approved in `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`
- Batch 01.5 — Phase 01 Validation + Freeze, approved
- Phase 02 — Content Model Contract + Bootstrap Migration, active; Batch 02.2 approved and Batch 02.3 next
