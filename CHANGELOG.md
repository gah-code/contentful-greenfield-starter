# Changelog

All meaningful project changes should be recorded here.

## Unreleased

### Added

- Greenfield Contentful starter structure
- Phase-based roadmap
- Project-state and decision tracking
- Contentful environment safety scripts
- Initial portfolio model bootstrap migration
- Model export/import scripts
- Canonical Phase 00 system documentation surfaces
- Canonical content-model ledgers for content types, field IDs, and references
- Node major pin through `.nvmrc`
- Phase 00 runtime and tooling table

### Decisions

- Start from a new Contentful space or blank environment.
- Build the first model through a migration.
- Export the approved model and verify it through a clean model-only import.
- Keep frontend route composition code-owned during v1.
- Accept the initial mixed baseline/CMS commit as a recorded deviation instead of rewriting history.

### Changed

- Aligned the technical package name with `contentful-greenfield-starter`.
- Declared npm as `packageManager` with `npm@10.8.3`.
- Renamed the active Phase 00 document to `docs/phases/PHASE-00-BASELINE-AND-ENVIRONMENT-SETUP.md`.
- Updated Contentful CLI wrappers to use the local `npx --no-install contentful` command surface.
- Removed management-token command-line argument construction from Contentful wrappers.
- Aligned Phase 00 documentation and helper scripts to the approved two-environment architecture.
- Removed the active separate target-environment contract from `.env.example`, environment checks, and model import.
- Made serial clean-room `dev` reconstruction the Phase 03 verification model.
- Recorded that no Contentful environments were changed and bootstrap migration remains blocked during this repository repair.
- Recorded Batch 00.3 external approval and queued Batch 00.4 verification.
- Approved Phase 00 / Batch 00.4 Contentful space and environment verification.
- Verified Starter two-environment capacity, `master`/`dev` clean baseline state, and `en-US` locale compatibility.
- Advanced Phase 00 to Batch 00.5 closeout.
- Completed Phase 00 implementation and verification work for external closeout review.
- Verified repository, runtime, secret-safety, and Contentful environment baseline evidence.
- Confirmed protected `master` + rotating `dev` topology with matching `en-US` locale configuration.
- Prepared Phase 00 / Batch 00.5 for external closeout validation.
- Approved Phase 00 / Batch 00.5 after external validation.
- Marked Phase 00 complete and advanced Phase 01 to next while keeping bootstrap migration blocked and seed content not started.
- Started Phase 01 — Content Strategy + Route Contract.
- Reconciled the Batch 01.1 content-strategy intake into project documentation.
- Established mission, audience, content pillars, editorial ownership, reuse, accessibility, localization, confidentiality, fixture, and deferred-scope rules.
- Kept formal route-contract work deferred to Batch 01.2.
- Kept bootstrap migration blocked and not run.
- Approved Phase 01 / Batch 01.1 — Content Strategy Foundation after external validation.
- Established the project content-strategy foundation while preserving proposed pillars, assumptions, and open decisions.
- Advanced Phase 01 to Batch 01.2 — Route Contract.
- Bootstrap migration remains blocked and seed content remains not started.
- Started Phase 01 / Batch 01.2 — Route Contract.
- Formalized route purpose, content responsibility, ownership, route states, internal linking, responsive intent, and accessibility intent for the v1 route system.
- Kept detailed SEO metadata behavior deferred to Batch 01.3.
- Kept Contentful schema and bootstrap migration work deferred.
- Approved Phase 01 / Batch 01.2 — Route Contract after external validation.
- Approved the nine-route v1 route contract and route responsibility/state model.
- Resolved OD-07 — Final formal v1 route contract.
- Preserved OD-08 — `/tools` vs skills boundary as PROPOSED / OPEN.
- Advanced Phase 01 to Batch 01.3 — SEO + Metadata Contract.
- Bootstrap migration remains blocked and seed content remains not started.
- Started Phase 01 / Batch 01.3 — SEO + Metadata Contract.
- Adopted Option 2 hybrid SEO ownership as the Batch 01.3 contract direction.
- Limited future editorial SEO overrides conceptually to title, description, and social image.
- Assigned canonical URLs, robots/indexability, sitemap eligibility, structured data, breadcrumbs, and preview exclusion to code/state.
- Marked the broad legacy `seoMetadata` proposal for Phase 02 reconciliation.
- Resolved OD-15 — SEO override/default strategy.
- Kept Contentful schema work and frontend SEO implementation deferred.
- Approved Phase 01 / Batch 01.3 — SEO + Metadata Contract after external validation.
- Approved Option 2 hybrid SEO ownership.
- Resolved OD-15 — SEO override/default strategy.
- Preserved ADR-009 as the architectural rationale for hybrid ownership.
- Deferred exact Contentful SEO field representation to Phase 02.
- Advanced Phase 01 to Batch 01.4 — Content Requirements Matrix.
- Bootstrap migration remains blocked and seed content remains not started.
- Started Batch 01.4 — Content Requirements Matrix.
- Mapped approved route requirements to semantic content domains.
- Defined required, optional, conditional, and deferred content.
- Defined content reuse, route readiness, fixture, media, accessibility, SEO-input, and public-safety requirements.
- Added directional Phase 02 model handoff classifications.
- Did not create or modify Contentful schema.
- Approved Phase 01 / Batch 01.4 — Content Requirements Matrix after external validation.
- Approved route/content requirement traceability across all nine v1 routes.
- Resolved OD-08 — Skills vs Tools semantic boundary.
- Preserved exact Tool Contentful representation as Phase 02 work.
- Advanced Phase 01 to Batch 01.5 — Validation + Freeze.
- Bootstrap migration remains blocked and seed content remains not started.
- Started Phase 01 / Batch 01.5 — Validation + Freeze.
- Cross-validated Content Strategy, Route Contract, SEO Contract, and Content Requirements Matrix.
- Classified remaining open decisions by downstream ownership.
- Validated Phase 02 handoff without schema work.
- Confirmed Contentful model artifacts remain proposed pending Phase 02 reconciliation.
- Recorded Phase 01 as a freeze candidate pending external validation.
- Approved Phase 01 / Batch 01.5 — Validation + Freeze.
- Completed and froze Phase 01 after external validation.
- Cross-validated the four canonical Phase 01 contracts.
- Confirmed all nine v1 routes and ownership/readiness/SEO requirements.
- Preserved OD-07, OD-08, and OD-15 as resolved.
- Carried remaining open decisions forward to their downstream owners.
- Validated the Phase 02 handoff without performing model implementation.
- Advanced Phase 02 to NEXT.
- Bootstrap migration remains BLOCKED / NOT RUN.
- Seed content remains NOT STARTED.

### Security

- Documented risk controls for accidental `master` mutation, premature `dev` deletion, stale topology instructions, token exposure, and locale mismatch.
- Documented Batch 00.3 secret-safety checks, credential-variable separation, CLI/logging boundaries, and the evidence limitation that actual token values/scopes are not verified.
- Verified local `.env.local` presence without reading credential values, while confirming the file remains ignored, untracked, and absent from filename history.
- Recorded that Batch 00.3 secret-safety work was externally validated and approved.
