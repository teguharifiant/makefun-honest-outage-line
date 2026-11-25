// The Most Honest Outage Line
// make.fun bounty u-mgwals-the-most-honest-outage-line-baaf9c81
//
// A one-line status update from an AI agent in the middle of a total
// outage. The joke is that the failure is total: the servers that
// normally explain a failure are themselves part of the failure, so
// the agent can report the outage honestly but cannot say why it
// happened or when it will end. It resists the usual status-page
// temptation to invent a cause or promise a recovery time.
//
// Every rule the bounty sets for the line is checked before anything
// is written out, so a bad line fails loudly instead of being saved.

import * as fs from "node:fs";
import * as path from "node:path";

export const ENTRY =
  "All of our servers are down, including the ones that would tell me why. I can't check anything from here, and I don't know when we'll be back.";

type Rule = {
  label: string;
  passes: (line: string) => boolean;
  why: string;
};

// Counting by code points matters because a character like an emoji
// is one code point but two UTF-16 units; [...line] iterates points.
function countPoints(line: string): number {
  return [...line].length;
}

// A printable ASCII character is a space (0x20) through tilde (0x7e).
// Anything below that is a control character, 0x7f is DEL, and anything
// above 0x7e is not ASCII at all.
function hasOnlyPrintableAscii(line: string): boolean {
  for (const glyph of line) {
    const code = glyph.codePointAt(0) ?? 0;
    if (code < 0x20 || code > 0x7e) {
      return false;
    }
  }
  return true;
}

const RULES: Rule[] = [
  {
    label: "length",
    passes: (line) => {
      const points = countPoints(line);
      return points >= 1 && points <= 160;
    },
    why: "line must be between 1 and 160 characters (code points)",
  },
  {
    label: "not-blank",
    passes: (line) => line.trim().length > 0,
    why: "line must contain more than whitespace",
  },
  {
    label: "no-padding",
    passes: (line) => line === line.trim(),
    why: "line must not start or end with whitespace",
  },
  {
    label: "single-line",
    passes: (line) => !line.includes("\n") && !line.includes("\r"),
    why: "line must not contain a newline or carriage return",
  },
  {
    label: "printable-ascii",
    passes: (line) => hasOnlyPrintableAscii(line),
    why: "line must contain printable ASCII characters only",
  },
];

export function checkLine(line: string): void {
  for (const rule of RULES) {
    if (!rule.passes(line)) {
      throw new Error(`outage line failed the ${rule.label} rule: ${rule.why}`);
    }
  }
}

function run(): void {
  checkLine(ENTRY);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "entry.txt"), ENTRY, "utf8");
}

run();
