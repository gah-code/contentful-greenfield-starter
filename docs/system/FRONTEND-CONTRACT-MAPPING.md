# Frontend Contract Mapping + Version Ledger

Ledger candidate revision: `06.2-reconciliation-1` — documentation revision selected by this owner authorization; External Final Validation PENDING. Incoming revision `06.1-planning-1` remains bound to CMS checkpoint `9738cb34127b36cbb118de2438fc4db656b5dc0d`.
Mapping status: **CONTRACTS / FIXTURES IMPLEMENTED; EXTERNALLY ACCEPTED — PASS WITH NOTES; CHECKPOINT / FREEZE PENDING**.
Normalized frontend contract version: **UNASSIGNED UNTIL 06.2 APPROVAL**.
Reserved normalized-contract label: `portfolio-contract-v1.0.0`, pending the [proposed 06.2 qualifying rule](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-062-qualifying-checkpoint-rule).
Canonical owner: CMS repository documentation at this path.

This ledger owns cross-repository source-to-runtime responsibilities, baseline/version provenance and future paired-checkpoint evidence. The [Phase 06 document](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md) owns the canonical batch plan, architecture decision criteria and containing-commit rule; the [06.1 report](../../content-model/reports/PHASE-06-BATCH-06.1-FRONTEND-INVENTORY-AND-ARCHITECTURE-DECISION.md) preserves entry history and the [06.2 report](../../content-model/reports/PHASE-06-BATCH-06.2-RENDERING-CONTRACT-AND-FIXTURE-FREEZE.md) owns implementation/reconciliation evidence chronology. This document creates no TypeScript declarations, generated schemas, fixture modules, runtime routes or shared package.

## Version and baseline ledger

| Item | Controlling value |
| --- | --- |
| CMS identity | `gah-code/contentful-greenfield-starter` |
| CMS incoming baseline / 06.1 checkpoint | `9738cb34127b36cbb118de2438fc4db656b5dc0d` |
| CMS incoming tree | `5ce1358cf196672ff46365a0c342c5a68aa74d94` |
| Frontend identity | `gah-code/ui-gallery-system` |
| Frontend incoming baseline (accepted candidate is dirty) | `a29b9997bedab501bf4432bb4c9e812359773df4` |
| Frontend baseline tree | `3fb1892570cca995dbdd0c829e403222f7c73564` |
| Frozen Contentful model | `v1.0.0` |
| Route-contract version source | Approved v1 inventory in [ROUTE-CONTRACT.md](ROUTE-CONTRACT.md), Phase 01 / Batch 01.2; detailed SEO contract approved by Batch 01.3 |
| Normalized frontend contract version | UNASSIGNED UNTIL 06.2 APPROVAL |
| Mapping status | Contracts / fixtures implemented and externally accepted; adapters / runtime / live transport NOT IMPLEMENTED |
| Production rendering architecture | Owner-selected Option B, separate entry in existing npm package; Cloudflare Pages intended host; native document navigation; execution/provider proof deferred |
| Live transport | None in Phase 06 |
| Shared package | None exists or is authorized |

The incoming CMS baseline contains `06.1-planning-1`; Phase 05 closeout remains `35e70f991b8b1da2587526b278210f34b24f5402`. The candidate revision identifies these documentation changes. The reserved contract label binds `values.ts`, `media.ts`, `rich-text.ts`, `domain.ts`, `pages.ts` and `boundary.ts` under frontend `src/content/portfolio/contracts/`; their accepted byte identities and fixture compatibility are recorded in the [06.2 report](../../content-model/reports/PHASE-06-BATCH-06.2-RENDERING-CONTRACT-AND-FIXTURE-FREEZE.md) and immutable implementation manifest. No package version, CMS model version, tag or runtime constant changes. Effective version stays UNASSIGNED UNTIL 06.2 APPROVAL.

## Canonical responsibility boundary

[ADR-010](../DECISIONS.md#adr-010--phase-06-frontend-repository-and-contract-ownership) adopts this ownership boundary.

| Responsibility | Source/policy owner | Implementation owner |
| --- | --- | --- |
| Frozen types, fields, validations and editorial meaning | CMS model documentation and frozen migration | No model correction in Phase 06 |
| Approved route intent | CMS route and SEO contracts | Frontend, after rendering/route approval |
| Normalized domain/page contracts and adapter interfaces | CMS constrains source meaning; this ledger records mapping/version provenance | Frontend TypeScript contracts |
| Representative normalized static fixtures | CMS supplies approved source semantics and bounded seed evidence | Frontend fixtures and fixture tests |
| Forward/reverse reference resolution | CMS reference map defines authored relationships, target kinds/types and ordering | Frontend pure adapters/resolvers |
| Internal, external and Asset URL construction | CMS route/URL/SEO constraints | Frontend URL builders |
| Rich Text normalization | CMS allowed nodes/marks/embedded-target constraints | Frontend normalizer and renderer boundary |
| Route/page assembly and SEO composition | CMS content/route/SEO intent | Frontend assemblers and metadata composition |
| Consumers and frontend verification | CMS phase governance specifies required evidence | Frontend components, routes and tests |
| Mapping/version ledger and paired checkpoints | CMS documentation at this path | Frontend records a reciprocal checkpoint reference only |

The frontend's existing generic presentation props and gallery metadata remain their own contracts. `NavigationItem`, `FooterLink`, `CardProps`, `HeroProps`, `ImageProps` and comparable existing types should be retained where compatible. A UI item name or Storybook story export is not proof of a normalized CMS domain contract. No raw `fields`, `sys`, Contentful Link, locale wrapper or response `includes` reaches presentational UI outputs.

## Approved route mapping intent

All nine production portfolio routes remain absent as runtime routes. The externally accepted 06.2 candidate implements the following type-level payloads in `src/content/portfolio/contracts/pages.ts` and independent normalized fixture expectations. Contract and fixture existence is not an assembler or renderer implementation.

| Route | Frozen source responsibility | Implemented payload contract; runtime deferred |
| --- | --- | --- |
| `/` | Profile, site/navigation/social, selected canonical project/article/experience/skill/tool summaries | `HomePageData`, composed with `SiteChrome` |
| `/about` | Canonical profile biography/learning and selected supporting experience/skills/tools | `AboutPageData` |
| `/work` | Experience dates, summary, duties, achievements and authored/derived proof | `WorkPageData` |
| `/projects` | Canonical project previews with approved code-owned selection/order | `ProjectsPageData` / `ProjectPreview` |
| `/projects/[slug]` | Canonical project case study and resolved/derived relationships | `ProjectPageData` / `ProjectDetail` |
| `/writing` | Canonical article previews | `WritingPageData` / `ArticlePreview` |
| `/writing/[slug]` | Article body, author and related content | `ArticlePageData` / `ArticleDetail` |
| `/tools` | Tool category/context, skills and derived proof | `ToolsPageData` / `ToolView` |
| `/contact` | Profile-approved contact/social channels and supporting résumé | `ContactPageData` |

`SkillSummary`, `SkillGroupView`, media/document links, field-specific Rich Text and correlated route-result metadata types are implemented. `PublicResultByRoute` and `TrustedPreviewResultByRoute` correlate route, state, payload and audience: READY collections are nonempty, EMPTY belongs only to Work/Projects/Writing/Tools, and MISSING/DRAFT_PREVIEW are detail-only. Loading is future runtime behavior; nominal types do not prove publication eligibility or authenticate preview. The six modules preserve ten source-domain projections; adapters and route assemblers remain type-only interfaces.

## Ten frozen source types

| Type | Semantic source constraint and normalization responsibility |
| --- | --- |
| `siteSettings` | Canonical site/global editorial settings and configured references; code owns composition, runtime behavior and default social-image configuration where no source field exists. |
| `personProfile` | Canonical identity, biography, learning and approved contact channels; resolve portrait/résumé/social references and normalize long biography/learning Rich Text. Do not invent new philosophy/values fields. |
| `socialLink` | Preserve approved destination, label and ordering semantics; adapt to UI-native links. |
| `navigationItem` | Preserve approved route-key/internal versus external destination policy; map seven static route keys without inferring new paths. |
| `project` | Preserve required case-study source fields, slug, media and authored references. Preview is a projection of the canonical record; source does not store featured/order/relatedArticles fields. |
| `article` | Preserve slug, editorial date, body, author and authored related content; derive reading time/TOC only under an approved rule. `publishDate` is not proof of publication. |
| `experienceItem` | Preserve structured dates/current-role flag, summary, Rich Text responsibilities/achievements and authored references; related projects are reverse-derived. |
| `skillGroup` | Preserve ordered `skills` membership; group labels alone do not establish semantic Skill records. |
| `tool` | Preserve name/category/context and authored Skill references; project/experience/article proof is reverse-derived. |
| `skill` | Preserve actual name/summary source; do not invent proficiency, years or detail-route slugs. |

The [field ledger](../content-model/FIELD-ID-LEDGER.md), [reference map](../content-model/REFERENCE-MAP.md), [validation/editorial contract](../content-model/VALIDATION-AND-EDITORIAL-CONTRACT.md) and frozen [migration 0001](../../content-model/migrations/0001-bootstrap-portfolio-model.js) remain authoritative for exact source IDs, requiredness, cardinality, validation and targets. Early field-ledger decisions are read with the later approved reference/validation layers, not treated as unresolved after model freeze.

## Field and reference constraints

- Flatten the appropriate `fields.<fieldId>["en-US"]` value at the adapter boundary. Validate actual field kinds, requiredness, locale and Content Type before projection; do not pass Management response shapes to components.
- Resolve references by identity and approved Entry/Asset link kind, target Content Type and cardinality. Preserve authored order where required; optional absence is not permission to fabricate an object. Wrong kind/type, unresolved targets and cycles need explicit negative cases.
- The six frozen Rich Text fields are profile `longBio` / `learningHighlights`, project `caseStudyBody`, article `body`, and experience `responsibilities` / `achievements`. Project `problem`, `approach` and `outcome` are Text, not Rich Text. Preserve field-specific node, mark and embedded-Asset constraints; do not invent embedded Entry support.
- WHOI `seed05-experience-whoi-frontend-developer` `/fields/tools` is the sole observed representation exception: expected `{"en-US":[]}` versus absent field, bounded by the frozen optional Array contract. No broad null/missing normalization, required-Array omission, wrong locale, reordered references, scalar changes or publication normalization is authorized.
- Accepted seed date precision uses day `01` to encode month/year where the source only establishes that precision. Do not present the encoded day as a factual employment day; the accepted fixtures expose eight employment dates as year/month with explicit month precision and preserve the approved sorting policy.
- Optional public email/phone are absent from accepted seed content. Preserve approved channel availability rather than inventing contact values or requiring email when approved social contact satisfies intent.
- Stable normalized IDs may be opaque identity values; retaining an ID does not authorize exposing raw `sys` objects.

## Derived fields and reverse references

| Derived result | Authoritative source | Boundary |
| --- | --- | --- |
| Project-related articles | Reverse join of `article.relatedProjects` | No stored `project.relatedArticles` |
| Experience-related projects | Reverse join of `project.relatedExperience` | No stored `experienceItem.relatedProjects` |
| Tool proof across projects, experience and writing | Reverse joins of the corresponding authored `tools` references | No invented stored Tool proof arrays |
| Internal detail URLs | Approved route prefix plus canonical project/article slug | No new skill/tool/experience detail route |
| Home selections and display order without stored fields | Explicit approved code/fixture policy | No invented `project.featured`, `article.featured`, `featuredProjects` or `project.order` |
| Canonical URLs, breadcrumbs and metadata fallbacks | Approved route/SEO contract plus normalized data | Runtime implementation and deployment base decision remain future work |
| Reading time/TOC, where adopted | Approved deterministic derivation from article content | Not new authored fields or an automatic feature requirement |

Frozen authored relationships remain canonical. A derived reverse join must not become a new CMS field or write back to Contentful.

## Fixtures, media, Rich Text and metadata

Accepted frontend fixtures exist at `src/data/portfolio/source-fixtures.ts`, `normalized-fixtures.ts`, `scenarios.ts` and `media.ts`, with `fixtures.test.ts` and three approved PNGs under `assets/`. Source snapshots cover 42 Entries / 8 Assets; independent normalized expectations import neither the source fixture nor an adapter. Optional contact omissions, exact WHOI exception, authored ordering and six Rich Text policies remain preserved. The scenario registry holds 50 families and 94 symbolic requests, not executed adapter/HTTP tests. Existing gallery/Storybook consumers remain unchanged; no fixture consumer parity or runtime proof is claimed.

Frontend adapters own resolved media shape, HTTPS Asset URL handling, MIME/dimension/title/description projection, meaningful alternative text/decorative decisions and unavailable-media behavior. Frontend normalization owns allowed Rich Text shapes and resolved embedded media; hand-authored JSX/ReactNode is not a normalized Rich Text document contract.

Frontend SEO composition must follow [SEO-AND-METADATA-CONTRACT.md](SEO-AND-METADATA-CONTRACT.md), including fallback/canonical and cross-type slug behavior carried from Phase 04 findings `QA04-PR-018` / `QA04-AR-015`. Static Storybook metadata is not page SEO. Route-level crawlability, prerender/static-output behavior and deployment fallback are Decision B requirements before runtime implementation.

## Publication and transport boundary

Accepted live evidence remains `2026-09-29T08:54:11.057Z`: 42 draft/unarchived Entries, eight processed/unpublished/unarchived Assets and zero publications. It does not establish public Delivery API availability, production publication readiness or published-site readiness. Source status labels, `projectStatus`, article `publishDate`, and gallery `GalleryStatus` are not Contentful publication predicates.

Offline fixtures must explicitly distinguish representative draft-source data, public-eligible test cases and preview/missing results. Preserve strict publication metadata checks; the WHOI representation rule changes none of them. Exhaustive Phase 04 102/102 live QA remains unestablished. No October live refresh, live client, Contentful transport, credential loading or token testing is part of Phase 06. No live access is needed for 06.2–06.5 offline work.

## Reciprocal references and future paired-checkpoint evidence

Frontend documentation reciprocally points to this CMS-owned candidate revision and separately pins the incoming `06.1-planning-1` ledger at `9738cb34127b36cbb118de2438fc4db656b5dc0d`. That old commit does not contain `06.2-reconciliation-1`. No second mapping/version registry is created.

Pair status: **PENDING / NO NEW CHECKPOINTS**. CMS and frontend remain at their incoming SHAs/trees, with the accepted 26 frontend paths plus actual CMS documentation changes pending. The external final-review index binds the exact final repository/path sets, byte counts and hashes; the [06.2 report](../../content-model/reports/PHASE-06-BATCH-06.2-RENDERING-CONTRACT-AND-FIXTURE-FREEZE.md) binds accepted input and protected implementation identities without self-hashes.

The [proposed canonical qualifying rule](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-062-qualifying-checkpoint-rule) requires exact-byte External Final Validation PASS, separate owner Git authority and both containing commits before approval/version/freeze takes effect. Future checkpoint evidence must resolve both actual commit/tree identities and final-validation manifest membership; no future SHA or mutual embedded SHA is required. Push, clean synchronization and External Checkpoint Validation of that pair precede eligibility for separately authorized 06.3. A later concrete pointer update remains separately authorized/reviewed. Current reconciliation does not self-approve or checkpoint.

Accepted workstation checks are TypeScript 6.0.3 portfolio PASS, Vitest 4.1.5 final 21 PASS / 0 failed and ESLint 10.2.1 PASS, under Node 22.23.3 / npm 10.9.9. These are inherited, not rerun here; the reviewer's separate Node 22.16.0 / TypeScript 5.8.3 six-module compilation is not the exact workstation suite. Fixture compatibility does not establish adapter correctness, runtime, rendering, accessibility, release readiness or preview authentication.

Greenfield Phase 06 and frontend Phase 9 coordinate through deliverables and checkpoint references but remain separate lifecycles. Neither phase starts, approves or closes the other. Shared-package creation requires separate planning and authorization; none is proposed as implemented here.
