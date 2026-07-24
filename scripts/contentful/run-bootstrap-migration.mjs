import "./check-env.mjs";
import { runContentful } from "./run-cli.mjs";

runContentful([
  "space",
  "migration",
  "--space-id",
  process.env.CONTENTFUL_SPACE_ID,
  "--environment-id",
  process.env.CONTENTFUL_ENVIRONMENT_ID,
  "content-model/migrations/0001-bootstrap-portfolio-model.js",
]);
