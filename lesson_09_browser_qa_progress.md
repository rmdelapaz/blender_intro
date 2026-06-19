# Lesson 09 Browser-QA &middot; Progress + Findings (live)

**Status:** harness BUILT + VALIDATED; **full 6-combo sweep COMPLETE 2026-06-12.** Real HTML UNTOUCHED (no edits made; see verdicts below).
**Target:** `lesson_09_precision_modeling_techniques.html` &middot; **503,066 B** (authoritative on-disk, bridge Python; em-dash U+2014 = 60, &mdash;/&#8212; held). The earlier "502,906 B untouched" header predated the 2026-06-13 lesson-body table-wrap fix and was stale; 503,066 B is the post-fix size, NOT a benign batch-touch.
**Last updated:** 2026-06-19 (F2 RESOLVED verified; L12 companion overflow found + fixed).

## RESULT SUMMARY (dark+light &times; 1920/1024/414)

| Combo | imgs | mermaid | overlays | misreg(>2px) | 414 overflow | console |
|---|---|---|---|---|---|---|
| 1920 dark/light | 43/43 | 5/5 | 42 | 6 (benign, see F1) | 0 | 0 |
| 1024 dark/light | 43/43 | 5/5 | 42 | 6 (benign) | 0 | 0 |
| 414 dark/light | 43/43 | 5/5 | 42 | 6 (benign) | **25px (F2)** | 0 |

All 43 images load, all 5 mermaid render, zero console errors at every combo. **No figure-overlay defect requiring a fix.** One lesson-body defect (F2) logged for a future lesson-body pass.

## FINDINGS

**F1 &mdash; 6 overlays measure dy=&minus;16 / dh=+32 (dx=dw=0). VERDICT: benign, NOT fixed.**
Figures #16, #17, #19, #20, #21, #22 (consecutive early-phase integrations). Their wrapper img lacks `margin: 0` and the overlay svg uses `top:0;left:0` instead of `inset:0`, so the overlay box is 32px taller than the img (16px above + 16px below). **Width is the binding dimension (dx=dw=0) and `preserveAspectRatio="xMidYMid meet"` absorbs the vertical slack, so callouts register CORRECTLY in render** &mdash; visually confirmed on #20 (Measure tool / 2nd-click badges on target) and #22 (Edge Length highlight exactly on the checkbox, leader on the cube, ellipse on the 2m numbers). This is a markup-consistency nit, below the severity of the L13 #18/#19 fix (those had VISIBLE drift; these do not). Editing 6 figures in a clean 502,906 B file for an invisible 16px box delta is not worth the risk. Logged as cosmetic; fix only if a future pass normalizes all overlay wrappers to the `margin:0`+`inset:0` standard.

**F2 &mdash; 414 horizontal overflow 25px from a 3-col table. LESSON-BODY DEFECT. RESOLVED (verified 2026-06-19).**
The `Project Type / Primary Techniques / Critical Settings` table in `#summary` (right edge 439 vs clientWidth 414, overflow 25px) plus its two like-tables (the `Project Type / Why Precision Matters / Tolerance Level` and `Project Type / Recommended System / Typical Unit` 3-col tables) were each wrapped in `<div class="table-wrap">` on 2026-06-13 (502,826 &rarr; 503,066 B). Fix architecture = the shared `styles/main.css` rule `.table-wrap { overflow-x: auto; }` (scroll wrapper, NOT per-table inline; validated across L09/L12/L13). **Verified 2026-06-19 (Playwright real-Chromium, 414/1024/1920):** page horizontal overflow now **0px at all three widths**; the 3 wrapped tables are tbl#0/#12/#19 (now-line 127/2825/5722), the `#summary` offender being tbl#19 (intrinsic 381px scrolls inside its 300px wrapper). The other 18 tables in the file were measured at 414: all right-edges &le; 408px, none overflow (the &le;48-char-proxy that flagged some was misleading &mdash; prose `<td>` content word-wraps; only the 3 wide tables genuinely needed wrapping, and exactly those are wrapped). **No further L09 action.**

**F3 &mdash; L12 companion overflow (referenced by F2 as the same class). RESOLVED (found + fixed 2026-06-19).**
`lesson_12_uv_unwrapping_basics.html` carried an unwrapped 5-col `Method / Best For / Requires Seams? / Distortion / Speed` UV-method comparison table (lines ~2009-2063, `<thead>`/`<tbody>` structure) that overflowed the page by **14px at 414** (table natural 395px, right edge 428). The 2026-06-13 L12 fix had only addressed the dup-id + broken-TOC items, not this table. Wrapped in `<div class="table-wrap">` (`Filesystem:edit_file` dryRun&rarr;commit&rarr;get_file_info; anchored by unique header/`</tbody></table>`+mermaid text spans): **294,891 &rarr; 294,963 B (+72)**, em-dash U+2014 held **29**, &mdash;/&#8212; 0, table-wrap 0&rarr;1, tables 3/3 balanced, 5 mermaid untouched. **Verified 2026-06-19:** page overflow **0px** at 414/1024/1920 (the 5-col table's 395px now scrolls inside its wrapper). L12's other 2 tables (3-col, right edges 357/382) do not overflow. **L13 already clean** (both its tables were wrapped in the 2026-06-13 pass, 314,193 B, table-wrap=2). **L09-F2 + L12 + L13 lesson-body overflow class now fully CLOSED.**

## Entry-state corrections (carry forward)

1. **Filename** is `lesson_09_precision_modeling_techniques.html` (slug ends `_techniques`).
2. **Mermaid = 5, not 3** (lines 107/246/1532/2741/3160). All render clean.
3. **Distinct PNG = 42, not 41** (the `[a-z_]+` regex dropped `lesson_09_31_s_x_0_flatten_command.png`; the `0` needs `[a-z0-9_]+`). 42 PNG + 1 SVG (#26) = 43 refs; 56 `<figure>` = 55 figures + #26 plain-img 2nd-ref. Unchanged figure total.

## Harness (Claude-side `/home/claude/qa_l09/`, scratch &mdash; may reset)

`lesson_09.html` (line-ending-normalized copy), `styles/main.css`, `js/mermaid.min.js` (mermaid@10.9.6 UMD), `images/` (all 43). Patches: CDN mermaid ESM &rarr; local UMD + load-listener `mermaid.run()`; favicon &rarr; `data:,`; clipboard.js + course-enhancements.js commented out. Playwright 1.56 + chromium-1194. `sweep.py` + `sweep_results.json` hold the full per-overlay deltas. If `/home/claude/` reset, rebuild from `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\` (image basenames recoverable via grep `images/lesson_09_[0-9]+_[a-z0-9_]+\.(png|svg)`).

## L09 QA VERDICT

**L09 browser-QA PASS** &mdash; figures clean across all 6 combos, no overlay defect needs fixing. One lesson-body table-overflow (F2) handed to the lesson-body queue alongside L12/L13's. Next in standing queue after L09: L05&ndash;L08 (L08 parked), L07 #20/#21 held flags; lesson-body pass for L09-F2 + L12 + L13 defects.

## Defect protocol (if a fix is ever taken)

copy_file_user_to_claude refresh &rarr; anchor by unique TEXT span (never section id) &rarr; Filesystem:edit_file dryRun&rarr;commit&rarr;get_file_info &rarr; no new em-dashes (`&#183;` separators) &rarr; Python `read().count()` authoritative for multibyte recount &rarr; cairosvg-over-PNG pixel-verify any overlay fix BEFORE commit.
