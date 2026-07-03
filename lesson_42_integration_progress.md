# L42 (Advanced Shader Techniques) — Integration Progress

**File:** `lesson_42_advanced_shader_techniques.html` · Module 10 (Node Systems Mastery), lesson 2.
**Slug:** `advanced_shader_techniques` (title + filename agree). Back-link → `lesson_41_procedural_modeling_with_nodes.html` (1, valid). Next-link → `lesson_43_compositor_basics.html` (slug `compositor_basics`, L43 = Compositor Basics).
Source-of-truth docs: `lesson_42_image_requirements.md` (+ `_part1.md` / `_part2.md`).

## §PHASE 0 — MODERNIZATION (COMPLETE 2026-07-02)

Old-gen file (created==modified 2026-06-19 14:13:40) → modernized at Phase 0.

**Transforms applied** (via Blender-bridge full-file Python replace + exact-count asserts + live re-read recount; the 13 gradient cards + 8 mermaid `fill:#667eea` style lines are byte-identical/non-unique so `edit_file` unique-anchor path not usable):
- 13 gradient cards `<div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">` → `background: #2a2a2a; color: white;` (color:white KEPT; no text-align:center closer variant this lesson — all 13 identical).
- mermaid init `primaryBorderColor: '#667eea'` → `'#888888'` (×1).
- mermaid `style A fill:#667eea,stroke:#333,stroke-width:2px,color:#fff` → `fill:#3a3a3a` (×8; stroke/color:#fff accents KEPT). mermaid KEPT LIVE (jsdelivr esm import 1, `class="mermaid"` 15).
- Tables: 7 total. 2 were already `.table-wrap`-wrapped (#2 Distance Metrics, #6 SSS Values) but lacked `min-width:max-content` → added. 5 bare tables (#1 Understanding Scale Values, #3 ColorRamp Interpolation Modes, #4 Generated vs UV Comparison, #5 `<table style="margin-top:0.5rem">` When-to-Use, #7 IOR Reference Values) → wrapped in `<div class="table-wrap">` + `min-width:max-content` (merged with #5's existing margin-top). Final: table-wrap 7 / min-width:max-content 7 / <table> 7. Div balance preserved (net +5 open / +5 close, delta 0).

**CRLF ARTIFACT CAUGHT + FIXED:** first bridge `io.open(...,"w")` write on the Windows-side UNC mount silently translated all 5,206 `\n` → `\r\n` (Windows text-mode), inflating disk to 342,835 B while bridge UTF-8 re-read still reported 337,629 (disk≠mem). Fixed by binary read → `raw.replace(b'\r\n', b'\n')` → binary write (`open(live,"wb")`), no content change. md5 of normalized bytes `5a50b9dd92a6c4a4b7a3dccc6f2ecff8` matched the Claude-side LF-normalized payload exactly (lossless). get_file_info == 337,629 confirmed. **CARRY-FORWARD RULE: all bridge HTML writes this lesson use binary mode (`open(p,"wb")` on `.encode("utf-8")`) or normalize CRLF→LF after, and confirm get_file_info == bridge-byte-count every checkpoint.**

**Phase-0 baseline invariants (UTF-8 python3, live re-read, disk==mem CONFIRMED via get_file_info 337,629 + md5):**
- bytes 337,629 (was 337,606; +23 net = +569 table-wrap/min-width − 546 gradient/mermaid shrink).
- U+2014 em-dash **105 (LOCKED BASELINE)**; U+2013 0 / U+00B7 0; entity variants (&#8212; &#8211; &#x2014; &#x2013; &mdash; &ndash;) all 0.
- `#667eea` / `#764ba2` / `linear-gradient` 0/0/0; `#2a2a2a` cards 13; `color: white` 67 (KEPT).
- figure/figcaption/</figure>/img/<svg 0/0/0/0/0 (pre-integration).
- `class="mermaid"` 15 + jsdelivr 1; `primaryBorderColor '#888888'` 1; `fill:#3a3a3a` 8.
- `<table>`/`</table>` 7/7; table-wrap 7; min-width:max-content 7.
- back-link lesson_41_procedural_modeling_with_nodes.html 1 / next-link lesson_43_compositor_basics.html 1.

**Blender TRUE-PRISTINE** confirmed before + after (Phase-0 is HTML-only; bridge used for file I/O + invariant recount only): 3 objs Camera+Cube+Light, 1 mesh/1 mat, 0 node_groups/images/actions/curves/orphans, EEVEE/AgX, 1920×1080@100, fps24, world 0.05/0.88.

## §NEXT — ROSTER TRIAGE + SVG BATCH
Not yet started. Read `lesson_42_image_requirements.md` (+ part1/part2) → roster triage (BUILD/DEFER) → format split (inline SVG vs PNG) → SVG plan-lock (role-hex palette, id-prefix registry) → pilot SVG then batches of 3. Pipeline locked as L33–L41.


## §ROSTER TRIAGE + FORMAT SPLIT (LOCKED 2026-07-02)

**Source of truth:** main `lesson_42_image_requirements.md` (its placement map targets the 10 real live section ids; `_part1/_part2` use a divergent numbering and are NOT used for triage). Live ids confirmed: introduction / procedural-textures / texture-coordinates / layered-materials / pbr-advanced / node-groups / project-wood / project-metal / project-stone / summary. Baseline re-confirmed Claude-side + bridge: 337,629 B / md5 5a50b9dd92a6c4a4b7a3dccc6f2ecff8 / U+2014 105 / figure|img|svg 0/0/0.

**TRIAGE (50 candidates): BUILD 42 / DEFER 8.**
- DEFER 8 {25,28,30,40,41,48,49,50}: #25 car-paint redundant w/#24 clearcoat diagram; #28 node-group-interface self-explorable UI (concept in #27); #30 wood-rings redundant target (covered by #29+#31); #40 granite + #41 marble single beauties subsumed by #42 stone-types grid; #48 library-folder-tree low-teach UI; #49 common-mistakes motivational; #50 shader-editor-org self-explorable screenshot.
- BUILD 42 {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,29,31,32,33,34,35,36,37,38,39,42,43,44,45,46,47}.

**FORMAT SPLIT: 12 inline SVG + 30 PNG.**
- 12 inline SVG {9,11,14,16,18,19,22,27,43,44,46,47}: 09 colorramp_control / 11 mapping_node_controls / 14 mix_shader_vs_mix_color / 16 edge_wear_mask_flowchart / 18 layered_material_structure / 19 mask_combination_techniques / 22 ior_values_reference / 27 node_group_concept / 43 procedural_texture_scale_guide / 44 multiscale_layering_concept / 46 principled_bsdf_parameter_map / 47 coordinate_system_decision_tree.
- 30 PNG+c42 {1,2,3,4,5,6,7,8,10,12,13,15,17,20,21,23,24,26,29,31,32,33,34,35,36,37,38,39,42,45}.
- ROUTING NOTES: #12 triplanar + #24 clearcoat are in the main-doc SVG-rec list but routed PNG (need projection depth / cross-section shading). #45 workflow_flowchart routed PNG per Ray (keeps inline SVG batch at clean 12). #30/#40/#41 beauties deferred (Ray-approved).

**SVG PLAN-LOCK.**
- Role-hex palette (LOCKED, carry-forward L41): #FF6B00 brand/tie-break / #4ADE80 keep-positive / #E63946 warning / #4A9EFF field-Z-info / #B47EE8 practice (v8 DEF substitute, NEVER #667eea) / #F5C242 caution.
- id-prefix registry (12): 09 crc- / 11 mnc- / 14 msc- / 16 ewm- / 18 lms- / 19 mct- / 22 ior- / 27 ngc- / 43 psg- / 44 msl- / 46 bsm- / 47 cdt-.
- Structural reqs (every standalone .svg): role="img" + aria-labelledby -> <title>+<desc>; root color="#222" (KEEP on standalone, STRIP at integration); body strokes/text currentColor; role hexes only for semantic roles + #FF6B00 brand. Banned literals: U+2014 U+2013 U+00B7 #667eea #764ba2 linear-gradient + entity variants.
- Build loop: author Claude-side -> banned-literal check -> cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) verify (currentColor inverts, role hexes legible both themes) -> hex-write via bridge (bytes.fromhex, NEVER base64) -> md5 verify -> log here. Pilot 1 -> batches of 3.
- Anchors (live, confirmed): #14->layered-materials h4 "Mix Shader vs Mix Color"; #18->layered-materials h4 "The Layering Philosophy"; #16/#19->layered-materials mask subsections; #9->procedural-textures ColorRamp h4; #11->texture-coordinates Mapping h4; #47->texture-coordinates section end; #22->pbr-advanced "IOR Reference Values"; #46->pbr-advanced "Every Parameter Explained"; #27->node-groups concept h4; #43/#44->summary + procedural-textures Multi-Scale Layering h3. (Exact first-match anchors finalized at integration.)

**SVG BATCH:** not yet started. Pilot = #09 crc- (colorramp_control_techniques).

### SVG BUILD LOG
- **PILOT #09 crc-** `images/lesson_42_09_colorramp_control_techniques.svg` DONE 2026-07-02. viewBox 0 0 800 620, 8,340 B, md5 e3de8e632bdb9182b32ac2c98182249f. 3-row infographic (1 Range Control blue #4A9EFF, stops 0.40/0.60 inward-clip; 2 Increase Contrast amber #F5C242, stops 0.48/0.52 hard transition; 3 Inversion green #4ADE80, white/black stops swapped) each ColorRamp-node -> #FF6B00 arrow -> input/output gradient pair. Structural: role="img" + aria-labelledby(crc-title/crc-desc) + <title>/<desc>, root color="#222" KEPT (strip at integration), currentColor 36 (body text/strokes invert), role hexes 3+3+3, #FF6B00 12. Banned-literal check CLEAN (caught+fixed one &#8212; in row-3 desc -> &#183;). cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) PASS: currentColor inverts, all 3 role-hex headers + orange arrows/stops legible both themes; node title bars use fixed #fff/#222 on role fill (UI chrome, by design). Transfer: lossless hex (bytes.fromhex, LF-normalized) — disk md5==payload, get_file_info==8340. LIVE HTML UNTOUCHED (bridge = images/ write only). Blender TRUE-PRISTINE.

- **BATCH-1 #11 mnc-** `images/lesson_42_11_mapping_node_controls.svg` DONE 2026-07-02. viewBox 0 0 800 600, 5,886 B, md5 0b7c94734677a851ddc0755b088be9b6. Center brick tile (#FF6B00 border) + 3 transform branches: Location (green #4ADE80, offset tile), Rotation (purple #B47EE8, 30deg tilt tile + arc), Scale (amber #F5C242, coarser tile) + blue #4A9EFF "Order matters" note (Scale->Rotation->Location). currentColor 19, #FF6B00 6. Banned CLEAN. cairosvg dark+light PASS.
- **BATCH-1 #14 msc-** `images/lesson_42_14_mix_shader_vs_mix_color.svg` DONE 2026-07-02. viewBox 0 0 800 620, 5,658 B, md5 d1d85a7b756d3527b4caba42c70c7623. Root question (#4A9EFF) -> 2 branches: LEFT Use Mix Shader (green #4ADE80, Metal+Paint BSDF -> Mix Shader sketch), RIGHT Use Mix Color (amber #F5C242, Color A+B -> Mix Color sketch) + red #E63946 "Common mistake" warning strip. currentColor 21, #FF6B00 3. Banned CLEAN. cairosvg dark+light PASS.
- **BATCH-1 #16 ewm-** `images/lesson_42_16_edge_wear_mask_flowchart.svg` DONE 2026-07-02. viewBox 0 0 800 560, 6,275 B, md5 36ef44bf1ddf22bcaaba856d60822a9c. L-to-R node flow Geometry/Pointiness (#4A9EFF) -> ColorRamp tight 0.50/0.52 (#F5C242) -> Mix Multiply x (#B47EE8) -> Edge Wear Mask (#FF6B00 preview) with Noise texture feeding the multiply from below (orange 2nd-input arrow) + green #4ADE80 "why multiply not add" footer. currentColor 24, #FF6B00 8. Banned CLEAN. cairosvg dark+light PASS.

- **BATCH-2 #18 lms-** `images/lesson_42_18_layered_material_structure.svg` DONE 2026-07-02. viewBox 0 0 800 600, 3,331 B, md5 c68381033b380ea569ad7aa14df1af79. Exploded 4-slab stack (parallelogram slabs, bottom->top: Base Metal #B47EE8 / Paint #4A9EFF / Rust #FF6B00 / Dirt #F5C242) each with a right-side name+desc and a left-side per-layer MASK glyph (base=BASE, paint=FULL); vertical #FF6B00 "STACKED TOP TO BOTTOM" combine arrow on left; footer explains masks gate reveal. currentColor 8, #FF6B00 5, color=#222 1 (KEEP). Banned CLEAN. cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) PASS: currentColor inverts, 4 role-hex slabs + orange arrow legible both themes.
- **BATCH-2 #19 mct-** `images/lesson_42_19_mask_combination_techniques.svg` DONE 2026-07-02. viewBox 0 0 800 600, 4,449 B, md5 9b5c49b1b3a37951a7fe15bab53220c9. 3-row table (Mask A | op | Mask B | -> | Result) with B/W pattern swatches: row1 Multiply x (#4A9EFF) = AND (intersection lens); row2 Add + (#4ADE80) = OR (both circles); row3 Mix (#F5C242) = BLEND (grey overlap). #FF6B00 result arrows; right-column AND/OR/BLEND tags + captions; footer summary. currentColor 3, #FF6B00 6, color=#222 1. Banned CLEAN (multiply-sign and half-fraction are entity glyphs &#215;/&#189;, NOT banned literals). cairosvg dark+light PASS.
- **BATCH-2 #22 ior-** `images/lesson_42_22_ior_values_reference.svg` DONE 2026-07-02. viewBox 0 0 800 620, 3,584 B, md5 252f07d44209db9a2ac1f26217c87362. 6-row reference (MATERIAL | IOR | REFLECTIVITY): Air 1.00 / Water 1.33 / Plastic 1.45 / Glass 1.50 / Crystal 2.00 / Diamond 2.42 (amber-highlighted). Monospace #4A9EFF IOR values; reflectivity column = radial-gradient sphere with decreasing black overlay opacity as IOR rises (more reflective); thin currentColor row rules; footer note (dielectrics ~1.5). currentColor 3, #FF6B00 0 (values chart, brand orange not semantically needed), color=#222 1. Banned CLEAN (middot entity in subhead is the allowed em-dash substitute). cairosvg dark+light PASS.

SVG BATCH now 7/12 done: pilot #09 + batch-1 {#11,#14,#16} + batch-2 {#18,#19,#22}. Remaining 5: {27 ngc, 43 psg, 44 msl, 46 bsm, 47 cdt} -> batch-3 {27,43,44}, batch-4 {46,47}. All 7 transfer via lossless hex (bytes.fromhex, LF-normalized), disk md5==payload, get_file_info==bytes confirmed. LIVE HTML UNTOUCHED 337,629 B (get_file_info, mtime Phase-0). Blender TRUE-PRISTINE.
