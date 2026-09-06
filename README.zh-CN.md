# NimoteCode

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <strong>面向手机的 AI 开发工作台（Mobile-first）</strong><br>
  <strong>在手机/平板上使用真实项目进行开发。</strong>
</p>

<p align="center">
  NimoteCode 是一款支持 Android 与 iOS 的移动 IDE 与 SSH IDE，让“真实的软件开发”可以在移动端完成：本地与 SSH 工作区、终端与 Git、AI Agent 任务、并支持现有项目的代码审查。Android 现已可用；iOS 正在 App Store 审核上架中。
</p>

<p align="center">
  <a href="https://nimotecode.com"><img src="https://img.shields.io/badge/官网-访问-4F46E5?logo=googlechrome&logoColor=white" alt="访问 NimoteCode 官网"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-获取-34A853?logo=googleplay&logoColor=white" alt="在 Google Play 获取 NimoteCode"></a>
  <img src="https://img.shields.io/badge/App_Store-审核上架中-0A84FF?logo=apple&logoColor=white" alt="NimoteCode 正在 App Store 审核上架中">
  <a href="https://nimotecode.com/zh/docs/quick-start"><img src="https://img.shields.io/badge/文档-快速入门-06B6D4" alt="阅读 NimoteCode 文档"></a>
</p>

> NimoteCode 是 **Mobile-first AI Development Environment**（以移动设备为主的 AI 开发环境）。  
> **Android 最新版本请从 Google Play 获取；App Store 正在审核上架中。**

如果你正在使用 Android，可先看实操教程，再从 Google Play 安装：
[用 Tailscale + NimoteCode 将 Android 打造成远程 IDE](https://nimotecode.com/zh/blog/tailscale-ssh-android-mac-linux) → [从 Google Play 安装 NimoteCode](https://play.google.com/store/apps/details?id=com.nimote.nimotecode)。

## NimoteCode 是什么

- **移动 IDE**：在手机/平板上完整运行开发工作区。  
- **远程 SSH 开发**：连接现有 Mac/Linux 主机或 VPS。  
- **AI Agent**：从需求到可审查结果的开发循环（规划、检查、编辑、运行、修复）。  
- **终端（Terminal）**：运行项目命令、任务与诊断。  
- **Git**：在同一工作流内查看状态、Diff、提交历史并审查。  
- **随时随地的真实开发**：外出时也能继续推进真正项目。  

## AI Agent 工作流：从需求到可审查 Git 结果

给 Agent 一个产品需求，然后按一条闭环推进：**规划 → 检查项目 → 编辑文件 → 运行检查 → 修复问题 → 审查 Git 结果**。这不是“聊天式建议”，而是工作区内的 AI 编码流程。

<p align="center">
  <video src="https://github.com/user-attachments/assets/0293a811-c9f0-4b61-ada1-b72b6bb61a18" controls muted playsinline width="420">
    你的浏览器不支持嵌入式视频。请改为打开<a href="https://github.com/user-attachments/assets/0293a811-c9f0-4b61-ada1-b72b6bb61a18">AI Agent 演示视频</a>。
  </video>
</p>

如果你的 GitHub 客户端无法显示嵌入播放器，请[观看 AI Agent 演示](https://github.com/user-attachments/assets/0293a811-c9f0-4b61-ada1-b72b6bb61a18)。

## 为什么选择 NimoteCode

| 核心能力 | 对移动编程的意义 |
| --- | --- |
| **真实工作区** | 打开本地项目，或通过 SSH 连接真实开发机或 VPS。 |
| **AI 编码 Agent** | 在当前项目中规划、检查、编辑、运行、修复并验证多步骤开发任务。 |
| **真实开发工具** | 使用代码编辑器、终端、Git、搜索、诊断、任务与调试工具。 |
| **为移动端而生** | 即使不在桌面前，也能在手机/平板上持续推进开发。 |

## 核心功能

- 本地与 SSH 工作区，覆盖远程开发
- Explorer 与完整代码编辑器，用于浏览和编辑项目
- 终端：执行命令、查看日志、运行测试与已配置 CLI 工具
- Git Source Control：查看状态、Diff、历史并支持审查工作流
- AI Chat 与 AI 编码 Agent：提供项目感知的辅助与任务执行
- 搜索、诊断、任务、LSP、调试与同步/缓存工作流（按配置可用）

## 移动端开发能力一览

### 工作区、编辑器与 AI Agent

在本地文件或 SSH 工作区中浏览、搜索和编辑项目，也可通过 AI Agent 执行多步任务。

<p align="center">
  <img src="docs/public/screenshots/p1.png" alt="NimoteCode 的本地与 SSH 工作区、代码编辑器和 AI Agent" width="720">
</p>

### SSH 终端、Git 与代码诊断

使用 SSH 终端执行命令，通过 Git 提交、推送、分支和审查 Diff，并借助诊断与代码导航定位问题。

<p align="center">
  <img src="docs/public/screenshots/p2.png" alt="NimoteCode 的 SSH 终端、Git Source Control 和代码诊断功能" width="720">
</p>

### 调试与工作区同步

设置断点、查看变量与调用栈，并使用智能缓存同步远程工作区。

<p align="center">
  <img src="docs/public/screenshots/p3.png" alt="NimoteCode 的调试、远程工作区同步与智能缓存功能" width="720">
</p>

## 在真实项目中使用 AI 编码

NimoteCode 将 AI Chat 与自主编码 Agent 与可验证闭环打通：项目文件、编辑器、终端输出、任务、诊断和 Git Source Control。

## 在终端使用你喜欢的编码工具

在本地或 SSH 工作区运行配置好的命令行 AI 工具，包括 [Codex](https://nimotecode.com/zh/codex-from-phone)、[Claude Code](https://nimotecode.com/zh/claude-code-from-phone)、Kimi 等。对 Codex 与 Claude Code 的移动工作流，NimoteCode 将 CLI、项目文件、终端输出与 Git 审查放在一起。产品不捆绑模型订阅，请按需配置自己的模型提供商、账号或 BYOK 接入。

## 下载

- **官网**：https://nimotecode.com
- **Google Play（最新版）**：https://play.google.com/store/apps/details?id=com.nimote.nimotecode
- **App Store**：审核上架中
- **GitHub Releases（历史/legacy 构建）**：https://github.com/aounma/nimotecode-ai-powered-mobile-ide/releases

Android 最新官方版本请以 Google Play 为准；App Store 通过审核后将公布。

## 快速开始

1. 从 Google Play 安装 NimoteCode；App Store 正在审核上架中。  
2. 打开 [本地工作区或 SSH 连接](https://nimotecode.com/zh/docs/ssh)。  
3. [编辑代码或启动 AI Agent 任务](https://nimotecode.com/zh/docs/ai)。  
4. 在 [终端](https://nimotecode.com/zh/docs/terminal) 运行项目或校验。  
5. 在 [Git Source Control](https://nimotecode.com/zh/docs/source-control) 审查改动。  

## 链接

- [从 SSH 开始](https://nimotecode.com/zh/docs/ssh)
- [观看工作流](https://nimotecode.com/zh/use-cases/)
- [官方文档](https://nimotecode.com/zh/docs/quick-start)
- [问题反馈](https://github.com/mobiledevloperlab/nimote_issues/issues)

## 仓库与发布说明

- 本仓库是 NimoteCode 官网仓库（文档、落地页与公开内容），并非应用源码仓库。
- GitHub Releases 仅用于历史/legacy 构建。
- Google Play 是当前官方发布渠道；App Store 正在审核上架中。
- NimoteCode 目前为**闭源**产品。

## 安全提示

提交或交付前请先审查 AI 辅助改动。先验证命令和结果，再检查 Git Diff。
