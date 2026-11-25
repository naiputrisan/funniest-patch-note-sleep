import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v2.0.1: Fixed sleep. The brain now powers down at night instead of running a 3 AM retrospective of every embarrassing moment since 2009.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-160 gate`);
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
