import { defineConfig, type HeadConfig, type TransformContext } from 'vitepress'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const siteUrl = 'https://nimotecode.com'
const brandLogo = `${siteUrl}/app_icon.png`
const socialImage = `${siteUrl}/screenshots/NimoteCode_Promotion.jpg`
const localeConfig = {
  root: { lang: 'en-US', path: '' },
  zh: { lang: 'zh-CN', path: '/zh' }
} as const

function normalizePath(path: string): string {
  if (!path || path === 'index.md' || path === '/index.md') return '/'
  let normalized = path
    .replace(/\\/g, '/')
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  if (!normalized.startsWith('/')) normalized = `/${normalized}`
  normalized = normalized.replace(/\/+/g, '/')
  return normalized === '' ? '/' : normalized
}

function canonicalUrl(path: string): string {
  const normalized = normalizePath(path)
  return normalized === '/' ? siteUrl : `${siteUrl}${normalized}`
}

function asContent(value: unknown, fallback: string): string {
  if (typeof value === 'string' && value.trim()) return value
  return fallback
}

function pageDescription(context: TransformContext, title: string): string {
  const explicit = asContent(context.pageData.frontmatter.description, '')
  if (explicit) return explicit

  const normalizedTitle = title.trim()
  if (!normalizedTitle || normalizedTitle === 'NimoteCode') {
    return asContent(context.siteConfig.site.description, 'NimoteCode mobile developer workspace.')
  }

  return `${normalizedTitle} page on NimoteCode, the mobile-first developer workspace for SSH, terminal, Git, AI, debugging, tasks, and sync/cache workflows.`
}

function stripLocalePrefix(path: string): string {
  return path.replace(/^\/zh(?=\/|$)/, '') || '/'
}

function titleCase(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function languageForPath(path: string): string {
  const localeKey = pageLocaleKey(path)
  if (localeKey === 'zh') return 'zh-CN'
  return 'en-US'
}

function openGraphLocale(path: string): string {
  return languageForPath(path).replace('-', '_')
}

function localeAlternates(path: string): HeadConfig[] {
  const normalized = normalizePath(path)
  const suffix = normalized === '/' ? '' : normalized
  const stripped = suffix.replace(/^\/zh(\/|$)/, '/')
  const entries = Object.values(localeConfig).flatMap((locale) => {
    const localePath = `${locale.path}${stripped}` || '/'
    const href = localePath === '/' ? siteUrl : `${siteUrl}${localePath}`
    const sourceRelativePath = localePath.replace(/^\//, '')
    const sourcePath = !sourceRelativePath || sourceRelativePath.endsWith('/')
      ? `${sourceRelativePath}index.md`
      : `${sourceRelativePath}.md`

    // Do not advertise a translated URL unless the page actually exists.
    // This matters for English-only SEO landing pages and avoids hreflang 404s.
    if (!existsSync(resolve(process.cwd(), 'docs', sourcePath))) return []
    return [['link', { rel: 'alternate', hreflang: locale.lang, href }] as HeadConfig]
  })
  const englishPath = stripped || '/'
  const englishHref = englishPath === '/' ? siteUrl : `${siteUrl}${englishPath}`
  entries.push(['link', { rel: 'alternate', hreflang: 'x-default', href: englishHref }])
  return entries
}

function pageSchemas(context: TransformContext): object[] {
  const url = canonicalUrl(context.pageData.relativePath)
  const title = asContent(context.pageData.frontmatter.title, asContent(context.pageData.title, 'NimoteCode'))
  const description = pageDescription(context, title)
  const inLanguage = languageForPath(context.pageData.relativePath)

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NimoteCode',
      url: siteUrl,
      logo: brandLogo,
      sameAs: [
        'https://github.com/nimotecode',
        'https://x.com/nimotecode'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'NimoteCode',
      url: siteUrl,
      description: websiteDescription(inLanguage),
      inLanguage
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      inLanguage
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'NimoteCode',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'iOS, iPadOS, Android',
      url: siteUrl,
      image: socialImage,
      description: 'Mobile AI development workspace with code editor, SSH terminal, Git, AI Chat and Agent, LSP, debugger, tasks and sync/cache.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        category: 'Freemium'
      }
    }
  ]

  const normalizedPath = normalizePath(context.pageData.relativePath)
  if (normalizedPath !== '/') {
    const isBlogPost = normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog/'
    const datePublished = asContent(context.pageData.frontmatter.date, '')
    const dateModified = asContent(context.pageData.frontmatter.lastUpdated, datePublished)
    const authorName = asContent(context.pageData.frontmatter.author, 'NimoteCode Team')
    const article: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': isBlogPost ? 'BlogPosting' : 'TechArticle',
      headline: title,
      description,
      url,
      author: {
        '@type': 'Organization',
        name: authorName
      },
      publisher: {
        '@type': 'Organization',
        name: 'NimoteCode',
        logo: {
          '@type': 'ImageObject',
          url: brandLogo
        }
      }
    }

    if (isBlogPost && datePublished) {
      article.datePublished = datePublished
      article.dateModified = dateModified
      article.mainEntityOfPage = {
        '@type': 'WebPage',
        '@id': url
      }
      article.image = asContent(context.pageData.frontmatter.image, socialImage)
    }

    schemas.push(article)
  }

  if (context.pageData.frontmatter.noindex === true) {
    return schemas
  }

  const breadcrumb = breadcrumbSchema(context)
  if (breadcrumb) {
    schemas.push(breadcrumb)
  }

  const faq = faqSchema(context)
  if (faq) {
    schemas.push(faq)
  }

  const video = videoSchema(context)
  if (video) {
    schemas.push(video)
  }

  return schemas
}

function videoSchema(context: TransformContext): object | null {
  const value = context.pageData.frontmatter.video
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null

  const video = value as Record<string, unknown>
  const name = asContent(video.name, '')
  const description = asContent(video.description, '')
  const thumbnailUrl = asContent(video.thumbnailUrl, '')
  const uploadDate = asContent(video.uploadDate, '')
  const contentUrl = asContent(video.contentUrl, '')

  if (!name || !description || !thumbnailUrl || !uploadDate || !contentUrl) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl: asContent(video.embedUrl, contentUrl),
    url: canonicalUrl(context.pageData.relativePath),
    publisher: {
      '@type': 'Organization',
      name: 'NimoteCode',
      logo: {
        '@type': 'ImageObject',
        url: brandLogo
      }
    }
  }
}

function breadcrumbSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  const localePrefix = normalized.match(/^\/zh(?=\/|$)/)?.[0] ?? ''
  const stripped = stripLocalePrefix(normalized)
  if (stripped === '/') return null

  const segments = stripped.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: localePrefix ? `${siteUrl}${localePrefix}` : siteUrl
    }
  ]

  let currentUrl = localePrefix ? `${siteUrl}${localePrefix}` : siteUrl
  segments.forEach((segment, index) => {
    currentUrl = `${currentUrl}/${segment}`
    const isLast = index === segments.length - 1
    const label = isLast ? asContent(context.pageData.title, titleCase(segment)) : titleCase(segment)

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: label,
      item: currentUrl
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

function faqSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  const faqEntries: Record<string, Array<{ question: string, answer: string }>> = {
    '/docs/faq': [
      {
        question: 'Is NimoteCode only for remote development?',
        answer: 'No. You can work in Local Explorer mode or Remote Explorer (SSH) mode.'
      },
      {
        question: 'Which AI providers are supported?',
        answer: 'Built-in templates include OpenAI, Anthropic, Gemini, Grok, DeepSeek, Zhipu, Moonshot, Ollama, and custom OpenAI-compatible endpoints.'
      },
      {
        question: 'What can I do in Source Control?',
        answer: 'You can stage, unstage, discard, commit, push, pull, fetch, manage branches and stashes, view history, and use Git AI analysis tools.'
      },
      {
        question: 'Can I run project tasks?',
        answer: 'Yes. Use the Tasks panel to create and run tasks, then inspect output in terminal.'
      },
      {
        question: 'Why is a feature locked?',
        answer: 'Some capabilities are Pro-gated. Subscription status is verified by the app premium access flow.'
      }
    ],
    '/zh/docs/faq': [
      {
        question: 'NimoteCode 只能远程开发吗？',
        answer: '不是。支持 Local Explorer（本地）与 Remote Explorer（SSH）两种模式。'
      },
      {
        question: '支持哪些 AI 提供商？',
        answer: '内置模板包括 OpenAI、Anthropic、Gemini、Grok、DeepSeek、Zhipu、Moonshot、Ollama 以及自定义 OpenAI 兼容端点。'
      },
      {
        question: 'Source Control 能做什么？',
        answer: '支持暂存、取消暂存、丢弃、提交、推拉取、分支与 stash 管理、历史与 Git AI 分析。'
      },
      {
        question: '可以运行项目任务吗？',
        answer: '可以。使用 Tasks 面板创建并运行任务，输出可在终端查看。'
      },
      {
        question: '为什么有些功能不可用？',
        answer: '部分能力受 Pro 门控，需通过订阅状态校验。'
      }
    ],
    '/mobile-ide': [
      {
        question: 'Is NimoteCode just an SSH client?',
        answer: 'No. It combines Editor, Explorer, SSH, Terminal, Git and AI Agent in one mobile development workspace.'
      },
      {
        question: 'Can I work on a remote project from a phone or tablet?',
        answer: 'Yes. Connect to a remote project through SSH, inspect files, edit code, run terminal commands and review Git changes in the same workspace.'
      },
      {
        question: 'Is NimoteCode available for Android and iOS?',
        answer: 'NimoteCode is currently available for Android. The public iOS App Store release is being prepared; check the download page for current availability.'
      }
    ],
    '/ssh-ide': [
      {
        question: 'What is an SSH IDE?',
        answer: 'An SSH IDE adds project browsing, code editing, terminal commands and Git review around an SSH connection so you can work on a remote codebase, not only run shell commands.'
      },
      {
        question: 'Can I review Git changes after editing over SSH?',
        answer: 'Yes. NimoteCode keeps Source Control next to the remote workspace so you can inspect diffs and use supported Git workflows before shipping a change.'
      },
      {
        question: 'When is an SSH IDE better than a terminal-only client?',
        answer: 'Choose an SSH IDE when the task includes locating files, editing code, running verification commands and reviewing a diff. A terminal-only client may be enough for command-only work.'
      }
    ],
    '/mobile-ai-coding': [
      {
        question: 'How is mobile AI coding different from a standalone AI chat?',
        answer: 'NimoteCode keeps AI Chat and Agent alongside the editor, project Explorer, SSH terminal and Git context, so suggestions can be inspected and verified in the real workspace.'
      },
      {
        question: 'Can AI Agent make changes in a remote workspace?',
        answer: 'AI Agent can assist multi-step tasks, but remote and production-adjacent work should be reviewed with command and change controls enabled.'
      },
      {
        question: 'Does AI replace Git review?',
        answer: 'No. AI can help explain, plan and assist a task; Git review and appropriate test or verification commands remain part of the delivery workflow.'
      }
    ]
  }

  const entries = faqEntries[normalized]
  if (!entries) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer
      }
    }))
  }
}

// Load the primary UI font asynchronously so it never blocks first paint.
// The fallback stack in tokens.css renders immediately, and the web font
// swaps in once the stylesheet finishes loading.
const FONT_LATIN = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap'
const FONT_ZH = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap'

function fontByLocale(lang: string): string {
  if (lang.startsWith('zh')) return FONT_ZH
  return FONT_LATIN
}

function fontLinks(path: string): HeadConfig[] {
  const normalized = normalizePath(path)
  const stripped = suffixToLocaleKey(normalized)
  const lang = stripped === 'zh' ? 'zh-CN' : 'en-US'
  const href = fontByLocale(lang)
  return [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    // Async pattern: stylesheet is print-only until the browser swaps it to all.
    // This keeps the font off the critical render path.
    ['link', { rel: 'preload', as: 'style', href }],
    ['link', { rel: 'stylesheet', href, media: 'print', onload: "this.media='all'" }],
    // noscript fallback so the font still works without JS.
    ['noscript', {}, `<link rel="stylesheet" href="${href}">`]
  ]
}

function suffixToLocaleKey(normalized: string): string {
  const m = normalized.match(/^\/(zh)(?:\/|$)/)
  return m ? m[1] : ''
}

function pageLocaleKey(path: string): string {
  const normalized = normalizePath(path)
  return suffixToLocaleKey(normalized)
}

function websiteDescription(inLanguage: string): string {
  if (inLanguage === 'zh-CN') {
    return 'NimoteCode 是面向移动场景的 AI 开发工作区：集代码编辑器、SSH 终端、Git、AI Agent、LSP、调试器、任务与同步/缓存于一体。'
  }
  return 'NimoteCode is a mobile AI development workspace for developers on the move: code editor, SSH terminal, Git, AI Agent, LSP, debugger, tasks and sync/cache.'
}

export default defineConfig({
  title: 'NimoteCode',
  titleTemplate: false,
  description: 'NimoteCode is a mobile AI development workspace: an SSH-enabled code editor with terminal, Git, AI Agent, LSP, debugger, tasks and sync/cache.',
  base: '/',
  lang: 'en-US',
  cleanUrls: true,
  sitemap: {
    hostname: siteUrl
  },
  transformHead(context) {
    const url = canonicalUrl(context.pageData.relativePath)
    const title = asContent(context.pageData.frontmatter.title, asContent(context.pageData.title, 'NimoteCode'))
    const description = pageDescription(context, title)
    const image = asContent(context.pageData.frontmatter.image, socialImage)
    const isPageNotFound = normalizePath(context.pageData.relativePath) === '/404'
    const noIndex = isPageNotFound || context.pageData.frontmatter.noindex === true
    const robotsContent = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    return [
      ['link', { rel: 'canonical', href: url }],
      ...fontLinks(context.pageData.relativePath),
      ['meta', { property: 'og:site_name', content: 'NimoteCode' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: `${title} — NimoteCode` }],
      ['meta', { property: 'og:locale', content: openGraphLocale(context.pageData.relativePath) }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'twitter:site', content: '@nimotecode' }],
      ['meta', { name: 'robots', content: robotsContent }],
      ['meta', { name: 'author', content: 'NimoteCode' }],
      ['meta', { name: 'apple-mobile-web-app-title', content: 'NimoteCode' }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(pageSchemas(context))],
      ...localeAlternates(context.pageData.relativePath)
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/app_icon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/app_icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#d946ef' }],
    ['meta', { name: 'theme-color', content: '#a21caf', media: '(prefers-color-scheme: dark)' }],
    ['meta', { name: 'generator', content: 'VitePress' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ],

  themeConfig: {
    siteTitle: 'NimoteCode',
    logo: {
      light: '/app_icon.png',
      dark: '/app_icon.png'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nimotecode' },
      { icon: 'twitter', link: 'https://x.com/nimotecode' },
      { icon: 'discord', link: 'https://discord.gg/nimotecode' }
    ],
    editLink: {
      pattern: 'https://github.com/nimotecode/nimote_issues/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Product', link: '/features' },
          { text: 'Workflows', link: '/use-cases/' },
          { text: 'Docs', link: '/docs/quick-start' },
          { text: 'Blog', link: '/blog/' },
          { text: 'Download', link: '/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ],
        sidebar: {
          '/blog/': [
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'All Guides', link: '/blog/' },
                { text: 'Best Mobile IDEs', link: '/blog/best-mobile-ides' },
                { text: 'Best SSH Clients', link: '/blog/best-ssh-clients' },
                { text: 'How to Code From iPad', link: '/blog/how-to-code-from-ipad' },
                { text: 'Claude Code From Phone', link: '/blog/claude-code-from-phone' },
                { text: 'Codex From Phone', link: '/blog/codex-from-phone' },
                { text: 'Termius vs Blink vs NimoteCode', link: '/blog/termius-vs-blink-vs-nimotecode' }
              ]
            },
            {
              text: 'Build Log',
              collapsed: false,
              items: [
                { text: 'Why I Built a Mobile IDE', link: '/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app' },
                { text: 'SSH + Mobile Coding Is Still Broken', link: '/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide' },
                { text: 'Flutter Code Editors Broke Down', link: '/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide' },
                { text: 'Is Local Heavy Compilation Dead?', link: '/blog/is-local-heavy-compilation-dead-the-rise-of-2026-ai-agentic-mobile-ides' },
                { text: '~90% AI-Generated Code, 6 Months', link: '/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months' },
                { text: 'Agent Design Is Bounded Optimization', link: '/blog/agent-design-is-bounded-optimization-not-intelligence' },
                { text: 'Can an AI Agent Code From a Phone?', link: '/blog/can-an-ai-agent-really-code-from-a-phone' }
              ]
            }
          ],
          '/': [
            {
              text: 'Start',
              items: [
                { text: 'Quick Start', link: '/docs/quick-start' },
                { text: 'Introduction', link: '/introduction' },
                { text: 'Features', link: '/features' },
                { text: 'Use Cases', link: '/use-cases/' },
                { text: 'Pro', link: '/pro' },
                { text: 'Download', link: '/download?utm_source=sidebar&utm_medium=website&utm_campaign=product_navigation' },
                { text: 'Watch Demo', link: '/demo?utm_source=sidebar&utm_medium=website&utm_campaign=product_navigation' }
              ]
            },
            {
              text: 'Guides',
              collapsed: true,
              items: [
                { text: 'All Guides', link: '/blog/' },
                { text: 'Best Mobile IDEs', link: '/blog/best-mobile-ides' },
                { text: 'Best SSH Clients', link: '/blog/best-ssh-clients' },
                { text: 'How to Code From iPad', link: '/blog/how-to-code-from-ipad' },
                { text: 'Claude Code From Phone', link: '/blog/claude-code-from-phone' },
                { text: 'Codex From Phone', link: '/blog/codex-from-phone' },
                { text: 'Termius vs Blink vs NimoteCode', link: '/blog/termius-vs-blink-vs-nimotecode' }
              ]
            },
            {
              text: 'Use Cases',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/use-cases/' },
                { text: 'Remote Hotfix', link: '/use-cases/remote-hotfix' },
                { text: 'On-call Diagnostics', link: '/use-cases/on-call-diagnostics' },
                { text: 'AI Agent Workflows', link: '/use-cases/ai-agent' }
              ]
            },
            {
              text: 'Daily Workflow',
              collapsed: true,
              items: [
                { text: 'SSH Workspace', link: '/docs/ssh' },
                { text: 'Editor', link: '/docs/editor' },
                { text: 'Terminal', link: '/docs/terminal' },
                { text: 'Search', link: '/docs/search' },
                { text: 'Source Control', link: '/docs/source-control' },
                { text: 'Tasks', link: '/docs/tasks' }
              ]
            },
            {
              text: 'AI and Diagnostics',
              collapsed: true,
              items: [
                { text: 'AI Chat and Agent', link: '/docs/ai' },
                { text: 'LSP', link: '/docs/lsp' },
                { text: 'Debug', link: '/docs/debug' },
                { text: 'Sync / Cache', link: '/docs/sync-cache' }
              ]
            },
            {
              text: 'Reference',
              collapsed: true,
              items: [
                { text: 'Account and Subscription', link: '/docs/account-subscription' },
                { text: 'Security and Safety', link: '/docs/security' },
                { text: 'Settings', link: '/docs/settings' },
                { text: 'Configuration', link: '/docs/configuration' },
                { text: 'FAQ', link: '/docs/faq' },
                { text: 'Support', link: '/support' }
              ]
            }
          ]
        },
        search: {
          provider: 'local'
        }
      }
    },

    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '产品', link: '/zh/features' },
          { text: '场景', link: '/zh/use-cases/' },
          { text: '文档', link: '/zh/docs/quick-start' },
          { text: '博客', link: '/zh/blog/' },
          { text: '下载', link: '/zh/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ],
        sidebar: {
          '/zh/blog/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '全部指南', link: '/zh/blog/' },
                { text: '最佳移动 IDE', link: '/zh/blog/best-mobile-ides' },
                { text: '最佳 SSH 客户端', link: '/zh/blog/best-ssh-clients' },
                { text: '如何用 iPad 编程', link: '/zh/blog/how-to-code-from-ipad' },
                { text: '用手机使用 Claude Code', link: '/zh/blog/claude-code-from-phone' },
                { text: '用手机使用 Codex', link: '/zh/blog/codex-from-phone' },
                { text: 'Termius 对比 Blink 与 NimoteCode', link: '/zh/blog/termius-vs-blink-vs-nimotecode' }
              ]
            },
            {
              text: '构建日志',
              collapsed: false,
              items: [
                { text: '为什么我选择做移动 IDE', link: '/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app' },
                { text: 'SSH + 移动编程仍然破碎', link: '/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide' },
                { text: 'Flutter 编辑器为何崩坏', link: '/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide' },
                { text: '本地重型编译会消失吗', link: '/blog/is-local-heavy-compilation-dead-the-rise-of-2026-ai-agentic-mobile-ides' },
                { text: '约 90% AI 代码仍花 6 个月', link: '/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months' },
                { text: 'Agent 设计是有界优化', link: '/blog/agent-design-is-bounded-optimization-not-intelligence' },
                { text: 'AI Agent 能在手机编程吗', link: '/blog/can-an-ai-agent-really-code-from-a-phone' }
              ]
            }
          ],
          '/zh/': [
            {
              text: '开始使用',
              items: [
                { text: '快速入门', link: '/zh/docs/quick-start' },
                { text: '简介', link: '/zh/introduction' },
                { text: '功能特性', link: '/zh/features' },
                { text: '使用场景', link: '/zh/use-cases/' },
                { text: 'Pro', link: '/zh/pro' },
                { text: '下载', link: '/zh/download' }
              ]
            },
            {
              text: '场景',
              collapsed: true,
              items: [
                { text: '总览', link: '/zh/use-cases/' },
                { text: '远程热修', link: '/zh/use-cases/remote-hotfix' },
                { text: '值班诊断', link: '/zh/use-cases/on-call-diagnostics' },
                { text: 'AI Agent 工作流', link: '/zh/use-cases/ai-agent' }
              ]
            },
            {
              text: '使用指南',
              collapsed: true,
              items: [
                { text: '全部指南', link: '/zh/blog/' },
                { text: '最佳移动 IDE', link: '/zh/blog/best-mobile-ides' },
                { text: '最佳 SSH 客户端', link: '/zh/blog/best-ssh-clients' },
                { text: '如何用 iPad 编程', link: '/zh/blog/how-to-code-from-ipad' },
                { text: '用手机使用 Claude Code', link: '/zh/blog/claude-code-from-phone' },
                { text: '用手机使用 Codex', link: '/zh/blog/codex-from-phone' },
                { text: 'Termius 对比 Blink 与 NimoteCode', link: '/zh/blog/termius-vs-blink-vs-nimotecode' }
              ]
            },
            {
              text: '日常开发',
              collapsed: true,
              items: [
                { text: 'SSH 远程开发', link: '/zh/docs/ssh' },
                { text: '编辑器', link: '/zh/docs/editor' },
                { text: '终端使用', link: '/zh/docs/terminal' },
                { text: '远程搜索', link: '/zh/docs/search' },
                { text: 'Source Control 工作流', link: '/zh/docs/source-control' },
                { text: 'Tasks 面板', link: '/zh/docs/tasks' }
              ]
            },
            {
              text: 'AI 与诊断',
              collapsed: true,
              items: [
                { text: 'AI Chat 与 Agent', link: '/zh/docs/ai' },
                { text: 'LSP 面板', link: '/zh/docs/lsp' },
                { text: '调试面板', link: '/zh/docs/debug' },
                { text: 'Sync / Cache 面板', link: '/zh/docs/sync-cache' }
              ]
            },
            {
              text: '参考',
              collapsed: true,
              items: [
                { text: '账户与订阅', link: '/zh/docs/account-subscription' },
                { text: '安全与防护', link: '/zh/docs/security' },
                { text: '设置', link: '/zh/docs/settings' },
                { text: '配置', link: '/zh/docs/configuration' },
                { text: '常见问题', link: '/zh/docs/faq' },
                { text: '支持', link: '/zh/support' }
              ]
            }
          ]
        },
        search: {
          provider: 'local'
        }
      }
    }
  },

  outDir: './.vitepress/dist',
  assetsDir: './assets',

  vite: {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|webp|avif)$/i,
        exclude: [
          'app_icon.png',
          'favicon.ico'
        ],
        includePublic: true,
        cache: true,
        cacheLocation: 'node_modules/.vite-image-optimizer',
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true
        },
        png: {
          quality: 80,
          compressionLevel: 9
        },
        jpeg: {
          quality: 80
        },
        webp: {
          quality: 80
        }
      })
    ]
  }
})
