# antvis/Infographic

> AntV's declarative engine that generates SVG infographics from a text syntax, suited to AI outputs.

## The problem
Producing clean infographics from text requires manual design, and a raw LLM output cannot be displayed directly.

## What it actually does
A declarative syntax describes a template and data; `infographic.render()` produces an SVG. About a hundred templates (around 200 announced) and themes are provided, with a built-in editor. The syntax tolerates partial outputs, so you can display an LLM's stream as it arrives. Skills for Claude Code and Codex generate the syntax.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
    T["Texte ou sortie LLM"] --> S["Syntaxe infographic"]
    S --> I["Infographic.render"]
    I --> G["Gabarits et thèmes"]
    G --> V["SVG"]
    V --> E["Éditeur intégré"]
```

## Trying it
```bash
npm install @antv/infographic
```
```ts
import { Infographic } from '@antv/infographic';
const infographic = new Infographic({ container: '#container', width: '100%', height: '100%', editable: true });
infographic.render(`infographic list-row-simple-horizontal-arrow
data
  lists
    - label Step 1
      desc Start`);
```

## Cost and gotchas
Free, MIT. On the AI side, your own LLM generates the syntax: quality and bill depend on it.

## What it is not
Not a BI tool nor statistical charts: it is narrative infographics (lists, steps). The README does not document server-side rendering.

## Alternatives
No alternative named in the README.

## For you
Worth watching: useful for formatting LLM-generated summaries in a report or web app, less so for data analysis.
