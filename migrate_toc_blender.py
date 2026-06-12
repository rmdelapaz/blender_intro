#!/usr/bin/env python3
"""
migrate_toc_blender.py

Migrate the "In This Lesson" Table-of-Contents block in blender_course lesson
HTML files from the old inline-styled form to the new span-based `toc-card`
form. The new form lets the TOC collapse to a small floating button, handled by
the `.toc-card` rules already added to styles/main.css.

Old form (blender_course):
    <details class="card" open style="position: sticky; top: 80px; z-index: 100; background: var(--card-bg, white); box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem;">
        <summary style="cursor: pointer; font-weight: bold; padding: 0.5rem 1rem; user-select: none;">
            <h2 style="display: inline; margin: 0;">[icon] In This Lesson</h2>
        </summary>
        <nav aria-label="Table of Contents" style="padding: 0 1rem 1rem 1rem;">
            ...

New form:
    <details class="card toc-card" open>
        <summary aria-label="Toggle table of contents">
            <span class="toc-icon" aria-hidden="true">[icon]</span>
            <span class="toc-label">In This Lesson</span>
            <span class="toc-chevron" aria-hidden="true">[chevron]</span>
        </summary>
        <nav aria-label="Table of Contents">
            ...

What it changes (and ONLY this):
  * <details ...> opening tag -> class="card toc-card" open  (inline styles dropped)
  * <summary ...>...<h2>...</h2></summary> -> three accessible spans
  * <nav aria-label="Table of Contents" style="..."> -> same nav, inline style dropped
  * An optional preceding "<!-- Table of Contents -->" comment gets the
    " (collapses to a floating button)" note appended.
The <ol>...</ol> list of links is left completely untouched.

Indentation is detected per file (handles both 12-space and 16-space nesting),
so output stays clean regardless of how deeply the block is nested.

Safety / conventions:
  * --dry-run shows what WOULD change, writes nothing (run this FIRST).
  * Idempotent -- files already using the toc-card span form are skipped.
  * Whitespace/indent tolerant; preserves each file's LF/CRLF line endings.
  * Writes a sibling .bak before modifying (disable with --no-backup).
  * Operates only on the TOC <details> block; never touches lesson content.

Usage:
    python3 migrate_toc_blender.py --dry-run               # survey current dir
    python3 migrate_toc_blender.py --dry-run /path/to/blender_course
    python3 migrate_toc_blender.py                         # real run (.bak backups)
    python3 migrate_toc_blender.py --no-backup
    python3 migrate_toc_blender.py --pattern "lesson_*.html"
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import NamedTuple


class C:
    RESET = "\033[0m"; BOLD = "\033[1m"; DIM = "\033[2m"
    GREEN = "\033[32m"; YELLOW = "\033[33m"; RED = "\033[31m"; CYAN = "\033[36m"


def _strip_color() -> None:
    for name in ("RESET", "BOLD", "DIM", "GREEN", "YELLOW", "RED", "CYAN"):
        setattr(C, name, "")


# Match the old blender TOC block from <details> through </summary>.
# Tolerant of: an optional preceding "<!-- ... Table of Contents ... -->"
# comment line, arbitrary inline style content, minor whitespace, LF or CRLF.
# Captures: indent (leading ws on <details>), comment (optional), inner
# (leading ws on <summary>, one level deeper than <details>).
OLD_PATTERN = re.compile(
    r'(?:(?P<indent0>[ \t]*)<!--\s*(?P<comment>[^\r\n]*?Table of Contents[^\r\n]*?)\s*-->[ \t]*\r?\n)?'
    r'(?P<indent>[ \t]*)<details\s+class="card"\s+open\s+style="[^"]*">[ \t]*\r?\n'
    r'(?P<inner>[ \t]+)<summary\s+style="[^"]*">[ \t]*\r?\n'
    r'[ \t]+<h2\s+style="[^"]*">\s*\U0001F4D1\s*In This Lesson\s*</h2>[ \t]*\r?\n'
    r'(?P=inner)</summary>'
)

NAV_PATTERN = re.compile(r'<nav aria-label="Table of Contents"\s+style="[^"]*">')

NEW_SIGNATURE = re.compile(
    r'<details class="card toc-card" open>'
    r'|<span class="toc-icon" aria-hidden="true">\U0001F4D1</span>'
)


def detect_newline(text: str) -> str:
    idx = text.find("\n")
    if idx > 0 and text[idx - 1] == "\r":
        return "\r\n"
    return "\n"


def build_summary_block(indent: str, inner: str, comment, newline: str) -> str:
    unit = inner[len(indent):] or "    "
    span_indent = inner + unit
    lines = []
    if comment is not None:
        note = comment.strip()
        if "floating button" not in note:
            note = note + " (collapses to a floating button)"
        lines.append(indent + "<!-- " + note + " -->")
    lines += [
        indent + '<details class="card toc-card" open>',
        inner + '<summary aria-label="Toggle table of contents">',
        span_indent + '<span class="toc-icon" aria-hidden="true">\U0001F4D1</span>',
        span_indent + '<span class="toc-label">In This Lesson</span>',
        span_indent + '<span class="toc-chevron" aria-hidden="true">\u25BE</span>',
        inner + '</summary>',
    ]
    return newline.join(lines)


class Result(NamedTuple):
    path: Path
    status: str
    detail: str = ""


def process_file(path: Path, *, dry_run: bool, backup: bool) -> Result:
    try:
        text = path.read_text(encoding="utf-8")
    except OSError as e:
        return Result(path, "error", "read failed: " + str(e))
    except UnicodeDecodeError as e:
        return Result(path, "error", "not valid UTF-8: " + str(e))

    if NEW_SIGNATURE.search(text):
        return Result(path, "skipped_already", "already migrated")

    m = OLD_PATTERN.search(text)
    if not m:
        return Result(path, "no_match", "old TOC block not found")

    newline = detect_newline(text)
    replacement = build_summary_block(
        indent=m.group("indent"),
        inner=m.group("inner"),
        comment=m.group("comment"),
        newline=newline,
    )
    new_text = text[:m.start()] + replacement + text[m.end():]

    after = len(text[:m.start()]) + len(replacement)
    head, tail = new_text[:after], new_text[after:]
    tail_fixed, n = NAV_PATTERN.subn(
        '<nav aria-label="Table of Contents">', tail, count=1
    )
    new_text = head + tail_fixed
    nav_note = "nav style dropped" if n else "nav style not found (left as-is)"

    if dry_run:
        return Result(path, "updated", "dry-run, no file written; " + nav_note)

    if backup:
        bak = path.with_suffix(path.suffix + ".bak")
        try:
            bak.write_bytes(path.read_bytes())
        except OSError as e:
            return Result(path, "error", "backup failed: " + str(e))

    try:
        path.write_text(new_text, encoding="utf-8", newline="")
    except OSError as e:
        return Result(path, "error", "write failed: " + str(e))

    return Result(path, "updated", nav_note)


def parse_args(argv=None):
    p = argparse.ArgumentParser(
        description="Migrate the 'In This Lesson' TOC block in blender_course lesson HTML files.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    p.add_argument("directory", nargs="?", default=".", type=Path,
                   help="Directory containing lesson HTML files (default: current dir)")
    p.add_argument("--pattern", default="lesson_*.html",
                   help="Glob for lesson files (default: lesson_*.html)")
    p.add_argument("--dry-run", action="store_true",
                   help="Preview changes without modifying files")
    p.add_argument("--no-backup", action="store_true",
                   help="Skip writing .bak copies before modifying files")
    p.add_argument("--no-color", action="store_true", help="Disable ANSI color output")
    return p.parse_args(argv)


def main(argv=None):
    args = parse_args(argv)
    if args.no_color or not sys.stdout.isatty():
        _strip_color()

    base = args.directory.resolve()
    if not base.is_dir():
        print(C.RED + "Error: " + str(base) + " is not a directory" + C.RESET, file=sys.stderr)
        return 2

    files = sorted(base.glob(args.pattern))
    if not files:
        print(C.YELLOW + "No files matched '" + args.pattern + "' in " + str(base) + C.RESET)
        return 0

    mode = " (dry-run)" if args.dry_run else ""
    print(C.BOLD + C.CYAN + "Blender TOC migration" + mode + C.RESET)
    print(C.DIM + "Directory:" + C.RESET + " " + str(base))
    print(C.DIM + "Files:    " + C.RESET + " " + str(len(files)))
    if not args.dry_run:
        print(C.DIM + "Backups:  " + C.RESET + " " + ("no" if args.no_backup else "yes (.bak)"))
    print()

    results = [process_file(f, dry_run=args.dry_run, backup=not args.no_backup)
               for f in files]

    counts = {"updated": 0, "skipped_already": 0, "no_match": 0, "error": 0}
    symbols = {"updated": ("[+]", C.GREEN), "skipped_already": ("[.]", C.DIM),
               "no_match": ("[?]", C.YELLOW), "error": ("[x]", C.RED)}
    for r in results:
        counts[r.status] += 1
        sym, color = symbols[r.status]
        line = "  " + color + sym + C.RESET + " " + r.path.name
        if r.detail:
            line += " " + C.DIM + "- " + r.detail + C.RESET
        print(line)

    print()
    print(C.BOLD + "Summary:" + C.RESET)
    print("  " + C.GREEN + "updated         " + C.RESET + " " + str(counts["updated"]))
    print("  " + C.DIM + "already migrated" + C.RESET + " " + str(counts["skipped_already"]))
    print("  " + C.YELLOW + "no match found  " + C.RESET + " " + str(counts["no_match"]))
    print("  " + C.RED + "errors          " + C.RESET + " " + str(counts["error"]))
    if counts["no_match"]:
        print()
        print(C.YELLOW + "Some files didn't match the expected old TOC pattern. "
              "Inspect them before assuming they're done." + C.RESET)
    return 1 if counts["error"] else 0


if __name__ == "__main__":
    sys.exit(main())
