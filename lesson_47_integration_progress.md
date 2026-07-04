# Lesson 47 &#8212; Post-Processing · Integration Progress

Module 11, lesson 1. Live HTML: `lesson_47_post_processing.html` (project root `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`).

## Phase-0 baseline

- **Pristine baseline (true-pristine, 0 figures):** md5 `8eccd5e1ee7590454e4f9aacd2cf5154` / 260,687 B / LF-only / 0 CR / 57x literal U+2014 / 124x literal U+2192 / 0 U+2013 / 0 U+00B7.
  - File untouched since 2026-06-12 (created==modified), 0 `<figure>` / 0 `<img>` / 0 `<svg>`.
- **Post-Phase-0:** md5 `bf66fb37c647882d055fb36e0acb8338` / 261,132 B / LF-only / 0 CR.
- Byte delta: 260,687 -> 261,132 = **+445 B** (deterministic; bridge dry-run md5 byte-exact to Claude-side before commit).

## Content check (TOC anchors)

**NO fix needed.** TOC lists 10 anchors; all 10 resolve to 10 top-level `<section>` ids in body order (open==close==10); 0 dead links, 0 missing sections, no nesting defect. Section order = intro-post-processing, compositor-basics, render-passes, color-correction, atmospheric-effects, common-fixes, external-software, final-output, project, summary. Content already complete + correctly structured (matches L44/L46, unlike L43).

## Phase-0 log (all deterministic, applied to pristine -> committed)

1. **4 gradient cards:** `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white` -> `background: #2a2a2a; color: white`.
2. **6 mermaid node fills:** `fill:#667eea` -> `fill:#3a3a3a` (6x `style A fill:#667eea` across the mermaid diagrams).
3. **1 mermaid theme var:** `primaryBorderColor: '#667eea'` -> `'#888888'`.
4. **Tables:** wrapped **all 7 bare `<table>`** in `<div class="table-wrap" style="overflow-x:auto;">` (0 pre-existing wraps; 7 new, each carrying inline overflow-x:auto).
5. **Em-dashes:** 57 literal U+2014 -> `&#8212;`. **U+2192 literal HELD at 124** (unchanged).

## Carry-forward note

- **overflow-x:auto injected on all 7 `.table-wrap` divs** (restores the L43/L44/L46 pattern; L45 lacked it and flagged a mobile-table dependency on the site `main.css` during browser QA). L47 wraps carry inline `overflow-x:auto`, so mobile table clamping does not depend on external css.

## Write verification

- Input re-verified pristine (md5 `8eccd5e1...`) at commit time. Bridge dry-run md5 == `bf66fb37` **before** commit -> binary LF write -> `get_file_info` == 261,132 B -> fresh independent Filesystem re-read (copy_file_user_to_claude) -> **all 31 post-Phase-0 invariants re-asserted PASS**: bytes 261,132; md5 bf66fb37; CR 0; LF 4385; U+2014 literal 0; &#8212; 57; U+2192 124 HOLD; U+2013 0; U+00B7 0; linear-gradient 0; #667eea 0; #764ba2 0; #2a2a2a 4; fill:#3a3a3a 6; primaryBorderColor '#888888' 1; `<table>` 7; table-wrap 7 (all 7 carry inline overflow-x:auto); bare-table 0; color="#222" 0; figure/img/svg 0/0/0; jsdelivr 1; section count 10; open==close==10; TOC==section order; dead anchors 0; back lesson_46 1; next lesson_48 1.

## Roster triage

**Verdict: 16 inline SVG / 0 PNG.** L47 (Post-Processing) is a pure conceptual/UI/reference lesson &#8212; compositor node graphs + interface anatomy, render-pass breakdowns, curve/color-wheel diagrams, atmospheric effect-stacks, schematic before/after fix panels, external-software pipeline maps. There is NO rendered-beauty or photoreal-capture content anywhere that would require a real Blender render PNG; every "before/after" here is best shown as a schematic SVG panel (matches L44/L45/L46 = 0 PNG; unlike L43's 9+5). Existing scaffolding stays and is NOT duplicated: **6 mermaid** (top-level workflow TD; node data-flow LR; pass Add LR; correction-&gt;grading LR; fog-node LR; export-decision TD) + **7 tables** (compositor shortcuts; split-tone recipes; effect amateur/pro; quick-fixes; software choice; view-transform; formats) + the `<pre>` blocks. The 16 SVGs add the non-redundant conceptual/anatomy value those absorb none of.

**16-SVG id-prefix registry** (files `images/lesson_47_NN_slug.svg`; each `role="img"` + `aria-labelledby`-&gt;`<title>`/`<desc>`; standalone root `color="#222"` KEEP now / STRIP at integration):

| NN | prefix | slug | section anchor | what it shows |
|----|--------|------|----------------|---------------|
| 01 | ppw | post_processing_workflow | intro-post-processing | render-&gt;composite-&gt;passes-&gt;color-&gt;effects-&gt;final pipeline strip (concept, complements the mermaid TD with stage detail/icons) |
| 02 | rvp | render_vs_post | intro-post-processing | what to fix in-render vs in-post (two-column decision panel) |
| 03 | cif | compositor_interface | compositor-basics | Compositor editor anatomy (header/node area/backdrop/toolbar/N-panel callouts) |
| 04 | ntx | node_taxonomy | compositor-basics | essential node types grouped (input / color / filter / distort / output) with role-hex coding |
| 05 | nop | node_operations | compositor-basics | basic node ops (add/connect/mute/viewer/backdrop) mini-panels |
| 06 | rpc | render_pass_concept | render-passes | one beauty image decomposed into stacked passes (diffuse/glossy/AO/Z/normal/emission) |
| 07 | epr | essential_passes_ref | render-passes | essential-pass reference cards (what each pass isolates + typical use) |
| 08 | pcw | pass_compositing_wiring | render-passes | pass -&gt; operation -&gt; recombine wiring schematic (complements the Add-mix mermaid with the full recombine) |
| 09 | cvg | correction_vs_grading | color-correction | corrective (neutral/technical) vs creative (stylized/mood) split panel |
| 10 | rcv | rgb_curves | color-correction | RGB-curves anatomy (master + per-channel, shadow/mid/highlight handles, S-curve contrast) |
| 11 | wheel | color_grading_wheels | color-correction | lift/gamma/gain (shadows/mids/highlights) 3-wheel grading model |
| 12 | atd | atmospheric_depth | atmospheric-effects | depth cueing: fog/haze falloff by distance (near sharp -&gt; far washed, Z-driven) |
| 13 | fxs | effect_stack | atmospheric-effects | atmospheric effect stack order (glow/bloom -&gt; lens -&gt; grain -&gt; sharpen) with why-order |
| 14 | fix | before_after_fixes | common-fixes | schematic before/after grid (exposure / fireflies / white-balance / sharpness) |
| 15 | swp | software_pipeline | external-software | Blender EXR/TIFF -&gt; Photoshop / DaVinci / After Effects roundtrip map (complements the export-decision mermaid) |
| 16 | out | output_delivery | final-output | delivery matrix: use-case -&gt; format / color-space / bit-depth (web / print / video / archive) |

**Section coverage:** intro-post-processing {01,02}; compositor-basics {03,04,05}; render-passes {06,07,08}; color-correction {09,10,11}; atmospheric-effects {12,13}; common-fixes {14}; external-software {15}; final-output {16}; project {none &#8212; recap of prior sections, mermaid/pre already carry it}; summary {none}.

**Post-integration target invariants** (assert at INTEGRATION close on fresh disk re-read): `<figure>` 16 / `<figcaption>` 16 / `<img>` 0 / inline `<svg>` 16 / `aria-labelledby` 16; NO overlay bars; color="#222" 0 (all stripped at integration); HOLD **&#8212; 57** (body-prose entities unchanged; any em-dash inside SVG figure content counts separately &#8212; real invariant is U+2014-literal 0 in the live HTML) / **U+2192 124**; U+2013 0 / U+00B7 0 / #667eea 0 / #764ba2 0 / linear-gradient 0; section ids 10 (order == TOC); back lesson_46 1 / next lesson_48 1; mermaid 6; jsdelivr 1; `<table>` 7 / table-wrap 7 (all carry inline overflow-x:auto). Baseline pre-integration live HTML = 261,132 B / md5 bf66fb37c647882d055fb36e0acb8338 / LF-only.

**SVG plan-lock:** role-hex palette #FF6B00 (brand/primary) / #4ADE80 (keep-positive) / #E63946 (warning/problem) / #4A9EFF (field-info/data) / #B47EE8 (practice/creative) / #F5C242 (caution); banned literals U+2014, U+2013, U+00B7-literal, #667eea, #764ba2, linear-gradient; SVG text via `write_file` (base64 BANNED; hex reserved for binary); per-SVG loop = author Claude-side -&gt; banned-literal check -&gt; cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) verify -&gt; `write_file` to `images/lesson_47_NN_slug.svg` byte-exact LF -&gt; copy back + md5 round-trip + get_file_info -&gt; append SVG build log. Batches of ~3.

## SVG build log

**Batch 1 (01&#8211;03) built + banned-clean + cairosvg dark+light verified + EYE-CONFIRMED + on disk** (`images/lesson_47_NN_slug.svg`, LF-only, get_file_info verified):
- **01 ppw** post_processing_workflow &#8212; 3,547 B / md5 `6c2dccc3831220e26fd3584e3b0f2894`. intro-post-processing. 6-stage pipeline strip (raw&#8594;composite&#8594;passes&#8594;color&#8594;effects&#8594;final) + rule-of-thumb bar.
- **02 rvp** render_vs_post &#8212; 3,253 B / md5 `db6fd05befb37dfba2ea2133ef1934b0`. intro-post-processing. Two-column decision panel (re-render-only [E63946] vs post-fixable [4ADE80]).
- **03 cif** compositor_interface &#8212; 4,505 B / md5 `e598094def6d78fe22466445f5a5c177`. compositor-basics. Compositor editor anatomy (header toggles, node graph w/ Render Layers&#8594;Color Balance&#8594;Composite, backdrop preview, N-panel, callout legend). NOTE: a dead `fill="url(#nograd)"` rect was dropped at write (undefined gradient ref); disk file is the clean 4,505-B version, not the 4,588-B local draft.

**Batch 2 (04&#8211;06) built + banned-clean + cairosvg dark+light verified + EYE-CONFIRMED + on disk + md5 round-trip + get_file_info** (`images/lesson_47_NN_slug.svg`, LF-only / CR 0; written server-side via Blender bridge as `%r`-safe literal, dry-run md5 == disk md5 == Claude-side md5):
- **04 ntx** node_taxonomy &#8212; 4,076 B / md5 `15d2fe70a4b726cb0d925e4815315c79`. compositor-basics. Five node families color-coded (INPUT 4ADE80 / COLOR B47EE8 / FILTER 4A9EFF / DISTORT F5C242 / OUTPUT FF6B00), representative nodes + role caption per column.
- **05 nop** node_operations &#8212; 4,065 B / md5 `e719da749df51d3245e035aa5689de64`. compositor-basics. Five op mini-panels (1 Add [Shift+A] / 2 Connect [socket drag w/ wired sockets] / 3 Mute [M, dashed bypass] / 4 Send to Viewer [Ctrl+Shift+Click] / 5 Toggle Backdrop [live preview swatch]).
- **06 rpc** render_pass_concept &#8212; 3,953 B / md5 `8c6408919d75ee52980b275cfffd0d58`. render-passes. BEAUTY = DIFFUSE + GLOSSY + AO + Z/NORMAL + EMISSION decomposition (beauty panel [FF6B00] `=` passes column `+` data-passes column, each pass captioned with what it isolates).

**Remaining 10:** batch-3 {07 epr, 08 pcw, 09 cvg}; batch-4 {10 rcv, 11 wheel, 12 atd}; batch-5 {13 fxs, 14 fix, 15 swp}; batch-6 {16 out}.

**Batch 3 (07&#8211;09) built + banned-clean + cairosvg dark+light verified + EYE-CONFIRMED + on disk + md5 round-trip + get_file_info** (`images/lesson_47_NN_slug.svg`, LF-only / CR 0; written server-side via Blender bridge, disk md5 == Claude-side md5):
- **07 epr** essential_passes_ref &#8212; 4,761 B / md5 `97d5ac64dcbd0a49b8bf892ae530365b`. render-passes. Eight pass reference cards (Combined / Diffuse-Glossy / AO / Z-Depth / Normal / Mist + full-width Cryptomatte w/ ID-mask swatches), each with what-it-isolates + typical USE.
- **08 pcw** pass_compositing_wiring &#8212; 4,737 B / md5 `c67a10c0e2690c00cd9a0d15a0dac327`. render-passes. Full recombine node tree: Render Layers (Diffuse/Glossy/AO/Z) &#8594; Add &#8594; Multiply(AO) &#8594; Mix(fog, fac=Z) &#8594; Composite; Z drawn as dashed blue data wire; order-matters caption.
- **09 cvg** correction_vs_grading &#8212; 3,609 B / md5 `a7e74400c5f34c92308e242be7b0e987`. color-correction. Two-panel TECHNICAL [4A9EFF] correction (exposure/WB/points, neutral swatch) vs CREATIVE [B47EE8] grading (palette/mood/vignette, teal-orange swatch); correction-first ordering.

**Remaining 7:** batch-4 {10 rcv, 11 wheel, 12 atd}; batch-5 {13 fxs, 14 fix, 15 swp}; batch-6 {16 out}.

**Batch 4 (10&#8211;12) built + banned-clean + cairosvg dark+light STAT-VERIFIED + XML well-formed + on disk + md5 round-trip + get_file_info** (`images/lesson_47_NN_slug.svg`, LF-only / CR 0; written server-side via Blender bridge, disk md5 == Claude-side md5). NOTE: the view-tool empty-payload glitch recurred this session (both PNG and JPEG returned blank), so eye-confirm was replaced by stat verification &#8212; each render 760x400 with wide luminance spread (192&#8211;240) + thousands of distinct colors (proves full multi-element render, not blank), plus XML parse + content-needle + `role="img"`/`aria` asserts all pass.
- **10 rcv** rgb_curves &#8212; 3,806 B / md5 `37dfab997419bb0b0f88d7fdb135d8ce`. color-correction. Input/output curve graph (grid + no-change diagonal + FF6B00 S-curve, shadow/mid/highlight handles color-coded) + 4 side-note chips (pull shadows, lift highlights, S=contrast, per-channel R/G/B).
- **11 wheel** color_grading_wheels &#8212; 3,636 B / md5 `e95c6ba59e22d78898a589fa70a41005`. color-correction. Three grading wheels LIFT[4A9EFF]/GAMMA[F5C242]/GAIN[FF6B00] (shadows/mids/highlights), each w/ tint dot + brightness slider; teal-lift + orange-gain cinematic caption.
- **12 atd** atmospheric_depth &#8212; 3,397 B / md5 `963f73bee3198ed5ee8ee07d0d2a813b`. atmospheric-effects. Near-sharp&#8594;far-hazy layered hills/trees over a fog `<linearGradient>` (SVG elem, NOT the banned css token) + near/mid/far labels + Z-depth 0.0&#8594;1.0 distance bar + wire-it-up note.

**Remaining 4:** batch-5 {13 fxs, 14 fix, 15 swp}; batch-6 {16 out}.

**Batch 5 (13&#8211;15) built + banned-clean + cairosvg dark+light STAT-VERIFIED + XML well-formed + on disk + md5 round-trip + get_file_info** (`images/lesson_47_NN_slug.svg`, LF-only / CR 0; written server-side via Blender bridge, disk md5 == Claude-side md5; view-tool glitch still active this session so eye-confirm = stat verification: 760x400, luminance spread 240&#8211;245, thousands of distinct colors, XML parse + content-needle + `role="img"`/`aria` asserts all pass).
- **13 fxs** effect_stack &#8212; 3,330 B / md5 `f74d2489b8e58846309dfce36f2c9d95`. atmospheric-effects. Vertical 4-stage stack 1 Glare&amp;Bloom[F5C242] &#8595; 2 Lens[B47EE8] &#8595; 3 Grain[4A9EFF] &#8595; 4 Sharpen[FF6B00], each with why-this-order rationale.
- **14 fix** before_after_fixes &#8212; 4,134 B / md5 `6194dc07c8e47483975fc4a9b5ba7f72`. common-fixes. 2x2 before/after grid (Underexposed / Fireflies / Color cast / Too soft), each cell E63946-bordered w/ BEFORE+AFTER swatches + F5C242 FIX label.
- **15 swp** software_pipeline &#8212; 4,658 B / md5 `8a2d898770560ceb55fdfc83e77eeff6`. external-software. Blender[FF6B00] &#8594; EXR/TIFF export chips &#8594; Photoshop[4A9EFF]/DaVinci[B47EE8]/AfterEffects[E63946] &#8594; Delivery[4ADE80] roundtrip map + EXR-vs-TIFF note.

**Remaining 1:** batch-6 {16 out}.

**Batch 6 (16) built + banned-clean + cairosvg dark+light STAT-VERIFIED + XML well-formed + on disk + md5 round-trip + get_file_info** (`images/lesson_47_16_out.svg`, LF-only / CR 0; written server-side via Blender bridge, disk md5 == Claude-side md5; eye-confirm = stat verification per session view-tool glitch: 760x400, spread 241, 3,792 colors, needle + `role="img"`/`aria` asserts pass).
- **16 out** output_delivery &#8212; 3,630 B / md5 `820dbfd35c605c6ee9910d75b36872ee`. final-output. 4-row delivery matrix Web[4ADE80]/Print[F5C242]/Video[4A9EFF]/Archive[E63946] x Format[FF6B00]/Color-space[4A9EFF]/Bit-depth[B47EE8] header; PNG-JPEG/TIFF/H.264-ProRes/EXR rows.

**ALL 16/16 SVG BUILT.**

## Integration COMPLETE (2026-07-04)

All 16 SVGs inlined at their §Roster-triage section anchors (each immediately after its `<h3>`), each root ` color="#222"` STRIPPED, each wrapped `<figure>`+`<figcaption>` (figcaption = SVG `<title>`). Write path = Phase-0 pattern: Claude-side transform hard-asserted, reproduced SERVER-SIDE via Blender bridge (dry-run md5 byte-exact to Claude-side BEFORE commit &#8594; binary LF write &#8594; `get_file_info`==344,941 &#8594; fresh Filesystem re-read re-assert ALL PASS). Anchor map: intro-post-processing {01 ppw @ "The Post-Processing Workflow", 02 rvp @ "Post-Processing vs. Getting It Right in Render"}; compositor-basics {03 cif @ "Compositor Interface Overview", 04 ntx @ "Essential Node Types", 05 nop @ "Basic Node Operations"}; render-passes {06 rpc @ "Understanding Render Passes", 07 epr @ "Essential Render Passes", 08 pcw @ "Basic Pass Compositing"}; color-correction {09 cvg @ "Correction vs. Grading", 10 rcv @ "RGB Curves Mastery", 11 wheel @ "Creative Color Grading"}; atmospheric-effects {12 atd @ "Understanding Atmospheric Depth", 13 fxs @ "Combining Effects"}; common-fixes {14 fix @ "Fixing Exposure Problems"}; external-software {15 swp @ "File Format Considerations"}; final-output {16 out @ "Understanding Output Requirements"}.

**Live HTML now 344,941 B / md5 `e7ed707d8b903820b75cfb6471ea0902` / LF-only** (baseline 261,132 &#8594; 344,941 = +83,809 B).

POST-INTEGRATION INVARIANTS (ALL PASS on fresh disk re-read): `<figure>` 16 / `<figcaption>` 16 / `<img>` 0 / inline `<svg>` 16 / `aria-labelledby` 16 / `role="img"` 16; NO overlay bars; color="#222" 0 / #667eea 0 / #764ba2 0 / linear-gradient 0 / U+2013 0 / U+00B7 0; **U+2014 literal 0** / **U+2192 literal 124 HELD**; &#8212; total 77 (57 body-prose HELD + 20 inside SVG figure content &#8212; L44/L45-parallel split; real invariant U+2014-literal-0 holds); section ids 10 (order == TOC); back lesson_46 1 / next lesson_48 1; mermaid 6; jsdelivr 1; `<table>` 7 / table-wrap 7; CR 0. All 16 inlined SVGs XML well-formed; all 16 figcaptions == their SVG `<title>`. **0 PNG** (roster verdict).

## BROWSER QA (2026-07-04) &#8212; PASS

Harness = real Chromium (Playwright chromium-1194 at `/opt/pw-browsers`, `--no-sandbox`) over local http. Live file copied Claude-side byte-exact (md5 `e7ed707d8b903820b75cfb6471ea0902` + 344,941 B + 0 CR all match disk). All 23 post-integration invariants re-asserted on the fresh copy BEFORE serving &#8212; all PASS (`<figure>` 16 / `<figcaption>` 16 / `<img>` 0 / inline `<svg>` 16 / `aria-labelledby` 16 / `role="img"` 16; color="#222"/#667eea/#764ba2/linear-gradient/U+2013/U+00B7/U+2014-literal all 0; U+2192 124; &#8212; 77; section ids 10 order==TOC; back lesson_46 1 / next lesson_48 1; mermaid 6; jsdelivr 1; `<table>` 7 / table-wrap 7; CR 0; all 16 inline SVG XML well-formed). QA-only render copy rewrote the one jsdelivr mermaid import to LOCAL mermaid@10.9.6 ESM (`vendor/mermaid-dist/`, 156-file dist from npm, CDN blocked) &#8212; **live import line NOT touched** on disk. No image staging (0 PNG). Tested desktop 1440x900 + mobile 390x844.

**RESULTS (both widths):** 16/16 `<figure>` + 16/16 `<figcaption>`; 16 in-figure inline `<svg>` render non-zero bbox (760xNN each, 0 zero-size); 0 `<img>`; 6 `.mermaid` &#8594; 6 rendered `<svg>` (local ESM, all chunks 200, no parse errors); 0 pageerrors. Desktop h-overflow **0** (scrollW 1440). Only console errors = 4 expected site-scaffold 404s (styles/main.css, js/clipboard.js, js/course-enhancements.js, favicon.png), resolve on Ray's real server.

**MOBILE FINDING (sandbox-only, not a live defect) &#8212; L45-parallel:** at 390px raw h-overflow was 418 (scrollW 808) because L47's 16 inline SVGs carry fixed `width="760"` and the document's own `<style>` has NO `figure svg{max-width:100%}` clamp &#8212; mobile SVG clamping depends entirely on the site `styles/main.css` (404 in sandbox). Verified: injecting the real `figure svg{max-width:100%;height:auto}` rule drops mobile h-overflow to **0** with all 6 mermaid still rendering. On Ray's real server (main.css served) the overflow does not occur. Flagged as a live main.css dependency (same class as L45's mobile-table finding), NOT a QA failure. NOTE for future lessons: unlike the tables (which carry inline `overflow-x:auto` from Phase 0), the inline SVGs have no inline responsive clamp, so their mobile fit is main.css-dependent.

**VERDICT: PASS.** Live HTML unchanged (344,941 B / md5 e7ed707d8b903820b75cfb6471ea0902 / LF-only). L47 pipeline COMPLETE end-to-end (Phase 0 &#8594; roster triage &#8594; SVG 16 &#8594; integration &#8594; browser QA PASS).

## Status

**Phase-0 COMPLETE.** **Roster triage COMPLETE + locked (16 SVG / 0 PNG).** **SVG 16/16 BUILT + verified.** **INTEGRATION COMPLETE + verified.** **BROWSER QA PASS (2026-07-04)** (see §BROWSER QA above). Live HTML = 344,941 B / md5 e7ed707d8b903820b75cfb6471ea0902 / LF-only, unchanged by QA. **L47 FULLY CLOSED end-to-end.** NEXT ACTIVE = L48 (own fresh chat, start at Phase 0).
