
L32 (Particle Systems Overview) — START. L31 is FULLY CLOSED (QA-PASS 2026-06-27, live 292,355 B); do not reopen it.
ROOT: \\wsl$\Ubuntu\home\practicalace\projects\blender_course (Filesystem MCP only; bash CANNOT reach \\wsl$\).
Module 7 (Advanced Modeling), lesson 5. Slug particle_systems_overview. File: lesson_32_particle_systems_overview.html. Next-link into L32 from L31 confirmed 1.
Source of truth: session.md (head line already = L32 ACTIVE/NEXT) + create lesson_32_integration_progress.md.

FIRST STEPS:
1. get_file_info + read the live L32 HTML to determine: old-gen (created 2026-06-12, needs MODERNIZE — neutralize #667eea/#764ba2→currentColor, KEEP tables w/ header neutralized, decide mermaid keep-vs-strip) vs new-gen.
2. Baseline-invariant the live file (UTF-8 python3 on a fresh Claude-side copy, NOT grep): bytes, figure/figcaption/img/svg, em-dash U+2014 (PRESERVE verbatim, recount every checkpoint), literal U+00B7 0, #667eea/#764ba2, <table>, mermaid import + rendered class="mermaid" divs.
3. Read lesson_32_image_requirements.md for the figure roster; triage BUILD (High+Medium) vs DEFER (Lower); set format split (inline SVG vs PNG) and c{N} overlay plan.

PIPELINE RULES (carry forward, unchanged):
- \\wsl$\ paths only (never \\wsl.localhost\). 0 new em-dashes — use &#183;. Filesystem:write_file for new files/full overwrites (never create_file). edit_file dryRun→commit→get_file_info.
- Inline SVGs: color="currentColor" (NEVER hardcode color="#222" — that was the L31 dark-mode defect; house standard is color222 0).
- Any width:100% <table> MUST be wrapped in <div class="table-wrap"> (main.css has .table-wrap{overflow-x:auto}) or it overflows at 380px — L30/L31 both hit this.
- PNG overlays: cairosvg pixel-verify Claude-side before EVERY overlay commit; overlay viewBox must equal the on-disk PNG pixel box 1:1.
- PRODUCTION ≥5 figs → own sub-chat; INTEGRATION ≥6 figs → own chat.
- Browser QA (own chat, after integration): Claude-side real Chromium at /opt/google/chrome/chrome via Playwright (azureedge/playwright CDN is egress-blocked, so use that system Chrome via executable_path; jsdelivr also blocked — swap mermaid import for an inline offline stub on a render-only copy, never the live file). 4 configs 380/900 × dark/light: 0 doc overflow, all PNGs decode (eager+scroll), overlays 1:1, inline SVGs currentColor inverts, mermaid divs lay out.
- Blender is TRUE-PRISTINE (matches L22-close baseline) — verify before+after any rigged/sim staging.
- Warn Ray to start a fresh chat before auto-compaction.
