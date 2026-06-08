# L13 BROWSER-QA &mdash; Handoff Prompt (next chat)

**Paste this whole block to start the next chat.**

---

## Where things stand

**Lesson 13 (Texture Painting Basics) is figure-COMPLETE.** All 10 figure-bearing phases P1&ndash;P10 are done: **30/30 figures produced / 31/31 integrated** (30 distinct + 1 reuse-by-ref #20). Live HTML `lesson_13_texture_painting_basics.html` = **313,856 B** (LF line endings). The lesson is clean and ready for its browser-QA pass &mdash; the LAST remaining L13 task.

P10 (this chat) added the final two `#common-mistakes` figures: **#18 common_mistakes_gallery** (1200x1500 PNG, 6-row wrong-vs-right procedural-swatch grid, overlay `c18` 12 red/green badges) and **#19 uv_quality_check** (1600x900 PNG, poor-vs-good UVs + UV-island insets, overlay `c19` Stretched & Distorted / Clean & Even). Both PNGs are in `images/`, both overlays PIL-pixel-verified (LD19). Post-commit integrity all PASS (em-dash 25 held, 31 figure / 22 img / 30 svg open=close, 0 leaked `color="#222"`, 13 section ids no dups).

## Your task this chat: L13 browser-QA pass

Run the standing browser-QA pass on `lesson_13_texture_painting_basics.html`, matching the L11/L12 method (those both closed PASS/CLEAN):

- **Themes:** dark + light
- **Widths:** 1920, 1024, 414
- **Check:** all 31 `<figure>` blocks render; all 20 PNG overlays (the `c{N}` SVGs) align to their images at every width (the absolute-positioned overlay-SVG-over-img pattern must stay registered when the img scales); all 8 inline-SVG diagrams scale crisply; the 6 mermaid blocks still render; in-page TOC links all resolve; no horizontal-scroll / overflow at 414.
- **Output:** PASS/CLEAN, or a defect list. If defects, log them and plan remediation (do not silently fix layout without flagging).

Use Playwright/Chromium (the L11/L12 precedent) or the Chrome tools. Spot-check #18 and #19 specifically since they are brand-new this lesson: confirm the 6 swatch rows read as distinct wrong-vs-right pairs and the badges sit under the correct columns.

## Read at chat start (in order)

1. `session.md` (top status + "## Next step: L13 browser-QA pass" + Standing deferred follow-ups)
2. `lesson_13_integration_progress.md` (full P1&ndash;P10 Status log; the 2026-06-07 P10 entry has all #18/#19 detail + coords)
3. `images/IMAGE_STYLE_GUIDE.md` v6 (LD1&ndash;21)
4. The L11/L12 browser-QA notes for the exact QA method

## CRITICAL path discipline (learned the hard way this chat)

- The **real project** is `\\wsl$\Ubuntu\home\practicalace\projects\blender_course` &mdash; reachable BOTH by the **Filesystem tool** and by **Blender-side Python** (`open(r"...unc path...")` reads AND writes it; this is the reliable large-file bridge, since the Filesystem tool truncates/stores huge reads).
- The Claude-side **bash `/mnt/wsl/Ubuntu/...` mount is a DIFFERENT, near-empty filesystem &mdash; NOT the project.** Never read pre-flight baselines from it and never commit there. A whole P10 pass was lost to this once; don't repeat it.
- After any write via Blender-side Python on Windows, **line endings flip to CRLF** unless you write binary with `\n`. The project is **LF**. Always normalize: read bytes, `.replace(b'CRLF', b'LF')`, write `'wb'`, then re-read byte count to confirm.
- Confirm any write landed by re-reading the real path's byte count with the Filesystem `get_file_info` tool (independent of Blender).

## After L13 QA closes

If PASS/CLEAN: mark L13 fully DONE in `session.md` + progress doc, then the queue returns to the **standing deferred browser-QA follow-ups**: L09 (55 figs), L05&ndash;L08 (accumulated; L08 image work done/parked), L07 held-open #20/#21 menu-cascade flags, L10 done/cleared, plus the L12 lesson-body defects (dup `uv-editor-interface` id + broken TOC links) which are out-of-scope-for-figures but still OPEN.

## Locked rules (brief; full list in the progress-doc carry-forward block)

WSL `\wsl$\Ubuntu\` paths only (never `\wsl.localhost\`); no new em-dashes (middot `&#183;`; 25 literal em-dashes preserved verbatim); brand palette governs overlays/SVGs (`#FF6B00` / `#4ADE80` positive / `#E63946` warning, NOT the spec's `#ff8c00`/`#4CAF50`/`#f44336`); PNG overlay = img + absolute overlay-SVG, viewBox = PNG pixels 1:1, NO baked labels; pixel-verify overlays before commit (LD19, PIL-composite bridge-side is fine when cairosvg absent); inline-SVG conventions (strip root `color="#222"`, figure col20 / svg col24 / children col28); scene state between PRODUCTION chats is a clean AgX base; warn before context tightens.

## Parked (not blocking)

Optional pngquant on over-target PNGs: P9 #24 (~1.25 MB) / #14 (~1.2 MB) / #25 (~749 KB), P8 #15 (598 KB) / #22 (717 KB), P2 #2 (1.62 MB). P10 #18 (318 KB) / #19 (84 KB) are already under target.

---
**Chat trigger:** "Start the L13 browser-QA pass."
