# Blender Course &middot; Next chat: **Lesson 11 Phase 2 PRODUCTION** (`#energy-conservation`: #4, #5, #30; INTEGRATION inline + #3 reuse-by-ref per D1). **L11 PHASE 1 COMPLETE &mdash; 3/30 produced / 3/30 integrated.**

**Last updated:** 2026-06-04 (**LESSON 11 PHASE 1 COMPLETE &mdash; 3/30 produced / 3/30 integrated.** `#what-is-pbr` done: #1 `pbr_workflow_comparison` PNG + `c1` overlay, #2 `three_pillars_diagram` inline SVG `tp`, #3 `light_energy_flowchart` inline SVG `le` (produce-once for the D1 P2 reuse). HTML 195,546 &rarr; 218,762 B. All locked plan elements UNCHANGED: 14 SVG / 16 PNG split, 8-phase plan, D1/D2, the #14 produce-in-P4-A / integrate-in-P5 split, id-prefix + `c{N}` registries. L10 remains fully CLOSED &mdash; 30/30 + browser-QA COMPLETE / CLEAN; nothing pending in L10.)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Next step: Lesson 11 Phase 2 PRODUCTION

L11 planning is locked in `lesson_11_integration_progress.md` and P1 (`#what-is-pbr`) is complete (3/30). L10 is fully closed; nothing pending in L10. The one forward path:

**Lesson 11 Phase 2 PRODUCTION** &mdash; `#energy-conservation`: produce #4 (energy_budget_examples, PNG), #5 (roughness_energy_distribution, PNG, **color-dependent** warm glow), #30 (energy_white_room_test, PNG, **color-dependent**). 3-figure phase &rarr; single PRODUCTION chat, INTEGRATION inline in the same chat. **#3 (`le`) is reused-by-reference at P2 INTEGRATION** (`#energy-conservation` energy-distribution explanation) per D1: re-insert the same inlined `le` SVG with a distinct 2nd-ref figcaption, ids reused NOT renamed, no re-render. The `le` SVG to copy from is already in the L11 HTML (inside the `#what-is-pbr` PBR Benefits card) and on disk at `images\lesson_11_03_light_energy_flowchart.svg`.

P2 placement map (from the requirements doc): after Golden Rule card &rarr; #4 &middot; within energy distribution explanation &rarr; **#3 reuse** &middot; after roughness relationship &rarr; #5 &middot; within testing section &rarr; #30. Overlays to build at P2 INTEGRATION: `c5` (2 caption pills + centered `Same Total Energy` band), `c30` (2 panel labels CORRECT positive-green / INCORRECT warning-red + red-X). #4 is an infographic with no natural render &mdash; PRODUCTION-time sourcing call (Pillow-vignette host per the P1 #1 precedent, or Canva/Adobe). #5 + #30 are color-dependent renders &mdash; use the v6 LD17 recipe (F12 `render.render`, Standard view transform, 0.05 world, locked marker/emission values; RESTORE AgX + base values at chat close).

After P2: P3 `#fresnel-effect` (#6, #7, #8) &middot; **P4 `#microfacet-theory`** (#9/#10/#11/#14 SVG + #12/#13/#26 PNG &mdash; the &ge;6 phase: PRODUCTION 2 sub-chats, INTEGRATION its own chat; #14 produced here but integrated in P5; #26 reused-by-ref in P7) &middot; P5 `#metallic-workflow` (#14 integrate + #15/#16/#17) &middot; P6 `#albedo-values` (#18/#19/#20/#21) &middot; **P7 `#advanced-pbr-parameters`** (#22/#25 SVG + #23/#24/#27 PNG + #26 reuse &mdash; the &ge;5 phase: PRODUCTION 2 sub-chats, INTEGRATION borderline-inline) &middot; P8 `#project` (#28/#29). `#summary` carries no figures &mdash; no phase.

**Carry forward all locked rules (below + v6 LD1&ndash;21).**

---

## Read at chat start

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_11_integration_progress.md` (the L11 plan + Status log; P1 logged COMPLETE, header at PHASE 1 COMPLETE / 3-30; the figure inventory, 14/16 split, 8-phase plan, D1/D2, the #14 produce-in-P4-A / integrate-in-P5 split, and the id-prefix + `c{N}` registries all locked)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_11_image_requirements.md` (the 30-figure source spec + AI prompts + placement-in-HTML map per section id)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (v6 &mdash; current; locked conventions LD1&ndash;21)
5. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules)

---

## L11 outcome so far

P1 `#what-is-pbr` (3) &check; COMPLETE &mdash; #1 PNG + `c1`, #2 inline SVG `tp`, #3 inline SVG `le` (D1 produce-once). **3/30 produced / 3/30 integrated &middot; HTML 218,762 B.** P1 craft notes: #1 sourced via the Pillow-vignette overlay-host route (built Claude-side, written to WSL through the Pillow bridge since `write_file` is text-only and there is no Claude&rarr;WSL binary copy in the loaded toolset); `c1` pixel-verified 1:1 over the host PNG via cairosvg composite before commit; both inline SVGs passed the cairosvg light+dark 1:1 check before commit. No type-flips. Remaining: P2&ndash;P8 (27 figures), per the phase plan.

---

## L09 outcome (all 10 phases COMPLETE)

P1 `#snapping-system` (3) &check; &middot; P2 `#grid-snapping` (4) &check; &middot; P3 `#vertex-snapping` (5) &check; &middot; P4 `#numerical-input` (7) &check; &middot; P5 `#measurement-tools` (5) &check; &middot; P6 `#unit-systems` (3) &check; &middot; P7 `#symmetry-workflows` (8) &check; &middot; P8 `#professional-tips` (11) &check; &middot; P9 `#project` (5) &check; &middot; **P10 `#summary` (4) &check; COMPLETE**. **55/55 produced / 55/55 integrated &middot; HTML 502,906 B.**

---

## Standing deferred follow-ups (NOT part of the doc-maintenance sweep)

- **Browser-QA pass for Lesson 11** (NEW &mdash; the 3 P1 figures: #1 `c1` overlay alignment over the host PNG, #2 `tp` + #3 `le` inline SVGs in dark + light at 1920/1024/414. Verify the `c1` step labels stay inside their clear bands at all widths, the header pills clear the color rails, and both inline SVGs inherit `currentColor` correctly in dark mode. Accumulate with later L11 phases.)
- **Browser-QA pass for Lesson 09** (all 55 integrated figures &middot; dark + light, 1920/1024/414 widths). Newest = #52&ndash;#55 (`#summary`): the 3 inline SVGs #52 `tk` / #53 `sr` / #55 `qc` + the #54 `c54` warning-vignette overlay. Plus #47&ndash;#51 (`#project`) and the earlier-phase figures.
- Browser QA pass for Lessons 05 / 06 / 07 / 08 (accumulated; L08 image work COMPLETE 40/40, PARKED).
- Browser QA pass for Lesson 07 &middot; HELD-OPEN flags only (#20 / #21 menu-cascade overlays).
- Optional progress-doc archive sweeps for Lessons 05 / 06 / 07 / 08.
- Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html` (low-priority).
- **Browser-QA pass for Lesson 10** &mdash; DONE / CLEARED 2026-06-03 (COMPLETE / CLEAN, recorded in `lesson_10_integration_progress.md`).

---

## Locked rules carry forward

Full list in `lesson_06_completion_handoff.md` and the carry-forward blocks in `lesson_07/08/09/10_integration_progress.md` + the L11 progress-doc Locked-rules block. All UNCHANGED: WSL `\\wsl$\Ubuntu\` paths only (never `\\wsl.localhost\`); `Filesystem:edit_file` dry-run &rarr; commit &rarr; `get_file_info` verify; `Filesystem:write_file` for new files / full-doc overwrites (never `create_file`); `copy_file_user_to_claude` to refresh the working HTML copy before grep/sed + verify anchor uniqueness first; no new em-dashes (middle-dot `&#183;` entities; pre-existing em/en-dashes preserved verbatim through exact anchors; content entities `&#215;`/`&#8211;`/`&#8594;`/`&#183;` etc are fine; NOTE the L11 body carries pre-existing em-dashes &mdash; preserve every one); `tool_search` for deferred tools; brand palette governs all overlays/SVGs; inline-SVG conventions (strip root `color="#222"` on inlining, re-indent, collapse multi-line attrs, prune decorative comments, keep structural comments, preserve role/aria/title/desc/id); figure indentation depth from parent container (section-level 20-space; card-internal deeper-indent 24-space); PNG overlay = wrapper-div + overlay-SVG, viewBox = PNG pixels, NO baked labels; pixel-verify every PNG overlay via cairosvg-composite-over-PNG (Claude-side) or PIL-composite (bridge-side) BEFORE commit; color-dependent render recipe v6 LD17 (F12 `render.render` not `render.opengl`; AgX&rarr;Standard view transform; 0.05 world; locked L09Orange/L09Cyan marker values; RESTORE AgX + base values at close) for #5 / #15 / #30; theory-heavy sourcing (Pillow-vignette host OR Canva/Adobe raster) is a PRODUCTION-time call per figure; BlenderMCP lowercase `blender:execute_blender_code` + clean-scene-manually via `bpy.data.objects.remove` + BLENDER_EEVEE (EEVEE_NEXT&rarr;EEVEE fallback) + Cycles for off-screen reflection/refraction; NEVER `read_factory_settings`; inline all render helpers per call (namespaces do not persist); scene state between PRODUCTION chats is always a clean base (RESTORE at close; STOP if a leftover `_WORK` collection or hidden base objects are found); pre-plan sub-chat splits for &ge;5-figure phases (P4, P7) + INTEGRATION-own-chat for &ge;6 (P4); plan-lock before build; warn Ray before context tightens rather than letting automatic compaction happen.

---


---
