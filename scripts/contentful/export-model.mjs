import "./check-env.mjs";
import { existsSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const runContentfulExport = require("contentful-export");

const environment = process.env.CONTENTFUL_ENVIRONMENT_ID?.trim();
const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN?.trim();
const exportDir = resolve("content-model/snapshots");
const timestamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\.\d{3}Z$/, "Z");
const contentFile =
  process.env.CONTENTFUL_MODEL_SNAPSHOT?.trim() ||
  `contentful-model.dev.v1.${timestamp}.json`;
const governedFilename =
  /^contentful-model\.dev\.v1\.\d{8}T\d{6}Z\.json$/;

if (environment !== "dev") {
  console.error("Safety stop: model export must target dev.");
  process.exit(1);
}

if (!managementToken) {
  console.error("Missing required environment variable: CONTENTFUL_MANAGEMENT_TOKEN");
  process.exit(1);
}

if (!governedFilename.test(contentFile)) {
  console.error(
    "Snapshot filename must match contentful-model.dev.v1.<YYYYMMDDTHHMMSSZ>.json."
  );
  process.exit(1);
}

const snapshotPath = resolve(exportDir, contentFile);

if (existsSync(snapshotPath)) {
  console.error(`Safety stop: snapshot already exists: ${snapshotPath}`);
  process.exit(1);
}

mkdirSync(exportDir, { recursive: true });

try {
  await runContentfulExport({
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    environmentId: environment,
    managementToken,
    exportDir,
    contentFile,
    skipContent: true,
    skipAssets: true,
    skipRoles: true,
    skipWebhooks: true,
    skipTags: true,
    skipContentModel: false,
    skipEditorInterfaces: false,
    saveFile: true,
    errorLogFile: process.platform === "win32" ? "NUL" : "/dev/null",
  });
} catch {
  console.error("Contentful model export failed.");
  process.exitCode = 1;
}
