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

### Security

- Documented risk controls for accidental `master` mutation, premature `dev` deletion, stale topology instructions, token exposure, and locale mismatch.
- Documented Batch 00.3 secret-safety checks, credential-variable separation, CLI/logging boundaries, and the evidence limitation that actual token values/scopes are not verified.
- Verified local `.env.local` presence without reading credential values, while confirming the file remains ignored, untracked, and absent from filename history.
- Recorded that Batch 00.3 secret-safety work was externally validated and approved.
