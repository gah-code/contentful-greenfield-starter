# Editorial Workflow and Field Guidance

Status: IMPLEMENTED / EXTERNAL VALIDATION PASS WITH NOTES / FINAL APPROVAL RECONCILIATION COMPLETE

External Final Validation is the required pre-commit condition. Only after it passes for this exact reconciled state may the containing commit establish the Batch 04.5 checkpoint; Batch 04.6 entry then requires External Checkpoint Validation PASS for that commit.

## 1. Purpose

This is the canonical v1 operating guide for editors working with the approved ten-type portfolio model. It turns the exact 44 Class B findings from Batch 04.4 into practical rules for choosing, drafting, relating, reviewing, publishing, and maintaining content.

Use this guide with the approved field, reference, validation, and route contracts. It does not replace hard Contentful validations, add fields, change Editor Interfaces, or authorize Contentful access.

The model, migration, Editor Interfaces, field IDs, references, and validations remain unchanged.

## 2. Scope + Evidence Boundary

This guidance covers:

- the approved `siteSettings`, `personProfile`, `socialLink`, `navigationItem`, `project`, `article`, `experienceItem`, `skill`, `skillGroup`, and `tool` types;
- singleton lifecycle and canonical reuse;
- picker identity, relationship direction, and meaningful ordering;
- slug, chronology, tag, link, media, claim, and public-safety review;
- publication readiness and post-publication maintenance.

Batch 04.3 did not complete exhaustive 102 / 102 live QA. Batch 04.4's CLASS 0 result is bounded by the available evidence: it established no model or Editor Interface technical correction, but it is not an exhaustive guarantee that no defect can exist. The 44 Class B scenarios are editorial findings and handoff inputs. Some rules below therefore come from approved contract obligations whose live evidence remains incomplete.

Deferred QA Harness Hardening remains unresolved and is required before another exhaustive authoring run. That limitation creates no model correction finding by itself.

## 3. Editorial Operating Principles

1. **Use the most specific semantic content type.** Do not use an adjacent type merely because fields look similar.
2. **Search before creating.** Before creating singleton, Person Profile, Skill, Tool, Navigation Item, Project, Article, or Experience content, search for an existing semantic equivalent.
3. **Reuse before duplicating.** Prefer references to existing canonical Entries over copied text or near-duplicate entities.
4. **Preserve order intentionally.** Review arrays and references whose order has editorial meaning in their final display order.
5. **Treat public-safe content as an editorial responsibility.** Schema validation is not the entire public-safety contract.
6. **Validate relationships before publication.** Check picker identity, target meaning, ordering, duplicates, and semantic fit.
7. **Use model rules and editorial guidance together.** Hard validation and editorial judgment have different owners.
8. **Do not invent schema workarounds.** Stop and raise a model-review question instead of overloading unrelated fields.

## 4. End-to-End Workflow

### A. Choose

- Identify the correct semantic content type.
- Search for an existing Entry representing the same entity or concept.
- Determine whether the content is a singleton or reusable entity.
- Identify the canonical semantic owner for the content and relationships.

### B. Create / Draft

- Populate the required editorial identity and required content.
- Use each field only for its approved meaning.
- Preserve distinctions such as Skill versus Tool and content versus technical configuration.
- Use approved, public-safe Assets and canonical references.

### C. Relate

- Search for and select canonical referenced Entries.
- Inspect display identity before selecting a picker result.
- Avoid duplicate links and reverse relationships that the model derives.
- Order reference arrays deliberately where order is editorially meaningful.

### D. Review

- Review slug, chronology, tags, relationships, links, metrics, claims, and media.
- Check public-safe copy, duplicate and near-duplicate risk, and Asset metadata.
- Confirm controlled values and relationship meaning match the approved contracts.

### E. Publication Readiness

- Required fields are complete and editorial identity is clear.
- No duplicate semantic Entry exists.
- Slugs, dates, references, and ordered arrays have been reviewed.
- Public-safety and media-accessibility checks are complete where applicable.
- Content is intentionally ready for public use, not merely structurally valid.

### F. Post-Publication Maintenance

- Edit the canonical Entry instead of cloning it.
- Review downstream relationships before making major changes.
- Preserve stable IDs and slugs unless a governed change is intentional.
- Archive or deprecate through a future approved workflow rather than silently creating a replacement.

This workflow is contract-derived and evidence-bounded; it was not exhaustively exercised across all 102 scenarios live.

## 5. Content-Type Guidance

### Site Settings

Treat `siteSettings` as singleton operational content. Search before creating, use `siteName` to identify the intended singleton, and do not publish a convenience duplicate. Primary navigation, footer navigation, and social-link arrays must use canonical references and intentional order. Optional relationships should be populated only when they serve an approved public experience.

Handoff: `QA04-SS-004`, `QA04-SS-005`, `QA04-SS-006`, `QA04-SS-007`.

### Person Profile

Treat `personProfile` as the canonical professional identity and article-author context. Use `name` as picker identity, avoid duplicate profile drafts, and order reusable `socialLinks` deliberately. The profile owns its public-safe bio, positioning, public contact details, profile image, and current public resume. Review personal information, work-preference language, claims, resume contents, and synthetic/test copy before production use. Do not turn these editorial checks into new schema validation.

Handoff: `QA04-PP-008`, `QA04-PP-009`, `QA04-PP-010`, `QA04-PP-011`.

### Social Link

Create a `socialLink` only for a trusted public destination. Verify that `platform`, `label`, and `url` describe the same destination; use a label that is clear in pickers and visible UI. Reuse an existing platform/profile destination, avoid near-duplicates, and treat authored relationship order as primary when the link is in an ordered array. `sortOrder` is only a global fallback. A structurally valid URL can still be private, untrusted, or unsafe, so public-safety review remains editorial.

Handoff: `QA04-SL-005`, `QA04-SL-007`, `QA04-SL-008`.

### Navigation Item

Use `navigationItem` for approved v1 route identities, not arbitrary URLs. Ensure `label` is understandable in UI context and semantically matches `routeKey`. Reuse the same semantic item across approved navigation arrays, avoid duplicates, and preserve deliberate array order. Optional `description` may clarify a destination but must not replace or contradict canonical route identity.

Handoff: `QA04-NI-005`, `QA04-NI-006`.

### Project

Use `project` for a public-safe case study with enough evidence for collection and detail use. Required identity and proof fields - `title`, `slug`, `summary`, `projectType`, `role`, `problem`, `approach`, `outcome`, and `heroImage` - serve distinct visitor needs and must not be collapsed into one narrative field.

- Generate `slug` from a meaningful title when appropriate, then review it manually before first publication.
- Remove duplicate semantic tags; EF-05 does not promise schema-enforced duplicate-value rejection.
- Verify `liveUrl` and `repositoryUrl` are trusted, public destinations even when structurally valid.
- Order `galleryImages` and `relatedProjects` intentionally and confirm the primary item.
- Reuse canonical Skills for capabilities and Tools for products, platforms, frameworks, technologies, or software.
- Select the correct `relatedExperience`; do not author `relatedArticles`, which is derived from Article ownership.
- Review confidentiality, client details, metrics, claims, screenshots, media rights, and attribution.
- Search for an existing Project before creating a duplicate or near-duplicate case study.

Handoff: `QA04-PR-002`, `QA04-PR-004`, `QA04-PR-008`, `QA04-PR-012`, `QA04-PR-014`, `QA04-PR-016`, `QA04-PR-017`, `QA04-PR-019`.

### Article

Use `article` for complete public writing, not private notes or hidden SEO content. Review slug lifecycle, duplicate tags, publication chronology, relationship semantics, public-safe examples, attribution, links, and media rights.

- Reuse the canonical `personProfile` as `authorProfile`.
- Use `relatedProjects` for Project evidence and `relatedArticles` for genuinely related writing; order both deliberately.
- Reuse canonical Skills and Tools and preserve their semantic distinction.
- Ensure `updatedDate` does not precede `publishDate`.
- Search for duplicate or near-duplicate Articles before creating another Entry.
- Treat canonical output, fallback behavior, cross-type route handling, and other frontend behavior as downstream application-contract responsibilities.

Handoff: `QA04-AR-004`, `QA04-AR-008`, `QA04-AR-012`, `QA04-AR-013`, `QA04-AR-014`, `QA04-AR-016`, `QA04-AR-017`.

### Experience

Use `experienceItem` for public professional role or engagement evidence. A current role normally has `isCurrentRole` set and no `endDate`; a completed role has an end date on or after `startDate`. Review chronology, similar-role picker identity, and public-safe company context before publication.

- Verify `companyUrl` is a trusted public destination.
- Reuse canonical Skills, Tools, and related Articles; order `relatedArticles` deliberately.
- Do not author `relatedProjects`, which is derived from Project ownership.
- Distinguish similar roles with accurate company and contextual content while keeping `role` clear as display identity.
- Remove confidential employment details, client information, private metrics, and unsupported claims.

Handoff: `QA04-EX-004`, `QA04-EX-005`, `QA04-EX-006`, `QA04-EX-010`, `QA04-EX-012`, `QA04-EX-013`.

### Skill

A `skill` is a canonical reusable professional capability. Search by `name` and meaning before creating one, consolidate near-duplicates, and reuse the same Entry across Project, Article, Experience, Tool, and Skill Group consumers. Use `summary` and `proofSummary` for evidence-oriented context. Do not invent proficiency scores, percentages, bars, years-of-experience precision, or other meanings absent from the approved model.

Handoff: `QA04-SK-004`, `QA04-SK-005`, `QA04-SK-006`.

### Skill Group

Use `skillGroup` for a small, meaningful editorial taxonomy, not nested taxonomy or page layout. Give each group a distinguishable `name`, reuse canonical Skill Entries, remove duplicate semantic membership, and order `skills` deliberately. Do not create another Skill merely to change display order; change the ordered group membership instead. `sortOrder` is an optional global group-order fallback.

Handoff: `QA04-SG-003`, `QA04-SG-005`, `QA04-SG-006`.

### Tool

A `tool` is a product, platform, framework, technology, or software used to exercise a capability; a Skill is the capability itself. Use a canonical Tool Entry, avoid near-duplicate technologies, and write `usageContext` to explain professional use. Select and review canonical Skill links, using clear picker identities and meaningful order. Verify `externalUrl`, logo rights, public safety, and Asset metadata. Projects, Experience, and Articles related to a Tool are derived reverse relationships and must not be duplicated as authored ownership on Tool.

Handoff: `QA04-TL-005`, `QA04-TL-007`, `QA04-TL-008`, `QA04-TL-009`.

## 6. Singleton Workflow

`siteSettings` and `personProfile` are semantic singletons. Their uniqueness is enforced through editorial workflow and downstream diagnostics, not by a new singleton field or a claim that Contentful automatically prevents duplicate drafts.

Before creating either singleton:

1. Search all existing Entries of the type.
2. Identify the canonical Entry by `siteName` or `name`.
3. Update the canonical Entry when it owns the intended content.
4. Treat a duplicate draft as an editorial diagnostic; do not publish it.
5. Review navigation, social, profile, resume, and media references on the canonical owner.

## 7. Duplicate / Near-Duplicate Decision Test

Before creating a reusable Entry, ask:

1. Is this the same real-world entity or concept?
2. Does an existing Entry already represent it?
3. Is the difference only wording, order, or context?
4. Can the existing canonical Entry be referenced instead?
5. Would another Entry create ambiguous picker identity?

If canonical reuse answers the need, reuse the existing Entry. If the entity is genuinely distinct, create it with a clearly distinguishable display identity. If uncertain, stop and review instead of creating a convenience duplicate.

## 8. Relationship + Ordering Guidance

For ordered references:

- order is editorial meaning;
- Contentful does not supply the intended display order automatically;
- select canonical references and avoid duplicate links;
- verify first or primary items;
- review order after every addition or removal.

Preserve the approved authored direction:

- `siteSettings` owns ordered primary navigation, footer navigation, and social links;
- `personProfile` owns its ordered social links;
- Project owns Skills, Tools, one related Experience, and ordered related Projects; related Articles are derived;
- Article owns its author, ordered related Projects and Articles, Skills, and Tools;
- Experience owns Skills, Tools, and ordered related Articles; related Projects are derived;
- Skill Group owns ordered Skill membership;
- Tool owns Skill links; Tool-to-Project, Tool-to-Experience, and Tool-to-Article relationships are derived.

Do not manually duplicate a reverse relationship unless the approved reference contract explicitly requires authored ownership.

## 9. Slug Workflow

Approved slug fields are `project.slug` and `article.slug`. Both use the built-in `slugEditor` control and track `title`.

- Generate from a meaningful title when appropriate.
- Review the route segment before first publication.
- Keep a published slug stable unless a governed change is intentional.
- Do not duplicate another slug within the same content type.
- Enter only the segment, never a full URL or route prefix.
- Review downstream redirect and canonical behavior in the appropriate application phase after any published change.

Canonical output and route consequences are partly downstream application responsibilities. Incomplete slug-usability testing is an evidence limitation, not an established Editor Interface defect.

## 10. Date / Chronology Guidance

- Experience: `startDate` must be on or before `endDate` when an end date exists.
- Current role: `isCurrentRole` normally means `endDate` is empty; resolve contradictory values before publication.
- Article: `updatedDate`, when present, must not precede `publishDate`.
- Project: `projectStatus`, timeframe language in `contextSummary`, and editorial state must not contradict each other.
- Use public-safe date precision; exact private dates are unnecessary when month/year context is sufficient.

The schema cannot encode every cross-field chronology rule. Editors own the semantic review.

## 11. Tags / EF-05

EF-05 is editorial-guidance owned. The schema enforces approved array cardinality and item constraints but does not promise duplicate-value distinctness.

Before publication:

- normalize case mentally and follow the project's canonical spelling;
- remove duplicate semantic tags;
- prefer an existing canonical spelling;
- keep tags specific and useful for discovery;
- never use duplicate tags as weighting;
- do not treat tags as meta keywords or a hidden taxonomy.

No model correction is required for this rule.

## 12. Public-Safety Editorial Review

Before publishing public portfolio content, review and remove or generalize:

- personal contact information not intended for public use;
- customer, client, employee, or user confidential information;
- internal or private URLs;
- credentials, tokens, secrets, and private environment details;
- private metrics and unapproved performance claims;
- employment- or customer-sensitive details;
- proprietary or unreleased screenshots and Assets;
- third-party material without appropriate attribution or licensing;
- unsafe external destinations;
- resume details not intended for public distribution;
- media that has not been reviewed for public use and accessibility metadata.

Schema validation does not replace this review.

## 13. Publication-Readiness Checklist

- [ ] Correct semantic type and canonical owner selected.
- [ ] Required fields are complete and identity is clear.
- [ ] No duplicate or near-duplicate semantic Entry exists.
- [ ] Slug reviewed where applicable.
- [ ] Dates and status semantics are consistent.
- [ ] Tags are useful, canonical, and non-duplicative.
- [ ] References point to correct canonical Entries.
- [ ] Ordered arrays are in final intended order.
- [ ] External URLs are trusted and public-safe.
- [ ] Claims and metrics are accurate, contextual, and approved for public use.
- [ ] Media rights, redaction, title, description, and accessibility context are reviewed.
- [ ] Public-safety review is complete.
- [ ] Content is intentionally ready for public use rather than merely schema-valid.

## 14. Editor Quick-Start

Before authoring:

1. Choose the correct type.
2. Search existing Entries.
3. Identify the canonical owner.

While authoring:

4. Fill identity and required content.
5. Use canonical references.
6. Order arrays intentionally.
7. Review dates, tags, links, and media.

Before publishing:

8. Check duplicate risk.
9. Review the slug where applicable.
10. Perform the public-safety review.
11. Verify relationships and order.
12. Confirm the content is ready for public use.

After publishing:

13. Maintain the canonical Entry.
14. Avoid duplicate replacements.
15. Escalate model gaps instead of improvising field use.

## 15. Escalation Rules

Stop and request review when:

- no approved type or field has the required semantic meaning;
- a relationship would require reversing or duplicating approved ownership;
- a new field, validation, reference, content type, or Editor Interface change appears necessary;
- public safety, rights, confidentiality, or claim approval is uncertain;
- duplicate identity cannot be resolved confidently;
- a published slug change needs redirect or canonical handling;
- an authoring failure would require retry, repair, cleanup, or Contentful mutation outside an approved gate.

Do not overload an adjacent field, create convenience duplicates, infer unsupported scoring, or change the model as an editorial workaround.

## 16. Deferred QA Limitation

Batch 04.3 stopped before exhaustive 102 / 102 live QA. Available evidence includes approved model-contract evidence, zero live model drift, partial authoring evidence, incident forensics, governed cleanup, and Batch 04.4 findings reconciliation. It did not prove an exhaustive publication-blocker set or complete live behavior for every scenario.

Deferred QA Harness Hardening remains post-findings engineering debt. Batch 04.6 must either complete a governed exhaustive rerun or accept the debt with the required visible post-freeze limitation statement. This guide does not choose that closeout option, authorize a rerun, freeze the model, or start seed content.
