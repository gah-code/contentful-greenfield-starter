import "./check-env.mjs";
import { runContentful, withManagementToken } from "./run-cli.mjs";

runContentful(
  withManagementToken([
    "space",
    "migration",
    "--space-id",
    process.env.CONTENTFUL_SPACE_ID,
    "--environment-id",
    process.env.CONTENTFUL_ENVIRONMENT_ID,
    "content-model/migrations/0001-bootstrap-portfolio-model.js",
  ])
);
