# Blender Course · Next chat: Lesson 09 Phase 4 PRODUCTION Sub-chat A (`#numerical-input` UI chrome #13 `c13` + #17 `c17`) then Sub-chat B (renders #14 `c14` / #16 `c16` / #19 `c19`) · Sub-chat C (#15 `me` + #18 `ra` SVGs) DONE · INTEGRATION its OWN later chat per ≥6

**Last updated:** 2026-05-29 (L09 Phase 4 PRODUCTION Sub-chat C COMPLETE · #15 `me` + #18 `ra` hand-coded SVGs produced + on-disk-verified · 14 of 55 produced / 12 of 55 integrated · HTML 271,764 B)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Next step: Lesson 09 Phase 4 PRODUCTION Sub-chats A + B (Sub-chat C done)

`#numerical-input` · 7 figures · **sub-chat split LOCKED at kickoff** (capture-method boundary): **Sub-chat C** = hand-coded SVGs #15 `me` math-expressions + #18 `ra` rotation-angles — **DONE this run** (both produced + on-disk-verified); **Sub-chat A** (next) = UI chrome #13 `c13` numerical-input header display + #17 `c17` N-panel Transform section (Location/Rotation/Scale fields) via local-tempdir `screen.screenshot` / Win+Shift+S; **Sub-chat B** = viewport renders #14 `c14` axis-locking diagram (axis-tinted cand.) + #16 `c16` relative-vs-absolute 2-panel + #19 `c19` Shift+R array. **INTEGRATION is its OWN later chat (≥6 — plan-lock + commits separated).** At each PRODUCTION kickoff (A, B) verify the live Blender scene + clear demo meshes via `bpy.data.objects.remove` (never `read_factory_settings`); the orphan purge can sweep 0-user base mats (`L09DemoGrey`/`L09Orange`/`L09Cyan`) after a mesh-clear, so purge `do_local_ids=False` or rebuild after. Scene currently holds the documented L09 base (4 objs L09Cam/L09CamTarget/L09Key/L09Fill + 6 mats L09Cyan/L09DemoGrey/L09FloorDark/L09Ghost/L09GridLine/L09Orange, world 0.88, AgX, BLENDER_EEVEE, `hat.blend` bound NOT written, no demo meshes). **Marker-color recipe (locked from P3, for Sub-chat B + #14 axis tints):** for any color-dependent emissive render set `view_transform='Standard'`+`look='None'` (AgX is what washes orange to peach), F12 `bpy.ops.render.render` (NOT `render.opengl`), then RESTORE AgX at close.

---

## Read at chat start

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_integration_progress.md` (placement table · SVG-vs-PNG split · 10-phase plan · prefix registry · locked-rules carry-forward · DECISIONS PENDING · per-phase Status — START HERE for L09; latest = Phase 3 INTEGRATION COMPLETE bullet, 12/12 integrated, HTML 271,764 B)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules · unchanged)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_08_integration_progress.md` (the most recent COMPLETE pipeline being mirrored · all Status-bullet conventions: composite-overlay fs formula, small-frame fs-floor, axis-tinted / synthetic-overlay / warning-vs-positive variants, c12-precedent geometry, indent-depth-derivation, capture-path discoveries)
5. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_image_requirements.md` `## Image Placement Suggestions in HTML` `### Section: Exact Transformations with Numerical Input` + items #13 / #14 / #15 / #16 / #17 / #18 / #19 + their AI-prompt blocks + the `## File Naming Convention`

---

## DECISIONS PENDING (full text in `lesson_09_integration_progress.md` · none block Phase 3 PRODUCTION)

1. **SVG count 12 vs 13 (#44).** Naming table assigns `.svg` to #44 (modular-modeling-principles); rec section lists only 12. Proposed: flip #44 → hand-coded SVG `mk` (→ 13 SVG / 42 PNG). Due Phase 8.
2. **#26 `#why-precision` 2nd-ref** (the remaining open half of the original DECISION 2). Proposed: produce-once / reference-twice for #26 (L08 #6 precedent), 2nd plain `<img>` in `#why-precision`. Due Phase 6 INTEGRATION. (RESOLVED at Phase 1 INTEGRATION: the #1 `#why-precision` duplicate was DROPPED — mislabeled + redundant.)
3. **10-phase plan** (counts 3/4/5/7/5/3/8/11/5/4 = 55). Proposed as-written; phases 2–10 adjustable as each comes up.

---

## L09 phase plan (proposed · section-aligned · 10 phases · in `lesson_09_integration_progress.md`)

P1 `#snapping-system` (3) · P2 `#grid-snapping` (4) · P3 `#vertex-snapping` (5†) · P4 `#numerical-input` (7†‡) · P5 `#measurement-tools` (5†) · P6 `#unit-systems` (3) · P7 `#symmetry-workflows` (8†‡) · P8 `#professional-tips` (11†‡) · P9 `#project` (5†) · P10 `#summary` (4). † = sub-chat split (≥5). ‡ = INTEGRATION plan-lock its OWN chat (≥6). `#why-precision` hosts only reused references (#1 and/or #26 · DECISION 2), added at the owning phase's INTEGRATION — not a standalone phase.

---

## Standing deferred follow-ups (do NOT close in the next PRODUCTION/INTEGRATION chat)

- **Optional browser-QA pass for Lesson 08** across the accumulated standing estimated-position flags (P2 #3/#5/#7 · P3 #8 · P4 #14/#17 · P5 #19/#20/#21 · P6 #23 · P7 #28/#32 · P8 #35; the `#summary` SVGs carry no flag). L08 image work is COMPLETE at 40/40 produced + integrated — this QA pass is the only standing L08 item, and it is PARKED, NOT part of L09.
- Browser QA pass for Lesson 07 · HELD-OPEN flags only: #20 / #21 menu-cascade overlays (need a working screenshot capture path or finer UI-element detection).
- Browser QA pass for Lesson 06 (50 figures) and Lesson 05.
- Optional progress-doc archive sweeps for Lessons 05 and 06.
- `IMAGE_STYLE_GUIDE.md` v6 revision (fold in all L07 + L08 PRODUCTION/INTEGRATION discoveries: synthetic-cage/overlay-over-render pattern · small-frame fs-floor · axis-tinted composite-overlay · local-tempdir-screenshot-carries-overlays · ghost-blend luminance dependence · edge-crease-operator + inset_individual loop generator · spread-matched-threshold craft · order-demo legibility · composite-overlay fs formula `fs = round(22 × viewBox_w / 1920)`).
- Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html` (low-priority).

---

## Locked rules carry forward

Full list in `lesson_06_completion_handoff.md` and the carry-forward blocks in `lesson_07_integration_progress.md` + `lesson_08_integration_progress.md` + the new `lesson_09_integration_progress.md`. All carry into L09 UNCHANGED: WSL `\\wsl$\Ubuntu\` paths only; `edit_file` dry-run → commit → `get_file_info` verify; `Filesystem:write_file` for new files (never `create_file`); `copy_file_user_to_claude` to refresh the working HTML copy before grep/sed + verify anchor uniqueness first; no new em-dashes (middle-dot `·` separators; pre-existing em-dashes preserved verbatim through exact-match anchors); `tool_search` for deferred tools; brand palette governs all overlays/SVGs (requirements-doc palette is loose AI-prompt guidance only); BlenderMCP clean-scene-manually + BLENDER_EEVEE fallback; composite-overlay fs formula + small-frame fs-floor + c12-precedent geometry + all variant types + inline-SVG conventions + indent-depth-derivation (L09 = col 20) + all L07/L08 capture-path + production-craft discoveries; NO baked labels; pre-plan sub-chat splits for ≥5-figure phases + INTEGRATION-own-chat for ≥6; warn Ray before context tightens.

---
