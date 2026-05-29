# Blender Course · Next chat: Lesson 08 image pipeline kickoff (or resolve held L07 #20 / #21 menu overlays)

**Last updated:** 2026-05-28 (L07 browser QA pass complete · #14 / #19 / #27 overlay coords corrected, #15 / #18 / #22 measured plausible, #20 / #21 held open, #28 verified PASS, #8 + #18 advisory wording fixed · HTML 220,345 B to 220,485 B · QA Status bullet in `lesson_07_integration_progress.md`)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Next step: Lesson 08 kickoff (or resolve held L07 #20 / #21 overlays)

L07 image work is complete and the browser QA pass is done: all 30 figures produced + integrated into `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_07_modeling_your_first_object.html` (220,485 B), QA-proofed with 3 overlay corrections committed (#14 / #19 / #27). Only two L07 overlay flags remain (held #20 / #21, see Standing deferred follow-ups · need a working screenshot path). Two non-blocking directions for the next chat, Ray's call:

1. **Resolve held L07 #20 / #21 menu-cascade overlays** · the only open L07 figure flags; need a working screenshot capture path (this session's compositor returned blank frames) or finer UI-element detection to pin the menu-item targets, then correct + verify per locked cadence. Full note in the Standing deferred follow-ups below.
2. **Lesson 08 image pipeline kickoff** · begin the Lesson 08 (Modifiers Introduction) image requirements + phase plan, same pipeline as L07.

---

## Read at chat start

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` (this file)
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + all carry-forward rules · unchanged)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_07_integration_progress.md` (placement table · prefix registry · all Status bullets through Phase 6 PRODUCTION sub-chat B close · per-figure scene-state chain in the PRODUCTION bullets · 4 new SVG specs in sub-chat B Status bullet)
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_07_image_requirements.md` `## Image Placement Suggestions in HTML` `Section: good-practices` + `Section: project` + items #26 / #28 / #29 / #30 + the AI-prompt blocks

---

## L07 INTEGRATION overlay conventions (verbatim across P2 + P3 + P4 + P5 · use for any future L07 INTEGRATION)

Markup matches L07 P2 / P3 / P4 / P5 figures verbatim (NOT the L06 baseline column numbers):

- Inline-stacked pattern: `<figure>` col 20 · inner `<div style="position: relative; display: inline-block; max-width: 100%;">` col 24 · `<img>` + `<svg>` col 28 · callout elements (ellipse / line / circle / rect / text) col 32 · `<figcaption>` col 24. Plain-PNG (no overlay) pattern: `<figure>` col 20 · `<img>` col 24 · continuation attrs col 29 · `<figcaption>` col 24.
- `<svg>` attrs: `xmlns="http://www.w3.org/2000/svg"`, `viewBox="0 0 W H"`, `preserveAspectRatio="xMidYMid meet"`, `style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"`.
- Multi-callout / full-callout badges: rect h=60, `rx=6`, fill `#4ADE80`; text at rect center via `text-anchor="middle"` + `dominant-baseline="central"`, `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"`, `font-size="22"`, `font-weight="700"`, fill `#0f1a14`, NO letter-spacing; per-callout ids `c{N}-highlight[-K]` / `-leader[-K]` / `-marker[-K]` / `-badge[-K]`; marker circle r=6; leader stroke-width 3 stroke-linecap round; ellipse stroke-width 4. Sentence-case labels (c8 / c11 / c15 precedent).
- Composite-overlay badges: rect 440x100 `rx=6` fill `#4ADE80`; text at rect center (`dominant-baseline="central"`); font-size per locked formula `round(22 x viewBox_w / 1920)`; bottom margin ~40 px on 720-tall panels, scale proportionally for taller panels (#13 used 50 on 900-tall · #17 used 50 on 900-tall). Positive-green default colorway. All-caps OR sentence-case both have precedent (c12 / c5 / c6 / c17 sentence-case, c13 all-caps, L06 c25/c41 all-caps). For 3844x720 3-panel composites the c12-precedent geometry is locked: rect 440x100 at y=580 / text y=630 / fs 44 / panel centers 640 · 1922 · 3204 (used verbatim by c5 / c6 / c12).

---

## Standing deferred follow-ups (do not close in the next PRODUCTION/INTEGRATION chat)

- Browser QA pass for Lesson 07 · HELD-OPEN flags only: #20 c20 Clean-Up + Merge-by-Distance ellipses and #21 c21 Select-All-by-Trait + Non-Manifold ellipses both sit over the viewport / selected-mug area rather than the dark menu-cascade items they label (measured at QA 2026-05-28); exact menu-item pixel targets are not resolvable by brightness sampling and the Chrome screenshot compositor returned blank frames this session, so no verify-proofable edit was possible · revisit with a working screenshot path or finer UI-element detection. (RESOLVED at QA 2026-05-28 and removed from this list: #14 rim ellipse corrected to the measured rim line, #15 callouts measured plausible, #18 ellipse rows confirmed against the Properties panel, #19 selected-edge ellipse corrected to the measured orange edge, #22 origin-dot ellipse measured on target, #27 all 3 callouts corrected to the measured sphere / mug / cube positions · P2 #5 / #6 + P5 #17 composite-overlay panel labels use deterministic c12-precedent geometry so no position estimate to proof, #7 / #16 / #23 are plain)
- Browser QA pass for Lesson 06 across all 50 figures (highest priority: Phase 6 fresh integrations · #43 c43 4-callout, #41 c41 composite-overlay, #38 card-internal, #39 `Full Blender window` alt-text)
- Browser QA pass for Lesson 05
- Optional progress-doc archive sweeps for Lessons 05 and 06
- `IMAGE_STYLE_GUIDE.md` v6 revision (fold in L06 P5 / P6 discoveries + all L07 PRODUCTION discoveries (P1 matrix-sync, P1 INTEGRATION indent-depth-derivation, P2 viewport-cache-flush, P3 BMFace-normal-cache observation, P5 sub-chat A proportional-edit analytic-reversal + EEVEE world-shader studio backdrop, P5 sub-chat B shade_auto_smooth-vs-shade_smooth_by_angle operator split, P6 sub-chat A per-vert save/restore-and-update across 8 variant renders) + L07 P3 INTEGRATION composite-overlay font-size formula `fs = round(22 x viewBox_w / 1920)` + composite-overlay positive-green default colorway clarification + L07 INTEGRATION overlay-convention block above (now including the locked 3844x720 c12-precedent geometry))
- Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html` to flip pre-5.1.1 to corrected 5.1.1 key bindings (low-priority)
- Optional Pillow recompress for L07 P1 PNGs (#2 / #3 / #4 at 1.4 - 1.8 MB each)

---

## Locked rules carry forward

Full list in `lesson_06_completion_handoff.md` and the carry-forward block in `lesson_07_integration_progress.md`. All L07 PRODUCTION discoveries (P1 matrix-sync via `DRAW_WIN_SWAP`, P1 INTEGRATION indent-depth-derivation, P2 viewport-cache-flush via EDIT-OBJECT-EDIT toggle, P3 sub-chat A BMFace-normal-cache observation-only, P5 sub-chat A proportional-edit analytic-reversal + EEVEE world-shader studio backdrop, P5 sub-chat B shade_auto_smooth-vs-shade_smooth_by_angle operator split, P6 sub-chat A per-vert save/restore-and-`mesh.update()` across variant renders observation-only), the L07 P3 INTEGRATION composite-overlay font-size formula `fs = round(22 x viewBox_w / 1920)`, the composite-overlay positive-green default colorway, and the L07 INTEGRATION overlay-convention block above all carry forward. Brand palette, inline-stacked PNG overlay pattern with four variants, warning-vs-positive colorway split (composite-overlay defaults positive-green), deeper-indent variant for inside-card figures, WSL path convention (`\\wsl$\Ubuntu\` only), dry-run-then-commit-then-verify edit cadence, no-new-em-dashes rule (middle-dot `·` for separation; pre-existing em-dashes preserved verbatim through exact-match anchors), `Filesystem:write_file` for full overwrites (never `create_file`), `tool_search` for deferred tools, and all 10 L06 P5 / P6 BlenderMCP discoveries all carry into L07 unchanged.

---
