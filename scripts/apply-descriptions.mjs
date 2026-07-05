#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const aiOutput = process.argv[2];
if (!aiOutput) { console.log('No AI output provided'); process.exit(0); }

// Parse AI response: "REPO|description" lines
const descs = new Map();
for (const line of aiOutput.split('\n')) {
  const idx = line.indexOf('|');
  if (idx > 0) {
    const repo = line.slice(0, idx).trim();
    const desc = line.slice(idx + 1).trim();
    if (repo && desc) descs.set(repo, desc);
  }
}

if (!descs.size) { console.log('No descriptions parsed from AI output'); process.exit(0); }

let count = 0;
for (const [repo, desc] of descs) {
  const [org, name] = repo.split('/');
  if (!name) continue;

  // Update per-repo file
  const filePath = join(process.cwd(), 'contributions', org, `${name}.md`);
  try {
    let content = readFileSync(filePath, 'utf-8');
    content = content.replace('<!-- AI_DESC -->', `> ${desc}`);
    writeFileSync(filePath, content);
    count++;
  } catch { /* file might not exist if repo wasn't collected */ }
}

// Update CONTRIBUTIONS.md
const contribPath = join(process.cwd(), 'CONTRIBUTIONS.md');
let contrib = readFileSync(contribPath, 'utf-8');
for (const [repo, desc] of descs) {
  const header = `## [${repo}]`;
  const idx = contrib.indexOf(header);
  if (idx >= 0) {
    const afterHeader = contrib.indexOf('<!-- AI_DESC -->', idx);
    if (afterHeader >= 0) {
      contrib = contrib.slice(0, afterHeader) + `> ${desc}` + contrib.slice(afterHeader + 14);
    }
  }
}
writeFileSync(contribPath, contrib);

console.log(`✓ Applied descriptions for ${count} repos`);
