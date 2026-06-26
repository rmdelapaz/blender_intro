# Lesson 28 &#8212; Sculpting Basics &#183; INTEGRATION PROGRESS

**Status: SETUP / pre-PRODUCTION (opened 2026-06-25).** Module 7 (Advanced Modeling), lesson 1. Slug `sculpting_basics`. File `lesson_28_sculpting_basics.html`. **0/28 build figures integrated.**

This is the FIRST old-generation lesson reopened in the current pipeline. HTML created 2026-06-12, untouched since; it predates the L21&#8211;L27 conventions (currentColor, no `<table>`, vendored mermaid, c{N} overlays). Treat the structural state as legacy &#8212; see OPEN DECISION below before PRODUCTION.

---

## OPEN DECISION (blocks PRODUCTION close-target)

**Structural cleanup: (a) modernize vs (b) leave-as-is.** This sets the close-target invariants, so it must be resolved before any figure work.
- **(a) Modernize to L25&#8211;L27 convention:** neutralize hardcoded `#667eea`/`#764ba2` (&times;12) toward light+dark-safe `currentColor`; decide keep-vs-restyle on the 1 `<table>`; vendor-or-strip the jsdelivr mermaid harness (0 actual `class="mermaid"` divs, so likely STRIP). Outcome: L28 matches current generation.
- **(b) Leave structure as-is:** add only the 28 figures + overlays; preserve legacy colors/table/90 inline styles; leave dead mermaid import. Faster; L28 stays visibly old-gen.
- No exact precedent (L21&#8211;L27 were all born current). **RESOLVED: (a) MODERNIZE** &#8212; applies at INTEGRATION, not production.

Note: the spec's "AI image generation" framing (ChatGPT/Firefly prompts, "6 weeks / 100&#8211;150 hrs") is OBSOLETE &#8212; production uses the standard BlenderMCP render pipeline (SVG authored Claude-side; PNG via skinned/sculpt staging) with cairosvg pixel-verify before every overlay commit.

---

## BASELINE INVARIANTS (live file, 2026-06-25, UTF-8 Python over the on-disk file)

- bytes **145,998** / chars 145,425
- figure **0** / figcaption **0** / img **0** / svg **0** &#8212; 0/35 integrated
- `<table>` **1** (Method Comparison, in `#sculpting-vs-modeling`)
- mermaid: jsdelivr import in `<head>`; `class="mermaid"` divs **0** (NO rendered diagrams; the 4 "mermaid" hits are all the one `<script>` harness)
- em-dash **U+2014 = 48** (all pre-existing prose; PRESERVE verbatim, re-verify at every checkpoint)
- `&#183;` middot **0** (none yet; all NEW separators must use `&#183;`, 0 new em-dashes)
- hardcoded `#667eea` &times;7 / `#764ba2` &times;5 / `color="#222"` 0 / `currentColor` 0
- inline `style=` &times;90
- next-lesson link &#8594; `lesson_29_hard_surface_modeling.html` (confirmed in live nav)

---

## ROSTER &#8212; reconciled triage

Spec triage was internally inconsistent (labels said 10/16/9=35; enumerated numbers didn't add up). Reconciled by: HIGH as listed (10); LOWER = the 7 explicitly-named numbers; MEDIUM = everything else.

**BUILD = 28 (High 10 + Medium 18): 5 SVG + 23 PNG.**

### HIGH (10)
5, 7, 9, 11, 15, 16, 17, 22, 26, 34

### MEDIUM (18)
1, 3, 4, 6, 8, 10, 12, 18, 19, 23, 24, 25, 27, 28, 29, 30, 33, 35

### DEFERRED &#8212; LOWER (7, all PNG; out of scope unless reopened)
2, 13, 14, 20, 21, 31, 32 &#8212; drops Project Option C (vase) entirely (#31, #32 were its only figures); also #2 technical-mesh-resolution, #13 crease demo, #14 inflate demo, #20 multires level progression, #21 voxel remesh.

### Format split (BUILD)
- **SVG (5):** #1 clay-metaphor, #4 combined-workflow, #15 brush-shortcuts-chart, #22 resolution-decision-tree, #34 workflow-stages
- **PNG (23):** #3,5,6,7,8,9,10,11,12,16,17,18,19,23,24,25,26,27,28,29,30,33,35

---

## PLACEMENT MAP (section ids confirmed present in live HTML)

| # | Pri | Fmt | Section (id) | Placement |
|---|-----|-----|--------------|-----------|
| 1 | M | SVG | what-is-sculpting | after "The Clay Metaphor" heading |
| 3 | M | PNG | sculpting-vs-modeling | after Key Differences table |
| 4 | M | SVG | sculpting-vs-modeling | in "Combined Workflows" card |
| 5 | H | PNG | sculpt-mode-interface | after "Interface Layout" heading |
| 6 | M | PNG | sculpt-mode-interface | in "Entering Sculpt Mode" card |
| 7 | H | PNG | sculpt-mode-interface | in "Essential Settings" card |
| 8 | M | PNG | sculpt-mode-interface | in "Essential Settings" card |
| 9 | H | PNG | essential-brushes | Draw Brush card |
| 10 | M | PNG | essential-brushes | Grab Brush card |
| 11 | H | PNG | essential-brushes | Smooth Brush card |
| 12 | M | PNG | essential-brushes | Clay Strips card |
| 15 | H | SVG | essential-brushes | "Brush Quick Reference" card (after Core Eight intro) |
| 16 | H | PNG | mesh-resolution | after "What Is Mesh Resolution?" |
| 17 | H | PNG | mesh-resolution | Method 1 Dynamic Topology card |
| 18 | M | PNG | mesh-resolution | Method 1 Dynamic Topology card |
| 19 | M | PNG | mesh-resolution | Method 2 Multiresolution card |
| 22 | H | SVG | mesh-resolution | after "Choosing Your Resolution Method" |
| 23 | M | PNG | first-sculpt-project | Option A Rock Phase 1 |
| 24 | M | PNG | first-sculpt-project | Option A Rock Phase 2 |
| 25 | M | PNG | first-sculpt-project | Option A Rock Phase 3 |
| 26 | H | PNG | first-sculpt-project | Option A Rock Phase 4 (portfolio) |
| 27 | M | PNG | first-sculpt-project | Option B Creature Phase 1 (symmetry) |
| 28 | M | PNG | first-sculpt-project | Option B Creature Phase 2 |
| 29 | M | PNG | first-sculpt-project | Option B Creature Phase 3 (features) |
| 30 | H | PNG | first-sculpt-project | Option B Creature final (portfolio) |
| 33 | M | PNG | first-sculpt-project | after "After Completing Your Sculpt" (MatCap grid) |
| 34 | H | SVG | summary | "Key Takeaways" card |
| 35 | M | PNG | summary | "Common Beginner Mistakes" card |

Deferred #13/#14 sit in essential-brushes (Crease/Inflate cards); #19 partner #20 in Multires card; #21 in Remeshing card; #31/#32 in Option C (no figures will be placed in Option C while deferred).

---

## FILE NAMING (per spec, retained)
`images/lesson_28_NN_slug.{svg,png}` &#8212; e.g. `lesson_28_01_clay_metaphor_diagram.svg`, `lesson_28_05_sculpt_mode_interface.png`. SVG set: 01, 04, 15, 22, 34.

---

## PNG PRODUCTION LOG

### Batch 1 &#183; figures {5,6,7,8} &#183; sculpt-mode-interface &#183; 2026-06-25 &#183; COMPLETE

Capture method: **viewport area screenshot** (`screen.screenshot_area`), not camera render &#8212; interface figures must show UI chrome (Ray-confirmed). Forced draw pass (`wm.redraw_timer DRAW_WIN_SWAP`) before every capture after #6 caught a stale-framebuffer (header lagged the mode switch). Written direct to `images/` via Blender UNC write (`\\wsl$\Ubuntu\...`); bridge-side temp hop not needed (Filesystem MCP root excludes `/mnt/c`). No baked labels &#8212; callouts deferred to INTEGRATION c{N} overlays.

| # | Pri | File | Scene state captured | Verified |
|---|-----|------|----------------------|----------|
| 5 | H | `images/lesson_28_05_sculpt_mode_interface.png` | Sculpt Mode active, Draw brush, Dyntopo OFF, smooth UV sphere, SOLID/ortho; full brush toolbar + tool-settings header + asset shelf | eye-checked |
| 6 | M | `images/lesson_28_06_entering_sculpt_mode.png` | Object Mode, mesh selected (orange), object-mode toolbar/menus &#8212; the "before entering" state | eye-checked (post-redraw fix) |
| 7 | H | `images/lesson_28_07_essential_settings_dyntopo.png` | Sculpt Mode, **Dyntopo checkbox ON**, smooth sphere (no stroke applied; settings figure) | eye-checked |
| 8 | M | `images/lesson_28_08_essential_settings_symmetry.png` | Sculpt Mode, Dyntopo ON, dense worked topology + wireframe overlay (subdivided ~4.6k-poly sphere w/ sine displacement) &#8212; shows result of detail settings | eye-checked (3rd take; 1st near-dup of #7, 2nd black-blob at 216k poly) |

**Composition note:** #5/#7 differ only by the Dyntopo header checkbox (both smooth spheres) &#8212; INTEGRATION overlay must point c{N} at the Dyntopo control to make the distinction legible. #8 deliberately worked to read distinct from #7.

**Capture-method caveat:** screenshots include the BlenderMCP addon tab on the right window edge (non-stock UI). Ray accepted as-is for B1. If later batches need it gone, narrow the area or detach the panel before capture.

**TRUE-PRISTINE attestation (B1):**
- BEFORE: scene arrived NON-pristine (camera loc 12/-13/9, res 900x1150, frames 1-25). Factory-reset recovery performed (dropped+restored the MCP socket); residual factory deltas (2 mats, world 0.05) corrected surgically. Verified TRUE-PRISTINE before staging.
- AFTER: sculpt geometry torn down; pristine rebuilt surgically (no factory reload, socket preserved). Verified: 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000, lens 50, DoF off. **PRISTINE_RESTORED: True.**

**Pending (overlay/INTEGRATION chat):** cairosvg pixel-verify each PNG against its c{N} overlay before commit; figures not yet placed in live HTML (still 0/28 integrated).

### Batch 2 &#183; figures {9,10,11,12} &#183; essential-brushes &#183; 2026-06-25 &#183; COMPLETE

Brush-demo cards: each figure is a fresh UV sphere (radius 1.5, shade-smooth, +1 Subsurf applied &#8594; 6,050 verts) deformed to show one brush's signature effect, captured in Sculpt Mode with UI chrome visible.

**Stroke-schema resolution (the B1 `pen_flip` blocker):** inspected `SCULPT_OT_brush_stroke` RNA via `bpy.ops.sculpt.brush_stroke.get_rna_type()`. The `stroke` collection's `OperatorStrokeElement` (Blender 5.1.1) exposes ONLY: `name, location, mouse, mouse_event, pressure, size, x_tilt, y_tilt, time, is_start`. **There is no `pen_flip` key** in this version &#8212; that is what B1 hit. A real headless stroke would also need a valid region+rv3d override (fragile). Per the task's own fallback, B2 used **deterministic bmesh deformation** to emulate each brush's signature instead &#8212; no stroke-context dependency. Note: `tool_settings.sculpt.brush` is **read-only** in 5.x (asset-shelf brush system); the header therefore reads the prior active brush ("Draw") across all four. This is fine: per the no-baked-labels rule the brush is identified by the INTEGRATION c{N} overlay, not by the viewport chrome &#8212; the figure only needs to SHOW the brush's deformation signature.

**Capture-method change vs B1 (important for B3+):** `screen.screenshot_area` under an `area` temp_override returned a **1x1 / ~250-byte** PNG in this session (the operator did not honor the overridden area; it captures the area under the cursor, undefined headless). Switched to **full-window `screen.screenshot` &#8594; Pillow crop** to the VIEW_3D rect. Crop box is deterministic from the area geometry: window 1920x1046, VIEW_3D `x3 y107 w1572 h900`, 1:1 (no HiDPI). PIL box (top-down) = **(3, 39, 1575, 939) &#8594; 1572x900**. Crop performed in Blender's bundled Pillow (12.2.0) writing direct to the final `images/` UNC path; temp full-window PNG removed via Blender `os.remove`. Same BlenderMCP-tab-on-right-edge caveat as B1, accepted as-is.

| # | Pri | File | Brush signature emulated | Verified |
|---|-----|------|--------------------------|----------|
| 9 | H | `images/lesson_28_09_sculpting_basics.png` | **Draw** &#8212; additive rounded dabs along a stroke (4 normal-push bumps, cosine falloff) raising the camera-facing surface | eye-checked |
| 10 | M | `images/lesson_28_10_sculpting_basics.png` | **Grab** &#8212; soft mass-translate of a vert cluster pulled out+up into a single protrusion (cosine-weighted soft move, not normal-push) | eye-checked |
| 11 | H | `images/lesson_28_11_sculpting_basics.png` | **Smooth** &#8212; whole-surface high-freq noise, then 16-pass Laplacian relax on the camera-facing cap &#8594; clean smoothed patch ringed by rough detail (rough-vs-relaxed read) | eye-checked (2nd take; 1st smoothed the -X half, hidden from camera) |
| 12 | M | `images/lesson_28_12_sculpting_basics.png` | **Clay Strips** &#8212; flat-topped terraced slab built up the camera-facing cap (smoothstep plateau strips, planar build-up) | eye-checked (2nd take; 1st landed strips on the -Y profile / edge-on) |

**Method note for B3+:** the deterministic-bmesh + full-window-screenshot + PIL-crop(3,39,1575,939) pipeline is the working path this session; do NOT use `screenshot_area` (returns 1x1 here). For figures that must read a specific brush NAME in-chrome, that is an overlay concern (c{N}), not a capture concern.

**TRUE-PRISTINE attestation (B2):**
- BEFORE: verified TRUE-PRISTINE on arrival (B1 left it clean): 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25 factory loc, Camera factory loc lens 50 DoF off. No reset needed; socket preserved throughout.
- AFTER: sculpt geometry torn down; default Cube rebuilt at origin (size 2); orphans purged. Verified identical to baseline: 3 objs / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube at origin. **PRISTINE_RESTORED: True.**

**Pending (overlay/INTEGRATION chat):** cairosvg pixel-verify each PNG against its c{N} overlay before commit; figures not yet placed in live HTML (still 0/28 integrated).

**Production progress:** SVG {1,4,15,22,34} COMPLETE &#183; PNG B1 {5,6,7,8} COMPLETE &#183; PNG B2 {9,10,11,12} COMPLETE. Remaining PNG: B3 {16,17,18,19}, B4 {3,23,24,25,26}, B5 {27,28,29,30,33,35} (split 5+1). 13 PNG + 0 SVG remaining of 28 build figures.

### Batch 3 &#183; figures {16,17,18,19} &#183; mesh-resolution &#183; 2026-06-25 &#183; COMPLETE

Resolution/topology section. Each figure stages a real topology difference so the four read distinct: #16 mesh-density concept (quad spheres), #17 single Dyntopo blob, #18 Dyntopo detail-size contrast, #19 Multires quad subdivision. Capture via the B2 path: full-window `screen.screenshot` &#8594; Pillow crop (3,39,1575,939) &#8594; 1572x900, written direct to `images/` UNC. VIEW_3D area rect re-verified at session start (window 1920x1046, VIEW_3D x3 y107 w1572 h900) &#8212; matched B2 box exactly, no recompute. Forced `wm.redraw_timer DRAW_WIN_SWAP` x3 before every capture. No baked labels.

**Density read via wireframe overlay:** #16/#18/#19 use SOLID + `overlay.show_wireframes` so polygon density is the visible story; deselected before capture so no selection-orange skews the per-object wire. #17 keeps wireframe on to show Dyntopo's uniform-triangle signature in Sculpt Mode.

**Dyntopo state in 5.1.1:** there is **no `tool_settings.sculpt.use_dyntopo` property** &#8212; it raised `AttributeError`. Dyntopo is toggled only via the `sculpt.dynamic_topology_toggle` operator (needs a VIEW_3D area/region override); detail settings live on `sculpt` (`detail_type_method`, `constant_detail_resolution`, `detail_size`). State is not cleanly readable back, so #17's Dyntopo header toggle is shown as chrome; the topology itself (dense uniform triangles staged via bmesh `triangulate`) carries the read regardless of the exact on/off. `detail_flood_fill` ran without raising but the sculpt-session vert count did not reflect back to `obj.data` &#8212; so density was staged deterministically via bmesh (B2 pattern) rather than relying on live dyntopo remeshing.

| # | Pri | File | Scene state captured | Verified |
|---|-----|------|----------------------|----------|
| 16 | H | `images/lesson_28_16_sculpting_basics.png` | Object Mode, two UV spheres separated on Y: high-density (48x32, 1490 verts, smooth) vs low-poly (8x6, 42 verts, faceted); flat-shaded + wireframe overlay &#8212; mesh-density concept | eye-checked (3rd take; 1st overlapped + selection-orange asymmetry, 2nd still depth-overlapped) |
| 17 | H | `images/lesson_28_17_sculpting_basics.png` | Sculpt Mode, Dyntopo toggle visible in header, single dense triangulated blob (64x44 sphere, triangulated, 2754 verts, sine relief) + brush asset shelf &#8212; Dynamic Topology signature | eye-checked |
| 18 | M | `images/lesson_28_18_sculpting_basics.png` | Object Mode, two triangulated blobs separated on Y: fine detail (72x50, 3530 verts) vs coarse detail (16x11, 162 verts), wireframe overlay &#8212; Dyntopo detail-size effect | eye-checked |
| 19 | M | `images/lesson_28_19_sculpting_basics.png` | Object Mode, cube base + Multires modifier (3 levels, Catmull-Clark quads) with sine relief, wireframe overlay showing regular quad grid + heavy base-cage seams &#8212; Multiresolution; quad topology contrasts Dyntopo triangles in #17/#18 | eye-checked |

**Composition note:** #17 (single Sculpt-Mode Dyntopo blob, triangles) and #18 (paired Dyntopo coarse-vs-fine, triangles) share the Dynamic Topology card; #19 (Multires, quads) reads distinct by topology type. INTEGRATION c{N} overlays will name Dyntopo detail-size and Multires levels.

**TRUE-PRISTINE attestation (B3):**
- BEFORE: verified TRUE-PRISTINE on arrival (B2 left it clean): 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts. No reset needed; socket preserved throughout.
- AFTER: staging geometry torn down (8 data-blocks purged); Cube visibility restored, wireframe overlay off. Verified identical to baseline: 3 objs / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25, Camera lens 50 DoF off, Cube 2x2x2 at origin 8 verts no mods. **PRISTINE_RESTORED: True.**

**Pending (overlay/INTEGRATION chat):** cairosvg pixel-verify each PNG against its c{N} overlay before commit; figures not yet placed in live HTML (still 0/28 integrated).

**Production progress (post-B3):** SVG {1,4,15,22,34} COMPLETE &#183; PNG B1 {5,6,7,8} COMPLETE &#183; PNG B2 {9,10,11,12} COMPLETE &#183; PNG B3 {16,17,18,19} COMPLETE. Remaining PNG: B4 {3,23,24,25,26}, B5 {27,28,29,30,33,35} (split 5+1). 9 PNG + 0 SVG remaining of 28 build figures.

### Batch 4 &#183; figures {3,23,24,25,26} &#183; sculpting-vs-modeling + first-sculpt-project (Option A Rock) &#183; 2026-06-25 &#183; COMPLETE

Two groups: #3 is a standalone sculpt-vs-box-modeling comparison (Object Mode); #23&#8211;26 are a 4-stage PROGRESSION of ONE rock. Capture via the B2/B3 path: full-window `screen.screenshot` &#8594; Pillow crop (3,39,1575,939) &#8594; 1572x900, written direct to `images/` UNC. VIEW_3D area rect re-verified at session start (window 1920x1046, VIEW_3D x3 y107 w1572 h900) &#8212; matched B2/B3 exactly, no recompute. Forced `wm.redraw_timer DRAW_WIN_SWAP` x3 before every capture. No baked labels.

**Rock progression as one form (shared "DNA"):** all four phases sample the SAME 7 low-frequency lumps (deterministic, `random.seed(2823)`) and the same proportion squash (1.28, 0.96, 0.76), so the silhouette is recognizably one rock across phases. Escalation is staged by subdivision + added high-frequency octaves, NOT by re-rolling the shape: P1 42v (faceted blockout, flat-shaded, blended 70% sphere / 30% cube cage for angular character) &#8594; P2 162v (smooth bulk masses) &#8594; P3 642v (mid-frequency relief, visible silhouette undulation) &#8594; P4 2562v (fine detail). Deterministic-bmesh staging (B2/B3 pattern) &#8212; no live sculpt-session strokes/dyntopo (the 5.1.1 stroke/session quirks from B1&#8211;B3 make those non-deterministic here).

**#26 portfolio framing:** P4 captured with **MatCap shading** (`clay_brown.exr`), wireframe OFF, and `overlay.show_overlays=False` (grid/axes/gizmos hidden) for a clean presentation read &#8212; deliberately distinct from the working-state SOLID+wireframe chrome of #23&#8211;25. Sculpt-Mode header retained on all four (Option A is a sculpt project).

**#3 method comparison (Object Mode):** organic dense **triangulated** sculpt mesh (2562v, smooth) at left vs clean low-poly **all-quad** box-model cage (56v, 54 quads, flat) at right, SOLID + wireframe overlay so the topology philosophies contrast directly (dense tris vs sparse quad grid). Deselected + active=None before capture (B3 lesson) so no selection-orange skews the per-object wire read.

**Camera/Light viewport hide:** the default Camera+Light object wireframes intruded at frame-left on the first #23 take; both were `hide_set(True)` for all B4 captures (display-only state) and explicitly cleared at teardown. (The BlenderMCP addon tab on the right window edge remains, accepted as-is per B1.)

| # | Pri | File | Scene state captured | Verified |
|---|-----|------|----------------------|----------|
| 3 | M | `images/lesson_28_03_sculpting_basics.png` | Object Mode, two objects side-by-side: dense organic triangulated sculpt mesh (2562v) vs clean low-poly quad box-model cage (56v/54 quads); SOLID + wireframe overlay, deselected &#8212; sculpt-vs-box-modeling topology contrast | eye-checked |
| 23 | M | `images/lesson_28_23_sculpting_basics.png` | Sculpt Mode, Rock Phase 1: low-poly angular blockout (42v, flat-shaded, faceted), SOLID + wireframe &#8212; coarse blockout stage | eye-checked (2nd take; 1st a subdiv=1 ico read too gem-like / camera intruded) |
| 24 | M | `images/lesson_28_24_sculpting_basics.png` | Sculpt Mode, Rock Phase 2: bulk masses (162v, smooth, same lump DNA rounded out), SOLID + wireframe &#8212; bulk-forms stage | eye-checked |
| 25 | M | `images/lesson_28_25_sculpting_basics.png` | Sculpt Mode, Rock Phase 3: mid-frequency relief (642v, smooth, silhouette undulation emerging), SOLID + wireframe &#8212; mid-detail stage | eye-checked |
| 26 | H | `images/lesson_28_26_sculpting_basics.png` | Sculpt Mode, Rock Phase 4: fine detail (2562v, smooth), MatCap `clay_brown.exr`, wireframe OFF + overlays OFF &#8212; finished / portfolio-framed stage | eye-checked |

**Composition note:** #23&#8211;26 share the same camera angle and rock identity so they read as one object progressing; the topology ladder 42&#8594;162&#8594;642&#8594;2562 plus the flat-blockout&#8594;MatCap-finish shading shift carries the four-stage story. #3 is the only B4 figure in Object Mode and the only multi-object compare. INTEGRATION c{N} overlays will label the phase numbers and the sculpt-vs-box distinction.

**TRUE-PRISTINE attestation (B4):**
- BEFORE: verified TRUE-PRISTINE on arrival (B3 left it clean): 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts. No reset needed; socket preserved throughout.
- AFTER: staging geometry torn down (Compare_* + Rock_* removed); Camera/Light viewport visibility restored; Cube visibility restored; wireframe overlay off, overlays on, shading back to MATERIAL/STUDIO; temp full-window PNG removed via Blender `os.remove`; 12 orphan data-blocks purged. Verified identical to baseline: 3 objs / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts no mods, visible. **PRISTINE_RESTORED: True.**

**Pending (overlay/INTEGRATION chat):** cairosvg pixel-verify each PNG against its c{N} overlay before commit; figures not yet placed in live HTML (still 0/28 integrated).

**Production progress (post-B4):** SVG {1,4,15,22,34} COMPLETE &#183; PNG B1 {5,6,7,8} COMPLETE &#183; PNG B2 {9,10,11,12} COMPLETE &#183; PNG B3 {16,17,18,19} COMPLETE &#183; PNG B4 {3,23,24,25,26} COMPLETE. Remaining PNG: B5 {27,28,29,30,33,35} (split 5+1). 6 PNG + 0 SVG remaining of 28 build figures.

### Batch 5 &#183; figures {27,28,29,30,33} &#183; first-sculpt-project (Option B Creature + MatCap grid) &#183; 2026-06-25 &#183; COMPLETE (#35 deferred to own sub-chat)

SPLIT 5+1 per task: #27&#8211;30 (creature progression) + #33 (MatCap grid) done here; **#35 (Common Beginner Mistakes flawed mesh) deferred to its own follow-up sub-chat** &#8212; it is a standalone summary-card figure with no shared DNA, so the split is clean. Capture via the B2/B3/B4 path: full-window `screen.screenshot` &#8594; Pillow crop (3,39,1575,939) &#8594; 1572x900, written direct to `images/` UNC. VIEW_3D area rect re-verified at session start (window 1920x1046, VIEW_3D x3 y107 w1572 h900) &#8212; matched B2/B3/B4 exactly, no recompute. Forced `wm.redraw_timer DRAW_WIN_SWAP` x3 before every capture. No baked labels.

**Creature progression as one form (shared "DNA"):** #27&#8211;30 are a 4-stage progression of ONE creature. All four sample the SAME deterministic feature field (9 Gaussian feature anchors &#8212; head, snout, brow ridge, eye-socket carve, haunch, foreleg shoulder, tail nub, belly carve, back hump) with the same body proportion (x0.92, y1.35, z1.0) and the same locked 3/4-front camera (`view_rotation` Euler 72&#176;/0/28&#176;), so the silhouette is recognizably one creature across phases. **X-symmetry is REAL in the mesh:** features are defined on the centerline / +X only and the field samples `abs(x)`, then `bmesh.ops.symmetrize(direction='X')` enforces exact mirror geometry (not just a symmetry modifier). Sculpt Mode header X/Y/Z symmetry toggles shown as a plus (`tool_settings.sculpt.use_symmetry_x=True`). Escalation is by subdivision + added high-frequency octaves, NOT by re-rolling: P1 242v (faceted blockout, flat-shaded, mirror clearly visible) &#8594; P2 750v (smooth bulk masses) &#8594; P3 1702v (features + 2 mid-freq octaves) &#8594; P4 3702v (4 octaves fine detail). Deterministic-bmesh staging (B2&#8211;B4 pattern) &#8212; no live sculpt-session strokes/dyntopo (5.1.1 quirks from B1&#8211;B4).

**#30 portfolio framing:** P4 captured with **MatCap shading** (`clay_brown.exr`), wireframe OFF, `overlay.show_overlays=False` (grid/axes/gizmos hidden) &#8212; clean presentation read, deliberately distinct from the working-state SOLID+wireframe chrome of #27&#8211;29. Sculpt-Mode header retained on all four (Option B is a sculpt project). (Same pattern as B4 #26.)

**#33 MatCap grid (contact sheet):** the single finished sculpt (P4) captured under FOUR MatCaps &#8212; `clay_brown.exr`, `clay_green.exr`, `red_wax.exr`, `pearl.exr` &#8212; each overlays-off, then Pillow-composited into a 2x2 contact sheet (each cell cropped to the creature region, resized to 786x450, dark separators) at the standard 1572x900. Reads as "same sculpt evaluated across MatCaps," the lesson point for "After Completing Your Sculpt." All four MatCap source tiles removed via Blender `os.remove` after compositing.

| # | Pri | File | Scene state captured | Verified |
|---|-----|------|----------------------|----------|
| 27 | M | `images/lesson_28_27_sculpting_basics.png` | Sculpt Mode, Creature Phase 1: symmetric low-poly blockout (242v, flat-shaded, faceted), real X-mirror geometry, header X/Y/Z symmetry toggles visible, SOLID + wireframe &#8212; symmetry-blockout stage | eye-checked (2nd take; 1st features too weak / read as generic lump) |
| 28 | M | `images/lesson_28_28_sculpting_basics.png` | Sculpt Mode, Creature Phase 2: bulk masses (750v, smooth, same feature DNA rounded out), SOLID + wireframe &#8212; bulk-forms stage | eye-checked |
| 29 | M | `images/lesson_28_29_sculpting_basics.png` | Sculpt Mode, Creature Phase 3: features + mid-freq relief (1702v, smooth, head/snout/haunch/foreleg legible, eye-socket carve), SOLID + wireframe &#8212; features stage | eye-checked |
| 30 | H | `images/lesson_28_30_sculpting_basics.png` | Sculpt Mode, Creature Phase 4: fine detail (3702v, smooth, 4 octaves), MatCap `clay_brown.exr`, wireframe OFF + overlays OFF &#8212; finished / portfolio-framed stage | eye-checked |
| 33 | M | `images/lesson_28_33_sculpting_basics.png` | 2x2 contact sheet: finished sculpt (P4) under 4 MatCaps (clay_brown / clay_green / red_wax / pearl), overlays off, Pillow-composited 1572x900 &#8212; "evaluate under multiple MatCaps" | eye-checked |

**Composition note:** #27&#8211;30 share the same locked camera and creature identity so they read as one object progressing; the topology ladder 242&#8594;750&#8594;1702&#8594;3702 plus the faceted-blockout&#8594;MatCap-finish shading shift carries the four-stage story (mirrors the B4 rock structure but with a creature + real X-symmetry). #33 is the only B5 figure that is a composite. INTEGRATION c{N} overlays will label the phase numbers, the X-symmetry callout, and the MatCap names.

**TRUE-PRISTINE attestation (B5):**
- BEFORE: verified TRUE-PRISTINE on arrival (B4 left it clean): 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000 soft 0.25, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts. No reset needed; socket preserved throughout.
- AFTER: staging geometry torn down (Creature_P1&#8211;P4 + meshes removed, 5 data-blocks deleted); Camera/Light/Cube viewport visibility restored; wireframe overlay off, overlays on, shading back to MATERIAL/STUDIO (studio_light Default); temp full-window PNG + 4 MatCap tiles removed via Blender `os.remove`; orphans purged. Verified identical to baseline: 3 objs / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts no mods, visible. **PRISTINE_RESTORED: True.**

**Pending (overlay/INTEGRATION chat):** cairosvg pixel-verify each PNG against its c{N} overlay before commit; figures not yet placed in live HTML (still 0/28 integrated).

**Production progress (post-B5):** SVG {1,4,15,22,34} COMPLETE &#183; PNG B1 {5,6,7,8} COMPLETE &#183; PNG B2 {9,10,11,12} COMPLETE &#183; PNG B3 {16,17,18,19} COMPLETE &#183; PNG B4 {3,23,24,25,26} COMPLETE &#183; PNG B5 {27,28,29,30,33} COMPLETE. **Remaining: #35 only (Common Beginner Mistakes &#8212; own sub-chat).** 1 PNG + 0 SVG remaining of 28 build figures (27/28 produced). After #35, PNG production closes and the pipeline moves to INTEGRATION (own chat).

### Batch 6 &#183; figure {35} &#183; summary (Common Beginner Mistakes) &#183; 2026-06-25 &#183; COMPLETE

FINAL PNG &#8212; closes PNG production. #35 is a standalone "what NOT to do" figure with no shared DNA with any other figure: a deliberately-flawed beginner-error mesh. Capture via the established B2&#8211;B5 path: full-window `screen.screenshot` &#8594; Pillow crop (3,39,1575,939) &#8594; 1572x900, written direct to `images/` UNC. VIEW_3D area rect re-verified at session start (window 1920x1046, VIEW_3D x3 y107 w1572 h900) &#8212; matched B2&#8211;B5 exactly, no recompute. Forced `wm.redraw_timer DRAW_WIN_SWAP` x3 before capture. No baked labels (callout via INTEGRATION c{N} overlay later).

**Flaw staged deterministically via bmesh (B2&#8211;B5 pattern; no live sculpt strokes/dyntopo):** base UV sphere (48x32) deformed by high-amplitude multi-octave value noise along normals (4 octaves: 0.42 big lumps / 0.20 medium / 0.11 fine / 0.06 high-freq grit) + per-vertex random jitter (seed 2835) for pinched/spiky verts. A 40-vert top cluster yanked hard into a classic pinched-vertex spike; a 55-vert side cluster over-pulled into a muddy second lobe with no clean form. 1490v / 1536 polys, shade-smooth. Reads as a lumpy, over-noisy, muddy blob &#8212; the intended beginner-error signature. SOLID + MATCAP (`clay_brown.exr`) + world cavity ON to maximise legibility of the surface chaos; Sculpt Mode chrome retained (sculpt figure). Camera + Light + the pristine Cube all `hide_set(True)` for the capture (display-only) so no wires/origin object intrude; cleared at teardown.

| # | Pri | File | Scene state captured | Verified |
|---|-----|------|----------------------|----------|
| 35 | M | `images/lesson_28_35_sculpting_basics.png` | Sculpt Mode, single deliberately-flawed beginner blob (1490v, multi-octave high-amp noise + pinched-vert spike + over-pulled muddy lobe, shade-smooth), SOLID + MATCAP `clay_brown.exr` + cavity, overlays on; Camera/Light/Cube hidden &#8212; "Common Beginner Mistakes" what-NOT-to-do | eye-checked |

**Composition note:** standalone summary-card figure, no shared DNA &#8212; the over-noisy/pinched/muddy read is the entire point (contrast against the clean finished sculpts of #26/#30). INTEGRATION c{N} overlay will label the specific mistakes (over-detailing without forms, pinched verts, no clean masses).

**TRUE-PRISTINE attestation (B6):**
- BEFORE: verified TRUE-PRISTINE on arrival (B5 left it clean): 3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts. No reset needed; socket preserved throughout.
- AFTER: staging geometry torn down (BeginnerErrorBlob + mesh removed, 1 data-block deleted); Camera/Light/Cube viewport visibility restored; wireframe overlay off, overlays on, cavity off, shading back to MATERIAL/STUDIO; temp full-window PNG removed via Blender `os.remove`; orphans purged. Verified identical to baseline: 3 objs / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; EEVEE/AgX, 1920x1080@100, fps24, frames 1-250, world 0.88, POINT 1000, Camera 7.36/-6.93/4.96 lens 50 DoF off, Cube 2x2x2 at origin 8 verts no mods, visible, nothing hidden. **PRISTINE_RESTORED: True.**

**Pending (overlay/INTEGRATION chat):** cairosvg pixel-verify each PNG against its c{N} overlay before commit; figures not yet placed in live HTML (still 0/28 integrated).

**Production progress (post-B6):** SVG {1,4,15,22,34} COMPLETE &#183; PNG B1 {5,6,7,8} COMPLETE &#183; PNG B2 {9,10,11,12} COMPLETE &#183; PNG B3 {16,17,18,19} COMPLETE &#183; PNG B4 {3,23,24,25,26} COMPLETE &#183; PNG B5 {27,28,29,30,33} COMPLETE &#183; PNG B6 {35} COMPLETE. **PNG production COMPLETE &#8212; 28/28 produced** (5 SVG + 23 PNG). DEFER-7 {2,13,14,20,21,31,32} remains out of scope. Next pipeline stage = INTEGRATION (own chat): edit_file dryRun&#8594;commit&#8594;get_file_info per figure, c{N} overlays, cairosvg pixel-verify, FINAL INVARIANT TABLE, em-dash recount, QA @380/900px.

---

---

## INTEGRATION LOG (own chat &#8212; HTML only, no Blender staging)

### INTEGRATION-A &#183; MODERNIZE pass &#183; 2026-06-25 &#183; COMPLETE

First INTEGRATION sub-chat. Per the RESOLVED OPEN DECISION (a) MODERNIZE, applied at integration. Decisions confirmed by Ray this chat: gradient cards &#8594; option (b) inline-neutralize to `currentColor` (no forced white text); the 1 `<table>` &#8594; KEEP (neutralize header bg only). 0 figures placed in A (figure integration deferred to B/C/D). `edit_file` dryRun&#8594;commit&#8594;`get_file_info` cadence on live HTML throughout.

**7 commits:**
| # | Change | Bytes after | Color delta |
|---|--------|-------------|-------------|
| 1 | Strip dead mermaid harness from `<head>` (jsdelivr import + `mermaid.initialize`) | 145,585 | `#667eea` 7&#8594;6 |
| 2 | Method Comparison `<table>` header: `background:#667eea`+`color:white` &#8594; `border-bottom:2px solid currentColor`; header `<th>` borders `#ddd`&#8594;`currentColor`. Table KEPT (structure + body `#ddd`/`#f9f9f9` zebra untouched). | 145,613 | `#667eea` 6&#8594;5 |
| 3 | Learning Objectives card: purple gradient+white &#8594; `border:2px solid currentColor`, white stripped | 145,488 | `#667eea` 5&#8594;4 / `#764ba2` 5&#8594;4 |
| 4 | Brush Quick Reference card: same neutralize. **Pre-existing literal U+2014 in "Memorize these&#8212;they're your foundation" PRESERVED verbatim** (caught + reverted an accidental entity conversion at dryRun). | 145,385 | `#667eea` 4&#8594;3 / `#764ba2` 4&#8594;3 |
| 5 | mesh-resolution "Quick Decision Guide" card: same neutralize | 145,166 | `#667eea` 3&#8594;2 / `#764ba2` 3&#8594;2 |
| 6 | first-sculpt-project "Project Overview" card: same neutralize | 145,005 | `#667eea` 2&#8594;1 / `#764ba2` 2&#8594;1 |
| 7 | summary "What You've Mastered" card: same neutralize | 144,822 | `#667eea` 1&#8594;0 / `#764ba2` 1&#8594;0 |

**Scope reconciliation:** 5 purple gradient cards + 1 mermaid `#667eea` + 1 table-header `#667eea` = 7&#215;`#667eea` / 5&#215;`#764ba2`, all neutralized to `currentColor`. The summary "Final Thoughts" card uses a SEPARATE green gradient `#4CAF50`/`#45a049` &#8212; OUT of scope, left as-is. Green `.card` accents `#e8f5e9`/`#4CAF50` and amber warnings `#fff3cd`/`#ffc107` also out of scope, left as-is.

**INVARIANTS after INTEGRATION-A (live file, 2026-06-25):**
- bytes **144,822** (was 145,998 at baseline; &#8722;1,176)
- `#667eea` **0** (was 7) &#183; `#764ba2` **0** (was 5) &#183; `currentColor` **7** (was 0): 1 table header + 6 card borders
- mermaid: jsdelivr import **GONE** (was present in `<head>`); `class="mermaid"` divs **0** (unchanged)
- `<table>` **1** (KEPT, Method Comparison, `#sculpting-vs-modeling`)
- em-dash **U+2014 = 48** (PRESERVED verbatim; recounted &#8212; one accidental entity conversion caught at dryRun and reverted before commit)
- `&#183;` middot **0** (no new separators added in A)
- figure/figcaption/img/svg all **0** &#8212; 0/28 integrated (A was MODERNIZE-only)
- next-lesson link &#8594; `lesson_29_hard_surface_modeling.html` (untouched, confirmed in live nav)
- inline `style=` reduced from 90 (stripped many `color:white`); exact recount deferred to first figure checkpoint in B

**Section ids re-confirmed live vs PLACEMENT MAP (all 8 present):** `what-is-sculpting`, `sculpting-vs-modeling`, `when-to-sculpt`, `sculpt-mode-interface`, `essential-brushes`, `mesh-resolution`, `first-sculpt-project`, `summary`. All per-figure placement anchors verified present (Clay Metaphor h3; Method Comparison table; Combined Workflows card; sculpt-mode Interface Layout / Entering Sculpt Mode / Essential Settings cards; essential-brushes Draw/Grab/Smooth/Clay-Strips/Quick-Reference cards; mesh-resolution What-Is / Method-1 / Method-2 anchors; first-sculpt Option A/B phase cards + After-Completing; summary Key-Takeaways + Common-Beginner-Mistakes cards).

**Asset spot-check:** `images/lesson_28_01_clay_metaphor_diagram.svg` present (5,668 B). (Full 28-asset existence sweep to run at start of each figure sub-chat before its commits.)

**HANDOFF (figure integration split to avoid compaction; &#8805;6 figures/chat):**
- **INTEGRATION-B:** what-is-sculpting + sculpting-vs-modeling + sculpt-mode-interface &#8212; figures #1, 3, 4, 5, 6, 7, 8 (7 figs: 2 SVG #1/#4, 5 PNG). First B step: full asset sweep + inline `style=` recount + em-dash recount (must read 48).
- **INTEGRATION-C:** essential-brushes + mesh-resolution &#8212; figures #9, 10, 11, 12, 15, 16, 17, 18, 19, 22 (10 figs: 2 SVG #15/#22, 8 PNG).
- **INTEGRATION-D:** first-sculpt-project + summary &#8212; figures #23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35 (11 figs: 1 SVG #34, 10 PNG). Then FINAL INVARIANT TABLE + em-dash recount + "INTEGRATION COMPLETE" + browser QA @380/900px + session.md.
- Carry forward: c{N} overlays (no baked labels), cairosvg pixel-verify before every PNG-overlay commit, 0 new em-dashes (use `&#183;`), preserve 48 U+2014.

---

### INTEGRATION-B &#183; figures {1,3,4,5,6,7,8} &#183; what-is-sculpting + sculpting-vs-modeling + sculpt-mode-interface &#183; 2026-06-25 &#183; COMPLETE

Second INTEGRATION sub-chat. 7 figures placed (2 inline SVG #1/#4 + 5 PNG #3/#5/#6/#7/#8). `edit_file` dryRun&#8594;commit&#8594;`get_file_info` cadence throughout. Full B-asset existence sweep passed at open (all 7 source assets on disk: `lesson_28_01_clay_metaphor_diagram.svg` 5.54KB, `lesson_28_03_sculpting_basics.png` 311.93KB, `lesson_28_04_combined_workflow.svg` 5.70KB, `lesson_28_05_sculpt_mode_interface.png` 442.30KB, `lesson_28_06_entering_sculpt_mode.png` 340.36KB, `lesson_28_07_essential_settings_dyntopo.png` 434.97KB, `lesson_28_08_essential_settings_symmetry.png` 477.67KB). All 5 PNGs are **1572x900** &#8594; overlay viewBox `0 0 1572 900` each. All 5 PNG c{N} overlays cairosvg pixel-verified 1:1 (Claude-side composite + view) BEFORE each commit.

**6 commits:**
| # | Fig | Fmt | Section &#183; placement | Bytes after | Overlay / id-prefix |
|---|-----|-----|----------------------|-------------|---------------------|
| 1 | #1 | SVG | what-is-sculpting &#183; after "The Clay Metaphor" h3 | 153,092 | inline, `cm-*` |
| 2 | #3 | PNG | sculpting-vs-modeling &#183; after Method Comparison table | 155,564 | c3: DENSE TRIS + QUAD CAGE (orange neutral, white text) |
| 3 | #4 | SVG | sculpting-vs-modeling &#183; Combined Workflows card (deeper-indent) | 164,330 | inline, `cw-*` |
| 4 | #5 | PNG | sculpt-mode-interface &#183; after "Interface Layout" h3 | 165,971 | c5: TOOLBAR (orange) |
| 5 | #6 | PNG | sculpt-mode-interface &#183; "Entering Sculpt Mode" card (deeper-indent) | 167,707 | c6: MODE DROPDOWN (orange) |
| 6 | #7 + #8 | PNG&#215;2 | sculpt-mode-interface &#183; "Essential Settings" card (deeper-indent) | 171,102 | c7: DYNTOPO ON (green/positive, dark text); c8: HIGH DETAIL (orange) |

**c{N} registry (B):** c3 (2 callouts), c5, c6, c7, c8. Inline-SVG id-prefixes: `cm-*` (#1), `cw-*` (#4). C must avoid these prefixes; D too.

**Colorway notes:** c7 DYNTOPO-ON uses positive green `#4ADE80` + `#0f1a14` text (affirmative "setting enabled" state). c3/c5/c6/c8 use brand-orange `#FF6B00` + `#ffffff` as NEUTRAL concept/locator highlights (not positive/warning semantics) &#8212; documented tie-break/neutral role. No warning-red badges in B.

**Inlining notes:** SVG #1 (`cm-*`, viewBox 760x440) and #4 (`cw-*`, viewBox 760x300) had NO `color="#222"` root attr on disk &#8212; nothing to strip. Both use `currentColor` throughout. #4 carries one pre-existing `&#8212;` ENTITY in its caption (the OR-modeling / AND-modeling line) &#8212; inlined verbatim; it is an entity, not literal U+2014, so does NOT affect the U+2014 count. #6 anchor contained a pre-existing literal em-dash in the "Congratulations" list item &#8212; preserved verbatim.

**FINAL INVARIANT TABLE after INTEGRATION-B (live file, 2026-06-25, Python over on-disk UTF-8):**
- bytes **171,102** (was 144,822 post-A; +26,280) &#183; chars 170,529
- U+2014 em-dash **48** (PRESERVED verbatim; 0 new)
- `&#183;` middot entity **3** (all in inlined SVG #1/#4 pre-existing entities) &#183; literal U+00B7 **0**
- `#667eea` **0** &#183; `#764ba2` **0**
- `currentColor` **60** (7 from A: 1 table header + 6 card borders; +53 from inlined SVG #1/#4 strokes/fills)
- `<table>` **1** (KEPT, Method Comparison)
- figure **7** &#183; figcaption **7** &#183; img **5** &#183; svg **7** (2 inline diagram SVG + 5 PNG overlay SVG) &#8212; **7/28 integrated**
- mermaid **0** &#183; `class="mermaid"` **0**
- next-lesson link &#8594; `lesson_29_hard_surface_modeling.html` **1** (untouched)
- inline `style=` **85** (was 90 pre-A; A net &#8722;5; B-added wrapper/img/overlay styles net to 85 &#8212; the figure-wrapper + img-override + overlay-positioning inline styles are required by the standard PNG-overlay pattern, not stray)

**Browser QA:** NOT run in B (per handoff, @380/900px QA is D's closing step). No QA this chat.

**HANDOFF (unchanged from A):**
- **INTEGRATION-C:** essential-brushes + mesh-resolution &#8212; figures #9, 10, 11, 12, 15, 16, 17, 18, 19, 22 (10 figs: 2 SVG #15/#22, 8 PNG). First C step: existence sweep on those 10 assets + em-dash recount (must read 48) + byte baseline (171,102). Avoid id-prefixes `cm-`/`cw-` and c{N} ids c3/c5/c6/c7/c8.
- **INTEGRATION-D:** first-sculpt-project + summary &#8212; figures #23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35 (11 figs: 1 SVG #34, 10 PNG). Then FINAL INVARIANT TABLE + em-dash recount + "INTEGRATION COMPLETE" + browser QA @380/900px + update `session.md`.
- Carry forward: c{N} overlays (no baked labels), cairosvg pixel-verify before every PNG-overlay commit, 0 new em-dashes (use `&#183;`), preserve 48 U+2014, deeper-indent variant for figures inside col-16 cards.

---

### INTEGRATION-C &#183; figures {9,10,11,12,15,16,17,18,19,22} &#183; essential-brushes + mesh-resolution &#183; 2026-06-25 &#183; COMPLETE

Third INTEGRATION sub-chat. 10 figures placed (2 inline SVG #15/#22 + 8 PNG #9/#10/#11/#12/#16/#17/#18/#19). `edit_file` dryRun&#8594;commit&#8594;`get_file_info` cadence throughout. Full C-asset existence sweep passed at open (all 10 source assets on disk). All 8 PNGs are **1572x900** &#8594; overlay viewBox `0 0 1572 900` each. All 8 PNG c{N} overlays cairosvg pixel-verified 1:1 BEFORE each commit. Baseline at open: 171,102 bytes / 48 U+2014.

**8 commits** (#17+#18 share one commit in the Method 1 Dynamic Topology card):
| # | Fig | Fmt | Section &#183; placement | Bytes after | Overlay / id-prefix |
|---|-----|-----|----------------------|-------------|---------------------|
| 1 | #9 | PNG | essential-brushes &#183; Draw Brush card | 172,763 | c9: DRAW (orange) |
| 2 | #10 | PNG | essential-brushes &#183; Grab Brush card | 174,430 | c10: GRAB (orange) |
| 3 | #11 | PNG | essential-brushes &#183; Smooth Brush card | 176,159 | c11: SMOOTH (orange) |
| 4 | #12 | PNG | essential-brushes &#183; Clay Strips card | 177,846 | c12: CLAY STRIPS (orange) |
| 5 | #15 | SVG | essential-brushes &#183; Brush Quick Reference card | 184,820 | inline, `bs-*` |
| 6 | #16 | PNG | mesh-resolution &#183; after "What Is Mesh Resolution?" | 186,923 | c16: HIGH vs LOW DENSITY (orange, 2 callouts) |
| 7 | #17 + #18 | PNG&#215;2 | mesh-resolution &#183; Method 1 Dynamic Topology card (deeper-indent) | 191,387 | c17: DYNTOPO ENABLED (green/positive, dark text, 2 callouts); c18: DETAIL SIZE (orange, 2 callouts) |
| 8 | #19 | PNG | mesh-resolution &#183; Method 2 Multiresolution card (deeper-indent) | 193,660 | c19: MULTIRES LEVELS (orange, 2 callouts) |
| | #22 | SVG | mesh-resolution &#183; after "Choosing Your Resolution Method" | 202,350 | inline, `rd-*` (incl `rd-arrow`) |

Byte ladder: 172763 &#8594; 174430 &#8594; 176159 &#8594; 177846 &#8594; 184820 &#8594; 186923 &#8594; 191387 &#8594; 193660 &#8594; 202350.

**c{N} registry (C):** c9, c10, c11, c12, c16 (&#215;2 callouts), c17 (&#215;2 callouts), c18 (&#215;2 callouts), c19 (&#215;2 callouts). Inline-SVG id-prefixes: `bs-*` (#15), `rd-*` (#22, incl `rd-arrow`). D must avoid all C c{N} ids and these prefixes.

**Colorway notes:** c17 DYNTOPO-ENABLED uses positive green `#4ADE80` + `#0f1a14` text (affirmative "setting enabled" state, matching B's c7 DYNTOPO-ON). All other C overlays (c9/c10/c11/c12/c16/c18/c19) use brand-orange `#FF6B00` + `#ffffff` as NEUTRAL concept/locator highlights. No warning-red badges in C. House style per B: leader `stroke-width:3` + circle `r6`; badge `h48 rx7` + text `font-size:26 font-weight:700`.

**FINAL INVARIANT TABLE after INTEGRATION-C (live file, 2026-06-25, Python over on-disk UTF-8):**
- bytes **202,350** (was 171,102 post-B; +31,248)
- U+2014 em-dash **48** (PRESERVED verbatim; 0 new)
- `#667eea` **0** &#183; `#764ba2` **0**
- `<table>` **1** (KEPT, Method Comparison)
- figure **17** &#183; figcaption **17** &#183; img **13** &#183; svg **17** (4 inline diagram SVG #1/#4/#15/#22 + 13 PNG overlay SVG) &#8212; **17/28 integrated**
- mermaid **0** &#183; `class="mermaid"` **0**
- next-lesson link &#8594; `lesson_29_hard_surface_modeling.html` **1** (untouched)

**Browser QA:** NOT run in C (per handoff, @380/900px QA is D's closing step). No QA this chat.

**HANDOFF (unchanged):**
- **INTEGRATION-D:** first-sculpt-project + summary &#8212; figures #23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35 (11 figs: 1 SVG #34, 10 PNG). First D step: existence sweep on those 11 assets + em-dash recount (must read 48) + byte baseline (202,350). Avoid C c{N} ids c3/c5/c6/c7/c8/c9/c10/c11/c12/c16/c17/c18/c19 and id-prefixes `cm-`/`cw-`/`bs-`/`rd-`. Then FINAL INVARIANT TABLE + "INTEGRATION COMPLETE" + browser QA @380/900px + update `session.md`. DEFER-7 {2,13,14,20,21,31,32} out of scope.
- Carry forward: c{N} overlays (no baked labels), cairosvg pixel-verify before every PNG-overlay commit, 0 new em-dashes (use `&#183;`), preserve 48 U+2014, deeper-indent variant for figures inside col-16 cards.


### INTEGRATION-D &#183; figures {23,24,25,26,27,28,29,30,33,34,35} &#183; first-sculpt-project + summary &#183; 2026-06-25 &#183; COMPLETE

Fourth and FINAL INTEGRATION sub-chat. 11 figures placed (1 inline SVG #34 + 10 PNG #23/#24/#25/#26/#27/#28/#29/#30/#33/#35). `edit_file` dryRun&#8594;commit&#8594;`get_file_info` cadence throughout. Full D-asset existence sweep passed at open (all 11 source assets on disk). All 10 PNGs are **1572x900** &#8594; overlay viewBox `0 0 1572 900` each. All 10 PNG c{N} overlays cairosvg pixel-verified 1:1 BEFORE each commit. Baseline at open: 202,350 bytes / 48 U+2014.

**Per-commit byte ladder (commit order):**
| # | Fig | Fmt | Section &#183; placement | Bytes after |
|---|-----|-----|----------------------|-------------|
| base | &#8212; | &#8212; | (post-C open baseline) | 202,350 |
| 1 | #23 | PNG | first-sculpt-project &#183; Option A Rock Phase 1 (after Phase 1&#8211;4 `<ol>`) | 203,925 |
| 2 | #24 | PNG | first-sculpt-project &#183; Option A Rock Phase 2 (after Phase 1&#8211;4 `<ol>`) | 205,461 |
| 3 | #25 | PNG | first-sculpt-project &#183; Option A Rock Phase 3 (after Phase 1&#8211;4 `<ol>`) | 207,009 |
| 4 | #26 | PNG | first-sculpt-project &#183; Option A Rock Phase 4 portfolio (after Phase 1&#8211;4 `<ol>`) | 208,558 |
| 5 | #27 | PNG | first-sculpt-project &#183; Option B Creature Phase 1 symmetry (after Phase 1&#8211;4 `<ol>`) | 210,687 |
| 6 | #28 | PNG | first-sculpt-project &#183; Option B Creature Phase 2 (after Phase 1&#8211;4 `<ol>`) | ~212,000 |
| 7 | #29 | PNG | first-sculpt-project &#183; Option B Creature Phase 3 features (after Phase 1&#8211;4 `<ol>`) | ~213,600 |
| 8 | #30 | PNG | first-sculpt-project &#183; Option B Creature final portfolio (after Phase 1&#8211;4 `<ol>`) | 215,299 |
| 9 | #33 | PNG | first-sculpt-project &#183; end of "Presentation and Next Steps" card (After Completing Your Sculpt &#167;) | ~218,000 |
| 10 | #34 | SVG | summary &#183; end of "Essential Lessons" Key-Takeaways card | ~225,000 |
| 11 | #35 | PNG | summary &#183; end of "Learn from Others' Mistakes" card | 227,259 |

Ladder endpoints exact (`get_file_info` per commit); intermediate c28/c29/c33/#34 noted approximate in-session (recompute from git diff if a precise per-commit ladder is later needed). Net D delta: 202,350 &#8594; 227,259 = +24,909. Option C (Vase) left untouched (DEFER-7 #31/#32 out of scope).

**c{N} registry (D):** c23, c24, c25, c26, c27, c28, c29, c30, c33, c35 (10 PNG overlays). Inline SVG #34 uses id-prefix `ws-*` (workflow-stages; incl `ws-arrow` marker + `ws-title` aria def). All D ids/prefixes avoid prior A/B/C ids (`cm-`/`cw-`/`bs-`/`rd-` and c3/c5/c6/c7/c8/c9/c10/c11/c12/c16/c17/c18/c19).

**`ws-title` grep note:** `ws-title` greps as **2** &#8212; CORRECT. One is the `aria-labelledby` reference on the root `<svg>`, the other is the `<title id="ws-title">` definition. Single figure, single title; the pair is the standard accessible-SVG idiom, not a duplicate.

**Colorway notes:** all 10 D PNG overlays use brand-orange `#FF6B00` + `#ffffff` as NEUTRAL concept/locator/phase highlights (neutral phase numbers on the rock/creature progressions + portfolio + mistakes), EXCEPT **c27** which adds positive green `#4ADE80` + `#0f1a14` text for the X-symmetry-ON toggle callout (affirmative "setting enabled" state, matching B's c7 and C's c17 DYNTOPO-ON convention). Inline SVG #34 uses `currentColor` throughout (light+dark safe). No warning-red badges in D. House style per B/C: leader `stroke-width:3` + circle `r6`; badge `h48 rx7` + text `font-size:26 font-weight:700`.

**FINAL INVARIANT TABLE after INTEGRATION-D (live file, 2026-06-25, Python over on-disk UTF-8 &#8212; recounted this chat):**
- bytes **227,259** &#183; chars 226,686
- figure **28** &#183; figcaption **28** &#183; img **23** &#183; svg **28** (5 inline diagram SVG #1/#4/#15/#22/#34 + 23 PNG overlay SVG) &#8212; **28/28 integrated** (DEFER-7 {2,13,14,20,21,31,32} out of scope)
- U+2014 em-dash **48** (PRESERVED verbatim; 0 new) &#183; literal U+00B7 **0**
- `<table>` **1** (KEPT, Method Comparison)
- `#667eea` **0** &#183; `#764ba2` **0**
- mermaid **0** &#183; `class="mermaid"` **0**
- `ws-title` **2** (aria-labelledby ref + `<title id>` def &#8212; single figure, correct)
- next-lesson link &#8594; `lesson_29_hard_surface_modeling.html` **1** (untouched)

## INTEGRATION COMPLETE

L28 INTEGRATION COMPLETE. All 28 build figures (5 SVG + 23 PNG) placed once each across INTEGRATION-A&#8211;D; FINAL INVARIANT TABLE verified live; 48 U+2014 preserved; 0 new em-dashes. DEFER-7 {2,13,14,20,21,31,32} remain out of scope (Option C Vase untouched). Browser QA @380/900px (dark+light) results recorded below.

**Browser QA @380/900 dark+light: PASS** (0 overflow, overlays 1:1, #34 ws-arrow renders). Real headless Chromium (Playwright 1.56 / Chromium 141) over `http.server` against the live tree, dark+light &#215; 380/900px. All 4 configs: horizontal overflow **0**; all **23** imgs decode (naturalWidth&#62;0); the 10 D PNG overlays register **1:1** over their bitmaps (worst abs delta 0.02px, dw-only rounding; dx/dy/dh 0.00) at both widths/themes; #34 `ws-arrow` marker renders (10&#215;10 marker `&#60;path&#62;`, 2 referencing `&#60;line&#62;`s len 138/132 visible); mermaid n/a. Prior-session naturalWidth=0 was `loading="lazy"` not loader-limited &#8212; resolved by eager+scroll. Screenshots saved (dark/light &#215; 380/900).

---

## PIPELINE PLAN (sub-chat architecture, per L25&#8211;L27)
1. **THIS (SETUP):** roster + placement + baseline + session.md corrected. DONE pending OPEN DECISION.
2. **PRODUCTION &#8212; SVG batch:** author 5 inline SVGs (#1,4,15,22,34) Claude-side, light+dark safe (currentColor), id-prefixed; cairosvg render-verify.
3. **PRODUCTION &#8212; PNG batches (\u22645 each, &#8805;5 \u2192 own sub-chat):** 23 PNGs via Blender sculpt/Dyntopo/Multires staging. **Verify TRUE-PRISTINE before + after each staged scene.** No baked labels (callouts via INTEGRATION c{N} overlays). cairosvg pixel-verify before every overlay commit.
4. **INTEGRATION (own chat):** edit_file dryRun&#8594;commit&#8594;get_file_info per figure; responsive overlay wrapper; per-commit log + FINAL INVARIANT TABLE here; em-dash recount each checkpoint.
5. **QA:** live-pixel headless Chromium/Playwright @380/900px; 0 overflow; overlays 1:1; (mermaid only if (a) keeps/vendors any diagram &#8212; currently none).

## RULES (carry forward)
`\\wsl$\` paths only. 0 new em-dashes (use `&#183;`); preserve 48 U+2014; recount each checkpoint. `edit_file` dryRun&#8594;commit&#8594;`get_file_info` for live HTML (never create_file). cairosvg pixel-verify before every PNG-overlay commit. Blender TRUE-PRISTINE baseline (verify before/after rigged/sculpt staging). `blender:execute_blender_code` lowercase only. No Filesystem delete &#8212; remove temps via Blender `os.remove`. Ray = terse, one version, no alternatives.

## BLENDER BASELINE
TRUE-PRISTINE as of 2026-06-25 (post-L28-B6 teardown): 3 objs Camera+Cube+Light, 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 orphans / 0 empties, EEVEE/AgX/None/exp0, res 1920x1080@100, fps 24, world 0.88/1.0, POINT 1000 soft 0.25 factory loc, DoF OFF, lens 50, frame 1&#8211;250. L28 PNG production COMPLETE (28/28); no further Blender staging for L28 &#8212; next stage is INTEGRATION (HTML only).
