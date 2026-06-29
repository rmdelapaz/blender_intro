# L37 SVG BATCH — HANDOFF (8 inline SVGs authored + cairosvg-verified, NOT yet integrated)

Status at handoff: all 8 SVGs authored Claude-side at `/home/claude/svg/` (ephemeral, gone next chat) and pixel-verified PASS. Live HTML UNTOUCHED. Baseline re-confirmed Claude-side: 247,601 B, U+2014 95, figure/figcaption/img/svg 0 — matches Phase-0 close.

## NEXT CHAT TASK
Re-author the 8 inline SVGs from the per-figure specs below (they regenerate deterministically), cairosvg pixel-verify each, integrate into live HTML via `Filesystem:edit_file` dryRun->commit->get_file_info (FIRST-match anchors), recount invariants, update this doc + `lesson_37_integration_progress.md` + session.md head. Then PNG batches (16, <=5/sub-chat).

## CAIROSVG PREVIEW FIX (new, important)
The locked workaround must strip the ENTIRE root `style="..."` attribute (not just position:absolute). The root carries `style="width:100%;height:auto;font-family:..."`; with width:100% + output_width set, cairosvg rasterizes a fully-transparent/zero canvas. Preview = `re.sub(r'(<svg[^>]*?)\sstyle="[^"]*"', r'\1', raw, count=1)` then substitute currentColor->#d4d4d4. Verify: render at viewBox px-box, ink>4% over modal-bg, box==viewBox.

## PLACEMENT MAP (anchors confirmed in live HTML; L37 uses .card + emoji-<h4> pattern, NOT bare <h4>)
| Fig | prefix | section id | placement (insert figure immediately AFTER this card's closing </div>) | viewBox |
|-----|--------|-----------|-----------------------------------------------------------------------|---------|
| 2  | ba | bone-anatomy           | after "&#9989; Bone Components" card (head/tail/body/roll)             | 0 0 760 460 |
| 3  | dt | bone-anatomy           | after "&#128161; Bone Visualization Options" card                     | 0 0 1000 360 |
| 11 | rl | bone-anatomy           | after "&#128208; Bone Coordinate System" card                         | 0 0 820 480 |
| 7  | ph | bone-hierarchies       | after "&#9989; How Hierarchies Work" card                             | 0 0 900 560 |
| 13 | nc | naming-conventions     | after "&#9989; Professional Naming Pattern" card                      | 0 0 900 520 |
| 15 | bp | biped-armature         | after "&#128208; Standard Biped Bone Count" card                      | 0 0 920 680 |
| 26 | cm | understanding-armatures| after "&#9888; The Foundation of Animation" card (bad-armature warn)  | 0 0 960 620 |
| 29 | ep | creating-first-armature| after "&#127917; The Three Armature Modes" card                       | 0 0 900 470 |

NOTE bone-anatomy section holds 3 SVGs (2,3,11). Each anchor card text is unique -> FIRST-match safe. Insert order within section by card position: #2 (Components) -> #11 (Coordinate System) -> #3 (Display Types). #29 inserts before the "&#9888; Critical Mode Distinction" card (which holds the pre-wrapped Edit-vs-Pose table — do NOT disturb it).

## LOCKED SVG RULES (all 8 verified compliant)
- root `color="currentColor"` (dark/light invert), NO `color="#222"`.
- NO literal banned chars; entities only: arrow `&#8594;`, em-dash `&#8212;` (figcaptions), times `&#215;`, bullet `&#8226;`, degree `&#176;`, check `&#10003;`, cross `&#10007;`.
- Blender palette: bg #2b2b2b (blueprint #15212e), edit-orange #ff8c00 / head-sphere #ffd27f / stroke #cc7000, pose-blue #00b8ff / #bdecff / #0086c3, axes X=#ef4444 Y=#3b82f6 Z=#22c55e, correct #4CAF50, wrong #f44336, highlight #ffeb3b.
- Each root: `role="img" aria-labelledby="<pfx>-t <pfx>-d"` + <title id> + <desc id>; `style="width:100%;height:auto;font-family:'Inter','Segoe UI',sans-serif"`.

## PER-FIGURE DESIGN SPEC (regenerate to match verified versions)
- #2 ba bone-anatomy-breakdown: single octahedral bone vertical, HEAD = large sphere at BOTTOM (380,360), TAIL = small sphere at TOP (380,150); local axes from pivot (380,255): Y blue up, X red right, Z green down-left diagonal, each arrow-headed; yellow roll arc on right of body; 4 dashed leader labels: Head(start), Tail(end), Body(shaft) [keep label x>=204 so not clipped], Roll(twist axis). Title "Bone Anatomy".
- #3 dt bone-display-types: 5 equal panels (200px each) over 1000-wide; same 3-bone vertical chain in: Octahedral(diamonds), Stick(line+spheres), B-Bone(curved segmented path), Envelope(influence ellipses behind line), Wire(outline-only diamonds). Top label per panel + small caption bottom. Dividers at x=200/400/600/800.
- #11 rl bone-roll: split left/right at x=410. LEFT "Correct Roll &#10003;" (green header): rest bone with X-axis to the side, below it forearm bent FORWARD (green arc). RIGHT "Incorrect Roll &#10007;" (red header): rest bone with X twisted 90deg (X points down), below it forearm bent SIDEWAYS (red arc). Footer: "Fix with Edit Mode &#8226; Ctrl+N &#8226; Recalculate Roll &#8594; Global +Y Axis".
- #7 ph hierarchy: tree, pelvis root (purple #5a3d8c pill) center-low; spine chain up pelvis->spine_01->chest->neck->head (orange-stroke boxes); chest curves out to shoulder.L/.R; arms are BLUE-stroke boxes with vertical blue parent->child arrows shoulder->upper_arm->forearm->hand each side; legs green-stroke boxes pelvis->upper_leg->lower_leg->foot each side with orange arrows. Legend box bottom-left (root/spine/arms/legs). Two arrowhead markers: ph-arrow orange, ph-arrow2 blue.
- #13 nc naming: LEFT Outliner panel (x24..396) "&#9776;" header, indented tree pelvis/spine_01-03/neck/head then shoulder.L..hand.L (cyan #7fd4ff) then .R (orange #ffb066) then upper_leg.L/.R; color key dots center/.L/.R. RIGHT: "Naming Rules" bullets; green "&#10003; Correct" panel (upper_arm.L, forearm.R, spine_01, hand.L, thumb_01.R, foot.L); red "&#10007; Avoid" panel (Bone.001, ArmUpper, left_arm, Bone.034, FOREARM-L, handLeft); bottom blue tip box (keep text short: "...lets Symmetrize build the mirror side").
- #15 bp biped-blueprint: blueprint bg #15212e, faint grid. FRONT view centered x=300: slim-diamond bones (width ~6-7) spine stack pelvis(360)->spine_01(320)->_02(280)->_03(240)->neck(204)->head(176); arms out from shoulder joint (300,228) diagonally down to hand each side; legs from pelvis(300,360) down to feet. SIDE view x=730: S-curve spine + leg with FORWARD knee (orange circle callout "knee forward"). Center spine labels placed JUST RIGHT of centerline (x~312) with short leaders (avoids collision); .L limb labels right / .R limb labels left-anchored (text-anchor=end). Legend bottom: "Total: 20 bones &#8226; Hierarchy &#10003; &#8226; Symmetry &#10003; (.L / .R mirror)". CRITICAL: front bones must be NARROW vertical diamonds (earlier wide-sliver bug fixed); nothing clipped off-canvas.
- #26 cm common-mistakes: 2x3 grid (cells 300x250, gap 20, start x20/y70). Each panel = title + WRONG(left, red tint #2a1a1a, "&#10007;") | RIGHT(right, green tint #16261a, "&#10003;"): (1)Bone Position out-of-mesh vs inside; (2)Knee centered(red dot on dashed centerline) vs forward(green dot bumped); (3)Naming Bone.001/017/034 vs upper_arm.L/forearm.R/spine_01; (4)Hierarchy 3 loose bones vs connected chain w/ green parent->child arrows (marker cm-ar); (5)Symmetry misaligned vs mirrored (dashed center axis); (6)Roll sideways-bend vs forward-bend. Caption per half.
- #29 ep edit-vs-pose: split x=24..440 (Edit, orange #ff8c00 border) | x=460..876 (Pose, blue #00b8ff border). Each: dark header bar w/ mode dropdown pill ("Edit Mode &#9662;" / "Pose Mode &#9662;"), "Tab toggles"/"Ctrl+Tab" hint. Edit = orange 3-bone straight rest-pose chain + "rest pose"; Pose = blue 3-bone BENT chain + rotation arc + "posed". Bottom can-do panels: Edit "Can: build structure" (add/delete bones, set rest pose, build hierarchy, permanent); Pose "Can: pose &amp; animate" (create poses, keyframe, test rig, temporary). Center mnemonic Orange=edit / Blue=pose.

## INTEGRATION FIGURE PATTERN (inline SVG; no <img>, no overlay-margin fix needed — that's PNG-only)
```
<figure style="margin:1.5rem 0;text-align:center">
  <SVG_HERE/>
  <figcaption>Figure N &#8212; caption</figcaption>
</figure>
```
Use this lesson's existing inline-SVG figure pattern if L33-L36 used a specific wrapper; otherwise the above. Confirm against an existing integrated lesson before first commit.

## POST-INTEGRATION INVARIANT TARGETS (UTF-8 python3, on-disk)
figure 8 / figcaption 8 / </figure> 8 / svg 8 (all inline) / img 0; U+2014 must stay 95 (+0 new; figcaptions use &#8212; entity); U+2192 77 (+0); U+2013 0; literal U+00B7 0; currentColor >=8 (one per root, more in fills); color="#222" 0; #667eea/#764ba2/linear-gradient 0; <table> 2 / .table-wrap 2; lesson_36 1 / lesson_38 1; mermaid class="mermaid" 4 + jsdelivr 1. Bytes: baseline 247,601 + sum of 8 figure blocks (each ~3.8-9.0 KB SVG + wrapper); verify every commit byte-delta matches projection; get_file_info + re-pull + recount after EACH commit.

## id-prefix collision check: run before commit — none of ba/dt/rl/ph/nc/bp/cm/ep should pre-exist in live HTML (grep). All ids inside each SVG are prefixed.
