# loopwork-ai/iMCP

> macOS app that exposes calendar, contacts, messages and more to an MCP client such as Claude Desktop.

## The problem
An assistant knows nothing about your local personal data on a Mac without copy-pasting.

## What it actually does
A menu bar app launches an MCP server with services: calendar, contacts, location, maps, messages (iMessage SQLite database), phone, reminders, shortcuts, weather. An `imcp-server` executable talks stdio to the client and relays to the app via Bonjour. Results are in JSON-LD. Each service asks for macOS authorization.

## How it is wired
```mermaid
flowchart LR
  CLIENT["Claude Desktop, Cursor, Amp"] --> CLI["imcp-server stdio"]
  CLI --> BON["Bonjour et TCP local"]
  BON --> APP["iMCP.app"]
  APP --> SVC["Services: Calendar, Contacts, Messages"]
  SVC --> SYS["EventKit, chat.db"]
```

## Trying it
```console
brew install --cask mattt/tap/iMCP
claude mcp add --scope user iMCP -- /Applications/iMCP.app/Contents/MacOS/imcp-server
```

## Cost and gotchas
Free. Requires macOS 15.3 or later. The README states that iMCP stores nothing, but that clients send data off the device in their tool calls.

## What it is not
Not cross-platform, and not a private vault: as soon as a cloud client calls it, your messages and contacts leave the Mac.

## Alternatives
No alternative named in the README.

## For you
Worth watching: handy on a Mac with Claude Desktop, but it exposes very sensitive data and the license is not declared.
