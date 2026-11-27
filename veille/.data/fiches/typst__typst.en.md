# typst/typst

> Markup-based document typesetting system, as powerful as LaTeX and easier to learn.

## The problem
LaTeX is powerful but hard to learn, slow to compile and stingy with clear error messages.

## What it actually does
The compiler and its CLI turn a `.typ` file into a PDF. Light markup, functions, built-in scripting, mathematics, bibliography. Incremental compilation thanks to `comemo`, `watch` mode, document queries, paged output, HTML and multi-file packages.

## How it is wired
```mermaid
flowchart LR
  U["CLI User"] --> D["CLI dispatcher"]
  D --> C["Compile/export"]
  C --> P["Syntax parser"]
  P --> E["Script evaluator"]
  E --> L["Paged layout"]
  L --> X["PDF export"]
```

## Trying it
```sh
typst compile file.typ
typst watch file.typ
typst fonts --font-path path/to/fonts
```

## Cost and gotchas
Free. The collaborative online editor is a separate service; Tinymist is a community language server. Package manager versions may lag behind the latest release.

## What it is not
Not an editor: the repository contains the compiler and the CLI.

## Alternatives
LaTeX, cited as the reference that Typst aims to replace.

## For you
Adopt: relevant for producing reproducible reports and papers from scripts, with programmatically generated output.
