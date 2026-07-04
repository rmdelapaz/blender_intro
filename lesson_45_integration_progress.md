# Lesson 45 (Optimization Techniques) &#8212; Integration Progress

**Module 10, lesson 5.** Live HTML: `lesson_45_optimization_techniques.html` (project root `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`).

---

## §Phase-0 baseline (2026-07-03)

**Untouched original:** 277,678 B / md5 `045a89c762d1b68a3b79453cd0134631` / LF-only (0 CR) / TRUE-PRISTINE (figure/figcaption/img/svg 0/0/0).

**Live HTML after Phase 0:** 277,920 B / md5 `8b98849044e3309e47befd3cf0bbbbd6` / LF-only. Byte delta 277,678 &#8594; 277,920 = **+242 B** (deterministic; Claude-side and server-side md5 identical).

**Write path:** transforms applied Claude-side + hard-asserted, then reproduced identically SERVER-SIDE on the WSL disk via the Blender bridge (bridge host is Windows, sees WSL FS via the same `\\wsl$\` UNC as Filesystem) &#8212; original read + transform + dry-run md5 byte-exact to Claude-side BEFORE commit (temp sidecar) &#8594; binary LF write over live &#8594; temp removed &#8594; `get_file_info`==277,920 &#8594; fresh independent Filesystem re-read re-assert ALL PASS.

**POST-PHASE-0 INVARIANTS (all verified on fresh disk re-read):**
- bytes 277,920; CR 0; md5 `8b98849044e3309e47befd3cf0bbbbd6`
- 10 section ids: [understanding-performance, viewport-optimization, geometry-optimization, material-texture-optimization, render-optimization, memory-management, hardware-optimization, workflow-efficiency, project-optimize, summary]
- section open==close==10; TOC 10/10 resolve (0 dead links); no nesting defect (max depth 1, balanced)
- mermaid `class="mermaid"` 4; jsdelivr 1
- `<table>` 6 / table-wrap 6 (all wrapped)
- figures/img/svg 0/0/0 (TRUE-PRISTINE)
- back lesson_44 1 / next lesson_46 1
- **U+2014 literal 0 &#8594; &#8212; 44** (all 44 prose em-dashes entity-normalized)
- **U+2192 literal 258 HOLD**
- U+2013 / U+00B7 / #667eea / #764ba2 / linear-gradient / color="#222" all 0
- neutral fills introduced: `background: #2a2a2a` 7 (5 purple + 2 orange cards); mermaid `fill:#3a3a3a` 4; `primaryBorderColor '#888888'` 1; `<tr>` header bg #3a3a3a 1

## §Phase-0 log (transforms applied)

1. 5 gradient cards `linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white` &#8594; `#2a2a2a;color:white`
2. 2 gradient cards `linear-gradient(135deg,#FF9800 0%,#F44336 100%);color:white` &#8594; `#2a2a2a;color:white`
3. mermaid `primaryBorderColor '#667eea'` &#8594; `'#888888'` (1)
4. 4&#215; mermaid node `style A fill:#667eea,...` &#8594; `fill:#3a3a3a,...`
5. 1 bare `<tr style="background:#667eea;color:white">` header &#8594; `#3a3a3a`
6. 5 bare `<table>` &#8594; `.table-wrap`-wrapped (6th already wrapped from source &#8594; 6/6 total)
7. 44 literal U+2014 &#8594; `&#8212;`

## §Content check (2026-07-03) &#8212; NO FIX NEEDED

TOC lists 10 anchors, all 10 resolve to 10 top-level `<section>` (open==close==10), 0 dead links, no nesting defect. Content already complete + correctly structured. **No edit made.**

## §Locked rules (carry-forward)

- `\\wsl$\` paths only (never `\\wsl.localhost\`); Filesystem read tools + `write_file` reach `\\wsl$\` byte-exact; str_replace/edit + bash CANNOT reach UNC.
- Blender bridge host (Windows) also sees WSL FS via `\\wsl$\` UNC directly &#8212; used for Phase-0 server-side transform/write; dry-run md5 must match Claude-side before commit; bridge writes binary + normalize CRLF&#8594;LF + `get_file_info`==byte-count.
- Module 10 SVG plan: role-hex palette #FF6B00 (brand) / #4ADE80 (keep-positive) / #E63946 (warning) / #4A9EFF (field-info) / #B47EE8 (practice) / #F5C242 (caution); banned literals U+2014, U+2013, U+00B7-literal, #667eea, #764ba2, linear-gradient; SVG text via `write_file` (bytes.fromhex reserved for binary/PNG, base64 BANNED).
- Standalone svg root `color="#222"` KEEP during build / STRIP at integration; every svg `role="img"`+`aria-labelledby`&#8594;title/desc.
- HOLD &#8212; 44 / U+2192 258 through all later phases; new prose uses entities `&#8212;`/`&#8594;`/`&#8211;` never literals.
- Browser QA Claude-side (local mermaid@10.9.6 ESM, CDN blocked); external site css/js 404s expected sandbox-only.

## §Roster triage (2026-07-03) &#8212; SPLIT LOCKED = 16 inline SVG / 0 PNG

**Verdict 16 SVG / 0 PNG.** L45 is a pure conceptual/reference/strategy lesson (performance dimensions, process flows, budget/memory charts, topology & LOD concepts, texture-resolution & shader-complexity comparisons, hardware relations, priority pyramid). **No rendered-beauty and no genuine before/after photographic content** this pipeline can honestly produce &#8212; every wishlist "before/after" is a UI/render screenshot or would need a real optimized scene we do not have &#8594; **0 PNG** (like L44).

**Wishlist = 125-item pre-production WISHLIST, NOT the roster.** `lesson_45_image_requirements_part1.md` (items 1&#8211;50) + `part2.md` (items 51&#8211;125), authored 2025-11-12. (No `lesson_45_quick_reference.md` exists.) Massively padded: ~52% are Blender-UI panel screenshots (never produced by this pipeline), ~28% before/after render comparisons needing real scenes, ~35 explicitly "nice to have" badges/banners/posters. Triaged to the 16 that add non-redundant conceptual value vs the 10 live sections + existing scaffolding.

**Existing scaffolding ABSORBS (build NO duplicate):**
- **4 mermaid** already cover the top conceptual diagrams: performance-triangle [understanding-performance] absorbs wishlist #1; render-time-factors [render-optimization] absorbs #37; RAM-vs-VRAM [memory-management] absorbs #51; hardware-components [hardware-optimization] absorbs #71.
- **6 tables** absorb all reference-data grids: sample-count recs (#41), bounce default/optimized (#44), resolution-% guide (#45/#46), texture distance/resolution/memory (#26/#27), SSD-vs-HDD task speeds (#77), project before/after metrics (#104/#114).
- **1 `<pre>` folder tree** [workflow-efficiency] absorbs project-folder-structure (#65 / part2 #15).

**16-SVG registry (id-prefix `lesson_45_NN_slug`, NN 01&#8211;16):**
| NN | slug | section anchor | complements (not dup of) | wishlist src |
|----|------|----------------|--------------------------|--------------|
| 01 | optimization_workflow_loop | understanding-performance | mermaid = dimensions; this = 5-step process + iteration loop | #5 |
| 02 | performance_targets | understanding-performance | good-vs-poor metric thresholds (green/red) | #4 |
| 03 | shading_modes_speed | viewport-optimization | 4 shading modes ranked by viewport cost | #6 |
| 04 | simplify_viewport_render | viewport-optimization | viewport-vs-render level split concept | #8/#10 |
| 05 | instance_vs_duplicate | viewport-optimization | 10&#215; memory vs 1&#215;+overhead concept | #15 |
| 06 | polygon_budget | geometry-optimization | budget ranges bg/mid/hero (bar concept) | #16 |
| 07 | subdivision_multiplier | geometry-optimization | exponential 1K&#8594;4K&#8594;16K&#8594;64K growth | #17 |
| 08 | topology_quad_tri_ngon | geometry-optimization | quad good / tri caution / n-gon bad | #18 |
| 09 | lod_levels | geometry-optimization | LOD0&#8211;LOD3 detail-vs-distance concept | #22 |
| 10 | texture_resolution_distance | material-texture-optimization | distance&#8594;resolution mapping (concept, not the memory table) | #26 |
| 11 | shader_complexity | material-texture-optimization | simple vs heavy node-network cost | #30 |
| 12 | normal_vs_displacement | material-texture-optimization | flat/normal/displacement geometry+cost | #34 |
| 13 | light_bounces | render-optimization | ray bounce-path numbered concept | #43 |
| 14 | gpu_vs_cpu_render | render-optimization | device speed-tier concept | #48 |
| 15 | memory_progression | memory-management | memory fill curve + danger zones | #56 |
| 16 | optimization_pyramid | summary | 5-level priority pyramid (effort/impact) | #116 |

**DEFER rationale (109 wishlist items NOT built):** all pure Blender-UI panel screenshots (#2,3,7,8-lit,10-panel,13,19,21,24,25,29,31,36,39,42,45,47,48-panel,49,50,53,54,55,60,61,63,64,66,68,69,72&#8211;76,79&#8211;84,87,88,90,92,94&#8211;100,102,103,105,106,109,111,113,115 &#8230;) &#8212; not produced by this SVG pipeline; before/after render composites needing a real unoptimized scene (#9,20,23,28,33,38,40,46,89,104,107,108,110,112,114,118) &#8212; no source scene; reference-data grids already in the 6 live tables (#26-memory,27,41,44,45,46,52,57,77); conceptual diagrams already in the 4 live mermaid (#1,37,51,71); folder tree already in live `<pre>` (#65,part2-15); decorative/"nice to have" badges/banners/posters/roadmaps (#85,86,117,119,120,121,122,123,124,125,58,59,62,67,70,78,91,93,101,116-dup-check). Net: existing scaffolding + the 16 non-redundant concept SVGs fully cover the lesson; everything else is redundant, UI-capture, or scene-dependent.

**Post-integration TARGET invariants (assert after integration phase):**
- figure 16 / figcaption 16 / img 0 / inline svg 16 / aria-labelledby 16
- NO overlay bars (0 PNG)
- HOLD &#8212; (&#38;#8212;) 44 / U+2192 258
- U+2013 / U+00B7-literal / color="#222" / #667eea / #764ba2 / linear-gradient all 0
- section id 10/10; back lesson_44 1 / next lesson_46 1
- mermaid `class="mermaid"` 4; jsdelivr 1; table 6 / table-wrap 6; `<pre>` 1

**SVG plan-lock:** standalone root `color="#222"` KEEP during build / STRIP at integration; each svg `role="img"`+`aria-labelledby`&#8594;`<title>`/`<desc>`; role-hex palette only; banned-literal check + cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) verify before every `write_file`; files land in `images/lesson_45_NN_slug.svg` byte-exact LF; md5 round-trip + `get_file_info` after each.

## §SVG build log

- **#01 optimization_workflow_loop** [understanding-performance] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_01_optimization_workflow_loop.svg` / **3,745 B / md5 `78120ab5ca57928d7af2ffe0ca622954` / LF** (round-trip + get_file_info verified). PILOT.

- **#02 performance_targets** [understanding-performance] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_02_performance_targets.svg` / **3,443 B / md5 `d16e0ffdf41e6ac51689a56182640ab4` / LF** (round-trip + get_file_info verified).
- **#03 shading_modes_speed** [viewport-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_03_shading_modes_speed.svg` / **3,890 B / md5 `be1f3d6448d680bcc68f03e8c012e166` / LF** (round-trip + get_file_info verified).
- **#04 simplify_viewport_render** [viewport-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_04_simplify_viewport_render.svg` / **2,901 B / md5 `081de9d55718dfa4ad622c0911756054` / LF** (round-trip + get_file_info verified).

- **#05 instance_vs_duplicate** [viewport-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_05_instance_vs_duplicate.svg` / **3,996 B / md5 `9ba54ef6729a518e588cc1c2f47571de` / LF** (round-trip + get_file_info verified).
- **#06 polygon_budget** [geometry-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_06_polygon_budget.svg` / **2,343 B / md5 `83f5eaf2083d0d026260e9f9073cbee5` / LF** (round-trip + get_file_info verified).
- **#07 subdivision_multiplier** [geometry-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_07_subdivision_multiplier.svg` / **2,373 B / md5 `1f33bdcc265bc3ef75a08f1bc3d9e931` / LF** (round-trip + get_file_info verified).

- **#08 topology_quad_tri_ngon** [geometry-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_08_topology_quad_tri_ngon.svg` / **2,342 B / md5 `456c4a4b3f37839358bc6d0c049efc36` / LF** (round-trip + get_file_info verified).
- **#09 lod_levels** [geometry-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_09_lod_levels.svg` / **2,787 B / md5 `96a205b8d78c76020752d718f96f3b3e` / LF** (round-trip + get_file_info verified).
- **#10 texture_resolution_distance** [material-texture-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_10_texture_resolution_distance.svg` / **2,679 B / md5 `6dbaa528e84458e93bc2a78a323323f7` / LF** (round-trip + get_file_info verified).
- **#11 shader_complexity** [material-texture-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_11_shader_complexity.svg` / **3,385 B / md5 `8727513cac19b77c8b09ff225c045625` / LF** (round-trip + get_file_info verified).
- **#12 normal_vs_displacement** [material-texture-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_12_normal_vs_displacement.svg` / **3,260 B / md5 `4f84ecd070e3733365dc04d3780a41bc` / LF** (round-trip + get_file_info verified).
- **#13 light_bounces** [render-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_13_light_bounces.svg` / **2,362 B / md5 `55689f90846759733aca635654056611` / LF** (round-trip + get_file_info verified).
- **#14 gpu_vs_cpu_render** [render-optimization] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_14_gpu_vs_cpu_render.svg` / **2,049 B / md5 `4f95ba8116f1c15b3ea121d99b1da4b6` / LF** (round-trip + get_file_info verified).
- **#15 memory_progression** [memory-management] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_15_memory_progression.svg` / **2,389 B / md5 `8becce9d49e201fe9ba7b7cef2181073` / LF** (round-trip + get_file_info verified).
- **#16 optimization_pyramid** [summary] &#8212; built + banned-literal clean + cairosvg dark+light verified + EYE-CONFIRMED + written byte-exact. `images/lesson_45_16_optimization_pyramid.svg` / **2,865 B / md5 `ae1ec9c7b498fa1f485a3e61c373ecac` / LF** (round-trip + get_file_info verified).

**16/16 SVG COMPLETE.** All built + EYE-CONFIRMED + logged. 0 PNG (roster verdict). LIVE HTML UNTOUCHED **277,920 B / md5 `8b98849044e3309e47befd3cf0bbbbd6` / LF**.

## §Integration COMPLETE (2026-07-04)

**16/16 inline SVG integrated + HARD-ASSERTED PASS.** LIVE HTML now **339,586 B / md5 `7b8840ea2697676e7c35b1ab95bf2ce6` / LF-only** (baseline 277,920 &#8594; 339,586 = +61,666 B). Write path = same as Phase 0: transform applied Claude-side + hard-asserted, reproduced identically SERVER-SIDE on WSL disk via Blender bridge (read original + 16 SVGs from disk &#8594; dry-run md5 byte-exact to Claude-side `7b8840ea…` BEFORE commit &#8594; temp sidecar verify &#8594; binary LF write over live &#8594; temp removed &#8594; `get_file_info`==339,586 &#8594; fresh independent Filesystem re-read re-assert ALL PASS).

**Integration transform:** each SVG root ` color="#222"` STRIPPED (16/16, single-occurrence each); wrapped in `<figure>` + `<figcaption>` (figcaption text = each SVG's `<title>`); inserted immediately after its unique `<h3>` subsection anchor (bottom-up). h3 anchor map: 01&#8594;The Optimization Workflow / 02&#8594;Performance Goals and Expectations / 03&#8594;Viewport Shading Modes / 04&#8594;Simplification and Level of Detail / 05&#8594;Geometry Instancing and Linked Duplicates / 06&#8594;Understanding Polygon Budgets / 07&#8594;Efficient Modeling Practices / 08&#8594;Mesh Cleanup and Optimization / 09&#8594;Level of Detail (LOD) Systems / 10&#8594;Texture Resolution Optimization / 11&#8594;Shader Complexity Optimization / 12&#8594;Normal Maps vs Displacement / 13&#8594;Light Bounce Optimization / 14&#8594;Render Device and Tile Optimization / 15&#8594;Understanding Memory Types / 16&#8594;The Optimization Hierarchy.

**POST-INTEGRATION INVARIANTS (all re-asserted on fresh disk re-read &#8212; ALL PASS):** figure 16 / figcaption 16 / img 0 / inline svg 16 / aria-labelledby 16; color="#222" 0 / #667eea 0 / #764ba2 0 / linear-gradient 0 / U+2013 0 / U+00B7 0; **U+2014 literal 0**; **&#8212; entity 53** (body-prose 44 HELD + 9 carried inside SVG figure content #04/#05/#06/#14/#15/#16 &#8212; parallels L44's body-prose-vs-figure split; the real invariant U+2014-literal-0 holds); U+2192 literal 258; section id 10/10; back lesson_44 1 / next lesson_46 1; mermaid `class="mermaid"` 4; jsdelivr 1; table 6 / table-wrap 6; `<pre>` 1.

## §Next phase

**BROWSER QA (own fresh chat).** Copy live HTML (339,586 B / md5 `7b8840ea2697676e7c35b1ab95bf2ce6`) Claude-side byte-exact; serve local http; local mermaid@10.9.6 ESM (CDN blocked); Chromium 1440x900 + 390x844. 0 PNG &#8594; no image staging needed. Re-assert integration invariants on the fresh render copy before serving; verify all 16 in-figure inline SVG render (non-zero bbox) + 4 mermaid render + 0 pageerrors + h-overflow 0 both widths. External site css/js 404s expected sandbox-only.

## §BROWSER QA (2026-07-04) — VERDICT: PASS

QA harness = real Chromium (Playwright chromium-1194 at `/opt/pw-browsers`, `--no-sandbox`) over local http. Live file copied Claude-side **byte-exact** (md5 `7b8840ea2697676e7c35b1ab95bf2ce6` + 339,586 B + 0 CR all match disk). All 25 post-integration invariants re-asserted on the fresh copy BEFORE serving — all PASS (figure 16 / figcaption 16 / img 0 / inline svg 16 / aria-labelledby 16; color="#222" 0 / #667eea 0 / #764ba2 0 / linear-gradient 0 / U+2013 0 / U+00B7 0 / U+2014-literal 0; &#8212; entity 53; U+2192 258; section id 10/10; back lesson_44 1 / next lesson_46 1; mermaid 4; jsdelivr 1; table 6 / table-wrap 6; `<pre>` 1). QA-only render copy rewrote the one jsdelivr mermaid import to LOCAL mermaid@10.9.6 ESM (`vendor/mermaid-dist/`, full 359-file dist from npm tarball, CDN blocked) — single-line change, live import line NOT touched. No image staging (0 PNG). Tested desktop 1440x900 + mobile 390x844.

**RESULTS (both widths):** 16/16 `<figure>` + 16/16 `<figcaption>`; 16 in-figure inline `<svg>` render (non-zero bbox, 0 zero-size); 0 `<img>`; 4 `.mermaid` → 4 rendered `<svg>` (local ESM, no parse errors); 0 pageerrors. Desktop h-overflow 0 (body 1424≤1440). Only console errors = the 3 expected site-scaffold 404s (`styles/main.css`, `js/course-enhancements.js`, `js/clipboard.js`), resolve on Ray's real server.

**MOBILE TABLE FINDING (sandbox-only, not a live defect):** at 390px one wide table [render-optimization] produced raw h-overflow 50 (scrollW 440). Root cause: unlike L43/L44, L45's 6 `.table-wrap` divs carry **NO inline `overflow-x:auto`** — mobile table clamping depends entirely on the site's `styles/main.css` (which 404s in the sandbox). Verified: injecting the real `.table-wrap{overflow-x:auto}` rule drops mobile h-overflow to 0. All 6 tables are properly `.table-wrap`-wrapped (0 bare). On Ray's real server (main.css served) the overflow does not occur. No in-HTML fallback exists, so this is a live dependency to be aware of, but not a QA failure.

**VERDICT: PASS** — integration invariants intact, all 16 SVG + 4 mermaid render, layout sound desktop+mobile (mobile table clamps via main.css on the real server). No live edit made. **L45 pipeline COMPLETE end-to-end (Phase 0 → roster triage → SVG 16 → integration → browser QA PASS). NEXT = L46, own fresh chat, Phase 0.**
