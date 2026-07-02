# Lesson 41 (Procedural Modeling with Nodes) - Integration Progress

**Slug:** procedural_modeling_with_nodes
**File:** lesson_41_procedural_modeling_with_nodes.html
**Module:** 10 (Node Systems Mastery), lesson 1 of module (per index.html + breadcrumb; supersedes the "Module 7" drift used loosely in prior session heads)
**Status:** PHASE 0 COMPLETE (2026-07-01). NEXT = SVG batch (12 inline, pilot then batches of 3).
**Opened:** 2026-07-01

---

## LIVE-HTML BASELINE (post Phase-0, disk-verified via UTF-8 bridge, disk==mem)

| Invariant | Value |
|---|---|
| bytes | 213,007 (pre-neutralization 213,563; delta -556) |
| U+2014 (em-dash) | 41 (BASELINE - hold; NOT re-based) |
| en-dash U+2013 | 0 (banned) |
| &#8212; / &#x2014 / &#8211; / &#x2013 | 0 / 0 / 0 / 0 (banned) |
| U+00B7 literal | 0 |
| figure / figcaption / img / svg | 0 / 0 / 0 / 0 (TRUE-PRISTINE for figures) |
| #667eea / #764ba2 / linear-gradient (body) | 0 / 0 / 0 (neutralized) |
| color: white | 83 (KEPT, intentional) |
| class="mermaid" | 4 (KEPT LIVE) + jsdelivr import 1 |
| mermaid accents #4CAF50/#2196F3/#FF5722/#999 | 3 / 2 / 1 / 2 (INTACT) |
| fill:#3a3a3a (neutralized purple nodes) | 3 |
| primaryBorderColor '#888888' | 1 |
| table (open/close) | 2 / 2 |
| .table-wrap / min-width:max-content / </table></div> | 2 / 2 / 2 |
| back-link | lesson_40_geometry_nodes_introduction.html (1, valid, on disk) |
| next-link | lesson_42_advanced_shader_techniques.html (1, valid, on disk 337,606 B) |
| CSS | external styles/main.css (no inline <style>, no per-lesson injection) |

## PHASE-0 NEUTRALIZATION LOG (committed 2026-07-01)

Applied via Blender-bridge full-file Python replace + live re-read recount (the 15 card gradients + 3 fill:#667eea style-node lines are non-unique, so edit_file unique-anchor path not usable; L39/L40 precedent). Exact-count asserts on every sub before write:
- card gradient `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white` -> `background: #2a2a2a; color: white` (x14 standard + x1 text-align:center closer = 15)
- mermaid init `primaryBorderColor: '#667eea'` -> `'#888888'` (x1)
- mermaid style nodes `fill:#667eea,stroke:#333,...` -> `fill:#3a3a3a,...` (x3; nodes G/F/F). Green #4CAF50 / blue #2196F3 / orange #FF5722 / grey #999 accents LEFT INTACT - only purple emphasis neutralized.
- footer anchors (Course Home / Back to Top): stripped inline `style="color: #667eea; text-decoration: none;"` -> `style="text-decoration: none;"` (x2)
- 2 tables wrapped `<div class="table-wrap">...</table></div>` + `min-width:max-content` added to each table style (margin-top 1rem + 0.5rem variants, each unique)

Total #667eea targets = 14+1+1+3+2 = 21 (all removed). U+2014 held at 41 across the pass. disk==mem confirmed.

NOTE: styles/main.css may legitimately contain #667eea/#764ba2/linear-gradient (stylesheet-only, unused by lesson body). Body banned-literal count is the tracked invariant and = 0.

NOTE: breadcrumb reads "Module 10: Node Systems Mastery" (index.html#module-10) - CORRECT per index.html (L41 sits under Module 10 heading). Recorded as Module 10 per Ray. Breadcrumb NOT edited (Phase-0 does not touch breadcrumbs).

---

## ROSTER TRIAGE (50 candidates, from lesson_41_image_requirements.md) - CONFIRMED 2026-07-01

BUILD 44 / DEFER 6 {24, 33, 42, 45, 46, 49}.
Format split: **12 inline SVG** {2,3,8,13,14,21,23,43,44,47,48,50} + **32 PNG+c41** {1,4,5,6,7,9,10,11,12,15,16,17,18,19,20,22,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41}.

DEFER rationale: 24 redundant w/22; 33 redundant w/18; 46 redundant w/38; 42 & 45 self-explorable UI; 49 inspirational gallery. All re-openable.

| # | Title | Type | Tier | Anchor (section id) |
|---|---|---|---|---|
| 1 | Procedural vs Traditional Comparison | PNG | High | introduction |
| 2 | Field Operations Visualization | SVG | High | field-operations |
| 3 | Single Value vs Field Input | SVG | High | field-operations |
| 4 | Position Field Visualization | PNG | Medium | field-operations |
| 5 | Normal Field on Surface | PNG | Medium | field-operations |
| 6 | Height-Based Selection Example | PNG | High | field-operations |
| 7 | Slope-Based Selection | PNG | Medium | field-operations |
| 8 | Boolean Logic (AND/OR/NOT) | SVG | High | field-operations |
| 9 | Noise vs Random Comparison | PNG | High | noise-systems |
| 10 | Noise Texture Types Overview (6-panel) | PNG | High | noise-systems |
| 11 | Noise Scale Parameter Effect | PNG | Medium | noise-systems |
| 12 | Noise Detail/Octaves | PNG | Medium | noise-systems |
| 13 | Multi-Layer Noise Breakdown | SVG | High | noise-systems |
| 14 | Distribution Methods Overview (3-panel) | SVG | High | distribution |
| 15 | Distribute Points Interface | PNG | High | distribution |
| 16 | Poisson vs Random | PNG | High | distribution |
| 17 | Density Field Example | PNG | Medium | distribution |
| 18 | Noise-Based Density Masking | PNG | Medium | distribution |
| 19 | Instance Alignment to Normals | PNG | High | distribution |
| 20 | Scale Variation Methods | PNG | Medium | distribution |
| 21 | Geometry Proximity Node Diagram | SVG | High | proximity |
| 22 | Distance Field Visualization | PNG | Medium | proximity |
| 23 | Raycast Operation Diagram | SVG | Medium | proximity |
| 24 | Proximity Falloff Example | PNG | DEFER (redundant w/22) | proximity |
| 25 | Terrain - Final Result (beauty) | PNG | High | project-terrain |
| 26 | Terrain - Node Tree Overview | PNG | High | project-terrain |
| 27 | Terrain - Material Zones | PNG | Medium | project-terrain |
| 28 | Terrain - Multi-Layer Noise Setup | PNG | Medium | project-terrain |
| 29 | Ivy - Final Result (beauty) | PNG | High | project-ivy |
| 30 | Ivy - Proximity Filtering | PNG | High | project-ivy |
| 31 | Ivy - Surface Alignment | PNG | Medium | project-ivy |
| 32 | Ivy - Node Tree Overview | PNG | High | project-ivy |
| 33 | Ivy - Density Variation | PNG | DEFER (redundant w/18) | project-ivy |
| 34 | Building - Final Result (beauty) | PNG | High | project-building |
| 35 | Building - Window Grid Generation | PNG | High | project-building |
| 36 | Building - Boolean Operations | PNG | Medium | project-building |
| 37 | Building - Roof Type Variations | PNG | Medium | project-building |
| 38 | Building - Parameter Interface | PNG | High | project-building |
| 39 | Building - Floor Count Demo | PNG | Medium | project-building |
| 40 | Building - Node Tree Overview | PNG | High | project-building |
| 41 | LOD System Comparison | PNG | Medium | optimization |
| 42 | Performance Bottleneck ID | PNG | DEFER (self-explorable) | optimization |
| 43 | Instance vs Realized Geometry | SVG | High | optimization |
| 44 | Progressive Filtering Workflow | SVG | Medium | optimization |
| 45 | Node Tree Organization | PNG | DEFER (self-explorable) | optimization |
| 46 | Parameter Design Guidelines | PNG | DEFER (redundant w/38) | optimization |
| 47 | Field Operations Quick Reference | SVG | Medium | summary |
| 48 | Noise Recipes Reference Chart | SVG | Medium | summary |
| 49 | Distribution Patterns Gallery | PNG | DEFER (inspirational gallery) | summary |
| 50 | Optimization Checklist Infographic | SVG | Medium | summary |

---

## PIPELINE (locked, as L33-L40; each phase own sub-chat)

Phase-0 modernize [DONE] -> SVG batch (12 inline currentColor; strip root color="#222"; pilot then batches of 3) -> PNG batches <=5/sub-chat (BlenderMCP, TRUE-PRISTINE before/after each staging vs L22 baseline, Windows tempdir -> Pillow-relay -> WSL) -> integration (own chat, cairosvg pixel-verify 1:1 + L33 overlay-margin fix per PNG: wrapper font-size:0 + img margin:0;vertical-align:top) -> browser QA (own chat, Playwright/Chromium 1194, 380/900 x dark/light).

INVARIANTS: edit_file dryRun->commit->get_file_info per edit; FIRST-match unique anchors; U+2014 frozen at 41, held every checkpoint, verified via python count('\u2014') NOT grep; PNG overlays explicit-hex strokes (currentColor only on inline SVGs); Blender TRUE-PRISTINE at session close. Per-layer/role hexes to lock in the SVG plan-lock before pilot.

STYLE GUIDE is v8 (live images/IMAGE_STYLE_GUIDE.md).

## SVG BATCH

**PLAN-LOCK (2026-07-01).** 12 inline SVG {2,3,8,13,14,21,23,43,44,47,48,50}. All root `color="#222"` for <img> fallback in the standalone .svg file; STRIP that attribute at integration (inline). currentColor for all text / connectors / dividers. viewBox 0 0 800 560 default, 0 0 800 680 dense variant where content needs it. Brand top strip 3px #FF6B00 at y=0. Footer tip Variant B (left rail) where a tip fits. Accessibility: role=img + aria-labelledby -> title+desc per file. Em-dash: 0 new (U+00B7 for separators). Batching: pilot #03 -> then batches of 3.

### Role-hex lock (figure-internal fixed hex; text/lines = currentColor)
| role | hex | v8 source |
|---|---|---|
| brand / tie-break / top strip / accent | #FF6B00 | brand |
| TRUE / selected / positive / keep | #4ADE80 | positive green |
| FALSE / excluded / warning / cut | #E63946 | warning red |
| field / vector / per-element / Z | #4A9EFF | course/Z blue |
| process / practice / secondary | #B47EE8 | practice (v8 DEF substitute; NEVER #667eea) |
| caution / medium / highlight-2 | #F5C242 | portfolio/caution amber |
| positive-badge text | #0f1a14 | |
| warning-badge text | #ffffff | |

### id-prefix registry
| # | slug | prefix |
|---|---|---|
| 2 | field_operations_visualization | fov- |
| 3 | single_value_vs_field | svf- |
| 8 | boolean_logic_combinations | blc- |
| 13 | multi_layer_noise_breakdown | mln- |
| 14 | distribution_methods_overview | dmo- |
| 21 | geometry_proximity_diagram | gpd- |
| 23 | raycast_operation_diagram | rod- |
| 43 | instance_vs_realized | ivr- |
| 44 | progressive_filtering_workflow | pfw- |
| 47 | field_operations_quick_reference | foq- |
| 48 | noise_recipes_reference | nrr- |
| 50 | optimization_checklist | ock- |

### Per-figure design specs
- #2 fov: point grid (e.g. 8x5) with per-point Z-height + color ramp (#4A9EFF low -> #4ADE80 -> #F5C242 -> #E63946 high) showing "field = per-element value"; label "one value per element". 800x560.
- #3 svf (PILOT): 50/50 split + center divider. LEFT "Single Value": uniform cube, one Scale input arrow, all-equal glyph. RIGHT "Field": cube whose per-face/vertex scale varies (stepped bars), Position->Scale field wire. currentColor labels; #4A9EFF field accent, #4ADE80 uniform accent. 800x560.
- #8 blc: 3 mini Venn pairs AND / OR / NOT over two selection sets A,B; selected region filled #4ADE80, excluded #E63946 outline; boolean node glyph under each. 800x680 dense.
- #13 mln: additive stack: base (large-scale, #4A9EFF) + detail (mid, #B47EE8) + fine (#F5C242) = final combined profile; "+" between, "=" to result; wave-profile rows. 800x680 dense.
- #14 dmo: 3-panel: Points / Surface / Volume distribution glyphs, each with a title band + method note. 800x560.
- #21 gpd: source points (left), target surface (right), distance leader lines to nearest point, nearest-point markers #FF6B00; "Geometry Proximity -> distance field" note. 800x560.
- #23 rod: rays from a point row; some hit an obstacle (stop + #E63946 hit dot), some clear (#4ADE80 arrow through); legend hit/clear. 800x560.
- #43 ivr: two memory bars: 1000 instances (small, #4ADE80) vs 1000 realized (large, #E63946); "shared data vs duplicated data" glyph rows; ratio callout. 800x560.
- #44 pfw: flow: Broad filter (cheap, wide funnel #4ADE80) -> Narrow filter (expensive, tight funnel #F5C242) -> result; element-count drop annotations; arrows currentColor. 800x560.
- #47 foq: reference card: 4-6 common field patterns, each a mini node-chain glyph + one-line purpose. 800x680 dense.
- #48 nrr: recipe chart: hills / mountains / bumps / cracks rows, each with noise params (Scale/Detail/Roughness) + a mini profile swatch. 800x680 dense.
- #50 ock: optimization checklist: 6-8 rows, checkbox glyph + step text; Variant B footer tip. 800x680 dense.

### BUILD LOG
- PILOT #03 svf `images/lesson_41_03_single_value_vs_field.svg` BUILT + disk-verified 2026-07-01 (6420 B, disk==authored). viewBox 0 0 800 560. 50/50 split + center divider; LEFT Single Value (green #4ADE80: value chip Scale 1.5, 3 equal fan-out wires w/ "=" glyphs, uniform 3x3 dot grid); RIGHT Field (blue #4A9EFF: Position->Scale chip, 3 fan-out wires 0.6/1.4/2.2, varied dot grid small-top->large-bottom); Variant B footer tip (grey socket=single value / diamond socket=field). Invariants: U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0; role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1 (standalone <img> fallback); #FF6B00 3 / #4ADE80 18 / #4A9EFF 18; arrow via &#8594; entity 1. cairosvg dark(#1e1e1e text #d4d4d4) + light(#fff text #334155) view-verified: currentColor inverts, role hexes legible both themes.  NEXT (batch-of-3 #1, pending Ray review): #02 fov / #14 dmo / #08 blc.
- BATCH-OF-3 #1 BUILT + disk-verified 2026-07-01 (all written via bridge base64 decode, disk==decoded confirmed; cairosvg dark+light view-check PASS all 3: currentColor inverts, role hexes legible both themes):
  - #02 fov `images/lesson_41_02_field_operations_visualization.svg` (4941 B, viewBox 0 0 800 560): 8x5 point grid, per-point radius+color from a height field (blue low / green mid / amber high / red peak) forming a center bump; ramp legend + Variant B tip (Position/Normal/Index/Radius all fields). Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1.
  - #14 dmo `images/lesson_41_14_distribution_methods_overview.svg` (5941 B, viewBox 0 0 800 560): 3 panels Point-based (blue instance-on-point glyphs) / Surface-based (green scatter on a slab parallelogram) / Volume-based (purple #B47EE8 3D lattice in a cube wireframe); 2 currentColor dividers; Variant B tip (default = Distribute Points on Faces). Invariants U+2014 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / color="#222" KEPT 1.
  - #08 blc `images/lesson_41_08_boolean_logic_combinations.svg` (6417 B, viewBox 0 0 800 680 dense): 3 Venn rows AND (intersection filled, clip) / OR (union filled) / NOT (A-minus-B via mask, B dashed-red exclusion); per-row node glyph (green for AND/OR, red for NOT = "A AND (NOT B)"); kept/excluded legend; U+00B7 2 (node-label separators). NOT venn rebuilt once (v1 mask carved only the intersection sliver -> v2 rect+mask fills all of A minus B). Invariants U+2014 0 / U+2013 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1.
  NEXT (batch-of-3 #2, pending Ray review): #13 mln / #21 gpd / #23 rod.
- BATCH-OF-3 #2 BUILT + disk-verified 2026-07-01 (all written via bridge base64 decode, disk==decoded + md5 confirmed; cairosvg dark(#1e1e1e text #d4d4d4)+light(#fff text #334155) view-check PASS all 3: currentColor inverts, role hexes legible both themes):
  - #13 mln `images/lesson_41_13_multi_layer_noise_breakdown.svg` (4426 B, md5 2fa661fb77b794aabaf99c4629c380a1, viewBox 0 0 800 680 dense): additive noise stack, 4 wave-profile rows Layer 1 Base (blue #4A9EFF large-scale) + Layer 2 Detail (purple #B47EE8 mid) + Layer 3 Fine (amber #F5C242 high-freq) = Result Combined (orange #FF6B00), with currentColor +/+/= glyphs between rows and a left color rail per row; Variant B dense tip (y641/663, halve scale+strength per octave, Noise node per octave + Math add). Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1; #FF6B00 5 / #4A9EFF 2 / #B47EE8 2 / #F5C242 2; &#183; entity 12.
  - #21 gpd `images/lesson_41_21_geometry_proximity_diagram.svg` (3963 B, md5 75f1dc07b2b7e99b36ad843b1884dcec, viewBox 0 0 800 560): 6 blue #4A9EFF source points (left), curved currentColor target surface (right, 6% fill), 6 opacity-0.3 leader lines each to an orange #FF6B00 nearest-point marker on the surface; 2 distance labels; node glyph (Geometry Proximity / Target arrow Distance (field), &#8594; entity); Variant B tip (feed Distance into Map Range / Color Ramp). Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1; #FF6B00 4 / #4A9EFF 2; &#8594; entity 1.
  - #23 rod `images/lesson_41_23_raycast_operation_diagram.svg` (3600 B, md5 5701d9ef0382b736af6444af58950305, viewBox 0 0 800 560): 6 blue #4A9EFF source dots (left) casting rays rightward; 4 upper rays HIT the partial-height currentColor slab at x=485 and stop with a red #E63946 hit-dot marker; 2 lower rays CLEAR below the slab and pass through with a green #4ADE80 arrowhead marker; legend row (Hit dot = ray stops, Is Hit = true); Variant B tip (Raycast returns Is Hit / Hit Position / Hit Normal). marker defs rod-hit (red circle) + rod-clear (green arrow). Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1; #FF6B00 3 / #4ADE80 2 / #4A9EFF 1 / #E63946 3; &#183; entity 2.
  7/12 SVG built.
- BATCH-OF-3 #3 BUILT + disk-verified 2026-07-01 (#43/#47 written via bridge base64 decode disk==decoded+md5; #44 written via lossless hex transfer after base64 whitespace-collapse mismatch caught by md5 recheck; cairosvg dark(#1e1e1e text #d4d4d4)+light(#fff text #334155) view-check PASS all 3: currentColor inverts, role hexes legible both themes):
  - #43 ivr `images/lesson_41_43_instance_vs_realized.svg` (4517 B, md5 a7deb1802af49f7fc4d02da860c5af28, viewBox 0 0 800 560): LEFT Instances (green #4ADE80): 1 master-mesh box + 3 fan-out pointer lines to a 3x3 green dot grid (1000 refs) + small ~1x memory bar; RIGHT Realized (red #E63946): 2x5 red duplicated-mesh squares + large ~1000x mesh-data bar; center divider; orange #FF6B00 Rule-of-thumb callout + Variant B footer tip. Rule text trimmed twice to fit box width. Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1; #FF6B00 / #4ADE80 / #E63946 present; &#183; entity 3.
  - #44 pfw `images/lesson_41_44_progressive_filtering_workflow.svg` (4286 B, md5 e5cc1dfd4fef60ad76686e1ed1f748df, viewBox 0 0 800 560): 3 shrinking funnels left->right Broad (green #4ADE80 cheap, 100000 pts) -> Mid (amber #F5C242 moderate, 12000 pts) -> Narrow (red #E63946 expensive, 800 pts), currentColor drop-arrows (marker pfw-arw) between, orange #FF6B00 Result callout (800 final), count-ladder note 100000 &#8594; 12000 &#8594; 800, Variant B tip (order matters). Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1; &#8594; entity 2 / &#183; entity 3. NOTE: base64 bridge-transfer collapsed 2 blank lines (4286->4282) silently; caught by md5!=want on disk-read, re-sent via hex = 4286 exact. Prefer hex transfer when byte-exactness matters.
  - #47 foq `images/lesson_41_47_field_operations_quick_reference.svg` (8134 B, md5 110156394224d14b203c47a741da4ad3, viewBox 0 0 800 680 dense): 5-row reference card, each row = title (role-hex) + one-line purpose + right-aligned mini node-chain glyph: Position&#8594;height mask (blue) / Normal&#8594;slope mask (blue) / Noise&#8594;density (purple #B47EE8) / Proximity&#8594;falloff (orange #FF6B00) / Boolean&#8594;combine (green, 2-input Mask A/B branch into AND/OR->Select); Variant B dense tip (y641/663). Invariants U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0 / role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1; &#8594; entity 5 / &#183; entity 1.
  10/12 SVG built. NEXT (batch-4, final, pending Ray review): #48 nrr / #50 ock (both dense 800x680). Then PNG batches (32) / integration / QA.


## PNG BATCHES
(pending)

## INTEGRATION
(pending)

## BROWSER QA
(pending)
