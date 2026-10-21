# Frontend Contract Mapping + Version Ledger

Ledger candidate revision: `06.4-reconciliation-1` — documentation proposal selected by the owner; External Final Validation PENDING. Incoming checkpointed revision: `06.3-reconciliation-1` at CMS `dac8d6b97244dbf8e5e6f34aab250902d023e282`.
Mapping status: **FROZEN CONTRACTS / FIXTURES, CHECKPOINTED PURE BOUNDARY AND OFFLINE 06.4 RUNTIME IMPLEMENTED; SOURCE/NON-BROWSER ACCEPTED; CONDITIONAL NON-RELEASE RECONCILIATION CANDIDATE**.
Normalized frontend contract: **`portfolio-contract-v1.0.0` — EFFECTIVE / FROZEN / UNCHANGED**.
Canonical owner: CMS repository documentation at this path; frontend documents provide reciprocal pointers, not a second ledger.

06.1, 06.2 and 06.3 are APPROVED / CHECKPOINTED. The incoming 06.3 pair is established under its accepted containing-commit rule; older PENDING/PROPOSED wording is a historical reconciliation snapshot. The eighteen-file 06.4 runtime is implemented offline and accepted at source/non-browser scope. This documentation-only conditional non-release reconciliation prepares candidate ledger `06.4-reconciliation-1`; External Final Validation is PENDING and 06.4 is NOT CHECKPOINTED. `portfolio-contract-v1.0.0` remains EFFECTIVE / FROZEN / UNCHANGED.

[D-064-01](../DECISIONS.md#d-064-01) is EXTERNALLY ACCEPTED WITH CONDITIONS and OWNER ADOPTED by risk owner Gilberto Haro. All 246 MB cases remain NOT RUN and six VISUAL records remain PARTIAL; zero completed parameterized browser cases. Obligations are due during 06.5 Consolidated Frontend Validation, before its final acceptance, with no automatic extension. I-064-03 browser closure is OPEN; V-064-01 historical Playwright BLOCKED / NOT RUN remains. N-063-01 is accepted only for local emitted ordering/membership. Public preview/deployment/publication/release and 06.6/Phase 06 closeout remain blocked on required evidence.

The CMS [candidate mapping ledger](FRONTEND-CONTRACT-MAPPING.md), [06.4 report and exact deferred inventory](../../content-model/reports/PHASE-06-BATCH-06.4-FIXTURE-CONSUMER-PARITY-AND-ROUTE-RUNTIME-INTEGRATION.md#deferred-case-inventory) and [proposed conditional paired-checkpoint rule](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-064-conditional-qualifying-checkpoint-rule) own these bindings. Exact-byte External Final Validation, separate Git authorization, both qualifying commits/pushes, clean synchronization and External Checkpoint Validation precede 06.5 eligibility; separate 06.5 execution authorization is still required. This pass reruns no tests, typecheck, lint, builds or browser checks. Phase 07 is NOT STARTED; frontend Phase 9 and its UI debt remain independent. This pass changes only documentation; no contract semantics, source, runtime, shared package or live transport changes.

## Version and baseline ledger

| Item | Controlling value |
| --- | --- |
| CMS identity | `gah-code/contentful-greenfield-starter` |
| CMS incoming baseline / established 06.3 checkpoint | `dac8d6b97244dbf8e5e6f34aab250902d023e282` |
| CMS incoming tree | `5499f187173a58435822cd40fdd8aae4f622f0dc` |
| Frontend identity | `gah-code/ui-gallery-system` |
| Frontend incoming baseline / established 06.3 checkpoint | `f1a281c58848f94d2b420f4130fe1dad3233e3fc` |
| Frontend baseline tree | `25b49f2dadeea2594148147871b8d6325ad4bba8` |
| Frozen Contentful model | `v1.0.0` |
| Route-contract version source | Approved v1 inventory in [ROUTE-CONTRACT.md](ROUTE-CONTRACT.md), Phase 01 / Batch 01.2; detailed SEO contract approved by Batch 01.3 |
| Normalized frontend contract version | `portfolio-contract-v1.0.0` EFFECTIVE / FROZEN / UNCHANGED |
| Mapping status | Contracts / fixtures frozen; pure boundary checkpointed; 06.4 offline consumers / renderer / client / build / serving / verifiers implemented and source/non-browser accepted; browser incomplete; live transport absent |
| Production rendering architecture | Option B, separate entry in existing npm package and native document navigation implemented offline; Cloudflare Pages intended host; browser/provider proof incomplete |
| Live transport | None in Phase 06 |
| Shared package | None exists or is authorized |

The incoming CMS checkpoint contains `06.3-reconciliation-1`; the earlier `06.2-reconciliation-1` is established at CMS `c639e781af499ca51c2da8d837ca9d48098d42a2`, and historical `06.1-planning-1` belongs to `9738cb34127b36cbb118de2438fc4db656b5dc0d`. Candidate `06.4-reconciliation-1` is not in either current HEAD. Phase 05 remains COMPLETE / FROZEN at `35e70f991b8b1da2587526b278210f34b24f5402`. The effective contract still binds the six unchanged modules `values.ts`, `media.ts`, `rich-text.ts`, `domain.ts`, `pages.ts` and `boundary.ts` under frontend `src/content/portfolio/contracts/`; no version/tag/model/runtime change or re-freeze occurs.

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

All nine portfolio route shapes below retain checkpointed pure parsing/lookup and correlated page assembly. The accepted offline 06.4 renderer/build now emits thirteen canonical documents and a generic root 404; native-document navigation and hydration code exist. Required browser behavior and actual hosting remain unverified. The frozen payload declarations and independent normalized fixture expectations are unchanged.

| Route | Frozen source responsibility | Frozen payload with pure assembly and offline rendering |
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

`SkillSummary`, `SkillGroupView`, media/document links, field-specific Rich Text and correlated route-result metadata types are implemented. `PublicResultByRoute` and `TrustedPreviewResultByRoute` correlate route, state, payload and audience: READY collections are nonempty, EMPTY belongs only to Work/Projects/Writing/Tools, and MISSING/DRAFT_PREVIEW are detail-only. Loading is future runtime behavior; nominal types do not prove publication eligibility or authenticate preview. The six frozen modules preserve ten source-domain projections; their `NormalizeSource` and `AssembleRoute` interfaces now have pure implementations. The 06.4 renderer is separately implemented; these types do not prove browser behavior or live transport.

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

The following table preserves its 06.3 responsibility/semantic snapshot verbatim. Its breadcrumb-visibility deferral is historical: the separate 06.4 offline renderer now emits breadcrumb UI, while browser behavior, real production origin and deployment remain unverified.

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

Accepted frontend fixtures exist at `src/data/portfolio/source-fixtures.ts`, `normalized-fixtures.ts`, `scenarios.ts` and `media.ts`, with `fixtures.test.ts` and three approved PNGs under `assets/`. Source snapshots cover 42 Entries / 8 Assets; independent normalized expectations import neither the source fixture nor an adapter. Optional contact omissions, exact WHOI exception, authored ordering and six Rich Text policies remain preserved. The scenario registry holds 50 families and 94 symbolic requests. Accepted tests exercise bounded pure behavior, including 94 R1 intent assertions; those rows are not 50/94 additional tests or served HTTP responses. Existing gallery/Storybook source remains unchanged. The 06.4 offline consumer surface and build/discovery evidence are accepted at source/non-browser scope; complete fixture-consumer browser parity is not established.

Frontend adapters own resolved media shape, HTTPS Asset URL handling, MIME/dimension/title/description projection, meaningful alternative text/decorative decisions and unavailable-media behavior. Frontend normalization owns allowed Rich Text shapes and resolved embedded media; hand-authored JSX/ReactNode is not a normalized Rich Text document contract.

Frontend SEO composition must follow [SEO-AND-METADATA-CONTRACT.md](SEO-AND-METADATA-CONTRACT.md), including fallback/canonical and cross-type slug behavior carried from Phase 04 findings `QA04-PR-018` / `QA04-AR-015`. Static Storybook metadata is not page SEO. Decision B governed the separately authorized runtime implementation. Accepted local output evidence does not establish deployed crawlability, provider fallback or publication readiness.

## Publication and transport boundary

Accepted live evidence remains `2026-09-29T08:54:11.057Z`: 42 draft/unarchived Entries, eight processed/unpublished/unarchived Assets and zero publications. It does not establish public Delivery API availability, production publication readiness or published-site readiness. Source status labels, `projectStatus`, article `publishDate`, and gallery `GalleryStatus` are not Contentful publication predicates.

Offline fixtures must explicitly distinguish representative draft-source data, public-eligible test cases and preview/missing results. Preserve strict publication metadata checks; the WHOI representation rule changes none of them. Exhaustive Phase 04 102/102 live QA remains unestablished. No October live refresh, live client, Contentful transport, credential loading or token testing is part of Phase 06. No live access is needed for 06.2–06.5 offline work.

## Implemented pure boundary and accepted evidence

The pure API table below is preserved from 06.3; its visible-breadcrumb deferral is historical and does not negate the separately implemented 06.4 offline renderer. No pure-module semantics change in this reconciliation.

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

`adapters.test.ts` and `assembly.test.ts` retain all existing assertions. The [06.3 report](../../content-model/reports/PHASE-06-BATCH-06.3-PURE-ADAPTERS-RESOLUTION-URLS-AND-FOCUSED-OFFLINE-TESTS.md#accepted-twelve-member-manifest) preserves the historical twelve-member acceptance, original 133 cases plus 50 metadata regressions and original NEEDS REVISION history. I-063-01 remains CLOSED at unchanged metadata/test bytes: fresh allowlisted image/accessibility, validated known members and returned HTTPS URL, no caller mutation, unchanged override → hero → default precedence. Later 06.4 made only its accepted narrow SourceFault syntax remedy in `resolve.ts` and bounded compiler/script/output amendments; current identities are owned by the 06.4 report, not incorrectly equated with all twelve historical 06.3 bytes.

Inherited Node 22.23.3/npm 10.9.9 workstation evidence: TypeScript 6.0.3 PASS; Vitest 4.1.5, 183 passed/0 failed (21 fixture + 67 adapter + 95 assembly); ESLint 10.2.1 PASS. All original 133 cases plus 50 regressions remain. The reviewer separately used Node 22.16.0/TypeScript 5.8.3 and 64 probe rows, including 54 malformed rows; these are not extra Vitest cases or an exact-toolchain rerun. This documentation pass reruns zero project checks or runtime probes.

N-063-01 is accepted for **local emitted order/membership only**: 64 exact 308 aliases before 13 exact 200 proxies, source sorted within each group. Accepted correction evidence also includes strict portfolio/root compiler checks, lint, portfolio/gallery/Storybook builds, 183 unchanged tests, 31 original artifact assertions, 12 negatives, 94 routing rows and 30 positive/72 negative correction checks, all NOT RERUN here. Provider/cache/deployment behavior, complete browser/accessibility/recovery proof, real production origin, publication clearance and preview authentication remain unestablished.

## Reciprocal references and future paired-checkpoint evidence

Historical 06.2 pair: CMS `c639e781af499ca51c2da8d837ca9d48098d42a2` / tree `7159c5853420fa77e0319a7b197852f045c7eea0`; frontend `4630aaaa2ed8808f9e9e7228d811fad6d5485ec0` / tree `edc14db3f645d843aeaa6d6b76c08ccb098ef9c4`. Incoming established 06.3 pair: CMS `dac8d6b97244dbf8e5e6f34aab250902d023e282` / tree `5499f187173a58435822cd40fdd8aae4f622f0dc`; frontend `f1a281c58848f94d2b420f4130fe1dad3233e3fc` / tree `25b49f2dadeea2594148147871b8d6325ad4bba8`. Both checkpoint reviews PASS WITH NOTES. The incoming ledger is `06.3-reconciliation-1`; old PENDING/PROPOSED snapshots are resolved by accepted containing-commit evidence, not rewritten as history.

Future 06.4 pair: **PENDING / NO NEW CHECKPOINTS**. Candidate documentation revision `06.4-reconciliation-1` and the [conditional rule](../phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-064-conditional-qualifying-checkpoint-rule) are PROPOSED FOR EXTERNAL FINAL VALIDATION. Only both later qualifying containing commits can establish the qualified non-release checkpoint with browser verification deferred to 06.5 (D-064-01). Both pushes, clean synchronization and External Checkpoint Validation are prerequisites for 06.5 eligibility; separate execution authorization remains mandatory. No invented SHA, version bump or mutual future-commit dependency.

Greenfield Phase 06 and frontend Phase 9 coordinate through deliverables and checkpoint references but remain separate lifecycles. Neither phase starts, approves or closes the other. Shared-package creation requires separate planning and authorization; none is proposed as implemented here.

## 06.4 implementation and deferral binding

The unchanged eighteen-member candidate is bound to correction index SHA-256 `94ff91658d27ffb1af7e566990ba09f36141916385aa260fc83e1632373358d6` and correction ZIP SHA-256 `7b9d19fd697f9b112cc67c030deb8a43e23a9d2bff7798dfd621e529c1205f4e`. The [06.4 report](../../content-model/reports/PHASE-06-BATCH-06.4-FIXTURE-CONSUMER-PARITY-AND-ROUTE-RUNTIME-INTEGRATION.md#accepted-eighteen-member-manifest) owns exact paths/modes/bytes/hashes. Frontend [portfolio architecture](../../../ui-gallery-system/docs/system/PORTFOLIO-ARCHITECTURE.md#implemented-064-offline-surface-and-inherited-proof) records runtime responsibilities without creating another ledger.

Manual evidence index: `2038d3f75ddc1f6f943a5d05cb9cf87301a11db6d415c7d6f6c38f4926dc38c6`; manual ZIP: `b8df7c2d6a0e59b723ae7aa1db4bae04b06affeb6e76de22f7f45a5328ec61ac`. Its immutable `verification/supplemental/FINAL-MANUAL-QA-RESULTS.json` is 386,378 bytes, SHA-256 `ce38195824652f4b1fe8dd99fa80dbde3fb76baab4c9ce3b21c0ad977c538989`; all 246 case definitions/results are preserved and reproduced in the [report inventory](../../content-model/reports/PHASE-06-BATCH-06.4-FIXTURE-CONSUMER-PARITY-AND-ROUTE-RUNTIME-INTEGRATION.md#deferred-case-inventory). Six surfaces stay PARTIAL. The later owner-adopted D-064-01 event does not rewrite packaging-era requested/not-approved statements. Browser closure I-064-03 stays OPEN; 06.5 final acceptance and release/closeout remain blocked until required evidence is satisfied.
