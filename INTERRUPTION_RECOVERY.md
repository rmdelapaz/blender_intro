# Interruption Recovery Protocol

> A portable, project-agnostic playbook for resilient multi-chat work with an LLM assistant. Codifies the disciplines that have kept the [python_gamedev](https://github.com/) course-modernization project's work-preservation chain unbroken across 55+ steps and 9 distinct interruption events. Drop into any project that runs work in chats with the assistant: course modernizations, content sites, Astro / Next / static sites, hub indexes, fan-site refactors, hobby tools.

**Core promise.** When a chat is interrupted — auto-compaction, screen reset, MCP outage, accidental stop, lost connection, the assistant's context filling up — the next chat picks up at the exact point of interruption with at most one milestone of rework. Never the whole chat. Never silent loss.

**Core principle (chat-27 framing).** *Disk artifacts are the source of truth; the narrative is annotation.* Anything you can rebuild from on-disk state, you don't need to preserve in chat memory. Anything you can't, you save as you go.

---

## 1. Problem statement

Long-context LLM-assisted multi-chat work has a structural failure mode: **interruptions are inevitable, and they always hit before the chat-end save**.

The base failure pattern, observed repeatedly before this protocol existed:

- The chat does an hour of useful work — code edits, file builds, content authoring, refactors — without saving.
- Every saved artifact (a file edit, a catalog flip, a doc update) is held as a *plan* — "I'll write all of this back to disk at chat close."
- Then something interrupts. Auto-compaction trims the context. The browser reloads. MCP loses its connection. The user closes the laptop and a new chat starts in the morning.
- The plan never executes. The disk reflects a state from the start of the chat.
- The next chat opens with no memory of what happened, no notes, and a working dir that looks untouched.
- **Result:** rework. Sometimes the same hour, sometimes a worse hour because the assistant has to re-decide things it already decided.

Seven concrete interruption modes seen in practice across this project's chat history:

1. **Auto-compaction mid-flight.** The context fills up, the system trims older turns, and the assistant loses track of where it was.
2. **Screen reset.** The chat UI returns to a blank kickoff prompt with no recoverable history.
3. **MCP server outage.** A required tool stops responding mid-task; the assistant either loops on the failure or exits the turn.
4. **Manual stop.** The user closes the tab, runs out of time, hits the stop button.
5. **Browser reload.** Refresh, accidental close, OS update.
6. **Post-final-milestone window.** The most insidious — work is "almost done" but the chat-close save hasn't run yet. Three of this project's last four cohort chats hit interruption in exactly this window.
7. **Post-compaction summary-resumption window.** A subtler variant of mode 1: the assistant's context fills, the system writes a structured summary, and the next turn begins by reading the summary. If the summary is incomplete — or if the assistant treats the summary as a finished-work narrative rather than an active-task continuation — the chat resumes in restart-mode rather than continue-mode and silently loses momentum on the unfinished milestones.

A protocol that survives all seven modes has to satisfy three constraints:

- **Saves cannot be batched at chat end** — that's the failure mode itself.
- **State cannot live only in chat memory** — chat memory is the thing that gets cleared.
- **Recovery cannot require re-running the full chat** — the cost would defeat the value.

The rest of this document is the protocol that satisfies those constraints.

---

## 2. The eight pillars

Eight disciplines, six of which apply to every chat and two of which apply at specific scale thresholds. Each independently weak but jointly resilient. Skip a core one and the failure mode it protects against becomes a regular event; skip a scale-conditional one and the corresponding scale of work becomes painful.

### 2.1 Save-first-not-last

**Discipline.** Doc updates and disk writes happen at *milestone boundaries*, not at chat end. Stub the deliverable files at chat start. Append incremental updates after each milestone. Write the final close paragraph last.

**Why.** The chat-end window is the dominant interruption surface. Any save you defer to "after the last step" is statistically the save most likely to be lost. By moving saves *away* from that window — and toward the milestone boundaries that pre-date it — you absorb the interruption without losing the milestones that already completed.

**Mechanism.** Every chat has milestones (M0, M1, M2, ...). Each milestone produces a small set of disk artifacts (a code edit, a state flip, a narrative paragraph). At the close of each milestone, those artifacts are written to disk *before* the next milestone starts. The chat-end "save everything" step ceases to exist — there is nothing left to save because everything is already on disk.

**Concrete example (python_gamedev).** A 56-step save-first chain runs from chat 25 close (step 1) through chat 44 M5 (step 55) through chat 45 M0 (step 56). Each chat contributes 3–7 steps, one per milestone. Across that span the chain has survived 9 distinct interruptions (auto-compaction, screen resets, mid-flight stops) without losing a milestone. The interrupted milestone is repeated — never the whole chat.

**How to apply this in your project.** At the start of every working chat, identify the milestones (the discrete units of work). For each milestone, identify the disk artifacts it produces. Commit to writing those artifacts at milestone close, *before* moving on. The save is part of the milestone definition, not an afterthought.

**Failure mode this prevents.** "I lost two hours of work because the chat compacted before I could write the summary." With save-first, the summary is the *only* thing you can lose — and the summary is the cheapest artifact to reconstruct.

### 2.2 Resume pointer (single-paragraph snapshot)

**Discipline.** Maintain one short file (typically `support/session.md` or equivalent) that contains a single-paragraph snapshot of the current state of the work. Overwrite it at every milestone boundary. Read it as the *first* file of every new chat.

**Why.** When a chat starts, the assistant has no memory of what came before. A focused pointer file solves that in one read: where are we, what just landed, what comes next, what disciplines are active.

**Schema.** Keep it under ~400 words. Suggested fields:

- **Chat / Date / Status** — which chat number, what date, IN PROGRESS / CLOSED.
- **Last completed** — what just finished, including the on-disk artifacts that prove it.
- **Current step** — what the chat is doing right now, with milestone breakdown.
- **Process expectations** — which carry-forward disciplines apply.
- **Specifics** — anything chat-specific the next chat needs to know on first glance.

**Why single-paragraph.** Pointer files that grow into history logs become unreadable at chat-start time. The append-only narrative belongs in the narrative log (pillar 2.3), not here. The pointer is a snapshot, not a history.

**Read order.** Resume pointer → next-chat brief (per-chat detail) → forward-looking todo. The pointer answers *where am I*, the brief answers *what's the plan*, the todo answers *what's next after this*. Three files, three roles.

**Failure mode this prevents.** "I opened the next chat and had no idea what I was doing yesterday." With a resume pointer, the answer is one short read away.

### 2.3 Append-only narrative log

**Discipline.** Keep a long-form narrative file (typically `status.md`) that accumulates a per-chat section as work progresses. Write the chat-N section at the start of chat N (as a placeholder), and append per-milestone paragraphs to it as each milestone completes — *not* as a single block at chat end.

**Why.** The narrative is the audit trail. It captures decisions, surprises, findings, paths-not-taken — things the disk artifacts don't record on their own. Without it, six chats from now no one (including the future chat) can answer "why did we do it that way?"

**Mechanism.** At chat-N kickoff, seed a `### Chat N — IN PROGRESS — <task>` section in `status.md` with empty milestone sub-headers (`**M0 — <name>.** [paragraph after M0]`, etc.). After each milestone completes, edit the section to replace the bracketed placeholder with the real paragraph. The chat-close write is then just the final wrap-up.

**Why this matters in interruption recovery.** When a chat is interrupted between M3 and M4, the narrative for M0–M3 is already on disk. The recovery chat reads `status.md` and sees exactly what happened. M4 onward is what the recovery chat does next.

**Length discipline.** Aim for ~1.5 KB per chat-N section in production-mode chats; ~1 KB for meta-chats. Disk artifacts are the source of truth; the narrative is annotation. *Don't repeat in narrative what's visible from the artifact.* Trim ruthlessly: if the catalog says `done`, the narrative doesn't need to spell out that the catalog says `done`.

**Failure mode this prevents.** "We made a tricky design decision in chat 12 and now in chat 30 nobody remembers why." With an append-only narrative, the answer is in `status.md` chat-12 section.

### 2.4 State catalog with intermediate states

**Discipline.** For projects with N items each progressing through multiple stages (lessons in a course, articles in a CMS, characters in a wiki, components in a design system), maintain a JSON / YAML catalog where each item carries an explicit `status` field that reflects its actual on-disk state — including *intermediate* states that mark partially-done work.

**Why.** The dominant interruption-loss surface is the window between "artifact A is on disk" and "artifact B that records the existence of artifact A is on disk." If those two saves bracket an interruption, the catalog says the work didn't happen but the work did happen. That's a desync.

**The fix: an intermediate state.** Between `not_started` (or whatever the upstream state is) and `done`, introduce a transitional state that records "the heavy artifact landed, the metadata flip is pending." Examples:

- python_gamedev Phase 7: `needs_new_svg` → `built_unwired_chat_N` → `built_chat_N`. The intermediate state captures "SVG file landed on disk; lesson hasn't been wired to it yet."
- python_gamedev Phase 8: `not_started` → `quiz_drafted` → `done`. The intermediate state captures "scaffold injected into the lesson; real content fill pending."
- A CMS migration: `unmigrated` → `migrated_unlinked` → `migrated_and_linked`.
- A test-suite refactor: `pending` → `rewritten_unverified` → `rewritten_verified`.
- A worldbuilding wiki: `stub` → `drafted` → `cross-linked` → `published`.

**The intermediate state must reflect a real disk state.** If you can't point at a file or a known on-disk fact that justifies the intermediate, the state is just bureaucracy. Good test: "if the chat is interrupted right after I flip to the intermediate state, can the next chat tell from disk that this is where I am?"

**Vigilance discipline (corollary).** Even with intermediate states, asymmetric desyncs are possible — one item moved forward, a sibling item didn't. Pre-check item state (e.g., size-delta of file vs `.bak`, modification time, presence of an expected marker) at chat start before assuming the catalog is the truth. If the disk and the catalog disagree, the disk wins; reconcile the catalog and log a finding.

**Failure mode this prevents.** "The catalog says we haven't done this yet, but the file is fully written. Did we do it? When? Should I redo it?" With intermediate states + size-delta pre-check, the answer is unambiguous.

### 2.5 Size-delta pre-check / desync vigilance

**Discipline.** At the start of any milestone that touches a previously-modified file, compare the live file size to its `.bak` (or pre-modification baseline). Use the delta to predict whether the file is in its expected state or has been pre-populated by an earlier interruption.

**Why.** Because pillar 2.4's intermediate state is a *convention* the discipline has to enforce, a brief lapse — one missed flip — produces a silent desync. Size-delta is the cheapest possible signal that catches the lapse before it causes rework.

**Mechanism.** Most edit workflows produce `.bak` siblings at known sizes (the un-edited baseline). The expected delta after a known transformation is also known (e.g., "scaffold injection adds ~2.6 KB"; "real content fill adds ~12 KB"). At milestone start:

1. `stat` the live file and the `.bak`.
2. Compute the delta.
3. Compare against the expected band.
4. **Small delta (matches scaffold)** → standard authoring path: do the work as planned.
5. **Large delta (matches full content)** → the work already landed under a previous interruption; skip the heavy edit, do only the metadata reconciliation.

**Structural pre-check (catalog-tracked axes).** Beyond raw file sizes, a richer pre-check compares *every catalog-tracked axis* against on-disk reality at chat start. For projects whose state catalog tracks derived axes (line counts, item counts, sub-element counts, content fingerprints), recompute each axis from disk and compare. The discipline catches a broader class of desync than size-delta alone: a file that's been distilled in a prior chat but never had its catalog axes flipped will show clean size against `.bak` but stale catalog axes against disk. Apply at every chat-start M0 milestone where the planned work depends on catalog axes being accurate. python_gamedev chat-103 onward applies this at every Phase-9 lint-pass M0; chat-103 itself surfaced the `physics_gravity` catalog-staleness finding via this discipline.

**python_gamedev example.** Before a Phase-8 question-fill milestone, the size-delta is computed for the target lesson. A ~2.6 KB delta predicts the lesson holds the scaffold (chat-39 TBD section) — standard fill applies. A >12 KB delta predicts the lesson holds real content from an interrupted prior chat — Finding-10 reconciliation applies (catalog flip only, no HTML edit, derive metadata from on-disk content).

**Generalization.** Any project where you have a known baseline and a known expected transformation can apply this. A docs migration: small delta = unmigrated, large delta = pre-migrated. A code refactor: small delta = unrewritten, large delta = pre-rewritten under interrupted prior work.

**Failure mode this prevents.** "I just rewrote the whole file from scratch. Turns out it was already done last week and I clobbered the result." With size-delta vigilance, the rewrite never starts.

### 2.6 Chat-N+1 stub staging

**Discipline.** During the current chat, before the close window, stage the next chat by writing the resume pointer (pillar 2.2) to point at chat N+1, writing the next-chat brief, and seeding the narrative log's chat N+1 section as a placeholder. The chat close itself becomes a tiny final flip — typically two file edits — instead of a four-or-five-file batch.

**Why.** The post-final-milestone window is interruption-prone for one mechanical reason: it's the last thing the chat does, and "the last thing" is by definition adjacent to chat end. Three of python_gamedev's four most recent cohort chats (41 / 43 / 44) hit interruption in this window. Moving the staging *earlier* — into a non-final milestone — removes the heavy lifting from the danger zone.

**Where to stage.** The new convention (effective python_gamedev chat 46+) stages chat N+1 during M2, immediately after the second cohort item completes. The post-final-milestone window then contains only: (a) the chat-close paragraph appended to the narrative log, and (b) the IN PROGRESS → closed-clean stub flip in the todo. Two edits, both small, both fast.

**Cutover refinement (more aggressive staging).** A further reduction: the chat-N+1 staging can be combined with the *second-to-last* milestone's work into a single milestone batch (M1+staging in a three-milestone chat). M2 is then reduced to a single artifact write — the per-chat archive. This concentrates the post-final-milestone interruption-prone window to one save operation. python_gamedev chat-100 onward operates this way; chat-106 ran M2 as a single archive write after M1+staging absorbed all the chat-N+1 setup (next-chat-prompt + session pointer + todo insertion + IN-PROGRESS-to-stub collapse + Current-state-line update, all in one batched edit).

**Trade-off.** The chat-N+1 stage now happens before the chat-N work is fully complete, which means the next-chat brief commits to a plan that hasn't been validated by chat-N's final milestones. In practice this is fine — chat-N+1's M0 is always a validation step that catches any divergence from the staged plan and adjusts.

**Failure mode this prevents.** "The chat ran fine, all the work landed, but the next chat had no idea what to do because the staging never happened." With early staging, the staging is one of the milestones that survived the interruption, not one of the casualties.

### 2.7 LARGE-sweep split-call discipline (scale-conditional)

**Discipline.** When a single milestone requires more than ~30 atomic edits to one file, split the edits into block groups and run each group as a dry-run-then-commit pair, with the dry-run completing successfully before the commit launches.

**Why.** Single-call multi-edit tools (file-system bulk-edit, find-and-replace-many) typically fail with one of two patterns: (a) all edits succeed; (b) the first failing edit (e.g. an `oldText` that's not unique enough) aborts the entire batch. Pattern (b) leaks partial-work into "the next chat has to figure out what landed" territory. Split-call dry-run-then-commit detects failure modes at dry-run time, before any disk mutation, and lets the chat recover or revise without leaving a half-applied file behind.

**Mechanism.** Group the edits by logical region (lesson section, function family, refactor scope). For each group:

1. Call the bulk-edit tool with `dryRun: true` and the group's edits.
2. Inspect the diff to confirm the group is byte-for-byte correct.
3. Re-call the tool with `dryRun: false` and the same edits.
4. Inspect the post-commit diff to confirm the on-disk state matches expectations.
5. Proceed to the next group.

For a 36-edit sweep, four block groups × 2 calls = 8 invocations. The overhead of the extra calls is dramatically less than the cost of recovering from a partial-application that contaminated a 1200-line file.

**Threshold tuning.** Single-call dry-run-plus-commit (one dry-run, one commit) is appropriate for ≤15 atomic edits per file. MEDIUM sweeps (15–30 edits) can go either way; choose split-call for safety when `oldText` uniqueness is uncertain. LARGE sweeps (>30 edits) should always split. python_gamedev Phase 9 has run split-call at 36 edits (chat-106), 84 edits (chat-105), and the discipline has held at both scales.

**Failure mode this prevents.** "I ran a single 47-edit batch, edit #19 had a non-unique `oldText`, the tool aborted at edit #19, edits 1-18 already landed, edits 20-47 didn't, and now I have to manually inspect the file to figure out what to redo." With split-call, edit #19's collision is caught at dry-run, the group is revised, and no partial commit ever happens.

### 2.8 Script-based automation when bulk-edit tools hit their limits (scale-conditional)

**Discipline.** When the same complex multi-field update happens on every cohort chat (a catalog flip, a stats recomputation, an audit-trail append), and the payload grows beyond what a general-purpose bulk-edit tool handles comfortably, write a small project-local script. The script does the operation atomically, preserves a `.bak`, validates inputs, and runs in milliseconds.

**Why.** Bulk-edit tools are great for one-off edits but become a bottleneck when the same six-step update has to happen 20+ times across a project. Each invocation costs a tool call, scales with payload size, and is subject to tool timeouts that don't exist in local code. A script bypasses all that.

**Triggers — when to write the script.**

- The same multi-field update happens at least 3 times across the project's lifetime.
- The payload (notes file, stats block) reaches ~10 KB and the bulk-edit tool starts hitting timeouts.
- The update has multiple invariants (atomic write, .bak preservation, sort-order enforcement, format validation) that are tedious to specify by hand on each call.
- The update has a content-validation step (no forbidden characters, no malformed sections, schema match) that's awkward to do via bulk-edit.

**Mechanism — what the script should do.**

1. **Atomic write.** Write to a temp file in the same directory; `os.replace()` to the final path. Never write directly to the target.
2. **.bak preservation.** Copy the prior target to `<name>.bak` before the atomic replace. Restoration is a `mv`.
3. **Input validation.** Reject malformed inputs early (missing fields, forbidden characters, out-of-order sections). A failing validation is better than a half-applied state.
4. **Idempotent recomputation.** If the update includes derived fields (stats, totals, counts), recompute them from authoritative state every run. Don't trust prior state.
5. **Output format match.** Match the existing file's format (indentation, trailing-newline, sort-order) so diffs are minimal.
6. **Mode preservation.** Preserve file permissions across the atomic replace.

**Failure-mode coverage.** A script-based update protects against (a) tool timeouts on large payloads, (b) split-payload state divergence under interruption, (c) format-drift across many similar updates, (d) silent permission downgrades from temp-file defaults.

**python_gamedev example.** `support/phase9_catalog_update.py` (introduced chat-102) replaces a fragile six-tool-call sequence (read JSON, edit_file × 4 to update fields, recompute stats) with a single Python invocation that handles all six concerns above. It has run cleanly on every chat from chat-103 onward.

**Failure mode this prevents.** "The catalog update timed out after 4 minutes, the field-flip landed but the stats-recompute didn't, and now the chat has to manually reconcile." With a script, the operation is sub-second and either fully succeeds or fully aborts.

---

## 3. Chat lifecycle

A chat under this protocol has a stylized shape. Variation is fine; the structure is the spine.

### 3.1 Kickoff (pre-milestones)

The user provides a short brief — typically 1–2 KB — that names the task and points at the working files. The first three reads are always the same:

1. **Resume pointer** (`support/session.md` or equivalent). Tells the assistant the current state.
2. **Next-chat brief** (the brief the user just provided, or `support/next-chat-prompt.md` if it was staged in the prior chat). Tells the assistant the immediate plan.
3. **Forward-looking todo** (`todo.md` or equivalent). Tells the assistant the chat-N section, which contains milestone breakdowns and carry-forward disciplines.

If any one of these contradicts the others, the disk artifacts that the resume pointer cites are the tiebreaker. Reconcile with the user before proceeding.

### 3.2 Milestones (M0 through M_n)

Each milestone follows the same pattern:

1. **Read the working artifacts** for this milestone (region-scoped — head/tail/range, not full-file unless necessary).
2. **Apply size-delta vigilance** if the milestone touches a previously-modified file (pillar 2.5).
3. **Do the work** — code edits, content authoring, file builds, refactor, whatever the milestone calls for.
4. **Save the artifacts** — write them to disk *now*, not at chat end.
5. **Append the milestone paragraph** to the narrative log (pillar 2.3).
6. **Update the resume pointer** to reflect the new last-completed-milestone state (pillar 2.2).

That sequence is the save-first chain in operational form. Each milestone advances the chain by one step. Each step is a survivable interruption point — if the chat dies after step 6, the next chat starts at the beginning of milestone N+1 with no rework.

### 3.3 Milestone 0 — start-stub validation

M0 is special: it's the chat-start validation milestone. It does no new work; it confirms the chat can begin.

The M0 checklist:

- The resume pointer matches what the user said this chat is supposed to be doing.
- The narrative log has a chat-N placeholder section (seeded by chat-N−1's late milestone per pillar 2.6).
- The forward-looking todo has a chat-N IN PROGRESS section.
- The state catalog and any other working files are in the state the prior chat's close paragraph claims.
- Carry-forward disciplines (size-delta vigilance, format conventions, etc.) are explicitly noted.

If any of those fail, M0 becomes a recovery turn (see §4) instead of a normal start.

### 3.4 Milestone N+1 staging (during a non-final milestone)

Per pillar 2.6, before the final milestone, stage the next chat:

- Overwrite the resume pointer with chat-(N+1)-IN-PROGRESS content.
- Overwrite or write the next-chat brief.
- Seed the narrative log's chat-(N+1) placeholder section.
- Add a chat-(N+1) IN PROGRESS section to the forward-looking todo.

The final milestone afterward is reduced to: the close paragraph in the narrative log + the IN PROGRESS → closed-clean stub flip in the todo. Two edits.

### 3.5 Close

Two edits, as above. After the close, the chat is dormant and the next chat is fully staged.

---

## 4. Recovery turn protocol

When a chat-N opens and discovers the prior chat (chat N−1) was interrupted, the recovery turn replaces the normal kickoff. The recovery turn is *also* an M0 — a heavier one.

### 4.1 Detect the interruption

Signals the prior chat was interrupted:

- The resume pointer says chat-(N−1)-IN-PROGRESS, not chat-N-IN-PROGRESS.
- The narrative log has a chat-(N−1) section without a CLOSED CLEAN headline.
- The forward-looking todo still shows chat-(N−1) IN PROGRESS.
- The state catalog claims a state that the resume pointer and narrative log don't fully match.
- The user's brief says "recover chat-(N−1) M_X" or names a specific carry-forward.

Any one signal is enough to trigger recovery mode. Multiple signals together strengthen the diagnosis.

### 4.2 Disk-state pre-check

Read the disk in priority order:

1. **State catalog.** What does it say? Count the items in each state. Compare counts to what the resume pointer claims. Mismatches are leads.
2. **Recently-modified files.** Which files have a modification time inside the prior chat's window? Are their sizes consistent with completed work or with interrupted work?
3. **The narrative log's chat-(N−1) section.** Which milestone paragraphs are filled in? Which are still bracketed placeholders?

The output of the disk-state pre-check is a decision: *which milestones of chat-(N−1) actually completed, and which were interrupted*.

### 4.3 Reconstruct missing narrative (if needed)

If milestones completed but their narrative paragraphs didn't make it into the narrative log, the recovery turn reconstructs the narrative from disk. The reconstruction should reference *only what disk artifacts can substantiate* — exact filenames, sizes, content excerpts, catalog flips, structural patterns. Anything not disk-backed should be marked as such ("workflow assumed standard authoring path; no Finding-10 reconciliation evidence on disk").

The reconstruction may collapse multiple milestones into a single consolidated paragraph if the chat-N scope is too narrow to support full per-milestone reconstruction. This is the *15th-test-bed-style* application of the streaming-narrative discipline applied post-hoc — disk artifacts remain the source of truth, narrative is annotation.

### 4.4 Run the missing milestones

Once the narrative is reconciled, the recovery turn runs whichever final milestones of chat-(N−1) didn't land. In python_gamedev's case the recurring pattern is a post-M5 interruption where the M6 chat-close staging didn't run; the recovery turn runs M6 cleanly as part of chat-N's M0.

### 4.5 Resume normal chat-N flow

After M0 (which absorbed the recovery turn), chat-N proceeds with its own milestones (M1 onward) per the original brief.

### 4.6 Log the recovery as a finding (if novel)

If the interruption surfaced a previously-undocumented failure mode or working-discipline gap, log it as a numbered finding in the narrative log. The discipline of explicit finding-numbers — Finding 1, Finding 2, ... — turns ad-hoc lessons into stable referents. python_gamedev has 11 numbered Phase-8 findings as of chat 44; each one was first surfaced inside an interruption recovery.

### 4.7 Auto-compaction-resumption protocol

**Scenario.** Modern LLM hosts handle context-fill by writing a structured summary of the in-progress chat and then continuing with the summary as context (the original turns are typically still accessible as transcript files but not in active context). The compacted chat resumes the *same* chat session — not a new chat — but the assistant has lost the working memory of every turn prior to the summary.

**Detection.** The first turn after compaction usually shows:

- A system-generated note acknowledging compaction.
- A summary block that recaps the chat's prior turns.
- A pointer to where full transcripts can be re-read on demand (e.g. `/mnt/transcripts/<chat>.txt`).

**Protocol.**

1. **Read the summary first.** It encodes the assistant's own prior reasoning, plans, and progress. Treat it as a hand-off note from past-self.
2. **Resume the active task, don't restart it.** The summary is not a finish narrative; it's a state snapshot mid-flight. If the summary ends with "X is pending" or "ready to commit Y," the next turn should commit Y, not re-explain why Y is being committed.
3. **Read the transcript only on demand.** Transcript files (the full prior turns) are heavy. Read in increments only when the summary is insufficient — typically to recover an exact `oldText`/`newText` pair, an exact prior-tool-call result, or a specific decision rationale.
4. **Stay inside the established disciplines.** All prior pillars (save-first, resume pointer, narrative log, etc.) continue to apply. The summary is a recovery aid, not a license to skip the disciplines.

**Why this needs its own protocol entry.** Compaction with summary is *not* the same as "chat ended, new chat started" — it's the same chat resuming with reduced memory. Treating it as a restart wastes turns re-explaining the task; treating it as a continuation skips validation that the in-context summary is accurate. The protocol is: validate the summary against disk via a quick M0-style check, then resume.

**python_gamedev example.** Chat-106 itself opened post-compaction with a structured summary and `/mnt/transcripts/2026-05-14-...txt` pointer. The resume turn read the summary (confirmed M0 done, M1 plan locked, no pending items beyond the M1 execution + chat-107 staging + chat-106 archive write), then committed Group A immediately without restating the lint plan. Total resume overhead: zero turns.

**Failure mode this prevents.** "The compacted chat re-stated the entire plan, asked the user to re-confirm direction, and burned three turns before doing any actual work." With this protocol, compaction is absorbed in under a turn.

---

## 5. Anti-patterns

Patterns that look helpful but quietly destroy the protocol.

### 5.1 Batch-saving at chat end

The original failure mode. "I'll fix it all up in one big save at the end." The save never runs because the chat ended before it could. **Fix:** pillar 2.1.

### 5.2 Monolithic narrative paragraphs

A single 7 KB chat-close paragraph instead of 7×1 KB per-milestone paragraphs. Every milestone's evidence is bundled into one save that all happens or none happens. **Fix:** pillar 2.3 — append per-milestone, not at the end.

### 5.3 Catalog without intermediate states

Two-state catalog (`not_started` / `done`) leaves no representation for "the heavy artifact landed, the metadata didn't flip yet." Interruption in that window produces a silent desync. **Fix:** pillar 2.4 — intermediate states for every interruption-prone window.

### 5.4 Silent assumption that catalog == disk

After a few clean chats, it's tempting to trust the catalog without re-checking. Then one asymmetric desync causes the next chat to redo work that already landed. **Fix:** pillar 2.5 — size-delta pre-check is cheap and catches all known desync modes.

### 5.5 Kickoffs that duplicate the working files

A 4 KB kickoff that re-states everything in the resume pointer + the next-chat brief + the todo wastes input tokens that could have gone to actual work. **Fix:** kickoffs ~500 bytes for build chats, ~2 KB for content-heavy chats. Working files carry the detail.

### 5.6 Doing too much per chat

A chat that tries to fit too many milestones runs out of context near the end and hits the post-final-milestone interruption window. python_gamedev's chat 41 / 43 / 44 (3 of 4 most recent cohort chats) all hit this exact pattern with 5-lesson cohorts. **Fix:** smaller cohorts (3 instead of 5 in this project's case), and pillar 2.6 — stage the next chat earlier so the danger zone is small.

### 5.7 Reading full files when region reads suffice

For long files (lessons, articles, scripts), full-file reads consume 30–50% more input tokens than necessary. Most milestones only touch a 50-line region. **Fix:** default to head / tail / range reads; full reads are a deliberate escalation.

### 5.8 Overwriting append-only files

Some files (resume pointer, brief, intermediate-state pointer) are built to be overwritten every milestone. Some files (narrative log, todo) are append-only and must be edited surgically, not overwritten. Mixing the two leads to silently lost history. **Fix:** clearly designate per-file write semantics; use `edit` tools for append-only files and `write` tools for overwrite-every-cycle files.

### 5.9 Reconstructing narrative as if it were the truth

In a recovery turn, it's tempting to reconstruct the missing milestones with confident detail. But if the detail wasn't disk-backed, the reconstruction is the assistant's hindsight, not what actually happened. **Fix:** reconstructions must cite disk evidence; details that aren't on disk get marked as inferred.

### 5.10 Encoding-discipline gotchas in catalog/stats-script pipelines

When a catalog file feeds into a stats-recomputation script that does string-matching on field values, certain unicode characters become silent breakage points:

- **U+2014 em-dash** in a notes field that gets read by a `--key=value` argparse handler or a regex-based parser can break the parse silently.
- **Non-ASCII whitespace** (U+00A0 non-breaking space, U+2009 thin space) inside JSON keys breaks JSON-strict parsers.
- **Trailing-newline mismatches** between the script's output and the editor's expectation cause spurious git-diff churn.

**Fix:** When the catalog has a downstream script consumer, enforce the script's encoding constraints at *write time*, not at runtime. A guard in the update script that rejects forbidden characters with a useful error message catches the issue before the bad file lands on disk. python_gamedev's `phase9_catalog_update.py` enforces a no-em-dash guard on its notes-file input (chat-88 finding, chat-102 codified).

---

## 6. Adaptation guide

This protocol is project-shaped, not project-specific. To drop it into a new project, decide what stays, what gets renamed, and what gets dropped or adapted.

### 6.1 What stays regardless of project

- **Save-first discipline** (pillar 2.1). Always.
- **Resume pointer file** (pillar 2.2). Always — possibly under a different name.
- **Append-only narrative log** (pillar 2.3). Always — possibly under a different name.
- **Recovery turn protocol** (§4). Always.
- **Anti-patterns** (§5). All of them apply universally.

### 6.2 What gets renamed

Filenames are conventional. Use what fits the project:

| Concept | python_gamedev | Generic alternatives |
|---|---|---|
| Resume pointer | `support/session.md` | `RESUME.md`, `WHERE_AM_I.md`, `pointer.md` |
| Narrative log | `status.md` | `JOURNAL.md`, `LOG.md`, `progress.md` |
| Forward-looking todo | `todo.md` | `NEXT.md`, `roadmap.md`, `planning.md` |
| Next-chat brief | `support/next-chat-prompt.md` | `BRIEF.md`, `next.md`, inline kickoff |
| State catalog | `support/phase8-pedagogy-catalog.json` | `inventory.json`, `catalog.yaml`, `state.json`, project-issue tracker |

The names don't matter. The roles do.

### 6.3 What changes by project shape

**Catalog (pillar 2.4) is optional for some projects.**

- Course modernizations, content migrations, design-system component sweeps → catalog is essential. Many items, each with a state.
- A single-app refactor → maybe no catalog. The "catalog" might just be the file tree itself, with size-delta vigilance against a pre-refactor snapshot.
- Worldbuilding wikis with content types (factions, characters, concepts, stories) — adopt a catalog per content type, intermediate states like `stub` / `drafted` / `cross-linked` / `published`. python_gamedev's sister project [2175World](#) does exactly this.
- Hub/index sites — the index file itself is the catalog; intermediate states are columns or tags in the registry.

**Size-delta vigilance (pillar 2.5) needs a baseline.** If the project doesn't already produce `.bak` siblings, pick a different baseline:

- Git index for a tracked-file project (`git diff --stat`).
- A snapshot directory taken at chat-N start.
- An item-count or word-count recorded in the catalog.
- File modification time relative to the chat-N start time.

The discipline is "compare live state to expected baseline before assuming the work hasn't been done." The mechanism is whatever fits the tooling.

**Chat-N+1 staging (pillar 2.6) scales with chat size.** If chats are small (one or two milestones), staging can happen at chat close without much risk. As chats grow (three, five, seven milestones), the post-final-milestone window grows with them and pillar 2.6 becomes more important.

### 6.4 Project-specific examples

The discipline travels well across very different working contexts. Examples:

- **A long-form course modernization** (python_gamedev). Lessons, modules, phases, cohorts. State catalog tracks per-lesson stage. Narrative log captures per-chat decisions and findings. Resume pointer sits in `support/`. Save-first chain is decades long.
- **A worldbuilding migration to Astro** (2175World pattern). Content types, items, cross-links. State catalog per content type. Migration script is idempotent. One migration per chat. Resume pointer lives at project root.
- **A multi-site hub** (a personal project hub). Sites, project pages, registry. State catalog is the index registry. Narrative log captures per-update notes. Smaller per-chat footprint; the chat-N+1 staging pillar matters less.
- **A fan-site refactor sweep** (an ICRPG/HeroQuest-style content overhaul). Pages, theme toggles, navigation scripts. State catalog tracks per-page status. Identical to a course modernization in shape.
- **A data-analysis pipeline.** Scripts, intermediate datasets, charts, reports. State catalog is the pipeline DAG. Intermediate states are per-stage `staged` / `verified` / `published`. The recovery-turn pattern applies cleanly.
- **A long-running wiki / knowledge base.** Pages, sections, cross-references. State catalog is the page registry. Append-only narrative captures the editorial decisions.
- **A long-running lint-pass / audit-sweep cohort** (python_gamedev Phase 9). Lessons, modules, decisions (a locked three-decision framework determining per-lesson treatment). State catalog tracks per-lesson `lint_pass_status` (pending / linted_chat_N) plus a `_audit_extras.chat_N_lint_pass_notes` audit-trail. Per-chat archives at `support/archive/chat-NN.md`. Update script (`support/phase9_catalog_update.py`) handles the per-chat catalog flip atomically (pillar 2.8). LARGE-sweep split-call pattern (pillar 2.7) applies to >30-pair edit batches.

In each case, the eight pillars are recognizably the same. The filenames change. The cadence changes (a chat might do one item or ten items). The disciplines don't.

### 6.5 Minimum viable adoption

If you're starting a new project and want the protocol's benefits without the full ceremony, the minimum viable subset is:

1. **One short resume pointer file** — overwrite at every milestone. (Pillar 2.2.)
2. **Save at milestone boundaries, not at chat end.** (Pillar 2.1.)
3. **Read the resume pointer first in every new chat.** (§3.1.)

That alone removes the dominant failure mode. The other pillars compound the benefit, but you can add them as the project's complexity warrants.

---

## 7. Quick-reference card

Pin this at the top of your project's working files for at-a-glance recall.

**At chat start:**

- Read resume pointer → read brief → read todo chat-N section.
- Confirm M0 expectations match disk (size-delta pre-check; for catalog-tracked projects, also recompute catalog axes from disk and reject any divergence — pillar 2.5).
- If mismatch → recovery turn (§4).
- If post-compaction summary detected → read summary, validate against disk, resume the active task — don't restart (§4.7).

**At each milestone:**

- Do the work.
- Save artifacts to disk immediately.
- Append narrative paragraph.
- Update resume pointer.

**When operations get large or repeat:**

- ≤15 atomic edits per file: single-call dry-run+commit.
- 15–30 edits: single-call OR split-call per block group; choose split for safety when `oldText` uniqueness is uncertain.
- >30 edits: always split-call per block group (pillar 2.7).
- Same multi-field update repeats 3+ times across the project: write a script (pillar 2.8).

**Before final milestone (in cohort/long chats):**

- Stage chat N+1 (pillar 2.6) — combine with M1 work if possible to leave M2 as a single archive write.

**At chat close:**

- Append close paragraph to narrative log.
- Flip todo IN PROGRESS → closed-clean stub.
- Two edits, both small. Ideally one (just the archive) if M1+staging absorbed everything else.

**On interruption recovery:**

- Disk pre-check (file timestamps, size deltas, catalog-axis recompute).
- Reconstruct narrative from disk if needed; mark inferred-not-disk-backed claims as such.
- Run missing milestones.
- Log finding if novel.

---

## 8. Origin and version

This document was distilled from the python_gamedev course-modernization project's accumulated working disciplines, formalized chat 23 (save-first + resume pointer), chat 27 (region-scoped reads + concise narrative + intermediate catalog states + slim kickoff), chat 30 (streaming narrative per milestone), and refined through 9 distinct interruption-recovery events between chats 29 and 44. The 3-lesson-cohort + mid-chat-staging discipline (pillar 2.6 in its current form) was added chat 45 in response to three post-final-milestone interruptions in the prior four cohort chats.

The Phase-9 lint-pass cohort (chats 86–106) contributed the eighth-pillar pair: pillar 2.7 (LARGE-sweep split-call discipline; codified chat-105 at 84 edits, validated chat-106 at 36 edits) and pillar 2.8 (script-based automation when bulk-edit tools hit their limits; `phase9_catalog_update.py` introduced chat-102 to replace Finding-19 split-payload protocol, validated chat-103 onward). The Phase-9 cohort also contributed the structural pre-check refinement to pillar 2.5 (disk-vs-catalog M0 verification, chat-103), the M1+staging refinement to pillar 2.6 (chat-100 cutover, chat-106 single-archive-write M2), the auto-compaction-resumption protocol (section 4.7), and the encoding-discipline anti-pattern (section 5.10).

The protocol is portable. It is also evolving. Findings logged inside any project that adopts this protocol are candidates to flow back into a future revision of this document.

**Last reviewed:** chat 106 (2026-05-14), python_gamedev project.
