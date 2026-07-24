import { readFileSync, existsSync } from "node:fs";

const snapshot =
  process.argv[2] ||
  "content-model/snapshots/contentful-model.current.json";

if (!existsSync(snapshot)) {
  console.error(`Snapshot not found: ${snapshot}`);
  process.exit(1);
}

const data = JSON.parse(readFileSync(snapshot, "utf8"));
const contentTypes = Array.isArray(data.contentTypes) ? data.contentTypes : [];

if (contentTypes.length === 0) {
  console.error("Snapshot contains no content types.");
  process.exit(1);
}

const ids = contentTypes.map((item) => item?.sys?.id).filter(Boolean);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

console.log(`Content types: ${contentTypes.length}`);
console.log(`Content type IDs: ${ids.join(", ")}`);

if (duplicates.length > 0) {
  console.error(`Duplicate content type IDs: ${[...new Set(duplicates)].join(", ")}`);
  process.exit(1);
}

console.log("Snapshot structure check passed.");
