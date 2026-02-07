#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const DIST = path.resolve(process.cwd(), 'dist');

function findHtmlFiles(dir){
  const entries = fs.readdirSync(dir, { withFileTypes:true });
  const files = [];
  for(const e of entries){
    const full = path.join(dir, e.name);
    if(e.isDirectory()) files.push(...findHtmlFiles(full));
    else if(full.endsWith('.html')) files.push(full);
  }
  return files;
}

function checkBasicA11y(document, filePath){
  const issues = [];

  // Check 1: No title
  const title = document.querySelector('title');
  if(!title || !title.textContent.trim()){
    issues.push({ type: 'error', id: 'missing-title', msg: 'Page has no <title>' });
  }

  // Check 2: Heading hierarchy (h1 should exist, no skips like h1 -> h3)
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  if(headings.length === 0){
    issues.push({ type: 'warning', id: 'no-headings', msg: 'Page has no heading structure' });
  } else {
    const levels = headings.map(h => parseInt(h.tagName[1]));
    if(levels[0] !== 1){
      issues.push({ type: 'warning', id: 'no-h1', msg: 'First heading should be <h1>' });
    }
    // Check for heading level skips (e.g., h1 -> h3)
    for(let i = 1; i < levels.length; i++){
      if(levels[i] - levels[i-1] > 1){
        issues.push({ type: 'warning', id: 'heading-skip', msg: `Heading skip: <h${levels[i-1]}> → <h${levels[i]}>` });
        break; // Report once
      }
    }
  }

  // Check 3: Images without alt text
  const images = Array.from(document.querySelectorAll('img'));
  images.forEach(img => {
    const alt = img.getAttribute('alt');
    if(!alt || alt.trim() === ''){
      const src = img.getAttribute('src') || '(no src)';
      issues.push({ type: 'error', id: 'missing-alt', msg: `Image missing alt text: ${src}` });
    }
  });

  // Check 4: Form inputs without associated labels
  const formInputs = Array.from(document.querySelectorAll('input, textarea, select'));
  formInputs.forEach(input => {
    const type = input.getAttribute('type');
    // Skip hidden and submit buttons
    if(type === 'hidden' || type === 'submit' || type === 'button') return;
    
    const id = input.getAttribute('id');
    const name = input.getAttribute('name');
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if(!ariaLabel && !ariaLabelledBy){
      // Check for associated label
      if(!id || !document.querySelector(`label[for="${id}"]`)){
        issues.push({ type: 'warning', id: 'missing-label', msg: `Form input without label: <${input.tagName.toLowerCase()} name="${name}">` });
      }
    }
  });

  // Check 5: Links without text or aria-label
  const links = Array.from(document.querySelectorAll('a'));
  links.forEach(link => {
    const text = link.textContent.trim();
    const ariaLabel = link.getAttribute('aria-label');
    const ariaLabelledBy = link.getAttribute('aria-labelledby');
    if(!text && !ariaLabel && !ariaLabelledBy){
      const href = link.getAttribute('href') || '#';
      issues.push({ type: 'warning', id: 'empty-link', msg: `Link has no text or aria-label: ${href}` });
    }
  });

  // Check 6: Buttons without text or aria-label
  const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(btn => {
    const text = btn.textContent.trim();
    const ariaLabel = btn.getAttribute('aria-label');
    const ariaLabelledBy = btn.getAttribute('aria-labelledby');
    if(!text && !ariaLabel && !ariaLabelledBy){
      issues.push({ type: 'warning', id: 'empty-button', msg: 'Button has no text or aria-label' });
    }
  });

  // Check 7: Missing lang attribute on <html>
  const html = document.documentElement;
  if(!html || !html.getAttribute('lang')){
    issues.push({ type: 'warning', id: 'missing-lang', msg: '<html> missing lang attribute' });
  }

  return issues;
}

async function run(){
  if(!fs.existsSync(DIST)){
    console.error('dist/ not found. Run `npm run build` first.');
    process.exit(2);
  }

  const htmlFiles = findHtmlFiles(DIST);
  if(htmlFiles.length === 0){
    console.log('No HTML files found in dist/.');
    return;
  }

  let totalIssues = 0;
  const issueSummary = { errors: 0, warnings: 0 };

  for(const f of htmlFiles){
    const html = fs.readFileSync(f, 'utf8');
    try {
      const dom = new JSDOM(html);
      const { document } = dom.window;
      const issues = checkBasicA11y(document, f);

      if(issues.length){
        console.log('---');
        console.log('File:', path.relative(process.cwd(), f));
        issues.forEach(issue => {
          const icon = issue.type === 'error' ? '❌' : '⚠️';
          console.log(`${icon} [${issue.id}] ${issue.msg}`);
          if(issue.type === 'error') issueSummary.errors++;
          else issueSummary.warnings++;
        });
        totalIssues += issues.length;
      }
    } catch (e) {
      console.warn(`Could not parse ${f}:`, e.message);
    }
  }

  if(totalIssues === 0){
    console.log('✅ No basic a11y issues found.');
  } else {
    console.log(`\n📊 Summary: ${issueSummary.errors} errors, ${issueSummary.warnings} warnings`);
  }
}

run().catch((err)=>{ console.error(err); process.exit(1); });