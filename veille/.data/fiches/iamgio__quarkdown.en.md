# iamgio/quarkdown

> Typesetting system based on Markdown extended with functions, producing books, articles, wikis or presentations.

## The problem
LaTeX is heavy; Markdown has neither logic nor fine layout control for real documents.

## What it actually does
Extends CommonMark/GFM with function calls (`.somefunction`), variables, loops and a standard library. Document types: plain, paged (paged.js), slides (reveal.js), docs. Export to HTML, PDF, Markdown, text. Live preview, restrictive permissions, a skill for coding agents.

## How it is wired
```mermaid
flowchart LR
  CLI["CLI Interface"] --> Pipeline["Pipeline System"]
  Pipeline --> Lexer
  Lexer --> Parser
  Parser --> AST
  AST --> Functions["Function System"]
  Functions --> Renderer
```

## Trying it
```bash
brew install quarkdown-labs/quarkdown/quarkdown
quarkdown create
quarkdown c file.qd -p -w
quarkdown c file.qd --pdf
```

## Cost and gotchas
Free. PDF export: a Chromium browser is required. The install script is run via curl | bash as root.

## What it is not
Not a WYSIWYG editor. Its own language to learn, not compatible with the Markdown extensions of other tools.

## Alternatives
The README compares it with LaTeX, Typst, AsciiDoc and MDX (table).

## For you
Keep an eye on it: handy for producing reproducible reports and slides; Typst remains a better-established option.
