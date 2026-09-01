---
title: "用手机使用 Codex：SSH、终端与 Git 工作流指南"
description: 学习如何在远程开发工作流中用手机使用 Codex，配合 NimoteCode 的 SSH、项目文件、终端验证与 Git 审查。
date: "2026-09-01"
lastUpdated: "2026-09-01"
author: "NimoteCode 团队"
---

# 用手机使用 Codex：让 Agent 靠近仓库

<p class="article-meta">发布于 2026-09-01 · 作者：NimoteCode 团队</p>

用手机使用 Codex 遵循与任何远程编码代理工作流相同的原则：Agent 应该跑在仓库与工具所在的地方，而你同时保留检查它改动的方式。一个通过 SSH 连接的移动工作区给了你这条路径，而无需把任务拆散到终端应用、编辑器与独立的 Git 客户端之间。

<ImagePlaceholder image-key="codexFromPhone" alt="Codex 远程开发工作流">
  <strong>图片占位 —— Codex 远程工作流</strong>
  <span>请替换为同一项目中的已脱敏终端会话、源码文件与验证结果。</span>
</ImagePlaceholder>

## 一个聚焦的远程配置

按你组织对身份认证与安全的要求，在你团队使用的开发主机上配置 Codex。在 [NimoteCode](/zh/codex-from-phone) 连接主机、打开仓库根目录，并用 SSH 终端启动或继续相关会话。

## 移动端审查闭环

当 Codex 解释或修改代码时，不要只停留在终端摘要。在编辑器中打开受影响的文件，在终端检查命令与测试输出，并在[源代码管理](/zh/docs/source-control)里查看最终结果。即使你只有离开工位的几分钟，这也让工作流保持有用。

## 把远程 Codex 与工作区 AI 搭配

NimoteCode 也可以配置兼容的 AI 提供商，用于应用内 Chat 与 Agent 任务。这与使用远程 Codex CLI 是两回事。选择适合任务的方式，但保持同样的安全护网：清晰目标、对生成改动的审查，以及合适的验证命令。

<div class="seo-cta"><p><strong>延续远程编码代理任务，而不丢失项目与 Git 上下文。</strong></p><p class="seo-cta-actions"><a href="/zh/demo?utm_source=codex_from_phone_blog&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a><a href="/zh/download?utm_source=codex_from_phone_blog&utm_medium=organic&utm_campaign=download" class="home-page-btn primary">下载 NimoteCode</a></p></div>

相关：[Codex 落地页](/zh/codex-from-phone) · [移动 AI 编程](/zh/mobile-ai-coding) · [用手机使用 Claude Code](/zh/blog/claude-code-from-phone)