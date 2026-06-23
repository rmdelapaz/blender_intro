L24 (Animation Fundamentals) in progress. Do NOT re-open or re-plan.
READ in order: session.md (top block) → lesson_24_integration_progress.md §7 "PNG-GRAPH PHASE plan-lock" (#27 + #32) + §6 newest-first to END → images/IMAGE_STYLE_GUIDE.md v6.
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course

DONE: 19/19 SVG + 3/5 PNG (#13, #29, #22). Blender TRUE-PRISTINE; nothing mid-flight; no temps.
NEXT = last 2 PNGs #27 graph_editor_arcs + #32 graph_bounce_curve. Both PLAN-LOCKED in §7 (read it; do not re-spec). MANUAL Graph Editor (Q4) — NOT bridge-drivable: Ray drives framing/channels/handles + Win+Shift+S; Claude guidance only, does NOT script the capture. One shared staged ball serves both (lesson-body Z keys f1=10/f18=1/f36=7/f54=1/f66=4/f78=1/f84=2/f90=1, End 96).
FIRST ACTION: ask Ray the staging path — (a) Claude scripts shared ball via bridge [verify TRUE-PRISTINE before+after], or (b) Ray stages own ball [no bridge work]. Do nothing in Blender until Ray picks.
Per LD16: Ray saves snips DIRECT to images\ (lesson_24_27_graph_editor_arcs.png, lesson_24_32_graph_bounce_curve.png) → Claude get_file_info + copy_file_user_to_claude + view → Pillow rewrite-in-place via bridge if oversized. Record each snip px dims (= c27/c32 overlay viewBox). c27/c32 reserved.

THEN: INTEGRATION — inline 19 SVG (strip color="#222", re-indent, collapse multi-line attrs, prune ASCII-divider comments); place 5 PNG w/ c{N} overlays (viewBoxes: c13=1920x982, c29=1006x1010, c22=1291x2936, c27/c32=record at capture). cairosvg pixel-verify Claude-side before EVERY overlay commit. Both #27/#32 cards open at col 20 → deeper-indent figure variant.
THEN: browser QA narrow 380px + wide 900px (headless Chromium/Playwright) → close (bump session.md ONLY at full close).

TOOLS: tool_search → Filesystem (read_text_file; get_file_info; write_file; edit_file dryRun→commit→re-copy+UTF-8-recount for the doc; copy_file_user_to_claude) + BlenderMCP (execute_blender_code) only if Ray picks (a) or a Pillow rewrite is needed. cairosvg 2.9.0 + PIL Claude-side; temps to /tmp; no Filesystem delete (remove temps via bridge os.remove).
RULES: \\wsl$\ paths only; verify Blender TRUE-PRISTINE before+after ANY bridge work (3 objs Camera+Cube+Light, baseline in session.md pristine block + §6); 0 new em-dashes (doc literal-U+2014 baseline 0, lesson-HTML baseline 58 — re-verify); write_file for new files; bump session.md ONLY at full close; warn before auto-compaction.
Lesson-HTML invariant TARGETs at close: figure 24 / figcaption 24 / img 5 / svg 24 / mermaid 0 / em-dash 58 / color222 0.
