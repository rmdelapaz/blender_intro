# Lesson 33 Integration Progress &#183; Hair and Fur

**Status:** INTEGRATION OPENED (2026-06-27). Source-of-truth `session.md` head already flipped to L33 ACTIVE; L32 recorded FULLY CLOSED (QA-PASS, 355,438 B).

**Module:** 7 (Advanced Modeling), lesson 6 of module.
**Slug:** `hair_and_fur`
**File:** `lesson_33_hair_and_fur.html`
**Next-lesson link:** &#8594; `lesson_34_cloth_simulation.html` (count 1, confirmed in source). L34 = Cloth Simulation.

---

## BASELINE (live source, UTF-8 python3 over the live file, pre-integration)

HTML created 2026-06-19 (old-gen, same authoring batch as L28&#8211;L32).

| Invariant | Baseline value |
|---|---|
| **bytes (UTF-8)** | **257,647** (post-Phase-0 RE-BASELINE; was 257,305 pre-modernize) |
| chars | 256,966 (post-Phase-0; was 256,624) |
| em-dash U+2014 | **31** (all pre-existing prose &#8212; PRESERVE verbatim, 0 new, `&#183;` only; recount every checkpoint) |
| literal U+00B7 | 0 |
| arrow U+2192 | 126 (pre-existing prose, untouched) |
| `color="#222"` | 0 |
| currentColor | 3 (Phase 0 cards; +inline figure SVGs at production) |
| `#667eea` | 0 (was 12; Phase 0 neutralized) |
| `#764ba2` | 0 (was 3; Phase 0 neutralized) |
| `color: white` | 22 |
| `<figure` | 0 |
| `<figcaption` | 0 |
| `</figure>` | 0 |
| `<img` | 0 |
| `<svg` | 0 |
| `<table` | 7 |
| `.table-wrap` | 7 (all wrapped, Phase 0) |
| mermaid jsdelivr import | 1 |
| `mermaid.initialize` | 1 |
| `<div class="mermaid">` | 13 |
| inline `style=` | 200 |

**Sections (9, in order):** understanding-hair &#183; hair-basics &#183; emission-and-distribution &#183; grooming-tools &#183; hair-dynamics &#183; materials-and-rendering &#183; common-applications &#183; project &#183; summary.

---

## OLD-GEN vs MODERN VERDICT

**Verdict: OLD-GEN &#8212; MODERNIZE at integration (Phase 0), same class as L28&#8211;L32.**

Evidence:
- `#667eea` 12 / `#764ba2` 3 &#8594; purple-gradient cards + mermaid theme primaryBorderColor present (needs neutralize &#8594; 0).
- `color: white` 22 &#8594; review (some intentional on closer/footer cards per L29/L31 precedent; neutralize only the gradient-paired ones).
- 7 `<table>` but only 1 `.table-wrap` &#8594; **6 unwrapped tables** = 380px horizontal-overflow risk (L30/L31-class defect). Phase 0 must wrap all 7 (target `.table-wrap` 7/7).
- mermaid jsdelivr import 1 + 13 `class="mermaid"` divs LIVE &#8594; KEEP live (L30/L31/L32 precedent: live mermaid retained; offline stub is QA-copy-only). Update mermaid theme block when neutralizing `#667eea` there.
- 0 figures/img/svg &#8594; all 19 build figures are net-new inserts.

**Phase 0 scope (to compute + pixel-verify before live write, per L32 cadence):**
1. `#667eea` 12 &#8594; 0, `#764ba2` 3 &#8594; 0 (gradient cards + mermaid theme `primaryBorderColor`).
2. Wrap remaining 6 `<table>` in `<div class="table-wrap">` &#8594; `.table-wrap` 7/7.
3. mermaid theme block updated to neutral; live mermaid KEPT.
4. Re-verify em-dash U+2014 still 31 (0 new), U+00B7 still 0.
> NOTE the L32 failure mode: `Filesystem:write_file` silently truncated a ~282 KB file. L33 source is 257 KB and integration-final will exceed 300 KB &#8594; prefer `edit_file` dryRun&#8594;commit&#8594;`get_file_info` per change; if a full overwrite is unavoidable, verify byte count via `get_file_info` immediately after and re-count invariants.

---

## FIGURE ROSTER TRIAGE

Source: `lesson_33_image_requirements.md` &#8212; **30 candidates**, priority-split **10 High / 9 Medium / 11 Lower**.

**BUILD = High + Medium = 19** (established High+Medium rule). **DEFER = 11 Lower** (out of scope unless reopened).

### BUILD (19)
High (10): #1, #2, #3, #4, #6, #7, #9, #15, #26, #27
Medium (9): #8, #10, #12, #14, #16, #17, #18, #22, #30

### DEFER (11 Lower, out of scope unless reopened)
#5, #11, #13, #19, #20, #21, #23, #24, #25, #28, #29

### FORMAT SPLIT (build 19)
**Inline SVG (4)** &#8212; diagram-pure, scales, currentColor light/dark safe:
- **#2** Hair Strand Anatomy (root/segments/tip labels) &#8212; doc SVG-rec #1
- **#6** Face Normals &#38; Hair Direction (normal arrows + perpendicular strands) &#8212; diagram-class
- **#9** Grooming Tools Icon Reference (2&#215;4 icon grid) &#8212; doc SVG-rec #2
- **#26** Complete Hair Workflow flowchart &#8212; doc SVG-rec #3

**PNG + `c33` overlay (15)** &#8212; composites, renders, UI mockups (overlay labels built at integration, no baked text in renders, LD19 cairosvg 1:1 pixel-verify before each commit):
- #1 hair-vs-emitter comparison
- #3 parent/child visualization
- #4 particle properties panel (UI)
- #7 weight-paint density map
- #8 particle edit mode interface (UI)
- #10 comb tool before/after
- #12 hair dynamics settings panel (UI)
- #14 stiffness comparison (3-panel)
- #15 hair BSDF shader node setup (UI)
- #16 root-to-tip color gradient node setup (UI)
- #17 hair material comparison (4-panel)
- #18 lighting setup for hair (top-down diagram/render)
- #22 children types comparison (Simple vs Interpolated)
- #27 project result example (render)
- #30 render settings for hair (UI)

> Split rationale: doc SVG-recs were {1,2,5,9,26}; #5 is DEFERRED (Lower) and #1 is a composite better served as a PNG render (L21/L28 precedent: comparison composites route teaching to the `c{N}` overlay, not inline SVG). Added #6 to inline SVG as diagram-class (normal arrows are pure vector). Net inline = {2,6,9,26}.

### LOCKED CLOSE TARGETS (to be confirmed at close)
- figure 19 / figcaption 19 / `</figure>` 19 / img 15 / svg 19 (4 inline + 15 overlay, overlays counted per L31/L32 close convention)
- em-dash U+2014 31&#8594;31 (0 new); literal U+00B7 0; `color="#222"` 0
- `#667eea` 0 / `#764ba2` 0; `.table-wrap` 7/7
- mermaid import 1 / `class="mermaid"` divs 13 (KEEP live)
- inline-SVG id-prefixes (4, TBD at authoring) + `c33` overlay registry (15)

### PLACEMENT MAP (from image_requirements, build figs only &#8594; section id)
- **understanding-hair:** #1, #2, #26  &#183;  (#3 also intro&#8217;d here per doc)
- **hair-basics:** #4, #22, #3
- **emission-and-distribution:** #6, #7  (#5 deferred)
- **grooming-tools:** #8, #9, #10  (#11, #23 deferred)
- **hair-dynamics:** #12, #14  (#13, #29, #25 deferred)
- **materials-and-rendering:** #15, #16, #17, #18, #30  (#24 deferred)
- **common-applications:** (#19, #20, #21, #28 all deferred &#8212; section gets 0 build figs)
- **project:** #27
- **summary:** 0

> Note: `common-applications` closes with 0 build figures (all 4 of its candidates are Lower). Acceptable per L27 precedent (sections may close 0-figure). Flag at close.

### PRODUCTION PLAN (next chats)
- 15 PNGs in &#8804;5-fig batches (&#8805;5 &#8594; own sub-chat); UI mockups #4/#8/#12/#15/#16/#30 via full-window screen.screenshot &#8594; Windows tempdir &#8594; Pillow crop &#8594; WSL relay (LD20).
- 4 inline SVGs one batch (cairosvg verified, `color="currentColor"`, NOT `#222`).
- INTEGRATION (19 &#8805; 6 &#8594; own chat).
- Browser QA = separate chat (Playwright + real Chromium, 4 configs 380/900 &#215; dark/light).
- Blender currently TRUE-PRISTINE; verify before/after each rigged/particle staging.

---

## PER-COMMIT LOG

### Phase 0 &#183; MODERNIZE (2026-06-27) &#8212; COMPLETE, all invariants verified on live read-back

Byte ladder from baseline 257,305 (each step `edit_file` dryRun&#8594;commit&#8594;`get_file_info`):

| # | Commit | Change | Bytes | &#916; |
|---|---|---|---|---|
| 0 | baseline | &#8212; | 257,305 | &#8212; |
| 1 | colors A | mermaid theme `primaryBorderColor` `#667eea`&#8594;`#888` + 3 gradient cards `#667eea/#764ba2`&#8594;`background: currentColor` (L64, L3688, L4190) | 257,191 | &#8722;114 |
| 2 | colors B | 8 mermaid node fills `fill:#667eea`&#8594;`fill:#888` (purple primary only; green/red/orange/blue palette kept) | 257,167 | &#8722;24 |
| 3 | tables | wrapped remaining 6 `<table>` in `<div class="table-wrap">` (house-style 24-sp indent, div+table same level) | **257,647** | +480 |

**Phase 0 final invariants (live read-back, `get_file_info` size == UTF-8 recount == 257,647):**
`#667eea` 0 &#183; `#764ba2` 0 &#183; `.table-wrap` 7/7 &#183; `<table>` 7 / `</table>` 7 &#183; em-dash U+2014 31 (0 new) &#183; literal U+00B7 0 &#183; arrow U+2192 126 (untouched) &#183; `color="#222"` 0 &#183; `class="mermaid"` 13 (LIVE) &#183; `mermaid.initialize` 1 &#183; jsdelivr import 1 (LIVE) &#183; currentColor 3 (cards; figs still 0).

**PIPELINE LESSON (new, important):** `Filesystem:edit_file` replaces ONLY the first match of a non-unique `oldText`. The L4190 gradient card (identical string to L3688) was silently left unreplaced by the bulk card edit &#8212; caught by post-commit recount (#764ba2 1 instead of 0), fixed with a unique 2-line anchor. **Rule going forward: every duplicate target string needs its own uniquely-anchored edit; always recount the specific invariant after each commit, do not trust the diff alone.** (Complements the L32 `write_file` silent-truncation lesson: prefer `edit_file`, verify every write.)

_Phase 0 used `edit_file` exclusively; no `write_file`, no truncation risk._

## INLINE SVG AUTHORING (4) &#8212; COMPLETE & cairosvg-verified (2026-06-27)

All 4 authored, cairosvg light+dark verified (currentColor resolves correctly both themes), XML well-formed, written to `images\` via `write_file` with post-write `get_file_info` byte-verify (no truncation). House-style matches L32 inline figs: `#FF6B00` 3px top rule + uppercase title + `&#183;`-separated subtitle, currentColor text/strokes, semantic accents `#4A9EFF`/`#4ADE80`/`#F87171`, `<title>`+`<desc>` a11y, `figcaption` has NO "Figure N:" prefix (L32 convention).

| # | Figure | File (images\) | bytes (live) | id-prefix | viewBox |
|---|---|---|---|---|---|
| 2 | Hair Strand Anatomy | `lesson_33_hair_strand_anatomy.svg` | 3,776 | `hsa` | 0 0 800 470 |
| 6 | Face Normals &amp; Hair Direction | `lesson_33_face_normals_direction.svg` | 5,276 | `fnd` | 0 0 800 470 |
| 9 | Grooming Tools Icons (2&#215;4) | `lesson_33_grooming_tools_icons.svg` | 6,722 | `gti` | 0 0 800 520 |
| 26 | Complete Hair Workflow | `lesson_33_hair_workflow.svg` | 5,314 | `hwf` | 0 0 800 560 |

**Per-SVG invariants (all 4):** currentColor present &#183; `color="#222"` 0 &#183; literal U+00B7 0 (`&#183;` entities) &#183; literal U+2014 0 (`&#8212;` entities; preserves the 31/0-new em-dash target at integration) &#183; unique id-prefix &#183; no off-canvas clip.

**Authoring notes / fixes:**
- #2: first pass clipped "Segments" text off right edge + "Root" sub-label off left edge &#8594; pulled both label blocks inside canvas, re-verified. PASS.
- #6: first pass drew orange hair OVER blue normal arrows (overlap hid the normals) &#8594; offset normal (shorter, inner) vs hair (taller, outer) at each point; flipped center shows red normal + dashed orange hair pointing DOWN into mesh, distinct from the 2 correct points. PASS both themes.
- #9, #26: round-tripped from as-written WSL files (`copy_file_user_to_claude` &#8594; re-render) &#8594; render identical. Minor byte deltas vs scratch copies (#9 &#8722;5, #26 &#8722;45) are benign comment/line-order diffs introduced during transcription; both files complete (end `</svg>`), well-formed, render-clean.

**NEW PIPELINE LESSON (toolchain):** `Filesystem` tools operate ONLY on the user/WSL FS; they CANNOT read Claude-side `/tmp` or `/mnt/*` (those are Claude's computer). `/mnt/user-data/uploads` is READ-ONLY Claude-side (cairosvg write there &#8594; Errno 30). To re-verify an as-written WSL SVG: `copy_file_user_to_claude` &#8594; render with cairosvg writing to `/tmp`. (Complements the L32 `write_file` truncation + L33 `edit_file` first-match-only lessons.)

## PNG BATCH 1 STATUS (renders #1,#3,#7,#10,#14) &#8212; COMPLETE (2026-06-27)

**BATCH 1 COMPLETE: all 5 PNGs DONE, byte-verified, live in `images\`.** No baked text (overlay labels at integration). LD17 Standard view transform. 1920&#215;1080. Engine EEVEE (`BLENDER_EEVEE`). Filenames follow `lesson_33_image_requirements.md` canonical convention (`NN_descriptive`), NOT close-doc stub names &#8212; **NN_descriptive is canonical for L33**.

| # | File (`images\`) | bytes | verify |
|---|---|---|---|
| 1 | `lesson_33_01_hair_vs_emitter_comparison.png` | 1,969,852 | get_file_info |
| 3 | `lesson_33_03_parent_child_visualization.png` | 2,053,114 | get_file_info |
| 7 | `lesson_33_07_weight_paint_density_map.png` | 1,457,796 | get_file_info (hue ramp true under LD17 Standard, pre-commit) |
| 10 | `lesson_33_10_comb_tool_before_after.png` | 1,927,968 | get_file_info |
| 14 | `lesson_33_14_stiffness_comparison.png` | 1,397,202 | get_file_info |

**#1 spark-color decision: RESOLVED &#8212; choice A (accept yellow-orange; teaching intent intact).**

**Relay path CONFIRMED working:** BlenderMCP runs Windows-side &#8594; `bpy` writes directly to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\_render_tmp\` (UNC), then `copy_file_user_to_claude` &#8594; `view`. **Windows username is `pract`** (NOT `Ray`); host tempdir = `C:\Users\pract\AppData\Local\Temp` (first guess with `Ray` failed). `tempfile.gettempdir()` returns it reliably.

**Blender state:** pristine VERIFIED at batch open and snapshot recorded. **RESTORED to pristine after batch (2026-06-27): `get_scene_info` &#8594; object_count 3 (Cube+Camera+Light), materials_count 2 (BaseMat, HairMat).** `_render_tmp\` scratch (`l33_fig*_test*.png`) purgeable.

**NEW PIPELINE LESSON (EEVEE particles):** EEVEE object-instanced emitter particles render too DIM to read against the lit dark-grey (#2b2b2b) world &#8212; they appear in solid-shaded viewport but wash out in the EEVEE render. **Fix: bake particles to a real merged mesh** (sample `psys.particles[].location` from the evaluated depsgraph at the target frame &#8212; already WORLD-space; build merged icospheres via bmesh, append emission material, then force every poly `material_index=0` after `from_mesh` merge, and CLEAR the emitter's particle modifiers so they don't double-eval). Confirmed reliable. (Complements L32 `write_file` truncation + L33 `edit_file` first-match-only + Filesystem-cannot-see-Claude-FS lessons.)

**SECONDARY FINDING (open):** under **Standard** view transform, bright warm emission CLIPS toward yellow. Orange emission at strength high enough to read against the area lights goes yellow; at low strength it's invisible. **DECISION NEEDED (A/B/C):** (A) accept yellow-orange (teaching intent intact); (B) drop area-light energy ~30% so lower emission reads true orange; (C) switch sparks to bright-orange diffuse/glossy lit by the scene (most reliable orange under Standard). Last test before pause: emission RGB (1.0,0.30,0.0), strength 2.2, frame 55, sparks baked & spread X &#8722;6.8&#8594;+0.43.

**#1 (DONE):** composition VALIDATED (left emitter free-flying sparks vs right surface-rooted hair sphere; clear separation; camera + 3-light rig). Spark-color RESOLVED choice A (accept yellow-orange under Standard). Hair material bright cyan-white Principled (0.82,0.95,1.0) rough 0.35. Written to `images\lesson_33_01_hair_vs_emitter_comparison.png`, 1,969,852 B, byte-verified.

**#3, #7, #10, #14 (DONE):** all built via smooth POLY tube-strand approach (NO EEVEE hair particles), LD17 Standard, EEVEE, world #2b2b2b, 1920&#215;1080@100. #7 hue ramp (red&#8594;blue) verified true on test pre-commit. #14 = 3-panel stiffness (heads X=&#8722;6/0/+6, droop inverse to stiffness 0.5/1.5/5.0; LO floppy drapes down, MD balanced, HI rigid upright), front-profile cam + 3-area rig (key/rim/fill 1200/900/400), reframed once for headroom. All byte-verified via `get_file_info`.

**Scratch:** `_render_tmp\` holds test PNGs (l33_fig1_test*.png, isotest). Safe to purge anytime; not deliverables.

**Close targets unchanged:** figure 19 / figcaption 19 / `</figure>` 19 / img 15 / svg 19.

## PNG BATCH 2 STATUS (UI #4,#8,#12 + renders #22,#18) &#8212; COMPLETE (2026-06-27)

**BATCH 2 COMPLETE: all 5 PNGs DONE, byte-verified, live in `images\`.** No baked text (overlay labels at integration). Filenames `NN_descriptive` canonical. UI mockups via LD20 (full-window `screen.screenshot` &#8594; Windows tempdir/UNC &#8594; PIL crop &#8594; `images\`); renders via tube-strand (smooth POLY + bevel, NO EEVEE hair particles), LD17 Standard, EEVEE, world #2b2b2b, 1920&#215;1080@100.

| # | File (`images\`) | bytes | method / verify |
|---|---|---|---|
| 4 | `lesson_33_04_particle_properties_panel.png` | 64,669 | LD20 live-panel crop. Real Hair sys staged on Cube: Type=Hair, Number 2000, Hair Length 4m, Segments 8; Emission expanded. get_file_info |
| 8 | `lesson_33_08_particle_edit_interface.png` | 431,411 | LD20 full-window Particle Edit mode: grooming toolbar (Comb active), Particle Tool panel Radius 50px/Strength 0.500, fur-cube emitter (hair_length 0.8 + INTERPOLATED children for fur read). get_file_info |
| 12 | `lesson_33_12_dynamics_settings_panel.png` | 15,242 | FAITHFUL PIL MOCKUP (panel subpanel expansion not scriptable, see lesson below). Hair Dynamics enabled; Structure Mass 1.000 / Stiffness 1.500 (highlighted) / Random 0.200; Damping 0.250 (highlighted); Collisions Quality 3. Theme swatches sampled from real #4 capture (panel 57,57,57 / field 38,38,38 / subhdr 29,29,29). get_file_info |
| 22 | `lesson_33_22_children_types_comparison.png` | 1,474,487 | Tube-strand 2-head render. LEFT=Simple (tight separated clumps), RIGHT=Interpolated (dense even blend). Area-weighted hemisphere roots (phi=acos(1-u)), 30 parents+7 children each, gravity droop. Cube hide_render during shot. get_file_info |
| 18 | `lesson_33_18_lighting_setup_diagram.png` | 205,199 | Top-down lighting SCHEMATIC (PIL diagram, not photoreal &#8212; literal top-down render read poorly). Central head + radial hair, 3 colored fixtures w/ soft beam wedges: KEY warm upper-left, RIM cool-blue top/behind, FILL warm lower-right; direction arrows. get_file_info |

**NEW PIPELINE LESSON (UI panel expansion):** Blender particle subpanel expand/collapse state (e.g. Hair Dynamics &#8594; Structure/Damping/Collisions) has NO bpy property and NO operator &#8212; it is mouse-only and NOT headlessly scriptable (checked `psys`/`cloth.settings` for show_/expand_ flags = none; `bpy.ops.ui` has no panel toggle). For a UI fig that needs a collapsed-by-default subpanel expanded, build a faithful PIL mockup using theme swatches sampled from a REAL capture. Panels expanded by default (Emission for #4) and live modes (Particle Edit for #8) screenshot fine as real captures. (Complements L32 write_file truncation + L33 edit_file first-match-only + Filesystem-cannot-see-Claude-FS lessons.)

**NEW PIPELINE LESSON (top-down render vs diagram):** A literal top-down photoreal render of a hair head reads as an ambiguous urchin and the 3-light spatial relationship doesn't communicate. For lighting-setup figs (#18-class), a clean 2D top-down PIL schematic (head + beam wedges + colored fixtures + direction arrows) is far more legible and is sanctioned by the requirements doc (#18 type = "Diagram/Screenshot").

**Blender state:** RESTORED to pristine after batch (2026-06-27): `get_scene_info` &#8594; object_count 3 (Cube+Camera+Light), materials_count 2. NOTE: orphan-purge after batch removed the 2 unassigned pristine materials, so BaseMat+HairMat were RECREATED (empty node mats) to restore the recorded materials_count 2. Camera left at (0,0,14) from #18 (harmless; repositioned every batch). Default Light energy restored to 1000W (was zeroed during renders). `_render_tmp\` PURGED (30 scratch files removed incl. batch-1 leftovers; dir now empty).

---

## PNG BATCH 3 STATUS (UI #15,#16,#30 + renders #17,#27) &#8212; COMPLETE (2026-06-27)

**all 5 DONE, byte-verified, live in `images\`.** No baked text (overlay labels at integration). Filenames `NN_descriptive` canonical. Renders via tube-strand bevel-CURVE (smooth POLY spline + `bevel_depth`, NO Skin modifier, NO EEVEE hair particles), LD17 Standard, EEVEE, world #2b2b2b, 1920&#215;1080@100.

| # | File (`images\`) | bytes | method / verify |
|---|---|---|---|
| 17 | `lesson_33_17_material_comparison.png` | 992,284 | 4 tube-strand heads in a row. Panels: rough 0.10 (glossy, brighter base) / 0.30 (balanced) / 0.70 (matte, darker) / gradient (world-Z ColorRamp, dark root&#8594;light tip). 3/4 cam, 3-area rig. Saved as clean full 1920&#215;1080 (NO pad &#8212; see lesson). get_file_info |
| 27 | `lesson_33_27_project_result_example.png` | 491,772 | Hero stylized character: single UV-sphere head (scale 0.92/0.95/1.05) + dense combed-back gradient hair (~196 roots &#215;13 children, roots ON surface, fall down+back). Head ROTATED (Euler X35&#176; Z135&#176;) so styled crown faces cam, bald face away; eye-ish 3/4. PIL center-crop+upscale to fill 16:9. get_file_info |
| 15 | `lesson_33_15_hair_bsdf_node_setup.png` | 13,493 | FAITHFUL PIL MOCKUP (Shader Editor). Hair BSDF (orange-selected) &#8594; Material Output; green BSDF&#8594;Surface noodle; brown Color swatch. Theme sampled live from Blender node_editor theme (node_backdrop 0.188, node_selected 0.929/0.341/0, shader_node header tint). get_file_info |
| 16 | `lesson_33_16_color_gradient_setup.png` | 22,046 | FAITHFUL PIL MOCKUP (Shader Editor). 4-node chain: Hair Info(Intercept) &#8594; ColorRamp(Fac) , ColorRamp(Color) &#8594; Hair BSDF(Color, orange-selected) , BSDF &#8594; Material Output(Surface); 3 green noodles; dark-root&#8594;light-tip gradient bar with stops. Authentic input/converter/shader/output header tints. get_file_info |
| 30 | `lesson_33_30_render_settings_panel.png` | 27,393 | FAITHFUL PIL MOCKUP (Render Properties, subpanel expansion not scriptable). Cycles; Sampling Render 256 (orange highlight); Light Paths&#8594;Max Bounces Transmission 12 (orange highlight); Hair Shape=Rounded Ribbons (orange highlight) + Subdivisions 2; Denoise/Motion Blur checked. Theme sampled live (space.back 0.188, wcol_num 0.329). get_file_info |

**RENDER GROOMING LESSON (#17/#27, new):** The batch-1/2 “tube-strand” method = bevel-CURVE, NOT a Skin modifier. A Skin modifier on a multi-island edge mesh collapses ALL strands into one connected web (only one root vertex generates) &#8212; use `curve.splines.new('POLY')` per strand + `curve.bevel_depth` instead. For a believable head of hair: place roots ON the scaled surface (`co*scale`), give only a SMALL normal lift (t&#215;~0.15) then dominant gravity droop (t&#178;&#215;~1.0) + mild back sweep; strands that only droop with no lift get occluded behind the head silhouette from a front cam. Easiest way to present a styled head from a sphere: cover the whole scalp minus a front face-oval, then ROTATE the head object so the hair-dense crown faces camera rather than chasing camera placement.

**PAD-BAND LESSON (#17):** PIL-padding a render crop onto a solid-color canvas (e.g. `(43,43,43)`) leaves a visible seam because the EEVEE #2b2b2b background does NOT equal the nominal sRGB byte value. Either (a) save the clean full-frame render uncropped (chosen for #17), or (b) center-crop a tight box and `resize()`-upscale to fill the frame (chosen for #27) &#8212; never pad onto a guessed flat color. If padding is unavoidable, sample an actual corner pixel for the fill.

**Blender state after batch 3: RESTORED to pristine (2026-06-27).** All `h17_*`/`h27_*` objects removed; `Light` back to POINT 1000W; Cube `hide_render=False`; orphan-purge dropped BaseMat+HairMat so both RECREATED (empty node mats). `get_scene_info` VERIFIED &#8594; object_count 3 (Cube+Camera+Light) / materials_count 2 (BaseMat, HairMat). `_render_tmp\` PURGED via Blender os.remove (16 scratch files: l33_fig17_test1-4/final, l33_fig27_test1-7/final + strays; dir now empty).

---

## c33 OVERLAY REGISTRY

Overlay labels built at INTEGRATION (no baked text in any render). Namespace `c33`. Label content per `lesson_33_image_requirements.md` prompts.

| # | PNG (`images\`) | overlay labels (build at integration) |
|---|---|---|
| 1 | `lesson_33_01_hair_vs_emitter_comparison.png` | `EMITTER` (left sphere) / `HAIR` (right sphere) callouts |
| 3 | `lesson_33_03_parent_child_visualization.png` | `PARENT` / `CHILD` callouts |
| 7 | `lesson_33_07_weight_paint_density_map.png` | density legend: red = 1.0 / blue = 0.0 |
| 10 | `lesson_33_10_comb_tool_before_after.png` | `BEFORE` / `AFTER` panel labels |
| 14 | `lesson_33_14_stiffness_comparison.png` | per-panel: `Stiffness 0.5` / `Stiffness 1.5` / `Stiffness 5.0` |
| 4 | `lesson_33_04_particle_properties_panel.png` | callouts: `Type: Hair` (toggle) / `Number: 2000` / `Hair Length: 4.000` / `Segments: 8` |
| 8 | `lesson_33_08_particle_edit_interface.png` | callouts: `Particle Edit mode` / toolbar `Comb / Smooth / Cut / Length / Puff / Add` / `Brush: Radius + Strength` |
| 12 | `lesson_33_12_dynamics_settings_panel.png` | callouts: `Mass` / `Stiffness` / `Damping` (highlight the 3 key params); section `Hair Dynamics` |
| 22 | `lesson_33_22_children_types_comparison.png` | panel labels: `SIMPLE` (left, "follow nearest parent, defined clumps") / `INTERPOLATED` (right, "blend between parents, smooth coverage") |
| 18 | `lesson_33_18_lighting_setup_diagram.png` | `KEY LIGHT` (warm, upper-left) / `RIM LIGHT` (blue, behind) / `FILL LIGHT` (warm, front-right); optional wattage 500W/300W/150W per requirements prompt |
| 17 | `lesson_33_17_material_comparison.png` | per-panel: `Roughness: 0.1` (Glossy, shiny) / `Roughness: 0.3` (Natural, balanced) / `Roughness: 0.6` (Matte, diffuse) / `With Color Gradient` (Depth variation) |
| 27 | `lesson_33_27_project_result_example.png` | optional callouts: `Combed-back flow` / `Root-to-tip gradient` / `Key + rim lighting`; hero shot, may run captionless |
| 15 | `lesson_33_15_hair_bsdf_node_setup.png` | callouts: `Hair BSDF` (node) / `Material Output` (node) / `BSDF &#8594; Surface` (green connection) |
| 16 | `lesson_33_16_color_gradient_setup.png` | callouts: `Hair Info: Intercept` / `ColorRamp` (dark root &#8594; light tip) / `Hair BSDF: Color` / `Material Output`; annotate `Root color` / `Tip color` on gradient |
| 30 | `lesson_33_30_render_settings_panel.png` | callouts: `Render Samples: 256` (higher for hair quality) / `Transmission: 12` (important for translucency) / `Hair Shape: Rounded Ribbons` |

_(all 15 PNG overlay entries registered &#8212; 0 more; complements the 4 inline-SVG figures &#8594; 19 total.)_

## INTEGRATION PRE-FLIGHT (2026-06-27, chat A) &#8212; COMPLETE, no HTML writes yet

Live file re-verified byte-exact 257,647 B; baseline invariants all match (em-dash 31, U+00B7 0, color#222 0, 667eea/764ba2 0, .table-wrap 7, mermaid import 1, class=mermaid 13, figure/img/svg 0). All 15 c33 PNGs + 4 inline SVGs confirmed live. PNG pixel dims captured. 4 inline SVGs verified well-formed (viewBox, currentColor, entity-escaped &#8212; no literal U+2014/U+2192).

**STYLESHEET CONVENTION LOCKED (`styles/main.css`):** bare `<figure>`/`<figcaption>`/`<img>` need NO inline styles (CSS already styles them: figure text-align:center; figcaption 0.9rem var(--text-light); img max-width:100% border-radius:8px). **Overlay SVGs MUST carry `style="position:absolute;..."`** &#8212; the rule `svg:not([style*="position"]){max-width:100%}` scales inline diagram SVGs but EXCLUDES positioned overlays so they sit 1:1 on the PNG. Use the L32 figure pattern verbatim: `<figure><div style="position:relative;display:inline-block;max-width:100%"><img loading="lazy" .../><svg style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 W H">...overlay...</svg></div><figcaption>...</figcaption></figure>`. NO "Figure N:" prefix.

**PNG PIXEL DIMS (overlay viewBox = `0 0 W H`):**
| # | W&#215;H | | # | W&#215;H |
|---|---|---|---|---|
| 1 | 1920&#215;1080 | | 15 | 930&#215;430 |
| 3 | 1920&#215;1080 | | 16 | 1330&#215;440 |
| 4 | 357&#215;777 | | 17 | 1920&#215;1080 |
| 7 | 1920&#215;1080 | | 18 | 1920&#215;1080 |
| 8 | 1920&#215;1046 | | 22 | 1920&#215;1080 |
| 10 | 1920&#215;1080 | | 27 | 1920&#215;1080 |
| 12 | 357&#215;378 | | 30 | 1000&#215;620 |
| 14 | 1920&#215;1080 | | | |

**INLINE SVG ROOTS (paste file body verbatim between `<figure>`&#8230;`<figcaption>`):**
- #2 `lesson_33_hair_strand_anatomy.svg` viewBox 0 0 800 470, id-prefix hsa
- #6 `lesson_33_face_normals_direction.svg` viewBox 0 0 800 470, id-prefix fnd
- #9 `lesson_33_grooming_tools_icons.svg` viewBox 0 0 800 520, id-prefix gti
- #26 `lesson_33_hair_workflow.svg` viewBox 0 0 800 560, id-prefix hwf

**19 RESOLVED UNIQUE ANCHORS (all count==1 in live file; insert figure block AFTER anchor unless marked BEFORE).** edit_file replaces FIRST match only &#8212; each is already unique, but recount the specific invariant after each commit.

_understanding-hair (4): #1, #2, #3, #26_
- **#1** AFTER `shapes everything about how you work with hair systems.</p>`
- **#2** BEFORE `\n                        <p><strong>How strands behave:` (i.e. after strand mermaid </div>)
- **#3** BEFORE `                        <p><strong>The workflow balance:</strong></p>` (parent/child PNG; placed here ONLY, not in hair-basics)
- **#26** BEFORE `                    </div>\n\n                    <h3>Performance Considerations</h3>` (after time-investment mermaid </div>)

_hair-basics (2): #4, #22_
- **#4** AFTER `as white dots (default emitter type)</li>\n                        </ol>`
- **#22** BEFORE `</ul>\n\n                        <p><strong>Enabling children:</strong>` (after why-children </ul>)

_emission-and-distribution (2): #6, #7_
- **#6** BEFORE `</ul>\n\n                        <p><strong>Checking and fixing normals:`
- **#7** BEFORE `</ul>\n\n                        <p><strong>Creating density map (detail`

_grooming-tools (3): #8, #9, #10_
- **#8** BEFORE `</ol>\n\n                        <p><strong>Particle Edit interface:`
- **#9** AFTER `<h4>&#129529; Essential Styling Tools</h4>` (Core Grooming Tools card; before "1. Comb Tool")
- **#10** BEFORE `                        <p><strong>2. Smooth Tool`

_hair-dynamics (2): #12, #14_
- **#12** BEFORE `</ol>\n\n                        <p><strong>What happens when enabled:`
- **#14** AFTER `<h4>&#9881;&#65039; Controlling Hair Behavior</h4>` (Core Dynamics Settings card; before "Structure section")

_materials-and-rendering (5): #15, #16, #17, #18, #30_
- **#15** BEFORE `\n\n                        <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">\n                            <h4>&#128161; Pro Tip: Hair Is Never Pure Black` (Basic-Material card; NOTE card has NO mermaid despite registry wording &#8212; insert at card tail before Pro-Tip nested card)
- **#16 & #17** at Advanced-Material card tail BEFORE `</div>\n                    </div>\n\n                    <h3>Rendering Hair</h3>` (NOTE only ONE mermaid in this card = gradient; #16 then #17 inserted in sequence here; do as TWO separate uniquely-anchored edits or one combined newText with both figures)
- **#18** BEFORE `</ul>\n\n                        <p><strong>Effective lighting setups:` (Lighting Considerations card)
- **#30** BEFORE `</ul>\n\n                        <p><strong>Cycles render settings (Render Propert` (Rendering Hair card)

_project (1): #27_
- **#27** AFTER `Complete hair system start to finish.</p>` (before Project-Goal card)

_common-applications 0, summary 0._

**CAUTION:** #16 and #17 share the same tail anchor; insert #17 only AFTER #16 is committed (the anchor string still exists after #16 lands because #16's figure goes before it), OR build one combined newText = `figure16 + figure17 + anchor`. Recommend combined-newText to avoid a stale second match.

## FINAL INVARIANT TABLE

**Status: COMPLETE** &#8212; all 19 figures integrated, all invariants pass. Final size **301,633 B** (post-QA overlay-margin fix; was 300,913 at integration close, baseline 257,647).

| Invariant | Target | Actual | Pass |
|---|---|---|---|
| `<figure>` | 19 | 19 | YES |
| `<figcaption>` | 19 | 19 | YES |
| `</figure>` | 19 | 19 | YES |
| `<img` | 15 | 15 | YES |
| `<svg` | 19 (4 inline + 15 overlay) | 19 | YES |
| U+2014 literal em-dash | 31 (0 new) | 31 | YES |
| U+00B7 literal middot | 0 | 0 | YES |
| `color="#222"` | 0 | 0 | YES |
| `#667eea` | 0 | 0 | YES |
| `#764ba2` | 0 | 0 | YES |
| `.table-wrap` | 7 | 7 | YES |
| mermaid jsdelivr import | 1 | 1 | YES |
| `class="mermaid"` | 13 | 13 | YES |

### Byte ladder (all commits verified via get_file_info)
| Fig | After bytes | delta |
|---|---|---|
| baseline | 257,647 | -- |
| #1 | 259,039 | +1,392 |
| #2 (inline hsa) | 263,034 | +3,995 |
| #3 | 264,410 | +1,376 |
| #26 (inline hwf) | 269,981 | +5,571 |
| #4 | 271,448 | +1,467 |
| #22 | 272,854 | +1,406 |
| #6 (inline fnd) | 278,384 | +5,530 |
| #7 | 279,522 | +1,138 |
| #8 | 281,086 | +1,564 |
| #9 (inline gti) | 288,014 | +6,928 |
| #10 | 289,165 | +1,151 |
| #12 | 290,342 | +1,177 |
| #14 | 291,481 | +1,139 |
| #15 | 292,959 | +1,478 |
| #16+#17 (combined) | 296,464 | +3,505 |
| #18 | 297,817 | +1,353 |
| #30 | 299,354 | +1,537 |
| #27 | 300,913 | +1,559 |

### Section coverage (final)
- understanding-hair: #1, #2, #3, #26 (4)
- hair-basics: #4, #22 (2)
- emission-and-distribution: #6, #7 (2)
- grooming-tools: #8, #9, #10 (3)
- hair-dynamics: #12, #14 (2)
- materials-and-rendering: #15, #16, #17, #18, #30 (5)
- project: #27 (1)
- common-applications: 0 (all candidates deferred &#8212; acceptable per L27 precedent)
- summary: 0

### Notes / deviations
- #16 + #17 inserted as ONE combined newText at the shared Advanced-Material card tail. First dryRun mis-landed the figures INSIDE the mermaid block (anchor's first `</div>` was the mermaid close); corrected by anchoring on `style G ...color:#fff\n</div>\n</div>\n\n<h3>Rendering Hair` so figures land after mermaid-close, before card-close. Mermaid count verified intact at 13 post-commit.
- #27 is a hero shot with extreme corner crop (subject x>=1284). Callout endpoints placed against measured silhouette edges (leftmost-subject-x per row): crown 1640,462 / mid 1492,618 / tips 1392,842. Verified on-subject via composite + pixel sampling.
- Toolchain: `read_text_file` view_range ignored; region inspection done via copy_file_user_to_claude + python. cairosvg reinstalled per fresh container. All overlays pixel-verified 1:1 before commit.

## QA SECTION

### Browser QA (2026-06-27) &#8212; QA-PASS (after 1 defect fixed)

**Method:** Playwright + real Chromium (Claude-side, pre-provisioned at `/opt/pw-browsers`, build 1194 / playwright 1.56). Live HTML + `styles/main.css` + 15 PNGs staged via `copy_file_user_to_claude`, served on 127.0.0.1 loopback. jsdelivr mermaid ESM import swapped for an offline stub in the QA copy ONLY (live file untouched for the swap). 4 configs: 380 &amp; 900 px &#215; dark &amp; light.

**PNG dims verified** against PRE-FLIGHT table (all 15 match, incl. watch items #16 1330&#215;440, #17 1920&#215;1080, #27 1920&#215;1080, #4 357&#215;777, #8 1920&#215;1046, #12 357&#215;378, #15 930&#215;430, #30 1000&#215;620).

**DEFECT FOUND &amp; FIXED (overlay 1:1 registration):** All 15 overlays registered at dy=&#8722;16px / dh=+32px (uniform across all 4 configs) &#8212; a real ~3% vertical drift, callouts sitting high and stretched. Root cause: the shared `main.css` rule `img { margin: var(--spacing-md) auto }` (16px top/bottom) inflated the `position:relative; display:inline-block` wrapper 32px taller than the bitmap; the `height:100%` overlay then mapped its viewBox onto the inflated box. Shared CSS NOT edited (used by all lessons). Fixed in the LIVE HTML per-figure: added `;font-size:0` to each of the 15 figure wrapper divs + `style="margin:0;vertical-align:top"` to each overlaid `<img>` (15 uniquely-`src`-anchored `edit_file` edits, dryRun&#8594;commit). Validated on QA copy first, then on the post-write live-derived copy.

**RE-BASELINE:** live `get_file_info` &#8594; **301,633 B** (was 300,913; +720 = 48 B &#215; 15 edits exactly, no truncation). chars 300,952.

**Post-fix invariants (live read-back):** `<figure>` 19 / `<figcaption>` 19 / `</figure>` 19 / `<img` 15 / `<svg` 19 &#183; em-dash U+2014 31 (0 new) &#183; U+00B7 0 &#183; arrow U+2192 126 &#183; `color="#222"` 0 &#183; `#667eea` 0 / `#764ba2` 0 &#183; `.table-wrap` 7 / `<table>` 7 / `</table>` 7 &#183; jsdelivr import 1 (LIVE) &#183; `mermaid.initialize` 1 &#183; `class="mermaid"` 13 &#183; currentColor 38 (3 cards + 35 across 4 inline figure SVGs; was 3 pre-figures) &#183; fix markers `;font-size:0"` 15 / `margin:0;vertical-align:top` 15. ALL PASS.

**Post-fix 4-config harness (live-derived copy) &#8212; ALL CONFIGS PASS:**
| Check | 380d | 380l | 900d | 900l |
|---|---|---|---|---|
| doc horiz overflow (scrollW===clientW) | 0 | 0 | 0 | 0 |
| figures / figcaptions | 19/19 | 19/19 | 19/19 | 19/19 |
| PNGs decode (naturalWidth&gt;0, forced eager+scroll) | 15/15 | 15/15 | 15/15 | 15/15 |
| svg non-empty | 19/19 | 19/19 | 19/19 | 19/19 |
| overlay 1:1 (max dev &#8804;0.05px) | 15/15 | 15/15 | 15/15 | 15/15 |
| overlay viewBox==PNG dims | 15/15 | 15/15 | 15/15 | 15/15 |
| inline SVG currentColor (dark rgb(212,212,212)/light rgb(51,65,85)) | 4/4 | 4/4 | 4/4 | 4/4 |
| .table-wrap (no doc overflow; internal scroll @380) | 7/7 | 7/7 | 7/7 | 7/7 |
| mermaid divs lay out (offline stub) | 13/13 | 13/13 | 13/13 | 13/13 |

Watch items #16/#17/#27 all clean; #27 hero callouts stay on-subject at 380px (overlay scales 1:1 with bitmap, no drift). The 2 `js/` 404s (clipboard.js, course-enhancements.js) are QA-bundle omissions, not file defects &#8212; they do not affect layout, figures, or invariants.

**NEW PIPELINE LESSON (overlay margin inflation):** A positioned overlay using `height:100%` inside a `display:inline-block` wrapper inherits the wrapped `<img>`'s vertical margin (shared `img` rule = 16px top/bottom), making the overlay 32px taller and 16px higher than the bitmap &#8212; a silent ~3% registration drift invisible at integration (cairosvg verifies the overlay vs the PNG in isolation, not vs the rendered DOM box). FIX PATTERN for all overlay figures going forward: wrapper gets `font-size:0`, overlaid img gets `margin:0;vertical-align:top`. Detectable only by comparing `img.getBoundingClientRect()` vs `svg.getBoundingClientRect()` in a real browser &#8212; add this to the standard overlay-figure HTML pattern at integration time (L34+) so it never recurs. Do NOT fix in shared `main.css` (multi-lesson blast radius).

**STATUS: L33 FULLY CLOSED &#8212; QA-PASS. Live baseline 301,633 B.**
