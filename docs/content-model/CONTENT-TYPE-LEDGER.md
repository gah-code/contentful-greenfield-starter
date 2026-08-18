# Content Type Ledger

Status: Phase 02 / Batch 02.2 — APPROVED V1 CONTENT TYPE INVENTORY
Owner: Phase 02 - Content Model Contract + Bootstrap Migration

This is the approved v1 semantic content type contract after external Batch 02.2 validation. It approves standalone Contentful content types and stable type IDs only.

Approval of this ledger does not approve fields, field IDs, required states, references, validations, editor interfaces, display fields, or migration implementation. Those remain later Phase 02 contracts.

## Batch 02.2 Approval

Status: APPROVED

External validation: PASS WITH NOTES

Approved standalone v1 type count: 10.

Content-type cap: <=25.

Type count status: PASS.

| Semantic Type | Type ID | Status |
|---|---|---|
| Site Settings | `siteSettings` | APPROVED V1 SINGLETON TYPE |
| Person Profile | `personProfile` | APPROVED V1 SINGLETON TYPE |
| Social Link | `socialLink` | APPROVED V1 TYPE |
| Navigation Item | `navigationItem` | APPROVED V1 TYPE |
| Project | `project` | APPROVED V1 TYPE |
| Article | `article` | APPROVED V1 TYPE |
| Experience Item | `experienceItem` | APPROVED V1 TYPE |
| Skill | `skill` | APPROVED V1 TYPE |
| Skill Group | `skillGroup` | APPROVED V1 TYPE |
| Tool | `tool` | APPROVED V1 TYPE |

Exact fields, field IDs, references, cardinality, validations, editor interfaces, and migration implementation remain downstream Phase 02 work.

## Model Principle

Model content meaning, not visual component names.

A Contentful content type is justified by semantic identity, editorial lifecycle, reuse, governance value, authoring clarity, and relationship value. Do not assume a content domain, route section, frontend component, or reused display automatically becomes a content type or reference.

## Classification Vocabulary

| Classification | Meaning |
|---|---|
| APPROVED V1 TYPE | Approved standalone v1 content type. |
| APPROVED V1 SINGLETON TYPE | Approved standalone v1 content type with one active v1 entry by semantic convention. |
| ABSORB INTO OWNING TYPE | Do not create a standalone type; represent through the semantic owner in later field/reference contracts. |
| CODE-OWNED / DO NOT MODEL | Keep behavior, composition, or configuration in application code. |
| DERIVED / DO NOT MODEL | Calculate from content, route, or publication state instead of editorial modeling. |
| DEFER FROM V1 | Do not include as a structured v1 content type. |
| NEEDS FURTHER MODEL DECISION | Not enough evidence for a type-level proposal. |

## Approved V1 Standalone Types

APPROVED AFTER EXTERNAL VALIDATION

| Semantic Concept | Type ID | Classification | Lifecycle Intent | Singleton / Collection Intent | Route / Reuse Evidence | Rationale | Status | Downstream Dependency | Notes / Open Questions |
|---|---|---|---|---|---|---|---|---|---|
| Site Settings | `siteSettings` | APPROVED V1 SINGLETON TYPE | Global editorial values change independently from content entries. | ONE ACTIVE V1 ENTRY by semantic convention. | Site identity, global defaults, navigation/social consumption, footer/contact support. | A single editorial source prevents duplicate global copy while code retains technical configuration. | APPROVED | 02.3 fields; 02.4 singleton selection and references. | Excludes site origin, environment IDs, secrets, feature flags, canonical base, and deployment config. |
| Person Profile | `personProfile` | APPROVED V1 SINGLETON TYPE | Canonical professional identity and bio content can change independently. | ONE ACTIVE V1 ENTRY by semantic convention. | Reused by `/`, `/about`, `/contact`, article author context, footer, SEO/structured-data inputs, resume CTA. | Profile is a durable semantic source, not a page fragment. | APPROVED | 02.3 fields; 02.4 author/social/contact relationships. | Technical singleton enforcement remains a 02.4/editorial workflow/application-selection decision. |
| Social Link | `socialLink` | APPROVED V1 TYPE | Public profile links can be added, retired, reordered, and reused independently. | Collection. | Reused by profile, footer, and contact contexts. | Standalone entries reduce duplicate URLs and labels across global/profile/contact surfaces. | APPROVED | 02.3 fields; 02.4 reuse/reference rules. | Icon rendering may be code-derived from platform; avoid presentation-only fields unless justified. |
| Navigation Item | `navigationItem` | APPROVED V1 TYPE | Navigation labels/order can change independently within approved route constraints. | Collection constrained to approved v1 routes. | Header/footer navigation consume shared route labels and destinations. | Reusable navigation entries support editorial labels without making routes CMS-created. | APPROVED | 02.3 fields; 02.4 route constraints and references. | Approved route inventory remains code-governed; no arbitrary page builder. |
| Project | `project` | APPROVED V1 TYPE | Case studies have independent creation, review, publication, archive, and readiness lifecycle. | Collection with detail-route identity. | `/projects`, `/projects/[slug]`, homepage features, work proof, writing/tool/skill relationships, SEO fallback inputs. | Project is a core proof domain and independently addressable content. | APPROVED | 02.3 fields; 02.4 references/validations. | Public-safety and long-form structure remain downstream. |
| Article | `article` | APPROVED V1 TYPE | Writing has independent authoring, publication, update, archive, and review lifecycle. | Collection with detail-route identity. | `/writing`, `/writing/[slug]`, homepage writing highlights, project relationships, author/profile context, SEO fallback inputs. | Article is a core editorial domain and independently addressable content. | APPROVED | 02.3 fields; 02.4 references/validations. | Reading time remains derived unless later evidence changes that. |
| Experience Item | `experienceItem` | APPROVED V1 TYPE | Professional roles/history can be maintained independently from profile copy. | Collection. | Reused by `/`, `/about`, `/work`, project evidence, public-safe proof context. | Experience items are durable career evidence rather than page-specific copy blocks. | APPROVED | 02.3 fields; 02.4 relationships. | Public-safe metrics and company details remain downstream. |
| Skill | `skill` | APPROVED V1 TYPE | Professional capability labels can be curated and reused independently. | Collection. | Reused across homepage expertise, about narrative, work, projects, tools, and articles where meaningful. | Skill has approved semantic identity as professional capability. | APPROVED | 02.3 fields; 02.4 grouping/tool/project relationships. | Proficiency bars, percentages, and unsupported precision remain excluded. |
| Skill Group | `skillGroup` | APPROVED V1 TYPE | Curated capability groupings can be maintained, ordered, and reused independently. | Small collection, expected 2-4 v1 groups. | Content Requirements Matrix expects Skill Group fixture coverage and grouped expertise presentation. | A small grouping type improves editorial consistency without creating broad taxonomy architecture. | APPROVED | 02.3 group fields; 02.4 relationship direction/cardinality. | OD-06 / OD-12 remain relevant to exact taxonomy depth and relationship mechanics. |
| Tool | `tool` | APPROVED V1 TYPE | Technologies/platforms/tools can be curated, reused, related to work, and retired independently. | Collection. | `/tools`, homepage selected tools, project evidence, work evidence, skill relationships, professional usage context. | Tool has approved semantic identity distinct from Skill and enough reuse to justify standalone governance. | APPROVED | 02.3 fields; 02.4 references/tool-skill-project relationships. | Hardware remains deferred; logos/icons optional and text labels remain required. |

Approved standalone v1 type count: 10.

Content-type cap: <=25.

Status: PASS.

## Absorbed / Code-Owned / Derived / Deferred Concepts

| Semantic Concept | Classification | Candidate Type ID | Lifecycle Intent | Route / Reuse Evidence | Reason | Status | Downstream Dependency | Notes / Open Questions |
|---|---|---|---|---|---|---|---|---|
| SEO Metadata | ABSORB INTO OWNING TYPE | N/A | SEO override values follow the owning Project or Article lifecycle. | Project/article detail routes need optional editorial title, description, and social image overrides. | No independent semantic identity or lifecycle justifies a reusable `seoMetadata` entry in v1; broad legacy SEO adds orphan/reference/query risk. | APPROVED NON-STANDALONE | 02.3 direct editorial override field decision; 02.5 migration reconciliation. | Technical SEO remains code/state-owned. Do not model `canonicalUrl`, `noIndex`, `noFollow`, meta keywords, or arbitrary JSON-LD. |
| Learning / Certification | ABSORB INTO OWNING TYPE | N/A | Lightweight professional credibility evidence follows the Person Profile lifecycle in v1. | About/profile context and optional homepage credibility signal. | Current v1 evidence is optional, lightweight, and too small for independent content lifecycle. | APPROVED NON-STANDALONE | 02.3 lightweight profile representation. | Standalone certification/learning types may be revisited only if content volume or lifecycle proves need. |
| Contact | ABSORB INTO OWNING TYPE | N/A | Contact copy and public contact methods follow Person Profile, Site Settings, and Social Link lifecycle. | `/contact`, footer, homepage/about/work CTAs. | Contact is a route composition and conversion context, not an independent content object for v1. | APPROVED NON-STANDALONE | 02.3 profile/site/contact-copy fields; 02.4 social link references. | Route composition remains code-owned; no contact form in v1. |
| Media | ABSORB INTO OWNING TYPE | N/A | Media is owned by the entry whose meaning it supports. | Profile photo, Project hero/representative media, optional Article media, optional logos/icons, resume PDF. | Contentful Asset already supplies asset semantics; no evidence supports a wrapper content type in v1. | APPROVED NON-STANDALONE | 02.3 asset fields; 02.4 alt/context/editorial rules. | Exact asset metadata versus owning-entry alt/context strategy remains downstream. |
| Taxonomy | DEFER FROM V1 | N/A | Simple classification can follow owning entries until reuse/governance proves need. | Article category/pillar, project type, tags, tool category, skill grouping. | Complex taxonomy was explicitly deferred; current needs do not justify dedicated taxonomy types. | APPROVED DEFERRED | 02.3 simple values; 02.4 validation/control strategy. | OD-12 remains open for taxonomy depth. |
| Generic Page / PageSection | CODE-OWNED / DO NOT MODEL | N/A | No independent editorial lifecycle in approved v1. | Approved routes have known composition. | Page builders, sections, modules, hero/card components, galleries-as-components, and visual blocks are excluded from v1. | APPROVED NON-MODELED | None for content type contract. | Route composition remains code-owned. |
| CTA / Card / Component / Module / Block | CODE-OWNED / DO NOT MODEL | N/A | Presentation commands belong to code unless future reuse proves semantic meaning. | CTA labels and card layouts are route/application composition concerns. | Component-shaped modeling would create adapter and authoring overhead without semantic value. | APPROVED NON-MODELED | None for content type contract. | Contact CTA copy can be sourced from Profile/Site Settings if needed. |

## Singleton Contract

| Type | Semantic Cardinality | Technical Enforcement Status |
|---|---|---|
| `siteSettings` | ONE ACTIVE V1 ENTRY | Phase 02.4/editorial workflow/application selection decision. |
| `personProfile` | ONE ACTIVE V1 ENTRY | Phase 02.4/editorial workflow/application selection decision. |

Contentful content type existence alone may not technically enforce singleton cardinality. Do not invent a schema mechanism in Batch 02.2.

## Content Type ID Contract

| Semantic Concept | Type ID | ID Status |
|---|---|---|
| Site Settings | `siteSettings` | APPROVED TYPE ID |
| Person Profile | `personProfile` | APPROVED TYPE ID |
| Social Link | `socialLink` | APPROVED TYPE ID |
| Navigation Item | `navigationItem` | APPROVED TYPE ID |
| Project | `project` | APPROVED TYPE ID |
| Article | `article` | APPROVED TYPE ID |
| Experience Item | `experienceItem` | APPROVED TYPE ID |
| Skill | `skill` | APPROVED TYPE ID |
| Skill Group | `skillGroup` | APPROVED TYPE ID |
| Tool | `tool` | APPROVED TYPE ID |

## Type Count Review

| Item | Count / Impact | Status |
|---|---:|---|
| Historical proposal | 10 | PROPOSED BASELINE ONLY |
| Remove standalone `seoMetadata` | -1 | APPROVED |
| Add standalone `tool` | +1 | APPROVED |
| Learning / Certification absorbed | 0 | APPROVED |
| Contact absorbed | 0 | APPROVED |
| Media absorbed | 0 | APPROVED |
| Dedicated taxonomy type deferred | 0 | APPROVED |
| Approved standalone count | 10 | PASS |
| Cap | <=25 | PASS |

No duplicate semantic types were intentionally introduced.

## Type Dependency Preview

Preview only. This does not approve reference direction, cardinality, requiredness, or validations.

| Source Type | Directional Dependency | Preview Classification | Notes |
|---|---|---|---|
| `siteSettings` | navigation items | LIKELY REFERENCE | Header/footer reuse requires 02.4 relationship decision. |
| `siteSettings` | social links | LIKELY REFERENCE | May reuse global public profiles. |
| `siteSettings` | SEO defaults | NEEDS 02.4 DECISION | Global fallback copy may be fields; technical SEO remains code-owned. |
| `personProfile` | social links | LIKELY REFERENCE | Reuses public profile destinations. |
| `personProfile` | articles as author context | POSSIBLE REFERENCE | Author relationship direction remains 02.4. |
| `project` | skills | LIKELY REFERENCE | Skills classify capabilities used in proof work. |
| `project` | tools | LIKELY REFERENCE | Tools/platforms support evidence and `/tools` route coverage. |
| `project` | articles / experience | NEEDS 02.4 DECISION | Related content may be manual, derived, or mixed. |
| `article` | person profile | LIKELY REFERENCE | Single author/profile context. |
| `article` | projects / skills / tools | NEEDS 02.4 DECISION | Related content and classification remain open. |
| `experienceItem` | tools / skills / projects / articles | NEEDS 02.4 DECISION | Relationship direction should minimize duplicate maintenance. |
| `skillGroup` | skills | LIKELY REFERENCE | Direction/cardinality not frozen. |
| `tool` | projects / experience / skills / articles | NEEDS 02.4 DECISION | Tool route must connect tools to actual work. |
| SEO override values | owning Project / Article | NO REFERENCE NEEDED | Direct fields remain the preferred downstream candidate. |
| Contact content | profile/site/social sources | NO REFERENCE NEEDED / CODE COMPOSITION | Route composition remains code-owned. |
| Media assets | owning entries | NO REFERENCE NEEDED beyond Asset fields | Exact field strategy deferred. |

## Type-to-Route Coverage

| Route | Required Semantic Sources | Proposed Types Cover Requirement? | Notes |
|---|---|---|---|
| `/` | Profile, selected Projects, Articles, Experience, Skills/Skill Groups, Tools, Contact CTA, Navigation, Social Links, Site Settings | Yes | No Page type required; code owns composition. |
| `/about` | Profile, Experience, Skills/Skill Groups, Tools, Learning/Certification evidence, Social Links | Yes | Learning/Certification remains lightweight on owning profile. |
| `/work` | Experience, Skills, Tools, Projects, Articles, Contact CTA | Yes | Relationships deferred to 02.4. |
| `/projects` | Project previews, Skills, Tools, optional featured/filter labels | Yes | No route-specific Page type required. |
| `/projects/[slug]` | Project detail, media assets, Skills, Tools, Experience/Article context, SEO overrides | Yes | SEO overrides absorbed into Project in 02.3 candidate field work. |
| `/writing` | Article previews, Profile/author context, Project/Skill/Tool labels | Yes | Search/filter taxonomy remains deferred. |
| `/writing/[slug]` | Article detail, Profile author, Project/Skill/Tool context, SEO overrides | Yes | Reading time remains derived. |
| `/tools` | Tool inventory, Skills, Projects, Experience, Articles | Yes | Standalone `tool` supports route meaning. |
| `/contact` | Profile, Social Links, Site Settings/contact copy, resume access | Yes | No Contact type required; code owns route composition. |

## Reuse Coverage

| Semantic Source | Reuse Support |
|---|---|
| Profile | Singleton profile supports home, about, contact, author context, footer, and structured-data inputs. |
| Experience | Collection supports homepage proof, about narrative, work route, and project evidence. |
| Project | Collection supports project index/detail, homepage features, work proof, articles, skills, tools, and SEO fallbacks. |
| Article | Collection supports writing index/detail, homepage highlights, related project evidence, and SEO fallbacks. |
| Skill | Collection supports expertise, projects, work, tools, and article classification without proficiency scores. |
| Tool | Collection supports `/tools`, project/work evidence, skill relationships, selected homepage stack, and optional logos/URLs. |
| Navigation | Navigation items can be reused by header/footer while route inventory remains code-governed. |
| Social Links | Social links can be reused by profile, footer, and contact without duplicated URLs. |
| SEO overrides | Absorbed by Project/Article; reuse not demonstrated enough for a standalone SEO type. |

## Editorial Usability Review

| Type | Usability | Notes |
|---|---|---|
| `siteSettings` | CLEAR WITH DOCUMENTATION | Editors need singleton guidance and code/config boundary. |
| `personProfile` | CLEAR WITH DOCUMENTATION | Editors need singleton guidance and author/profile reuse notes. |
| `socialLink` | CLEAR | Public platform/profile destination is easy to understand. |
| `navigationItem` | CLEAR WITH DOCUMENTATION | Editors need approved-route guardrails. |
| `project` | CLEAR | Case study/project lifecycle is independent and familiar. |
| `article` | CLEAR | Writing lifecycle is independent and familiar. |
| `experienceItem` | CLEAR | Professional role/history entry is understandable. |
| `skill` | CLEAR WITH DOCUMENTATION | Editors need capability-vs-tool and no-proficiency guidance. |
| `skillGroup` | CLEAR WITH DOCUMENTATION | Editors need grouping taxonomy and ordering guidance. |
| `tool` | CLEAR WITH DOCUMENTATION | Editors need usage-context and no-exhaustive-inventory guidance. |

No approved standalone type is rated POOR.

## Orphan Entry Risk Review

| Candidate | Risk | Mitigation / Notes |
|---|---|---|
| `socialLink` | LOW | Small global/profile reuse set; orphan risk manageable with 02.4 references/editorial guidance. |
| `navigationItem` | MEDIUM | Route constraints and siteSettings references must prevent arbitrary unused destinations. |
| `skill` | MEDIUM | Reuse across many entries can create duplicates; 02.4 should define editor guidance and display naming. |
| `skillGroup` | MEDIUM | Small expected set; relationship direction and ordering need 02.4 clarity. |
| `tool` | MEDIUM | Reuse value is high, but duplicates/orphans require naming, category, and relationship guidance. |
| `seoMetadata` | HIGH | Standalone SEO entries would be easy to orphan and duplicate; absorbed into owning types. |

## Migration Impact Preview

Planning evidence only. Do not edit or run the migration in Batch 02.2.

| Existing Migration Concept | Future Direction | Status |
|---|---|---|
| `seoMetadata` | REMOVE TYPE IN FUTURE RECONCILIATION | Broad standalone SEO type conflicts with approved absorbed SEO ownership. |
| `socialLink` | KEEP TYPE | Approved as v1 standalone type; fields still require 02.3 review. |
| `navigationItem` | KEEP TYPE | Approved as v1 standalone type; route constraints and references require 02.4 review. |
| `siteSettings` | KEEP TYPE | Approved singleton type; code-owned configuration fields may need removal/refinement. |
| `personProfile` | KEEP TYPE | Approved singleton type; fields require 02.3 review. |
| `project` | KEEP TYPE | Approved type; SEO references and field set require later reconciliation. |
| `article` | KEEP TYPE | Approved type; SEO references, reading time, and field set require later reconciliation. |
| `experienceItem` | KEEP TYPE | Approved type; field set and relationships require later reconciliation. |
| `skill` | KEEP TYPE | Approved type; proficiency fields likely removal/review. |
| `skillGroup` | KEEP TYPE | Approved type; relationship direction/cardinality require 02.4. |
| `tool` | ADD TYPE IN FUTURE RECONCILIATION | Approved new v1 type not present in migration. |
| Learning / Certification | NO TYPE CHANGE | Absorb into owning profile fields if 02.3 validates. |
| Contact | NO TYPE CHANGE | Compose from profile/site/social sources. |
| Media | NO TYPE CHANGE | Use Contentful Assets through owning entries; no wrapper type. |
| Taxonomy | NO TYPE CHANGE | Dedicated taxonomy type deferred. |

## Downstream Field Questions

Do not solve these in Batch 02.2:

- exact fields and field IDs for every approved type;
- required versus optional state;
- display fields;
- route slug fields and validations;
- singleton selection/enforcement;
- `siteSettings` editorial values versus code configuration;
- `personProfile` biography/contact/resume shape;
- `socialLink` platform/icon/order/active-state strategy;
- `navigationItem` destination constraints and header/footer reuse;
- `project` long-form structure, public-safety state, media, metrics, and SEO override fields;
- `article` body, dates, classification, hero media, related content, and derived reading time;
- `experienceItem` date/metric/company/public-safety representation;
- `skill` naming, grouping, ordering, and exclusions for proficiency precision;
- `skillGroup` relationship direction and ordering;
- `tool` category, usage context, external URL, logo/icon, and relationships;
- lightweight Learning/Certification representation on profile;
- asset alt/context ownership;
- validation strength and editorial help text;
- migration diff.

## Related Surfaces

- Field IDs: `docs/content-model/FIELD-ID-LEDGER.md`
- References: `docs/content-model/REFERENCE-MAP.md`
- Bootstrap migration: `content-model/migrations/0001-bootstrap-portfolio-model.js`
