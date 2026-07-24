# Content Type Ledger

Status: proposed  
Target count: 10 content types  
Owner: Phase 02 - Content Model Contract + Bootstrap Migration

## Model Principle

Model content meaning, not visual component names.

## Core Types

| ID | Name | Purpose |
|---|---|---|
| `seoMetadata` | SEO Metadata | Reusable route metadata |
| `socialLink` | Social Link | Profile and footer social destinations |
| `navigationItem` | Navigation Item | Header/footer navigation |
| `siteSettings` | Site Settings | Global website configuration |
| `personProfile` | Person Profile | Primary personal identity and bio |
| `project` | Project | Project and case-study content |
| `article` | Article | Writing content |
| `experienceItem` | Experience Item | Employment and role history |
| `skill` | Skill | Individual capability or technology |
| `skillGroup` | Skill Group | Grouped skills |

## Deliberately Deferred Types

- `page`
- `pageSection`
- visual component types
- stat cards
- generic cards
- CTA blocks
- tags as entries
- categories as entries
- testimonials
- learning items

## Why They Are Deferred

The first website routes already have known composition. Adding a page builder now would increase editorial and adapter complexity before a real need is proven.

Tags and categories begin as short-text arrays or controlled short text. Promote them into referenced entries only when reuse, governance, or editorial filtering requires it.

## Related Surfaces

- Field IDs: `docs/content-model/FIELD-ID-LEDGER.md`
- References: `docs/content-model/REFERENCE-MAP.md`
- Bootstrap migration: `content-model/migrations/0001-bootstrap-portfolio-model.js`
