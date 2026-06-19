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
