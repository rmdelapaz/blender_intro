# Lesson 32 Integration Progress - Particle Systems Overview

**Status:** ACTIVE - PRODUCTION. 13/24 figures on disk (4 inline SVG + 9 PNG). 11 render/geometry PNG remain, then INTEGRATION.
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

### PNG batch C (render/geometry set) - PARTIAL 2026-06-27

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

**PNG progress after batch C (partial):** 12 of 20 PNG done (batch A {2,4,17} + batch B {9,13,14,31} + batch C {3,6,7,8,11}). REMAINING PNG (8): {15, 16, 19, 20, 22, 23, 27, 28}.

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

**Figure tally after batch C (partial):** inline SVG 4/4 + PNG 12/20 = 16 of 24 figures on disk. 8 PNG remaining, then INTEGRATION.

**Blender state at batch C pause (LIVE, NOT restored):** Color-dependent staging ACTIVE - view_transform=Standard, look=None, world 0.05 str 1.0, EEVEE, res 600x600, frame 50. Objects: Camera, Light, GravEmit (plane, #6 leftover), GDot (orange dot). Materials live: ClearEmit, GreyEmit, GreyPlane, L09Cyan, L09Orange. **AgX NOT YET RESTORED** - intentional: 8 color-dependent renders remain, so next chat keeps this staging. The 3 viewport/UI-chrome figures (#19/27/20) need AgX+world 0.88+viewport shading, so do those AFTER the 8 renders, then RESTORE AgX/world 0.88 str 1.0 + L09Orange base (1.0,0.42,0.0) str 5.0 / L09Cyan base (0.29,0.62,1.0) str 5.0 at the FINAL slice close.

---

## Session Log
- 2026-06-27: L32 opened. get_file_info + UTF-8 baseline captured. Old-gen verdict (gradients + live mermaid, 0 figures). Requirements doc read; 36 -> BUILD 24 / DEFER 12 triage set. Progress doc created. session.md head already = L32 ACTIVE/NEXT.
- 2026-06-27: Phase 0 MODERNIZE WRITTEN LIVE. Confirmed live pristine 282,606 B; regenerated transform on fresh copy; wrote via chunked edit_file (12 small + 16 anchor edits) after single-blob write_file failed in prior chat. Live verified: 282,724 B, md5 38c335d5b7f12de5fd8afebdf356b4f0, all 16 invariants PASS. Re-baselined as new pre-figure baseline. Next: PRODUCTION 24 figs (namespace c32).
- 2026-06-27: SVG batch COMPLETE. 4 inline SVGs {1,5,10,34} built per v6, cairosvg-verified light+dark, written to images/ via write_file, get_file_info confirmed (4884/4039/5342/5892 B). id-prefixes pl/vd/cb/sqr registered. Next: PNG sub-chats (20 PNG, namespace c32, >=5 -> split), then INTEGRATION.
- 2026-06-27: PNG batch A (UI-chrome) PARTIAL. Verified Blender TRUE-PRISTINE first (AgX/None, EEVEE, world 0.88, default 8-vert Cube, 0 mods/psys). Staged additive scene (Rain psys on Cube, Raindrop, Debris_Collection x5, Ground+Collision, ParticleAge node material). Built 3 PNG: #2 interface overview (67,543 B), #4 properties panel layout (88,634 B), #17 Particle Info node setup (91,769 B) - all maximized-area captures, 1:1 1920px, get_file_info verified. BLOCKER: subpanel expansion not scriptable (no RNA flag, no click-injection) -> #9/#13/#14/#31 reassigned to MANUAL Win+Shift+S sub-chat. Remaining PNG: render/geometry {3,6,7,8,11,15,16,19,20,22,23,27,28}=13 + manual {9,13,14,31}=4. Blender left staged (NOT pristine); AgX untouched. 3 _temp raw files retained in images/.
- 2026-06-27: PNG batch B (manual subpanel set) COMPLETE. Pre-flight verified batch-A staging intact (Rain psys, Ground Collision, Debris_Collection x5, Raindrop, ParticleAge, AgX untouched). KEPT staging (no pristine reset - scene already carried all 4 captures). Restored normal Layout via screen.back_to_previous(); widened right column 337->650px. Built 4 PNG via manual Win+Shift+S (Claude pre-set state, Ray snipped + saved direct to images\, Claude view-verified each): #31 viewport_display (122,753 B), #13 render_as_object (130,149 B), #14 render_as_collection (208,151 B, 2-area Outliner+Properties), #9 collision_physics (151,682 B). Restore at close: unlinked Debris_Collection from scene master (linked only for #14), render_type COLLECTION->HALO (instance refs kept), reselected Cube, Properties->PARTICLES, AgX confirmed untouched. PNG now 7/20; figures 11/24. NEXT: render/geometry set {3,6,7,8,11,15,16,19,20,22,23,27,28}=13 PNG (own sub-chat, RESET to pristine first, LD17 Standard recipe + restore AgX), then INTEGRATION.
- 2026-06-27: PNG batch C (render/geometry set) PARTIAL. RESET to TRUE-PRISTINE first (verified), applied LD17 color-dependent staging (Standard/None, world 0.05, EEVEE). Relay path verified (Win tempdir->PIL 12.2.0->WSL). Built 2 PNG: #3 emission_source_comparison (1924x640, 335,333 B, 3-panel Faces/Volume/Verts with cyan wireframe-cage emitter) + #6 gravity_effects_comparison (1202x1202, 329,491 B, 2x2 grid fall/float/rise/fast-fall, per-panel emitter Z). LOCKED FINDINGS: (1) PATH render_type renders EMPTY for Newtonian emitter particles - use render_type=OBJECT emissive dots; (2) Volume emission needs transparent/wireframe-cage emitter (opaque faces occlude interior); (3) sparse dark-world panels legitimately 187-200 KB (content-verified, do not upscale); (4) display_method has no PATH enum, path steps are render_step/display_step not draw_step. PNG now 9/20; figures 13/24. Blender LEFT in color-dependent staging (AgX NOT restored - intentional, 8 renders remain). NEXT: remaining 11 PNG {7,8,11,15,16,19,20,22,23,27,28} - 8 color-dep renders keep staging, then 3 viewport/UI-chrome (#19/27/20) under AgX, then RESTORE AgX/world 0.88 at final slice close; then INTEGRATION.
