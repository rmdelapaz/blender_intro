# Lesson 09 Browser-QA &middot; Progress + Findings (live)

**Status:** harness BUILT + VALIDATED; **full 6-combo sweep COMPLETE 2026-06-12.** Real HTML UNTOUCHED (no edits made; see verdicts below).
**Target (READ-ONLY):** `lesson_09_precision_modeling_techniques.html` &middot; **502,906 B** (get_file_info, untouched since 2026-06-02 P10 close).
**Last updated:** 2026-06-12 (sweep complete).

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

**F2 &mdash; 414 horizontal overflow 25px from a 3-col table. LESSON-BODY DEFECT (not figure work), OPEN.**
The `Project Type / Primary Techniques / Critical Settings` table at line ~5714 in `#summary` (right edge 439 vs clientWidth 414). Same class as the L13 `#what-is-texture-painting` 4-col-table overflow. There are 3 such tables in the file (lines 123, 2819, 5714); 5714 is the confirmed offender, check the others in the lesson-body pass. Fix = responsive-table treatment (horizontal scroll wrapper or stacked layout at narrow width). Belongs to the standing lesson-body queue, NOT figure-QA.

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
