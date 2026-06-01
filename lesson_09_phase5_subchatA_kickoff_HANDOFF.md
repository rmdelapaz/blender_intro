# L09 Phase 5 PRODUCTION · Sub-chat A kickoff (UI chrome #20 / #22 / #24)

Paste this whole file as the first message of a fresh chat. Runnable from zero prior context.

---

## KICKOFF PROMPT (paste-in)

Lesson 09 Phase 5 PRODUCTION — Sub-chat A (UI chrome #20 / #22 / #24). This is the LAST production sub-chat of the 5-figure `#measurement-tools` phase. Once these 3 land, all 5 (#20–#24) are produced and the next chat is Phase 5 INTEGRATION (a single chat per <6).

Read in order:
* `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md`
* `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_integration_progress.md`
* (plus the carry-forward / mirror docs those two name in "Read at chat start")

Produce three UI-chrome PNGs (all Blender interface captures, NOT viewport renders):
* #20 `lesson_09_20_measure_tool_interface.png` (`c20` reserved) — Measure tool active + a measurement line with distance readout in the viewport
* #22 `lesson_09_22_edge_length_overlay.png` (`c22` reserved) — Overlays popover with **Edge Length** enabled + the viewport result (edge lengths shown on a cube in Edit Mode)
* #24 `lesson_09_24_statistics_panel.png` (`c24` reserved) — Overlays popover with **Statistics** enabled + the viewport stats readout (verts/edges/faces)

NO baked labels — all callouts/highlights/arrows are `c20`/`c22`/`c24` INTEGRATION overlay decisions.

Sub-chat membership is locked: C (#23 SVG `mr`) DONE, B (#21 `c21` render) DONE — do NOT revisit either.

---

## WHY THIS IS A MANUAL-SNIP (Win+Shift+S) SUB-CHAT — the locked P4-A rule

All three figures touch either the **Viewport Overlays popover** or the **live Measure tool**. The BlenderMCP bridge CANNOT hold a popover/modal open across a `screen.screenshot` call, and CANNOT dismiss a popover left open from a prior session (no real input events). This is the documented L08 P2/P3 + L09 P4-A transient-popover/modal limit.

So the division of labor is:
* **Bridge (Claude via `execute_blender_code`)** = stage the scene only — build the demo mesh, set the mode, set the overlay/tool state, position the view. Then STOP.
* **Ray (Win+Shift+S)** = open the popover / activate the tool on-screen, snip the region, save direct to the WSL `images/` path.
* **Bridge again** = Pillow crop/trim/upscale + `get_file_info` disk-verify after each snip.

**FIRST-STEP CAUTION (P4-A):** a Viewport Overlays popover may be stuck open from the #10 staging session. If so, Ray clicks once in the empty viewport to dismiss it BEFORE the first snip. The bridge cannot clear it.

No marker-color recipe needed — these are UI chrome, not color-dependent renders, so leave the scene at AgX. (The Standard/None recipe is for #21-style renders only.)

---

## KICKOFF CLEANUP (bridge, once at start)

1. `get_scene_info` — confirm the documented L09 base: 4 objs (`L09Cam` @ (7.5,−9.0,5.8) lens50 / `L09CamTarget` @ (0,0,1.0) / `L09Key` / `L09Fill`) + 6 mats (`L09Cyan`/`L09DemoGrey`/`L09FloorDark`/`L09Ghost`/`L09GridLine`/`L09Orange`), world 0.88, AgX/None, BLENDER_EEVEE, `hat.blend` bound NOT written.
2. Clear ANY demo meshes via `bpy.data.objects.remove(obj, do_unlink=True)` (never `read_factory_settings`).
3. Orphan-purge `do_local_ids=False` so the 6 base/helper mats survive (or rebuild base mats after).
4. Leave view transform at **AgX** (UI chrome, not color-dependent).

---

## GENERAL SNIP + RELAY CADENCE (every figure)

* Bridge stages, then tells Ray exactly what to open and what region to drag.
* Ray: if a stale popover is open, click once in the empty viewport first. Then open the target popover/tool, Win+Shift+S, drag the rectangle, and on the save dialog save DIRECT to the figure's WSL path:
  `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\<filename>.png`
* Bridge: `get_file_info` to confirm it landed; Pillow (`PIL` at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules`) to RGBA→RGB, trim any black border, crop to the relevant chrome, and **2× LANCZOS upscale** if the native crop is far below ~1920-wide (the small-frame UI-chrome precedent). Target ~200–800 KB. Overwrite the WSL file, re-verify, copy a downscaled `_inspect_l09_p5a_*` thumbnail to QA, then delete the inspect temp at close.

---

## #20 — Measure Tool Interface (`c20`)

Goal: Measure tool selected in the left toolbar (ruler icon) + a live measurement line in the viewport with the distance readout, on two objects separated by a clear distance.

**Bridge — stage:**
1. Build two `L09DemoGrey` cubes on the dark floor with a clear gap, e.g. cube A at (−1.5, 0, 0.5), cube B at (+1.5, 0, 0.5) (so the measurable distance reads cleanly, ~3 m center-to-center / ~2 m face-to-face).
2. Object Mode, SOLID shading, overlays on. Frame the pair with the existing `L09Cam` view or a clean orbit so both cubes + the gap are centered with headroom for the measurement label.
3. STOP. The Measure tool gizmo + readout is a live tool state the bridge can't hold across a screenshot — Ray drives it.

**Ray — snip:**
4. If a popover is stuck open, click once in the empty viewport to dismiss.
5. Activate the **Measure tool** in the left T-toolbar (the ruler/measure icon). Click-drag a measurement line from cube A's edge to cube B's edge so the distance value appears mid-line.
6. Win+Shift+S → drag a rectangle that includes BOTH (a) the left toolbar with the ruler icon highlighted AND (b) the viewport measurement line + distance readout. Save direct to:
   `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_09_20_measure_tool_interface.png`

**Bridge — finish:** verify on disk, Pillow trim/crop (keep toolbar ruler icon + measurement line + readout), upscale if small, overwrite + re-verify, QA thumbnail.

**`c20` INTEGRATION callouts (later):** ruler icon in the toolbar ("Measure tool") + the distance readout on the line ("distance readout") + the two click endpoints. Pixel-verify coords against the actual PNG before commit (locked P1-QA rule).

---

## #22 — Edge Length Overlay (`c22`)

Goal: the Viewport Overlays popover with **Edge Length** checked (under Measurement) PLUS the viewport result — a cube in Edit Mode showing edge-length numbers on its edges.

**Bridge — stage:**
1. Build one `L09DemoGrey` cube with clean whole-number dimensions (e.g. 2×2×2 m) on the floor.
2. Enter **Edit Mode**, select all geometry (so edge-length numbers render on every edge).
3. Set `space.overlay.show_extra_edge_length = True` (the Edit-Mode Measurement → Edge Length overlay) so the numbers are visible in the viewport even before the popover is opened. Confirm overlays on, SOLID shading.
4. Frame so the cube fills a good portion of the viewport and the edge numbers are legible. STOP — the popover itself is Ray's snip.

**Ray — snip:**
5. If a popover is stuck open, click once in the empty viewport to dismiss first.
6. Open the **Viewport Overlays** dropdown (the two-overlapping-circles icon, top-right of the 3D-viewport header). Hover so the **Measurement → Edge Length** checkbox (checked) is visible.
7. Win+Shift+S → drag a rectangle that includes BOTH (a) the open Overlays popover with the Edge Length checkbox AND (b) enough viewport to show the edge-length numbers on the cube. Save direct to:
   `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_09_22_edge_length_overlay.png`
   * If a single rectangle can't capture both cleanly, take TWO snips (popover crop + viewport-result crop) and the bridge will composite them side-by-side with a `#FF6B00` 2-px divider (the cause-and-effect layout the requirements Prompt 22 asks for).

**Bridge — finish:** verify on disk, Pillow crop/trim (or composite the two snips), upscale if small, overwrite + re-verify, QA thumbnail.

**`c22` INTEGRATION callouts (later):** highlight the Edge Length checkbox in the popover + a leader to the edge-length numbers on the cube. Pixel-verify before commit.

---

## #24 — Statistics Panel (`c24`)

Goal: the Viewport Overlays popover with **Statistics** checked PLUS the viewport stats overlay (Verts / Edges / Faces / Tris) for a simple selected cube.

**Bridge — stage:**
1. Build one simple `L09DemoGrey` cube (default 8 verts / 12 edges / 6 faces) on the floor, selected, Object Mode (or Edit Mode if you want the live vert/edge/face breakdown — Object Mode shows the scene-stats form the requirements describe; confirm which reads cleaner).
2. Set `space.overlay.show_stats = True` so the stats text block renders in the viewport corner.
3. SOLID shading, overlays on, framed so the stats text block (top-left of the viewport by default) is fully visible with the cube. STOP — the popover is Ray's snip.

**Ray — snip:**
4. If a popover is stuck open, click once in the empty viewport to dismiss first.
5. Open the **Viewport Overlays** dropdown (top-right header). Hover so the **Statistics** checkbox (checked) is visible.
6. Win+Shift+S → drag a rectangle that includes BOTH (a) the open Overlays popover with the Statistics checkbox AND (b) the viewport stats readout block (Verts/Edges/Faces/Tris). Save direct to:
   `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_09_24_statistics_panel.png`
   * Two-snip composite fallback if one rectangle can't get both cleanly (same as #22).

**Bridge — finish:** verify on disk, Pillow crop/trim (or composite), upscale if small, overwrite + re-verify, QA thumbnail.

**`c24` INTEGRATION callouts (later):** highlight the Statistics checkbox in the popover + a leader to the stats readout block. Pixel-verify before commit.

---

## AT CLOSE (bridge)

* Clear all demo meshes via `bpy.data.objects.remove`; reset any overlay flags toggled for staging (`show_extra_edge_length`, `show_stats`) back to off; restore the `L09Cam`/target if any figure moved them.
* Restore documented L09 base: AgX + world 0.88 + base mat tones unchanged (none were retoned this sub-chat); orphan purge `do_local_ids=False`.
* Final scene = 4 base objs + 6 base/helper mats, world 0.88, AgX, BLENDER_EEVEE, no `.blend`.
* Remove all `_inspect_l09_p5a_*` temps from WSL `images/` and the local tempdir `C:\Users\pract\AppData\Local\Temp\l09_p5a`.

## DOC UPDATES AT CLOSE (bridge)

* `lesson_09_integration_progress.md`: flip rows #20 / #22 / #24 → `produced; not integrated`; Current state → `Phase 5 PRODUCTION COMPLETE · 24 of 55 produced · 19 of 55 integrated`; add a Sub-chat A Status bullet (per-figure dims/bytes, capture path used, any composite, recorded nothing-to-project note since these are UI chrome — but DO record any pixel landmarks the bridge measures for the `c20`/`c22`/`c24` callouts). Each `edit_file` dryRun → commit → `get_file_info`.
* `session.md`: repoint to **Phase 5 INTEGRATION** (single chat per <6; all 5 #20–#24 now produced). Note INTEGRATION inlines #23 `mr` SVG + places the 4 PNG overlays (#20/#21/#22/#24), bottom-up commit order, pixel-verify every overlay before commit.

## REMINDERS

* `edit_file` dry-run → commit → `get_file_info` on every doc edit; `Filesystem:write_file` for new files (never built-in `create_file`).
* No new em-dashes; middle-dot `·` separators.
* Warn Ray to start a fresh chat for Phase 5 INTEGRATION rather than letting compaction hit if this sub-chat runs long.
* Phase 5 INTEGRATION is a single later chat — do NOT start it in this sub-chat even after all 3 land.
