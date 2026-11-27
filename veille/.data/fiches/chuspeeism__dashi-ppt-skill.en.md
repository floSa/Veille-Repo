# chuspeeism/dashi-ppt-skill

> AI agent skill that generates presentations editable in the browser, exportable as PPTX or PDF.

## The problem
An AI-generated PPT is hard to touch up afterwards; fixing it takes longer than generating it.

## What it actually does
From a document, the agent composes a deck (12 themes, 1,020 layouts) served as a web editor: text editable in place, sliders for layout and number of modules, image replacement. Offline HTML export, PDF or editable PPTX via Chrome/Chromium/Edge. The README states that no content is sent to a server.

## How it is wired
```mermaid
flowchart LR
  U[User] --> AG[AI agent skill]
  AG --> B[BespokeSlide.jsx]
  B --> R[client-runtime.jsx]
  R --> EX[export-routes.mjs]
  EX --> O[PPTX PDF HTML]
```

## Trying it
```bash
npx dashi-ppt-skill@latest
npm --prefix <project> run export:pptx -- <sortie>/ppt sortie.pptx
npm --prefix <project> run export:pdf  -- <sortie>/ppt
```

## Cost and gotchas
Node 20+ and Chrome/Chromium/Edge for export. About 100,000 tokens for a 10-page deck, paid through your agent. AGPL-3.0. A version check goes out over the network; the local preview is reachable on the local network.

## What it is not
Not a pixel-perfect tool: customization is deliberately limited. Not suited to a web chatbot without local Node.

## Alternatives
Not documented: the README names no alternative.

## For you
Worth watching: useful for producing slides quickly with an agent, but young, single maintainer, AGPL, and costly in tokens.
