# Lesson 49 - Architectural Visualization - Integration Progress

Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Live HTML: lesson_49_architectural_visualization.html
Module 11, lesson 3.

## Phase-0 baseline (pristine, before any transform)
- bytes 231,845
- md5 667583b48b7138318750c3cd9f5751c4
- LF-only (LF 3831 / CR 0 / CRLF 0)
- TRUE-PRISTINE: figure 0 / img 0 / svg 0 / figcaption 0

## Content check (TOC vs body)
- NO fix needed (L44/L46/L47-parallel). TOC lists 10 anchors; all 10 resolve to 10 top-level
  <section id> in identical order; 0 dead links.
- 10 section ids (order == TOC): understanding-archviz, archviz-workflow, efficient-modeling,
  architectural-materials, natural-lighting, camera-composition, rendering-strategy,
  post-processing, project-modern-house, summary.
- <section> open==close==12 (10 id'd top-level + 2 nested/non-TOC subsections; TOC<->top-level-id match clean).

## Phase-0 transforms applied
- T1: 7 gradient cards `linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white` -> `#2a2a2a;color:white`.
- T2: 6 mermaid node `fill:#667eea` -> `fill:#3a3a3a`.
- T2b: 1 mermaid node `fill:#764ba2` -> `fill:#3a3a3a` (purple partner node in last graph; NOT a gradient card;
  de-purpled alongside its E/F sibling. Other node fills #4CAF50/#FF9800/#FFC107/#9E9E9E/#f44336 = semantic status colors, KEPT).
- T3: 1 mermaid `primaryBorderColor '#667eea'` -> `'#888888'`.
- T4: table-wrap - 1 pre-existing `.table-wrap` given inline `overflow-x:auto`; 7 bare `<table>` wrapped in
  `.table-wrap` with inline `overflow-x:auto`. All 8 `.table-wrap` now carry inline overflow-x:auto.
- T5: 145 literal U+2014 -> `&#8212;`.

## Post-Phase-0 result (server-side write, verified byte-exact)
- bytes 232,555  (delta +710 B, deterministic; +14 LF = 7 wraps x2)
- md5 1ab3e179dad4ae899671ca15b023d8d4
- LF 3845 / CR 0
- Write path: Claude-side transform hard-asserted (33/33) -> reproduced SERVER-SIDE via Blender bridge
  (input re-verified pristine 667583b4 at commit -> dry-run md5 == 1ab3e179 byte-exact BEFORE commit ->
  binary LF write -> get_file_info==232,555 -> fresh independent Filesystem re-read re-assert ALL 33 PASS).

## Post-Phase-0 invariants (33/33 PASS on fresh disk re-read)
bytes 232,555; md5 1ab3e179; CR 0; LF 3845;
U+2014 literal 0 -> &#8212; 145; U+2192 literal 1 HOLD (nav "Next" link arrow, not prose);
U+2013 0; U+00B7 0;
#667eea 0; #764ba2 0; linear-gradient 0; #2a2a2a cards 7;
mermaid fill:#3a3a3a 7; fill:#667eea 0; fill:#764ba2 0;
primaryBorderColor '#888888' 1 / '#667eea' 0;
class="mermaid" 7; jsdelivr 1;
<table> 8 / table-wrap 8 / overflow-x:auto 8;
figure 0 / img 0 / svg 0;
section id 10 (order==TOC); <section> open 12 / close 12;
back lesson_48 1 / next lesson_50 1;
TOC order==body order TRUE; dead anchors 0.

## Carry-forward
- overflow-x:auto on all 8 `.table-wrap` (restores L43/L44/L46/L47/L48 pattern; mobile-table clamp without external main.css).
- HOLD &#8212; 145 / U+2192 1 (nav arrow) through all later phases; new prose uses entities never literals.
- Module 11 SVG plan = role-hex palette (#FF6B00 / #4ADE80 / #E63946 / #4A9EFF / #B47EE8 / #F5C242)
  + banned-literal list (U+2014, U+2013, U+00B7 literal, #667eea, #764ba2, linear-gradient).

## NEXT PHASE = ROSTER TRIAGE -> SVG/PNG (own fresh chat)
Architectural-visualization lesson across 10 sections - inventory figures the content needs
(archviz workflow diagrams, efficient-modeling strategy, material/PBR charts, natural-lighting
(sun/sky) diagrams likely SVG; final beauty renders / exterior-interior before-after possible PNG candidates),
split SVG vs PNG, record split here, then produce SVG batches.

## Roster triage (decided this chat)

Authoritative source = live HTML content across the 10 sections (NOT the image_requirements_part1/2 wishlist,
which is a 30-item pre-production AI-render/Blender-UI-screenshot wishlist reproducing photoreal composites and
node-editor screenshots — those are NOT producible as clean role-hex diagram SVGs and are out of scope for this
pipeline, same call as L45/L47). Existing content already carries 7 mermaid flow graphs + 8 data tables; the
roster below covers ONLY the conceptual/spatial figures neither flow-mermaid nor tables provide.

### Split: 14 inline SVG / 0 PNG
0 PNG verdict (L45/L47-parallel): every wishlist "PNG candidate" is a photoreal beauty render, a time-of-day
photo comparison, or a Blender-UI screenshot. None can be authentically produced in-pipeline; a fabricated
screenshot would misrepresent the tool. The pipeline's honest visual contribution here is diagrammatic, so all
14 figures are role-hex explanatory SVGs; PNG phase is empty.

### id-prefix registry (14 SVG) — id = l49_<nn>_<slug>, figure order top-to-bottom
| # | id slug | section anchor (h3 text) | section id | what it shows (concept, not flow/table) |
|---|---------|--------------------------|------------|------------------------------------------|
| 01 | l49_01_archviz_quality_ladder | What Makes a Great ArchViz Render? | understanding-archviz | amateur→pro quality axis: the 6 aspects (lighting/materials/camera/context/scale/details) as a labelled progression bar, "could this be a photo?" benchmark |
| 02 | l49_02_lod_distance_bands | The Fundamental Principle: Level of Detail (LOD) | efficient-modeling | camera-distance → geometry-budget: 3 distance bands (close/medium/far) mapped to detail level, "match effort to distance" |
| 03 | l49_03_modular_instancing | Modular Modeling: Build Once, Use Everywhere | efficient-modeling | one master window → array/instance → facade grid with slight per-copy variation |
| 04 | l49_04_pbr_three_pillars | The PBR Foundation | architectural-materials | the 3 pillars (accurate values / surface variation / scale accuracy) as a supporting-triad diagram |
| 05 | l49_05_uv_scale_calc | Material Scale and UV Mapping | architectural-materials | texture-scale calc: (texture size m ÷ real material size m) = Scale, brick example (2m ÷ 0.2m = 10), wrong-scale vs right-scale strip |
| 06 | l49_06_daylight_three_components | Understanding Natural Light Behavior | natural-lighting | the 3 stacked components of daylight: direct sun (sharp shadow) + sky fill (blue ambient) + bounced (surface-tinted) combining on a facade |
| 07 | l49_07_two_light_setup | The Two-Light Setup: Sun + HDRI | natural-lighting | sun (directional, warm) + HDRI dome (fill/reflections) geometry around a house — the standard exterior recipe |
| 08 | l49_08_time_of_day_arc | The Time of Day Decision | natural-lighting | sun-arc across the day: morning/noon/afternoon/golden/dusk positions with shadow-length + colour-temp cues |
| 09 | l49_09_focal_length_perspective | Camera Settings That Matter | camera-composition | 24 / 50 / 85mm framing the same building: FOV cone width + perspective compression + distortion trade-off |
| 10 | l49_10_keystone_correction | The Rules of Architectural Composition | camera-composition | keystoning: tilted camera (converging verticals, "falling back") vs camera-shift (parallel verticals) side-by-side |
| 11 | l49_11_camera_angle_map | The Essential ArchViz Camera Angles | camera-composition | plan-view of building with the 5 standard camera positions (eye-level / elevated / low / corner / detail) + height/focal callouts |
| 12 | l49_12_cycles_vs_eevee | Cycles vs. Eevee: The Right Tool for the Job | rendering-strategy | decision split: Eevee (fast preview / iterate) → Cycles (accurate final) with the "model in Eevee, final in Cycles" handoff |
| 13 | l49_13_noise_sources_fixes | Dealing with Noise and Fireflies | rendering-strategy | noise-source map (glass caustics / indirect / small-bright / complex mats / low samples) → matching fix per source |
| 14 | l49_14_postprocess_15pct | Before and After: The Post-Processing Impact | post-processing | raw→graded transform: the enhancement stack (exposure/contrast/colour/life) + the "15% rule" subtle-vs-overdone gauge |

Coverage note: understanding-archviz 1, efficient-modeling 2, architectural-materials 2, natural-lighting 3,
camera-composition 3, rendering-strategy 2, post-processing 1. Sections archviz-workflow, project-modern-house,
summary carry existing mermaid/tables/checklists and need no new SVG.

### Section anchors (insertion = immediately AFTER the h3 line, before its first prose child)
01→ h3 "What Makes a Great ArchViz Render?" (understanding-archviz)
02→ h3 "The Fundamental Principle: Level of Detail (LOD)" (efficient-modeling)
03→ h3 "Modular Modeling: Build Once, Use Everywhere" (efficient-modeling)
04→ h3 "The PBR Foundation" (architectural-materials)
05→ h3 "Material Scale and UV Mapping" (architectural-materials)
06→ h3 "Understanding Natural Light Behavior" (natural-lighting)
07→ h3 "The Two-Light Setup: Sun + HDRI" (natural-lighting)
08→ h3 "The Time of Day Decision" (natural-lighting)
09→ h3 "Camera Settings That Matter" (camera-composition)
10→ h3 "The Rules of Architectural Composition" (camera-composition)
11→ h3 "The Essential ArchViz Camera Angles" (camera-composition)
12→ h3 "Cycles vs. Eevee: The Right Tool for the Job" (rendering-strategy)
13→ h3 "Dealing with Noise and Fireflies" (rendering-strategy)
14→ h3 "Before and After: The Post-Processing Impact" (post-processing)
(exact anchor h3 lines verified in current live HTML this chat.)

### Post-integration target invariants (to assert at integration close)
- figure 14 / figcaption 14 / inline svg 14 / img 0 / aria-labelledby 14 / role="img" 14
- each svg root ` color="#222"` STRIPPED at integration (0 remaining); each figcaption == its svg <title>
- banned literals still 0: U+2014-literal, U+2013, U+00B7-literal, #667eea, #764ba2, linear-gradient(purple)
- HOLD from Phase 0: &#8212; body-prose 145 held; U+2192 1 (nav arrow) held; &#8212; total may rise by in-figure content (L44/L45/L47/L48-parallel split — real invariant is U+2014-literal-0)
- mermaid 7 / jsdelivr 1 / <table> 8 / table-wrap 8 / overflow-x:auto 8 all unchanged
- section id 10 (order==TOC) unchanged; back lesson_48 1 / next lesson_50 1 unchanged
- all 14 inline svg XML well-formed; each figure inserted once at its registry anchor

## SVG production log
(build loop per SVG: author -> banned-literal check -> cairosvg dark+light verify -> write_file byte-exact -> md5+get_file_info -> log)
NOTE: prior handoff claimed SVG 01 on disk; disk check found 0 L49 SVGs + empty log. True start = 0/14. Authored 01-10 this chat.
- 01 lesson_49_01_archviz_quality_ladder.svg  md5 1ddc048cadaeb467be29ae6e5a4da209  4430 B  banned 0  dark+light OK
- 02 lesson_49_02_lod_distance_bands.svg  md5 eefa8b2b463bd2cb049801dfd282b02e  3510 B  banned 0  dark+light OK
- 03 lesson_49_03_modular_instancing.svg  md5 a0465ce7eab09093b129a9fabd68fecd  4499 B  banned 0  dark+light OK
- 04 lesson_49_04_pbr_three_pillars.svg  md5 0ed8eeac9ba6f71bf367c285608b2a86  3788 B  banned 0  dark+light OK
- 05 lesson_49_05_uv_scale_calc.svg  md5 5c5777faf819be4107d42f750fd1d2d1  3267 B  banned 0  dark+light OK
- 06 lesson_49_06_daylight_three_components.svg  md5 32b2d46ba1a261ce7063f6cbc72db6f8  4018 B  banned 0  dark+light OK
- 07 lesson_49_07_two_light_setup.svg  md5 fa185428e4f2eb23f52cc47275bb1571  3593 B  banned 0  dark+light OK
- 08 lesson_49_08_time_of_day_arc.svg  md5 f9955ace61926770643780cbcd28e298  3605 B  banned 0  dark+light OK
- 09 lesson_49_09_focal_length_perspective.svg  md5 80404552544927d892d20ef8e379d031  3503 B  banned 0  dark+light OK
- 10 lesson_49_10_keystone_correction.svg  md5 b798c83c56aa3bae1a47d6c869f7051c  2892 B  banned 0  dark+light OK
- 11 lesson_49_11_camera_angle_map.svg  md5 caa9f42aabb22e5305ed93ee80fed2f5  4084 B  banned 0  dark+light OK
- 12 lesson_49_12_cycles_vs_eevee.svg  md5 5e1434e2376ae19decf2d051ea8ee627  3665 B  banned 0  dark+light OK
- 13 lesson_49_13_noise_sources_fixes.svg  md5 1b4b614eee6a29d4b9b705a1a948e193  5262 B  banned 0  dark+light OK
- 14 lesson_49_14_postprocess_15pct.svg  md5 871ec79b520e11e5e1acbb9a386c2efc  4834 B  banned 0  dark+light OK

## SVG PRODUCTION COMPLETE (14/14 authored + on disk + logged)
All 14 SVGs authored, banned-checked (0), cairosvg dark+light verified, written byte-exact to
\\wsl$\...\images\lesson_49_<nn>_<slug>.svg, md5+get_file_info matched. Live HTML still Phase-0 baseline,
UNTOUCHED (232,555 B / md5 1ab3e179dad4ae899671ca15b023d8d4). NEXT PHASE = INTEGRATION (own fresh chat):
inline all 14 SVGs at their §Section-anchors, STRIP root color="#222", wrap <figure>+<figcaption>
(figcaption == svg <title>), assert §Post-integration target invariants.

## INTEGRATION COMPLETE + HARD-VERIFIED (2026-07-04)
Live HTML lesson_49_architectural_visualization.html now **288,624 B / md5 5257df57c463c645fb8ce6063f661c78 / LF-only / 0 CR** (Phase-0 baseline 232,555 -> 288,624 = +56,069 B). All 14 SVGs inlined at their section anchors (immediately after each h3, before first prose child), each root ` color="#222"` STRIPPED, each wrapped <figure>+<figcaption> (figcaption == that SVG's <title>). 0 PNG (roster verdict).
Write path: Claude-side transform hard-asserted (30/30) -> reproduced SERVER-SIDE via Blender bridge reading source HTML + 14 SVGs from WSL disk (source re-verified pristine 1ab3e179 at commit -> dry-run md5 == 5257df57 byte-exact BEFORE commit -> binary LF write -> get_file_info==288,624 -> fresh independent Filesystem re-read re-assert ALL 30 PASS).
POST-INTEGRATION INVARIANTS (30/30 PASS on fresh disk re-read): figure 14 / figcaption 14 / inline svg 14 / img 0 / aria-labelledby 14 / role="img" 14; color="#222" 0; U+2014-literal 0 / U+2013 0 / U+00B7 0 / #667eea 0 / #764ba2 0 / linear-gradient 0; mermaid 7 / jsdelivr 1 / <table> 8 / table-wrap 8 / overflow-x:auto 8 unchanged; U+2192 1 (nav) held; section id 10 order==TOC unchanged; back lesson_48 1 / next lesson_50 1 unchanged; all 14 svg XML well-formed; all 14 figcaptions == their SVG <title>; each figure inserted once at its registry anchor.
NEXT PHASE = BROWSER QA (own fresh chat): copy live HTML Claude-side byte-exact (md5 + 288,624 B + 0 CR match disk), serve local http, local mermaid@10.9.6 ESM (CDN blocked), Chromium 1440x900 + 390x844; re-assert the 30 invariants on the fresh copy before serving; no image staging (0 PNG); inline SVGs carry width="760" no responsive clamp -> mobile fit main.css-dependent (L45/L47/L48 finding); external site css/js 404s expected sandbox-only.

## BROWSER QA (2026-07-04) — PASS
QA harness = real Chromium (Playwright chromium-1194 at /opt/pw-browsers, --no-sandbox, --proxy-server=direct://) over local http (127.0.0.1:8099). Live file copied Claude-side byte-exact BEFORE serving: md5 5257df57c463c645fb8ce6063f661c78 + 288,624 B + 0 CR all match disk. All 30 post-integration invariants re-asserted on the fresh copy BEFORE serving (figure 14/14, figcaption 14/14, inline svg 14, img 0, aria-labelledby 14, role="img" 14; color="#222"/#667eea/#764ba2/linear-gradient/U+2014-literal/U+2013/U+00B7 all 0; class="mermaid" 7, jsdelivr 1, <table> 8/table-wrap 8/overflow-x:auto 8, U+2192 1 nav; section id 10 order==TOC, <section> open 12/close 12, back lesson_48 1/next lesson_50 1; all 14 inline svg XML well-formed; all 14 figcaptions == their svg <title>) — all pass.
QA-only render copy (qa_render.html) rewrote the one jsdelivr mermaid import to LOCAL mermaid@10.9.6 ESM (vendor/mermaid-dist/, npm dist 10.9.6 with all lazy chunks, CDN blocked Claude-side) — live import line NOT touched (live.html jsdelivr count held at 1). Tested desktop 1440x900 + mobile 390x844.

RESULTS (both widths): 14/14 <figure> + 14/14 <figcaption>; 14/14 in-figure inline <svg> render non-zero bbox (0 zero-size); 0 <img> (no PNG phase); 7 .mermaid -> 7 rendered <svg> (local ESM, no parse errors); 0 pageerrors. Desktop h-overflow 0 (scrollW 1440, bodyScrollW 1424). Only console errors = 4 expected site-scaffold 404s (styles/main.css, js/clipboard.js, js/course-enhancements.js, favicon.png) — sandbox-only, resolve on Ray's real server.

MOBILE FINDING (sandbox-only, not a live defect) — L45/L47/L48-parallel: at 390px raw h-overflow was 418 (scrollW 808 vs clientW 390) because L49's 14 inline SVGs carry fixed width="760" and the document's own <style> has NO figure svg{max-width:100%} clamp — mobile SVG clamping depends entirely on the site styles/main.css (404 in sandbox). Verified: injecting the real figure svg{max-width:100%;height:auto} rule drops mobile h-overflow to 0 (scrollW 390) with all 7 mermaid still rendered and all 14 fig svg non-zero. On Ray's real server (main.css served) the overflow does not occur — flagged as a live main.css dependency (same class as L45/L47/L48), NOT a QA failure.

VERDICT: PASS. No live edit needed. Live HTML unchanged 288,624 B / md5 5257df57c463c645fb8ce6063f661c78 / LF-only / 0 CR. L49 pipeline COMPLETE end-to-end (Phase 0 -> roster triage -> SVG 14 + PNG 0 -> integration -> browser QA PASS). NEXT = L50, own fresh chat, start at Phase 0.
