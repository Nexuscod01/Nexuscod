---
title: "用手机使用 Claude Code：让 SSH、文件与 Git 保持关联"
description: 通过 SSH 用手机使用 Claude Code 的实用指南，在 NimoteCode 中保留项目 Explorer、编辑器、终端验证与 Git 审查。
date: "2026-09-01"
lastUpdated: "2026-09-01"
author: "NimoteCode 团队"
---

# 用手机使用 Claude Code：一个可审查的远程工作流

<p class="article-meta">发布于 2026-09-01 · 作者：NimoteCode 团队</p>

当 Claude Code 运行在你能够安全访问的开发主机上时，用手机使用它才可行。CLI 只是工作的一部分。要让工作可信，你还需要把仓库、命令输出与 Git diff 握在手里。

<ImagePlaceholder image-key="claudeCodeFromPhone" alt="远程编码代理工作流">
  <strong>图片占位 —— 远程编码代理工作流</strong>
  <span>请替换为已脱敏的 SSH 终端会话，以及与已改动源码和 Git 审查相邻的画面。</span>
</ImagePlaceholder>

## 把远程主机当作执行环境

按官方要求在你的开发机或服务器上配置 Claude Code，然后在 [NimoteCode 的 SSH 工作区](/zh/claude-code-from-phone) 打开该主机。移动设备是你的工作区客户端：它能访问既有会话的终端，同时把远程文件与源代码管理审查放在旁边。

## 让每个 Agent 闭环可观察

对每个任务用一套简单模式：

1. 在远程会话里陈述一个清晰目标。
2. 检查它识别出的文件与实现路径。
3. 在编辑器里核验任何建议的改动，而不是轻信摘要。
4. 运行最小且有意义的测试或验证命令。
5. 提交或推送前检查 Git diff。

这套模式适合小修复、代码解释或值班排查。它并不要求 NimoteCode 冒充 Claude Code，而是为远程 CLI 工作流补上移动工作所需的项目控制。

## 审慎使用应用内 AI

NimoteCode 也提供可配置的 AI Chat 与 Agent 工作流。当它们更适合时，可用于带工作区感知的提问或受控任务；任何远程或靠近生产的操作都要保持审查开启。配置细节见 [AI Chat 与 Agent](/zh/docs/ai)。

<div class="seo-cta"><p><strong>把远程 Agent 会话、仓库与 Git 审查放在同一个移动工作区。</strong></p><p class="seo-cta-actions"><a href="/zh/demo?utm_source=claude_code_blog&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a><a href="/zh/download?utm_source=claude_code_blog&utm_medium=organic&utm_campaign=download" class="home-page-btn primary">下载 NimoteCode</a></p></div>

相关：[Claude Code 落地页](/zh/claude-code-from-phone) · [用手机使用 Codex](/zh/blog/codex-from-phone) · [SSH IDE](/zh/ssh-ide)