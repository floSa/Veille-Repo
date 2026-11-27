# ytti/oxidized

> Ruby tool that backs up network device configurations, a replacement for RANCID, for network administrators.

## The problem
Router and switch configurations change with no history; finding out who changed what is painful.

## What it actually does
Loads an inventory (CSV, SQL, SQLite, HTTP), schedules fetches through a thread pool, connects via an input module, applies an OS-specific model (130+ types) and then stores each version (file, Git, HTTP). REST API to force a fetch, hooks (exec, Slack, SNS…), syslog-triggered runs.

## How it is wired
```mermaid
graph LR
  A[config.rb] --> B[nodes.rb]
  B --> C[jobs.rb]
  C --> D[worker.rb]
  D --> E[node.rb]
  E --> F[Output Git]
  F --> G[Hooks]
```

## Trying it
```bash
gem install oxidized
oxidized
gem install oxidized-web
```

## Cost and gotchas
Free, but installed through RubyGems with system packages (libssh2, cmake…). Do not run it as root.

## What it is not
Not a configuration tool: it reads and archives. The README explicitly seeks an additional maintainer.

## Alternatives
- RANCID: the tool Oxidized replaces.

## For you
Ignore: network domain unrelated to data/AI, and dependence on very few maintainers.
