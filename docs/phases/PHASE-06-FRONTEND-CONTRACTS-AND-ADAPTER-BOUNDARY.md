# Phase 06 — Frontend Contracts + Adapter Boundary

Status: Phase 06 ACTIVE; 06.1 APPROVED / CHECKPOINTED at `9738cb34127b36cbb118de2438fc4db656b5dc0d`. 06.2 implementation EXTERNALLY ACCEPTED — PASS WITH NOTES; documentation reconciliation candidate COMPLETE; External Final Validation PENDING. Formal 06.2 approval/checkpoint/freeze follows the [proposed qualifying rule](#batch-062-qualifying-checkpoint-rule) and is not established by this pass. Phase 05 remains COMPLETE / FROZEN; Phase 07 NOT STARTED.

This document owns the canonical Greenfield Phase 06 batch plan and entry rule. [Project State](../PROJECT-STATE.md) owns current project lifecycle. The [mapping/version ledger](../system/FRONTEND-CONTRACT-MAPPING.md) owns cross-repository mapping and version provenance. The [06.1 report](../../content-model/reports/PHASE-06-BATCH-06.1-FRONTEND-INVENTORY-AND-ARCHITECTURE-DECISION.md) owns inspection chronology and external evidence identities.

## Historical 06.1 baselines and accepted evidence

| Repository | Identity and role | Accepted checkpoint | Tree |
| --- | --- | --- | --- |
| CMS | `gah-code/contentful-greenfield-starter`; frozen source semantics and governance | `35e70f991b8b1da2587526b278210f34b24f5402` | `3382e235debf42cf21c83cdbb3ab5b707d87ff13` |
| Frontend | `gah-code/ui-gallery-system`; selected frontend implementation repository | `a29b9997bedab501bf4432bb4c9e812359773df4` | `3fb1892570cca995dbdd0c829e403222f7c73564` |

The exact local roots are `/Users/gilbertharo/Documents/GitHub/contentful-greenfield-starter` and `/Users/gilbertharo/Documents/GitHub/ui-gallery-system`. Both accepted baselines are `master`, with matching `origin/master`, clean working trees and `0 / 0` ahead/behind. The CMS entry preflight and 06.1 frontend inventory each received External Validation PASS WITH NOTES. These accept static findings and planning inputs; they do not authorize implementation or Contentful access.

Accepted seed observations remain September 29 evidence (`2026-09-29T08:54:11.057Z`): 42 draft/unarchived Entries, eight processed/unpublished/unarchived Assets, zero publications, protected blank `master` and zero material model drift. No October live refresh is claimed.

## Historical 06.1 frontend inventory

The frontend is a client-rendered React 19 / Vite 8 / TypeScript 6 application. Storybook is the implemented component/gallery/design-system surface. The Vite application renders the gallery root through `src/main.tsx` → `src/App.tsx` → `GallerySurfaceLayout`. It has no production portfolio router, SSR or SSG implementation. `src/stories/portfolio/HomePreview.stories.tsx` is a portfolio composition in Storybook only.

Existing component props and gallery metadata remain UI-native presentation contracts. Their names and behavior are preserved unless a later authorized change is approved. No Contentful SDK/client/transport, normalized CMS adapter, reference resolver, portfolio URL builder, Rich Text normalizer or page assembler exists. Raw Contentful `fields`, `sys`, Links and response `includes` have not leaked into components. No normalized portfolio fixture module exists. Configured Storybook/Vitest/Playwright tooling is not evidence of executed frontend tests; no standalone adapter, production-route or CMS fixture-parity tests were found. No third-repository dependency was found.

## Historical 06.1 nine-route comparison

The [approved v1 route contract](../system/ROUTE-CONTRACT.md) remains the intended portfolio pathname contract. All nine portfolio production routes are absent at the accepted frontend baseline. PARTIAL MATCH means presentation overlap only, not a route implementation or contract freeze. Fragment anchors do not implement pathname routes.

| Intended route | Accepted comparison | Frontend evidence |
| --- | --- | --- |
| `/` | PARTIAL MATCH | Runtime root is the gallery; portfolio homepage exists only in Storybook |
| `/about` | PARTIAL MATCH | `#about` prototype anchor and Hero presentation |
| `/work` | PARTIAL MATCH | `#work` prototype experience rows |
| `/projects` | PARTIAL MATCH | `#projects` prototype cards |
| `/projects/[slug]` | ABSENT | No project detail, slug lookup or route |
| `/writing` | PARTIAL MATCH | `#writing` prototype title list |
| `/writing/[slug]` | ABSENT | No article detail, slug lookup or route |
| `/tools` | PARTIAL MATCH | `#tools` prototype labels |
| `/contact` | PARTIAL MATCH | `#contact` prototype composition |

Route-level loading, empty, missing/not-found, error, draft/preview and SEO/metadata contracts require future design. Component loading or empty props and Storybook metadata do not establish those route contracts.

## Historical 06.1 ten-domain comparison

| Frozen CMS type | Accepted comparison | Outstanding semantic contract |
| --- | --- | --- |
| `siteSettings` | PARTIAL MATCH | Normalized site/navigation configuration |
| `personProfile` | PARTIAL MATCH | Complete profile, biographies, Assets and social references |
| `socialLink` | PARTIAL MATCH | Canonical identity, destination and ordering |
| `navigationItem` | PARTIAL MATCH | Governed route-key mapping |
| `project` | PARTIAL MATCH | Canonical identity, detail fields and relationships |
| `article` | PARTIAL MATCH | Body, author, slug and related content |
| `experienceItem` | PARTIAL MATCH | Structured dates, Rich Text and references |
| `skillGroup` | PARTIAL MATCH | Ordered membership in semantic Skill records |
| `tool` | PARTIAL MATCH | Category, context, skills and derived proof |
| `skill` | ABSENT | Semantic Skill records and summaries |

The comparisons above preserve the 06.1 inventory at frontend HEAD, before the accepted dirty 06.2 implementation. Six type modules and normalized/source fixtures now exist; the [mapping ledger](../system/FRONTEND-CONTRACT-MAPPING.md) records implemented contracts and accepted file provenance. Production routes, adapters and live transport remain NOT IMPLEMENTED.

## Owner architecture decisions

[ADR-010](../DECISIONS.md#adr-010--phase-06-frontend-repository-and-contract-ownership) records the owner decisions; the following implications govern this phase plan.

### A — Selected frontend repository

`gah-code/ui-gallery-system` is the selected implementation repository for Greenfield Phase 06. No third application repository is created or inferred.

### B — Production rendering selection recorded

The 06.1 decision deferred production rendering for the subsequent comparison. That comparison and owner selection are now recorded: **Option B**, a separate portfolio entry in the existing frontend npm package; **Cloudflare Pages** intended static host; native document navigation, pre-resolved normalized data, React `renderToString` and matching hydration. Gallery and Storybook remain preserved. No router/framework/package migration is selected.

Accepted R1 uses full canonical ASCII-path hexadecimal encoding in chunked `d-` directories and `page.html`, exact 200 canonical-to-internal proxies, 308 aliases and only a generic root 404. Capacity is `41 + 6N` rules, at most 2,000 and 1,000 characters per line; N=326 gives 1,997, N=327 fails. Provider extensionless lookup/single-pass proxy and complete HTTP/browser/rendering proof remain later obligations. R2 correlates route/state/payload/audience and metadata; accepted N1/N2 dispositions and source/date/optional/ordering policies remain unchanged.

This is accepted architecture design, not executed hosting or rendering. The [06.2 evidence report](../../content-model/reports/PHASE-06-BATCH-06.2-RENDERING-CONTRACT-AND-FIXTURE-FREEZE.md) owns chronology and qualifications; frontend `docs/system/PORTFOLIO-ARCHITECTURE.md` retains the technical design. Production origin/account, real publication eligibility and preview authentication are deferred. No route, renderer, hydration entry or host probe was implemented in 06.2.

### C — Route intent preserved

The nine approved v1 pathname routes remain unchanged. Their rendering and implementation strategy is future separately authorized frontend work. Prototype fragments are not implementation evidence.

### D — Source and runtime ownership

CMS documentation owns the frozen model and semantic source constraints, field/reference/validation policy, approved route intent, project Phase 06 governance and canonical mapping/version ledger. Frontend implementation owns normalized TypeScript domain/page contracts, normalized static fixtures, adapters, reference resolution, URL construction, Rich Text normalization, route/page assemblers, SEO composition, tests and consumers. No shared package exists or is authorized. Exact responsibilities and reciprocal-reference requirements are recorded once in the [ledger](../system/FRONTEND-CONTRACT-MAPPING.md).

### E — Separate governance lifecycles

Greenfield Phase 06 and frontend Phase 9 remain separate. They may coordinate deliverables and checkpoint references; neither automatically starts, approves or closes the other. Existing gallery/component contracts remain protected unless a change is separately approved. The 06.2 implementation and this documentation reconciliation are separately authorized work; neither advances frontend Phase 9 or closes its UI debt.

## Canonical batch plan

This is the owner-adopted planning structure. Its use for subsequent work is governed by the containing-commit and checkpoint gates below; none of its implementation scopes is authorized by recording the plan.

| Batch | Title | Scope and authority boundary |
| --- | --- | --- |
| 06.1 | Inventory, Baseline, Ownership + Architecture Decision | CMS entry preflight, exact frontend identity/baseline, architecture inventory, route/domain gaps, ownership, architecture decisions and canonical plan. APPROVED / CHECKPOINTED at `9738cb34127b36cbb118de2438fc4db656b5dc0d` under the preserved containing-commit rule. |
| 06.2 | Rendering/Route Architecture Decision + Normalized Contract and Fixture Freeze | Implementation EXTERNALLY ACCEPTED — PASS WITH NOTES; reconciliation candidate COMPLETE; External Final Validation PENDING. Contracts/fixtures and offline checks implemented; formal approval/checkpoint/freeze pending the proposed qualifying rule. No route/runtime or later-batch authority. |
| 06.3 | Pure Adapters, Resolution, URLs + Focused Offline Tests | NEXT ONLY AFTER THE REQUIRED CHECKPOINT CHAIN / NOT AUTHORIZED. Raw-source-to-normalized mapping, forward references, derived reverse relationships, internal/external/Asset URL builders, Rich Text normalization and focused mapping/boundary tests. No raw `fields`, `sys`, Link or `includes` in UI outputs. |
| 06.4 | Fixture Consumer Parity + Approved Route/Runtime Integration | LATER / NOT AUTHORIZED. Retain gallery/Storybook consumers, connect normalized fixtures to approved portfolio consumers, create only separately approved route/runtime surfaces and preserve static fixture operation. No Contentful transport. |
| 06.5 | Consolidated Frontend Validation | LATER / NOT AUTHORIZED. Consolidate contract/adapter tests, route/state and SEO/metadata checks, accessibility/responsive evidence, fixture parity, raw-CMS-boundary proof and accepted limitations. Focused tests belong with implementation, not only at closeout. |
| 06.6 | Cross-Repository Final Validation + Phase 06 Closeout | LATER / NOT AUTHORIZED. Exact CMS/frontend checkpoint pairing, ledger, exit criteria, static-fixture preservation and adapter evidence. No automatic Phase 07 authority. |

## Phase 06 exit criteria

- Production rendering, route/deployment and direct-navigation architecture is explicitly approved before its implementation.
- UI-facing domain/page, route-result, media, Rich Text and metadata contracts are documented and approved, with source constraints preserved.
- Pure adapters and reference/URL rules have representative and negative-state offline test evidence; raw CMS shapes do not reach UI outputs.
- Approved portfolio consumers and route surfaces work with normalized static fixtures while preserving gallery and Storybook consumers.
- Consolidated route/state, metadata, accessibility, responsive and fixture-parity evidence records its limitations.
- The CMS mapping ledger identifies the exact paired checkpoints, frontend contract version and accepted validation evidence.
- Final validation and separately authorized closeout gates pass. No Phase 07 authority follows automatically.

These are future exit criteria, not completed implementation claims.

## Access and evidence limitations

No live Contentful access is required for 06.2–06.5 offline contract, fixture, adapter or validation work. Frozen model contracts, accepted manifest/source evidence and synthetic offline inputs are sufficient. Phase 06 does not introduce live transport. Replacement CMA token: LOCAL / IGNORED / NOT TESTED. No environment loading or token access is authorized by this plan.

Accepted seed evidence is draft CMS evidence, not public Delivery API readiness, production publication readiness or published-site readiness. Exhaustive Phase 04 102/102 live QA remains NOT ESTABLISHED; Option B/R88 history is preserved. The sole accepted representation exception remains WHOI `seed05-experience-whoi-frontend-developer` `/fields/tools`, expected `{"en-US":[]}` versus actual field absent, bounded to the frozen optional Array contract. It does not authorize general missing/null, required-field, wrong-locale, reference-order or publication normalization.

## Durable Containing-Commit Rule

The following 06.1 rule is preserved. Its qualifying containing commit is `9738cb34127b36cbb118de2438fc4db656b5dc0d`; the accepted continuation establishes Phase 06 ACTIVE / 06.1 APPROVED / CHECKPOINTED. The rule does not govern the new paired 06.2 candidate.

External Final Validation must pass for the exact reconciliation bytes before commit. The CMS commit containing those exact bytes establishes **Phase 06 ACTIVE** and **Batch 06.1 APPROVED / CHECKPOINTED** only if both conditions hold:

1. External Final Validation passed for those exact bytes before commit.
2. The owner separately authorized the CMS Git checkpoint.

Until the qualifying containing commit exists, Phase 06 is NOT STARTED. After push, clean synchronized CMS `master` and External Checkpoint Validation PASS are required before 06.2 may begin under separate owner authorization. The frontend remains at its accepted read-only baseline and receives no 06.1 commit.

The containing commit grants no 06.2 implementation, frontend edit, dependency, Contentful, token-test, publication or Phase 07 authority. Phase 07 remains NOT STARTED. This prerequisite-based rule remains valid in the containing commit; it does not require rewriting these bytes to insert their own commit SHA.

## Batch 06.2 Qualifying Checkpoint Rule

**PROPOSED documentation rule for External Final Validation**, selected by the current owner authorization; it is not already externally approved. Incoming baselines are CMS `9738cb34127b36cbb118de2438fc4db656b5dc0d` / tree `5ce1358cf196672ff46365a0c342c5a68aa74d94` and frontend `a29b9997bedab501bf4432bb4c9e812359773df4` / tree `3fb1892570cca995dbdd0c829e403222f7c73564`. They do not contain this uncommitted candidate.

1. External Implementation Validation PASS WITH NOTES binds the original 26-path accepted implementation candidate.
2. This documentation-only reconciliation creates a final candidate across both repositories. It is not its own External Final Validation and creates no checkpoint.
3. External Final Validation must PASS for the exact reconciled file sets and preserved implementation identities **before checkpoint creation**.
4. The owner must separately authorize Git checkpoint operations.
5. Both repositories must then have qualifying commits containing their exact final-validated file sets. Only when that **paired containing-commit condition** is satisfied do 06.2 APPROVED / CHECKPOINTED and contract freeze/version become effective. A single unpaired commit does not satisfy this rule.
6. Push, clean local synchronization of both repositories and External Checkpoint Validation of the actual pair are required before 06.3 eligibility. Starting 06.3 still requires separate authorization.

Pre-checkpoint reconciliation state: candidate COMPLETE; External Final Validation PENDING; Git checkpoint NOT AUTHORIZED / NOT RUN; effective normalized contract version UNASSIGNED UNTIL 06.2 APPROVAL. Candidate ledger revision is `06.2-reconciliation-1`; reserved initial normalized-contract label is `portfolio-contract-v1.0.0`. The label identifies the six exact reviewed type modules and fixture compatibility from the accepted manifest, not the CMS model, npm version, runtime declaration or Git tag.

The [canonical ledger](../system/FRONTEND-CONTRACT-MAPPING.md) records the pending pair and artifact provenance. Later checkpoint evidence must resolve both actual commit/tree identities and membership in the exact external final-validation manifest. No hypothetical SHA, mutually embedded future SHA or self-hash is required; a later concrete pointer edit, if needed, requires separate authorization and review. 06.4–06.6 remain NOT AUTHORIZED and Phase 07 NOT STARTED. The 06.1 rule and Phase 05 closeout prerequisites are unchanged.
