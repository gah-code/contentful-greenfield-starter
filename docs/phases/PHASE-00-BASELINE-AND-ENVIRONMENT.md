# Phase 00 — Baseline + New Environment Setup

Status: active

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

## Step 0 Checklist

### 0.1 Repository

- [ ] Choose repository name
- [ ] Initialize Git
- [ ] Copy starter files
- [ ] Confirm `.env.local` is ignored
- [ ] Confirm package manager
- [ ] Pin Node version
- [ ] Run `npm install`

### 0.2 Contentful Account and Space

- [ ] Confirm organization
- [ ] Create or select the new space
- [ ] Record space name
- [ ] Record space ID in `.env.local`
- [ ] Confirm default locale
- [ ] Confirm `master` contains no custom model or content

### 0.3 Authentication

Choose one:

- [ ] Run `npm run cms:login`
- [ ] Or create a management token and store it only in `.env.local`

Never paste the token into committed files, shell history, screenshots, or task documents.

### 0.4 Environment Creation

From the blank `master` environment:

```bash
npx contentful space environment create \
  --space-id "$CONTENTFUL_SPACE_ID" \
  --name dev \
  --environment-id dev

npx contentful space environment create \
  --space-id "$CONTENTFUL_SPACE_ID" \
  --name verification \
  --environment-id verification
```

- [ ] `dev` is ready
- [ ] `verification` is ready
- [ ] `master` remains blank
- [ ] environment IDs match `.env.local`

### 0.5 Validation

```bash
npm run cms:env:check
npm run cms:env:list
```

- [ ] required variables pass
- [ ] source environment is not `master`
- [ ] target environment is not `master`
- [ ] source and target are different
- [ ] both environments appear in the list

## Phase Closeout Evidence

Record:

```text
Node:
npm:
Contentful CLI:
Space name:
Default locale:
Source environment:
Target environment:
Master untouched:
Verification date:
```

## Closeout Rule

Phase 00 closes only when:

1. all Step 0 tasks are complete
2. `TASKS.md` moves Phase 01 into Now
3. `docs/PROJECT-STATE.md` is updated
4. this document records verification
5. `CHANGELOG.md` records the completed baseline
