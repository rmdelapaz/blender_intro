# Lesson 32 Integration Progress - Particle Systems Overview

**Status:** ACTIVE - PRODUCTION COMPLETE. 24/24 figures on disk (4 inline SVG + 20 PNG). All PNG batches (A/B/C) CLOSED. NEXT: INTEGRATION (own chat, byte-ladder from 282,724).
**Opened:** 2026-06-27
**Slug:** particle_systems_overview
**File:** lesson_32_particle_systems_overview.html
**Module:** 7 (Advanced Modeling), lesson 5
**Prev:** L31 FULLY CLOSED (QA-PASS 2026-06-27, live 292,355 B) - DO NOT REOPEN
**Next-link into L32 from L31:** confirmed 1

---

## Generation Verdict: OLD-GEN -> MODERNIZE REQUIRED

Date metadata (on-disk created 2026-06-19) is NOT decisive; content signature is.
Old-gen confirmed by content:
- 0 figure / 0 figcaption / 0 img / 0 svg (no figure pipeline yet)
- Legacy gradient palette PRESENT: #667eea x12, #764ba2 x3
- Live mermaid: 1 jsdelivr import + 10 rendered `class="mermaid"` divs

### Modernization actions (live file)
1. Neutralize hero/card gradient `linear-gradient(135deg,#667eea 0%,#764ba2 100%)` -> currentColor treatment (3 occurrences).
2. Neutralize mermaid node `style X fill:#667eea` inside the 10 diagrams (8 fill refs) -> neutral/currentColor-compatible fill.
3. KEEP tables (9 total), neutralize any header gradient/legacy color; ensure every `width:100%` table is wrapped in `<div class="table-wrap">`.
4. Mermaid decision: KEEP (10 live diagrams, working import). Swap is a QA-copy-only concern (offline stub), never the live file. Re-confirm at integration.

---

## Baseline Invariant (UTF-8 python3, Claude-side fresh copy - NOT grep)

Captured 2026-06-27 from on-disk live file.

| Metric | Baseline |
|---|---|
| bytes | 282,606 |
| chars | 281,777 |
| figure | 0 |
| figcaption | 0 |
| img | 0 |
| svg | 0 |
| em-dash U+2014 | 34 (PRESERVE verbatim) |
| literal U+00B7 | 0 |
| &#183; | 0 |
| #667eea | 12 |
| #764ba2 | 3 |
| color="#222" | 0 (house standard color222 0 - HOLD) |
| color:#222 (css) | 0 |
| &lt;table&gt; | 9 |
| table-wrap | 1 (only 1 of 9 wrapped - 8 unwrapped width:100% tables = overflow risk) |
| mermaid import | 1 (jsdelivr esm) |
| class="mermaid" divs | 10 |
| currentColor | 0 |

### Locked targets (TENTATIVE - finalize at integration kickoff)
- em-dash U+2014: 34 -> 34 (no new em-dashes; use &#183; only)
- literal U+00B7: 0 -> 0
- color="#222": 0 -> 0
- #667eea / #764ba2: 12 / 3 -> 0 / 0 (post-modernize)
- table-wrap: 1 -> 9 (wrap all width:100% tables)
- figure / figcaption / svg / img: set when BUILD roster locks (see triage)

---

## Figure Roster Triage (from lesson_32_image_requirements.md - 36 candidates)

Source priority tiers: High (10) + Medium (14) = **BUILD 24**; Lower (12) = **DEFER**.

### BUILD (24) - High + Medium
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 22, 23, 27, 28, 31, 34

### DEFER (12) - Lower
12, 18, 21, 24, 25, 26, 29, 30, 32, 33, 35, 36

### Format split (BUILD set) - FINALIZED (against L31 close doc, 2026-06-27)
Requirements doc SVG-recommended set = {1, 5, 10, 32}. #32 is DEFER, so:
- **Inline SVG (4):** #1 Particle Lifecycle, #5 Velocity Direction, #10 Collision Behavior, **#34 Settings Quick Reference** (infographic/table = diagram-class -> inline SVG, per L31 precedent: #7/#25 infographics + #10/#39 charts all went inline SVG).
- **PNG via BlenderMCP (20):** #2, 3, 4, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 19, 20, 22, 23, 27, 28, 31

**#34 DECISION LOCKED -> inline SVG** (was "DECIDE at production kickoff"). Reference/infographic/quick-table class follows L31's inline-SVG handling of infographics and charts. Split is therefore 4 inline / 20 PNG.

### LOCKED invariant targets (BUILD=24, 4 inline SVG / 20 PNG) - FINALIZED 2026-06-27
- **figure 24 / figcaption 24 / `</figure>` 24**
- **img 20** (one per PNG)
- **svg 24** = **4 inline diagram SVGs + 20 PNG `c{N}` overlays**

**Overlay svg-counting convention LOCKED (per L31 close doc):** L31 final invariant table = `svg (open) 20 = 7 inline + 13 overlay`. Each PNG's `c{N}` overlay is inlined as one `<svg>` over the bitmap, so live-file `svg` = inline diagrams + PNG overlays = total figures (24). `img` counts PNGs only (20). This resolves the prior "CONFIRM overlay-counting convention" open question: overlays ARE counted in live-file svg.

DEFER set (12) stays out: figure/figcaption/img/svg targets above are for the BUILD-24 set only; if DEFER items are later reopened, targets re-derive.

### c{N} overlay plan
- Namespace `c32`. PNG annotation overlays for the 20 PNGs follow the standard `#FF6B00` plate + `#fff` text (warn/render/raw) and `#4ADE80` plate + `#0f1a14` text (good/clean), HTML entities only, viewBox == on-disk PNG pixel box 1:1, cairosvg pixel-verify before every overlay commit. (Two-color overlay convention per L31 OVERLAY BUILD LOG.)

---

## Pipeline Rules (carried forward, unchanged)
- \\wsl$\ paths only (never \\wsl.localhost\).
- 0 new em-dashes; use &#183;.
- Filesystem:write_file for new files / full overwrites (never create_file).
- edit_file: dryRun -> commit -> get_file_info every change.
- Inline SVGs: color="currentColor" (NEVER color="#222" - that was the L31 dark-mode defect; color222 0).
- Every width:100% table wrapped in `<div class="table-wrap">` (main.css .table-wrap{overflow-x:auto}); L30/L31 both regressed here.
- PNG overlays: cairosvg pixel-verify Claude-side before EVERY overlay commit; overlay viewBox == on-disk PNG pixel box 1:1.
- PRODUCTION >=5 figs -> own sub-chat. INTEGRATION >=6 figs -> own chat.
- Browser QA (own chat): system Chrome /opt/google/chrome/chrome via Playwright executable_path (azureedge/playwright + jsdelivr egress-blocked; mermaid offline stub on render-only copy, never live). 4 configs 380/900 x dark/light.
- Blender TRUE-PRISTINE (L22-close baseline); verify before+after any rigged/sim staging.

---

## Next Actions
1. ~~Lock overlay-counting convention + #34 format decision against L31 close doc~~ DONE 2026-06-27: overlays counted in live svg; #34 -> inline SVG; targets finalized (figure/figcaption 24, img 20, svg 24).
2. ~~MODERNIZE pass on live file as Phase 0; re-baseline~~ DONE 2026-06-27: WRITTEN LIVE, 282,724 B, re-baselined.
3. PRODUCTION: 24 figs (4 inline SVG {1,5,10,34} + 20 PNG) -> exceeds 5, so SVG batch + PNG batches in own sub-chats (namespace c32).
4. INTEGRATION: 24 figs -> exceeds 6, so own chat. Byte-ladder from new baseline 282,724.

## Phase 0 MODERNIZE - WRITTEN LIVE + VERIFIED (2026-06-27)

Transform regenerated deterministically against a fresh pristine copy, written to the
live file via chunked `edit_file` (12 small substitutions + 16 anchor edits for the 8
table wraps) instead of a single ~282 KB inline write_file blob (which had failed in the
prior chat). Live file verified post-write: md5/sha256 both equal target, all 16 invariants PASS.
Live md5 38c335d5b7f12de5fd8afebdf356b4f0 / sha256 a67c50e9fa37edda790b08a43cc65a77f5708ddaa7111fa92f4b6b52598fe249.

### Exact deterministic transform (reproduces identically)
1. Replace (3x): `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);` -> `background: currentColor;`
2. Replace (8x): `fill:#667eea` -> `fill:#888`  (mermaid node style lines)
3. Replace (1x): `primaryBorderColor: '#667eea'` -> `primaryBorderColor: '#888'`  (mermaid init theme)
4. Wrap the 8 unwrapped `width:100%` tables: insert `<div class="table-wrap">\n` before each `<table ...width:100%...>` and `\n</div>` after its `</table>`. Skip the 1 already wrapped (the 0.85rem font-size table). Apply END->START to keep indices valid. No nesting.

### Post-modernize invariant (VERIFIED, target for the live write)
| Metric | Value |
|---|---|
| bytes | 282,724 |
| chars | 281,895 |
| #667eea / #764ba2 | 0 / 0 |
| em-dash U+2014 | 34 (preserved, equal to baseline) |
| U+00B7 / &#183; | 0 / 0 |
| color="#222" | 0 |
| table-wrap / &lt;table&gt; | 9 / 9 (all wrapped, 0 nested) |
| mermaid import / class=mermaid divs | 1 / 10 (KEPT) |
| figure/figcaption/img/svg | 0/0/0/0 (unchanged - figures come later) |

After live write: get_file_info reports 282,724 B (CONFIRMED). This is now the new pre-figure baseline.

### NEW PRE-FIGURE BASELINE (post-Phase-0, live, CONFIRMED 2026-06-27)
| Metric | Baseline |
|---|---|
| bytes | 282,724 |
| chars | 281,895 |
| md5 | 38c335d5b7f12de5fd8afebdf356b4f0 |
| sha256 | a67c50e9fa37edda790b08a43cc65a77f5708ddaa7111fa92f4b6b52598fe249 |
| figure / figcaption / img / svg | 0 / 0 / 0 / 0 |
| em-dash U+2014 | 34 |
| literal U+00B7 / &#183; | 0 / 0 |
| color="#222" | 0 |
| #667eea / #764ba2 | 0 / 0 |
| table-wrap / &lt;table&gt; | 9 / 9 (0 nested) |
| mermaid import / class=mermaid divs | 1 / 10 |

## PRODUCTION LOG

### SVG batch (inline diagrams) - COMPLETE 2026-06-27
4 inline SVGs {1, 5, 10, 34} built per IMAGE_STYLE_GUIDE v6, cairosvg pixel-verified light+dark Claude-side, written to `images/` via `Filesystem:write_file`, each confirmed on disk via `get_file_info`. No Blender. All checks PASS: 0 em-dashes (U+2014), `color="#222"` fallback present (to be stripped at INTEGRATION inlining), `currentColor` used throughout, `role="img"` + `aria-labelledby` present, separators via `&#183;` only, 0 forbidden colors (#667eea / #764ba2 / literal U+00B7). The `&#8722;` (U+2212 minus) used for Smoke gravity in #34 is a minus sign, not an em-dash.

| # | file | id-prefix | viewBox | bytes (disk) | verify |
|---|---|---|---|---|---|
| 1 | lesson_32_01_particle_lifecycle_diagram.svg | `pl` | 0 0 800 460 | 4,884 | light+dark PASS |
| 5 | lesson_32_05_velocity_direction_diagram.svg | `vd` | 0 0 800 460 | 4,039 | light+dark PASS |
| 10 | lesson_32_10_collision_behavior_diagram.svg | `cb` | 0 0 800 460 | 5,342 | light+dark PASS |
| 34 | lesson_32_34_settings_quick_reference.svg | `sqr` | 0 0 800 680 (dense) | 5,892 | light+dark PASS |

**Inline-SVG id-prefix registry (L32):** `pl` (#1 Particle Lifecycle) &#183; `vd` (#5 Velocity Direction) &#183; `cb` (#10 Collision Behaviour) &#183; `sqr` (#34 Settings Quick Reference). All collision-safe, no overlap with each other or with the `c32` PNG-overlay namespace.

Build notes for INTEGRATION:
- #1 / #5 / #10 are default 800x460; #34 is the 800x680 dense variant (table needs the height). Footer tip on #34 sits at the dense y=641/663 positions.
- All four use the compact CSS-class idiom (per-file class prefix in `<style>`) matching the L29 inline-SVG precedent, plus `color="#222"` on the root for `<img>` fallback. STRIP `color="#222"` when inlining (style-guide inlining checklist rule 1).
- #5 uses three `<marker>` arrowheads with per-file ids (`vd-h-purple` / `vd-h-green` / `vd-h-blue`); preserve verbatim on inline.
- Outcome/axis color mapping: #10 KILL=#E63946, STICK=#F5C242, BOUNCE=#4ADE80, SLIDE=#FF6B00, root=#4A9EFF. #5 Normal=#B47EE8, Tangent=#4ADE80, Object=#4A9EFF. #34 effect rails Rain=#4A9EFF, Snow=#4ADE80, Sparks=#F5C242, Smoke=#B47EE8, Explosion=#E63946.
- #34 table data (from req-doc prompt 34): Rain 3000/0.0/1.0/Wind; Snow 2000/0.0/0.3/Turbulence; Sparks 500/10/0.5/None; Smoke 1000/1.0/&#8722;0.5/Turbulence; Explosion 500/20/1.5/None.

Remaining PRODUCTION: 20 PNG via BlenderMCP (namespace c32) in PNG sub-chats (>=5 -> split). Then INTEGRATION (own chat, byte-ladder from 282,724).

### PNG batch A (UI-chrome, script-reachable) - PARTIAL 2026-06-27

**Slice attempted:** UI-chrome cluster {2, 4, 9, 13, 14, 17, 31} (grouped by shared docked-panel / node-editor capture path; none color-dependent, so AgX untouched - no Standard switch, no world dim).

**Mid-build blocker (LOCKED finding):** Blender exposes NO scriptable way to expand Properties **subpanels**. Confirmed: subpanel expand state is not an RNA property (checked `bpy.types.PARTICLE_PT_*`, Properties space `show_*` flags - none toggle subpanel collapse), and BlenderMCP has no click-injection (only `bpy.ops.screen.actionzone` exists, not drivable). Therefore any capture needing an expanded subpanel CANNOT be done by pure script and must route to the manual Win+Shift+S overlay-freeze path (LD20 / cross-sub-chat split).
  - **#9** (needs Physics subpanel expanded + object Physics>Collision) -> MANUAL
  - **#13** (needs Render subpanel expanded, Render As: Object) -> MANUAL
  - **#14** (needs Render subpanel expanded + Outliner) -> MANUAL
  - **#31** (needs Viewport Display subpanel expanded) -> MANUAL

**COMPLETE this sub-chat (3 PNG, on disk + get_file_info verified):**

| # | file | px | bytes | scene/capture notes |
|---|---|---|---|---|
| 2 | lesson_32_02_interface_overview.png | 1920x749 | 67,543 | Maximized Properties / PARTICLES tab. Tab-icon column (particle tab active), ParticleSystem list with +/- add buttons, "Rain" name field, Emitter/Hair toggle, Emission expanded (Number 1000, Seed, Frame Start 1, End 200, Lifetime 50), section headers Source/Cache/Velocity/Rotation/Physics below. Top maximize banner cropped. |
| 4 | lesson_32_04_properties_panel_layout.png | 1920x987 | 88,634 | Same maximized Properties frame, full-height: complete section roster Emission->Source->Cache->Velocity->Rotation->Physics->Render->Viewport Display->Children->Field Weights->Force Field Settings->Vertex Groups. Bottom version strip + top banner cropped. |
| 17 | lesson_32_17_particle_info_node_setup.png | 1700x475 | 91,769 | Maximized Shader Node Editor (ShaderNodeTree/OBJECT), view_all framed. Particle Info (Age out) -> Color Ramp (black-white-black gradient, Color out) -> Principled BSDF (Alpha in) -> Material Output (Surface). Full cluster, no clipping (re-cropped after first two crops clipped Material Output). |

**Size note (FLAG for Ray):** all 3 are 67-92 KB, BELOW the 200-800 KB band. This is expected for flat UI-chrome PNGs (lossless PNG of mostly-flat panels compresses small); forcing into band would require upscaling, which degrades. Recommend a UI-chrome carve-out in the band rule. NOT resized.

**Capture recipe used (reusable for remaining UI-chrome):** select Cube (active) -> switch right IMAGE_EDITOR area to PROPERTIES / set `space.context='PARTICLES'` (or VIEW_3D area -> NODE_EDITOR `tree_type='ShaderNodeTree'` `shader_type='OBJECT'` for shader) -> maximize that area via `screen.screen_full_area()` under temp_override (ISOLATED call, LD18 stall fix) -> (node editor: `node.view_all()` under WINDOW-region temp_override, isolated) -> `screen.screenshot` to Windows tempdir -> shutil.copyfile to WSL images\ -> bridge-side PIL crop in place to deliverable -> Claude-side view-verify -> get_file_info. Screenshot is 1:1 (1920x1046, no DPI scaling). Maximized Properties area = 1920x976; banner/version-strip trimmed in crop.

**Temp files retained on disk for reference (delete at INTEGRATION or manual-cluster close):** `_temp_l32_fullwin.png`, `_temp_l32_02_raw.png`, `_temp_l32_17_raw.png` in images\.

**Remaining PNG after batch A:** render/geometry set {3, 6, 7, 8, 11, 15, 16, 19, 20, 22, 23, 27, 28} (13) + manual subpanel-expansion set {9, 13, 14, 31} (4) = 17 PNG still to build. The render/geometry set is color-dependent for several (orange/white/cyan particles carry the message): apply the LD17 Standard-view-transform recipe + RESTORE AgX at that chat's close.

### PNG batch B (manual subpanel-expansion set) - COMPLETE 2026-06-27

**Slice:** manual subpanel set {9, 13, 14, 31} = 4 PNG. These are the captures the batch-A blocker reassigned off the scriptable path (Properties subpanel expansion is not RNA-toggleable). All routed to the manual Win+Shift+S overlay-freeze path (LD16 / LD20): Claude pre-set the exact Blender state (object, tab, dropdowns) before each, Ray expanded the subpanel by hand and snipped direct to images\, Claude get_file_info + view-verified each.

**Blender-state decision:** KEPT batch-A staging as-is (NO reset to pristine). The staged scene (Rain psys on Cube, Ground+Collision, Debris_Collection x5, Raindrop, ParticleAge material) already carried everything all four captures consume, so a pristine reset would only have forced re-staging the identical scene. None color-dependent -> AgX UNTOUCHED (no Standard switch, no world dim, no restore). Reset belongs to the slice-(A) color-dependent render chat, not here.

**Layout prep (scriptable, done before manual snips):** restored normal Layout from the batch-A maximized NODE_EDITOR via `screen.back_to_previous()`; widened the right column (Properties + stacked Outliner) from native 337px to 650px via `screen.area_move` for subpanel-text legibility parity.

**COMPLETE this sub-chat (4 PNG, on disk + get_file_info + view-verified):**

| # | file | bytes | scene/capture notes |
|---|---|---|---|
| 31 | lesson_32_31_viewport_display.png | 122,753 | Properties/PARTICLES, Rain psys. Viewport Display subpanel expanded: Display As Circle, Color Material, Amount 50%, Size 0.1m, Show Emitter. Siblings collapsed. |
| 13 | lesson_32_13_render_as_object.png | 130,149 | Render subpanel expanded, Render As: Object, Scale 0.050, Object sub-section -> Instance Object: Raindrop + Global Coords/Object Rotation/Object Scale. |
| 14 | lesson_32_14_render_as_collection.png | 208,151 | TWO-area tall snip: Outliner (top) shows Debris_Collection expanded with all 5 objs (Bit/Chunk/Rock1/Rock2/Shard) + Render subpanel (below) Render As: Collection -> Instance Collection: Debris_Collection. (Debris_Collection was scene-linked for this shot, then UNLINKED at close - see restore.) |
| 9 | lesson_32_09_collision_physics.png | 151,682 | Ground active, Physics tab, Collision enabled. Collision subpanel expanded: Field Absorption; Particle (Permeability/Stickiness/Kill/Damping/Friction, all default 0.0); Softbody & Cloth (Damping 0.1, Thickness 0.02/0.2, Friction 5.0, Single Sided). Defaults kept - not faked. |

**Size note:** #31/#13/#9 are 122-151 KB (UI-chrome, below the 200-800 band - same carve-out flag as batch A's #2/#4/#17). #14 is 208 KB (in-band, because it is a taller two-area Outliner+Properties capture). No resize.

**Restore at batch B close (scene returned to batch-A staging):**
- Debris_Collection UNLINKED from scene master collection (it was linked only for the #14 Outliner shot); datablock + 5 objects intact as the reusable particle instance source.
- psys render_type reset COLLECTION -> HALO (Blender default); instance_object (Raindrop) + instance_collection (Debris_Collection) references KEPT for reuse.
- Selection/active restored to Cube; Properties tab back to PARTICLES.
- View transform AgX / look None / EEVEE confirmed UNTOUCHED end-to-end (UI-chrome cluster).
- Right-column width left at 650px (cosmetic; harmless for slice (A)).

**PNG progress after batch B:** 7 of 20 PNG done (batch A {2,4,17} + batch B {9,13,14,31}). REMAINING PNG (13): render/geometry set {3, 6, 7, 8, 11, 15, 16, 19, 20, 22, 23, 27, 28} - ALL in one slice (>=5 -> own sub-chat), color-dependent for several: RESET to TRUE-PRISTINE first (current scene is staged, not pristine), then LD17 Standard view-transform recipe + RESTORE AgX at close.

**Figure tally after batch B:** inline SVG 4/4 {1,5,10,34} + PNG 7/20 = 11 of 24 figures on disk. 13 PNG remaining, then INTEGRATION.

**Blender state at batch A close:** NOT TRUE-PRISTINE. Additive staging persists: particle system "Rain" (ParticleSystem mod) on Cube; Raindrop ico-sphere; Debris_Collection (5 objs: Debris_Rock1/Rock2/Chunk/Shard/Bit); Ground plane (-3 Z) with Collision modifier; ParticleAge material on Cube (Particle Info->ColorRamp->Principled). VIEW_3D area was switched to NODE_EDITOR and MAXIMIZED (fullscreen) - restore via `screen.back_to_previous()` if needed. View transform AgX UNTOUCHED (all UI-chrome). Next chat: either keep staging for the manual subpanel cluster (#9/13/14/31 reuse Rain psys + Ground collision + Debris_Collection + Raindrop directly) OR reset to pristine before the color-dependent render set.

### PNG batch C (render/geometry set) - COMPLETE 2026-06-27

**Slice:** render/geometry set {3, 6, 7, 8, 11, 15, 16, 19, 20, 22, 23, 27, 28} = 13 PNG. Of these, 10 are color-dependent renders (LD17 F12 recipe), 3 are viewport/UI-chrome captures (#19 rain viewport, #27 collision viewport, #20 shader-editor screenshot - opengl/screenshot path, NOT color-dependent).

**Blender-state decision (EXECUTED):** RESET to TRUE-PRISTINE first (current scene was staged). Verified pristine: Camera/Cube/Light only, 1 mesh, 0 materials/collections/particles/node_groups, Cube 8 verts 0 mods 0 psys, world 0.88/AgX/None, EEVEE. Then applied color-dependent staging per LD17: view_transform=Standard, look=None, world 0.05 str 1.0, EEVEE, PNG/RGBA; default Cube removed (render scenes build own geometry). Relay path verified: Win tempdir (C:\Users\pract\AppData\Local\Temp) writable, WSL images writable, PIL 12.2.0 bridge-side.

**COMPLETE this sub-chat (2 PNG, on disk + get_file_info + view-verified):**

| # | file | px | bytes | scene/capture notes |
|---|---|---|---|---|
| 3 | lesson_32_03_emission_source_comparison.png | 1924x640 | 335,333 | 3-panel composite (Faces/Volume/Verts). Cyan WIREFRAME CAGE emitter (transparent-face cube + separate Wireframe-modifier cage, L09Cyan emissive 1.4) so Volume interior cloud reads; orange dots (L09Orange ico-sphere r0.05, emis 1.2) render_type=OBJECT. 350 particles, gravity 0, captured f60 static. Faces=surface shell, Volume=filled interior, Verts=8 corners. Orange 2px dividers. NO baked text (c3 overlay at INTEGRATION). |
| 6 | lesson_32_06_gravity_effects_comparison.png | 1202x1202 | 329,491 | 2x2 grid (TL g1.0 fall, TR g0.0 float, BL g-1.0 rise, BR g2.0 fast-fall). Plane emitter, OBJECT-render orange dots, continuous emit f1-60, captured f50. PER-PANEL emitter Z (g>=0 plane high Z+2.6, g=0 Z0, g<0 plane low Z-2.6) so each trajectory fills frame. Orange dividers. NO baked text (c6 overlay + per-panel value labels at INTEGRATION). |

**LOCKED FINDINGS (carry forward - apply to remaining render figures):**
1. **PATH render_type produces EMPTY output** for Newtonian emitter particles here (rendered blank, identical 179,835 B every panel - the sub-200 band rule correctly flagged it). USE render_type='OBJECT' with small emissive ico-sphere dots for ALL motion/stream/distribution figures. This is the reliable path.
2. **Volume/interior emission needs a transparent or wireframe-cage emitter** - opaque faces occlude the interior cloud (first #3 Volume render showed a near-solid box with sparse visible dots = wrong read). Reusable pattern: transparent-alpha emitter mesh (blend_method BLEND, Alpha 0) + separate cube with Wireframe modifier (thickness 0.03) + L09Cyan emissive. Apply to any "inside the volume" figure.
3. **Sparse dark-world renders legitimately land 187-200 KB** (just under the 200 render floor). These are content-verified real (not the PATH fault), just genuinely few small dots on a dark field. Same carve-out judgment as batch A/B UI-chrome: do NOT upscale (style guide forbids). #6 source panels were 187-200 KB; composites land in-band (329-335 KB) because they tile 3-4 panels.
4. **Blender 5.x particle attr names:** `display_method` enum = NONE/RENDER/DOT/CIRC/CROSS/AXIS (no PATH). Path-step props are `render_step` / `display_step` (not `draw_step`). render_type DOES accept 'PATH' but it renders empty here - avoid.

**Reusable helper idioms (inline per execute_blender_code call - namespaces don't persist):** clear_demo() (remove all non-CAMERA/LIGHT); mat_emit(name,rgb,strength) (Emission->Output); mat_grey(name,rgb,rough) (Principled). L09Orange (1.0,0.30,0.0)/emis 1.2 and L09Cyan (0.16,0.50,1.0)/emis 1.4 materials ALREADY BUILT and live in scene - reuse by name.

**Temp files retained on disk (delete at INTEGRATION):** `_temp_l32_03_faces.png`, `_temp_l32_03_volume.png`, `_temp_l32_03_verts.png`, `_temp_l32_06_g10.png`, `_temp_l32_06_g00.png`, `_temp_l32_06_gneg10.png`, `_temp_l32_06_g20.png` in images\. (Plus batch-A retained `_temp_l32_fullwin.png`, `_temp_l32_02_raw.png`, `_temp_l32_17_raw.png`.)

**PNG progress after batch C (partial):** 17 of 20 PNG done (batch A {2,4,17} + batch B {9,13,14,31} + batch C {3,6,7,8,11,15,16,22,23,28}). REMAINING PNG (3): {19, 20, 27} - ALL viewport/UI-chrome (need AgX + world 0.88 + viewport shading). **ALL 8 COLOR-DEPENDENT RENDERS COMPLETE.**

#### #28 wind-on-rain 2-panel - COMPLETE 2026-06-27

`lesson_32_28_wind_on_rain.png` 1202x600, 230,528 B (in-band). L=**no wind** (rain falling straight, uniform vertical fill) &#183; R=**with wind** (WIND str 5.0 rotated +X horizontal, emitter shifted x-2.0 so blown drops sweep across full frame at a clear diagonal slant). RainCyan emissive (0.45,0.72,1.0)/1.6, 600 drops RAND from a high plane (z4.0), gravity 1.0, continuous emit. **Wind tuning:** str 12 blew drops out-of-frame (x->17); str 5.0 + left-shifted emitter gives an in-frame slant. Front cam. Orange 2px divider, NO baked text (c28 overlay at INTEGRATION). RainEmit/RainDot/wind removed; RainCyan material kept.

#### #22 snow+turbulence beauty - COMPLETE 2026-06-27

`lesson_32_22_snow_turbulence.png` 600x600, 217,489 B (in-band). Single beauty render: cool-white snow (SnowWhite emissive 0.85,0.93,1.0 / str 1.5, ico r0.04) falling from a wide high plane (size 7, z4.5), 700 particles RAND, mass 0.3, scene.gravity -2.0 (slow fall), TURBULENCE str 1.5 size 2.0 for natural sway, size_random 0.6 for depth variation. Front cam. scene.gravity RESTORED to -9.81 after. SnowEmit/SnowDot/turbulence removed; SnowWhite material kept (harmless).

#### #23 sparks burst beauty - COMPLETE 2026-06-27

`lesson_32_23_sparks_burst.png` 600x600, 227,606 B (in-band). Single beauty render: hot-orange spark burst (SparkHot emissive 1.0,0.32,0.02 / str 1.8, ico r0.035) from a point emitter (ico r0.15, z-1.0), 500 particles, short burst (frame_end 8), normal 4.5 + factor_random 2.5 explosive velocity, mass 0.6, gravity 1.0 arcing. Captured **f14** (peak in-frame spread - frame-scanned 14/16/18/20/22, f14 kept ~229 in-frame; later frames the burst overshoots out of view). **Color tuning note:** hot sparks need green channel LOW (0.32) - at green 0.45-0.6 the emissive clips to flat yellow under Standard; pull toward orange-red. SparkEmit/SparkDot removed; SparkHot material kept; camera restored to canonical front (0,-9,1.2 / 82deg).

#### #16 path-rendering beauty - COMPLETE 2026-06-27

`lesson_32_16_path_rendering.png` 600x600, 381,040 B (in-band). Single beauty render: **hair-PATH starburst** - radial emissive-orange strands bursting from an ico-sphere (subdiv 2, r0.8). settings.type='HAIR', count 200, hair_length 2.5, render_type='PATH', emissive L09Orange strands. Ray-approved starburst (over directional motion-trail). **LOCKED: HAIR + render_type='PATH' DOES render visible strands in EEVEE F12** (unlike Newtonian PATH which is blank) - this is the reliable way to get true particle-path/trail renders. PathEmit removed after; scene back to Camera/FFDot/Light.

#### #15 render-types 4-panel - COMPLETE 2026-06-27

`lesson_32_15_render_types.png` 2406x600, 245,667 B (in-band). L->R: **None** (render_type='NONE', emitter mesh visible via show_instancer_for_render=True + GreyPlane, no particles) &#183; **Halo** (EEVEE stand-in: small emissive OBJECT dots, particle_size 0.5) &#183; **Object** (instanced FFDot sphere, particle_size 2.5) &#183; **Collection** (mixed cube/cone/cylinder instances). Identical 45-particle JIT layout across all 4 (only render_type changes = clean teaching control). CAMERA-FACING vertical emitter (plane rot 90deg X) so the field fills frame (a flat XY plane reads as a thin edge-on band under the 82deg front cam). Orange 2px dividers, NO baked text (c15 overlay at INTEGRATION). Figure-specific RTEmit + RT_Instances removed after; scene back to Camera/FFDot/Light.

**LOCKED (render-type figures):**
1. **HALO render_type renders BLANK in EEVEE F12** (legacy Cycles-era mode, no EEVEE path) - same 176 KB blank-signal as PATH. Use small emissive OBJECT dots as the faithful EEVEE Halo stand-in (Halo = glowing points); note the stand-in in figcaption at INTEGRATION.
2. **COLLECTION instancing requires the instance_collection to be POPULATED** - `clear_demo`/`clear_emitters` that strips non-protected objects will empty the instance collection and silently produce 0 instances (176 KB blank). Protect the instance-source object names in the clear filter.
3. **Scene-linked instance-source objects RENDER DIRECTLY at their own location** (stray shape at origin in None/Halo/Object panels). Fix: `layer_collection.exclude=True` for the instance collection - particle COLLECTION instancing reads the collection DATABLOCK, not the view layer, so instancing still works (verified 45 instances) while the source objects stop rendering directly.
4. render_type enum (5.x): NONE / HALO / LINE / PATH / OBJECT / COLLECTION. Verify instance generation via `sum(1 for i in depsgraph.object_instances if i.is_instance)` before rendering.

#### #8 turbulence 2-panel - COMPLETE 2026-06-27

`lesson_32_08_turbulence_comparison.png` 1202x600, 228,754 B (in-band). L=**low turbulence** (TURBULENCE str 1.2, size 1.5: tight wandering vertical column) &#183; R=**high turbulence** (str 9.0, size 0.6: coherent base fanning into wide chaotic plume). Same upward stream both panels (plane emitter z-3, normal 3.0, continuous emit). Front cam. Orange 2px divider, NO baked text (c8 overlay at INTEGRATION).

#### #11 distribution 3-panel - COMPLETE 2026-06-27

`lesson_32_11_distribution_modes.png` 1804x600, 343,574 B (in-band). L->R: **Jittered** (distribution='JIT', jitter_factor 0.4, even_distribution, 256 ct: uniform with faint underlying order) &#183; **Random** ('RAND', 300 ct: clumps + voids) &#183; **Grid** ('GRID', grid_resolution 14 -> 196 ct: perfect lattice). **TOP-DOWN camera** (loc (0,0,7), rot 0) so the 2D surface pattern reads; static capture (frame_end=1, gravity 0, no field, f1->f2 settle); front cam RESTORED after. Grid anchors the set; Jittered-vs-Random contrast carried by Random's visible clumping. Orange 2px dividers, NO baked text (c11 overlay at INTEGRATION).

**LOCKED (distribution figures):** `settings.distribution` enum = JIT / RAND / GRID; GRID count is derived from `grid_resolution^2` (capped by face area), NOT `count`; `jitter_factor` (0-1) + `use_even_distribution` tune JIT regularity; distribution is an EMISSION-POSITION property so capture STATIC (no advection, no field) - top-down camera required to read the 2D pattern.

#### #7 force-field types (5-panel) - COMPLETE 2026-06-27

`lesson_32_07_force_field_types.png` 3008x600, 427,637 B (in-band). 5 panels L->R: **Force** (radial burst from center point) &#183; **Wind** (vertical stream) &#183; **Vortex** (top-down spiral, eye void) &#183; **Drag** (horizontal decelerating pile-up) &#183; **Magnetic** (S-curve charged-particle deflection). Orange `#FF6B00` 2px dividers, NO baked text (c7 overlay + per-panel type labels at INTEGRATION). 5th panel = **Magnetic** (Ray-approved, chosen over Turbulence to avoid colliding with #8). Each panel reads distinctly at thumbnail scale (marginal-read rule PASS). Per-panel temps removed after composite verified.

**LOCKED MOTION-RENDER PATTERN (apply to all remaining stream/motion figures #8/#11/#16/#22/#23/#28):**
1. **`frame_set` jump alone does NOT integrate NEWTON particles** - they stay frozen at the emitter. MUST step the cache forward continuously: `sc.frame_set(1); for f in range(1,LAST+1): sc.frame_set(f)`. Verify advection via evaluated depsgraph `particle.location` before rendering.
2. **Continuous emit (frame_start=1, frame_end=50, lifetime~70), normal_factor LOW (0.0-0.6), let the FIELD do the work.** A burst (frame_end=1) + high normal_factor pre-spreads particles into a uniform clump with no density gradient; continuous emit gives the dense-at-emitter -> sparse-downstream gradient that reads as flow.
3. **Camera angle is per-field-type.** Rotational fields (Vortex) need a TOP-DOWN camera (`loc (0,0,9)`, `rot (0,0,0)`) or the swirl collapses edge-on into a flat band; streams/bursts use the front cam (`loc (0,-9,1.2)`, `rot (82deg,0,0)`). Save/restore the front-cam transform around any per-panel reframe.
4. **Distinct-signature craft:** Wind (vertical carry) and Drag (deceleration) both default to vertical streams that read identically. Fix: make Drag a HORIZONTAL launch (`emitter rot 90deg Y`, normal_factor ~14, weak DRAG strength ~0.4 + linear_drag 0.35 / quadratic_drag 0.12) so it's sparse-left -> dense-right pile-up, orthogonal to Wind.
5. **Field-builder facts:** `psys.seed` is on the SYSTEM not settings; `s.effector_weights.gravity=0.0` to isolate a single field's effect; DRAG exposes `linear_drag` / `quadratic_drag`; `bpy.ops.object.effector_add(type=...)` then set `obj.field.strength` / `.type`-specific attrs. Valid field types used: FORCE, WIND, VORTEX, DRAG, MAGNET.
6. Working strengths on the 0.05 world / Standard recipe: FORCE 3.0 (volume emitter, radial), WIND 3.0, VORTEX 6.0 (ring emitter r2.2 VERT-emit), DRAG 0.4, MAGNET 5.0. Source panels land 178-245 KB (sparse dark field, content-verified, do NOT upscale); 5-panel composite 428 KB.
- Color-dependent renders (8): {7 force fields 5-panel, 8 turbulence 2-panel, 11 distribution 3-panel, 15 render-types 4-panel, 16 path-rendering beauty, 22 snow+turbulence beauty, 23 sparks burst beauty, 28 wind-on-rain 2-panel}.
- Viewport/UI-chrome (3, NOT color-dependent, do under AgX/normal world): {19 rain viewport screenshot, 27 rain-collision viewport screenshot, 20 rain-material shader-editor screenshot}.

**Figure tally after batch C (COMPLETE):** inline SVG 4/4 + PNG 20/20 = 24 of 24 figures on disk. PRODUCTION COMPLETE. Next: INTEGRATION (own chat).

#### #19 / #27 / #20 viewport-UI-chrome slice - COMPLETE 2026-06-27

Final 3 PNG, all viewport/UI-chrome (screenshot/opengl path, NOT F12 color-dep). Built under AgX + world 0.88 str 1.0, on a freshly-rebuilt staged Rain scene (batch-A/B staging was on the prior Blender state and gone). Rebuilt: RainEmitter plane (size 8, z4.0) with "Rain" Newton psys (count 600-800, RAND, lifetime 80-120, normal 0, gravity -9.81) + Ground plane (size 12, z-3.0). Cache STEPPED forward (sc.frame_set 1..N, not jumped) per LOCKED motion-render pattern.

| # | file | px | bytes | scene/capture notes |
|---|---|---|---|---|
| 19 | lesson_32_19_rain_viewport.png | 1452x600 (saved 1452x901) | 512,518 | Rain falling column, front ORTHO, MATERIAL-shaded VIEW_3D, overlays ON (floor grid + red X-axis). Orange-selected emitter plane (top) + ground plane (lower), dense white DOT-display particles falling through. Captured via `render.opengl(view_context=True)` to Win tempdir -> PIL relay to WSL (screen.screenshot returned BLANK on the freshly-converted VIEW_3D area - opengl is the reliable content path). view_location z-3.0, view_distance 16. |
| 27 | lesson_32_27_rain_collision_viewport.png | 1452x901 | 515,483 | Same rain scene + Collision modifier on Ground (damping_factor 0.4, friction_factor 0.5, use_particle_kill False). Particles visibly PILE into a dense accumulation band above the orange-selected collider plane (sparse falling drops up top vs dense collected layer above ground = collision read). Cache re-stepped 1..70 after adding collider. render.opengl path, view_location z-1.0 dist 14. |
| 20 | lesson_32_20_rain_material_shader.png | 1920x936 | 114,744 | Maximized Shader Node Editor (ShaderNodeTree/OBJECT), RainEmitter active. RainNodeMat tree: Particle Info (Age + Lifetime outputs) -> Divide (Math, Age/Lifetime) -> Color Ramp (cyan 0.30,0.70,1.0 -> deep-blue 0.02,0.10,0.45) -> Principled BSDF (Base Color) -> Material Output. Breadcrumb RainEmitter > Plane.031 > RainNodeMat visible. node.view_all framed; isolated maximize/screenshot/restore per L18 stall-fix; PIL crop to node canvas, top header strip trimmed. In UI-chrome band. |

**LOCKED (viewport/opengl figures):** `bpy.ops.screen.screenshot` returns a BLANK dark capture on a VIEW_3D area freshly converted from another editor type (the area's draw buffer is not populated; wm.redraw_timer DRAW_WIN_SWAP does not fix it). Use `bpy.ops.render.opengl(write_still=True, view_context=True)` under a VIEW_3D temp_override instead - it renders actual viewport content (with overlays when show_overlays=True) to a file directly, no screenshot-buffer dependency. opengl viewport renders of a dense particle field + grid legitimately land 500-520 KB (content-justified, NOT flat-panel upscaling - the 250 KB UI-chrome flag does not apply to a viewport render with full grid + hundreds of particle dots).

**FINAL RESTORE at slice close (EXECUTED + verified):** NODE_EDITOR area switched back to VIEW_3D (SOLID shading, toolbar on); view_transform=AgX look=None; world 0.88 str 1.0; L09Orange EMISSION (1.0,0.42,0.0) str 5.0; L09Cyan EMISSION (0.29,0.62,1.0) str 5.0; gravity -9.81; camera canonical (0,-9,1.2 / 82deg); render res reset 600x600. VERIFIED via read-back. **Cosmetic leftovers (harmless, no figures depend on them):** RainEmitter + Ground objects + RainNodeMat material persist in scene; RainCyan/SnowWhite/SparkHot beauty mats persist. Purge optional at INTEGRATION (separate chat, no rendering).

**Temp files retained on disk to delete at INTEGRATION (images\ only; the _l32_19/27_ogl.png + _l32_*_fullwin.png live in the Windows tempdir, not images\, so they are NOT in the images\ delete list):** the batch-A 3 (`_temp_l32_fullwin.png`, `_temp_l32_02_raw.png`, `_temp_l32_17_raw.png`) + batch-C 7 (`_temp_l32_03_faces.png`, `_temp_l32_03_volume.png`, `_temp_l32_03_verts.png`, `_temp_l32_06_g10.png`, `_temp_l32_06_g00.png`, `_temp_l32_06_gneg10.png`, `_temp_l32_06_g20.png`) = 10 temps in images\.

**Blender state at batch C COMPLETE (RESTORED, 2026-06-27):** AgX/None, world 0.88 str 1.0, EEVEE, res 600x600, gravity -9.81, camera canonical front. Objects: Camera, Light, RainEmitter, Ground (last two are cosmetic leftovers). L09Orange/L09Cyan restored to base values. PRODUCTION fully done - all 24 figures on disk.

---

## Session Log
- 2026-06-27: L32 opened. get_file_info + UTF-8 baseline captured. Old-gen verdict (gradients + live mermaid, 0 figures). Requirements doc read; 36 -> BUILD 24 / DEFER 12 triage set. Progress doc created. session.md head already = L32 ACTIVE/NEXT.
- 2026-06-27: Phase 0 MODERNIZE WRITTEN LIVE. Confirmed live pristine 282,606 B; regenerated transform on fresh copy; wrote via chunked edit_file (12 small + 16 anchor edits) after single-blob write_file failed in prior chat. Live verified: 282,724 B, md5 38c335d5b7f12de5fd8afebdf356b4f0, all 16 invariants PASS. Re-baselined as new pre-figure baseline. Next: PRODUCTION 24 figs (namespace c32).
- 2026-06-27: SVG batch COMPLETE. 4 inline SVGs {1,5,10,34} built per v6, cairosvg-verified light+dark, written to images/ via write_file, get_file_info confirmed (4884/4039/5342/5892 B). id-prefixes pl/vd/cb/sqr registered. Next: PNG sub-chats (20 PNG, namespace c32, >=5 -> split), then INTEGRATION.
- 2026-06-27: PNG batch A (UI-chrome) PARTIAL. Verified Blender TRUE-PRISTINE first (AgX/None, EEVEE, world 0.88, default 8-vert Cube, 0 mods/psys). Staged additive scene (Rain psys on Cube, Raindrop, Debris_Collection x5, Ground+Collision, ParticleAge node material). Built 3 PNG: #2 interface overview (67,543 B), #4 properties panel layout (88,634 B), #17 Particle Info node setup (91,769 B) - all maximized-area captures, 1:1 1920px, get_file_info verified. BLOCKER: subpanel expansion not scriptable (no RNA flag, no click-injection) -> #9/#13/#14/#31 reassigned to MANUAL Win+Shift+S sub-chat. Remaining PNG: render/geometry {3,6,7,8,11,15,16,19,20,22,23,27,28}=13 + manual {9,13,14,31}=4. Blender left staged (NOT pristine); AgX untouched. 3 _temp raw files retained in images/.
- 2026-06-27: PNG batch B (manual subpanel set) COMPLETE. Pre-flight verified batch-A staging intact (Rain psys, Ground Collision, Debris_Collection x5, Raindrop, ParticleAge, AgX untouched). KEPT staging (no pristine reset - scene already carried all 4 captures). Restored normal Layout via screen.back_to_previous(); widened right column 337->650px. Built 4 PNG via manual Win+Shift+S (Claude pre-set state, Ray snipped + saved direct to images\, Claude view-verified each): #31 viewport_display (122,753 B), #13 render_as_object (130,149 B), #14 render_as_collection (208,151 B, 2-area Outliner+Properties), #9 collision_physics (151,682 B). Restore at close: unlinked Debris_Collection from scene master (linked only for #14), render_type COLLECTION->HALO (instance refs kept), reselected Cube, Properties->PARTICLES, AgX confirmed untouched. PNG now 7/20; figures 11/24. NEXT: render/geometry set {3,6,7,8,11,15,16,19,20,22,23,27,28}=13 PNG (own sub-chat, RESET to pristine first, LD17 Standard recipe + restore AgX), then INTEGRATION.
- 2026-06-27: PNG batch C (render/geometry set) PARTIAL. RESET to TRUE-PRISTINE first (verified), applied LD17 color-dependent staging (Standard/None, world 0.05, EEVEE). Relay path verified (Win tempdir->PIL 12.2.0->WSL). Built 2 PNG: #3 emission_source_comparison (1924x640, 335,333 B, 3-panel Faces/Volume/Verts with cyan wireframe-cage emitter) + #6 gravity_effects_comparison (1202x1202, 329,491 B, 2x2 grid fall/float/rise/fast-fall, per-panel emitter Z). LOCKED FINDINGS: (1) PATH render_type renders EMPTY for Newtonian emitter particles - use render_type=OBJECT emissive dots; (2) Volume emission needs transparent/wireframe-cage emitter (opaque faces occlude interior); (3) sparse dark-world panels legitimately 187-200 KB (content-verified, do not upscale); (4) display_method has no PATH enum, path steps are render_step/display_step not draw_step. PNG now 9/20; figures 13/24. Blender LEFT in color-dependent staging (AgX NOT restored - intentional, 8 renders remain). NEXT: remaining 11 PNG {7,8,11,15,16,19,20,22,23,27,28} - 8 color-dep renders keep staging, then 3 viewport/UI-chrome (#19/27/20) under AgX, then RESTORE AgX/world 0.88 at final slice close; then INTEGRATION.
- 2026-06-27: PNG batch C render/geometry slice CONTINUED - all 8 color-dependent renders now COMPLETE (#3+#6 prior, +#7/#8/#11/#15/#16/#22/#23/#28 this slice). Kept color-dep staging (Standard/None, world 0.05, EEVEE) throughout; reused L09Orange/L09Cyan by name + FFDot orange instance object. Built: #7 force_field_types (5-panel Force/Wind/Vortex/Drag/Magnetic, 427,637 B, 5th=Magnetic per Ray), #8 turbulence_comparison (2-panel low/high, 228,754 B), #11 distribution_modes (3-panel Jit/Rand/Grid top-down, 343,574 B), #15 render_types (4-panel None/Halo/Object/Collection, 245,667 B, Halo=emissive-dot stand-in per Ray), #16 path_rendering (hair-PATH starburst beauty, 381,040 B, per Ray), #22 snow_turbulence (beauty, 217,489 B), #23 sparks_burst (beauty f14, 227,606 B), #28 wind_on_rain (2-panel, 230,528 B). All view-verified + get_file_info; per-panel temps removed after each composite. NEW LOCKED FINDINGS in batch-C section: motion-render pattern (frame_set must STEP forward to integrate NEWTON not jump; continuous emit + low normal + field; per-field-type camera; Wind-vs-Drag distinct-signature craft); distribution (JIT/RAND/GRID, grid_resolution^2 count, top-down static); render-type (HALO blank in EEVEE -> emissive-dot stand-in; COLLECTION needs populated coll + layer-exclude; verify is_instance); HAIR+PATH renders strands in EEVEE; sparks green<=0.32. Figures 21/24; PNG 17/20. Blender LEFT in color-dep staging, AgX NOT restored. NEXT: 3 viewport/UI-chrome {19,20,27} under AgX+world 0.88 (need rebuilt Rain staged scene), then FINAL RESTORE, then mark batch C COMPLETE (PNG 20/20, figures 24/24), then INTEGRATION (own chat).
- 2026-06-27: PNG batch C viewport/UI-chrome slice COMPLETE - final 3 PNG built, batch C CLOSED, PRODUCTION COMPLETE (24/24 figures). Verified live Blender matched pause #2 block; switched to AgX + world 0.88. Rebuilt staged Rain scene (RainEmitter plane + Newton "Rain" psys + Ground plane); cache stepped forward. Built: #19 rain_viewport (1452x901, 512,518 B, front-ortho MATERIAL viewport, falling DOT column), #27 rain_collision_viewport (1452x901, 515,483 B, +Ground Collision mod, particles pile above collider), #20 rain_material_shader (1920x936, 114,744 B, RainNodeMat Particle-Info->Divide->ColorRamp->Principled node tree, maximized shader editor). All view-verified + get_file_info. NEW LOCKED FINDING: screen.screenshot returns BLANK on a freshly-converted VIEW_3D area -> use render.opengl(view_context=True) for viewport content; opengl particle-field+grid renders legitimately 500-520 KB (content-justified, 250 KB UI-chrome flag N/A). FINAL RESTORE executed + verified: VIEW_3D layout, AgX/None, world 0.88/1.0, L09Orange (1.0,0.42,0.0)/5.0, L09Cyan (0.29,0.62,1.0)/5.0, gravity -9.81, camera canonical, res 600x600. Cosmetic leftovers: RainEmitter/Ground/RainNodeMat persist (harmless). 10 images\ temps flagged for INTEGRATION delete. NEXT: INTEGRATION (own chat, byte-ladder from 282,724).

## INTEGRATION LOG (own chat, started 2026-06-27)

**session.md head flipped to L32 INTEGRATION ACTIVE (committed 2026-06-27).**

### SVG batch INTEGRATION COMPLETE - 4/4 inline SVGs landed (2026-06-27)
All 4 inline SVGs {1,5,10,34} inlined per IMAGE_STYLE_GUIDE v8 checklist (stripped root `color="#222"`, re-indented to local card depth, collapsed multi-line attrs, pruned ASCII-divider comments / kept short structural comments, preserved every role/aria/title/desc/id + #5 markers vd-h-purple/green/blue verbatim). Each cairosvg pixel-verified light+dark Claude-side, then edit_file dryRun->commit->get_file_info, mermaid left intact at every anchor.

| # | id-prefix | placement anchor (section -> card) | indent (figure/contents) |
|---|---|---|---|
| 1 lifecycle | pl | what-are-particles -> Understanding Particles card, after lifecycle mermaid `</div>` | 20/24 |
| 5 velocity | vd (3 markers preserved) | particle-physics -> Velocity card, after velocity mermaid `</div>` | 20/24 |
| 10 collision | cb | particle-physics -> Collisions card, after collision mermaid `</div>` | 24/28 |
| 34 quick-ref | sqr (800x680 dense; `&#8722;` minus x2) | summary -> Effect Templates card, after the table-wrap `</div>` | 24/28 |

**Byte-ladder:** 282,724 (baseline) -> 289,219 (#1) -> 294,523 (#5) -> 301,735 (#10) -> **310,489 (#34)**.
**Invariants after #34 (UTF-8 python3, fresh Claude-side copy):** figure 4 / figcaption 4 / `</figure>` 4 / img 0 / svg 4 ; em-dash U+2014 34 (0 new) ; U+00B7 literal 0 ; `&#183;` 8 ; color="#222" 0 ; #667eea/#764ba2 0/0 ; `<table>` 9 / table-wrap 9 ; mermaid import 1 / class=mermaid divs 10 ; ids pl/vd/cb/sqr all present ; `&#8722;` 2.

### LOCKED placement map for the 20 PNG c32 overlays (topical fit, derived from live section/h3 map)
- **particle-basics -> The Particle Properties Panel:** #2 interface_overview, #4 properties_panel_layout
- **particle-basics -> Viewport Display Options:** #31 viewport_display
- **emission-settings -> Emission Source Types:** #3 emission_source_comparison
- **emission-settings -> Distribution Modes:** #11 distribution_modes
- **particle-physics -> Gravity and Field Weights:** #6 gravity_effects_comparison
- **particle-physics -> Force Fields:** #7 force_field_types (after force-field content); #8 turbulence_comparison (at/after the Turbulence callout)
- **particle-physics -> Collisions:** #9 collision_physics (after the two-step collision setup, BEFORE the #10 SVG decision-tree)
- **rendering-particles -> Render Types Overview:** #15 render_types (figcaption MUST note Halo = EEVEE emissive-dot stand-in)
- **rendering-particles -> Object Instancing:** #13 render_as_object
- **rendering-particles -> Collection Instancing:** #14 render_as_collection
- **rendering-particles -> Path Rendering:** #16 path_rendering (figcaption MUST note hair-PATH starburst stand-in)
- **rendering-particles -> Materials for Particles:** #17 particle_info_node_setup, #20 rain_material_shader
- **common-effects -> Rain Effect:** #19 rain_viewport
- **common-effects -> Snow Effect:** #22 snow_turbulence
- **common-effects -> Sparks and Embers:** #23 sparks_burst
- **project -> Part 3 Ground Collision:** #27 rain_collision_viewport
- **project -> Part 4 Wind Force:** #28 wind_on_rain

### PNG overlay build rules (carry into fresh chat)
- viewBox == on-disk PNG pixel box 1:1 (confirmed px: #19 1452x901, #27 1452x901, #20 1920x936; others read via get_file_info at build time).
- Wrapper div + overlay-svg pattern (LD10): relative inline-block container, img inline `display:block;max-width:100%;height:auto;margin:0`, overlay `position:absolute;inset:0;width:100%;height:100%;pointer-events:none` + `preserveAspectRatio="xMidYMid meet"`.
- Overlay ids namespaced `c32-*` (e.g. c32-19-badge). Overlay svg does NOT need role/aria (figcaption + alt carry a11y).
- Plates: warn/render/raw `#FF6B00` plate + `#fff` text; good/clean `#4ADE80` plate + `#0f1a14` text. HTML entities only; 0 new em-dashes (use `&#183;`).
- cairosvg pixel-verify each overlay over its PNG Claude-side (copy_file_user_to_claude -> composite at viewBox=PNG px -> view) BEFORE every edit_file commit (LD19).
- Indent depth per parent card (most section-direct cards open col 20 -> figure 20/contents 24; cards-in-cards deeper). Confirm per anchor.
- overlays ARE counted in live svg (target svg 24 = 4 inline + 20 overlay); img 20 (one per PNG).

### Remaining INTEGRATION work
1. 20 PNG c32 overlays per map above (dryRun->commit->get_file_info + recount each).
2. DELETE 10 `_temp_l32*.png` in images\ (batch-A 3: _temp_l32_fullwin/_02_raw/_17_raw; batch-C 7: _temp_l32_03_faces/volume/verts + _06_g10/g00/gneg10/g20). No Filesystem delete tool -> use blender bridge `os.remove` (or note for Ray). The _l32_19/27_ogl + _l32_*_fullwin in the Windows tempdir are NOT in this list.
3. FINAL INVARIANT TABLE in this doc: targets figure 24 / figcaption 24 / `</figure>` 24 / img 20 / svg 24 / em-dash 34 / U+00B7 0 / color222 0 / #667eea+#764ba2 0/0 / table-wrap 9 / mermaid import 1 / divs 10.
4. Browser QA = SEPARATE chat (Playwright + system Chrome, 4 configs 380/900 x dark/light; offline mermaid stub on render-copy only, live untouched).

### PNG overlay BUILD LOG (own chat, started 2026-06-27)

**PNG pixel registry (read on disk via Pillow, viewBox == these 1:1):**
#2 1920x749 | #4 1920x987 | #31 918x1296 | #3 1924x640 | #11 1804x600 | #6 1202x1202 | #7 3008x600 | #8 1202x600 | #9 915x1268 | #13 892x1450 | #14 901x1932 | #15 2406x600 | #16 600x600 | #17 1700x475 | #20 1920x936 | #19 1452x901 | #22 600x600 | #23 600x600 | #27 1452x901 | #28 1202x600.

**Convention re-confirmed at build:** overlay `<svg>` carries NO font-family (badge `<text>` inherits page system-ui) and NO role/aria (figcaption+alt carry a11y); overlay text uses inline `font-size`/`font-weight`/`fill` only. figcaptions open with descriptive prose (NO "Figure N:" prefix - matches the 4 inline-SVG figcaptions). Section-direct figures placed after the topical card's closing `</div>`, at figure col 20 / contents col 24.

**LANDED (14/20), each cairosvg pixel-verified light-side then edit_file dryRun->commit->get_file_info->UTF-8 recount:**

| # | file | viewBox | anchor (live) | c32 ids | callouts |
|---|---|---|---|---|---|
| 2 | interface_overview | 1920x749 | particle-basics, after "Understanding the Interface" card `</div>`, before `<h3>Core Particle Parameters</h3>` | c32-02-hl-list/type/emis | System list (orange), Emitter/Hair (green), Emission (green) |
| 4 | properties_panel_layout | 1920x987 | immediately after #2 figure, before same h3 | c32-04-hl-open/stack | Open section (green), Collapsible sections (orange) |
| 31 | viewport_display | 918x1296 | particle-basics -> Viewport Display Options, after the card (nested warning `</div>`+outer `</div>`), before `<h3>Multiple Particle Systems</h3>` | c32-31-hl-panel/das/amt | Viewport Display (orange), Display As (green), Viewport % (green) |
| 3 | emission_source_comparison | 1924x640 | emission-settings -> Emission Source Types, after card `</div>`, before `<h3>Distribution Modes</h3>` | c32-03-badge-faces/volume/verts | Faces / Volume / Verts panel labels (orange) |
| 11 | distribution_modes | 1804x600 | emission-settings -> Distribution Modes, after card `</div>`, before `<h3>Vertex Groups for Emission Control</h3>` | c32-11-badge-jit/rand/grid | Jittered / Random / Grid panel labels (orange) |
| 6 | gravity_effects_comparison | 1202x1202 | particle-physics -> Gravity and Field Weights, after card `</div>`, before `<h3>Force Fields</h3>` | c32-06-badge-g10/g00/gneg10/g20 | Gravity 1.0 / 0.0 / &#8722;1.0 / 2.0 quadrant labels (orange; minus via &#8722;) |
| 7 | force_field_types | 3008x600 | particle-physics -> Force Fields card, after the field-types mermaid `</div>`, before `<p>Field weights...` | c32-07-badge-force/wind/vortex/drag/magnetic | Force / Wind / Vortex / Drag / Magnetic panel labels (orange) |
| 8 | turbulence_comparison | 1202x600 | particle-physics -> Force Fields card, after the "Turbulence for Realism" green callout `</div>`, before the card's closing `</div>` (before `<h3>Damping and Drag</h3>`) | c32-08-badge-low/high | Low turbulence / High turbulence labels (orange) |
| 9 | collision_physics | 915x1268 | particle-physics -> Collisions card, after collision-settings `</ul>`, BEFORE the cb decision-tree mermaid+SVG | c32-09-hl-collision/particle/kill | Collision toggle (orange), Particle settings section (orange), Kill Particles checkbox (green) |
| 13 | render_as_object | 892x1450 | rendering-particles -> Object Instancing, after card `</div>`, before `<h3>Collection Instancing</h3>` (figure 20/contents 24) | c32-13-hl-renderas/instance/scale | Render As: Object (orange), Instance Object (green), Object Scale (green) |
| 14 | render_as_collection | 901x1932 | rendering-particles -> Collection Instancing, after card `</div>`, before `<h3>Path Rendering</h3>` (figure 20/contents 24) | c32-14-hl-coll/renderas/instance | Debris_Collection group "5 source objects" (green), Render As: Collection (orange), Instance Collection (green) |
| 15 | render_types | 2406x600 | rendering-particles -> Render Types Overview, after card `</div>` (after table-wrap), before `<h3>Object Instancing</h3>` (figure 20/contents 24) | c32-15-badge-none/halo/object/coll | None / Halo / Object / Collection panel badges (orange, composite variant); figcaption notes Halo = EEVEE emissive-dot stand-in |
| 16 | path_rendering | 600x600 | rendering-particles -> Path Rendering, after card `</div>`, before `<h3>Viewport Display</h3>` (figure 20/contents 24) | c32-16-badge-path | single "Path" badge (orange, beauty variant); figcaption notes hair-PATH starburst stand-in |
| 17 | particle_info_node_setup | 1700x475 | rendering-particles -> Materials for Particles, after card `</div>`, before `<h3>Performance Considerations</h3>` (figure 20/contents 24) | c32-17-hl-pinfo/ramp/alpha | Particle Info node (orange box+leader+badge), Color Ramp node (green box+leader+badge), Alpha input on BSDF (orange box+leader+badge) |
| 20 | rain_material_shader | 1920x936 | rendering-particles -> Materials for Particles, between #17 `</figure>` and `<h3>Performance Considerations</h3>` (figure 20/contents 24) | c32-20-hl-pinfo/divide/ramp | Particle Info node "Age &#183; Lifetime source" (orange box+leader+badge), Divide node "Age &#247; Lifetime" (green box+leader+badge), Color Ramp "maps to colour" (orange box+leader+badge); node positions pixel-scanned at native 1920x936 |
| 19 | rain_viewport | 1452x901 | common-effects -> Rain Effect, after card `</div></div>`, before `<h3>Snow Effect</h3>` (figure 20/contents 24) | c32-19-badge | single "Rain: continuous fall" badge (orange, viewport/composite variant, no leader) in open upper-left |

**Byte-ladder:** 310,489 (4-inline baseline) -> 313,491 (#2) -> 315,936 (#4) -> 319,065 (#31) -> 320,971 (#3) -> 322,949 (#11) -> 325,048 (#6) -> 327,688 (#7) -> 329,321 (#8) -> 332,488 (#9) -> 335,329 (#13) -> 338,270 (#14) -> 340,851 (#15) -> 342,271 (#16) -> 345,413 (#17) -> 348,683 (#20) -> **350,142 (#19)**.

**Invariants after #19 (UTF-8 python3, fresh Claude-side copy):** figure 20 / figcaption 20 / `</figure>` 20 / img 16 / svg 20 (4 inline + 16 overlay) ; em-dash U+2014 34 (0 new) ; U+00B7 literal 0 ; color="#222" 0 ; #667eea/#764ba2 0/0 ; `<table>` 9 / table-wrap 9 ; mermaid import 1 / class=mermaid divs 10 ; `&#8722;` entity x4 ; `&#247;` x1. ON TARGET. (c32-19-badge confirmed present.)

**#15 render_types: COMMITTED 2026-06-27.** **#16 path_rendering: COMMITTED 2026-06-27.** **#17 particle_info_node_setup: COMMITTED 2026-06-27** (UI-chrome 3-box variant, native node positions pixel-scanned, cairosvg PASS, recount ON TARGET). **#20 rain_material_shader: COMMITTED 2026-06-27** (UI-chrome 3-box variant: PInfo orange / Divide green / Color Ramp orange; 5 node headers pixel-scanned at native 1920x936, body bottoms measured for box heights; cairosvg light-side pixel-verify PASS; recount ON TARGET). **#19 rain_viewport: COMMITTED 2026-06-27** (viewport/composite single-badge variant, badge in open upper-left clear of particles; cairosvg PASS; recount ON TARGET).

**REMAINING (0/20) - ALL 20 PNG OVERLAYS LANDED 2026-06-27.** #22/#23/#27/#28 committed this chat (final 4), completing the c32 overlay set.

**LANDED (final 4/20), each cairosvg pixel-verified light-side then edit_file dryRun->commit->get_file_info->UTF-8 recount:**

| # | file | viewBox | anchor (live) | c32 ids | callouts |
|---|---|---|---|---|---|
| 22 | snow_turbulence | 600x600 | common-effects -> Snow Effect, after card (nested Realism-trick `</div>` + outer `</div>`), before `<h3>Sparks and Embers</h3>` | c32-22-badge | single "Snow &#183; turbulence sway" badge (orange, beauty variant, no leader) in clear lower-left |
| 23 | sparks_burst | 600x600 | common-effects -> Sparks and Embers, after card `</div>`, before `<h3>Smoke Rising (Simple Version)</h3>` | c32-23-badge | single "Sparks &#183; explosive burst" badge (orange, beauty variant, no leader) in clear top-left |
| 27 | rain_collision_viewport | 1452x901 | project -> Part 3 Ground Collision, after card `</div>`, before `<h3>Part 4: Wind Force</h3>` | c32-27-badge | single "Rain piling on collider" badge (orange, viewport variant, no leader) in open top-left |
| 28 | wind_on_rain | 1202x600 | project -> Part 4 Wind Force, after card `</div>`, before `<h3>Part 5: Splash Particles (Advanced)</h3>` | c32-28-badge-nowind / c32-28-badge-wind | one orange badge per panel near bottom edge: "No wind &#183; straight fall" (L) / "Wind &#183; slanted drift" (R), composite variant, divider carries separation |

**Byte-ladder (final 4):** 350,142 (#19) -> 351,348 (#22) -> 352,568 (#23) -> 353,823 (#27) -> **355,438 (#28)**.

**Invariants after #28 (UTF-8 python3, fresh Claude-side copy) - FINAL, ON ALL TARGETS:** figure 24 / figcaption 24 / `</figure>` 24 / img 20 / svg 24 (4 inline + 20 overlay) ; em-dash U+2014 34 (0 new) ; U+00B7 literal 0 ; color="#222" 0 ; #667eea/#764ba2 0/0 ; `<table>` 9 / table-wrap 9 ; mermaid import 1 / class=mermaid divs 10 ; `&#183;` 15 ; `&#8722;` 4 ; `&#247;` 1. All 5 new ids present (c32-22/23/27-badge, c32-28-badge-nowind, c32-28-badge-wind).

---

## FINAL INVARIANT TABLE (live file, post-#28, CONFIRMED 2026-06-27)

| Metric | Target | Actual | Status |
|---|---|---|---|
| bytes | - | 355,438 | - |
| figure | 24 | 24 | PASS |
| figcaption | 24 | 24 | PASS |
| `</figure>` | 24 | 24 | PASS |
| img | 20 | 20 | PASS |
| svg | 24 (4 inline + 20 overlay) | 24 | PASS |
| em-dash U+2014 | 34 (0 new) | 34 | PASS |
| literal U+00B7 | 0 | 0 | PASS |
| color="#222" | 0 | 0 | PASS |
| #667eea / #764ba2 | 0 / 0 | 0 / 0 | PASS |
| `<table>` / table-wrap | 9 / 9 | 9 / 9 | PASS |
| mermaid import / class=mermaid divs | 1 / 10 | 1 / 10 | PASS |
| `&#183;` / `&#8722;` / `&#247;` | (entities) | 15 / 4 / 1 | OK |

**INTEGRATION figure work COMPLETE.** All 24 figures (4 inline SVG + 20 PNG c32 overlays) landed and recount-verified.

**STILL PENDING (next chat):**
1. ~~DELETE 10 `_temp_l32*.png` in `images\`~~ **DONE 2026-06-27** (blender bridge `os.remove`, all 10 deleted, 0 remaining; verified 20 `lesson_32_*.png` + 4 `lesson_32_*.svg` deliverables intact). See TEMP CLEANUP block below.
2. ~~Browser QA = SEPARATE chat~~ **DONE 2026-06-27 - QA-PASS, no regressions.** See BROWSER QA block below.

**Still pending after overlays:** ~~delete 10 images\ temps~~ DONE; ~~Browser QA~~ DONE (QA-PASS). **L32 fully closed.**

---

## TEMP CLEANUP - COMPLETE (2026-06-27)

Deleted all 10 `_temp_l32*.png` from `images\` via blender bridge `os.remove` (no Filesystem delete tool). Pre-delete: all 10 confirmed present + a `_temp_l32*` glob confirmed exactly those 10 (no more, no fewer). Post-delete: `_temp_l32*` glob = 0 remaining; deliverables intact (`lesson_32_*.png` = 20, `lesson_32_*.svg` = 4).

Deleted: `_temp_l32_fullwin.png` (196,886), `_temp_l32_02_raw.png` (122,166), `_temp_l32_17_raw.png` (159,278), `_temp_l32_03_faces.png` (306,467), `_temp_l32_03_volume.png` (294,669), `_temp_l32_03_verts.png` (236,829), `_temp_l32_06_g10.png` (196,607), `_temp_l32_06_g00.png` (187,136), `_temp_l32_06_gneg10.png` (200,053), `_temp_l32_06_g20.png` (191,434). The `_l32_19/27_ogl` + `_l32_*_fullwin` in the Windows tempdir are out of scope (not in `images\`).

---

## BROWSER QA - QA-PASS (2026-06-27)

**Method:** Playwright (sync API) + system Chrome `/opt/google/chrome/chrome` (Chromium 141.0.7390.37) via `executable_path`, served over a localhost HTTP server (file:// breaks ESM chunk imports). **Live file NEVER touched** - QA ran on a render-only copy `_qa_render.html` on Claude's computer; the jsdelivr mermaid import was swapped for a local offline ESM stub (mermaid v10.9.6 `dist/` vendored from npm, since jsdelivr is egress-blocked Claude-side). The live WSL file was never opened for writing; its jsdelivr import is intact.

**Byte parity:** copied live = 355,438 B (matches live exactly). Render copy = 354,581 B (delta -857 = shorter local import string only). All 24 assets resolved (20 PNG + main.css + 2 JS); 4 inline SVGs confirmed inlined (0 SVG file refs).

**4 configs: 380px + 900px x dark + light.** Dark driven by BOTH `color_scheme` emulation AND explicit `:root[data-theme="dark"]` (the real theme-toggle override path, which wins over prefers-color-scheme).

### Automated DOM checks - ALL PASS every config
| Check | Result (all 4 configs) |
|---|---|
| figure / figcaption / img / figure-svg | 24 / 24 / 20 / 24 |
| PNG figures | 20 / 20 |
| Mermaid diagrams rendered (`.mermaid svg`) | 10 / 10 |
| Broken images | 0 (see lazy-load note) |
| Overlay registration over PNG (<=2px at 1:1) | 0 misaligned, all 20 |
| Horizontal page overflow @ 380px | none (docScrollW == innerW == 380) |
| Unwrapped tables | 0 (9/9 wrapped; 3 scroll internally at 380px as designed) |
| Page/console errors | only favicon.png 404 (asset not copied for QA; harmless) |

**Lazy-load note (not a defect):** first harness pass flagged 11 "broken" imgs - exactly the 11 with `loading="lazy"` (HTTP requests simply hadn't fired below the fold; only 9 PNG requests had gone out). Re-ran forcing `loading=eager` + full scroll-through -> 0 broken, all 20 imgs `complete` with correct naturalWidth. All 20 PNG files also independently Pillow-verified to decode. PNG pixel dims match the doc's pixel registry 1:1.

### Visual inspection (cropped bands, 900px, dark + light) - NO DEFECTS
- **Mermaid (dark + light):** flowchart nodes render with good contrast (`#888` border + light/light-purple fills); legible both themes.
- **Inline SVG #1 lifecycle (`pl`):** currentColor adapts correctly - white text on dark, dark-navy on light; orange accents legible both.
- **Inline SVG #34 quick-ref (`sqr`, dense 800x680):** orange header, all 5 color-keyed rails (Rain blue / Snow green / Sparks yellow / Smoke purple / Explosion red), `&#8722;` minus on Smoke -0.5 renders as minus (not em-dash). Clean.
- **PNG overlays #2/#4:** c32 orange + green plates + leader lines register exactly over UI elements at 1:1; figcaption (no "Figure N:" prefix) legible on both card themes.
- **Wide PNG #7 (3008px, hardest downscale ~852px):** all 5 force-field panels read distinctly at thumbnail scale; orange badges + dividers legible.
- **HTML `<table>` (dark):** `[data-theme=dark] th` blue header (#2d53a3) + white text, body rows legible - the L30/L31 table regression is NOT present here.

**VERDICT: L32 QA-PASS. No regressions. All 24 figures render, overlays register at 1:1, 10 mermaid diagrams render, no table overflow at 380px, no dark-mode contrast defects. L32 FULLY CLOSED at 355,438 B.**

