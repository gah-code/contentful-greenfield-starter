import { spawnSync } from "node:child_process";

export function withManagementToken(args) {
  const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN?.trim();
  return token ? [...args, "--management-token", token] : args;
}

export function runContentful(args) {
  const command = process.platform === "win32" ? "npx.cmd" : "npx";
  const result = spawnSync(command, ["contentful", ...args], {
    stdio: "inherit",
    env: process.env,
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  process.exitCode = result.status ?? 1;
}
