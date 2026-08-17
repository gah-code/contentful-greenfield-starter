# Phase 02 — Content Model Contract + Bootstrap Migration

Status: ACTIVE
Owner: repository maintainer

## Purpose

Translate frozen Phase 01 requirements into a lean, stable, migration-governed Contentful model.

Phase 02 starts from approved content requirements, reconciles the existing proposed model artifacts, then approves content types, fields, references, validations, and migration changes before any bootstrap execution occurs.

## Current Gate

Batch 02.2 — Content Type Contract — NEXT

Bootstrap migration:

BLOCKED / NOT RUN

Seed content:

NOT STARTED

## Source Inputs

Frozen Phase 01 inputs:

- `docs/system/CONTENT-STRATEGY.md`
- `docs/system/ROUTE-CONTRACT.md`
- `docs/system/SEO-AND-METADATA-CONTRACT.md`
- `docs/system/CONTENT-REQUIREMENTS-MATRIX.md`
- `docs/phases/PHASE-01-CONTENT-STRATEGY-AND-ROUTE-CONTRACT.md`

Existing proposed model inputs, inspected read-only in Batch 02.1:

- `docs/content-model/CONTENT-TYPE-LEDGER.md`
- `docs/content-model/FIELD-ID-LEDGER.md`
- `docs/content-model/REFERENCE-MAP.md`
- `content-model/migrations/0001-bootstrap-portfolio-model.js`
- `content-model/snapshots/`
- `content-model/reports/`
- `scripts/contentful/`

The migration is not the source of requirements. It is proposed implementation input that must be reconciled against frozen Phase 01 truth.

## Batch Plan

| Batch | Name | Purpose | Status |
|---|---|---|---|
| 02.1 | Entry + Existing Model Reconciliation | Reconcile existing proposed model artifacts with frozen Phase 01 requirements. | APPROVED |
| 02.2 | Content Type Contract | Approve the semantic v1 content type inventory and type IDs. | NEXT |
| 02.3 | Field + Field-ID Contract | Approve fields, field IDs, types, required states, and semantic purpose. | LATER |
| 02.4 | References + Validations + Editorial Contract | Approve references, cardinality, validations, display fields, editor-facing help, and editorial usability constraints. | LATER |
| 02.5 | Bootstrap Migration Reconciliation + Preflight | Align the existing bootstrap migration to the approved model contract and perform non-mutating safety review. | LATER |
| 02.6 | Bootstrap Migration Execution | Execute the approved bootstrap migration against `dev` only and record evidence. | LATER |
| 02.7 | Phase 02 Validation + Closeout | Verify expected model state, master protection, migration evidence, truth-surface alignment, and readiness for Phase 03. | LATER |

## Modeling Boundaries

Preserve these Phase 02 rules:

- content requirement does not automatically become a Contentful field;
- content domain does not automatically become a Contentful content type;
- content reuse does not automatically become a reference;
- derived value does not become a CMS field;
- code-owned behavior does not become a CMS field;
- frontend component does not become a CMS content type;
- migration shape does not override frozen requirements.

Approved traceability chain:

```text
Visitor need
-> Route responsibility
-> Content requirement
-> Semantic domain
-> Ownership
-> Reuse
-> Route readiness
-> Fixture evidence
-> SEO input
-> Future model implication
```

Do not collapse this to:

```text
Content requirement -> Contentful field
Content domain -> Contentful content type
```

## Phase 02 Handoff Classifications

| Classification | Meaning |
|---|---|
| LIKELY FIELD | Directionally likely to become a field or field-like value. No field ID is approved here. |
| LIKELY REFERENCE | Directionally likely to become a reference or relationship. No reference contract is approved here. |
| DERIVED — DO NOT MODEL | Should be calculated from route/content state instead of modeled editorially. |
| CODE CONFIG — DO NOT MODEL | Belongs to application configuration, layout, or code policy. |
| NEEDS PHASE 02 DECISION | Must be compared during Phase 02 before schema approval. |
| DEFERRED | Outside v1 or later-phase work. |

These are directional classifications only. They are not field IDs, finalized Contentful fields, finalized references, finalized content types, or migration instructions.

## Frozen Requirement Inventory

| Semantic Domain | Frozen Phase 01 Evidence | Batch 02.1 Classification | Phase 02 Question |
|---|---|---|---|
| Global Site Configuration | Site name, global fallback behavior, contact/conversion context, default public metadata expectations. | NEEDS PHASE 02 DECISION | What belongs in a singleton entry versus code configuration? |
| Navigation | Approved v1 route links, labels, order, header/footer consumption. | LIKELY FIELD / LIKELY REFERENCE | Are navigation items standalone entries or structured singleton values? |
| Profile | Name, primary title, short/long bio, profile image, public contact context, author context. | LIKELY FIELD | Which profile fields are required, optional, or copy-owned later? |
| Social Links | LinkedIn required for contact, GitHub optional/supporting, public URLs, accessible labels. | LIKELY FIELD / LIKELY REFERENCE | Are social links shared entries or singleton/profile fields? |
| Experience | Company, role, dates, summary, responsibilities, achievements, tools, metrics where public-safe. | LIKELY FIELD / LIKELY REFERENCE | Which relationships to projects, tools, and articles are editorial versus derived? |
| Project | Title, slug, summary, narrative, role, problem, approach, outcomes, public safety, media, related content, SEO inputs. | LIKELY FIELD / LIKELY REFERENCE / NEEDS PHASE 02 DECISION | How much long-form structure is modeled as fields versus rich text? |
| Article | Title, slug, excerpt, publish date, body, author/profile context, classification, related content, SEO inputs. | LIKELY FIELD / LIKELY REFERENCE / DERIVED — DO NOT MODEL | Reading time must remain derived unless later evidence says otherwise. |
| Skill | Capability labels reused across routes; no proficiency bars or percentages. | LIKELY FIELD / LIKELY REFERENCE | How should skills group, order, and relate to tools/projects? |
| Skill Group | Grouping is useful, but OD-06 and OD-12 remain open. | NEEDS PHASE 02 DECISION | Is `skillGroup` still a type, a controlled value, or code/config grouping? |
| Tool | Product/platform/framework/software used to exercise a capability. | NEEDS PHASE 02 DECISION | Standalone type versus embedded values, controlled vocabulary, taxonomy, or mixed strategy. |
| Learning / Certification | Lightweight optional evidence, credential links public-safe. | NEEDS PHASE 02 DECISION | Profile fields versus structured embedded values versus content type. |
| Contact | Public contact method, invitation copy, availability/context, social link reuse, resume access. | LIKELY FIELD / NEEDS PHASE 02 DECISION | Site/profile singleton boundary and resume asset strategy. |
| SEO Editorial Override | Optional `seoTitle?`, `seoDescription?`, `socialImage?` on dynamic editorial content. | LIKELY FIELD / NEEDS PHASE 02 DECISION | Direct Project/Article fields versus reduced reusable `seoMetadata` reference. |
| Media | Profile photo, project representative image, resume PDF required; other media optional/deferred. | LIKELY FIELD / NEEDS PHASE 02 DECISION | Asset fields, alt text ownership, galleries, and public-safety review shape. |

## Existing Model Reconciliation

| Area | Existing Proposal | Frozen Phase 01 Evidence | Classification | Batch Owner |
|---|---|---|---|---|
| `siteSettings` | Proposed singleton for site name, tagline, description, logo, favicon, default SEO, navigation, social links. | Global configuration exists, but technical SEO and some branding assets may be code-owned. | ALIGNED WITH REFINEMENT | 02.2 / 02.3 |
| `personProfile` | Proposed profile entry with name, title, bios, contact, image, socials, resume URL. | Profile is a canonical reused domain. | ALIGNED WITH REFINEMENT | 02.2 / 02.3 |
| `socialLink` | Proposed reusable social/professional link. | Social links are reused by contact/profile/footer contexts. | ALIGNED | 02.2 / 02.4 |
| `navigationItem` | Proposed reusable navigation destination. | Navigation labels and destinations are reused; route inventory is approved. | ALIGNED WITH REFINEMENT | 02.2 / 02.4 |
| `project` | Proposed portfolio/case-study content type. | Project is a core detail and proof domain. | ALIGNED WITH REFINEMENT | 02.2 / 02.3 / 02.4 |
| `article` | Proposed writing content type. | Article is a core collection/detail domain. | ALIGNED WITH REFINEMENT | 02.2 / 02.3 / 02.4 |
| `experienceItem` | Proposed professional timeline entry. | Experience is independently meaningful and reused by `/`, `/about`, `/work`, and project evidence. | ALIGNED WITH REFINEMENT | 02.2 / 02.3 / 02.4 |
| `skill` | Proposed individual capability or technology. | Phase 01 resolves Skill as professional capability, not tool. Proficiency percentages are excluded. | ALIGNED WITH REFINEMENT | 02.2 / 02.3 |
| `skillGroup` | Proposed grouped skills. | Skill grouping remains OD-06 / OD-12 work. | NEEDS PHASE 02 RECONCILIATION | 02.2 |
| `seoMetadata` | Broad reusable SEO type. | Hybrid SEO limits editorial overrides to title, description, and social image; technical SEO is code/state-owned. | NEEDS PHASE 02 RECONCILIATION | 02.2 / 02.3 |
| Tool requirement | No standalone proposed `tool` type; tools appear as strings/technology arrays and route/domain requirements. | Tool semantic identity is approved, but Contentful representation is not. | NEEDS PHASE 02 DECISION | 02.2 |
| Learning / Certification requirement | Explicitly deferred as a type in the original ledger. | Lightweight optional evidence is approved; exact representation open. | NEEDS PHASE 02 DECISION | 02.2 / 02.3 |
| taxonomy | Tags/categories begin as short text or arrays in proposal. | Taxonomy depth remains OD-12. | NEEDS PHASE 02 DECISION | 02.3 |
| related content | `article.relatedProjects[]`; other relationships absent. | Related content appears across project, article, work, tool, and experience contexts. | NEEDS PHASE 02 RECONCILIATION | 02.4 |

No final type inventory is approved by Batch 02.1.

## SEO Model Reconciliation

Frozen Phase 01 direction:

- editorial concepts: `seoTitle?`, `seoDescription?`, `socialImage?`;
- canonical URL: code-derived;
- robots/indexability: route/publication-state-derived;
- sitemap eligibility: code/state-derived;
- structured data: code-generated from normalized content;
- breadcrumbs: code-generated;
- preview exclusion: code/security-owned.

Existing broad `seoMetadata` proposal:

- `title`
- `description`
- `canonicalUrl`
- `openGraphImage`
- `noIndex`
- `noFollow`
- hard title/description length validations

Classification:

NEEDS PHASE 02 RECONCILIATION

Preferred Phase 01 handoff direction remains a candidate only:

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

Phase 02 must compare:

| Option | Candidate | Evaluation Required |
|---|---|---|
| A | Direct optional Project/Article SEO fields | Preferred direction; still not approved until field contract. |
| B | Reduced reusable `seoMetadata` reference | Requires demonstrated reuse, independent editorial lifecycle, and editor value. |

Evaluation criteria:

- semantic ownership;
- actual reuse;
- independent editorial lifecycle;
- editor experience;
- query complexity;
- reference complexity;
- migration complexity;
- adapter complexity;
- likelihood of accidental orphan entries.

Batch 02.1 does not resolve this decision.

## Tool Reconciliation

Approved semantic boundary:

```text
Skill = professional capability.
Tool = product, platform, framework, technology, or software used to exercise capability.
```

Phase 01 did not approve a Tool content type.

Tool requirements include name, category, professional usage context, relationships to projects/work/skills, optional logo/icon, and optional external URL.

Candidate representations for later evaluation:

| Candidate | Description | Batch 02.1 Status |
|---|---|---|
| A | standalone Tool type | Candidate only |
| B | embedded/simple structured values | Candidate only |
| C | taxonomy-like values | Candidate only |
| D | code-owned controlled vocabulary | Candidate only |
| E | mixed strategy | Candidate only |

Classification:

NEEDS PHASE 02 DECISION

## Learning / Certification Reconciliation

Phase 01 keeps learning and certifications lightweight in v1. Requirements are optional, public-safe, and secondary to projects, experience, and writing.

Do not automatically introduce `learning`, `certification`, `course`, or `credential` content types.

Classification:

NEEDS PHASE 02 DECISION

## Skill / SkillGroup Reconciliation

Preserve:

- Skill means professional capability.
- Tools are distinct from skills.
- Subjective proficiency percentages, proficiency bars, and false-precision expertise scores remain excluded.

Phase 02 must decide:

- whether `skillGroup` remains a content type;
- relationship direction between Skill and Skill Group;
- ordering responsibility;
- category responsibility;
- whether tools can relate to skills;
- whether years/proficiency fields remain excluded;
- display-field expectations.

No final relationship is frozen by Batch 02.1.

## Taxonomy Question Inventory

| Candidate | Likely Representation Options | Batch 02.1 Classification |
|---|---|---|
| Article classification / pillar | short text, controlled value, array, reference, deferred | NEEDS PHASE 02 DECISION |
| Project classification / type | short text, controlled value, array, reference | NEEDS PHASE 02 DECISION |
| Tags | array of strings, controlled value, reference, deferred | NEEDS PHASE 02 DECISION |
| Skill grouping | `skillGroup`, controlled value, code-owned grouping | NEEDS PHASE 02 DECISION |
| Tool categories | field, controlled value, taxonomy entry, code-owned vocabulary | NEEDS PHASE 02 DECISION |
| Page/search filters | code-owned or deferred unless volume justifies | DEFERRED / NEEDS PHASE 02 DECISION |

No dedicated taxonomy content type is approved by Batch 02.1.

## Related Content Reconciliation

| Relationship Candidate | Phase 01 Need | Batch 02.1 Classification | Batch 02.4 Question |
|---|---|---|---|
| Project <-> Article | Related writing/evidence can support case studies and articles. | OPTIONAL / EDITORIALLY MEANINGFUL | Manual reference, derived relationship, or mixed? |
| Project <-> Experience | Project context may clarify where work happened. | CONDITIONAL / EDITORIALLY MEANINGFUL | Which direction avoids duplication? |
| Project <-> Skill | Skills classify capabilities used in proof work. | REQUIRED WHERE MEANINGFUL | Reference, controlled labels, or derived? |
| Project <-> Tool | Tools/platforms support project evidence. | REQUIRED WHERE MEANINGFUL | Standalone Tool needed first? |
| Article <-> Project | Articles may reference proof projects. | OPTIONAL / EDITORIALLY MEANINGFUL | Same relation as Project <-> Article or one-way? |
| Tool <-> Project / Experience / Skill | `/tools` should connect tools to actual work and capability. | REQUIRED FOR ROUTE MEANING | Which direction/cardinality minimizes duplicate maintenance? |

No reference cardinality is frozen by Batch 02.1.

## Global / Singleton Reconciliation

| Proposed Singleton | Semantic Purpose | Current Finding | Phase 02 Question |
|---|---|---|---|
| `siteSettings` | Global site identity, reusable navigation/social links, default site-level values. | Likely useful, but default SEO and some visual assets may be code-owned. | Which fields are editorial meaning versus code configuration? |
| `personProfile` | Canonical professional identity, bios, photo, public contact context, author context. | Strongly supported by Phase 01 reuse. | How to enforce singleton intent: CMS convention, app convention, or editorial guidance? |

Exact singleton enforcement remains a model/editorial-contract decision.

## Navigation + Social Link Reconciliation

| Proposed Type | Meaningful Editorial Fields | Questionable / Code-Owned Fields | Phase 02 Question |
|---|---|---|---|
| `navigationItem` | label, destination, order, active state where useful. | `openInNewTab` may be link policy; icon/component decisions are not justified. | Entry type versus singleton structured values; header/footer reuse. |
| `socialLink` | platform, accessible label, public URL, order, active state. | `iconKey` may be code-owned if icons are deterministic from platform. | Whether icon/platform handling is editorial or derived. |

Presentation-only icon or component decisions must not become CMS fields without semantic justification.

## Project Pressure Review

| Candidate Semantics | Batch 02.1 Classification | Notes |
|---|---|---|
| title, slug, summary, role, problem, constraints, responsibilities, approach, process, solution, outcomes, lessons | LIKELY FIELD | No field IDs approved. Long-form/body structure remains open. |
| hero/representative media, screenshots/gallery | LIKELY FIELD / NEEDS PHASE 02 DECISION | Required representative image on detail; galleries optional. Alt/context ownership required. |
| type, status, tags/classification, public-safe classification | NEEDS PHASE 02 DECISION | Taxonomy and publication safety require schema/editorial policy review. |
| organization/client, timeline, team, metrics, architecture | LIKELY FIELD / NEEDS PHASE 02 DECISION | Conditional, public-safe, and evidence-backed. |
| CMS/platform, frontend stack, tools | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Depends on Tool representation. |
| repository URL, live URL | LIKELY FIELD | Public-safe links only. |
| related writing, related experience | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 remains open. |
| SEO overrides | LIKELY FIELD / NEEDS PHASE 02 DECISION | Direct fields versus reduced reusable reference remains open. |

## Article Pressure Review

| Candidate Semantics | Batch 02.1 Classification | Notes |
|---|---|---|
| title, slug, excerpt, publish date, body | LIKELY FIELD | No field IDs approved. |
| updated date, hero media, references, code examples | LIKELY FIELD / NEEDS PHASE 02 DECISION | Optional unless content pattern requires it. |
| author/profile | LIKELY REFERENCE | Reuse canonical Profile. |
| classification/pillar, tags | NEEDS PHASE 02 DECISION | OD-05 and OD-12 remain open. |
| related writing, related projects | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 remains open. |
| reading time | DERIVED — DO NOT MODEL | Calculate from body if reliable. |
| SEO overrides | LIKELY FIELD / NEEDS PHASE 02 DECISION | Direct fields versus reduced reusable reference remains open. |

## Experience Pressure Review

| Candidate Semantics | Batch 02.1 Classification | Notes |
|---|---|---|
| company, role, dates, summary, responsibilities, achievements | LIKELY FIELD | Public-safe wording required. |
| tools/tech, CMS/platform | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | Depends on Tool representation. |
| employment type, location, metrics, company URL, logo, team/market scale | LIKELY FIELD / NEEDS PHASE 02 DECISION | Optional or conditional. |
| related projects, related writing | LIKELY REFERENCE / NEEDS PHASE 02 DECISION | OD-13 remains open. |

## Field-ID Ledger Audit

`docs/content-model/FIELD-ID-LEDGER.md` remains proposed and was not edited.

| Classification | Count / Summary |
|---|---|
| ALIGNED WITH FROZEN REQUIREMENTS | 0 final approvals; Batch 02.1 does not approve field IDs. |
| LIKELY ALIGNED | 10 proposed field entries: `socialLink.platform`, `socialLink.url`, `navigationItem.label`, `navigationItem.href`, `siteSettings.siteName`, `personProfile.name`, `project.slug`, `article.slug`, `experienceItem.role`, `skill.name`. |
| NEEDS RECONCILIATION | 4 proposed field entries: `seoMetadata.internalName`, `seoMetadata.title`, `seoMetadata.description`, `skillGroup.name`. |
| TECHNICAL FIELD SHOULD NOT BE MODELED | None in the ledger table itself; technical SEO fields appear in the migration and require reconciliation. |
| UNSUPPORTED BY PHASE 01 | None conclusively from the ledger table alone. |
| MISSING PHASE 01 REQUIREMENT | Many frozen requirements are not yet represented in the ledger, including project/article bodies, media, profile bios, experience details, SEO override candidates, tool semantics, learning/certification, taxonomy, and related content. |
| HISTORICAL / PROPOSED | Entire ledger remains proposed until Batch 02.3 approval. |

No field ID changed.

## Reference Map Audit

`docs/content-model/REFERENCE-MAP.md` remains proposed and was not edited.

| Classification | Count / Summary |
|---|---|
| SEMANTICALLY JUSTIFIED | 3 relationships: `siteSettings.navigationItems[]`, `siteSettings.socialLinks[]`, `personProfile.socialLinks[]`. |
| POSSIBLY JUSTIFIED | 1 relationship: `article.relatedProjects[]`. |
| NEEDS RECONCILIATION | 4 relationships: `siteSettings.defaultSeo`, `project.seo`, `article.seo`, `skillGroup.skills[]`. |
| PRESENTATION-DRIVEN — QUESTIONABLE | None conclusively from the current reference map. |
| DERIVABLE — QUESTIONABLE | Related Project/Article relationships may be derivable or mixed; OD-13 remains open. |
| UNSUPPORTED | Broad SEO references are unsupported as final schema truth until SEO representation is decided. |

No reference changed.

## Bootstrap Migration Audit

Migration file inspected:

`content-model/migrations/0001-bootstrap-portfolio-model.js`

| Area | Migration Current State | Frozen Requirement | Classification | Future Action |
|---|---|---|---|---|
| Content types | Creates `seoMetadata`, `socialLink`, `navigationItem`, `siteSettings`, `personProfile`, `project`, `article`, `experienceItem`, `skill`, `skillGroup`. | Original 10-type direction is proposed; Tool, Learning/Certification, taxonomy, SEO representation require decisions. | NEEDS RECONCILIATION | Batch 02.2 approves final type inventory before execution. |
| Display fields | Uses internal/name/title/role labels. | Display fields must support editor usability. | LIKELY ALIGNED / NEEDS REVIEW | Batch 02.4 validates display fields. |
| Field IDs | Migration includes many fields beyond the thin ledger. | Field IDs must be approved before migration. | NEEDS RECONCILIATION | Batch 02.3 creates approved field ledger. |
| Required states | Several fields are required, including SEO title/description and article reading fields. | Required state must follow route readiness, not early schema assumptions. | NEEDS RECONCILIATION | Batch 02.3 / 02.4 approve required policy. |
| Validations | Slug regex, length limits, numeric ranges, link content types. | Validations must be evidence-based and editor-friendly. | NEEDS RECONCILIATION | Batch 02.4 approves validation strength. |
| References | SEO references, social/navigation references, article-to-project reference, skillGroup-to-skill reference. | References need semantic ownership and cardinality review. | NEEDS RECONCILIATION | Batch 02.4 approves reference map. |
| Rich text | `personProfile.longBio`, `project.body`, `article.body`. | Long-form content is required in some domains. | LIKELY ALIGNED / NEEDS REVIEW | Batch 02.3 determines field shape and configuration. |
| SEO assumptions | Broad `seoMetadata` includes `canonicalUrl`, `openGraphImage`, `noIndex`, `noFollow`. | Technical SEO is code/state-owned; only title/description/social image overrides are editorial candidates. | NEEDS RECONCILIATION | Remove, reduce, or refactor in later migration reconciliation after approval. |
| Fields no longer justified | `canonicalUrl`, `noIndex`, `noFollow`, `article.readingTimeMinutes`, `skill.proficiency` are not supported by frozen Phase 01 as CMS-owned fields. | Derived/code-owned/excluded concepts should not be modeled. | POTENTIAL REMOVAL / REQUIRES DECISION | Batch 02.3 decides; migration edit waits until approved. |
| Missing frozen requirements | Tool semantics, learning/certification, public-safety classification, profile/about nuance, project long-form structure, media alt/context, related-content breadth. | Frozen requirements must be reconciled before execution. | NEEDS RECONCILIATION | Batch 02.2-02.4. |
| Environment targeting safeguards | Wrapper imports `check-env.mjs` and passes target environment from env. | Future execution must target `dev` only. | ALIGNED SAFETY DIRECTION | Reconfirm in Batch 02.5. |
| Master protection behavior | `check-env.mjs` rejects `master` and non-`dev` targets. | `master` must remain untouched. | ALIGNED SAFETY DIRECTION | Reconfirm before execution. |

Migration changed: no.

Migration executed: no.

## Bootstrap Execution Gate

Future bootstrap execution requires all of:

1. approved content type inventory;
2. approved type IDs;
3. approved field ledger;
4. approved reference map;
5. approved validations;
6. approved migration diff;
7. explicit target = `dev`;
8. master protection confirmed;
9. dev expected blank baseline confirmed;
10. external approval before execution.

Batch 02.1 does not satisfy the execution gate.

Current migration status:

BLOCKED / NOT RUN

## Model Decision Queue

P0 — before Content Type Contract:

1. legacy `seoMetadata` representation;
2. Tool representation;
3. Learning/Certification representation;
4. Skill/SkillGroup semantic scope.

P1 — before Field Contract:

5. taxonomy depth;
6. Project long-form/body structure;
7. Article classification representation;
8. global configuration boundaries.

P2 — before References/Validation Contract:

9. related-content representation;
10. reference direction/cardinality;
11. asset/reference strategy;
12. required-state policy;
13. validation strength;
14. editor/display fields.

P3 — before migration execution:

15. final type IDs;
16. final field IDs;
17. final migration diff;
18. target environment guard;
19. dev blank-state preflight;
20. execution evidence plan.

Do not resolve the queue in Batch 02.1.

## Content-Type Pressure

| Check | Result | Status |
|---|---|---|
| Original ~10-type direction still useful as planning input | Yes, as a proposed baseline only. | CURRENT / PROPOSED |
| Final type count frozen | No. | CURRENT |
| <=25 constraint preserved | Yes. | CURRENT |
| Uncontrolled type growth detected | No. | CURRENT |
| `seoMetadata` may reduce count | Removing or absorbing broad `seoMetadata` could reduce count by one. | POSSIBLE |
| Tool may add pressure | Standalone Tool could add one type. | POSSIBLE |
| Learning/Certification may add pressure | Standalone representation could add one or more types, but current evidence is lightweight. | POSSIBLE / LOW |
| taxonomy types currently justified | No dedicated taxonomy type is justified yet. | NOT APPROVED |

Current pressure assessment:

LOW PRESSURE

The main pressure sources are SEO representation, Tool representation, Learning/Certification representation, and possible taxonomy/related-content structures. Current frozen requirements do not justify uncontrolled type growth.

## Future Content-Type Decision Test

A content type should be approved only when most of these are true:

- has independent semantic identity;
- has meaningful editorial lifecycle;
- is reused in more than one meaningful context or independently addressable;
- benefits from standalone validation/governance;
- references to it reflect real editorial relationships;
- cannot be represented more simply without losing meaning;
- is not merely a frontend component;
- is not merely layout/composition;
- does not create unnecessary authoring or query overhead.

A type should be questioned when:

- it exists only because a component exists;
- it has no independent lifecycle;
- it contains only presentation settings;
- it duplicates another semantic source;
- it could be derived reliably;
- it creates references solely for rendering convenience.

## Phase 02 Non-Goals

- no generic Page type unless a real requirement later proves necessary;
- no Page Section/page-builder architecture;
- no one-type-per-component modeling;
- no CMS-owned layout;
- no arbitrary visual component selection;
- no advanced taxonomy unless justified;
- no personalization;
- no experimentation;
- no comments;
- no reactions;
- no client portal;
- no large publication architecture;
- no complex localization workflow in v1.

## Deliverable Ownership

| Artifact | Eventually Owns |
|---|---|
| `docs/content-model/CONTENT-TYPE-LEDGER.md` | Approved semantic type inventory, content type IDs, type purpose, display-field decision, singleton intent where applicable, lifecycle/use notes. |
| `docs/content-model/FIELD-ID-LEDGER.md` | Field IDs, semantic field purpose, field type, required/optional state, validation summary, localization, frontend/route purpose. |
| `docs/content-model/REFERENCE-MAP.md` | Reference relationships, direction, cardinality, allowed content types, editorial purpose. |
| Migration | Approved ledger truth implementation. Migration does not own architectural rationale. |
| `docs/DECISIONS.md` | Material tradeoff decisions and rationale. |

## Batch 02.1 Closeout

Status:

APPROVED

External validation:

PASS WITH NOTES

Approved findings:

- frozen Phase 01 contracts remain authoritative Phase 02 inputs;
- existing proposed model artifacts are reconciliation inputs, not final truth;
- proposed content types are classified;
- field-ID ledger was audited read-only;
- reference map was audited read-only;
- bootstrap migration was audited read-only;
- legacy `seoMetadata` requires reconciliation;
- Tool representation remains unresolved;
- Learning/Certification representation remains unresolved;
- SkillGroup/taxonomy questions remain unresolved;
- related-content representation remains unresolved;
- migration execution gate is preserved;
- no Contentful, schema, or migration mutation occurred.

Carry-forward notes:

- public-safety requirements do not automatically imply a CMS field;
- CMS support for public safety remains a downstream representation question;
- media alt/context requirements require representation review;
- existing migration remains implementation evidence, not approved schema truth.

Next:

Batch 02.2 — Content Type Contract

Do not start Batch 02.2 implementation during Batch 02.1 approval reconciliation.

## Batch 02.1 Evidence Limitations

- No Contentful command was run.
- No live CMS state was read.
- No Contentful schema, field ID, reference, validation, locale, environment, export, import, or seed mutation occurred.
- No Contentful model ledger was edited.
- No migration was edited.
- No fixture, frontend implementation, adapter, SEO implementation, sitemap, robots file, Open Graph generator, or structured-data implementation was created.
- Batch 02.1 is approved after external validation returned PASS WITH NOTES.
