# Decisions

## ADR-001 — Greenfield Contentful Environment

Status: accepted

Start from a new space or a blank Contentful environment rather than adapting an inherited model.

### Why

- removes legacy assumptions
- makes field ownership explicit
- allows model verification before content migration
- supports clean export/import testing

---

## ADR-002 — Migration First, Export Second

Status: accepted

Create the first model in `dev` through a migration, then export the approved model and import it into `verification`.

### Why

A hand-authored Contentful export JSON is fragile. A migration is easier to review and reason about. The export then becomes the portable quick-start artifact.

---

## ADR-003 — Export Is a Snapshot, Not the Change Log

Status: accepted

The repository keeps both:

- model snapshots for replication and comparison
- migration scripts for the history of intentional changes

---

## ADR-004 — No Generic Page Builder in v1

Status: accepted

Homepage, About, Work, Projects, Writing, Tools, and Contact composition remain frontend-owned initially.

### Revisit when

- editors need to reorder major sections without code
- multiple page layouts share a proven composition pattern
- page-level preview requirements justify the complexity

---

## ADR-005 — CMS-Agnostic UI Boundary

Status: accepted

Presentational components receive frontend-facing contracts, never raw Contentful entry shapes.

```text
Contentful response
→ query layer
→ adapter/view model
→ page contract
→ UI components
```

---

## ADR-006 — Initial Model Cap

Status: accepted

Start with 10 semantic content types:

1. SEO Metadata
2. Social Link
3. Navigation Item
4. Site Settings
5. Person Profile
6. Project
7. Article
8. Experience Item
9. Skill
10. Skill Group
