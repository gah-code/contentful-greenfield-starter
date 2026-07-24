# Security and Secrets

Status: Phase 00 active  
Owner: Phase 00 - Baseline + New Environment Setup

## Secret Handling

- Never commit `.env.local`, `.env`, or real Contentful tokens.
- Keep committed examples limited to variable names and empty values.
- Do not print, paste, summarize, or log token values.
- Do not pass management tokens as command-line arguments.
- Use environment variables or local CLI authentication state for Contentful authentication.

## Contentful Command Safety

- Use the locally installed Contentful CLI through `npx --no-install contentful` or the shared wrapper.
- Run only read-only help/version/dependency checks during Batch 00.1-00.2 repair.
- Do not run migrations, exports, imports, environment creation, or authentication in Batch 00.1-00.2 repair.
- Do not target `master` with bootstrap, export, import, or verification wrapper scripts.

## Repository Safety

- `.gitignore` keeps `.env` and `.env.*` ignored while allowing `.env.example`.
- Model snapshots and reports are ignored unless explicitly approved for tracking.
- Future batches should use focused commits and avoid combining baseline, tooling, and model work in one change.
