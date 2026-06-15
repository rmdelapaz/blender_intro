# Lesson 07 Browser-QA &middot; Progress + Findings (live)

**Status:** **full 6-combo Playwright sweep COMPLETE + one figure defect FIXED 2026-06-13.** Real HTML edited (8 figures normalized; see F1 below).
**Target:** `lesson_07_modeling_your_first_object.html` &middot; **221,053 B** (get_file_info, post-fix; was 220,405 B live at entry).
**Last updated:** 2026-06-13 (sweep complete + 8-img defect fixed + #20/#21 held flags resolved).

## RESULT SUMMARY (dark+light &times; 1920/1024/414)

| Combo | imgs | mermaid | overlays | worst box-delta | 414 overflow | console |
|---|---|---|---|---|---|---|
| 1920 dark/light | clean | 8/8 | 18 | 0.08px | 0 | 0 |
| 1024 dark/light | clean | 8/8 | 18 | 0.08px | 0 | 0 |
| 414 dark/light | clean | 8/8 | 18 | 0.08px | **0px** | 0 |

All images load (0 blank), all 8 mermaid render, zero console errors at every combo. Worst per-overlay box-delta 0.08px across all 18 overlays &times; 6 combos after the F1 fix. 414 horizontal overflow 0px. **L07 browser-QA PASS.**

## ENTRY-STATE RECONCILIATION

Live P0 read **220,405 B** (get_file_info). The progress-doc and prior-QA Status entries closed at **220,485 B** (2026-05-28 canvas-pixel-sampling pass). Delta **&minus;80 B** with a Jun-12 mtime = the same benign batch-touch observed on L09/L12/L13 this period; body verified sound, no figure/overlay content lost. **220,405 B is the authoritative P0**; the +648 B fix below lands on it. em-dash baseline **62** (whole-file, Python `read().count('\u2014')`-authoritative); held through the fix (no new em-dashes).

## FINDINGS

**F1 &mdash; 8 overlay figures had bare `<img>` tags missing the locked img style. VERDICT: real defect, FIXED.**
Figures **#17 / #18 / #19 / #20 / #21 / #22 / #24 / #25** (all of Phase 5 `#final-details` + the two Phase 6 `#project` troubleshooting PNGs) carried `<img>` tags WITHOUT the locked `display:block; max-width:100%; height:auto; margin:0` style. The inline-block baseline gap shifted each overlay svg by a constant **dy=&minus;16px / dh=+32px** relative to its img box &mdash; the same defect class as the L13 #18/#19 fix and the L09-F1 benign nit, but here the box delta crossed into visible misregistration territory across the 8 affected figures, so it was fixed (unlike the L09 case, which was left benign).
**Fix:** added `loading="lazy"` + the locked img style to all 8 imgs via `Filesystem:edit_file` dryRun&rarr;commit&rarr;`get_file_info`, one count=1 text anchor each (alt-tail + `>`). HTML **220,405 &rarr; 221,053 B (+648)**. Re-ran the harness: worst box-delta **0.08px** across all 18 overlays &times; 6 combos (was up to 32px on the 8), mermaid 8/8, 0 blank imgs, 0 console errors, 414 overflow 0px.

**#20 / #21 held flags &mdash; RESOLVED.**
The 2026-05-28 canvas-pixel-sampling pass could not safely proof the #20 (Merge-by-Distance) and #21 (Non-Manifold) menu-cascade overlays &mdash; the Chrome screenshot compositor was returning blank frames that session, so menu-item pixel targets were not resolvable and the callouts were left unverified. This Playwright + real-Chromium run captured live frames cleanly: both overlays register within tolerance (0.08px box-delta post-F1-fix), callouts sit on their menu-cascade items as authored. **#20 / #21 cleared from the standing deferred queue; L07 browser-QA now complete.**

## Harness (Claude-side scratch &mdash; may reset)

Line-ending-normalized copy of `lesson_07_modeling_your_first_object.html` + `styles/main.css` + all 25 raster assets (24 PNG + 1 JPG) + 5 inline-SVG figures rendering in-place. Patches: CDN mermaid ESM &rarr; local UMD (`npm pack mermaid@10`) + load-listener `mermaid.run()`; favicon &rarr; `data:,`; clipboard.js + course-enhancements.js neutralized. Playwright real Chromium (`/opt/pw-browsers/chromium-1194`, headless). Per width&times;theme: set `data-theme`, scroll top&rarr;bottom in 400px steps (lazy imgs), wait all imgs `complete && naturalWidth>0`, measure per-overlay registration deltas (img bbox vs overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 overflow, console errors. (`Image.MAX_IMAGE_PIXELS=None` before opening any full-page screenshot.) If `/home/claude/` reset, rebuild from `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`.

## L07 QA VERDICT

**L07 browser-QA PASS** &mdash; one figure defect found + fixed (8-img bare-tag misregistration, dy=&minus;16/dh=+32 &rarr; 0.08px after the locked img style was added), #20/#21 held flags resolved, all 18 overlays + 8 mermaid clean across all 6 combos, 0 console errors, 0 414-overflow. HTML 220,405 &rarr; 221,053 B, em-dash 62 held. No lesson-body defects surfaced this pass. Next standing-queue item: L05 / L06 browser-QA or L11 1024-width sweep (Ray's call).

## Defect protocol (carry forward)

copy_file_user_to_claude refresh &rarr; anchor by unique TEXT span (never section id) &rarr; Filesystem:edit_file dryRun&rarr;commit&rarr;get_file_info &rarr; no new em-dashes (`&#183;` separators) &rarr; Python `read().count()` authoritative for multibyte recount &rarr; cairosvg-over-PNG pixel-verify any overlay fix BEFORE commit.
