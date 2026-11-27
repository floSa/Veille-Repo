# jupyterlab/jupyter-ai

> JupyterLab extension that integrates AI agents (Claude, Codex, Copilot…) into a native chat.

## The problem
Using a coding agent on notebooks forces you to leave JupyterLab and copy the context by hand.

## What it actually does
The README describes a native chat interface connected to agents through the Agent Client Protocol (ACP). Agents read and write files, run commands and manipulate notebooks through a built-in MCP server, with prior approval of actions. It handles several parallel chats, adding cells or files as context, real-time collaboration and custom MCP servers. The provided diagram describes an older version (`%%ai` magics), so it should not be taken as is.

## How it is wired
```mermaid
flowchart LR
  U["Utilisateur (chat JupyterLab)"] --> J["Jupyter AI (extension)"]
  J --> ACP["Agent Client Protocol"]
  ACP --> AG["Agent (Claude, Codex, Copilot…)"]
  AG --> MCP["Serveur MCP Jupyter"]
  MCP --> NB["Notebooks / fichiers / terminal"]
```

## Trying it
```bash
# Le README racine renvoie à la documentation (Getting Started).
# Aucune commande d'installation n'y figure.
```

## Cost and gotchas
The extension is free; agents may require a subscription or a key. The README notes that the project is incubating in the JupyterLab organization. 306 open issues.

## What it is not
Not a model: the extension hosts third-party agents. The README does not detail the installation.

## Alternatives
No alternative named in the README.

## For you
Adopt it if you work in JupyterLab: native integration, explicit permissions and open standards (ACP, MCP), under the governance of the Jupyter community.
