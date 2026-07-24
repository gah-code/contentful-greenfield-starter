# Phase 00 — Baseline + New Environment Setup

Status: active

Current batch: 00.1-00.2 - Repository and Runtime Tooling Repair

## Objective

Establish a safe repository and two blank non-production Contentful environments before creating the model.

## Scope

- repository structure
- documentation surfaces
- CLI installation
- credentials safety
- environment inventory
- default locale confirmation
- environment creation
- baseline verification

## Not in Scope

- content types
- entries
- assets
- frontend clients
- adapters
- preview
- production configuration

## Runtime and Tooling

| Tool | Version | Verified |
|---|---:|---|
| Node.js | v22.2.0 | Yes |
| npm | 10.8.3 | Yes |
| Contentful CLI | 4.0.4 | Yes |
| contentful-migration | 5.1.0 | Yes |
| contentful-export | 8.1.1 | Yes |
| contentful-import | 10.0.18 | Yes |

Contentful CLI package version is recorded from the local dependency tree. The local binary help surface is verified through `npx --no-install contentful --help`; the binary `--version` output reports `0.0.0-determined-by-semantic-release`.

## Step 0 Checklist

### 0.1 Repository and Project Truth

- [x] Technical repository/package name is `contentful-greenfield-starter`
- [x] Git work tree exists and remains clean before repair
- [x] Starter files are present in the repository root
- [x] `.env.local` is ignored by committed ignore rules
- [x] npm is the declared package manager through `packageManager`
- [x] Node major version is pinned in `.nvmrc`
- [x] Canonical documentation surfaces exist
- [x] Historical baseline commit deviation is recorded

### 0.2 Runtime and Contentful Tooling

- [x] `node -v` detected `v22.2.0`
- [x] `npm -v` detected `10.8.3`
- [x] Local Contentful packages are installed
- [x] Installed package versions are recorded in the runtime table
- [x] Local CLI help surface is inspected with `npx --no-install`
- [x] Contentful wrapper scripts use the locally installed CLI
- [x] Management token values are not passed as CLI arguments

### 0.3 Contentful Account and Space

- [ ] Confirm organization
- [ ] Create or select the new space
- [ ] Record space name
- [ ] Record space ID in `.env.local`
- [ ] Confirm default locale
- [ ] Confirm `master` contains no custom model or content

### 0.4 Authentication

Choose one:

- [ ] Run `npm run cms:login`
- [ ] Or create a management token and store it only in `.env.local`

Never paste the token into committed files, shell history, screenshots, or task documents.

### 0.5 Environment Creation

From the blank `master` environment:

```bash
npx --no-install contentful space environment create \
  --space-id "$CONTENTFUL_SPACE_ID" \
  --name dev \
  --environment-id dev

npx --no-install contentful space environment create \
  --space-id "$CONTENTFUL_SPACE_ID" \
  --name verification \
  --environment-id verification
```

- [ ] `dev` is ready
- [ ] `verification` is ready
- [ ] `master` remains blank
- [ ] environment IDs match `.env.local`

### 0.6 Validation

```bash
npm run cms:env:check
npm run cms:env:list
```

- [ ] required variables pass
- [ ] source environment is not `master`
- [ ] target environment is not `master`
- [ ] source and target are different
- [ ] both environments appear in the list

## Accepted Deviation

Git history shows `46125d2 Initial commit` included CMS/model artifacts, including the initial bootstrap migration and Contentful scripts. This repository will not rewrite history for Phase 00 repair. Future batches should use focused commits that separate repository baseline, tooling, model, and documentation changes.

## Phase Closeout Evidence

Current Batch 00.1-00.2 evidence:

```text
Node: v22.2.0
npm: 10.8.3
Contentful CLI package: 4.0.4
contentful-migration: 5.1.0
contentful-export: 8.1.1
contentful-import: 10.0.18
Space name: not verified in this batch
Default locale: not verified in this batch
Source environment: not created or verified in this batch
Target environment: not created or verified in this batch
Master untouched: not verified in this batch
Verification date: 2026-07-24
```

## Closeout Rule

Phase 00 closes only when:

1. all Step 0 tasks are complete
2. `TASKS.md` moves Phase 01 into Now
3. `docs/PROJECT-STATE.md` is updated
4. this document records verification
5. `CHANGELOG.md` records the completed baseline
