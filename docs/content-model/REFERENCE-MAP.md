# Reference Map

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

- authoritative references;
- reference direction;
- cardinality;
- ordering;
- relationship requiredness;
- allowed semantic targets;
- derived reverse relationships;
- significant no-reference decisions;
- orphan/reuse guidance.

Migration implementation:
APPROVED RE2-CORRECTED / EXECUTED SUCCESSFULLY IN DEV by Batch 02.6

Owner: Phase 02 - Content Model Contract + Bootstrap Migration

This is the approved v1 reference contract for the approved 10-type Contentful model. It completes reference direction, cardinality, target restrictions, requiredness, ordering, reverse behavior, and reuse guidance after external Batch 02.4 validation.

This document itself does not edit migrations, execute Contentful changes, create fixtures, add fields, or remove fields.

## Governing Rules

- Every authored reference must represent a real semantic relationship.
- Prefer one authoritative authored relationship and derive reverse views through queries or adapters when practical.
- Do not preserve bidirectional references for graph completeness.
- Relationship absence is valid unless the source entry loses semantic validity without the target.
- References must restrict targets to approved v1 content types.
- Relationship array order is used only when editorial priority is meaningful.
- No reference may create arbitrary routes, page-builder behavior, technical SEO controls, or generic taxonomy architecture.

## Relationship Intent Inventory

| Source Type | Field ID | Semantic Target | Existing Proposal | Batch 02.4 Decision |
|---|---|---|---|---|
| `siteSettings` | `primaryNavigationItems` | Navigation Item | `siteSettings.navigationItems[] -> navigationItem` | APPROVE ORDERED MULTI REFERENCE |
| `siteSettings` | `footerNavigationItems` | Navigation Item | `siteSettings.footerNavigationItems[] -> navigationItem` | APPROVE ORDERED MULTI REFERENCE |
| `siteSettings` | `socialLinks` | Social Link | `siteSettings.socialLinks[] -> socialLink` | APPROVE ORDERED MULTI REFERENCE |
| `personProfile` | `socialLinks` | Social Link | `personProfile.socialLinks[] -> socialLink` | APPROVE ORDERED MULTI REFERENCE |
| `project` | `skills` | Skill | Not present in legacy reference map | APPROVE MULTI REFERENCE |
| `project` | `tools` | Tool | Legacy `project.technologies[]` string array | APPROVE MULTI REFERENCE |
| `project` | `relatedArticles` | Article | Legacy SEO/project article relation absent | DERIVE REVERSE - DO NOT AUTHOR |
| `project` | `relatedExperience` | Experience Item | Not present in legacy reference map | APPROVE SINGLE REFERENCE |
| `project` | `relatedProjects` | Project | Not present in legacy reference map | APPROVE ORDERED MULTI REFERENCE |
| `article` | `authorProfile` | Person Profile | App/singleton author context only | APPROVE SINGLE REFERENCE |
| `article` | `relatedProjects` | Project | `article.relatedProjects[] -> project` | APPROVE ORDERED MULTI REFERENCE |
| `article` | `relatedArticles` | Article | Not present in legacy reference map | APPROVE ORDERED MULTI REFERENCE |
| `article` | `skills` | Skill | Not present in legacy reference map | APPROVE MULTI REFERENCE |
| `article` | `tools` | Tool | Not present in legacy reference map | APPROVE MULTI REFERENCE |
| `experienceItem` | `relatedProjects` | Project | Not present in legacy reference map | DERIVE REVERSE - DO NOT AUTHOR |
| `experienceItem` | `skills` | Skill | Legacy `experienceItem.tags[]` string array | APPROVE MULTI REFERENCE |
| `experienceItem` | `tools` | Tool | Legacy `experienceItem.tags[]` string array | APPROVE MULTI REFERENCE |
| `experienceItem` | `relatedArticles` | Article | Not present in legacy reference map | APPROVE ORDERED MULTI REFERENCE |
| `skillGroup` | `skills` | Skill | `skillGroup.skills[] -> skill` | APPROVE ORDERED MULTI REFERENCE |
| `tool` | `skills` | Skill | Tool type absent from legacy reference map | APPROVE MULTI REFERENCE |
| `tool` | `projects` | Project | Tool type absent from legacy reference map | DERIVE REVERSE - DO NOT AUTHOR |
| `tool` | `experience` | Experience Item | Tool type absent from legacy reference map | DERIVE REVERSE - DO NOT AUTHOR |
| `tool` | `articles` | Article | Tool type absent from legacy reference map | DERIVE REVERSE - DO NOT AUTHOR |
| Homepage featured projects selection | N/A | Project | Legacy `project.featured` boolean / possible `siteSettings` relation | NO REFERENCE REQUIRED |

## Authoritative References

| Source Type | Field ID | Target Type | Cardinality | Ordered? | Required? | Reverse Behavior | Editorial Purpose | Status |
|---|---|---|---|---:|---:|---|---|---|
| `siteSettings` | `primaryNavigationItems` | `navigationItem` | Multi | Yes | Yes | No reverse authoring; Navigation Item reuse is discovered through `siteSettings`. | Header navigation for approved v1 destinations. | APPROVE ORDERED MULTI REFERENCE |
| `siteSettings` | `footerNavigationItems` | `navigationItem` | Multi | Yes | No | No reverse authoring; footer reuse is discovered through `siteSettings`. | Footer navigation when it differs from or narrows primary navigation. | APPROVE ORDERED MULTI REFERENCE |
| `siteSettings` | `socialLinks` | `socialLink` | Multi | Yes | No | No reverse authoring; Social Link reuse is discovered through `siteSettings` and `personProfile`. | Global/footer/contact public destinations. | APPROVE ORDERED MULTI REFERENCE |
| `personProfile` | `socialLinks` | `socialLink` | Multi | Yes | No | No reverse authoring; Social Link reuse is discovered through profile queries. | Profile/contact destinations that represent the person, not necessarily every global link. | APPROVE ORDERED MULTI REFERENCE |
| `project` | `skills` | `skill` | Multi | No | No | Skill-to-project views derive by querying Projects that reference the Skill. | Capabilities demonstrated by the project. | APPROVE MULTI REFERENCE |
| `project` | `tools` | `tool` | Multi | No | No | Tool-to-project views derive by querying Projects that reference the Tool. | Platforms, products, frameworks, or software used in the project. | APPROVE MULTI REFERENCE |
| `project` | `relatedExperience` | `experienceItem` | Single | No | No | Experience-to-project views derive by querying Projects that reference the Experience Item. | Primary work/history context for the case study when public-safe and useful. | APPROVE SINGLE REFERENCE |
| `project` | `relatedProjects` | `project` | Multi | Yes | No | Incoming self-references may be derived for diagnostics, but display uses the authored outgoing list. | Curated continuation path to other case studies. | APPROVE ORDERED MULTI REFERENCE |
| `article` | `authorProfile` | `personProfile` | Single | No | Yes | Person-to-article author views derive by querying Articles that reference the profile. | Canonical author identity and profile context. | APPROVE SINGLE REFERENCE |
| `article` | `relatedProjects` | `project` | Multi | Yes | No | Project-to-article views derive by querying Articles that reference the Project. | Project evidence that supports the article. | APPROVE ORDERED MULTI REFERENCE |
| `article` | `relatedArticles` | `article` | Multi | Yes | No | Incoming article relations may be derived for diagnostics, but display uses the authored outgoing list. | Curated related writing path. | APPROVE ORDERED MULTI REFERENCE |
| `article` | `skills` | `skill` | Multi | No | No | Skill-to-article views derive by querying Articles that reference the Skill. | Capabilities discussed by the article. | APPROVE MULTI REFERENCE |
| `article` | `tools` | `tool` | Multi | No | No | Tool-to-article views derive by querying Articles that reference the Tool. | Tools/platforms discussed by the article. | APPROVE MULTI REFERENCE |
| `experienceItem` | `skills` | `skill` | Multi | No | No | Skill-to-experience views derive by querying Experience Items that reference the Skill. | Capabilities used in the role. | APPROVE MULTI REFERENCE |
| `experienceItem` | `tools` | `tool` | Multi | No | No | Tool-to-experience views derive by querying Experience Items that reference the Tool. | Tools/platforms used in the role. | APPROVE MULTI REFERENCE |
| `experienceItem` | `relatedArticles` | `article` | Multi | Yes | No | Article-to-experience views are not authored in v1. | Writing that explains related work, methods, or context. | APPROVE ORDERED MULTI REFERENCE |
| `skillGroup` | `skills` | `skill` | Multi | Yes | Yes | Skill-to-group membership is derived from Skill Groups. | Small curated capability grouping and display order. | APPROVE ORDERED MULTI REFERENCE |
| `tool` | `skills` | `skill` | Multi | No | No | Skill-to-tool views derive by querying Tools that reference the Skill. | Durable capability mapping for the tool independent of any one project. | APPROVE MULTI REFERENCE |

## Derived Reverse Relationships

| Derived View | Authoritative Source | Derivation Rule | Reason |
|---|---|---|---|
| `project.relatedArticles` | `article.relatedProjects` | Query Articles whose `relatedProjects` includes the current Project. | Article authors own which proof projects support a piece of writing; storing the reverse on Project would drift. |
| `experienceItem.relatedProjects` | `project.relatedExperience` | Query Projects whose `relatedExperience` points to the current Experience Item. | Project owns its primary work-history context; Experience pages can derive related projects. |
| `tool.projects` | `project.tools` | Query Projects whose `tools` includes the current Tool. | Project editors know which tools were used; Tool reverse lists would duplicate evidence. |
| `tool.experience` | `experienceItem.tools` | Query Experience Items whose `tools` includes the current Tool. | Experience editors know which tools were used in the role; Tool reverse lists would duplicate work history. |
| `tool.articles` | `article.tools` | Query Articles whose `tools` includes the current Tool. | Article editors know which tools are discussed; Tool reverse lists would duplicate writing evidence. |
| `skill.projects` | `project.skills` | Query Projects whose `skills` includes the current Skill. | Skills are reused capability labels; project proof is owned by Project. |
| `skill.experience` | `experienceItem.skills` | Query Experience Items whose `skills` includes the current Skill. | Experience owns role capability evidence. |
| `skill.articles` | `article.skills` | Query Articles whose `skills` includes the current Skill. | Article owns topic/capability classification. |
| `skill.tools` | `tool.skills` | Query Tools whose `skills` includes the current Skill. | Tool owns durable tool-to-capability mapping. |
| `skill.group` | `skillGroup.skills` | Query Skill Groups whose `skills` includes the current Skill. | Group membership is owned by Skill Group; Skill has no back-reference field. |
| `personProfile.articles` | `article.authorProfile` | Query Articles whose `authorProfile` references the singleton profile. | Author listing is derived from Article ownership. |

## No-Reference Decisions

| Candidate Relationship | Decision | Reason |
|---|---|---|
| `siteSettings.defaultSeo -> seoMetadata` | NO REFERENCE REQUIRED | Broad standalone `seoMetadata` is rejected for v1; technical defaults are code-owned and editorial global copy uses `siteDescription` where needed. |
| `project.seo -> seoMetadata` | NO REFERENCE REQUIRED | Project SEO override concepts are direct optional fields: `seoTitle`, `seoDescription`, and `socialImage`. |
| `article.seo -> seoMetadata` | NO REFERENCE REQUIRED | Article SEO override concepts are direct optional fields: `seoTitle`, `seoDescription`, and `socialImage`. |
| `navigationItem.href` / arbitrary internal URL | NO REFERENCE REQUIRED | Navigation uses `routeKey` constrained to approved v1 routes; CMS cannot create arbitrary internal routes. |
| Dynamic detail routes in Navigation Item | NO REFERENCE REQUIRED | `/projects/[slug]` and `/writing/[slug]` require content slugs and are reached through Project and Article links. |
| Homepage featured projects field | NO REFERENCE REQUIRED | No approved 02.3 field exists for homepage selection. Exact featured projects remain OD-09 content-authoring work; v1 selection can be code/query-owned until a future field is approved. |
| Skill back-reference to Skill Group | NO REFERENCE REQUIRED | `skillGroup.skills` owns membership and order. |
| Media wrapper references | NO REFERENCE REQUIRED | Contentful Asset fields carry v1 media; no standalone Media type is approved. |
| Taxonomy entry references | NO REFERENCE REQUIRED | Dedicated taxonomy type is deferred; use lean fields and SkillGroup only. |
| Contact entry references | NO REFERENCE REQUIRED | Contact composes from `personProfile`, `siteSettings`, `socialLink`, and code-owned route composition. |

## Singleton Relationships

| Singleton Type | Relationship Rule | Runtime Selection Rule | Duplicate Behavior | Empty Behavior |
|---|---|---|---|---|
| `siteSettings` | Owns global navigation and global social link references. It should not point to every reusable entry in the model. | Application queries for the one published `siteSettings` entry with `limit=2`. | More than one published entry is a configuration error; adapters should fail diagnostics rather than choose silently. | Missing published entry produces a controlled missing-site-configuration state. |
| `personProfile` | Owns profile/contact social links and is referenced by `article.authorProfile`. | Application queries for the one published `personProfile` entry with `limit=2`. | More than one published entry is a configuration error; adapters should fail diagnostics rather than choose silently. | Missing profile produces controlled missing-profile states for routes that require it. |

No new singleton key or technical identifier field is approved in Batch 02.4.

## Orphan / Reuse Guidance

| Type | Orphan Risk | Duplicate Risk | Reuse Expectation | Deletion Impact | Editor Guidance |
|---|---|---|---|---|---|
| `socialLink` | Low | Medium | Reuse the same destination across site/profile lists when the meaning is identical. | May break footer/profile/contact links. | Search for an existing platform/profile destination before creating a new one. |
| `navigationItem` | Medium | Medium | Reuse approved route label entries across header/footer when labels are identical. | May remove navigation to an approved route. | Do not create entries for arbitrary URLs or dynamic detail pages. |
| `skill` | Medium | High | Reuse capability labels across projects, articles, experience, tools, and groups. | May remove classification and proof connections. | Avoid near-duplicates such as pluralized or vendor-flavored skill names unless semantically distinct. |
| `skillGroup` | Medium | Medium | Maintain a small set of 2-4 groups. | May ungroup skills across expertise displays. | Do not nest groups or use them as a general taxonomy. |
| `tool` | Medium | High | Reuse product/platform/framework/software entries across project, experience, article, and skill contexts. | May remove `/tools` evidence and tool relationships. | Do not create exhaustive hardware or minor package inventories. |

No reusable type is left with unexplained HIGH orphan risk.

## Project Reference Density

Project has five approved relationship intents in the Batch 02.3 field ledger.

Batch 02.4 authoring result:

- authored: `skills`, `tools`, `relatedExperience`, `relatedProjects`;
- derived reverse / do not author: `relatedArticles`;
- required authored project relationships: none;
- assessment: HIGH - ACCEPT WITH JUSTIFICATION.

Justification:

Project is the highest-pressure type because it carries case-study proof, media, classification, SEO fallback input, and links into skills/tools/work/writing. Density is controlled by deriving `project.relatedArticles` from `article.relatedProjects`, making `relatedExperience` a single optional reference, keeping `skills` and `tools` unordered, and requiring related projects only when editorially useful.

## Migration Implications

Batch 02.5 records the approved RE2-corrected bootstrap migration against this approved contract.

| Area | Batch 02.5 Approved RE2-Corrected Result |
|---|---|
| Types | Kept approved types, added `tool`, and removed legacy `seoMetadata`. |
| Field IDs | Aligned migration fields to `FIELD-ID-LEDGER.md`; did not add fields from this reference map. |
| References | Replaced legacy SEO references; implemented only externally approved authored references. |
| Derived reverses | Did not create duplicate authoring fields for reverse views. |
| Cardinality | Set `article.authorProfile` and `project.relatedExperience` as single Entry references; used Entry arrays for approved multi references. |
| Target restrictions | Used link content type validations matching this map. |
| Ordering | Preserved array order for navigation, social lists, related content, and SkillGroup membership. |
| Homepage selection | No `featuredProjects` field added. |
| Legacy migration references | Removed `siteSettings.defaultSeo`, `project.seo`, and `article.seo`. |

Migration implementation changed in Batch 02.5: yes, re-approved after RE2 compatibility correction following corrected Gate B retry evidence.

Contentful command run during Batch 02.4 contract approval: no. Batch 02.6 later executed the approved migration successfully; Batch 02.7 externally validates the live reference contract with zero material drift. Phase 02 is complete / frozen, and Phase 03 serial clean-room verification is next.
