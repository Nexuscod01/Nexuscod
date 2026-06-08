---
title: Security and Safety
description: How NimoteCode handles SSH credentials, AI provider keys, Pro verification, and controlled agent workflows.
---

# Security and Safety

NimoteCode handles sensitive workflows: SSH access, AI provider keys, terminal commands, file writes, Git operations, and subscription verification.

## Credentials

- SSH passwords can be remembered through secure credential storage when the user chooses to save them.
- AI provider credentials are stored through secure app storage.
- Subscription verification uses account state and server-side checks.

## AI Agent control

AI Agent workflows include safety-oriented design:

- Tool execution is separated from chat responses.
- File and command tools use validation layers.
- Write locks and concurrent lock managers reduce conflicting operations.
- Sensitive actions can require confirmation depending on runtime safety settings.
- App review safety settings can restrict background or automatic execution.

## Remote workspaces

When using SSH:

- Confirm host, path, and authentication method carefully.
- Prefer least-privilege server accounts.
- Review generated commands before running them on production systems.
- Use Source Control review before committing or pushing changes.

## Related pages

- [SSH Workspace](/docs/ssh)
- [AI Assistant](/docs/ai)
- [Source Control](/docs/source-control)
- [Account and Subscription](/docs/account-subscription)
