# Lesson 18 &#183; Eevee Real-Time Rendering &#8211; Browser-QA Progress

**Module:** 04 &#183; Lighting &amp; Rendering (the lesson after L17 HDRI and World Lighting)
**HTML target:** `lesson_18_eevee_realtime_rendering.html`
**Status:** **DONE 2026-06-19 &#8212; PASS / CLEAN, NO DEFECTS.** Full Playwright + real-Chromium sweep (dark + light &times; 1920 / 1024 / 414). The real HTML was **never touched** (no defects found); it remains at **291,874 B**, em-dash baseline **6** held. This closes the final L18 item &#8212; **L18 is now fully DONE** (figure-complete 29/29 + browser-QA PASS). L18 carries the **1 LIVE mermaid** block (the #25 `graph TD` engine-decision flowchart), which renders **1/1/0** &#8212; the delta vs L17 (which had 0 live mermaid blocks).

---

## Entry state (verified byte-exact on the live UNC file, then on the QA copy)

Static pre-QA was already done and clean at kickoff; this pass re-confirmed it independently. Authoritative bridge Python `open(...).read()` on the live `\\wsl$` file, then `copy_file_user_to_claude` + Claude-side re-read = **291,874 B, byte-identical** to the P10 figure-complete sign-off. Integrity sweep on the copy (Python `count('\u2014')` authoritative):

| metric | value |
|--------|-------|
| bytes | 291,874 |
| em-dash U+2014 | 6 (baseline, held) |
| `&mdash;` | 0 |
| `color="#222"` | 0 |
| `<figure>` / `</figure>` | 29 / 29 |
| `<figcaption` / `</figcaption>` | 29 / 29 |
| `<img` | 20 |
| `<svg` / `</svg>` | 28 / 28 |
| `<marker` | 0 |
| `class="mermaid"` (live diagram blocks) | 1 |
| section ids | 12, unique, no dups |

Every count matches the P10 sign-off + `lesson_18_integration_progress.md` expected-state exactly. All 20 PNGs `copy_file_user_to_claude`-copied + Pillow decode-verified (`MAX_IMAGE_PIXELS=None`): all decode clean as RGB; #28 hero confirmed 1600&times;900 / 1,212,750 B (matches P9 record). 19 overlay viewBoxes were pixel-verified == PNG dims in the static pre-QA.

---

## Harness (L16/L17 precedent, unchanged shape; L18 mermaid delta)

Claude-side `qa/` harness, real project files copied in, **real HTML untouched**:

- `lesson_18.html` (291,874 B, verbatim live copy, never edited) plus a patched `lesson_18_qa.html` differing ONLY in harness hooks (body byte-for-byte identical &#8212; em-dash 6 / figure 29/29 / figcaption 29/29 / img 20 / svg 28/28 / marker 0 / mermaid-div 1 / color222 0 all re-verified on the patched copy): (a) the mermaid ESM import re-pointed from the jsdelivr CDN to a local `./mermaid_dist/mermaid.esm.min.mjs` (`npm pack mermaid@10` &#8594; **10.9.6**, full dist chunk graph copied so the 76-byte re-export stub resolves `./mermaid-500b880f.js`), `startOnLoad: true` &#8594; `false`, plus a `window.addEventListener('load', ...)` that runs `mermaid.run({ nodes })` over the `.mermaid` node and sets `window.__mermaidDone` / `window.__mermaidError`; (b) `/favicon.png` &#8594; local transparent `favicon.png`; (c) `js/clipboard.js` + `js/course-enhancements.js` &#8594; empty stubs (paths unchanged). `styles/main.css` (22,762 B) copied verbatim.
- **Served over `http://127.0.0.1` (not `file://`)** so the ESM mermaid module loads under a real origin, matching how the live page loads it from the CDN. (`file://` origin `null` CORS-blocks ESM module scripts &#8212; harness-environment constraint, not a page property.)
- Playwright real Chromium (`/opt/pw-browsers/chromium-1194`, headless), Python `sync_api`. Per width&times;theme: set `data-theme`, scroll top&#8594;bottom in 400px steps (lazy imgs), then scroll the LAST figure into view + bottom-dwell (lazy-load hardening), wait all imgs `complete && naturalWidth>0`, wait `window.__mermaidDone`, then measure per-overlay registration deltas (img bbox vs sibling overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 horizontal overflow, console errors (favicon-probe 404s filtered as harness artifacts; none occurred &#8212; favicon stub resolved 200).

---

## Results (dark = light, all 6 combos)

| combo | imgs | overlays | worst &#124;dx&#124; | worst &#124;dy&#124; | worst &#124;dw&#124; | worst &#124;dh&#124; | mermaid r/t/err | overflow | console-errs |
|-------|------|----------|------|------|------|------|------|------|------|
| light-1920 | 20/20 | 19 | 0.00 | 0.00 | 0.03 | 0.00 | 1/1/0 | 0px | 0 |
| light-1024 | 20/20 | 19 | 0.00 | 0.00 | 0.06 | 0.00 | 1/1/0 | 0px | 0 |
| light-414  | 20/20 | 19 | 0.00 | 0.00 | 0.08 | 0.00 | 1/1/0 | 0px | 0 |
| dark-1920  | 20/20 | 19 | 0.00 | 0.00 | 0.03 | 0.00 | 1/1/0 | 0px | 0 |
| dark-1024  | 20/20 | 19 | 0.00 | 0.00 | 0.06 | 0.00 | 1/1/0 | 0px | 0 |
| dark-414   | 20/20 | 19 | 0.00 | 0.00 | 0.08 | 0.00 | 1/1/0 | 0px | 0 |

**No defects.** Overlay registration is exact: &#124;dx&#124; = &#124;dy&#124; = &#124;dh&#124; = 0.00 on every overlay &times; every combo; &#124;dw&#124; tops out at 0.08px at 414 (sub-pixel width residue from fractional scaling, the same benign band measured on L05&#8211;L17). The live mermaid block renders **1/1, 0 errored** on every combo (`__mermaidDone` true, `__mermaidError` null). 414 horizontal overflow 0px. 0 real page console errors. Dark and light identical.

### Per-overlay worst &#124;delta&#124; (across all 6 combos)

All 19 PNG-overlay figures, worst absolute box-delta over the whole sweep:

| overlay src | &#124;dx&#124; | &#124;dy&#124; | &#124;dw&#124; | &#124;dh&#124; |
|-------------|------|------|------|------|
| lesson_18_04_eevee_cycles_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_05_render_properties_panel.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_18_06_sampling_settings_annotated.png | 0.00 | 0.00 | 0.05 | 0.00 |
| lesson_18_07_bloom_before_after.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_08_glare_node_settings.png | 0.00 | 0.00 | 0.03 | 0.00 |
| lesson_18_09_ssr_demonstration.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_10_refraction_setup_guide.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_11_ambient_occlusion_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_12_shadow_settings_panel.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_13_shadow_quality_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_14_shadow_artifacts_guide.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_15_volume_probe_data.png | 0.00 | 0.00 | 0.02 | 0.00 |
| lesson_18_16_sphere_probe_data.png | 0.00 | 0.00 | 0.08 | 0.00 |
| lesson_18_18_blend_mode_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_19_glass_setup_checklist.png | 0.00 | 0.00 | 0.06 | 0.00 |
| lesson_18_20_emission_bloom_interaction.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_22_viewport_render_comparison.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_24_contact_shadows_detail.png | 0.00 | 0.00 | 0.00 | 0.00 |
| lesson_18_30_hdri_light_probes_setup.png | 0.00 | 0.00 | 0.00 | 0.00 |

Global worst across the whole figure set: &#124;dx&#124; 0.00 / &#124;dy&#124; 0.00 / &#124;dw&#124; 0.08 / &#124;dh&#124; 0.00. (#16 `sphere_probe_data` carries the worst &#124;dw&#124; at 414 &#8212; pure fractional-downscale rounding, registration otherwise exact.)

---

## Selector scope

The harness measured **19 of 28** static `<svg>` elements: the 19 PNG-overlay svgs (each an img sibling inside a `position: relative` wrapper &#8212; dx/dy/dw/dh pair-test). The remaining **9 are standalone diagram SVGs** (figures #01/02/03/17/21/23/26/27/29) &#8212; these have **no img sibling** and fall outside the img-vs-overlay-svg pair-test **by construction**, exactly as the kickoff note anticipated. They carry no misregistration risk (the SVG IS the figure; there is no raster to register against). DOM img total **20** = 19 overlay-bearing PNGs + the **#28 hero** (`project_reference_render`, PNG, **NO overlay** by design). marker 0, wrapper relative divs 20. The **1 live mermaid block** renders one further svg at runtime (not in the static 28 count); it rendered cleanly with 0 errors on every combo.

---

## Cleared artifacts (investigated, confirmed NOT defects)

1. **&#124;dw&#124; up to 0.08px at 414.** Sub-pixel width residue from fractional downscale of wide source PNGs into a 414px column; &#124;dx&#124;/&#124;dy&#124;/&#124;dh&#124; all 0.00, so registration is exact. Same benign band recorded on L05&#8211;L17. Not a defect.
2. **Local-ESM mermaid + `http://127.0.0.1` origin.** Required because Chromium CORS-blocks ESM module imports over `file://` (origin `null`); the live page loads mermaid from `https://cdn.jsdelivr.net`, where this restriction does not apply. Re-pointing to the local 10.9.6 dist + serving over a real origin reproduces the production load path. mermaid 1/1/0 on every combo. Harness-environment constraint, not a page property.

---

## Closeout

- **No edits to the real HTML.** `lesson_18_eevee_realtime_rendering.html` stays at **291,874 B**, em-dash **6**, figure 29/29, figcaption 29/29, img 20, svg 28/28, marker 0, mermaid 1, color222 0, 12 section ids no dups &#8212; unchanged from the P10 sign-off.
- **L18 = figure-complete (29/29) + browser-QA PASS/CLEAN.** Brought to the same done-state as L05&#8211;L17.
- **Standing browser-QA queue:** the older-lesson sweep (L05&#8211;L09, L11 1024-width) remains deprioritized/open as before &#8212; L18 does not add to it.
- **DEFERRED (not part of QA, still open):** body-defect pass on the "Render Settings Balance" lesson-BODY prose, which still lists legacy Bloom/SSR/AO/Shadow Cube Size/Shadow Cascade Size (all gone in 5.1.1 EEVEE Next). Separate from figure work.
