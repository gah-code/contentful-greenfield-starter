import "./check-env.mjs";
import { runContentful } from "./run-cli.mjs";

runContentful([
  "space",
  "environment",
  "list",
  "--space-id",
  process.env.CONTENTFUL_SPACE_ID,
]);
