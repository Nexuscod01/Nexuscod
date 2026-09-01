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

// noindex stub pages (English-only articles that get a small zh "view English" page)
// and the 404 page must never be listed as indexable URLs.
const noindexSlugs = [
  'can-an-ai-agent-really-code-from-a-phone',
  'agent-design-is-bounded-optimization-not-intelligence',
  'i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months',
  'is-local-heavy-compilation-dead-the-rise-of-2026-ai-agentic-mobile-ides',
  'ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide',
  'why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide',
  'why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app'
].map((s) => `/zh/blog/${s}`)

const strip = raw.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
  const loc = block.match(/<loc>([^<]*)<\/loc>/)
  if (!loc) return block
  const u = loc[1]
  if (/(?:^|\/)(?:404|404\.html)$/.test(u)) return ''
  if (noindexSlugs.some((suffix) => u.endsWith(suffix))) return ''
  return block
})

if (strip === raw) {
  console.log('[filter-sitemap] no noindex/404 entries found')
} else if (!strip.includes('<loc>')) {
  console.warn('[filter-sitemap] filtered sitemap would be empty, aborting')
  process.exit(1)
} else {
  writeFileSync(sitemapPath, strip)
  console.log('[filter-sitemap] removed noindex/404 entries from sitemap.xml')
}