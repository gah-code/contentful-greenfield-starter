# Phase 01 — Content Strategy + Route Contract

Status: next

## Objective

Confirm the content system before treating the proposed model as final.

## Default v1 Routes

- `/`
- `/about`
- `/work`
- `/projects`
- `/projects/[slug]`
- `/writing`
- `/writing/[slug]`
- `/tools`
- `/contact`

## Route Matrix

| Route | Purpose | Primary content | CMS-owned | Code-owned |
|---|---|---|---|---|
| `/` | Positioning and featured work | profile, projects, writing, experience, skills | content values | composition |
| `/about` | Story, approach, background | profile, experience, skills | content values | composition |
| `/work` | Services and case-study framing | projects, experience | content values | composition |
| `/projects` | Project index | projects | entries | filters/UI |
| `/projects/[slug]` | Case study | project | entry | template |
| `/writing` | Article index | articles | entries | filters/UI |
| `/writing/[slug]` | Article detail | article | entry | template |
| `/tools` | Tools and skills | skills, groups | entries | composition |
| `/contact` | Contact intent | profile, social links | values | form behavior |

## Questions to Answer

- Which homepage sections must editors control?
- Which content is repeated across routes?
- Which content needs rich text?
- Which metrics are facts versus visual decoration?
- Do project outcomes need structured metrics?
- Are article categories free text or controlled?
- Are skill categories reusable enough for references?
- Are project links limited to live/source links?
- Is multilingual content in v1?
- Are any routes expected to be editor-composed?

## Exit Criteria

- route matrix approved
- content inventory approved
- initial model remains within the 10-type scope or expansion is justified
- field ledger updated before migration
