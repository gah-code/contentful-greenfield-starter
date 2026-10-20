# Frontend Contract Mapping + Version Ledger

Ledger candidate revision: `06.3-reconciliation-1` — documentation proposal selected by the owner; External Final Validation PENDING. Incoming checkpointed revision: `06.2-reconciliation-1` at CMS `c639e781af499ca51c2da8d837ca9d48098d42a2`.
Mapping status: **FROZEN CONTRACTS / FIXTURES AND PURE ADAPTERS / ASSEMBLY IMPLEMENTED; CORRECTED 06.3 IMPLEMENTATION EXTERNALLY ACCEPTED — PASS WITH NOTES**.
Normalized frontend contract: **`portfolio-contract-v1.0.0` — EFFECTIVE / FROZEN / UNCHANGED**.
Canonical owner: CMS repository documentation at this path; frontend documents provide reciprocal pointers, not a second ledger.

The [Phase 06 plan](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md) owns the explicitly proposed 06.3 rule. The [06.3 evidence report](../../content-model/reports/PHASE-06-BATCH-06.3-PURE-ADAPTERS-RESOLUTION-URLS-AND-FOCUSED-OFFLINE-TESTS.md) owns exact accepted identities, original NEEDS REVISION history, correction, revalidation and inherited results. This documentation reconciliation creates no code, source semantics, runtime, shared package or live transport.

## Version and baseline ledger

| Item | Controlling value |
| --- | --- |
| CMS identity | `gah-code/contentful-greenfield-starter` |
| CMS incoming baseline / established 06.2 checkpoint | `c639e781af499ca51c2da8d837ca9d48098d42a2` |
| CMS incoming tree | `7159c5853420fa77e0319a7b197852f045c7eea0` |
| Frontend identity | `gah-code/ui-gallery-system` |
| Frontend incoming baseline / established 06.2 checkpoint | `4630aaaa2ed8808f9e9e7228d811fad6d5485ec0` |
| Frontend baseline tree | `edc14db3f645d843aeaa6d6b76c08ccb098ef9c4` |
| Frozen Contentful model | `v1.0.0` |
| Route-contract version source | Approved v1 inventory in [ROUTE-CONTRACT.md](ROUTE-CONTRACT.md), Phase 01 / Batch 01.2; detailed SEO contract approved by Batch 01.3 |
| Normalized frontend contract version | `portfolio-contract-v1.0.0` EFFECTIVE / FROZEN / UNCHANGED |
| Mapping status | Contracts / fixtures frozen; corrected pure adapters / route / metadata / assembly implementation accepted; consumers / rendering / live transport NOT IMPLEMENTED |
| Production rendering architecture | Owner-selected Option B, separate entry in existing npm package; Cloudflare Pages intended host; native document navigation; execution/provider proof deferred |
| Live transport | None in Phase 06 |
| Shared package | None exists or is authorized |

The incoming CMS checkpoint contains `06.2-reconciliation-1`; historical `06.1-planning-1` belongs to `9738cb34127b36cbb118de2438fc4db656b5dc0d`. Candidate `06.3-reconciliation-1` is not in either pinned commit. Phase 05 closeout remains `35e70f991b8b1da2587526b278210f34b24f5402`. The effective version binds the unchanged six modules `values.ts`, `media.ts`, `rich-text.ts`, `domain.ts`, `pages.ts` and `boundary.ts` under frontend `src/content/portfolio/contracts/`. No package/model/runtime version or tag changes; no contract re-freeze occurs.

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

All nine portfolio route shapes below have implemented pure parsing/lookup and correlated page assembly in the accepted 06.3 candidate. Browser routing, rendered consumers, generated HTML and hosting remain absent. The frozen payload declarations and independent normalized fixture expectations are unchanged.

| Route | Frozen source responsibility | Frozen payload with pure assembly; rendering deferred |
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

`SkillSummary`, `SkillGroupView`, media/document links, field-specific Rich Text and correlated route-result metadata types are implemented. `PublicResultByRoute` and `TrustedPreviewResultByRoute` correlate route, state, payload and audience: READY collections are nonempty, EMPTY belongs only to Work/Projects/Writing/Tools, and MISSING/DRAFT_PREVIEW are detail-only. Loading is future runtime behavior; nominal types do not prove publication eligibility or authenticate preview. The six frozen modules preserve ten source-domain projections; their `NormalizeSource` and `AssembleRoute` interfaces now have pure implementations. No renderer or live transport is inferred.

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
| Canonical URLs, breadcrumbs and metadata fallbacks | Approved route/SEO contract plus normalized data | Pure helpers implemented; visible breadcrumb UI, real production origin and deployment remain deferred |
| Reading time/TOC, where adopted | Approved deterministic derivation from article content | Not new authored fields or an automatic feature requirement |

Frozen authored relationships remain canonical. A derived reverse join must not become a new CMS field or write back to Contentful.

## Fixtures, media, Rich Text and metadata

Accepted frontend fixtures exist at `src/data/portfolio/source-fixtures.ts`, `normalized-fixtures.ts`, `scenarios.ts` and `media.ts`, with `fixtures.test.ts` and three approved PNGs under `assets/`. Source snapshots cover 42 Entries / 8 Assets; independent normalized expectations import neither the source fixture nor an adapter. Optional contact omissions, exact WHOI exception, authored ordering and six Rich Text policies remain preserved. The scenario registry holds 50 families and 94 symbolic requests. Accepted tests exercise bounded pure behavior, including 94 R1 intent assertions; those rows are not 50/94 additional tests or served HTTP responses. Existing gallery/Storybook consumers remain unchanged; no fixture consumer parity or runtime proof is claimed.

Frontend adapters own resolved media shape, HTTPS Asset URL handling, MIME/dimension/title/description projection, meaningful alternative text/decorative decisions and unavailable-media behavior. Frontend normalization owns allowed Rich Text shapes and resolved embedded media; hand-authored JSX/ReactNode is not a normalized Rich Text document contract.

Frontend SEO composition must follow [SEO-AND-METADATA-CONTRACT.md](SEO-AND-METADATA-CONTRACT.md), including fallback/canonical and cross-type slug behavior carried from Phase 04 findings `QA04-PR-018` / `QA04-AR-015`. Static Storybook metadata is not page SEO. Route-level crawlability, prerender/static-output behavior and deployment fallback are Decision B requirements before runtime implementation.

## Publication and transport boundary

Accepted live evidence remains `2026-09-29T08:54:11.057Z`: 42 draft/unarchived Entries, eight processed/unpublished/unarchived Assets and zero publications. It does not establish public Delivery API availability, production publication readiness or published-site readiness. Source status labels, `projectStatus`, article `publishDate`, and gallery `GalleryStatus` are not Contentful publication predicates.

Offline fixtures must explicitly distinguish representative draft-source data, public-eligible test cases and preview/missing results. Preserve strict publication metadata checks; the WHOI representation rule changes none of them. Exhaustive Phase 04 102/102 live QA remains unestablished. No October live refresh, live client, Contentful transport, credential loading or token testing is part of Phase 06. No live access is needed for 06.2–06.5 offline work.

## Implemented pure boundary and accepted evidence

| Module under frontend `src/content/portfolio/` | Actual entry points and responsibility |
| --- | --- |
| `source.ts` | `normalizeSource`, `validatePreviewAccess`: source envelope/policy/revision validation before normalized graph projection; preview shape guard depends on a trusted caller, not authentication. |
| `resolve.ts` | `indexRecords`, `validateFields`, `referenceIds`, `relatedCycles`, `revisionFact` and scalar/record helpers: strict locale, stored field/reference rules, cycle and eligibility checks. |
| `normalize.ts` | `normalizeAssets`, `projectRecords`, `calendarDate`, `yearMonth`, summary/preview and ordering helpers: media/domain projections, approved reverse joins and date precision. |
| `rich-text.ts` | `normalizeRichText`: field-specific typed Rich Text with resolved permitted media. |
| `urls.ts` | `slug`, `projectPath`, `articlePath`, `externalUrl`, `assetUrl`, `siteOrigin`, `canonicalUrl`, `email`, `mailto`, `artifactIdentity`, `decodeArtifact`: pure validated URL/path/R1 identity helpers, no I/O. |
| `routes.ts` | `parseRoute`, `lookupDetail`, `eligibleRoutes`, `artifactManifest`: pure routing/lookup/enumeration and bounded R1 intentions; no browser router or deployment file. |
| `metadata.ts` | `validatePagePolicy`, `readyMetadata`, `emptyMetadata`, `failureMetadata`, `previewMetadata`, `detailBreadcrumbs`: release/nonpublic metadata and validated allowlisted default image; visible breadcrumb UI deferred. |
| `assemble.ts` | `assembleRoute`, `safeDiagnostics`: route/state/audience-correlated normalized results and closed public diagnostics. |

`adapters.test.ts` and `assembly.test.ts` exercise the actual pure APIs. The two unchanged configuration amendments only include the portfolio implementation modules and both test files. All twelve accepted bytes/modes are recorded in the [06.3 report](../../content-model/reports/PHASE-06-BATCH-06.3-PURE-ADAPTERS-RESOLUTION-URLS-AND-FOCUSED-OFFLINE-TESTS.md#accepted-twelve-member-manifest). I-063-01 is CLOSED for that exact corrected candidate: fresh allowlisted image/accessibility, validated known members and returned HTTPS URL, no caller mutation, override → hero → default precedence unchanged. The original NEEDS REVISION verdict remains attached to the original bytes.

Inherited Node 22.23.3/npm 10.9.9 workstation evidence: TypeScript 6.0.3 PASS; Vitest 4.1.5, 183 passed/0 failed (21 fixture + 67 adapter + 95 assembly); ESLint 10.2.1 PASS. All original 133 cases plus 50 regressions remain. The reviewer separately used Node 22.16.0/TypeScript 5.8.3 and 64 probe rows, including 54 malformed rows; these are not extra Vitest cases or an exact-toolchain rerun. This documentation pass reruns zero project checks or runtime probes.

N-063-01 remains NONBLOCKING / DEFERRED TO SEPARATELY AUTHORIZED 06.4 EMITTER: exact 308 aliases first, then exact 200 proxies, source-path sorted within each group, with emitted-artifact tests. No provider/HTTP/cache, rendering/hydration, browser/accessibility, real production origin, public clearance or preview authentication proof follows.

## Reciprocal references and future paired-checkpoint evidence

Established 06.2 pair: CMS `c639e781af499ca51c2da8d837ca9d48098d42a2` / tree `7159c5853420fa77e0319a7b197852f045c7eea0`; frontend `4630aaaa2ed8808f9e9e7228d811fad6d5485ec0` / tree `edc14db3f645d843aeaa6d6b76c08ccb098ef9c4`. External Checkpoint Validation PASS WITH NOTES. The pinned CMS commit contains `06.2-reconciliation-1`; sibling-checkout candidate links refer to uncommitted `06.3-reconciliation-1` and must be labeled accordingly.

Future 06.3 pair: **PENDING / NO NEW CHECKPOINTS**. Corrected implementation acceptance is established; documentation reconciliation COMPLETE / READY FOR EXTERNAL FINAL VALIDATION. Formal 06.3 approval/checkpoint is NOT ESTABLISHED. The [proposed canonical 06.3 rule](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-063-qualifying-checkpoint-rule) is PROPOSED FOR EXTERNAL FINAL VALIDATION and requires exact-byte final validation, separate Git authority and both qualifying containing commits. Both pushes, clean synchronization and External Checkpoint Validation precede 06.4 eligibility; 06.4 still requires separate authorization. No hypothetical SHA, version bump or mutual future-commit dependency is introduced.

Greenfield Phase 06 and frontend Phase 9 coordinate through deliverables and checkpoint references but remain separate lifecycles. Neither phase starts, approves or closes the other. Shared-package creation requires separate planning and authorization; none is proposed as implemented here.
