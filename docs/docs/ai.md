---
title: AI Chat and Agent | NimoteCode
description: Use NimoteCode AI Chat for code and error explanations, and AI Agent for controlled multi-step work with provider profiles and workspace context.
---

# AI Chat and Agent

NimoteCode separates direct AI help from AI-assisted execution. **AI Chat** is for a fast answer in context; **AI Agent** is for work that needs several deliberate steps across files, terminal or Git tools.

<ImagePlaceholder image-key="aiAssistant" alt="NimoteCode AI panel">
  <strong>Image placeholder — AI assistance with workspace context</strong>
  <span>Replace with a screenshot of the AI panel explaining an active file or planning a small, reviewable change.</span>
</ImagePlaceholder>

## Use AI Chat for the next decision

Ask Chat to explain unfamiliar code, interpret terminal output, outline a refactor, or review an idea before you change a file. Keeping the relevant file active gives the conversation useful workspace context.

## Use AI Agent for a controlled sequence

Agent is appropriate when a task needs to inspect files, propose a plan, make an edit, run a check and summarize the result. It is available during the 14-day, per-device trial and with Pro; it does not use a free usage quota.

<ImagePlaceholder image-key="agentRunLog" alt="AI Agent run log on NimoteCode for phone">
  <strong>Agent execution log</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentRunPythonBenchmark" alt="AI Agent running a Python benchmark on phone">
  <strong>Agent runs a Python benchmark</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentAlgorithmBenchmarkResults" alt="AI Agent benchmark results on phone">
  <strong>Agent benchmark results</strong>
</ImagePlaceholder>

## Configure providers deliberately

Provider profiles hold connection and model settings such as endpoint, API credential, model, streaming and context behavior. You connect your own AI provider and API key; NimoteCode does not bundle model access or tokens. Keep a working primary profile and a tested backup profile. See [Configuration](/docs/configuration) for a practical checklist.

> Review commands and file changes before applying them, particularly in a remote or production-adjacent workspace. The app’s validation and locking layers support controlled work; they do not transfer operational responsibility away from the user.

Continue with [AI Agent Workflows](/use-cases/ai-agent) · [Security and Safety](/docs/security) · [Mobile AI Coding](/mobile-ai-coding)
