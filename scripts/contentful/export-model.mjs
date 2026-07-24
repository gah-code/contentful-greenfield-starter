import "./check-env.mjs";
import { mkdirSync } from "node:fs";
import { runContentful } from "./run-cli.mjs";

const exportDir = "content-model/snapshots";
const contentFile =
  process.env.CONTENTFUL_MODEL_SNAPSHOT || "contentful-model.current.json";

mkdirSync(exportDir, { recursive: true });

runContentful([
  "space",
  "export",
  "--space-id",
  process.env.CONTENTFUL_SPACE_ID,
  "--environment-id",
  process.env.CONTENTFUL_ENVIRONMENT_ID,
  "--skip-content",
  "--skip-roles",
  "--skip-webhooks",
  "--export-dir",
  exportDir,
  "--content-file",
  contentFile,
]);
