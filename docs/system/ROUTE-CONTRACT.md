# Route Contract

Status: Batch 01.2 — NEXT
Owner: Phase 01 — Content Strategy + Route Contract

## Purpose

This is the canonical surface for route inventory, route ownership, and frontend-facing data contracts before Contentful data is integrated.

## Current Phase 01 Boundary

Approved Batch 01.1 captured preliminary route strategy input only. Batch 01.2 owns the formal route-level contract.

Static fixtures remain the expected bridge until UI-facing contracts are reviewed in a later phase. Batch 01.1 does not approve frontend implementation, templates, adapters, SEO metadata contracts, or CMS mapping.

## Preliminary V1 Route Inventory

Current status: PROPOSED route inventory.

Formal route contract: not yet approved.

| Route | Batch 01.1 strategy input | Formal contract approved? |
|---|---|---:|
| `/` | Proposed v1 route | No |
| `/about` | Proposed v1 route | No |
| `/work` | Proposed v1 route | No |
| `/projects` | Proposed v1 route | No |
| `/projects/[slug]` | Proposed v1 route | No |
| `/writing` | Proposed v1 route | No |
| `/writing/[slug]` | Proposed v1 route | No |
| `/tools` | Proposed v1 route | No |
| `/contact` | Proposed v1 route | No |

Approved supporting decisions from Batch 01.1 strategy input:

- `/tools` is preferred over `/uses`.
- Home does not need a primary-navigation label; logo/name links to `/`.
- Résumé is a downloadable PDF rather than a standalone route.
- No additional v1 routes are currently required.

## Contract Rules

- UI components receive CMS-agnostic props, not raw Contentful entry shapes.
- Route composition remains frontend-owned during v1 unless a later decision revisits page composition.
- Adapters own Contentful response normalization before data reaches page contracts.
- Static fixtures remain available until route parity is proven.

## Deferred to Batch 01.2

- final route purposes
- route ownership
- route-level content requirements
- route-level responsive content requirements
- route-level data contracts
- route-level SEO handoff points
- route-level CMS mapping gaps

## Not Approved in Batch 01.1

- final route states
- metadata contracts
- structured-data behavior
- Contentful schema fields or references
- frontend route implementation
- generic page composition
