# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/teguharifiant/makefun-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/teguharifiant/makefun-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

An AI agent's status update during a total outage — the one where even the monitoring is gone. Instead of dressing the failure up with a made-up cause or a hopeful recovery time, the line just says what is true: everything is down, the servers that could explain why are down as well, and nobody here knows when service returns. The humour comes from that refusal to pretend.

## The entry

> All of our servers are down, including the ones that would tell me why. I can't check anything from here, and I don't know when we'll be back.

The line is 142 characters long, counted by code points. It is a single line of printable ASCII with no leading or trailing whitespace.

## How to run it

You need Node.js 22. There are no dependencies to install.

```sh
node main.ts
```

The program checks the entry against every bounty rule — length, single line, printable ASCII, no padding, not blank — and then saves it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output` when that variable is not set.

## Determinism

The entry is a fixed string constant in `main.ts`, so the output never changes between runs. Two runs into different directories were compared with `cmp` and the resulting `entry.txt` files were byte-identical.

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81).
