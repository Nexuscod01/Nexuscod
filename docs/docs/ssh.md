---
title: SSH Workspace | NimoteCode Mobile IDE
description: Connect NimoteCode to a remote project with SSH profiles, password or private-key authentication, a clear workspace root and reconnect-aware terminal work.
---

# SSH Workspace

SSH Workspace turns a mobile device into a focused remote project environment. It connects Explorer, Editor and Terminal to the same host and project root, so a task remains understandable from first inspection through verification.

<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH workspace setup">
  <strong>Image placeholder — SSH workspace setup</strong>
  <span>Replace with a screenshot of the saved SSH profile form and Remote Explorer opened at a project root.</span>
</ImagePlaceholder>

## Connect in four steps

1. Create or select an SSH profile.
2. Enter the host, port and username.
3. Authenticate with a password, private-key file or pasted private key.
4. Confirm the remote project root, then open it in Remote Explorer.

## What stays in context

- Browse the remote project and open files in [Editor](/docs/editor).
- Run shell commands in [Terminal](/docs/terminal) for that workspace.
- Search remote file content with [Search](/docs/search).
- Review a focused patch in [Source Control](/docs/source-control) with Pro access.

## Safer remote habits

Use a separate profile for each environment, prefer a least-privilege account and key-based authentication for sensitive hosts, and choose a deliberate project root. Reconnect-aware behavior helps resume work after a connection interruption, but you should always verify the active host and directory before running a write command.

Next: [Terminal](/docs/terminal) · [Remote Hotfix from Mobile](/use-cases/remote-hotfix) · [Security and Safety](/docs/security)
