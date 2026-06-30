# Lesson 37 (Armature and Bones) &#8212; Integration Progress

**File:** `lesson_37_armature_and_bones.html` &#183; Module 7 (Advanced Modeling), lesson 10 &#183; slug `armature_and_bones`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**Requirements doc:** `lesson_37_image_requirements.md` (30 candidates, priority-tiered).

---

## BASELINE (live, old-gen, created==modified 2026-06-19, pre-integration)
- bytes 248,093; figure/figcaption/img/svg **0** (clean slate)
- U+2014 **95** (all pre-existing prose &#8212; PRESERVE verbatim); U+2192 77 (prose); U+2013 0; literal U+00B7 0
- `#667eea` 18 (13 gradient-card + 1 mermaid-theme + 4 mermaid style-fill) / `#764ba2` 13 / `linear-gradient` 13
- currentColor 0; `color="#222"` 0; color: white 62
- mermaid LIVE: jsdelivr 1 + mermaid.initialize 1 + `class="mermaid"` 4
- tables: 2 (1 already `.table-wrap` [Naming Cheat Sheet], 1 bare [Edit Mode vs Pose Mode])
- links: lesson_36 back 1 + lesson_38 next 1

## 11 SECTIONS (confirmed, match requirements placement map 1:1)
understanding-armatures / bone-anatomy / creating-first-armature / bone-hierarchies / positioning-bones / naming-conventions / biped-armature / bone-properties / symmetry-mirroring / project / summary

---

## PHASE-0 MODERNIZATION &#8212; CLOSED 2026-06-28
**Live md5 `f73319a32588e207b3cf9f49eef91889`, bytes 247,601** (baseline 248,093 -> -492).
Edits committed via `Filesystem:edit_file` dryRun->commit->get_file_info (FIRST-match-only confirmed; repeated strings required per-occurrence unique anchors &#8212; split into 2 commits: commit-1 = mermaid-theme + 1st gradient + 1st style-fill + table-wrap; commit-2 = remaining 12 gradients + 3 style-fills via heading/node anchors):
- 13 gradient cards `linear-gradient(135deg,#667eea 0%,#764ba2 100%)` -> `#2a2a2a` (KEEP `color:white`, intentional)
- mermaid `primaryBorderColor:'#667eea'` -> `#888888` (1); `style A fill:#667eea` -> `#3a3a3a` (4) &#8212; mermaid KEPT LIVE (L34-L36 mirror)
- bare table (Edit Mode vs Pose Mode) wrapped `.table-wrap` + `min-width: max-content`

**Post-close invariants (UTF-8 python3, on-disk) &#8212; ALL PASS:**
`#667eea`/`#764ba2`/`linear-gradient` **0**; `background: #2a2a2a` 13; `style A fill:#3a3a3a` 4; `primaryBorderColor '#888888'` 1; residual `style A fill:#667eea` 0; U+2014 **95 HELD**; U+2192 77; U+2013 0; literal U+00B7 0; `<table>` 2 / `.table-wrap` 2; color: white 62 (KEPT); currentColor 0; mermaid `class="mermaid"` 4 + jsdelivr 1 + init 1; figure/figcaption/img/svg 0; lesson_36 1 / lesson_38 1.

---

## ROSTER TRIAGE (30 candidates) &#8212; APPROVED 2026-06-28
**BUILD = 24** (High 8 + Medium 8 + 8 promoted Lower):
- High `{2,4,7,9,15,18,19,24}`
- Medium `{1,6,8,11,13,21,26,29}`
- promoted Lower `{3,5,10,12,16,17,22,30}`

**DEFER = 6 Lower** `{14,20,23,25,27,28}` (batch-rename UI, x-axis-mirror live-demo, custom-shapes, test-poses, bone-layers, add-armature-menu &#8212; text-sufficient; out of scope unless reopened).

## FORMAT SPLIT
- **8 inline SVG** `{2,3,7,11,13,15,26,29}` (schematic/diagram/text/blueprint/grid/mode-chart per requirements SVG list + #29 mode chart)
- **16 PNG+c37** `{1,4,5,6,8,9,10,12,16,17,18,19,21,22,24,30}` (Blender viewport/render/UI/anatomical)

## SVG BATCH (8 inline) &#8212; DONE 2026-06-28
All 8 inline SVGs LIVE and verified. NOTE: the prior chat's premise that the 8 SVGs "reproduce deterministically" from prose specs was FALSE &#8212; specs are prose, so regenerated SVGs are pixel-faithful to spec but NOT byte-identical to the prior chat's. The prior locked byte ladder (->303,779) and per-commit deltas were therefore STALE. A FRESH ladder was computed from the actual committed blocks and used instead.

**FRESH byte ladder (authoritative, every checkpoint verified via get_file_info):**
252,958 (ba live, start) -> +rl 256,839 -> +dt 262,162 -> +ph 269,920 -> +nc 275,485 -> +bp 287,169 -> +cm 296,073 -> +ep **301,193 (FINAL, NOT 303,779)**.

Commit order + first-match anchors: #2 ba (already live from prior chat) &#183; #11 rl (`<h4>Bone Display Types</h4>`) &#183; #3 dt (`<h4>Bone Layers and Organization</h4>`) &#183; #7 ph (`<h4>Automatic Hierarchy from Extrusion</h4>`) &#183; #13 nc (`<h4>Side Suffixes - Left and Right</h4>`) &#183; #15 bp (`<h4>Step-by-Step Biped Construction</h4>`; harmless empty `<g stroke="#2b3d4f" />` artifact kept to preserve verified-figure byte-exactness) &#183; #26 cm (extended anchor: "The Truth" para containing one of the 95 literal U+2014 in "here—it", PRESERVED verbatim, + mermaid `graph TD`) &#183; #29 ep (inserts BEFORE the Critical Mode Distinction card; emoji preserved). Each: edit_file dryRun->commit->get_file_info, U+2014 held at 95 every checkpoint.

**FINAL invariants (UTF-8 python3, on real live file) &#8212; ALL PASS:**
bytes **301,193**; figure/figcaption/`</figure>`/svg **8/8/8/8**; img 0; U+2014 **95**; U+2192 77; U+2013 0; U+00B7 0; all 8 id-prefixes present (ba 3 / rl 6 / dt 3 / ph 6 / nc 3 / bp 3 / cm 4 / ep 4); currentColor 154; `color="#222"` 0; `#667eea`/`#764ba2`/`linear-gradient` 0; `<table>` 2 / table-wrap 2; mermaid `class="mermaid"` 4 + jsdelivr 1; lesson_36 1 / lesson_38 1.

---

## PNG BATCH 1 (renders {1,9,18,24,30}) &#8212; DONE 2026-06-29
All 5 base renders on disk in `images/`, px-boxes verified == intended c37 box, overlays DEFERRED to integration. Live HTML byte count UNCHANGED 301,193 (PNG production does not touch HTML). Blender TRUE-PRISTINE at close (20/20 checks PASS vs L22 baseline).
- #1  lesson_37_01_armature_concept_diagram.png   1920x1080  876,660 B (content-rich ghost render, accepted)
- #9  lesson_37_09_anatomical_positioning.png      1920x1200  439,011 B
- #18 lesson_37_18_leg_forward_knee.png            1600x1000  305,671 B
- #24 lesson_37_24_complete_tpose_armature.png     2400x1600  596,902 B
- #30 lesson_37_30_finger_bones_detail.png         1600x1200  594,355 B

**#30 reconciliation:** built/rendered the anatomically-correct 15-bone hand armature `L37_hand` = 1 palm (`hand.L`) + 14 finger segments (thumb 2: thumb_01/02.L; index/middle/ring/pinky 3 each: _01/_02/_03.L), all parented to `hand.L`. The spec's line "Total: 16 bones (1 palm + 15 finger segments)" is internally inconsistent arithmetic (15 segments would need a 3-bone thumb, contradicting the spec's own "Thumb (2 bones)" breakdown). Kept the 2-seg thumb / 15-bone total matching the spec's explicit per-finger list; figcaption at integration to state accurate count (15 bones = 1 palm + 14 segments). Front ortho view (look down -Y; hand is planar in XZ), OCTAHEDRAL, opengl viewport path, edit-mode all-bones-selected for orange selection highlight.

Teardown: clear_L37() removed L37_hand obj+armature; orphan purge deleted 16 leftover data-blocks (15 Cube.* + 1 Sphere from earlier batch staging); restored Cube/Camera/Light hide_viewport+hide_render=False; render settings reset to 1920x1080@100 / EEVEE / AgX / fps24 / frame 1-250. TRUE-PRISTINE re-verified. Windows temp render removed via bridge os.remove.

## PNG BATCH 2 (renders {6,8,16,17,22}) &#8212; DONE 2026-06-29
All 5 base renders on disk in `images/`, px-boxes verified == intended c37 box (confirmed at composite-save via Pillow `strip.size`), overlays DEFERRED to integration. Live HTML byte count UNCHANGED 301,193 (PNG production does not touch HTML). Blender TRUE-PRISTINE at close (20/20 checks PASS vs L22 baseline).
- #6  lesson_37_06_extrusion_process.png            2400x800   154,605 B (6-panel seq, single bone -> 3-bone chain)
- #8  lesson_37_08_hierarchy_testing.png            1920x900   304,651 B (2-panel before/after; shoulder selected -> rotated 55deg, whole arm chain follows)
- #16 lesson_37_16_spine_construction.png           2400x800   151,168 B (6-panel seq, pelvis -> head, developing S-curve)
- #17 lesson_37_17_arm_chain_build.png              2000x1000  203,558 B (4-panel seq, shoulder -> upper_arm -> forearm -> hand)
- #22 lesson_37_22_deform_checkbox_comparison.png   1600x1200  676,987 B (2-panel stacked; Deform ON mesh bends with bone / Deform OFF mesh stays straight while bone moves)

**Size note:** #6 (154,605) and #16 (151,168) land below the 200 KB render-floor; these are content-legitimately sparse 6-panel composites (5/6 of each canvas is flat dark background, thin octahedral bones). NOT blank-frame faults &#8212; geometry confirmed present via view-inspection on every panel before + after compositing. Accept-with-note (content-density exception, inverse of the documented content-rich exception). #8/#17/#22 land inside the 200-800 KB band.

**Recipe notes (Batch 2 specifics):**
- Multi-panel seqs (#6/#16/#17) and pose pairs (#8/#22) all rendered via opengl viewport path, FRONT ortho (look down -Y, FRONT_Q quaternion), FIXED view_distance per figure for consistent bone scale (do NOT view_selected per panel). Pillow-composite with 2px `#FF6B00` (255,107,0) dividers; 1px divider-color margins to hit exact target W.
- #6/#16/#17 progressive build = add one bone (one joint point) per panel from a fixed anchor; each panel a fresh `make_chain` in EDIT mode with all edit_bones .select/.select_head/.select_tail=True for the orange selection highlight on octahedral fill.
- #8 before/after: built two static edit-mode armatures (straight arm vs shoulder-pivot-rotated 55deg in XZ view plane); shoulder = sel_bone_idx 0 (orange), children grey, so the rotated parent + following children read.
- #22 ON/OFF: cylinder limb (16-vert, depth 4, subdivide 12) + 2-bone armature; ARMATURE_AUTO parent. ON = both bones use_deform, upper posed; OFF = upper.use_deform=False + vertex_groups.clear() + re-parent ARMATURE_AUTO (only `lower` group binds) so posed upper bone moves but mesh stays. Semi-transparent L37_ghost material (alpha 0.55) + `arm.show_in_front=True` + viewport xray so the bone reads through the mesh. **KEY:** pose-bone bend must be about LOCAL Z (=world X, in-view-plane bend) NOT local Y (roll, twist) and NOT local X (=world -Y, bends into screen, invisible in front view) &#8212; verified by checking `(arm.matrix_world @ pb.tail)` lands on the X axis. `pose_bone.bone.select` is NOT settable the way edit_bone.select is; dropped the pose-bone select step (show_in_front suffices).

Teardown: clear_L37() removed L37_limb mesh+obj, L37_defarm armature+obj, L37_ghost material; orphan purge (reported 0 orphans &#8212; clear_L37 do_unlink + explicit data removal left nothing); restored Cube/Camera/Light hide_viewport+hide_render=False (trio was hidden during all renders); render reset 1920x1080@100 / EEVEE / AgX / None / fps24 / frame 1-250; viewport overlay flags restored to friendly defaults. TRUE-PRISTINE re-verified 20/20. All 40 temps removed via bridge os.remove (20 Windows TEMP + 20 WSL images/_l37_* staging relays).

## PNG BATCH 3 (UI-chrome {4,5,21} DONE; {12,19} DEFERRED to manual path) &#8212; 2026-06-29
Scriptable UI-chrome figures {4,5,21} produced + on disk in `images/`, px-boxes == intended c37 box, overlays DEFERRED to integration. Live HTML byte count UNCHANGED 301,193. Blender TRUE-PRISTINE at close (18/18 checks PASS vs L22 baseline). #12 (Ctrl+N Recalc-Roll popover) and #19 (Armature&gt;Symmetrize menu stage) routed to manual Win+Shift+S overlay-freeze path per Ray (Locked decision 20, transient popovers the bridge cannot open/dismiss) &#8212; STILL TO CAPTURE.
- #4  lesson_37_04_three_modes_comparison.png   2400x900   147,989 B (3-panel Object/Edit/Pose; orange object-outline / orange Edit selection / cyan Pose selection; 2px #FF6B00 dividers)
- #5  lesson_37_05_selection_methods.png        1600x1600  180,085 B (2x2 grid: body / head-tail / box / circle selection subsets; 2px #FF6B00 dividers)
- #21 lesson_37_21_bone_properties_panel.png    1920x1080   78,499 B (Bone Properties POSE-mode panel; padded 976-&gt;1080 with bg (48,48,48))

**UI-chrome accept-size:** all three land in the no-floor UI-chrome band (78-180 KB, well under the 250 KB flag). Class keyed by capture path (Locked decision 22).

**Recipe notes (Batch 3 specifics):**
- Single clean 3-bone vertical chain armature `L37_modes` (OCTAHEDRAL, show_in_front) reused for #4 + #5. Trio hidden during staging.
- #4 three modes: clean-canvas viewport (toolbar/N-panel/nav-gizmo OFF, SOLID + show_object_outline, floor/axes/cursor/text/stats OFF), FRONT ortho + view_selected. Full-window `screen.screenshot` to Windows tempdir, crop to VIEW_3D WINDOW region (x,y,w,h with bottom-left-&gt;top-left origin flip) which already excludes header/tool-header strips. Object-mode = object-outline (whole armature); Edit-mode = all edit_bones .select/.select_head/.select_tail=True + active bone; Pose-mode = all pose_bones selected (**`pose_bone.select` IS settable; `pose_bone.bone.select` and data `bone.select` are NOT** &#8212; data Bone exposes only `hide_select`). Composited 3 panels 799/798/799 + 2x 2px dividers = exactly 2400 (no lossy final resize). Centered square-ish crop clips header mode-name text; mode-selector dropdown + per-panel labels land as c37 overlay at integration (no fake baked text, L35 #13/#14/#16 precedent).
- #5 selection methods: 4 Edit-mode selection states on `L37_modes`, each a DISTINCT selected-subset (body=middle bone whole; head/tail=top bone tail tip only; box=bottom two bones; circle=all three). **Octahedral display ties the bone body-edge color to endpoint selection, so a true "isolated grey-body joint" read is NOT achievable** &#8212; the head/tail panel needed a recapture; the distinction carries via WHICH subset is lit, and the technique labels (Click / Click Sphere / B+Drag / C+Paint) + box/circle tool overlays defer to the c37 overlay (L21 weak-composite-read precedent). 2x2 grid 799x799 panels + 2px dividers = 1600x1600.
- #21 bone properties: docked PROPERTIES area, `space.context='BONE'`, bone active in POSE mode (**only mode showing all five target sections together: Transform / Relations / Inverse Kinematics / Deform-checkbox-visible / Viewport Display** &#8212; Edit mode has Head/Tail/Roll Transform but NO IK section). Isolated maximize/capture/restore (each in its OWN execute_blender_code call per L18 maximize-stall fix; re-find area after maximize = 1920x976 fullscreen at y=32). Panel-expand state is UI-screen state, NOT cleanly scriptable via Python API; captured with Transform expanded + Deform checkbox checked-and-visible. Padded 1920x976-&gt;1920x1080 with sampled panel bg (48,48,48), content top-aligned so the c37 overlay has a clear band below. Section labels land as c37 overlay.

Teardown: clear_L37() removed L37_modes obj+armature; orphan purge 0 (do_unlink + armature-data removal left nothing); restored Cube/Camera/Light hide_viewport+hide_render=False; render reset 1920x1080@100 / EEVEE / AgX / None / fps24 / frame 1-250; viewport overlay flags restored. TRUE-PRISTINE re-verified 18/18 PASS. All 28 temps removed via bridge os.remove (18 Windows TEMP raws+crops + 10 WSL images/_l37_b3_* relays incl. discarded _l37_b3_sel_headtail.png + _l37_b3_sel_grid_preview.png).

## PNG BATCH 4 (render {10} critical_joint_positions) &#8212; DONE 2026-06-29
Scriptable 2x2 close-up joint composite #10 produced + on disk in `images/`, px-box 1600x1600 == intended c37 box, overlays DEFERRED to integration. Live HTML byte count UNCHANGED 301,193. Blender TRUE-PRISTINE at close (18/18 checks PASS vs L22 baseline). {12,19} STILL DEFERRED to manual Win+Shift+S popover path (dedicated manual sub-chat recommended).
- #10 lesson_37_10_critical_joint_positions.png   1600x1600   1,212,088 B (2x2 grid, four joints; semi-transparent ghost proxy + correct-vs-wrong bone placement per panel; 2px #FF6B00 dividers)

**Size note:** #10 lands at 1.21 MB, above the 200-800 KB render band ceiling. Flat dark-background-heavy composite saved at PIL default PNG compression; the ceiling is a soft target (the sub-200 KB FLOOR is the documented fault signal, not the ceiling). Accept-with-note, consistent with this batch's #1 (876,660 B accepted) and #22 (676,987 B). NOT a fault.

**Design (2+2 layout, all NO-baked-text per L35 #13/#14/#16 + L37 #4/#5/#21 precedent):**
- Shoulder (TL) + Hip (BL) = FRONT-view "joint DEPTH inside body" panels: orange (correct) bone head deep inside the semi-transparent ghost proxy near center/armpit/groin, grey (wrong) bone head on the outer surface edge; both bones leveled so DEPTH is the only variable.
- Elbow (TR) + Knee (BR) = SIDE-view (RIGHT ortho) "joint OFFSET from center line" panels: orange (correct) 2-bone chain with the joint nudged off the center line (elbow slightly behind -Y / knee slightly forward +Y at the bump), grey (wrong) chain running dead-straight through the center line; correct + wrong chains share top + bottom endpoints and diverge only at the joint. Knee = the #18 forward-knee read.
- CORRECT/INCORRECT labels, green-check/red-X badges, center-line reference, and depth/offset measurement brackets ALL defer to the c37 overlay at integration.

**Recipe notes (Batch 4 specifics):**
- Each panel staged + captured in ISOLATION (clear prior panel's L37_p{N}* objs/armatures/meshes BEFORE building the next) &#8212; a panel-2 arm leaked into panel-3's frame once when not cleared; fixed by per-panel clear.
- Ghost proxy: L37_ghost BLEND material, base (0.52,0.58,0.66), alpha 0.45; viewport SOLID + `space.shading.show_xray=True` + `xray_alpha=0.62`; armature `show_in_front=True`, OCTAHEDRAL. Bones via edit_bones; correct bone(s) `.select/.select_head/.select_tail=True` for orange octahedral fill, wrong left unselected = grey. **`space.shading.show_object_outline` (NOT `space.overlay.`) in this build** &#8212; set False or the ghost proxy shows an orange selection outline.
- Capture: `render.opengl(write_still=True, view_context=True)` (grey/orange geometry + ghost, no color-dependent emissive markers, so OpenGL fine per LD17 / matches #6/#8/#16/#17/#22). FRONT ortho (shoulder/hip) or RIGHT ortho (elbow/knee).
- **Locked consistent framing:** opengl outputs scene render res 1920x1080 regardless of viewport region; set FIXED `rv3d.view_distance=7.0` + per-panel `view_location` centered on the proxy, NOT `view_selected` (which varies scale per panel). Content centers at render px (960,540); CROP=(510,90,1410,990) = 900x900 centered, resized 799x799. Composite 799 + 2px + 799 = exactly 1600 each dim (orange canvas shows through as dividers, no lossy final resize).
- View-inspected every panel + the final composite Claude-side before disk-write (marginal-read check per Style Guide).

Teardown: clear_L37() removed all L37_p{1-4}* objs/armatures/meshes + L37_ghost material; `outliner.orphans_purge` deleted 13 data-blocks; restored Cube/Camera/Light hide_viewport+hide_render=False; render reset 1920x1080@100 / EEVEE / AgX / None / fps24 / frame 1-250; viewport overlay + xray flags restored. TRUE-PRISTINE re-verified 18/18 PASS, 0 orphans. All 13 temps removed via bridge os.remove (8 Windows TEMP raws+panels + 5 WSL images/_l37_b4_*_preview.png relays).

## PNG MANUAL {12,19} (Win+Shift+S popover path) &#8212; DONE 2026-06-29
Both transient-popover figures captured via the manual Win+Shift+S overlay-freeze path (Style Guide Locked decisions 16 + 20). On disk in `images/`, overlays DEFERRED to integration. Live HTML byte count UNCHANGED 301,193. Blender TRUE-PRISTINE at close (18/18 checks PASS vs L22 baseline, 0 orphans, all 8 temps removed via os.remove).
- #12 lesson_37_12_recalculate_roll_interface.png   2261x1057  269,046 B (Armature&gt;Bone Roll&gt;Recalculate Roll cascade open, "Global +Y Axis" highlighted + tooltip; misaligned-roll Edit-mode armature + Roll 40&#176; Bone Properties behind)
- #19 lesson_37_19_symmetrize_demo.png               2400x800   440,212 B (3-panel before/menu/after strip; 2px #FF6B00 dividers + 1px orange edges = exactly 2400)

**Key build notes:**
- **#12 keymap discovery:** Ctrl+N is bound to NEW FILE in Ray's build, NOT Recalculate Roll. The canonical capture path is the header menu: **Armature &gt; Bone Roll &gt; Recalculate Roll**, hover "Global +Y Axis", Win+Shift+S directly (no defocus click). The captured cascade exceeds spec (three-level: Armature menu / Bone Roll submenu / axis grid with Positive-Negative-Other columns) + tooltip confirming. Accept-with-note at 269 KB (just over the 250 KB UI-chrome flag): content-density, NOT leakage/upscaling &#8212; full menu cascade text + armature + populated Bone Properties panel, optimized RGB (RGBA-&gt;RGB flatten + PIL optimize dropped 339,789-&gt;269,046). Aspect 2.139 content-justified (3-column axis grid needs the width). Same accept-with-note judgment as Batch-1 #1 (876 KB) / Batch-4 #10 (1.21 MB).
- **#19 split path (Style Guide &#167;Cross-sub-chat):** scriptable before+after rendered Claude-side, manual menu stage snipped by Ray, composited this chat (single-chat split since manual + scripted both fit). Built `L37_sym` = 5 center spine (pelvis/spine_01/spine_02/neck/head, grey/unselected) + 7 .L limbs (shoulder/upper_arm/forearm/hand/upper_leg/lower_leg/foot.L, orange/selected) = 12 bones. **Before panel:** that 12-bone state, opengl FRONT ortho, view centered x=0 / view_location (0,0,1.7) / view_distance 6.2 (locked so before+after share scale). **After panel:** `bpy.ops.armature.symmetrize(direction='POSITIVE_X')` -&gt; 12-&gt;19 bones, .R mirrors land at -X (screen-left), the 7 new .R bones auto-selected (orange) while .L originals go grey &#8212; correct symmetrize selection behavior, reinforces the mirror read (side-swap of orange between panels is accurate; before/after side labels defer to c37 overlay). Both opengl panels cropped IDENTICALLY: CROP=(459,75,1459,1077) 1000x1002 centered on (959,576), resize 798x800 (holds the symmetric after-state x 482-1436 with margin). **Menu panel:** Ray's Armature&gt;Symmetrize snip (806x1097 portrait, Symmetrize highlighted + tooltip "Enforce symmetry...") fit-to-height-800 -&gt; 588x800, centered with (63,63,63) side-padding (matches the flanking panels' lit-viewport bg, so the strip reads continuous). Composite 1px orange edge + 798 + 2px + 798 + 2px + 798 + 1px orange edge = exactly 2400x800; divider geometry pixel-verified (cols 0/799-800/1599-1600/2399 orange, panels at x 1-798/801-1598/1601-2398). 440 KB inside the 200-800 KB render/composite band.
- NO baked text on either: #12 CORRECT/Global+Y-Axis/Ctrl+N callouts + #19 sparkle/glow, "Perfect mirror created!", .L-&gt;.R labels, before/menu/after stage labels ALL defer to c37 overlay at integration.

Teardown: clear_L37() removed L37_sym obj+armature; orphan purge 0; restored Cube/Camera/Light hide_viewport+hide_render=False; render reset 1920x1080@100 / EEVEE / AgX / None / fps24 / frame 1-250; viewport overlay flags restored (note: `show_object_outline` is on space.SHADING not space.overlay in this build, per Batch-4). TRUE-PRISTINE re-verified 18/18 PASS, 0 orphans. All 8 temps removed via os.remove (2 Windows TEMP raws + 6 WSL relays/panels/menu).

**STATUS: 16/16 PNGs on disk** (Batch 1 {1,9,18,24,30} + Batch 2 {6,8,16,17,22} + Batch 3 {4,5,21} + Batch 4 {10} + Manual {12,19}). **ALL 16 PNG COMPLETE.** NEXT: INTEGRATION (own chat, 24 figs &#8805;6; edit_file dryRun-&gt;commit-&gt;get_file_info FIRST-match anchors; cairosvg pixel-verify + L33 overlay-margin fix per PNG).

---

## PLAN (standard locked pipeline, mirror L33-L36)
1. Phase-0 modernize **[DONE 2026-06-28]**
2. SVG batch (8 inline) &#8212; one batch **[DONE 2026-06-28]**
3. PNG batches <=5/sub-chat (16 -> 4 sub-chats), each: Blender bridge health test + TRUE-PRISTINE verify before/after staging; Windows tempdir -> Pillow-relay -> WSL [Batch 1 {1,9,18,24,30} DONE 2026-06-29; Batch 2 {6,8,16,17,22} DONE 2026-06-29; Batch 3 scriptable UI-chrome {4,5,21} DONE 2026-06-29; Batch 4 {10} DONE 2026-06-29; Manual {12,19} Win+Shift+S popover DONE 2026-06-29 &#8212; **ALL 16 PNG COMPLETE**]
4. Integration (own chat, 24>=6) &#8212; edit_file dryRun->commit, FIRST-match anchors, cairosvg pixel-verify + L33 overlay-margin fix per PNG **[DONE 2026-06-29]**
5. Browser QA (own chat) &#8212; Playwright/Chromium 380/900 x dark/light [PENDING]

**Blender TRUE-PRISTINE** (Phase-0 was HTML-only, no bridge work).
**Next-pointer after L37: L38** (`lesson_38_weight_painting.html` &#8212; slug CONFIRMED at L37 close via live next-link).

---

## INTEGRATION COMPLETE &#8212; 2026-06-29
**All 16 PNG+c37 figures live + cairosvg pixel-verified 1:1.** 24/24 figures total (8 inline SVG {2,3,7,11,13,15,26,29} + 16 PNG+c37 {1,4,5,6,8,9,10,12,16,17,18,19,21,22,24,30}). Each PNG: overlay viewBox == exact on-disk px-box, composite style (label bands #1a1a1a fill-opacity 0.82 + colored stroke, step badges, CORRECT/INCORRECT green/red checks via &#10003;/&#10007; entities), L33 overlay-margin fix baked (wrapper font-size:0 + img margin:0;vertical-align:top), FIRST-match anchor, edit_file dryRun->commit, U+2014 held 95 every checkpoint. Banned chars (U+2013/U+00B7/literal U+2192/em-dash in new content) 0 throughout; figcaptions + arrows use entities (&#8212; &#9656;).

**FULL BYTE LADDER (every checkpoint re-copy + UTF-8 python3 recount):**
301,193 (SVG-batch close) &#8212; PNG sub-batch commits across two integration chats:
chat-1: 301,193 -> #1 304,770 -> #4 307,508 -> #5 311,031 -> #6 315,799 -> #8 319,080 -> #9 323,024 -> #10 327,526.
chat-2: 327,526 -> #18 331,792 -> #12 335,308 -> #16 340,587 -> #17 344,615 -> #21 349,613 -> #19 353,473 -> #22 356,098 -> #24 360,885 -> #30 **365,620 (FINAL)**.

**FINAL INVARIANT TABLE (UTF-8 python3, on real live file) &#8212; ALL PASS:**
bytes **365,620**; figure/figcaption/`</figure>` **24/24/24**; svg **24** (8 inline + 16 overlay); img **16**; U+2014 **95 HELD**; U+2192 77; U+2013 0; U+00B7 0; `#667eea`/`#764ba2`/`linear-gradient`/`color="#222"` **0**; `<table>` 2 / table-wrap 2; mermaid `class="mermaid"` 4 + jsdelivr 1; lesson_36 1 / lesson_38 1; all 16 c37 PNG src present (each src count == 1).

**c37 PNG REGISTRY (figure# -> slug -> px-box -> anchor -> overlay content):**
- #1 armature_concept_diagram 1920x1080 -> after "What Is an Armature?" blockquote (chat-1)
- #4 three_modes_comparison 2400x900 -> after "Understanding Armature Modes" intro p (chat-1); Object/Edit/Pose mode labels
- #5 selection_methods 1600x1600 -> after "Basic Bone Manipulation in Edit Mode" intro p (chat-1); Click/Click-Sphere/B-Drag/C-Paint
- #6 extrusion_process 2400x800 -> after "Adding More Bones" intro p (chat-1); 6 step badges + labels
- #8 hierarchy_testing 1920x900 -> after "Testing Your Hierarchy in Pose Mode" heading (chat-1)
- #9 anatomical_positioning 1920x1200 -> after "Why Bone Position Matters" blockquote (chat-1)
- #10 critical_joint_positions 1600x1600 -> after "Anatomical Landmarks" intro p (chat-1); shoulder/hip/elbow/knee correct-vs-wrong
- #12 recalculate_roll_interface 2261x1057 -> after "Bone Roll Alignment" intro p; menu-path + Global +Y Axis (CORRECT) + Roll-field callouts. **NO Ctrl+N label** (Ctrl+N = New File in Ray's build, not Recalc Roll)
- #16 spine_construction 2400x800 -> Phase 1 card heading (deeper-indent, fig col 20 / svg children col 32); 6 step badges pelvis->head + "all connected"
- #17 arm_chain_build 2000x1000 -> Phase 2 card heading (deeper-indent); 4 step badges shoulder.L->hand.L + parent-child band
- #18 leg_forward_knee 1600x1000 -> after "Joint-Specific Positioning Guidelines" heading (heading-only anchor); CORRECT forward-knee (green) vs INCORRECT centered (red) + center-line refs + offset bracket
- #19 symmetrize_demo 2400x800 -> after "The Symmetrize Tool (Primary Method)" intro p; Before/Symmetrize/After stage badges + .L->.R + "Perfect mirror created!"
- #21 bone_properties_panel 1920x1080 -> after "Accessing Bone Properties" blockquote; 5 section labels (Transform/Relations/IK/Deform-green/Viewport Display) in bottom clear band w/ leaders to header rows
- #22 deform_checkbox_comparison 1600x1200 -> after "Deformation Settings" intro p; Deform ON (green, top) / OFF (red, bottom)
- #24 complete_tpose_armature 2400x1600 -> after "Final Touches and Verification" heading (heading-only anchor); Side/Front/Perspective view labels + 5 front-view bone callouts (head/spine/upper_arm.L/hand.L/upper_leg.L)
- #30 finger_bones_detail 1600x1200 -> "Take It Further (Optional)" project card heading (deeper-indent); finger labels (index/middle/ring/pinky.L) + thumb.L (2 bones) + hand.L (palm root) + "15 bones total" badge. **figcaption states 15 bones** (1 palm + 14 segments, 2-seg thumb); spec's "16 bones" is bad arithmetic, NOT followed.

**NEXT: browser QA** (own chat, Playwright/Chromium real 380/900 x dark/light; live HTML + main.css + 16 PNGs on 127.0.0.1 loopback, offline mermaid stub in QA copy only, live file untouched; verify 0 doc overflow, 16/16 PNG decode, 16 overlays register 1:1, L33 margin fix held max|dy|=max|dh|=0). **Blender TRUE-PRISTINE** (integration was HTML-only, no bridge work).

---

## BROWSER QA &#8212; PASS 2026-06-29
**Live-pixel QA PASS, NO DEFECTS, 0 live-HTML edits.** Claude-side real Chromium 1194 (`/opt/pw-browsers/chromium-1194`) + Playwright 1.56. Live HTML + `styles/main.css` + all 16 c37 PNGs served on `http://127.0.0.1:5599` loopback (NOT file://); mermaid jsdelivr ESM import swapped for an offline layout stub IN THE QA COPY ONLY. Live file untouched and re-verified post-run (bytes 365,620 unchanged, all invariants identical).

**Pre-QA static checks (UTF-8 python3, on live file):** all 16 on-disk PNG px-boxes == c37 registry 1:1; all 16 overlay `viewBox`es == on-disk px-box 1:1 in source.

**All 4 configs (380 & 900 px &#215; dark & light):**
- **0 document horizontal overflow** &#8212; scrollWidth === clientWidth all 4 (380=380, 900=900).
- **16/16 PNG decode** (forced eager + scroll; imgs are `loading="lazy"`), naturalWidth>0 all 4 configs.
- **16/16 overlays register 1:1** &#8212; max|dx|=max|dy|=max|dh|=**0.000px** all 4 configs; worst deviation **0.047px dw** (sub-px rounding) @380, **0.016px dw** @900. No dx/dy/dh drift anywhere.
- **L33 overlay-margin fix HELD on all 16** &#8212; max|dy|=max|dh|=**0.000px** (defect signature dy&#8776;&#8722;16px/dh&#8776;+32px ABSENT). Wrapper `font-size:0` + img `margin:0;vertical-align:top` confirmed effective.
- **8/8 inline SVG `currentColor` inverts** &#8212; dark rgb(212,212,212) / light rgb(51,65,85), 8/8 match both themes.
- **2/2 `.table-wrap` contain** &#8212; both wraps within doc width @380 (internal scroll), 0 doc overflow.
- **4/4 mermaid divs lay out** (offline stub = harness limit, not a defect; offline render unverified).
- **0 pageerrors** all 4 configs.

**404s observed (out of QA scope, expected):** `js/clipboard.js`, `js/course-enhancements.js`, `/favicon.png` &#8212; page-chrome assets not staged Claude-side (identical to L33&#8211;L36 harness); not part of figure/overlay QA.

**Post-QA live-HTML re-verify (UTF-8 python3, fresh re-copy):** bytes **365,620** (unchanged); U+2014 **95 HELD**; U+2192 77; U+2013 0; U+00B7 0; figure/figcaption/`</figure>`/svg **24/24/24/24**; img **16**; `#667eea`/`#764ba2`/`linear-gradient`/`color="#222"` **0**; `<table>` 2 / table-wrap 2; mermaid `class="mermaid"` 4 + jsdelivr 1; lesson_36 1 / lesson_38 1. **All match INTEGRATION-COMPLETE FINAL INVARIANT TABLE exactly &#8212; QA harness never touched the live file.**

**L37 FULLY CLOSED &#8212; INTEGRATION COMPLETE + QA-PASS (2026-06-29).** Standing browser-QA queue: EMPTY (all lessons L05&#8211;L37 cleared). Next active lesson: **L38** (`lesson_38_weight_painting.html`, slug CONFIRMED). **Blender TRUE-PRISTINE** (QA was HTML-only, no bridge work).
