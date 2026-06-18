
L18 Blender course — START FIGURE PIPELINE. L17 is fully DONE (figure-complete 30/30 + browser-QA PASS/CLEAN, real HTML 274,929 B untouched). Standing browser-QA queue EMPTY (L05–L17 cleared).
Root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course (always \\wsl$, never \\wsl.localhost)

Target: lesson_18_eevee_realtime_rendering.html

Style: terse, autonomous, no commentary; warn before context tightens; docs-first close-out; in-chat handoff by default.
Bridge / path rules (unchanged): Claude-side bash CANNOT reach \\wsl$\ UNC — use blender:execute_blender_code open() for authoritative file reads/writes and byte counts, or Filesystem:copy_file_user_to_claude to pull files Claude-side. Renders go Windows tempdir → Pillow crop → WSL relay (direct UNC screenshot writes truncate to 0 B). Never call bpy.ops.wm.read_factory_settings from MCP. edit_file dryRun→commit→get_file_info, one count=1 anchor each. em-dash: Python count('\u2014') authoritative, add none beyond baseline.
READ FIRST (in order):

session.md — banner (newest leads = L17 DONE entry; L18 not yet started)
images/IMAGE_STYLE_GUIDE.md v6 (LD1–21) — house style, BlenderMCP render recipes, overlay/pixel-verify conventions, inline-SVG pattern
lesson_18_image_requirements.md (v1.0, Nov 11 2025) — enumerates the figure list + AI-gen prompts. Do NOT take at face value — same reconciliation as L17: prompts are content briefs only (course hand-codes SVGs + does BlenderMCP renders/Pillow composites with c{N} overlays at integration, NOT AI-gen); brand palette governs (orange #FF6B00, not #ff8c00); Blender is 5.1.1 not 4.0; SVG canvas is v6 (0 0 800 560/800 680), not the prompt raster dims. Reconcile figure count/numbering/SVG-vs-PNG split against the doc's own "SVG Diagram Recommendations" + "Image Placement Suggestions" tables before locking the plan.
For the eventual browser-QA pass: lesson_17_browser_qa_progress.md + lesson_16_browser_qa_progress.md — exact harness recipe (Playwright + real Chromium /opt/pw-browsers/chromium-1194, local mermaid@10.9.6 over http://127.0.0.1, neutralize favicon/clipboard.js/course-enhancements.js, 6 combos dark+light × 1920/1024/414, overlay bbox dx/dy/dw/dh, hardened last-figure scroll, PIL.Image.MAX_IMAGE_PIXELS=None).

FIRST ACTIONS:

Create lesson_18_integration_progress.md (mirror the L17 doc shape: source-of-truth list, requirements reconciliation, figure registry, locked plan, locked-rules, §6 per-figure detail, Status log newest-first). It does not exist yet.
Lock the figure plan and phase order (HTML section order per the placement table).

L18 ENTRY-STATE P0 (byte-exact, verified on the real UNC file via bridge Python 2026-06-18):

Bytes: 157,593 · em-dash U+2014: 6 (baseline — all pre-existing body prose; &mdash; 0; keep at 6, add none) · body pristine/figure-free: figure/figcaption 0/0, img 0, <svg>/</svg> 0/0, <marker> 0, viewBox 0, wrapper-divs 0, color222 0.
Mermaid: 1 LIVE diagram block (<div class="mermaid"> 1; 5 total mermaid string hits = head ESM import + initialize + the 1 body block). Unlike L17 — D5 (keep-mermaid) DOES apply to L18. The browser-QA harness must render mermaid 1/1 (like L11/L16), and integration must preserve the existing diagram.
Sections: 12, no dup ids, document order: what-is-eevee · eevee-vs-cycles · basic-settings · screen-space-effects · bloom-effects · shadows · indirect-lighting · material-considerations · optimization · troubleshooting · project · summary.

TASK: Reconcile requirements → lock plan → produce + integrate figures phase-by-phase (SVGs hand-coded per v6; PNGs via BlenderMCP renders / UI-chrome captures / Pillow composites + c{N} overlays, every overlay cairosvg-pixel-verified 1:1 before HTML commit; figcaption OUTSIDE wrapper; img style display:block;max-width:100%;height:auto;margin:0). Update session.md banner + the new progress doc as source-of-truth at each phase close. Browser-QA pass comes last, after figure-complete.
