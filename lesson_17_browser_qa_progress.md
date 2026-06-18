# Lesson 17 &#183; HDRI and World Lighting &#8211; Browser-QA Progress

**Module:** 04 &#183; Lighting &amp; Rendering (the lesson after L16 Three-Point Lighting)
**HTML target:** `lesson_17_hdri_and_world_lighting.html`
**Status:** **DONE 2026-06-18 &#8212; PASS / CLEAN, NO DEFECTS.** Full Playwright + real-Chromium sweep (dark + light &times; 1920 / 1024 / 414). The real HTML was **never touched** (no defects found); it remains at **274,929 B**, em-dash baseline **19** held. This pass closes the L17 browser-QA item &#8212; the final lesson figure work. **L17 is now fully DONE.** Standing browser-QA queue stays EMPTY (all lessons L05&#8211;L17 now cleared).

---

## Entry state (verified byte-exact on the live UNC file, then on the QA copy)

Authoritative bridge Python `open(...).read()` on the live `\wsl$` file (Claude-side bash cannot reach the UNC path), then `copy_file_user_to_claude` + Claude-side re-read = **274,929 B, byte-identical** (sha256 `206f1dbb2f277741a7da1404844e52f5951952638abedcfe60fd5da1e8932341`, em-dash re-counted 19 on the copy). Integrity sweep (Python `count('\u2014')` authoritative):

| metric | value |
|--------|-------|
| bytes | 274,929 |
| em-dash U+2014 | 19 (baseline, held) |
| `&mdash;` | 0 |
| `color="#222"` | 0 |
| `<figure>` / `</figure>` | 30 / 30 |
| `<figcaption` / `</figcaption>` | 30 / 30 |
| `<img` | 22 |
| `<svg` / `</svg>` | 30 / 30 |
| `<marker` | 5 (tf-arrow in the #25 `tf` inline SVG + 4 pre-existing) |
| `class="mermaid"` (live diagram blocks) | 0 |
| wrapper relative divs | 22 |
| section ids | 11, unique, no dups |

Every count matches the L17 FIGURE-COMPLETE 30/30 banner + `lesson_17_integration_progress.md` expected-state exactly. Byte trail reconciled: 265,457 (P9) &#8594; +4,788 (#22 `c22`) &#8594; 270,245 (P8) &#8594; +4,684 (#29 `c29`) &#8594; **274,929 B** (P10). The 265,457 B figure on the older session.md P0 re-verify line is the pre-#22/#29 snapshot, not a conflict.

All 22 PNGs `copy_file_user_to_claude`-copied + Pillow decode-verified (`MAX_IMAGE_PIXELS=None`): every byte size matches the integration-doc records exactly, all decode clean as RGB. Key dims confirmed: #22 `separate_lighting_nodes` 985&times;550 / 72,506 B; #29 `project_setup_reference` 1333&times;788 / 869,872 B; #13 `hdri_types_grid` 2704&times;1802 / 3,465,360 B; #12 `rotation_effect` 1802&times;1802 / 2,036,424 B.

---

## Harness (L05&#8211;L16 precedent, unchanged shape)

Claude-side `qa/` harness, real project files copied in, **real HTML untouched**:

- `lesson_17.html` (274,929 B, the verbatim live copy, never edited) plus a patched `lesson_17_qa.html` differing ONLY in harness hooks (14 HTML lines + 2 stubbed JS files; body byte-for-byte identical &#8212; em-dash 19 / figure 30/30 / img 22 / svg 30/30 / marker 5 / wrapper 22 / color222 0 / 0 live mermaid all re-verified on the patched copy): (a) the mermaid ESM import re-pointed from the jsdelivr CDN to a local `./mermaid_dist/mermaid.esm.min.mjs` (`npm pack mermaid@10` &#8594; 10.9.6, full dist chunk graph copied so the 76-byte re-export stub resolves `./mermaid-500b880f.js`), `startOnLoad: true` &#8594; `false`, plus a `window.addEventListener('load', ...)` that runs `mermaid.run()` over any `.mermaid` nodes (there are none) and sets `window.__mermaidDone`; (b) `/favicon.png` &#8594; local transparent `favicon.png`; (c) `js/clipboard.js` + `js/course-enhancements.js` &#8594; empty stubs (paths unchanged). `styles/main.css` (22,762 B) copied verbatim.
- **Served over `http://127.0.0.1` (not `file://`)** so the ESM mermaid module loads under a real origin, matching how the live page loads it from the CDN. (`file://` origin `null` CORS-blocks ESM module scripts &#8212; harness-environment constraint, not a page property.)
- Playwright real Chromium (`/opt/pw-browsers/chromium-1194`, headless), Python `sync_api`. Per width&times;theme: set `data-theme`, scroll top&#8594;bottom in 400px steps (lazy imgs), **then scroll the LAST figure into view + bottom-dwell** (hardened for the final lazy image &#8212; the L16 last-figure lazy-load timing miss), wait all imgs `complete && naturalWidth>0`, wait `window.__mermaidDone`, then measure per-overlay registration deltas (img bbox vs sibling overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 horizontal overflow, console errors (favicon-probe 404s filtered as harness artifacts).

---

## Results (dark = light, all 6 combos)

| combo | imgs | overlays | worst &#124;dx&#124; | worst &#124;dy&#124; | worst &#124;dw&#124; | worst &#124;dh&#124; | mermaid r/t/err | overflow | console-errs |
|-------|------|----------|------|------|------|------|------|------|------|
| light-1920 | 22/22 | 22 | 0.00 | 0.00 | 0.09 | 0.00 | 0/0/0 | 0px | 0 |
| light-1024 | 22/22 | 22 | 0.00 | 0.00 | 0.06 | 0.00 | 0/0/0 | 0px | 0 |
| light-414  | 22/22 | 22 | 0.00 | 0.00 | 0.16 | 0.00 | 0/0/0 | 0px | 0 |
| dark-1920  | 22/22 | 22 | 0.00 | 0.00 | 0.09 | 0.00 | 0/0/0 | 0px | 0 |
| dark-1024  | 22/22 | 22 | 0.00 | 0.00 | 0.06 | 0.00 | 0/0/0 | 0px | 0 |
| dark-414   | 22/22 | 22 | 0.00 | 0.00 | 0.16 | 0.00 | 0/0/0 | 0px | 0 |

**No defects.** Overlay registration is exact: &#124;dx&#124; = &#124;dy&#124; = &#124;dh&#124; = 0.00 on every overlay &times; every combo; &#124;dw&#124; tops out at 0.16px at 414 (sub-pixel width residue from fractional scaling, the same benign band measured on L05&#8211;L16). mermaid 0/0 (no live diagram blocks; the module imported and `__mermaidDone` set with 0 errors). 414 horizontal overflow 0px. 0 real page console errors. Dark and light identical.

### Per-overlay worst &#124;delta&#124; (across all 6 combos)

All 22 PNG-overlay figures, worst absolute box-delta over the whole sweep:

| overlay src | &#124;dx&#124; | &#124;dy&#124; | &#124;dw&#124; | &#124;dh&#124; |
|-------------|------|------|------|------|
| lesson_17_01_hdr_ldr_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_05_world_properties_panel.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_17_06_default_world_shader.png | 0.00 | 0.00 | 0.06 | 0.00 |
| lesson_17_07_hdri_setup_workflow.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_08_complete_node_network.png | 0.00 | 0.00 | 0.06 | 0.00 |
| lesson_17_09_rotation_node_setup.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_17_10_viewport_shading_icons.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_17_11_strength_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_12_rotation_effect.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_17_13_hdri_types_grid.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_14_outdoor_examples.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_17_15_studio_examples.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_16_interior_examples.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_18_hdri_key_light_setup.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_17_20_poly_haven_navigation.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_22_separate_lighting_nodes.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_23_color_grading_nodes.png | 0.00 | 0.00 | 0.16 | 0.00 |
| lesson_17_24_quality_comparison.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_17_26_viewport_mode_comparison.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_17_27_node_connection_closeup.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_17_29_project_setup_reference.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_17_30_before_after_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |

Global worst across the whole figure set: &#124;dx&#124; 0.00 / &#124;dy&#124; 0.00 / &#124;dw&#124; 0.16 / &#124;dh&#124; 0.00. (#23 `color_grading_nodes`, the widest source at 3784&times;411, carries the worst &#124;dw&#124; at 414 &#8212; pure fractional-downscale rounding, registration otherwise exact.)

---

## Selector scope

The harness measured **22 of 30** `<svg>` elements: the 22 PNG-overlay svgs (each an img sibling inside a `position: relative` wrapper). The remaining **8 are inline diagram SVGs** (#2 `dr` dynamic_range_spectrum, #3 `sp` hdri_sphere_concept, #4 `eq` equirectangular_projection, #28 `ff` file_formats_guide, #17 `hc` combining-lights, #19 `th`, #21 `fo` file_organization, #25 `tf` troubleshooting_flowchart) &#8212; these have **no img sibling** and fall outside the img-vs-overlay-svg pair-test **by construction**, exactly as the kickoff note anticipated. They carry no misregistration risk (the SVG IS the figure; there is no raster to register against). The `tf` inline SVG owns the single inline `<marker>` (tf-arrow). There are **0 live mermaid blocks**, so no runtime svgs are added.

---

## Cleared artifacts (investigated, confirmed NOT defects)

1. **mermaid 0/0 on every combo.** Expected: L17 has **0 `<div class="mermaid">` diagram blocks** (the 4 `mermaid` string hits are the `<head>` ESM import + `mermaid.initialize`, not body diagrams). The local module imported cleanly over `http://127.0.0.1` and `window.__mermaidDone` set true with `window.__mermaidError` null on all combos. Nothing to render; nothing errored.
2. **The prior-lesson overlay-img `margin:0` defect class (constant dy&#8722;16 / dh+32 inline-block baseline gap) did NOT appear.** All 22 L17 overlay imgs were written with the locked img style (`display:block; max-width:100%; height:auto; margin:0`) + figcaption OUTSIDE the wrapper, so &#124;dy&#124; = &#124;dh&#124; = 0.00 everywhere. Verified clean, not merely assumed.
3. **&#124;dw&#124; up to 0.16px at 414.** Sub-pixel width residue from fractional image downscaling at the narrow viewport; the same benign band seen on L05&#8211;L16. &#124;dx&#124;/&#124;dy&#124;/&#124;dh&#124; all 0.00, so the overlay tracks the raster exactly &#8212; no visible misregistration.

---

## Closeout

- **No edits to the real HTML.** `lesson_17_hdri_and_world_lighting.html` stays at **274,929 B**, em-dash **19**, figure 30/30, figcaption 30/30, img 22, svg 30/30, marker 5, wrapper-divs 22, color222 0, 11 section ids no dups, 0 live mermaid &#8212; unchanged from the P10 close.
- **L17 = figure-complete (30/30) + browser-QA PASS/CLEAN.** Brought to the same done-state as L05&#8211;L16. **L17 is the final lesson figure work; it is now fully DONE.**
- **Standing browser-QA queue: EMPTY** (all lessons L05&#8211;L17 cleared). No further QA items pending.
