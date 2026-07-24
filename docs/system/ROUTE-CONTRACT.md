# Route Contract

Status: pending Phase 01 approval  
Owner: Phase 01 - Content Strategy + Route Contract

## Purpose

This is the canonical surface for route inventory, route ownership, and frontend-facing data contracts before Contentful data is integrated.

## Current Phase 00 Boundary

Batch 00.1-00.2 does not approve route contracts or frontend integration. Static fixtures remain the expected bridge until UI-facing contracts are reviewed in a later phase.

## Candidate Route Surfaces

These route surfaces are carried from accepted architecture decisions and remain subject to Phase 01 confirmation:

- homepage
- about
- work
- projects
- writing
- tools
- contact

## Contract Rules

- UI components receive CMS-agnostic props, not raw Contentful entry shapes.
- Route composition remains frontend-owned during v1 unless a later decision revisits page composition.
- Adapters own Contentful response normalization before data reaches page contracts.
- Static fixtures remain available until route parity is proven.
