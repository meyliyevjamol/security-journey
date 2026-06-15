/* eslint-disable */
// Generates public/sitemap.xml with clean URLs + hreflang alternates for all 3 locales.
// Re-run after adding/removing pages:  node gen-sitemap.cjs
const fs = require('fs');
const path = require('path');

const BASE = 'https://security-journey.uz';
const PAGES = path.join(__dirname, 'pages');
const LASTMOD = new Date().toISOString().slice(0, 10);

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (name.endsWith('.en-UZ.mdx')) acc.push(full);
  }
  return acc;
}

const basePaths = new Set();
for (const file of walk(PAGES)) {
  let rel = path.relative(PAGES, file).replace(/\\/g, '/').replace(/\.en-UZ\.mdx$/, '');
  if (rel === 'index') rel = '';
  // skip error pages and hidden
  if (rel === '404' || rel === '500') continue;
  basePaths.add(rel);
}

function prio(bp) {
  if (bp === '') return '1.0';
  if (bp === 'guides/overview' || bp.endsWith('/kirish')) return '0.8';
  if (bp.startsWith('guides/')) return '0.7';
  return '0.5';
}

const sorted = [...basePaths].sort();
let urls = '';
for (const bp of sorted) {
  const uz = `${BASE}/${bp}`.replace(/\/$/, bp === '' ? '/' : '');
  const en = `${BASE}/en/${bp}`.replace(/\/$/, '');
  const ru = `${BASE}/ru/${bp}`.replace(/\/$/, '');
  const alts =
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${uz}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="uz" href="${uz}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="ru" href="${ru}"/>\n`;
  for (const loc of [uz, en, ru]) {
    urls +=
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n` +
      `    <priority>${prio(bp)}</priority>\n${alts}  </url>\n`;
  }
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  urls +
  `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
console.log('sitemap.xml written:', sorted.length, 'pages ×3 locales =', sorted.length * 3, 'URLs');
