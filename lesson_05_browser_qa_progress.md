# Lesson 05 Browser-QA &middot; Progress + Findings (live)

**Status:** **full 6-combo Playwright sweep COMPLETE + one figure defect FIXED 2026-06-14.** Real HTML edited (9 overlay imgs normalized; see F1 below).
**Target:** `lesson_05_understanding_meshes_and_geometry.html` &middot; **279,456 B** (get_file_info, post-fix; was 279,357 B live at entry).
**Last updated:** 2026-06-14 (sweep complete + 9-img defect fixed).

## RESULT SUMMARY (dark+light &times; 1920/1024/414)

| Combo | imgs | mermaid | overlays | worst box-delta | 414 overflow | console |
|---|---|---|---|---|---|---|
| 1920 dark/light | clean | 5/5 | 9 | 0.00px | 0 | 0 |
| 1024 dark/light | clean | 5/5 | 9 | 0.00px | 0 | 0 |
| 414 dark/light | clean | 5/5 | 9 | **0px** | 0 | 0 |

All 14 imgs load (0 blank), all 5 mermaid render, zero console errors at every combo. Worst per-overlay box-delta 0.00px across all 9 overlays &times; 6 combos after the F1 fix. 414 horizontal overflow 0px. **L05 browser-QA PASS.**

## ENTRY-STATE RECONCILIATION

Live P0 read **279,357 B** (get_file_info). The integration progress doc closed at **279,445 B** (Phase 6 INTEGRATION, 2026-05-21). Delta **&minus;88 B** with a Jun-12 mtime = the same benign batch-touch observed on L07/L09/L12/L13 this period; body verified sound, no figure/overlay content lost. **279,357 B is the authoritative P0**; the +99 B fix below lands on it. em-dash baseline **89** &mdash; the L05 docs predate the live-Python-count convention, so it was established at entry via `read().count('\u2014')` (whole-file, authoritative) and held through the fix (no new em-dashes).

## FINDINGS

**F1 &mdash; 9 overlay imgs missing the locked `margin:0`. VERDICT: real defect, FIXED.**
All 9 PNG-overlay figures &mdash; **c10 / c11 / c17 / c22 / c25 / c27 / c28 / c29 / c30** &mdash; carried inline `display:block; width:100%; height:auto` but were **missing `margin:0`**. The global `styles/main.css` rule `img { margin: var(--spacing-md) auto; }` (spacing-md = 16px) then applied a 16px vertical margin to each overlay img; the `display:inline-block` wrapper shrink-wrapped that margin, so the `position:absolute; inset:0` overlay svg pinned to the wrapper's padding box and registered at a constant **dy=&minus;16px / dh=+32px** relative to its img content box &mdash; the same defect class as the L07 (#17/#18/#19/#20/#21/#22/#24/#25) and L13 (#18/#19) fixes. The 32px delta crossed into visible misregistration territory, so it was fixed.
**Fix:** added `margin: 0;` to all 9 overlay imgs via `Filesystem:edit_file` dryRun&rarr;commit&rarr;`get_file_info`, each anchored on its globally-unique full `<img>` tag (count=1). HTML **279,357 &rarr; 279,456 B (+99)**. Re-ran the harness: worst box-delta **0.00px** across all 9 overlays &times; 6 combos (was a constant 32px on all 9), mermaid 5/5, 0 blank imgs, 0 console errors, 414 overflow 0px. No cairosvg re-verify owed &mdash; the fix changes only the img's CSS margin, not any overlay svg coordinate, viewBox, or geometry (LD19 applies to overlay-coordinate changes only).

**#16 is NOT an overlay &mdash; expected, no action.**
The standing-queue note listed 10 PNG overlays (c10/c11/c16/c17/c22/c25/c27/c28/c29/c30), but **#16 `sphere_topology_analysis` is a plain overlay-free figure** by the Phase-4 design decision ("the pole-tri vs equator-quad selection contrast IS the message"). Only 9 overlays exist on the page. The page has 14 `<img>` total: 9 overlay imgs + 5 plain (#5/#6/#7/#16/#26). The 5 plain imgs use the global CSS margin (harmless, no overlay to misregister) and were left untouched &mdash; verified no `margin:0` leaked into them.

## Harness (Claude-side scratch &mdash; may reset)

Line-ending-normalized copy of `lesson_05_understanding_meshes_and_geometry.html` + `styles/main.css` + all 14 PNG assets + 16 inline-SVG figures rendering in-place. Patches: CDN mermaid ESM &rarr; local UMD (`npm pack mermaid@10`, mermaid.min.js) + load-listener `mermaid.run()`; favicon &rarr; `data:,`; clipboard.js + course-enhancements.js neutralized. Playwright real Chromium (`/opt/pw-browsers/chromium-1194`, headless). Per width&times;theme: set `data-theme`, scroll top&rarr;bottom in 400px steps (lazy imgs), wait all imgs `complete && naturalWidth>0`, measure per-overlay registration deltas (img bbox vs overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 overflow, console errors. (`Image.MAX_IMAGE_PIXELS=None` before opening any full-page screenshot.) If `/home/claude/` reset, rebuild from `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`.

## L05 QA VERDICT

**L05 browser-QA PASS** &mdash; one figure defect found + fixed (9-overlay missing-`margin:0` misregistration, constant dy=&minus;16/dh=+32 &rarr; 0.00px after the locked img margin was added), all 9 overlays + 5 mermaid clean across all 6 combos, 0 console errors, 0 414-overflow. HTML 279,357 &rarr; 279,456 B, em-dash 89 held. No lesson-body defects surfaced this pass. Next standing-queue item: L06 browser-QA or L11 1024-width sweep (Ray's call).

## Defect protocol (carry forward)

copy_file_user_to_claude refresh &rarr; anchor by unique TEXT span (never section id) &rarr; Filesystem:edit_file dryRun&rarr;commit&rarr;get_file_info &rarr; no new em-dashes (`&#183;` separators) &rarr; Python `read().count()` authoritative for multibyte recount &rarr; cairosvg-over-PNG pixel-verify any overlay-coordinate change BEFORE commit.
