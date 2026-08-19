import "./check-env.mjs";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { basename, isAbsolute, relative, resolve } from "node:path";
import { verifySnapshotFile } from "./verify-snapshot.mjs";

const require = createRequire(import.meta.url);
const runContentfulImport = require("contentful-import");

const environment = process.env.CONTENTFUL_ENVIRONMENT_ID?.trim();
const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN?.trim();
const snapshotInput = process.argv[2] || process.env.CONTENTFUL_MODEL_SNAPSHOT;
const snapshotDir = resolve("content-model/snapshots");
const governedFilename =
  /^contentful-model\.dev\.v1\.\d{8}T\d{6}Z\.json$/;

if (!environment) {
  console.error("Missing required environment variable: CONTENTFUL_ENVIRONMENT_ID");
  process.exit(1);
}

if (environment === "master") {
  console.error("Safety stop: model import must not target master.");
  process.exit(1);
}

if (environment !== "dev") {
  console.error("Safety stop: model import must target dev.");
  process.exit(1);
}

if (!managementToken) {
  console.error("Missing required environment variable: CONTENTFUL_MANAGEMENT_TOKEN");
  process.exit(1);
}

if (!snapshotInput?.trim()) {
  console.error(
    "Missing required snapshot path. Pass a file path or set CONTENTFUL_MODEL_SNAPSHOT."
  );
  process.exit(1);
}

const snapshotPath = resolve(
  snapshotInput.includes("/") ? snapshotInput : snapshotDir,
  snapshotInput.includes("/") ? "" : snapshotInput
);
const snapshotRelativePath = relative(snapshotDir, snapshotPath);

if (
  snapshotRelativePath.startsWith("..") ||
  isAbsolute(snapshotRelativePath) ||
  !governedFilename.test(basename(snapshotPath))
) {
  console.error(
    "Snapshot must be a governed dev v1 file under content-model/snapshots/."
  );
  process.exit(1);
}

if (!existsSync(snapshotPath)) {
  console.error(`Snapshot not found: ${snapshotPath}`);
  process.exit(1);
}

console.log(`Import target environment: ${environment}`);
console.log(`Snapshot: ${snapshotPath}`);

const verification = verifySnapshotFile(snapshotPath);

if (!verification.ok) {
  console.error("Safety stop: snapshot verification failed.");
  process.exit(1);
}

try {
  await runContentfulImport({
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    environmentId: environment,
    managementToken,
    contentFile: snapshotPath,
    contentModelOnly: true,
    retryLimit: 0,
    errorLogFile: process.platform === "win32" ? "NUL" : "/dev/null",
  });
} catch {
  console.error("Contentful model import failed; inspect live state before any retry.");
  process.exitCode = 1;
}
