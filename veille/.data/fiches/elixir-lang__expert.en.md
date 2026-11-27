# elixir-lang/expert

> Official Elixir language server, for Elixir developers in their editor.

## The problem
An editor needs an LSP server to provide code intelligence for Elixir.

## What it actually does
- Binary to download per system, to be placed in the `$PATH`.
- Nightly versions via the GitHub CLI.
- Build from source in two variants: normal release (`just release`) or multi-system "burrito" (Zig 0.15.2 required).
- You must pass `--stdio` to the editor if it does not do so itself.
- Sponsorship possible via the EEF.

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
Free. Exactly Zig 0.15.2 for the burrito variant.

## What it is not
Not a compiler nor a debugger. Same content as expert-lsp/expert (identical README, same stars): probably a mirror or a rename.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you do Elixir: unrelated to a data / AI pipeline.
