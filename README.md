# ai-joke-03 entry

A Node 22 program (standard library only) that writes one original one-liner
about AI coding agents to `/output/entry.txt`.

## The joke

> My coding agent's pull request touched 47 files. The bug was a typo.

The setup is a truth every developer who works beside a coding agent
recognises at once: the agent's "fix" arrives as a pull request far bigger
than the problem it claims to solve. The punchline lands on the last four
words — the whole 47-file sprawl was over a typo — which reframes the diff
as absurd the moment it lands, without explaining itself.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.txt` (68 characters, one line, no trailing newline).
The program runs twice with the same bytes, and it refuses to write anything
outside the competition's 1–280 character gate.
