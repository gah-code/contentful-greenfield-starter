# Field ID Ledger

Status: proposed  
Owner: Phase 02 - Content Model Contract + Bootstrap Migration

Approve this document before running the first migration.

Field IDs should be treated as API contracts.

## Rules

- use lower camel case
- avoid visual names
- avoid implementation framework names
- do not rename after content or queries depend on the field
- add new fields through numbered migrations
- document every deprecation

## Review Table

| Content type | Field ID | Name | Type | Required | Frontend purpose | Approved |
|---|---|---|---|---|---|---|
| `seoMetadata` | `internalName` | Internal Name | Symbol | Yes | Editor identification | [ ] |
| `seoMetadata` | `title` | Title | Symbol | Yes | HTML/OG title | [ ] |
| `seoMetadata` | `description` | Description | Text | Yes | Meta description | [ ] |
| `socialLink` | `platform` | Platform | Symbol | Yes | Label/icon key | [ ] |
| `socialLink` | `url` | URL | Symbol | Yes | Destination | [ ] |
| `navigationItem` | `label` | Label | Symbol | Yes | Navigation text | [ ] |
| `navigationItem` | `href` | Href | Symbol | Yes | Internal/external path | [ ] |
| `siteSettings` | `siteName` | Site Name | Symbol | Yes | Global brand text | [ ] |
| `personProfile` | `name` | Name | Symbol | Yes | Profile identity | [ ] |
| `project` | `slug` | Slug | Symbol | Yes | Project route | [ ] |
| `article` | `slug` | Slug | Symbol | Yes | Writing route | [ ] |
| `experienceItem` | `role` | Role | Symbol | Yes | Timeline title | [ ] |
| `skill` | `name` | Name | Symbol | Yes | Skill label | [ ] |
| `skillGroup` | `name` | Name | Symbol | Yes | Group label | [ ] |

Complete the full review against `content-model/migrations/0001-bootstrap-portfolio-model.js`.
