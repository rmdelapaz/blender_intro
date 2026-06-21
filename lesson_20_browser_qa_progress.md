# Lesson 20 &#183; Camera Basics &#183; Browser QA Progress

**Companion to** `lesson_20_integration_progress.md`. Browser QA is the final gate; PASS/CLEAN closes L20.

**Lesson file:** `lesson_20_camera_basics.html` (216,136 B)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**Status:** **PASS / CLEAN** &#183; 2026-06-21.

---

## Environment

- Served via the local dev server at `http://localhost:5504/lesson_20_camera_basics.html` (file:// UNC scheme is not reachable as a browser URL host; the dev server is the correct view path).
- Verification was done primarily by programmatic DOM inspection (rendered `getBoundingClientRect`, computed styles, viewBox coordinates) rather than pixel screenshots. In this embedded-browser setup the OS-window screenshot surface is desynced from the in-panel page scroll, so the screenshot path was not a reliable instrument; the DOM/computed-style checks are higher precision for the overlay-alignment and currentColor gates this QA requires.
- Page layout viewport in the panel is ~833px wide (a narrow/tablet breakpoint). No horizontal overflow at that width, and the pre-panel 1112px read was also overflow-free.

---

## Results

### Figures present and loading
- figure 17/17, figcaption 17/17, img 12, inline SVG 5 (ca/fc/cm/rt/hr). All match invariant targets.
- All 12 PNGs load (0 broken; the initial broken read was lazy-load not-yet-decoded, cleared after forcing decode). Intrinsic dimensions match the deliverables exactly (e.g. #04 1902x425, #06/#07 1920x1080, #14/#17 1894x243, #03/#15 618x792, #02/#05 1266x425, #08 1900x425, #11 1900x429, #30 1900x1080).

### Overlay alignment (1:1)
- All 10 overlaid PNGs (c2/c3/c4/c5/c8/c11/c14/c15/c17/c30): overlay SVG rect matches the `<img>` rect within 2px on all four edges; each overlay `viewBox` equals the PNG pixel dimensions; rendered aspect equals natural aspect; `pointer-events: none` confirmed on every overlay.
- #6 and #7 confirmed solo (no overlay), as intended. No c6/c7 id refs.

### c30 right-column header clearance (called-out check)
- c30-p2-hdr ("Subject lost to clipping") and c30-p4-hdr ("Wrong active camera") both at **x=1092**, clearing the right-column X badges (badge right edge 1062, 30px clearance). Left headers at x=185, left bodies x=92 (clear of left badges x=98 to 162); right bodies x=992 sit below the badge y-bands. No collision. The prior-chat band-coord fix holds in the live render.

### Overflow / nav / tables
- No horizontal page overflow (scrollWidth == clientWidth) in light AND dark mode. 0 elements wider than viewport.
- `.lesson-nav` no overflow. 2 tables, neither overflowing (no `.table-wrap` needed at this width).

### Mermaid
- 1 `.mermaid` element, rendered to SVG, no syntax error. 5 nodes / 4 edges, learning-path flow (Camera Basics to Composition Mastery / Depth of Field / Camera Animation to Professional Cinematography). Preserved and intact.

### Dark mode (currentColor on the 5 inline SVGs)
- Theme is driven by `data-theme` on `<html>` via `button#theme-toggle`.
- In dark mode the 5 inline SVGs inherit `color: rgb(212,212,212)` (light) and their `currentColor` text fills resolve to that light value. Verified across ca/fc/cm/rt/hr. Body/card surfaces go dark (`--text-color: #d4d4d4`, `.card` bg `rgb(45,45,48)`).
- The `fc` focal-range labels ("18-24mm" etc.) compute to fixed dark `#1a1a1a` via a parent `<g fill="#1a1a1a">`; this is correct by design (label-on-colored-swatch, e.g. on the `#4A9EFF` blue swatch), readable in both themes and independent of `currentColor`. Not a defect.
- Brand orange fixed elements stay orange in both modes (ca 7, fc 5, cm 13, rt 4, hr 4).
- Theme restored to light at QA close.

---

## Cleanup (carried from integration, executed this session)

- The three protected triad source panels `_l20_F_{20,50,135}_TEMP.png` were still on disk at session start (the prior integration-doc claim that they were deleted was inaccurate; no Filesystem delete tool was exposed that session). #4/c4 confirmed in-page (img src present, full c4 namespace present), so the panels were UNBLOCKED and DELETED via the Blender bridge `os.remove` (1,507,624 + 1,453,174 + 1,369,857 B). Filesystem confirms gone. No other `_l20_*` strays remain. Scene re-confirmed true-pristine (3 objects Camera+Cube+Light, 0 materials) before and after deletion.

---

## Verdict

**L20 browser QA: PASS / CLEAN.** All 17 figures render; 10 overlays align 1:1; c30 right headers clear the X badges; no table/nav/page overflow (light + dark); mermaid intact; dark-mode currentColor works on all 5 inline SVGs. Cleanup done, Blender pristine. **Lesson 20 is COMPLETE.**
