const required = [
  "CONTENTFUL_SPACE_ID",
  "CONTENTFUL_ENVIRONMENT_ID",
  "CONTENTFUL_TARGET_ENVIRONMENT_ID",
];

const missing = required.filter((name) => !process.env[name]?.trim());

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const source = process.env.CONTENTFUL_ENVIRONMENT_ID;
const target = process.env.CONTENTFUL_TARGET_ENVIRONMENT_ID;

if (source === "master" || target === "master") {
  console.error("Safety stop: bootstrap source and verification target must not be master.");
  process.exit(1);
}

if (source === target) {
  console.error("Safety stop: source and verification environments must be different.");
  process.exit(1);
}

console.log("Contentful environment configuration is valid.");
console.log(`Space: ${process.env.CONTENTFUL_SPACE_ID}`);
console.log(`Source environment: ${source}`);
console.log(`Verification environment: ${target}`);
console.log(
  process.env.CONTENTFUL_MANAGEMENT_TOKEN
    ? "Management token: present in environment (value hidden)"
    : "Management token: not set; CLI login/config will be used"
);
