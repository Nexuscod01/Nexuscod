---
title: 手机上的 AI Agent 工作流 | NimoteCode
description: 使用 NimoteCode AI Chat 解决直接的代码问题，使用 AI Agent 在文件、终端和 Git 上下文中完成受控的多步骤移动开发任务。
---

# 手机上的 AI Agent 工作流

根据任务形态选择 AI 模式。**AI Chat** 用于理解和决策；**AI Agent** 用于跨项目文件、终端检查与最终汇总的多步骤协助。

这个工作流仍在持续改进，但 Android 版已经在 Google Play 上可用，App Store 版本正在准备中。如果你经常远程开发或使用 SSH，欢迎用真实任务试一试，并告诉我们还缺少什么；具体反馈会直接帮助下一次迭代。

<p class="seo-cta-actions">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=website&utm_campaign=ai_agent_demo" class="home-page-btn primary" target="_blank" rel="noreferrer">在 Google Play 试用</a>
  <a href="https://github.com/nimotecode/nimote_issues/issues" class="home-page-btn secondary" target="_blank" rel="noreferrer">在 GitHub 提交反馈</a>
</p>

## 适合用 AI Chat 的时刻

需要解释一段代码、理解终端输出、规划一次重构，或在修改前列出审查点时，优先使用 Chat。保持目标文件激活，能让对话获得更合适的上下文。

## 适合用 AI Agent 的时刻

当任务需要检查文件、提出计划、执行编辑、运行检查并汇总结果时，使用 Agent 更合适。它可在按设备计算的 14 天试用期间使用，也可通过 Pro 使用；并非按量提供的免费额度。

## 保持流程可审查

1. 明确目标与工作区边界。
2. 在写入或执行命令前阅读计划。
3. 查看实际终端输出和发生变化的文件。
4. 运行与项目相符的验证命令。
5. 在交付前检查 Git diff；交付需要受限 Git 写入操作时再使用 Pro。

NimoteCode 围绕工具调用提供校验与锁定机制，但生产环境的操作责任仍在执行者。请继续阅读 [AI Chat 与 Agent](/zh/docs/ai) 与 [配置指南](/zh/docs/configuration)。
