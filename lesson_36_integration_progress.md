# L36 (Character Modeling Workflow) &#8212; Integration Progress

**Module 7 (Advanced Modeling), lesson 9 of module.** Slug `character_modeling_workflow`. File `lesson_36_character_modeling_workflow.html`.
**Status:** Phase-0 COMPLETE + SVG BATCH INTEGRATED (2026-06-28). All 8 inline SVGs live in the HTML (273,780 B); invariants PASS. **NEXT: PNG batches (22 figs, &#8804;5/sub-chat) &#8594; full integration &#8594; browser QA.**
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## SOURCE-OF-TRUTH READ ORDER (every session start)
1. `session.md` (head) &#8212; L35 line = FULLY CLOSED; NEXT ACTIVE = L36. [confirmed 2026-06-28]
2. `lesson_36_image_requirements.md` (Part 1 roster, 60 candidates) + `lesson_36_image_requirements_part2.md` (totals/batches). [read]
3. `lesson_36_integration_progress.md` (this file).

---

## CARRYOVER (one-time, from L35 close)
- [ ] Remove leftover `lesson_35_integration_STAGED_BLOCKS.txt` via Blender bridge `os.remove` (no Filesystem delete tool; QA chat had no bridge). Harmless if skipped. **Do at first bridge session (Phase-0 has no bridge work; fold into first PNG batch bridge-up, or skip).**

---

## BASELINE (live, OLD-GEN, created==modified 2026-06-12, untouched) &#8212; UTF-8 python3
- **bytes 242,384** (chars 241,463)
- em-dash **U+2014 75** (all pre-existing prose &#8212; PRESERVE verbatim; recount every checkpoint)
- arrow **U+2192 9**; literal U+00B7 **0**; `&#183;` 0 / `&#8594;` 0 / `&#8212;` 0 (no entities yet)
- **`#667eea` 21 / `#764ba2` 11 / `linear-gradient` 12** (11 purple cards + 1 green card)
- `color="#222"` 0; `color: white` 53; currentColor 0
- figure/figcaption/`</figure>` **0/0/0**; img 0; svg 0
- `<table>` **1** (Target Polygon Counts, `width:100%` &#8212; needs `.table-wrap`); `.table-wrap` 0
- mermaid jsdelivr import **1**; `class="mermaid"` **9** (LIVE); `style _ fill:#667eea` 9 (8&#215;`style A` + 1&#215;`style G`) + 1 init `primaryBorderColor:#667eea`

## SECTIONS (10)
understanding-workflow / reference-setup / topology-principles / box-modeling / mirror-workflow / head-modeling / body-modeling / detail-optimization / project / summary
- h4 anchors: 145 (ample unique integration anchors)
- Nav: back &#8594; `lesson_35_rigid_body_physics.html` (1, valid); next &#8594; `lesson_37_armature_and_bones.html` (1, valid)

---

## PHASE-0 MODERNIZE PLAN (OLD-GEN, mirrors L34/L35 close)
1. **Mermaid: KEEP LIVE + neutralize** (L35 mirror): init `primaryBorderColor:'#667eea'`&#8594;`'#888888'`; all 9 `style _ fill:#667eea`&#8594;`fill:#3a3a3a` (8 `style A` + 1 `style G`). Keep jsdelivr import + 9 `class="mermaid"` divs.
2. **Purple gradient cards (11): neutralize bg, KEEP white text** &#8212; `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)`&#8594;`background: #2a2a2a` on all 11 (3 style-string variants: 9&#215; bare `color: white;`, 1&#215; `color: white; padding: 2rem; margin: 2rem 0;`, 1&#215; `color: white; padding: 2rem;`). `color: white` text KEPT (intentional, like L35's 14).
3. **Green card (1, `#4CAF50`): LEAVE AS-IS** (intentional closer, like L35 green card).
4. **Table (1): wrap** in `<div class="table-wrap">` + add `min-width:max-content` to the `<table style=...>`.
- POST-PHASE-0 INVARIANT TARGETS: `#667eea` 0 / `#764ba2` 0 / `linear-gradient` 1 (green only); U+2014 75 (held); `<table>` 1 / `.table-wrap` 1 / `</table></div>` 1; mermaid jsdelivr 1 / `class="mermaid"` 9 (LIVE); currentColor 0 (none introduced).

### PHASE-0 CLOSE (2026-06-28, VERIFIED LIVE UTF-8 python3 + get_file_info)
**Live bytes 241,975** (baseline 242,384 &#8594; **-409**). 23 edits via `Filesystem:edit_file` dryRun&#8594;commit&#8594;get_file_info, all FIRST-match-only at unique anchors (9 bare cards disambiguated by unique following `<h3>` heading; 9 mermaid fills by unique preceding flow line; table close by unique preceding `</tbody>` indent). **All invariants PASS:** `#667eea` 0 / `#764ba2` 0 / `fill:#667eea` 0 (9 mermaid fills &#8594; `#3a3a3a`) / `linear-gradient` 1 (green `#4CAF50` card KEPT) / U+2014 **75 held** / U+2192 9 / U+00B7 0 / `color: white` 53 (KEPT, intentional) / currentColor 0 / `color="#222"` 0 / `<table>` 1 / `.table-wrap` 1 / `</table></div>` 1 / mermaid jsdelivr 1 / `class="mermaid"` 9 (LIVE) / figure/img/svg 0/0/0. Green gradient closer card (`#4CAF50 0% &#8594; #45a049 100%`) intact. Mermaid init border `#667eea`&#8594;`#888888`. **NEW BASELINE for SVG batch = 241,975 B / U+2014 75.**

---

## ROSTER TRIAGE (60 candidates) &#8212; BUILD High+Medium / DEFER Lower
Part-1 flags 12 HIGH explicitly. Part-2 gives totals (12 High / 18 Medium / 30 Lower; 46 PNG / 14 SVG) but does NOT enumerate M vs L by number &#8212; **split derived here from Part-1 per-image type + "enhance understanding significantly" vs "nice-to-have" cues.**

**HIGH (12, BUILD):** 3, 6, 7, 11, 14, 20, 27, 30, 34, 37, 38, 41
**MEDIUM (18, BUILD):** 2, 4, 5, 8, 9, 12, 13, 16, 17, 18, 19, 21, 22, 24, 31, 33, 35, 42
**LOWER (30, DEFER):** 1, 10, 15, 23, 25, 26, 28, 29, 32, 36, 39, 40, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60

**BUILD = 30 figures** (12 High + 18 Medium).

### FORMAT SPLIT (SVG = vector diagrams/charts/proportion guides; PNG = screenshots/wireframes/sequences/comparisons) &#8212; **LOCKED 2026-06-28 at SVG-batch start**
#2 LOCKED as inline SVG (Part-1 = conceptual 3-panel technique comparison, teaches via labeled boxes/icons not rendered geometry; same class as prior-lesson SVG comparisons). Final inline-SVG count = **8**.
- **INLINE SVG (8) &#8212; BUILT + VERIFIED + WRITTEN to `images/`:**
  | # | id-prefix | file in `images/` |
  |---|-----------|-------------------|
  | 2 | bsp | `lesson_36_02_box_vs_sculpt_vs_poly.svg` |
  | 4 | qfl | `lesson_36_04_quad_flow_pattern.svg` |
  | 9 | ovp | `lesson_36_09_ortho_vs_perspective.svg` |
  | 20 | fpr | `lesson_36_20_facial_proportions.svg` |
  | 34 | pbc | `lesson_36_34_polygon_budget_chart.svg` |
  | 35 | tcl | `lesson_36_35_topology_checklist.svg` |
  | 37 | hhs | `lesson_36_37_head_height_system.svg` |
  | 38 | ptv | `lesson_36_38_proportion_types.svg` |
- **PNG + c36 overlay (22) &#8212; unchanged by #2 lock:** 3,5,6,7,8,11,12,13,14,16,17,18,19,21,22,24,27,30,31,33,41,42

> SVG verification (Claude-side): all 8 root `color="currentColor"`, unique id-prefix, light+dark safe; 0 banned tokens (`color="#222"`/`#667eea`/`#764ba2`); all XML well-formed; all render non-empty on dark+light. Accent fills used (theme-independent, intentional): `#4CAF50` green / `#e8833a` orange / `#3a8ee6` blue / `#e1483a` red / `#9b6dd6` purple / `#fff` inside check/X badges. Each file is a standalone `<svg>...</svg>` (no XML prolog) ready to paste inline.
> PNG figures (later batches) use L33 overlay-margin fix (wrapper `font-size:0` + img `margin:0;vertical-align:top`); cairosvg 1:1 pixel-verify before every overlay commit.

---

## PIPELINE (locked, carry-forward L34/L35)
planning/triage + baseline [THIS DOC] &#8594; Phase-0 modernize [DONE] &#8594; SVG batch build [DONE: 8 built+verified+written to `images/`; INTEGRATION pending] &#8594; PNG batches (&#8804;5 figs/sub-chat, &#8805;5 = own sub-chat; 22 PNG &#8594; ~5 batches) &#8594; INTEGRATION (30&#8805;6 = own chat) &#8594; browser QA (own chat).

## LOCKED RULES (this lesson)
- `\\wsl$\` paths only. 0 new em-dashes (entities `&#183;`/`&#8594;`/`&#8212;`); preserve 75 literal U+2014 verbatim, recount UTF-8 python3 each checkpoint.
- edit_file dryRun&#8594;commit&#8594;get_file_info when available; else read-full&#8594;edit-in-context&#8594;write_file full overwrite (NEVER create_file), diffs first; FIRST-match-only at unique anchors; recount + verify bytes after each commit (write_file truncates >~282KB &#8212; baseline 242KB, watch ceiling during integration).
- Blender bridge 5.1 Windows; WSL via //wsl$/Ubuntu/ UNC; renders&#8594;Windows tempdir&#8594;Pillow-relay (direct UNC write truncates 0 B). EEVEE = `BLENDER_EEVEE`. Bridge health test (render&#8594;move cam 0.5m&#8594;md5) before any render; TRUE-PRISTINE before/after each staging.
- L33 overlay-margin fix baked into EVERY PNG figure. NEVER touch shared `styles/main.css`.
- cairosvg 1:1 pixel-verify before every PNG-overlay commit. Tables: `.table-wrap` + `min-width:max-content`.
- **cairosvg PREVIEW GOTCHA (new, found at L36 SVG batch):** cairosvg silently renders a BLANK canvas when the root `<svg>` carries `style="max-width:100%;height:auto"` (it computes height:auto as 0). For cairosvg preview/pixel-verify ONLY, strip that root style before rendering; KEEP it in the live HTML (browser needs it for responsive inline SVG). Also: cairosvg does not resolve `currentColor` from the `color` property &#8212; for preview, literal-substitute `currentColor`&#8594;`#d4d4d4` (dark) / `#33415a` (light). Neither is an SVG defect; both are cairosvg-only.
- No Filesystem delete &#8212; purge temps via bridge `os.remove`. Tooling: `pip install playwright cairosvg pillow --break-system-packages`; chromium /opt/pw-browsers.

## BLENDER STATE
TRUE-PRISTINE (carried from L35 close; L35 was HTML-only integration+QA, no bridge work). SVG batch was inline-only, no bridge work. **Run bridge health test before any L36 render.**

---

## PROGRESS LOG
- 2026-06-28 &#183; PLANNING done: read session.md head + roster Part-1/Part-2; baseline locked (242,384 B / U+2014=75); OLD-GEN confirmed (created==modified 2026-06-12) &#8594; Phase-0 required; sections + nav verified; triage 30 BUILD (12 High + 18 Medium) / 30 DEFER Lower; format split provisional 8 inline SVG + ~22 PNG. This doc created.
- 2026-06-28 &#183; PHASE-0 COMPLETE: 23 edit_file edits committed + verified live (241,975 B / -409; U+2014 75 held; `#667eea`/`#764ba2`/`fill:#667eea` 0; linear-gradient 1 green; table-wrap 1; mermaid 9 LIVE). New baseline 241,975 B. NEXT: SVG batch (~8 inline) in own sub-chat.
- 2026-06-28 &#183; SVG BATCH BUILD COMPLETE (own sub-chat, inline-only, Blender untouched): #2 LOCKED inline SVG &#8594; final count 8 = `{2 bsp, 4 qfl, 9 ovp, 20 fpr, 34 pbc, 35 tcl, 37 hhs, 38 ptv}`. All 8 authored Claude-side, validated (WF-OK, root currentColor, 0 banned tokens, render non-empty dark+light), visually inspected, text-overflow fixes applied (fig04 shortened right text; fig20 viewBox 560&#8594;720 + eye-width ruler moved above eyes; fig37 viewBox 560&#8594;720 + note shortened; fig34 dup-attr fixed). **All 8 written to `\\wsl$\...\images\` with `lesson_36_NN_slug.svg` names + verified on disk (get_file_info, e.g. fig02 4034 B).** New cairosvg preview gotcha recorded in LOCKED RULES. **INTEGRATION NOT done: live HTML still at 241,975 B / U+2014 75 / figure/img/svg 0/0/0 (unchanged). Next sub-chat = integrate these 8 inline SVGs into the live HTML.**
- 2026-06-28 &#183; SVG BATCH INTEGRATED (own sub-chat, HTML-only, Blender TRUE-PRISTINE): all 8 inline SVGs pasted inline inside `<figure>`+`<figcaption>` (NOT `<img>`), each at a unique `<h4>`/card anchor via `Filesystem:edit_file` dryRun&#8594;commit&#8594;get_file_info, FIRST-match-only. Live HTML 241,975 &#8594; **273,780 B** (+31,805, every delta matched projection exactly). U+2014 **75 held** at every checkpoint (figcaptions + SVG text use `&#8212;`/`&#8211;`/`&#8594;`/`&#183;` entities, 0 literal banned chars in any inserted block, pre-verified Claude-side). All invariants PASS (see table below). Each SVG keeps root `style="max-width:100%;height:auto"` (responsive). Shared `styles/main.css` UNTOUCHED. **NEXT: PNG batches.**
- 2026-06-28 &#183; PNG BATCH 1 `{3,5,6,7,8}` base renders DONE (own sub-chat). Bridge up (Blender 5.1.1, TRUE-PRISTINE confirmed); one-time carryover `os.remove` of `lesson_35_integration_STAGED_BLOCKS.txt` DONE; bridge health test PASS (md5 differ on 0.5m cam move, cam restored). 5 base PNGs produced + relayed (Windows tempdir &#8594; PIL &#8594; `images/`): #3 `good_vs_bad_topology` 1600&#215;800, #5 `edge_loop_flow_body` 800&#215;1200, #6 `face_mask_topology` 1000&#215;1000, #7 `joint_topology_density` 1600&#215;1600, #8 `reference_image_setup` 1600&#215;900. All px-boxes == intended c36 box (verified PIL + get_file_info). Labels/callouts deferred to c36 overlay at integration (flat bands only, no fake text). Live HTML UNCHANGED 273,780 B. Blender TRUE-PRISTINE at close (factory slate rebuilt, 9 temps purged). NEXT: PNG batch 2 `{11,12,13,14,16}` (own sub-chat).
- 2026-06-28 &#183; PNG BATCH 2 `{11,12,13,14,16}` base renders DONE (own sub-chat). Bridge up (Blender 5.1.1); TRUE-PRISTINE verified on entry (carried from batch-1 close); bridge health test PASS (md5 differ on 0.5m cam move, cam restored). 5 base PNGs produced + relayed (Windows tempdir &#8594; PIL &#8594; `images/`): #11 `box_modeling_sequence` 1800&#215;600, #12 `proportional_editing` 1600&#215;800, #13 `loop_cut_tool` 1600&#215;900, #14 `mirror_modifier_setup` 1600&#215;1200, #16 `face_construction_sequence` 1600&#215;800. All px-boxes == intended c36 box (verified PIL + get_file_info). Real Blender geometry for all sequence/wireframe panels (cube&#8594;torso progression, prop-edit dome, loop-cut subdiv mesh, mirror half&#8594;full+subsurf, head sphere+features) w/ WIREFRAME modifier (material_offset slot); #13 left tool column + #14 panel-3 settings = Blender-style PIL chrome (flat regions, no fake text). All labels/callouts/influence-circle/loop-counts DEFERRED to c36 overlay at integration. Live HTML UNCHANGED 273,780 B (no HTML touched). Blender TRUE-PRISTINE at close (factory Camera+Cube+Light rebuilt, EEVEE/AgX/1920&#215;1080/fps24/1-250; temps purged inline per figure). NEXT: PNG batch 3 `{17,18,19,21,22}` (own sub-chat).
- 2026-06-28 &#183; PNG BATCH 3 `{17,18,19,21,22}` base renders DONE (own sub-chat). Bridge up (Blender 5.1.1); TRUE-PRISTINE teardown + bridge health test PASS on entry (md5 differ on 0.5m cam move). 5 base PNGs produced + relayed (Windows tempdir &#8594; PIL &#8594; `images/`): #17 `eye_socket_topology` 1000&#215;1000, #18 `mouth_topology` 1000&#215;1000, #19 `face_loops_connection` 800&#215;1200, #21 `arm_extrusion_sequence` 1800&#215;600, #22 `elbow_topology` 1600&#215;800. All px-boxes == intended c36 box (verified PIL + get_file_info). Real Blender geometry: #17 concentric almond eye-socket ring loops + raised eyelid rim + seated eyeball (3/4 view); #18 concentric elliptical lip loops around dark mouth aperture + soft Cupid's-bow lift (3/4 view); #19 UV-sphere head front-ortho wireframe w/ 2 eye + 1 mouth recess + nose ridge (figure-8 eyes&#8594;mouth connection PATHS deferred to overlay); #21 6-panel fixed-ortho strip socket&#8594;shoulder&#8594;upper arm&#8594;elbow&#8594;forearm&#8594;wrist (host sphere + progressive ring-extrusion, warm wire, flat dividers + top band); #22 2-panel straight-vs-bent elbow tube w/ clustered support loops (smooth arc bend shows inside compression / outside stretch, subsurf+WIREFRAME). All labels/callouts/ring-numbers/loop-counts/step-numbers/compression-stretch-zone tags DEFERRED to c36 overlay at integration (flat bands/dividers only, no fake text). Live HTML UNCHANGED 273,780 B (no HTML touched). Blender TRUE-PRISTINE at close (factory Camera+Cube+Point rebuilt, EEVEE/AgX/1920&#215;1080@100/fps24/1-250; all temp panels purged via os.remove). NEXT: PNG batch 4 `{24,27,30,31,33}` (own sub-chat).
- 2026-06-28 &#183; PNG BATCH 4 `{24,27,30,31,33}` base renders DONE (own sub-chat). Bridge up (Blender 5.1.1); TRUE-PRISTINE teardown + bridge health test PASS on entry (md5 differ on 0.5m cam move, cam restored). 5 base PNGs produced + relayed (Windows tempdir &#8594; PIL &#8594; `images/`): #24 `leg_extrusion_sequence` 2100&#215;600, #27 `torso_topology_full_body` 800&#215;1200, #30 `subdivision_before_after` 1600&#215;800, #31 `subdivision_level_comparison` 2000&#215;600, #33 `proportional_editing_muscle` 1600&#215;800. All px-boxes == intended c36 box (verified PIL + get_file_info). Real Blender geometry: #24 7-panel fixed-ortho strip, pelvis host stub + progressive ring-extrusion hip&#8594;thigh&#8594;knee&#8594;calf&#8594;ankle&#8594;foot (host visible every panel, warm wire, flat dividers + top band, same approach as #21); #27 full-body quad humanoid front-ortho wireframe (head sphere + tapered torso/hips + T-pose arm stubs + legs joined, horizontal/vertical loops, cool wire, WIREFRAME mod); #30 same faceted bust mesh rendered Subsurf-off (low-poly, L) vs Subsurf-2 (smooth cage, R), flat divider; #31 same cube base at Subsurf Level 0/1/2/3 (poly counts 6/24/96/384 quads captured for overlay), 4-panel; #33 torso patch grid flat curved chest (L) vs prop-edit gaussian-falloff pec mounds + ab hint (R), near-front ortho. All labels/callouts (step numbers, before/after + influence-circle, Level-N poly-count tags, pec/ab annotations, connection-point dots) DEFERRED to c36 overlay at integration (flat bands/dividers only, no fake text). Live HTML UNCHANGED 273,780 B (no HTML touched). Blender TRUE-PRISTINE at close (factory Camera+Cube+Point rebuilt, EEVEE/AgX/1920&#215;1080@100/fps24/1-250; 16 temps purged via os.remove). NEXT: PNG batch 5 (final) `{41,42}` (own sub-chat).
- 2026-06-28 &#183; PNG BATCH 5 (FINAL) `{41,42}` base renders DONE (own sub-chat). Bridge up (Blender 5.1.1); TRUE-PRISTINE verified on entry (3 objs Camera+Cube+Point, 0 mats, factory cam loc, carried from batch-4 close); bridge health test PASS (md5 differ on 0.5m cam move, cam restored). 2 base PNGs produced + relayed (Windows tempdir &#8594; PIL &#8594; `images/`): #41 `project_torso_reference` 1800&#215;600, #42 `mirror_clipping_demo` 1600&#215;800. Both px-boxes == intended c36 box (verified PIL + get_file_info). Real Blender geometry: #41 single box-modeled torso (10-ring elliptical profile hip&#8594;waist&#8594;chest&#8594;shoulders&#8594;neck-stub, capped, + T-pose tapered arm stubs joined) rendered 4 views &#8212; front/side/3&#8260;4 solid clay w/ Subsurf-2 + 3&#8260;4 WIREFRAME (Subsurf-then-WIREFRAME mod, warm wire slot1 on dark surf slot0), 3-point area lights, ortho; #42 quad half-strip near X=0 w/ Mirror(use_clip) + WIREFRAME &#8212; clip OFF panel pushes seam column ACROSS center (overshoot/jitter) so mirrored halves collide/overlap at midline, clip ON panel snaps seam to X=0 for a clean joined surface. All labels/callouts/view-tags/CLIP-OFF-ON tags DEFERRED to c36 overlay at integration (flat bands/dividers only, no fake text). Live HTML UNCHANGED 273,780 B (no HTML touched). Blender TRUE-PRISTINE at close (factory Camera+Cube+Light(POINT) rebuilt, EEVEE/AgX/1920&#215;1080@100/fps24/1-250; 8 temps purged via os.remove). **&#8594; ALL 22 PNG BASE RENDERS COMPLETE (batches 1&#8211;5). NEXT: full INTEGRATION (own chat, 30&#8805;6 figures, edit_file only, ~282 KB ceiling) &#8594; browser QA (own chat).**
- 2026-06-28 &#183; PNG INTEGRATION sub-batch A `{3,5,6,7,8}` DONE + VERIFIED LIVE (own chat): 5 c36 overlays authored, cairosvg 1:1 pixel-verified, banned-char clean (entities only), committed FIRST-match-only via edit_file dryRun&#8594;commit at unique card-tail anchors; L33 margin fix baked. Live 273,780 &#8594; **288,463 B**; figure/svg/img 13/13/5; U+2014 75 held.
- 2026-06-28 &#183; PNG INTEGRATION sub-batch B `{11,12,13,14,16}` DONE + VERIFIED LIVE (own chat): 5 c36 overlays, same pipeline (cairosvg pixel-verify, banned clean, FIRST-match-only, L33 fix). Live &#8594; **~301,515 B**; figure/svg/img 18/18/10; U+2014 75 held.
- 2026-06-28 &#183; PNG INTEGRATION sub-batch C `{17,18,19,21,22}` DONE + VERIFIED LIVE (own chat): 5 c36 overlays, same pipeline. Live &#8594; **~316,644 B**; figure/svg/img 23/23/15; U+2014 75 held.
- 2026-06-28 &#183; PNG INTEGRATION sub-batch D `{24,27,30,31,33}` DONE + VERIFIED LIVE (own chat): 5 c36 overlays, same pipeline; byte-ladder 316,644 &#8594; +#24 318,358 &#8594; +#27 320,177 &#8594; +#30 321,515 &#8594; +#31 322,828 &#8594; +#33 **324,257 B**; figure/svg/img 28/28/20; U+2014 75 held.
- 2026-06-28 &#183; PNG INTEGRATION sub-batch E (FINAL) `{41,42}` DONE + VERIFIED LIVE (own chat): 2 c36 overlays authored from PIL+`view`-confirmed geometry (#41 4-panel 1800&#215;600 dividers 450/900/1350, top band 0&#8211;55, panels front/side/3&#8260;4 clay + 3&#8260;4 wireframe; #42 2-panel 1600&#215;800 divider 800, top band 0&#8211;60, clip-OFF crossing/collision L vs clip-ON clean R), cairosvg 1:1 pixel-verified + composited over real PNGs for registration, banned-char clean (entities only), committed FIRST-match-only via edit_file dryRun&#8594;commit at unique card-tail anchors (#41 project `Before You Begin` &#8594; Setup `</ol></div>`; #42 mirror-workflow `Mirror Workflow Best Practices` &#8594; card `</ul></div>`); L33 margin fix baked. Byte-ladder 324,257 &#8594; +#41 325,692 &#8594; +#42 **327,410 B** (matched projection). **&#8594; ALL 22 PNG INTEGRATED &#8212; 30/30 figures live; U+2014 75 held; INTEGRATION COMPLETE.** NEXT: browser QA (own chat).

---

## SVG INTEGRATION CLOSE (2026-06-28, VERIFIED LIVE UTF-8 python3 + get_file_info)

### Placement map (8 inline SVG, section &#183; anchor)
| # | id | section | inserted after (card/anchor) |
|---|----|---------|------------------------------|
| 2 | bsp | understanding-workflow | `🛠️ Modeling Techniques Compared` card |
| 9 | ovp | reference-setup | `⚠️ Orthographic vs. Perspective` card |
| 4 | qfl | topology-principles | `✅ Rule 1: Quads, Quads, Quads!` card |
| 35 | tcl | topology-principles | `✅ Topology Quality Checks` card |
| 20 | fpr | head-modeling | `👁️ Eyes` card (Facial Features in Detail) |
| 37 | hhs | body-modeling | `🎯 Body Modeling Priorities` card |
| 38 | ptv | body-modeling | `💡 Torso Topology Pattern` card |
| 34 | pbc | detail-optimization | Target Polygon Counts `</table></div>` |

### Byte-ladder (each delta == figure block bytes, matched projection)
Phase-0 baseline 241,975 &#8594; +#2 bsp 246,351 &#8594; +#9 ovp 249,871 &#8594; +#4 qfl 253,270 &#8594; +#35 tcl 258,022 &#8594; +#20 fpr 262,139 &#8594; +#37 hhs 265,887 &#8594; +#38 ptv 270,336 &#8594; +#34 pbc **273,780**.

### FINAL INVARIANT TABLE (live HTML, UTF-8 python3, not grep)
| invariant | value | target |
|-----------|-------|--------|
| bytes | 273,780 | 273,780 |
| em-dash U+2014 | 75 | 75 (held) |
| arrow U+2192 | 9 | (pre-existing prose) |
| literal U+00B7 | 0 | 0 |
| literal U+2013 en-dash | 8 | (pre-existing prose @ 3141&#8211;3145 + 4242&#8211;4244; SVG/caption use `&#8211;` entity) |
| figure / figcaption / `</figure>` | 8 / 8 / 8 | 8 / 8 / 8 |
| svg / `</svg>` | 8 / 8 | 8 inline, 0 overlay |
| img | 0 | 0 |
| `#667eea` / `#764ba2` / `color="#222"` | 0 / 0 / 0 | 0 |
| currentColor | 41 | (8 SVG roots + 33 internal) |
| `.table-wrap` / `</table></div>` | 1 / 1 | 1 / 1 |
| mermaid jsdelivr / `class="mermaid"` | 1 / 9 LIVE | 1 / 9 |
| responsive roots `max-width:100%;height:auto` | 8 | 8 |
| id-prefixes (bsp/ovp/qfl/tcl/fpr/pbc/hhs/ptv) | all 2&#215; | present |
| caption Figure numbers | 2,4,9,20,34,35,37,38 | 8 |

**NEW BASELINE for PNG batches = 273,780 B / U+2014 75 / figure&#183;svg 8&#183;8 / img 0.**

### PNG REMAINING (c36 overlay) &#8212; &#8804;5 figs/sub-chat, each own sub-chat
**BATCH 1 `{3,5,6,7,8}` DONE 2026-06-28** (base renders, overlays deferred to integration). **BATCH 2 `{11,12,13,14,16}` DONE 2026-06-28** (base renders, overlays deferred). **BATCH 3 `{17,18,19,21,22}` DONE 2026-06-28** (base renders, overlays deferred). **BATCH 4 `{24,27,30,31,33}` DONE 2026-06-28** (base renders, overlays deferred). **BATCH 5 (FINAL) `{41,42}` DONE 2026-06-28** (base renders, overlays deferred). **ALL 22 PNG BASE RENDERS COMPLETE &#8212; 0 remaining.** Overlays + L33 overlay-margin fix (wrapper `font-size:0` + img `margin:0;vertical-align:top`) + cairosvg 1:1 pixel-verify all DEFERRED to full INTEGRATION (own chat). Watch ~282 KB write ceiling during PNG integration (live now 273,780 B). **NEXT: full INTEGRATION (own chat, 30&#8805;6).**
**CARRYOVER: DONE** &#8212; `lesson_35_integration_STAGED_BLOCKS.txt` removed via bridge `os.remove` at batch-1 bridge-up (2026-06-28).

#### PNG BATCH 1 base renders (DONE 2026-06-28, own sub-chat) &#8212; px-box == intended c36 box, verified PIL + get_file_info
| # | file in `images/` | px-box | type | composite |
|---|-------------------|--------|------|-----------|
| 3 | `lesson_36_03_good_vs_bad_topology.png` | 1600&#215;800 | GOOD(quad 384q/0t/0n) vs BAD(128q/187t/19n) wireframe | 2-panel, green/red bands |
| 5 | `lesson_36_05_edge_loop_flow_body.png` | 800&#215;1200 | full-body quad humanoid wireframe (400q/0t), front ortho | single, cool wire |
| 6 | `lesson_36_06_face_mask_topology.png` | 1000&#215;1000 | head 3/4-front wireframe, eye/mouth concentric loop insets | single |
| 7 | `lesson_36_07_joint_topology_density.png` | 1600&#215;1600 | elbow/knee/shoulder/hip bent-joint tubes (3/5/4/4 support loops) | 2&#215;2 grid, warm bands |
| 8 | `lesson_36_08_reference_image_setup.png` | 1600&#215;900 | real ref-plane+start-cube viewport render + PIL Blender UI chrome (props column, flat subpanels) | viewport + UI mockup |

All labels/callouts (GOOD/BAD, loop counts, panel field text) DEFERRED to c36 overlay at integration (bridge composite = flat color bands only, no fake text, per L35 convention). Live HTML byte count UNCHANGED 273,780 B (no HTML touched this chat). Blender TRUE-PRISTINE at close (factory Camera+Cube+Light rebuilt; 9 temps purged). Bridge health test PASS pre-render (md5 differ on 0.5m cam move). EEVEE = `BLENDER_EEVEE`.
**Suggested batch 2 = `{11,12,13,14,16}`.**

#### PNG BATCH 2 base renders (DONE 2026-06-28, own sub-chat) &#8212; px-box == intended c36 box, verified PIL + get_file_info
| # | file in `images/` | px-box | type | composite |
|---|-------------------|--------|------|-----------|
| 11 | `lesson_36_11_box_modeling_sequence.png` | 1800&#215;600 | cube&#8594;scaled&#8594;subdiv&#8594;shaped(waist)&#8594;shoulders&#8594;subsurf-smooth torso, front ortho | 6-panel strip, flat dividers |
| 12 | `lesson_36_12_proportional_editing.png` | 1600&#215;800 | flat wire grid vs gaussian-falloff dome (prop-edit result), 3/4 view; WIREFRAME mod | 2-panel, flat divider |
| 13 | `lesson_36_13_loop_cut_tool.png` | 1600&#215;900 | subdivided cube (added loops) viewport render + PIL Blender UI chrome (left props column subpanels) | viewport + UI mockup |
| 14 | `lesson_36_14_mirror_modifier_setup.png` | 1600&#215;1200 | half-mesh / +Mirror(clip) / settings-panel PIL mockup / Mirror+Subsurf result | 2&#215;2 grid, flat dividers |
| 16 | `lesson_36_16_face_construction_sequence.png` | 1600&#215;800 | head sphere&#8594;rounder&#8594;eye sockets&#8594;brow&#8594;mouth&#8594;nose&#8594;ears&#8594;final smooth, 3/4-front; WIREFRAME mod | 4&#215;2 grid, flat dividers |

All labels/callouts (step numbers, influence circle, loop counts, panel field text) DEFERRED to c36 overlay at integration (bridge composite = flat color bands/regions only, no fake text, per L35 convention). Live HTML byte count UNCHANGED 273,780 B (no HTML touched this chat). Blender TRUE-PRISTINE at close (factory Camera+Cube+Light rebuilt; temps purged inline). Bridge health test PASS pre-render (md5 differ on 0.5m cam move). EEVEE = `BLENDER_EEVEE`.
**Suggested batch 3 = `{17,18,19,21,22}`.**

#### PNG BATCH 3 base renders (DONE 2026-06-28, own sub-chat) &#8212; px-box == intended c36 box, verified PIL + get_file_info
| # | file in `images/` | px-box | type | composite |
|---|-------------------|--------|------|-----------|
| 17 | `lesson_36_17_eye_socket_topology.png` | 1000&#215;1000 | concentric almond eye-socket ring loops + raised eyelid rim + seated eyeball, 3/4 view; WIREFRAME mod | single |
| 18 | `lesson_36_18_mouth_topology.png` | 1000&#215;1000 | concentric elliptical lip loops around dark mouth aperture + soft Cupid's-bow, 3/4 view; WIREFRAME mod | single |
| 19 | `lesson_36_19_face_loops_connection.png` | 800&#215;1200 | UV-sphere head front-ortho wireframe, 2 eye + 1 mouth recess + nose ridge (figure-8 PATHS = overlay) | single |
| 21 | `lesson_36_21_arm_extrusion_sequence.png` | 1800&#215;600 | socket&#8594;shoulder&#8594;upper arm&#8594;elbow&#8594;forearm&#8594;wrist (host sphere + progressive ring-extrusion), warm wire | 6-panel strip, flat dividers + top band |
| 22 | `lesson_36_22_elbow_topology.png` | 1600&#215;800 | straight vs bent elbow tube w/ clustered support loops (smooth arc bend = inside compression / outside stretch), subsurf+WIREFRAME | 2-panel, flat divider |

All labels/callouts (ring numbers, lip-line/surface/outer-loop tags, figure-8 connection paths, step numbers, loop counts, compression/stretch-zone tags) DEFERRED to c36 overlay at integration (bridge composite = flat color bands/regions only, no fake text, per L35 convention). Live HTML byte count UNCHANGED 273,780 B (no HTML touched this chat). Blender TRUE-PRISTINE at close (factory Camera+Cube+Point rebuilt, EEVEE/AgX/1920&#215;1080@100/fps24/1-250; all temp panels purged via os.remove). Bridge health test PASS pre-render (md5 differ on 0.5m cam move). EEVEE = `BLENDER_EEVEE`.
**Suggested batch 4 = `{24,27,30,31,33}` &#8594; DONE.**

#### PNG BATCH 4 base renders (DONE 2026-06-28, own sub-chat) &#8212; px-box == intended c36 box, verified PIL + get_file_info
| # | file in `images/` | px-box | type | composite |
|---|-------------------|--------|------|-----------|
| 24 | `lesson_36_24_leg_extrusion_sequence.png` | 2100&#215;600 | hip-socket&#8594;thigh&#8594;knee&#8594;calf&#8594;ankle&#8594;foot-stub progressive ring-extrusion off pelvis host stub (fixed-ortho, host visible every panel), warm wire | 7-panel strip, flat dividers + top band |
| 27 | `lesson_36_27_torso_topology_full_body.png` | 800&#215;1200 | full-body quad humanoid wireframe (head sphere + torso/hips + T-pose arm stubs + legs), horizontal/vertical loops, front ortho; WIREFRAME mod, cool wire | single |
| 30 | `lesson_36_30_subdivision_before_after.png` | 1600&#215;800 | same bust mesh: faceted low-poly base (L) vs Subsurf-2 smooth cage (R); WIREFRAME mod | 2-panel, flat divider + top band |
| 31 | `lesson_36_31_subdivision_level_comparison.png` | 2000&#215;600 | same cube base at Subsurf Level 0/1/2/3 (poly counts 6/24/96/384 quads = overlay); WIREFRAME mod | 4-panel, flat dividers + bottom band |
| 33 | `lesson_36_33_proportional_editing_muscle.png` | 1600&#215;800 | torso patch grid: flat curved chest (L) vs prop-edit gaussian-falloff pec mounds + ab hint (R); near-front ortho, WIREFRAME mod | 2-panel, flat divider + top band |

All labels/callouts (step numbers, before/after + influence-circle, Level-N poly-count tags, pec/ab annotations, connection-point dots) DEFERRED to c36 overlay at integration (bridge composite = flat color bands/regions/dividers only, no fake text, per L35 convention). Live HTML byte count UNCHANGED 273,780 B (no HTML touched this chat). Blender TRUE-PRISTINE at close (factory Camera+Cube+Point rebuilt, EEVEE/AgX/1920&#215;1080@100/fps24/1-250; all temp panels purged via os.remove, 16 temps). Bridge health test PASS pre-render (md5 differ on 0.5m cam move, cam restored). EEVEE = `BLENDER_EEVEE`.
**Suggested batch 5 (final) = `{41,42}` &#8594; DONE.**

#### PNG BATCH 5 (FINAL) base renders (DONE 2026-06-28, own sub-chat) &#8212; px-box == intended c36 box, verified PIL + get_file_info
| # | file in `images/` | px-box | type | composite |
|---|-------------------|--------|------|-----------|
| 41 | `lesson_36_41_project_torso_reference.png` | 1800&#215;600 | project torso 4-view ref: front / side / 3&#8260;4 (3 solid clay + Subsurf-2) + 3&#8260;4 WIREFRAME (warm wire on dark surf); single box-modeled profiled-ring torso + T-pose arm stubs, joined | 4-panel strip, flat dividers + top band |
| 42 | `lesson_36_42_mirror_clipping_demo.png` | 1600&#215;800 | mirror-clip before/after: half-strip near X=0, seam verts pushed ACROSS center = overlap/crossing collision at midline (clip OFF, L) vs seam snapped to X=0 = clean joined surface (clip ON, R); Mirror+WIREFRAME mods | 2-panel, flat divider + top band |

Real Blender geometry both figures (#41 profiled-ring torso + arm-stub join, Subsurf-2 solid panels + Subsurf-then-WIREFRAME panel-4; #42 quad half-strip + Mirror modifier use_clip False/True driving the visible collision-vs-clean contrast). All labels/callouts (#41 view tags front/side/3&#8260;4/wireframe; #42 CLIP OFF/ON + crossing/blocked-at-center tags) DEFERRED to c36 overlay at integration (bridge composite = flat color bands/dividers only, no fake text, per L35 convention). Live HTML byte count UNCHANGED 273,780 B (no HTML touched this chat). Blender TRUE-PRISTINE at close (factory Camera+Cube+Light(POINT) rebuilt, EEVEE/AgX/1920&#215;1080@100/fps24/1-250; 8 temps purged via os.remove). Bridge health test PASS pre-render (md5 differ on 0.5m cam move, cam restored). EEVEE = `BLENDER_EEVEE`.
**&#8594; ALL 22 PNG BASE RENDERS COMPLETE. NEXT: full INTEGRATION (own chat).**

---

## PNG INTEGRATION &#8212; COMPLETE (own chat, 2026-06-28, edit_file only, NO write_file). All 22 c36 PNG overlays committed across sub-batches A&#8211;E; live HTML 327,410 B; 30/30 figures; U+2014 75 held. Full close + FINAL INVARIANT TABLE at end of this section. (The Batch-A detail + per-figure placement below is retained for the record; the &#8220;REMAINING PNG (17)&#8221; plan that follows it is now fully executed &#8212; see INTEGRATION CLOSE.)

### Sub-batch A `{3,5,6,7,8}` &#8212; DONE + VERIFIED LIVE (UTF-8 python3 + get_file_info)
All 5 c36 overlays authored Claude-side, cairosvg 1:1 pixel-verified (viewBox == PNG px-box exactly, non-blank; preview strips the absolute-position root style + substitutes currentColor&#8594;#d4d4d4), banned-char pre-verified (0 literal U+2014/U+2013/U+00B7/U+2192 &#8212; entities only), then committed FIRST-match-only via `Filesystem:edit_file` dryRun&#8594;commit, each at a unique card-tail anchor. L33 overlay-margin fix baked into every figure (wrapper `font-size:0` + img `style="margin:0;vertical-align:top"`). Overlay root carries NO `max-width` style (it is `position:absolute;width:100%;height:100%`), so cairosvg renders it fine and the live browser still scales it via the wrapper.

| # | file / px-box | section &#183; anchor (card tail) | overlay carries |
|---|---|---|---|
| 3 | `lesson_36_03_good_vs_bad_topology.png` 1600&#215;800 | topology-principles &#183; `Clean poles: ... (3, 5, or 6 edges acceptable)` | GOOD&#10003;/BAD&#10007; bands, 4 quality callouts, divider x=800 |
| 5 | `lesson_36_05_edge_loop_flow_body.png` 800&#215;1200 | topology-principles &#183; `Creates natural-looking muscle definition` (Rule 2 card) | neck/torso/arm/leg colored loop ellipses + labels |
| 7 | `lesson_36_07_joint_topology_density.png` 1600&#215;1600 | topology-principles &#183; `Stylized characters: ... less overall density` (Density card) | ELBOW3/KNEE5/SHOULDER4/HIP4 + loop badges; **dividers are 800/800 (NOT map's 525/545 &#8212; verified vs PNG: orange bands rows 0-63 &amp; 802-863, col split x=800)** |
| 8 | `lesson_36_08_reference_image_setup.png` 1600&#215;900 | reference-setup &#183; `ensure you're in ortho mode (Numpad 5)` | viewport labels (bg ref image / start cube) + Background-Images panel fields (Add Image/Opacity/Axis), chrome x&#8776;960+ |
| 6 | `lesson_36_06_face_mask_topology.png` 1000&#215;1000 | head-modeling &#183; `Pixar, Marvel, AAA games—everywhere` (Mask-pattern card; **anchor holds a literal em-dash &#8212; preserved verbatim**) | concentric eye/mouth loops + cheek-connect paths + figure-8 caption |

**Byte-ladder (Batch A):** 273,780 &#8594; +#3 276,394 &#8594; +#5 ~279,095 &#8594; +#7 ~282,320 &#8594; +#8 ~285,308 &#8594; +#6 **288,463**. **Live invariants after Batch A (VERIFIED):** bytes 288,463; figure/figcaption/`</figure>` **13/13/13**; svg **13** (8 inline + 5 overlay); img **5**; U+2014 **75 held**; U+2192 9; U+00B7 0; `#667eea`/`#764ba2`/`color="#222"` 0; `.table-wrap` 1; mermaid jsdelivr 1 / `class="mermaid"` 9 LIVE.

### REMAINING PNG (17) `{11,12,13,14,16,17,18,19,21,22,24,27,30,31,33,41,42}` &#8212; ALL NOW INTEGRATED (sub-batches B&#8211;E, 2026-06-28). Placement plan as committed (each a unique card-tail anchor):
- #11 box_modeling_sequence 1800&#215;600 &#8594; box-modeling `&#9989; Box Modeling Step-by-Step`
- #12 proportional_editing 1600&#215;800 &#8594; box-modeling `&#128296; Your Box Modeling Toolkit`
- #13 loop_cut_tool 1600&#215;900 &#8594; box-modeling `&#127891; Practical Example: Building a Torso`
- #14 mirror_modifier_setup 1600&#215;1200 &#8594; mirror-workflow `&#9989; Mirror Modifier Setup`
- #16 face_construction_sequence 1600&#215;800 &#8594; head-modeling `&#127959;&#65039; Head Construction Method`
- #17 eye_socket_topology 1000&#215;1000 &#8594; head-modeling `&#128065;&#65039; Eyes` (SVG #20 already here &#8212; pick a DIFFERENT unique sub-anchor)
- #18 mouth_topology 1000&#215;1000 &#8594; head-modeling `&#128068; Mouth - The Expression Machine`
- #19 face_loops_connection 800&#215;1200 &#8594; head-modeling `&#128161; Alternative Method: Plane-Based Face Modeling`
- #21 arm_extrusion_sequence 1800&#215;600 &#8594; box-modeling `&#129534; Extruding Arms`
- #22 elbow_topology 1600&#215;800 &#8594; body-modeling `&#128170; Arm Construction`
- #24 leg_extrusion_sequence 2100&#215;600 &#8594; box-modeling `&#129529; Extruding Legs`
- #27 torso_topology_full_body 800&#215;1200 &#8594; body-modeling `&#9989; Building the Torso`
- #30 subdivision_before_after 1600&#215;800 &#8594; detail-optimization `&#9989; Using Subdivision Surface Effectively`
- #31 subdivision_level_comparison 2000&#215;600 &#8594; detail-optimization `&#128161; Subdivision Best Practices`
- #33 proportional_editing_muscle 1600&#215;800 &#8594; detail-optimization `&#128170; Adding Subtle Anatomy`
- #41 project_torso_reference 1800&#215;600 &#8594; project `&#128203; Before You Begin`
- #42 mirror_clipping_demo 1600&#215;800 &#8594; mirror-workflow `&#128296; Mirror Workflow Best Practices`

**TARGET CLOSE:** figure/figcaption/`</figure>` 30/30/30; svg 30 (8 inline + 22 overlay); img 22; U+2014 75 held; `#667eea`/`#764ba2`/`color="#222"` 0; table-wrap 1; mermaid jsdelivr 1 / `class="mermaid"` 9; all 22 c36 PNG src present; all 22 overlays carry L33 margin fix. Then browser QA (own chat).

---

## PNG INTEGRATION CLOSE (2026-06-28, VERIFIED LIVE UTF-8 python3 + get_file_info) &#8212; INTEGRATION COMPLETE

All 22 c36 PNG overlays committed across sub-batches A `{3,5,6,7,8}` + B `{11,12,13,14,16}` + C `{17,18,19,21,22}` + D `{24,27,30,31,33}` + E `{41,42}`, each authored Claude-side, cairosvg 1:1 pixel-verified (viewBox == PNG px-box exactly, non-blank), banned-char pre-verified (0 literal U+2014/U+2013/U+00B7/U+2192 &#8212; entities only), then committed FIRST-match-only via `Filesystem:edit_file` dryRun&#8594;commit&#8594;get_file_info at unique card-tail anchors. L33 overlay-margin fix (wrapper `font-size:0` + img `margin:0;vertical-align:top`) baked into all 22. Shared `styles/main.css` UNTOUCHED.

### Batch-E final figures (#41/#42) &#8212; geometry confirmed via PIL + `view` of the actual PNGs (not geometry maps)
| # | file / px-box | section &#183; anchor (card tail) | overlay carries |
|---|---|---|---|
| 41 | `lesson_36_41_project_torso_reference.png` 1800&#215;600 | project &#183; `Before You Begin` &#8594; Setup Your Workspace `</ol></div>` (before `<h4>Part 1: Creating the Base Form`) | top band y=40 panel labels Front/Side/3&#8260;4 View/Wireframe (dividers x=450/900/1350); bottom captions Symmetry&#183;proportions / Depth&#183;back curve / Overall form / Quad flow&#183;clean loops |
| 42 | `lesson_36_42_mirror_clipping_demo.png` 1600&#215;800 | mirror-workflow &#183; `Mirror Workflow Best Practices` &#8594; card `</ul></div>` (before `<h4>Center Line Edge Topology`) | top band Clipping OFF&#10007; / Clipping ON&#10003; (divider x=800); red box around colliding seam column (clip OFF, L) + red &#8220;overshoot at midline&#8221;; green vertical center line + &#8220;vertical center loop&#8221; (clip ON, R); bottom captions Center verts cross&#183;halves collide / Seam blocked at X=0&#183;clean join |

### Full close byte-ladder (each delta == figure block bytes, matched projection)
SVG-batch close 273,780 &#8594; **Batch A** +#3 276,394 &#8594; +#5 279,095 &#8594; +#7 282,320 &#8594; +#8 285,308 &#8594; +#6 288,463 &#8594; **Batch B** &#8594; ~301,515 &#8594; **Batch C** &#8594; 316,644 &#8594; **Batch D** +#24 318,358 &#8594; +#27 320,177 &#8594; +#30 321,515 &#8594; +#31 322,828 &#8594; +#33 324,257 &#8594; **Batch E** +#41 325,692 &#8594; +#42 **327,410**.

### FINAL INVARIANT TABLE (live HTML, UTF-8 python3, not grep)
| invariant | value | target |
|-----------|-------|--------|
| bytes | 327,410 | 327,410 |
| em-dash U+2014 | 75 | 75 (held) |
| arrow U+2192 literal | 9 | (pre-existing prose) |
| literal U+00B7 | 0 | 0 |
| literal U+2013 en-dash | 8 | (pre-existing prose; SVG/caption use `&#8211;` entity) |
| figure / figcaption / `</figure>` | 30 / 30 / 30 | 30 / 30 / 30 |
| svg / `</svg>` | 30 / 30 | 30 (8 inline + 22 overlay) |
| img | 22 | 22 |
| `#667eea` / `#764ba2` / `color="#222"` | 0 / 0 / 0 | 0 |
| `.table-wrap` / `</table></div>` | 1 / 1 | 1 / 1 |
| mermaid jsdelivr / `class="mermaid"` | 1 / 9 LIVE | 1 / 9 |
| distinct c36 PNG src present | 22 | 22 (all `{3,5,6,7,8,11,12,13,14,16,17,18,19,21,22,24,27,30,31,33,41,42}`) |
| L33 margin-fix imgs (`margin:0;vertical-align:top`) | 22 | 22 |
| overlay svg roots (`position:absolute`) | 22 | 22 |

**INTEGRATION COMPLETE &#8212; 30/30 figures live (8 inline SVG + 22 PNG+c36 overlay). NEXT: browser QA (own chat, Playwright/Chromium 380/900 &#215; dark/light; live HTML + main.css + 22 PNGs on loopback, offline mermaid stub in QA copy only, live file untouched; verify 0 doc overflow, 22/22 PNG decode, overlays register 1:1, L33 margin fix held max|dy|=max|dh|=0).**

---

## &#167;QA &#8212; BROWSER QA PASS (2026-06-28, Claude-side real Chromium 1194 / Playwright)

**Harness:** live HTML + `styles/main.css` + all 22 `images/lesson_36_*.png` staged Claude-side and served on `http://127.0.0.1:5599` loopback. jsdelivr is egress-blocked Claude-side &#8594; the mermaid ESM `import` was swapped for an inline no-op offline stub **in the QA copy only** (`qa_copy.html`); the 9 `class="mermaid"` divs were preserved. The two local helper scripts (`js/clipboard.js`, `js/course-enhancements.js`) were stubbed empty to suppress 404s (no layout role). **Live file never touched by the harness** &#8212; re-verified post-run: **327,410 B, mtime 2026-06-28 20:18:55 unchanged** (identical to pre-QA `get_file_info`). All imgs forced `loading='eager'` + scrolled to trigger decode (live imgs are `loading="lazy"`).

**Configs:** 380 &#215; dark, 380 &#215; light, 900 &#215; dark, 900 &#215; light (4/4).

**Results (all 4 configs):**
| check | result |
|-------|--------|
| doc horizontal overflow (`scrollWidth===clientWidth`) | **0** (380:380/380, 900:900/900) all 4 |
| PNG decode (forced eager+scroll) | **22/22** all 4, 0 broken |
| overlay registration 1:1 | **22/22** all 4 &#8212; max|dx|=max|dy|=max|dh|=0.000px; max|dw|=0.031px (sub-px rounding on wide strips #24 2100w / #31 2000w) |
| svg non-empty | **30/30** all 4 |
| inline SVG `currentColor` inverts | **8/8** &#8212; dark rgb(212,212,212) / light rgb(51,65,85) |
| `.table-wrap` contain | **1/1** &#8212; internal scroll @380 (581 vs 298, 0 doc overflow); fits @900 (802 vs 802) |
| mermaid divs lay out | **9/9** all 4 (offline stub = harness limit, not a defect) |
| pageerrors | **0** all 4 |

**L33 overlay-margin sanity (defect signature dy&#8776;&#8722;16px / dh&#8776;+32px):** HELD on **all 22** figures individually &#8212; max|dy|=0.000px, max|dh|=0.000px (per-figure dump @380_dark; deltas identical across all 4 configs). Wrapper `font-size:0` + img `margin:0;vertical-align:top` fix confirmed effective on every PNG figure.

**NO DEFECTS found. 0 live-HTML edits.** No fix &#8594; U+2014 unchanged at **75** (no recount needed; nothing edited); bytes unchanged at **327,410**. Shared `styles/main.css` UNTOUCHED.

**L36 FULLY CLOSED &#8212; INTEGRATION COMPLETE + QA-PASS (2026-06-28).** Next-pointer: **L37 (Armature and Bones)**, `lesson_37_armature_and_bones.html`.
