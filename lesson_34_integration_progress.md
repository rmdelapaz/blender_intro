# Lesson 34 (Cloth Simulation) &#8212; Integration Progress

**Status:** **FULLY CLOSED &#8212; INTEGRATION COMPLETE + QA-PASS (2026-06-28)** &#183; 18/18 figures live (4 inline SVG {1,9,16,37} + 14 PNG {3,7,11,12,13,17,18,20,24,27,32,33,35,36} with c34 overlays) &#183; final live HTML bytes 248,664 / em-dash 72 / figure 18 / img 14 / svg 18 &#183; **Browser QA PASS (4 configs 380/900 × dark/light, 0 defects, live HTML untouched).** See &#167;8 for FINAL INVARIANT TABLE + c34 registry; &#167;9 for QA results.
Module 7 (Advanced Modeling), lesson 7 of module. Slug `cloth_simulation`.
File `lesson_34_cloth_simulation.html`. Source of truth = this doc + `session.md` head.
Opened 2026-06-27.

---

## 1. BASELINE INVARIANT BLOCK (live HTML, UTF-8 python3, untouched old-gen)

File created 2026-06-19, untouched (mtime == ctime). **OLD-GEN vintage** (same class as L28&#8211;L33).

| Invariant | Baseline |
|---|---|
| bytes (disk) | **196,550** |
| chars (utf-8) | 195,861 |
| em-dash U+2014 | **72** (all pre-existing prose &#8212; PRESERVE verbatim, recount every checkpoint) |
| literal U+00B7 | 0 |
| `&#183;` entity | 0 |
| arrow U+2192 | 58 (pre-existing prose) |
| `color="#222"` | 0 |
| currentColor | 0 |
| `#667eea` | **19** (MODERNIZE &#8594; 0) |
| `#764ba2` | **3** (MODERNIZE &#8594; 0) |
| `color: white` | 15 (closer/footer cards &#8212; review, keep intentional) |
| `<table` / `</table>` | **8 / 8** |
| `.table-wrap` | **1** (only 1 of 8 wrapped &#8594; wrap remaining 7) |
| mermaid jsdelivr import | 1 |
| rendered `<div class="mermaid">` | **17** (live diagrams &#8212; neutralize theme, KEEP) |
| `<figure` / `<figcaption` / `</figure>` | 0 / 0 / 0 |
| `<img` | 0 |
| `<svg` / `</svg>` | 0 / 0 |
| inline `style=` | 386 |

**Next-lesson link:** forward `lesson_35_rigid_body_physics.html` &#215;1 (expected L35 &#10003;) + back-link `lesson_33_hair_and_fur.html` &#215;1.

**Section ids (in order, 11):**
`understanding-cloth` &#183; `first-simulation` &#183; `cloth-properties` &#183; `pinning-groups` &#183; `collision-setup` &#183; `self-collision` &#183; `cache-baking` &#183; `practical-examples` &#183; `troubleshooting` &#183; `project` &#183; `summary`

---

## 2. OLD-GEN vs MODERN VERDICT

**OLD-GEN &#8594; MODERNIZE-AT-INTEGRATION** (L28&#8211;L33 class). **Phase 0** required before figure production:

1. `#667eea` 19 &#8594; **0** (neutralize purple gradient cards/accents &#8594; `currentColor` per house pattern).
2. `#764ba2` 3 &#8594; **0** (gradient stop pair partner).
3. Mermaid: 17 live rendered diagrams + jsdelivr import &#8212; **neutralize theme** to house-neutral, KEEP diagrams (L30/L33 precedent: live mermaid retained). jsdelivr import stays (Claude-side QA swaps offline stub in QA copy only; live file untouched).
4. Tables: **8 `<table>`, only 1 `.table-wrap`** &#8594; wrap the remaining **7** in `<div class="table-wrap">` (+ `min-width:max-content` per L30 fix) so they don't horizontally overflow @380px.
5. `color: white` 15 &#8212; inspect during Phase 0; keep only intentional closer/footer card usage (L29 precedent: intentional green-closer/footer kept).

Re-baseline after Phase 0 commits (byte ladder + full invariant recount).

---

## 3. ROSTER TRIAGE (from `lesson_34_image_requirements.md`, 40 candidates)

Rule: **BUILD = High + Medium; DEFER = Lower.**

- **High (8):** #3, #7, #11, #17, #20, #24, #36, #37
- **Medium (10):** #1, #9, #12, #13, #16, #18, #27, #32, #33, #35
- **BUILD = 18.**
- **DEFER = 22 Lower:** #2, #4, #5, #6, #8, #10, #14, #15, #19, #21, #22, #23, #25, #26, #28, #29, #30, #31, #34, #38, #39, #40 (out of scope unless reopened).

### Format split (BUILD 18)

**Inline SVG (4)** &#8212; diagram/flowchart class (per doc SVG-candidate list, BUILD subset):
- **#1** Spring Network Diagram &#8594; `understanding-cloth`
- **#9** Stiffness Types Visualization (4-panel) &#8594; `cloth-properties`
- **#16** Collision Distance Visualization (cross-section) &#8594; `collision-setup`
- **#37** Workflow Diagram (flowchart) &#8594; `troubleshooting`

Standalone-SVG authoring: cairosvg-verified, retain `color="#222"` for standalone source; inline copy uses `currentColor` (light+dark safe), 0 hardcoded `color="#222"` in HTML (L31 lesson).

**PNG + `c34` overlay (14)** &#8212; screenshots / renders / photographic comparisons:
- #3 Physics Properties Panel &#8594; `first-simulation`
- #7 Cloth Falling Sequence &#8594; `first-simulation`
- #11 Vertex Group Creation &#8594; `pinning-groups`
- #12 Weight Paint Mode &#8594; `pinning-groups`
- #13 Pinned Flag Example &#8594; `pinning-groups`
- #17 Cloth Draping Over Sphere &#8594; `collision-setup`
- #18 Collision Quality Comparison (3-panel) &#8594; `collision-setup`
- #20 Self-Collision On/Off Comparison &#8594; `self-collision`
- #24 Cache Settings Panel &#8594; `cache-baking`
- #27 Tablecloth Draping Example &#8594; `practical-examples`
- #32 Cloth Explosion Problem &#8594; `troubleshooting`
- #33 Cloth Penetration Problem &#8594; `troubleshooting`
- #35 Project Scene Overview &#8594; `project`
- #36 Project Final Result &#8594; `project`

All overlay PNGs: cairosvg 1:1 pixel-verify before every HTML commit (LD19).

### Placement map &#8594; section ids (11)

| Section id | Figures (BUILD) | Count |
|---|---|---|
| understanding-cloth | #1(svg) | 1 |
| first-simulation | #3, #7 | 2 |
| cloth-properties | #9(svg) | 1 |
| pinning-groups | #11, #12, #13 | 3 |
| collision-setup | #16(svg), #17, #18 | 3 |
| self-collision | #20 | 1 |
| cache-baking | #24 | 1 |
| practical-examples | #27 | 1 |
| troubleshooting | #32, #33, #37(svg) | 3 |
| project | #35, #36 | 2 |
| summary | &#8212; (deferred, acceptable per L27) | 0 |

Total placed = 18 (4 inline SVG + 14 PNG). `summary` carries 0 figures (acceptable, L27 precedent).

---

## 4. PRODUCTION PLAN

1. **Phase 0 modernization** (own commits): neutralize `#667eea`/`#764ba2` &#8594; 0, neutralize 17 mermaid themes (keep diagrams), wrap 7 unwrapped tables, review `color: white`. edit_file dryRun&#8594;commit&#8594;get_file_info per edit; recount specific invariant after each; verify bytes (no truncation). Re-baseline.
2. **SVG authoring** (4: #1, #9, #16, #37) &#8212; one batch; cairosvg-verify standalone; `color="#222"` retained standalone only.
3. **PNG production** (14) in &#8804;5-fig batches; &#8805;5 in a batch &#8594; own sub-chat. Blender renders + UI captures (verify Blender TRUE-PRISTINE before/after each particle/cloth staging). cairosvg 1:1 pixel-verify before any overlay commit.
4. **INTEGRATION** (18 figs &#8805; 6 &#8594; **own chat**): place 4 inline SVG + 14 PNG; **bake L33 overlay-margin fix into EVERY PNG overlay figure** (wrapper `style="position:relative;display:inline-block;max-width:100%;font-size:0"` + overlaid img `style="margin:0;vertical-align:top"`). Never touch shared main.css.
5. **Browser QA** (own chat): real Chromium/Playwright @380/900 dark+light; offline mermaid stub in QA copy only; verify 0 overflow, PNGs decode, overlays register 1:1, inline-SVG currentColor inverts, table-wrap no doc overflow.
6. Update this doc + `session.md` head at each phase close.

---

## 5. CARRY-FORWARD RULES (active this lesson)

- `\\wsl$\` paths only. 0 new em-dashes (`&#183;`); preserve 72 pre-existing U+2014 verbatim; recount every checkpoint.
- edit_file dryRun&#8594;commit&#8594;get_file_info; FIRST-match-only &#8594; unique anchor per duplicate target; recount specific invariant after each commit.
- write_file silently truncates >~282 KB &#8594; prefer edit_file; verify bytes after every write.
- Filesystem tools see ONLY WSL FS; `/mnt/user-data/uploads` read-only Claude-side. cairosvg pixel-verify before every PNG-overlay commit. No Filesystem delete &#8212; purge temps via Blender bridge `os.remove`.
- Blender currently TRUE-PRISTINE; verify before/after each particle/cloth staging.
- **Overlay-margin fix (L33 QA, BAKE IN at integration):** overlaid PNG wrapper `position:relative;display:inline-block;max-width:100%;font-size:0` + img `margin:0;vertical-align:top`. Otherwise shared `img{margin:16px auto}` inflates wrapper 32px &#8594; `height:100%` overlay drifts ~3% vertically. NEVER fix in shared main.css.
- INTEGRATION (&#8805;6 figs) + browser QA each get their own chat. Warn before auto-compaction.

---

## 6. BYTE / INVARIANT LADDER

| Checkpoint | bytes | em-dash | #667eea | #764ba2 | table-wrap | figure | img | svg |
|---|---|---|---|---|---|---|---|---|
| baseline (old-gen) | 196,550 | 72 | 19 | 3 | 1 | 0 | 0 | 0 |
| **Phase 0 COMPLETE (live)** | **196,802** | **72** | **0** | **0** | **8** | 0 | 0 | 0 |
| **4 SVGs authored (standalone files, not yet in HTML)** | 196,802 (HTML untouched) | 72 | 0 | 0 | 8 | 0 | 0 | 0 |

**SVG AUTHORING COMPLETE (2026-06-27).** 4 standalone SVGs written to `images/` + cairosvg-verified (LD19), light+dark (`color="#222"` root swap &#8594; `#d4d4d4` for dark-mode currentColor sim). Files (naming per L33 precedent: numbered NN prefix dropped, matches `lesson_33_*.svg` style &#8212; NOT the numbered form in `lesson_34_image_requirements.md`):

| # | file | viewBox | bytes (disk == local) | section target | id-prefix | em-dash | color="#222" root | currentColor |
|---|---|---|---|---|---|---|---|---|
| 1 | `lesson_34_spring_network_diagram.svg` | 800&#215;560 | 5913 | understanding-cloth | spr | 0 | yes | 8 |
| 9 | `lesson_34_stiffness_types_viz.svg` | 800&#215;600 | 6466 | cloth-properties | sti | 0 | yes | 9 |
| 16 | `lesson_34_collision_distance_viz.svg` | 800&#215;540 | 5265 | collision-setup | col | 0 | yes | 10 |
| 37 | `lesson_34_workflow_diagram.svg` | 800&#215;600 | 6361 | troubleshooting | wf | 0 | yes | 5 |

All 4: `get_file_info` byte-exact (no truncation), live on-disk copies re-pulled Claude-side + re-rendered clean. Content: #1 4&#215;4 vertex grid w/ structural(blue)/shear(orange-dash)/bending(pink-dash) springs + legend + takeaway; #9 4-panel tension(red)/compression(blue)/shear(orange)/bending(green) w/ ghost-original + deformed cloth + force arrows; #16 cross-section sphere + dashed orange buffer ring + cyan cloth resting on buffer + dimension arrow "Distance 0.02 m"; #37 flowchart setup(blue)&#8594;configure(blue)&#8594;test(orange)&#8594;decision diamond&#8594;NO loop to Adjust&#8594;back to Test / YES&#8594;bake(green)&#8594;render(green).

**2 defects caught + fixed in authoring:** (a) #16 sphere had hardcoded `#2b2b2b` fill that swallowed its label in light mode &#8594; replaced w/ `currentColor` fill-opacity .13 (theme-safe both modes); (b) #1 takeaway text clipped right edge + faint bending springs &#8594; shortened lines + bumped `.spr-bend` stroke-width 1.4&#8594;2, dash 2&#8594;3. **Note (not a defect):** #1 bending springs share H/V axes w/ structural springs so they sit under the blue lines in the grid (geometrically honest; legend documents all three). **INTEGRATION:** inline copies drop/neutralize root `color="#222"` (use page currentColor, light+dark safe), 0 hardcoded `color="#222"` in HTML (L31 lesson).

**Phase 0 executed 2026-06-27 via Blender bridge (Windows-side Python, UNC `//wsl$/` path) &#8212; Filesystem write_file not used (inline-content transport unsafe; edit_file blocked by 15&#215; duplicate mermaid line + identical table-open tags).** Live md5 `ecb27b3c60fbb0249e634463054f6ca9`, byte-identical to Claude-side validated copy; re-pulled + independently recounted. Changes: (a) mermaid node A `fill:#667eea`&#8594;`#3a3a3a` &#215;15 (keeps `color:#fff`); (b) `primaryBorderColor '#667eea'`&#8594;`'#888888'` &#215;1; (c) 3 gradient hero cards &#8594; flat `background:#2a2a2a` (light text kept, bg stays dark); (d) 7 bare `<table>` wrapped in `.table-wrap` + `min-width:max-content` (L30 fix), 8/8 now wrapped. **Semantic mermaid fills preserved** (`#4CAF50`/`#FF9800`/`#f44336`/`#E91E63` = workflow-state colors, NOT old-gen purple). 17 mermaid divs + jsdelivr import KEPT (L30/L33 precedent). em-dash 72 unchanged. Pre-existing light info cards (`#e3f2fd`/`#fff3cd`/`#e8f5e9`) left as-is. **RE-BASELINE for figure production: bytes 196,802 / em-dash 72 / purple 0 / table-wrap 8 / figure 0.**

**BRIDGE-TRANSPORT NOTE (new, carry forward):** Blender bridge = Blender 5.1 on **Windows** (`os.name=nt`); WSL files reachable via `//wsl$/Ubuntu/...` UNC path (NOT `/home/...`). This is the reliable large-file / duplicate-target write path when Filesystem write_file (inline transport, ~282KB truncation) and edit_file (first-match-only) are both unsuitable.

---

## 7. PNG PRODUCTION LOG

### Batch 1 &#8212; UI captures (#3, #11, #12, #24) &#8212; 3/4 DONE (2026-06-27)

Blender verified pre-staging: found **L33 residue** (2 orphan mats BaseMat+HairMat, cam lens 85 @ non-default loc, light non-default, frame 55) &#8212; restored to TRUE-PRISTINE (cam lens 50 / factory loc, light factory, frame 1, AgX) before staging. **Teardown after batch: TRUE-PRISTINE re-confirmed** (3 objs Camera+Cube+Light, 1 mesh, 0 mats/node_groups/actions; cam lens 50, frame 1, AgX).

**KEY FINDING (carry forward, supersedes old "Ray sets up manually" note for tab/mode captures):** the Blender **5.1 bridge CAN fully drive** Properties-editor captures &#8212; `space.context` tab switch (PHYSICS/DATA/etc., works once an object is active+selected), Edit-Mode bmesh vertex selection, Weight-Paint mode, `bpy.ops.wm.redraw_timer(type='DRAW_WIN_SWAP')` to paint panels, `bpy.ops.screen.screenshot` full-window &#8594; Windows tempdir &#8594; Pillow crop &#8594; `//wsl$/` UNC relay. **Residual bridge limit:** in-place **panel disclosure expand** (the &#9656; triangle on built-in physics sub-panels like Cache) is NOT script-togglable (no panel-expand operator exists in 5.1; `wm.call_panel` is a popup, not in-place). That single click still needs Ray. Area resize via `screen.area_move` is unreliable (snaps back); to get a wide legible panel, **retype the big VIEW_3D area to PROPERTIES** (full width, 2-column layout, all values legible) then crop &#8212; reversible (retype back to VIEW_3D). 557px single-column via area_move did not persist.

| # | file | dims | bytes | content |
|---|---|---|---|---|
| 3 | `lesson_34_03_physics_properties_panel.png` | 1356&#215;695 | 86,619 | Physics tab, Cloth active in type-grid; Cloth panel expanded: Quality Steps 5, Speed 1.000, Physical Properties (Vertex Mass 0.3kg, Air Visc 1.000, Bending Angular), Stiffness (Tension/Compression 15, Shear 5, Bending 0.5), Damping. 2-column. |
| 11 | `lesson_34_11_vertex_group_creation.png` | 1918&#215;974 | 186,745 | Edit Mode; left edge of subdivided flag selected orange; Object Data Properties showing **Pin** vertex group + Assign/Remove/Select/Deselect + Weight 1.000. (single representative frame; 4-step story = `c34` overlay job at integration, L33/L32 precedent.) |
| 12 | `lesson_34_12_weight_paint_mode.png` | 1918&#215;974 | 188,042 | Weight Paint mode, **Pin** group active; flag shows full red(1.0,left/pinned)&#8594;blue(0.0,right/free) weight gradient; Vertex Groups panel left. (brush cursor not shown = interactive-only, gradient is the substance.) |
| 24 | `lesson_34_24_cache_settings_panel.png` | 1278&#215;419 | **38,314** | **DONE (2026-06-27).** Cache sub-panel expanded (Ray manual &#9656; click), bridge-captured + PIL-cropped tight to the panel. Shows: Cache header &#9662;, cache-slot list (+/&#8722;), **Simulation Start 1 / End 250**, "0 frames in memory (0 B)" status, **Disk Cache** + **Use Library Path** checkboxes, full Bake row (Bake / Bake All Dynamics / Calculate to Frame / Delete All Bakes / Current Cache to Bake / Update All to Frame). Staging: ClothCacheDemo plane (144v) + Cloth modifier (live point_cache 1&#8211;250 step1 disk-off); wide PROPERTIES editor (1357&#215;790) on PHYSICS tab (no VIEW_3D in layout, used existing wide Properties area). Full-window `screen.screenshot` &#8594; Windows tempdir &#8594; Pillow crop (box 630,449,1908,868 of 1920&#215;1046) &#8594; `//wsl$/` UNC relay. `get_file_info` byte-verified on disk, <500KB. (Note: "Options disabled until file saved" + Disk Cache greyed = genuine unsaved-file state, fields all legible; acceptable per teaching-figure standard.) Overlay (`c34`) baked at INTEGRATION. |

All 4 saved PNGs `get_file_info` byte-verified on disk, all under 500KB target. Overlays (`c34`) are baked at INTEGRATION, not now. **Batch 1 COMPLETE 4/4 (2026-06-27): #3, #11, #12, #24 all DONE.**

**Naming:** uses the two-digit numbered form from `lesson_34_image_requirements.md` (`lesson_34_NN_slug.png`) &#8212; NOTE this differs from the 4 SVGs which dropped the NN prefix (L33 precedent). PNG roster follows image_requirements naming exactly.

### Batch 2 — PNG renders (#17, #18, #20, #33) — 4/4 DONE (2026-06-27)

Render-bridge blocker (prev chat: cached-frame freeze, lens+camera moves ignored) — **RESOLVED at session start**: bridge health test (render f90 → move camera 0.5m → re-render) gave different bytes+md5 (`ec9f77f9…` vs `c0b07764…`); lens 55 vs 110 also changed output. Prior freeze cleared (Blender restart between sessions). Render work safe.

| # | file | dims | bytes | content |
|---|---|---|---|---|
| 17 | `lesson_34_17_cloth_draping_over_sphere.png` | 441&#215;407 | 113,188 | (Batch 2 prior chat) single cloth draped over sphere. |
| 18 | `lesson_34_18_collision_quality_comparison.png` | 1524&#215;460 | 261,710 | (Batch 2 prior chat) 3-panel collision-quality comparison. |
| 20 | `lesson_34_20_self_collision_comparison.png` | 922&#215;446 | 153,103 | 2-panel self-collision OFF vs ON. OFF (self_collision False, baked 1–120, frame 90): cloth crumple collapses flat, layers interpenetrate / pass through each other. ON (self_collision True + self_distance_min 0.015, re-baked, IDENTICAL camera+frame 90): cloth retains volume, layers properly STACKED. Shared crop window (520,353,975,799), 12px (43,43,46) gutter L-to-R, no baked labels. Staging: ClothDrape (0,0,3.4) rot (0.6,0.25,0) mass 0.4 bending 0.05 tension 15 quality 8; Ground pedestal scale 0.18 loc (0,0,-1.05); Camera (0.13,0.87,0.07) TRACK_TO _aim(-0.45,0.29,-0.45) lens 55 dist 0.971; EEVEE Standard 1600&#215;1200. Composited in-bridge (PIL on Windows side, no b64 transport). |
| 33 | `lesson_34_33_cloth_penetration_problem.png` | 482&#215;450 | 121,026 | Single. Sphere visibly pierces through cloth: cloth clings to 2m sphere with jagged torn seams where collision fails (ragged spike artifacts down seams, sphere surface showing through). Frame 30 (mid-fall) chosen over 34/38/42/50 as clearest poke-through. Staging: Collider_Sphere collision re-enabled (hide_render False, COLLISION show_viewport/render True, thickness_outer/inner 0.005); ClothDrape (0,0,1.8) rot 0; weak cloth collision (collision_quality 2, distance_min 0.005, mass 0.5); baked; Ground catch plane below. Camera (2.6,-2.1,2.2) aim (0,0,0.7) lens 60. Cropped to cloth subject + context. |

**Batch 2 COMPLETE 4/4.** All finals `get_file_info` byte-verified on disk, <500KB. Overlays (`c34`) baked at INTEGRATION, not now.

**TEARDOWN to TRUE-PRISTINE (2026-06-27, post-Batch-2):** removed ClothDrape/Collider_Sphere/Ground/KeySun/_aim + meshes; cleared Camera TRACK_TO + restored factory cam (lens 50, loc 7.359,-6.926,4.958); re-added default Cube; restored Light to factory POINT 1000; view_transform→AgX; frame_set 1; orphans_purge (7 datablocks). Verified: 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / EEVEE / AgX / frame 1. **All 51 temps purged** via bridge os.remove (Windows TEMP _sc_*/_prev_off_*/_q_*/_final*/_bridge_test_*/_lens*.png + images/_tmp_l34_*.png), 0 remaining.

**BATCH-1 STATUS RECONCILE:** Batch 1 is **3/4** (#3, #11, #12 done; **#24 cache_settings_panel still PENDING** — needs Ray manual Cache-panel ▸ expand, see Batch 1 table above). The Batch-2 resume handoff said "Batch 1 4/4" — that was inaccurate; #24 remains the one outstanding Batch-1 capture.

**RE-BASELINE unchanged (HTML untouched this session): bytes 196,802 / md5 ecb27b3c60fbb0249e634463054f6ca9 / em-dash 72 / purple 0 / table-wrap 8 / figure 0.**

**REMAINING:** #24 (Batch 1, needs Ray); Batch 3 (#7 falling sequence, #13 pinned flag, #32 explosion); Batch 4 (#27 tablecloth, #35 project scene, #36 project final). Then INTEGRATION (18 figs, own chat) + QA (own chat).


### Batch 3 — PNG renders (#7, #13, #32) — 3/3 DONE (2026-06-27)

Bridge health test PASSED at session start (render f1 → cam +0.5m → re-render: 63363/827bc0ad vs 63507/51006053 — different, bridge live). Blender TRUE-PRISTINE verified before #7 and after #7 teardown. **RESUME session (2026-06-27): bridge health re-test PASSED (360444/20a76813 vs 360591/9943c3d2 — different); #13 + #32 completed; Blender torn down to TRUE-PRISTINE; all temps purged.**

| # | file | dims | bytes | content |
|---|---|---|---|---|
| 7 | `lesson_34_07_cloth_falling_sequence.png` | 1276×407→**1276×350** | **126,971** | DONE. 4-beat L-to-R falling story, frames 1/25/45/110: (1) flat cloth suspended above sphere collider, (2) contact — cloth tents up over sphere top, corners still raised, (3) draping down the sides, (4) settled drape with hanging corners + soft folds. Shared crop window (250,250,560,600)=310×350 per panel, 12px (43,43,46) gutter L-to-R, no baked labels (c34 labels frames at integration). Staging: Collider UV-sphere r0.9 @origin + COLLISION; Ground plane size12 @z-0.95 + COLLISION; ClothFall plane size3.2 @z2.6 subdiv40 (1764v), Cloth quality8 mass0.3 tension/compression15 shear5 bending0.5, collision_quality4 distance_min0.015, self_collision True self_distance_min0.012; baked 1-120. Camera (3.0,-3.0,2.0) lens50 TRACK_TO _aim(0,0,0.55); Light @(4,-3,6) energy1500; EEVEE Standard 800×800. Composited in-bridge PIL (no b64). |
| 13 | `lesson_34_13_pinned_flag_example.png` | 425×539 | **119,421** | DONE. Fluttering flag pinned along upper-left vertical edge; cloth streams + drapes to the right with clear out-of-plane billow/curl (soft fold lower-left, curved trailing edge) — reads as a flutter, NOT furled cone (state A) or flat board (state B). Pin point unmistakable. **BLOCKER RESOLVED via UNTRIED FIX:** WIND empty rot (0, +90°Y, +10°Z) so force streams +X with a +Y out-of-face component (dir 0.985,0.174,0), strength 70, noise 2.5; cloth mass 0.08 tension 8 bending 0.15; pin = left column x==0 (32v, weight 1.0). Frame sweep showed sweet spot **f45** (width 2.33 of 3.0 rest + billow 0.509) — extended AND rippling. Camera front-broadside (1.0,-6.5,1.45) lens50 TRACK_TO _aim(1.0,0,1.3); EEVEE Standard 1600×1600, PIL-cropped in-bridge to projected bounds + 6% pad (box 589,534,1014,1073). <500KB. |
| 32 | `lesson_34_32_cloth_explosion_problem.png` | 442×485 | **128,894** | DONE. Cloth-explosion failure: jagged self-intersecting spiky mass of shredded cloth violently flung up + away from the intact collider sphere below — textbook "cloth blew up" artifact. Staging (destabilize): plane size2.5 @z1.4 subdiv30 (1024v); Cloth quality2 mass0.05 tension/compression/shear 300 bending2.0 time_scale4.0; collision_quality1 distance_min0.1 use_self_collision True self_distance_min0.15 (large self-dist relative to ~0.08 spacing → violent vert push-apart); collider UV-sphere r0.8 @z0.4. Baked 1-50; frame sweep picked **f25** (spike_ratio max_r/median_r ~2.1, chaotic crumple flung off sphere). Camera (3.5,-3.8,2.2) lens50 TRACK_TO _aim(0,0,0.6); EEVEE Standard 1600×1333, PIL-cropped in-bridge to cloth+sphere bounds + 5% pad (box 517,346,959,831). <500KB. |

**#7 final byte-verified on disk via Filesystem:get_file_info (126,971 B, <500KB).**

**PINNED-FLAG NOTE (#13) — RESOLVED 2026-06-27 (kept for the record).** A flag pinned along its LEFT vertical edge keeps mis-simulating. Geometry is correct (clean flat grid built directly in XZ plane: width X 0→3, height Z 1→3, 48×32=1536v, Pin vertex group = left column x==0, 32 verts, weight 1.0, cs.vertex_group_mass='Pin', pin_stiffness 1.0). The physics keeps landing in one of two bad states:
  - **(A) FURL/COLLAPSE:** under gravity (with or without gentle/strong wind, stiffness 15–40, mass 0.15–0.3), the free cloth rolls toward the pin — width X collapses from 0→3 down to ~0.8 (deformed bounds e.g. @90 x −0.4→0.16). Reads as a furled cone, not a flag. Happens even with ZERO wind + high stiffness (gravity-only @90 x −0.55→0.3).
  - **(B) BOARD-FLAT:** light cloth (mass 0.15, soft) + STRONG steady wind streaming out +X (WIND empty rot (0,+90°,0) → local +Z to world +X, strength 30, noise 4, loc (−2,0,2)) → flag extends correctly (x holds 0→3.01) BUT pancakes perfectly flat in the XZ plane (Y stays exactly 0.0 at frames 60/90/110) — zero billow/ripple, a rigid board. Wind vector is purely in-plane so nothing lifts the surface out of plane.
**UNTRIED FIX for next chat:** angle the wind ~20–30° OUT of the flag face plane — add a Z-rotation component to the WIND empty so it pushes partly in −Y (out of the XZ face) while still streaming +X — with noise ~3–4 so the sheet ripples/waves. Then sample a mid-flutter frame and visually confirm broadside (camera in front, looking −Y at the flag face). Scene is staged + baked-ready; only wind direction + re-render remain. Alternative if still flat: keep gravity hang (no wind) but pin TOP-LEFT region instead of full left edge, or accept a gentle gravity drape from the left edge as the "pinned" demonstration (pinning is the teaching point, not the wind).

**✅ RESOLUTION (what actually worked):** the angled-wind path was correct but needed STRONG wind + LIGHT cloth + a SHALLOW out-of-face angle, NOT a steep one. Final: WIND rot (0, +90°Y, **+10°Z**), strength **70**, noise 2.5; cloth mass **0.08**, tension 8, bending 0.15. A 90°-Y + Z-rotated empty gives force dir (0.985, 0.174, 0) — mostly +X streaming with a small +Y out-of-face lift (note: the lift came out +Y not −Y; sign is irrelevant, either lifts out of the XZ face). The flag furls over time regardless, so the win was a **frame sweep**: width stays near rest (3.0) early and collapses late, while billow grows; the crossover where BOTH read well is **f45** (width 2.33 + billow 0.509). Steeper angles (18–28°) or weaker wind (26–48) always furled to ~0.8 width. Lesson: for a pinned flag, scan frames for the extended-AND-rippling crossover rather than expecting a steady-state pose.

**BLENDER TRUE-PRISTINE at end of this chat (2026-06-27, post-Batch-3 teardown):** removed ExplodeCloth/ExColl/Flag/Wind/_aim + meshes; cleared Camera TRACK_TO; restored factory Camera (lens 50, loc 7.359,-6.926,4.958), re-added default Cube, restored Light to factory POINT 1000; view_transform→AgX; frame 1; orphans purged. Verified: 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / EEVEE / AgX / frame 1.

**Temps: ALL PURGED at batch end (2026-06-27, 52 files via bridge os.remove):** Windows TEMP _sc_*/_bridge_test_* + images/_tmp_l34_*.png — 0 remaining (verified). Final figures lesson_34_07/13/32_*.png intact on disk (don't match _tmp pattern).

**RE-BASELINE unchanged (HTML untouched this session): bytes 196,802 / md5 ecb27b3c60fbb0249e634463054f6ca9 / em-dash 72 / purple 0 / table-wrap 8 / figure 0.**

**REMAINING:** #24 (Batch 1, needs Ray manual Cache-panel ▸ expand); Batch 4 (#27 tablecloth, #35 project scene, #36 project final). Then INTEGRATION (18 figs, own chat) + QA (own chat). **Batch 3 COMPLETE 3/3.**

### Batch 4 — PNG renders (#27, #35, #36) — 3/3 DONE (2026-06-27)

Bridge health test PASSED at session start (render f1 → cam +0.5m → re-render: 1698538/221d9f6f vs 1698332/458e788b — different, bridge live). Blender TRUE-PRISTINE verified before #27 staging and re-confirmed after batch teardown.

| # | file | dims | bytes | content |
|---|---|---|---|---|
| 27 | `lesson_34_27_tablecloth_draping_example.png` | 601×311 | **131,227** | DONE. Clean settled tablecloth draped over a rectangular table (top + 4 legs joined as one collider). Smooth top surface, soft side folds, distinct corner folds hanging down at all four corners (overhanging the table edge), one table leg peeking through. Staging: Table top cube 2.6×1.8×0.1 @z1.0 + 4 legs (0.16×0.16×0.95) joined → COLLISION thickness 0.02; Tablecloth plane 3.5×2.6 @z1.25 subdiv59 (3721v), Cloth quality10 mass0.3 tension/compression15 shear5 bending0.5, collision_quality4 distance_min0.015 self_collision True self_distance_min0.012; baked 1–80, settled f80 (top z~1.06, corners hang to z~0.09). Cream cloth mat (0.85,0.78,0.62) rough0.85; wood table; dark ground. Camera (2.5,-2.75,1.95) lens55 TRACK_TO _aim(0,0,0.6); SUN energy3.0. EEVEE Standard 2600×1950, PIL-cropped in-bridge to projected cloth+table bounds + 6% pad. <500KB. |
| 35 | `lesson_34_35_project_scene_overview.png` | 711×312 | **142,966** | DONE. Project pre-sim layout: flat stiff square cloth hovering above a round pedestal table, decorative bowl (sphere) resting on top, pedestal + base visible beneath. Reads unmistakably as "setup, not yet simulated." Frame 1 (cloth flat/unbaked). |
| 36 | `lesson_34_36_project_final_result.png` | 711×312 | **153,164** | DONE. Project final baked result: SAME scene, cloth simulated to rest — settles over the bowl with a clean rise, drapes down over the round table edge with natural soft radial folds + scalloped hem, pedestal peeking through. The payoff shot. Frame 90 (baked). |

**#35 / #36 are a true before/after of ONE scene:** identical camera (`(3.0,-3.3,2.2)` lens50 TRACK_TO `_aim(0,0,0.85)`), identical props (ProjTable round cylinder-top+pedestal+base collider, ProjBowl r0.28 sphere collider @z1.30, ProjGround), identical **shared crop window** (844,752,1555,1064 = 711×312, union of flat-frame-1 + draped-frame-90 projected bounds + 6% pad). Cloth: 3.0×3.0 plane @z1.12 subdiv63 (4225v), warm-red mat (0.80,0.30,0.28) rough0.8, Cloth quality10 mass0.3 tension/compression15 shear5 bending0.5, collision_quality4 distance_min0.015 self_collision True self_distance_min0.012; baked 1–90 (settled f90: top z~1.13 over bowl, hem to z~0.10, pulled in to x/y ±1.27). EEVEE Standard 2400×1800, both PIL-cropped in-bridge with the shared window, no baked labels (c34 labels at integration). SUN 3.2 + AREA fill 200.

**All 3 finals `get_file_info` byte-verified on disk, <500KB.** Overlays (`c34`) baked at INTEGRATION, not now.

**BLENDER TRUE-PRISTINE at end of this chat (2026-06-27, post-Batch-4 teardown):** removed ProjCloth/ProjTable/ProjBowl/ProjGround/PSun/PFill/_aim + meshes/mats; cleared Camera TRACK_TO; restored factory Camera (lens50, loc 7.359,-6.926,4.958, rot 1.109,0,0.815), re-added default Cube, restored Light to factory POINT 1000; view_transform→AgX; frame 1; range 1–250; orphans purged. Verified: 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / EEVEE / AgX / frame 1.

**Temps: ALL PURGED at batch end (2026-06-27, 17 files via bridge os.remove):** Windows TEMP _sc_l34_*/_bridge_test_*/_l34_proj_crop.json + images/_tmp_l34_*.png — 0 remaining (verified). Final figures lesson_34_27/35/36_*.png intact on disk (don't match _tmp pattern).

**RE-BASELINE unchanged (HTML untouched this session): bytes 196,802 / md5 ecb27b3c60fbb0249e634463054f6ca9 / em-dash 72 / purple 0 / table-wrap 8 / figure 0.**

**REMAINING after Batch 4:** #24 (Batch 1, needs Ray manual Cache-panel ▸ expand). Then INTEGRATION (18 figs: 4 inline SVG {1,9,16,37} authored + 14 PNG — 13 produced {3,7,11,12,13,17,18,20,27,32,33,35,36} + #24 outstanding; own chat; BAKE L33 overlay-margin fix into every overlay figure) → QA (own chat). **Batch 4 COMPLETE 3/3.**

---

### #24 CAPTURED — ALL PNG PRODUCTION COMPLETE (2026-06-27)

**#24 cache_settings_panel DONE** (final Batch-1 capture; see Batch 1 table row above for full detail). Bridge health test PASSED at session start (cam-move md5 differs: 8cc16084… vs 94613d17…). Blender TRUE-PRISTINE verified before staging + re-confirmed after teardown (3 objs Camera+Cube+Light, 1 mesh, 0 mats/node_groups/actions/empties, EEVEE, AgX, frame 1, cam lens50 factory loc/rot 0 constraints, Light POINT 1000; Properties editors restored to OBJECT tab). All 6 temps purged via bridge os.remove (0 remaining); final figure intact (38,314 B).

**ALL 14 PNG PRODUCED + byte-verified on disk: {3,7,11,12,13,17,18,20,24,27,32,33,35,36}.** 4 inline SVG authored {1,9,16,37}. **BUILD ROSTER 18/18 ASSET-COMPLETE.**

**RE-BASELINE unchanged (HTML still untouched): bytes 196,802 / md5 ecb27b3c60fbb0249e634463054f6ca9 / em-dash 72 / purple 0 / table-wrap 8 / figure 0.**

**REMAINING: none for asset production.** NEXT = **INTEGRATION** (18 figs, own chat: drop 4 inline SVG {1,9,16,37} root `color="#222"`→currentColor + place 14 PNG with c34 overlays; BAKE L33 overlay-margin fix into EVERY overlay figure — wrapper `style="position:relative;display:inline-block;max-width:100%;font-size:0"` + overlaid img `style="margin:0;vertical-align:top"`; never touch shared main.css) → **QA** (own chat).

---

## 8. INTEGRATION COMPLETE (2026-06-28)

**STATUS: FULLY CLOSED — INTEGRATION COMPLETE + QA-PASS (2026-06-28). 18/18 figures live (4 inline SVG + 14 PNG with c34 overlays). QA section = §9.**

All 18 BUILD figures integrated across two sessions. Per-figure procedure held throughout: pull PNG → PIL dims==locked → view to place leaders → author overlay at viewBox==locked → cairosvg 1:1 render (size assert + nonempty) → composite preview + view → assemble inline figure block (0 literal em-dash; `&#183;`/`&#8594;`/`&#8212;` entities) → edit_file dryRun→commit→get_file_info → re-pull + recount. L33 overlay-margin fix baked into every PNG overlay (wrapper `font-size:0` + img `margin:0;vertical-align:top`).

### Integration byte / figure ladder

| Checkpoint | bytes | figure | img | svg | em-dash |
|---|---|---|---|---|---|
| Phase-0 re-baseline (HTML, pre-integration) | 196,802 | 0 | 0 | 0 | 72 |
| Session 1 close (12/18: 9 PNG + 3 inline SVG {1,9,16}) | 234,236 | 12 | 9 | 12 | 72 |
| +#27 practical-examples (PNG) | 236,113 | 13 | 10 | 13 | 72 |
| +#32 troubleshooting (PNG) | 237,902 | 14 | 11 | 14 | 72 |
| +#33 troubleshooting (PNG) | (intermediate) | 15 | 12 | 15 | 72 |
| +#37 troubleshooting (inline SVG) | 245,949 | 16 | 12 | 16 | 72 |
| +#35 project (PNG) | (intermediate) | 17 | 13 | 17 | 72 |
| **+#36 project (PNG) — INTEGRATION COMPLETE** | **248,664** | **18** | **14** | **18** | **72** |

### FINAL INVARIANT TABLE (live HTML, UTF-8 python3, re-pulled + recounted)

| Invariant | Baseline | Final | Note |
|---|---|---|---|
| bytes (disk) | 196,550 (orig) / 196,802 (Phase-0) / 234,236 (S1 close) | **248,664** | +14,428 over S1 close (6 figs) |
| em-dash U+2014 | 72 | **72** | preserved verbatim, 0 new (figcaptions use `&#8212;` entity) |
| literal U+00B7 | 0 | **0** | all separators are `&#183;` entity |
| `&#183;` entity | 9 | **19** | +10 (#37 flowchart 8 + figcaption/pill separators) |
| `#667eea` / `#764ba2` / `color="#222"` | 0 / 0 / 0 | **0 / 0 / 0** | clean |
| currentColor | (Phase-0) | **36** | 4 inline SVG roots + children |
| `.table-wrap` | 8 | **8** | unchanged |
| rendered `class="mermaid"` | 17 | **17** | unchanged (semantic fills preserved) |
| `<figure` / `<figcaption` / `</figure>` | 0 | **18 / 18 / 18** | balanced |
| `<svg` / `</svg>` | 0 | **18 / 18** | 4 inline + 14 overlay |
| `<img` | 0 | **14** | all 14 PNG |

### Placement coverage (11 sections)

| Section id | Figures live | Count |
|---|---|---|
| understanding-cloth | #1(svg spr) | 1 |
| first-simulation | #3, #7 | 2 |
| cloth-properties | #9(svg sti) | 1 |
| pinning-groups | #11, #12, #13 | 3 |
| collision-setup | #16(svg col), #17, #18 | 3 |
| self-collision | #20 | 1 |
| cache-baking | #24 | 1 |
| practical-examples | #27 | 1 |
| troubleshooting | #32, #33, #37(svg wf) | 3 |
| project | #35, #36 | 2 |
| summary | — (deferred, acceptable per L27) | 0 |

Total = 18 (4 inline SVG + 14 PNG). `summary` carries 0 figures (L27 precedent).

### c34 REGISTRY (14 PNG overlays + 4 inline SVG)

**Inline SVG (4):** #1 `spr-` (spring network, understanding-cloth), #9 `sti-` (stiffness types, cloth-properties), #16 `col-` (collision distance, collision-setup), #37 `wf-` (workflow flowchart, troubleshooting). All root `color="currentColor"` (light+dark safe), 0 hardcoded `color="#222"` in HTML.

**PNG c34 overlays (14):** role colors per c34 style — #4A9EFF blue (setup/before/primary), #4ADE80 green (after/baked/final), #FF6B00 orange (problem/highlight/free); dark backing rect `fill="#1a1a1a" fill-opacity≈0.82–0.85` over bright cloth areas.
- #3 physics_properties_panel — panel-region callouts
- #7 cloth_falling_sequence — 4-beat frame labels (1276×350)
- #11 vertex_group_creation — Pin group / Assign callouts
- #12 weight_paint_mode — red→blue gradient pinned/free
- #13 pinned_flag_example — pin point + billow (425×539)
- #17 cloth_on_sphere — drape callout (slug on disk = `cloth_on_sphere`, differs from requirements `cloth_draping_over_sphere`; HTML src + disk agree, link valid)
- #18 collision_quality_comparison — 3-panel quality labels (1524×460)
- #20 self_collision_comparison — 2-panel OFF/ON (922×446)
- #24 cache_settings_panel — Bake / cache-region callouts
- #27 tablecloth_draping_example — blue "Smooth draped top" + orange "Corner folds" (601×311)
- #32 cloth_explosion_problem — orange "Cloth explodes" + blue "Collider intact" (442×485)
- #33 cloth_penetration_problem — orange "Poke-through" (solid+dashed leaders, 482×450)
- #35 project_scene_overview — blue "Before · flat, not yet simulated" (711×312)
- #36 project_final_result — green "After · baked, draped & folded" (711×312); #35/#36 = true before/after of one scene, identical crop window

Each overlay viewBox == PNG on-disk pixel box 1:1; cairosvg pixel-verified before every commit.

### Carry-forward / QA notes
- Browser QA pending (own chat): real Chromium/Playwright @380/900 dark+light; offline mermaid stub in QA copy only (live file untouched). Verify: 0 doc horizontal overflow; 14/14 PNG decode; 14/14 overlays register 1:1; 4/4 inline SVG `currentColor` inverts (dark rgb(212,212,212) / light rgb(51,65,85)); 8/8 `.table-wrap` no doc overflow @380; 17 mermaid divs lay out (offline = harness limit).
- Blender TRUE-PRISTINE throughout (no bridge work during integration — all assets pre-produced).
- 0 new em-dashes; 72 U+2014 preserved verbatim at every checkpoint.

---

## 9. BROWSER QA — PASS (2026-06-28)

**L34 LIVE-PIXEL BROWSER QA — PASS. No defects found; live HTML UNTOUCHED (0 edits; bytes 248,664, mtime unchanged).**

Claude-side real Chromium 1194 / Playwright (`/opt/pw-browsers`), live `lesson_34_cloth_simulation.html` + `styles/main.css` + 14 PNGs served on 127.0.0.1:5599 loopback. jsdelivr mermaid import swapped for an offline stub in the **QA copy only** (`qa.html`); live file byte-identical throughout (re-verified `get_file_info` post-run: 248,664 B, mtime 06:42:36 unchanged). All 14 imgs forced `loading=eager` + full-page scroll so `naturalWidth>0`. 4 configs = {380, 900}px × {dark, light}.

**Pre-flight invariant recount (live copy, UTF-8 python3) — all match §8 FINAL INVARIANT TABLE:** bytes 248,664 / figure 18 / figcaption 18 / `</figure>` 18 / img 14 / svg 18 (4 inline + 14 overlay) / em-dash U+2014 72 / literal U+00B7 0 / `&#183;` 19 / `#667eea` 0 / `#764ba2` 0 / `color="#222"` 0 / currentColor 36 / `.table-wrap` 8 / `class="mermaid"` 17.

**Static overlay verify (cairosvg/PIL pre-harness):** 14/14 overlay `viewBox` == PNG on-disk pixel box 1:1 (#3 1356×695, #7 1276×350, #11/#12 1918×974, #13 425×539, #17 441×407, #18 1524×460, #20 922×446, #24 1278×419, #27 601×311, #32 442×485, #33 482×450, #35/#36 711×312). 14/14 PNG wrappers carry the L33 overlay-margin fix (`font-size:0` + img `margin:0;vertical-align:top`).

**Per-config results (all 4 PASS):**

| Config | doc overflow | PNG decode | overlay 1:1 (worst dev) | svg non-empty | table-wrap | mermaid laid out | inline-SVG color |
|---|---|---|---|---|---|---|---|
| 380 dark | 0px | 14/14 | 14/14 (0.031px) | 18/18 | 8/8 internal-scroll, 0 doc overflow | 17/17 | rgb(212,212,212) |
| 380 light | 0px | 14/14 | 14/14 (0.031px) | 18/18 | 8/8 internal-scroll, 0 doc overflow | 17/17 | rgb(51,65,85) |
| 900 dark | 0px | 14/14 | 14/14 (0.047px) | 18/18 | 8/8, 0 internal scroll | 17/17 | rgb(212,212,212) |
| 900 light | 0px | 14/14 | 14/14 (0.047px) | 18/18 | 8/8, 0 internal scroll | 17/17 | rgb(51,65,85) |

**Overlay-margin sanity (L33 fix held):** max|dy| = 0.000px, max|dh| = 0.000px across all 14 figures both widths — zero vertical drift (the L33 defect signature was dy≈−16px / dh≈+32px). Only deviations are dw ≤ 0.047px (sub-pixel width rounding).

**Checklist verdict:**
- 0 document horizontal overflow (scrollWidth===clientWidth) × 4 configs — PASS
- 14/14 PNG decode (naturalWidth>0) × 4 — PASS
- 14/14 overlays register 1:1 on bitmaps (worst dev 0.047px, sub-px rounding) × 4 — PASS
- 18/18 svg non-empty × 4 — PASS
- 4/4 inline SVG `currentColor` inverts (dark rgb(212,212,212) / light rgb(51,65,85)) — PASS
- 8/8 `.table-wrap` contain their tables (internal scroll @380, 0 doc overflow) — PASS
- 17/17 mermaid divs lay out (offline stub render = harness limit, not a defect) — PASS
- L33 overlay-margin fix held on all 14 (no ~3% drift) — PASS

**RESULT: L34 QA-PASS. Live HTML untouched (no defects). bytes 248,664 / em-dash U+2014 72 / svg 18 / img 14 / figure 18 — all invariants preserved. L34 FULLY CLOSED.** Next lesson: **L35 (Rigid Body Physics)**.

**L34 STATUS: FULLY CLOSED — INTEGRATION COMPLETE + QA-PASS (2026-06-28).**
