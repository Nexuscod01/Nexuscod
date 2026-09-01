---
title: Remote Hotfix from Mobile | NimoteCode
description: "Use NimoteCode for a focused mobile hotfix: connect by SSH, inspect and edit a project, run verification commands, then review the Git diff with Pro."
---

# Remote Hotfix from Mobile

A production-adjacent fix should remain a controlled development workflow, even when it starts on a phone. NimoteCode keeps the project, terminal evidence and optional Git review in the same mobile workspace.

<ImagePlaceholder image-key="remoteHotfix" alt="NimoteCode remote hotfix workflow">
  <strong>Image placeholder — from SSH connection to reviewed patch</strong>
  <span>Replace with a concise visual sequence: Remote Explorer, focused edit, terminal verification and Git diff review.</span>
</ImagePlaceholder>

## A deliberate hotfix loop

1. Connect with [SSH Workspace](/docs/ssh), then confirm the environment, branch and project root.
2. Inspect the symptom with [Terminal](/docs/terminal) before changing a file.
3. Open the smallest affected file and make a focused edit.
4. Run the relevant test, build or health check.
5. Use [AI Chat and Agent](/docs/ai) for an explanation or plan when it adds context—not as an unreviewed deployment mechanism.
6. With Pro, open [Source Control](/docs/source-control), read the diff, commit and sync only according to the repository’s normal policy.

If the environment, impact or verification path is unclear, stop and escalate. Mobile access makes an urgent task possible; it should not lower the standard for a safe change.
