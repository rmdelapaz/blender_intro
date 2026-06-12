L15 PLANNING KICKOFF — Understanding Light Types. Write the lesson_15_integration_progress.md tracker (figure registry + id-prefix registry + c{N} namespace + phase plan + Status log + Locked-rules), mirroring the L13/L14 structure. NO figure production this chat — planning only.
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
READ FIRST in order: session.md (top banner + "Next active target: L15" section + Locked rules), lesson_15_image_requirements.md (FULL — 40 images), images/IMAGE_STYLE_GUIDE.md v6 (locked decisions 1–21).

═══ STATE (entry) ═══
L15 = "Understanding Light Types" (Module 4: Lighting & Rendering).
- HTML: lesson_15_understanding_light_types.html = 191,258 B, PRISTINE pre-figure body (untouched since Nov-7-2025). Confirm via get_file_info on a FRESH copy_file_user_to_claude copy at kickoff.
- Requirements doc: lesson_15_image_requirements.md = 64,702 B, enumerates 40 images (#1–#40 + style/accessibility/production notes; its own 4-week "Phase 1–4" grouping is the DOC's, not ours).
- NO figure work started. NO lesson_15_integration_progress.md exists yet — creating it IS the deliverable.
Prior lesson just closed: L09 browser-QA PASS 2026-06-12 (logged in session.md + lesson_09_integration_progress.md + lesson_09_browser_qa_progress.md). L14 figure work COMPLETE. Both already reflected in session.md — don't re-touch.

═══ TASK: write lesson_15_integration_progress.md ═══
Mirror the L13/L14 progress-doc structure:
1. Figure registry: all 40 images (number, filename lesson_15_NN_slug.ext, section anchor, SVG-vs-PNG type, overlay c{N} or inline-SVG prefix, status=not produced/not integrated). Requirements doc gives purpose + type per figure (mix of SVG infographics, annotated screenshots, viewport renders, multi-panel composites, warning vignettes).
2. id-prefix registry (one short prefix per inline SVG) + c{N} overlay namespace, all collision-checked against the live HTML.
3. Phase plan in HTML SECTION ORDER (read the live HTML's section ids to sequence) — OUR convention: sub-chat split for ≥5-figure phases (capture-method boundary: hand-coded SVG / UI-chrome / viewport-render), INTEGRATION its OWN chat for ≥6-figure phases; <5 single-chat.
4. Status log (kickoff entry) + Locked-rules block (carry the L09/L14 block).
5. Flag any DECISIONS (SVG-vs-PNG ambiguities, reuse-by-ref, panel counts) for resolution at each phase plan-lock.

═══ LOCKED RULES (carry) ═══
- House BRAND palette governs all overlays/SVGs (#FF6B00/#4A9EFF/#B47EE8/#FF7EA8/#4ADE80/#F5C242/#E63946/#0f1a14/#ffffff). The requirements doc's #2b2b2b/#ff8c00/#00ffff etc. + its "AI-prompt" raster language are LOOSE guidance only — reconcile at plan-lock. Every course SVG is HAND-CODED (never Canva/AI raster).
- WSL \\wsl$\Ubuntu\ paths only (bash /mnt/wsl mount is a SEPARATE near-empty FS, NOT the project — never read baselines or commit there).
- Filesystem:write_file for the new tracker doc (write to /home/claude scratch first if needed; /mnt/user-data/uploads is read-only). copy_file_user_to_claude to refresh + verify bytes. tool_search for deferred Filesystem tools (silently).
- Editing convention for later phases: anchor by unique TEXT span (never section id); Filesystem:edit_file dryRun→commit→get_file_info; no new em-dashes (&#183; separators; &#8211;/&#8594;/&#215;/&#8217; content entities fine); Python read().count() authoritative for multibyte (grep miscounts); inline-SVG conventions (strip root color="#222", re-indent figure col20/svg col24/children col28/deeper col32, preserve role/aria/title/desc/id); PNG overlay = wrapper-div + img margin:0 + overlay-svg inset:0 viewBox=PNG-px, NO baked labels; pixel-verify every PNG overlay via cairosvg-over-PNG (Claude-side) BEFORE commit.
- BlenderMCP (for render figures, later phases): lowercase blender:execute_blender_code; clean scene manually via bpy.data.objects.remove (NEVER read_factory_settings); EEVEE + Cycles for reflection/refraction; color-dependent render recipe (v6 LD17: view_transform Standard/look None, F12 render.render NOT render.opengl) only if a PRODUCTION review shows washing; RESTORE scene to clean base at close.
- plan-lock before any build; warn before context tightens rather than letting auto-compaction happen.

═══ AFTER L15 (deferred queue, behind L15) ═══
L05–L08 browser-QA (L08 parked), L07 #20/#21 held flags, L11 1024-width sweep; lesson-body pass for L09-F2 (414 #summary table overflow 25px ~line 5714) + L12 (dup id="uv-editor-interface" + broken TOC) + L13 (414 table overflow #what-is-texture-painting). All itemized in session.md Standing-deferred.
