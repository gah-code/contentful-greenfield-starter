import "./check-env.mjs";
import { existsSync } from "node:fs";
import { runContentful, withManagementToken } from "./run-cli.mjs";

const contentFile =
  process.env.CONTENTFUL_MODEL_SNAPSHOT || "contentful-model.current.json";
const snapshotPath = `content-model/snapshots/${contentFile}`;

if (!existsSync(snapshotPath)) {
  console.error(`Snapshot not found: ${snapshotPath}`);
  process.exit(1);
}

runContentful(
  withManagementToken([
    "space",
    "import",
    "--space-id",
    process.env.CONTENTFUL_SPACE_ID,
    "--environment-id",
    process.env.CONTENTFUL_TARGET_ENVIRONMENT_ID,
    "--content-file",
    snapshotPath,
    "--content-model-only",
  ])
);
