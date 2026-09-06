---
title: 功能特性 | NimoteCode 移动 AI 开发工作台
description: 浏览 NimoteCode 的移动开发能力：本地与 SSH 工作区、双栏编辑、应用内 Web 与媒体预览、终端、Git、AI Chat 和 Agent、LSP、调试、Tasks 与 Sync/Cache。
---

# 功能特性

NimoteCode 将核心开发闭环收敛到一个移动工作区：**Explorer → Editor → Preview → Terminal → Git → AI**。任务需要什么，就打开什么，同时保留项目上下文。

<div class="feature-showcase" role="region" aria-label="NimoteCode 功能亮点">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="NimoteCode 中的本地文件、SSH、代码编辑与 AI Agent" width="1604" height="901" loading="eager"><figcaption>工作区、编辑与 AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="NimoteCode 中的 SSH 终端、Source Control 与代码诊断" width="1597" height="896" loading="lazy"><figcaption>终端、Git 与诊断</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode 的调试、远程工作区同步与智能缓存" width="1598" height="893" loading="lazy"><figcaption>调试与工作区同步</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>工作区、编辑与 AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>终端、Git 与诊断</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>调试与工作区同步</figcaption></figure>
  </div>
</div>

## 核心工作区

| 模块 | 能解决什么 | 可用性 |
| --- | --- | --- |
| Explorer + SSH | 打开本地项目，或使用密码、私钥连接已保存的远程 SSH 工作区。 | 免费 |
| 编辑器 | 标签页或双栏编辑、保存、图片与支持媒体的预览、剪贴板、撤销/重做、光标定位，以及可用时的结构化上下文。 | 免费 |
| Web 预览 | 在应用内打开本地或远程 Web 项目，也可从 Terminal 中的 URL 直接进入预览。 | 当前版本可用 |
| Terminal | 在当前工作区执行命令、搜索输出、使用快捷命令，并在远程重连后继续工作。 | 免费 |
| AI Chat | 基于当前文件解释代码、分析错误输出、规划下一步，并展示最近任务与可见的 Agent 运行状态。 | 免费 |
| AI Agent | 在文件、终端、Git 工具之间协助完成受控多步骤任务。 | 14 天试用 · Pro |

## 交付、诊断与自动化

<div class="product-card-grid">
  <div class="product-card"><strong>Source Control</strong><span>免费查看仓库状态、diff 与历史；Pro 解锁提交、推送和 stash 等 Git 写入工作流。</span></div>
  <div class="product-card"><strong>多终端 · Pro</strong><span>为日志、测试、服务与部署保留并行上下文，不必离开当前工作区。</span></div>
  <div class="product-card"><strong>LSP + Debug · Pro</strong><span>在远程主机完成语言服务和调试适配器配置后，使用诊断、代码动作、断点和运行时检查。</span></div>
  <div class="product-card"><strong>Tasks</strong><span>保存重复的远程命令，按分组组织，并跟踪其基于终端的执行过程。</span></div>
  <div class="product-card"><strong>Sync / Cache · Pro</strong><span>在本地与远程工作区之间传输项目内容，并明确方向、路径边界与操作历史。</span></div>
</div>

## 1.1.5 新能力

当前版本让更多开发环节留在同一个工作区：可应用内预览本地或远程 Web 项目、双栏并排打开文件、查看图片和播放支持的媒体，并在跨面板操作时持续看到 Agent 的运行状态。同时也改善了 SSH 连接复用、移动端终端输入、Git 刷新与 Diff 渲染、长时间使用的资源占用和界面一致性。完整细节请查看[发布说明](/zh/releases/)。

## 一条实用工作路径

1. 使用 [SSH 工作区](/zh/docs/ssh) 连接远程项目，或打开本地项目。
2. 在 [编辑器](/zh/docs/editor) 中定位并修改文件。
3. 在 [终端](/zh/docs/terminal) 中验证；需要时搜索输出或远程内容。
4. 让 [AI Chat 与 Agent](/zh/docs/ai) 协助理解错误或规划改动。
5. 使用 [Source Control](/zh/docs/source-control) 审查结果；交付需要受限 Git 写入操作时再使用 Pro。

> 功能会遵循权限与环境前置条件。例如 LSP、Debug 需要远程主机配置相应语言服务或调试适配器；面对敏感系统时，仍应审查每个 AI 结果与执行动作。
