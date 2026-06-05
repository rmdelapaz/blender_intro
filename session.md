# Blender Course &middot; Next chat: **L12 P5 INTEGRATION** (`#manipulating-uv-islands`: integrate all 5 P5 figures #17/#18/#19/#20/#21 inline &mdash; INTEGRATION). **L12 P5 PRODUCTION COMPLETE &mdash; 22/28 produced / 17/28 integrated &middot; HTML 268,485 B.**

**Last updated:** 2026-06-05 (**L12 P5 PRODUCTION sub-chat B COMPLETE.** Resumed mid-sub-chat (#19/#20 produced-on-disk-but-unlogged, #21 in-progress). Logged #19 `average_island_scale` PNG 1574&times;924 + #20 `uv_pinning_example` PNG 784&times;924, then finished #21 `uv_mirroring_setup` PNG 1573&times;924: symmetric box (98v/96f), +X half mesh-selected under `use_uv_select_sync=True` so its UV island draws lit directly over the identical unlit &minus;X half in one shared 0&ndash;1 region &mdash; the genuine mirror overlap made legible by selection contrast, no UVs moved; clean dark canvas + PIL 2-panel composite. All QA-viewed, no baked labels (`c19`/`c20`/`c21` ride at INTEGRATION). One BlenderMCP session: in-progress-state check at open (no STOP) + RESTORE + clean-base re-verify at close. See `lesson_12_integration_progress.md` Status log for full deltas.)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Next step: L12 P5 INTEGRATION (`#manipulating-uv-islands`, inline)

Lesson 11 image work is COMPLETE (30/30; `lesson_11_pbr_materials_explained.html` 387,921 B). Lesson 12: **P1&ndash;P4 COMPLETE + P5 PRODUCTION COMPLETE (22/28 produced / 17/28 integrated; HTML 268,485 B).** All 5 P5 figures are produced (sub-chat A: #17 `uv_manipulation_tools` + #18 `pack_islands_before_after`; sub-chat B: #19 `average_island_scale` + #20 `uv_pinning_example` + #21 `uv_mirroring_setup`). The next chat is **P5 INTEGRATION** &mdash; integrate all 5 P5 figures inline into `#manipulating-uv-islands` (the borderline-5 phase rides inline; break INTEGRATION out to its own chat only if context tightens). All overlays (`c17`/`c18`/`c19`/`c20`/`c21`) ride at INTEGRATION and are built against the actual produced PNG pixels; `c19` is a reserved-default-SKIP self-labeling candidate (decide at INTEGRATION). All specs, the `c{N}` registry, the duplicate-`uv-editor-interface` Section-B / broken-TOC out-of-scope rule, the anchor-by-unique-text rule (several P5 placement-map strings are known non-unique &mdash; "UV Islands" 31&times;, "Pack Islands" 19&times;, "Mirror UVs" 3&times; &mdash; so extend to multi-line anchors until count=1), and the inline-SVG + PNG-overlay conventions are in `lesson_12_integration_progress.md` &mdash; read them, don't restate.


---

## Read at chat start (for any L12 phase)

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_12_integration_progress.md` (the L12 plan + Status log; the 6/22 split, 7-phase plan, the requirements-doc-id&rarr;real-id mapping table, the duplicate-`uv-editor-interface` Section-A rule, the broken-TOC note, the id-prefix + `c{N}` registries all LOCKED)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_12_image_requirements.md` (the 28-figure source spec + AI prompts + per-section placement map &mdash; NOTE its section ids do not all match the live HTML; use the progress-doc mapping table)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (v6 &mdash; current; locked conventions LD1&ndash;21)
5. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules + the UI-capture craft that dominates L12)

---

## L12 plan summary (all 7 figure-bearing phases)

P1 `#what-are-uvs` (5: #1 `cs` / #2 `gd` / #3 `mp` SVG, #4, #5 PNG) **&check; COMPLETE 5/5 integrated** &middot; P2 `#uv-editor-interface` **Section A** (5: #6, #7, #8, #9, #26) **&check; COMPLETE 5/5 integrated** (c6/c7/c9/c26 overlays built + verified; c8 SKIP self-labeling) &middot; P3 `#seams-and-unwrapping` (5: #11 `sp` / #12 `cu` / #13 `cy` / #14 `ss` SVG + #10 PNG) **&check; COMPLETE 5/5 integrated** &middot; P4 `#unwrapping-methods` (2: #15, #16 PNG, `c15`/`c16`) **&check; COMPLETE 2/2 integrated** &middot; P5 `#manipulating-uv-islands` (5: #17, #18, #19, #20, #21) **PRODUCTION COMPLETE 5/5 produced; INTEGRATION &larr; NEXT** &middot; P6 `#optimizing-uvs` (4: #22, #23, #24, #25) &middot; P7 `#hands-on-project` (2: #27, #28). Duplicate `uv-editor-interface` Section B + `common-mistakes` + `summary` + `whats-next` carry no figures, no phase. **22/28 produced / 17/28 integrated &middot; HTML 268,485 B.**

---

## L11 outcome (all 8 figure-bearing phases COMPLETE)

P1 `#what-is-pbr` (3) &check; &middot; P2 `#energy-conservation` (3 + #3 reuse) &check; &middot; P3 `#fresnel-effect` (3) &check; &middot; P4 `#microfacet-theory` (6, own INTEGRATION chat) &check; &middot; P5 `#metallic-workflow` (#14 + #15/#16/#17) &check; &middot; P6 `#albedo-values` (#18/#19/#20/#21) &check; &middot; P7 `#advanced-pbr-parameters` (#22/#23/#24/#25/#27 + #26 reuse) &check; &middot; P8 `#project` (#28/#29) &check; **COMPLETE**. `#summary` no figures. **30/30 produced / 30/30 integrated &middot; HTML 387,921 B.**

---

## L09 outcome (all 10 phases COMPLETE)

P1 `#snapping-system` (3) &check; &middot; P2 `#grid-snapping` (4) &check; &middot; P3 `#vertex-snapping` (5) &check; &middot; P4 `#numerical-input` (7) &check; &middot; P5 `#measurement-tools` (5) &check; &middot; P6 `#unit-systems` (3) &check; &middot; P7 `#symmetry-workflows` (8) &check; &middot; P8 `#professional-tips` (11) &check; &middot; P9 `#project` (5) &check; &middot; P10 `#summary` (4) &check; **COMPLETE**. **55/55 produced / 55/55 integrated &middot; HTML 502,906 B.**

---

## Standing deferred follow-ups

- **Lesson 12 lesson-body defects (surfaced in L12 planning, NOT image work):** (1) duplicate `id="uv-editor-interface"` on two `<section>` tags (line 254 + line 1311 &mdash; rename the second + update TOC); (2) broken TOC links (`#minimizing-distortion` / `#uv-layout-packing` / `#practical-unwrapping` / `#project` link to non-existent anchors; re-point to `#manipulating-uv-islands` / `#optimizing-uvs` / `#hands-on-project`). Both need a lesson-body QA pass; figure work does not touch them.
- **Browser-QA pass for Lesson 11** &mdash; all 30 figures, dark + light at 1920/1024/414.
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
