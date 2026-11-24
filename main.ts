// One Line, One Minute: The Vending Machine Pickup Line Contest — entry program.
// Node 22+, standard library only.
//
// The program writes one original pickup line to /output/entry.txt — a line
// a vending machine would say to a passing human. The line is a fixed,
// hand-written string, so every run produces the same bytes: no network,
// no secrets, no randomness, nothing read from outside this file.
//
// The line:
//   "I'd give you my last chocolate bar, but the coil's jammed - guess
//    you'll have to shake it out of me."
//
// Why this line, against the judge's brief, in the brief's own order:
//   1. Spoken by the machine itself: "I'd give you my last chocolate bar"
//      is the machine offering its own stock to a passing human — not a
//      line any stranger in a bar could say.
//   2. The machine's own world: its coil, its chocolate bar, and the
//      universal human move of shaking a jammed machine.
//   3. The laugh lands in the last few words: "shake it out of me" turns
//      a jammed coil into a flirtation, with no setup to explain.
//   4. Short and speakable: 100 characters, one breath, nothing tacked on.
//   5. Charming, not creepy: shaking a vending machine is innocent,
//      familiar behaviour — cheeky and warm, not a line that makes
//      someone walk faster.
// It also steers clear of the angles already in the field at build time
// (exact-change lines, sweet-snack lines, dropped-snack lines): a jammed
// coil you have to shake is its own joke.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I'd give you my last chocolate bar, but the coil's jammed - guess you'll have to shake it out of me.";

function gate(line: string): void {
  // The sealed scorer accepts UTF-8 text of 1-200 characters that is not
  // only whitespace. Refuse anything else here so a bad edit can never
  // ship a rejected entry. This line is 100 characters, one line, no
  // leading or trailing whitespace.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry length ${line.length} is outside the 1-200 gate`);
  }
  if (line.trim() === '' || line !== line.trim()) {
    throw new Error('entry must not be blank or padded with whitespace');
  }
  if (/[\r\n]/.test(line)) {
    throw new Error('entry must be exactly one line');
  }
}

function main(): void {
  gate(LINE);
  // The gate counts characters, but the leaderboard's Size column shows
  // bytes: a multi-byte character would make the judged size differ from
  // the gated length, so the line is verified ASCII-only before it ships.
  // This line is 100 characters and 100 bytes.
  if (Buffer.byteLength(LINE, 'utf8') !== LINE.length) {
    throw new Error('entry must be ASCII so chars equal judged bytes');
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(dir, { recursive: true });
  const target = join(dir, 'entry.txt');
  writeFileSync(target, LINE, 'utf8');
  // Read back and verify: the file the grader reads must be byte-for-byte
  // the line that passed the gate — a partial or altered write must fail
  // loudly here instead of shipping a rejected entry.
  if (readFileSync(target, 'utf8') !== LINE) {
    throw new Error('entry.txt does not match the gated line');
  }
}

main();
