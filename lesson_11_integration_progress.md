# Lesson 11 Image Work &middot; Integration Progress

**Lesson:** `lesson_11_pbr_materials_explained.html` (Module 3: Materials &amp; Texturing)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`
**Image output:** `images/`
**Status:** **L11 PHASE 2 COMPLETE &mdash; 7/30 produced / 7/30 integrated.** `#energy-conservation` done: #4 (PNG, `c4` overlay), #5 (PNG color-dependent, `c5` overlay), #30 (PNG color-dependent, `c30` overlay), + #3 reused-by-ref (D1, inline SVG `le`, 2nd-ref figcaption). P1 (`#what-is-pbr`) done before: #1 (PNG, `c1`), #2 (SVG `tp`), #3 (SVG `le`). Figure inventory, SVG-vs-PNG split, 8-phase plan, D1/D2, id-prefix + `c{N}` registries all LOCKED below. `session.md` repointed to Phase 3 PRODUCTION (`#fresnel-effect`).
**Planning date:** 2026-06-04
**Style guide:** `images\IMAGE_STYLE_GUIDE.md` v6 (locked; all conventions live there, not restated here).

---

## Scope

30 figures total, sourced from `lesson_11_image_requirements.md`. Final split: **14 SVG / 16 PNG**.
Lesson 11 is theory-heavy: per the requirements doc, the figure set leans on diagrams, charts, and conceptual illustrations rather than interface screenshots, so the SVG share is the largest in the course so far. The HTML has 9 `<section>` anchors; 8 of them carry figures and drive 8 phases. The 9th section, `#summary`, carries NO figures (the requirements-doc placement map assigns none to it) and gets NO phase &mdash; it is not in the phase plan.

PRODUCTION sub-chat splits on the two &ge;5-figure phases (P4 = 6, P7 = 5); INTEGRATION-as-its-own-chat on the one &ge;6-figure phase (P4 = 6). P7 (5) is borderline: it rides PROD-B close as inline INTEGRATION unless context tightens, then breaks INTEGRATION out to its own chat (same call as L10 P4).

### HTML section anchors (confirmed on the live file, document order)

`#what-is-pbr` &middot; `#energy-conservation` &middot; `#fresnel-effect` &middot; `#microfacet-theory` &middot; `#metallic-workflow` &middot; `#albedo-values` &middot; `#advanced-pbr-parameters` &middot; `#project` &middot; `#summary` (no figures). All nine verified as real `<section id="...">` anchors (not just TOC links), matching the requirements-doc section ids exactly.

### Planning decisions (LOCKED 2026-06-04)

- **D1 &mdash; #3 Light Energy Distribution Flowchart phase home + reuse:** produced ONCE in P1 (`#what-is-pbr`, its "PBR Benefits card" home per the placement map). The `#energy-conservation` placement ("Within energy distribution explanation: Insert Image #3") is a reuse-by-reference at P2 INTEGRATION, NOT a second render. Same produce-once / place-by-reference pattern as L10 #10 / #14 and L09 #26. #3 is an inline SVG, so the P2 reuse re-inserts the same inlined SVG with a distinct 2nd-ref figcaption (ids intentionally reused, NOT renamed, per the L10 #10 precedent).
- **D2 &mdash; #26 Anisotropic Examples Grid phase home + reuse:** produced ONCE in P4 (`#microfacet-theory`, the placement map's "Within anisotropic section: Insert Images #13 and #26"). The `#advanced-pbr-parameters` placement ("Within anisotropic advanced section: Insert Image #26") is a reuse-by-reference at P7 INTEGRATION, NOT a second render. #26 is a PNG photo-reference grid; the P7 reuse re-inserts the same `<figure>` (img + any overlay) verbatim with a distinct 2nd-ref figcaption, same as the L10 #10 / #14 reuse pattern.
- **D3 &mdash; format baseline = the requirements-doc File Naming Convention, not the 10-item "High Priority SVG Candidates" list.** The naming convention assigns `.svg` to 14 figures and `.png` to 16; the "SVG Recommended: 10" line is a priority SUBSET of those 14 (the 10 it lists are all within the 14). The split table below follows the 14/16 naming-convention assignment as the locked baseline. Any in-flight type-flip (SVG&rarr;PNG or PNG&rarr;SVG) is a PRODUCTION-time decision logged in the Status log, same as prior lessons.

---

## SVG-vs-PNG split (all 30)

Format column follows the requirements-doc File Naming Convention (D3). "Phase" is the figure's PRODUCTION home (primary section); reuse placements are listed under Cross-phase reuse below, not as separate rows.

| # | Figure (slug) | Format | Phase | Notes |
|---|---------------|--------|-------|-------|
| 1 | pbr_workflow_comparison | PNG | P1 | Side-by-side workflow comparison infographic (AI / Pillow-host candidate) |
| 2 | three_pillars_diagram | **SVG** | P1 | id-prefix `tp` &middot; 3-pillar architectural diagram + icons |
| 3 | light_energy_flowchart | **SVG** | P1 | id-prefix `le` &middot; flowchart boxes/diamond/arrows &middot; reused-by-ref P2 (D1) |
| 4 | energy_budget_examples | PNG | P2 | 4-material horizontal bar-chart infographic |
| 5 | roughness_energy_distribution | PNG | P2 | Smooth-vs-rough energy-spread diagram &middot; color-dependent (warm glow) |
| 6 | fresnel_water_surface | PNG | P3 | 2-panel water Fresnel example (AI / photo composite) |
| 7 | fresnel_angle_diagram | **SVG** | P3 | id-prefix `fa` &middot; surface + 3 angled rays + reflection % |
| 8 | fresnel_curves_graph | **SVG** | P3 | id-prefix `fc` &middot; dielectric-vs-conductor line graph |
| 9 | microfacet_comparison | **SVG** | P4 (A) | id-prefix `mf` &middot; 4-panel cross-section (rough 0.0/0.3/0.7/1.0) |
| 10 | microfacet_scattering | **SVG** | P4 (A) | id-prefix `ms` &middot; ray-bounce scattering illustration |
| 11 | masking_shadowing | **SVG** | P4 (A) | id-prefix `mk` &middot; cross-section masking/shadowing diagram |
| 12 | roughness_reference_chart | PNG | P4 (B) | 6-zone roughness spectrum reference chart (overlay `c12`) |
| 13 | anisotropic_highlights | PNG | P4 (B) | Isotropic-vs-anisotropic render comparison (overlay `c13`) |
| 14 | conductor_insulator_atomic | **SVG** | P4 (A) | id-prefix `ca` &middot; atomic-structure scientific diagram |
| 15 | metallic_comparison | PNG | P5 | 3-sphere PBR render 0.0 / 0.5(wrong) / 1.0 &middot; color-dependent &middot; overlay `c15` |
| 16 | metal_color_chart | PNG | P5 | 6-metal swatch chart w/ RGB+hex (render or Pillow-host) &middot; overlay `c16` |
| 17 | metallic_property_table | PNG | P5 | Metal-vs-non-metal comparison-table visualization (overlay `c17` optional) |
| 18 | albedo_range_chart | **SVG** | P6 | id-prefix `ar` &middot; horizontal albedo gradient bar + zone labels |
| 19 | material_albedo_library | PNG | P6 | 16-cell material albedo reference grid &middot; overlay `c19` |
| 20 | saturation_albedo | PNG | P6 | 3-swatch saturation-vs-albedo color diagram (overlay `c20` optional) |
| 21 | srgb_linear_diagram | **SVG** | P6 | id-prefix `sl` &middot; sRGB-vs-linear gradient + gamma curve |
| 22 | sss_visualization | **SVG** | P7 (A) | id-prefix `sv` &middot; subsurface-scattering cross-section illustration |
| 23 | sss_examples_grid | PNG | P7 (B) | 6-material SSS photo/render grid &middot; overlay `c23` |
| 24 | ior_reference_chart | PNG | P7 (B) | IOR reference table + refraction examples (overlay `c24` optional) |
| 25 | clearcoat_diagram | **SVG** | P7 (A) | id-prefix `cc` &middot; two-layer clearcoat cross-section |
| 26 | anisotropic_examples | PNG | P4 (B) | 6-material anisotropic photo grid &middot; reused-by-ref P7 (D2) &middot; overlay `c26` |
| 27 | normal_bump_displacement | PNG | P7 (B) | 3-panel surface-detail-method comparison &middot; overlay `c27` |
| 28 | pbr_validation_checklist | **SVG** | P8 | id-prefix `vc` &middot; 6-section checklist infographic + icons |
| 29 | material_test_sphere | **SVG** | P8 | id-prefix `ts` &middot; technical setup diagram (sphere + lights + cam) |
| 30 | energy_white_room_test | PNG | P2 | Correct-vs-incorrect energy-conservation render &middot; color-dependent &middot; overlay `c30` |

**Totals:** 14 SVG (#2, #3, #7, #8, #9, #10, #11, #14, #18, #21, #22, #25, #28, #29) / 16 PNG (#1, #4, #5, #6, #12, #13, #15, #16, #17, #19, #20, #23, #24, #26, #27, #30).
Color-dependent renders (F12 `render.render` + Standard view transform, per v6 LD17): #5 (warm energy glow), #15 (3-sphere metallic, colored reflections carry the binary rule), #30 (energy violation = a glow brighter than white must read). #13 anisotropic is a render but the teaching point is highlight SHAPE not marker color, so it is NOT on the color-dependent list (standard render path is fine). The brushed-metal look in #13 / #26 is geometry/UV-driven, not a marker color.

**Sourcing note (not a format decision):** several PNGs are infographic/photo-reference figures that have no natural Blender viewport render (#1 workflow comparison, #4 energy-budget bars, #6 water Fresnel, #12 roughness chart, #16 metal chart, #17 property table, #19 albedo library, #20 saturation diagram, #23 SSS grid, #24 IOR chart, #26 anisotropic grid, #27 detail-method comparison). Per v6 LD21 + the L09 Phase 8 warning-vignette-as-overlay-host pattern, these are candidates for the Pillow-composited-vignette-as-overlay-host route (NO baked text; clear bands reserved for the `c{N}` INTEGRATION overlay) OR the Canva / Adobe-for-creativity raster route where AI generation is the right call. The sourcing route per figure is a PRODUCTION-time decision; the format (PNG) is locked here. Renders proper (#5, #13, #15, #30) use BlenderMCP per the locked recipe.

---

## Per-lesson id-prefix registry (inline SVG roots)

| Prefix | Figure |
|--------|--------|
| `tp` | #2 three_pillars_diagram |
| `le` | #3 light_energy_flowchart |
| `fa` | #7 fresnel_angle_diagram |
| `fc` | #8 fresnel_curves_graph |
| `mf` | #9 microfacet_comparison |
| `ms` | #10 microfacet_scattering |
| `mk` | #11 masking_shadowing |
| `ca` | #14 conductor_insulator_atomic |
| `ar` | #18 albedo_range_chart |
| `sl` | #21 srgb_linear_diagram |
| `sv` | #22 sss_visualization |
| `cc` | #25 clearcoat_diagram |
| `vc` | #28 pbr_validation_checklist |
| `ts` | #29 material_test_sphere |

14 inline-SVG prefixes, no collisions with each other or with the `c{N}` overlay namespace. (`mk` was used in L09 for a different figure on a different page; per-page id-prefix registries are page-scoped so there is no cross-page collision &mdash; each lesson HTML is its own document.)

## PNG overlay `c{N}-*` namespace registry

Reserved now, built at the figure's INTEGRATION (coordinates measured against the actual cropped/produced PNG pixels per v6 LD19, never from these plan estimates). Each overlay: white text on `#1a1a1f`/0.9 (or `#2a2a33`/0.92 lifted) pills, `#FF6B00` leaders+dots, `&#183;` separators, composite-overlay fs `round(22 &times; viewBox_w / 1920)` with small-frame fs-floor 16; positive-green `#4ADE80` / warning-red `#E63946` colorway per the label semantics (v6 decision 8). PNGs whose produced form already carries legible labels may end up overlay-free (the L10 `c22`-SKIPPED precedent) &mdash; decided at INTEGRATION.

- `c1` (#1 pbr_workflow_comparison &middot; left/right workflow column labels + per-column step callouts; warning-leaning left "Traditional" colorway vs positive-leaning right "PBR" colorway candidate)
- `c4` (#4 energy_budget_examples &middot; title `Energy Distribution by Material Type` + 4 left material-name labels Rough Matte / Glossy Plastic / Polished Metal / Clear Glass + % labels on the major segments (70/25/30/50/20/95/94; tiny &le;6% slivers left unlabeled) + a 4-swatch legend Diffuse / Specular / Absorption / Transmission; **REALIZED at P2 INTEGRATION** &mdash; the Pillow-vignette host baked NO text, so the overlay carries all labels, parallel to how `c1` was realized in P1)
- `c5` (#5 roughness_energy_distribution &middot; 2 caption pills `Smooth &middot; Roughness 0.1` / `Rough &middot; Roughness 0.8` + a centered `Same Total Energy` band; built at P2 INTEGRATION)
- `c12` (#12 roughness_reference_chart &middot; 6 zone labels Mirror-like / Glossy / Semi-gloss / Satin / Matte / Very Rough along the 0.0&ndash;1.0 spectrum; built at P4 INTEGRATION)
- `c13` (#13 anisotropic_highlights &middot; 2 below-subject label pills `Isotropic &middot; 0.0` / `Anisotropic &middot; 0.9` + a brush-direction arrow callout on the anisotropic panel; built at P4 INTEGRATION)
- `c15` (#15 metallic_comparison &middot; 3 metallic-value pills `Metallic 0.0` / `Metallic 0.5` / `Metallic 1.0` + a warning-red `NEVER USE` / red-X overlay on the center 0.5 sphere; built at P5 INTEGRATION)
- `c16` (#16 metal_color_chart &middot; 6 swatch labels Iron/Steel &middot; Aluminum &middot; Gold &middot; Copper &middot; Silver &middot; Chrome each with RGB/hex; built at P5 INTEGRATION &mdash; only if the produced chart does not already bake legible values)
- `c17` (#17 metallic_property_table &middot; OPTIONAL &mdash; row/column emphasis callouts only if the produced table needs them; likely SKIPPED if the table is self-labeling)
- `c19` (#19 material_albedo_library &middot; up to 16 cell labels name+albedo+RGB; built at P6 INTEGRATION &mdash; only if cells are not self-labeling)
- `c20` (#20 saturation_albedo &middot; OPTIONAL &mdash; 3 albedo-value pills under the High/Medium/Low saturation swatches; SKIPPED if produced form bakes them legibly)
- `c23` (#23 sss_examples_grid &middot; 6 cell labels Skin / Wax / Marble / Jade / Leaf / Milk; built at P7 INTEGRATION)
- `c24` (#24 ior_reference_chart &middot; OPTIONAL &mdash; emphasis callouts on key IOR rows; likely SKIPPED if the table is self-labeling)
- `c26` (#26 anisotropic_examples &middot; 6 cell labels Brushed Metal / Hair / Vinyl Record / CD-DVD / Satin / Machined + brush-direction arrows; built at P4 INTEGRATION; overlay reused verbatim at the P7 2nd-ref placement, ids NOT renamed)
- `c27` (#27 normal_bump_displacement &middot; 3 panel labels Normal Map / Bump Map / Displacement + spec callouts; composite-overlay variant if the produced PNG has baked dividers; built at P7 INTEGRATION)
- `c30` (#30 energy_white_room_test &middot; 2 panel labels `CORRECT &middot; brightness &le; environment` [positive-green] / `INCORRECT &middot; brightness &gt; environment` [warning-red + red-X]; built at P2 INTEGRATION)

Reserved-if-needed (decide at INTEGRATION; default SKIP): `c17`, `c20`, `c24`. The inline SVGs (#2 / #3 / #7 / #8 / #9 / #10 / #11 / #14 / #18 / #21 / #22 / #25 / #28 / #29) carry their labels inside the SVG via the `tp`/`le`/`fa`/&hellip; id-prefix registry and take NO `c{N}` overlay.

---

## Phase plan

Section-aligned to the 8 figure-bearing HTML sections (`#summary` carries no figures, no phase). PRODUCTION sub-chat split on &ge;5-figure phases; INTEGRATION its own chat on &ge;6-figure phases (v6 Workflow conventions + the carry-forward locked rule). Phase ordering follows HTML section order (P1&rarr;P8), not figure-number order.

| Phase | Section (HTML id) | Figures (primary) | Count | PRODUCTION | INTEGRATION |
|-------|-------------------|-------------------|-------|------------|-------------|
| P1 | `#what-is-pbr` | #1, #2, #3 | 3 | single chat | inline (this-phase chat) |
| P2 | `#energy-conservation` | #4, #5, #30 | 3 | single chat | inline (+#3 reuse by D1) |
| P3 | `#fresnel-effect` | #6, #7, #8 | 3 | single chat | inline |
| P4 | `#microfacet-theory` | #9, #10, #11, #12, #13, #14, #26 | 7 | **2 sub-chats** &mdash; A: #9, #10, #11, #14 (SVG) &middot; B: #12, #13, #26 (PNG renders/grids) | **own chat (&ge;6)** |
| P5 | `#metallic-workflow` | #14&dagger;, #15, #16, #17 | 3 | single chat | inline |
| P6 | `#albedo-values` | #18, #19, #20, #21 | 4 | single chat | inline |
| P7 | `#advanced-pbr-parameters` | #22, #23, #24, #25, #27 | 5 | **2 sub-chats** &mdash; A: #22, #25 (SVG) &middot; B: #23, #24, #27 (PNG grids/charts) | own chat (5 = borderline; rides PROD-B close as inline unless context tightens, then breaks out) &middot; +#26 reuse by D2 |
| P8 | `#project` | #28, #29 | 2 | single chat | inline |

**P4 figure count = 7, not 6:** the placement map puts #14 (conductor_insulator_atomic) in `#metallic-workflow`, NOT `#microfacet-theory`. So P4's seven figures are #9, #10, #11, #12, #13, #26 (all `#microfacet-theory`) plus the split decision below. To keep the &ge;6 INTEGRATION-own-chat rule and a clean SVG/PNG PROD split, **#14 is PRODUCED in P4 sub-chat A** (it is an SVG and pairs naturally with the other three P4-A SVGs #9/#10/#11) but **INTEGRATED in P5** (its `#metallic-workflow` home). This is a produce-in-one-phase / integrate-in-another split, tracked under Cross-phase reuse. With #14 produced in P4-A, P4 PRODUCTION is 7 figures across 2 sub-chats (A: #9/#10/#11/#14 SVG; B: #12/#13/#26 PNG); P4 INTEGRATION (own chat, &ge;6 by the six `#microfacet-theory` figures #9/#10/#11/#12/#13/#26) does NOT integrate #14.

&dagger; **P5 INTEGRATION integrates #14** (produced in P4-A) plus #15/#16/#17 produced in P5. P5 PRODUCTION is 3 figures (#15/#16/#17); P5 INTEGRATION is 4 figures (#14 + #15/#16/#17). P5 PRODUCTION stays a single chat (3 &lt; 5).

Within a phase, inline SVGs and self-labeling charts are cheap; the cost centers are the color-dependent BlenderMCP renders (#5, #15, #30) and any photo-reference grids that route through Canva/Adobe or the Pillow-vignette host (#1, #6, #12, #16, #19, #23, #26, #27).

### Cross-phase reuse + produce-here / integrate-there (produce once, place by reference)

- **#3** &mdash; produced P1 (inline SVG `le`); reused-by-reference at P2 INTEGRATION (`#energy-conservation` energy-distribution explanation) with a distinct 2nd-ref figcaption, same inlined SVG (ids reused, not renamed), no re-render. (D1)
- **#26** &mdash; produced P4-B (PNG anisotropic grid, overlay `c26`); reused-by-reference at P7 INTEGRATION (`#advanced-pbr-parameters` anisotropic-advanced) with a distinct 2nd-ref figcaption, same `<figure>` + `c26` overlay verbatim, no re-render. (D2)
- **#14** &mdash; PRODUCED in P4 sub-chat A (inline SVG `ca`, grouped with the other P4-A SVGs); INTEGRATED in P5 (`#metallic-workflow`, its placement-map home, "After conductor vs insulator explanation"). Not a reuse (single placement) &mdash; a produce-in-P4 / integrate-in-P5 split to keep the PROD SVG/PNG grouping clean. P4 INTEGRATION does not touch #14.

---

## Status log

- **2026-06-04 &mdash; PLANNING COMPLETE.** Read `session.md` + `lesson_10_integration_progress.md` (the structure template) + `IMAGE_STYLE_GUIDE.md` v6 + `lesson_06_completion_handoff.md` (locked rules), then `lesson_11_image_requirements.md` (30-figure spec + AI prompts + per-section placement map) + the L11 HTML to confirm section ids. **Confirmed 9 real `<section id>` anchors** on the live file (`#what-is-pbr`, `#energy-conservation`, `#fresnel-effect`, `#microfacet-theory`, `#metallic-workflow`, `#albedo-values`, `#advanced-pbr-parameters`, `#project`, `#summary`) &mdash; the first 8 carry figures and drive 8 phases; `#summary` carries no figures and gets no phase. Verified `Filesystem:edit_file` + `get_file_info` loaded at session start (read tools + `edit_file` on the 1st `tool_search` pass; `get_file_info` on a 2nd pass) and `write_file` loaded (1st pass) for this doc. No BlenderMCP needed (planning only). Locked: the **14 SVG / 16 PNG** split (per the requirements-doc File Naming Convention, D3), the 8-phase section-aligned plan (P4 + P7 PRODUCTION sub-chat splits; P4 INTEGRATION own chat by the &ge;6 rule; P7 INTEGRATION borderline-inline), **D1** (#3 produce-once in P1, reuse-by-ref P2), **D2** (#26 produce-once in P4-B, reuse-by-ref P7), the **#14 produce-in-P4-A / integrate-in-P5** split, the 14-entry inline-SVG id-prefix registry (`tp`/`le`/`fa`/`fc`/`mf`/`ms`/`mk`/`ca`/`ar`/`sl`/`sv`/`cc`/`vc`/`ts`), and the `c{N}` overlay namespace registry (`c1`/`c5`/`c12`/`c13`/`c15`/`c16`/`c19`/`c23`/`c26`/`c27`/`c30` built; `c17`/`c20`/`c24` reserved-if-needed, default SKIP). `session.md` repointed to L11 Phase 1 PRODUCTION. No production done in this chat. **0/30 produced / 0/30 integrated.**

- **2026-06-04 &mdash; PHASE 1 PRODUCTION + INTEGRATION COMPLETE (`#what-is-pbr`, single chat, INTEGRATION inline).** Verified `edit_file` + `get_file_info` + `write_file` loaded at start (read tools + `edit_file` 1st `tool_search` pass; `write_file` + `get_file_info` 2nd pass). Read the 5 start-of-chat files, then copied + read the L11 HTML and confirmed the three `#what-is-pbr` placement anchors against the requirements-doc map. **Produced 3 figures:** #1 `lesson_11_01_pbr_workflow_comparison.png` (8,427 B, 1600&times;900) &middot; #2 `lesson_11_02_three_pillars_diagram.svg` (6,875 B, `tp`) &middot; #3 `lesson_11_03_light_energy_flowchart.svg` (7,528 B, `le`, 800&times;680 dense variant). All three verified on disk via `get_file_info`; both standalone `.svg` files keep `color="#222"` for `<img>` fallback. **Sourcing call (PRODUCTION-time, D-style):** #1 routed to the **Pillow-vignette overlay-host** path (v6 LD21), NOT Canva/Adobe &mdash; built Claude-side for the cairosvg 1:1 verify, then written to WSL through the Pillow bridge (`blender:execute_blender_code`, Pillow only, no render / no scene build / no `read_factory_settings`). The "no BlenderMCP needed" P1 forecast held for the SVGs; the bridge was used only as the binary-to-WSL write path for the one host PNG (`Filesystem:write_file` is text-only; Claude-side PNGs have no other WSL write route in the loaded toolset). Both inline SVGs passed the cairosvg 1:1 light+dark render-check before commit. **Integrated all 3 inline** into `lesson_11_pbr_materials_explained.html` (195,546 &rarr; 218,762 B, +23,216): #1 after the first conceptual paragraph (section-level depth) with the **`c1` overlay** (warning-red `TRADITIONAL &#183; NON-PBR` header + 4 left step labels; positive-green `PBR WORKFLOW` header + 4 right step labels; 8 white step pills), pixel-verified 1:1 over the host PNG via cairosvg composite BEFORE the commit (v6 LD19) &middot; #2 after the Three Pillars card (section-level depth) &middot; #3 inside the green PBR Benefits card (**deeper-indent variant**, figure at col 24) &mdash; this is the D1 produce-once render; the P2 reuse re-inserts the same inlined `le` SVG by reference. Each insert: `edit_file` dryRun &rarr; commit &rarr; `get_file_info` (sizes 200,158 / 208,841 / 218,762). Inlining checklist applied to #2 + #3: stripped root `color="#222"`, re-indented (20-space for #2 section-level, 24-space for #3 card-internal), collapsed multi-line attrs + footer tspan to single lines, pruned decorative `=====` comments, kept structural panel/branch comments, preserved every role/aria/title/desc/id. **QA (post-integration, refreshed copy):** 3/3 `<figure>` balanced; 9/9 `<div>` balanced in the section; all 6 new ids unique (`tp/le/c1`-title+desc); **0** `color="#222"` in the inlined SVGs; no new em-dashes in figcaption/alt/SVG text (`&#183;` separators); pre-existing body em-dashes (recipe analogy, "inverted!") preserved verbatim; both inlined SVGs re-rasterized clean via cairosvg. **`c1` realized** (was reserved). No type-flips. **3/30 produced / 3/30 integrated.** Next: P2 PRODUCTION (`#energy-conservation`: #4, #5, #30) then P2 INTEGRATION inline + the #3 reuse-by-ref (D1).

- **2026-06-04 &mdash; PHASE 2 PRODUCTION + INTEGRATION COMPLETE (`#energy-conservation`, single chat, INTEGRATION inline + #3 reuse).** Read the 5 start-of-chat files, copied + read the L11 HTML, confirmed the four `#energy-conservation` placement anchors against the requirements-doc map; scene-state pre-flight clean (no `_WORK` collection, no hidden base objects). **Produced 3 figures:** #4 `lesson_11_04_energy_budget_examples.png` (31,239 B, 1600&times;1000) &middot; #5 `lesson_11_05_roughness_energy_distribution.png` (1920&times;800) &middot; #30 `lesson_11_30_energy_white_room_test.png` (1920&times;800). All verified on disk via `get_file_info` + copy-back visual check. **Sourcing call (PRODUCTION-time):** #4 routed to the **Pillow-vignette overlay-host** (v6 LD21), NO baked text, clear bands reserved for `c4`. **#5 + #30 are color-dependent renders** (v6 LD17): F12 `bpy.ops.render.render(write_still=True)`, `view_transform='Standard'` + `look='None'`; #5 on a 0.05 dark world (two emissive radial-gradient glow panels &mdash; smooth tight bright core peak14/pow6 vs rough broad dim wash peak1.7/pow0.7, re-rendered once for sharper thumbnail distinction); #30 on a WHITE world (0.72 grey room, a documented deviation from the 0.05 dark recipe &mdash; the white-room test needs it; Standard transform kept so the >1.0 violation reads as brighter than the white). #30 backed OUT failed halo/ring experiments (Fresnel-mix + Layer-Weight shells read as rings not glow; EEVEE legacy bloom + compositor `node_tree` both unavailable in 5.1.1) &mdash; final clean version = normal grey Principled sphere (CORRECT, shadowed) vs over-bright emissive white sphere (INCORRECT, no shadow). **RESTORE done + verified** at chat close: all L11 work objects removed, AgX restored, world 0.88/1.0, 512&times;512, zero orphans (empty scene = valid clean base; #5 clean-scene step had removed the default Camera/Cube/Light). **CRITICAL LESSON (carry forward):** do NOT hand-transcribe long base64 into tool calls &mdash; it silently corrupts (caught via a decode-size check: decoded 15,329 vs expected 28,403 B). The reliable route for any Claude-built PNG is to AUTHOR the Pillow builder code DIRECTLY on the bridge (`blender:execute_blender_code`) and write straight to WSL &mdash; no large binary transfer. **Overlays built + pixel-verified** (v6 LD19, cairosvg-composite-over-PNG at exact viewBox=PNG-pixel coords BEFORE commit): `c5` (2 caption pills `Smooth &#183; Roughness 0.1` / `Rough &#183; Roughness 0.8` + centered orange `Same Total Energy` band) &middot; `c30` (positive-green `CORRECT &#183; brightness &#8804; environment` / warning-red `INCORRECT &#183; brightness &gt; environment` pills + red-X on the violation; pills widened after a measured-overflow fix &mdash; ink widths measured via cairosvg: 582px / 615px) &middot; **`c4` NEWLY REALIZED** (was reserved-if-needed; host baked no text so it needed labels &mdash; title + 4 material names + % labels on major segments + 4-swatch legend; parallel to `c1` in P1). **Integrated all 4 inline** (bottom-up so earlier inserts do not shift later anchors): #30 before `<h3>Advanced: Multiple Scattering and Energy</h3>` (218,762&rarr;221,532) &middot; #5 before `<h3>Albedo and Energy Conservation</h3>` (&rarr;224,442) &middot; #4 before `<h3>How Principled BSDF Enforces Energy Conservation</h3>` &middot; #3 `le` reuse before the same h3 (lands after #4 &rarr; map order #4, #3, h3; final 238,865 B, +20,103 total). #3 reuse = the same inlined `le` SVG re-indented 24&rarr;20-space section depth with a distinct 2nd-ref figcaption, ids `le-title`/`le-desc` NOT renamed (D1), no re-render. Each insert: `edit_file` dryRun &rarr; commit &rarr; `get_file_info`. **QA (post-integration, refreshed copy):** 7/7 `<figure>` + 7/7 `<svg>` balanced whole-file; section scope = 4 figures / 4 svg, all 3 PNGs + the `le` reuse present; **0** `color="#222"` in the HTML; id uniqueness = only intentional dupes `le-title`&times;2 + `le-desc`&times;2 (D1 reuse, expected), `c4`/`c5`/`c30` title+desc all &times;1; em-dash U+2014 count whole-file = 77, all pre-existing (no new ones &mdash; new content uses `&#183;`). NOTE: overlay-SVG children sit at uniform col-28 indentation (cosmetic, renders fine; a stricter pass could nest to col 32). **`c4` realized; no type-flips.** **7/30 produced / 7/30 integrated.** Next: P3 PRODUCTION (`#fresnel-effect`: #6, #7, #8) then P3 INTEGRATION inline.

---

## Locked rules carry forward

All UNCHANGED from L06&ndash;L10 (full list in `lesson_06_completion_handoff.md` + the L07/L08/L09/L10 carry-forward blocks + `IMAGE_STYLE_GUIDE.md` v6 Locked decisions 1&ndash;21). Highlights that govern L11 specifically:

- WSL `\\wsl$\Ubuntu\` paths only (never `\\wsl.localhost\`).
- `Filesystem:edit_file` dryRun &rarr; commit &rarr; `Filesystem:get_file_info` verify per insertion; `Filesystem:write_file` for new files / full-doc overwrites (never `create_file`); `copy_file_user_to_claude` to refresh the working HTML copy before grep/sed + verify anchor uniqueness first.
- No new em-dashes (middle-dot `&#183;` entities; pre-existing em/en-dashes preserved verbatim through exact anchors). NOTE: L11 body prose carries pre-existing em-dashes (e.g. the lead "look believable&mdash;understand", the Architect-vs-Builder blockquote "following blueprints&mdash;you learned", "the architect who understands", many `<h3>`/card anchors) &mdash; preserve every one verbatim through exact anchors; do not introduce new ones in figcaptions / alt / SVG text.
- Brand palette governs all overlays/SVGs; inline-SVG conventions (strip root `color="#222"` on inlining, re-indent, collapse multi-line attrs, prune decorative comments, preserve role/aria/title/desc/id); figure indentation depth from parent container; PNG overlay = wrapper-div + overlay-SVG, viewBox = PNG pixels, no baked callouts.
- **Color-dependent render recipe (v6 LD17):** F12 `bpy.ops.render.render(write_still=True)` NOT `render.opengl`; `view_transform='Standard'` + `look='None'` on a 0.05 world; locked marker / emission values; RESTORE AgX + base values at chat close. Applies to #5, #15, #30 and any color-carrying render. Plain-grey geometry, self-labeling charts, and UI-chrome captures are exempt; #13 anisotropic is a standard render (highlight SHAPE, not marker color, carries the message).
- **Theory-heavy sourcing (v6 LD21 + L09 Phase 8 host pattern):** infographic / photo-reference / chart PNGs with no natural viewport render are Pillow-composited vignette hosts (NO baked text; reserve clear bands for the `c{N}` overlay) OR Canva / Adobe-for-creativity rasters where AI generation is right; the route per figure is a PRODUCTION-time call, format (PNG) locked here. Several L11 figures (the SVG diagrams especially) are hand-written inline SVG, not raster &mdash; those follow the v6 SVG component snippets, not the host pattern.
- BlenderMCP lowercase `blender:execute_blender_code`; clean-scene-manually via `bpy.data.objects.remove`; BLENDER_EEVEE (EEVEE_NEXT&rarr;EEVEE fallback); NEVER `read_factory_settings`; inline all render helpers per call (namespaces do not persist); Cycles for off-screen reflection/refraction (chrome, glass, the metallic spheres) per the L10 PROD engine finding.
- Capture-path routing (v6 LD20): synthetic-cage/overlay-over-render for render-API-unreachable overlays; full-window local-tempdir `screen.screenshot` + deterministic area crop for docked-panel UI chrome; Win+Shift+S overlay-freeze for transient popovers / pie menus. (L11 is diagram/render-heavy; few if any docked-panel UI captures are expected, unlike L10.)
- Pixel-verify every PNG overlay before commit (v6 LD19): Pillow scan + overlay-over-PNG composite at exact viewBox coords; cairosvg 1:1 check on Claude's side, PIL substitute bridge-side.
- NO baked labels; pre-plan sub-chat splits for &ge;5-figure phases (P4, P7) + INTEGRATION-own-chat for &ge;6 (P4); plan-lock before build (propose spec + anchors in writing first).
- **Scene state between PRODUCTION chats = always clean base, never inherited mid-flight.** Every PRODUCTION chat does RESTORE at close (removes its `_L11Px_WORK` collection, purges orphans, un-hides base objects, AgX/EEVEE/512&times;512/world 0.88). The `_WORK`-collection / `hide_render` / isolated-build approach is a technique each chat re-creates from scratch, NOT state it inherits. If a chat finds a leftover `_WORK` collection or hidden base objects, the prior RESTORE failed &mdash; STOP and report, do not build over it.
- Warn Ray to start a new chat before context tightens rather than letting automatic compaction happen.
