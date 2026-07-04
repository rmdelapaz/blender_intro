# Lesson 48 (Product Visualization Project) — Integration Progress

Module 11, lesson 2. Live HTML = `lesson_48_product_visualization_project.html` (project root).

## Phase-0 baseline (2026-07-04)
- Untouched original: 257,073 B / md5 `7797e563ff56d0f05be86d37304bf534` / LF-only / 0 CR / TRUE-PRISTINE (0 figures/img/svg).
- Post-Phase-0 live HTML: **258,778 B / md5 `eb6c10d3d45bee6bb5a843ed5c09b07a` / LF-only**. Delta +1,705 B (deterministic; Claude-side and server-side md5 identical).

## Content check — FIX APPLIED (L43/L46-parallel)
TOC listed only **6** anchors [project-overview, product-selection, reference-gathering, modeling-strategy, scene-planning, project-setup] but body has **16** top-level `<section>`. Rebuilt TOC 6 -> 16 to match body section order/ids. TOC labels = emoji-stripped h3 titles. All 16 anchors now resolve; 0 dead; section open==close==16.

16 section ids (order == TOC): project-overview, product-selection, reference-gathering, modeling-strategy, scene-planning, project-setup, modeling-workflow, materials-overview, creating-materials, lighting-setup, camera-composition, final-render, variations, project-wrap, summary, whats-next.

## Phase-0 transforms
- 6 gradient cards `linear-gradient(135deg,#667eea,#764ba2);color:white` -> `#2a2a2a;color:white`.
- 8x mermaid node `fill:#667eea` -> `fill:#3a3a3a`.
- 1x mermaid `primaryBorderColor '#667eea'` -> `'#888888'`.
- Wrapped 6 bare `<table>` in `.table-wrap` + injected inline `style="overflow-x:auto;"` on **all 7** `.table-wrap` divs (1 pre-existing wrap also got the inline style).
- 82 literal U+2014 -> `&#8212;`.
- **KEPT** the 1 green gradient `linear-gradient(135deg,#4CAF50,#45a049)` (non-purple accent, not a brand color) — total linear-gradient tokens now 1.

## Post-Phase-0 invariants (30/30 PASS on fresh disk re-read)
bytes 258,778; md5 eb6c10d3; CR 0; U+2014 literal 0 -> &#8212; 82; U+2192 166 HOLD; U+2013/U+00B7 0; #667eea 0 / #764ba2 0 / purple-gradient 0; #2a2a2a cards 6; mermaid fill:#3a3a3a 8 / fill:#667eea 0; primaryBorderColor 888888 1; color="#222" 0; figure/img/svg 0/0/0; `<table>` 7 / table-wrap 7 (all 7 carry inline overflow-x:auto); TOC 16/16 (order==body); dead anchor 0; section open==close 16; jsdelivr 1; back lesson_47 1 / next lesson_49 1.

## Write path
Claude-side transform hard-asserted; reproduced identical transform SERVER-SIDE via Blender bridge (input re-verified pristine 7797e563 at commit -> dry-run md5 == eb6c10d3 byte-exact BEFORE commit -> binary LF write -> get_file_info==258,778 -> fresh independent Filesystem re-read re-assert ALL 30 PASS).

## Carry-forward
- HOLD &#8212; 82 / U+2192 166 through all later phases; new prose uses entities never literals.
- overflow-x:auto on all 7 `.table-wrap` (restores L43/L44/L46/L47 pattern; mobile-table clamp without external main.css).
- Module 11 SVG plan = role-hex palette (#FF6B00 / #4ADE80 / #E63946 / #4A9EFF / #B47EE8 / #F5C242) + banned literals (U+2014, U+2013, U+00B7 literal, #667eea, #764ba2, purple linear-gradient).

## NEXT PHASE = ROSTER TRIAGE -> SVG/PNG (own fresh chat)
Product-visualization *project* lesson (16 sections: overview/planning, product selection, reference, modeling strategy, scene planning, project setup, hands-on modeling, materials, hands-on materials, studio lighting, camera/composition, final render, variations, wrap, summary, next). Likely mix — conceptual SVG (planning charts, reference-analysis, modeling strategy, lighting diagrams, camera/composition) PLUS possible before/after or final-render PNG candidates. Inventory figures against the 16 sections, split SVG vs PNG, record split here, then produce SVG batches.

## ROSTER TRIAGE — COMPLETE + LOCKED (2026-07-04)

### Method
Inventoried all 16 body sections (h3 + 149 h4) against existing scaffolding: **8 mermaid** (five-pillars, workflow-overview, reference-folder-tree, modeling-decision-tree, composition-graph, project-collections-tree, PBR-material-graph, three-point-lighting-graph), **7 tables**, **1 pre** (reference folder structure). Every figure below adds non-redundant value vs that scaffolding. L48 is a hands-on photorealism *project* lesson, so rendered-result teaching points (before/after, final beauty) are genuine PNG candidates — unlike L44-L47 which were 0 PNG.

### VERDICT: 14 inline SVG / 4 PNG (18 figures)

### SVG registry (14) — id-prefix / slug / section anchor / subject
- 01 pvp- pillars_priority_matrix / project-overview / 5 pillars ranked by impact-vs-effort (complements the mermaid tree with a weighting quadrant, not a re-draw)
- 02 pdf- product_decision_framework / product-selection / good-vs-avoid first-product scorecard (complexity/reference-availability/scope axes)
- 03 rac- reference_capture_angles / reference-gathering / the 4-angle + detail-shot reference-capture diagram (what to shoot + why)
- 04 rbt- reference_board_technique / reference-gathering / PureRef-style board layout anatomy (front/side/detail/material zones)
- 05 cbm- component_based_modeling / modeling-strategy / product broken into named components w/ build-order numbering
- 06 m3p- modeling_3pass_approach / modeling-strategy / block -> refine -> detail 3-pass philosophy bar (time budget per pass)
- 07 vps- viz_style_spectrum / scene-planning / clean-studio <-> lifestyle <-> hero-dramatic style spectrum w/ lighting/bg deltas
- 08 cps- composition_placement_guide / scene-planning / rule-of-thirds + camera-angle-psychology placement overlay
- 09 cmp- color_mood_palettes / scene-planning / 3 palette strategies (monochrome / complementary / brand-accent) swatches
- 10 wss- world_shading_setup / project-setup / world + HDRI + color-mgmt (Filmic) node/panel concept map
- 11 mpm- material_property_map / materials-overview / 5 core PBR properties mapped onto the 5 headphone materials (grid)
- 12 tls- three_light_studio / lighting-setup / top-down studio stage plan: key/fill/rim positions + angles + relative power (complements the mermaid flow with SPATIAL layout)
- 13 dof- dof_composition_refine / camera-composition / focal-length + f-stop -> DOF falloff + subject isolation diagram
- 14 pev- portfolio_export_variations / final-render OR variations / export-size matrix + variation-series concept (turntable/colorways/angles)

### PNG registry (4) — rendered-result teaching points (photorealism lesson)
- P1 matte_black_plastic_swatch / creating-materials / rendered material sphere: matte black plastic (roughness/normal result)
- P2 brushed_metal_swatch / creating-materials / rendered material sphere: brushed aluminum (anisotropic-look result)
- P3 lighting_before_after / lighting-setup / same product flat-lit vs full 3-point studio (the payoff shot)
- P4 final_hero_render / final-render / finished headphones beauty render (portfolio target the whole lesson builds to)

### DEFER rationale (not built)
The 149 h4 are mostly step-by-step hands-on instructions, checklists, and pro-tips that read fine as prose + the existing 7 tables. The 8 mermaid already carry the flow/tree diagrams; SVGs above deliberately pick the SPATIAL / WEIGHTED / SWATCH-GRID angles mermaid can't. No screenshot-sequence figures (course convention: concept diagrams not UI captures, except the 4 rendered-result PNGs which teach photorealism outcomes).

### Post-integration target invariants (to assert at integration)
figure 18 / figcaption 18 / img 4 / inline svg 14 / aria-labelledby 14 / role="img" 14; color="#222" 0 (stripped at integration); #667eea 0 / #764ba2 0 / purple-gradient 0; U+2014 literal 0 (HOLD &#8212; body-prose 82 + any inside SVG figure content, real invariant = U+2014-literal-0); U+2192 166 HOLD; U+2013/U+00B7 0; section id 16 (order==TOC); back lesson_47 1 / next lesson_49 1; mermaid 8; jsdelivr 1; table 7 / table-wrap 7 (all inline overflow-x:auto); linear-gradient 1 (green #4CAF50 accent KEPT).

### SVG plan-lock
role-hex palette #FF6B00 / #4ADE80 / #E63946 / #4A9EFF / #B47EE8 / #F5C242; banned literals U+2014 / U+2013 / U+00B7-literal / #667eea / #764ba2 / purple linear-gradient; each SVG root color="#222" KEEP now / STRIP at integration; every svg role="img" + aria-labelledby -> title/desc; files land in `images/lesson_48_NN_slug.svg` byte-exact LF via write_file (base64 BANNED, hex reserved for PNG binary); cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) verify before each write. PNGs built after SVG batches (own step): produced via Blender bridge render (Windows-tempdir -> Pillow relay -> WSL, direct UNC writes truncate), cairosvg N/A, eye-confirm each.

## SVG build log
All entities only (U+2014/U+2013/U+00B7/arrows as `&#....;`), 0 literal, 0 purple/gradient; each XML well-formed, root `color="#222"` KEEP, role="img"+aria-labelledby; cairosvg dark+light verified; write_file byte-exact LF; md5 round-trip via copy_file_user_to_claude.
- **01** pvp- `images/lesson_48_01_pillars_priority_matrix.svg` md5 `15a7e9456453ebe2457cd896730eb45f` / EYE-CONFIRMED (dark). project-overview.
- **02** pdf- `images/lesson_48_02_product_decision_framework.svg` md5 `bdeaa3cae0a82b1dbe9a9b846c27e923` / stat-verified (view-glitch; palette dots probed at exact coords: green 74,222,128 / amber 245,194,66 / red 230,57,70). product-selection.
- **03** rac- `images/lesson_48_03_reference_capture_angles.svg` md5 `61b8f68c5f55419f57c9572419dd3c1a` / stat-verified (view-glitch; 4 markers window-scan ~480-510 px each + product-orange 1692 px). reference-gathering.
- **04** rbt- `images/lesson_48_04_reference_board_technique.svg` md5 `015864c144827976ccdbf3baf873768e` / 5,229 B / cairosvg dark+light verified + EYE-CONFIRMED (dark). reference-gathering.
- **05** cbm- `images/lesson_48_05_component_based_modeling.svg` md5 `f0171baab2a6a16e822ad371d1dbe8a0` / 3,853 B / cairosvg dark+light verified + EYE-CONFIRMED (dark). modeling-strategy.
- **06** m3p- `images/lesson_48_06_modeling_3pass_approach.svg` md5 `d9631f55316c669ade78a795190c9797` / 4,834 B / cairosvg dark+light verified + EYE-CONFIRMED (dark). modeling-strategy.
- **07** vps- `images/lesson_48_07_viz_style_spectrum.svg` md5 `2f325194c2f62486b08f7635e3ebc8dc` / 5,011 B / cairosvg dark+light verified + EYE-CONFIRMED (dark). scene-planning.
- **08** cps- `images/lesson_48_08_composition_placement_guide.svg` md5 `e9a5af9fc7b8fb4ecfb94111b9c5b650` / 5,290 B / cairosvg dark+light verified + EYE-CONFIRMED (dark). scene-planning.
- **09** cmp- `images/lesson_48_09_color_mood_palettes.svg` md5 `1c904a5645451cea4de870c9e7ba6736` / 3,825 B / cairosvg dark+light verified + EYE-CONFIRMED (dark). scene-planning.
- **10** wss- `images/lesson_48_10_world_shading_setup.svg` md5 `ff56976ff81737817c7b313b7f18c176` / 4,547 B / cairosvg dark+light verified + stat-verified (view-glitch; role-hue probes at exact coords). project-setup.
- **11** mpm- `images/lesson_48_11_material_property_map.svg` md5 `7652ac1520fa008337dc230cc36790fb` / 5,242 B / cairosvg dark+light verified + stat-verified (view-glitch; 5 row dots probed: FF6B00/4A9EFF/B47EE8/F5C242/4ADE80 exact). materials-overview.
- **12** tls- `images/lesson_48_12_three_light_studio.svg` md5 `eb58cdcddb4eb1b28f603bffa82dddb3` / 3,980 B / cairosvg dark+light verified + stat-verified (view-glitch; key F5C242 / fill 4ADE80 / rim B47EE8 / product FF6B00 / camera 4A9EFF exact). lighting-setup.
- **13** dof- `images/lesson_48_13_dof_composition_refine.svg` md5 `43d2bf6912b76a8e6fc114da82db7377` / 3,851 B / cairosvg dark+light verified + stat-verified (view-glitch; subject FF6B00 / camera 4A9EFF exact). camera-composition.
- **14** pev- `images/lesson_48_14_portfolio_export_variations.svg` md5 `fe8a637aba55566b65d4207f624e6a0a` / 5,202 B / cairosvg dark+light verified + stat-verified (view-glitch; turntable FF6B00 + colorways E63946/4A9EFF/4ADE80/F5C242 exact). final-render OR variations.

**SVG 14/14 COMPLETE** (all `images/lesson_48_NN_slug.svg`, byte-exact LF, md5 round-trip + get_file_info verified, all banned-literal-clean + XML well-formed + role="img"/aria-labelledby/color="#222" present). Live HTML UNTOUCHED (258,778 B / md5 eb6c10d3d45bee6bb5a843ed5c09b07a).
## PNG build log (2026-07-04)
All 4 rendered via Blender bridge (Blender 5.1.1, Cycles, AgX view transform) -> Windows-tempdir PNG -> Pillow relay to WSL `images/` (direct UNC writes truncate; relay re-encodes + reopens clean, non-truncated). cairosvg N/A (raster). Each eye-confirmed, md5 + get_file_info verified on WSL disk. Shared studio rig: 900x900 sphere swatches (P1/P2, same 3-point rig for compare), headphones proxy for P3/P4. NOTE: session used no `read_factory_settings` after the first call (it tears down the addon socket -> disconnect); scene cleared via object removal instead.
- **P1** `images/lesson_48_P1_matte_black_plastic_swatch.png` md5 `d928ef4c5133a4e054b2ac15e9cc005d` / 600,470 B / 900x900 RGBA / EYE-CONFIRMED. creating-materials. Matte black plastic sphere: roughness 0.62, low spec, diffuse falloff (reads as low-gloss plastic, not pure black).
- **P2** `images/lesson_48_P2_brushed_metal_swatch.png` md5 `88acb956d368b077077274c35e57e0c2` / 704,335 B / 900x900 RGBA / EYE-CONFIRMED. creating-materials. Brushed aluminium sphere: metallic 1.0, roughness ~0.32 driven by stretched-noise ramp (anisotropic-look streaks); same rig as P1 for A/B compare.
- **P3** `images/lesson_48_P3_lighting_before_after.png` md5 `204e52a6bf3cc8f4bc983de4913a84ae` / 1,001,064 B / 1824x956 RGB / EYE-CONFIRMED. lighting-setup. Side-by-side composite (Pillow): BEFORE flat single frontal fill vs AFTER full 3-point studio, same headphones product; labeled halves (orange BEFORE / green AFTER).
- **P4** `images/lesson_48_P4_final_hero_render.png` md5 `2261b02f48de38db65248152f154f3e9` / 1,181,177 B / 1280x1280 RGBA / EYE-CONFIRMED. final-render. Hero beauty shot: 3/4 low angle, 95mm, DOF f/3.2 subject isolation, warm key + cool rim, 256 samples, reflective studio floor.

**PNG 4/4 COMPLETE** (all `images/lesson_48_PN_slug.png`, Pillow-relay verified non-truncated, md5 + get_file_info verified, all eye-confirmed). Live HTML UNTOUCHED (258,778 B / md5 eb6c10d3d45bee6bb5a843ed5c09b07a). **NEXT PHASE = INTEGRATION (own fresh chat):** inline the 14 SVGs at section anchors (strip color="#222", wrap figure+figcaption) + insert the 4 PNGs as `<figure><img>` at P1/P2 creating-materials, P3 lighting-setup, P4 final-render; then assert the §Roster-triage post-integration target invariants (figure 18 / figcaption 18 / img 4 / inline svg 14 ...).

## INTEGRATION COMPLETE + HARD-VERIFIED (2026-07-04)
Live HTML `lesson_48_product_visualization_project.html` now **325,411 B / md5 `bdb56cdfb703a5bc593ff7c67c5f42f8` / LF-only / 0 CR** (Phase-0 baseline 258,778 -> 325,411 = +66,633 B). All 14 SVGs inlined at their §SVG-registry section anchors, each root ` color="#222"` STRIPPED, each wrapped `<figure>`+`<figcaption>` (figcaption == SVG `<title>`). All 4 PNGs inserted as `<figure><img src="images/lesson_48_PN_slug.png" ... style="max-width:100%;height:auto;"/>`+`<figcaption>` at their §PNG-registry anchors.

Write path = carry-forward pattern: Claude-side transform hard-asserted (34/34), reproduced SERVER-SIDE via Blender bridge reading source + 14 SVGs from WSL disk (source re-verified pristine eb6c10d3 at commit -> dry-run md5 == bdb56cdf byte-exact BEFORE commit -> binary LF write -> get_file_info==325,411 -> fresh independent Filesystem re-read re-assert ALL 34 PASS). Bridge spec passed as compact ASCII-JSON string arg (1,844 B, under ~6 KB cap); figure blocks reconstructed host-side from on-disk SVGs, not streamed. No `read_factory_settings` used (tears down addon socket).

### Anchor map (figure inserted immediately before each anchor heading; 09 before the scene-planning `</section>` boundary)
- 01 pvp -> project-overview, before `<h4>The Complete Workflow Overview</h4>`
- 02 pdf -> product-selection, before `<h4>Recommendation: Start with Headphones</h4>`
- 03 rac -> reference-gathering, before `<h4>Where to Find Quality References</h4>`
- 04 rbt -> reference-gathering, before `<h4>Common Reference Mistakes to Avoid</h4>`
- 05 cbm -> modeling-strategy, before `<h4>Modeling Order: Build Smart, Not Hard</h4>`
- 06 m3p -> modeling-strategy, before `<h4>Essential Modeling Guidelines</h4>`
- 07 vps -> scene-planning, before `<h4>Composition Fundamentals for Product Viz</h4>`
- 08 cps -> scene-planning, before `<h4>Camera Angle Psychology</h4>`
- 09 cmp -> scene-planning, before the `</section>` that closes scene-planning (ahead of `<section id="project-setup">`)
- 10 wss -> project-setup, before `<h4>Camera Setup (The Photographer's Eye)</h4>`
- 11 mpm -> materials-overview, before `<h4>Material Types for Your Headphones</h4>`
- 12 tls -> lighting-setup, before `<h4>Setting Up Your Studio Lights</h4>`
- 13 dof -> camera-composition, before `<h4>Render Region and Test Workflow</h4>`
- 14 pev -> final-render, before `<h4>Image Optimization Tips</h4>`
- P1 -> creating-materials, before `<h4>Material 2: Brushed Metal (Hinges)</h4>`
- P2 -> creating-materials, before `<h4>Material 3: Leather/Fabric Cushions</h4>`
- P3 -> lighting-setup, before `<h4>Advanced Lighting Enhancements</h4>`
- P4 -> final-render, before `<h4>Render Troubleshooting</h4>`

All 14 SVG figures + 4 PNG figures verified landing in their expected section (doc-order section-of check PASS for all 18).

### Post-integration invariants (34/34 PASS on fresh disk re-read)
bytes 325,411; md5 bdb56cdf; CR 0; figure 18 / figcaption 18 (open==close each); img 4 / inline svg 14 / aria-labelledby 14 / role="img" 14; color="#222" 0 / #667eea 0 / #764ba2 0 / purple-gradient 0; U+2014 literal 0 / U+2192 166 HOLD / U+2013 0 / U+00B7 0; mermaid 8; jsdelivr 1; `<table>` 7 / table-wrap 7; linear-gradient 1 (green #4CAF50 KEPT); back lesson_47 1 / next lesson_49 1; section id 16 (order==TOC); each PNG referenced once at its anchor; all 14 inline svg XML well-formed; all 14 figcaptions == their SVG `<title>`. NOTE `&#8212;` total 82 -> 126 (+44 inside the 14 SVG figure content + 2 PNG captions; body-prose 82 HELD; real invariant U+2014-literal-0 holds — L44/L45/L47-parallel split).

**NEXT PHASE = BROWSER QA (own fresh chat):** copy live HTML Claude-side byte-exact (md5 + 325,411 B + 0 CR match disk) + stage the 4 PNGs (md5s per §PNG build log), serve local http, local mermaid@10.9.6 ESM (CDN blocked), Chromium 1440x900 + 390x844; re-assert the 34 post-integration invariants on the fresh copy before serving; external site css/js 404s expected sandbox-only. Inline SVGs carry no responsive clamp -> mobile fit is main.css-dependent (L47 finding); PNG `<img>` carry inline max-width:100% so they clamp without main.css.

## BROWSER QA — PASS (2026-07-04)
Harness = real Chromium (Playwright chromium-1194 at `/opt/pw-browsers`, `--no-sandbox`, `--proxy-server=direct://`) over local http. Live file copied Claude-side byte-exact (md5 `bdb56cdfb703a5bc593ff7c67c5f42f8` + 325,411 B + 0 CR match disk); 4 PNGs staged, all 4 md5s + dims match §PNG build log (P1 d928ef4c 900x900 / P2 88acb956 900x900 / P3 204e52a6 1824x956 / P4 2261b02f 1280x1280). All 34 post-integration invariants re-asserted on the fresh copy BEFORE serving — all PASS (figure 18/18, figcaption 18/18, img 4, inline svg 14, aria-labelledby 14, role="img" 14, color=#222/#667eea/#764ba2/purple-gradient/U+2014-literal/U+2013/U+00B7 all 0, U+2192 166, &#8212; 126, mermaid 8, jsdelivr 1, table/table-wrap 7/7, linear-gradient 1 [green #4CAF50], back L47 1/next L49 1, section id 16 order==TOC, all 14 inline svg XML well-formed, 4 PNG each referenced once). QA-only render copy rewrote the 1 jsdelivr mermaid import to LOCAL mermaid@10.9.6 ESM (`vendor/mermaid-dist/`, npm dist, CDN blocked) — live import line NOT touched. Tested desktop 1440x900 + mobile 390x844.

RESULTS (both widths): 18/18 `<figure>` + 18/18 `<figcaption>`; 14 in-figure inline `<svg>` render non-zero bbox (0 zero-size); 4 `<img>` served 200 with natural dims matching disk (900x900 / 900x900 / 1824x956 / 1280x1280); 8 `.mermaid` -> 8 rendered `<svg>` (local ESM, all chunks 200, no parse errors); 0 pageerrors; desktop h-overflow 0 (scrollW 1440). Only console errors = 4 expected site-scaffold 404s (styles/main.css, js/clipboard.js, js/course-enhancements.js, favicon.png), resolve on Ray's real server.

**MOBILE FINDING (sandbox-only, not a live defect) — L47-parallel:** at 390px raw h-overflow was 422 (scrollW 812) because the 14 inline SVGs carry fixed `width="760"` and the document's own `<style>` has NO `figure svg{max-width:100%}` clamp — mobile SVG clamping depends entirely on the site `styles/main.css` (404 in sandbox). Overflow offenders confirmed = the inline `<svg>/<rect>/<text>/<g>` at width 760. Verified: injecting the real `figure svg{max-width:100%;height:auto}` rule drops mobile h-overflow to 0 with all 8 mermaid still rendering. The 4 PNG `<img>` carry inline max-width:100% so they already clamp without main.css. On Ray's real server (main.css served) the overflow does not occur — flagged as a live main.css dependency (same class as L45/L47), NOT a QA failure.

**VERDICT: PASS.** Live HTML unchanged (325,411 B / md5 bdb56cdfb703a5bc593ff7c67c5f42f8). L48 pipeline COMPLETE end-to-end (Phase 0 -> roster triage -> SVG 14 + PNG 4 -> integration -> browser QA PASS). NEXT = L49, own fresh chat, start at Phase 0.
