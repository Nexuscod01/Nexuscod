---
title: 支持 | NimoteCode
description: 通过邮件、GitHub Issues、官方文档与故障排查指南获取 NimoteCode 支持。
---

# NimoteCode 支持中心

## 联系方式

- 邮箱：nimotecode@gmail.com
- GitHub Issues：https://github.com/nimotecode/nimote_issues/issues
- 文档：[快速开始](/zh/docs/quick-start) · [常见问题](/zh/docs/faq) · [完整文档](/zh/docs)

GitHub Issues 也是社区交流入口：欢迎附上实际工作流、期望结果和可复现的最小步骤。

## 隐私 / 账户请求

如需隐私、账户或数据删除请求，请通过以上渠道联系，并尽量提供：

- 账户邮箱（如有）
- 平台（Android，或 iOS 可用性咨询）
- 请求类型（访问/更正/删除）

## 常见问题

### 数据与凭据安全

1. 保存到连接配置的 SSH 密码会写入系统级加密存储（Keychain / Keystore）。
2. AI API Key 使用系统级安全存储（如 iOS Keychain / Android Keystore 支撑存储）。
3. 发布版本会减少敏感认证/凭据日志输出。

### SSH 连接失败

1. 检查 host/port/username/认证方式。
2. 确认 SSH 服务网络可达。
3. 检查私钥格式或密码。
4. 使用已保存连接重试。

默认连接超时为 30 秒；连接成功后会启动心跳监测。

### 终端无响应

1. 确认工作区连接状态。
2. 新建终端标签后重试。
3. 检查远程主机 shell 可用性。

终端会话可在重连后继续使用，输出会保留用于搜索，并支持 ANSI 颜色与格式。

### AI Chat 与 Agent 无响应

1. 检查 provider 配置（API key/base URL/model）。
2. 检查到 provider 端点的网络连通性。
3. 切换到其他已配置 provider。

API key 使用系统级安全存储。AI Chat 与 Agent 是不同工作流；Agent 用于受控多步骤操作，远程或生产相关场景仍应审查命令和改动。

### Source Control 操作失败

1. 确认目录为有效 Git 仓库。
2. 检查仓库 Git 身份配置。
3. 刷新面板后重试。

所有用户都可查看状态、diff 与历史。提交、推送和 stash 等受限 Git 写入操作需要 Pro。

### Pro 功能不可用

1. 检查登录状态。
2. 触发订阅状态校验。
3. 从受限功能入口重试。

受限能力包括 AI Agent、Git 写入、LSP、多终端、远程搜索、Sync / Cache 与 Debug。应用的技术标识分别为 `aiAgentUnlimited`、`gitWrite`、`lsp`、`multiTerminal`、`remoteSearch`、`sync`、`debug`。新用户可获得按设备计算的 3 天 Pro 试用。

### Debug 面板问题

1. 确认使用的是 SSH 工作区，而非 Local 模式。
2. 确认远程主机已配置调试适配器。
3. 检查 `.nimote/launch.json` 与程序的调试符号。
4. 查看可用的调试日志和适配器输出。

Debug 是 SSH 与 Pro 工作流，使用 DAP（Debug Adapter Protocol），支持断点、调用栈、变量与 Watch。

## 响应时间

- 严重问题：24–48 小时内响应
- 常规支持：2–3 个工作日内响应
- 功能建议：定期审阅，在排期确定后答复
- 隐私请求：依适用法规在 30 天内处理

仍需要帮助？请发送邮件至 [nimotecode@gmail.com](mailto:nimotecode@gmail.com) 或提交 [GitHub Issue](https://github.com/nimotecode/nimote_issues/issues)。
