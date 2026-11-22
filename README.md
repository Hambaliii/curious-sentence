# The sentence you never noticed

Running this program writes one short text to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR` if set, else `/output`).

## Why this text

The published judge brief is a curiosity brief — criterion 1 above all: it intrigues the reader, draws them in and keeps them asking; then craft (rhythm and pacing, plain concrete words) and a thought that lingers after the last line. The text answers by turning the reader into the subject: a sentence it has read ten thousand times and never noticed, a strange-but-plausible detail (a recipe typo copied since 1952 that changed how a country seasons its soup), and an ending that pulls instead of closing — you know which sentence it is, you just have not looked at it yet.

## How to run

```
node main.ts
```

License: MIT (see LICENSE).

## Output

The program writes `entry.txt` containing exactly 279 Unicode code points (281 bytes, UTF-8), with no trailing newline. The text stays within the competition's 1–280 code point limit.
