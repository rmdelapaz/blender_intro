# Session Resume Pointer

Single-block snapshot per `INTERRUPTION_RECOVERY.md` pillar 2.2. Overwrite-every-update semantics. First file to read in every new chat, before `status.md` and before any per-lesson progress doc.

---

## Chat / Date / Status

**Lesson 06 Phase 3 PRODUCTION COMPLETE 2026-05-23; sub-chat B closed; all 8 Phase 3 images on disk. 28 of 50 lesson images on disk overall; 20 of 50 integrated. Next chat: Lesson 06 Phase 3 INTEGRATION plan-lock.** 2026-05-23. Sub-chat B executed 2 of 2 sub-chat B items: (1) #20 `lesson_06_20_merge_by_distance.png` (819x405 RGBA, 49,135 bytes) via Ray's manual Win+Shift+S of the M Merge menu in Edit Mode with the `By Distance` row hovered (standard Blender row-highlight band visible across the full row width); capture includes the floating tooltip `Merge vertices based on their proximity.` to the lower-right of the menu plus generous empty viewport space at top-right with the X-axis red and Y-axis green guide lines visible (ample badge placement room for c20 at INTEGRATION); menu reads cleanly with header `Merge`, divider, three top entries (`At Center`, `At Cursor`, `Collapse`), second divider, then the hovered `By Distance` row; saved directly to `images/` from the Win+Shift+S Save dialog at the locked filename. (2) #21 `lesson_06_21_dissolve_vs_delete.svg` (9,921 bytes) hand-authored from scratch at 800x560 with `dd` id prefix per the locked Phase 3 PRODUCTION plan: top 3px `#FF6B00` accent rail, heading `Dissolve vs Delete` at y=56 size 24 weight 700, subtitle `WHEN A FACE GOES · WHAT STAYS BEHIND` at y=84 size 14 opacity 0.65 (middle-dot separator), divider at y=108, two equal-width panels (left x=40..390 DELETE warning-red `#E63946` header with `#ffffff` text, right x=410..760 DISSOLVE positive-green `#4ADE80` header with `#0f1a14` text, 20 px gap between), 32 px header bars, 3x3 face-grid mesh diagrams (4x4 vert grids at 55 px cell spacing, centered at y=307.5 within each panel body), LEFT delete mesh shows 8 surviving face fills at `currentColor` opacity 0.08 with the center face intentionally absent plus 20 gray edges at opacity 0.4 plus 4 boundary edges of the hole highlighted in `#FF6B00` stroke-width 3 stroke-linecap round, RIGHT dissolve mesh shows 4 corner face fills plus a plus-shape continuous face at `#4ADE80` opacity 0.14 (covering the merged former-center plus 4 mid-edge faces) plus 20 gray edges with the 4 former-center boundary edges deliberately absent (dissolved), 16 vertex dots r=2.5 per mesh, captions `LEAVES HOLES` and `RECONNECTS GEOMETRY` at y=460 letter-spacing 2, Variant B footer tip card y=506-540 with 4 px left rail and two-line wrapped `Tip:` prose using a single `<text>` with inner `<tspan x="58" dy="15">` for the line break, 10 dd-* ids exact-match to the locked spec, `color="#222"` retained on root for `<img>` fallback (stripped at Phase 3 INTEGRATION inlining per the locked #8 / #44 SVG inlining checklist precedent), all elements on single lines, no decorative ASCII-divider author comments. Both files on disk at the locked filenames. Placement table rows #20 and #21 flipped to `captured; not integrated` and `produced; not integrated` respectively in one batched 4-edit commit alongside Status section bullet append and bottom-of-doc Next chat pointer rewrite per the locked execution cadence; progress doc grew 179,842 to 184,171 bytes (+4,329 net). All work dry-run-then-commit-then-verify clean; no MCP server hangs. All new prose em-dash-free per style guide v4 decision 9; middle-dot for separation in subtitle and footer tip. Bottom-of-doc `Next chat` section rewritten in same close-out turn to point at Phase 3 INTEGRATION plan-lock.

**Phase 3 PRODUCTION COMPLETE (full details in `lesson_06_integration_progress.md` Status section sub-chat A and sub-chat B bullets):**

- **Plan-lock chat 2026-05-22** · 8 image productions specced across 2 execution sub-chats per Option B confirmation, fresh scene reset as Step 0 of sub-chat A, ID prefix registry updated for Phase 3 (`dd` SVG prefix for #21, `c20` and `c23` PNG overlay prefixes for #20 and #23).
- **Sub-chat A CLOSED 2026-05-22** · 6 of 6 BlenderMCP captures landed: #17 inset operation progression (3844x720, 3-panel composite), #18 inset individual vs group (2562x720, 2-panel composite), #19 inset double technique (5126x720, 4-panel composite, heaviest single capture), #22 limited dissolve before/after (2562x720, 2-panel composite), #23 face orientation overlay (1280x720, single-pose with Face Orientation overlay enabled and 3 deliberately flipped faces in the right cheek of Suzanne), #50 fill operations comparison (3844x720, 3-panel composite with #50 Panel 3 deviation from `beautify_fill` to `poke` because 4-edge boundary fill() produces 2 coplanar triangles indistinguishable from an n-gon in solid shading and beautify_fill is a no-op on 2-triangle topology; deviated to poke which inserts a center vertex creating a visually-distinct 6-triangle fan). One BlenderMCP connection drop mid-sub-chat during #18 Panel 2 setup: `bpy.ops.ed.undo()` inside `temp_override` triggered `[WinError 10054]`; recovery used the locked alternative path (`or recreate` clause) and subsequent captures avoided undo entirely. Workflow lesson logged for future multi-panel sub-chats.
- **Sub-chat B CLOSED 2026-05-23 (this chat)** · 2 of 2 items landed: #20 PNG via Ray's manual Win+Shift+S, #21 SVG hand-authored. **Phase 3 PRODUCTION COMPLETE: 8 of 8 Phase 3 images on disk; 28 of 50 lesson images on disk overall.**

**Locked decisions to carry into Phase 3 INTEGRATION plan-lock:**

- **Phase 3 INTEGRATION scope:** 8 images covering `#inset-outset` (3 plain PNG figures: #17, #18, #19) plus `#mesh-cleanup` (5 images: #20 with c20 overlay, #21 SVG inlined with `dd` prefix, #22 plain, #23 with c23 overlay, #50 plain). 7 PNGs + 1 SVG inlining. 2 PNG overlays at INTEGRATION (c20 menu-row highlight on the hovered `By Distance` row of #20; c23 single-region highlight on a flipped-face region of #23).
- **Sub-chat split likely 2 sub-chats:** sub-chat 1 = `#inset-outset` 3 plain figures (lower complexity, no overlays, no SVG inlining); sub-chat 2 = `#mesh-cleanup` 5 images including 2 overlays + 1 SVG inlining (higher complexity). Final split locked at Phase 3 INTEGRATION plan-lock chat. Per-image work items at plan-lock: 3-5 line `oldText` anchors locked verbatim preserving any pre-existing en-dashes and right-arrows, em-dash-free figcaptions and alt texts with middle-dot for separation, overlay specs with locked geometry per c46 / c10 / c16 precedent and pixel coords resolved via Pillow scan at plan-lock, SVG inlining checklist for #21 per the #8 / #44 precedent.
- **c20 overlay:** menu-row highlight on the `By Distance` row in the M Merge menu of #20 (819x405 capture); positive-green colorway (`#4ADE80` badge with `#0f1a14` text; Merge by Distance is an affirmative cleanup operation); badge text `BY DISTANCE` locked from plan (fallback `MERGE` if PNG aspect ratio favors shorter label). Locked geometry per c46 / c10 / c16 precedent: ellipse highlight stroke-width 4, leader stroke-width 3 stroke-linecap round, marker r=6 7px from badge edge, badge rect rx=6 height 46, text font-size 22 weight 700 letter-spacing 2 text-anchor middle. Pixel coords to be resolved at plan-lock via brighter-row band scan on the hovered `By Distance` row at approximately y=265-310 of the 819x405 capture (capture's empty viewport space at top-right gives clean badge placement and leader-path clearance).
- **c23 overlay:** single-region highlight on one of the 3 deliberately flipped faces in the right cheek region of Suzanne (#23, 1280x720). Warning-red colorway (`#E63946` badge with `#ffffff` text; FLIPPED is a cautionary indicator per style guide v4 decision 8 colorway split). Badge text `FLIPPED` locked from plan. Same locked geometry as c20. Pixel coords to be resolved at plan-lock via red-pixel band scan for the Face Orientation overlay's flipped-face tint color on the 1280x720 Suzanne render; fallback target the Face Orientation overlay toggle in the viewport overlays dropdown preserved if the captured composition favors highlighting the toggle over a flipped face.
- **#21 SVG inlining checklist:** strip root `color="#222"`, preserve all `dd-*` ids verbatim (10 ids: `dd-title`, `dd-desc`, `dd-delete-panel`, `dd-dissolve-panel`, `dd-delete-header`, `dd-dissolve-header`, `dd-delete-mesh`, `dd-dissolve-mesh`, `dd-delete-caption`, `dd-dissolve-caption`), no multi-line attribute continuations to collapse since the SVG was authored with single-line elements, no decorative ASCII-divider author comments to prune, keep short structural comments for header / panels / mesh groups / footer (5 structural comments total). Per the locked Phase 2 #44 inlining precedent.
- **Lesson HTML PART 05 indentation depth (`#inset-outset`, `#mesh-cleanup`)** to be verified at plan-lock via section slice read per the Phase 2 PART 04 pattern (PART 04 was 0/4/8 throughout; PART 05 likely matches). Default-depth figure col 4 if 0/4/8; deeper-indent figure col 8 inside cards opening at col 4.

**Blender session state (not material to Phase 3 INTEGRATION plan-lock; integration is HTML-only):** at sub-chat A close, the Blender scene held L06_InsetCube / L06_InsetGrid / L06_InsetPanel / L06_DissolveCube / L06_NormalsMonkey / L06_FillCube. These leftovers are not material to Phase 3 INTEGRATION; fresh scene reset at the start of Phase 4 PRODUCTION sub-chat A will need to delete them if Phase 4 reuses any of those object names.

**Retroactive archive sweep for Lessons 02-04 EXPLICITLY OUT OF SCOPE per Ray's direction.** Forward-only work from here.

**Retroactive Lesson 05 browser QA pass still pending** (long-deferred QA debt for all 30 Lesson 05 figures). Optional alternative to Phase 3 INTEGRATION plan-lock if Ray wants to clear the backlog first.

**Lesson 06 mid-lesson browser QA pass also available** (verify all 20 Phase 1 + Phase 2 figures render correctly in browser: c2 / c3 / c46 / c10 / c16 PNG overlays positioned correctly; c13 / c14 / c15 decorative-shape-only overlays trace their intended regions; #8 `pf` and #44 `sr` inline SVGs render in both light and dark mode; no broken image refs). Optional sanity check before continuing with Phase 3 INTEGRATION.

---

## Current step (next chat)

**Recommended next step: Lesson 06 Phase 3 INTEGRATION plan-lock.** Read this `session.md`, then `lesson_06_integration_progress.md` (Status section now has Phase 3 PRODUCTION COMPLETE through the 2026-05-23 sub-chat B bullet; Phase 3 PRODUCTION plan section above carries historical capture specs and overlay deferrals for c20 and c23; Placement table rows #17, #18, #19, #20, #21, #22, #23, #50 show capture/produce state at `captured; not integrated` for the 7 PNGs and `produced; not integrated` for #21 SVG; bottom-of-doc Next chat section already points at Phase 3 INTEGRATION plan-lock with full framing), then `lesson_06_image_requirements.md` (entries #17 through #23 plus #50 for placement intent and AI prompt guidance), then `images/IMAGE_STYLE_GUIDE.md` v4 only if a gap surfaces (likely no gap given the c46 / c10 / c16 PNG overlay precedents and the #8 / #44 SVG inlining precedents cover all relevant patterns for Phase 3 INTEGRATION including the c20 / c23 full-callout overlays and the #21 `dd` SVG inlining).

Then write the `Phase 3 INTEGRATION plan` section into `lesson_06_integration_progress.md` following the structural model of the existing `Phase 2 INTEGRATION plan` section: sub-chat split (likely 2 sub-chats per the bottom-of-doc Next chat framing), per-image anchor texts (3-5 line `oldText` per image, locked verbatim with pre-existing en-dashes and right-arrows preserved), per-image figcaptions (em-dash-free new prose, middle-dot for separation where a sentence break would feel choppy), per-image alt texts (em-dash-free new prose), 2 overlay specs (c20 positive-green `BY DISTANCE` badge and c23 warning-red `FLIPPED` badge, both with locked geometry per the c46 / c10 / c16 precedent and pixel coords resolved at plan-lock via the locked `Filesystem:copy_file_user_to_claude` + Pillow scan pattern), 1 SVG inlining checklist for #21 (strip root `color="#222"`, preserve all `dd-*` ids verbatim, no multi-line attribute continuations to collapse, no decorative ASCII-divider author comments to prune, keep short structural comments), and execution cadence rules carry-forward.

Lesson HTML PART 05 section indentation depth verification at plan-lock per the Phase 2 PART 04 pattern.

Plan-lock chat scope: no HTML edits, no image production. One `Filesystem:edit_file` commit (insertion of new Phase 3 INTEGRATION plan section into progress doc).

After plan-lock: Phase 3 INTEGRATION execution sub-chats (likely 2 per the split recommendation above). After Phase 3 INTEGRATION closes: Phase 4 / 5 / 6 PRODUCTION + INTEGRATION across the remaining 22 images (Phase 4 6 images, Phase 5 8 images, Phase 6 8 images). Then Lesson 06 close-out chat for handoff doc + archive sweep + status roll.

**Budget estimate:** Phase 3 INTEGRATION plan-lock follows the same structural pattern as the Phase 2 INTEGRATION plan-lock chat (which used a 4-doc read pass plus one large plan-lock write of 336 new lines / +29,242 bytes). Phase 3's 8 images vs Phase 2's 10 leaves slightly more headroom; should fit in one plan-lock chat with comfortable margin. Warn Ray before context tightens within the chat.

**Alternative next steps if Ray wants something other than Phase 3 INTEGRATION plan-lock:**

- Retroactive Lesson 05 browser QA pass (closes long-deferred QA debt for all 30 Lesson 05 figures)
- Lesson 06 mid-lesson browser QA pass (sanity check all 20 Phase 1 + Phase 2 figures before continuing with Phase 3 INTEGRATION)
- Non-Blender-course work (this `session.md` cleanly closes Phase 3 PRODUCTION; Phase 3 INTEGRATION plan-lock can pick up any future chat)

---

## Process expectations (carry forward; all locked rules; see `images/IMAGE_STYLE_GUIDE.md` v4 and `lesson_06_integration_progress.md` for full discussion)

**Path discipline:**
- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`

**File operations:**
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit
- `Filesystem:write_file` for new files and small full-doc overwrites (e.g., this `session.md`); NEVER Claude's built-in `create_file`
- Tools are deferred; call `tool_search` before invoking; do not inherit "tool X is unavailable" assumptions from a compaction summary
- `Filesystem:copy_file_user_to_claude` for one-way copy from user filesystem to Claude's container; useful for bash-grep section mapping on large docs before edit work, and for PNG pixel inspection ahead of overlay coordinate resolution (confirmed working path through Phase 1 sub-chat 2 c46 pixel scans, Phase 2 sub-chat 1 c10 pixel scans, Phase 2 sub-chat 2a c16 / c13 / c14 pixel scans, and Phase 2 sub-chat 2b c15 concave-hull / outline-trace scan; same path applies to c20 and c23 at Phase 3 INTEGRATION)
- `Filesystem:edit_file` matches `oldText` exactly including newlines but may normalize trailing whitespace at end of file; if a multi-paragraph oldText that includes a trailing blank line fails, retry with the trailing blank line excluded from oldText (Phase 2 INTEGRATION sub-chat 1 close-out precedent)

**MCP server hang recovery (locked from Phase 1 INTEGRATION sub-chat 1):**
- If `Filesystem:edit_file` (especially with a long `newText` containing inline SVG callout blocks) times out at the 4-minute timeout boundary, the commit may or may not have landed; do not assume failure
- Recovery procedure: wait briefly for the MCP server to recover, then call `Filesystem:get_file_info` to check file size; if size matches pre-edit baseline the commit did not land and a clean retry is safe; if size matches post-edit expectation the commit landed during the timeout window and a retry would create a second insertion
- The c2 multi-callout commit in Phase 1 INTEGRATION sub-chat 1 hit this exact path: first commit attempt timed out, file size was unchanged after recovery, retry committed cleanly
- Phase 1 INTEGRATION sub-chat 2, Phase 2 PRODUCTION, Phase 2 INTEGRATION sub-chat 1, sub-chat 2a, sub-chat 2b, Phase 3 PRODUCTION sub-chat A, and sub-chat B all hit no MCP hangs; the recovery path remains armed for Phase 3 INTEGRATION

**Em-dash discipline (style guide v4, locked decision 9):**
- No new em-dashes anywhere in new content (figcaptions, alt text, status blocks, markdown notes, handoff docs, archive doc headers, pointer blocks, SVG label / heading / subhead / pill / footer / takeaway text, overlay badge text, overlay title / desc text, style-guide prose)
- Middle-dot (`·`, U+00B7) for dash-style separation in SVG labels and overlay badge text per the locked precedents
- Pre-existing em-dashes and en-dashes in source content preserved verbatim through edits (including inside `oldText` anchors); right-arrows `→` similarly preserved
- Quoting pre-existing em-dashes inside backtick code spans in a status bullet is OK
- Structural em-dash after a date in Status bullets (the date-then-separator-then-description pattern) is grandfathered as a list-item separator, not new prose

**Inline image pattern (locked from Phase 1 Lesson 01, confirmed across all subsequent phases including Lesson 06 Phase 1, Phase 2 INTEGRATION sub-chats 1 / 2a / 2b, and Phase 3 PRODUCTION sub-chats A / B):**
- Plain `<figure>` / `<figcaption>` wrapper, no class
- PNGs: `<img loading="lazy">` with descriptive alt text. Figure at col 16, img and figcaption at col 20 (default depth) for figures placed directly in lesson sections at the 12/16/20-space indentation tier
- PNGs with overlays: `<figure>` wraps a `<div style="position: relative; display: inline-block; max-width: 100%;">` which holds the `<img loading="lazy" style="display: block; width: 100%; height: auto;">` plus the overlay `<svg>`; figcaption immediately after the closing `</div>` (Lesson 05 c11 / c22 / c28 pattern, confirmed across c2 / c3 / c46 / c10 / c16 in Lesson 06 Phases 1-2, and c13 / c14 / c15 decorative-shape-only variants in Phase 2 INTEGRATION sub-chat 2b; applies to c20 / c23 in Phase 3 INTEGRATION)
- Inline SVGs: figure at col 16, svg root at col 20, svg children at col 24, deeper nesting at 28/32, figcaption at col 20; `color="#222"` stripped from inlined root `<svg>` (breaks dark mode); standalone `.svg` files in `images/` retain `color="#222"` for `<img>` fallback (confirmed across Phase 1 sub-chat 2 #8 SVG inlining and Phase 2 INTEGRATION sub-chat 2b #44 SVG inlining; applies to #21 SVG inlining at Phase 3 INTEGRATION)
- Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<polyline>`, `<desc>`, `<tspan>` collapsed onto single lines during inlining (#21 SVG was authored with single-line elements throughout so no collapsing needed at Phase 3 INTEGRATION inlining)
- Decorative ASCII-divider author comments pruned during inlining; short structural comments kept (`<!-- Entry row 1: Box Select -->`, `<!-- Panel: SMOOTH (row 0, col 0) -->`, `<!-- DELETE panel (left) -->`, etc.)
- Deeper-indent variant (figure col 20, contents at col 24/28/32, figcaption col 24, figure close col 20) for figures placed inside cards that open at col 16
- 2-to-3-line `oldText` anchors are the default for unique insertion points; extend to 4-8 lines when needed
- **Lesson 06 indentation discontinuity:** PART 2 sections (`#enter-edit-mode`, `#selection-modes`) at 12/16/20-space depth (figure col 16 default, col 20 deeper-indent inside cards opening at col 16); PART 03 `#proportional-editing` at 0/4/8-space depth (figure col 4 default, col 8 deeper-indent inside cards opening at col 4); PART 04 sections (`#loop-tools`, `#advanced-selection`, `#selection-tools`) at 0/4/8-space depth (verified at Phase 2 INTEGRATION plan-lock); PART 05 sections (`#inset-outset`, `#mesh-cleanup`) indentation depth to be verified at Phase 3 INTEGRATION plan-lock per the Phase 2 PART 04 pattern (likely 0/4/8 too).

**PNG annotation overlay pattern (style guide v4 component snippet, confirmed Phases 3-6 Lesson 05 INTEGRATION and Lesson 06 Phase 1, Phase 2 INTEGRATION sub-chats 1 / 2a / 2b):**
- Wrapper div `position: relative; display: inline-block; max-width: 100%`
- Overlay SVG viewBox matches PNG pixel dimensions
- Overlay SVG style `position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none` plus `preserveAspectRatio="xMidYMid meet"`
- Img inline style `display: block; width: 100%; height: auto`
- No baked-in callouts on PNGs going forward
- Overlay ids namespaced per PNG with a `c{N}-*` prefix
- Highlight shape (ellipse or circle) fill `none`, stroke matches colorway, width 4 (thin-strip variant: width 2)
- Leader line stroke matching colorway, stroke-width 3, stroke-linecap `round` (thin-strip variant: stroke-width 2)
- Marker circle r=6 at badge-side end of leader (7 px from badge edge per c28 convention) when a highlight is present; at target-side end per c11 convention when there is no separate highlight (thin-strip variant: r=4, 3 px from badge edge)
- Badge rect rx=6, fill `#4ADE80` (positive) or `#E63946` (warning); text font-family `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, font-size 22, font-weight 700, text-anchor middle, fill `#0f1a14` on green or `#ffffff` on red, letter-spacing 2 (thin-strip variant: rx=4, font-size 14, badge height 22, no letter-spacing)
- Composite-overlay variant for horizontally-divided composite PNGs with baked-in 2px `#FF6B00` vertical dividers: no highlight ellipses, no leader lines, just one centered badge per panel near the bottom edge
- **Decorative-shape-only variant (Phase 2 c13 / c14 / c15, locked into style guide v4 addenda at Lesson 06 close):** stroke `#ffffff` width 2 directly on the target region without highlight ellipse, leader, marker, or badge; suitable for tool-indicator overlays where the shape IS the message (box-select dashed rect, circle-select solid ring, lasso-select dashed polyline). c13 stroke-dasharray `6,4`; c14 solid; c15 stroke-dasharray `4,3`. Pixel coords resolved via Pillow scan: bbox / centroid+radius for rect / circle (c13 / c14); concave-hull / outline-trace for the polyline (c15).
- **c3 thin-strip variant** (confirmed twice: sub-chat 1 c3 in-use + sub-chat 2 documentation locked): font-size 14, badge height 22, rx 4, highlight stroke-width 2, leader stroke-width 2, marker r 4 (~0.6x scale on all callout geometry); deviation for sub-720px-wide image strips; folded into style guide v4 addendum at Lesson 06 close

**Overlay badge colorway split (style guide v4 locked decision 8):**
- Positive labels: `#4ADE80` green badge with `#0f1a14` dark text
- Warning labels: `#E63946` red badge with `#ffffff` white text
- Pick from the label's semantic role; mixed colorways on a single PNG are expected
- Lesson 06 Phase 1: all c2, c3, c46 badges positive-green (no warnings in Phase 1)
- Lesson 06 Phase 2 sub-chat 1: c10 badge `LOOPTOOLS` positive-green (affirmative interface indicator)
- Lesson 06 Phase 2 sub-chat 2a: c16 badge `AMOUNT` positive-green (affirmative interface indicator)
- Lesson 06 Phase 2 sub-chat 2b: c13 / c14 / c15 decorative-shape-only without badges so colorway does not apply
- Lesson 06 Phase 3 (planned at INTEGRATION): c20 badge `BY DISTANCE` positive-green (Merge by Distance is an affirmative cleanup operation); c23 badge `FLIPPED` warning-red (FLIPPED face orientation indicator is a cautionary label; first warning-red PNG overlay badge in Lesson 06)

**Overlay coordinate resolution (locked from Phase 1 INTEGRATION sub-chat 2 c46, Phase 2 INTEGRATION sub-chat 1 c10, Phase 2 INTEGRATION sub-chat 2a c16 / c13 / c14, and Phase 2 INTEGRATION sub-chat 2b c15; same path applies to Phase 3 INTEGRATION c20 / c23):**
- For PNG-overlay coordinate work: `Filesystem:copy_file_user_to_claude` the source PNG into Claude's container, then run Pillow pixel scans to detect button bounds, leader paths, and clearance from nearby UI elements
- Two-scan pattern: first scan locates target region by distinctive color (blue/orange/highlighted); second scan locates nearby elements (the wedge or row that the leader must clear) to verify leader-path clearance before locking pixel coords
- For decorative-shape-only overlays (Phase 2 c13 / c14 / c15 precedent): orange-selected-vertex bbox scan (c13), centroid+max-radius scan (c14), or concave-hull / outline-trace scan with RDP simplification (c15) per the shape variant
- For Phase 3 INTEGRATION: c20 brighter-row band scan on the hovered `By Distance` row at approximately y=265-310 of the 819x405 capture; c23 red-pixel band scan for the Face Orientation overlay's flipped-face tint color on the 1280x720 Suzanne render
- Resolved coordinates feed directly into the locked overlay geometry without re-deriving the design

**BlenderMCP capture (locked, confirmed Phases 2-6 Lesson 05 plus Lesson 06 Phase 1, Phase 2 PRODUCTION, and Phase 3 PRODUCTION sub-chat A):**
- Lowercase `blender:execute_blender_code` (uppercase hangs)
- NO `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere (kills BlenderMCP addon mid-execution; recovery requires restarting Blender)
- Clean Blender state manually instead (`bpy.data.objects.remove(obj, do_unlink=True)`, etc.); Phase 3 PRODUCTION fresh scene reset at sub-chat A start removed L06_RingStack from Phase 2 state
- Render engine fallback path: try `BLENDER_EEVEE_NEXT` first; on `TypeError` or enum error, fall back to `BLENDER_EEVEE` (Phase 3 PRODUCTION sub-chat A confirmed `BLENDER_EEVEE_NEXT` not present in this Blender build; `BLENDER_EEVEE` used for all 6 sub-chat A captures)
- Pie menus and other transient UI Blender's render API cannot reach: manual Win+Shift+S capture into `images/` directly (Phase 3 PRODUCTION sub-chat B #20 precedent: M Merge menu via Win+Shift+S with `By Distance` row hovered, saved at 819x405 RGBA 49,135 bytes; locked spec target was 200-300 px wide / 250-350 px tall but the actual capture exceeds with useful viewport context)
- OpenGL viewport render path: find the first `VIEW_3D` area and its `WINDOW` region, then `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Re-find the VIEW_3D area and region in each `blender:execute_blender_code` block since Python local variables do not persist
- `bpy.ops.screen.screenshot` (no-suffix full-window variant) works cleanly with `temp_override` for capturing the entire Blender app window; `bpy.ops.screen.screenshot_area` for area-only captures
- UNC path `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\...` works cleanly from Blender Python on Windows
- **`bpy.ops.ed.undo()` inside `temp_override` blocks is a known connection-drop trigger** (Phase 3 PRODUCTION sub-chat A discovery: triggered `[WinError 10054]` mid-sub-chat during #18 Panel 2 setup; recovery required Blender restart). Locked workflow lesson: for multi-panel sub-chats involving state rewind, prefer the `or recreate` clauses over `ed.undo()` paths; rebuild fresh per panel instead of undoing
- Default user-perspective view rotation: `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()`. View distance scales with subject size
- Pillow 12.2.0 installed at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL`; survives Blender restarts; used for multi-panel composites

**Blender 5.1.1 op-name and add-on discoveries (locked through Lesson 05 Phase 6 plus Lesson 06 Phase 1, Phase 2, and Phase 3 PRODUCTION):**
- `bpy.ops.mesh.inset_faces` does NOT exist; use `bpy.ops.mesh.inset` instead (applied across Phase 3 PRODUCTION #17 / #18 / #19)
- `bpy.ops.mesh.delete(type='FACES')` (plural) does NOT exist; valid enum values are `('VERT', 'EDGE', 'FACE', 'EDGE_FACE', 'ONLY_FACE')`; use `type='FACE'` (singular) (applied in Phase 3 PRODUCTION #50 fill operations setup)
- `bpy.ops.mesh.select_non_manifold()` works in 5.1.1 without bmesh fallback
- Prefer `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` for unambiguous local-mesh-space `plane_co` semantics
- `bmesh.ops.subdivide_edges` with cuts=N produces ONLY equal-spaced cuts; for unequal-spaced cuts, use `bmesh.ops.bisect_plane` per cut plane
- `bpy.ops.mesh.select_nth(offset=0, skip=1)` (Checker Deselect) requires loop-selection-history metadata set by interactive Alt+click loop selection; `bm.edges[i].select = True` does NOT produce that metadata; manual alternating-ring bmesh selection is the working scripted equivalent that produces the same visual result (Phase 2 sub-chat A #48 precedent)
- `bpy.ops.object.join` bakes source-object transforms into the joined verts' local coords; use `obj.matrix_world @ v.co` world-coord filtering for vertex selection after a join (Phase 2 sub-chat A #12 precedent)
- **`bpy.ops.mesh.beautify_fill()` is a no-op on 2-triangle topology** (Phase 3 PRODUCTION sub-chat A #50 Panel 3 discovery: 4-edge boundary fill() produces 2 coplanar triangles indistinguishable from an n-gon in solid shading; beautify_fill has no adjacent triangle pairs to swap diagonals between; deviated to `bpy.ops.mesh.poke()` which inserts a center vertex creating a visually-distinct 6-triangle fan)
- **Loop Tools is on the Extensions Platform in Blender 4.2+/5.x**, NOT in the bundled Add-ons tab. Scripted install path: `bpy.ops.extensions.repo_sync_all()` then `bpy.ops.extensions.package_install(repo_index=0, pkg_id='looptools', enable_on_install=True)`. Catalog id is `looptools` (single word). Install state persists across Blender restarts; not material to Phase 3 INTEGRATION

**Brand palette (style guide v4 current):**
- Blender brand / SVG accent rail: `#FF6B00`
- Course / structure / Z-axis blue: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / Y-axis green / Normals / positive overlay badges: `#4ADE80`
- Portfolio / outcome / Caution / warning glyph: `#F5C242`
- X-axis red / Warning / negative glyph / warning overlay badges: `#E63946`
- Badge text dark on green: `#0f1a14`; badge text light on red: `#ffffff`
- Decorative-shape-only overlay stroke: `#ffffff` width 2 (c13 / c14 / c15)

**SVG house style (style guide v4):**
- Default viewBox `0 0 800 560`; dense-content variant `0 0 800 680`
- Top 3px `#FF6B00` accent rail at (0, 0)
- System-ui font stack
- `color="#222"` retained on standalone files for `<img>` fallback; strip on inline (confirmed sub-chat 2 #8 and Phase 2 sub-chat B #44 inlining; applies to #21 inlining at Phase 3 INTEGRATION)
- Heading at y=56 size 24 weight 700; subtitle at y=84 size 14 opacity 0.65; divider at y=108
- First body subhead at y=138 size 18 weight 600 (or row content from y=138 on cheat-sheet layouts per Phase 2 sub-chat B #44 5-row precedent; or paired-panel content from y=138 per Phase 1 sub-chat C #8 6-panel grid precedent; or paired-panel layout per Phase 3 sub-chat B #21 precedent with two 350px-wide panels at x=40..390 and x=410..760, 32px header bars, 3x3 face-grid mesh diagrams centered at y=307.5 within each panel body, captions at y=460)
- Footer tip card y=506-540 on 560 canvas (y=641-675 on 680 variant); Variant B (4px left rail) is matured default; Variant A (tinted fill) grandfathered. Two-line wrapped footer prose via single `<text>` with inner `<tspan x="58" dy="15">` per Phase 3 sub-chat B #21 precedent
- Per-file id prefix prevents collisions across multiple inline SVGs on one HTML page (Phase 1 `pf` for #8; Phase 2 `sr` for #44; Phase 3 `dd` for #21)

**Documentation rhythm:**
- Per-lesson `lesson_NN_integration_progress.md` is the running narrative log (live; lean after archive sweep at lesson close)
- Per-lesson `lesson_NN_integration_progress_archive.md` is the close-out archive of locked PRODUCTION specs and INTEGRATION plans (per-lesson archive pattern locked 2026-05-21; created at close-out chat)
- Per-lesson `lesson_NN_completion_handoff.md` is the close-out summary written at lesson close
- `status.md` is the project-wide snapshot, rolled at every lesson close
- `status_archive.md` is the project-wide archive (parallel pattern; predates the per-lesson archive)
- This `session.md` is the resume pointer, overwritten every milestone

**Cadence:**
- One production chat plus one integration chat per phase by default
- Sub-chats expected for any phase of 6+ images
- Lesson 06 Phase 1 at 10 images used 8 chats total (1 plan-lock + 3 PRODUCTION sub-chats + 1 PRODUCTION recovery sub-chat + 1 INTEGRATION plan-lock + 2 INTEGRATION sub-chats)
- Lesson 06 Phase 2 PRODUCTION at 10 images used 3 chats (1 plan-lock + 2 execution sub-chats)
- Lesson 06 Phase 2 INTEGRATION at 10 images used 4 chats (1 plan-lock + sub-chat 1 + sub-chat 2a + sub-chat 2b)
- Lesson 06 Phase 3 PRODUCTION at 8 images used 3 chats (1 plan-lock + sub-chat A + sub-chat B)
- Lesson 06 Phase 3 INTEGRATION at 8 images projected at 3-4 chats (1 plan-lock + 2 execution sub-chats; possibly + 1 if context tightens during the mesh-cleanup sub-chat covering c20 + c23 overlays plus #21 SVG inlining)
- Warn Ray before context gets tight rather than letting automatic compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build
- Propose plan plus anchor choices plus grouping decisions before integration; lock plan in writing first, then edit

**Placement-table state legend:**
- `not captured; not integrated` (or `not produced; not integrated`)
- `produced; not integrated` (or `captured; not integrated`)
- `produced; handoff_written; not integrated`
- `integrated`

**Progress-doc archive sweep pattern (locked 2026-05-21 for per-lesson use; applied to Lesson 05 only so far; retroactive sweeps for Lessons 02-04 explicitly out of scope per Ray's direction):**
- At lesson close, the `lesson_NN_integration_progress.md` plan sections (locked PRODUCTION specs, locked INTEGRATION plans) move to a new `lesson_NN_integration_progress_archive.md` companion file
- Live progress doc keeps: header, Status section chronological log, Locked rules, Placement table, Phase plan summary table, Available/Missing sections, ID prefix registry, SVG design notes, PNG capture notes, Next chat pointer
- Archive doc holds: locked PRODUCTION specs and locked INTEGRATION plans for every phase, verbatim, prefixed with a short migration header
- Live doc gets a short pointer block right after the Status section noting that the plan sections moved to the archive at the given date
- Live doc typically drops to 40-55% of its end-of-lesson size; archive holds the bulk

**Style guide v4 addenda pending at Lesson 06 close:**
- Fold c3 thin-strip variant (font-size 14, badge height 22, rx 4, highlight stroke-width 2, leader stroke-width 2, marker r 4) into style guide v4 as documented deviation for sub-720px-wide image strips
- Fold the overlay coordinate resolution workflow (Filesystem:copy_file_user_to_claude + Pillow two-scan pattern) into style guide v4 as the locked path for PNG-overlay pixel work
- Fold the decorative-shape-only overlay variant (c13 / c14 / c15 stroke-only tool-indicator overlays without highlight ellipse or badge) into style guide v4 as documented variant for tool-indicator captures
- Fold the paired-panel SVG layout variant (Phase 3 sub-chat B #21 precedent: two equal-width panels with header bars and mesh diagrams) into style guide v4 as documented variant for comparison-style SVGs
- Fold the two-line footer tip pattern (single `<text>` with inner `<tspan x="58" dy="15">` for line break, used for footer prose exceeding the single-line width budget) into style guide v4 as documented variant for verbose footer tips
- Note the Loop Tools Extensions Platform install path in any future BlenderMCP capture recipe involving add-ons that may have migrated to Extensions Platform
- Note the `Filesystem:edit_file` trailing-blank-line normalization workaround (retry with trailing blank line excluded from oldText if the initial match fails) as a documented edge case
- Note the `bpy.ops.ed.undo()` inside `temp_override` connection-drop pattern (Phase 3 PRODUCTION sub-chat A discovery) in the BlenderMCP capture recipe section; prefer `or recreate` clauses for state rewind in multi-panel sub-chats

---

## Specifics (per next-chat plan)

If next chat is **Lesson 06 Phase 3 INTEGRATION plan-lock** (recommended default):

- Project root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Source docs to consult (in order): this `session.md`, then `lesson_06_integration_progress.md` (Status section now has Phase 3 PRODUCTION COMPLETE through the 2026-05-23 sub-chat B bullet; Placement table rows for the 8 Phase 3 images show `captured; not integrated` for the 7 PNGs and `produced; not integrated` for #21 SVG; `Phase plan` section carries the Phase 3 line; bottom-of-doc `Next chat` section already points at Phase 3 INTEGRATION plan-lock with full framing), then `lesson_06_image_requirements.md` (entries #17 through #23 plus #50 for placement intent and AI prompt guidance), then `images/IMAGE_STYLE_GUIDE.md` v4 only if a gap surfaces
- Phase 3 INTEGRATION scope: 8 images covering `#inset-outset` (3 plain PNG figures: #17, #18, #19) plus `#mesh-cleanup` (5 images: #20 with c20 overlay, #21 SVG inlined with `dd` prefix, #22 plain, #23 with c23 overlay, #50 plain). 7 PNGs + 1 SVG inlining. 2 PNG overlays (c20 menu-row highlight on the hovered `By Distance` row of #20; c23 single-region highlight on a flipped-face region of #23)
- Sub-chat split likely 2 sub-chats:
  - **Sub-chat 1** · `#inset-outset` 3 plain figures (#17, #18, #19). Lower complexity, no overlays, no SVG inlining
  - **Sub-chat 2** · `#mesh-cleanup` 5 images (#20 with c20, #21 SVG inline with `dd` prefix, #22 plain, #23 with c23, #50 plain). Higher complexity; 2 overlays plus 1 SVG inlining
- Per-image plan-lock work items: anchor texts (3-5 line `oldText` per image, locked verbatim preserving any pre-existing en-dashes and right-arrows), em-dash-free figcaptions and alt texts with middle-dot for separation, overlay specs with locked geometry per c46 / c10 / c16 precedent and pixel coords resolved via Pillow scan at plan-lock, SVG inlining checklist for #21 per the #8 / #44 precedent
- Locked spec for c20: positive-green `BY DISTANCE` badge on the hovered `By Distance` row of the M Merge menu, ellipse highlight + leader + marker + badge per the c46 / c10 / c16 precedent geometry; pixel coords resolved at plan-lock via brighter-row band scan on the 819x405 capture
- Locked spec for c23: warning-red `FLIPPED` badge on one of the 3 deliberately flipped faces in the right cheek region of Suzanne, ellipse highlight + leader + marker + badge per the c46 / c10 / c16 precedent geometry; pixel coords resolved at plan-lock via red-pixel band scan on the 1280x720 capture
- Locked spec for #21 SVG inlining: strip root `color="#222"`, preserve all 10 `dd-*` ids verbatim, no multi-line attribute continuations to collapse (the SVG was authored with single-line elements), no decorative ASCII-divider comments to prune, keep 5 short structural comments
- Lesson HTML PART 05 indentation depth (`#inset-outset`, `#mesh-cleanup`) to be verified at plan-lock via section slice read per the Phase 2 PART 04 pattern
- Plan-lock chat scope: no HTML edits, no image production. One `Filesystem:edit_file` commit (insertion of new Phase 3 INTEGRATION plan section into progress doc following the structural model of the Phase 2 INTEGRATION plan section)
- Locked rules carry forward unchanged (see Process expectations section above): WSL `\\wsl$\Ubuntu\` paths only, edit_file dry-run-then-commit-then-verify, write_file for full-doc overwrites and new files only, no new em-dashes in any new content, inline-stacked PNG annotation overlay pattern, SVG inlining checklist, c46 / c10 / c16 precedent for pixel-coord resolution via copy_file_user_to_claude + Pillow scans
- Phase 3 INTEGRATION plan-lock close criterion: per-image specs locked in writing for all 8 images (anchor texts, figcaptions, alt texts, overlay deferrals, SVG inlining checklist), sub-chat split locked in writing, execution cadence rules carry-forward in writing, close criterion locked in writing; one Filesystem:edit_file commit landed clean; this `session.md` rewritten at plan-lock close to point at Phase 3 INTEGRATION sub-chat 1 execution
- Budget note: Phase 3 INTEGRATION plan-lock follows the same structural pattern as the Phase 2 INTEGRATION plan-lock chat (which used a 4-doc read pass plus one large plan-lock write of 336 new lines / +29,242 bytes). Phase 3's 8 images vs Phase 2's 10 leaves slightly more headroom; should fit in one plan-lock chat with comfortable margin. Warn Ray before automatic compaction risk

If next chat is **Lesson 05 retroactive browser QA pass** (alternative; closes long-deferred QA debt):

- Open `lesson_05_organic_modeling_techniques.html` in a browser, walk all 30 figures across Phases 1-6 of Lesson 05, verify each renders correctly (inline SVGs not broken by `color="#222"` strip, PNG overlays positioned correctly per the inline-stacked pattern, no broken image refs, no layout overflow on standard viewport widths)
- Flag any rendering issues for follow-up fixes; if no issues found, append a Status section bullet to the right Lesson 05 doc (live `lesson_05_integration_progress.md` if it has a Status section still; otherwise the archive) noting QA pass complete
- Phase 3 INTEGRATION plan-lock can pick up after the QA pass closes

If next chat is **Lesson 06 mid-lesson browser QA pass** (alternative; sanity check before continuing with Phase 3 INTEGRATION):

- Open `lesson_06_edit_mode_essentials.html` in a browser, walk all 20 Phase 1 + Phase 2 figures, verify each renders correctly (c2 / c3 / c46 / c10 / c16 PNG overlays positioned correctly per the inline-stacked pattern; c13 / c14 / c15 decorative-shape-only overlays trace their intended regions on the 1280x720 source PNGs; #8 `pf` and #44 `sr` inline SVGs render in both light and dark mode; no broken image refs; no layout overflow on standard viewport widths)
- Flag any rendering issues for follow-up fixes; if no issues found, append a Status section bullet to `lesson_06_integration_progress.md` noting mid-lesson QA pass complete
- Phase 3 INTEGRATION plan-lock can pick up after the QA pass closes

If next chat is **non-Blender-course work** (alternative; this `session.md` closes Phase 3 PRODUCTION cleanly):

- Pick up wherever Ray directs. Phase 3 INTEGRATION plan-lock can start any future chat without losing context; Phase 3 PRODUCTION is fully closed with all 8 images on disk, placement table updated through #20 / #21, bottom-of-doc Next chat pointer in the progress doc already framed for Phase 3 INTEGRATION plan-lock
- If non-Blender-course work runs for multiple chats, leave this `session.md` alone (it will continue pointing at Lesson 06 Phase 3 INTEGRATION plan-lock whenever Ray returns to the Blender course)

---


---
