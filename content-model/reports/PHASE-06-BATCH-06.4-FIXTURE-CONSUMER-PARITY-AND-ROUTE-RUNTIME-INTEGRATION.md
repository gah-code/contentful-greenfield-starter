# Phase 06 / Batch 06.4 — Fixture Consumer Parity + Route Runtime Integration

Status: **CONDITIONAL NON-RELEASE RECONCILIATION CANDIDATE / READY FOR EXTERNAL FINAL VALIDATION**. Implementation/source/non-browser evidence accepted; manual verification PARTIAL. External Final Validation PENDING; 06.4 checkpoint NOT ESTABLISHED. This report records documentation work only, not additional implementation, project checks or browser execution.

06.1, 06.2 and 06.3 are APPROVED / CHECKPOINTED. The incoming 06.3 pair is established under its accepted containing-commit rule; older PENDING/PROPOSED wording is a historical reconciliation snapshot. The eighteen-file 06.4 runtime is implemented offline and accepted at source/non-browser scope. This documentation-only conditional non-release reconciliation prepares candidate ledger `06.4-reconciliation-1`; External Final Validation is PENDING and 06.4 is NOT CHECKPOINTED. `portfolio-contract-v1.0.0` remains EFFECTIVE / FROZEN / UNCHANGED.

[D-064-01](../../docs/DECISIONS.md#d-064-01) is EXTERNALLY ACCEPTED WITH CONDITIONS and OWNER ADOPTED by risk owner Gilberto Haro. All 246 MB cases remain NOT RUN and six VISUAL records remain PARTIAL; zero completed parameterized browser cases. Obligations are due during 06.5 Consolidated Frontend Validation, before its final acceptance, with no automatic extension. I-064-03 browser closure is OPEN; V-064-01 historical Playwright BLOCKED / NOT RUN remains. N-063-01 is accepted only for local emitted ordering/membership. Public preview/deployment/publication/release and 06.6/Phase 06 closeout remain blocked on required evidence.

The CMS [candidate mapping ledger](../../docs/system/FRONTEND-CONTRACT-MAPPING.md), [06.4 report and exact deferred inventory](PHASE-06-BATCH-06.4-FIXTURE-CONSUMER-PARITY-AND-ROUTE-RUNTIME-INTEGRATION.md#deferred-case-inventory) and [proposed conditional paired-checkpoint rule](../../docs/phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-064-conditional-qualifying-checkpoint-rule) own these bindings. Exact-byte External Final Validation, separate Git authorization, both qualifying commits/pushes, clean synchronization and External Checkpoint Validation precede 06.5 eligibility; separate 06.5 execution authorization is still required. This pass reruns no tests, typecheck, lint, builds or browser checks. Phase 07 is NOT STARTED; frontend Phase 9 and its UI debt remain independent.

## Entry, adoption and established baseline

Actual recorded entry UTC: 2026-10-21T22:31:03.812624+00:00. Preliminary instruction/document reads occurred before that clock; no earlier start is invented. Owner adoption of D-064-01 was explicitly submitted in the current IDE request and recorded at 2026-10-21T22:31:47.863156+00:00; message-send UTC was not supplied. This is a new adoption event, not a backdated change to the sealed manual ledger.

Incoming established 06.3 pair: CMS `dac8d6b97244dbf8e5e6f34aab250902d023e282` / tree `5499f187173a58435822cd40fdd8aae4f622f0dc`; frontend `f1a281c58848f94d2b420f4130fe1dad3233e3fc` / tree `25b49f2dadeea2594148147871b8d6325ad4bba8`. Sole parents: CMS `c639e781af499ca51c2da8d837ca9d48098d42a2`; frontend `4630aaaa2ed8808f9e9e7228d811fad6d5485ec0`. The external 06.3 checkpoint review is PASS WITH NOTES and resolves the older PENDING/PROPOSED snapshot under the preserved containing-commit rule. Phase 05 remains COMPLETE / FROZEN; Phase 06 ACTIVE; 06.1/06.2/06.3 checkpointed. Both future 06.4 commit/tree identities remain PENDING.

Fresh entry found CMS clean, frontend exactly eighteen unstaged paths (four tracked modifications/fourteen creations), empty index differences and both repositories locally synchronized 0 0. Every existing writable document matched its recorded 06.3 identity and actual HEAD blob; this report was absent. The eighteen sources and 115 protected records matched. Nine explicitly allowlisted document members become writable; the other 106 remain protected. Seven existing writable documents outside that prior protected set were independently baselined against HEAD. No .env/credential contents were read or hashed.

Exactly one read-only `git ls-remote --exit-code origin refs/heads/master` per repository matched the bound HEADs. CMS observation completed 2026-10-21T22:31:48.551266+00:00; frontend observation completed 2026-10-21T22:31:49.017318+00:00. No fetch/pull, remote retry or write operation occurred. Later local 0 0 checks are not further remote observations.

## Chronology and findings retained

1. The original seventeen-path 06.4 implementation was PARTIAL; external review required revision. Its original package and NEEDS REVISION review remain historical, not relabeled.
2. The bounded correction produced the eighteen-path candidate. I-064-01's narrow SourceFault syntax remedy and I-064-02's literal insertion/cardinality defect are CLOSED for their accepted bytes. I-064-03's nested bootstrap validation/render-boundary code and non-browser remedy are accepted; real browser initialization/hydration/render fallback closure remains **OPEN**.
3. V-064-01 retains locked Playwright 1.59.1 **BLOCKED / NOT RUN** on recorded macOS 12.7.6 x86_64, below that method's macOS 14 minimum. The correction review records zero browser installation/launch/case execution. That history is not a later Firefox result.
4. The owner selected `06.4-manual-browser-1`, ordinary Firefox-only coverage for this non-release candidate. Recorded Firefox 158.0.1 compatibility and isolated QA profile/server setup belong to the earlier manual pass. Twenty-nine isolated pages and the 246-case ledger were prepared; preparation is not execution. The server shutdown followed identity checks through the owned control channel. Firefox was left untouched; no claim that it was shut down follows.
5. Twenty unique uploaded-copy PNGs support six partial visual surfaces. Forty physical archive members are two locations per image, not forty observations. Screenshot filenames/capture clocks do not establish test times, exact viewport/JS/zoom, HTTP status/refresh, hydration/node retention, Console, keyboard or error recovery. The UI Gallery System portfolio case study does not exercise the original gallery application.
6. The owner ended collection and requested deferral. The sealed manual package endpoint remains PARTIAL — EVIDENCE PACKAGED / VERIFICATION DEFERRAL REQUESTED. Its original requested/not-approved dispositions and null execution fields are immutable. Historical preparation-helper failure, process-inspection denial and browser diagnostics remain preserved, not browser PASS evidence.
7. External manual evidence review returned **PASS WITH NOTES** for package integrity and **D-064-01 ACCEPTED WITH CONDITIONS** for non-release scheduling. It accepted documentation-only reconciliation eligibility, not browser execution or checkpoint completion. The current explicit owner activation adopts Gilberto Haro as risk owner; no later-phase execution follows.
8. This combined documentation amendment records that event, candidate ledger `06.4-reconciliation-1` and the explicitly proposed conditional rule. Exact-byte External Final Validation and a separately authorized qualifying pair remain future gates.

## Inherited checks and evidence limits

All entries in this table are inherited from the exact corrected candidate, **NOT RERUN HERE**.

| Evidence category | Accepted result and limit |
| --- | --- |
| Strict portfolio typecheck; lint; root app/node compiler checks | PASS under accepted runtime/dependencies; no new probe |
| Portfolio Vitest | Exactly 183 PASS: 21 fixture + 67 adapter + 95 assembly; all original 133 plus 50 metadata regressions retained |
| Portfolio build/artifact verification, gallery bundle, Storybook build | PASS at local output/compile/discovery scope; no browser or actual provider inference |
| Original artifact assertions / expected-negative cases / routing rows | 31 / 12 / 94; separate evidence categories, not additional unit tests |
| Correction checks | 30 positive / 72 negative; separate from the 183 Vitest cases |
| Route surface | Thirteen canonical documents over nine patterns plus generic root 404, using offline fixtures |
| N-063-01 | 77 emitted rules: 64 exact 308 aliases before 13 exact 200 proxies, sorted by source within each group; emitted order/membership only |
| Manual cases | Zero completed parameterized cases; all 246 NOT RUN; six PARTIAL surface observations |
| Current preservation | Source/protected/input/output hash checks only; no browser, server, project or CMS execution |

The accepted retained output manifests enumerate 29 portfolio, five gallery and 193 Storybook files; fresh local comparisons at entry matched all files. The eight omitted binary portfolio media witnesses are present locally and were hash-checked; review ZIP omission is not a substitute for local presence. The build server bundle has a retained fresh-identity binding and accepted boundary/build provenance, not an invented historical complete-bundle checksum. The current reconciliation evidence records final preservation separately.

The earlier external review noted that a current supplemental-package post-seal result was not supplied in its upload; it did not infer one from the older retained audit. That review limitation remains historical. This reconciliation will supply its own actual post-package observation separately, without rewriting sealed evidence to claim a later result.

Accepted live CMS evidence remains September 29 (`2026-09-29T08:54:11.057Z`): 42 draft Entries, eight processed unpublished Assets, zero publications; no current live refresh or credential test. Public Delivery API/publication readiness and exhaustive Phase 04 live QA remain NOT ESTABLISHED. The sole WHOI optional-array representation exception is unchanged; no broader normalization is allowed. No Contentful transport exists. Cloudflare is the intended host, not a verified deployed target; authentication/publication rights and release remain independently gated.

## Accepted eighteen-member manifest

All members below stay byte/mode-identical to correction index `94ff91658d27ffb1af7e566990ba09f36141916385aa260fc83e1632373358d6` and ZIP `7b9d19fd697f9b112cc67c030deb8a43e23a9d2bff7798dfd621e529c1205f4e`. These paths are preserved implementation, not documentation write permission.

| Frontend-relative path | Action versus 06.3 HEAD | Bytes | Mode | SHA-256 |
| --- | --- | ---: | --- | --- |
| .gitignore | MODIFIED | 351 | 0o644 | 3501f5d681d215e1716e55ba18e093d144117ef248c489cc82a188716cb3b3ba |
| package.json | MODIFIED | 1736 | 0o644 | 48775b536873e9debeba064238b7601312df84130c6897d22df4d98eb163a32e |
| portfolio/hosting-policy.json | NEW | 191 | 0o644 | e7825f41919248eada2ecad4a3aaff2f4b35f86ded3e9d23e93f7223f08f0892 |
| portfolio/index.html | NEW | 255 | 0o644 | a828cac57e556d504ab733d43de1ec1164f5e0dade82cbf2b3e72e4a083ceac3 |
| scripts/build-portfolio.mjs | NEW | 8233 | 0o644 | 52fc3e2be89a1ca67c73756de067c865dde652840aafaa7422b97842a6411aec |
| scripts/serve-portfolio.mjs | NEW | 4338 | 0o644 | 6d3b2cff476532cd6cd4aace6ee574a6329c4d689546958d9c23215e4faea6de |
| scripts/verify-portfolio-artifacts.mjs | NEW | 25490 | 0o644 | a29aa998ddd57105be80cdbd2d6ad6210b2dffbd50943115ef1c8222bdb1882f |
| scripts/verify-portfolio-browser.mjs | NEW | 20157 | 0o644 | 29a548c3c7a0b9332969ea69430676a789a20fb46cc7a653d64e922266817b21 |
| src/components/layout/PortfolioLayout.tsx | NEW | 1529 | 0o644 | 6665c50b63cc96a09380cb69ce2a9233053af9f775e55b3b80b5ea226e9e44fe |
| src/content/portfolio/resolve.ts | MODIFIED | 13676 | 0o644 | 98cda9cc3c3ef55015631b3bf37fb804bf52f6fd3629824131a7a077330c7c9d |
| src/portfolio/PageView.tsx | NEW | 9311 | 0o644 | 0d8ac607244ef1cb1f033f798e7d96145edeb3bc11561cc0fd7756e10036763a |
| src/portfolio/PortfolioPages.stories.tsx | NEW | 2318 | 0o644 | 270659b5b9f16292014369c503785dd3ffc6d295a4aceafffe095f8c17cc7aeb |
| src/portfolio/RichText.tsx | NEW | 2725 | 0o644 | 17848d182ac54536d50ba7f724380d175a709adc69f5c28b6e8eb96a57670a31 |
| src/portfolio/entry-client.tsx | NEW | 14606 | 0o644 | 40ee305cfdb25ff04433292b3014fd22f8ac67c661e399a4abf74afdc3744221 |
| src/portfolio/entry-server.tsx | NEW | 11924 | 0o644 | 9c69220129127c0e8b373fa0a5ec2b51a5b8271b36c1174b11a1286ecf1e6781 |
| src/portfolio/portfolio.css.ts | NEW | 2061 | 0o644 | a1b8e8042a47d5e60d1e419fe2d86c0e0de19bb3c25189e5570bf8de88156f40 |
| tsconfig.portfolio.json | MODIFIED | 837 | 0o644 | 3842bfe3d4038997fbcb577f0e8f238e7d849f539ac62fb507b65bbf3a9d3dd5 |
| vite.portfolio.config.ts | NEW | 1110 | 0o644 | da1acb7682b4dbf331723c36dfff679a519f3c8831527532bbd28c785f517ab8 |

## Immutable input identities

The following are logical paths inside the supplied external handoff, not repository-relative links or future files. The final reconciliation evidence also records the handoff index, control-file identities and fresh rehashes.

| Logical handoff path | Bytes | SHA-256 |
| --- | ---: | --- |
| review/PHASE-06.4-EXTERNAL-MANUAL-EVIDENCE-AND-DEFERRAL-REVIEW.md | 17193 | 93abfeebe68992f4ceb434fec11326d0e2a192177c49caf4e4319b5a9a38a389 |
| review/INDEPENDENT-PHASE-06.4-MANUAL-EVIDENCE-REVIEW-RESULTS.json | 40118 | d1f6cd4a5256c456588c8b0376ae5ccaa4a8d7b1fd09f61a1d00c46a1ffde4ae |
| manual-evidence/ARTIFACT-INDEX.json | 54484 | 2038d3f75ddc1f6f943a5d05cb9cf87301a11db6d415c7d6f6c38f4926dc38c6 |
| manual-evidence/PHASE-06.4-MANUAL-BROWSER-EVIDENCE.json | 253306 | 51157a23ecabf777c7eae551110e710027e75f2e367bc45a663f937158c79ae3 |
| manual-evidence/PHASE-06.4-MANUAL-BROWSER-VERIFICATION.zip | 21197599 | b8df7c2d6a0e59b723ae7aa1db4bae04b06affeb6e76de22f7f45a5328ec61ac |
| candidate/ARTIFACT-INDEX.json | 45209 | 94ff91658d27ffb1af7e566990ba09f36141916385aa260fc83e1632373358d6 |
| candidate/PHASE-06.4-RUNTIME-CORRECTION-EVIDENCE.json | 635398 | 98adc890a7121161e53d035f6cb32a42de5f8afd5c93b05b56c91f057826a4e4 |
| candidate/PHASE-06.4-RUNTIME-CORRECTION.zip | 1318292 | 7b9d19fd697f9b112cc67c030deb8a43e23a9d2bff7798dfd621e529c1205f4e |
| reference/PHASE-06.4-EXTERNAL-IMPLEMENTATION-REVALIDATION.md | 22157 | 44c56e15a6b36353e278ac44546529cd6385fd40d651df5c0a8f448d5dabb55c |
| reference/INDEPENDENT-PHASE-06.4-IMPLEMENTATION-REVALIDATION-RESULTS.json | 41964 | e5fce32e568c7f3c227bd0585761795b7f5aa05dff3991d8cfe2f7f00c647753 |
| reference/PHASE-06.3-EXTERNAL-CHECKPOINT-VALIDATION.md | 23705 | 7cecc7495120077cfddc7eca32a969cf322732a15c24f5c061decb65251927c0 |
| reference/INDEPENDENT-PHASE-06.3-CHECKPOINT-VALIDATION-RESULTS.json | 35281 | 899ee0fb7000b567b5624fd22969da8db2111863a7f7dfa8761c2a861036ac2d |
| reference/FINAL-MANUAL-QA-RESULTS.json | 386378 | ce38195824652f4b1fe8dd99fa80dbde3fb76baab4c9ce3b21c0ad977c538989 |

## D-064-01 adoption and conditional gates

[Canonical decision](../../docs/DECISIONS.md#d-064-01): risk owner Gilberto Haro; OWNER ADOPTED / EXTERNALLY ACCEPTED WITH CONDITIONS. This new event leaves every sealed case and screenshot record unchanged. The due gate is **06.5 Consolidated Frontend Validation, before its final acceptance**; no calendar date or automatic extension. Changed source/configuration/dependency/media identities require impact review and updated bindings; equivalent later verification methods require explicit complete coverage mapping and review. Failures cannot be hidden and evidence cannot be replaced by an unqualified waiver.

The [proposed conditional qualifying rule](../../docs/phases/PHASE-06-FRONTEND-CONTRACTS-AND-ADAPTER-BOUNDARY.md#batch-064-conditional-qualifying-checkpoint-rule) requires exact-byte External Final Validation, separate owner Git authority, both qualifying containing commits, both pushes, clean/unstaged/synchronized state and External Checkpoint Validation before 06.5 eligibility, followed by separate execution authority. The only future qualified checkpoint label is **06.4 NON-RELEASE IMPLEMENTATION CHECKPOINTED / BROWSER VERIFICATION DEFERRED TO 06.5 (D-064-01)**. It is not established now; a single commit is insufficient.

All deferred obligations must be met during 06.5 before final acceptance. Until required evidence and independent gates pass, 06.5 final acceptance, 06.6/Phase 06 closeout, browser-verified-readiness claims and any public preview/deployment/publication/release are blocked. Residual risks include hydration/error recovery, responsive/accessibility/text enlargement, keyboard/history/navigation, media/PDF and original gallery/Storybook interactions, and real provider behavior. No source repair, browser restart, Git action, release or later-phase work is authorized by these documents. Frontend Phase 9 and its prior UI debt remain unchanged.

## Deferred-case inventory

Definition source: logical manual archive `PHASE-06.4-MANUAL-BROWSER-VERIFICATION.zip`, SHA-256 `b8df7c2d6a0e59b723ae7aa1db4bae04b06affeb6e76de22f7f45a5328ec61ac`; member `verification/supplemental/FINAL-MANUAL-QA-RESULTS.json`, **386,378 bytes**, SHA-256 `ce38195824652f4b1fe8dd99fa80dbde3fb76baab4c9ce3b21c0ad977c538989`, JSON pointer `/cases`. The handoff `reference/FINAL-MANUAL-QA-RESULTS.json` is byte-identical to that member. It owns full expected assertions, required observations, browser method and original case objects; exact parsed objects are also carried unchanged in this pass's evidence JSON.

All 246 IDs are listed individually below because groups are interleaved. `null` means the original null/not-applicable field, not an inferred measurement. Browser-version, observer and execution-time fields remain null; the selected method is `06.4-manual-browser-1`. Values are copied from the sealed ledger, not inferred from screenshots or filenames.

| Exact group | Count |
| --- | ---: |
| routes | 140 |
| navigation | 10 |
| states | 50 |
| bootstrap | 16 |
| literal | 7 |
| media | 1 |
| gallery | 1 |
| storybook | 21 |

| ID | Group | Exact label | Exact target | Width | Height | JavaScript enabled | Text zoom | Status |
| --- | --- | --- | --- | ---: | ---: | --- | --- | --- |
| MB-001 | routes | / &#124; 320px &#124; JS off | / | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-002 | routes | /about &#124; 320px &#124; JS off | /about | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-003 | routes | /work &#124; 320px &#124; JS off | /work | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-004 | routes | /projects &#124; 320px &#124; JS off | /projects | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-005 | routes | /writing &#124; 320px &#124; JS off | /writing | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-006 | routes | /tools &#124; 320px &#124; JS off | /tools | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-007 | routes | /contact &#124; 320px &#124; JS off | /contact | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-008 | routes | /projects/contentful-greenfield-starter &#124; 320px &#124; JS off | /projects/contentful-greenfield-starter | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-009 | routes | /projects/enterprise-cms-migration &#124; 320px &#124; JS off | /projects/enterprise-cms-migration | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-010 | routes | /projects/ui-gallery-system &#124; 320px &#124; JS off | /projects/ui-gallery-system | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-011 | routes | /writing/about-me &#124; 320px &#124; JS off | /writing/about-me | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-012 | routes | /writing/state-management-in-react &#124; 320px &#124; JS off | /writing/state-management-in-react | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-013 | routes | /writing/web-development-certifications-learning-journey &#124; 320px &#124; JS off | /writing/web-development-certifications-learning-journey | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-014 | routes | /projects/unknown-private-slug &#124; 320px &#124; JS off | /projects/unknown-private-slug | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-015 | navigation | keyboard + native history &#124; 320px &#124; JS off | / -&gt; /about -&gt; back -&gt; forward | 320 | 900 | false | 100% | NOT RUN |
| MB-016 | states | EMPTY work &#124; 320px &#124; JS off | isolated fixture origin / | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-017 | states | EMPTY projects &#124; 320px &#124; JS off | isolated fixture origin / | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-018 | states | EMPTY writing &#124; 320px &#124; JS off | isolated fixture origin / | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-019 | states | EMPTY tools &#124; 320px &#124; JS off | isolated fixture origin / | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-020 | states | ERROR &#124; 320px &#124; JS off | isolated fixture origin / | 320 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-021 | routes | / &#124; 390px &#124; JS off | / | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-022 | routes | /about &#124; 390px &#124; JS off | /about | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-023 | routes | /work &#124; 390px &#124; JS off | /work | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-024 | routes | /projects &#124; 390px &#124; JS off | /projects | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-025 | routes | /writing &#124; 390px &#124; JS off | /writing | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-026 | routes | /tools &#124; 390px &#124; JS off | /tools | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-027 | routes | /contact &#124; 390px &#124; JS off | /contact | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-028 | routes | /projects/contentful-greenfield-starter &#124; 390px &#124; JS off | /projects/contentful-greenfield-starter | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-029 | routes | /projects/enterprise-cms-migration &#124; 390px &#124; JS off | /projects/enterprise-cms-migration | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-030 | routes | /projects/ui-gallery-system &#124; 390px &#124; JS off | /projects/ui-gallery-system | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-031 | routes | /writing/about-me &#124; 390px &#124; JS off | /writing/about-me | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-032 | routes | /writing/state-management-in-react &#124; 390px &#124; JS off | /writing/state-management-in-react | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-033 | routes | /writing/web-development-certifications-learning-journey &#124; 390px &#124; JS off | /writing/web-development-certifications-learning-journey | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-034 | routes | /projects/unknown-private-slug &#124; 390px &#124; JS off | /projects/unknown-private-slug | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-035 | navigation | keyboard + native history &#124; 390px &#124; JS off | / -&gt; /about -&gt; back -&gt; forward | 390 | 900 | false | 100% | NOT RUN |
| MB-036 | states | EMPTY work &#124; 390px &#124; JS off | isolated fixture origin / | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-037 | states | EMPTY projects &#124; 390px &#124; JS off | isolated fixture origin / | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-038 | states | EMPTY writing &#124; 390px &#124; JS off | isolated fixture origin / | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-039 | states | EMPTY tools &#124; 390px &#124; JS off | isolated fixture origin / | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-040 | states | ERROR &#124; 390px &#124; JS off | isolated fixture origin / | 390 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-041 | routes | / &#124; 768px &#124; JS off | / | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-042 | routes | /about &#124; 768px &#124; JS off | /about | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-043 | routes | /work &#124; 768px &#124; JS off | /work | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-044 | routes | /projects &#124; 768px &#124; JS off | /projects | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-045 | routes | /writing &#124; 768px &#124; JS off | /writing | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-046 | routes | /tools &#124; 768px &#124; JS off | /tools | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-047 | routes | /contact &#124; 768px &#124; JS off | /contact | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-048 | routes | /projects/contentful-greenfield-starter &#124; 768px &#124; JS off | /projects/contentful-greenfield-starter | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-049 | routes | /projects/enterprise-cms-migration &#124; 768px &#124; JS off | /projects/enterprise-cms-migration | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-050 | routes | /projects/ui-gallery-system &#124; 768px &#124; JS off | /projects/ui-gallery-system | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-051 | routes | /writing/about-me &#124; 768px &#124; JS off | /writing/about-me | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-052 | routes | /writing/state-management-in-react &#124; 768px &#124; JS off | /writing/state-management-in-react | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-053 | routes | /writing/web-development-certifications-learning-journey &#124; 768px &#124; JS off | /writing/web-development-certifications-learning-journey | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-054 | routes | /projects/unknown-private-slug &#124; 768px &#124; JS off | /projects/unknown-private-slug | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-055 | navigation | keyboard + native history &#124; 768px &#124; JS off | / -&gt; /about -&gt; back -&gt; forward | 768 | 900 | false | 100% | NOT RUN |
| MB-056 | states | EMPTY work &#124; 768px &#124; JS off | isolated fixture origin / | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-057 | states | EMPTY projects &#124; 768px &#124; JS off | isolated fixture origin / | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-058 | states | EMPTY writing &#124; 768px &#124; JS off | isolated fixture origin / | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-059 | states | EMPTY tools &#124; 768px &#124; JS off | isolated fixture origin / | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-060 | states | ERROR &#124; 768px &#124; JS off | isolated fixture origin / | 768 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-061 | routes | / &#124; 1024px &#124; JS off | / | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-062 | routes | /about &#124; 1024px &#124; JS off | /about | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-063 | routes | /work &#124; 1024px &#124; JS off | /work | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-064 | routes | /projects &#124; 1024px &#124; JS off | /projects | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-065 | routes | /writing &#124; 1024px &#124; JS off | /writing | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-066 | routes | /tools &#124; 1024px &#124; JS off | /tools | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-067 | routes | /contact &#124; 1024px &#124; JS off | /contact | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-068 | routes | /projects/contentful-greenfield-starter &#124; 1024px &#124; JS off | /projects/contentful-greenfield-starter | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-069 | routes | /projects/enterprise-cms-migration &#124; 1024px &#124; JS off | /projects/enterprise-cms-migration | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-070 | routes | /projects/ui-gallery-system &#124; 1024px &#124; JS off | /projects/ui-gallery-system | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-071 | routes | /writing/about-me &#124; 1024px &#124; JS off | /writing/about-me | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-072 | routes | /writing/state-management-in-react &#124; 1024px &#124; JS off | /writing/state-management-in-react | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-073 | routes | /writing/web-development-certifications-learning-journey &#124; 1024px &#124; JS off | /writing/web-development-certifications-learning-journey | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-074 | routes | /projects/unknown-private-slug &#124; 1024px &#124; JS off | /projects/unknown-private-slug | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-075 | navigation | keyboard + native history &#124; 1024px &#124; JS off | / -&gt; /about -&gt; back -&gt; forward | 1024 | 900 | false | 100% | NOT RUN |
| MB-076 | states | EMPTY work &#124; 1024px &#124; JS off | isolated fixture origin / | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-077 | states | EMPTY projects &#124; 1024px &#124; JS off | isolated fixture origin / | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-078 | states | EMPTY writing &#124; 1024px &#124; JS off | isolated fixture origin / | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-079 | states | EMPTY tools &#124; 1024px &#124; JS off | isolated fixture origin / | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-080 | states | ERROR &#124; 1024px &#124; JS off | isolated fixture origin / | 1024 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-081 | routes | / &#124; 1440px &#124; JS off | / | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-082 | routes | /about &#124; 1440px &#124; JS off | /about | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-083 | routes | /work &#124; 1440px &#124; JS off | /work | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-084 | routes | /projects &#124; 1440px &#124; JS off | /projects | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-085 | routes | /writing &#124; 1440px &#124; JS off | /writing | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-086 | routes | /tools &#124; 1440px &#124; JS off | /tools | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-087 | routes | /contact &#124; 1440px &#124; JS off | /contact | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-088 | routes | /projects/contentful-greenfield-starter &#124; 1440px &#124; JS off | /projects/contentful-greenfield-starter | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-089 | routes | /projects/enterprise-cms-migration &#124; 1440px &#124; JS off | /projects/enterprise-cms-migration | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-090 | routes | /projects/ui-gallery-system &#124; 1440px &#124; JS off | /projects/ui-gallery-system | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-091 | routes | /writing/about-me &#124; 1440px &#124; JS off | /writing/about-me | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-092 | routes | /writing/state-management-in-react &#124; 1440px &#124; JS off | /writing/state-management-in-react | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-093 | routes | /writing/web-development-certifications-learning-journey &#124; 1440px &#124; JS off | /writing/web-development-certifications-learning-journey | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-094 | routes | /projects/unknown-private-slug &#124; 1440px &#124; JS off | /projects/unknown-private-slug | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-095 | navigation | keyboard + native history &#124; 1440px &#124; JS off | / -&gt; /about -&gt; back -&gt; forward | 1440 | 900 | false | 100% | NOT RUN |
| MB-096 | states | EMPTY work &#124; 1440px &#124; JS off | isolated fixture origin / | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-097 | states | EMPTY projects &#124; 1440px &#124; JS off | isolated fixture origin / | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-098 | states | EMPTY writing &#124; 1440px &#124; JS off | isolated fixture origin / | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-099 | states | EMPTY tools &#124; 1440px &#124; JS off | isolated fixture origin / | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-100 | states | ERROR &#124; 1440px &#124; JS off | isolated fixture origin / | 1440 | 900 | false | 100% then 200% TEXT ONLY | NOT RUN |
| MB-101 | routes | / &#124; 320px &#124; JS on | / | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-102 | routes | /about &#124; 320px &#124; JS on | /about | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-103 | routes | /work &#124; 320px &#124; JS on | /work | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-104 | routes | /projects &#124; 320px &#124; JS on | /projects | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-105 | routes | /writing &#124; 320px &#124; JS on | /writing | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-106 | routes | /tools &#124; 320px &#124; JS on | /tools | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-107 | routes | /contact &#124; 320px &#124; JS on | /contact | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-108 | routes | /projects/contentful-greenfield-starter &#124; 320px &#124; JS on | /projects/contentful-greenfield-starter | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-109 | routes | /projects/enterprise-cms-migration &#124; 320px &#124; JS on | /projects/enterprise-cms-migration | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-110 | routes | /projects/ui-gallery-system &#124; 320px &#124; JS on | /projects/ui-gallery-system | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-111 | routes | /writing/about-me &#124; 320px &#124; JS on | /writing/about-me | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-112 | routes | /writing/state-management-in-react &#124; 320px &#124; JS on | /writing/state-management-in-react | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-113 | routes | /writing/web-development-certifications-learning-journey &#124; 320px &#124; JS on | /writing/web-development-certifications-learning-journey | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-114 | routes | /projects/unknown-private-slug &#124; 320px &#124; JS on | /projects/unknown-private-slug | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-115 | navigation | keyboard + native history &#124; 320px &#124; JS on | / -&gt; /about -&gt; back -&gt; forward | 320 | 900 | true | 100% | NOT RUN |
| MB-116 | states | EMPTY work &#124; 320px &#124; JS on | isolated fixture origin / | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-117 | states | EMPTY projects &#124; 320px &#124; JS on | isolated fixture origin / | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-118 | states | EMPTY writing &#124; 320px &#124; JS on | isolated fixture origin / | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-119 | states | EMPTY tools &#124; 320px &#124; JS on | isolated fixture origin / | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-120 | states | ERROR &#124; 320px &#124; JS on | isolated fixture origin / | 320 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-121 | routes | / &#124; 390px &#124; JS on | / | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-122 | routes | /about &#124; 390px &#124; JS on | /about | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-123 | routes | /work &#124; 390px &#124; JS on | /work | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-124 | routes | /projects &#124; 390px &#124; JS on | /projects | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-125 | routes | /writing &#124; 390px &#124; JS on | /writing | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-126 | routes | /tools &#124; 390px &#124; JS on | /tools | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-127 | routes | /contact &#124; 390px &#124; JS on | /contact | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-128 | routes | /projects/contentful-greenfield-starter &#124; 390px &#124; JS on | /projects/contentful-greenfield-starter | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-129 | routes | /projects/enterprise-cms-migration &#124; 390px &#124; JS on | /projects/enterprise-cms-migration | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-130 | routes | /projects/ui-gallery-system &#124; 390px &#124; JS on | /projects/ui-gallery-system | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-131 | routes | /writing/about-me &#124; 390px &#124; JS on | /writing/about-me | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-132 | routes | /writing/state-management-in-react &#124; 390px &#124; JS on | /writing/state-management-in-react | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-133 | routes | /writing/web-development-certifications-learning-journey &#124; 390px &#124; JS on | /writing/web-development-certifications-learning-journey | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-134 | routes | /projects/unknown-private-slug &#124; 390px &#124; JS on | /projects/unknown-private-slug | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-135 | navigation | keyboard + native history &#124; 390px &#124; JS on | / -&gt; /about -&gt; back -&gt; forward | 390 | 900 | true | 100% | NOT RUN |
| MB-136 | states | EMPTY work &#124; 390px &#124; JS on | isolated fixture origin / | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-137 | states | EMPTY projects &#124; 390px &#124; JS on | isolated fixture origin / | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-138 | states | EMPTY writing &#124; 390px &#124; JS on | isolated fixture origin / | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-139 | states | EMPTY tools &#124; 390px &#124; JS on | isolated fixture origin / | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-140 | states | ERROR &#124; 390px &#124; JS on | isolated fixture origin / | 390 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-141 | routes | / &#124; 768px &#124; JS on | / | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-142 | routes | /about &#124; 768px &#124; JS on | /about | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-143 | routes | /work &#124; 768px &#124; JS on | /work | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-144 | routes | /projects &#124; 768px &#124; JS on | /projects | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-145 | routes | /writing &#124; 768px &#124; JS on | /writing | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-146 | routes | /tools &#124; 768px &#124; JS on | /tools | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-147 | routes | /contact &#124; 768px &#124; JS on | /contact | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-148 | routes | /projects/contentful-greenfield-starter &#124; 768px &#124; JS on | /projects/contentful-greenfield-starter | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-149 | routes | /projects/enterprise-cms-migration &#124; 768px &#124; JS on | /projects/enterprise-cms-migration | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-150 | routes | /projects/ui-gallery-system &#124; 768px &#124; JS on | /projects/ui-gallery-system | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-151 | routes | /writing/about-me &#124; 768px &#124; JS on | /writing/about-me | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-152 | routes | /writing/state-management-in-react &#124; 768px &#124; JS on | /writing/state-management-in-react | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-153 | routes | /writing/web-development-certifications-learning-journey &#124; 768px &#124; JS on | /writing/web-development-certifications-learning-journey | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-154 | routes | /projects/unknown-private-slug &#124; 768px &#124; JS on | /projects/unknown-private-slug | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-155 | navigation | keyboard + native history &#124; 768px &#124; JS on | / -&gt; /about -&gt; back -&gt; forward | 768 | 900 | true | 100% | NOT RUN |
| MB-156 | states | EMPTY work &#124; 768px &#124; JS on | isolated fixture origin / | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-157 | states | EMPTY projects &#124; 768px &#124; JS on | isolated fixture origin / | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-158 | states | EMPTY writing &#124; 768px &#124; JS on | isolated fixture origin / | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-159 | states | EMPTY tools &#124; 768px &#124; JS on | isolated fixture origin / | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-160 | states | ERROR &#124; 768px &#124; JS on | isolated fixture origin / | 768 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-161 | routes | / &#124; 1024px &#124; JS on | / | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-162 | routes | /about &#124; 1024px &#124; JS on | /about | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-163 | routes | /work &#124; 1024px &#124; JS on | /work | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-164 | routes | /projects &#124; 1024px &#124; JS on | /projects | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-165 | routes | /writing &#124; 1024px &#124; JS on | /writing | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-166 | routes | /tools &#124; 1024px &#124; JS on | /tools | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-167 | routes | /contact &#124; 1024px &#124; JS on | /contact | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-168 | routes | /projects/contentful-greenfield-starter &#124; 1024px &#124; JS on | /projects/contentful-greenfield-starter | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-169 | routes | /projects/enterprise-cms-migration &#124; 1024px &#124; JS on | /projects/enterprise-cms-migration | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-170 | routes | /projects/ui-gallery-system &#124; 1024px &#124; JS on | /projects/ui-gallery-system | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-171 | routes | /writing/about-me &#124; 1024px &#124; JS on | /writing/about-me | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-172 | routes | /writing/state-management-in-react &#124; 1024px &#124; JS on | /writing/state-management-in-react | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-173 | routes | /writing/web-development-certifications-learning-journey &#124; 1024px &#124; JS on | /writing/web-development-certifications-learning-journey | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-174 | routes | /projects/unknown-private-slug &#124; 1024px &#124; JS on | /projects/unknown-private-slug | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-175 | navigation | keyboard + native history &#124; 1024px &#124; JS on | / -&gt; /about -&gt; back -&gt; forward | 1024 | 900 | true | 100% | NOT RUN |
| MB-176 | states | EMPTY work &#124; 1024px &#124; JS on | isolated fixture origin / | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-177 | states | EMPTY projects &#124; 1024px &#124; JS on | isolated fixture origin / | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-178 | states | EMPTY writing &#124; 1024px &#124; JS on | isolated fixture origin / | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-179 | states | EMPTY tools &#124; 1024px &#124; JS on | isolated fixture origin / | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-180 | states | ERROR &#124; 1024px &#124; JS on | isolated fixture origin / | 1024 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-181 | routes | / &#124; 1440px &#124; JS on | / | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-182 | routes | /about &#124; 1440px &#124; JS on | /about | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-183 | routes | /work &#124; 1440px &#124; JS on | /work | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-184 | routes | /projects &#124; 1440px &#124; JS on | /projects | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-185 | routes | /writing &#124; 1440px &#124; JS on | /writing | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-186 | routes | /tools &#124; 1440px &#124; JS on | /tools | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-187 | routes | /contact &#124; 1440px &#124; JS on | /contact | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-188 | routes | /projects/contentful-greenfield-starter &#124; 1440px &#124; JS on | /projects/contentful-greenfield-starter | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-189 | routes | /projects/enterprise-cms-migration &#124; 1440px &#124; JS on | /projects/enterprise-cms-migration | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-190 | routes | /projects/ui-gallery-system &#124; 1440px &#124; JS on | /projects/ui-gallery-system | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-191 | routes | /writing/about-me &#124; 1440px &#124; JS on | /writing/about-me | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-192 | routes | /writing/state-management-in-react &#124; 1440px &#124; JS on | /writing/state-management-in-react | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-193 | routes | /writing/web-development-certifications-learning-journey &#124; 1440px &#124; JS on | /writing/web-development-certifications-learning-journey | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-194 | routes | /projects/unknown-private-slug &#124; 1440px &#124; JS on | /projects/unknown-private-slug | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-195 | navigation | keyboard + native history &#124; 1440px &#124; JS on | / -&gt; /about -&gt; back -&gt; forward | 1440 | 900 | true | 100% | NOT RUN |
| MB-196 | states | EMPTY work &#124; 1440px &#124; JS on | isolated fixture origin / | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-197 | states | EMPTY projects &#124; 1440px &#124; JS on | isolated fixture origin / | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-198 | states | EMPTY writing &#124; 1440px &#124; JS on | isolated fixture origin / | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-199 | states | EMPTY tools &#124; 1440px &#124; JS on | isolated fixture origin / | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-200 | states | ERROR &#124; 1440px &#124; JS on | isolated fixture origin / | 1440 | 900 | true | 100% then 200% TEXT ONLY | NOT RUN |
| MB-201 | bootstrap | malformed JSON | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-202 | bootstrap | wrong version | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-203 | bootstrap | wrong prefix | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-204 | bootstrap | wrong audience | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-205 | bootstrap | wrong state | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-206 | bootstrap | wrong route | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-207 | bootstrap | unknown envelope | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-208 | bootstrap | channel kind | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-209 | bootstrap | navigation null | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-210 | bootstrap | missing name | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-211 | bootstrap | bad nested array | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-212 | bootstrap | bad Rich Text | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-213 | bootstrap | bad image | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-214 | bootstrap | bad document | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-215 | bootstrap | nested private | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-216 | bootstrap | bad URL | isolated mutated bootstrap origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-217 | literal | literal round-trip '$$' | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-218 | literal | literal round-trip '$&amp;' | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-219 | literal | literal round-trip "$'" | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-220 | literal | literal round-trip '$`' | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-221 | literal | literal round-trip '&lt;/script&gt;&lt;script&gt;PRIVATE-MARKER&lt;/script&gt;' | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-222 | literal | literal round-trip '\u2028\u2029' | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-223 | literal | literal round-trip '&lt;!--portfolio-bootstrap--&gt;' | isolated rendered literal origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-224 | media | intentional broken profile image | isolated /about image failure origin | 390 | 900 | true | 100% | NOT RUN |
| MB-225 | gallery | preserved actual gallery | gallery origin / | 390 | 900 | true | 100% | NOT RUN |
| MB-226 | storybook | portfolio--home-preview | storybook /iframe.html?id=portfolio--home-preview&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-227 | storybook | portfolio-pages--home | storybook /iframe.html?id=portfolio-pages--home&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-228 | storybook | portfolio-pages--about | storybook /iframe.html?id=portfolio-pages--about&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-229 | storybook | portfolio-pages--work | storybook /iframe.html?id=portfolio-pages--work&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-230 | storybook | portfolio-pages--projects | storybook /iframe.html?id=portfolio-pages--projects&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-231 | storybook | portfolio-pages--project | storybook /iframe.html?id=portfolio-pages--project&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-232 | storybook | portfolio-pages--writing | storybook /iframe.html?id=portfolio-pages--writing&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-233 | storybook | portfolio-pages--article | storybook /iframe.html?id=portfolio-pages--article&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-234 | storybook | portfolio-pages--tools | storybook /iframe.html?id=portfolio-pages--tools&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-235 | storybook | portfolio-pages--contact | storybook /iframe.html?id=portfolio-pages--contact&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-236 | storybook | portfolio-pages--empty-work | storybook /iframe.html?id=portfolio-pages--empty-work&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-237 | storybook | portfolio-pages--empty-projects | storybook /iframe.html?id=portfolio-pages--empty-projects&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-238 | storybook | portfolio-pages--empty-writing | storybook /iframe.html?id=portfolio-pages--empty-writing&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-239 | storybook | portfolio-pages--empty-tools | storybook /iframe.html?id=portfolio-pages--empty-tools&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-240 | storybook | portfolio-pages--missing | storybook /iframe.html?id=portfolio-pages--missing&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-241 | storybook | portfolio-pages--error | storybook /iframe.html?id=portfolio-pages--error&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-242 | storybook | portfolio-pages--private-project-preview | storybook /iframe.html?id=portfolio-pages--private-project-preview&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-243 | storybook | portfolio-pages--private-article-preview | storybook /iframe.html?id=portfolio-pages--private-article-preview&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-244 | storybook | portfolio-pages--rich-text-vocabulary | storybook /iframe.html?id=portfolio-pages--rich-text-vocabulary&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-245 | storybook | portfolio-pages--render-failure | storybook /iframe.html?id=portfolio-pages--render-failure&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |
| MB-246 | storybook | portfolio-pages--render-boundary-control | storybook /iframe.html?id=portfolio-pages--render-boundary-control&amp;viewMode=story | 390 | 900 | true | 100% | NOT RUN |

## Separate partial visual records

These six records are not completed matrix cases; their actual recorded retrospective times and unknown execution times remain in sealed evidence.

| ID | Surface | Status | Unique image count |
| --- | --- | --- | ---: |
| VISUAL-001 | Home | PARTIAL | 14 |
| VISUAL-002 | About | PARTIAL | 1 |
| VISUAL-003 | Contact | PARTIAL | 1 |
| VISUAL-004 | Projects | PARTIAL | 1 |
| VISUAL-005 | Portfolio project detail — UI Gallery System | PARTIAL | 1 |
| VISUAL-006 | Generic missing page | PARTIAL | 2 |

## Documentation pass and next gate

This report is the sole new repository file created by reconciliation. The sixteen existing allowlisted documents require bounded lifecycle/evidence updates: stale current 06.3 candidate/runtime-absent or emitter-deferred pointers, plus the new owner decision and actual-dated reconciliation chronology. The old dated changelog entries remain historical facts, not invalidated events. No optional edit is added to meet a quota. Prior rules, semantic tables, frozen modules, fixtures/tests/media, runtime/dependencies and all other protected files stay unchanged. Complete document before/after identities and diffs, actual write counts, link/anchor checks and exact pending path lists belong to the external reconciliation evidence.

This pass performs zero implementation edits, project test/typecheck/lint/build/browser/HTTP checks, screenshot collection, installs, Contentful requests, credential reads, deployment, Git mutations, process changes or later-phase execution. Exactly two authorized read-only remote observations occurred. The incoming 18 implementation paths remain pending alongside only the actual allowed documentation changes; neither working tree is required to become clean before a separately authorized checkpoint.

Stop for **External Final Validation of the exact combined candidate**. Candidate ledger `06.4-reconciliation-1`; contract `portfolio-contract-v1.0.0` EFFECTIVE / FROZEN / UNCHANGED. Final validation PENDING; paired checkpoint NOT AUTHORIZED / NOT RUN; 06.5 NOT AUTHORIZED / NOT STARTED; I-064-03 browser closure OPEN. No self-approval or later-phase authority.
