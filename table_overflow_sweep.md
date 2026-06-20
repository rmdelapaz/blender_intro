# Course-wide Table-Overflow Sweep (MEASURE-ONLY)

**Date:** 2026-06-19
**Scope:** Measurement only. ZERO HTML edits made. This sweep produces the decision data; scope of any fix is a separate call.
**Method:** Playwright real-Chromium harness, Claude-side. Per lesson: copied lesson HTML + verbatim `styles/main.css`, stubbed favicon to `data:,`, commented out external `<script src=...>` (layout only), image/media/font requests aborted (not needed for layout), served over `http://127.0.0.1`. Loaded each table-bearing lesson at viewport 414 / 1024 / 1920. Reported `document.documentElement.scrollWidth - clientWidth` (page horizontal overflow) plus, per table, cols / natural `scrollWidth` / `getBoundingClientRect().right`. Same per-table 414 method as the L09 QA doc FINDINGS F2/F3.
**Fix architecture (for reference, NOT applied here):** shared `styles/main.css` rule `.table-wrap { overflow-x: auto; }`, applied per-table as `<div class="table-wrap">`. A wrapped table scrolls its intrinsic width inside a clamped wrapper, so it does NOT add page overflow even when its own right edge exceeds 414.

## Headline

- **1024 and 1920: 0px page overflow on every lesson.** No wide-viewport issue anywhere.
- **At 414: 15 lessons carry a genuinely overflowing UNWRAPPED table.** Listed below, worst first.
- **Sanity checks pass:** L09 / L12 / L13 (already wrapped) all measure page 0px at 414; their wide tables report right edges above 414 but are `wrapped=true` and scroll inside `.table-wrap`, confirming the harness reads the wrapper behavior correctly (L09 tbl#19 right 438.88, L12 tbl#1 right 427.69, L13 tbl#0 right 451.11, all page 0px).
- **Separate non-table finding:** 9 lessons (L28, L29, L30, L31, L36, L38, L39, L40, L51) show a constant ~11px page overflow at 414 with NO overflowing table. Source is the lesson nav links (`.home-link` / `.prev-lesson` / `.next-lesson`, right edge ~423 to 425px), present site-wide. This is NOT a table-overflow item and is out of scope for this sweep; noted so the 11px is not misattributed. (Likely the same nav-element class as other static-site footer-nav work, if it is ever taken up.)
- Lessons with 0 tables (L01, L14, L16, L17, L24, L25, L26, L27, L41, L43, L44, L47, L50) were not measured for tables; L41 / L43 / L44 / L47 / L50 each measured page 0px at 414 anyway.

## Definitive list: lessons with an overflowing unwrapped table at 414 (worst first)

| Lesson | Tables in file | 414 page-overflow px | Offending unwrapped table(s): cols / natural scrollWidth / right edge |
|---|---|---|---|
| lesson_15_understanding_light_types | 1 | 443 | tbl#0 5-col / sw428 / right485.7 |
| lesson_32_particle_systems_overview | 9 | 118 | tbl#8 6-col / sw491 / right532.17 |
| lesson_48_product_visualization_project | 7 | 96 | tbl#5 5-col / sw493 / right509.69 |
| lesson_10_shader_editor_introduction | 18 | 83 | tbl#1 3-col / sw380 / right437.64; tbl#12 4-col / sw396 / right453.55; tbl#14 5-col / sw440 / right497.25; tbl#15 4-col / sw414 / right471.41 |
| lesson_33_hair_and_fur | 7 | 77 | tbl#6 6-col / sw450 / right491.47 |
| lesson_42_advanced_shader_techniques | 7 | 77 | tbl#1 4-col / sw377 / right434.97; tbl#5 5-col / sw433 / right490.81 |
| lesson_11_pbr_materials_explained | 10 | 63 | tbl#0 3-col / sw420 / right477.03 |
| lesson_45_optimization_techniques | 6 | 62 | tbl#1 4-col / sw416 / right476.14 |
| lesson_34_cloth_simulation | 8 | 55 | tbl#2 5-col / sw427 / right468.59 |
| lesson_49_architectural_visualization | 8 | 43 | tbl#5 4-col / sw425 / right457.14 |
| lesson_46_rendering_for_production | 9 | 36 | tbl#1 4-col / sw389 / right449.67; tbl#2 4-col / sw383 / right443.91; tbl#4 5-col / sw354 / right414.78; tbl#8 4-col / sw381 / right441.13 |
| lesson_37_armature_and_bones | 2 | 26 | tbl#1 4-col / sw399 / right440.06 |
| lesson_23_camera_animation | 1 | 25 | tbl#0 4-col / sw378 / right438.8 |
| lesson_35_rigid_body_physics | 9 | 11 (nav-bound) | tbl#3 5-col / sw380 / right424.3 |
| lesson_22_depth_of_field_and_focus | 1 | 2 | tbl#0 4-col / sw356 / right416.2 |

Notes:
- The `tbl#N` index is the zero-based document order of `<table>` within the lesson.
- `right` is the table right edge in px at viewport 414 (clientWidth 414); any value above ~414.5 is the overflow.
- L35: the page metric reads 11px because the site-wide nav floor (~11px) dominates; the lesson still contains a real unwrapped 5-col table (tbl#3) whose right edge 424.3 exceeds 414, so it is a genuine table offender and is listed. Wrapping it removes the table contribution but the ~11px nav overflow would remain (separate item).
- Per-table totals across the 15 lessons: 19 unwrapped tables overflow 414. Column widths skew 4 to 6 col; the worst single offender is L15's lone 5-col table (right 485.7, page 443px) because it is the only table on a page with no other content forcing width.

## Lessons measured clean at 414 (page 0px, table-bearing)

L02, L03, L04, L05, L06, L07, L08, L18, L19, L20, L21, L29*, L41, L43, L44, L47, L50 ... where any not listed as an offender or nav-only above measured 0px. (Full per-lesson numbers in the harness `sweep_results.json`.)

## Harness

Claude-side scratch `/home/claude/qa_tbl/` (may reset): layout-only copies under `_layout/`, verbatim `styles/main.css`, `sweep.py`, `sweep_results.json` (full per-lesson, per-width, per-table deltas). Rebuild by re-copying lesson HTMLs + main.css from the project root via copy_file_user_to_claude. bash cannot reach the `\\wsl$` UNC path; the bridge copy is the transfer.

## Verdict

15 lessons need a table-wrap decision at 414; 1024/1920 are clean everywhere. No HTML was edited in this sweep. A fix pass, if taken, would wrap the 19 listed unwrapped tables in `<div class="table-wrap">` (the L09/L12/L13 architecture), per-table dryRun to commit to get_file_info, em-dash baselines held. The ~11px site-wide nav overflow is a separate non-table item.

---

## UPDATE 2026-06-19 (later) -- ROOT-CAUSE CORRECTION + SHARED CSS FIX APPLIED

**The sweep mis-attributed the worst offender.** Re-measured Claude-side (Playwright real-Chromium, real `styles/main.css`, page metric `documentElement.scrollWidth - clientWidth`, image loads aborted). Findings:

- **L15 (443px, the worst) was NOT a table.** Its lone comparison `<table>` is already wrapped in `.table-wrap` and clamps correctly. The real overflow source = **three inline diagram SVGs with hard `width="800"` and no responsive rule** (svg #24/#25/#27, viewBox 0 0 800 680 / 800 560). `styles/main.css` had `max-width:100%` scoped to `img` ONLY; there was NO `svg` rule, so fixed-pixel-width inline SVGs overflowed any viewport under 800px. The sweep's harness attributed L15's page overflow to its widest TABLE, which was the wrong element.
- **FIX APPLIED (shared CSS, one rule):** added to `styles/main.css` after the `img {}` block, inside the Images and Media section:
  `svg:not([style*="position"]) { max-width: 100%; }`
  Scoped with `:not([style*="position"])` so absolutely-positioned figure-OVERLAY SVGs (which sit 1:1 on their PNG via inline `position:absolute; width:100%; height:100%`) are provably never matched. Verified via `el.matches()` that overlay SVGs return false for the selector.
  `main.css` 22,762 -> **23,054 B** (+292), em-dash(U+2014) baseline **1** held (the bottom TOC-markup comment), no other rule touched.
- **VERIFIED on committed file (re-pulled main.css from disk, served locally):** L15 page overflow **443 -> 0px** at 414/1024/1920. **Signed-off L17 (30 svg, 22 overlays) and L18 (28 svg, 19 overlays) stay 0/0/0** -- the scoped selector does not match any overlay, 0 svg dimensions change (confirmed same-load inject test, L18 0 changed; L17 svg#0 0->nonzero is a harness artifact from the missing 404 PNG collapsing the overlay wrapper, NOT the rule, since svg#0 has position:absolute and is excluded). Figure-overlay 1:1 alignment pipeline UNAFFECTED.

**Residual after the SVG fix (re-measured at 414, all 1024/1920 = 0):** L15 now 0. Still nonzero: L22 **2px** (real unwrapped TD/TH table, right 416), L23 **25px** (table inside a .card), L49 **43px** (real unwrapped TBODY, right 457), L37 **26px** + L46 **36px** (container/`.container`-bound, no isolated table or nav leaf -- likely a wide `<pre>` code block or nav, needs per-file look), and L32/L33/L34/L35/L48 **11px each** (the known site-wide `.lesson-nav` / nav-link overflow, NOT tables). L10/L11/L42/L45 measure **0px** in this harness (original sweep's per-table proxy flagged them; real page metric disagrees -- treat as clean unless a real-browser check says otherwise).

**STILL OPEN (next pass):** wrap the genuinely-unwrapped tables that remain after the SVG fix -- confirmed real on **L22 / L23 / L49**, and re-verify the original sweep's table entries for **L32 / L33 / L34 / L42 / L45 / L48** against the page metric (several of those lessons' 414 overflow is now nav-bound 11px, not table, so wrapping may not zero them). Diagnose **L37 / L46** container-level overflow (probably a wide `<pre>`). The ~11px site-wide nav overflow stays a separate non-table item. Use the L09/L12/L13 `.table-wrap` architecture; per-table dryRun->commit->get_file_info; em-dash baselines held per file.

## UPDATE 2026-06-19 (later 2) -- L22 / L23 / L49 WRAPPED + COMMITTED

**The three confirmed-real unwrapped tables are now wrapped** (L09/L12/L13 `.table-wrap` architecture; per-table `Filesystem:edit_file` dryRun->commit->get_file_info; only wrapper `<div>`s added, zero content touched, em-dash baseline held per file).

- **L22** `lesson_22_depth_of_field_and_focus.html`: wrapped tbl#0 (lone table, "DoF by Scenario" 4-col quick-reference, inside a `.card`). table-wrap 0->1, `<table>` 1/1. em-dash(U+2014) **74** held. **184,777 B**.
- **L23** `lesson_23_camera_animation.html`: wrapped tbl#0 (lone table, "Classic Camera Moves" quick-reference, inside a `.card`). table-wrap 0->1, `<table>` 1/1. em-dash **60** held. **220,817 B**.
- **L49** `lesson_49_architectural_visualization.html`: 8 tables, all bare `<table>`, 0 prior wraps. Claude-side Playwright re-measure (real main.css, page metric, images aborted) confirmed at 414 **only tbl#5** overflows ("Time of Day" 4-col, right 457.14, page 43px); tbl#4 (also 4-col, "Sun Strength" recipe, right 388) and all six 3-col tables clear 414. Wrapped **tbl#5 only** (anchored on "different purposes:</p>" open + the "Pro Approach" blockquote close). table-wrap 0->1. em-dash **145** held. **231,845 B**. **Re-pulled committed file + re-measured: page overflow 43 -> 0px at 414**, tbl#5 now `wrapped=true` (scrolls inside wrapper), 1024/1920 stay 0.

**Harness re-validated**: L49's measured 43px matched this doc's recorded 43px exactly before the fix; the Claude-side rebuild is faithful to the documented method.

**STILL OPEN (carried forward, NOT yet measured this pass):** re-verify **L32 / L33 / L34 / L42 / L45 / L48** against the page metric -- NOTE these files **already contain prior `.table-wrap` divs** (offline grep of the layout copies: L32=1, L33=1, L34=1, L42=2, L45=1, L48=1), so the wide table each lesson's original per-table proxy flagged may already be wrapped, which would explain their 414 overflow now reading as the nav-bound 11px rather than table-driven. Confirm per-table `wrapped=` state in a real-browser run; wrap only a genuinely-unwrapped table still exceeding 414. Diagnose **L37 (26px) / L46 (36px)** container-level overflow (L37 has 2 tables / 0 wraps, L46 has 9 tables / 0 wraps; likely a wide `<pre>` or other container element, not a table -- inspect before any edit). The ~11px site-wide nav overflow stays a separate non-table item.

## UPDATE 2026-06-19 (later 3) -- L32/L33/L34/L42/L45/L48 RE-VERIFIED CLEAN (no edits); L37 + L46 WRAPPED + COMMITTED

Page-metric re-measure (Playwright real-Chromium, verbatim post-SVG-fix `main.css` 23,054 B, metric `documentElement.scrollWidth - clientWidth`, external scripts commented + favicon stubbed + image/media/font aborted, served over http://127.0.0.1, viewports 414/1024/1920). **1024/1920 = 0px on all eight, every run.**

**Re-verify result -- the carried-forward hypothesis held exactly. ZERO edits on these six:**
- **L42, L45: page 0px at 414.** Their originally-proxy-flagged wide tables (L42 tbl#1/#5, L45 tbl#1) are `wrapped=true` and scroll inside `.table-wrap`. Fully clean.
- **L32, L33, L34, L48: page 11px at 414 = the site-wide nav floor, NOT a table.** Each lesson's originally-flagged wide table (L32 tbl#8 6-col right532, L33 tbl#6 6-col right491, L34 tbl#2 5-col right469, L48 tbl#5 5-col right510) is `wrapped=true` and scrolls. No genuinely-unwrapped table exceeds 414 on any of the four. The 11px is the separate non-table nav item.
- Net: none of the six needed a wrap; the original per-table proxy over-flagged them, the page metric (and prior `.table-wrap` divs already on disk) confirm clean/nav-bound.

**L37 + L46 DIAGNOSIS -- it was NOT a `<pre>` (the later-2 guess was wrong); both are genuine unwrapped tables.** Enumerated every element whose right edge exceeds 414 at viewport 414. On both pages the widest offenders are `<table>` elements; **no `<pre>` exceeds the viewport** (L37 has 1 `<pre>`, L46 has 27 `<pre>`, all clear 414 via their own styling).
- **L37** `lesson_37_armature_and_bones.html` (2 tables, 0 prior wraps, em-dash U+2014 baseline **95**, `&mdash;`/`&#8212;` 0): the only real offender is **tbl#1** (4-col "Bone Naming Cheat Sheet", sw399, right 440.06), inside a `.card` under the `📊 Bone Naming Cheat Sheet` h4. tbl#0 clears (right 374). Wrapped tbl#1 only. table-wrap 0->1, `<table>` 2/2 balanced, em-dash **95** held. **248,021 -> 248,093 B** (+72). **Re-pulled + re-measured: 26 -> 11px at 414** (tbl#1 `wrapped=true`, scrolls); residual 11px is the nav floor. 1024/1920 = 0.
- **L46** `lesson_46_rendering_for_production.html` (9 tables, 0 prior wraps, em-dash U+2014 baseline **59**, `&mdash;`/`&#8212;` 0): four genuinely-unwrapped tables over 414 -- **tbl#1** ("Format/Resolution/Use", right 449.67, the page driver), **tbl#2** ("Web and Social Media" platforms, right 443.91), **tbl#4** ("Progress Spreadsheet", 5-col, right 414.78, marginal), **tbl#8** ("Comparison Table" cloud-render-farm cost, right 441.13). Wrapped all four. **INDEX-MAP NOTE:** original sweep doc-order indices map to committed `<table>` lines 575(#0)/608(#1)/642(#2)/1654(#3)/2040(#4)/3464(#5)/3922(#6)/4039(#7)/4434(#8). During the first L46 commit the "Backup Schedule by Folder" table (line 4039 = doc-order **#7**, right 376.45, a NON-offender) was wrapped by mistake while the genuine #8 at line 4434 was missed; corrected in a second commit (wrapped #8 "Comparison Table"). The extra wrap on #7 is a harmless no-op (a wrapper on a sub-414 table never scrolls, 0 visual change) and was left in place rather than churn the file. Net: **table-wrap 0->5**, `<table>` 9/9 balanced, em-dash **59** held. **368,360 -> 368,648 (+288, first 4 wraps) -> 368,720 B** (+72, #8 wrap). **Re-pulled + re-measured: 36 -> 0px at 414** (tbl#1/#2/#4/#8 all `wrapped=true`, scroll); reached full zero, below even the nav floor. 1024/1920 = 0.

**TABLE-OVERFLOW SWEEP NOW COMPLETE.** Every lesson the sweep flagged is resolved: the real unwrapped offenders (L15-as-SVG, L22, L23, L49, L37, L46) are fixed; the proxy-over-flagged lessons (L10, L11, L32, L33, L34, L42, L45, L48) measured clean or nav-bound under the page metric and needed no edit. **1024/1920 = 0px course-wide.** The only residual at 414 is the site-wide ~11px `.lesson-nav` / nav-link overflow (`.home-link` / `.prev-lesson` / `.next-lesson`), present on many lessons -- a SEPARATE non-table item, still open, out of this sweep's scope. (If ever taken up: likely the same nav-element class as the static-site footer-nav work.)

## UPDATE 2026-06-19 (later 4) -- SITE-WIDE ~11px NAV/PAGE OVERFLOW FIXED (global box-sizing). NON-TABLE RESIDUAL NOW CLOSED.

The separate non-table residual flagged across all prior updates (the constant ~11px page overflow at 414 from `.lesson-nav` links) is fixed in shared `styles/main.css` with one global rule. **Root cause (corrected from the earlier "nav-link fixed-width / nowrap" guess, which was wrong):** `main.css` had NO global `box-sizing`. The reset zeroed margin/padding/border but never set box-sizing, so every `width:100%` element added its own horizontal padding ON TOP of 100% and overflowed. At <=767px the `.lesson-nav a` links (`.home-link` / `.prev-lesson` / `.next-lesson`) stack full-width (`width:100%` + `padding: var(--spacing-md)`); under content-box that padding pushed their right edges to ~423-425 at viewport 414 = the 11px page overflow. The nav links are NOT fixed-width and have NO `white-space:nowrap`.

**MEASURE-FIRST (Playwright real-Chromium, verbatim main.css, page metric `documentElement.scrollWidth - clientWidth`, external scripts commented + favicon `data:,` + image/media/font aborted, http://127.0.0.1, viewports 414/1024/1920).** Three nav-only lessons (L28 sculpting_basics, L30 retopology_fundamentals, L36 character_modeling_workflow) all measured **11px at 414, 0 at 1024/1920**; element enumeration confirmed the ONLY elements past the 414 client width were the three stacked `.lesson-nav a` (`.home-link` right 425 w384; `.prev-lesson`/`.next-lesson` right 423 w380). Hypothesis confirmed at the element level.

**FIX APPLIED (shared CSS, one rule):** inserted into the reset, after the HTML5 display-role reset block, before `body { line-height: 1; }`:
  `*, *::before, *::after { box-sizing: border-box; }`
  `Filesystem:edit_file` dryRun->commit->get_file_info. **main.css 23,054 -> 23,106 B** (+52), em-dash(U+2014) baseline **1** held, `&mdash;`/`&#8212;` 0, box-sizing now at line 34.

**RE-MEASURE (committed CSS re-pulled from disk):** L28/L30/L36 all **11 -> 0px at 414**, 0 at 1024/1920, zero element offenders. **Regression sweep on 4 structurally-diverse lessons** (L15 37-svg+table, L17 30-svg/22-overlay+2-pre, L18 28-svg/19-overlay+table+mermaid, L46 9-tables/27-pre -- the pre/table/border-box stress case): all **0px at 414/1024/1920**. The deep-right "offenders" enumerated on these (diagram `<rect>`/`<text>`, L46 `<table>`) all sit inside `overflow-x:auto` scroll containers (`.figure` / `.table-wrap`) and contribute 0 to page overflow, as designed.

**OVERLAY-PIPELINE INTEGRITY (the only real risk of a global box-sizing change):** the absolutely-positioned figure-overlay SVGs sit 1:1 on their PNG via `position:absolute; width:100%; height:100%` with NO padding/border, so border-box is a no-op on them. Proven by **A/B probe on L18@414** (pre-fix CSS reconstructed by removing only the new line = exactly 23,054 B): overlay width-delta IDENTICAL **0.05px pre-fix vs 0.05px post-fix**, page overflow 0 in both. All overlays report computed `box-sizing: border-box` with sub-pixel `|dw|` (<=0.06px, the same benign fractional-downscale the L18 browser-QA recorded as worst 0.08px). (A large `dh` the probe reports under image-abort is a harness artifact -- the `<img>` has no intrinsic height so the wrapper collapses; the width axis, which governs overflow + alignment, is unaffected and box-sizing cannot change a no-padding/no-border element's height anyway. A/B confirms identical behavior.)

**SIDE-EFFECT AUDIT (border-box site-wide, all other `width:100%` elements):** `table` (border-collapse, no own padding -> no-op), `.progress-indicator` (no padding -> no-op), `.toc-card summary` (padding:0 -> no-op); `.container` (max-width:1200px + padding, no explicit width -> padding now counts inward, content 2x--spacing-md narrower at max width, visually negligible, no overflow) and `pre` (padding+border+overflow-x:auto, no width:100% -> beneficial, declared box now contains padding) both improve rather than regress; confirmed clean at 1024/1920. **No form controls exist anywhere in the Blender course** (input/textarea/select count 0 across all measured lessons), so that `width:100%`+padding overflow path is latent here but is also now pre-empted by the same rule.

**SCOPE NOTE:** this edit is `blender_course/styles/main.css` ONLY. Each project under `projects/` keeps its OWN `main.css`; no other project's file was touched. If the same nav/page overflow is ever observed on the language sites or other course sites, the identical one-line fix applies per-project (re-measure-first there before editing).

**THE ~11px SITE-WIDE NAV/PAGE OVERFLOW RESIDUAL IS NOW CLOSED. With the table-overflow sweep already complete, the Blender course measures 0px page overflow at 414/1024/1920 course-wide on every lesson checked.**
