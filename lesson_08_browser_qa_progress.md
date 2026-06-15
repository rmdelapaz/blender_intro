# Lesson 08 Browser-QA &middot; Progress + Findings (live)

**Status:** **full 6-combo Playwright sweep COMPLETE + two figure defects FIXED 2026-06-14.** Real HTML edited (DEFECT A prior session; DEFECT B = 5 subdivision overlays normalized this session; see below).
**Target:** `lesson_08_modifiers_introduction.html` &middot; **280,202 B** (get_file_info, post-fix; was 280,167 B live at entry).
**Last updated:** 2026-06-14 (sweep complete + DEFECT B fixed + committed + harness-verified PASS).

## RESULT SUMMARY (dark+light &times; 1920/1024/414)

| Combo | imgs | mermaid | overlays measured | worst box-delta | 414 overflow | console |
|---|---|---|---|---|---|---|
| 1920 dark/light | 35/35 | 4/4 | 23 | dy 0 / dh 0 / dw &le;0.08 | 0 | 0 |
| 1024 dark/light | 35/35 | 4/4 | 23 | dy 0 / dh 0 / dw &le;0.08 | 0 | 0 |
| 414 dark/light | 35/35 | 4/4 | 23 | dy 0 / dh 0 / dw &le;0.08 | **0px** | 0 |

All 35 images load (0 blank), all 4 mermaid render, zero console errors at every combo. After the DEFECT B fix, figures **#18&ndash;#22 all read dx/dy/dw/dh = 0.00 in every combo** (the prior dy=&minus;16 / dh=55&ndash;124 misregistration is gone); the 23 measured img-vs-svg overlay pairs show worst |dy|=0, |dh|=0, |dw|&le;0.08. 414 horizontal overflow 0px. **L08 browser-QA PASS.**

## ENTRY-STATE RECONCILIATION

Live P0 read **280,167 B** (get_file_info). The integration progress doc closed Phase 9 at **280,049 B** (2026-05-29). Delta **+118 B** = the benign Jun-12 batch-touch period observed across L06/L07/L09/L12/L13 this window; body verified sound, all 40 figures / overlays / 4 mermaid present, no figure content lost. **280,167 B is the authoritative P0**; the +35 B DEFECT B fix below lands on it &rarr; 280,202 B. em-dash baseline **51** (whole-file, Python `read().count('\u2014')`-authoritative); held through the fix (no new em-dashes).

## FINDINGS

**DEFECT A &mdash; done + verified (prior session).** Closed before this chat; carried as DONE.

**DEFECT B &mdash; 5 subdivision overlays #18/#19/#20/#21/#22 misregistered. VERDICT: real defect, FIXED + COMMITTED this session.**
Only the five `#subdivision-surface` overlays were affected; every other overlay on the page was already clean. Two coupled causes per figure, both fixed:
- **(a) img style** &mdash; each img style was missing the trailing `margin: 0;`; appended so each now reads `display: block; width: 100%; height: auto; margin: 0;` (kills the inline-block baseline descender that shifted the overlay svg down).
- **(b) figcaption placement** &mdash; each `<figcaption>` was nested INSIDE the `position:relative` wrapper div; moved to a direct `<figure>` child AFTER the `</div>` (figcaption col 24, `</figure>` col 20), matching the already-clean #24 structure.
The pre-fix misregistration was dy=&minus;16 / dh=+55&ndash;124 across the five; post-fix all five read 0.00 on every delta in every combo.
**Fix:** `Filesystem:edit_file` dryRun&rarr;commit&rarr;`get_file_info` per figure. HTML **280,167 &rarr; 280,202 B (+35)**. Post-commit integrity re-read CLEAN: em-dash **51** held, figure **41/41**, figcaption **41/41**, img **35**, svg **37**, `color="#222"` **0**, `margin: 0` **18&rarr;23** (the five fixed imgs).

## Harness method (Claude-side scratch &mdash; may reset)

Rebuilt + re-run for this pass: real Chromium-1194 (Playwright, headless), local mermaid@10 UMD (`npm pack`), JS + favicon neutralized, lazy&rarr;eager imgs, double-pass 400px scroll top&rarr;bottom, dark+light &times; 1920/1024/414. Per width&times;theme: set `data-theme`, scroll (lazy imgs), wait all imgs `complete && naturalWidth>0`, measure per-overlay registration deltas (img bbox vs overlay-svg bbox dx/dy/dw/dh), mermaid total/rendered/errored, 414 overflow, console errors. (`Image.MAX_IMAGE_PIXELS=None` before any full-page screenshot.) If `/home/claude/` reset, rebuild from `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`.

## SELECTOR-SCOPE NOTE (23 of ~26 measured)

The harness pair-selector measured **23** of the ~26 overlays. The **8 synthetic/composite overlays** whose `<svg>` is not an img-sibling inside a `position:relative` wrapper (the L08 synthetic-cage / composite-overlay figures &mdash; e.g. c7/c17 cages and the multi-panel composite-overlay badge groups) fall outside the bbox-pair test by construction. None of the measured overlays misregister. **Optional:** widen the selector to confirm the synthetic ones; not expected to matter (they carry no img-vs-svg baseline coupling, which was the entire DEFECT B mechanism).

## L08 QA VERDICT

**L08 browser-QA PASS** &mdash; DEFECT A done/verified (prior), DEFECT B (5 subdivision overlays, coupled img-`margin:0` + figcaption-placement causes) found + fixed + committed + harness-verified to 0.00 across all combos; all 23 measured overlays clean, 4/4 mermaid, 35/35 imgs, 0 console errors, 0 414-overflow. HTML 280,167 &rarr; 280,202 B, em-dash 51 held. No lesson-body defects surfaced this pass. **L08 browser-QA drops off the standing queue; L11 1024-width sweep is the only remaining standing item.**

## Defect protocol (carry forward)

copy_file_user_to_claude refresh &rarr; anchor by unique TEXT span (never section id) &rarr; Filesystem:edit_file dryRun&rarr;commit&rarr;get_file_info &rarr; no new em-dashes (`&#183;` separators) &rarr; Python `read().count()` authoritative for multibyte recount &rarr; cairosvg-over-PNG pixel-verify any overlay fix BEFORE commit.
