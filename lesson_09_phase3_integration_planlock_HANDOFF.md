# L09 Phase 3 INTEGRATION — plan-lock handoff (paste into a fresh chat)

**Task:** Integrate all 5 `#vertex-snapping` figures (#4 `c4` · #5 `c5` synthetic · #6 `c6` · #7 `c7` · #8 `c8`) into the live HTML. Phase 3 INTEGRATION = its OWN chat per ≥6 figures; this is that chat.

**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`
**Target HTML:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_precision_modeling_techniques.html` (**254,087 B** at this handoff).

## Read first, in order
1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md`
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` (locked inline pattern + carry-forward rules)
3. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_integration_progress.md` — the two Phase 3 PRODUCTION Status bullets (Sub-chat B #7, Sub-chat A #4/#5/#6/#8) carry the full per-figure INTEGRATION specs (overlay type, viewBox, fs, labels, recorded overlay px), placement anchors, locked-rules block. PLUS the newest Status bullet (this handoff's #7 re-render) — read it for the AgX resolution.
4. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_09_image_requirements.md` — `### Section: Vertex and Element Snapping` + figure entries / Prompt blocks for #4/#5/#6/#7/#8 (figcaption / alt-text source).

Everything (per-figure overlay specs, viewBox/fs, labels, recorded overlay px, placement anchors, indent col 20, bottom-up commit, dryRun→commit→get_file_info cadence, pixel-verify-before-commit P1-QA rule, NO baked labels) reads from the docs — do not restate.

## Deltas done in the plan-lock chat (do NOT redo)
- **All 5 PNGs verified on disk** (`get_file_info`): #4 712,560 · #5 424,805 · #6 581,613 · #7 **1,066,745** (NEW, re-rendered) · #8 613,641 B. Working HTML copy refreshed; confirmed **254,087 B**.
- **AgX CONSISTENCY DECISION → RESOLVED: #7 was RE-RENDERED under Standard transform** (Ray's call). The AgX version washed #7's orange markers to peach (`mean (230,168,103)`) vs the Standard siblings; re-render brings #7 to `mean (253,175,26)` — squarely in the sibling band (#4 (254,159,21) / #5 (253,192,33) / #6 (254,143,13) / #8 (252,181,29)). Contact-strip visual + Pillow stats both confirm parity. **#7 dims UNCHANGED 5126×720** (4×1280 + 3×2px `#FF6B00` dividers at x=1280/2562/3844), so the documented `c7` fs 59 + panel-center geometry stays valid. Construction identical to the Sub-chat-B doc (4-vertex L-shape + cyan crosshair world (1.3,0.3,0.9), panels Closest/Center/Median/Active, fixed cam). **No further #7 production needed — proceed straight to `c7` overlay integration.**
- **Re-render recipe used (locked confirmation of the Sub-chat-A discovery):** `view_settings.view_transform='Standard'` + `look='None'`; world dropped to 0.05/str1.0 to match the sibling dark-floor aesthetic; `L09Orange` base+emis (1.0,0.30,0.0)/str1.2; `L09Cyan` (0.16,0.50,1.0)/str1.4; `L09GridLine` emis str 0.9; active vert via sub-chat-local `L09OrangeBright` (1.0,0.52,0.10)/str2.2 r0.19; F12 `bpy.ops.render.render` (NOT render.opengl). **Scene RESTORED to documented L09 base at close** (AgX, world 0.88/1.0, `L09Orange` (1.0,0.42,0.0)/str5.0, `L09Cyan` (0.29,0.62,1.0)/str5.0, `L09GridLine` str0.6, `L09OrangeBright` removed, demo meshes cleared, purge do_local_ids=False). Final scene = 4 base objs (L09Cam @ (7.5,−9.0,5.8) lens50 / L09CamTarget @ (0,0,1.0) / L09Key / L09Fill) + 6 mats (L09Cyan/L09DemoGrey/L09FloorDark/L09Ghost/L09GridLine/L09Orange), BLENDER_EEVEE, no `.blend`. Local tempdir removed. **INTEGRATION is pure HTML and does NOT need the live scene.**

## Locked placement plan (anchors grep-confirmed unique as `<h3>` headings in live HTML)
Section-content indent **col 20** (figure 20 / div 24 / img+svg 28 / callout 32 / figcaption 24). All overlays **positive-green** default. **Pixel-verify every overlay vs the actual PNG (Pillow scan + cairosvg overlay-over-PNG) BEFORE each commit** (locked P1-QA rule). Each edit dryRun=true → commit dryRun=false → `get_file_info`. Insert after each heading's body, forward-anchored on the NEXT `<h3>` (extend past bare card-close / `#fff3cd` openers per the locked L08 lesson; re-grep to confirm 1 match at edit time — line numbers below are from the 254,087 B copy and will drift as you insert).

| Fig | Overlay | viewBox · fs | Insert after (line @254,087 B) | Before next `<h3>` |
|---|---|---|---|---|
| #4 `c4` | composite-overlay 3-panel "Before"/"During"/"After" (+ optional per-panel snap-radius ring / movement arrow / zero-gap indicator) | 3844×720 · fs 44 | Snap-Dance `</blockquote>` (1064) | `<h3>Edge Snapping: The Middle Ground</h3>` (1066) |
| #5 `c5` | synthetic single-figure (approach→midpoint arrow · midpoint/quarter snap-point labels · "can snap anywhere along edge"; optional vertex-only inset). Recorded px: edge-A(434,232) edge-B(661,297) mid(542,263) q1(487,247) q3(600,279) approach(430,194) | 1280×720 | Edge-vs-Vertex card `</div>` (1116) | `<h3>Face Snapping: Surface Placement</h3>` (1118) |
| #6 `c6` | composite-overlay 2-panel "Before"/"After" + blue surface-normal arrow + green check at P2 contact composite px **(1910,472)** | 2562×720 · fs 29 | Align-Rotation `</blockquote>` (1144) | `<h3>Volume Snapping: Center Mass</h3>` (1146) |
| #7 `c7` | composite-overlay 4-panel "Closest"/"Center"/"Median"/"Active" + per-panel snap-point marker at the cyan crosshair. **Crosshair px to be MEASURED this chat** (world (1.3,0.3,0.9), fixed cam → same px in all 4 panels; per-panel x add +0/+1282/+2564/+3846 for panels 1–4 since dividers at 1280/2562/3844). Pillow-scan the cyan crosshair in panel 1, reuse across panels. | 5126×720 · fs 59 | Testing-Snap-With card `</div>` (1208) | `<h3>Project Individual Elements</h3>` (1210) |
| #8 `c8` | composite-overlay 2-panel "Project Individual Elements: OFF"/"ON" (WIDEN the long OFF/ON badge rects per the #18/#34 long-label precedent) + cyan flat→drape path lines. Recorded px (panel-local; P2 +1282 x): FLAT (0,0)=(89,184)/(4,4)=(817,166)/(6,6)=(1163,157); DRAPE (0,0)=(126,482)/(4,4)=(811,338)/(6,6)=(1132,429). If full 16-node dicts needed and not recoverable, re-run the projection loop (flat z=2.4, drape z=dome_z+0.14, n=7 extent=2.6 step=2, cam fixed) — but DO NOT need the live scene unless re-running. | 2562×720 · fs 29 | Pro-Technique `</blockquote>` (1250) | `<h3>Combining Snapping Types</h3>` (1252) |

**Commit order BOTTOM-UP: #8 → #7 → #6 → #5 → #4** (later-in-file first so anchors don't shift).
Placement anchors (requirements-doc `### Section: Vertex and Element Snapping`): #4 after "Basic Vertex Snapping Workflow" · #5 after "Edge Snapping: The Middle Ground" · #6 after "Face Snapping: Surface Placement" · #7 after `The "Snap With" Setting` (live h3 line 1160, quote marks) · #8 after "Project Individual Elements" (live h3 line 1210; the h3 is unique — other "Project Individual Elements" hits are figcaption/td/h4/li).

## After all 5 land
- Update `lesson_09_integration_progress.md`: rows #4/#5/#6/#7/#8 → `integrated`; **Current state** → `Phase 3 INTEGRATION complete · 12 of 55 produced · 12 of 55 integrated`; new HTML size; dated Status bullet (note #7 ran on the re-rendered Standard PNG).
- Repoint `session.md` at **Phase 4 PRODUCTION** (`#numerical-input`, 7 figures, sub-chat split + INTEGRATION-own-chat per ≥6).

## Carried PENDING, none due
#44 SVG-vs-PNG (DECISION 1, Phase 9) · phase plan (DECISION 3) · #26 `#why-precision` 2nd-ref (DECISION 2 half, Phase 6).
