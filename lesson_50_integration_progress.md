# Lesson 50 — Character Animation Showcase — Integration Progress

Module 11, lesson 4. Live HTML: `lesson_50_character_animation_showcase.html` (project root `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`).

## Phase-0 baseline (2026-07-04)

Opened untouched original — TRUE-PRISTINE (0 figures / 0 img / 0 svg):
- bytes 232,938 / md5 `7b6f451558a4ac77b298febcb8fb1678` / LF-only / 0 CR / LF 3935
- U+2014 literal 159 / U+2192 literal 17 / U+2013 0 / U+00B7 0
- #667eea 10 / #764ba2 6 / linear-gradient 5 / color="#222" 0
- mermaid class 4 / jsdelivr 1 / <table> 5 / table-wrap 0 / overflow-x:auto 0
- back lesson_49 1 / next lesson_51 1
- section open==close==12 ; 10 top-level section ids

## Content check (TOC vs body) — NO fix needed (L44/L46/L47/L49 class)

TOC lists 10 anchors; all 10 resolve to 10 top-level `<section>` in identical order; 0 dead links; 0 missing sections. Section id order == TOC order:
[understanding-demo-reels, planning-showcase, animation-principles, workflow-blocking-polish, acting-performance, camera-staging, rendering-animation, editing-presentation, project-animation-showcase, summary]

## Phase-0 transforms applied

1. 5 gradient cards `background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); color: white` -> `background: #2a2a2a; color: white`
2. 4x mermaid node `fill:#667eea` -> `fill:#3a3a3a`
3. 1x mermaid node `fill:#764ba2` (node G, secondary-purple) -> `fill:#3a3a3a`  [L50-specific: one node used #764ba2 directly; #764ba2 count 6 = 5 gradient + 1 node fill]
4. 1x mermaid `primaryBorderColor: '#667eea'` -> `'#888888'`
5. wrapped 5 bare `<table>` in `.table-wrap` + inline `style="overflow-x:auto;"`
6. 159 literal U+2014 -> `&#8212;`

## Post-Phase-0 baseline (hard-verified, fresh disk re-read — 32/32 PASS)

- bytes **233,849** / md5 **`c7c27d71433c85ce0f39b5099e5bdbdf`** / LF-only / 0 CR
- byte delta 232,938 -> 233,849 = **+911 B** (deterministic; Claude-side and server-side md5 identical)
- linear-gradient 0 / #667eea 0 / #764ba2 0 ; #2a2a2a 5 ; fill:#3a3a3a 5 ; fill:#667eea 0 ; fill:#764ba2 0
- primaryBorderColor '#888888' 1 / '#667eea' 0
- <table> 5 / table-wrap 5 / overflow-x:auto 5
- U+2014 literal 0 -> &#8212; 159 ; U+2192 17 HOLD ; U+2013 0 ; U+00B7 0 ; color="#222" 0
- figure/img/svg/figcaption 0/0/0/0 (TRUE-PRISTINE)
- mermaid class 4 / jsdelivr 1 ; section open==close==12 ; section id 10 order==TOC ; dead anchor 0
- back lesson_49 1 / next lesson_51 1

## Write path (carry-forward)

Claude-side transform hard-asserted (31/31), reproduced SERVER-SIDE via Blender bridge reading pristine source from WSL disk (source re-verified 7b6f4515 at commit -> dry-run md5 == c7c27d71 byte-exact BEFORE commit -> binary LF write, CRLF->LF normalized -> get_file_info==233,849 -> fresh independent Filesystem re-read re-assert ALL 32 PASS). No `read_factory_settings`.

## Carry-forward for later phases

- HOLD &#8212; 159 / U+2192 17 through all later phases; new prose uses entities never literals.
- overflow-x:auto on all 5 `.table-wrap` (mobile-table clamp without external main.css; L43/L44/L46/L47/L48/L49 pattern).
- Module 11 SVG plan = role-hex palette (#FF6B00 / #4ADE80 / #E63946 / #4A9EFF / #B47EE8 / #F5C242) + banned literals (U+2014, U+2013, U+00B7 literal, #667eea, #764ba2, purple linear-gradient).
- `\\wsl$\` paths only; Filesystem read tools + write_file byte-exact (str_replace/edit + bash CANNOT reach UNC); Blender-bridge host sees WSL FS via UNC (server-side transform/write, dry-run md5 match before commit, binary + CRLF->LF + get_file_info==byte-count; do NOT call read_factory_settings).
- SVG text via write_file (base64 BANNED — silent line-collapse); cairosvg dark+light verify before each SVG write; browser QA Claude-side (local mermaid@10.9.6 ESM, CDN blocked).

## ROSTER TRIAGE (2026-07-04) — VERDICT: 13 SVG / 0 PNG

L50 = character-animation demo-reel / showcase **project** lesson. All figures the content needs are conceptual/workflow diagrams and reference charts (principles, pipeline phases, staging geometry, acting cues, timing). There are **no real rendered Blender frames or captured outputs** to author here — the "showcase" and "final render" material is instructional, not a produced asset. Same class as L45 / L47 / L49 (0 PNG). **PNG count = 0.** Full-SVG roster below.

**Existing mermaid (4, NOT re-authored as SVG — avoid duplication):**
- understanding-demo-reels :: under h3 "Types of Animation to Include" (demo-reel type flow)
- animation-principles :: under h3 "The Core Principles for Character Animation" (12-principles overview)
- workflow-blocking-polish :: under h3 "The Animation Pipeline" (blocking->polish flow)
- summary :: under h3 "The Journey You've Taken"

**SVG roster (13) — one figure per target subsection anchor (insert immediately after the h3, before its first prose child):**

| # | Section | Anchor h3 | Figure concept | Title (=figcaption) |
|---|---------|-----------|----------------|---------------------|
| 01 | understanding-demo-reels | Demo Reel Structure | Demo-reel timeline bar: hook / strongest shot / body / closer, with duration proportions | Anatomy of a Strong Demo Reel |
| 02 | planning-showcase | Timing and Shot Planning | Shot-planning timeline: shot blocks vs seconds/frame-count lanes | Planning Shots on a Timeline |
| 03 | planning-showcase | The Pre-Animation Checklist | Pre-animation readiness checklist grid (rig / scene / refs / story gates) | The Pre-Animation Checklist |
| 04 | animation-principles | Principle 1: Timing and Spacing | Spacing diagram: even vs eased dot-spacing along a motion path | Timing and Spacing |
| 05 | animation-principles | Principle 2: Anticipation | Anticipation windup->action arc, 3-pose strip | Anticipation Before Action |
| 06 | animation-principles | Principle 3: Follow-Through and Overlapping Action | Overlapping-action offset diagram (base vs trailing part lag) | Follow-Through and Overlap |
| 07 | animation-principles | Principle 4: Arcs | Straight-line vs arc motion-path comparison | Motion Travels in Arcs |
| 08 | acting-performance | Body Language Fundamentals | Silhouette pose-reading chart: open / closed / weighted stances | Reading Body Language |
| 09 | acting-performance | The Power of Eyes | Eye-direction / gaze-line staging diagram (thinking beat) | Directing the Eyes |
| 10 | camera-staging | Camera Angles for Different Animation Types | Camera-angle wheel: low / eye / high / dutch vs intent | Choosing the Camera Angle |
| 11 | camera-staging | Framing and Composition | Rule-of-thirds + headroom/lead-room framing grid | Framing for Clarity |
| 12 | rendering-animation | Compiling Image Sequence to Video | Image-sequence -> VSE -> encoded-video pipeline strip | From Frames to Final Video |
| 13 | editing-presentation | Where to Host Your Demo Reel | Hosting-platform comparison matrix (reach / control / industry fit) | Where to Host Your Reel |

Anchor coverage: all 10 sections represented (project-animation-showcase + summary carry no new SVG — project is a phased text walkthrough already served by the pipeline mermaid + tables; summary already carries a mermaid). All 13 anchor h3s verified present on disk.

Palette: role-hex (#FF6B00 / #4ADE80 / #E63946 / #4A9EFF / #B47EE8 / #F5C242). Banned literals enforced (U+2014, U+2013, U+00B7 literal, #667eea, #764ba2, purple linear-gradient). Canvas width 760 (module standard). Each root ` color="#222"` at author time -> STRIPPED at integration; each wrapped `<figure>`+`<figcaption>` where figcaption == SVG `<title>`.

## SVG PRODUCTION — COMPLETE (2026-07-04)

All 13 SVGs authored, cairosvg dark+light verified (XML + banned-literal + a11y checks PASS), written byte-exact to `images/` via write_file, get_file_info confirmed. id-prefixes car01..car13. Canvas 800x560, role=img + aria-labelledby + title + desc, color="#222" on root (strip at integration), 3px #FF6B00 top strip, footer-tip Variant B. Separator is `·` (U+00B7, sanctioned) throughout; zero U+2014.

On disk (bytes): 01 demo_reel_anatomy · 02 shot_planning_timeline · 03 pre_animation_checklist · 04 timing_and_spacing · 05 anticipation · 06 follow_through_overlap · 07 arcs (batches 1-3, prior). 08 body_language 4384 · 09 directing_eyes 4340 · 10 camera_angle 5423 · 11 framing 4525 · 12 frames_to_video 5522 · 13 hosting 5416 (batches 4-5, this chat).

## NEXT: INTEGRATION (own fresh chat)

Inline all 13 SVGs into live `lesson_50_character_animation_showcase.html` (Phase-0 baseline: bytes 233,849 / md5 `c7c27d71433c85ce0f39b5099e5bdbdf`, untouched). Per SVG: strip root `color="#222"`, re-indent per figure-depth rule, collapse multi-line attrs, prune ASCII-divider comments (keep structural), preserve every role/aria-labelledby/title/desc/id, wrap `<figure>`+`<figcaption>` (figcaption == SVG `<title>`), insert immediately after each target h3 per the §ROSTER TRIAGE table. Edit cadence: `edit_file` dryRun -> commit -> `get_file_info` after each. HOLD &#8212; 159 / U+2192 17 through integration.


## INTEGRATION — COMPLETE (2026-07-04)

All 13 SVGs inlined into live `lesson_50_character_animation_showcase.html`. Committed server-side via Blender bridge from pristine WSL source (baseline re-verified c7c27d71 / 233,849 at commit): server-side transform reproduced the Claude-side-verified blocks, dry-run md5 == target byte-exact BEFORE commit, binary LF write, then fresh independent Filesystem re-read re-asserted all invariants.

- Live HTML now: bytes **308,678** / md5 **`9f09eb5646b19260fedada3409b75bf6`** / LF-only / 0 CR (delta +74,829 from Phase-0 233,849).
- 13 `<figure>`+`<figcaption>`+`<svg>` ; 0 `<img>` ; 0 `color="#222"` ; car01..car13 ids all present ; every figcaption == SVG `<title>`.
- HOLD invariants intact: U+2014 literal 0 / &#8212; 159 / U+2192 17.
- section open==close==12 (balance held).
- Anchor disambiguation resolved: car01 inserted at "Demo Reel Structure" in `understanding-demo-reels` only; the duplicate "Demo Reel Structure" h3 in `editing-presentation` is followed by its original prose, untouched.
- Per-SVG transform: root collapsed to one line + `color="#222"` stripped; body re-indented (root+closing `</svg>` at col 20, direct children +18 from disk, i.e. col-0 `</svg>` -> 20); structural comments kept; role/aria-labelledby/title/desc/id preserved.

## NEXT: BROWSER QA (own fresh chat)

Playwright + Chromium render pass on the integrated `lesson_50_character_animation_showcase.html`: confirm all 13 inline SVGs render (light + dark), figcaptions read, dark-mode `currentColor` inheritance works (no `color="#222"` override), 4 existing mermaid diagrams still render (local mermaid@10.9.6 ESM stub, CDN blocked Claude-side), TOC anchors resolve, tables scroll on mobile clamp. Live HTML: bytes 308,678 / md5 `9f09eb5646b19260fedada3409b75bf6`.

## BROWSER QA — COMPLETE (2026-07-04)

Live HTML re-verified on Claude side before render: md5 `9f09eb5646b19260fedada3409b75bf6` / 308,678 B (exact match, untouched). Render harness: mermaid@10.9.6 pulled from npm, jsdelivr import rewritten to relative `./_m/mermaid.esm.min.mjs`, whole dist served same-origin over `http://localhost` with `.mjs`/`.js` as `text/javascript`; real `styles/main.css` copied from WSL; `js/clipboard.js` + `js/course-enhancements.js` stubbed. Confirmed root cause fix: same-origin http:// module import loaded mermaid + all 121 chunks (HTTP 200), 4/4 `.mermaid svg` rendered — no 0-render.

Env note (carry-forward): Chromium ran fine foreground; the -1 returns were from `&`/`nohup` backgrounding wedging the bash tool, NOT the browser. Pattern that works: one self-contained foreground Python per mode (daemon-thread http.server in-process + single Playwright launch, mermaid wait ≤20s, `os._exit(0)` teardown to kill daemon threads cleanly). No `&`, no `nohup`.

Selector note (carry-forward): inline-SVG root carries NO `id`; the `car01..car13` ids live on child `<title>`/`<desc>` via `aria-labelledby`. Correct selector is `figure svg[aria-labelledby^="car"]`, not `svg[id^="car"]`.

**LIGHT — PASS.** 4/4 mermaid svg nonzero bbox (1900×222 / 1094×222 / 873×312 / 1290×66). 13/13 inline car svg render nonzero (getBBox ~800×540, displayed 1072px wide). 13/13 figcaptions read == SVG `<title>`. `color="#222"` in DOM 0. TOC 10/10 resolve, 0 dead. 0 console errors. body color rgb(51,65,85); inline-svg currentColor texts inherit same.

**DARK — PASS.** Same 4 mermaid + 13 car svg render nonzero. body color flips to rgb(212,212,212) (light-on-dark) and inline-svg `currentColor` texts follow to rgb(212,212,212) — currentColor inheritance confirmed, no `color="#222"` override (DOM count 0). 13/13 figcaptions read. TOC 10/10, 0 dead. 0 console errors. (Coloured chip/badge labels hold their designed dark ink rgb(15,26,20) on light chip fill in both modes — intended constant, legible.) Screenshot spot-checks (car08 + mermaid, both modes) visually clean.

All close criteria met both modes. Live HTML unmodified by QA.

## NEXT: Module 11, Lesson 51 — Your Portfolio Piece (`lesson_51_your_portfolio_piece.html`)

Start Phase 0 in a fresh chat. L50 COMPLETE (Phase 0 → roster → SVG production → integration → browser QA all done).
