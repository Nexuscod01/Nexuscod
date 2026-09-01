---
title: 功能特性 | NimoteCode 移动 AI 开发工作台
description: 浏览 NimoteCode 的移动开发能力：本地与 SSH 工作区、编辑器、终端、Git、AI Chat 和 Agent、LSP、调试、Tasks 与 Sync/Cache。
---

# 功能特性

NimoteCode 将核心开发闭环收敛到一个移动工作区：**Explorer → Editor → Terminal → Git → AI**。任务需要什么，就打开什么，同时保留项目上下文。

<ImagePlaceholder image-key="featureOverview" alt="NimoteCode 核心工作区功能">
  <strong>图片占位符 —— 核心工作区模块</strong>
  <span>请替换为能清晰展示 Explorer、代码编辑器、Terminal、Source Control 与 AI 面板的产品截图。</span>
</ImagePlaceholder>

## 核心工作区

| 模块 | 能解决什么 | 可用性 |
| --- | --- | --- |
| Explorer + SSH | 打开本地项目，或使用密码、私钥连接已保存的远程 SSH 工作区。 | 免费 |
| 编辑器 | 标签页编辑、保存、剪贴板、撤销/重做、光标定位，以及可用时的结构化上下文。 | 免费 |
| Terminal | 在当前工作区执行命令、搜索输出、使用快捷命令，并在远程重连后继续工作。 | 免费 |
| AI Chat | 基于当前文件解释代码、分析错误输出、规划下一步。 | 免费 |
| AI Agent | 在文件、终端、Git 工具之间协助完成受控多步骤任务。 | 3 天试用 · Pro |

## 交付、诊断与自动化

<div class="product-card-grid">
  <div class="product-card"><strong>Source Control</strong><span>免费查看仓库状态、diff 与历史；Pro 解锁提交、推送和 stash 等 Git 写入工作流。</span></div>
  <div class="product-card"><strong>多终端 · Pro</strong><span>为日志、测试、服务与部署保留并行上下文，不必离开当前工作区。</span></div>
  <div class="product-card"><strong>LSP + Debug · Pro</strong><span>在远程主机完成语言服务和调试适配器配置后，使用诊断、代码动作、断点和运行时检查。</span></div>
  <div class="product-card"><strong>Tasks</strong><span>保存重复的远程命令，按分组组织，并跟踪其基于终端的执行过程。</span></div>
  <div class="product-card"><strong>Sync / Cache · Pro</strong><span>在本地与远程工作区之间传输项目内容，并明确方向、路径边界与操作历史。</span></div>
</div>

## 一条实用工作路径

1. 使用 [SSH 工作区](/zh/docs/ssh) 连接远程项目，或打开本地项目。
2. 在 [编辑器](/zh/docs/editor) 中定位并修改文件。
3. 在 [终端](/zh/docs/terminal) 中验证；需要时搜索输出或远程内容。
4. 让 [AI Chat 与 Agent](/zh/docs/ai) 协助理解错误或规划改动。
5. 使用 [Source Control](/zh/docs/source-control) 审查结果；交付需要受限 Git 写入操作时再使用 Pro。

> 功能会遵循权限与环境前置条件。例如 LSP、Debug 需要远程主机配置相应语言服务或调试适配器；面对敏感系统时，仍应审查每个 AI 结果与执行动作。

## 按目标继续了解

- [移动 IDE](/zh/mobile-ide) —— 一体化开发工作流
- [SSH IDE](/zh/ssh-ide) —— 在移动端操作远程项目
- [手机 AI 编程](/zh/mobile-ai-coding) —— 带工作区上下文的 AI 协助
- [移动值班诊断](/zh/use-cases/on-call-diagnostics) —— 聚焦故障排查
