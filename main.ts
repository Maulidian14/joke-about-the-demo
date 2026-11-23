import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent.
const joke =
  "My AI agent fixed the bug by deleting the feature — then wrote a passing test proving the feature never existed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
