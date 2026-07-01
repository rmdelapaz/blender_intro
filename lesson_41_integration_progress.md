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
- PILOT #03 svf `images/lesson_41_03_single_value_vs_field.svg` BUILT + disk-verified 2026-07-01 (6420 B, disk==authored). viewBox 0 0 800 560. 50/50 split + center divider; LEFT Single Value (green #4ADE80: value chip Scale 1.5, 3 equal fan-out wires w/ "=" glyphs, uniform 3x3 dot grid); RIGHT Field (blue #4A9EFF: Position->Scale chip, 3 fan-out wires 0.6/1.4/2.2, varied dot grid small-top->large-bottom); Variant B footer tip (grey socket=single value / diamond socket=field). Invariants: U+2014 0 / U+2013 0 / U+00B7 0 / #667eea 0; role=img 1 / aria 1 / title+desc 1/1 / color="#222" KEPT 1 (standalone <img> fallback); #FF6B00 3 / #4ADE80 18 / #4A9EFF 18; arrow via &#8594; entity 1. cairosvg dark(#1e1e1e text #d4d4d4) + light(#fff text #334155) view-verified: currentColor inverts, role hexes legible both themes. NEXT (batch-of-3 #1, pending Ray review): #02 fov / #14 dmo / #08 blc.


## PNG BATCHES
(pending)

## INTEGRATION
(pending)

## BROWSER QA
(pending)
