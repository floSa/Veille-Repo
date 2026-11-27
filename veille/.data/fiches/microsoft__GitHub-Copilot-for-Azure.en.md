# microsoft/GitHub-Copilot-for-Azure

> Extensions and skills to query and manage Azure from VS Code, Visual Studio and Claude Code.

## The problem
Developing for Azure means switching between the portal, the CLI and the documentation; here the IDE assistant answers and acts on Azure services.

## What it actually does
- VS Code and Visual Studio extensions, plugin for Copilot CLI and for Claude Code.
- Installs Azure skills, globally or per project (`@azure: Install Azure Skills ...` commands).
- Goes through the Azure MCP server (`@azure/mcp`, launched with `npx`).
- Configuration of sovereign clouds (Azure China, US Government) through the `--cloud` argument.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
graph LR
    IDE["VS Code / Claude Code / Copilot CLI"] --> Skills["Skills Azure"]
    Skills --> MCP["@azure/mcp (npx)"]
    MCP --> Auth["az / Azure PowerShell / azd"]
    Auth --> Azure["Azure"]
```

## Trying it
```bash
/plugin marketplace add microsoft/azure-skills
/plugin install azure@azure-skills
/plugin install azure@claude-plugins-official
```

## Cost and gotchas
Git and Node.js are required; without Node, the MCP server sometimes fails silently. An Azure account is needed; the Copilot subscription and pricing are not in the README. Authentication must be done on the right cloud before starting.

## What it is not
Not a general-purpose tool: it only applies to Azure. Not a replacement for the Azure CLIs, which it depends on. A license is present but not identified by GitHub.

## Alternatives
No alternative mentioned in the README.

## For you
Ignore unless your AI workloads run on Azure; in that case, it is a useful shortcut for administration from the assistant.
