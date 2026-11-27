# rust-lang/rust-analyzer

> Language server giving any LSP editor the Rust IDE: navigation, completion, refactorings.

## The problem
Writing Rust without semantic navigation or completion is slow, especially with macros and traits.

## What it actually does
Loads the Cargo project, parses the syntax, expands macros, infers types in an incremental database, and answers LSP requests: definitions, references, completion, refactorings, diagnostics (rustc, clippy), formatting (rustfmt). A VS Code extension is provided; other editors work through LSP.

## How it is wired
```mermaid
flowchart LR
  Editor["VS Code extension"] --> LSP["Request loop"]
  LSP --> Load["Workspace loading"]
  Load --> Parser["Rust parser"]
  Parser --> DB["Incremental database"]
  DB --> HIR["HIR / Type analysis"]
  HIR --> IDE["IDE features"]
```

## Trying it
No command in the README; installation is described at rust-analyzer.github.io/book/installation.html.

## Cost and gotchas
Free. Can use a lot of memory on large projects (not documented in the README).

## What it is not
Not a compiler or a build tool. Does not replace rustc, which it calls for diagnostics.

## Alternatives
No alternative named in the README.

## For you
Worth watching: essential if you write Rust (for example Burn, ast-grep); useless otherwise.
