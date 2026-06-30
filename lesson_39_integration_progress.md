# Lesson 39 - Rigging Essentials - Integration Progress

**File:** `lesson_39_rigging_essentials.html`
**Slug:** `rigging_essentials` (CONFIRMED via L38 live next-link)
**Module:** 07 Advanced Modeling - lesson 12
**Generation:** OLD-GEN (created==modified 2026-06-12 12:58:24, same cohort as L28-L34)
**Status:** PHASE 0 COMPLETE (2026-06-29). Next: SVG batch production.

---

## PHASE 0 - HTML MODERNIZATION (DONE 2026-06-29)

Ran the L33-L38 Phase-0 pass. All transforms applied via Blender bridge (gradient
string + mermaid fill string are non-unique x11 / x7, so edit_file unique-anchor
path not usable; full-file Python replace through bridge, pre/post recount inside
the same call, then live re-read recount to CONFIRM).

### Transforms applied
- Gradient cards x11: `background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); color: white;`
  -> `background: #2a2a2a; color: white;` (flat dark bg; color:white KEPT)
- Mermaid init border x1: `primaryBorderColor:'#667eea'` -> `'#888888'`
- Mermaid style fills x7: `fill:#667eea` -> `fill:#3a3a3a`
- Table x1: wrapped in `<div class="table-wrap">` + `min-width:max-content` on table; closed `</table></div>`
- Mermaid kept LIVE (jsdelivr esm import x1; class="mermaid" x8)

### Phase-0 baseline invariants (CONFIRMED by live re-read recount, never assumed)
| Invariant | Value |
|---|---|
| bytes | 241311 (was 241678; delta -367) |
| <figure / <figcaption / </figure> | 0 / 0 / 0 (pre-integration) |
| <svg / <img | 0 / 0 (pre-integration) |
| **U+2014 em-dash (LOCKED BASELINE)** | **36** |
| U+2013 en-dash | 0 |
| U+2192 right-arrow | 135 |
| U+00B7 middot | 0 |
| #667eea / #764ba2 / linear-gradient | 0 / 0 / 0 |
| color:white (incl. "color: white") | 48 (KEPT) |
| table-wrap / min-width:max-content / </table></div> | 1 / 1 / 1 |
| <table / </table> | 1 / 1 |
| class="mermaid" | 8 |
| jsdelivr mermaid esm import | 1 |
| primaryBorderColor '#888888' | 1 |
| fill:#3a3a3a | 7 |
| lesson_38 back-link | 1 |
| lesson_40 next-link | 1 |

### Nav verification
- Back-link -> `lesson_38_weight_painting.html` (L38) [1] OK
- Next-link -> `lesson_40_geometry_nodes_introduction.html`; slug `geometry_nodes_introduction` (confirm vs live L40 at close)
- CSS: external `styles/main.css` (`.table-wrap{overflow-x:auto}` already shared; no per-lesson CSS injection needed)

---

## IMAGE ROSTER TRIAGE (from lesson_39_image_requirements.md + _part2.md)

Total roster: **38 figures**. Doc-designated split: 8 SVG / 30 PNG.

### INLINE-SVG (8) - doc SVG list (#1,2,8,17,21,22,25,31); currentColor, hand-written, v8 style guide
| # | slug | title |
|---|---|---|
| 01 | three_layer_architecture | Three-Layer Rig Architecture (DEF/MCH/CTRL) |
| 02 | ik_vs_fk_comparison | IK vs FK Visual Comparison |
| 08 | ik_chain_components | IK Chain Components Breakdown |
| 17 | foot_hierarchy_diagram | Leg Rig Foot Hierarchy |
| 21 | spine_control_system | Spine Control System Overview |
| 22 | spine_blending_gradient | Spine Blending Visualization |
| 25 | root_control_diagram | Root Control Visualization |
| 31 | workflow_flowchart | Workflow Flowchart - Complete Rig Build |

### PNG + c39 overlay (30) - BlenderMCP renders / composites / UI-chrome / warning-vignettes
03 fk_arm_control_chain | 04 ik_arm_with_pole | 05 ikfk_influence_slider | 06 custom_shapes_library |
07 bone_groups_colors | 09 pole_target_positioning | 10 copy_rotation_constraint | 11 limit_rotation_constraint |
12 track_to_eye_tracking | 13 arm_rig_overview | 14 arm_ik_setup_steps | 15 arm_fk_setup_steps |
16 ikfk_snapping_problem | 18 foot_roll_sequence | 19 foot_pivot_locations | 20 leg_ik_complete |
23 cog_control_functions | 24 chest_control_functions | 26 rig_layer_organization | 27 testing_poses_reference |
28 common_mistakes_grid | 29 constraint_stack_order | 30 custom_shape_assignment | 32 pole_angle_adjustment |
33 symmetry_mirroring | 34 driver_setup_graph | 35 complete_rig_beauty | 36 control_interface_reference |
37 weight_painting_integration | 38 animation_ready_rig

### BUILD / DEFER
- **BUILD all 38** (matches L33-L38 full-integration precedent; roster maps to real section IDs in the doc placement table).
- **DEFER:** none at triage. Re-evaluate any figure that needs live-rig source assets unavailable in the L22 baseline scene during PNG staging; flag in this doc if deferred then.

### Build-phase palette note (FLAG)
The requirements doc (Nov 2025) specifies legacy **#667eea purple for DEF-layer bones** in several
prompts. That hex is NOT in IMAGE_STYLE_GUIDE v8 palette and is the exact gradient purple
Phase-0 just neutralized. At SVG/PNG build, map DEF layer to a v8 palette role (candidate:
`#B47EE8` practice/process purple) - do NOT emit `#667eea`. MCH `#2196F3`, FK orange `#ff8c00`,
IK cyan `#00bcd4` from the doc are acceptable as figure-internal hexes (PNG overlays use
explicit hex; inline SVGs use currentColor for text/lines, fixed hex only for brand/role colors).
Lock exact per-layer hexes in the SVG plan-lock before building #01.

---

## PIPELINE (locked, as L33-L38)
Phase-0 modernize [DONE] -> SVG batch (inline, currentColor; pilot #01 then batches of 3)
-> PNG batches <=5/sub-chat (BlenderMCP, TRUE-PRISTINE before/after each staging vs L22 baseline,
Windows tempdir -> Pillow-relay -> WSL, opengl viewport / F12 for color-dependent)
-> integration (own chat, cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG:
wrapper font-size:0 + img margin:0;vertical-align:top)
-> browser QA (own chat, Chromium 1194 + Playwright, 380/900 x dark/light).
Each phase its own sub-chat. edit_file dryRun->commit->get_file_info per edit.
U+2014 baseline HELD at 36 at every checkpoint. FIRST-match unique anchors.
PNG overlays use explicit-hex strokes (currentColor only on inline SVGs).

## SVG BATCH - PLAN-LOCK + LOG (this phase)

### Locked per-layer role hexes (resolves #667eea FLAG; confirmed by Ray 2026-06-29)
| Rig layer | Hex | v8 role |
|---|---|---|
| CTRL control | `#4ADE80` | resources/outcome green - "what animators interact with" |
| MCH mechanism | `#2196F3` | fixed role hex (per FLAG) |
| DEF deformation | `#B47EE8` | practice/process purple - v8 substitute for legacy #667eea |
| FK controls | `#ff8c00` | fixed role hex |
| IK controls | `#00bcd4` | fixed role hex |
- DO NOT emit `#667eea` anywhere. currentColor for text/lines/dividers; fixed hex only for the role colors above + brand `#FF6B00`.
- Cadence: pilot #01 [review] -> batches of 3. Standalone .svg KEEPS `color="#222"` fallback (stripped only at integration).

### id-prefix registry (one unique prefix per inline SVG)
| # | slug | id prefix | status |
|---|---|---|---|
| 01 | three_layer_architecture | `tla-` | BUILT 2026-06-29 (pilot, approved pending) |
| 02 | ik_vs_fk_comparison | `ikfk-` | BUILT 2026-06-29 (batch-of-3 #1, review pending) |
| 08 | ik_chain_components | `icc-` | BUILT 2026-06-29 (batch-of-3 #1, review pending) |
| 17 | foot_hierarchy_diagram | `fh-` | BUILT 2026-06-29 (batch-of-3 #1, review pending) |
| 21 | spine_control_system | `scs-` | BUILT 2026-06-30 (final batch) |
| 22 | spine_blending_gradient | `sbg-` | BUILT 2026-06-30 (final batch) |
| 25 | root_control_diagram | `rcd-` | BUILT 2026-06-30 (final batch) |
| 31 | workflow_flowchart | `wf-` | BUILT 2026-06-30 (final batch) |
PNG overlay namespaces (later phase): c39-03 ... c39-38 (one per PNG figure)

### Pilot #01 record
- File: `images/lesson_39_01_three_layer_architecture.svg` | viewBox 0 0 800 560 | content bytes 4603 (disk stat 4677)
- Invariants: U+2014 **0** | U+00B7 16 | U+2013 0 | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" fallback KEPT 1 | #FF6B00 3
- Design: 3 stacked layer cards (CTRL green top -> MCH blue -> DEF purple), left-rail role accents, straight downward arrow connectors (currentColor op0.3) CTRL->MCH->DEF->MESH, currentColor mesh silhouette + caption, footer tip Variant B left-rail. `·` separators throughout.
- cairosvg light+dark render verified: currentColor inverts correctly, role hexes read on both themes, DEF #B47EE8 distinct from neutralized gradient purple.

### Batch-of-3 #1 PLAN-LOCK (2026-06-29) - #02 / #08 / #17
Plan-locked before build per v8 (plan-lock each batch BEFORE building). currentColor for text/lines/dividers; fixed hex only for role colors (FK #ff8c00 / IK #00bcd4 / DEF #B47EE8 / MCH #2196F3 / CTRL #4ADE80) + brand #FF6B00. ZERO new U+2014; `·` (U+00B7) separators; no &#8212;/&#x2014 entities in <text>. color="#222" fallback KEPT (standalone). role="img" + aria-labelledby -> <title>+<desc>, unique id prefix per file. Footer tip Variant B left-rail.

- **#02 ik_vs_fk_comparison** (`ikfk-`, viewBox 0 0 800 560): 50/50 vertical split, thin center divider (currentColor op0.15). LEFT FK panel - heading "FK · Forward Kinematics" in #ff8c00; arm as 3 decreasing joint circles (shoulder large -> elbow med -> wrist small) stroked #ff8c00; curved rotation arrows per joint; "30°"/"45°" angle labels; caption "Rotate each joint · natural arcing motion". RIGHT IK panel - heading "IK · Inverse Kinematics" in #00bcd4; same arm pose (light currentColor wireframe); single hand-target widget (#00bcd4) at wrist + small pole sphere (#00bcd4) in front of elbow; straight shoulder->hand solution line; caption "Move hand target · joints solve automatically". Footer tip y506.
- **#08 ik_chain_components** (`icc-`, viewBox 0 0 800 680 dense): side-view 2-bone arm chain (Chain Bone 1 upper + Chain Bone 2 forearm, dotted currentColor parent-child link) = "Deformation chain" on left; IK target hand widget (#00bcd4) on right with "IK Target · animator moves this" + arrow back to chain; pole sphere (#00bcd4) top-center with dotted line to elbow + "Pole Target · controls elbow direction"; constraint settings box bottom (currentColor op0.15 border): "IK Constraint · Target: hand_IK.L · Chain Length: 2 · Pole Target: elbow_pole.L". Data-flow arrows (currentColor op0.3). Footer tip y641.
- **#17 foot_hierarchy_diagram** (`fh-`, viewBox 0 0 800 680 dense): LEFT (~60%) side-view foot (currentColor silhouette op0.3) with 4 stacked pivot controls - IK_foot.L (#00bcd4, ankle, parent) / IK_heel_pivot.L (#ff8c00, heel, rotation arc) / IK_toe_pivot.L (#4ADE80, ball, rotation arc) / MCH_IK_leg_target.L (currentColor grey, ankle); heel+ball contact dots; ground line. RIGHT (~40%) tree hierarchy box - straight connectors (currentColor op0.3) IK_foot.L -> IK_heel_pivot.L -> IK_toe_pivot.L -> MCH_IK_leg_target.L -> "IK Constraint"; each node label color-matched to its control. Footer tip y641.

### Batch-of-3 #1 BUILD RECORD (2026-06-29) - #02 / #08 / #17 BUILT + cairosvg-verified
All written via Blender bridge io.open (disk==string confirmed). cairosvg light+dark stacked view-check PASS for all 3 (currentColor inverts both themes, role hexes legible both themes, DEF/role hexes distinct from neutralized gradient purple, no banned literals).

- **#02** `images/lesson_39_02_ik_vs_fk_comparison.svg` | viewBox 0 0 800 560 | content bytes 5318. Invariants: U+2014 **0** | U+00B7 6 | U+2013 0 | U+2192 0 | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 3. 50/50 split, center divider op0.15; LEFT FK 3 decreasing orange joint circles + curved rotation arrows + 30°/45° labels; RIGHT IK same pose wireframe + cyan hand-target widget + pole sphere + dashed shoulder->hand solution line. Footer tip Variant B y506.
- **#08** `images/lesson_39_08_ik_chain_components.svg` | viewBox 0 0 800 680 dense | content bytes 4896. Invariants: U+2014 **0** | U+00B7 5 | U+2013 0 | U+2192 1 (parent->child relationship marker, NOT a dash separator) | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 4. 2-bone chain (orange elbow tie-break) + cyan pole sphere (dotted link to elbow) + cyan IK target widget + solve-direction arrow + constraint box (Target/Chain Length 2/Pole Target, 2-column). Footer tip Variant B y641.
- **#17** `images/lesson_39_17_foot_hierarchy_diagram.svg` | viewBox 0 0 800 680 dense | content bytes 5648. Invariants: U+2014 **0** | U+00B7 4 | U+2013 0 | U+2192 1 ("Parent -> child order" heading, NOT a dash separator) | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 4. LEFT side-view foot silhouette + 4 color-coded pivots (IK_foot cyan / heel_pivot orange / toe_pivot green / leg_target grey) + rotation arcs + heel/ball contact dots + ground line; RIGHT 4-level straight-connector tree -> IK Constraint, labels color-matched. Footer tip Variant B y641.

LIVE HTML re-verified UNTOUCHED before build: bytes 241,311 / U+2014 36 / figure-figcaption-svg-img 0 / #667eea-#764ba2-linear-gradient 0 / color:white 48 / class="mermaid" 8 + jsdelivr 1 / lesson_38 1 / lesson_40 1. Blender TRUE-PRISTINE (bridge used only for SVG file I/O + recount). **4/8 inline SVG done** (pilot #01 + #02/#08/#17). NEXT (final batch, 4): #21 spine_control_system (scs-) / #22 spine_blending_gradient (sbg-) / #25 root_control_diagram (rcd-) / #31 workflow_flowchart (wf-) - pause for Ray review of this batch first.

### FINAL BATCH PLAN-LOCK (2026-06-29) - #21 / #22 / #25 / #31
Plan-locked before build per v8. currentColor for text/lines/dividers; fixed hex only for role colors (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 / FK #ff8c00 / IK #00bcd4) + brand #FF6B00; spine-bone gradient stops in #22 based on currentColor / role hexes (NOT #667eea). ZERO new U+2014; `·` (U+00B7) separators; no &#8212;/&#x2014 entities in <text>. A lone U+2192 only as a genuine parent->child / flow marker (not a dash separator). color="#222" fallback KEPT (standalone). role="img" + aria-labelledby -> <title>+<desc>, unique id prefix per file. Footer tip Variant B left-rail. This batch COMPLETES the 8 inline SVGs (4/8 -> 8/8).

- **#21 spine_control_system** (`scs-`, viewBox 0 0 800 560): vertical control-hierarchy diagram for the COG+Chest spine architecture. Top-to-bottom node stack with straight connectors (currentColor op0.3): Root (#FF6B00 brand, ground master) -> COG (#4ADE80 CTRL, hip/center-of-gravity) -> Spine bones (3 stacked MCH #2196F3 segments spine_01/02/03, the blended middle) -> Chest (#4ADE80 CTRL, upper-body). Influence-percentage pills on the spine segments (COG-side vs Chest-side weighting, e.g. `COG 100%` top / `~50/50` mid / `Chest 100%` lower) using `·` separators. Right-column role descriptions (currentColor op0.6) per node. Footer tip Variant B y506.
- **#22 spine_blending_gradient** (`sbg-`, viewBox 0 0 800 560): interpolation diagram - a horizontal (or vertical) gradient bar showing COG 100% influence at one end blending to Chest 100% at the other, with the middle spine bones picking up interpolated weights. SVG linearGradient stops based on role hexes (#4ADE80 COG end -> #2196F3 mid -> #4ADE80 Chest end) or currentColor, NOT #667eea. Percentage overlays along the bar (`COG 100% · 75/25 · 50/50 · 25/75 · Chest 100%`); spine-bone tick markers mapped to their blend ratio; short caption explaining middle bones interpolate. Footer tip Variant B y506.
- **#25 root_control_diagram** (`rcd-`, viewBox 0 0 800 560): simple master-control diagram. Large root control ring/4-arrow widget (#FF6B00 brand) at a ground line under a currentColor character silhouette; world-space movement arrows (currentColor op0.3, or as genuine flow markers) radiating from root showing the whole rig moves in world space when root moves. Label `Root · master control` + caption `Moves entire character in world space`. Footer tip Variant B y506.
- **#31 workflow_flowchart** (`wf-`, viewBox 0 0 800 680 dense): complete-rig-build flowchart. Boxes + decision diamonds + connector arrows, main path Preparation -> Spine -> Arms -> Legs -> Polish. Each stage a rounded box (currentColor stroke); decision diamonds at branch points (e.g. `IK or FK? · elbow flips? · weights OK?`) with labelled yes/no out-edges looping back where appropriate. Stage boxes may take a subtle role-hex left accent. Flow arrows are genuine U+2192 / arrowhead markers (relationship markers, not dash separators). `·` for any in-box separators. Footer tip Variant B y641.

### FINAL BATCH BUILD RECORD (2026-06-30) - #21 / #22 / #25 / #31 BUILT + cairosvg-verified - SVG PHASE COMPLETE 8/8
All written via Blender bridge io.open (disk==string confirmed each). cairosvg light+dark stacked grid view-check PASS for all 4 (currentColor inverts both themes; role hexes legible both themes; #22 gradient is green/blue/green role-hex stops, NOT #667eea; #31 Polish-box #B47EE8 left-accent distinct from neutralized gradient purple; no banned literals). Footer-tip text running past the right edge in the 560px-wide raster preview is a crop artifact of the view-check only (SVG authored at viewBox width 800, tip x58 well within bounds), not a defect.

- **#21** `images/lesson_39_21_spine_control_system.svg` | viewBox 0 0 800 560 | content bytes 4107. Invariants: U+2014 **0** | U+00B7 10 | U+2013 0 | U+2192 0 | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 5. Vertical node hierarchy Root (#FF6B00) -> COG (#4ADE80) -> 3 MCH spine boxes (#2196F3, influence pills Chest 100% / ~50/50 / COG 100%) -> Chest (#4ADE80); straight currentColor op0.3 connectors; right-column role descriptions. Footer tip Variant B y506.
- **#22** `images/lesson_39_22_spine_blending_gradient.svg` | viewBox 0 0 800 560 | content bytes 3956. Invariants: U+2014 **0** | U+00B7 5 | U+2013 0 | U+2192 0 | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 3. Vertical linearGradient bar (stops #4ADE80 base / #2196F3 mid / #4ADE80 top - role hexes NOT #667eea) with COG 100% / Chest 100% caps; 3 spine-bone tick markers (#2196F3 dots) mapped to 75/25, 50/50, 25/75 blend ratios; right-side 'How it blends' caption. Footer tip Variant B y506.
- **#25** `images/lesson_39_25_root_control_diagram.svg` | viewBox 0 0 800 560 | content bytes 3197. Invariants: U+2014 **0** | U+00B7 3 | U+2013 0 | U+2192 0 | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 7. currentColor character silhouette + ground line; #FF6B00 4-arrow-ring root widget; 5 #FF6B00 world-space movement arrows (genuine flow markers via marker-end, NOT dash separators) radiating from root; 'Root · master control' label + right-column captions. Footer tip Variant B y506.
- **#31** `images/lesson_39_31_workflow_flowchart.svg` | viewBox 0 0 800 680 dense | content bytes 6365. Invariants: U+2014 **0** | U+00B7 19 | U+2013 0 | U+2192 0 | #667eea 0 | role="img" 1 | aria-labelledby 1 | <title>/<desc> 1/1 | color="#222" KEPT 1 | #FF6B00 4. Top-to-bottom flow Preparation (#FF6B00) -> Spine (#4ADE80) -> Arms (#ff8c00) -> [Elbow OK? diamond] -> Legs (#00bcd4) -> [Foot rolls? diamond] -> Polish (#B47EE8); stage boxes role-hex left accents; #F5C242 decision diamonds; currentColor arrowhead-marker down-arrows (Yes path, #4ADE80 labels); #E63946 No feedback loops back to Arms/Legs ('fix pole angle' / 'fix pivots'); right-side build-order legend. Footer tip Variant B y641.

LIVE HTML re-verified UNTOUCHED before build (2026-06-30 bridge UTF-8 python3 read): bytes 241,311 / U+2014 36 / figure-figcaption-svg-img 0 / #667eea-#764ba2-linear-gradient 0 / color:white 48 / class="mermaid" 8 + jsdelivr 1 / lesson_38 1 / lesson_40 1. Blender TRUE-PRISTINE (bridge used only for SVG file I/O + recount; no scene staging). **8/8 inline SVG done** (pilot #01 + #02/#08/#17 + #21/#22/#25/#31). Pause for Ray review of this final batch. NEXT phases (own sub-chats, per locked pipeline): PNG batches <=5/sub-chat (30 PNG+c39) -> integration (cairosvg pixel-verify 1:1 + L33 overlay-margin fix) -> browser QA. Confirm L40 next-link slug (geometry_nodes_introduction vs live L40) at lesson close.

## PNG BATCH - PRODUCTION LOG

### Conventions (locked, carried from L37/L38 + reqs-doc)
- BASE PNGs only this phase; c39-NN overlays DEFERRED to integration.
- Per-layer role hexes (explicit hex, not currentColor): CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 (NEVER #667eea) / FK #ff8c00 / IK #00bcd4. Brand #FF6B00. left #00bcd4 / right #e91e63 / center #ffd600.
- bg #2b2b2b = (43,43,43). UI-chrome accept band ~10-250 KB (flag >250 or <5).
- Build method: PIL Blender-style mockups end-to-end (Segoe UI reg/bold + Consolas mono from C:\Windows\Fonts; no fake-prose leakage; drawn vector glyphs for link-icon/checkmark/eye since Segoe lacks them). Save to Windows tempdir -> PIL re-open -> save to WSL images/ (UNC direct-write truncates); os.remove temp; full-decode + md5 + bg(4,4) verify on disk.
- Glyph note: emoji (link/check) render as tofu in Segoe UI -> draw them as vector shapes.

### PNG BATCH 1 (UI-chrome) DONE 2026-06-30 - #05 / #10 / #26 / #29 / #34
Grouped by capture type = UI-chrome panel mockups (no scene staging; Blender stayed TRUE-PRISTINE the whole batch). Ray-confirmed grouping. All 5 visually QA'd Claude-side (copy_file_user_to_claude -> view), full-decode + bg #2b2b2b verified on disk. Live HTML UNTOUCHED (re-verified 241,311 / U+2014 36 before + after). Bridge health PASS; TRUE-PRISTINE before + after (3 objs Camera+Cube+Light / 1 mesh / 0 orphans / EEVEE AgX None / 1920x1080@100 fps24).

| # | file | px-box | bytes | md5 | notes |
|---|---|---|---|---|---|
| 05 | lesson_39_05_ikfk_influence_slider.png | 1920x1080 | 64132 | 0978b4ee0c410fcf626d7d759a0e142f | 3 Properties>Bone>Custom Properties states: 0.0 FK (orange glyph) / 0.5 blend / 1.0 IK (cyan target+pole); slider fill tracks value; min/max/default + description rows |
| 10 | lesson_39_10_copy_rotation_constraint.png | 1600x1200 | 67581 | a2f159e717f73f4d424f74e17c660934 | Bone Constraint Properties: Copy Rotation expanded; Target Armature / Bone FK_upper_arm.L / Order / Axis XYZ checked (drawn checks) / Invert unchecked / Mix Replace / World+World spaces / Influence 1.000 full bar; drawn link icon |
| 26 | lesson_39_26_rig_layer_organization.png | 1400x1200 | 67393 | 8f3269f3a83a6700b9521f83cf2b7330 | Bone Collections panel: Controls (#4ADE80, selected, 1-2, eye on) / MCH (#2196F3, 30, eye slashed=hidden) / DEF (#B47EE8, 31, eye on); role descriptions + example bone names (mono); +/- buttons. Modern 4.x Bone Collections (not legacy 32-layer grid) |
| 29 | lesson_39_29_constraint_stack_order.png | 1400x1200 | 65442 | a66a95ea0f62ae0377bb50c2715186af | 3 stacked collapsed constraints (Copy Location / Copy Rotation / Limit Rotation) + right-side eval-order rail: down-arrow + numbered blue badges 1/2/3 with tick connectors, header clear of badges |
| 34 | lesson_39_34_driver_setup_graph.png | 1920x1080 | 80030 | daf9632bd57a6e47822803b2b6847fe7 | Graph Editor>Drivers: channel list w/ highlighted driven 'Copy Rotation - Influence'; grid + driver curve 1.0-var descending (0,1.0 FK)->(1,0.0 IK) w/ keyframe-square endpoints; Driver N-panel Type=Scripted Expression / Expression=1.0 - var / Variable name=var / Prop Path=["arm_L_IKFK"] + plain-language explanation |

**Batch-1 status: 5/30 PNG done.** Remaining 25 PNG {3,4,6,7,9,11,12,13,14,15,16,18,19,20,23,24,27,28,30,32,33,35,36,37,38} across future <=5/sub-chat batches.

### PNG BATCH 2 (arm renders/composites) DONE 2026-06-30 - #03 / #04 / #13 / #14 / #15
Grouped by capture coherence = the arm group (all reuse the same arm asset + 2-bone chain + role-hex palette). Leg #20 deferred to a later batch with #18/#19 (separate leg asset). Color-dependent role-hex figures built as PIL Blender-style composites end-to-end (the L37/L38 proven method for annotated technical diagrams / step composites with explicit role hexes - NOT F12 lit renders; no fake prose, drawn glyphs). Blender stayed TRUE-PRISTINE the whole batch (pure PIL, no scene staging). All 5 visually QA'd Claude-side (copy_file_user_to_claude -> view), full-decode + bg #2b2b2b verified on disk. Live HTML UNTOUCHED (re-verified 241,311 / U+2014 36 before + after). Bridge health PASS; TRUE-PRISTINE before + after (3 objs Camera+Cube+Light / 1 mesh / 0 orphans / EEVEE AgX None / 1920x1080@100 fps24).

| # | file | px-box | bytes | md5 | notes |
|---|---|---|---|---|---|
| 03 | lesson_39_03_fk_arm_control_chain.png | 1920x1080 | 62432 | e3b86c3ce432108510f78cfcac9bf895 | T-pose arm, 3 decreasing #ff8c00 FK circles (shoulder lg/elbow med/wrist sm) + white outlines; dotted parent->child link; 3 curved rotation arrows; numbered annotations (rotate shoulder=whole arm / elbow=forearm+hand / wrist=hand only); bent-arm 90deg inset top-right; footer tip |
| 04 | lesson_39_04_ik_arm_with_pole.png | 1920x1080 | 62035 | 1cb973d2f6d0683beccb0ca7d183d434 | Diagonal arm (shoulder bottom-left -> hand upper-right); #00bcd4 hand IK widget (bracket square) + #00bcd4 elbow pole sphere (glow) w/ dotted pole->elbow link; faint cyan shoulder->hand IK solution line; 3 leader-line annotations (IK Target/Pole Target/IK Constraint); mono constraint chip (Target hand_IK.L / Chain Length 2 / Pole elbow_pole.L); footer tip |
| 13 | lesson_39_13_arm_rig_overview.png | 1920x1200 | 74747 | 4ebf22b10612671fd7a16cc65da34fff | 4 stacked layer rows DEF #B47EE8 / MCH #2196F3 / FK #ff8c00 / IK #00bcd4; per-row bone names (DEF_/MCH_IK_/FK_/IK_hand+elbow_pole); FK decreasing circles, IK hand-widget+pole-sphere; vertical inter-layer connectors (IK solve solid cyan / Copy Rotation dotted); legend box top-right; footer tip. Wider 1920x1200 per reqs-doc complexity |
| 14 | lesson_39_14_arm_ik_setup_steps.png | 1920x1080 | 72014 | fd874993e9858c1b354c9f0a6ec1c4f4 | 2x3 grid, 6 numbered orange step badges: 1 Duplicate DEF->MCH (Shift+D) / 2 Create IK hand target (bracket widget) / 3 Create elbow pole (sphere+dotted) / 4 Add IK constraint (settings panel Target/Bone/Pole/Chain Length 2) / 5 Test (motion arrow, arm follows) / 6 Adjust pole angle (arc + chip -90->0deg); per-panel captions; footer tip |
| 15 | lesson_39_15_arm_fk_setup_steps.png | 1920x1080 | 59833 | 52f31b822d8fa767bd5f59b2047a4d0e | 5 panels (3 top + 2 centered bottom), orange step badges: 1 Duplicate DEF->FK (Shift+D) / 2 Clear parents (Alt+P, red X on links) / 3 Re-parent chain (Ctrl+P, dotted hand->forearm->arm) / 4 Add custom shapes (decreasing circles lg/med/sm) / 5 Test (rotation arc, whole arm arcs); keyboard chips; per-panel captions; footer tip |

**Batch-2 status: 10/30 PNG done** (cumulative: batch 1 {5,10,26,29,34} + batch 2 {3,4,13,14,15}). Remaining 20 PNG {6,7,9,11,12,16,18,19,20,23,24,27,28,30,32,33,35,36,37,38} across future <=5/sub-chat batches. Suggested next groupings: leg group needing leg asset {18,19,20} + foot composites; comparison composites {9,11,16,32,33}; beauty renders {35,38}; PIL diagrams/grids + remaining UI {6,7,12,23,24,27,28,30,36,37}. Overlays (c39-NN) still DEFERRED to integration. Per-layer role hexes used as explicit hex (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 NEVER #667eea / FK #ff8c00 / IK #00bcd4). After all 30 PNG: integration (own chat, cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG: wrapper font-size:0 + img margin:0;vertical-align:top) -> browser QA (Chromium 1194 + Playwright, 380/900 x dark/light). Confirm L40 next-link slug (geometry_nodes_introduction vs live L40) at lesson close.

### PNG BATCH 3 (leg/foot group + comparison composites) DONE 2026-06-30 - #18 / #19 / #20 / #09 / #16
Grouped by capture coherence = the leg/foot group {18,19,20} (first batch needing leg/foot geometry) + 2 comparison composites {09,16} to fill <=5. All built as PIL Blender-style composites end-to-end (the L37/L38 proven method for annotated technical diagrams / sequence + good/bad composites with explicit role hexes - NOT F12 lit renders; no fake prose, drawn glyphs/crosshairs). Decided per-figure per the batch-2 note: #18 foot-roll + #20 leg-IK + #19 pivot diagram all PIL (foot/leg as parametric polygon glyphs - no real leg asset staged, so Blender stayed TRUE-PRISTINE the whole batch). All 5 visually QA'd Claude-side (copy_file_user_to_claude -> view; #18 and #09 and #16 each rebuilt once after first-pass QA - see notes), full-decode + md5 + bg #2b2b2b (4,4) verified on disk. Live HTML UNTOUCHED (re-verified 241,311 / U+2014 36 before + after). Bridge health PASS; TRUE-PRISTINE before + after (3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 orphans / EEVEE AgX None / 1920x1080@100 fps24). All Windows tempdir temps os.remove'd (0 stray).

| # | file | px-box | bytes | md5 | notes |
|---|---|---|---|---|---|
| 18 | lesson_39_18_foot_roll_sequence.png | 1920x560 | 37840 | c99e7dfda0486d9f86642a02e8e1e15e | 7-frame heel-strike->toe-off sequence; per-frame numbered orange badge + cyan angle chip (+30/+15/0/-10/-30/-55/off) + side-profile foot glyph rotated about active pivot + red contact dot (heel/flat-bar/ball) + cyan IK_foot bracket at ankle; progression arrows; bottom legend (contact/heel pivot/toe pivot/IK_foot) + footer tip. Canvas 560 (not 480) to fit legend band. 37 KB sparse wide sequence composite = content-legitimately sparse, accept-with-note (below 200 KB band per locked exemption). Rebuilt once: first pass H=520 clipped the legend, raised to 560 |
| 19 | lesson_39_19_foot_pivot_locations.png | 1920x1080 | 70259 | 4540c430519153a58a0ea265a2ac881f | Side-profile foot panel (60%) w/ red heel crosshair (orange ring, IK_heel_pivot.L) + green toe crosshair (TOE ring, IK_toe_pivot.L at ball/MTP) on ground line + ankle/shin stub + leader arrows; top-view inset (pivots on centerline) + front-view inset (L cyan / R magenta symmetry); bottom 3-card wrong/wrong/right strip (heel too forward / toe at tips / correct at heel+ball) w/ drawn X & check glyphs + mini foot sketches; footer tip (3D-cursor snap) |
| 20 | lesson_39_20_leg_ik_complete.png | 1920x1080 | 100347 | 0e7e45cdfd0a64c9357c6becf11b92f5 | Assembled leg IK: thigh/shin capsule mesh (3/4 view) + DEF (#B47EE8 bones) + MCH (#2196F3 dotted IK chain w/ 'IK . chain 2' badge) + cyan IK_foot bracket widget at foot + cyan knee-pole sphere (dotted link to knee) + heel(orange)/toe(green) pivot crosshairs w/ rotation arcs; 5 leader-line annotations (IK_foot.L / IK_knee_pole.L / IK_heel_pivot.L / IK_toe_pivot.L / MCH_IK_leg_target.L); right column = control-hierarchy tree box (IK_foot->heel_pivot->toe_pivot->leg_target->IK Constraint) + Layers colour key + line-style key (solid IK solve / dotted parent-pole); footer tip (hide MCH+DEF) |
| 09 | lesson_39_09_pole_target_positioning.png | 1920x1080 | 62088 | f934e6b90d3defd1932516ab844d89be | 50/50 good/bad comparison (red-tint LEFT incorrect / green-tint RIGHT correct, center divider); same shoulder + cyan IK hand target both sides; LEFT pole jammed at elbow -> elbow flips UP (broken angle) + 'elbow flips up!' + 3 red instability arrows + 'TOO CLOSE'; RIGHT pole one-forearm below elbow (dotted link, 'good distance') -> natural neutral bend + 'elbow points naturally'; header pills w/ X/check glyphs; per-side stable/unstable caption; footer tip. Rebuilt once: first pass elbow positions too similar between panels, redrew incorrect elbow flipped opposite way for obvious contrast + moved TOO CLOSE label clear of joint |
| 16 | lesson_39_16_ikfk_snapping_problem.png | 1920x1080 | 78084 | 0e4f4e8e8e13eaf0839627535e0e8e05 | Problem/solution stack (red panel top / green panel bottom). PROBLEM: Frame50 FK arm (orange joint circles) + stale empty cyan IK widget parked away ('IK target stale . left behind'); Frame51 arm popped to broken angle following stale target + 3 red motion lines + 'ARM POPS!'. SOLUTION: Frame50 FK arm w/ IK widget snapped onto hand + green check; Frame51 pose holds in place + green smooth-lines + 'SMOOTH'. Header pills X/check; per-frame captions; footer tip (Snap IK<->FK operator). Rebuilt once: first pass had label/widget collisions (stale ghost + caption overran panel edge; SMOOTH over widget) - repositioned arms higher, ghost + labels clear, SMOOTH above widget |

**Batch-3 status: 15/30 PNG done** (cumulative: batch 1 {5,10,26,29,34} + batch 2 {3,4,13,14,15} + batch 3 {18,19,20,9,16}). Remaining 15 PNG {6,7,11,12,23,24,27,28,30,32,33,35,36,37,38} across future <=5/sub-chat batches. Suggested next groupings: comparison composites {11,32,33}; beauty/showcase renders {35,38}; PIL diagrams/grids + remaining UI {6,7,12,23,24,27,28,30,36,37}. Overlays (c39-NN) still DEFERRED to integration. Per-layer role hexes used as explicit hex (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 NEVER #667eea / FK #ff8c00 / IK #00bcd4; left #00bcd4 / right #e91e63 / center #ffd600). After all 30 PNG: integration (own chat, cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG: wrapper font-size:0 + img margin:0;vertical-align:top) -> browser QA (Chromium 1194 + Playwright, 380/900 x dark/light). Confirm L40 next-link slug (geometry_nodes_introduction vs live L40) at lesson close.

### PNG BATCH 4 (comparison composites) DONE 2026-06-30 - #11 / #32 / #33
Grouped by capture coherence = the 3 comparison composites from the suggested batch-4 set. All built as PIL Blender-style composites end-to-end (the L37/L38 proven method for good/bad + multi-state + before/after composites with explicit role hexes - NOT F12 lit renders; no fake prose, drawn glyphs/crosshairs). Arms/elbows drawn as parametric polygon glyphs (no real arm asset staged, so Blender stayed TRUE-PRISTINE the whole batch). All 3 visually QA'd Claude-side (copy_file_user_to_claude -> view; each rebuilt once after first-pass QA - see notes), full-decode + md5 + bg #2b2b2b (4,4) verified on disk. Live HTML UNTOUCHED (re-verified 241,311 / U+2014 36 before + after). Bridge health PASS; TRUE-PRISTINE before + after (3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 orphans / EEVEE AgX None / 1920x1080@100 fps24 / world 0.88/1.0). All Windows tempdir temps os.remove'd (0 stray).

| # | file | px-box | bytes | md5 | notes |
|---|---|---|---|---|---|
| 11 | lesson_39_11_limit_rotation_constraint.png | 1920x1080 | 59746 | b8da0dfe20a643231cabe7d676e0c3c2 | 50/50 good/bad: LEFT (red tint) no-limit elbow hyperextends backward/up past straight (-45deg, red overextension arc, drawn X glyph); RIGHT (green tint) with-limit forearm stops at 0deg (green stop-wall bar across elbow + faint red 'blocked' ghost of the prevented motion, drawn check glyph); center Limit Rotation settings inset (Limit X Rotation enabled / Min 0deg / Max 150deg / Influence 1.000) sized into lower mid-space clear of footer; per-side caption strips + footer tip. Rebuilt once: first pass inset overflowed bottom edge into footer + both arms read too similar -> moved inset up + redrew LEFT forearm kicking sharply back/up for obvious hyperextension contrast |
| 32 | lesson_39_32_pole_angle_adjustment.png | 1920x1080 | 66585 | 414a265784bb9aacdf131dc1c8cdf359 | 2x2 grid, 4 pole-angle states (0deg / 90deg / -90deg / 180deg); each panel shares one cyan hand IK target + one chain, elbow points a distinct readable off-axis direction per angle (0=up / 90=up-right / -90=up-left / 180=down) with cyan pole sphere + dotted pole->elbow link; shoulder/hand-target/elbow/pole labels + mono 'Pole Angle: NN' chip per cell; subtitle + footer tip (adjust Pole Angle in the IK constraint, not by moving the pole). Rebuilt twice: v1/v2 mapped 90/-90 to a horizontal offset that collapsed the forearm onto the shoulder-hand line (read as straight, no bend); v3 uses constant-magnitude off-axis elbow vectors so every panel reads as an obviously-bent, distinctly-oriented elbow |
| 33 | lesson_39_33_symmetry_mirroring.png | 1920x1080 | 65869 | e0679fb7ab49ed92b4e2a8ec20c3eab9 | Before/after: LEFT panel left-arm rig only (cyan #00bcd4, FK circles + IK hand widget + pole sphere, names .L) beside a yellow #ffd600 center spine; green mirror-arrow (X axis) between panels; RIGHT panel left arm (cyan) + new mirrored right arm (magenta #e91e63, names .R) symmetric across the spine, green check + 'new side' on the right arm; bottom name-swap strip (FK_upper_arm.L -> .R / FK_forearm / IK_hand / elbow_pole, cyan->magenta with '->' arrows); footer tip (Armature > Symmetrize needs .L suffix, builds .R across X, re-targets constraints). Rebuilt once: first pass shoulder labels collided with the FK joint circles + footer 'U+2023' triangle bullet rendered as tofu in Segoe -> nudged shoulder labels clear (anchored away from center) + replaced bullet with '>' |

**Batch-4 status: 18/30 PNG done** (cumulative: batch 1 {5,10,26,29,34} + batch 2 {3,4,13,14,15} + batch 3 {18,19,20,9,16} + batch 4 {11,32,33}). Remaining 12 PNG {6,7,12,23,24,27,28,30,35,36,37,38} across future <=5/sub-chat batches. Suggested next groupings: beauty/showcase renders {35,38}; PIL diagrams/grids + remaining UI {6,7,12,23,24,27,28,30,36,37}. Overlays (c39-NN) still DEFERRED to integration. Per-layer role hexes used as explicit hex (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 NEVER #667eea / FK #ff8c00 / IK #00bcd4; left #00bcd4 / right #e91e63 / center #ffd600). After all 30 PNG: integration (own chat, cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG: wrapper font-size:0 + img margin:0;vertical-align:top) -> browser QA (Chromium 1194 + Playwright, 380/900 x dark/light). Confirm L40 next-link slug (geometry_nodes_introduction vs live L40) at lesson close.

### PNG BATCH 5 (beauty/showcase + PIL diagrams/UI) DONE 2026-06-30 - #35 / #38 / #06 / #07 / #12
Grouped per suggested batch-5 set = 2 beauty/showcase {35,38} + 3 PIL diagram/grid/UI {06,07,12}. All built as PIL Blender-style composites end-to-end (the L37/L38 proven method; beauty figures staged as parametric humanoid + control glyphs rather than F12 - chose composite per the batch-2/4 per-figure note, no real rig asset, so Blender stayed TRUE-PRISTINE the whole batch). No fake prose; drawn vector glyphs (rings/brackets/spheres/4-arrows/arc/crosshair/eye/diamond/arrow; '>' '->' not U+2023). All 5 visually QA'd Claude-side (copy_file_user_to_claude -> view; #07 and #35 each rebuilt once after first-pass QA - see notes), full-decode + md5 + bg #2b2b2b (4,4) verified on disk. Live HTML UNTOUCHED (re-verified 241,311 / U+2014 36 before + after). Bridge health PASS; TRUE-PRISTINE before + after (3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 orphans / EEVEE AgX None / 1920x1080@100 fps24 / world 0.88/1.0). All Windows tempdir temps os.remove'd (0 stray).

| # | file | px-box | bytes | md5 | notes |
|---|---|---|---|---|---|
| 35 | lesson_39_35_complete_rig_beauty.png | 1920x1080 | 48720 | 5c6c42d212ca15f7c593c82dcf7e96ae | Beauty/showcase: neutral A-pose grey humanoid silhouette + ground shadow + full color-coded control set. CENTER yellow (#ffd600) root 4-arrow master at floor / COG ring / chest arc / 3 spine ticks w/ blue (#2196F3) MCH accent dots; LEFT side cyan (#00bcd4) shoulder/elbow/wrist FK rings + hand IK bracket + elbow pole + foot IK bracket + knee pole; RIGHT side magenta (#e91e63) mirror set; top-right legend (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 / FK #ff8c00 / IK #00bcd4 / Left / Right / Center swatches); title+subtitle; footer tip. Rebuilt once: v1 wrist rings + hand brackets read detached from arm line + foot brackets fell between legs -> rings re-centered on each joint, brackets at wrist endpoints, foot brackets under each ankle |
| 38 | lesson_39_38_animation_ready_rig.png | 1920x1080 | 44158 | 77f95181b8c5d9303cdb00307240e3d0 | Animation-ready: upper ~72% viewport panel w/ dynamic running/reaching action pose (leaning torso, front arm reaching up-fwd w/ orange #ff8c00 motion arc, back arm swung back, stride legs) + same color-coded controls (CENTER yellow root/COG/chest; LEFT cyan front arm+leg rings/brackets/poles; RIGHT magenta back arm+leg); lower ~22% Dope Sheet strip = 6 channel rows (Root/COG/hand_IK.L/foot_IK.L/hand_IK.R/foot_IK.R, mono names) w/ yellow keyframe diamonds + frame ruler 0-120 + blue (#4A9EFF) playhead at frame 28 + 'Frame 28 / 1-120' readout; footer tip |
| 06 | lesson_39_06_custom_shapes_library.png | 1920x1600 | 79193 | 8f664f2758d38e3701a7adfffcef9206 | 3x4 grid reference sheet, 12 control-shape glyphs, each cell dark square + color top-tab + name (bold) + use-case sub-label. Row0 circles lg/md/sm/xs (Root-COG green / Chest-Shoulders green / FK Joints orange / Fingers-Toes orange); Row1 cyan (hand bracket IK Hand / foot bracket IK Foot / sphere Pole / diamond Alt Pole); Row2 (4-arrow brand #FF6B00 Root-Master / half-arc yellow Chest-Torso / crosshair yellow Eye Target / arrow yellow Directional). Title 'Custom Control Shape Library'; footer tip (color by function not side). Color by function per spec |
| 07 | lesson_39_07_bone_groups_colors.png | 1920x1080 | 55517 | 1223f78811df87a63ba1a2427fd21e33 | T-pose grey humanoid (splayed legs) + L/R/center color split: viewer-LEFT controls cyan (#00bcd4) FK rings + hand IK bracket + elbow pole + foot IK bracket + knee pole; viewer-RIGHT magenta (#e91e63) mirror; CENTER yellow (#ffd600) root 4-arrow (below feet) + COG ring + chest arc + 3 spine ticks. 3 leader-line annotations (Left Blue/Cyan w/ IK_hand.L/IK_foot.L/FK_upper_arm.L; Right Red/Magenta w/ .R names; Center Yellow w/ Root/COG/Chest/Spine); Bone Collections panel inset bottom-right (Left/Right/Center swatches + col_* names + drawn eye glyphs); footer tip. Rebuilt once: v1 foot brackets clustered between legs + root arrows overlapped them -> legs splayed, feet brackets under each leg, root moved below feet clear |
| 12 | lesson_39_12_track_to_eye_tracking.png | 1920x1080 | 44125 | fd050e56c01c2eee8fc11b532be1379a | 2x2 grid, 4 panels front-view head (grey ellipse) w/ two eyes (white + blue #2196F3 pupil tracking target) following one cyan (#00bcd4) crosshair eye-target; dotted sight-lines eye->target each panel. Panels: Target Centered / Left / Right / Up (target repositioned, pupils + sightlines reorient per panel). Track To Constraint settings inset bottom-center (Target eye_target / To -Z / Up Y, mono); footer tip (one target both eyes, parent to head) |

**Batch-5 status: 23/30 PNG done** (cumulative: batch 1 {5,10,26,29,34} + batch 2 {3,4,13,14,15} + batch 3 {18,19,20,9,16} + batch 4 {11,32,33} + batch 5 {35,38,6,7,12}). Remaining 7 PNG {23,24,27,28,30,36,37} across future <=5/sub-chat batches. Suggested next groupings: COG/Chest function composites {23,24}; testing/mistakes grids {27,28}; remaining UI/diagram {30,36,37}. Overlays (c39-NN) still DEFERRED to integration. Per-layer role hexes used as explicit hex (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 NEVER #667eea / FK #ff8c00 / IK #00bcd4; left #00bcd4 / right #e91e63 / center #ffd600). After all 30 PNG: integration (own chat, cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG: wrapper font-size:0 + img margin:0;vertical-align:top) -> browser QA (Chromium 1194 + Playwright, 380/900 x dark/light). Confirm L40 next-link slug (geometry_nodes_introduction vs live L40) at lesson close.

### PNG BATCH 6 (final PNG batch) DONE 2026-06-30 - #23 / #24 / #27 / #28 / #30 / #36 / #37 - ALL 30 PNG COMPLETE
The last 7 PNG: COG/Chest function composites {23,24} + testing/mistakes grids {27,28} + remaining UI/diagram {30,36,37}. 7 > batch cap of 5 - built coherently as one batch (split internally {23,24,27,28,30} then {36,37}). All built as PIL Blender-style composites end-to-end (the L37/L38 proven method for function composites / pose-grid / problem-solution grid / multi-panel UI sequence / labeled reference / split-screen integration with explicit role hexes - NOT F12 lit renders; no fake prose, drawn vector glyphs/widgets). Humanoid + control glyphs parametric (no real rig asset staged, so Blender stayed TRUE-PRISTINE the whole batch). All 7 visually QA'd Claude-side (copy_file_user_to_claude -> view; #23/#28/#36/#37 each rebuilt once after first-pass QA - see notes), full-decode + md5 + bg #2b2b2b (4,4) verified on disk. Live HTML UNTOUCHED (re-verified 241,311 / U+2014 36 before + after). Bridge health PASS; TRUE-PRISTINE before + after (3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 armatures / 0 orphans / EEVEE AgX None / 1920x1080@100 fps24 / world-node 0.88/1.0). All Windows tempdir temps os.remove'd (0 stray).

| # | file | px-box | bytes | md5 | notes |
|---|---|---|---|---|---|
| 23 | lesson_39_23_cog_control_functions.png | 1920x1080 | 56232 | 322f72dcb89e9434c7027297bd836763 | 3-panel COG function composite (Neutral / Move COG Down / Shift+Rotate COG); grey humanoid per panel + yellow (#ffd600) COG ring+4-arrow widget at the pelvis; crouch panel = lowered hips + splayed legs + 'down' arrow; lean panel = leaned torso + rotation arc + 'rotate + shift'; per-panel caption (crouch / lean+weight-shift) + 'COG . yellow center master' sublabel; footer tip (parent COG under Root). Rebuilt once: v1 COG widget read mid-torso on neutral/lean + lean label clipped leg -> widget lowered to true pelvis, lean rotation-arc + label moved clear |
| 24 | lesson_39_24_chest_control_functions.png | 1920x1080 | 45464 | ea55931da443b4d272c84f814c7b0fb3 | 3-panel Chest function composite (Neutral / Rotate Chest / Lean Chest); KEY contrast vs #23 = lower body PLANTED (ground-anchor line under feet all 3) while the upper body twists/leans + arms follow; yellow (#ffd600) chest half-arc widget at upper torso; twist panel = asymmetric arm swing (front arm wide / back arm tucked) + rotation arc + 'twist'; lean panel = whole upper body tilted + arms following + 'lean' arrow; per-panel caption + 'Chest . yellow center master' sublabel; footer tip (parent Chest above spine; COG controls hips independently) |
| 27 | lesson_39_27_testing_poses_reference.png | 1920x1080 | 52673 | adaa431a47293cdef90f59b9c8d631e4 | 3x2 grid, 6 standard rig-test poses (T-Pose / Sitting / Reaching Up / Contrapposto / Action Pose / Walk Pose); each cell = grey parametric stick-figure in the distinct pose + orange (#FF6B00) top label band + green (#4CAF50) verification check badge top-right + ground line + per-pose caption (what to verify); subtitle 'each should hold cleanly'; footer tip (a rig that fails here fails in every shot). All 6 poses drawn distinct + recognizable |
| 28 | lesson_39_28_common_mistakes_grid.png | 1920x1080 | 81576 | 5bef5134658d5f20fc45fd3e212d167b | 2x2 problem/solution grid, 4 most-common failures (Elbow Flips Backward / Foot Won't Roll / Spine Breaks / Controls Drift on Switch); each cell split PROBLEM (red header + drawn X badge, bad-state glyph) | FIX (green header + drawn check badge, fixed-state glyph) with center divider; glyphs: pole low->elbow flips vs pole high->natural bend; flat foot w/ red mid-sole pivot vs rolled foot w/ heel(orange)+toe(green) pivots; red kinked spine vs smooth blue/yellow blended stack; red stale widget parked away vs green widget snapped onto hand; wrapped problem/fix captions per cell; footer tip. Rebuilt once: v1 bad-side (PROBLEM) glyphs had a doubled-px x-coordinate (px added twice) pushing them off-panel so only FIX glyphs drew -> corrected bad_cx to mirror good_cx inside the left half; all 8 glyphs now render |
| 30 | lesson_39_30_custom_shape_assignment.png | 1920x1080 | 88445 | 6a43a431eb25c7f8a7d9d3e9d94f4ee5 | 4-panel UI sequence (Create shape mesh / Open Bone Properties / Pick the Custom Shape / Result), orange (#FF6B00) numbered step badges + orange '>' flow arrows between panels; P1 WGT_circle mesh w/ verts in dark field; P2 Bone Properties tab rail (Bone tab blue-selected) + collapsed sections + Viewport Display section orange-highlighted ('the Custom Shape field lives here'); P3 Viewport Display panel w/ Custom Object dropdown OPEN (WGT_circle/square/hand/arrow) + Scale/Translation fields; P4 result = bone displaying as the circle control (orange) on the bone line; mono breadcrumb per panel footer (Shift+A>Mesh>Circle / Properties>Bone>Viewport Display / Custom Object>WGT_circle / repeat+hide); footer tip (keep WGT_ meshes on hidden collection) |
| 36 | lesson_39_36_control_interface_reference.png | 1920x1080 | 86014 | 1c64d071224a6bb4bd39a5d3ced8a4c6 | Labeled reference infographic: LEFT panel (~58%) = grey humanoid w/ EVERY main control placed + leader-line labels (Root #FF6B00 4-arrow at floor / COG #ffd600 ring at hips / Chest #ffd600 arc / 3 #2196F3 MCH spine ticks / LEFT-side #00bcd4 IK_hand+IK_foot brackets + elbow/knee #00bcd4 poles + #ff8c00 FK ring / RIGHT-side #e91e63 mirror) + side color key in panel footer (Left=cyan/Right=magenta/Center=yellow); RIGHT panel (~38%) = 9-row Control Legend table mapping glyph -> name -> function (Root/COG/Chest/Spine MCH/IK_hand+foot.L/pole.L/FK_*/IK_hand+foot.R/pole.R); footer tip (color+naming scheme = find any control at a glance). Rebuilt once: v1 bottom legend row collided with the side color key + key overran the legend panel -> moved color key into the FIGURE panel footer, tightened legend rows clear of bottom |
| 37 | lesson_39_37_weight_painting_integration.png | 1920x1080 | 61017 | d80f7d6af09782b9ca7e793becf702c1 | Split-screen (4px #FF6B00 divider) showing the L38<->L39 relationship: LEFT 'Weight Paint Mode' (orange chip, Vertex Group DEF_forearm.L) = straight arm mesh painted with the Blender weight ramp (blue shoulder -> red forearm/hand) + shoulder/elbow/hand labels + horizontal weight-ramp legend (0.0 not influenced -> 1.0 fully); RIGHT 'Pose Mode' (green chip, FK_forearm.L rotated 90deg) = SAME mesh bent at the elbow, red forearm verts following the rotated DEF (#B47EE8) bone + #ff8c00 FK control ring + rotation arc while blue shoulder verts stay put; 'same mesh / same weights' link label on the divider; footer tip (bad joint deform -> fix is in the weights/L38, not the rig). Rebuilt once: v1 center link label overlapped the left header's Vertex-Group text -> moved label down onto the divider below the headers |

**Batch-6 status: 30/30 PNG done - ALL 30 PNG COMPLETE** (cumulative: batch 1 {5,10,26,29,34} + batch 2 {3,4,13,14,15} + batch 3 {18,19,20,9,16} + batch 4 {11,32,33} + batch 5 {35,38,6,7,12} + batch 6 {23,24,27,28,30,36,37}). Overlays (c39-NN) still DEFERRED to integration. Per-layer role hexes used as explicit hex (CTRL #4ADE80 / MCH #2196F3 / DEF #B47EE8 NEVER #667eea / FK #ff8c00 / IK #00bcd4; left #00bcd4 / right #e91e63 / center #ffd600). **8/8 inline SVG + 30/30 PNG = ALL 38 FIGURE ASSETS PRODUCED.** NEXT PHASE (own sub-chat): integration (cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG: wrapper font-size:0 + img margin:0;vertical-align:top; edit_file dryRun->commit->recount per fig; FIRST-match unique anchors; U+2014 HELD at 36 every checkpoint) -> browser QA (Chromium 1194 + Playwright, 380/900 x dark/light). Confirm L40 next-link slug (geometry_nodes_introduction vs live L40) at lesson close.

## INTEGRATION LOG
(empty - integration begins after SVG + PNG batches complete)

## BROWSER QA
(empty - after integration)
