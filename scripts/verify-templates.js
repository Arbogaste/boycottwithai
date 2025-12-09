#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const templatesDir = path.join(process.cwd(), 'public', 'templates');

function walk(dir, cb) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

const missing = new Set();
const found = new Set();

walk(pagesDir, (file) => {
  const content = fs.readFileSync(file, 'utf8');
  const re = /\/templates\/([A-Za-z0-9_\-\.]+\.txt)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const fname = m[1];
    found.add(fname);
    const fpath = path.join(templatesDir, fname);
    if (!fs.existsSync(fpath)) missing.add(fname);
  }
});

if (found.size === 0) {
  console.log('No templates referenced in pages (unexpected).');
}

if (missing.size > 0) {
  console.error('Missing template files referenced in pages:');
  for (const m of missing) console.error('-', m);
  process.exit(2);
} else {
  console.log('All referenced templates present in public/templates:');
  for (const f of found) console.log('-', f);
  process.exit(0);
}
