# Lesson 40 (Geometry Nodes Introduction) - Integration Progress

**Slug:** geometry_nodes_introduction
**File:** lesson_40_geometry_nodes_introduction.html
**Module:** 7 (Advanced Modeling), lesson 13
**Status:** INTEGRATION COMPLETE + browser-QA-passed (2026-07-01). All 26 figures committed (RUN LOG + FINAL CHECKPOINT below). Browser QA (Playwright/Chromium, 380/900 x dark/light): 26 figures render, mermaid 7/7, PNG overlay registration drift 0 (maxdy=0/maxdh=0 all configs), no table overflow, Fig30/vnw(#FFC107)/lpf(#4ADE80/#4A9EFF/#B47EE8) confirmed; next-link verified against live L41 file. Baseline re-verified: 418,389 B / U+2014 60 / U+2013 0 / figure 26 / img 10 / svg 24 / mermaid 7 / table 5.
**Opened:** 2026-06-30

---

## LIVE-HTML BASELINE (post Phase-0, disk-verified via UTF-8 bridge)

| Invariant | Value |
|---|---|
| bytes | 279,989 (pre-neutralization 280,861; delta -872) |
| U+2014 (em-dash) | 60 (BASELINE - hold; NOT re-based) |
| en-dash U+2013 | 0 (banned) |
| &#8212; / &#x2014 / &#8211; / &#x2013 | 0 / 0 / 0 / 0 (banned) |
| figure / figcaption / img / svg | 0 / 0 / 0 / 0 (TRUE-PRISTINE for figures) |
| class="mermaid" | 7 (preserved) |
| table (open/close) | 5 / 5 |
| #667eea / #764ba2 / linear-gradient (body) | 0 / 0 / 0 (neutralized) |
| back-link | lesson_39_rigging_essentials.html (1, valid) |
| next-link | lesson_41_procedural_modeling_with_nodes.html (1; CONFIRM vs live L41 at close) |
| CSS | external styles/main.css (no inline <style>, no per-lesson injection) |

## PHASE-0 NEUTRALIZATION LOG (committed 2026-06-30)

Legacy purple literals removed from body -> count 0. Targets match L39 conventions:
- primaryBorderColor: '#667eea' -> '#888888' (x1, mermaid init)
- mermaid output-node fill:#667eea,stroke:#333,stroke-width:2px,color:#fff -> fill:#3a3a3a,... (x7). Green #4CAF50 (start nodes) + blue #2196F3 (mid nodes) accents LEFT INTACT - only purple emphasis nodes neutralized.
- card gradient `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;` -> `background: #2a2a2a; color: white;` (x20)
- footer anchors (Course Home / Back to Top): stripped inline `color: #667eea; ` -> main.css governs (per L39 footer intent) (x2)

Structure unchanged; U+2014 held at 60 across the pass. In-memory == disk verified.

NOTE: styles/main.css .exercise-card rules legitimately contain #667eea/#764ba2/linear-gradient (stylesheet-only, unused by lesson body). Body banned-literal count is the tracked invariant and = 0.

---

## ROSTER TRIAGE (35 figures, from lesson_40_image_requirements_part1.md + _part2.md)

Planning docs are raw Nov-2025 AI-prompt drafts (35 figs, 1-35). Production triage below. Types per SVG-recommendation lists + screenshot/render nature. PNG = BlenderMCP render / UI capture. SVG = inline diagram.

### PART 1 (Figs 1-15: Introduction -> Data Flow)
| # | Title | Type | Triage | Placement anchor (section id) |
|---|---|---|---|---|
| 1 | Workspace Overview | PNG | BUILD | introduction / geometry-nodes-interface |
| 2 | Procedural vs Manual | PNG | BUILD | introduction (Real-World Analogy) |
| 3 | Capabilities Grid | PNG | DEFER (inspirational, non-instructional) | introduction |
| 4 | Node Systems Comparison | SVG | BUILD | introduction (vs Other Systems) |
| 5 | Editor Interface Breakdown | PNG | BUILD | geometry-nodes-interface |
| 6 | Default Node Tree | PNG | BUILD | geometry-nodes-interface |
| 7 | Add Menu Navigation | PNG | DEFER (self-explorable) | geometry-nodes-interface |
| 8 | Node Anatomy Diagram | SVG | BUILD | node-anatomy |
| 9 | Socket Color Reference | SVG | BUILD | node-anatomy (Data Types) |
| 10 | Connection Methods | SVG | BUILD | node-anatomy (Connecting Nodes) |
| 11 | Common Node Patterns | SVG | BUILD | node-anatomy (Common Patterns) |
| 12 | Data Flow Pipeline | SVG | BUILD | data-flow (Pipeline) |
| 13 | Pass-Through vs Replacement | SVG | BUILD | data-flow |
| 14 | Join Geometry Example | SVG | BUILD | data-flow (Join Geometry) |
| 15 | Viewer Node Debugging | PNG | DEFER (dup of #31; adv.) | data-flow |

### PART 2 (Figs 16-35: First Node Tree -> Next Steps)
| # | Title | Type | Triage | Placement anchor (section id) |
|---|---|---|---|---|
| 16 | Cube Stack Node Tree | PNG | BUILD | first-node-tree |
| 17 | Cube Stack Result | PNG | BUILD | first-node-tree (after Step 3) |
| 18 | Parameter Exposure | PNG | BUILD | first-node-tree (Step 5) |
| 19 | Modifier Panel Controls | PNG | DEFER (discoverable UI) | first-node-tree |
| 20 | Primitive Nodes Grid | PNG | DEFER (explorable) | essential-nodes |
| 21 | Instance on Points Explanation | SVG | BUILD | essential-nodes (Instance Ops) |
| 22 | Transform vs Set Position | SVG | BUILD | essential-nodes (Geometry Ops) |
| 23 | Random Value Pattern | SVG | BUILD | essential-nodes (Common Patterns) |
| 24 | Fence Complete Node Tree | PNG | BUILD | practical-project (overview) |
| 25 | Fence Visual Results | PNG | BUILD | practical-project (after Phase 6) |
| 26 | Resample Curve Explanation | SVG | BUILD | practical-project (Phase 3) |
| 27 | Curve to Mesh Process | SVG | BUILD | practical-project (Phase 5) |
| 28 | Join Geometry in Practice | PNG | DEFER (reinforces #14) | practical-project (Phase 6) |
| 29 | Common Errors Grid | SVG | BUILD | troubleshooting (start) |
| 30 | Spreadsheet Editor | PNG | BUILD | troubleshooting (Debugging Tools) |
| 31 | Viewer Node Workflow | SVG | BUILD | troubleshooting (Viewer Node) |
| 32 | Mute Node Comparison | PNG | DEFER (feature demo) | troubleshooting (Mute Nodes) |
| 33 | Learning Path Flowchart | SVG | BUILD | next-steps (Immediate Topics) |
| 34 | Practice Projects Gallery | PNG | DEFER (inspirational) | next-steps (Practice Projects) |
| 35 | Node Organization Comparison | PNG | DEFER (best-practice, non-core) | next-steps (Effective Practice) |

### TRIAGE SUMMARY
- BUILD: 26 figures (SVG 16 + PNG 10)
- DEFER: 9 figures (3, 7, 15, 19, 20, 28, 32, 34, 35)
- 26 + 9 = 35 total. Confirmed consistent.
- CONFIRM section-id anchors against live HTML during SVG batch (planning-doc ids are as-authored; verify present before authoring).

**BUILD SVG (16):** 4, 8, 9, 10, 11, 12, 13, 14, 21, 22, 23, 26, 27, 29, 31, 33
**BUILD PNG (10):** 1, 2, 5, 6, 16, 17, 18, 24, 25, 30
**DEFER (9):** 3, 7, 15, 19, 20, 28, 32, 34, 35

---

## NEXT PHASE: SVG BATCH PRODUCTION (separate sub-chat)
1. Verify all placement section-ids exist in live HTML (grep id="...").
2. Lock final BUILD roster + per-figure id-prefix scheme (fs/... per lesson convention).
3. Author inline SVGs per IMAGE_STYLE_GUIDE.md v6.
4. Blender restored TRUE-PRISTINE; bridge for UTF-8 I/O only during SVG phase.
5. Then PNG production (BlenderMCP), then integration (cairosvg pixel-verify + L33 wrapper fix, edit_file dryRun->commit->recount, U+2014==60 checkpoints), then browser QA (Chromium, Playwright, 380/900 x dark/light).

## HANDOFF INVARIANTS TO CARRY
- U+2014 == 60 at every checkpoint.
- body #667eea/#764ba2/linear-gradient == 0.
- figure==figcaption==(img+inline-svg overlays); mermaid stays 7; tables 5/5.
- next-link lesson_41_procedural_modeling_with_nodes.html - confirm vs live L41 at close.


---

## SVG BATCH PRODUCTION - PARTIAL (2026-06-30)

**Status:** 10 of 16 inline SVGs authored + cairosvg-verified (dark & light). 6 remaining. Live HTML STILL TRUE-PRISTINE (279,989 B / U+2014 60 / fig|figcap|img|svg 0/0/0/0 / mermaid 7 / table 5-5 / body purple 0/0/0 - re-verified via UTF-8 bridge at handoff). SVG phase writes to images/ only; HTML untouched.

**STYLE GUIDE NOTE:** on disk it is v8 (`images\IMAGE_STYLE_GUIDE.md`), a compaction-only pass content-identical to v6 in every operative respect. Prompt said v6; use the disk file.

### Step 1 DONE - all 16 SVG placement section-ids confirmed present in live HTML
introduction / node-anatomy / data-flow / essential-nodes / practical-project / troubleshooting / next-steps. (Full id list: introduction, what-are-geometry-nodes, why-procedural, geometry-nodes-interface, node-anatomy, data-flow, first-node-tree, essential-nodes, practical-project, troubleshooting, next-steps, lesson-summary, congratulations.)

### Step 2 DONE - id-prefix scheme LOCKED (one unique prefix per SVG)
| Fig | slug | id-prefix |
|---|---|---|
| 4  | node_systems_comparison        | nsc |
| 8  | node_anatomy_diagram           | nad |
| 9  | socket_color_reference         | scr |
| 10 | connection_methods             | cnm |
| 11 | node_patterns_diagram          | npd |
| 12 | data_flow_pipeline             | dfp |
| 13 | pass_through_vs_replacement    | ptr |
| 14 | join_geometry_example          | jge |
| 21 | instance_on_points_explanation | iop |
| 22 | transform_vs_set_position      | tsp |
| 23 | random_value_pattern           | rvp |
| 26 | resample_curve_explanation     | rce |
| 27 | curve_to_mesh_process          | ctm |
| 29 | common_errors_grid             | ceg |
| 31 | viewer_node_workflow           | vnw |
| 33 | learning_path_flowchart        | lpf |

### AUTHORED (16/16) - SVG BATCH COMPLETE - on disk in images/, all U+2014=0 / U+2013=0 / banned-literal=0, cairosvg-verified dark+light
- #04 lesson_40_04_node_systems_comparison.svg        4540B  (nsc) viewBox 800x560
- #08 lesson_40_08_node_anatomy_diagram.svg           4431B  (nad) 800x560
- #09 lesson_40_09_socket_color_reference.svg         5177B  (scr) 800x680 dense
- #10 lesson_40_10_connection_methods.svg             5052B  (cnm) 800x560
- #11 lesson_40_11_node_patterns_diagram.svg          7165B  (npd) 800x680 dense
- #12 lesson_40_12_data_flow_pipeline.svg             4562B  (dfp) 800x560
- #13 lesson_40_13_pass_through_vs_replacement.svg    6103B  (ptr) 800x560
- #14 lesson_40_14_join_geometry_example.svg          4094B  (jge) 800x560
- #21 lesson_40_21_instance_on_points_explanation.svg 3326B  (iop) 800x560
- #22 lesson_40_22_transform_vs_set_position.svg      4865B  (tsp) 800x560
- #23 lesson_40_23_random_value_pattern.svg           6161B  (rvp) 800x560  cairosvg-verified dark+light
- #26 lesson_40_26_resample_curve_explanation.svg     4405B  (rce) 800x560  cairosvg-verified dark+light
- #27 lesson_40_27_curve_to_mesh_process.svg          4297B  (ctm) 800x560  cairosvg-verified dark+light
- #29 lesson_40_29_common_errors_grid.svg            8190B  (ceg) 800x680 dense  cairosvg-verified dark+light
- #31 lesson_40_31_viewer_node_workflow.svg          6100B  (vnw) 800x560  cairosvg-verified dark+light (yellow #FFC107 viewer link)
- #33 lesson_40_33_learning_path_flowchart.svg       4871B  (lpf) 800x680 dense  cairosvg-verified dark+light (tiers green/blue/purple)

Palette note: planning doc suggested #667eea for the Geometry box (fig 4) - swapped to course-blue #4A9EFF (banned-literal avoidance). Same substitution rule applies to any remaining fig whose planning prompt calls #667eea.

### REMAINING (0/16) - SVG BATCH COMPLETE (2026-06-30)
All 16 inline SVGs authored + cairosvg-verified dark+light, on disk in images/, U+2014=0 / U+2013=0 / banned-literal=0, root color/role/aria/title/desc intact. Live HTML re-verified TRUE-PRISTINE at close: 279,989 B / U+2014 60 / fig|figcap|img|svg 0/0/0/0 / mermaid 7 / table 5-5 / body purple 0/0/0. #33 lpf Advanced tier uses #B47EE8 (NOT #9C27B0); #31 vnw viewer link #FFC107; #29 ceg warning-red #E63946 / positive-green #4ADE80 colorway.

### VERIFY METHOD (reuse)
Author via bridge io.open utf-8 write to images\; copy_file_user_to_claude -> cairosvg render on #1e1e1e dark (replace color="#222" with #e8e8e8) AND #ffffff light; view to confirm legibility + no overlaps + arrowheads. Batch of 3, then update this doc + session.md.

### AFTER 16 SVGs COMPLETE
Blender restore/confirm TRUE-PRISTINE (default Camera/Cube/Light, AgX) - already pristine, bridge used for UTF-8 I/O only this phase. Then PNG production phase (BlenderMCP, 10 PNG: 1,2,5,6,16,17,18,24,25,30) in its own sub-chat.


---

## PNG PRODUCTION - BATCH A COMPLETE (2026-06-30)

**Status:** Batch A {6,16,17,18,30} = 5/10 BUILD PNG done, on disk in images/, each view-verified + within accept band. Live HTML STILL TRUE-PRISTINE (279,989 B / U+2014 60 / fig|figcap|img|svg 0/0/0/0 / mermaid 7 / table 5-5 / body purple 0/0/0 - re-verified at close). PNG phase wrote images/ only; HTML untouched.

### Batch A finals (disk-verified)
| # | file | size | bytes | band |
|---|---|---|---|---|
| 06 | lesson_40_06_default_node_tree.png | 1920x940 | 38,319 | UI-chrome OK |
| 16 | lesson_40_16_cube_stack_node_tree.png | 1920x940 | 92,212 | UI-chrome OK |
| 17 | lesson_40_17_cube_stack_result.png | 1920x1080 | 769,425 | render OK (<800K) |
| 18 | lesson_40_18_parameter_exposure.png | 1836x454 | 41,628 | UI-chrome OK |
| 30 | lesson_40_30_spreadsheet_editor.png | 1509x952 | 143,495 | UI-chrome OK |

### Production notes (Batch A this session)
- #17 RE-RENDERED (prior draft rejected: over-thin dashed column). Fix: widened post footprint via cube-stack tree Transform Geometry scale .1/.1/2 -> 0.5/0.5/0.5 (1x1x1 cubes) + tightened Offset (Socket_3) (0,0,2.5)->(0,0,1.5); framed bottom 5 cubes at 3/4 angle; 3D cursor OFF, overlay extras OFF, stats/text OFF; grid floor + X/Y axes + origin visible; opengl view_context (plain grey geom). Reads as discrete blocks with depth.
- #18 fully automated 3-panel (before / synthetic cyan "Expose as Input" menu callout / after). Count link Group Input->Mesh Line temporarily removed for panel 1 then RESTORED. Pillow composite, #FF6B00 dividers, numbered orange badges. before/after diff bbox confirmed localized to Count row.
- #30 split node-editor (Mesh Line selected, yellow highlight box + "Selected node" callout) + SPREADSHEET (Instances domain = 10 rows, Rows:10/Columns:4, domain selector + pin visible). NOTE: node-level spreadsheet context (Mesh Line POINT domain Index/Position) does NOT populate via bridge redraw_timer overrides; used final-geometry INSTANCES domain (10 instance points) which populates cleanly and satisfies the "inspect point data" teaching point.

### TRUE-PRISTINE TEARDOWN DONE (verified)
GeometryNodes modifier removed from Cube; "Geometry Nodes" node group deleted; camera restored to factory (loc (7.3589,-6.9258,4.9583), rot (1.1093,0,0.8149)); NODE_EDITOR+SPREADSHEET areas converted back to VIEW_3D; overlays restored (cursor/extras/text ON, stats OFF, floor + X/Y axes); toolbar ON, N-panel OFF; gizmos ON; SOLID shading. Confirmed: EEVEE, 1920x1080@100, fps24, AgX/None, world 0.88/1.0, default Camera/Cube/Light, Cube at origin no modifiers, 0 node groups. All Windows tempdir temps + images/ scratch *_view.png removed.

### REMAINING PNG - BATCH B (own sub-chat)
{1,2,5,24,25} = 5 PNG. Then INTEGRATION (own sub-chat): 16 inline SVG (strip root color="#222") + 10 PNG + c40-NN overlays = 26 figures. cairosvg pixel-verify 1:1 + L33 overlay-margin fix (wrapper font-size:0 + img margin:0;vertical-align:top); edit_file dryRun->commit->get_file_info per fig; FIRST-match unique anchors; U+2014==60 every checkpoint; browser QA Chromium+Playwright 380/900 x dark/light. Confirm next-link lesson_41_procedural_modeling_with_nodes.html vs live L41 at close.


---

## PNG PRODUCTION - BATCH B (2026-07-01)

**Status:** 9 of 10 BUILD PNG done {1,5,6,16,17,18,24,25,30}. Only #02 remains (both render halves done + persisted; needs node strip + composite in fresh chat). Live HTML STILL TRUE-PRISTINE (279,989 B / U+2014 60 / fig|figcap|img|svg 0/0/0/0 / mermaid 7 / table 5-5 / body purple 0/0/0 - re-verified at close). PNG phase wrote images/ only; HTML untouched.

### Batch B finals this session (disk-verified, in band)
| # | file | size | bytes | band |
|---|---|---|---|---|
| 25 | lesson_40_25_fence_visual_results.png | 1804x389 | 240,541 | render OK (200-800K) |
| 01 | lesson_40_01_workspace_overview.png | 1924x760 | 309,792 | UI-chrome composite OK |
(24 + 05 were completed the prior session: 24 = 1920x946 103,101B; 05 = 1920x976 51,635B.)

### #02 procedural_vs_manual - PARTIAL (finish in fresh chat)
- LEFT (manual): images/_temp_l40_02_manual.png (1920x1080, 578,004B) - 5 discrete plain-grey posts, hand-placed look, no rails. View-verified valid (mean lum 56). Tiny orange 3D-cursor speck near post 1 - crop out.
- RIGHT (procedural): images/_temp_l40_02_proc_result.png (1920x1080, 589,512B) - S-curve FenceNodes result (posts+rails). View-verified valid (mean lum 56.6).
- STILL NEEDED: node-tree strip of FenceNodes, then Pillow composite manual-left / (nodes + result)-right with #FF6B00 2px divider(s), NO baked text (c40-NN deferred to integration). Final name lesson_40_02_procedural_vs_manual.png. Target render/composite band.
- BLOCKER worked around: node/spreadsheet screenshot_area returns BLACK after any render.opengl in the same session (GL context stays bound; redraw_timer no-ops at ~0ms; area type-toggle did NOT clear it). So in the fresh chat: build FenceNodes, capture the NODE STRIP FIRST (before any render.opengl), THEN render the halves (already have them) / composite.

### REGRESSION REPAIR (resolved this session)
The four _view.png deliverables glob-deleted last session (lesson_13_12_3d_2d_sync_view, lesson_07_07_interior_xray_view, lesson_03_15_camera_to_view, lesson_23_05_lock_camera_view) were tracked in git HEAD and only removed from the working tree. Restored via `git checkout -- <paths>` (needed `git config --global --add safe.directory` for the //wsl$ UNC dubious-ownership guard first). Working tree clean, sizes 328,198 / 1,415,689 / 440,767 / 50,082 B. NO regeneration needed. Defect CLOSED. RULE reaffirmed: never glob os.remove(images\*_view.png) - those are real deliverables.

### FENCE GN GROUP (verified 426 polys / 504 verts)
POLY curve resolution_u=12 REQUIRED. Node schema corrections vs handoff: ResampleCurve **Mode is an INPUT SOCKET** (rs.inputs['Mode'].default_value='Count'; Count/Length also sockets). CurveToPoints has **NO Mode socket** - use RNA prop c2p.mode='COUNT' (+ Count input socket). Transform node also has a Mode socket (leave default). Tree: Group Input(Geometry + exposed Length/Post Scale/Rail Height) -> Resample(Count 7) -> [posts: CurveToPoints(COUNT 7) -> InstanceOnPoints(cube 0.12/0.12/1.6, Transform Z+0.8) -> RealizeInstances] + [rails: CurvePrimitiveCircle r0.03 + CurveToMesh -> Transform Z1.5 / Transform Z0.7] -> JoinGeometry -> Group Output. S-path pts [(-4,0,0),(-2,0.4,0),(0,0,0),(2,-0.4,0),(4,0,0)].

### CAPTURE NOTE (new)
screenshot_area needs a full-UI redraw flush BEFORE the grab: `for a in screen.areas: a.tag_redraw()` then DRAW_WIN_SWAP x5, else it writes ~250 B. Distinct from the post-render.opengl black-buffer stall above.

### REMAINING
1. #02 composite (fresh chat, node-strip-first). Then PNG 10/10 COMPLETE.
2. INTEGRATION (own sub-chat): 16 inline SVG (strip root color="#222") + 10 PNG + c40-NN overlays = 26 figures. cairosvg pixel-verify 1:1 + L33 overlay-margin fix (wrapper font-size:0 + img margin:0;vertical-align:top); edit_file dryRun->commit->get_file_info per fig; FIRST-match unique anchors; U+2014==60 every checkpoint; browser QA Chromium+Playwright 380/900 x dark/light. Confirm next-link lesson_41_procedural_modeling_with_nodes.html vs live L41 at close.


---

## PNG 10/10 COMPLETE (2026-07-01)

**Status:** ALL 10 BUILD PNG done, on disk, view-verified, in band {1,2,5,6,16,17,18,24,25,30}. #02 (the last) finished this session. Live HTML STILL TRUE-PRISTINE (279,989 B / U+2014 60 / fig|figcap|img|svg 0/0/0/0 / mermaid 7 / table 5-5 / body purple 0/0/0 - re-verified before+after; UNTOUCHED).

### #02 procedural_vs_manual - DONE
- Final: lesson_40_02_procedural_vs_manual.png (1920x1080, 521,262 B, render/composite band OK).
- Layout: manual-left (5 discrete hand-placed posts) | right column = FenceNodes node-tree (top) over S-curve fence result (bottom). #FF6B00 2px vertical divider (left|right) + #FF6B00 2px horizontal divider (nodes|result). NO baked text (c40-NN overlays DEFERRED to integration).
- Orange 3D-cursor specks despeckled with sampled local grey: manual bbox (644,390)-(646,392); proc bbox (958,638)-(960,640).
- Node strip captured FIRST, before any render.opengl (GL-context BLACK-buffer blocker). FenceNodes rebuilt verified 504 verts/426 polys. ResampleCurve Mode INPUT SOCKET .inputs['Mode'].default_value='Count' (title-case enum) + Count 7; CurveToPoints NO Mode socket, RNA .mode='COUNT' + Count 7. screenshot_area needed tag_redraw-all + DRAW_WIN_SWAP x5 flush (raw 72,806 B).
- Removed by explicit name: _temp_l40_02_manual.png, _temp_l40_02_proc_result.png, _temp_l40_02_manual_clean.png, _temp_l40_02_proc_clean.png, _temp_l40_02_nodestrip.png, _temp_l40_02_nodes_crop.png, + Windows-temp l40_02_nodestrip_raw.png. NO glob os.remove.

### Final PNG manifest (disk-verified in band)
| # | file | bytes |
|---|---|---|
| 01 | lesson_40_01_workspace_overview.png | 309,792 |
| 02 | lesson_40_02_procedural_vs_manual.png | 521,262 |
| 05 | lesson_40_05_editor_interface_breakdown.png | 51,635 |
| 06 | lesson_40_06_default_node_tree.png | 38,319 |
| 16 | lesson_40_16_cube_stack_node_tree.png | 92,212 |
| 17 | lesson_40_17_cube_stack_result.png | 769,425 |
| 18 | lesson_40_18_parameter_exposure.png | 41,628 |
| 24 | lesson_40_24_fence_complete_node_tree.png | 103,101 |
| 25 | lesson_40_25_fence_visual_results.png | 240,541 |
| 30 | lesson_40_30_spreadsheet_editor.png | 143,495 |

### Blender TRUE-PRISTINE (teardown verified)
default Cam/Cube/Light; Cube origin 0 mods; 0 node groups; all orphan curves (FenceCurve/FenceCurved/FenceStraight) + orphan meshes purged; editors->VIEW_3D/PROPERTIES; overlays cursor/extras/text ON + stats OFF + floor + X/Y ON + Z OFF; toolbar ON; N-panel OFF; gizmos ON; SOLID; Cube active+selected; EEVEE 1920x1080@100 fps24 AgX/None world 0.88/1.0; camera factory (7.3589,-6.9258,4.9583)/(1.1093,0,0.8149).

### NEXT = INTEGRATION (own sub-chat)
16 inline SVG (strip root color="#222") + 10 PNG + c40-NN overlays = 26 figures. cairosvg pixel-verify 1:1 + L33 overlay-margin fix (wrapper font-size:0 + img margin:0;vertical-align:top); edit_file dryRun->commit->get_file_info per fig; FIRST-match unique anchors; U+2014==60 every checkpoint; browser QA Chromium+Playwright 380/900 x dark/light. Confirm next-link lesson_41_procedural_modeling_with_nodes.html vs live L41 at close.


---

## INTEGRATION - PLAN-LOCK (2026-07-01)

**Live HTML re-verified TRUE-PRISTINE at open:** 279,989 B / U+2014 60 / fig|figcap|img|svg 0/0/0/0 / mermaid 7 / table 5-5 / body #667eea|#764ba2|linear-gradient 0/0/0 / back-link lesson_39_rigging_essentials.html 1 / next-link lesson_41_procedural_modeling_with_nodes.html 1. Matches handoff exactly.

**PNG px dims (overlay viewBox 1:1):** 01 1924x760 / 02 1920x1080 / 05 1920x976 / 06 1920x940 / 16 1920x940 / 17 1920x1080 / 18 1836x454 / 24 1920x946 / 25 1804x389 / 30 1509x952. All match manifest.

**Overlay routing decision (viewed all 10 PNG):**
- Composite-variant c-overlays (centered badges, baked dividers carry separation, no leader): #01 (3: 3D Viewport / Geometry Nodes Editor / Spreadsheet Editor), #02 (3: Manual / Node Setup / Procedural Result), #25 (3: Straight Path / Curved Path / S-Curve Path).
- Leader+badge c-overlays: #05 (Header Bar / Node Workspace / Group Input+Output), #06 (Group Input / Geometry link / Group Output), #16 (4 workflow steps), #24 (5 region labels: Sample Curve / Post Template / Instance Posts / Generate Rails / Combine All), #17 (1 minimal: Instanced stack).
- NO overlay (labels already baked in last session, plain <img>): #18 (baked step titles+badges), #30 (baked Node Tree/Spreadsheet Editor/Selected node/footer).
- 16 inline SVG: strip root color="#222"; no overlay.

**DOC-ORDER EXECUTION TABLE (26 figures):**
| Doc# | Fig | Type | slug / id-prefix | Anchor heading (live line) |
|---|---|---|---|---|
| 1 | 1 | PNG+c1 | workspace_overview | intro, after opening (h2 Welcome, L47) |
| 2 | 2 | PNG+c2 | procedural_vs_manual | what-are, Procedural vs Manual (L119) |
| 3 | 4 | SVG nsc | node_systems_comparison | what-are, How GN Fits In (L195) |
| 4 | 5 | PNG+c5 | editor_interface_breakdown | interface, Understanding the Interface (L555) |
| 5 | 6 | PNG+c6 | default_node_tree | interface, Step-by-Step Setup (L598) |
| 6 | 8 | SVG nad | node_anatomy_diagram | node-anatomy, Node Components (L834) |
| 7 | 9 | SVG scr | socket_color_reference | node-anatomy, Understanding Socket Colors (L884) |
| 8 | 11 | SVG npd | node_patterns_diagram | node-anatomy, How Nodes Connect (L1121) |
| 9 | 10 | SVG cnm | connection_methods | node-anatomy, Making Connections (L1173) |
| 10 | 12 | SVG dfp | data_flow_pipeline | data-flow, How Geometry Flows (L1252) |
| 11 | 13 | SVG ptr | pass_through_vs_replacement | data-flow, How Nodes Handle Geometry (L1296) |
| 12 | 14 | SVG jge | join_geometry_example | data-flow, The Most Important Node (L1337) |
| 13 | 16 | PNG+c16 | cube_stack_node_tree | first-node-tree, Add Instance on Points (L1785) |
| 14 | 17 | PNG+c17 | cube_stack_result | first-node-tree, First Result! (L1832) |
| 15 | 18 | PNG | parameter_exposure | first-node-tree, Expose Count Parameter (L1854) |
| 16 | 22 | SVG tsp | transform_vs_set_position | essential-nodes, Transform and Modify (L2292) |
| 17 | 21 | SVG iop | instance_on_points_explanation | essential-nodes, Working with Instances (L2362) |
| 18 | 23 | SVG rvp | random_value_pattern | essential-nodes, Tracking Elements (L2590) |
| 19 | 24 | PNG+c24 | fence_complete_node_tree | practical-project, Project Overview (L2799) |
| 20 | 26 | SVG rce | resample_curve_explanation | practical-project, Distribute Post Locations (L2913) |
| 21 | 27 | SVG ctm | curve_to_mesh_process | practical-project, Create Rail System (L3005) |
| 22 | 25 | PNG+c25 | fence_visual_results | practical-project, Project Complete! (L3295) |
| 23 | 29 | SVG ceg | common_errors_grid | troubleshooting, Debugging Mindset (L3375) |
| 24 | 30 | PNG | spreadsheet_editor | troubleshooting, Essential Debugging Tools (L3762) |
| 25 | 31 | SVG vnw | viewer_node_workflow | troubleshooting, Essential Debugging Tools/Viewer (L3762) |
| 26 | 33 | SVG lpf | learning_path_flowchart | next-steps, Skill Level 2 Intermediate (L4021) |

**c-prefix registry (PNG overlays):** c1, c2, c5, c6, c16, c17, c24, c25 (namespaced ids c{N}-*). #18/#30 no overlay.

**INVARIANTS at every checkpoint:** U+2014 == 60; body purple 0/0/0; mermaid 7; table 5/5; each fig = <figure>+<figcaption>; inline-svg root color="#222" stripped; PNG wrapper font-size:0 + img margin:0;vertical-align:top; overlay viewBox == PNG px; FIRST-match unique anchors; edit_file dryRun->commit->get_file_info per fig.

**Figcaptions:** full-sentence prose, `.`/`,`/`(`/`:`/`·` separators only (NO new em-dash). Alt text descriptive.

**RUN LOG:**
- Doc#1 Fig1 workspace_overview PNG + c1 (3 composite badges, cairosvg 1:1 verified) COMMITTED. Anchor: after 2nd intro <p> before first mermaid.
- Doc#2 Fig2 procedural_vs_manual PNG + c2 (3 badges, cairosvg 1:1 verified) COMMITTED. Anchor: after Magic-Moment card </div> before Real-World-Analogy <blockquote>.
- Doc#3 Fig4 node_systems_comparison SVG nsc inlined (color=#222 stripped, indented 20/24, header collapsed, structural comments kept) COMMITTED. Anchor: after node-systems mermaid TB close </div> before </section> in what-are-geometry-nodes.
- Checkpoint after Doc#3: U+2014 60 HELD; figure 3/3; img 2; svg 3 (c1+c2 overlays + nsc inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0.
- Doc#4 Fig5 editor_interface_breakdown PNG + c5 (3 leader+badge orange region labels: Header Bar / Node Workspace / Group Input + Output; cairosvg 1:1 verified) COMMITTED. Anchor: after "Understanding the Interface" card </div> before "Creating Your First Geometry Nodes Modifier" h4 (default 16/20 depth). viewBox 1920x976.
- Doc#5 Fig6 default_node_tree PNG + c6 (3 leader+badge orange: Group Input / Geometry Link / Group Output; cairosvg 1:1 verified) COMMITTED. Anchor: after "Step-by-Step: Setup" card </div> before "Node Editor Navigation" h4 (default 16/20 depth). viewBox 1920x940.
- Checkpoint after Doc#5: bytes 296,028; U+2014 60 HELD; figure 5/5; img 4; svg 5 (c1+c2+c5+c6 overlays + nsc inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; c5 ids 12; c6 ids 12.
- Doc#6 Fig8 node_anatomy_diagram SVG nad inlined (color=#222 stripped, indented 20/24/28, structural comments kept, cairosvg dark+light re-verified pre-inline) COMMITTED. Anchor: after "Node Components" card </div> before "Data Types and Socket Colors" h4 (default 16/20 depth). viewBox 800x560.
- Checkpoint after Doc#6: bytes 302,133; U+2014 60 HELD; figure 6/6; img 4; svg 6 (c1+c2+c5+c6 overlays + nsc+nad inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; nad-title 1.
- Doc#7 Fig9 socket_color_reference SVG scr inlined (color=#222 stripped, indented 20/24, column-heads comment kept, role/aria/title/desc/id preserved, cairosvg dark+light re-verified pre-inline) COMMITTED. Anchor: after "Understanding Socket Colors" card </div> before "How Nodes Process Data" h4 (default 16/20 depth). viewBox 800x680 (dense variant).
- Checkpoint after Doc#7: bytes 309,244; U+2014 60 HELD; figure 7/7; img 4; svg 7 (c1+c2+c5+c6 overlays + nsc+nad+scr inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; scr-title/scr-desc 2/2; next-link L41 1.
- Doc#8 Fig11 node_patterns_diagram SVG npd inlined (color=#222 stripped, indented 20/24 with defs/marker at 24/28, multi-element source lines split one-per-line, quadrant comments kept, role/aria/title/desc/id/marker-id preserved, cairosvg dark+light re-verified pre-inline) COMMITTED. Anchor: after "How Nodes Connect" card </div> before "Connecting Nodes" h4 (default 16/20 depth). viewBox 800x680 (dense variant). Element counts rect 16 / text 24 / line 13 / marker 1 / npd-arrow refs 11.
- Checkpoint after Doc#8: bytes 318,501; U+2014 60 HELD; figure 8/8; img 4; svg 8 (c1+c2+c5+c6 overlays + nsc+nad+scr+npd inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; npd-title/npd-desc 2/2; npd-arrow 11; next-link L41 1.
- Doc#9 Fig10 connection_methods SVG cnm inlined (color=#222 stripped, indented 20/24, multi-element source lines split one-per-line, panel/note comments kept, role/aria/title/desc/id preserved, cairosvg dark+light re-verified pre-inline) COMMITTED. Anchor: after "Making Connections" card </div> before Node-Philosophy <blockquote> (default 16/20 depth). viewBox 800x560. Element counts rect 9 / text 20 / circle 9 / path 4 / g 3.
- Checkpoint after Doc#9: bytes 325,348; U+2014 60 HELD; figure 9/9; img 4; svg 9 (c1+c2+c5+c6 overlays + nsc+nad+scr+npd+cnm inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; cnm-title/cnm-desc 2/2; next-link L41 1.
- Doc#10 Fig12 data_flow_pipeline SVG dfp inlined (color=#222 stripped, indented 20/24 with defs/marker + grouped g children at 24/28, multi-element processing-nodes line split one-per-line, stage/input/output/arrow/dot/rule comments kept, role/aria/title/desc/id/marker-id preserved, cairosvg dark+light re-verified pre-inline) COMMITTED. Anchor: after "How Geometry Flows" card </div> before existing data-flow mermaid (graph LR Group Input->Node1...) which is PRESERVED (mermaid stays 7). Default 16/20 depth. viewBox 800x560. Element counts rect 9 / text 16 / line 5 / circle 3 / g 2 / marker 1 / dfp-arrow refs 5.
- Checkpoint after Doc#10: bytes 331,624; U+2014 60 HELD; figure 10/10; img 4; svg 10 (c1+c2+c5+c6 overlays + nsc+nad+scr+npd+cnm+dfp inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; dfp-title/dfp-desc 2/2; dfp-arrow 5; next-link L41 1.
- Doc#11 Fig13 pass_through_vs_replacement SVG ptr inlined (color=#222 stripped, indented 20/24, node-chain g children + divider/panel comments kept, role/aria/title/desc/id + ptr-a marker id preserved, cairosvg dark+light verified pre-inline) COMMITTED. Anchor: after "How Nodes Handle Geometry" card </div> before "Join Geometry: Combining Data" h4 (default 16/20 depth). viewBox 800x560.
- Checkpoint after Doc#11: bytes 339,767; U+2014 60 HELD; figure 11/11; img 4; svg 11 (c1+c2+c5+c6 overlays + nsc+nad+scr+npd+cnm+dfp+ptr inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; ptr-title/desc 2/2; ptr-a 2; next-link L41 1.
- Doc#12 Fig14 join_geometry_example SVG jge inlined (color=#222 stripped, indented 20/24 with defs/marker at 24/28, branch/join/output/links/result/warning comments kept, role/aria/title/desc/id + jge-arrow marker id preserved, cairosvg dark+light verified pre-inline) COMMITTED. Anchor: after "The Most Important Node" (Join Geometry) card </div> before "Data Types and Conversion" h4 (default 16/20 depth). viewBox 800x560. jge-arrow refs 3.
- Checkpoint after Doc#12: bytes 345,408; U+2014 60 HELD; figure 12/12; img 4; svg 12 (c1+c2+c5+c6 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; jge-title/desc 2/2; jge-arrow 4; next-link L41 1. data-flow section COMPLETE (Doc#10-12 all in).
- Doc#14 Fig17 cube_stack_result PNG + c17 (1 minimal "Instanced" leader+badge: orange #FF6B00 badge white text at x1238 upper-right clear space, origin dot at x1230, orange leader + c17-arrow marker landing on top cube right face at x1018 y168; cairosvg 1:1 verified over the copied PNG, viewBox 1920x1080 == PNG px, arrow lands on top instanced cube, badge legible, no overlaps, leader in clear space) COMMITTED. Anchor: after "First Result!" card </div> before "Step 5: Make It Interactive" h4 (figure directly in <section> = 16/20 default depth). svg overlay wrapper matches committed pattern. Figcaption full-sentence prose, no new em-dash.
- Checkpoint after Doc#14: bytes 352,363; U+2014 60 HELD; figure 14/14; img 6; svg 14 (c1+c2+c5+c6+c16+c17 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; c17-arrow refs 2; back-link L39 1; next-link L41 1.
- Doc#15 Fig18 parameter_exposure PNG plain <img> (NO overlay, 3-panel baked-in labels: 1 Before internal field / 2 Right-click Expose as Input / 3 After Count wired from Group Input; labels legible, viewed to confirm) COMMITTED. Anchor: after "Expose Count Parameter" card </div> (extended anchor incl. "Try: 5 cubes..." li + following "Expose Offset Parameter" h4 for FIRST-match uniqueness) before Expose Offset Parameter card. Figure directly in <section> = 16/20 default depth; plain img style width:100%;height:auto;margin:0. Figcaption full-sentence prose, no new em-dash.
- Checkpoint after Doc#15: bytes 353,213; U+2014 60 HELD; figure 15/15; img 7; svg 14 (unchanged, no overlay); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; fig18 img 1; back-link L39 1; next-link L41 1.
- Doc#19 Fig24 fence_complete_node_tree PNG + c24 (5 leader+badge region labels: 1 Sample Curve->Resample Curve header (300,200)->(352,342); 2 Post Template->Cube/Transform (486,105)->(486,168); 3 Instance Posts->Instance on Points header ~(810,224) leader (880,150)->(838,220); 4 Generate Rails->Curve to Mesh cluster (660,700)->(700,420); 5 Combine All->Join Geometry header ~(1082,426) leader (1120,300)->(1090,422). NOTE: plan-lock's downscaled-grid coords were wrong for Join Geometry; true position confirmed by tracing the two converging noodles to their merge at x~1070-1090 y~426, and Instance on Points header confirmed at y~224 not the Transform node. orange #FF6B00 badge white text, orange leader + c24-arrow marker + origin dot per c16 pattern; cairosvg 1:1 verified over the copied PNG, viewBox 1920x946 == PNG px, all 5 arrows land on correct node headers in clear space, no overlaps, no text over node internals) COMMITTED. Anchor: after "Project Overview: Procedural Fence System" card </div> (Time: 20-30 minutes / Difficulty line closes card) before "Phase 1: Setup and Planning" h4. Figure directly in <section> = 16/20 default depth; PNG overlay wrapper matches committed pattern. Figcaption full-sentence prose, no new em-dash.
- Checkpoint after Doc#19: bytes 378,756; U+2014 60 HELD; U+2013 0; numeric-entities 0; figure 19/19; img 8; svg 18 (c1+c2+c5+c6+c16+c17+c24 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge+tsp+iop+rvp inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; c24 refs 10; back-link L39 1; next-link L41 1.
- NEXT = Doc#20 (Fig26 resample_curve_explanation SVG rce, inline; strip root color=#222; no overlay) at practical-project "Distribute Post Locations". Remaining 7: #20-#26 of exec table.
- Doc#20 Fig26 resample_curve_explanation SVG rce inlined (color=#222 stripped, indented 20/24, structural comments kept, role/aria/title/desc/id preserved) COMMITTED. Anchor: after "Distribute Post Locations" card </div> ("These points will host our post instances" li) before "Phase 4: Instance Posts on Points" h4. Default 16/20 depth. viewBox 800x560.
- Checkpoint after Doc#20: bytes 384,821; U+2014 60 HELD; U+2013 0; ent 0; figure 20/20; img 8; svg 19 (c1+c2+c5+c6+c16+c17+c24 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge+tsp+iop+rvp+rce inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; rce-title/desc 2/2; back-link L39 1; next-link L41 1.
- Doc#21 Fig27 curve_to_mesh_process SVG ctm inlined (color=#222 stripped, indented 20/24, stage/plus/equals/node-row comments kept, role/aria/title/desc/id preserved) COMMITTED. Anchor: after "Create Rail System" (Phase 5) card </div> ("Now rail floats at fence height" li) before "Add Second Rail (Bottom)" card h4. Default 16/20 depth. viewBox 800x560.
- Checkpoint after Doc#21: bytes 390,373; U+2014 60 HELD; figure 21/21; img 8; svg 20 (+ctm inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; ctm-title/desc 2/2; links 1/1.
- Doc#22 Fig25 fence_visual_results PNG + c25 (3 centered composite-variant badges, orange #FF6B00 rect + #ffffff text, NO leader/highlight: Straight Path @cx300 / Curved Path @cx901 / S-Curve Path @cx1503, badges y330 h44 near bottom; baked orange dividers at x600/x1202 carry panel separation; cairosvg 1:1 verified over copied PNG, viewBox 1804x389 == PNG px, badges centered in panels, legible, no overlap with fence geometry) COMMITTED. Anchor: after "Project Complete!" card </div> ("You're now a Geometry Nodes practitioner!" p) before "Challenge Extensions" card h4. Figure directly in section = 16/20 default depth; PNG overlay wrapper matches committed pattern (font-size:0 + img margin:0;vertical-align:top + svg absolute fill). Figcaption full-sentence prose, no new em-dash.
- Checkpoint after Doc#22: bytes 392,432; U+2014 60 HELD; figure 22/22; img 9; svg 21 (c1+c2+c5+c6+c16+c17+c24+c25 overlays + 13 inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; c25 refs 6 (3 rect + 3 text); links 1/1. ALL 10 PNG now integrated. c-prefix registry COMPLETE: c1,c2,c5,c6,c16,c17,c24,c25.
- Doc#23 Fig29 common_errors_grid SVG ceg inlined (color=#222 stripped, indented 20/24, dense 800x680 variant, row/card structural comments kept, role/aria/title/desc/id preserved; warning-red #E63946 / positive-green #4ADE80 colorway) COMMITTED. Anchor: after "Debugging Mindset" card </div> ("Master these questions, and you can debug anything!" p) before "Visual Issues" h4 in troubleshooting section. Default 16/20 depth. viewBox 800x680.
- Checkpoint after Doc#23: bytes 402,690; U+2014 60 HELD; U+2013 0; ent 0; figure 23/23; img 9; svg 22 (+ceg inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; ceg-title/desc 2/2; links 1/1.
- Doc#24 verified: Fig30 spreadsheet_editor PNG (1509x952) confirmed to have ALL labels baked in (Node Tree / Spreadsheet Editor headers, "Selected node" yellow callout, "Node selection determines data" footer) = plain <img> NO overlay. NOT yet committed.
- Doc#24 Fig30 spreadsheet_editor PNG plain <img> (NO overlay, labels baked in) COMMITTED. Anchor: after "Compare with Working Example" </ul></div> closing the "Essential Debugging Tools" card, before "Systematic Debugging Process" card h4. Default 16/20 depth; img style width:100%;height:auto;margin:0. Figcaption full-sentence prose, no new em-dash.
- Checkpoint after Doc#24: bytes 403,497; U+2014 60 HELD; figure 24/24; img 10; svg 22 (unchanged, no overlay); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 0; fig30 img 1; links 1/1.
- Doc#25 Fig31 viewer_node_workflow SVG vnw inlined (color=#222 stripped, indented 20/24 with grouped g children at 28, node-chain/viewer/preview/footer comments kept, role/aria/title/desc/id preserved, yellow #FFC107 viewer link, cairosvg dark+light verified pre-inline) COMMITTED. Anchor: immediately after Fig30 </figure>, before "Systematic Debugging Process" card h4. Default 16/20 depth. viewBox 800x560. Element parity vs source confirmed (rect 19 / text 15 / circle 13 / line 1 / path 5 / g 3 / tspan 1).
- Checkpoint after Doc#25: bytes 411,702; U+2014 60 HELD; figure 25/25; img 10; svg 23 (+vnw inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 0; vnw-title/desc 1/1 (2 refs); links 1/1.
- Doc#26 Fig33 learning_path_flowchart SVG lpf inlined (color=#222 stripped, indented 20/24 with grouped g children at 28, dense 800x680 variant, tier/arrow/footer comments kept, role/aria/title/desc/id preserved, tiers green #4ADE80 / blue #4A9EFF / Advanced #B47EE8 NOT #9C27B0, cairosvg dark+light verified pre-inline) COMMITTED. Anchor: after "Immediate Next Topics" h4 (unique), before "Skill Level 2: Intermediate Concepts" card (learning-path overview leads in the topic list). Default 16/20 depth. viewBox 800x680. Element parity vs source confirmed (rect 12 / text 24 / line 1 / path 4 / g 5 / tspan 1).
- FINAL CHECKPOINT after Doc#26 (ALL 26 FIGURES INTEGRATED): bytes 418,389; U+2014 60 HELD; U+2013 0; numeric-entities 0; figure 26/26; figcaption 26; img 10 (figs 01,02,05,06,16,17,18,24,25,30); svg 24 (8 PNG overlays c1+c2+c5+c6+c16+c17+c24+c25 + 16 inline nsc+nad+scr+cnm+npd+dfp+ptr+jge+tsp+iop+rvp+rce+ctm+ceg+vnw+lpf); mermaid 7; table 5/5; body #667eea|#764ba2|linear-gradient 0/0/0; inline-svg color=#222 0; back-link lesson_39_rigging_essentials.html 1; next-link lesson_41_procedural_modeling_with_nodes.html 1; preserved em-dashes intact ("Geometry Nodes—it", "revolutionary—it"). INTEGRATION COMPLETE. Next = browser QA Chromium+Playwright 380/900 x dark/light.
- Doc#18 Fig23 random_value_pattern SVG rvp inlined (color=#222 stripped, indented 20/24 with grouped g children at 28, connectors g + result-strip g, banner/node-chain/connectors/result/footer comments kept, role/aria/title/desc/id preserved, cairosvg dark+light verified pre-inline) COMMITTED. Anchor: after "Tracking Elements" (Index and ID) card </div> before "Quick Reference Tables" h4 (default 16/20 depth). viewBox 800x560.
- Checkpoint after Doc#18: bytes 372,611; U+2014 60 HELD; figure 18/18; img 7; svg 17 (c1+c2+c5+c6+c16+c17 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge+tsp+iop+rvp inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; rvp-title/desc 2/2; back-link L39 1; next-link L41 1.
- Doc#17 Fig21 instance_on_points_explanation SVG iop inlined (color=#222 stripped, indented 20/24 with grouped g children at 24, multi-element circle/rect source lines split one-per-line, Stage/plus/equals/efficiency comments kept, role/aria/title/desc/id preserved) COMMITTED. Anchor: after "Working with Instances" card </div> before the PRESERVED essential-nodes mermaid (graph TD A[Points] --> B[Instance on Points]) which stays (mermaid 7). Default 16/20 depth. viewBox 800x560.
- Checkpoint after Doc#17: bytes 364,674; U+2014 60 HELD; figure 17/17; img 7; svg 16 (c1+c2+c5+c6+c16+c17 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge+tsp+iop inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; iop-title 2; back-link L39 1; next-link L41 1.
- Doc#16 Fig22 transform_vs_set_position SVG tsp inlined (color=#222 stripped, indented 20/24 with defs/marker + grouped g children at 24, multi-element circle/line source lines split one-per-line, LEFT/RIGHT/arrows comments kept, role/aria/title/desc/id + tsp-a marker id preserved, cairosvg dark+light verified pre-inline) COMMITTED. Anchor: after "Transform and Modify" (Geometry Operations) card </div> before "Instance Operations" h4 (default 16/20 depth). viewBox 800x560. tsp-a refs 11 (1 marker + 10 marker-end).
- Checkpoint after Doc#16: bytes 359,963; U+2014 60 HELD; figure 16/16; img 7; svg 15 (c1+c2+c5+c6+c16+c17 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge+tsp inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; tsp-title 2; tsp-a 11; back-link L39 1; next-link L41 1.

### Doc#13 COMMITTED (2026-07-01)
- Doc#13 Fig16 cube_stack_node_tree PNG + c16 (4 leader+badge workflow-step labels: 1 Expose parameters / 2 Create a row of points / 3 Define the instance shape / 4 Place a cube per point; orange #FF6B00 badge white text, orange leader+marker per c5/c6; cairosvg 1:1 verified over the copied PNG, viewBox 1920x940 == PNG px, all 4 arrows land on correct node clusters, no text over node internals, no overlaps) COMMITTED. Anchor: after "Add Instance on Points Node" card </div> before the PRESERVED first-node-tree mermaid (graph LR A[Group Input...]). Figure directly in <section> = 16/20 default depth; svg overlay wrapper matches committed pattern position:relative;display:inline-block;max-width:100%;font-size:0 + img margin:0;vertical-align:top + svg position:absolute fill. Figcaption full-sentence prose, no new em-dash.
- Checkpoint after Doc#13: bytes 350,526; U+2014 60 HELD; figure 13/13; img 5; svg 13 (c1+c2+c5+c6+c16 overlays + nsc+nad+scr+npd+cnm+dfp+ptr+jge inline); mermaid 7; table 5/5; body purple 0/0/0; inline-svg color=#222 count 0; c16 ids 4; c16-arrow refs 4; back-link L39 1; next-link L41 1.
