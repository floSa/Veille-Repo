# mcp-servers-for-revit/mcp-servers-for-revit

> An MCP server that lets Claude or Cline read and modify Autodesk Revit projects.

## The problem
An AI assistant cannot act on a Revit model: the Revit API is closed and single-threaded.

## What it actually does
Three tiers: a TypeScript MCP server (stdio on the client side), a C# add-in inside Revit connected via WebSocket, and a set of C# commands that execute Revit API operations (levels, rooms, dimensions, quantity extraction, deletion). A local database holds project data for the `store_*` tools. It's a fork of revit-mcp.

## How it is wired
```mermaid
flowchart LR
    A["MCP entry [index.ts]"] --> B["Tools"]
    B --> C["Socket client [SocketClient.ts]"]
    C --> D["Socket svc [SocketService.cs]"]
    D --> E["Cmd manager [CommandManager.cs]"]
    E --> F["External event"]
    F --> G["Commands"]
```

## Trying it
```bash
claude mcp add mcp-server-for-revit -- cmd /c npx -y mcp-server-for-revit
```

## Cost and gotchas
Requires licensed Autodesk Revit 2020 to 2026, so Windows and payment. Node 18+ for the server. The add-in is manually copied into the Addins folder. Tests run against a real Revit instance.

## What it is not
Not a tool independent of Revit, nor a simple file converter. It acts on the open model, with the risk of modifying or deleting elements.

## Alternatives
- revit-mcp (the original project this one forks from).

## For you
To watch: useless without Revit, but a good example of MCP architecture with a WebSocket bridge to a business application.
