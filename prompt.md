Lesson 11 Phase 1 PRODUCTION. Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course\
L11 planning is COMPLETE and locked; L10 is fully closed (30/30 + browser-QA CLEAN), no carry-over.
Read at start (in order):

\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md
\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_11_integration_progress.md (the locked plan — split, phases, D1/D2, #14 produce-in-P4-A/integrate-in-P5, id-prefix + c{N} registries)
\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_11_image_requirements.md (figure spec + AI prompts + placement map)
\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md (v6 — locked conventions LD1–21)
\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md (locked inline pattern + carry-forward rules)

This chat = Phase 1 PRODUCTION + INTEGRATION inline (3-figure phase, single chat), section #what-is-pbr:

#1 pbr_workflow_comparison (PNG) — infographic; sourcing route (Pillow-vignette host vs Canva/Adobe) is a PRODUCTION-time call
#2 three_pillars_diagram (inline SVG, id-prefix tp)
#3 light_energy_flowchart (inline SVG, id-prefix le) — produced once here, reused-by-ref in P2 per D1

At session start verify edit_file + write_file + get_file_info loaded (tool_search silently if needed; write_file known to lag — may take a 2nd pass). No BlenderMCP needed for P1 (no Blender render; #1 raster, #2/#3 inline SVG). Inline SVGs: build to v6 viewBoxes, cairosvg 1:1 check on light + dark BEFORE commit, strip root color="#222" on inlining. PNG overlays (if any): pixel-verify 1:1 before commit. edit_file dryRun→commit→get_file_info per insert; write_file for any new standalone .svg (never create_file). WSL \\wsl$\Ubuntu\ paths only. No new em-dashes (&#183; separators; preserve pre-existing em/en-dashes verbatim through exact anchors). Update lesson_11_integration_progress.md Status log + repoint session.md to P2 at close. Warn before context tightens rather than letting auto-compaction happen.
