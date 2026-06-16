# Lesson 16 &#183; Three-Point Lighting Setup &#8211; Browser-QA Progress

**Module:** 04 &#183; Lighting &amp; Rendering
**HTML target:** `lesson_16_three_point_lighting_setup.html`
**Status:** **DONE 2026-06-15 &#8212; PASS / CLEAN, NO DEFECTS.** Full Playwright + real-Chromium sweep (dark + light &times; 1920 / 1024 / 414). The real HTML was **never touched** (no defects found); it remains at **236,633 B**, em-dash baseline **26** held. This pass closes the optional L16 browser-QA item; the standing browser-QA queue stays EMPTY (all lessons L05&#8211;L16 now cleared).

---

## Entry state (verified on the QA copy, byte-exact to live)

`copy_file_user_to_claude` + Python read of the live UNC file = **236,633 B**, byte-identical to the P12-close banner. Integrity sweep on the copy (Python `count('\u2014')` authoritative):

| metric | value |
|--------|-------|
| bytes | 236,633 |
| em-dash U+2014 | 26 (baseline, held) |
| `&mdash;` | 0 |
| `color="#222"` | 0 |
| `<figure>` / `</figure>` | 25 / 25 |
| `<img` | 19 |
| `<figcaption` / `</figcaption>` | 25 / 25 |
| `<svg` / `</svg>` | 25 / 25 |
| `<marker` | 0 |
| `class="mermaid"` | 2 |
| wrapper relative divs | 19 |
| `&#183;` | 75 |
| middot literal U+00B7 | 3 |
| `&#176;` | 50 |
| `&#8211;` | 27 |
| `&#215;` | 6 |
| en-dash U+2013 / minus U+2212 | 0 / 0 |
| section ids | 12, unique, no dups |

Body sound. All 19 PNGs `copy_file_user_to_claude`-copied + Pillow decode-verified; dimensions and byte sizes match the `lesson_16_integration_progress.md` records exactly (e.g. #23 1802&times;3606 / 4,517,058 B; #24 2704&times;1802 / 2,585,802 B; #18 900&times;1100 / 377,508 B; #20 4204&times;1600 / 4,112,974 B).

---

## Harness (L05&#8211;L13 precedent, unchanged shape)

Claude-side `qa/` harness, real project files copied in, **real HTML untouched**:

- `lesson_16.html` (236,633 B, the verbatim live copy, never edited) plus a patched `lesson_16_qa.html` that differs ONLY in three harness hooks: (a) the mermaid ESM import re-pointed from the jsdelivr CDN to a local `./mermaid_dist/mermaid.esm.min.mjs` (`npm pack mermaid@10` &#8594; 10.9.6), `startOnLoad: true` &#8594; `false`, plus a `window.addEventListener('load', ...)` calling `await mermaid.run()` and setting a `window.__mermaidDone` flag; (b) `/favicon.png` &#8594; local transparent `favicon.png`; (c) `js/clipboard.js` + `js/course-enhancements.js` neutralized to empty stubs. `styles/main.css` copied verbatim.
- **Served over `http://127.0.0.1` (not `file://`)** so the ESM mermaid module loads under a real origin, matching how the live page loads it from the CDN. (Loading the ESM module over `file://` is blocked by Chromium CORS for origin `null`; this is a harness-environment constraint, not a page property &#8212; see Cleared artifacts below.)
- Playwright real Chromium (`/opt/pw-browsers/chromium-1194`, headless), Python `sync_api`. Per width&times;theme: set `data-theme`, scroll top&#8594;bottom in 400px steps (lazy imgs), then scroll the last figure into view + dwell at the bottom (hardened for the final lazy image), wait all imgs `complete && naturalWidth>0`, wait `window.__mermaidDone`, then measure per-overlay registration deltas (img bbox vs sibling overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, horizontal overflow, console errors.

---

## Results (dark = light, all 6 combos)

| combo | imgs | overlays | worst &#124;dx&#124; | worst &#124;dy&#124; | worst &#124;dw&#124; | worst &#124;dh&#124; | mermaid r/t/err | overflow | console-errs |
|-------|------|----------|------|------|------|------|------|------|------|
| light-1920 | 19/19 | 19 | 0.00 | 0.00 | 0.05 | 0.00 | 2/2/0 | 0px | 0 |
| light-1024 | 19/19 | 19 | 0.00 | 0.00 | 0.05 | 0.00 | 2/2/0 | 0px | 0 |
| light-414  | 19/19 | 19 | 0.00 | 0.00 | 0.08 | 0.00 | 2/2/0 | 0px | 0 |
| dark-1920  | 19/19 | 19 | 0.00 | 0.00 | 0.05 | 0.00 | 2/2/0 | 0px | 0 |
| dark-1024  | 19/19 | 19 | 0.00 | 0.00 | 0.05 | 0.00 | 2/2/0 | 0px | 0 |
| dark-414   | 19/19 | 19 | 0.00 | 0.00 | 0.08 | 0.00 | 2/2/0 | 0px | 0 |

**No defects.** Overlay registration is exact: &#124;dx&#124; = &#124;dy&#124; = &#124;dh&#124; = 0.00 on every overlay &times; every combo; &#124;dw&#124; tops out at 0.08px (sub-pixel width residue from fractional scaling at 414, the same benign band measured on L05/L06/L07/L08/L13). mermaid 2/2 rendered, 0 errored. 414 horizontal overflow 0px. 0 real page console errors.

### Per-overlay worst &#124;delta&#124; (across all 6 combos)

All 19 PNG overlays, worst absolute box-delta over the whole sweep:

| overlay src | &#124;dx&#124; | &#124;dy&#124; | &#124;dw&#124; | &#124;dh&#124; |
|-------------|------|------|------|------|
| lesson_16_03_key_positions_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_16_04_key_settings_panel.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_05_shadow_quality_comparison.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_16_06_fill_mistakes_3panel.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_16_07_fill_settings_panel.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_16_08_rim_position_effect.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_16_09_rim_variations_4panel.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_16_10_ratio_comparison_5panel.png | 0.00 | 0.00 | 0.08 | 0.00 |
| lesson_16_11_highkey_lowkey_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_16_13_height_angles_comparison.png | 0.00 | 0.00 | 0.08 | 0.00 |
| lesson_16_14_rembrandt_triangle.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_15_lighting_variations_showcase.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_16_butterfly_pattern.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_17_loop_pattern.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_18_split_lighting_dramatic.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_19_product_adaptation.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_20_color_temperature_effects.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_16_23_troubleshooting_guide.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_16_24_project_steps_montage.png | 0.00 | 0.00 | 0.03 | 0.00 |

Global worst across the whole figure set: &#124;dx&#124; 0.00 / &#124;dy&#124; 0.00 / &#124;dw&#124; 0.08 / &#124;dh&#124; 0.00.

---

## Selector scope

The harness measured **19 of 25** `<svg>` elements: the 19 PNG-overlay svgs (each an img sibling inside a `position: relative; display: inline-block` wrapper). The remaining **6 are inline diagram SVGs** (#1 `tpo` three_point_overhead, #2 `tps` three_point_side, #12 `rc` ratio_calculator, #21 `fp` fourpoint_diagram, #22 `ltc` light_type_comparison, #25 `crs` complete_reference_sheet) &#8212; these have **no img sibling** and so fall outside the img-vs-overlay-svg pair-test **by construction**, exactly as the kickoff note anticipated. They carry no misregistration risk (there is no raster to register against; the SVG IS the figure). The 2 mermaid blocks render 2 further svgs at runtime (not in the static count); both rendered cleanly with 0 errors.

---

## Cleared artifacts (investigated, confirmed NOT defects)

1. **2 console errors + mermaid 0/2 on the first `file://` run.** Both traced to one cause: Chromium blocks ESM-module imports over `file://` (origin `null`) by CORS (`Access to script ... blocked by CORS policy`). The live page loads mermaid from `https://cdn.jsdelivr.net`, where this restriction does not apply. Re-serving the harness over `http://127.0.0.1` (a real origin) cleared both: mermaid &#8594; 2/2 rendered, console errors &#8594; 0, on every combo. Harness-environment constraint, not a page property.
2. **imgs 18/19 at 1920 / 1024 on the first run (19/19 at 414).** The single not-yet-loaded image was the page's LAST figure, #24 `lesson_16_24_project_steps_montage.png` (`loading="lazy"`). At wide widths the page is short enough vertically that the stepped scroll measured before the final lazy image entered the viewport+margin; at 414 the taller layout reaches it. Confirmed a lazy-load timing artifact: the file decodes (2704&times;1802 / 2,585,802 B) and reports `complete=true, naturalWidth=2704` once explicitly scrolled into view. Hardened the harness scroll (scroll last figure into view + bottom-dwell) &#8594; **19/19 every combo**. Page property is sound; image loads correctly.

---

## Closeout

- **No edits to the real HTML.** `lesson_16_three_point_lighting_setup.html` stays at **236,633 B**, em-dash **26**, figure 25/25, img 19, svg 25/25, figcaption 25/25, wrapper-divs 19, mermaid 2, 12 section ids no dups &#8212; unchanged from the P12 close.
- **L16 = figure-complete (25/25) + browser-QA PASS/CLEAN.** Brought to the same done-state as L05&#8211;L15.
- **Standing browser-QA queue: EMPTY** (all lessons cleared). No further QA items pending.
