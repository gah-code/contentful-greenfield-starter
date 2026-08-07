const required = [
  "CONTENTFUL_SPACE_ID",
  "CONTENTFUL_ENVIRONMENT_ID",
];

const missing = required.filter((name) => !process.env[name]?.trim());

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const environment = process.env.CONTENTFUL_ENVIRONMENT_ID.trim();
const hasManagementToken = Boolean(process.env.CONTENTFUL_MANAGEMENT_TOKEN?.trim());

if (environment === "master") {
  console.error("Safety stop: CMS development operations must not target master.");
  process.exit(1);
}

if (environment !== "dev") {
  console.error("Safety stop: current Phase 00/03 CMS operations must target dev.");
  process.exit(1);
}

if (!hasManagementToken) {
  console.error("Missing required environment variable: CONTENTFUL_MANAGEMENT_TOKEN");
  process.exit(1);
}

console.log("Contentful environment safety check");
console.log("");
console.log("Space: configured");
console.log(`Environment: ${environment}`);
console.log("");
console.log("PASS");
console.log("- environment is configured");
console.log("- environment is not master");
console.log("- required management credential is present");
console.log("- secret values remain hidden");
