import "./check-env.mjs";
import { existsSync } from "node:fs";
import { runContentful } from "./run-cli.mjs";

const environment = process.env.CONTENTFUL_ENVIRONMENT_ID?.trim();
const snapshotInput = process.argv[2] || process.env.CONTENTFUL_MODEL_SNAPSHOT;

if (!environment) {
  console.error("Missing required environment variable: CONTENTFUL_ENVIRONMENT_ID");
  process.exit(1);
}

if (environment === "master") {
  console.error("Safety stop: model import must not target master.");
  process.exit(1);
}

if (!snapshotInput?.trim()) {
  console.error(
    "Missing required snapshot path. Pass a file path or set CONTENTFUL_MODEL_SNAPSHOT."
  );
  process.exit(1);
}

const snapshotPath = snapshotInput.includes("/")
  ? snapshotInput
  : `content-model/snapshots/${snapshotInput}`;

if (!existsSync(snapshotPath)) {
  console.error(`Snapshot not found: ${snapshotPath}`);
  process.exit(1);
}

console.log(`Import target environment: ${environment}`);
console.log(`Snapshot: ${snapshotPath}`);

runContentful([
  "space",
  "import",
  "--space-id",
  process.env.CONTENTFUL_SPACE_ID,
  "--environment-id",
  environment,
  "--content-file",
  snapshotPath,
  "--content-model-only",
]);
