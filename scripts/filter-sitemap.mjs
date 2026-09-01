import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// VitePress 1.6.x generates sitemap.xml from every built page, including the
// 404 page. A 404 page must never be listed as an indexable URL, so we strip
// any <url> block whose <loc> resolves to /404 or /404.html after the build.
const sitemapPath = resolve(process.cwd(), 'docs/.vitepress/dist/sitemap.xml')

if (!existsSync(sitemapPath)) {
  console.warn('[filter-sitemap] sitemap.xml not found, skipping')
  process.exit(0)
}

const raw = readFileSync(sitemapPath, 'utf8')

const strip = raw.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
  const loc = block.match(/<loc>([^<]*)<\/loc>/)
  if (loc && /(?:^|\/)(?:404|404\.html)$/.test(loc[1])) return ''
  return block
})

if (strip === raw) {
  console.log('[filter-sitemap] no /404 entries found')
} else if (!strip.includes('<loc>')) {
  console.warn('[filter-sitemap] filtered sitemap would be empty, aborting')
  process.exit(1)
} else {
  writeFileSync(sitemapPath, strip)
  console.log('[filter-sitemap] removed /404 entries from sitemap.xml')
}