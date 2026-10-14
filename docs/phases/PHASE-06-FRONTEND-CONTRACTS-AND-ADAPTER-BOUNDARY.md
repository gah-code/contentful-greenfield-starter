# Phase 06 — Frontend Contracts + Adapter Boundary

Status: entry governance reconciled; implementation is not authorized. The [containing-commit rule](#durable-containing-commit-rule) determines Phase 06 and Batch 06.1 lifecycle. Phase 05 is COMPLETE / FROZEN. Phase 07 is NOT STARTED.

This document owns the canonical Greenfield Phase 06 batch plan and entry rule. [Project State](../PROJECT-STATE.md) owns current project lifecycle. The [mapping/version ledger](../system/FRONTEND-CONTRACT-MAPPING.md) owns cross-repository mapping and version provenance. The [06.1 report](../../content-model/reports/PHASE-06-BATCH-06.1-FRONTEND-INVENTORY-AND-ARCHITECTURE-DECISION.md) owns inspection chronology and external evidence identities.

## Controlling baselines and accepted evidence

| Repository | Identity and role | Accepted checkpoint | Tree |
| --- | --- | --- | --- |
| CMS | `gah-code/contentful-greenfield-starter`; frozen source semantics and governance | `35e70f991b8b1da2587526b278210f34b24f5402` | `3382e235debf42cf21c83cdbb3ab5b707d87ff13` |
| Frontend | `gah-code/ui-gallery-system`; selected frontend implementation repository | `a29b9997bedab501bf4432bb4c9e812359773df4` | `3fb1892570cca995dbdd0c829e403222f7c73564` |

The exact local roots are `/Users/gilbertharo/Documents/GitHub/contentful-greenfield-starter` and `/Users/gilbertharo/Documents/GitHub/ui-gallery-system`. Both accepted baselines are `master`, with matching `origin/master`, clean working trees and `0 / 0` ahead/behind. The CMS entry preflight and 06.1 frontend inventory each received External Validation PASS WITH NOTES. These accept static findings and planning inputs; they do not authorize implementation or Contentful access.

Accepted seed observations remain September 29 evidence (`2026-09-29T08:54:11.057Z`): 42 draft/unarchived Entries, eight processed/unpublished/unarchived Assets, zero publications, protected blank `master` and zero material model drift. No October live refresh is claimed.

## Accepted frontend architecture

The frontend is a client-rendered React 19 / Vite 8 / TypeScript 6 application. Storybook is the implemented component/gallery/design-system surface. The Vite application renders the gallery root through `src/main.tsx` → `src/App.tsx` → `GallerySurfaceLayout`. It has no production portfolio router, SSR or SSG implementation. `src/stories/portfolio/HomePreview.stories.tsx` is a portfolio composition in Storybook only.

Existing component props and gallery metadata remain UI-native presentation contracts. Their names and behavior are preserved unless a later authorized change is approved. No Contentful SDK/client/transport, normalized CMS adapter, reference resolver, portfolio URL builder, Rich Text normalizer or page assembler exists. Raw Contentful `fields`, `sys`, Links and response `includes` have not leaked into components. No normalized portfolio fixture module exists. Configured Storybook/Vitest/Playwright tooling is not evidence of executed frontend tests; no standalone adapter, production-route or CMS fixture-parity tests were found. No third-repository dependency was found.

## Nine-route comparison

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

## Ten-domain comparison

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

The [mapping ledger](../system/FRONTEND-CONTRACT-MAPPING.md) records proposed shapes and source constraints. Proposed names are not existing or approved TypeScript declarations.

## Owner architecture decisions

[ADR-010](../DECISIONS.md#adr-010--phase-06-frontend-repository-and-contract-ownership) records the owner decisions; the following implications govern this phase plan.

### A — Selected frontend repository

`gah-code/ui-gallery-system` is the selected implementation repository for Greenfield Phase 06. No third application repository is created or inferred.

### B — Production rendering decision deferred

Storybook remains the implemented component/gallery/design-system surface. The existing Vite application is the leading candidate for the future portfolio runtime, but it is not approved as the final production rendering architecture.

Batch 06.2 compares, without implementation:

1. The existing Vite application with pathname routing and explicit direct-navigation, host-rewrite and prerender/metadata strategy.
2. A separate portfolio application entry or package inside the same repository, preserving Storybook and the gallery.
3. Another runtime approach only if evidence demonstrates that route, metadata, deployment, preview or static-output requirements cannot safely be met in the existing structure.

The comparison must cover all nine routes; direct deep links; dynamic project/article slug pages; route-level metadata and crawlability; static/prerendered output; deployment-host fallback behavior; loading, empty, not-found and error states; Storybook/gallery preservation; static fixture operation; and future Contentful adapter isolation. It must document a selected deployment and direct-navigation strategy. Preview requirements are design inputs, not preview-token or client authority.

This gate selects a repository and ownership boundary. It does not replace the gallery root, install a router, create routes or application packages, or change framework dependencies.

### C — Route intent preserved

The nine approved v1 pathname routes remain unchanged. Their rendering and implementation strategy is future separately authorized frontend work. Prototype fragments are not implementation evidence.

### D — Source and runtime ownership

CMS documentation owns the frozen model and semantic source constraints, field/reference/validation policy, approved route intent, project Phase 06 governance and canonical mapping/version ledger. Frontend implementation owns normalized TypeScript domain/page contracts, normalized static fixtures, adapters, reference resolution, URL construction, Rich Text normalization, route/page assemblers, SEO composition, tests and consumers. No shared package exists or is authorized. Exact responsibilities and reciprocal-reference requirements are recorded once in the [ledger](../system/FRONTEND-CONTRACT-MAPPING.md).

### E — Separate governance lifecycles

Greenfield Phase 06 and frontend Phase 9 remain separate. They may coordinate deliverables and checkpoint references; neither automatically starts, approves or closes the other. Existing gallery/component contracts remain protected unless a change is separately approved. No frontend documentation or code change is made by this CMS reconciliation.

## Canonical batch plan

This is the owner-adopted planning structure. Its use for subsequent work is governed by the containing-commit and checkpoint gates below; none of its implementation scopes is authorized by recording the plan.

| Batch | Title | Scope and authority boundary |
| --- | --- | --- |
| 06.1 | Inventory, Baseline, Ownership + Architecture Decision | CMS entry preflight, exact frontend identity/baseline, architecture inventory, route/domain gaps, ownership, architecture decisions and canonical plan. APPROVED / CHECKPOINTED only through the containing-commit rule. |
| 06.2 | Rendering/Route Architecture Decision + Normalized Contract and Fixture Freeze | NEXT after 06.1 checkpoint, clean synchronized CMS `master` and External Checkpoint Validation PASS; requires separate scope authorization. Preserve existing gallery/component contracts, evaluate and freeze Decision B, record deployment/deep-link strategy, freeze normalized domain/page and representative-fixture contracts, route-result/media/Rich Text/metadata contracts, and negative/optional cases. Coordinate with frontend Phase 9 without merging it. Planning and contract freeze do not authorize route/router/package/framework/runtime implementation. |
| 06.3 | Pure Adapters, Resolution, URLs + Focused Offline Tests | LATER / NOT AUTHORIZED. Raw-source-to-normalized mapping, forward references, derived reverse relationships, internal/external/Asset URL builders, Rich Text normalization and focused mapping/boundary tests. No raw `fields`, `sys`, Link or `includes` in UI outputs. |
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

External Final Validation must pass for the exact reconciliation bytes before commit. The CMS commit containing those exact bytes establishes **Phase 06 ACTIVE** and **Batch 06.1 APPROVED / CHECKPOINTED** only if both conditions hold:

1. External Final Validation passed for those exact bytes before commit.
2. The owner separately authorized the CMS Git checkpoint.

Until the qualifying containing commit exists, Phase 06 is NOT STARTED. After push, clean synchronized CMS `master` and External Checkpoint Validation PASS are required before 06.2 may begin under separate owner authorization. The frontend remains at its accepted read-only baseline and receives no 06.1 commit.

The containing commit grants no 06.2 implementation, frontend edit, dependency, Contentful, token-test, publication or Phase 07 authority. Phase 07 remains NOT STARTED. This prerequisite-based rule remains valid in the containing commit; it does not require rewriting these bytes to insert their own commit SHA.
