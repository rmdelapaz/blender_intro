# L36 (Character Modeling Workflow) &#8212; Integration Progress

**Module 7 (Advanced Modeling), lesson 9 of module.** Slug `character_modeling_workflow`. File `lesson_36_character_modeling_workflow.html`.
**Status:** Phase-0 COMPLETE (2026-06-28). SVG batch NEXT (own sub-chat). Started 2026-06-28 (own chat).
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

### FORMAT SPLIT (SVG = vector diagrams/charts/proportion guides; PNG = screenshots/wireframes/sequences/comparisons)
SVG-recommended in Part-1: {1,4,9,10,20,34,35,37,38,39,40,44,51,52,59}. Intersect with BUILD set:
- **INLINE SVG (8):** 4 (Quad Flow), 9 (Ortho vs Perspective), 20 (Facial Proportions), 34 (Polygon Budget chart), 35 (Topology Checklist), 37 (Head-Height System), 38 (Proportion Types)  &#8212; plus **2 (Box vs Sculpt vs Poly comparison, diagram)** as inline SVG. _(count to finalize at SVG batch; ~8)_
- **PNG + c36 overlay (~22):** 3,5,6,7,8,11,12,13,14,16,17,18,19,21,22,24,27,30,31,33,41,42

> NOTE: format split is provisional; locked per-figure at SVG-batch start. PNG figures use L33 overlay-margin fix (wrapper `font-size:0` + img `margin:0;vertical-align:top`); cairosvg 1:1 pixel-verify before every overlay commit.

---

## PIPELINE (locked, carry-forward L34/L35)
planning/triage + baseline [THIS DOC] &#8594; Phase-0 modernize &#8594; SVG batch (~8 inline) &#8594; PNG batches (&#8804;5 figs/sub-chat, &#8805;5 = own sub-chat; ~22 PNG &#8594; ~5 batches) &#8594; INTEGRATION (30&#8805;6 = own chat) &#8594; browser QA (own chat).

## LOCKED RULES (this lesson)
- `\\wsl$\` paths only. 0 new em-dashes (entities `&#183;`/`&#8594;`/`&#8212;`); preserve 75 literal U+2014 verbatim, recount UTF-8 python3 each checkpoint.
- edit_file dryRun&#8594;commit&#8594;get_file_info when available; else read-full&#8594;edit-in-context&#8594;write_file full overwrite (NEVER create_file), diffs first; FIRST-match-only at unique anchors; recount + verify bytes after each commit (write_file truncates >~282KB &#8212; baseline 242KB, watch ceiling during integration).
- Blender bridge 5.1 Windows; WSL via //wsl$/Ubuntu/ UNC; renders&#8594;Windows tempdir&#8594;Pillow-relay (direct UNC write truncates 0 B). EEVEE = `BLENDER_EEVEE`. Bridge health test (render&#8594;move cam 0.5m&#8594;md5) before any render; TRUE-PRISTINE before/after each staging.
- L33 overlay-margin fix baked into EVERY PNG figure. NEVER touch shared `styles/main.css`.
- cairosvg 1:1 pixel-verify before every PNG-overlay commit. Tables: `.table-wrap` + `min-width:max-content`.
- No Filesystem delete &#8212; purge temps via bridge `os.remove`. Tooling: `pip install playwright cairosvg pillow --break-system-packages`; chromium /opt/pw-browsers.

## BLENDER STATE
TRUE-PRISTINE (carried from L35 close; L35 was HTML-only integration+QA, no bridge work). **Run bridge health test before any L36 render.**

---

## PROGRESS LOG
- 2026-06-28 &#183; PLANNING done: read session.md head + roster Part-1/Part-2; baseline locked (242,384 B / U+2014=75); OLD-GEN confirmed (created==modified 2026-06-12) &#8594; Phase-0 required; sections + nav verified; triage 30 BUILD (12 High + 18 Medium) / 30 DEFER Lower; format split provisional 8 inline SVG + ~22 PNG. This doc created.
- 2026-06-28 &#183; PHASE-0 COMPLETE: 23 edit_file edits committed + verified live (241,975 B / -409; U+2014 75 held; `#667eea`/`#764ba2`/`fill:#667eea` 0; linear-gradient 1 green; table-wrap 1; mermaid 9 LIVE). New baseline 241,975 B. NEXT: SVG batch (~8 inline) in own sub-chat.
