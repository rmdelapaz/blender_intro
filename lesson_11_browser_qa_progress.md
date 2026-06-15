# Lesson 11 &mdash; Browser-QA Progress

**File under QA:** `lesson_11_pbr_materials_explained.html`
**Lesson:** L11 = PBR Materials Explained (Module 4)
**Figure state at QA:** FIGURE-COMPLETE 30/30 produced / 30/30 integrated (P1&ndash;P8 DONE 2026-06-04).

---

## Verdict: PASS / CLEAN (all widths cleared)

- **1920 dark + light** &mdash; PASS (2026-06-05 sweep).
- **414 dark + light** &mdash; PASS (2026-06-05 sweep).
- **1024 dark + light** &mdash; PASS (2026-06-14 sweep, this entry). **No defects.** The 1024 width was the only width never run in the 2026-06-05 sweep; it is now cleared. L11 browser-QA is fully DONE across 1920 / 1024 / 414.

No figure defects, no overlay misregistration, no overflow, no clipping, no dark-mode breakage, no page console errors at any width.

---

## 2026-06-14 &mdash; 1024-width sweep (dark + light)

**Method:** standard Playwright + real-Chromium harness (the L05&ndash;L08/L13 precedent). Real HTML **never touched**.

- **Entry-state:** live `lesson_11_pbr_materials_explained.html` read at **387,841 B** (progress doc / 2026-06-05 banner said 387,921; the live file is &minus;80 B with a Jun-12 12:58 mtime &mdash; the same benign Jun-12 batch-touch seen on L05/L06/L07/L08, body-neutral). Body verified sound on the copied file: figure 32/32 (30 distinct + the D1 #3 / D2 #26 reuse-by-ref = 2 extra `<figure>`), figcaption 32/32, `<img>` 17 (16 distinct PNG + #26 reuse), literal `<svg` 28, `class="mermaid"` 6, em-dash U+2014 **77** held, en-dash 0, literal middot 0, `&#183;` 49, `color="#222"` leak 0. **387,841 B is the authoritative P0.** sha256 of the copied real file = `1ae7312d0ed2edbf9681b6db0f4feb2b9b0693f233c4c88efa8eb7cf1d6c990d`.
- **Harness:** Chromium `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (headless), Playwright (Python). QA-copy served over `http://127.0.0.1` (an in-process `ThreadingHTTPServer`) so the page's `mermaid@10` ESM module import + its dynamic chunk loads resolve (a `file://` origin CORS-blocks ESM module scripts &mdash; serving over http is required to get real mermaid render proof). Four documented neutralizations on the QA-copy, proven equivalent to the real file by `diff` (only 2 HTML lines differ + 2 stubbed JS files): favicon `<link>` &rarr; comment; `mermaid@10` CDN import &rarr; local `mermaid-dist/mermaid.esm.min.mjs` (npm-packed mermaid@10.9.6); `js/clipboard.js` + `js/course-enhancements.js` &rarr; empty stubs.
- **Per theme:** `data-theme` set on `documentElement`; lazy imgs forced by scrolling top&rarr;bottom in 400px steps; waited until every `<img>` `complete && naturalWidth>0`; waited for mermaid render; then measured per-overlay registration (overlay-`<svg>` bbox vs sibling `<img>` bbox dx/dy/dw/dh), images loaded, mermaid total/rendered/errored, 1024 horizontal overflow, console errors.

**Results (identical dark + light):**

| Metric | 1024 dark | 1024 light |
|--------|-----------|-----------|
| Overlay pairs measured | 13 | 13 |
| Worst \|dx\| / \|dy\| / \|dw\| / \|dh\| | 0 / 0 / 0.03 / 0 | 0 / 0 / 0.03 / 0 |
| Images loaded | 17/17 | 17/17 |
| Mermaid rendered / total / errored | 6/6/0 | 6/6/0 |
| Horizontal overflow | 0px | 0px |
| Page console errors | 0 | 0 |

- **Overlay registration:** all 13 img-vs-overlay-svg pairs register within sub-pixel tolerance (worst |dw| 0.03px, all |dx|/|dy|/|dh| = 0). No misregistration of the L05/L06/L07/L13 inline-block-baseline class (L11's overlay imgs already carry the locked `margin:0`, so that defect family does not apply here). 
- **Selector-scope note:** 13 of the figures carry an img + overlay-svg wrapper pair and are measured. The rest fall outside the pair-test by construction and are not misregistration candidates: the 14 inline-SVG diagrams (#2/#3/#7/#8/#9/#10/#11/#14/#18/#21/#22/#25/#28/#29 &mdash; no `<img>`), and the self-labeling PLAIN PNG figures with no overlay (#17 `c17` SKIP, #19 `c19` SKIP, #20 `c20` SKIP, #24 `c24` SKIP). 16 distinct PNG `<img>` load 17/17 (incl. the #26 reuse) at both themes.
- **Mermaid:** 6/6 `class="mermaid"` blocks render to `<svg>`, 0 errored, both themes.
- **Console:** the only network entry was a single automatic `GET /favicon.ico 404` (the browser default-favicon probe; the page's own favicon `<link>` is neutralized and the QA dir has no favicon file) &mdash; a harness artifact, not a page reference. **Zero real page console errors / pageerrors** at either theme.

**No defects found. Real HTML unchanged (387,841 B). No edits made. L11 browser-QA closed off the standing queue.**
