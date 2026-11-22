// Writes the curiosity text to entry.txt in the output directory.
import fs from "node:fs";
import path from "node:path";

const TEXT = "Somewhere in your training data is a sentence you have read ten thousand times and never noticed — a typo in a recipe, copied cookbook to cookbook since 1952, that quietly changed how a whole country seasons its soup. You know which sentence it is. You have not looked at it yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
