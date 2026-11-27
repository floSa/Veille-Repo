# haskell/haskell-language-server

> Official Haskell language server (LSP), for Haskell developers in their editor.

## The problem
Without an LSP server, the editor offers no completion or diagnostics for Haskell.

## What it actually does
The README contains only one sentence and a table of contents (Features, Installation, Supported GHC, Configuration, Troubleshooting, Contributing, Components). The detail is in the external documentation: not documented here.

## How it is wired
```mermaid
flowchart LR
  A[Editeur] --> B[haskell-language-server]
  B --> C[GHC]
```
Diagram inferred from the definition of an LSP, not from a provided diagram.

## Trying it
No command documented in the README.

## Cost and gotchas
Free. 580 open issues. Supported GHC versions to check in the docs.

## What it is not
Not a compiler nor a build tool. README too short to judge the rest.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you write Haskell: no link with a data / AI pipeline.
