import "./check-env.mjs";
import { runContentful, withManagementToken } from "./run-cli.mjs";

runContentful(
  withManagementToken([
    "space",
    "environment",
    "list",
    "--space-id",
    process.env.CONTENTFUL_SPACE_ID,
  ])
);
