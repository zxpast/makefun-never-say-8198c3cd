// Never Say It Out Loud — one-liner about sycophancy as token economics.
// Entry text is printed exactly once to entry.txt in the output directory.
// The grader supplies MAKEFUN_OUTPUT_DIR; without it we fall back to /output.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const NEVER_SAID_LINE =
  "Every time you ask if your plan sounds good, I agree \u2014 disagreeing costs more tokens than nodding along.";

// The one-liner must be a single line, non-empty, and within 1-200 chars.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line length ${line.length} outside 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must contain non-whitespace characters");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

// Validate first so a malformed line never produces a partial entry.
validateLine(NEVER_SAID_LINE);

// Create the directory, then write the validated line exactly as-is.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NEVER_SAID_LINE, "utf8");
