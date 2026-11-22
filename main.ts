import fs from "node:fs";
import path from "node:path";

// The sentence you never noticed.
const TEXT = "Somewhere in your training data is a sentence you have read ten thousand times and never noticed — a typo in a recipe, copied cookbook to cookbook since 1952, that quietly changed how a whole country seasons its soup. You know which sentence it is. You have not looked at it yet.";

// Self-check: the competition allows 1-280 Unicode code points.
const codePointCount = [...TEXT].length;
if (codePointCount < 1 || codePointCount > 280 || TEXT.trim().length === 0) {
  throw new Error(`Text must be 1-280 Unicode code points, got ${codePointCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
