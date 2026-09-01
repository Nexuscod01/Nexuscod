---
title: Remote Tasks | NimoteCode
description: Save, group and run repeatable SSH terminal commands in NimoteCode Tasks, with advanced filtered and parallel task execution available in Pro.
---

# Remote Tasks

Tasks turns a known remote command procedure into a named, reusable action. It is useful for build checks, tests, formatting, health checks and log routines that should not be retyped on a small screen.

## Build a task catalog around outcomes

- Group related **build and test** commands.
- Keep **lint and format** routines separate from deploy work.
- Name **restart, health check and log** tasks so their effect is obvious.
- Run the task in its SSH terminal context and follow its output and status.

## Use tasks safely

Tasks run through SSH workflows, so make the active environment clear in the task name and command. Start with read-only or low-risk routines, document any prerequisite, and avoid hiding destructive actions behind vague labels. Basic task creation and execution are available in Free; Pro adds advanced filtered and parallel execution.

Related: [SSH Workspace](/docs/ssh) · [Terminal](/docs/terminal) · [Configuration](/docs/configuration)
