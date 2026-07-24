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
