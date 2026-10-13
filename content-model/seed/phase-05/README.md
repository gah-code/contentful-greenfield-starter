# Phase 05 Seed Dataset

Status: Batch 05.5 read-only validation COMPLETE / EXTERNALLY VALIDATED — PASS WITH NOTES. Phase 05 Closeout Final Approval Reconciliation COMPLETE; Phase 05 ACTIVE until the [Project State containing-commit rule](../../../docs/PROJECT-STATE.md#phase-05-closeout-containing-commit-rule) is satisfied. Phase 06 NOT STARTED. No Contentful execution or publication authority.

Batch 05.2 is APPROVED / CHECKPOINTED. Batch 05.3 is EXTERNALLY VALIDATED — PASS WITH NOTES with historical freshness expired. The original 05.4 incident is preserved; controlled recovery is COMPLETE / EXTERNALLY VALIDATED — PASS WITH NOTES. Its recovery-execution reconciliation checkpoint is APPROVED / CHECKPOINTED at `abf599ce02812920685f855a69bf52d5c539d2af`, with External Checkpoint Validation PASS WITH NOTES. Batch 05.5 read-only validation is COMPLETE / EXTERNALLY VALIDATED — PASS WITH NOTES; its read authority is CONSUMED / CLOSED / NO REUSE. The original and recovery mutation authorities are also CONSUMED / CLOSED / NO REUSE. The accepted `2026-09-29T08:54:11.057Z` evidence establishes 42 draft Entries and eight processed unpublished Assets, all unarchived, with zero publications. No October live refresh occurred in this reconciliation. Detailed acceptance and limitations belong to the [05.5 closeout report](../../reports/PHASE-05-BATCH-05.5-SEED-VALIDATION-PUBLICATION-STATE-AND-PHASE-05-CLOSEOUT.md).

The single `seed-manifest.json` represents the unchanged accepted 42-Entry / 8-Asset dataset and its recorded approval limitations. The accepted live evidence confirms all 42 Entries are draft and all eight Assets are processed and unpublished. External source files remain unchanged. Local media comprises the unchanged sanitized public resume and owner-selected portrait plus six separately authorized byte-identical generated conceptual PNGs. Publications remain zero; public Delivery API and production publication readiness are not established.

## Local Commands

Run from the repository root without environment loading:

```bash
node scripts/contentful/verify-seed.mjs --self-test
node scripts/contentful/seed-content.mjs --self-test
node scripts/contentful/verify-seed.mjs
node scripts/contentful/seed-content.mjs --plan
```

The first two commands test synthetic in-memory data and guards, never a Contentful client. The latter two now exit 0 after all local readiness checks pass; source/readiness debt would still produce exit 1. Exit 2 indicates invalid input, failed self-test, or a safety stop. Output is deterministic JSON; placeholder paths and affected IDs are complete, not sampled.

`--manifest path` may select another JSON file within this seed directory. The default is independent of the working directory. No local command loads `.env.local`, reads a token, imports the Management client, or contacts Contentful.

## Manifest Boundary

Only an Entry's `fields` object is eligible for a CMS payload. Its values are exact `en-US` envelopes with approved field IDs. `id` and `type` select the endpoint/header; source, review, date precision, optional decisions, array order, and publication metadata never become CMS fields.

Asset `source` records exact path, MIME, bytes, and SHA-256 when available. Titles/descriptions become Asset fields; rights, safety, accessibility treatment, and provenance stay local governance. Accessibility is an explicit editorial review, not an invented CMS field. Relative media paths resolve from the repository root. Concrete JPEG/PNG/PDF files are inspected by signature, size, and SHA-256; hidden/secret paths, Phase 04 paths, and unchanged fixture-byte copies are rejected.

Every optional field has an include/omit decision. The five formerly unresolved images intentionally omit/fall back; no new Asset identity or edge was added. Arrays retain their declared order even when the reference contract does not use that order as an editorial ranking.

All 41 original required-field gaps are represented with concrete values: three author links, 33 historical source-continuation values, and the later owner-approved three Article dates/two Experience achievements. The same approval supplies three whole new Article bodies. Historical source debt and BLOCKED findings are preserved, not retroactively erased. `[[PLACEHOLDER:<requirement>]]` remains the only legal marker; none remain on Entries. Plain strings, Rich Text, arrays, nested metadata, paths, and accessibility are scanned. Missing required fields, bad types, files/hashes, source/rights reviews, and reference problems independently block acceptance.

Eight month-only dates encode day `01`, accompanied by `sourcePrecision`, `sourceValue`, `cmsValue`, and `dayIsEncoding`. The original seven are unchanged; owner-approved April 2025 Hogarth start adds `2025-04-01`. That day is not a factual employment-date claim. Historical March/April source evidence remains in governance.

## Historical 05.2 Blank-State Harness Contract

The following records the ordinary blank-state harness and its pre-execution contract at Batch 05.2. Its then-future live branch was later invoked once and stopped after mutation; separately governed controlled recovery completed the remaining Entries. Preserve the original incident and successful recovery in the [05.4 report](../../reports/PHASE-05-BATCH-05.4-SEED-EXECUTION-INCIDENT-AND-RECOVERY.md). This historical contract and the local commands above grant no current execution authority.

At that stage, `--execute` was prohibited during 05.2. This file does not grant execution authority.

Future execution requires final READY data, a separately approved 05.3 gate, and explicit one-time 05.4 authorization. The authorization is an external JSON record, not a token or repository fixture. Required fields are enforced by `validateAuthorization` in `seed-content.mjs`:

- operation `phase05-seed`, batch `05.4`, decision `AUTHORIZED_ONCE`, unique authorization `id`;
- exact approved Git `checkpoint`, manifest SHA-256, `environment: dev`, configured `spaceId`, future `expiresAt`;
- `limits` exactly matching the recomputed operation ledger;
- `gate03` PASS for the same checkpoint/manifest/migration/space/dev, blank Entries/Assets/tags, 10 types, collision-free proof, the separately reviewed unpublished-Asset contract disposition, timestamp, and external approval evidence. The local VERIFIED value does not supply that future gate or any live evidence.

Preflight evidence is limited to one hour by the local guard; a later authorization must explicitly review that freshness window. The workflow supplies environment variables only under separate authority; scripts never auto-load env files. Management SDK import and token access occur only in the future execute path, after local readiness and approval checks.

The harness requires clean synchronized master, rejects Contentful master, disables SDK and application retries, and serializes every operation. An external exclusive `seed05-<authorization-id>.receipt.jsonl` prevents a second invocation using the same receipt; preserve it after any stop. It is created as an unconsumed run record before JIT; mutation authority is consumed immediately before the first Asset upload. A JIT stop is still fail-closed, not permission to delete the receipt and rerun.

Create-only PUTs use version zero plus blank-baseline/collision checks. Asset processing uses one raw processing PUT and an explicit maximum of five readiness GETs, not SDK convenience polling. No update, publish, delete, cleanup, upsert, or environment operation is exposed. Creation and final response identity/version checks fail closed. At that historical 05.2 stage, the live execute branch had not been invoked or live-validated.

The ledger includes 23 JIT GETs, 66 writes, 8 planned / 40 maximum readiness GETs, and 23 final GETs. Execution is 120 planned / 152 maximum requests; the separately authorized 05.3 gate adds 23, giving 143 / 175 cross-stage. These are planning numbers, not current authorization.

## Historical 05.2 Source Completion and Local Readiness

The following source preparation, readiness, 43 / 24 test counts and reconciliation evidence describe their historical 05.2 stage. They do not describe the later recovery harness test totals or claim a fresh local or live check during Phase 05 closeout.

Current validation: 0 placeholders across 0 Entries and 0 Assets; C 0 / D 0 / E 0 / F 0. History: 185 -> 97 -> 92 -> 86 -> 80 -> 49 -> 36 through the earlier documented content/owner/artifact reviews. The initial six-Asset metadata gate correctly remained BLOCKED without edits; external C2PA review corrected the incomplete metadata-free expectation. The resumed six-visual reconciliation removes 24 D file/accessibility and 12 F rights/safety tokens: 36 -> 0. Historical source classes, placeholder-resolution classes and review dispositions remain separate.

Earlier supported drafts cover Tool/Project values, responsibilities, Skills and profile content. The subsequent owner approval now supplies all three required Article bodies/dates and both previously missing Experience achievements. Only those eight CMS values and their directly associated governance/reviews changed. All 42 Entry source and safety statuses are APPROVED with scoped limitations, using the unchanged validator-supported status and local provenance metadata. All other 37 Entry records remain unchanged. The five new source reviews map all 50 active fields; earlier basis/classes/continuationEvidence/ownerDecisions and report history remain intact.

`owner-required-content-approval-05-2` records seven owner decisions, exact approved bodies/outcomes, five target IDs and eight fields. Three whole bodies are assistant-drafted, explicitly owner-approved NEW canonical Phase 05 writing; historical titles/excerpts retain their separate provenance. Paragraph counts are 5 / 6 / 6; React's approved question has a bold mark without literal formatting characters. Each publishDate is exactly 2026-09-22, owner-selected for the new-CMS version, with no invented time or historical publication claim. WHOI/DigitalNEST outcomes rely on explicit owner factual approval, not earlier resume evidence or employer verification. The prior Required Source Content BLOCKED result remains true for its evidence at that time. This content application is the externally reviewed baseline for the later six-Asset continuation and grants no publication authority.

Twelve SEO overrides continue to omit to code-owned fallback. PublicEmail and phone are now explicitly owner-approved omissions; no substitute contact is invented. Work preference, WHOI location, DigitalNEST role, Hogarth start, and canonical LinkedIn use the exact approved values recorded in manifest source `owner-decisions-05-2`. The professional title and existing secondary-title, optional-image, logo, URL, and related-content omissions remain intact.

Work preference: Open to remote and hybrid opportunities in frontend engineering, CMS/content systems, and web operations.

Enterprise content retains the approved 30,000+ content-item claim and contribution toward a six-month migration timeline improvement, without sole-delivery or six-months-early claims. publicSafety.approvedClaims is unchanged. The later Entry safety review clears current text only, excludes unresolved hero/diagram media, and does not approve other metrics or private procedures. Greenfield retains v1.0.0 with incomplete exhaustive QA; UI Gallery remains before CMS integration. Earlier source.continuationEvidence and source.ownerDecisions remain historical/source governance, not silently rewritten by safety review.

Assets READY LOCALLY: 8 / 8. The resume and portrait records/bytes are unchanged; six exact PNGs now have verified paths, signatures, 1731 x 909 RGB dimensions, sizes, SHA-256 values, decoding and scoped accessibility/rights/safety review. Their caBX payloads are retained byte-for-byte with valid CRCs and recognizable C2PA/JUMBF, ChatGPT/gpt-image and trainedAlgorithmicMedia provenance. No conventional PNG text/EXIF chunks were detected. External review found no printable generation prompt in the inspected payloads; full cryptographic signature-chain certification is not claimed. C2PA is generated-media provenance, not project evidence or legal clearance. Owner approval covers these exact files for portfolio use; replacements require renewed review.

Resume governance is under `assets[].provenance.sanitizedDerivative`: original source evidence only; originalPublicUse prohibited; sanitizedDerivative true; phone/email omitted; approved canonical LinkedIn. The separately authorized ninth file now exists at `content-model/seed/phase-05/assets/gilberto-haro-resume.pdf` and is the actual `source.path`. Identity: application/pdf; 41,035 bytes; two US Letter pages; SHA-256 `0bdb479fff44f5dd8147cb009de258a03111311f93a0edf9ec7c2c3d6141ba7f`. Status: READY LOCALLY. The original PDF was not imported, copied, or modified.

Rights/ownership: APPROVED, owned / user-provided derivative. Public safety: APPROVED for these exact bytes. Local checks cover extracted text, three public link annotations, metadata, decoded streams, and both rendered pages. Phone/email, mailto/tel links, private contact metadata, embedded files, scripts, and placeholders are absent. Accessibility treatment is a document Asset with descriptive link context, not image alt text. Selectable text, structural tags, readable order, and no clipping were checked; full PDF/UA certification is not claimed. The specification-only pass remains historical in the existing 05.2 report.

Portrait governance is under `assets[].provenance.profilePortraitPreparation`: READY LOCALLY / source review PASS WITH NOTES. The owner explicitly selected this atmospheric image and attested ownership or permission for public-portfolio use; no photographer/license is inferred and independent legal verification is not claimed. Source: `/Users/gilbertharo/Downloads/gilberto-haro-profile-portrait.jpg`. Destination: `content-model/seed/phase-05/assets/gilberto-haro-profile-portrait.jpg`, the only new file in the earlier portrait-preparation pass and tenth accumulated working file. Both are image/jpeg, 2000 x 2000, RGB progressive JPEG, 118,413 bytes, SHA-256 `596c8af888628c751470195e7d2b401d1a3ed90c4232f9884d1cf07b3e5f335b`; byte identity and decoding pass. No EXIF detected; JFIF retained; not metadata-free. No obvious visible private contact or sensitive-document exposure. Meaningful accessibility text: "A person with a backpack stands on a mountain ridge at sunset with two dogs." Face visibility is not required; no precise location, capture date, breed, or visible-person identity is inferred. All dimensions/provenance/permission records are local governance, not new CMS fields. The original source-unavailable BLOCKED attempt remains historical; permission extends neither to profile content nor to CMS upload/publication.

All six visual source identities and bounded approvals are reconciled; manifest Asset-source debt is resolved with its history retained. The later unpublished-Asset mechanics gate now resolves the final blocker as a LOCAL CONTRACT DECISION: draft Entries may reference processed unpublished Assets by deterministic ID under Management/Preview semantics; CDA/public delivery and publication remain deferred. The manifest uses the existing VERIFIED value and bounded evidence/history, not a new enum or live-tested claim. Installed SDK inspection confirms no contradictory client requirement, and all eight Assets are processed/readiness-confirmed before any Entry. No Entry/Asset record, file, hash, approval, reference, dependency order or script changed in this gate.

Working validation is READY / exit 0, with no structural errors or readiness diagnostics; plan is locally executable / exit 0 and literally reports READY FOR SEPARATE AUTHORIZATION. Both scripts and their 43 / 24 self-tests are unchanged. External implementation acceptance is PASS WITH NOTES; the documentation reconciliation is implemented under the containing-commit prerequisites above. Earlier unresolved/blocked states remain in the existing report. No publication-policy change, live write test, CDA-ready or production-ready claim is made.

External review independently checked archive/index and implementation identities, bounded content/Asset evidence, graph arithmetic, and syntax. Its two self-test suites, working validator, and plan were NOT RUN HERE because supporting runtime artifacts were outside the archive; prior passing results remained supplied workstation evidence. This reconciliation's fresh Node v22.12.0 passes are new local evidence and do not change that external-review limit. Recorded owner/source/public-safety approvals add no independent employer, career, legal, PDF/UA, or C2PA signature-chain certification. See [Final Approval Reconciliation evidence](../../reports/PHASE-05-BATCH-05.2-SEED-DATASET-ASSET-SOURCES-AND-DRY-RUN-TOOLING.md#final-approval-reconciliation).

Phase 05 representative completeness is not public Delivery API readiness. The baseline remains 42 draft Entries and zero Entry/Asset publications. Any needed publication changes require contract and ledger review.

Current lifecycle is owned by [Project State](../../../docs/PROJECT-STATE.md#phase-05-closeout-containing-commit-rule): 05.5 read-only validation is COMPLETE / EXTERNALLY VALIDATED — PASS WITH NOTES, closeout reconciliation is COMPLETE, and Phase 05 remains ACTIVE until the containing-commit rule is satisfied. The accepted seed is 42 draft Entries / eight processed unpublished Assets / all unarchived / publications 0. No new execution, read, mutation or publication authority follows. Phase 06 is NOT STARTED.
