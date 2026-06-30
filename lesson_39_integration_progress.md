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
| 21 | spine_control_system | `scs-` | pending |
| 22 | spine_blending_gradient | `sbg-` | pending |
| 25 | root_control_diagram | `rcd-` | pending |
| 31 | workflow_flowchart | `wf-` | pending |
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

## INTEGRATION LOG
(empty - integration begins after SVG + PNG batches complete)

## BROWSER QA
(empty - after integration)
