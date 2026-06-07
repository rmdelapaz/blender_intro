# Blender Course &middot; Next chat: **L13 P8 PRODUCTION** (`lesson_13_texture_painting_basics.html` &middot; `#advanced-painting`: produce #15 `c15` mask_tool_visualization [anchor by EXACT `<h3>Masking</h3>`, bare `Masking` non-unique count 3] + #26 `c26` stencil_painting_setup [Win+Shift+S stencil overlay] + #22 `c22` brush_texture_examples [SKIP-candidate, self-labeling]). **L13 P7 PRODUCTION + INTEGRATION COMPLETE 2026-06-06 &mdash; 21/30 produced / 22/30 integrated [21 distinct + 1 reuse-by-ref] &middot; HTML 272,613 &rarr; 291,630 B; all four `#texture-slots` figures + #20 reuse-by-ref: #11 `ts` multiple_texture_slots inline SVG (shader node graph, root `color="#222"` stripped, no `c{N}`) + #27 `c27` roughness_map_example / #28 `c28` metallic_map_example / #12 `c12` 3d_2d_sync_view PNG (all 1528&times;760, overlays viewBox 0 0 1528 760 / fs 18, pixel-verified LD19) + #20 reuse-by-ref second placement (same PNG + same `c20`, id NOT renamed, D1). #11 after `<h3>What Are Texture Slots?</h3>`; #20-ref after the Common-texture-slots card before the mermaid; #27/#28/#12 after their h3s. Post-commit integrity clean (em-dash 25, 22 figure / 13 img / 22 svg open=close, `ts`/`c27`/`c28`/`c12` ids present, second `c20` id-not-renamed, zero `color="#222"` leaked, 13 section ids no dups, all 5 anchors count=1).** L13 P6 COMPLETE 2026-06-06 (17/30, #16 `cw` + #17 `hv` + #23 `mc` inline SVG into `#color-management`). L13 P5 COMPLETE 2026-06-06 (14/30, #7 `c7` + #9 `c9` + #8 `c8` + #21 `c21` PNG into `#painting-techniques`). L13 P4 COMPLETE 2026-06-06 (10/30, #4 `br` + #3 `bf` inline SVG + #5 `c5` + #29 `c29` PNG into `#brush-basics`). L13 P3 COMPLETE 2026-06-06 (6/30, #10 `rc` + #30 `sw` into `#creating-textures`; #30 FORMAT CALL RESOLVED: inline SVG, `c30` DROPPED). L13 P2 COMPLETE 2026-06-06 (4/30, #2 `c2` 6-callout + #6 `c6` into `#texture-painting-workspace`). L13 P1 COMPLETE 2026-06-06 (2/30, #1 `pp` SVG + #20 `c20` PNG into `#what-is-texture-painting`). L13 PLANNING COMPLETE 2026-06-06 (8 SVG / 22 PNG, 10 single-chat phases P1&rarr;P10, live HTML clean). L12 COMPLETE (28/28 + browser-QA PASS/CLEAN 2026-06-05). L11 COMPLETE (30/30 + browser-QA PASS/CLEAN 2026-06-05).

**Last updated:** 2026-06-06 (**L13 P7 PRODUCTION + INTEGRATION COMPLETE.** `lesson_13_texture_painting_basics.html` 272,613 &rarr; 291,630 B; 21/30 produced / 22/30 integrated [21 distinct + 1 reuse-by-ref]. Full detail in `lesson_13_integration_progress.md` Status log, 2026-06-06 P7 entry. No BlenderMCP scene state carried (PRODUCTION was prior; clean AgX base unchanged). Next: L13 P8 PRODUCTION.)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Next step: L13 P8 PRODUCTION

**L13 (Texture Painting Basics) was inserted ahead of the standing L09 / L05&ndash;L08 / L10&ndash;L11 browser-QA follow-ups** &mdash; those bullets remain OPEN, untouched, in Standing deferred follow-ups below. L13 PLANNING is COMPLETE (2026-06-06) and **L13 P1 through P7 are COMPLETE (2026-06-06, 21/30 produced / 22/30 integrated [21 distinct + 1 reuse-by-ref], HTML 291,630 B)**: P1&ndash;P6 as previously logged; **P7 inlined #11 `ts` multiple_texture_slots shader-node SVG + inserted #27 `c27` / #28 `c28` / #12 `c12` PNGs (all 1528&times;760) + the #20 reuse-by-ref second placement (same PNG + same `c20`, id NOT renamed, D1) into `#texture-slots`.** The live HTML is clean (no duplicate ids, no broken TOC links), the 8 SVG / 22 PNG split and the 10 figure-bearing phases (P1&rarr;P10, all single-chat with inline INTEGRATION) are locked in `lesson_13_integration_progress.md`. The one reuse-by-ref is now resolved (#20: produced P1 / ref P7, both placements live). No open format calls remain.

**Next: L13 P8 PRODUCTION** &mdash; `#advanced-painting`: produce #15 `mask_tool_visualization` (PNG; before/after masked-vs-paintable composite; overlay `c15` MASKED / PAINTABLE &mdash; **anchor by the EXACT `<h3>Masking</h3>` tag: bare `Masking` is non-unique, count 3 doc-wide** [the `<h3>Masking</h3>` + `<h3>Cavity Masking</h3>` substring + a summary `<li>`], or extend to a multi-line span until count=1), #26 `stencil_painting_setup` (PNG; stencil overlay on the 3D model, brush cursor, stencil-mode UI; Win+Shift+S overlay-freeze candidate per LD16/LD20; overlay `c26` stencil-projects callout), #22 `brush_texture_examples` (PNG; 4&times;2 brush-texture + stroke-result grid; overlay `c22` 4 labels OR self-labeling &rarr; SKIP, decide at INTEGRATION). Route per figure D4 at PRODUCTION. 3 figures = below the &ge;5 / &ge;6 thresholds, so single chat with inline INTEGRATION; break out only if context tightens. Brand palette governs per D5 (NOT the spec's `#ff8c00`/`#4CAF50`). Read at chat start: `session.md`, `lesson_13_integration_progress.md`, `lesson_13_image_requirements.md`, `images/IMAGE_STYLE_GUIDE.md` v6.

### Read at chat start (for any L13 phase)

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_13_integration_progress.md` (the L13 plan + Status log; the 8/22 split, 10-phase plan, the identity section-id mapping table, the `Masking`-non-unique anchor note, the #20 reuse-by-ref + #30 open-format calls, the id-prefix + `c{N}` registries all LOCKED)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_13_image_requirements.md` (the 30-figure v1.0 spec + AI prompts + per-section placement map &mdash; NOTE its palette hexes are AI-art hints; brand palette governs inline SVG / overlays per D5)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (v6 &mdash; current; locked conventions LD1&ndash;21; LD14&ndash;16/LD20 UI-capture craft dominates L13)
5. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules)


---

## Read at chat start (for any L12 phase)

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_12_integration_progress.md` (the L12 plan + Status log; the 6/22 split, 7-phase plan, the requirements-doc-id&rarr;real-id mapping table, the duplicate-`uv-editor-interface` Section-A rule, the broken-TOC note, the id-prefix + `c{N}` registries all LOCKED)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_12_image_requirements.md` (the 28-figure source spec + AI prompts + per-section placement map &mdash; NOTE its section ids do not all match the live HTML; use the progress-doc mapping table)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (v6 &mdash; current; locked conventions LD1&ndash;21)
5. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules + the UI-capture craft that dominates L12)

---

## L12 plan summary (all 7 figure-bearing phases)

P1 `#what-are-uvs` (5: #1 `cs` / #2 `gd` / #3 `mp` SVG, #4, #5 PNG) **&check; COMPLETE 5/5 integrated** &middot; P2 `#uv-editor-interface` **Section A** (5: #6, #7, #8, #9, #26) **&check; COMPLETE 5/5 integrated** (c6/c7/c9/c26 overlays built + verified; c8 SKIP self-labeling) &middot; P3 `#seams-and-unwrapping` (5: #11 `sp` / #12 `cu` / #13 `cy` / #14 `ss` SVG + #10 PNG) **&check; COMPLETE 5/5 integrated** &middot; P4 `#unwrapping-methods` (2: #15, #16 PNG, `c15`/`c16`) **&check; COMPLETE 2/2 integrated** &middot; P5 `#manipulating-uv-islands` (5: #17, #18, #19, #20, #21) **&check; COMPLETE 5/5 integrated** (c17&ndash;c21 overlays built + verified; c19 BUILT-not-SKIP) &middot; P6 `#optimizing-uvs` (4: #22, #23, #24, #25) **&check; COMPLETE 4/4 integrated** (c22/c23/c24/c25 overlays built + verified; #24 grouped after #23) &middot; P7 `#hands-on-project` (2: #27, #28) **&check; COMPLETE 2/2 integrated** (c27/c28 overlays built + verified; #28 island-label deviation flagged). Duplicate `uv-editor-interface` Section B + `common-mistakes` + `summary` + `whats-next` carry no figures, no phase. **L12 COMPLETE &mdash; 28/28 produced / 28/28 integrated &middot; HTML 295,089 B.**

---

## L11 outcome (all 8 figure-bearing phases COMPLETE)

P1 `#what-is-pbr` (3) &check; &middot; P2 `#energy-conservation` (3 + #3 reuse) &check; &middot; P3 `#fresnel-effect` (3) &check; &middot; P4 `#microfacet-theory` (6, own INTEGRATION chat) &check; &middot; P5 `#metallic-workflow` (#14 + #15/#16/#17) &check; &middot; P6 `#albedo-values` (#18/#19/#20/#21) &check; &middot; P7 `#advanced-pbr-parameters` (#22/#23/#24/#25/#27 + #26 reuse) &check; &middot; P8 `#project` (#28/#29) &check; **COMPLETE**. `#summary` no figures. **30/30 produced / 30/30 integrated &middot; HTML 387,921 B.**

---

## L09 outcome (all 10 phases COMPLETE)

P1 `#snapping-system` (3) &check; &middot; P2 `#grid-snapping` (4) &check; &middot; P3 `#vertex-snapping` (5) &check; &middot; P4 `#numerical-input` (7) &check; &middot; P5 `#measurement-tools` (5) &check; &middot; P6 `#unit-systems` (3) &check; &middot; P7 `#symmetry-workflows` (8) &check; &middot; P8 `#professional-tips` (11) &check; &middot; P9 `#project` (5) &check; &middot; P10 `#summary` (4) &check; **COMPLETE**. **55/55 produced / 55/55 integrated &middot; HTML 502,906 B.**

---

## Standing deferred follow-ups

- **Lesson 12 lesson-body defects (surfaced in L12 planning, NOT image work):** (1) duplicate `id="uv-editor-interface"` on two `<section>` tags (line 254 + line 1311 &mdash; rename the second + update TOC); (2) broken TOC links (`#minimizing-distortion` / `#uv-layout-packing` / `#practical-unwrapping` / `#project` link to non-existent anchors; re-point to `#manipulating-uv-islands` / `#optimizing-uvs` / `#hands-on-project`). Both need a lesson-body QA pass; figure work does not touch them. **(The L12 figure browser-QA itself is DONE / CLEARED 2026-06-05 &mdash; COMPLETE / CLEAN; these two lesson-body defects remain OPEN and were confirmed still-present during that QA.)**
- **Browser-QA pass for Lesson 11** &mdash; DONE / CLEARED 2026-06-05 (PASS / CLEAN). 1024 not run (left for a follow-up sweep, no defects expected).
- **Browser-QA pass for Lesson 09** (all 55 figures &middot; dark + light, 1920/1024/414).
- Browser QA pass for Lessons 05 / 06 / 07 / 08 (accumulated; L08 image work COMPLETE 40/40, PARKED).
- Browser QA pass for Lesson 07 &middot; HELD-OPEN flags only (#20 / #21 menu-cascade overlays).
- Optional progress-doc archive sweeps for Lessons 05 / 06 / 07 / 08 / 11.
- Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html` (low-priority).
- **Browser-QA pass for Lesson 10** &mdash; DONE / CLEARED 2026-06-03 (COMPLETE / CLEAN).

---

## Locked rules carry forward

Full list in `lesson_06_completion_handoff.md` and the carry-forward blocks in `lesson_07/08/09/10/11_integration_progress.md` + the L12 progress-doc Locked-rules block. All UNCHANGED: WSL `\\wsl$\Ubuntu\` paths only (never `\\wsl.localhost\`); `Filesystem:edit_file` dry-run &rarr; commit &rarr; `get_file_info` verify; `Filesystem:write_file` for new files / full-doc overwrites (never `create_file`); `copy_file_user_to_claude` to refresh the working HTML copy before grep/sed + **verify anchor GLOBAL uniqueness first** (extra important in L12: many non-unique placement-map h3 strings + the duplicate `uv-editor-interface` id &mdash; anchor P2 figures by unique TEXT, extend to 3&ndash;8 lines until count = 1, never by section id); no new em-dashes (middle-dot `&#183;` entities; pre-existing em/en-dashes preserved verbatim through exact anchors; content entities `&#215;`/`&#8211;`/`&#8594;`/`&#183;` fine); `tool_search` for deferred tools; brand palette governs all overlays/SVGs; inline-SVG conventions (strip root `color="#222"` on inlining, re-indent figure col20 / svg col24 / children col28 / deeper col32, collapse multi-line attrs, prune decorative comments, keep structural comments, preserve role/aria/title/desc/id); figure indentation depth from parent container; PNG overlay = wrapper-div + overlay-SVG, viewBox = PNG pixels, NO baked labels; **UI-capture craft dominates L12** (v6 LD14&ndash;16/LD20: modal status bar authoritative for bindings; full-window local-tempdir `screen.screenshot` carries panel/popover overlays then deterministic area crop &mdash; UNC write truncates to 0 bytes, capture to Windows tempdir then Pillow&rarr;WSL; Win+Shift+S overlay-freeze for transient popovers saved direct to WSL `images/`; `plane.show_wire = True` before cut/seam captures; clean-canvas viewport staging hides toolbar/N-panel/nav-gizmo); color-dependent render recipe v6 LD17 applies only if a PRODUCTION review shows a stretch/seam color washing (not pre-forced &mdash; UV/seam/stretch colors come from Blender's theme); pixel-verify every PNG overlay via cairosvg-composite (Claude-side) or PIL-composite (bridge-side) BEFORE commit; theory/infographic sourcing (Pillow-vignette host OR Canva/Adobe raster) is a PRODUCTION-time call per figure; BlenderMCP lowercase `blender:execute_blender_code` + clean-scene-manually via `bpy.data.objects.remove` + BLENDER_EEVEE (EEVEE_NEXT&rarr;EEVEE fallback) + Cycles for off-screen reflection/refraction; NEVER `read_factory_settings`; inline all render helpers per call; scene state between PRODUCTION chats is always a clean base (RESTORE at close; STOP if a leftover `_WORK` collection or hidden base objects are found); pre-plan sub-chat splits for &ge;5-figure phases (P1/P2/P3/P5) + INTEGRATION-own-chat for &ge;6 (P2 promoted by load); plan-lock before build; warn Ray before context tightens rather than letting automatic compaction happen.

---


---
