---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: local and SSH workspaces, editor, terminal, Git, AI Chat and Agent, LSP, debugging, tasks and sync/cache."
---

# NimoteCode Features

NimoteCode keeps the essential development loop in one mobile workspace: **Explorer → Editor → Terminal → Git → AI**. Choose only the tools a task needs, while keeping the project context intact.

<div class="seo-media-placeholder" role="img" aria-label="Placeholder for a NimoteCode feature overview screenshot">
  <strong>Image placeholder — core workspace modules</strong>
  <span>Replace with a product screenshot that clearly shows Explorer, code editor, Terminal, Source Control and AI in the NimoteCode interface.</span>
</div>

## Core workspace

| Module | What it helps you do | Access |
| --- | --- | --- |
| Explorer + SSH | Open a local project or connect to a saved remote SSH workspace with password or key authentication. | Free |
| Editor | Work in tabs, save changes, use clipboard and undo/redo, follow cursor position and open structural context when available. | Free |
| Terminal | Run commands in the active workspace, search output, use shortcuts and recover after a remote reconnect. | Free |
| AI Chat | Explain code, inspect error output and plan the next change with current-file context. | Free |
| AI Agent | Assist a controlled multi-step workflow involving files, terminal and Git tools. | Metered Free · unlimited Pro |

## Deliver, diagnose and automate

<div class="product-card-grid">
  <div class="product-card"><strong>Source Control · Pro</strong><span>Review diffs, stage, commit, pull, push, branch and stash. Git AI can help describe or review a change.</span></div>
  <div class="product-card"><strong>Multi-terminal · Pro</strong><span>Keep parallel contexts for logs, tests, services and deployment work without leaving the workspace.</span></div>
  <div class="product-card"><strong>LSP + Debug · Pro</strong><span>Use configured remote language-server and debug-adapter workflows for diagnostics, code actions, breakpoints and runtime inspection.</span></div>
  <div class="product-card"><strong>Tasks</strong><span>Save repeated remote commands, organize them by group and follow their terminal-backed execution.</span></div>
  <div class="product-card"><strong>Sync / Cache · Pro</strong><span>Move project content between local and remote workspaces with explicit direction, path boundaries and history.</span></div>
</div>

## A practical way to use the features

1. Connect through [SSH Workspace](/docs/ssh), or open a local project.
2. Locate and edit the file in [Editor](/docs/editor).
3. Verify it in [Terminal](/docs/terminal); search output or remote content when needed.
4. Ask [AI Assistant](/docs/ai) to explain an error or plan a change.
5. With Pro, use [Source Control](/docs/source-control) to review and deliver the result.

> Features are deliberately permission- and environment-aware. For example, LSP and Debug depend on the language server or debug adapter being set up on the remote host, and AI output should be reviewed before use on sensitive systems.

## Explore by outcome

- [Mobile IDE](/mobile-ide) — the all-in-one workflow
- [SSH IDE](/ssh-ide) — remote projects from mobile
- [Mobile AI Coding](/mobile-ai-coding) — AI assistance with workspace context
- [On-call Diagnostics](/use-cases/on-call-diagnostics) — a focused incident workflow
- [Compare Free and Pro](/pro) — feature access at a glance
