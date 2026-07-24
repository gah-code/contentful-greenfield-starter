# Content Model Governance

## Operating Model

```text
Migration creates or changes model
→ development environment review
→ model-only export
→ clean verification import
→ editor QA
→ approved snapshot
```

## Directories

- `migrations/` — ordered intentional model changes
- `snapshots/` — exported portable model baselines
- `reports/` — local validation output; not committed by default

## Naming

```text
0001-bootstrap-portfolio-model.js
0002-add-project-outcomes.js
0003-refine-article-seo.js
```

## Rules

- additive changes by default
- destructive changes require separate approval
- never run bootstrap against `master`
- never edit a used field ID casually
- export after approved changes
- import snapshots only into a clean target during verification
- keep the default locale aligned between source and target
