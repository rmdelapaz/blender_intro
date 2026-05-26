# Lesson 06 Phase 6 INTEGRATION plan-lock HANDOFF

**Written:** 2026-05-25 at the close of an interrupted Phase 6 INTEGRATION plan-lock chat (context tightened mid-plan-lock before the new `Phase 6 INTEGRATION plan` section could be written into the progress doc, Status bullet appended, Next chat section repointed, or `session.md` rewritten).

**Purpose:** Carry the locked decisions from this chat forward so the next chat can complete the plan-lock without re-deriving them. Mirrors the precedent set by `lesson_06_phase5_integration_planlock_HANDOFF.md` (which was referenced in the 2026-05-25 Phase 5 INTEGRATION plan-lock Status bullet of `lesson_06_integration_progress.md`).

**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## What is locked

### 1. HTML baseline verified

`lesson_06_edit_mode_essentials.html` at 224,002 bytes (matches Phase 5 INTEGRATION close; no other edits landed since). Section anchors confirmed at:

- `#subdivide` line 3071
- `#bevel` line 3239
- `#lesson-summary` line 3478

(Note: the Phase 5 INTEGRATION plan-lock and Phase 6 PRODUCTION plan-lock both stated "3,481 lines" but actual file is 3,555 lines. Byte count is the authoritative cross-check and it matches exactly. Stale line-count value in the prior Status bullets is harmless.)

### 2. Bottom-up execution order

Descending document line order, matching the Phase 5 INTEGRATION sub-chat 1 pattern:

**`#43 → #42 → #41 → #40 → #39 → #38 → #37 → #36`**

Per-figure insertion-line positions (where the figure block inserts, between the closing tag of the anchor's preceding content and the opening tag of the anchor's following content):

| # | Insert between lines | Section |
| --- | --- | --- |
| 43 | 3392 / 3394 | `#bevel` |
| 42 | 3363 / 3365 | `#bevel` |
| 41 | 3359 / 3361 | `#bevel` |
| 40 | 3332 / 3334 | `#bevel` |
| 39 | 3266 / 3268 | `#bevel` |
| 38 | 3234 / 3235 | `#subdivide` |
| 37 | 3193 / 3195 | `#subdivide` |
| 36 | 3149 / 3151 | `#subdivide` |

### 3. Anchor key phrases (all grep-verified unique)

Each phrase below is sufficient to ground a 3-5 line `oldText` anchor uniquely against the current HTML. Phrases verified via `text.count(phrase)` returning 1 for each.

- #36: `Too many subdivisions can make your mesh unmanageable`
- #37: `After subdividing, check the Adjust Last Operation panel`
- #38: `Result:</strong> Rough, natural-looking terrain`
- #39: `Scroll <strong>mouse wheel</strong> to add more segments (smoothness)`
- #40: `Scroll mouse wheel while beveling to adjust in real-time`
- #41: `Rounded corners, bolt heads, soft vertices`
- #42: `"Everything has at least a 0.5mm bevel."`
- #43: `Add Modifier → Bevel, adjust Amount and Segments`

### 4. c43 overlay coords (4-callout, locked)

`c43` covers 4 callouts on the Bevel Modifier panel in `lesson_06_43_bevel_modifier_settings.png` (1920x1054). Source-image Pillow band scan completed during this chat; row text-centers measured at the value-field x-band.

**ViewBox:** `0 0 1920 1054`

**Colorway:** positive-green throughout (stroke/fill `#4ADE80`, text fill `#0f1a14`)

**Shared geometry:** ellipses `rx=80 ry=16 stroke-width=4 fill=none`; leaders `stroke-width=3 stroke-linecap=round`; markers `r=6`; badges `rx=6 height=46`; text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size=22 font-weight=700 text-anchor=middle letter-spacing=2`

| Callout id | Label | Ellipse (cx, cy) | Badge (x, y, w) | Marker (x, y) | Text (x, y) |
| --- | --- | --- | --- | --- | --- |
| `c43-amount` | `AMOUNT` | 1810, 428 | 240, 87, 140 | 387, 110 | 310, 118 |
| `c43-segments` | `SEGMENTS` | 1805, 456 | 440, 87, 180 | 627, 110 | 530, 118 |
| `c43-limitmethod` | `LIMIT METHOD` | 1805, 498 | 680, 87, 240 | 927, 110 | 800, 118 |
| `c43-angle` | `ANGLE` | 1810, 521 | 980, 87, 140 | 1127, 110 | 1050, 118 |

**Title id:** `c43-title`. **Desc id:** `c43-desc`. ARIA pattern: `aria-labelledby="c43-title c43-desc"` on the `<svg>` root.

**Notes on the locked target set:**

- Phase 6 PRODUCTION plan-lock anticipated 5 likely targets (Amount, Segments, Angle Limit, Limit Method, Clamp Overlap). Clamp Overlap was **dropped** because it lives inside the collapsed Geometry sub-panel and is not visible in the captured PNG.
- Angle Limit and Limit Method were initially considered as a single combined callout, then **split into 2** separate callouts (`LIMIT METHOD` row showing the Angle enum dropdown, `ANGLE` row showing the 30 degree threshold value) since the lesson body Bevel Modifier Advantages card emphasizes both the smart-bevel mechanism (Limit Method) and the threshold value (Angle).
- Leaders fan out diagonally up-left from each ellipse left edge to a marker positioned at the right of each badge, mirroring the c28 multi-callout idiom (c28 had 3 callouts; c43 extends the pattern to 4).
- Badge positions chosen to clear the viewport top-left overlay text (`User Perspective` / `(1) Collection | L06_BevelModCube` at x=43 to x=220) and to clear the Outliner content (Scene Collection / Camera / L06_BevelModCube / Light) which starts at x=1240. All 4 badges sit in the viewport area between x=240 and x=1120 with the y=87-133 badge row hovering above the cube top.

### 5. Composite PNG visual review verdicts

All 6 Phase 6 composite PNGs reviewed in this chat. The c25 trigger criterion ("panels read too similarly at thumbnail scale") was applied per figure.

| # | Panels | Verdict |
| --- | --- | --- |
| 36 | 4-panel TOP ortho subdivision progression (4 / 16 / 64 / 256 faces) | Ships plain. Exponential growth obvious. |
| 37 | 2-panel V-polyline subdivide smoothness 0.0 vs 1.0 | Ships plain. Angular V vs rounded arc reads at a glance. |
| 38 | 2-panel flat plane vs fractal terrain | Ships plain. Visual contrast dramatic. |
| 40 | 4-panel bevel segment 1 / 2 / 4 / 8 progression | Ships plain. Reads as #24 / #27 progression precedent. Figcaption carries the per-panel segment counts. |
| 41 | 2-panel edge bevel vs vertex bevel | **NEW `c41` composite-overlay required.** WHERE-the-bevel-is distinction (full-edge chamfer vs single-corner cut) is subtle at thumbnail scale. Matches c25 trigger criterion. |
| 42 | 2-panel MATCAP sharp vs beveled cube | Ships plain. Bevel-catches-light vs flat-CG message obvious. |

### 6. c41 composite-overlay coords (locked, identical geometry to c25)

`c41` covers 2 panel labels on `lesson_06_41_edge_vs_vertex_bevel.png` (2562x720). Identical geometry to c25 since both are 2562x720 2-panel composites with the same panel boundaries.

**ViewBox:** `0 0 2562 720`

**Colorway:** positive-green (rect fill `#4ADE80`, text fill `#0f1a14`)

**Shared geometry:** rect `rx=6 fill=#4ADE80`; text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size=22 font-weight=700 text-anchor=middle fill=#0f1a14 letter-spacing=2`. No ellipse, no leader, no marker (composite-overlay variant per style guide v4).

| Callout id | Label | Rect (x, y, w, h) | Text (x, y) |
| --- | --- | --- | --- |
| `c41-panel1` | `EDGE BEVEL` | 500, 644, 280, 46 | 640, 675 |
| `c41-panel2` | `VERTEX BEVEL` | 1782, 644, 280, 46 | 1922, 675 |

**Title id:** `c41-labels-title`. **Desc id:** `c41-labels-desc`. ARIA pattern: `aria-labelledby="c41-labels-title c41-labels-desc"` on the `<svg>` root.

### 7. ID prefix registry update

Plan-locked PNG overlay registry total grows from **13 to 14** entries with `c41` added at this plan-lock (between `c40` numerically and `c43` alphabetically, place wherever the registry's existing ordering convention places it).

Full 14-entry list after this plan-lock: `c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c25`, `c28`, `c30`, `c41` NEW, `c43`, `c45`, `c46`, `c49`.

Cumulative Lesson 06 PNG overlay tally projection at Phase 6 INTEGRATION close: **17 PNG overlays integrated** (15 currently integrated + `c41` + `c43`), broken down as 12 positive-green full-callouts (`c2`, `c3`, `c10`, `c16`, `c20`, `c28`, `c30`, `c43` NEW, `c45`, `c46`, `c49`), 2 positive-green composite-overlays (`c25`, `c41` NEW), 1 warning-red full-callout (`c23`), 3 decorative-shape-only (`c13`, `c14`, `c15`).

(Note: Phase 6 PRODUCTION plan-lock Status bullet projected 16 integrated at Phase 6 INTEGRATION close based on 13-entry registry plus `c43`. The c41 addition at this plan-lock bumps the projection by 1, to 17.)

No new SVG ids (Phase 6 has no SVGs per Option L; SVGs are concentrated in Phases 1 / 2 / 3 at `pf`, `sr`, `dd`).

---

## What is pending for the next chat

### A. `#39` file-size disposition decision

**Recommended:** crop and resize in place via Pillow through `blender:execute_blender_code`, mirroring the Phase 4 sub-chat B `#45` precedent.

- Current state: 3838x2160 native 4K snip, 1,340,913 bytes
- Recommended target: ~1920x1080 viewport-only, ~500 KB
- Preserve in crop: the viewport with the bevel-modal-active cube + orange bevel preview band, the top floating readout `Offset: 0.1735 m, Segments: 3, Profile Shape: 0.5`, the bottom modal keybinding hints bar (`Confirm` · `Esc Cancel` · `Ctrl Snap` · `M Width` · `A Width` · `S Segments` · `P Profile Shape` etc.), and the right-side Properties panel showing the carried-over Bevel Modifier
- Drop from crop: top Windows titlebar, top menubar + workspace tabs, bottom timeline + status bar, left toolbar
- No overlay viewBox to match (no c39 planned), so the resize ratio is flexible
- Bonus: smaller file size, viewport-focused framing matches the lesson body teaching emphasis on the modal interface

**Alternative:** ship at native 3838x2160 / 1.34 MB. Defensible since the modal-active state is clearly captured and the Phase 6 PRODUCTION plan-lock #39 spec explicitly allowed `INTEGRATION HTML insertion sized at native PNG dimensions`. Cost is page weight (about 800 KB above the recommended target).

### B. Draft 3-5 line `oldText` anchors for all 8 figures

Use the locked anchor key phrases in section 3 above as the grounding line. Each anchor should:

- Be 3-5 lines (4 lines is the default; extend to 5 if needed for grep-uniqueness)
- Include 2-3 lines BEFORE the insertion point and 1-2 lines AFTER
- Preserve pre-existing en-dashes and any other source-content characters verbatim
- Preserve indentation exactly (`#subdivide` and `#bevel` both use 0/4/8-space depth; figures sit at section level so the figure block uses figure col 4, img / svg root at col 8, svg children at col 12, deeper SVG nesting at col 16 or 20, figcaption col 8)

### C. Draft alt text and figcaption prose for all 8 figures

Style discipline applies to all 8:

- Zero new em-dashes anywhere in alt text or figcaption
- Middle-dot (`·`) for any dash-style separation
- Pre-existing en-dashes in source HTML preserved verbatim through anchors
- Backticks around literal Blender UI strings (operator names, parameter names, modal status bar text, etc.) per the Phase 4 INTEGRATION sub-chat 1 precedent
- Use modal-state language for #39 per the Phase 5 INTEGRATION #34 keybinding-tension workaround precedent (describe the visible modal state without leaning on specific key names when the lesson body table and the captured PNG might disagree on key bindings)

For #41 specifically, the figcaption should explicitly call out the `EDGE BEVEL` (left) and `VERTEX BEVEL` (right) labels carried by the new c41 overlay so the labels' meaning lands in prose for screen-reader users.

For #40, the figcaption should carry the per-panel segment counts (`Panels: 1 segment · 2 segments · 4 segments · 8 segments` or similar) since c40 ships plain.

### D. Lock sub-chat split

**Recommended default:** 1 sub-chat for all 8 figures with fallback split point at **6a (#43 + #42 + #41 + #40 + #39)** / **6b (#38 + #37 + #36)** on the `#bevel` / `#subdivide` section boundary if context tightens mid-execution. Matches the Phase 5 INTEGRATION sub-chat 1 cadence (8 figures landed cleanly in 1 sub-chat with the 5a / 5b fallback not invoked).

**Estimated HTML byte delta:** +13-16 KB, slightly above the Phase 5 INTEGRATION sub-chat 1 actual at +12,030 bytes given Phase 6 has 8 figures vs Phase 5's 8 plus 2 new overlay registrations (`c41` 2-badge composite-overlay smaller than c28 / c30 3-callout; `c43` 4-callout larger than c28 / c30 3-callout).

### E. Plan-lock close edits

At plan-lock close, perform these edits in order on the progress doc:

1. Write new `Phase 6 INTEGRATION plan` section into `lesson_06_integration_progress.md` between `Phase 6 PRODUCTION plan` and `Locked rules`. Estimated +25-30 KB section delta per Phase 5 INTEGRATION plan-lock precedent at +27,784 bytes.
2. Append Phase 6 INTEGRATION plan-lock Status bullet to the Status section. Bullet documents: anchors verified (grep counts), bottom-up order locked, c43 / c41 coord tables locked, composite visual review verdicts, #39 file-size disposition decision, sub-chat split locked, ID prefix registry update (`c41` added; total 14).
3. Rewrite the bottom-of-doc Next chat section to point at Phase 6 INTEGRATION sub-chat 1 execution.

Then rewrite `session.md` to point at Phase 6 INTEGRATION sub-chat 1 (or 6a if Ray prefers the smaller split from the open). No placement-table flips at plan-lock (plan-lock is plan-lock only).

Counts at plan-lock close: 50 of 50 produced, 42 of 50 integrated (unchanged since plan-lock is plan-lock only).

---

## What is in Claude container scratch space

Nothing persists across chats. The next chat will need to recopy these from WSL if needed:

- `/home/claude/lesson_06.html` (working copy of the full HTML, used for grep verification and anchor extraction)
- `/mnt/user-data/uploads/lesson_06_*.png` (the 8 Phase 6 PNGs, copied via `Filesystem:copy_file_user_to_claude` for visual review and Pillow band scan)
- `/home/claude/43_mockup2.png` (the locked c43 layout overlay drawn on top of #43 for visual verification)

If the next chat needs to re-verify the c43 layout visually, re-run the mockup script with the locked coordinates from section 4 above.
