L22 Blender Course — OPEN NEXT LESSON: "Depth of Field and Focus". Read in order before anything else:
1. \\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md
2. \\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md (v6)
3. \\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_22_image_requirements.md

STATE: L21 fully COMPLETE (26/26, integrated, committed, QA PASS narrow+wide). session.md shows "Active lesson: NONE / next per Ray". Standing QA queue empty (L05–L21 cleared). Blender true-pristine.

LESSON FILE: lesson_22_depth_of_field_and_focus.html
REQUIREMENTS DOC: lesson_22_image_requirements.md EXISTS — 30 figures proposed (12 SVG + 18 PNG per its naming convention), 3 priority tiers (High 9 / Medium 11 / Lower 10). NOTE: that doc is a generic AI-prompt-style spec — its color palette (#2b2b2b/#ff8c00/#00bcd4) and "AI Image Generation Prompts" do NOT match our locked pipeline. IMAGE_STYLE_GUIDE v6 + our render recipes (SUN-recipe / color-dependent F12 / DoF f-stop / UI-chrome) and the #FF6B00 brand palette OVERRIDE it. Use the requirements doc only for figure list, purpose, section placement (real section IDs), and naming convention. Section IDs in that doc: dof-fundamentals, aperture-fstop, focus-distance, bokeh, rack-focus, practical-dof-scenarios, troubleshooting-dof, project-dof-mastery, summary — VERIFY against the live HTML.

TASK — open L22 production:
1. Capture invariant baseline against the LIVE HTML (UTF-8-aware Python, NEVER shell grep — locale unset miscounts): bytes; figure/figcaption/img/svg counts; mermaid count; em-dash U+2014 count; color222 count. Record actual section IDs in document order. (Do NOT trust any count carried from a prior chat.)
2. Create lesson_22_integration_progress.md as source-of-truth, mirroring the L21 structure: §1 invariants, §2 locked roster (resolve which tiers to build — L20/L21 built High+Medium, deferred Lower), §3 id-prefix registry (one unique prefix per inline SVG), §4 c{N} overlay registry, §5 production cadence, §6 status log (first entry = "L22 OPENED" with baseline).
3. Update session.md: set Active lesson = L22, point source-of-truth at the new progress doc, set read order.
4. Plan-lock the roster + open questions (roster size, per-PNG render recipe, any tier changes) BEFORE building. Pilot one SVG, then batches of 3.
   - DoF-specific note: this lesson is ABOUT depth of field — the DoF render figures (#2 shallow/deep, #9 bokeh, #19 cycles/eevee, #22 samples, #30 gallery) need real camera DoF + high-frequency-detail FG/BG (cube clusters, NOT smooth spheres) for blur to read (LD from L21 #17). Bokeh needs Cycles + high samples.

LOCKED RULES (carried across all lessons):
- \\wsl$\ paths only (never \\wsl.localhost\); Chrome can't use wsl$ as a file: host — QA via http://localhost:5504/lesson_22_depth_of_field_and_focus.html.
- 0 new em-dashes in authored content — use &#183; / . / , / ( ) / :. Preserve all pre-existing literal U+2014 verbatim; re-verify the count at every checkpoint.
- Filesystem:write_file for new files / full overwrites (never create_file). Filesystem:edit_file dryRun→commit→get_file_info when available; else read-full→edit-in-context→write_file overwrite, showing diffs before each overwrite.
- blender:execute_blender_code lowercase only. Confirm get_scene_info true-pristine (Camera+Cube+Light, 0 mats/0 node_groups, EEVEE/AgX/None/exp0, res 1920/1080/100, world grey 0.88 str1.0, Light POINT 1000, guides OFF, DoF OFF, viewport out of camera) BEFORE and AFTER any bridge work; restore at close.
- No Filesystem delete tool — delete temps via Blender bridge os.remove.
- cairosvg pixel-verify Claude-side before EVERY PNG-overlay commit (LD19).
- SVGs: hand-written, viewBox 0 0 800 560 (or 800 680 dense), transparent, currentColor, 3px #FF6B00 top strip, system-ui stack, role/aria/title/desc; standalone keeps color="#222", STRIP on inline. cairosvg render-check light+dark before sign-off.
- PNG render routing: color-dependent → F12 Standard/None (LD17); grey-clay/arrangement → SUN-recipe (SUN rx66°/en1.75/angle10°, world grey 0.039/1.0); DoF → real camera DoF + high-frequency-detail FG/BG; UI-chrome → full-window screen.screenshot + Pillow save. Composites: L20 convention (LANCZOS panels, (36,36,38) label band, 3px #FF6B00 strip, 2px orange dividers, NO baked text — labels land in c{N} overlays at integration). Each grid cell gets its own top label band.
- Browser QA at close: fresh wide-desktop session; if high-DPR Page.captureScreenshot times out, isolate the figure in a short standalone doc (clone figure → empty body → small width) then screenshot — page stays JS-responsive, it's a capture-surface limit not a defect. Verify overlay alignment at both narrow AND wide widths.

Begin with the read order, then capture the live-HTML baseline and report it before creating the progress doc.
