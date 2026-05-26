# Phase 5 INTEGRATION plan-lock · handoff

Locked decisions from 2026-05-25 plan-lock chat (interrupted before commit). Next chat reads this + session.md + the Phase 4 INTEGRATION plan section of `lesson_06_integration_progress.md` (structural template), then writes the new Phase 5 INTEGRATION plan section.

## Sub-chat split
1 sub-chat for all 8 figures. Fallback split: **5a** (#35 + #34 + #33 + #32) / **5b** (#31 + #30 + #29 + #28). Estimated HTML delta +12-15 KB.

## Bottom-up execution order (grep-verified absolute lines)
| Figure | Section          | Line |
|--------|------------------|------|
| #28    | `#duplicate-array` | 2470 |
| #29    | `#duplicate-array` | 2520 |
| #30    | `#spin-screw`      | 2617 |
| #31    | `#spin-screw`      | 2666 |
| #32    | `#spin-screw`      | 2712 |
| #33    | `#knife-tool`      | 2831 |
| #34    | `#knife-tool`      | 2886 |
| #35    | `#knife-tool`      | 2914 |

Order: **#35 → #34 → #33 → #32 → #31 → #30 → #29 → #28**

## Verified-unique anchor key phrases (all grep count=1)
Use these to ground 3-5 line `oldText` anchors when re-reading the HTML slice.

- #35: `Windows, logos, decorative patterns, text cutouts, panel details`
- #34: `Freehand cutting without constraints` + `Knife Tool Pro Tips`
- #33: `Press <kbd>Esc</kbd> to cancel`
- #32: `Adjust <strong>Iterations</strong> (how many full rotations)`
- #31: `Keep original profile or not` + `Spin Pro Tips`
- #30: `Adjust settings in operator panel (bottom-left)`
- #29: `Fuses copies if vertices overlap` + `Array Modifier Power Moves`
- #28: `Adjust <strong>Offset</strong> for spacing`

## c28 overlay coords (Pillow-scanned, viewBox 1920x1046, 3 callouts)
Scan results: Properties panel left edge x=1185; value-field bg transitions Count y=326-358, Rel Offset/Factor X y=393-436, Merge y=555+. Row centers: Count y=361, Rel Offset y=397, Merge y=569. Badge zone upper-left sky x=80-840 / y=82-128.

| # | Label           | Ellipse                    | Leader                  | Badge rect              | Text pos    |
|---|-----------------|----------------------------|-------------------------|-------------------------|-------------|
| 1 | COUNT           | cx=1325 cy=361 rx=90 ry=16 | (1235,361)→(227,110)    | x=80 y=87 w=140 h=46    | (150,118)   |
| 2 | RELATIVE OFFSET | cx=1340 cy=397 rx=110 ry=16| (1230,397)→(627,110)    | x=380 y=87 w=240 h=46   | (500,118)   |
| 3 | MERGE           | cx=1320 cy=569 rx=80 ry=16 | (1240,569)→(847,110)    | x=700 y=87 w=140 h=46   | (770,118)   |

All ellipses stroke `#4ADE80` width 4 fill none; leaders stroke `#4ADE80` width 3 linecap round; markers r=6 fill `#4ADE80` (7px right of badge left edge); badges fill `#4ADE80` rx=6; text font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`.

## c30 overlay coords (Pillow-scanned, viewBox 1280x720, 3 callouts)
Scan results: Z-axis dominant blue column x=551 (711 px); orange profile bbox x=548-731 / y=149-570 centroid (639,359); 3D cursor at intersection ~(551,567); X-axis red row y=566. Left-half clear badge zone x=60-310.

| # | Label        | Ellipse                       | Leader            | Badge rect            | Text pos  |
|---|--------------|-------------------------------|-------------------|-----------------------|-----------|
| 1 | 3D CURSOR    | cx=551 cy=567 rx=28 ry=28     | (523,567)→(308,567) | x=80 y=544 w=220 h=46 | (190,575) |
| 2 | PROFILE EDGE | cx=640 cy=360 rx=105 ry=215   | (535,360)→(308,360) | x=60 y=337 w=240 h=46 | (180,368) |
| 3 | SPIN AXIS    | cx=551 cy=110 rx=14 ry=80     | (537,110)→(308,110) | x=80 y=87 w=220 h=46  | (190,118) |

Same stroke/fill/badge styling as c28. Three straight horizontal leaders at y=110/360/567.

## Visual review of composite PNGs
**No new composite-overlays needed** (unlike c25 from Phase 4). #31 (profile vs wireframe vase), #34 (zigzag vs Y-shape vs X-ray rect loop), #35 (plane+circle vs menu vs cut-plane) all read distinctly at PRODUCTION scale. Match #24/#27 plain-composite precedent.

## #34 keybinding tension
Lesson body Knife Tool Modes table lists `C=angle, Z=cut-through` (pre-5.1.1). PNG shows corrected 5.1.1 bindings (A=angle, C=cut-through, Z=axis-lock). **Lock #34 alt text and figcaption to describe modal states visually WITHOUT naming keys** to sidestep contradiction. Lesson body table edit OUT OF SCOPE; folds into style-guide v4 addenda at lesson close.

## ID prefix registry update
No new IDs. `c28` and `c30` already reserved at Phase 5 PRODUCTION plan-lock. Cumulative tally after Phase 5 INTEGRATION close: **10 positive-green full-callouts** (c2/c3/c10/c16/c20/c28/c30/c45/c46/c49) + 1 composite-overlay (c25) + 1 warning-red (c23) + 3 decorative-shape (c13/c14/c15) = **15 total**.

## Insertion anchor for Phase 5 INTEGRATION plan section
Insert between Phase 5 PRODUCTION plan close and `## Locked rules`. Unique anchor (5th and last occurrence of "Met by this section." at char 158,411):

```
Cross-sub-chat temp file pattern for #35 documented as a first-in-Lesson-06 precedent. Met by this section.

---

## Locked rules (carry forward from Lessons 03, 04
```

(Anchor extends past `## Locked rules` heading because shorter variants collide with 4 earlier "Met by this section." instances.)

## Pending edits (5)
1. Insert new `## Phase 5 INTEGRATION plan` section into `lesson_06_integration_progress.md` (use anchor above, dry-run-then-commit, follow Phase 4 INTEGRATION plan structural model)
2. Append Status section close bullet documenting plan-lock details
3. Rewrite bottom-of-doc Next chat section to point at Phase 5 INTEGRATION sub-chat 1 execution
4. Rewrite `session.md` to point at same
5. No placement-table edits at plan-lock (those happen at INTEGRATION execution)

## Per-image specs still to draft (next chat)
For each of 8 figures, draft:
- 3-5 line `oldText` anchor grounded on the verified key phrase above
- alt text (no em-dashes; middle-dot separators; en-dashes from source HTML preserved through anchors)
- figcaption (same prose rules)
- Overlay markup pattern reference for #28 (uses c28 coords) and #30 (uses c30 coords); other 6 are plain

Follow Phase 4 INTEGRATION plan's per-image spec format exactly (`#### #N · filename · section · [plain figure / figure with cN full callout], col 4/8` + oldText block + alt + figcaption).

## Locked rules carrying forward
- WSL `\\wsl$\Ubuntu\` paths only
- `Filesystem:edit_file` dry-run-then-commit-then-`get_file_info`-verify per edit
- No new em-dashes; middle-dot `·` for separation; pre-existing en-dashes preserved
- One edit per figure when executing (serialization-truncation workaround); short multi-edit batches OK for table flips
- PART 06 indentation 0/4/8: figure col 4, img/figcaption col 8, overlay svg col 12

## After Phase 5 INTEGRATION
Next phase: Phase 6 PRODUCTION plan-lock (`#subdivide` + `#bevel`, images #36-#43, 8 images, 2H/2M/4L priority).
