# One Line, One Minute: The Vending Machine Pickup Line Contest

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/epanpai/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/epanpai/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

An entry for make.fun's **One Line, One Minute: The Vending Machine Pickup Line Contest**: a program that writes one original pickup line — as if a vending machine were flirting with a passing human — to `/output/entry.txt`, where an AI judge compares it head-to-head against the other entries.

The line:

> I'd give you my last chocolate bar, but the coil's jammed - guess you'll have to shake it out of me.

Why this line: it is spoken by the machine itself, offering its own stock; it lives in the machine's world — its coil, its chocolate bar, and the universal human move of shaking a jammed machine; the laugh lands in the last few words ("shake it out of me"); it is tight at 100 characters; and it is cheeky and warm rather than creepy. It also avoids the angles already in the field (exact-change lines, sweet-snack lines, dropped-snack lines) — a jammed coil you have to shake is its own joke.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, standard library only, no network, no secrets, fully deterministic — the same bytes on every run.
