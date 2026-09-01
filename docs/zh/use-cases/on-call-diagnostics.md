---
title: 移动值班诊断 | NimoteCode
description: 使用 NimoteCode SSH、终端输出搜索、远程项目定位、已配置的 LSP 与 Debug 和 AI 辅助完成有节奏的移动端排障。
---

# 移动值班诊断

离开电脑后，排障也应保持方法：连接正确主机、收集证据、缩小问题，再验证每个改动。NimoteCode 将这些步骤放在同一个 SSH 工作区内。

<ImagePlaceholder image-key="onCallDiagnostics" alt="NimoteCode 移动值班诊断">
  <strong>图片占位符 —— 手机上的值班排查</strong>
  <span>请替换为一组真实流程截图：SSH 项目上下文、终端输出搜索与诊断面板。</span>
</ImagePlaceholder>

## 排查顺序

1. 使用 [SSH 工作区](/zh/docs/ssh) 连接，并确认主机与项目根路径。
2. 在 [终端](/zh/docs/terminal) 中运行健康检查、日志、测试或服务状态命令。
3. 搜索终端输出和远程项目内容中的错误特征。
4. 在编辑器中打开相关源码文件。
5. 有 Pro 且远程主机已准备好时，使用 [LSP](/zh/docs/lsp) 或 [调试](/zh/docs/debug) 收集结构化证据。
6. 使用 AI Chat 汇总已观察到的上下文，并形成下一步假设。

已配置的诊断能力应当补充而不是取代终端证据。不要把告警、恢复的会话或 AI 建议视为当前生产状态，务必直接确认。
