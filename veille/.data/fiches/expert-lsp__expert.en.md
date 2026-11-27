# expert-lsp/expert

> Official Elixir language server, for Elixir developers in their editor.

## The problem
An editor needs an LSP server to provide code intelligence for Elixir.

## What it actually does
- One binary per system, to be placed in the `$PATH`; nightly versions available.
- Build from source: normal release or "burrito" (Zig 0.15.2 required).
- `--stdio` option to pass if the editor does not do it.
- Company sponsorship via the EEF, individual sponsorship via GitHub Sponsors.

## How it is wired
```mermaid
flowchart LR
  A[Editeur] -->|stdio| B[expert]
  B --> C[Projet Elixir]
```

## Trying it
```bash
gh release download nightly --pattern 'expert_linux_amd64' --repo expert-lsp/expert
just release
just burrito-local
```

## Cost and gotchas
Free. Exactly Zig 0.15.2 for burrito.

## What it is not
Not a debugger. README identical to elixir-lang/expert: one of the two is a mirror or a former name, the README does not say which.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you use Elixir: no connection to data / AI work.
