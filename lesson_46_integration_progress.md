# Lesson 46 — Rendering for Production · Integration Progress

Module 10, lesson 6. Live HTML: `lesson_46_rendering_for_production.html` (project root `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`).

## Phase-0 baseline

- **Pristine baseline:** md5 `fc5a5098a929a0a31a4f5d53022bd310` / 368,720 B / LF-only / 0 CR / 59× literal U+2014 / 131× literal U+2192.
- **Post-Phase-0:** md5 `4973ef40d54f73f7ec981a8e4873c150` / 369,625 B / LF-only / 0 CR.
- Byte delta: 368,720 → 369,625 = **+905 B** (deterministic; bridge dry-run md5 byte-exact to Claude-side before commit).

### Note on target md5 re-baseline

Phase-0 was previously derived against target md5 `405b9a7160f1fc762e65d02956b76eb2`, which assumed a specific `final-project` TOC label. That reference label was not on hand this session; the byte-count target (369,625 B) pinned the label length to 35 chars but not its exact wording. Per Ray's sign-off, the target md5 was **re-baselined to the current deterministic output** `4973ef40d54f73f7ec981a8e4873c150` with `final-project` TOC label = **"Project: Production Render Pipeline"** (35 chars, matching the concise "Project: …" convention the original TOC used and the size target). All other transforms are byte-identical to the original derivation. If the old `405b9a71` label wording later surfaces and differs, this is the one field to reconcile.

## Phase-0 log (all deterministic, applied to pristine → committed)

1. **TOC nav rebuilt 10 → 13 entries**, matching body section order/ids: production-mindset, output-formats, render-passes, file-organization, batch-rendering, network-rendering, quality-control, delivery-workflow, backup-recovery, render-farms, legal-copyright, final-project, summary. Fixes the dead `#project-production-pipeline` anchor and 4 missing sections (backup-recovery, render-farms, legal-copyright, final-project). TOC labels = emoji-stripped h2 titles, except `summary` which keeps "Summary and Best Practices" (h2 is "Lesson 46 Summary") and `final-project` = "Project: Production Render Pipeline".
2. **4 gradient cards:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white` → `#2a2a2a; color: white`.
3. **4 mermaid node fills:** `style … fill:#667eea,stroke:#333,stroke-width:2px,color:#fff` → `fill:#3a3a3a…`.
4. **1 mermaid theme var:** `primaryBorderColor: '#667eea'` → `'#888888'`.
5. **Tables:** wrapped 4 bare `<table>` in `<div class="table-wrap">`; injected inline `style="overflow-x:auto;"` on **all 9** `.table-wrap` divs (5 pre-existing + 4 new).
6. **Em-dashes:** 59 literal U+2014 → `&#8212;`. **U+2192 literal HELD at 131** (unchanged).

## Carry-forward note

- **overflow-x:auto injected on all 9 `.table-wrap` divs** (restores the L43/L44 pattern; L45 lacked it and flagged a mobile-table dependency on the site `main.css` during browser QA). L46 wraps carry inline `overflow-x:auto`, so mobile table clamping does not depend on external css.

## Write verification

- Bridge dry-run md5 == `4973ef40` **before** commit → binary LF write → `get_file_info` == 369,625 B → fresh independent Filesystem re-read → **all 32 post-Phase-0 invariants re-asserted PASS** (size, md5, CR=0, LF=6302, U+2014=0, &#8212;=59, U+2192=131, gradient-667eea=0, #2a2a2a=4, mermaid-667eea=0/3a3a3a=4, primaryBorderColor 667eea=0/888888=1, table-wrap=9 all with overflow-x, `<table>`=9, bare-wrap=0, TOC count=13, TOC order==body order, dead anchor=0, section order, label checks, nonascii preserved=923).
- Staging leftovers deleted: `_l46_p00.hex`, `_l46_stage.hex`, `_l46_probe.txt` (plus interim `_l46_stage.b64`, `_l46_p0.b64`). No `_l46_*` files remain.

## Status

**Phase-0 COMPLETE + committed + verified.** NEXT = ROSTER TRIAGE → SVG (own fresh chat).
