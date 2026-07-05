#!/usr/bin/env node
import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const GH = process.env.GITHUB_TOKEN;
const OWNER = 'iamimmanuelraj';
const CORE_REPOS = ['frappe/press', 'coollabsio/coolify'];

async function gh(path) {
  const r = await fetch(`https://api.github.com${path}`, {
    headers: { Authorization: `Bearer ${GH}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!r.ok) throw new Error(`GH ${r.status} ${path}`);
  return r.json();
}

async function findOSSRepos() {
  const seen = new Map();
  // ponytail: 4 search pages + events in parallel
  const [pages, events] = await Promise.all([
    Promise.all([1,2,3,4].map(p => gh(`/search/commits?q=author:${OWNER}&per_page=100&page=${p}`))),
    gh(`/users/${OWNER}/events?per_page=100`)
  ]);
  for (const data of pages) {
    for (const c of data.items || []) {
      const name = c.repository.full_name;
      if (!name.startsWith(`${OWNER}/`)) seen.set(name, (seen.get(name) || 0) + 1);
    }
  }
  for (const e of events) {
    if ((e.type === 'PushEvent' || e.type === 'PullRequestEvent') && e.repo?.name) {
      const name = e.repo.name;
      if (!name.startsWith(`${OWNER}/`) && !seen.has(name)) seen.set(name, 1);
    }
  }
  for (const repo of CORE_REPOS) { if (!seen.has(repo)) seen.set(repo, 0); }
  return [...seen.entries()].sort((a, b) => b[1] - a[1]).map(([name]) => name);
}

async function getCommitMessages(owner, repo) {
  try {
    const commits = await gh(`/repos/${owner}/${repo}/commits?author=${OWNER}&per_page=10`);
    return commits.map(c => c.commit.message.split('\n')[0]).filter(Boolean);
  } catch { return []; }
}

const OUT = 'contributions';
const README_MARKER = '<!-- OSS_CONTRIBUTIONS -->';

async function main() {
  const repos = await findOSSRepos();
  if (!repos.length) { console.log('No open source repos found'); return; }

  // ponytail: all commit fetches in parallel
  const entries = await Promise.all(repos.map(async (repo) => {
    const [org, name] = repo.split('/');
    const msgs = await getCommitMessages(org, name);
    return { repo, org, name, msgs };
  }));

  mkdirSync('temp', { recursive: true });
  for (const { repo, org, name, msgs } of entries) {
    const filePath = join(OUT, org, `${name}.md`);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, [
      `# ${repo}`,
      '',
      '<!-- AI_DESC -->',
      '',
      `[![Contributions](https://contrib.rocks/image?repo=${repo})](https://github.com/${repo}/graphs/contributions)`,
      '',
      '### Recent commits',
      ...msgs.map(m => `- ${m}`)
    ].join('\n'));
    console.log(`✓ ${repo}`);
  }

  // Write CONTRIBUTIONS.md without AI descriptions
  writeFileSync(join(process.cwd(), 'CONTRIBUTIONS.md'), [
    '# 🤝 Open Source Contributions',
    '',
    'Projects I\'ve contributed to — auto-updated every 6 hours.',
    '',
    ...entries.map(e => [
      `## [${e.repo}](./${join(OUT, e.repo + '.md')})`,
      '',
      '<!-- AI_DESC -->',
      '',
      `[![Contributions](https://contrib.rocks/image?repo=${e.repo})](https://github.com/${e.repo}/graphs/contributions)`,
      '',
      '---',
      ''
    ].join('\n')),
    '',
    '_Last updated: ' + new Date().toISOString().slice(0, 10) + '_'
  ].join('\n'));

  // Update README link
  const readmePath = join(process.cwd(), 'README.md');
  let readme = readFileSync(readmePath, 'utf-8');
  const link = `${README_MARKER}\n\n## 🤝 Open Source Contributions\n\n[View my contributions →](./CONTRIBUTIONS.md)\n\n${README_MARKER}`;
  const marker = new RegExp(`${README_MARKER}[\\s\\S]*?${README_MARKER}`, 'g');
  if (marker.test(readme)) readme = readme.replace(marker, link);
  else readme = readme.replace('<h1 align="center">Connect with me', `${link}\n\n<h1 align="center">Connect with me`);
  writeFileSync(readmePath, readme);

  // Write AI prompt file (top 30 repos to save tokens)
  const aiRepos = entries.slice(0, 30);
  writeFileSync('temp/ai-input.txt', [
    'You describe open-source contributions concisely in 1-2 sentences. Focus on what was done, not how. Sound human and engaging.',
    '',
    'For each repo below, generate a description of my contributions based on the commit messages.',
    'Output each as: REPO|description',
    '---',
    ...aiRepos.map(e => `REPO: ${e.repo}\nCOMMITS: ${e.msgs.join(', ')}\n---`),
    '',
    'Now output descriptions for each repo above, one per line in REPO|description format:'
  ].join('\n'));

  console.log(`\n✓ ${entries.length} repos collected, ${aiRepos.length} queued for AI descriptions`);
}

main().catch(e => { console.error(e); process.exit(1); });
