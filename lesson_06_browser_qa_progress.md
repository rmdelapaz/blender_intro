# Lesson 06 Browser-QA &middot; Progress + Findings (live)

**Status:** **full 6-combo Playwright sweep COMPLETE + one figure defect FIXED 2026-06-14.** Real HTML edited (17 overlay imgs normalized; see F1 below).
**Target:** `lesson_06_edit_mode_essentials.html` &middot; **237,103 B** (get_file_info, post-fix; was 236,916 B live at entry).
**Last updated:** 2026-06-14 (sweep complete + 17-img defect fixed).

## RESULT SUMMARY (dark+light &times; 1920/1024/414)

| Combo | imgs | mermaid | overlays | worst box-delta | 414 overflow | console |
|---|---|---|---|---|---|---|
| 1920 dark/light | clean | 14/14 | 17 | 0px | 0 | 0 |
| 1024 dark/light | clean | 14/14 | 17 | 0px | 0 | 0 |
| 414 dark/light | clean | 14/14 | 17 | **0px** | 0 | 0 |

All 47 images load (0 blank), all 14 mermaid render, zero console errors at every combo. Worst per-overlay box-delta 0px across all 17 overlays &times; 6 combos after the F1 fix. 414 horizontal overflow 0px. **L06 browser-QA PASS.**

## ENTRY-STATE RECONCILIATION

Live P0 read **236,916 B** (get_file_info), byte-exact to the resume entry-state. The integration progress doc closed at **237,004 B** (2026-05-25 Phase 6 INTEGRATION sub-chat 1). Delta **&minus;88 B** with a Jun-12 mtime = the same benign batch-touch observed on L07/L09/L12/L13 this period; body verified sound, all 50 figures + 17 overlays + 14 mermaid present, no content lost. **236,916 B is the authoritative P0**; the +187 B fix below lands on it. em-dash baseline **13** (whole-file, Python `read().count('\u2014')`-authoritative); held through the fix (no new em-dashes).

Inventory confirmed Python-authoritative at entry: 50 figure / 50 figcaption / 47 img (all `.png`) / 20 literal `<svg>` / 14 mermaid / 0 `color="#222"` / 17 overlay wrapper divs.

## FINDINGS

**F1 &mdash; all 17 overlay figures had bare `<img>` tags missing `margin:0`. VERDICT: real defect, FIXED.**
All 17 overlay figures (img `display:block; width:100%; height:auto` + inline overlay-svg `position:absolute; inset:0; width:100%; height:100%`, both inside a `position:relative; display:inline-block` wrapper div) carried the img style WITHOUT `margin:0`. **The pre-analysis hypothesis that the wrapper structure might absorb the gap did NOT hold:** the wrapper is itself `display:inline-block`, so the img's inline-block baseline descender (~16px) still opened inside the wrapper, while the `position:absolute; inset:0` svg pinned to the full wrapper padding-box. Live Playwright measured a constant **dx=0 / dy=&minus;16 / dw=0 / dh=+32** on every one of the 17 overlays, identical across all 6 combos &mdash; the same defect class + signature as the L13 #18/#19 and L07 8-img fixes, into visible-misregistration territory, so it was fixed.
**The 17 affected PNG srcs:** `lesson_06` _02 / _03 / _10 / _13 / _14 / _15 / _16 / _20 / _23 / _25 / _28 / _30 / _41 / _43 / _45 / _46 / _49 (matches the resume pre-analysis list).
**c{N} namespace correction:** the integration-doc registry listed 14 PNG-overlay ids (c2/c3/c10/c16/c20/c23/c25/c28/c30/c41/c43/c45/c46/c49). Live read shows **17** carry `c{N}` ids &mdash; c13/c14/c15 (the box/circle/lasso select-in-action trio) also have id namespaces (`c13-`/`c14-`/`c15-`). All 17 overlay figures are id-namespaced; there are no composite-only/no-id overlays in L06.
**Fix:** appended ` margin: 0;` to the locked overlay img style on all 17 imgs via `Filesystem:edit_file` dryRun&rarr;commit&rarr;`get_file_info`, one count=1 full-img-tag anchor each (each img tag is unique by its src+alt). Pure CSS &mdash; NO overlay-coordinate change, so no cairosvg re-verify needed; only a harness re-run. HTML **236,916 &rarr; 237,103 B (+187 = 17&times;11)**. Re-ran the harness against the committed live file: worst box-delta **0px** across all 17 overlays &times; 6 combos (was a constant 32px), mermaid 14/14, 0 blank imgs, 0 console errors, 414 overflow 0px.

## POST-FIX INTEGRITY (live 237,103 B, Python-authoritative)

bytes 237,103 (+187); em-dash **13 held**; figure 50 / figcaption 50 (open=close); img 47; literal `<svg` 20; mermaid 14; `color="#222"` 0; 17 wrapper divs; **17 overlay imgs WITH `margin: 0;`, 0 stale**; 15 section ids no dups. CLEAN.

## Harness (Claude-side scratch &mdash; may reset)

Line-ending-preserved copy of `lesson_06_edit_mode_essentials.html` + `styles/main.css` + all 47 PNGs. Patches: CDN mermaid ESM &rarr; local UMD (`npm pack mermaid@10`, `js/mermaid.min.js`) + load-listener `mermaid.run()` setting `data-mermaid-done`; favicon &rarr; `data:,`; clipboard.js + course-enhancements.js neutralized; `loading="lazy"` &rarr; `eager` (harness-only, so all imgs realize deterministically for measurement &mdash; real HTML keeps lazy). Playwright real Chromium (`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, headless). Per width&times;theme: set `data-theme`, double-pass scroll top&rarr;bottom in 400px steps (lazy/reflow settle), wait `data-mermaid-done` + all imgs `complete && naturalWidth>0`, measure per-overlay registration deltas (img bbox vs overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 overflow, console errors. (`Image.MAX_IMAGE_PIXELS=None` set.) If `/home/claude/` reset, rebuild from `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`.

## L06 QA VERDICT

**L06 browser-QA PASS** &mdash; one figure defect found + fixed (all 17 overlay imgs bare-tag misregistration, constant dy=&minus;16/dh=+32 &rarr; 0px after `margin:0` added), all 17 overlays + 14 mermaid clean across all 6 combos, 0 console errors, 0 414-overflow, 47/47 imgs load. HTML 236,916 &rarr; 237,103 B, em-dash 13 held. No lesson-body defects surfaced this pass.

## Defect protocol (carry forward)

copy_file_user_to_claude refresh &rarr; anchor by unique TEXT span (full img tag, never section id) &rarr; Filesystem:edit_file dryRun&rarr;commit&rarr;get_file_info &rarr; no new em-dashes (`&#183;` separators) &rarr; Python `read().count()` authoritative for multibyte recount &rarr; cairosvg-over-PNG pixel-verify any overlay COORDINATE change before commit (a pure CSS-margin fix needs only a harness re-run).
