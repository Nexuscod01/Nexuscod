---
title: SSH 工作区 | NimoteCode 移动 IDE
description: 使用 NimoteCode SSH 配置档、密码或私钥认证、明确的项目根路径和支持重连的终端工作方式连接远程项目。
---

# SSH 工作区

SSH 工作区把手机或平板变成专注的远程项目环境。Explorer、编辑器和终端都会指向同一台主机与项目根路径，让任务从检查到验证始终可理解。

<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH 工作区配置">
  <strong>图片占位符 —— SSH 工作区配置</strong>
  <span>请替换为已保存的 SSH 配置档及 Remote Explorer 打开项目根目录的截图。</span>
</ImagePlaceholder>

## 四步连接

1. 新建或选择 SSH 配置档。
2. 填写主机、端口和用户名。
3. 使用密码、私钥文件或粘贴私钥认证。
4. 确认远程项目根路径，然后在 Remote Explorer 中打开它。

## 保持在同一上下文中的操作

- 在远程项目中浏览文件并用 [编辑器](/zh/docs/editor) 打开。
- 在对应项目中使用 [终端](/zh/docs/terminal) 执行命令。
- 在 Pro 中使用 [Source Control](/zh/docs/source-control) 审查聚焦补丁。

## 更稳妥的远程习惯

为每个环境设置独立配置档；敏感主机优先使用低权限账号与私钥认证；工作区根目录应明确。网络中断后可以继续工作，但在执行写入操作前，始终重新确认当前主机和目录。

下一步：[终端](/zh/docs/terminal) · [手机远程热修](/zh/use-cases/remote-hotfix)
