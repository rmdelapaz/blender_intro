# Blender Course · Next chat: Lesson 09 Phase 7 PRODUCTION (`#symmetry-workflows` · 8 figures #28–#35 · sub-chat split per ≥5 + INTEGRATION own chat per ≥6)

**Last updated:** 2026-05-31 (L09 Phase 6 INTEGRATION **COMPLETE** · all 3 `#unit-systems` figures integrated [#25 `c25` / #26 inline SVG `rd` / #27 `c27`] + the DECISION 2 #26 `#why-precision` 2nd-ref plain `<img>` · HTML 332,237 → 347,757 B · 27 of 55 produced / 27 of 55 integrated · DECISION 2 now fully closed)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Next step: Lesson 09 Phase 7 PRODUCTION (`#symmetry-workflows`)

`#symmetry-workflows` · **8 figures** #28 `c28` mirror-modifier-setup · #29 `c29` mirror-workflow (4-panel) · #30 `c30` center-seam-gap (warning-vs-positive cand.) · #31 `c31` S-X-0-flatten (synthetic cand.) · #32 `c32` x-mirror-interface · #33 `c33` multi-axis-mirror (3-panel) · #34 `c34` symmetrize-before/after (warning-vs-positive cand.) · #35 `c35` origin-point-position (warning-vs-positive cand.). **≥5 → sub-chat split REQUIRED** (capture-method boundary: viewport renders vs UI chrome vs any synthetic; lock membership at PRODUCTION kickoff). **≥6 → Phase 7 INTEGRATION is its OWN chat** (plan-lock + commits separate from PRODUCTION). This next chat = **Phase 7 PRODUCTION** (likely first sub-chat).

**At kickoff:** verify the live Blender scene + clear demo meshes via `bpy.data.objects.remove` (NEVER `read_factory_settings`); orphan-purge `do_local_ids=False` or rebuild the 6 base/helper mats after; scene should hold the documented L09 base · 4 objs `L09Cam` @ (7.5,−9.0,5.8) lens50 / `L09CamTarget` @ (0,0,1.0) / `L09Key` / `L09Fill` + 6 mats (`L09Cyan`/`L09DemoGrey`/`L09FloorDark`/`L09Ghost`/`L09GridLine`/`L09Orange`), world 0.88/str1.0, AgX/look None, BLENDER_EEVEE. **Color-dependent renders → locked recipe:** `view_settings.view_transform='Standard'`+`look='None'`, world 0.05/str1.0, `L09Orange` (1.0,0.30,0.0)/emis1.2, `L09Cyan` (0.16,0.50,1.0)/emis1.4, `L09GridLine` emis0.9, F12 `bpy.ops.render.render(write_still=True)` (NOT `render.opengl`), RESTORE AgX + world 0.88 + base mats at close. **UI chrome → Win+Shift+S manual-snip path** (the P4-A/P5-A transient-popover/modal limit: an open popover or live modal can't be held across the bridge; Ray clicks to dismiss any stuck popover first). **NO baked labels** (all callouts are INTEGRATION overlay decisions). Grid figures use the real-line-geometry grid-floor builder (viewport grid doesn't render).

---

## Read at chat start

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_integration_progress.md` (placement table · SVG-vs-PNG split · 10-phase plan · prefix registry · locked-rules carry-forward · DECISIONS PENDING · per-phase Status · START HERE for L09; latest = Phase 6 INTEGRATION COMPLETE, 27/55 produced / 27/55 integrated, HTML 347,757 B)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules · unchanged)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_08_integration_progress.md` (the most recent COMPLETE pipeline being mirrored · all Status-bullet conventions)
5. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_image_requirements.md` `## Image Placement Suggestions in HTML` `### Section: Symmetry and Mirror Modeling` + items #28–#35 + their AI-prompt blocks (Prompts 28–35) + the `## File Naming Convention` + the `## SVG Diagram Recommendations` (note: none of #28–#35 are SVG · all 8 are PNG)

---

## DECISIONS PENDING (full text in `lesson_09_integration_progress.md` · none block Phase 7)

1. **SVG count 12 vs 13 (#44).** Naming table assigns `.svg` to #44 (modular-modeling-principles); rec section lists only 12. Proposed: flip #44 → hand-coded SVG `mk` (→ 13 SVG / 42 PNG). Due Phase 8.
3. **10-phase plan** (counts 3/4/5/7/5/3/8/11/5/4 = 55). Proposed as-written; phases 8–10 adjustable as each comes up.

(DECISION 2 · #1/#26 dual-placement · is now FULLY CLOSED: #1 `#why-precision` duplicate DROPPED at Phase 1; #26 `#why-precision` 2nd-ref added at Phase 6 INTEGRATION.)

---

## L09 phase plan (proposed · section-aligned · 10 phases · in `lesson_09_integration_progress.md`)

P1 `#snapping-system` (3) ✓ · P2 `#grid-snapping` (4) ✓ · P3 `#vertex-snapping` (5†) ✓ · P4 `#numerical-input` (7†‡) ✓ · P5 `#measurement-tools` (5†) ✓ · P6 `#unit-systems` (3) ✓ · **P7 `#symmetry-workflows` (8†‡) ← NEXT** · P8 `#professional-tips` (11†‡) · P9 `#project` (5†) · P10 `#summary` (4). † = sub-chat split (≥5). ‡ = INTEGRATION plan-lock its OWN chat (≥6). `#why-precision` hosts only reused references (#26 added P6) · not a standalone phase.

---

## Standing deferred follow-ups (do NOT close in the next PRODUCTION/INTEGRATION chat)

- **Optional browser-QA pass for Lesson 08** across the accumulated standing estimated-position flags. L08 image work is COMPLETE (40/40); PARKED, NOT part of L09.
- Browser QA pass for Lesson 07 · HELD-OPEN flags only (#20 / #21 menu-cascade overlays).
- Browser QA pass for Lesson 06 (50 figures) and Lesson 05.
- Optional progress-doc archive sweeps for Lessons 05 and 06.
- `IMAGE_STYLE_GUIDE.md` v6 revision (fold in all L07 + L08 + L09 PRODUCTION/INTEGRATION discoveries).
- Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html` (low-priority).

---

## Locked rules carry forward

Full list in `lesson_06_completion_handoff.md` and the carry-forward blocks in `lesson_07/08/09_integration_progress.md`. All carry into L09 UNCHANGED: WSL `\\wsl$\Ubuntu\` paths only; `edit_file` dry-run → commit → `get_file_info` verify; `Filesystem:write_file` for new files (never `create_file`); `copy_file_user_to_claude` to refresh the working HTML copy before grep/sed + verify anchor uniqueness first; no new em-dashes (middle-dot `·` separators; pre-existing em/en-dashes preserved verbatim through exact anchors; content entities `&#215;`/`&#8211;`/`&#183;` etc are fine); `tool_search` for deferred tools; brand palette governs all overlays/SVGs (requirements-doc palette is loose AI-prompt guidance only); BlenderMCP clean-scene-manually + BLENDER_EEVEE fallback; composite-overlay fs formula `fs = round(22 × viewBox_w / 1920)` + small-frame fs-floor 16 + c12-precedent geometry + all variant types + inline-SVG conventions + indent-depth col 20 + all L07/L08/L09 capture-path + production-craft discoveries (AgX-is-the-cause for washed markers → Standard transform; F12 render not render.opengl for color-dependent; Win+Shift+S for transient popovers/modals; pixel-verify every PNG overlay via Pillow scan + cairosvg-over-PNG composite BEFORE commit); NO baked labels; pre-plan sub-chat splits for ≥5-figure phases + INTEGRATION-own-chat for ≥6; warn Ray before context tightens.

---
