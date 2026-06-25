# Lesson 27 &#183; Basic Character Animation &#8212; Integration Progress (SOURCE OF TRUTH)

**Lesson:** `lesson_27_basic_character_animation.html` &#183; Module 6, lesson 4 of 4 (final lesson of Module 6 &#183; Introduction to Animation) &#183; final lesson of the Introduction Course (Modules 1&#8211;6, 27 lessons).
**Slug:** `basic_character_animation` (confirmed from `curriculum_overview.md`).
**Status:** PLAN-LOCKED (this chat). No figures produced yet. PRODUCTION not started.
**Plan-lock date:** 2026-06-24.

---

## Current state

- L26 (Graph Editor Essentials) FULLY CLOSED (25/25 + QA PASS). No active lesson before this plan-lock.
- L27 plan-lock complete this chat: title + slug confirmed, HTML existence + `get_file_info` confirmed, invariant baseline captured, all 10 placement-target section IDs confirmed present verbatim, roster resolved, format split resolved, this doc created, `session.md` set to L27 ACTIVE.
- **Blender: TRUE-PRISTINE** (carried from L26 close; no bridge work this chat). PRODUCTION will need Blender for the 14 PNG figures (Pose Mode / armature scene staging) &#8212; verify TRUE-PRISTINE before + after any keyed/rigged staging, same cadence as L25.
- Next step: fresh chat for SVG PRODUCTION (pilot first, then batches of 3).

---

## Roster (build-now = High + Medium; defer Lower)

**Build-now: 20 figures** (High 8 + Medium 12).
**Deferred: 10 Lower** &#8212; out of scope unless reopened.

### High priority (8) &#8212; all build-now
- #12 Walk Cycle Four Key Poses (PNG)
- #4 IK vs FK Comparison (SVG)
- #8 Center of Gravity and Balance (PNG)
- #18 Walk Cycle Contact Pose Tutorial (PNG)
- #19 Walk Cycle Passing Pose Tutorial (PNG)
- #15 Walk Cycle Timing Chart (SVG)
- #2 Armature Hierarchy Visualization (SVG)
- #22 Walk Cycle Problem Troubleshooting Guide (PNG)

### Medium priority (12) &#8212; all build-now
- #1 Character Animation vs Object Animation Comparison (PNG)
- #5 Pose Mode Interface Overview (PNG)
- #7 Line of Action Examples (SVG)
- #10 Silhouette Test Examples (SVG)
- #11 Twinning Examples (PNG)
- #13 Walk Cycle Body Mechanics Diagram (PNG)
- #16 Arm Swing Oppositional Pattern (SVG)
- #20 Root Motion Visualization (PNG)
- #21 Graph Editor Curves for Walk Cycle (PNG)
- #23 Personality Walk Variations (PNG)
- #3 Bone Anatomy Components (PNG)
- #6 Bone Selection Methods (PNG)

### Lower priority (10) &#8212; DEFERRED (out of scope unless reopened)
- #9 Contrapposto Stance Breakdown (PNG)
- #14 Foot Roll Sequence (SVG)
- #17 Wave Animation Key Poses (PNG)
- #24 Facial Animation Phoneme Chart (SVG)
- #25 X-Ray Mode and Display Options (PNG)
- #26 Pose Mode Tools Panel (PNG)
- #27 Keyframe Insertion Menu (PNG)
- #28 Dope Sheet with Character Animation (PNG)
- #29 Character Animation Workflow Diagram (SVG) &#8212; NOTE: an existing `<div class="mermaid">` workflow graph already lives in this section; #29 stays deferred and the mermaid diagram stays as-is.
- #30 Breakdown Poses in Walk Cycle (PNG)

**OPEN FLAG for Ray:** #17 (Wave Animation Key Poses) is the ONLY mapped figure for the `first-animation` section, yet it falls in Lower priority and is therefore deferred under the strict High+Medium rule. The `first-animation` section will have zero figures at close. If that section should carry a visual, promote #17 into build-now before PRODUCTION starts. Left deferred for now per the locked roster rule (one decision, no auto-promote).

---

## Format split (build-now 20)

Split taken verbatim from the requirements-doc **File Naming Convention** block (`.svg` vs `.png` extension per image number).

- **Inline SVG (6):** #2, #4, #7, #10, #15, #16
- **PNG w/ c{N} overlay (14):** #1, #3, #5, #6, #8, #11, #12, #13, #18, #19, #20, #21, #22, #23

PRODUCTION shape (mirrors L24/L25/L26):
- SVG chat(s): 6 inline SVGs &#8212; pilot first, then batches of 3. 6 figures &#8805; 5 &#8594; sub-chat split allowed per production phase.
- PNG chat(s): 14 PNG renders/captures &#8212; Pose Mode / armature scene staging via Blender bridge; cairosvg pixel-verify each overlay Claude-side before commit (LD19).
- INTEGRATION in its OWN chat (20 figures &#8805; 6).

---

## Placement-target section IDs (all confirmed present verbatim, each &times;1)

| Section ID | Present | Build-now figures mapped here |
|---|---|---|
| `character-animation-intro` | yes | #1 (#29 deferred) |
| `armatures-bones` | yes | #2, #3, #4 |
| `pose-mode` | yes | #5, #6 (#25, #27, #26 deferred) |
| `posing-principles` | yes | #7, #8, #10, #11 (#9 deferred) |
| `first-animation` | yes | none build-now (#17 deferred &#8212; see OPEN FLAG) |
| `walk-cycle-theory` | yes | #12, #13, #16 (#14 deferred), #15 |
| `walk-cycle-project` | yes | #18, #19 (#28 deferred) |
| `walk-cycle-refinement` | yes | #20, #21, #22 (#30 deferred) |
| `variations` | yes | #23 |
| `beyond-basics` | yes | none build-now (#24 deferred) |

---

## Placement map (build-now, from requirements doc "Image Placement Suggestions")

- #1 &#8594; `character-animation-intro`, after "What Makes Character Animation Different" heading.
- #2 &#8594; `armatures-bones`, after "What is an Armature?" heading.
- #3 &#8594; `armatures-bones`, within "Bone Anatomy in Blender" card.
- #4 &#8594; `armatures-bones`, within "IK vs FK" card.
- #5 &#8594; `pose-mode`, after "Entering and Exiting Pose Mode" heading.
- #6 &#8594; `pose-mode`, within "Selecting Bones" card.
- #7 &#8594; `posing-principles`, within "The Line of Action" card.
- #8 &#8594; `posing-principles`, within "Weight and Balance" card.
- #10 &#8594; `posing-principles`, within "Silhouette and Clarity" card.
- #11 &#8594; `posing-principles`, within "Twinning and Breaking Symmetry" card.
- #12 &#8594; `walk-cycle-theory`, within "The Four Key Poses" card.
- #13 &#8594; `walk-cycle-theory`, within "Body Mechanics in Walking" card.
- #16 &#8594; `walk-cycle-theory`, within "Arm Swing" card.
- #15 &#8594; `walk-cycle-theory`, within "Walk Cycle Timing" card.
- #18 &#8594; `walk-cycle-project`, within "Phase 1: First Contact Pose" card.
- #19 &#8594; `walk-cycle-project`, within "Phase 2: Passing Pose" card.
- #20 &#8594; `walk-cycle-refinement`, within "Fixing Foot Slide" card.
- #21 &#8594; `walk-cycle-refinement`, within "Graph Editor Polish" card.
- #22 &#8594; `walk-cycle-refinement`, within "Common Walk Cycle Problems" card.
- #23 &#8594; `variations`, within "Personality Through Walk" card.

Exact anchor strings (card open lines, heading lines, anchor uniqueness extensions) are resolved at INTEGRATION, not now. Several placements are "within a card" &#8594; expect the deeper-indent figure variant (col 20 figure / col 24 content) per LD11; confirm per-figure against the actual card open depth at INTEGRATION.

---

## id-prefix registry

**Inline-SVG id prefixes** (one unique prefix per SVG, per style-guide header rule; assigned at PRODUCTION, recorded here when locked):
- #2 Armature Hierarchy &#8212; prefix `ah` LOCKED (PRODUCED 2026-06-24, `lesson_27_02_armature_hierarchy.svg`, 7,038 bytes, 800&times;680 dense variant, cairosvg-verified light + dark; no footer tip &#8212; dense tree fills the canvas)
- #4 IK vs FK &#8212; prefix `ik` LOCKED (PRODUCED 2026-06-24, `lesson_27_04_ik_vs_fk_comparison.svg`, 6,423 bytes, cairosvg-verified light + dark)
- #7 Line of Action &#8212; prefix `la` LOCKED (PRODUCED 2026-06-24, `lesson_27_07_line_of_action.svg`, 5,068 bytes, cairosvg-verified light + dark)
- #10 Silhouette Test &#8212; prefix `st` LOCKED (PRODUCED 2026-06-24, `lesson_27_10_silhouette_test.svg`, 4,110 bytes, cairosvg-verified light + dark; stroke-capsule silhouette build)
- #15 Walk Cycle Timing Chart &#8212; prefix `tc` LOCKED (PRODUCED 2026-06-24, `lesson_27_15_walk_timing_chart.svg`, 9,808 bytes, 800&times;680 dense variant, cairosvg-verified light + dark)
- #16 Arm Swing Oppositional &#8212; prefix `as` LOCKED (PRODUCED 2026-06-24, `lesson_27_16_arm_swing_pattern.svg`, 5,763 bytes, cairosvg-verified light + dark)

**PNG overlay c{N}-* registries** (one `c{N}-*` namespace per PNG overlay, per LD10; assigned at INTEGRATION):
- #1, #3, #5, #6, #8, #11, #12, #13, #18, #19, #20, #21, #22, #23 &#8212; `c1-*`, `c3-*`, `c5-*`, `c6-*`, `c8-*`, `c11-*`, `c12-*`, `c13-*`, `c18-*`, `c19-*`, `c20-*`, `c21-*`, `c22-*`, `c23-*` respectively. Geometry coordinates locked here as each PNG is produced.
- **#8 `c8-*` LOCKED (PILOT PRODUCED 2026-06-24).** PNG `lesson_27_08_cog_balance.png`, 1116&times;559, 108,420 bytes. Two-panel composite (left CORRECT / right INCORRECT), `#FF6B00` 2px divider at x=557&#8211;559. Per-panel left-origin 0,0. c8 overlay viewBox `0 0 1116 559` (1:1). Locked geometry (cairosvg-verified Claude-side over the cropped composite, LD19): LEFT panel COG dot `c8-cog-ok` at (278.5,262.2) r9 `#F5C242`; green plumb `c8-plumb-ok` (278.5,262.2)&#8594;(278.5,500) dashed `#4ADE80`; support bracket (320,500)&#8594;(385,500) `#4ADE80`; ground dot (278.5,500) `#4ADE80` (inside base); positive badge `#4ADE80`/`#0f1a14` "COG Over Support &#183; Balanced" at rect (40,34,300,40). RIGHT panel COG dot `c8-cog-bad` at (898.3,262.2); red plumb `c8-plumb-bad` (898.3,262.2)&#8594;(898.3,505) dashed `#E63946`; support bracket (835,505)&#8594;(895,505) `#E63946`; ground dot (898.3,505) `#E63946` (OUTSIDE base, right of bracket); warning badge `#E63946`/`#ffffff` "COG Outside Support &#183; Falling" at rect (770,34,306,40). INTEGRATION polish notes (overlay-coord tweaks, no re-render): nudge right COG dot to true tipped-hip center; extend both support brackets to fully bracket the foot.
- **#18 `c18-*` LOCKED (PRODUCED 2026-06-24, batch 1).** PNG `lesson_27_18_contact_pose_tutorial.png`, 557&times;560, 55,125 bytes. Single Contact pose (L leg forward + near-straight, R leg back + bent, opposite arm swing), shallow-3/4 ORTHO. NO baked labels. c18 overlay viewBox `0 0 557 560` (1:1). Locked geometry (cairosvg-verified Claude-side, LD19): COG dot `c18-cog` (278.5,262.4) r9 `#F5C242`; green plumb `c18-plumb` (278.5,262.4)&#8594;(278.5,469.8) dashed `#4ADE80`; support bracket (195,469.8)&#8594;(392,469.8) `#4ADE80`; ground dot (278.5,469.8) r7 `#4ADE80` (inside base &#183; balanced); foot-contact dots `#E63946` r7 front (392.1,463.3) back (195.0,455.5); knee-bend circles r11 `#4ADE80` L (372.3,345.7) R (212.8,352.1); arm tips `c18-handL` (168.7,302.0) `c18-handR` (313.4,277.8); positive badge `#4ADE80`/`#0f1a14` "CONTACT &#183; Frame 1 &amp; 13" rect (20,22,300,40). INTEGRATION polish notes (overlay-coord tweaks, no re-render): knee circles project ~10px high of the true knee bend (lower both ~10px); foot-contact dots sit slightly inboard of toe tips (nudge front +12px, back &#8722;8px x).
- **#19 `c19-*` LOCKED (PRODUCED 2026-06-24, batch 1; pose re-solved + recaptured).** PNG `lesson_27_19_passing_pose_tutorial.png`, 557&times;560, 48,869 bytes. Single Passing pose at max height: support leg (L) planted UNDER the COG (re-solved thigh.L x=8/y=&#8722;4/z=6, foot.L x=16 &#8594; foot world (0.019,&#8722;0.067) under COG ground (0,&#8722;0.04)), passing leg (R) bent knee-high (thigh.R x=24/shin.R x=&#8722;72/foot.R x=20), hips +z 0.04. Ray confirmed: keep the corrected "foot-under-COG" pose. NO baked labels. c19 overlay viewBox `0 0 557 560` (1:1). Locked geometry (cairosvg-verified Claude-side, LD19): green plumb `c19-plumb` world-vertical through COG (263.4,262.4)&#8594;(263.4,469.8) dashed `#4ADE80` (lands at support foot 254.7,476.5 &#183; within 9px &#183; over support = balanced); COG dot `c19-cog` (263.4,262.4) r9 `#F5C242`; support-foot dot (254.7,476.5) r7 `#4ADE80`; ground dot (263.4,469.8) r7 `#4ADE80`; support knee (straight/locked) circle r11 `#4ADE80` (292.3,356.7); passing knee apex (high) circle r11 `#F5C242` (321.1,349.5); passing foot (123.5,408.1); head top (263.4,106.9); arm tips handL (212.4,304.1) handR (238.1,298.4); positive badge `#4ADE80`/`#0f1a14` "PASSING &#183; Frame 7 &amp; 19" rect (20,22,320,40). NON-OBVIOUS (3/4 parallax): a world-vertical plumb projects screen-vertical here only because COG world-x&#8776;0 sits at view-x center; the plumb anchor is the world-vertical projection, NOT screen-vertical from an arbitrary point.
- **#12 `c12-*` LOCKED (PRODUCED 2026-06-24, batch 1).** PNG `lesson_27_12_walk_cycle_key_poses.png`, 2234&times;560, 207,750 bytes. FOUR-panel composite (each panel 557 wide, `#FF6B00` 2px dividers; panel left-origins 0 / 559 / 1118 / 1677; divider x-bands 557&#8211;559, 1116&#8211;1118, 1675&#8211;1677). Panels = Contact F1 (reuses #18 capture) &#183; Down F4 &#183; Passing F7 (reuses #19 capture) &#183; Up F10, matching locked timing. NO baked labels. c12 overlay viewBox `0 0 2234 560` (1:1). Composite-overlay variant (LD10): baked dividers carry panel separation; each panel gets ONE centered top badge, no highlight/leader. Locked badge geometry (orange `#FF6B00`/white `#ffffff` per the composite-divider colorway; cairosvg-verified Claude-side, LD19): per-panel rect width 250, y=24, h=40, x = center&#8722;125, text-center y=51; panel centers + labels: (278) "CONTACT &#183; Frame 1", (837) "DOWN &#183; Frame 4", (1396) "PASSING &#183; Frame 7", (1955) "UP &#183; Frame 10".
- **#11 `c11-*` LOCKED (PRODUCED 2026-06-24, batch 2 prep).** PNG `lesson_27_11_twinning_examples.png`, 1116&times;560, 125,557 bytes. TWO-panel front-view composite: BAD left (perfectly symmetric raised arms, identical elbow bends = twinning) / GOOD right (asymmetric: L arm up-and-out bent elbow, R arm low/different angle, spine lean &#8722;6&deg;, weight-shift bent R knee). `#FF6B00` 2px divider x=556&#8211;558. NO baked labels. c11 overlay viewBox `0 0 1116 560` (1:1), composite-variant, cairosvg-verified Claude-side: LEFT badge warning red `#E63946`/`#ffffff` "TWINNING &#183; Symmetrical" rect (cx 278.5, y22, w330, h40); RIGHT badge positive green `#4ADE80`/`#0f1a14` "ASYMMETRY &#183; Natural" rect (cx 837.5, y22, w330, h40); both text-anchor=middle font-size22 weight700, text-y=50.
- **#13 `c13-*` LOCKED (PRODUCED 2026-06-24, batch 2).** PNG `lesson_27_13_walk_body_mechanics.png`, 557&times;560, 113,858 bytes. SIDE/profile ghost walk: 4 baked snapshot meshes (Contact &#183; Down &#183; Passing &#183; Up) spread along forward-Y (y_step 0.56, extent &plusmn;0.84), contrast-graded object colors (down darkest, passing brightest) to read as a temporal sequence; vertical bob real (hip world-z 0.97 / 0.90 LOW / 1.05 HIGH / 1.00). NO baked labels. c13 overlay viewBox `0 0 557 560` (1:1). Locked geometry (cairosvg-verified Claude-side, LD19; hip anchors MEASURED from cropped px per LD19): green `#4ADE80` vertical-bob wave `c13-vert` through hip anchors (57,308) (206,328) (361,287) (501,299) stroke 3.5, with hip dots r6/r7 and LOW tick (206, y354) / HIGH tick (361, y270); blue `#4A9EFF` horizontal forward arrow baseline (40,540)&#8594;(500,540) + arrowhead; red `#E63946` lateral-sway inset top-left translate(20,20) (S-curve path + 3 dots). Three legend badges font-size14 weight700: green `#4ADE80`/`#0f1a14` "VERTICAL &#183; 1&#8211;2 in" rect (44,22,172,26); blue `#4A9EFF`/`#0f1a14` "HORIZONTAL &#183; steady speed" rect (44,496,218,26); red `#E63946`/`#ffffff` "LATERAL &#183; ~1 in" rect (372,22,160,26). NON-OBVIOUS: lateral sway is the depth axis in profile so it cannot be a screen-path; shown as the top-down inset glyph + badge, not a traced path on the body.
- **#23 `c23-*` LOCKED (PRODUCED 2026-06-24, batch 2).** PNG `lesson_27_23_personality_variations.png`, 2234&times;560, 162,960 bytes. FOUR-panel profile composite (each panel 557 wide; panel left-origins 0 / 559 / 1118 / 1677; `#FF6B00` 2px divider x-bands 557&#8211;559, 1116&#8211;1118, 1675&#8211;1677; orange base fills divider gaps). Same rig, 4 personality walks: Happy (high bounce, chest up, big swing) &#183; Sad (low hips, slumped, head down, drag) &#183; Confident (pronounced back lean, chest up, big forward arm thrust, elbows out, wide stance &#183; v2 recapture to pass marginal-read vs Happy) &#183; Sneaky (deep crouch, bent knees, spine forward, arms tucked). NO baked labels. c23 overlay viewBox `0 0 2234 560` (1:1). Composite-overlay variant (LD10): one centered top badge per panel, orange `#FF6B00`/white `#ffffff` composite-divider colorway, cairosvg-verified Claude-side 1:1. Locked badge geometry font-size24 weight700, y=24 h=40 text-center-y=51, panel centers 278/837/1396/1955: "HAPPY &#183; Bouncy" rect (153,24,250,40); "SAD &#183; Dragging" rect (712,24,250,40); "CONFIDENT &#183; Swagger" rect (1251,24,290,40); "SNEAKY &#183; Crouched" rect (1830,24,250,40).
- **#1 `c1-*` LOCKED (PRODUCED 2026-06-24, batch 3).** PNG `lesson_27_01_character_vs_object.png`, 1116&times;560, 87,570 bytes. TWO-panel composite: LEFT simple sphere (bouncing ball, 1 pivot), RIGHT skinned mannequin in neutral A-pose (FRONT ORTHO, scale 2.7, cam (0,&#8722;6,1.0)). `#FF6B00` 2px divider x=557&#8211;559 (orange base fills gap); panel left-origins 0 / 559. NO baked labels. c1 overlay viewBox `0 0 1116 560` (1:1). Geometry to build at INTEGRATION (anchors measured / projected at integration time): LEFT panel = single pivot dot at ball center (~278,280) + a light motion-arc glyph + positive/neutral badge "1 PIVOT &#183; Simple motion"; RIGHT panel = joint dots on the mannequin (shoulders/elbows/wrists/hips/knees/ankles/spine/head, ~20 dots) + warning-neutral badge "20+ BONES &#183; Complex hierarchy" (orange composite-divider colorway or green/neutral per LD8 at integration). NON-OBVIOUS: ball and mannequin share the same FRONT cam + grey/cavity treatment so the two panels read as a like-for-like complexity contrast.
- **#3 `c3-*` LOCKED (PRODUCED 2026-06-24, batch 3).** PNG `lesson_27_03_bone_anatomy.png`, 557&times;560, 20,658 bytes. SINGLE octahedral-widget bone capsule host (3/4 ORTHO, scale 2.2, cam (5,&#8722;3.5,1.0)); synthetic-overlay figure per LD20 (real octahedral bones render blank, so a grey bone-shaped capsule is the render host and all anatomy labels are overlay). Vertical bone, narrow at both ends, widest bulge in the lower third (true Blender bone-widget silhouette). NO baked labels. c3 overlay viewBox `0 0 557 560` (1:1). Locked anchors MEASURED from the cropped PNG (LD19, centerline x&#8776;278): **Tip (Head)** top point (278,135); **Body** widest bulge (277,371); **Root (Base)** bottom point (278,424). Geometry to build at INTEGRATION: three callouts (leader + marker + badge) to those three anchors, positive green `#4ADE80`/`#0f1a14` badges "ROOT (Base)" / "BODY" / "TIP (Head)"; optional small X/Y/Z axis indicator in a corner. NON-OBVIOUS: the projection math (assuming a cylinder) put the widest point at z=1.0; the real widget bulge is at t=0.18 (z&#8776;0.71) so the MEASURED y=371 anchor (not the projected y) is authoritative.
- **#20 `c20-*` LOCKED (PRODUCED 2026-06-24, batch 3).** PNG `lesson_27_20_root_motion_viz.png`, 557&times;560, 109,236 bytes. SIDE/profile FORWARD ghost walk reusing the #13 ghost-snapshot pipeline: 4 baked evaluated-mesh snapshots (Contact / Down / Passing / Up) spread along forward-Y (`y_step 0.62`, centered) so they march left-to-right; contrast-graded object colors (grey 0.40 / 0.55 / 0.78 / 0.95, earliest darkest &#8594; latest brightest) via `shading.color_type='OBJECT'` so the temporal sequence reads; SIDE ORTHO (cam (6,0,1.0), scale 3.4, aim z 0.95). Live rig+skin `hide_set(True)` before capture. Crop x132&#8211;689 full-y &#8594; 557&times;560 (camera box detected at x132&#8211;688, threshold ~103 on top sky-band, same as recipe). NO baked labels. c20 overlay viewBox `0 0 557 560` (1:1). Locked anchors (projected `world_to_camera_view`, panel px): per-ghost root path GROUND (z=0.06) contact (&#8722;8.4,425.6) down (182.9,425.6) passing (374.1,425.6) up (565.4,425.6); HIP (z=1.0) contact (&#8722;8.4,270.8) down (182.9,270.8) passing (374.1,270.8) up (565.4,270.8); UNIFORM stride = 191.3 px between successive roots (maps to the 0.62-unit forward y_step). Geometry to build at INTEGRATION: yellow/orange `#FF6B00` root-path line along the ground anchors (CLAMP the contact x=&#8722;8.4 and up x=565.4 endpoints to the 0&#8211;557 panel), stride-length tick marks + "stride" badges at the four x-positions, forward-direction arrowhead. NON-OBVIOUS: the edge ghosts' bodies span the full panel so the first/last root x project a few px outside the panel; clamp at integration, do NOT recapture.
- **#22 `c22-*` LOCKED (PRODUCED 2026-06-24, batch 3).** PNG `lesson_27_22_troubleshooting_guide.png`, 1400&times;960, 10,697 bytes. Pillow WARNING-VIGNETTE overlay-HOST per LD21 (NOT a render, NOT a Canva raster) &#8212; built Claude-side / bridge-side with Pillow, dark-grey&#8594;warm-amber vertical gradient bg, 3px orange top accent, yellow `#F5C242` footer rail. 3 rows &times; 3 columns: PROBLEM (warning-red `#E63946`-bordered cards, col left-x 40) &#8594; CAUSE (neutral grey cards, col left-x 500) &#8594; SOLUTION (positive-green `#4ADE80`-bordered cards, col left-x 960); col width 400; orange `#FF6B00` flow arrows between columns per row. NO baked text &#8212; every word is the c22 overlay at INTEGRATION. c22 overlay viewBox `0 0 1400 960` (1:1). Reserved clear-band layout for INTEGRATION text: title band y12&#8211;92 (full width, left orange rail); 3 column-header orange tabs at x40 / x500 / x960, y100&#8211;116 (column titles "PROBLEM" / "CAUSE" / "SOLUTION" land just above); per-card label band x+16&#8594;x+w&#8722;16, y+16&#8594;y+52; row top-y = 120 / 380 / 640, row height 240, row centers y240 / y500 / y760; badge circle slots top-right of each problem card (red-X) and solution card (green-check) at x+w&#8722;50&#8594;x+w&#8722;14, y+12&#8594;y+48. The three rows map to the spec problems: Floating/Sliding, Robotic Motion, Off-Balance (causes: no root fwd motion / linear interpolation / COG not over support; solutions: add root translation / Bezier + breakdowns / adjust hip over planted foot). Colorway per LD8 (warning red text/badge on problems, positive green on solutions, orange accents).
- **#5 `c5-*` LOCKED (PRODUCED 2026-06-24, UI-chrome sub-chat).** PNG `lesson_27_05_pose_mode_interface.png`, 821&times;560, 84,532 bytes. UI-CHROME capture (NOT the mannequin recipe) per LD20: real 19-bone rig in POSE MODE with octahedral bone widgets VISIBLE (display_type OCTAHEDRAL, show_in_front), relaxed standing A-pose (arms lowered via world-space helper, opposite world-Y signs L/R), 3/4 User-Ortho view, demo selection = right-arm chain `upperarm.R`+`forearm.R` (active `forearm.R`) showing Blender's native CYAN selected-bone theme color vs grey unselected. Captured via full-window `screen.screenshot` to Win tempdir (carries header/toolbar overlays) + deterministic area-2 crop (VIEW_3D x3 y447 w821 h560; crop box (3, WIN_H&#8722;(447+560), 824, WIN_H&#8722;447) at WIN_H 1046). Authentic chrome present: mode selector "Pose Mode", Transform Tools toolbar, header/Pose menu, axis gizmo, grid floor, 3D cursor. NO baked labels. c5 overlay viewBox `0 0 821 560` (1:1). Geometry to build at INTEGRATION: callouts (leader + marker + badge) to mode selector (top-left), selected bone (cyan arm chain), unselected bones (grey), Transform Tools toolbar, Pose menu, axis gizmo; v6 palette badges (green/orange), NOT cyan (cyan is the authentic native bone color in the capture, not an overlay color). DECISION: dropped the spec's "timeline keyframe diamonds" callout (no timeline strip in this focused single-viewport overview); the timeline/curve story is carried by #21. NON-OBVIOUS: FRONT-ortho collapses the rest-pose arms (straight along world X) into flat slivers; a 3/4 view is required for the humanoid silhouette to read. `view_selected` frames the SELECTED bones, so select-all &#8594; view_selected &#8594; restore-demo-selection to frame the WHOLE rig.
- **#6 `c6-*` LOCKED (PRODUCED 2026-06-24, UI-chrome sub-chat).** PNG `lesson_27_06_bone_selection_methods.png`, 2467&times;560, 119,357 bytes. THREE-panel composite (each panel 821 wide; panel left-origins 0 / 823 / 1646; `#FF6B00` 2px dividers at x-bands 821&#8211;823 and 1644&#8211;1646). Same rig/framing/pose as #5, three distinct selection STATES (result-state approach &#8212; transient box/circle tool glyphs can't be held statically by the bridge, so the method is conveyed by the selection footprint + the c6 badge): Panel 1 CLICK SELECT = single bone `forearm.R`; Panel 2 BOX SELECT = right-leg group `thigh.R`+`shin.R`+`foot.R`; Panel 3 SELECT LINKED = full right-arm chain `shoulder.R`+`upperarm.R`+`forearm.R`+`hand.R`. Marginal-read check passed pre-composite (one small bone / a leg group / a whole arm chain read distinctly). NO baked labels. c6 overlay viewBox `0 0 2467 560` (1:1). Composite-overlay variant (LD10): one centered top badge per panel, no highlight/leader. Locked badge geometry (positive green `#4ADE80`/`#0f1a14`, font-size22 weight700, y=24 h=40 text-center-y=51; cairosvg-verified Claude-side 1:1): Panel-1 center 410 "CLICK SELECT" rect (285,24,250,40); Panel-2 center 1233 "BOX SELECT &#183; B" rect (1098,24,270,40); Panel-3 center 2056 "SELECT LINKED &#183; L" rect (1906,24,300,40).
- **#21 `c21-*` LOCKED (PRODUCED 2026-06-24, UI-chrome sub-chat).** PNG `lesson_27_21_graph_editor_curves.png`, 1572&times;407, 60,660 bytes. GRAPH EDITOR capture per LD20: keyed the hips vertical bob on `pose.bones["hips"].location` index 1 (LOCAL Y = world +Z, confirmed from `matrix_local`), 9 keys F1/4/7/10/13/16/19/22/25 (values 0.0/&#8722;0.03/0.05/0.02 repeating), BEZIER + AUTO_CLAMPED handles &#8594; smooth 2-bounce walk wave. Layered-action API (Blender 5.x): fcurve at `action.layers[0].strips[0].channelbags[0].fcurves[0]` (NOT `action.fcurves`). Graph Editor area (x3 y35 w1572 h407) configured `space.mode='FCURVES'`, N-panel off, `graph.view_all` under WINDOW temp_override; captured full-window `screen.screenshot` + deterministic area crop. Did NOT maximize (area already large + full curve/chrome captured; avoided the documented maximize-stall for marginal gain). Authentic chrome: View/Select/Marker/Channel/Key menus, channel list (L27Rig / L27RigAction), frame axis 0&#8211;26, value axis 0.00/0.05, playhead F25, orange keyframe points + Bezier handles. NO baked labels. c21 overlay viewBox `0 0 1572 407` (1:1). Locked anchors (MEASURED from cropped PNG px per LD19; green-curve pixel scan + linear frame-x/value-y fit: 43.67 px/frame, F7 x685, F19 x1209; value 0.05&#8594;y88, 0.00&#8594;y266, &#8722;0.03&#8594;y373): peaks (HIGH Passing) F7 (685,88) F19 (1209,88); contacts (LOW Contact, baseline) F1 (423,266) F13 (947,266); Down lows F4 (554,373) F16 (1078,373). Geometry to build at INTEGRATION (cairosvg-verified 1:1 this chat): green `#4ADE80` "HIGH &#183; Passing" badge+marker+leader at each peak (rect cx685/cx1209 w250 h38 y26, marker r8 stroke4 at the peak, leader to badge); blue `#4A9EFF` "LOW &#183; Contact" badge+marker+leader at each contact baseline point (rect cx423/cx947 w246 h38 y320, marker r8 at the point, leader down); axis-appropriate colorway (this curve IS the Z-location channel, so blue Z `#4A9EFF` for the lows reads correctly). Optional "Smooth wave = natural bounce" note at INTEGRATION.

---

## Invariant baseline (captured this chat, UTF-8 Python on Claude-side copy)

Source: `lesson_27_basic_character_animation.html`, `get_file_info` size 190,010 bytes, modified Fri Jun 12 2026.

| Invariant | Baseline |
|---|---|
| bytes | 190,010 |
| `<figure` | 0 |
| `<figcaption` | 0 |
| `<img` | 0 |
| `<svg` | 0 |
| `mermaid` | 5 |
| em-dash U+2014 | 72 |
| `color="#222"` | 0 |

**mermaid = 5 note:** the existing lesson ships one rendered workflow diagram as `<div class="mermaid">` plus its CDN-import + `mermaid.initialize` harness lines (5 string hits total, 1 rendered diagram). This is CSS/JS-harness noise of the same kind seen in L21 (2), L26 (4); it is NOT a figure and is preserved verbatim. Do NOT treat the mermaid count as a figure-count signal.

**em-dash U+2014 = 72 note:** all 72 are pre-existing literal em-dashes in the shipped lesson prose. Preserve every one verbatim; add zero new em-dashes (use `&#183;`). Re-verify the count is still 72 at EVERY checkpoint (after each commit at INTEGRATION, and at close).

---

## Projected close target (build-now 20)

20 build-now = 6 inline SVG + 14 PNG-with-overlay. Each PNG figure adds 1 `<img>` and 1 overlay `<svg>`; each inline SVG adds 1 `<svg>`. Each figure adds 1 `<figure>` + 1 `<figcaption>`.

| Invariant | Close target | Derivation |
|---|---|---|
| `<figure` | 20 | one per build-now figure |
| `<figcaption` | 20 | one per build-now figure |
| `<img` | 14 | one per PNG figure |
| `<svg` | 20 | 6 inline + 14 overlay |
| `mermaid` | 5 | unchanged (harness noise preserved) |
| em-dash U+2014 | 72 | unchanged (no new em-dashes; all pre-existing preserved) |
| `color="#222"` | 0 | inlined SVG roots stripped per LD12; remains 0 |
| bytes | grows | final value recorded at close |

---

## Locked rules cross-reference (carry forward, unchanged)

- `\\wsl$\` paths ONLY; never `\\wsl.localhost\`. Chrome can't use `wsl$` as a `file:` host &#8212; QA via `http://localhost:5504/<lesson>.html` or headless Chromium/Playwright Claude-side.
- 0 new em-dashes (use `&#183;`); preserve all pre-existing U+2014 verbatim; re-verify count (72) at every checkpoint.
- `Filesystem:write_file` for new files / full overwrites (never `create_file`); `edit_file` dryRun&#8594;commit&#8594;`get_file_info` per commit at INTEGRATION.
- `blender:execute_blender_code` lowercase only.
- cairosvg pixel-verify Claude-side before EVERY PNG-overlay commit (LD19).
- No Filesystem delete tool &#8212; remove temps via Blender bridge `os.remove`.
- STYLE: `IMAGE_STYLE_GUIDE.md` v6 governs (LD1&#8211;21), NOT 4.0-era prompt hexes. Axis X=`#E63946` / Y=`#4ADE80` / Z=`#4A9EFF`; brand orange `#FF6B00`; no cyan. The requirements-doc prompts use legacy hexes (`#2b2b2b`, `#00ffff` cyan, `#ff8c00`); v6 palette OVERRIDES those at PRODUCTION.
- Capture Blender 5.1.1.
- Color-dependent renders: F12 `render.render` under Standard view transform (LD17); plain-grey geometry + UI-chrome captures exempt.
- INTEGRATION in its own chat (&#8805;6 figures); sub-chat splits at &#8805;5 figures per production phase.
- Ray communicates tersely, one version no alternatives; warn before context gets long rather than allowing auto-compaction.

---

## Skinned-rig PNG recipe (LOCKED at pilot, 2026-06-24) &#8212; reuse for all 14 PNGs

The 14 PNG character figures use a skinned mannequin, NOT bare octahedral bones (bones render blank in `render.opengl` and tangle in pure profile). Recipe proven on pilot #8.

**Rig:** 19-bone humanoid armature, built in EDIT mode. Chains: `hips`&#8594;`spine`&#8594;`chest`&#8594;`neck`&#8594;`head`; L/R `shoulder`&#8594;`upperarm`&#8594;`forearm`&#8594;`hand`; L/R `thigh`&#8594;`shin`&#8594;`foot`. Standing rest ~1.75 tall, hips at z=1.0. (Reusable builder code carried in this chat's history; rebuild deterministically.)

**Skin:** ONE mesh (`L27Skin`, ~868 verts), capsule per bone (barrel-profiled cylinder, 8 segs) + head sphere; per-bone vertex groups at full weight (1.0 REPLACE, rigid); single Armature modifier bound to the rig; smooth shading. Grey Principled `L27SkinGrey` base color (0.62,0.62,0.64) rough 0.6. Hide octahedral bones via `bone.hide=True` (does NOT stop deformation).

**Camera (grey-geometry EXEMPT path, no F12/Standard):** ORTHO, shallow 3/4 (`location (6,-1.4,1.0)`, `ortho_scale 2.7`, aim z=0.92 via `to_track_quat('-Z','Y')`). Pure profile tangles L/R limbs; shallow 3/4 separates them while the plumb still reads.

**Capture:** clean-canvas staging (toolbar/N-panel/header/gizmo OFF, floor ON, axes OFF, cursor/text/stats OFF); SOLID + `color_type='SINGLE'` grey (0.6) + world cavity ON for form. Force camera via `space.region_3d.view_perspective='CAMERA'` (NOT the `view3d.view_camera()` toggle op &#8212; the toggle exits camera view if already in it). `DRAW_WIN_SWAP` x3, then `screen.screenshot_area` to Windows tempdir &#8594; Pillow &#8594; WSL. `render.opengl` renders armatures BLANK; must use `screenshot_area`.

**Crop:** camera box in the 821&times;560 area capture = side-bar grey 87.3 vs box grey 119.0; detect box columns with threshold ~103 on a top sky-band, crop x132&#8211;688 (y full). Yields ~557&times;559 per panel.

**Composite:** Pillow side-by-side, `#FF6B00` 2px divider (fill the gap with the orange). NO baked labels/numbers &#8212; all badges/lines/markers are the `c{N}` overlay at INTEGRATION.

**Verify (LD19):** cairosvg-rasterize the `c{N}` overlay at viewBox=composite-px (1:1) over the cropped PNG Claude-side, view-confirm alignment BEFORE locking geometry. cairosvg IS available Claude-side.

**Project overlay coords:** `world_to_camera_view(scene,cam,worldpt)` gives norm (0..1 of full 821&times;560 frame); convert to panel px: `px = norm_x*821 - 132`, `py = (1-norm_y)*560 - 1`; add right-panel x-offset (557+2=559).

**Pristine:** verify TRUE-PRISTINE before staging AND after (remove `L27Skin`/`L27Rig`/`L27Skin` mesh/`L27Rig` armature/`L27SkinGrey` mat, unhide Cube, restore camera PERSP (12,-13,9)+AgX, restore toolbar/header, orphan-purge). Confirm objects=Camera/Cube/Light, 0 armatures/actions/materials, 1 mesh, AgX, frame 1, image_count 2.

---

## Status log

- **2026-06-24 &#8212; PLAN-LOCK (this chat).** Read order completed: `session.md` &#8594; `curriculum_overview.md` (L27 = "Basic Character Animation", slug `basic_character_animation`, Module 6 lesson 4 of 4) &#8594; `IMAGE_STYLE_GUIDE.md` v6 (LD1&#8211;21) &#8594; `lesson_27_image_requirements.md`. Confirmed HTML exists (`get_file_info` 190,010 bytes). Captured invariant baseline (figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 5 / em-dash 72 / color222 0). Confirmed all 10 placement-target section IDs present verbatim. Resolved roster (build-now 20 = High 8 + Medium 12; defer 10 Lower). Resolved format split (6 inline SVG `{2,4,7,10,15,16}` + 14 PNG `{1,3,5,6,8,11,12,13,18,19,20,21,22,23}`). Created this progress doc. Set `session.md` &#8594; L27 ACTIVE. OPEN FLAG raised: #17 is the only `first-animation` figure but is Lower/deferred. Next: fresh chat for SVG PRODUCTION (pilot first, then batches of 3).
- **2026-06-24 &#8212; SVG PRODUCTION COMPLETE (this chat).** All 6 inline SVGs produced, cairosvg-verified Claude-side on both light and dark backgrounds, and written to `images/` via `Filesystem:write_file` + `get_file_info`. Pilot #4 IK vs FK (`ik`) signed off, then batch 1 = #2 Armature Hierarchy (`ah`), #7 Line of Action (`la`), #10 Silhouette Test (`st`); batch 2 = #15 Walk Cycle Timing Chart (`tc`), #16 Arm Swing Oppositional (`as`). All 6 id-prefixes LOCKED in the registry above. v6 palette throughout: transparent / `currentColor` theming, brand orange `#FF6B00`, no cyan, axis colors reserved (none of the 6 needed literal 3D axes). 0 new em-dashes (`&#183;` separators). #2 and #15 use the 800&times;680 dense variant; #4/#7/#10/#16 use default 800&times;560. #10 uses a stroke-capsule silhouette build (more robust than hand paths). #2 omits the footer tip (dense tree fills the canvas to y=673). Standalone `.svg` roots retain `color="#222"` for `<img>` fallback (stripped only at INTEGRATION inlining per LD12). OPEN FLAG #17: no decision given &#8212; remains DEFERRED per the locked default; `first-animation` will close with 0 figures unless reopened. Live HTML untouched this chat (invariant baseline unchanged at 190,010 bytes). Next: separate chat for PNG PRODUCTION (14 PNG, Pose Mode / armature staging via Blender bridge &#8212; verify TRUE-PRISTINE before + after), then INTEGRATION in its own chat (20 figures).
- **2026-06-24 &#8212; PNG PRODUCTION: PILOT #8 COMPLETE + SIGNED OFF (this chat).** OPEN FLAG #17 resolved by Ray: DEFERRED (confirmed) &#8212; `first-animation` closes with 0 figures. TRUE-PRISTINE verified at open (Camera/Cube/Light, 0 armatures/actions/materials, 1 mesh, AgX, frame 1, image_count 2, camera (12,-13,9)). Pilot pivoted from #12 to #8 (single-pose de-risk before 4-pose composite). KEY FINDING: bare octahedral bones render BLANK in `render.opengl` and tangle in pure profile &#8212; adopted the skinned-mannequin path (Ray chose option 1). Locked the Skinned-rig PNG recipe (see section above) and produced the first deliverable: `lesson_27_08_cog_balance.png` (1116&times;559, 108,420 bytes), two-panel COG/balance composite (left balanced / right falling), `#FF6B00` 2px divider, NO baked labels. c8 overlay geometry LOCKED + cairosvg-verified Claude-side 1:1 (see c8 registry). TRUE-PRISTINE restored + confirmed at close. Live HTML untouched (baseline still 190,010 bytes). Remaining 13 PNGs: #1, #3, #5, #6, #11, #12, #13, #18, #19, #20, #21, #22, #23 &#8212; produce in fresh sub-chats (batches), same recipe; #5/#6/#21 are Blender UI-chrome captures (not the mannequin), handle per-figure. Then INTEGRATION in its own chat (20 figures). PNG production progress: 1 / 14 done.
- **2026-06-24 &#8212; PNG PRODUCTION: BATCH 1 COMPLETE (#12 / #18 / #19) (this chat).** Walk-cycle batch sharing one rig build + one pose library + the locked F1/F4/F7/F10 timing. TRUE-PRISTINE verified at open (Camera/Cube/Light, 0 arm/act/mat, 1 mesh, AgX, frame 1, image_count 2, cam (12,-13,9)). Rebuilt the 19-bone rig + L27Skin mannequin (510 verts, nearest-bone-segment rigid weights, single Armature modifier, `L27SkinGrey` 0.62 grey, smooth, bones hidden) deterministically per the locked recipe. Defined 4 key poses (Contact / Down / Passing / Up); captured each via shallow-3/4 ORTHO (`(6,-1.4,1.0)`/scale 2.7) + clean-canvas + `region_3d.view_perspective='CAMERA'` + `screenshot_area` &#8594; Win tempdir &#8594; Pillow &#8594; WSL; crop x132&#8211;689 full-y &#8594; 557&times;560 panels. Deliverables: **#18** Contact (`lesson_27_18_contact_pose_tutorial.png`, 557&times;560, 55,125 B), **#19** Passing (`lesson_27_19_passing_pose_tutorial.png`, 557&times;560, 48,869 B), **#12** four-panel composite (`lesson_27_12_walk_cycle_key_poses.png`, 2234&times;560, 207,750 B; `#FF6B00` 2px dividers, panels reuse the #18 + #19 captures for Contact + Passing). All three view-confirmed; marginal-read check passed pre-composite (4 panels read distinctly). c18 / c19 / c12 overlay geometry LOCKED + cairosvg-verified Claude-side 1:1 (see registries). **#19 NON-TRIVIAL:** first passing capture planted the support foot lateral/forward of the COG &#8594; plumb did not read over support. Re-solved support leg (thigh.L x=8/y=&#8722;4/z=6, foot.L x=16) to plant the foot under the COG in world space, recaptured #19 + #12 p3; Ray confirmed keep the corrected "foot-under-COG" pose. Logged the 3/4-parallax plumb insight (world-vertical projection, not screen-vertical) in the c19 registry. Four `_temp_l27_12_p*.png` panel temps removed via bridge `os.remove`; Win tempdir raws cleaned. TRUE-PRISTINE restored + confirmed at close. Live HTML untouched (baseline still 190,010 bytes). Remaining 10 PNGs: #1, #3, #5, #6, #11, #13, #20, #21, #22, #23 (#5/#6/#21 are UI-chrome captures &#8212; own sub-chat). PNG production progress: 4 / 14 done.
- **2026-06-24 &#8212; PNG PRODUCTION: BATCH 2 COMPLETE (#11 / #13 / #23) (this chat).** Mannequin batch 2. Bridge was already live (rig + L27Skin + hidden Cube + saved `_l27_cam_orig`) from the prior chat; reused it directly. **#11** was produced in batch-2 prep (prior chat) and is now registered here: `lesson_27_11_twinning_examples.png` (1116&times;560, 125,557 B), 2-panel front-view BAD-twinning / GOOD-asymmetry, c11 LOCKED. **#13** `lesson_27_13_walk_body_mechanics.png` (557&times;560, 113,858 B): SIDE/profile ghost walk built from 4 baked snapshot meshes (Contact/Down/Passing/Up) spread along forward-Y with real vertical bob (hip world-z 0.97/0.90/1.05/1.00), contrast-graded so the sequence reads; c13 overlay = green vertical-bob wave through MEASURED hip pixel anchors + blue forward arrow + red lateral-sway inset, three axis-colored legend badges, cairosvg-verified 1:1. NON-OBVIOUS findings logged: hips vertical bob is hips-bone LOCAL Y (maps to world +Z), not local Z (local Z maps to world &#8722;Y forward); the live rig armature must be `hide_set(True)` before capture or octahedral bones show through the ghost meshes; ghost differentiation needs `shading.color_type='OBJECT'` + per-object colors (SINGLE grey washes them flat). **#23** `lesson_27_23_personality_variations.png` (2234&times;560, 162,960 B): 4-panel profile composite (Happy/Sad/Confident/Sneaky), `#FF6B00` 2px dividers; Confident recaptured v2 (stronger back-lean + arm thrust) to pass the marginal-read check vs Happy before compositing; c23 = 4 centered orange composite-divider badges, cairosvg-verified 1:1. All overlay geometry LOCKED (see c11/c13/c23 registries). CLEANUP: all `_l27_*` Win-tempdir raws + WSL temps (`_l27_13_crop`, `_l27_23_review`, `_l27_test_crop`, `_l27_11_bad_crop`, `_l27_11_good_crop`, `_l27_axtest_crop`/2/3) removed via bridge `os.remove`; images/ holds only deliverables (no `_l27` temps). TRUE-PRISTINE restored + confirmed at close (Camera/Cube/Light, 0 arm/act/mat, 1 mesh, AgX, frame 1, image_count 2, cam (12,-13,9) PERSP, Cube visible, `_l27_cam_orig` key deleted, orphans purged). Live HTML untouched (baseline still 190,010 bytes). **Remaining 7 PNGs: #1, #3, #5, #6, #20, #21, #22** (#5/#6/#21 are Blender UI-chrome captures &#8212; own sub-chat). PNG production progress: 7 / 14 done. Then INTEGRATION in its own chat (20 figures).
- **2026-06-24 &#8212; PNG PRODUCTION: BATCH 3 COMPLETE (#1 / #3 / #20 / #22) (this chat).** Mannequin batch 3 &#8212; closes the mannequin set. Bridge had RESET to TRUE-PRISTINE since batch 2 (verified at open: Camera/Cube/Light, 0 arm/act/mat, 1 mesh, AgX, frame 1, image_count 2, cam (12,&#8722;13,9) PERSP). Rebuilt the 19-bone rig + L27Skin mannequin (558 verts, per-bone rigid vertex groups, single Armature modifier, `L27SkinGrey` 0.62 grey, smooth, bones hidden) deterministically per the locked recipe; saved `_l27_cam_orig`; hid Cube. **#1** `lesson_27_01_character_vs_object.png` (1116&times;560, 87,570 B): two-panel FRONT-ortho composite, LEFT simple sphere (1 pivot) / RIGHT mannequin A-pose (20+ joints), `#FF6B00` 2px divider; A-pose set via the world-space pose helper (upperarms lowered ~50&deg; about world Y). **#3** `lesson_27_03_bone_anatomy.png` (557&times;560, 20,658 B): SINGLE octahedral-widget bone capsule host (synthetic-overlay figure per LD20 &#8212; real bones render blank), 3/4 ortho; c3 anchors MEASURED from the cropped PNG per LD19 (tip 278,135 / body-widest 277,371 / root 278,424). **#20** `lesson_27_20_root_motion_viz.png` (557&times;560, 109,236 B): SIDE forward ghost walk reusing the #13 pipeline &#8212; 4 baked evaluated-mesh snapshots (Contact/Down/Passing/Up) spread along forward-Y (y_step 0.62), contrast-graded object colors (0.40/0.55/0.78/0.95) so the sequence reads, live rig hidden before capture; c20 root-path anchors projected (uniform stride 191.3 px; edge roots project a few px outside the panel &#8212; CLAMP at integration, do NOT recapture). **#22** `lesson_27_22_troubleshooting_guide.png` (1400&times;960, 10,697 B): Pillow WARNING-VIGNETTE overlay-HOST per LD21 (NOT a render) &#8212; 3&times;3 PROBLEM/CAUSE/SOLUTION grid (red/neutral/green cards, orange flow arrows, yellow footer rail), reserved clear bands + badge-circle slots, NO baked text. All four view-confirmed; #1 / #3 / #20 NO baked labels, #22 NO baked text &#8212; all c{N} overlays built at INTEGRATION. c1 / c3 / c20 / c22 registry entries LOCKED above. CLEANUP: 9 temps removed via bridge `os.remove` (4 Win-tempdir raws + 5 WSL crops/full: `_l27_01_mann/_ball`, `_l27_03_bone`, `_l27_20_root_crop/_full`); images/ holds only deliverables (no `_l27` temps). One temp was briefly file-locked by a Pillow handle &#8212; `gc.collect()` + per-file try/except cleared it. TRUE-PRISTINE restored + confirmed at close (Camera/Cube/Light, 0 arm/act/mat, 1 mesh, AgX, frame 1, image_count 2, cam (12,&#8722;13,9) PERSP, Cube visible both flags, `_l27_cam_orig` deleted, orphan-purge clean, UI restored: toolbar/header/gizmo ON, overlays floor+axes ON, shading color_type MATERIAL / light STUDIO / cavity OFF). Live HTML untouched (baseline still 190,010 bytes). **MANNEQUIN SET COMPLETE.** Remaining 3 PNGs: #5, #6, #21 &#8212; all Blender UI-chrome captures (Pose Mode interface / bone selection methods / Graph Editor curves), own sub-chat (NOT the mannequin recipe; use the docked-panel local-tempdir + popover-freeze capture routing per LD20). PNG production progress: 11 / 14 done. Then INTEGRATION in its own chat (20 figures).
- **2026-06-24 &#8212; PNG PRODUCTION: UI-CHROME SUB-CHAT COMPLETE (#5 / #6 / #21) &#8212; PNG PRODUCTION COMPLETE (this chat).** Final 3 PNGs, all Blender UI-chrome captures (NOT the mannequin recipe), per LD20 capture-path routing. TRUE-PRISTINE verified at open (Camera/Cube/Light, 0 arm/act/mat, 1 mesh, AgX, frame 1, image_count 2, cam (12,&#8722;13,9) PERSP, Cube visible). Built the 19-bone rig in POSE MODE with octahedral bone widgets VISIBLE (unlike the mannequin figs where bones were hidden); used the 'Animation' workspace layout (large VIEW_3D area 2 = x3 y447 w821 h560, plus its built-in GRAPH_EDITOR area = x3 y35 w1572 h407). All three captured via full-window `screen.screenshot` to Win tempdir (carries header/toolbar/editor overlays) + deterministic area crop; UI-chrome is grey-geometry EXEMPT so stayed AgX (no F12/Standard). **#5** `lesson_27_05_pose_mode_interface.png` (821&times;560, 84,532 B): 3/4 Pose-Mode viewport overview, relaxed standing A-pose (arms lowered via world-space helper, opposite world-Y L/R), right-arm chain selected (native cyan), authentic chrome (mode selector / Transform Tools / Pose menu / axis gizmo / grid). **#6** `lesson_27_06_bone_selection_methods.png` (2467&times;560, 119,357 B): 3-panel composite (CLICK / BOX / SELECT LINKED) at the same framing, three distinct selection STATES (single bone / leg group / arm chain), `#FF6B00` 2px dividers, marginal-read check passed pre-composite. **#21** `lesson_27_21_graph_editor_curves.png` (1572&times;407, 60,660 B): Graph Editor with the hips vertical-bob fcurve (keyed `pose.bones["hips"].location` idx 1 = local Y = world +Z, 9 keys F1&#8211;25, Bezier/auto-clamped), smooth 2-bounce wave, peaks at F7/F19 (Passing), contacts at baseline F1/F13; layered-action fcurve path `action.layers[0].strips[0].channelbags[0].fcurves[0]`; did NOT maximize (area already large &#8212; avoided the maximize-stall). All three view-confirmed; #6 and #21 overlay geometry cairosvg-verified Claude-side 1:1; #5 anchors recorded for INTEGRATION. NO baked labels on any of the three. c5 / c6 / c21 registry entries LOCKED above. DECISION: #5 drops the spec's "timeline keyframe diamonds" callout (no timeline strip in the focused viewport; the curve story is #21). CLEANUP: all 12 `_l27_*` temps removed via bridge `os.remove` (9 Win-tempdir raws/crops/panels + 3 WSL review temps); images/ holds only deliverables (no `_l27` temps). TRUE-PRISTINE restored + confirmed at close (Camera/Cube/Light, 0 arm/act/mat, 1 mesh, AgX, frame 1, image_count 2, cam (12,&#8722;13,9) PERSP, Cube visible both flags, orphan-purge clean, VIEW_3D + GRAPH_EDITOR chrome restored: toolbar/header/N-panel/gizmo ON, shading SOLID color_type MATERIAL, overlays floor+axes ON). Live HTML untouched (baseline still 190,010 bytes). **PNG production progress: 14 / 14 done &#8212; PNG PRODUCTION COMPLETE.** All 20 build-now figures now produced (6 inline SVG + 14 PNG-with-overlay). Next: INTEGRATION in its own chat (20 figures &#8805; 6) &#8212; inline the 6 SVGs (strip `color="#222"`, re-indent, per LD12) and place the 14 PNG figures with their c{N} overlays built from the locked registry geometry, edit_file dryRun&#8594;commit&#8594;get_file_info per commit, re-verify em-dash count (72) + invariants at every checkpoint, then browser QA at 380px and 900px.
- **2026-06-25 &#8212; INTEGRATION COMPLETE (this chat).** All 20 build-now figures committed + verified in the live HTML. Prior chat had committed #1 and #2; this chat committed the remaining 18 via `edit_file` (dryRun&#8594;commit&#8594;`get_file_info` cadence). Commit order this session: #5, #4, #3, #6, #7, #8, #10, #11, #12, #13, #16, #15, #18, #19, #20, #22, #23, #21. The 6 inline SVGs were rebuilt per LD12 (root `color="#222"` stripped, root collapsed to 1 line, ascii-divider comments pruned, structural comments kept, re-indented, role/aria/title/desc/id preserved) &#8212; each 0.0000% render-diff vs original; live id-prefixes: `ah`, `ik`, `la`, `st`, `tc`, `as`. The 14 c{N} overlays were built from the locked registry geometry, cairosvg-verified 1:1 over their PNG and view-confirmed. Four overlay-coord fixes from the resume brief applied: **#18** knees +10y (L 372.3,355.7 / R 212.8,362.1) + foot dots (404.1 / 187.0); **#5** selected-bone marker (388,205)&#8594;badge(585,238) + unselected (430,360)/badge(250,470) + mode/toolbar/menu/gizmo callouts; **#22** column titles on baked orange tabs at y113 + X glyphs x387 / check x1252 at rows y138/397/657; **#1** ~20 joint dots measured onto the right-panel A-pose silhouette (panel x0=559). **#19** (NOT among the brief's 4 fixes) re-measured + reprojected per Ray's instruction (fix like #18): COG hip (283,310), plumb to support foot (290,500)/ground (283,495), support knee (283,365 green), passing knee apex (312,358 yellow), passing foot (180,442 red), hands (243,300)/(268,295) &#8212; verified 1:1.

### Per-commit log (18 commits this session)

| # | Order | Figure | Type | Section | Result |
|---|---|---|---|---|---|
| #5 | 1 | Pose Mode Interface Overview | PNG + c5 overlay | `pose-mode` | committed + verified (UI-chrome; 5-callout fix applied) |
| #4 | 2 | IK vs FK Comparison | inline SVG (`ik`) | `armatures-bones` | committed + verified (LD12 rebuild) |
| #3 | 3 | Bone Anatomy Components | PNG + c3 overlay | `armatures-bones` | committed + verified |
| #6 | 4 | Bone Selection Methods | PNG + c6 overlay | `pose-mode` | committed + verified (3-panel) |
| #7 | 5 | Line of Action Examples | inline SVG (`la`) | `posing-principles` | committed + verified (LD12 rebuild) |
| #8 | 6 | Center of Gravity and Balance | PNG + c8 overlay | `posing-principles` | committed + verified |
| #10 | 7 | Silhouette Test Examples | inline SVG (`st`) | `posing-principles` | committed + verified (LD12 rebuild) |
| #11 | 8 | Twinning Examples | PNG + c11 overlay | `posing-principles` | committed + verified |
| #12 | 9 | Walk Cycle Four Key Poses | PNG + c12 overlay | `walk-cycle-theory` | committed + verified (4-panel) |
| #13 | 10 | Walk Cycle Body Mechanics | PNG + c13 overlay | `walk-cycle-theory` | committed + verified |
| #16 | 11 | Arm Swing Oppositional Pattern | inline SVG (`as`) | `walk-cycle-theory` | committed + verified (LD12 rebuild) |
| #15 | 12 | Walk Cycle Timing Chart | inline SVG (`tc`) | `walk-cycle-theory` | committed + verified (LD12 rebuild) |
| #18 | 13 | Walk Cycle Contact Pose | PNG + c18 overlay | `walk-cycle-project` | committed + verified (knee/foot coord fix) |
| #19 | 14 | Walk Cycle Passing Pose | PNG + c19 overlay | `walk-cycle-project` | committed + verified (re-measured + reprojected) |
| #20 | 15 | Root Motion Visualization | PNG + c20 overlay | `walk-cycle-refinement` | committed + verified (edge roots clamped) |
| #22 | 16 | Walk Cycle Troubleshooting Guide | PNG + c22 overlay | `walk-cycle-refinement` | committed + verified (tab/glyph coord fix) |
| #23 | 17 | Personality Walk Variations | PNG + c23 overlay | `variations` | committed + verified (4-panel) |
| #21 | 18 | Graph Editor Curves for Walk Cycle | PNG + c21 overlay | `walk-cycle-refinement` | committed + verified (UI-chrome) |

(Prior chat, not this session: #1 Character Animation vs Object Animation &#8212; PNG + c1 overlay &#8594; `character-animation-intro`; #2 Armature Hierarchy &#8212; inline SVG `ah` &#8594; `armatures-bones`. Both live + verified. Total live = 20.)

### FINAL INVARIANT TABLE (recorded at close, UTF-8 Python over the live file)

| Invariant | Close target | Recorded at close | Met |
|---|---|---|---|
| bytes | (grows) | 286,622 | recorded |
| `<figure` | 20 | 20 | yes |
| `<figcaption` | 20 | 20 | yes |
| `<img` | 14 | 14 | yes |
| `<svg` | 20 (6 inline + 14 overlay) | 20 | yes |
| `mermaid` | 5 | 5 | yes |
| em-dash U+2014 | 72 | 72 | yes |
| `color="#222"` | 0 | 0 | yes |

Every close target met exactly. No new em-dashes added (all 72 pre-existing preserved); mermaid harness (5) preserved verbatim; all 6 inlined SVG roots stripped of `color="#222"` per LD12 (count remains 0).

**INTEGRATION COMPLETE**
