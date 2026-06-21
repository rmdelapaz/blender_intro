# Lesson 19 &#183; Cycles Path Tracing &#8211; Browser-QA Progress

**Module:** 04 &#183; Lighting &amp; Rendering (the lesson after L18 EEVEE Real-Time Rendering)
**HTML target:** `lesson_19_cycles_path_tracing.html`
**Status:** **DONE 2026-06-20 &#8212; PASS / CLEAN, NO DEFECTS.** Full Playwright + real-Chromium sweep (dark + light &times; 1920 / 1024 / 414). The real HTML was **never touched** (no defects found); it remains at **290,548 B**, em-dash baseline **20** held. This closes the final L19 item &#8212; **L19 is now fully DONE** (figure-complete 35/35 + browser-QA PASS). L19 carries the **1 LIVE mermaid** block (the render-process `graph TD` flowchart in `how-cycles-works`), which renders **1/1/0** &#8212; same shape as L18 (1 live mermaid), unlike L17 (0).

---

## Entry state (verified byte-exact on the live UNC file, then on the QA copy)

Authoritative bridge Python `open(...).read()` on the live `\\wsl$` file (Claude-side bash cannot reach the UNC path), then `copy_file_user_to_claude` + Claude-side re-read = **290,548 B, byte-identical** (sha256 prefix `810d3620d0255a34`, em-dash re-counted 20 on the copy). Integrity sweep (Python `count('\u2014')` authoritative):

| metric | value |
|--------|-------|
| bytes | 290,548 |
| em-dash U+2014 | 20 (baseline, held) |
| `&mdash;` / `&#8212;` | 0 / 0 |
| `color="#222"` | 0 |
| `<figure>` / `</figure>` | 35 / 35 |
| `<figcaption` / `</figcaption>` | 35 / 35 |
| `<img` | 24 |
| `<svg` / `</svg>` | 33 / 33 |
| `<marker` | 0 |
| `class="mermaid"` (live diagram blocks) | 1 |
| section ids | 11, unique, no dups |

Every count matches the P10 FIGURE-COMPLETE sign-off + `lesson_19_integration_progress.md` expected-state exactly. Section order verified in document order: what-is-path-tracing &#183; how-cycles-works &#183; basic-settings &#183; samples-denoising &#183; light-paths &#183; caustics &#183; gpu-cpu &#183; optimization &#183; troubleshooting &#183; project &#183; summary. Namespaces verified intact: c3- &times;6, c13- 8 ids (+1 `url(#c13-heatgrad)` ref = 9 raw hits), c15- &times;8, c12-/c17-/c19-/c22-/c32- &times;4 each, c21- &times;10, c30- &times;8.

All 24 PNGs `copy_file_user_to_claude`-copied + Pillow decode-verified (`MAX_IMAGE_PIXELS=None`): all decode clean as RGB; dims/sizes match the integration-doc records exactly. Committed deliverables confirmed: #16 645,160 B (1000&times;750), #20 585,919 B (1000&times;750), #21 730,746 B (1000&times;750), #30 1,888,456 B (1202&times;1202), #03 1804&times;1202, #13 1202&times;600, #15 1202&times;1202. **Static viewBox pre-check: all 22 overlay-bearing PNG overlays carry viewBox == PNG pixel dims exactly (0 mismatches); the 2 overlay-free PNGs are #16 + #20 by design.**

---

## Harness (L16/L17/L18 precedent, unchanged shape; L19 = 1 live mermaid like L18)

Claude-side `qa/` harness, real project files copied in, **real HTML untouched**:

- `lesson_19.html` (290,548 B, verbatim live copy, never edited) plus a patched `lesson_19_qa.html` differing ONLY in harness hooks (body byte-for-byte identical &#8212; normalizing the head hooks out of the QA copy reproduced the live file exactly, 289,987 chars; em-dash 20 / figure 35/35 / figcaption 35/35 / img 24 / svg 33/33 / marker 0 / mermaid-div 1 / color222 0 / 11 sections all re-verified on the patched copy): (a) the mermaid ESM import re-pointed from the jsdelivr CDN to a local `./mermaid_dist/mermaid.esm.min.mjs` (`npm pack mermaid@10` &#8594; **10.9.6**, full dist chunk graph copied so the 76-byte re-export stub resolves `./mermaid-500b880f.js` and the flowchart chunk graph loads), `startOnLoad: true` &#8594; `false`, plus a `window.addEventListener('load', ...)` that runs `mermaid.run({ nodes })` over the `.mermaid` node and sets `window.__mermaidDone` / `window.__mermaidError`; (b) `/favicon.png` &#8594; local transparent `favicon.png`; (c) `js/clipboard.js` + `js/course-enhancements.js` &#8594; empty stubs (paths unchanged). `styles/main.css` (23,106 B) copied verbatim.
- **Served over `http://127.0.0.1` (not `file://`)** so the ESM mermaid module loads under a real origin, matching how the live page loads it from the CDN. (`file://` origin `null` CORS-blocks ESM module scripts &#8212; harness-environment constraint, not a page property.)
- Playwright real Chromium (`/opt/pw-browsers/chromium-1194`, headless), Python `sync_api`. Per width&times;theme: set `data-theme`, scroll top&#8594;bottom in 400px steps (lazy imgs), then scroll the LAST figure into view + bottom-dwell (lazy-load hardening), wait all imgs `complete && naturalWidth>0`, wait `window.__mermaidDone`, then measure per-overlay registration deltas (img bbox vs sibling overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 horizontal overflow, console errors (favicon-probe 404s filtered as harness artifacts; none occurred &#8212; favicon stub resolved 200). `PIL.Image.MAX_IMAGE_PIXELS=None`.

---

## Results (dark = light, all 6 combos)

| combo | imgs | overlays | worst &#124;dx&#124; | worst &#124;dy&#124; | worst &#124;dw&#124; | worst &#124;dh&#124; | mermaid r/t/err | overflow | console-errs |
|-------|------|----------|------|------|------|------|------|------|------|
| light-1920 | 24/24 | 22 | 0.00 | 0.00 | 0.14 | 0.00 | 1/1/0 | 0px | 0 |
| light-1024 | 24/24 | 22 | 0.00 | 0.00 | 0.11 | 0.00 | 1/1/0 | 0px | 0 |
| light-414  | 24/24 | 22 | 0.00 | 0.00 | 0.16 | 0.00 | 1/1/0 | 0px | 0 |
| dark-1920  | 24/24 | 22 | 0.00 | 0.00 | 0.14 | 0.00 | 1/1/0 | 0px | 0 |
| dark-1024  | 24/24 | 22 | 0.00 | 0.00 | 0.11 | 0.00 | 1/1/0 | 0px | 0 |
| dark-414   | 24/24 | 22 | 0.00 | 0.00 | 0.16 | 0.00 | 1/1/0 | 0px | 0 |

**No defects.** Overlay registration is exact: &#124;dx&#124; = &#124;dy&#124; = &#124;dh&#124; = 0.00 on every overlay &times; every combo; &#124;dw&#124; tops out at 0.16px at 414 (sub-pixel width residue from fractional scaling, the same benign band measured on L05&#8211;L18). The live mermaid block renders **1/1, 0 errored** on every combo (`__mermaidDone` true, `__mermaidError` null). 414 horizontal overflow 0px. 0 real page console errors. Dark and light identical.

### Per-overlay worst &#124;delta&#124; (across all 6 combos)

All 22 PNG-overlay figures, worst absolute box-delta over the whole sweep:

| overlay src | &#124;dx&#124; | &#124;dy&#124; | &#124;dw&#124; | &#124;dh&#124; |
|-------------|------|------|------|------|
| lesson_19_03_sample_progression_grid.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_08_render_properties_screenshot.png | 0.00 | 0.00 | 0.11 | 0.00 |
| lesson_19_09_device_selection_screenshot.png | 0.00 | 0.00 | 0.11 | 0.00 |
| lesson_19_10_sampling_settings_screenshot.png | 0.00 | 0.00 | 0.06 | 0.00 |
| lesson_19_11_denoising_settings_screenshot.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_19_12_denoising_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_13_adaptive_sampling_viz.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_14_light_paths_screenshot.png | 0.00 | 0.00 | 0.06 | 0.00 |
| lesson_19_15_bounce_limit_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_19_17_caustics_types_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_18_caustics_settings_screenshot.png | 0.00 | 0.00 | 0.16 | 0.00 |
| lesson_19_19_subsurface_scattering_example.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_21_fireflies_problem.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_19_22_clamping_fix.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_19_23_memory_usage_console_screenshot.png | 0.00 | 0.00 | 0.08 | 0.00 |
| lesson_19_24_preferences_gpu_setup_screenshot.png | 0.00 | 0.00 | 0.09 | 0.00 |
| lesson_19_25_render_region_diagram.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_26_resolution_percentage_screenshot.png | 0.00 | 0.00 | 0.11 | 0.00 |
| lesson_19_28_glass_material_screenshot.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_29_metal_material_screenshot.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_19_30_progressive_render_examples.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_19_32_eevee_vs_cycles_comparison.png | 0.00 | 0.00 | 0.03 | 0.00 |

Global worst across the whole figure set: &#124;dx&#124; 0.00 / &#124;dy&#124; 0.00 / &#124;dw&#124; 0.16 / &#124;dh&#124; 0.00. (#18 `caustics_settings_screenshot` carries the worst &#124;dw&#124; at 414 &#8212; pure fractional-downscale rounding, registration otherwise exact.)

---

## Selector scope

The harness measured **22 of 33** static `<svg>` elements: the 22 PNG-overlay svgs (each an img sibling inside a `position: relative` wrapper &#8212; dx/dy/dw/dh pair-test). The remaining **11 are inline diagram SVGs** (#01 path_tracing_ray_diagram, #02 ray_vs_path_comparison, #04 render_process_flowchart, #05 light_bounce_visualization, #06 bounce_types_comparison, #07 gpu_cpu_architecture, #27 lighting_setup_diagram, #31 samples_time_chart, #33 optimization_decision_tree, #34 instancing_memory_diagram, #35 quick_settings_reference) &#8212; these have **no img sibling** and fall outside the img-vs-overlay-svg pair-test **by construction**, exactly as the kickoff note anticipated. They carry no misregistration risk (the SVG IS the figure; there is no raster to register against). DOM img total **24** = 22 overlay-bearing PNGs + the **2 overlay-free heroes** (#16 caustics_example, #20 volume_rendering_example, both PNG, NO overlay by design). marker 0, wrapper relative divs 22. The **1 live mermaid block** renders one further svg at runtime (not in the static 33 count); it rendered cleanly with 0 errors on every combo.

---

## Cleared artifacts (investigated, confirmed NOT defects)

1. **&#124;dw&#124; up to 0.16px at 414.** Sub-pixel width residue from fractional downscale of wide source PNGs into a 414px column; &#124;dx&#124;/&#124;dy&#124;/&#124;dh&#124; all 0.00, so registration is exact. Same benign band recorded on L05&#8211;L18. Not a defect.
2. **Local-ESM mermaid + `http://127.0.0.1` origin.** Required because Chromium CORS-blocks ESM module imports over `file://` (origin `null`); the live page loads mermaid from `https://cdn.jsdelivr.net`, where this restriction does not apply. Re-pointing to the local 10.9.6 dist + serving over a real origin reproduces the production load path. The full flowchart chunk graph (flowDiagram / flowDb / dagre layout chunks) loaded 200 and the `graph TD` block rendered 1/1/0 on every combo. Harness-environment constraint, not a page property.

---

## Standing browser-QA queue

- **L11 1024-width sweep (the item the L18 banner carried forward): ALREADY CLOSED.** `lesson_11_browser_qa_progress.md` records the L11 1024 dark+light sweep completed **2026-06-14** (PASS, no defects); L11 is fully DONE across 1920 / 1024 / 414. The L18-carried open item predates that close; nothing to run. **Standing browser-QA queue is now EMPTY.**

---

## Closeout

- **No edits to the real HTML.** `lesson_19_cycles_path_tracing.html` stays at **290,548 B**, em-dash **20**, figure 35/35, figcaption 35/35, img 24, svg 33/33, marker 0, mermaid 1, color222 0, 11 section ids no dups &#8212; unchanged from the P10 sign-off.
- **L19 = figure-complete (35/35) + browser-QA PASS/CLEAN.** Brought to the same done-state as L05&#8211;L18.
- **Standing browser-QA queue: EMPTY** (all lessons L05&#8211;L19 cleared; L11 1024 closed 2026-06-14). No further QA items pending.
