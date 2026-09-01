---
title: 手机远程热修 | NimoteCode
description: 使用 NimoteCode 完成一次聚焦的手机远程热修：SSH 连接、项目检查、代码编辑、终端验证，并通过 Pro 审查 Git diff。
---

# 手机远程热修

即使补丁从手机上开始，生产相关的修复也应保持受控的开发流程。NimoteCode 让项目、终端证据和可选 Git 审查始终处在同一个移动工作区内。

<ImagePlaceholder image-key="remoteHotfix" alt="NimoteCode 手机远程热修">
  <strong>图片占位符 —— 从 SSH 连接到审查补丁</strong>
  <span>请替换为一条简洁的流程图或截图序列：Remote Explorer、聚焦编辑、终端验证和 Git diff 审查。</span>
</ImagePlaceholder>

## 一条审慎的热修路径

1. 使用 [SSH 工作区](/zh/docs/ssh) 连接，确认环境、分支与项目根路径。
2. 修改前先通过 [终端](/zh/docs/terminal) 检查症状。
3. 打开受影响最小范围的文件，完成聚焦修改。
4. 运行对应的测试、构建或健康检查。
5. 需要上下文时，可让 [AI Chat 与 Agent](/zh/docs/ai) 解释问题或规划补丁，但不把它当作未经审查的发布机制。
6. 有 Pro 时，打开 [Source Control](/zh/docs/source-control) 阅读 diff，并仅按仓库既有流程提交或同步。

如果环境、影响范围或验证路径仍不明确，应停止并升级处理。移动端让紧急任务成为可能，但不应降低安全变更的标准。
