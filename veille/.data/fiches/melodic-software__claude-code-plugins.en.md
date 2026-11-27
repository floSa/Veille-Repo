# melodic-software/claude-code-plugins

> Public marketplace of Claude Code plugins (skills, hooks, agents) usable in any repository.

## The problem
Reuse the same skills, hooks and agents from one project to the next without copying files.

## What it actually does
A catalogue of plugins under `plugins/`, listed in `.claude-plugin/marketplace.json`. It is added with `/plugin marketplace add` and each plugin is installed separately. Some declare relevance signals so that Claude Code suggests them, after authorization by an administrator. The README warns against third-party sites that attribute non-existent skills to it.

## How it is wired
Simplified diagram based on the fiche, no diagram provided.

```mermaid
flowchart TD
  A[.claude-plugin/marketplace.json] --> B[plugins/]
  B --> C[Skills]
  B --> D[Hooks]
  B --> E[Agents]
  F[/plugin marketplace add] --> A
```

## Trying it
```shell
/plugin marketplace add melodic-software/claude-code-plugins
/plugin install <plugin-name>@melodic-software
/plugin marketplace update melodic-software
```

## Cost and gotchas
Free. Installation from GitHub is a copy pinned to the plugin's `version`: a change only arrives when the version is bumped. The repository has 82 open issues.

## What it is not
Not a single plugin: it is a collection, whose precise content is not listed in the README. No presence on third-party lists.

## Alternatives
None cited in the README (it rejects lists such as awesome-ai-plugins).

## For you
Worth watching: a possible source of skills for your Claude Code workflow, but young (June 2026) and to be browsed before any use.
