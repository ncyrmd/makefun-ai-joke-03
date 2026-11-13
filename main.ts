// ai-joke-03 entry: a Node 22 program (standard library only) that writes one
// original one-liner about AI coding agents to /output/entry.txt.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line, no trailing newline: the judge reads exactly the bytes written.
const JOKE =
  "My coding agent's pull request touched 47 files. The bug was a typo.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function main(): void {
  // The gate takes 1 to 280 characters, not only white space: refuse to
  // write anything that could not pass it.
  const length = [...JOKE].length;
  if (length < 1 || length > 280 || JOKE.trim().length === 0) {
    throw new Error(`joke is ${length} characters, outside the 1-280 gate`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
}

main();
