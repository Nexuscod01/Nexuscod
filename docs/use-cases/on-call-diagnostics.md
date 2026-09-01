---
title: On-call Diagnostics from Mobile | NimoteCode
description: A measured mobile incident workflow with NimoteCode SSH, terminal output search, remote code search, configured LSP and Debug, and AI assistance.
---

# On-call Diagnostics from Mobile

When you are away from a computer, a good investigation is still methodical: connect to the right host, collect evidence, narrow the question and verify any change. NimoteCode keeps those steps close together in one SSH workspace.

<div class="seo-media-placeholder" role="img" aria-label="Placeholder for NimoteCode mobile on-call diagnostics">
  <strong>Image placeholder — an on-call investigation on mobile</strong>
  <span>Replace with a screenshot sequence showing SSH context, terminal output search and a diagnostic panel for a real incident workflow.</span>
</div>

## Investigation sequence

1. Connect through [SSH Workspace](/docs/ssh) and verify the host and project root.
2. Use [Terminal](/docs/terminal) for health checks, logs, tests or service state.
3. Search terminal output and remote content for the error signature.
4. Open the relevant source file in the editor.
5. With Pro and a prepared host, use [LSP](/docs/lsp) or [Debug](/docs/debug) for structured evidence.
6. Use AI Chat to summarize the observed context and form the next hypothesis.

Configured diagnostics complement, rather than replace, terminal evidence. Never assume an alert, restored session or AI suggestion represents the current production state—check it directly.
