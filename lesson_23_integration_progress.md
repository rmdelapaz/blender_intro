# Lesson 23 &#183; Camera Animation &#183; Integration Progress

**Source of truth for L23 production + integration.** Mirrors the L22 progress-doc structure. Read order in a fresh chat: `session.md` &#8594; this doc &#167;6 to END &#8594; `images/IMAGE_STYLE_GUIDE.md` v6.

**Lesson file:** `lesson_23_camera_animation.html` (confirmed against live HTML + `curriculum_overview.md` Module 5 lesson 23 "Camera Animation").
**Requirements doc:** `lesson_23_image_requirements.md` (generic AI-prompt spec &#8212; use ONLY for figure list, purpose, section placement, naming convention. Its palette `#2b2b2b`/`#ff8c00`/`#00d4ff`, the "AI Image Generation Prompts", Blender-4.0 UI references, and the 4-week production plan do NOT apply. IMAGE_STYLE_GUIDE v6 + locked render recipes + `#FF6B00` brand palette + Blender 5.1.1 reality OVERRIDE it.)

**STATUS: ROSTER PLAN-LOCKED (2026-06-21).** Roster = High + Medium = 26 figures (Lower 14 deferred). 5 Medium project renders (#26&#8211;30) deferred to a later sub-chat (Q4). **BUILD IN THIS CHAT = 21 figures: 11 inline SVG + 10 PNG.** Q1&#8211;Q6 all resolved (see &#167;2). NOT yet produced (live HTML still figure 0 / svg 0). Blender carried in TRUE-PRISTINE from L22 close. NEXT: pilot SVG, then SVG batches of 3, then PNG capture phases.

---

## &#167;1 &#183; Invariant baseline (LIVE HTML, UTF-8-aware Python count, NOT shell grep &#8212; locale unset so grep miscounts)

Captured at L23 OPEN against `lesson_23_camera_animation.html` as it exists pre-integration. Re-verify at EVERY checkpoint; integration is HTML-only unless a render/capture phase touches Blender (then verify pristine before+after per standing rules).

| Invariant | Baseline (pre-integration) | Notes |
|-----------|----------------------------|-------|
| bytes (raw) | **220,817** | `len(file.read())` bytes on disk |
| chars (UTF-8) | 219,917 | `len(text)` after utf-8 decode |
| figure | **0** | none present pre-integration |
| figcaption | **0** | |
| img | **0** | |
| svg | **0** | |
| mermaid | **2** | TWO `<div class="mermaid">` diagrams (graph TD camera-movements taxonomy; graph LR L20&#8594;L21&#8594;L22&#8594;L23 module recap). PRESERVE both; never touch. |
| em-dash U+2014 | **60** | ALL literal chars in existing prose. PRESERVE verbatim, ADD NONE. Use `&#183;` / `.` / `,` / `( )` / `:`. Re-verify count at every checkpoint. |
| color222 | **0** | `color="#222"` 0. Req-doc `#2b2b2b` also absent &#8212; confirms locked pipeline governs the file before any figure lands. |

**Section IDs (document order, 13 total):**
`why-camera-animation` &#183; `animation-fundamentals` &#183; `classic-camera-moves` &#183; `keyframe-basics` &#183; `timing-and-easing` &#183; `camera-constraints` &#183; `follow-path` &#183; `handheld-camera` &#183; `combining-with-dof` &#183; `project` &#183; `summary` &#183; `whats-next` &#183; `final-encouragement`

- All 9 content section IDs referenced in the requirements doc's Placement Suggestions EXIST and match in order against the live HTML.
- Tail sections beyond the placement map: `whats-next`, `final-encouragement` (standard lesson tail; no figures proposed for them).

**TARGET invariants at integration close (LOCKED for THIS chat's build set = 21 figures, 5 project renders deferred):**
figure = **21** / figcaption = **21** / img = **10** / svg = **21** / mermaid = **2** (preserved) / em-dash U+2014 = **60** (preserved) / color222 = 0.

> **svg-count derivation:** `<svg>` tags at close = inline-diagram SVGs (**11**) + PNG-overlay SVGs (one per PNG = **10**) = **21**. img = 10 (one per PNG figure). figcaption = 21 (one per figure). Always re-derive from actuals at each integration checkpoint; never trust a single carried number.

> **Full-roster target (FYI, after the 5 deferred project renders #26&#8211;30 land in a later sub-chat):** figure = 26 / img = 15 / svg = 26. Update this doc's target when that sub-chat opens.

---

## &#167;2 &#183; Locked roster (PLAN-LOCKED 2026-06-21)

**Tier source:** requirements doc Production Priority (High 10 / Medium 16 distinct image-numbers / Lower 14).
**Precedent:** L20 + L21 + L22 built **High + Medium**, deferred Lower. Same here.

**Q-resolutions (all locked):**
- **Q1 (count):** Count project shots individually, like L22. High(10) + Medium(16 distinct image numbers) = **26 figures**. Lower 14 deferred.
- **Q2 (SVG/PNG split):** Ray took the recommendation. Reassign **#3 keyframe_workflow** and **#11 zoom_vs_dolly** from req-PNG to **SVG** (both are concept/motion, no real UI). UI-chrome + Graph Editor + project renders stay PNG.
- **Q3 (motion-as-still):** Teach motion as **DIAGRAMS** (ghost start/end positions + path arrows + FOV cones), not renders. A still render of a dolly is indistinguishable from a zoom; the position-over-time relationship is what teaches. Applies to dolly / track / crane / orbit / zoom-vs-dolly / movement-focus-timing.
- **Q4 (project renders):** DEFER the 5 Medium project renders (#26&#8211;30) to a later sub-chat. Build NO Cycles scene in this chat. They remain Medium, tracked below.
- **Q5 (Blender 5.1.1 UI):** Verify each panel layout LIVE in 5.1.1 before any UI-chrome capture (req-doc "Blender 4.0" is stale).
- **Q6 (Graph Editor):** #13 + #21 Graph-Editor framing/panel-expand is NOT bridge-drivable. Ray sets up manually + Win+Shift+S, with Claude guidance.

**THIS-CHAT BUILD SET = 21 figures = 11 inline SVG + 10 PNG. DEFERRED (later sub-chat) = 5 PNG project renders. DEFERRED (Lower tier) = 14.**

### Roster (26) &#8212; FINAL types

| # | slug | tier | type | section | build phase |
|---|------|------|------|---------|-------------|
| 1 | camera_movement_overview | Med | SVG | classic-camera-moves (overview; also referenced in why-camera-animation) | SVG |
| 3 | keyframe_workflow | High | **SVG** (reassigned Q2) | animation-fundamentals / keyframe-basics | SVG |
| 4 | timeline_keyframes | Med | PNG (UI-chrome) | animation-fundamentals | PNG-UI |
| 5 | lock_camera_view | High | PNG (UI-chrome) | animation-fundamentals / keyframe-basics | PNG-UI |
| 6 | dolly_diagram | High | SVG | classic-camera-moves | SVG |
| 10 | orbit_diagram | High | SVG | classic-camera-moves | SVG |
| 11 | zoom_vs_dolly | Med | **SVG** (reassigned Q2) | classic-camera-moves | SVG |
| 12 | interpolation_types | Med | SVG | timing-and-easing | SVG |
| 13 | graph_editor | Med | PNG (UI-chrome, manual Q6) | keyframe-basics / timing-and-easing | PNG-Graph |
| 14 | easing_types | Med | SVG | timing-and-easing | SVG |
| 15 | track_to_setup | High | PNG (UI-chrome + viewport) | camera-constraints | PNG-UI |
| 17 | orbit_rig | High | SVG | camera-constraints | SVG |
| 18 | follow_path_setup | Med | PNG (3-panel composite) | follow-path | PNG-composite |
| 21 | noise_modifier | High | PNG (Graph Editor + Modifiers, manual Q6) | handheld-camera | PNG-Graph |
| 22 | shake_intensity | Med | PNG (4-panel render) | handheld-camera | PNG-render |
| 23 | focus_object_setup | High | PNG (viewport + DoF panel) | combining-with-dof | PNG-UI |
| 24 | movement_focus_timing | Med | SVG | combining-with-dof | SVG |
| 31 | multicam_timeline | Med | PNG (UI-chrome) | project | PNG-UI |
| 32 | motion_blur_settings | High | PNG (UI-chrome) | project | PNG-UI |
| 33 | shortcuts_reference | High | SVG | summary | SVG |
| 34 | moves_quick_reference | High | SVG | classic-camera-moves / summary | SVG |
| 26 | shot1_establishing | Med | PNG (Cycles render) | project | **DEFERRED sub-chat** |
| 27 | shot2_orbit | Med | PNG (Cycles render) | project | **DEFERRED sub-chat** |
| 28 | shot3_tracking | Med | PNG (Cycles render) | project | **DEFERRED sub-chat** |
| 29 | shot4_rack_focus | Med | PNG (2-frame composite) | project | **DEFERRED sub-chat** |
| 30 | shot5_finale | Med | PNG (Cycles render) | project | **DEFERRED sub-chat** |

**Build-now SVG (11):** #1, #3, #6, #10, #11, #12, #14, #17, #24, #33, #34
**Build-now PNG (10):** #4, #5, #13, #15, #18, #21, #22, #23, #31, #32
**Deferred project renders (5):** #26, #27, #28, #29, #30
**Deferred Lower tier (14):** #2, #7, #8, #9, #16, #19, #20, #25, #35, #36, #37, #38, #39, #40

### Motion-diagram craft notes (Q3 &#8212; applies to #1/#6/#10/#11/#24, and the motion parts of #3)
Per L21/L22 LD carried in style guide: stage ghost start/end camera positions, draw the path as arrow/curve, show FOV cones where perspective is the teaching point. Do NOT attempt to render motion as a photographic still. Top-down for dolly/track/orbit; side view for crane; split-panel for zoom-vs-dolly parallax; 2-track timeline for movement-focus timing.

### PNG capture-route notes (Q5/Q6)
- UI-chrome (#4 Timeline, #5 Lock-Camera-to-View N-panel, #15 Track To Constraint Properties, #23 DoF panel + viewport, #31 multicam Timeline+Outliner, #32 Render Properties Motion Blur): full-window local-tempdir `screen.screenshot` + deterministic area crop; verify 5.1.1 panel layout live first.
- Graph Editor (#13, #21): Ray sets up framing/panel-expand manually, Win+Shift+S overlay-freeze, save direct to WSL `images/`.
- Composite/render (#18 3-panel follow-path, #22 4-panel shake): scriptable panels via BlenderMCP, Pillow composite; verify pristine before+after.

### Batching cadence (style guide Workflow conventions)
1 pilot SVG &#8594; batches of 3 for SVGs. Plan-lock each asset's spec + design plan in this doc (or its archive) BEFORE generating. PNG phases grouped by scene/panel context.

---

## &#167;3 &#183; id-prefix registry (inline-SVG `id` namespaces)

Per style guide: unique `{id}` prefix per inline SVG so multiple SVGs coexist on one page without `id` collisions. 11 build-now SVGs:

| # | slug | id-prefix | status |
|---|------|-----------|--------|
| 1 | camera_movement_overview | `mo` | LOCKED |
| 3 | keyframe_workflow | `kw` | LOCKED |
| 6 | dolly_diagram | `dy` | LOCKED |
| 10 | orbit_diagram | `ob` | LOCKED |
| 11 | zoom_vs_dolly | `zd` | LOCKED |
| 12 | interpolation_types | `it` | LOCKED |
| 14 | easing_types | `es` | LOCKED |
| 17 | orbit_rig | `og` | LOCKED |
| 24 | movement_focus_timing | `mf` | LOCKED |
| 33 | shortcuts_reference | `sc` | LOCKED |
| 34 | moves_quick_reference | `mq` | LOCKED |

All 11 prefixes are mutually distinct and 2 letters. Re-confirm none collide with any `id` already present inline on the page at integration (page currently has 0 inline SVGs, so clean).

---

## &#167;4 &#183; c{N} overlay registry (PNG-overlay `c{N}-*` id namespaces &#8212; assign at integration)

Per style guide: each PNG-overlay SVG namespaces its ids with a `c{N}-*` prefix (N = the lesson image number) so overlays on multiple PNGs don't collide. Populated at INTEGRATION, one row per PNG figure, recording: overlay viewBox (= PNG pixel dims), callout count, colorway split (positive `#4ADE80` / warning `#E63946`), and the cairosvg pixel-verify pass result. Build-now PNGs: c4, c5, c13, c15, c18, c21, c22, c23, c31, c32.

| c{N} | PNG slug | viewBox (W&#215;H) | callouts | colorway | pixel-verify | status |
|------|----------|-------------------|----------|----------|--------------|--------|
| _(to populate at integration)_ | | | | | | |

---

## &#167;5 &#183; Production cadence / locked rules (carry-forward from session.md + style guide)

- **Paths:** `\\wsl$\` only (never `\\wsl.localhost\`). Browser QA via `http://localhost:5504/lesson_23_camera_animation.html` or headless Chromium/Playwright Claude-side.
- **Em-dash:** 0 new U+2014. Use `&#183;` / `.` / `,` / `( )` / `:`. Preserve the existing 60 verbatim. Re-verify count at every checkpoint.
- **Writes:** `Filesystem:write_file` for new files / full overwrites (never `create_file`). `edit_file` dryRun&#8594;commit&#8594;`get_file_info` + re-copy + UTF-8-aware re-count per edit. Show diff blocks before each overwrite.
- **PNG overlays:** cairosvg pixel-verify Claude-side before EVERY overlay commit (verify callout coords against actual cropped PNG pixels, not layout reasoning). PIL/Pillow substitute only if the check must run bridge-side (cairosvg unavailable in Blender 5.1 Python on Windows).
- **Blender:** TRUE-PRISTINE carried from L22. `blender:execute_blender_code` lowercase only. Verify `get_scene_info` BEFORE and AFTER any bridge work; restore pristine at close. Color-dependent renders use F12 `render.render` + Standard/None + 0.05 world recipe, RESTORE AgX + world 0.88 + base materials at close. No Filesystem delete tool &#8212; remove temps via bridge `os.remove`.
- **Capture routing:** UI chrome = full-window local-tempdir `screen.screenshot` (carries panel overlays) + deterministic area crop. Transient popovers + Graph-Editor framing + panel-expand = Win+Shift+S overlay-freeze, Ray sets up manually. Clean ortho/reference = hide toolbar + N-panel + nav gizmo first.
- **Style guide:** v6 governs all asset conventions (palette `#FF6B00` brand, `currentColor` theming, header geometry, footer tip Variant B, overlay badge colorway split, inlining checklist, figure indentation depth, accessibility).
- **Chat hygiene:** Warn Ray to start a fresh chat when this one gets long, rather than letting it auto-compact.

---

## &#167;6 &#183; Status log (newest first)

- **2026-06-22 &#183; PNG PHASE 3 COMPLETE: composite/render pair done (#18 follow_path_setup, #22 shake_intensity) + Blender restored TRUE-PRISTINE.** Fresh chat; read order completed (session.md &#8594; this doc &#167;6 newest-first {Phase-2 + Phase-1 entries} + &#167;2 roster/Q5-Q6/capture-route notes + &#167;7 Phase-1 & Phase-2 blocks &#8594; IMAGE_STYLE_GUIDE v6 composite-build / decision-19 pixel-verify / decision-20 capture-routing / locked `#FF6B00` 2px divider &#8594; live HTML `follow-path` + `camera-constraints` + `handheld-camera`). **Blender TRUE-PRISTINE confirmed at open** (28-check, identical to baseline incl. cosmetic `world.color` 0.0509). Plan-locked &#167;7 PHASE 3, signed off `confirm` (defaults a=~65% path progression, b=HTML-table midpoints, c=P4 Scale 12). **#18 `follow_path_setup` (3-panel composite, 2464x666, 407,372 B):** staged a real 4-pt Bezier `Camera_Path_Main` (S-curve XY + Z rise, `use_path` + `path_duration` 240) + Camera with a **Follow Path** constraint (`use_curve_follow=True`, `forward_axis='TRACK_NEGATIVE_Z'`, `up_axis='UP_Y'`); camera base transform zeroed so the constraint places it purely on the curve; drove `curve.data.eval_time` directly (0 / 78 / 156 = start / ~33% / ~65%) to position per panel. Panels P1/P2/P3 = clean-canvas SOLID viewport renders. c18 overlay deferred to INTEGRATION (camera glyph + `P1 path`/`P2 constraint`/`P3 animate` labels + Target/Forward -Z/Follow Curve/Frames callouts); proxy world positions recorded for overlay: P1 (-6.0,-5.0,1.5) / P2 (-2.513,3.197,2.198) / P3 (2.331,-4.286,2.707); view quat (0.8529,0.3797,0.1458,0.3274) dist 23.0 loc (0,0,2.0) PERSP. **#22 `shake_intensity` (4-panel F12 EEVEE render, 2486x349, 206,691 B):** factory Cube + a temp ground plane (`_l23shake_ground`) + 6 temp detail cubes (`_l23shake_box0..5`) for spatial reference/edges so shake reads; camera reframed look-at the cluster; **motion_blur ON shutter 2.0** (exaggerated from 0.5 so blur reads at a still), `eevee.motion_blur_steps`=6, frame 158 (high noise-velocity); Standard view_transform + dark world (0.06) + SUN light 1.6 to fix the grey-on-bright-world AgX washout. Per panel: 2 flat LocRot keyframes (f1+f250) + a NOISE F-curve modifier per fcurve at the rung's Scale/Strength, torn down between rungs. Ladder Subtle(2/0.05/0.6&#176;) / Documentary(4/0.15/1.5&#176;) / Action(7/0.4/4.0&#176;) / Extreme(12/0.8/7.0&#176;); intensity reads as escalating horizon-tilt + blur. c22 overlay (tier labels + Scale/Strength values) deferred to INTEGRATION. **TWO PRODUCTION LESSONS (carry forward):** (1) **bridge `screen.screenshot` / `screenshot_area` returned all-black / 1x1** for the clean-canvas viewport (OS window not repainting from headless bridge calls); **`bpy.ops.render.opengl(write_still=True, view_context=True)` under a VIEW_3D temp_override was the working bridge-driven viewport-capture path.** It excludes the live camera object's display, so a small **cone camera-proxy mesh** was staged at each panel's evaluated path position (torn down after). (2) **Noise-modifier rotation strengths are entered in RADIANS** (`rotation_euler` fcurves), but the HTML table values are DEGREES &#8212; 0.6 applied raw = 0.6 rad = 34&#176; = catastrophic blur. Convert deg&#8594;rad (`math.radians`). Same L22 exposure rule applies: flat grey geometry on the 0.88 world under AgX washes to white &#8212; needs Standard + dark world + retuned light. Motion blur reads weakly at low noise-velocity frames, so shutter was exaggerated (2.0) + a high-velocity frame (158) chosen. **TEARDOWN to TRUE-PRISTINE:** cleared cam anim + all NOISE modifiers; removed Follow Path constraint; deleted `_cam_proxy` + `Camera_Path_Main` (+curve data) + `_l23shake_ground` + 6 `_l23shake_box*`; restored Camera factory loc/rot + lens 50 + display_size 0.5 + show_in_front False + DoF off; Light back to POINT 1000 factory loc; world BG node 0.88/1.0; view_transform AgX/None/exp0; render EEVEE 1920x1080@100, motion_blur OFF, shutter 0.5, eevee_mb_steps 1; frame_set(1); deselected; removed all actions; `orphans_purge` (9 datablocks cleared). **Deep 28-check probe: ALL PASS** &#8212; identical to chat-open baseline (3 objs factory loc/rot / 1 mesh / 0 mat/node_groups/actions/curves/empties / 1 cam-data / 1 light-data / 0 markers / 0 constraints / 0 orphans; EEVEE/AgX/None/exp0; res 1920x1080@100; frame 1-250; lens 50; DoF off; motion_blur off; Light POINT 1000; world BG 0.88; `world.color` 0.0509 cosmetic). Deleted all 27 scratch temps (13 WSL `_l23_*`/`_test_l23_18_*` + 14 Windows-tempdir grabs) via bridge `os.remove`; 0 of this chat's temps remain (prior-lesson `_tmp_*` files left untouched). **ALL 10 build-now PNGs now DONE:** Phase-1 six UI-chrome (#4,#5,#15,#23,#31,#32) + Phase-2 two Graph-Editor (#13,#21) + Phase-3 composite/render pair (#18 407,372 B / #22 206,691 B). All 11 SVGs done. c{N} overlay rows c18/c22 deferred to INTEGRATION (c18: camera glyph + P1/P2/P3 + Target/Forward -Z/Follow Curve; c22: Subtle/Documentary/Action/Extreme tier labels + Scale/Strength values). **NEXT = INTEGRATION** (11 inline SVG + all 10 PNGs w/ c{N} overlays + cairosvg pixel-verify; target close-invariants figure 21 / figcaption 21 / img 10 / svg 21 / mermaid 2 / em-dash 60 / color222 0). Chat-length note: START A FRESH CHAT for INTEGRATION rather than risk auto-compaction.
- **2026-06-22 &#183; PNG PHASE 2 COMPLETE: both manual Graph-Editor PNGs done (#13, #21) + Blender restored TRUE-PRISTINE.** Fresh chat; read order completed (session.md &#8594; this doc &#167;6 newest-first + &#167;2 roster/Q5-Q6 + &#167;7 Phase-1 block &amp; route amendment &#8594; IMAGE_STYLE_GUIDE v6 manual-capture-cadence / decision-20 capture-path-routing / decision-19 pixel-verify &#8594; live HTML keyframe-basics + timing-and-easing + handheld-camera). Re-verified live-HTML invariants Claude-side (UTF-8 full read): bytes 220,817 / chars 219,917 / figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match &#167;1 baseline; integration not started). **Blender TRUE-PRISTINE re-confirmed at chat open** (deep RNA 28-check probe: all pass; `world.color` field 0.051 cosmetic, unchanged). Plan-locked &#167;7 Phase-2 block, signed off `proceed` (defaults a/b/c: #13 Z-Location-alone emphasis; #21 NOISE on Z Location for #13&#8596;#21 continuity; skip #32/#23 body-expanded redo). **Both are Graph-Editor framing/panel work = NOT bridge-drivable (Q6); I staged a real animated F-curve via the bridge so each capture had true content, Ray framed + Win+Shift+S saved direct to WSL `images\`, then I cropped/resized-in-place bridge-side + `get_file_info`-verified.** Staging: Camera given 2 LocRot keyframes (f1 factory pose &#8594; f120 dolly-in pose (3.2,-3.0,2.4)/(1.15,0,0.81)) all BEZIER + AUTO_CLAMPED handles, playhead parked f60. **Blender 5.1.1 slotted-action reality (NEW, carry forward):** `Action.fcurves` is GONE &#8212; fcurves live under `act.layers[0].strips[0].channelbags[0].fcurves` (slot-based); the action had 1 layer / 1 KEYFRAME strip / 1 channelbag (slot `OBCamera`) / 6 fcurves (Loc+Rot XYZ). **#13 `graph_editor`:** converted the big VIEW_3D area to GRAPH_EDITOR; channels ON, N-sidebar OFF, `show_handles` ON; HID the 3 rotation fcurves (their large radian spread squashed the Location curves flat) leaving the 3 Location curves; selected Z Location so its orange Bezier handles read; `graph.view_all` under WINDOW-region temp_override. Ray's snip came in full-window 2871x1646 (Win+Shift+S ~1.495x DPI); Pillow crop (0,152,1936,1632) dropped title-bar + app-tabs + Properties/Outliner + browser sliver, starting cleanly at the Graph-Editor header (View/Select/Marker), then resize 1920/2871 &#8594; **1295x990**; `lesson_23_13_graph_editor.png` `get_file_info` 136,825 B; verified visually (3 Bezier S-curves between keyframes, Z selected w/ visible handles, channel list, playhead f60, timeline Start1/End250). **#21 `noise_modifier`:** added a NOISE F-curve modifier (documentary preset Scale 4.0 / Strength 0.15 / Phase 0.0) and opened the Graph-Editor N-sidebar Modifiers tab (`ui_region.active_panel_category='Modifiers'`). **Gotcha (NEW, carry forward):** the Graph-Editor Modifiers panel shows ONLY the modifiers of `context.active_editable_fcurve`, which resolved to `location[0]` (X), NOT the selected/Z curve &#8212; there is no settable active-fcurve RNA on the channelbag and hiding non-target curves makes active resolve to None. Resolution: moved the NOISE modifier onto the X Location fcurve (the active one) so the panel populated; the teaching point (NOISE on a camera Location channel) is axis-agnostic, so this overrides default (b)'s Z preference &#8212; c21 caption will say "Location channel," not name the axis. Result: red X-Loc curve visibly jittery against smooth blue-Z/olive-Y, panel showing Scale/Strength/Phase. Ray's snip 1949x1639 (near-native, tighter manual crop); Pillow crop (24,146,1942,1622) trimmed a bled-in left tab strip + title-bar + app-tabs + browser sliver, NO downscale (already near 1x) &#8594; **1918x1476**; `lesson_23_21_noise_modifier.png` `get_file_info` 190,658 B; verified visually (noisy curve + full Noise panel: Blend Type Replace / Scale 4.000 / Strength 0.150 / Offset / Phase 0.000 / Depth / Lacunarity 2.000 / Roughness 0.500 / Influence). **TEARDOWN to TRUE-PRISTINE:** removed all fcurve modifiers; `animation_data_clear()`; restored Camera factory loc (7.3589,-6.9258,4.9583)/rot (1.1093,0,0.8149); `frame_set(1)`; deselected all; removed the `CameraAction` datablock; `orphans_purge` (none left); converted the GRAPH_EDITOR area back to VIEW_3D (N-panel closed, view PERSP). **Deep RNA 28-check probe: ALL PASS** &#8212; identical to chat-open baseline (3 objs Camera+Cube+Light factory loc/rot / 1 mesh / 0 mat / 0 node_groups / 0 actions / 0 empties / 0 curves / 1 cam-data / 1 light-data / 0 markers / 0 constraints / 0 obj-actions / 0 orphans; EEVEE/AgX/None/exp0; res 1920x1080@100; frame 1-250; motion_blur OFF; lens 50; DoF OFF/blades 0/no focus_object; world BG 0.88 str 1.0; `world.color` 0.051 cosmetic). Deleted all 8 scratch temps (4 WSL `_temp_l23_*` + 4 Windows-tempdir grabs) via bridge `os.remove` (0 remaining in `images/`). **8 of 10 build-now PNGs now DONE:** Phase-1 six UI-chrome (#4,#5,#15,#23,#31,#32) + Phase-2 two Graph-Editor (#13 136,825 B, #21 190,658 B). c{N} overlay rows c13/c21 deferred to INTEGRATION (callouts: #13 "interpolation curve" / "Bezier handle"; #21 "Noise modifier" / "Scale&#183;Strength&#183;Phase"); cairosvg pixel-verify runs at INTEGRATION. **REMAINING L23 PNGs: composite/render pair #18 follow_path_setup (3-panel) + #22 shake_intensity (4-panel render) &#8212; own fresh chat (scriptable via BlenderMCP, verify pristine before+after).** Then INTEGRATION (11 inline SVG + all 10 PNGs w/ c{N} overlays). Chat-length note: START A FRESH CHAT for the composite/render pair rather than risk auto-compaction.
- **2026-06-22 &#183; PNG PHASE 1 COMPLETE: all 6 UI-chrome PNGs done + Blender restored TRUE-PRISTINE.** Closed the phase by finishing the two remaining captures (#5, #31), tearing down, and verifying. **#5 `lock_camera_view`:** state was already correct on screen (`space.lock_camera=True`, VIEW_3D `view_perspective='CAMERA'`, N-panel View tab); re-inventoried the LIVE area map first (timeline was enlarged to h=187, so VIEW_3D had shifted to bl y=227 h=780 and the N-panel UI region to x=883). Prior crops were mis-framed from guessed N-panel coords; MEASURED the panel from the raw `_temp_l23_05_cap.png` (1920x1046): N-panel spans raw x=762&#8211;1294 (full width incl. tab strip, NOT ~1010), `Passepartout` tick at raw y&#8776;315, `Camera to View` tick at raw y&#8776;521. Cropped box (300, 90, 1294, 575) = **994x485** framing the View + View Lock section (Camera to View &#10003;) plus a camera-viewport context strip (cube + passepartout). Overwrote `images/lesson_23_05_lock_camera_view.png` (was a bad crop); `get_file_info` 50,082 B; verified visually. **#31 `multicam_timeline`:** added Camera.001 + Camera.002 (+2 camera datablocks), set 3 timeline_markers Cam1 f1 &#8594; Camera / Cam2 f180 &#8594; Camera.001 / Cam3 f420 &#8594; Camera.002 (each via `marker.camera`), temporarily extended `frame_end` 250 &#8594; 450 so f420 is visible, framed the timeline (`action.view_all` under temp_override), collapsed the Outliner via `outliner.show_hierarchy` so all 3 cameras show. Single full-window `screen.screenshot` to Windows tempdir &#8594; `shutil.copyfile` to WSL. Built the signed-off 2-crop composite (Outliner region top-left x=1299..1917 y=39..214 over Timeline region x=3..1294 y=824..1011) with the locked `#FF6B00` 2px divider via bridge-side Pillow = **1291x364**; `images/lesson_23_31_multicam_timeline.png` `get_file_info` 54,804 B; verified visually (3 cameras in Outliner + 3 camera-bound markers in Timeline, End=450). **TEARDOWN to TRUE-PRISTINE:** cleared 3 markers; removed Camera.001/.002 + their camera datablocks; `frame_end` &#8594; 250, `frame_current` &#8594; 1; `lock_camera=False`; `view_perspective` &#8594; PERSP; N-panel closed (`show_region_ui=False`); Properties &#8594; RENDER tab; Timeline shrunk via `screen.area_move` back to h=72 (Blender's stable minimum small-timeline height; the prior 67 was approximate, 5px snap delta is cosmetic). Probe caught ONE residual: an orphan `CameraAction` (0 users, leftover from #4 keyframe setup) &#8212; purged it (`bpy.data.actions.remove` + `outliner.orphans_purge(do_local_ids=False)`). **Deep RNA pristine probe: ALL 28 CHECKS PASS** &#8212; 3 objs (Camera+Cube+Light factory loc/rot) / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 curves / 1 camera-data / 1 light-data / 0 markers / 0 constraints / 0 object-actions / 0 orphans; EEVEE / AgX / None / exp0; res 1920x1080@100; frame 1&#8211;250; motion_blur OFF; lens 50; DoF OFF / blades 0 / no focus_object; world BG node 0.88 str 1.0. `world.color` viewport field still reads 0.051 (cosmetic, render-irrelevant, unchanged from open). Deleted all 12 `images/_temp_*.png` scratch files + Windows-tempdir grabs via bridge `os.remove` (0 remaining). **All 6 Phase-1 UI-chrome PNGs DONE + on disk:** #4 timeline_keyframes (20,462 B) / #5 lock_camera_view (50,082 B) / #15 track_to_setup (49,244 B) / #23 focus_object_setup (65,408 B) / #31 multicam_timeline (54,804 B) / #32 motion_blur_settings (65,715 B). **Capture-option note:** #32 + #23 captured per Option B (route amendment) = collapsed-but-enabled (panel header checkbox TICKED, body not expanded); value callouts (#32 `Shutter 0.5`; #23 `Focus Object`) deferred to the `c{N}` overlay at INTEGRATION &#8212; EXCEPT #23's Depth of Field panel auto-expanded, so its `Focus Object` field IS visible in the capture. c{N} overlay rows c4 / c5 / c15 / c23 / c31 / c32 populate at INTEGRATION. **NEXT (fresh chats):** remaining L23 PNGs = manual Win+Shift+S sub-chat (#13 graph_editor, #21 noise_modifier &#8212; both Graph-Editor, not bridge-drivable; optionally redo #32/#23 body-expanded there) + composite/render pair (#18 follow_path_setup 3-panel, #22 shake_intensity 4-panel render) in their own chats. Then INTEGRATION (11 inline SVG + the PNGs w/ c{N} overlays). Chat-length note: START A FRESH CHAT for the next PNG sub-chat rather than risk auto-compaction.
- **2026-06-22 &#183; PNG PHASE OPENED: pristine-verify + Q5 confirmed (Blender 5.1.1 live).** Read order completed in fresh chat (session.md &#8594; this doc full &#8594; IMAGE_STYLE_GUIDE v6 &#8594; all 10 PNG-target live-HTML sections). Re-verified live-HTML invariants Claude-side (UTF-8 Python count on full read): bytes 220,817 / chars 219,917 / figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match &#167;1 baseline; integration not started, 11 SVGs standalone). **Blender TRUE-PRISTINE confirmed** via `get_scene_info` + deep RNA probe: 3 objs (Camera+Cube+Light factory loc) / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 curves / 0 orphans, EEVEE / AgX / None / exp0, res 1920x1080@100, frame 1&#8211;250, lens 50, DoF OFF / blades 0 / no focus_object, POINT 1000, Cube unhidden. **One cosmetic delta noted (not a problem):** `world.color` (viewport-display field) reads 0.051, but the render-driving Background shader node = grey 0.88 str 1.0 (factory); `world.color` is viewport-only and does NOT affect `render.render` output when use_nodes=True, so render/UI-chrome pristine holds. No restore needed. **Q5 RESOLVED (Blender 5.1.1, build (5,1,1)):** every panel path the lesson body references is accurate for 5.1.1, NO stale-4.0 deltas found. Confirmed live: #32 motion blur on `scene.render.use_motion_blur` + `motion_blur_shutter` (0.5 default; NOT under scene.eevee in this build) &#183; #23 `camd.dof.focus_object` exists &#183; #5 `space.lock_camera` exists (N-panel View tab) &#183; #15 Track To `track_axis` default `TRACK_NEGATIVE_Z` (=To -Z) + `up_axis` default `UP_Y` (=Up Y), matches body verbatim &#183; #21 `NOISE` is a valid F-curve modifier type (real curve will exist for manual Graph Editor capture) &#183; #4/#31 frame range 1&#8211;250, timeline_markers API present (0 markers). Temp Track To constraint added for the probe was removed immediately (cam.constraints back to 0; pristine intact). NEXT: propose &#167;7 PNG capture-phase 1 spec block (UI-chrome cluster) for sign-off before any capture.
- **2026-06-22 &#183; SVG BATCH 3 of 3 (FINAL) BUILT + VERIFIED (#3 `kw`, #24 `mf`, #33 `sc`, #34 `mq`).** Plan-locked in &#167;7 (batch-3 block), signed off (`proceed`; one batch of 4; badge variant = MUTED applied to both #33 + #34; #3 canvas = 680 dense). Read the live `animation-fundamentals` + `keyframe-basics` (#3), `combining-with-dof` (#24), `summary` + `classic-camera-moves` (#33/#34) sections first and matched names/shortcuts/move-names to body prose verbatim: #3 = the 8-step `Standard animation workflow` (Set start frame &#8594; Position &#8594; Insert key I&#8594;LocRot &#8594; Go to end frame &#8594; Reposition &#8594; Insert key I &#8594; Blender interpolates &#8594; Refine timing) + the `I &#8594; Location &amp; Rotation` / diamond-in-timeline mechanic; #24 = the `Synchronization Strategies` Simultaneous / Sequential / Overlapping as a 2-track motion-vs-focus timeline; #33 = all 18 keyboard shortcuts verified against the lesson `<code>` inventory (I / Alt+I / Shift+Alt+I / Spacebar / Shift+Ctrl+Spacebar / Left-Right Arrow / Shift+Left-Right Arrow / Home / End / Numpad 0 / N / G / Shift+A / A / Ctrl+C / Ctrl+V / Shift+D / S / Ctrl+T / Ctrl+P); #34 = the 7 classic moves matched to the page `graph TD` mermaid (Dolly / Track / Crane / Orbit / Pan / Tilt / Roll; Track not Truck, Crane not Pedestal, Roll the 6th). Re-verified live-HTML invariants at batch open (Claude-side UTF-8 count on a full read): chars 219,917 / figure 0 / svg 0 / img 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match baseline; integration not started, SVGs authored standalone; Blender untouched this phase). Wrote via `write_file` + `get_file_info`-verified: `images/lesson_23_03_keyframe_workflow.svg` (8,333 B), `images/lesson_23_24_movement_focus_timing.svg` (5,863 B), `images/lesson_23_33_shortcuts_reference.svg` (9,364 B), `images/lesson_23_34_moves_quick_reference.svg` (7,489 B). Refinements during render-check: #3 trimmed the footer tip to fit one line + nudged the `Frame 120 &#183; End` label clear of the subject cube + shortened both FOV cones so they don't run off-canvas; #24 needed none (bar start/end positions read the three timing relationships cleanly first pass); #33 fixed the right-column descriptions that were placed off-canvas (local x=490/592 inside translated groups &#8594; corrected to local 130/192) + widened the `Ctrl+C / Ctrl+V` chip 118&#8594;140 so its text clears the border; #34 moved the Crane vertical motion arrow clear to the left of the camera body (was running through it) + pulled the Tilt arc right so it clears the lens nub. #33 carries no footer tip (4 clusters fill the 680 dense canvas to y=638; the self-complete cheat-sheet card is the documented dense-card pattern). cairosvg pixel-verify Claude-side on emulated light (#1a1a1a/#fff) + dark (#e8e8e8/#1e1e1e) pages: all headers/dividers/glyphs/cones/diamonds/timeline-bars/key-chips/move-glyphs/footer-tips legible both themes; #3's three zones read distinctly (A&#8594;B idea / timeline diamonds / 8-step flow), #24's three rows read distinctly by bar position (aligned / end-to-end / offset), #33's 18 chips + descriptions all visible, #34's 7 move glyphs read distinctly (straight-in / lateral / vertical / arc-around / horizontal-arc / vertical-arc / roll-ring); SVG U+2014 count = 0 on all four (clean); id-prefixes `kw`/`mf`/`sc`/`mq` confirmed; muted badge variant consistent across #33 + #34. **All 11 build-now SVGs now DONE** (pilot #6 + batch 1 {#10,#11,#1} + batch 2 {#12,#14,#17} + batch 3 {#3,#24,#33,#34}). NEXT PHASE = the 10 build-now PNGs (roster &#167;2: #4, #5, #13, #15, #18, #21, #22, #23, #31, #32; capture-route notes + Q5/Q6 in &#167;2). Chat-length note: this chat now carries the full ~220 KB lesson HTML + 3 reference docs + 8 batch renders; START A FRESH CHAT for the PNG phase rather than risk auto-compaction (handoff prompt provided).
- **2026-06-21 &#183; SVG BATCH 2 of 3 BUILT + VERIFIED (#12 `it`, #14 `es`, #17 `og`).** Plan-locked in &#167;7 (batch-2 block), signed off (`batch 2`; defaults a/b/c taken: #12 2x2 grid, #14 dot-spacing lanes + curve inset, #17 includes faint Track-To aim ray). Read the live `timing-and-easing` + `camera-constraints` sections first and matched names to body prose verbatim: #12 = Linear / Bezier / Ease In-Out / Constant (the `Understanding Interpolation` list); #14 = Ease In / Ease Out / Ease In-Out (the `Types of Easing` variations); #17 = the body's `Parenting Camera to Empty (Orbit Rig)` 6-step recipe. Re-verified live-HTML invariants at batch open (Claude-side UTF-8 count on a full read): bytes 220,817 / chars 219,917 / figure 0 / svg 0 / img 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match baseline; integration not started, SVGs authored standalone; Blender untouched this phase). Wrote via `write_file`: `images/lesson_23_12_interpolation_types.svg` (5,374 B), `images/lesson_23_14_easing_types.svg` (6,552 B), `images/lesson_23_17_orbit_rig.svg` (4,651 B); each `get_file_info`-verified. Refinements during render-check: #12 dropped a redundant `default` pill that collided with the Bezier curve (the faint `#FF6B00` 0.5 plot-edge + the gloss `(default)` already carry the tie-break); #14 re-spaced the Ease In/Out lane to a true symmetric tight&#8594;spread&#8594;tight ending tight at the track end; #17 shrank the orbit ring (r=240) and lifted the driven-rotation arc (r=78, ~270&#176;) above the hub so it clears the `Empty (Orbit_Center)` label, camera glyph reuses the locked pilot template with the lens-nub aimed inward. cairosvg pixel-verify Claude-side on emulated light (#1a1a1a/#fff) + dark (#e8e8e8/#1e1e1e) pages: all headers/dividers/curves/dots/glyphs/arcs/footer-tips legible both themes; #12's four curves read distinctly (straight / S / gentle-S / stair-step), #14's three velocity profiles read distinctly (and differ from #12's curve-shape taxonomy), #17 reads as the RIG (parent hub + radius + driven rotation), distinct from #10's motion path; SVG U+2014 count = 0 on all three (clean); id-prefixes `it`/`es`/`og` confirmed. timing-and-easing + camera-constraints SVG sets advanced (timing-and-easing #12 + #14 done; #13 Graph-Editor PNG remains; camera-constraints #17 done, #15 Track-To PNG remains). NEXT: SVG batch 3 of 3 (propose trio in &#167;7 first). Remaining build-now SVGs after batch 2: #3 `kw` keyframe_workflow, #24 `mf` movement_focus_timing, #33 `sc` shortcuts_reference, #34 `mq` moves_quick_reference (4 left &#8594; batch 3 = 3, then a final single or fold #34 into batch 3 as a 4th; confirm at batch-3 open). Chat-length note: this chat now carries the full ~220 KB lesson HTML + 3 reference docs + batch-2 renders; START A FRESH CHAT for batch 3 rather than risk auto-compaction (handoff prompt provided).
- **2026-06-21 &#183; SVG BATCH 1 of 3 BUILT + VERIFIED (#10 `ob`, #11 `zd`, #1 `mo`).** Plan-locked in &#167;7 (batch-1 block), signed off (#11 left = 2 ghost positions; #1 grid = 7-move physical taxonomy matched to the page `graph TD` mermaid; session.md left unbumped, this doc authoritative). Read the live-HTML `graph TD camera-movements` block first and reconciled naming: Track (not Truck), Crane (not Crane/Pedestal), Roll is the 6th rotation move &#183; #1 uses the mermaid's exact names + glosses across 3 bands (Position: Dolly/Track/Crane &#183; Rotation: Pan/Tilt/Roll &#183; Combined: Orbit). Re-verified live-HTML invariants at batch open: bytes 220,817 / figure 0 / svg 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match baseline; integration not started, SVGs authored standalone). Wrote via `write_file`: `images/lesson_23_10_orbit_diagram.svg` (5,391 B), `images/lesson_23_11_zoom_vs_dolly.svg` (5,930 B), `images/lesson_23_01_camera_movement_overview.svg` (8,702 B; dense 680 variant). All three reuse the locked pilot camera-glyph + concentric-cone treatment. #1 needed one refinement pass: Track + Tilt glyph arrows initially read poorly (track double-arrow hidden behind the camera body), moved the track arrow below the body and the tilt arc to the camera's right; re-verified clean. cairosvg pixel-verify Claude-side on emulated light (#1a1a1a/#fff) + dark (#e8e8e8/#1e1e1e) pages: all headers/dividers/glyphs/cones/arcs/footer-tips legible both themes; all 7 overview glyphs read distinctly; SVG U+2014 count = 0 on all three (clean); id-prefixes `ob`/`zd`/`mo` confirmed. classic-camera-moves SVG set now complete (#6 pilot + #10 + #11 + #1). NEXT: SVG batch 2 of 3 (propose trio in &#167;7 first). Candidate trio: #12 `it` interpolation_types, #14 `es` easing_types (both timing-and-easing), #17 `og` orbit_rig (camera-constraints) &#183; confirm or swap at batch-2 open.
- **2026-06-21 &#183; PILOT #6 `dolly_diagram` BUILT + VERIFIED.** Plan-locked in &#167;7, signed off (concentric cones, both aim at subject; title `DOLLY`; subject `currentColor`; `Dolly in` sub-label kept). Wrote `images/lesson_23_06_dolly_diagram.svg` via `write_file` (4,641 bytes). Refinement after first render-check: gave the near (End) cone a faint `#FF6B00` 0.5-opacity edge so the two same-angle cones read as two without altering geometry. cairosvg pixel-verify Claude-side on emulated light (#1a1a1a text / #fff bg) + dark (#e8e8e8 / #1e1e1e) pages: header/divider/footer/glyphs/cones/arrow all legible both themes; FOV-constant proof reads. SVG U+2014 count = 0 (clean). id-prefix `dy` confirmed. Reusable camera-body glyph + cone treatment now LOCKED as the template for #10/#11/#24. NEXT: SVG batch 1 of 3.
- **2026-06-21 &#183; ROSTER PLAN-LOCKED.** Q1&#8211;Q6 resolved. Roster = High(10)+Medium(16) = 26; Lower 14 deferred. Build-now = 21 (11 SVG + 10 PNG); 5 project renders (#26&#8211;30) deferred to later sub-chat. Q2 reassigned #3 + #11 to SVG. Q3 locked motion-as-diagrams. Locked target close invariants for the 21-figure build set (figure 21 / img 10 / svg 21 / mermaid 2 / em-dash 60 / color222 0). Assigned + locked 11 inline-SVG id-prefixes (&#167;3). NEXT: pilot SVG (propose spec + design plan here first), then SVG batches of 3.
- **2026-06-21 &#183; L23 OPENED.** Read `session.md` (top block + L22 archive) + `images/IMAGE_STYLE_GUIDE.md` v6. Confirmed lesson file `lesson_23_camera_animation.html` and 13 section IDs against live HTML (UTF-8-aware Python count). Captured invariant baseline: bytes 220,817 / chars 219,917 / figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 2 / em-dash U+2014 60 / color222 0. Confirmed title "Camera Animation" against `curriculum_overview.md` Module 5. Created this doc as source of truth.

---

## &#167;7 &#183; Pilot SVG spec + design plan (PLAN-LOCK-BEFORE-BUILD)

### Pilot: #6 `dolly_diagram` &#183; id-prefix `dy` &#183; section `classic-camera-moves`

**Teaching goal (Q3 motion-as-diagram):** show that a DOLLY is the camera body physically translating through space toward (or away from) a fixed subject, while the lens/FOV stays constant. The position-over-time relationship is the lesson; a single still render of a dolly is indistinguishable from a zoom, so this is staged as a top-down diagram with ghost start/end camera bodies, a translation path arrow, and matched FOV cones proving the cone angle does NOT change (the dolly-vs-zoom distinction that #11 will expand on).

**View / layout:** top-down (plan) view. Canvas = default `viewBox="0 0 800 560"` (single concept, not dense; 560 is sufficient).

**Composition (top to bottom within body region y=138&#8211;500):**
- Subject marker: a fixed cube glyph (small orange-outlined square + label `Subject`) centered horizontally, sitting in the upper-mid body (~y=190), the shared focus of both cones.
- Ghost START camera: camera body glyph at the far position (lower canvas, ~y=430), drawn at reduced opacity (ghost), labelled `Start (far)`. Its FOV cone opens upward toward the subject.
- Ghost END camera: camera body glyph at the near position (~y=320), drawn at fuller opacity, labelled `End (near)`. Its FOV cone also opens upward toward the subject, SAME apex angle as the start cone.
- Translation path: a straight orange arrow running along the dolly axis from Start body to End body (camera physically moves), with a mid-rail label `Dolly in` (`&#183;` separator if a sub-label is needed, never an em-dash).
- FOV-constant proof: both cones drawn with the same apex angle; a small annotation pill `FOV constant` near the cones. The two cones visibly differ in how much of the scene they frame BECAUSE the camera moved, not because the lens changed.
- Optional matched framing strip is OUT (keep single-concept; the cone overlap carries it).

**Camera body glyph:** simple trapezoid/film-camera silhouette (body rect + small lens nub pointing along the view direction). Reused for #10 orbit, #11 zoom-vs-dolly, #24 timing, so this pilot also locks the reusable `dy`-local camera glyph shape that later SVGs adapt (each with its own id-prefix).

**Palette (style guide, no new hex):**
- Camera bodies + translation arrow + top accent: `#FF6B00` brand orange (the moving element "wins" attention &#183; tie-break rule).
- Subject marker outline: `currentColor` at full opacity (neutral fixed reference), OR `#4A9EFF` if it needs to read as distinct from the orange camera; DECISION: `currentColor` outline, so the subject reads as neutral and the orange camera motion dominates. Confirm at sign-off.
- FOV cones: `currentColor` at low opacity fill (~0.08) + `currentColor` 0.3 stroke, so they read on both light/dark without competing with orange.
- Ghost START opacity ~0.4 on the body; END ~0.9 (ghost-blend luminance note is for renders, not SVG, but the same start-faint/end-solid convention reads the motion direction).
- Labels: `currentColor` primary; secondary text at opacity 0.65.

**Header block (style guide canonical):**
- Title: `DOLLY` (or `DOLLY MOVE`) &#8212; DECISION: `DOLLY` at y=56, 24/700.
- Subtitle: `Move the camera body &#183; keep the lens fixed` at y=84, 14/400 opacity 0.65.
- Divider line y=108.
- `role="img"`, `aria-labelledby="dy-title dy-desc"`, `<title id="dy-title">`, `<desc id="dy-desc">` full sentence.
- 3px `#FF6B00` top strip at y=0.
- `color="#222"` on root (standalone file keeps it; stripped only at inline integration).
- font-family system-ui stack on root.

**Footer tip (Variant B left rail, y=506&#8211;540):** `Tip: A dolly changes your distance to the subject, so the background scale shifts &#183; a zoom does not.` (uses `&#183;`, zero em-dash.)

**Accessibility:** title + desc set; color is reinforcement only (Start/End + arrow direction + labels carry the meaning); WCAG-AA text sizes per typography table; no animation.

**Em-dash check:** all separators use `&#183;` or `:`; zero U+2014 introduced in the SVG text. (The one `&#8212;` tokens in THIS plan block are inside the progress doc prose written as HTML entities, not literal U+2014 chars, and this doc is not the lesson HTML &#183; lesson U+2014 count stays 60.)

**File:** `images/lesson_23_06_dolly_diagram.svg` &#183; `write_file` (new file, never `create_file`).

**Open decisions for sign-off:** (a) title `DOLLY` vs `DOLLY MOVE`; (b) subject marker color `currentColor` vs `#4A9EFF`; (c) include the `Dolly in` directional sub-label on the path or keep the arrow alone. Defaults chosen above; will build to defaults unless Ray overrides.

**STATUS: AWAITING SIGN-OFF. Build (write_file) only after Ray approves.**

### Pilot result + NEXT (batch 1 candidates, NOT yet plan-locked)

Pilot #6 BUILT + VERIFIED (see &#167;6 top bullet). Camera-glyph + concentric-cone treatment LOCKED as reusable template for #10/#11/#24.

**NEXT = SVG batch 1 of 3** &#183; propose each spec in this &#167;7 FIRST (plan-lock-before-build), get sign-off, then `write_file` + cairosvg verify each. Proposed trio (rest of classic-moves, stays consistent with fresh pilot): **#10 `orbit_diagram`** (`ob`, top-down arc path, cone rotates to stay aimed inward), **#11 `zoom_vs_dolly`** (`zd`, split-panel: dolly = camera moves/BG scale shifts vs zoom = camera fixed/FOV narrows; extends pilot tip), **#1 `camera_movement_overview`** (`mo`, taxonomy overview card for classic-camera-moves + why-camera-animation). Trio not locked &#183; confirm or swap at batch-1 open.

---

## &#167;7 BATCH 1 of 3 &#8212; PLAN-LOCKED 2026-06-21 (signed off: #11 left = 2 ghost positions; #1 grid = physical-move taxonomy matched to page mermaid; session.md NOT bumped, this doc authoritative)

**Mermaid reconciliation (read from live HTML `graph TD camera-movements`):** page taxonomy = Position{Dolly Forward/Back, Track Left/Right, Crane Up/Down} &#183; Rotation{Pan Horizontal, Tilt Vertical, Roll Axis} &#183; Combined{Orbit Circle around subject}. #1 grid MUST use these exact names + glosses (Track not Truck; Crane not Crane/Pedestal; Roll is the 6th rotation move). 7 moves total.

### #10 `orbit_diagram` &#183; prefix `ob` &#183; section `classic-camera-moves` &#183; viewBox `0 0 800 560`
**Teaching goal (Q3):** camera travels a circular arc AROUND a fixed subject while continuously re-aiming inward, so the subject stays framed while the background sweeps. Contrast vs dolly: dolly = straight translation, orbit = curved path + rotating aim.
**Composition (top-down):** subject cube glyph dead-center (~400,300, reuse pilot glyph). Dashed `currentColor` orbit circle r&#8776;150 around it. THREE ghost camera bodies on the arc (left &#8776;0.4 / bottom &#8776;0.6 / right &#8776;0.9 opacity to read travel direction), each ROTATED so lens-nub + FOV cone points inward at the subject (locked cone treatment, 3 instances; highest-opacity instance carries the faint `#FF6B00` 0.5 edge). Curved orange arrow (arc path + `marker-end`) riding the circle = travel direction, mid-arc label `Orbit`. Annotation pill `Aim stays locked on subject`.
**Palette:** orbit path + 3 camera bodies + arc arrow orange; cones `currentColor` low-opacity (active = faint-orange edge); subject `currentColor`.
**Footer tip (Variant B):** `Tip: Parent the camera to an empty at the subject, then rotate the empty &#183; the camera orbits and stays aimed.`
**Header:** title `ORBIT` y=56; subtitle `Arc around the subject &#183; keep it aimed inward` y=84. `role=img`, `aria-labelledby="ob-title ob-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root (standalone). Em-dash: `&#183;`/`:` only, 0 U+2014.

### #11 `zoom_vs_dolly` &#183; prefix `zd` &#183; section `classic-camera-moves` &#183; viewBox `0 0 800 560`
**Teaching goal (Q3):** the dolly-vs-zoom distinction the pilot tip promised. Split-panel, vertical divider at x=400 (`currentColor` 0.15).
- **LEFT `DOLLY`:** TWO ghost camera positions (far ghost 0.4 + near solid 0.9, reuse pilot translation compressed) + orange translation arrow; cone apex angle CONSTANT across both; sub-note `Camera moves &#183; background scale shifts`.
- **RIGHT `ZOOM`:** ONE fixed solid camera body (no translation arrow); TWO nested cones from a SINGLE apex, the narrow one faint-`#FF6B00` = zoomed-in FOV; sub-note `Camera fixed &#183; FOV narrows`.
**Panel sub-titles** `DOLLY` / `ZOOM` at 18/600 inside each half. Moving/changing element orange per side; fixed elements `currentColor`.
**Footer tip (Variant B):** `Tip: Same framing, different look &#183; a dolly shifts perspective and background scale, a zoom only magnifies.`
**Header:** title `ZOOM vs DOLLY` y=56; subtitle `Two ways to make the subject bigger &#183; only one moves the camera` y=84. `aria-labelledby="zd-title zd-desc"`. 3px top strip. `color="#222"` root. 0 U+2014.

### #1 `camera_movement_overview` &#183; prefix `mo` &#183; section `classic-camera-moves` (also ref'd `why-camera-animation`) &#183; viewBox `0 0 800 680` (dense variant)
**Teaching goal:** at-a-glance taxonomy OVERVIEW CARD of the classic moves the lesson then details (reference card, NOT a motion diagram). Must agree with the page `graph TD` mermaid.
**Composition:** title `CAMERA MOVES`. THREE labelled bands matching the mermaid grouping:
- **Position changes** (move through space): Dolly `Forward / back` &#183; Track `Left / right` &#183; Crane `Up / down`
- **Rotation changes** (rotate in place): Pan `Horizontal rotation` &#183; Tilt `Vertical rotation` &#183; Roll `Axis rotation`
- **Combined:** Orbit `Circle around subject`
Seven mini-cells (3 + 3 + 1), each = tiny top-down-or-side glyph (subject ref + camera + orange motion indicator in locked style) + move name (15/600) + one-line gloss (13/0.6). Band labels 14/700 `currentColor`. Dense 680 canvas &#8594; footer tip shifts to y=641.
**Palette:** orange = the moving/rotating indicator in each glyph; subject ref `currentColor`; band dividers `currentColor` 0.15.
**Footer tip (Variant B, y=641):** `Tip: Pan and tilt rotate the camera in place &#183; dolly, track, crane and orbit move it through space.`
**Header:** title `CAMERA MOVES` y=56; subtitle `The classic moves, grouped by what the camera does` y=84. `aria-labelledby="mo-title mo-desc"`. 3px top strip. `color="#222"` root. 0 U+2014.

**Build order:** #10 &#8594; #11 &#8594; #1. Each: `write_file` new file &#8594; `get_file_info` &#8594; cairosvg pixel-verify Claude-side on emulated light + dark pages &#8594; SVG U+2014 count must read 0 &#8594; log to &#167;6. Files: `images/lesson_23_{10_orbit_diagram,11_zoom_vs_dolly,01_camera_movement_overview}.svg`.

**STATUS: PLAN-LOCKED. Building now.**

---

## &#167;7 BATCH 2 of 3 &#8212; BUILT + VERIFIED 2026-06-21 (signed off `batch 2`; defaults a/b/c taken)

Trio confirmed (no swap): #12 `it` interpolation_types + #14 `es` easing_types (both `timing-and-easing`) + #17 `og` orbit_rig (`camera-constraints`). Read the live `timing-and-easing` + `camera-constraints` sections first; names below match body prose verbatim (Linear / Bezier / Ease In-Out / Constant for #12; Ease In / Ease Out / Ease In-Out for #14; the body's `Parenting Camera to Empty (Orbit Rig)` 6-step recipe for #17). Re-verified live-HTML invariants at batch-2 open: bytes 220,817 / chars 219,917 / figure 0 / svg 0 / img 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match baseline; integration not started, SVGs authored standalone; Blender untouched this phase).

### #12 `interpolation_types` &#183; prefix `it` &#183; section `timing-and-easing` &#183; viewBox `0 0 800 560`
**Teaching goal:** taxonomy of the four interpolation METHODS Blender offers (the `Understanding Interpolation` body list), each as a value-vs-frame curve card so the curve SHAPE carries the meaning. This is the curve-shape taxonomy; #14 is the velocity-feel of the eases (kept distinct).
**Composition:** 2x2 grid of curve cards (body region y=138&#8211;486), each card = faint axis cross (`currentColor` 0.3, x=frame / y=value), the curve in `#FF6B00`, method name 15/600, one-line gloss 13/0.6:
- **Linear** &#183; straight diagonal &#183; `Constant speed, no acceleration (robotic)`
- **Bezier** &#183; smooth S-curve &#183; `Smooth, adjustable handles (default)` &#8212; carries the orange tie-break emphasis (body-recommended default; faint `#FF6B00` 0.5 card-edge like the pilot active-instance treatment)
- **Ease In/Out** &#183; gentle symmetric S &#183; `Slow start, fast middle, slow end`
- **Constant** &#183; stair-step &#183; `Instant jump, no in-betweens`
**Palette:** curves `#FF6B00`; axis crosses + card dividers `currentColor` low-opacity; gloss text `currentColor` 0.6.
**Footer tip (Variant B):** `Tip: Bezier is the default and suits most moves &#183; Linear feels mechanical, Constant snaps with no motion.`
**Header:** title `INTERPOLATION` y=56; subtitle `How Blender fills the frames between keyframes` y=84. `role=img`, `aria-labelledby="it-title it-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root (standalone). Em-dash: `&#183;`/`:` only, 0 U+2014.

### #14 `easing_types` &#183; prefix `es` &#183; section `timing-and-easing` &#183; viewBox `0 0 800 560`
**Teaching goal:** the three easing VARIATIONS from the body's `Types of Easing` (Ease In / Ease Out / Ease In/Out) shown as VELOCITY feel, not just curve shape. Three stacked lanes; each lane = a horizontal motion track with ghost&#8594;solid dot spacing encoding speed (close dots = slow, spread dots = fast) plus a small value-curve inset at the lane's right.
- **Ease In** &#183; dots tight&#8594;spread (slow start, accelerates) &#183; `Builds momentum: deliberate start, then urgent`
- **Ease Out** &#183; dots spread&#8594;tight (decelerates) &#183; `Settles into position: decisive, gentle landing`
- **Ease In/Out** &#183; dots tight&#8594;spread&#8594;tight &#183; `The go-to: smooth at both ends` &#8212; carries the orange tie-break (body: `your go-to easing`)
**Distinct from #12:** #12 = curve-shape taxonomy of the four methods; #14 = the velocity feel (dot-spacing speed profile) of the three eases. No overlap in teaching point.
**Palette:** motion dots + active lane curve `#FF6B00`; track baselines + inset axes `currentColor` low-opacity; the Ease In/Out lane is the highlighted (tie-break) one.
**Footer tip (Variant B):** `Tip: Ease In/Out is the natural default &#183; humans never start or stop a camera at full speed.`
**Header:** title `EASING` y=56; subtitle `Where the move speeds up and slows down` y=84. `role=img`, `aria-labelledby="es-title es-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root. 0 U+2014.

### #17 `orbit_rig` &#183; prefix `og` &#183; section `camera-constraints` &#183; viewBox `0 0 800 560`
**Teaching goal:** the RIG that produces an orbit (body `Parenting Camera to Empty (Orbit Rig)` 6-step recipe), NOT the orbit motion path (that is #10 `ob`). Shows the parent-child relationship + radius + the single animated parameter (Empty Z rotation) that drives everything.
**Composition (top-down):** subject cube glyph dead-center (~400,300, reuse pilot glyph) with an **Empty (Orbit_Center)** plain-axes glyph (small `currentColor` plus-axis cross) co-located on it. Camera body glyph (locked template) out at radius distance (~right of center), lens-nub aimed inward. Dashed `currentColor` radius line center&#8594;camera labelled `radius = distance`. Parent-link connector (camera &#8594; Empty, thin `currentColor` 0.3 elbow) labelled `Ctrl+P &#183; parent`. Curved orange rotation arrow ringing the Empty labelled `rotate Empty Z 0&#176; &#8594; 360&#176;` = the one animated value. Faint Track-To aim ray (camera&#8594;subject) annotated `Track To keeps aim`.
**Complements #10:** #10 `ob` = the orbit MOTION (3 ghost cameras on the arc); #17 `og` = the RIG (parent hub + radius + driven rotation). Same section family, no duplication.
**Palette:** rotation arrow + camera body orange (the moving/driving element); Empty glyph + radius line + parent link + subject `currentColor`; aim ray `currentColor` low-opacity.
**Footer tip (Variant B):** `Tip: Parent the camera to an Empty, then animate only the Empty's Z rotation &#183; one value drives the whole orbit.`
**Header:** title `ORBIT RIG` y=56; subtitle `Parent the camera to an Empty and spin the Empty` y=84. `role=img`, `aria-labelledby="og-title og-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root. 0 U+2014. Degree sign via `&#176;`.

**Build order:** #12 &#8594; #14 &#8594; #17. Each: `write_file` new file &#8594; `get_file_info` &#8594; cairosvg pixel-verify Claude-side on emulated light (#1a1a1a/#fff) + dark (#e8e8e8/#1e1e1e) pages &#8594; SVG U+2014 count must read 0 &#8594; log to &#167;6. Files: `images/lesson_23_{12_interpolation_types,14_easing_types,17_orbit_rig}.svg`.

**Open decisions for sign-off:** (a) #12 grid 2x2 vs 1x4 row (default 2x2); (b) #14 dot-spacing lanes vs pure value-curves (default: dot-spacing lanes + small curve inset, since velocity feel is the teaching point #12 doesn't cover); (c) #17 include the faint Track-To aim ray or keep rig-only (default: include, faint, since body lists Track To as the recommended companion step). Defaults build unless Ray overrides.

**STATUS: BUILT + VERIFIED 2026-06-21 (signed off `batch 2`; defaults a/b/c taken). Files written + get_file_info-verified: lesson_23_12_interpolation_types.svg 5,374 B / lesson_23_14_easing_types.svg 6,552 B / lesson_23_17_orbit_rig.svg 4,651 B. cairosvg light+dark pixel-verify passed; SVG U+2014 = 0 on all three. Logged to &#167;6. NEXT: batch 3 (in a fresh chat).**

---

## &#167;7 BATCH 3 of 3 (FINAL SVG BATCH) &#8212; PLAN-LOCKED 2026-06-22 (signed off `proceed`; one batch of 4; badge variant = MUTED; #3 canvas = 680 dense)

Final 4 build-now SVGs, built as ONE batch (not 3 + single): #3 `kw` keyframe_workflow + #24 `mf` movement_focus_timing + #33 `sc` shortcuts_reference + #34 `mq` moves_quick_reference. Cheat-sheet badge variant LOCKED = **muted** (transparent `#FF6B00` ~8% fill + orange border + orange text), applied to BOTH #33 and #34 (one variant per lesson). Read the live `animation-fundamentals` + `keyframe-basics` (for #3), `combining-with-dof` (for #24), `summary` + `classic-camera-moves` (for #33/#34) sections first; all names/shortcuts/move-names below match body prose verbatim. Keyboard tokens for #33 verified against the lesson `<code>` inventory (I / Alt+I / Shift+Alt+I / Spacebar / Shift+Ctrl+Spacebar / Left-Right Arrow / Shift+Left-Right Arrow / Home / End / Numpad 0 / N / G / Shift+A / A / Ctrl+C / Ctrl+V / Shift+D / S / Ctrl+T / Ctrl+P). #34 move names match the page `graph TD` mermaid (Track not Truck; Crane not Pedestal; Roll the 6th rotation move; 7 moves). Re-verified live-HTML invariants at batch-3 open (Claude-side UTF-8 count on a full read): chars 219,917 / figure 0 / svg 0 / img 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (all match baseline; integration not started, SVGs authored standalone; Blender untouched this phase).

### #3 `keyframe_workflow` &#183; prefix `kw` &#183; section `animation-fundamentals` (also ref'd `keyframe-basics`) &#183; viewBox `0 0 800 680` (dense)
**Teaching goal (Q2 reassigned to SVG; concept + light motion, NO real UI):** the standard keyframe animation PROCESS &#8212; the body's 8-step `Standard animation workflow` (animation-fundamentals) reinforced by the keyframe-basics `press I &#8594; Location &amp; Rotation, diamond appears in timeline` mechanic. Shows the A&#8594;B keyframe model: two camera states pinned to a timeline, Blender interpolating between.
**Composition (three stacked zones, body y=138&#8211;625):** (1) TOP zone = mini top-down A&#8594;B motion idea reusing locked pilot glyph: ghost START camera (frame 1, opacity ~0.4, `Frame 1 &#183; Start`) + solid END camera (frame 120, opacity ~0.9, faint `#FF6B00` 0.5 edge, `Frame 120 &#183; End`) aimed at a small `currentColor` subject cube; faint dotted `currentColor` interpolation path labelled `Blender interpolates`. (2) MIDDLE zone = timeline strip: horizontal track (`currentColor` 0.3 baseline), two orange keyframe DIAMONDS at frame-1 + frame-120 ends, playhead tick, frame labels `1` / `120`, in-between region annotated `auto in-between frames`. (3) BOTTOM zone = the 8-step workflow as compact numbered chips (body's exact step verbs, condensed, 0 em-dash, `&#183;` separators): `1 Set start frame` &#183; `2 Position camera` &#183; `3 Insert key (I &#8594; LocRot)` &#183; `4 Go to end frame` &#183; `5 Reposition camera` &#183; `6 Insert key (I)` &#183; `7 Blender interpolates` &#183; `8 Refine timing` &#8212; two rows of numbered chips with `currentColor` 0.3 connectors; `I` shown as a muted key-chip.
**Palette:** orange = the two keyframe diamonds + END camera edge + `I` key emphasis; subject + timeline baseline + step connectors `currentColor`; ghosts / in-between low-opacity.
**Footer tip (Variant B, y=641):** `Tip: You set the start and end, Blender fills every frame between &#183; press I &#8594; Location &amp; Rotation to capture both at once.`
**Header:** title `KEYFRAME WORKFLOW` y=56; subtitle `Pin the camera at key moments &#183; Blender draws the path between` y=84. `role=img`, `aria-labelledby="kw-title kw-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root (standalone). 0 U+2014; `&#8594;` for arrows.

### #24 `movement_focus_timing` &#183; prefix `mf` &#183; section `combining-with-dof` &#183; viewBox `0 0 800 560`
**Teaching goal (Q3 motion-as-diagram):** how camera MOVEMENT and FOCUS are coordinated in TIME &#8212; the body's `Synchronization Strategies` (Simultaneous / Sequential / Overlapping). A 2-track timeline (motion track vs focus track) is the right form: the relationship BETWEEN the two tracks over time is the teaching point, which a still cannot show.
**Composition (body y=138&#8211;486):** three stacked STRATEGY rows, each a pair of horizontal time-bars sharing a frame axis (frame 1 &#8594; 120): (a) **Simultaneous** &#183; motion bar 1&#8211;120 + focus bar 1&#8211;120 aligned &#183; gloss `Move and focus together &#183; unified, flowing`; (b) **Sequential** &#183; motion bar 1&#8211;60 + focus bar 60&#8211;120 end-to-end &#183; gloss `Move, then shift focus &#183; distinct beats`; (c) **Overlapping** &#183; motion bar 1&#8211;90 + focus bar 30&#8211;120 offset/partial-overlap &#183; gloss `Focus starts mid-move &#183; organic` &#8212; carries the orange tie-break (body calls overlapping the organic/complex one). Each row: a `MOTION` bar (orange) + a `FOCUS` bar (`currentColor`, small focus-ring icon) on two lanes, shared faint frame ruler beneath (ticks 1 / 60 / 120), row label left (14/600), gloss right (13/0.6). Distinction encoded by bar START/END positions, not color alone.
**Palette:** MOTION bars `#FF6B00`; FOCUS bars `currentColor`; frame ruler + lane baselines `currentColor` low-opacity; Overlapping row highlighted.
**Footer tip (Variant B, y=506):** `Tip: Match energy &#183; a slow dolly wants a slow focus pull, a fast move wants a quick rack.`
**Header:** title `MOVEMENT + FOCUS TIMING` y=56; subtitle `Three ways to line up a camera move with a focus pull` y=84. `role=img`, `aria-labelledby="mf-title mf-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root. 0 U+2014.

### #33 `shortcuts_reference` &#183; prefix `sc` &#183; section `summary` &#183; viewBox `0 0 800 680` (dense) &#183; MUTED badges
**Teaching goal:** end-of-lesson keyboard cheat-sheet card. Every key matches a `<code>` token verbatim from the lesson body (inventory confirmed).
**Composition:** title `CAMERA ANIMATION SHORTCUTS`, 4 labelled clusters (band labels 14/700), each badge = MUTED chip (key) + `currentColor` gloss: (1) **Keyframes:** `I` Insert keyframe (LocRot) &#183; `Alt+I` Delete keyframe &#183; `Shift+Alt+I` Clear all keyframes. (2) **Playback &amp; timeline:** `Spacebar` Play / pause &#183; `Shift+Ctrl+Spacebar` Play in reverse &#183; `Left/Right Arrow` Step 1 frame &#183; `Shift+Left/Right Arrow` Jump 10 frames &#183; `Home` Frame 1 &#183; `End` Last frame. (3) **Viewport &amp; camera:** `Numpad 0` Toggle camera view &#183; `N` Side panel (Lock Camera to View) &#183; `G` Grab / move camera &#183; `Shift+A` Add (camera, empty). (4) **Dope Sheet &amp; reuse:** `A` Select all keys &#183; `Ctrl+C` / `Ctrl+V` Copy / paste keys &#183; `Shift+D` Duplicate &#183; `S` Scale keys (timing) &#183; `Ctrl+T` Track To &#183; `Ctrl+P` Parent (orbit rig).
**Palette:** muted orange key-chips throughout; gloss `currentColor` 0.65; band labels `currentColor`; band dividers `currentColor` 0.15.
**Footer tip (Variant B, y=641):** `Tip: I &#8594; Location &amp; Rotation is the one you'll press most &#183; it captures position and aim together.`
**Header:** title `CAMERA ANIMATION SHORTCUTS` y=56; subtitle `Every keyboard move from this lesson, in one card` y=84. `role=img`, `aria-labelledby="sc-title sc-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root. 0 U+2014; `&#8594;` arrows; `&amp;` ampersands.

### #34 `moves_quick_reference` &#183; prefix `mq` &#183; section `classic-camera-moves / summary` &#183; viewBox `0 0 800 560` &#183; MUTED badges
**Teaching goal:** quick-reference card of the 7 classic moves, names + glosses matched verbatim to the page `graph TD` mermaid + classic-camera-moves body (Track not Truck; Crane not Pedestal; Roll the 6th). Same muted badge variant as #33.
**Composition:** title `CAMERA MOVES`, 7 compact rows in 2 grouped bands: (1) **Move through space:** `Dolly` Forward / back (push in-out) &#183; `Track` Left / right (lateral) &#183; `Crane` Up / down (boom) &#183; `Orbit` Circle around subject. (2) **Rotate in place:** `Pan` Horizontal rotation &#183; `Tilt` Vertical rotation &#183; `Roll` Axis rotation. Each row = tiny locked-style move glyph (subject ref + camera + orange motion indicator, consistent with #1) + move name (15/600) + one-line gloss (13/0.6). Orbit grouped under move-through-space (combined move, matches #1). Band labels 14/700.
**Palette:** orange = motion indicator per glyph (tie-break); subject ref + names `currentColor`; band dividers `currentColor` 0.15.
**Footer tip (Variant B, y=506):** `Tip: Pan and tilt rotate in place &#183; dolly, track, crane and orbit move the camera through space.`
**Header:** title `CAMERA MOVES` y=56; subtitle `The seven classic moves at a glance` y=84. `role=img`, `aria-labelledby="mq-title mq-desc"`, full `<title>`/`<desc>`. 3px top strip. `color="#222"` root. 0 U+2014.
**Intentional echo of #1:** #34's tip + bands echo #1 `camera_movement_overview` &#8212; correct (overview card vs end-of-lesson quick-ref serve different sections), consistent with the #10/#17 orbit-motion-vs-rig split. No dedup needed.

**Build order:** #3 &#8594; #24 &#8594; #33 &#8594; #34. Each: `write_file` new file &#8594; `get_file_info` &#8594; cairosvg pixel-verify Claude-side on emulated light (#1a1a1a/#fff) + dark (#e8e8e8/#1e1e1e) pages &#8594; SVG U+2014 count must read 0 &#8594; log to &#167;6. Files: `images/lesson_23_{03_keyframe_workflow,24_movement_focus_timing,33_shortcuts_reference,34_moves_quick_reference}.svg`.

**STATUS: PLAN-LOCKED 2026-06-22. Building now.**

---

## &#167;7 PNG PHASE 1 (UI-chrome cluster) &#8212; PLAN-LOCKED 2026-06-22 (signed off: a=all 6 this chat; b=#31 single-grab Timeline+Outliner, 2-crop composite fallback; c=#4/#31 split confirmed)

**Capture set (6 UI-chrome PNGs): #4, #5, #15, #23, #32, #31.** All via local-tempdir full-window `screen.screenshot` &#8594; `shutil.copyfile` to WSL `images\` &#8594; bridge-side Pillow in-place crop to deliverable (L18 P6 fast path; PIL 12.2.0 in Blender 5.1.1). Maximized-Properties shots (#15/#23/#32) use the maximize-stall fix: isolate tab-set / maximize / screenshot / restore in separate bridge calls, re-find area after maximize (1920x976). `get_scene_info` before+after each; ALL added datablocks (Empties, extra cameras, constraints, keyframes, markers) + flags (motion_blur, use_dof, lock_camera) torn down at phase close to restore TRUE-PRISTINE (re-verify + log). cairosvg `c{N}` overlay pixel-verify is deferred to INTEGRATION (these are base PNGs). Manual Graph-Editor (#13, #21) + composite/render (#18, #22) deferred to fresh chats.

| # | slug | scene state (set &#8594; RESTORE) | capture target | crop |
|---|------|------------------------------|----------------|------|
| #4 | timeline_keyframes | 2 LocRot keyframes on Camera f1+f120 (diamonds); playhead ~f60 | Timeline editor: diamonds + playback + range 1&#8211;250 | Timeline strip |
| #5 | lock_camera_view | `space.lock_camera=True`; camera view; N-panel View tab | VIEW_3D + N-panel View tab, Lock Camera to View ticked | N-panel + viewport edge |
| #15 | track_to_setup | Empty `Camera_Target` at cube; Track To on Camera (Target, -Z/Y); Constraint tab | Constraint Properties (Track To populated) + viewport | Properties editor |
| #23 | focus_object_setup | Empty `Focus_Target` at cube; `dof.use_dof=True` + `focus_object`; Camera Data tab | Camera Data &#8594; DoF panel (Focus Object set) + viewport | Properties editor |
| #32 | motion_blur_settings | `render.use_motion_blur=True`, shutter 0.5; Render tab | Render Properties &#8594; Motion Blur expanded, Shutter 0.5 | Properties editor |
| #31 | multicam_timeline | +2 cameras; 3 markers f1/f180/f420 bound to cams; Outliner+Timeline visible | Timeline (markers+bind) + Outliner (multi-cam), single grab | Timeline+Outliner span |

**Build order:** #32 &#8594; #23 &#8594; #15 (three Properties-tab shots, share maximize mechanic) &#8594; #4 &#8594; #5 &#8594; #31 (most involved, last). Files: `images/lesson_23_{04_timeline_keyframes,05_lock_camera_view,15_track_to_setup,23_focus_object_setup,32_motion_blur_settings,31_multicam_timeline}.png`. c{N} registry rows (c4,c5,c15,c23,c31,c32) populated at INTEGRATION.

**STATUS: PHASE 1 COMPLETE 2026-06-22. All 6 UI-chrome PNGs captured + verified; Blender restored TRUE-PRISTINE (28/28 checks pass); scratch temps deleted. c{N} overlays (c4/c5/c15/c23/c31/c32) deferred to INTEGRATION. See &#167;6 top entry.**

**ROUTE AMENDMENT 2026-06-22 (signed off: `b`):** Panel-expand for the EEVEE Motion Blur sub-panel (#32) and camera Depth of Field panel (#23) is NOT bridge-drivable in Blender 5.1.1 &#8212; checkbox-header sub-panels expose no `show_expanded` RNA, no expand operator, no synthetic-click path (confirmed: `bpy.ops.ui`/`bpy.ops.screen` have no panel-expand op; constraints DO expose `show_expanded=True` so #15 is unaffected). **Resolution = Option B:** capture #32 + #23 **collapsed-but-enabled** (panel header visible with checkbox TICKED; body not expanded). The value callouts (#32 `Shutter 0.5`; #23 `Focus Object: Empty`) move to the `c{N}` overlay annotation at INTEGRATION rather than being read off the panel body. All 6 stay in this chat. Verified infra end-to-end before amendment: local-tempdir `screen.screenshot` (window 0, 1920x1046) &#8594; `shutil.copyfile` to WSL &#8594; Claude-side inspect all succeed; PIL 12.2.0 bridge-side; tempdir `C:\Users\pract\AppData\Local\Temp`. Properties Render-tab scroll via `view2d.scroll_down` under `temp_override` works (brought Motion Blur into view). Window-0 default layout area map: PROPERTIES x1299 y35 w618 h792, OUTLINER x1299 y832 w618 h175, TIMELINE(DOPESHEET) x3 y35 w1291 h67, VIEW_3D x3 y107 w1291 h900; origin-flip WIN_H=1046.

---

## &#167;7 PNG PHASE 2 (manual Graph-Editor, Q6) &#8212; PLAN-LOCKED + COMPLETE 2026-06-22 (signed off `proceed`; defaults a/b/c)

**Capture set (2 manual Graph-Editor PNGs): #13 graph_editor, #21 noise_modifier.** Both = Graph-Editor framing/panel work, NOT bridge-drivable (Q6). Method: I stage a real animated F-curve via the bridge (so each capture has true content), Ray frames + Win+Shift+S saves DIRECT to WSL `images\`, then I crop/resize-in-place bridge-side (PIL) + `get_file_info` verify. Staging is torn down + 28-check pristine re-verified at chat close. `get_scene_info` before+after. c{N} pixel-verify deferred to INTEGRATION.

**Signed-off defaults:** (a) #13 emphasis = Z-Location-alone (single clean curve + handles); (b) #21 NOISE target = Z Location for #13&#8596;#21 continuity &#8212; **AMENDED IN EXECUTION** to X Location (see below); (c) skip #32/#23 body-expanded redo.

| # | slug | bridge-staged state (set &#8594; TEAR DOWN) | capture target | crop |
|---|------|-------------------------------------------|----------------|------|
| #13 | graph_editor | Camera 2 LocRot keyframes f1+f120, all BEZIER + AUTO_CLAMPED handles; 3 rotation fcurves HIDDEN (radian spread squashed Loc curves); Z Location selected; playhead f60 | Graph Editor: Bezier F-curves between keyframes + visible handles + channel list | Graph Editor area |
| #21 | noise_modifier | same keyframes + NOISE F-curve modifier (documentary Scale 4.0 / Strength 0.15 / Phase 0.0) on the ACTIVE (X) Location fcurve; N-sidebar Modifiers tab open | Graph Editor + Modifiers panel (Scale/Strength/Phase) + jittery curve | Graph Editor + sidebar |

**Build order:** #13 (keyframes only) &#8594; #21 (adds NOISE on same staged curve). Files: `images/lesson_23_{13_graph_editor,21_noise_modifier}.png`. c13/c21 registry rows at INTEGRATION.

**EXECUTION NOTE / default-(b) amendment:** the Graph-Editor Modifiers panel shows ONLY the modifiers of `context.active_editable_fcurve`, which resolved to `location[0]` (X) and is NOT settable via channelbag RNA (no `active_fcurve` attr; hiding non-targets makes active &#8594; None). So the NOISE modifier was placed on the X Location fcurve (the active one) to populate the panel; axis is not the teaching point, so c21 caption will read "Location channel" rather than naming the axis. **Blender 5.1.1 slotted-action reality:** `Action.fcurves` is gone; fcurves under `act.layers[0].strips[0].channelbags[0].fcurves` (slot `OBCamera`, 6 fcurves).

**STATUS: PHASE 2 COMPLETE 2026-06-22.** Both PNGs captured + cropped + verified: `lesson_23_13_graph_editor.png` 1295x990 / 136,825 B; `lesson_23_21_noise_modifier.png` 1918x1476 / 190,658 B. Blender restored TRUE-PRISTINE (28/28 checks pass, identical to chat-open baseline); 8 scratch temps deleted (0 remaining). c{N} overlays (c13/c21) deferred to INTEGRATION. See &#167;6 top entry. **8 of 10 build-now PNGs DONE; remaining = composite/render pair #18 + #22 (own fresh chat).**

---

## &#167;7 PNG PHASE 3 (composite/render pair, bridge-drivable) &#8212; PLAN-LOCKED 2026-06-22 (signed off `confirm`; defaults a=~65% path progression, b=HTML-table midpoints, c=P4 Scale 12)

**Capture set (2 bridge-driven PNGs): #18 follow_path_setup (3-panel composite), #22 shake_intensity (4-panel render).** Both scriptable via BlenderMCP (unlike Phase 1/2). Method: stage real scene via the bridge &#8594; capture/render each panel &#8594; bridge-side Pillow composite with the locked `#FF6B00` 2px vertical divider &#8594; crop/verify in-place + `get_file_info`. `get_scene_info` before+after; full 28-check pristine teardown + re-verify at chat close; scratch temps removed via bridge `os.remove`. c18/c22 overlay rows + cairosvg pixel-verify deferred to INTEGRATION (no baked text; composite-overlay variant per decisions 10/19).

### #18 `follow_path_setup` &#183; section `follow-path` &#183; 3-panel composite (viewport, SOLID clean-canvas)
**Teaching goal (matches HTML "Creating a Follow Path Camera" 3-beat arc):** draw path curve &#8594; attach camera via Follow Path constraint (Target=curve, Forward -Z, Up Y, Follow Curve on) &#8594; animate Path Animation so camera rides the curve.
**Bridge-staged scene:** real Bezier curve `Camera_Path_Main` (gentle S in XY + slight Z rise) + factory Cube subject at origin + Camera with a **Follow Path** constraint (`use_curve_follow=True`, forward `FORWARD_NEGATIVE_Z`, up `UP_Y`); curve `path_duration` set. 3 panels left&#8594;right, each a clean-canvas viewport capture (toolbar/N-panel/gizmo hidden per decision 20), locked `#FF6B00` 2px vertical dividers between:
- **P1 path:** 3/4 view, curve drawn through scene + subject cube, camera parked at path start.
- **P2 constraint:** same view, camera snapped onto path start, oriented along curve (Follow Curve on).
- **P3 animate:** camera advanced to ~65% along curve (eval_time / scene frame mid-animation), shows travel.
Panel labels (`P1 path`/`P2 constraint`/`P3 animate`) + value callouts (Target, Forward -Z, Follow Curve, Frames) deferred to **c18 overlay at INTEGRATION** (no baked text).

### #22 `shake_intensity` &#183; section `handheld-camera` &#183; 4-panel RENDER (F12, actual render output)
**Teaching goal (matches HTML "spectrum of shake" + Noise-modifier settings table):** same shot under a 4-rung shake-intensity ladder.
**Shake ladder (locked to HTML four named tiers + Scale/Strength table, midpoints):**

| panel | tier | Noise Scale | Strength loc / rot |
|-------|------|-------------|--------------------|
| P1 | Subtle stabilized | 2 | 0.05 / 0.6 |
| P2 | Documentary | 4 | 0.15 / 1.5 |
| P3 | Action / heavy | 7 | 0.4 / 4.0 |
| P4 | Found-footage extreme | 12 | 0.8 / 7.0 |

**Bridge-staged + rendered:** factory Cube + Light, Camera framing the cube; **motion_blur ON, shutter 0.5** (HTML ties handheld realism to motion blur; shake reads as blur not strobe). Plain-grey geometry &#8594; EEVEE F12 render (no color-dependent recipe; AgX stays). Per panel: apply Noise F-curve modifiers to camera Loc+Rot fcurves at that rung's Scale/Strength, render one still mid-shake, TEAR DOWN modifiers before next rung (panels independent). 4 panels composited left&#8594;right with locked `#FF6B00` 2px dividers. Tier labels + Scale/Strength values deferred to **c22 overlay at INTEGRATION** (no baked text).

**Build order:** #18 (curve + constraint, viewport composite) &#8594; #22 (noise renders). Files: `images/lesson_23_{18_follow_path_setup,22_shake_intensity}.png`. c18/c22 registry rows at INTEGRATION.

**STATUS: PHASE 3 COMPLETE 2026-06-22.** Both PNGs captured + composited + verified: `lesson_23_18_follow_path_setup.png` 2464x666 / 407,372 B (3-panel viewport composite, eval_time 0/78/156); `lesson_23_22_shake_intensity.png` 2486x349 / 206,691 B (4-panel F12 render, shake ladder 2/4/7/12 @ rot 0.6/1.5/4.0/7.0&#176;). Blender restored TRUE-PRISTINE (28/28 checks pass, identical to chat-open baseline); 27 scratch temps deleted (0 of this chat's remain). c{N} overlays (c18/c22) deferred to INTEGRATION. See &#167;6 top entry. **ALL 10 build-now PNGs + all 11 SVGs DONE. NEXT = INTEGRATION (fresh chat).**

---

## &#167;7 INTEGRATION &#8212; PLAN-LOCKED 2026-06-22 (pre-flight done in prep chat; anchors + c{N} specs verified, NOT yet edited into HTML)

**Pre-flight completed (prep chat):** read order done (session.md &#8594; this doc &#167;1&#8211;&#167;7 &#8594; IMAGE_STYLE_GUIDE v6). Live-HTML baseline re-confirmed byte-exact Claude-side (UTF-8 Python): bytes 220,817 / chars 219,917 / figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 2 / em-dash U+2014 60 / color222 0 (matches &#167;1; integration NOT started). All 11 SVGs read from disk (ids clean, no collisions, each carries `color="#222"` to strip on inline). All 10 PNGs copied Claude-side; pixel dims confirmed + visually inspected for callout placement. cairosvg 2.9.0 + PIL 12.1.1 confirmed Claude-side. **L22 indentation precedent confirmed** (in-section figure = `<figure>` col 20, contents col 24, SVG children col 28+; in-card = col 24; `color="#222"` stripped; structural comments kept; PNG overlay wrapper = `<div style="position:relative; max-width:100%;">` + img inline-style + overlay svg `inset:0`).

**On-disk vs spec deltas (use ON-DISK content verbatim):** #1 overview is 7,964 B on disk (spec logged 8,702 B; later refinement). #12 + #14 footer tips sit at y=526/546 on disk (not y=506) and their tip `<text>` opens on its own line with a newline before `<tspan>` (multi-line content to collapse on inline). #34 defines its `<defs>` markers (`mqArrow`/`mqArrowBack`) AFTER first use (valid forward ref; keep verbatim).

### Figure placement + verified anchors (21 figures, all at section depth unless noted)

Depth: every figure lands at **in-section depth** (figure tag col 20, contents col 24, figcaption col 24) per decision 11 + L22 precedent (section opens col 16, its h3/card siblings at col 20). Insertion = between a card's closing `</div>` and the next `<h3>`, ON the blank line. **Anchor disambiguator = the unique next-`<h3>` line** (the `</div>` + blank pattern repeats; the h3 text is unique). Use a 3-line anchor: `                    </div>` + blank + the named `<h3>`; insert the figure block + blank between the blank and the h3. Line numbers are pre-edit (will drift as edits land; re-find by h3 text, NOT by line number).

| # | type | id-prefix / cN | section | insert BEFORE this `<h3>` (pre-edit line) |
|---|------|----------------|---------|--------------------------------------------|
| 1 | SVG | `mo` | classic-camera-moves | `<h3>Dolly Movement (Forward/Backward)</h3>` (520) |
| 6 | SVG | `dy` | classic-camera-moves | `<h3>Tracking/Trucking (Left/Right)</h3>` (567) |
| 10 | SVG | `ob` | classic-camera-moves | `<h3>Zoom vs Dolly</h3>` (832) |
| 11 | SVG | `zd` | classic-camera-moves | (after Zoom card 871) before the blue `<div class="card" ...>` Quick Reference card (873) |
| 34 | SVG | `mq` | classic-camera-moves (summary-ref) | (after Quick-Ref card 936) before `</section>` (937) |
| 3 | SVG | `kw` | animation-fundamentals | `<h3>Keyframe Types</h3>` (347) |
| 4 | PNG | c4 1291x187 | animation-fundamentals | `<h3>Visualizing Camera Path</h3>` (433) |
| 5 | PNG | c5 994x485 | keyframe-basics | `<h3>Multiple Keyframes (Complex Paths)</h3>` (1098) |
| 13 | PNG | c13 1295x990 | keyframe-basics | `<h3>Common Keyframing Mistakes</h3>` (1176) |
| 12 | SVG | `it` | timing-and-easing | `<h3>Linear vs Eased Motion</h3>` (1351) |
| 14 | SVG | `es` | timing-and-easing | `<h3>Setting Easing in Blender</h3>` (1428) |
| 15 | PNG | c15 618x792 | camera-constraints | `<h3>Damped Track Constraint (Smooth Tracking)</h3>` (1703) |
| 17 | SVG | `og` | camera-constraints | `<h3>Copy Location Constraint (Follow Position)</h3>` (1848) |
| 18 | PNG | c18 2464x666 | follow-path | `<h3>Shaping the Path</h3>` (2090) |
| 21 | PNG | c21 1918x1476 | handheld-camera | `<h3>Method 2: Manual Keyframing (Advanced Control)</h3>` (2393) |
| 22 | PNG | c22 2486x349 | handheld-camera | `<h3>Combining Handheld with Planned Moves</h3>` (2572) |
| 23 | PNG | c23 618x792 | combining-with-dof | `<h3>Timing: Coordinating Movement and Focus</h3>` (2834) |
| 24 | SVG | `mf` | combining-with-dof | `<h3>Aperture Considerations</h3>` (2871) |
| 31 | PNG | c31 1291x364 | project | `<h3>Shot 1: Establishing Dolly</h3>` (3069) |
| 32 | PNG | c32 618x792 | project | `<h3>Success Checklist</h3>` (3357) |
| 33 | SVG | `sc` | summary | `<h3>Skills You've Gained</h3>` (3504) |

*(#11 inserts before the blue Quick-Reference card div at 873; #34 before the `</section>` at 937. Both still 3-line anchors with unique surrounding text. All others key off the unique next-h3.)*

### c{N} overlay specs (viewBox = PNG px; ids `c{N}-*`; composite-overlay variant for the divider'd composites #18/#22 = bottom-centered badge per panel, no highlight/leader; UI-chrome PNGs get highlight ellipse + leader + marker + badge per decision 10). Colorway: positive `#4ADE80`/text `#0f1a14`, warning `#E63946`/text `#fff`, neutral = brand orange callouts. Coords below are from VISUAL inspection of the cropped PNGs in the prep chat; cairosvg pixel-verify each over its PNG (1:1) BEFORE committing.

- **c4** (1291x187, timeline): two keyframe diamonds at x&#8776;45 (frame 0) + x&#8776;617 (frame 120) y&#8776;88; blue playhead at x&#8776;330 (frame 60); Start1/End250 readout top-right x&#8776;1000&#8211;1180 y&#8776;18. Callouts: "Keyframe" (badge on a diamond, e.g. the f120 one), "Playhead" (on blue line), "Frame range" (on Start/End). Neutral/positive colorway.
- **c5** (994x485, N-panel): "Camera to View" ticked checkbox at x&#8776;757 y&#8776;440 (blue); passepartout cube viewport left. Callout: "Lock Camera to View" (positive badge) on the checkbox. Optional 2nd: "View tab" on right rail x&#8776;975 y&#8776;190.
- **c13** (1295x990, Graph Editor): blue Z-Loc S-curve mid &#8776;x700 y280; orange Bezier handle on a keyframe at &#8776;x530 y219 (orange dot + horizontal handle bar). Callouts: "Interpolation curve" (on the S-curve) + "Bezier handle" (on the orange handle). Neutral colorway.
- **c15** (618x792, Track To): Target=Camera_Target field y&#8776;208; Track Axis "-Z" blue button x&#8776;540 y&#8776;244; Up "Y" blue button x&#8776;417 y&#8776;280. Callouts: "Target" (on Camera_Target), "To -Z" (on -Z btn), "Up Y" (on Y btn). Matches body verbatim. Positive colorway.
- **c18** (2464x666, 3-panel composite): composite-overlay variant (bottom-centered badge per panel, no highlight/leader). RE-MEASURE the two baked orange divider x-positions with a Pillow column-scan first, then set panel centers as the midpoints of the three regions. Bottom-centered panel labels: "P1 &#183; path" / "P2 &#183; constraint" / "P3 &#183; animate". Add one constraint callout chip (near P2 or as a footer band): "Target curve &#183; Forward -Z &#183; Follow Curve on". Neutral/brand colorway. Cone camera-proxy positions visible: P1 far-left, P2 mid-upper, P3 near the cube.
- **c21** (1918x1476, Graph Editor + Modifiers): jittery red X-Loc curve vs smooth curves; Noise panel (Scale 4.000 / Strength 0.150 / Phase 0.000) in N-sidebar right. Callouts: "Noise modifier" (on the jittery curve) + "Scale &#183; Strength &#183; Phase" (on the panel). Caption says "Location channel" (axis-agnostic, per Phase-2 amendment). Neutral colorway.
- **c22** (2486x349, 4-panel render): composite-overlay variant, bottom-centered tier label per panel. RE-MEASURE the three baked orange divider x-positions with a Pillow column-scan, then set the four panel centers as region midpoints. Labels: "Subtle &#183; Scale 2 &#183; Str 0.05" / "Documentary &#183; Scale 4 &#183; Str 0.15" / "Action &#183; Scale 7 &#183; Str 0.4" / "Extreme &#183; Scale 12 &#183; Str 0.8". Brand/neutral colorway.
- **c23** (618x792, Camera Data DoF, panel auto-expanded): "Depth of Field" enable checkbox ticked blue x&#8776;95 y&#8776;203; "Focus on Object"=Focus_Target field y&#8776;246; F-Stop 2.8. Callouts: "Focus Object" (positive badge on Focus_Target field) + optional "Enable DoF" on the checkbox. Positive colorway.
- **c31** (1291x364, Outliner+Timeline; baked orange divider y&#8776;180): Outliner top lists 3 cameras (Camera/Camera.001/Camera.002); Timeline bottom has 3 camera-bound markers at x&#8776;55 (f1 "Camera"), x&#8776;525 (f180 "Camera.001"), x&#8776;1155 (f420 "Camera.002"), End450. Callouts: "Multiple cameras" (on Outliner list) + "Camera-bound markers" (on the timeline markers). Neutral colorway.
- **c32** (618x792, Render props, Motion Blur collapsed-but-enabled): "Motion Blur" checkbox ticked blue x&#8776;95 y&#8776;583, header at y&#8776;583. Callouts: "Motion Blur" (positive badge on the ticked checkbox/header) + "Shutter 0.5" (value callout supplied by overlay since panel is collapsed, per Phase-1 route amendment). Positive colorway.

### Edit cadence (per figure, standing rules)
For each figure: build the inline block (SVG: strip root `color="#222"`, re-indent to col-24 content depth, collapse multi-line attr continuations, prune `<!-- ==== -->` ASCII-divider comments, KEEP short structural comments + role/aria/title/desc/id verbatim; PNG: wrapper div + img inline-style + overlay svg viewBox=PNG px + authored c{N} callouts). PNG overlays: cairosvg pixel-verify the overlay over the cropped PNG (1:1) Claude-side BEFORE commit. Then `edit_file` dryRun &#8594; commit &#8594; `get_file_info` &#8594; re-copy + UTF-8-aware Python re-count. Anchors 3 lines (extend 4&#8211;8 if ambiguous). 0 new em-dashes (use `&#183;`/entities; preserve existing 60). Batch suggestion: group by section to keep re-counts meaningful; re-derive ALL invariants at each checkpoint.

### TARGET close-invariants (LOCKED): figure 21 / figcaption 21 / img 10 / svg 21 (11 inline + 10 overlay) / mermaid 2 (preserved) / em-dash U+2014 60 (preserved) / color222 0. Re-derive from actuals at each checkpoint.

### After integration: browser QA narrow 380px + wide 900px (http://localhost:5504/lesson_23_camera_animation.html or headless Chromium/Playwright Claude-side); confirm all 10 overlays track their PNGs 1:1 at both widths. Bump session.md ONLY when L23 fully closes (integrated + QA-PASS).

**STATUS: INTEGRATION PLAN-LOCKED (anchors + c{N} specs verified in prep chat). Awaiting build in a fresh chat. Nothing written to HTML yet; live HTML still figure 0 / svg 0.**

### Pre-flight re-verified 2026-06-22 (2nd prep chat &#8212; measured values, so the build chat skips re-measuring)

- **Baseline re-confirmed byte-exact Claude-side** (UTF-8 Python): bytes 220,817 / chars 219,917 / figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 2 / em-dash U+2014 60 / color222 0. Matches &#167;1.
- **Tooling:** cairosvg 2.9.0 + PIL 12.1.1 confirmed Claude-side.
- **All 10 PNG dims === c{N} viewBox specs EXACTLY** (re-measured): c4 1291&#215;187 / c5 994&#215;485 / c13 1295&#215;990 / c15 618&#215;792 / c18 2464&#215;666 / c21 1918&#215;1476 / c22 2486&#215;349 / c23 618&#215;792 / c31 1291&#215;364 / c32 618&#215;792.
- **Anchor uniqueness:** 19 of 21 anchor `<h3>` strings occur EXACTLY once in live HTML (key off h3 text, lines drift). The 2 specials need multi-line anchors: **#11** inserts before the blue Quick-Reference card `<div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">` (immediately after the `#fff3cd` Important-Distinction card's `</div>`); **#34** inserts before the classic-camera-moves `</section>`, which sits AFTER a `<blockquote>` (The Grammar of Camera Movement). So classic-camera-moves final order = #1 &#8594; #6 &#8594; #10 &#8594; [Zoom card] &#8594; #11 &#8594; [blue Quick-Ref card] &#8594; [blockquote] &#8594; #34 &#8594; `</section>`. Standard insertion pattern confirmed: `</div>` at col 20 + blank + `<h3>` at col 20; figures land figure-tag col 20 / contents col 24 / svg-children col 28+ (L22 precedent).
- **Composite divider scans (Pillow column-scan of baked `#FF6B00` dividers) DONE &#8212; use these panel centers for c18/c22 bottom-centered labels:** **c18** dividers x=820 + 1642 &#8594; panel centers **410 / 1231 / 2053** (P1 path / P2 constraint / P3 animate). **c22** dividers x=620 + 1242 + 1864 &#8594; panel centers **310 / 931 / 1553 / 2175** (Subtle / Documentary / Action / Extreme).
- **Measured UI-chrome callout pixels (verified against actual PNG pixels, decision 19):** c4 keyframe diamonds centered (47,86) + (619,86) [color `#F5C242`], blue playhead x=330, Start1/End250 readout x&#8776;980&#8211;1180 y&#8776;18. c5 `Camera to View` ticked box x&#8776;757 y&#8776;440, View tab right rail x&#8776;975 y&#8776;190. c13 selected Z-Loc blue S-curve mid x&#8776;700 y&#8776;290, orange Bezier handle (dot+bar) x&#8776;530 y&#8776;219. c15 Target=Camera_Target y&#8776;208, Track Axis -Z blue btn x&#8776;540 y&#8776;244, Up Y blue btn x&#8776;417 y&#8776;280. c21 jittery red X-Loc curve most-noisy x&#8776;400&#8211;550 y&#8776;100, Noise panel values col x&#8776;1090 (Scale 4.000 / Strength 0.150 / Phase 0.000). c23 DoF enable tick x&#8776;95 y&#8776;203, Focus_Target field y&#8776;246, F-Stop 2.8 visible (panel auto-expanded). c31 Outliner 3 cameras top, baked divider y&#8776;180, timeline markers x&#8776;55 (f1 Camera) / x&#8776;525 (f180 Camera.001) / x&#8776;1155 (f420 Camera.002), End450. c32 Motion Blur ticked header x&#8776;95 y&#8776;583 (collapsed-but-enabled; Shutter 0.5 via overlay).
- **SVG inlining transform validated Claude-side** (strip root `color="#222"`, collapse multi-line root attrs + the multi-line tip `<text>`/`<tspan>` (present on #12/#14/#3), prune `====` divider comments, KEEP `<!-- Panel N -->`-style structural comments + role/aria/title/desc/id verbatim, re-indent root col 24 / children col 28+). On-disk deltas reconfirmed: #1 = 7,964 B; #34 defines `<defs>` markers AFTER first use (valid forward ref, keep verbatim); #3 desc + footer = on-disk verbatim (footer reads `... Blender fills every frame between, so press I &#8594; Location &amp; Rotation.`).
- **NOTHING written to HTML yet; build loop (author overlays &#8594; pixel-verify &#8594; edit_file commits &#8594; QA) is the fresh-chat task.**
