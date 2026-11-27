# josephsumabat/static-ls

> Lightweight Haskell language server that reads pre-generated HIE files, for large projects.

## The problem
haskell-language-server uses too much memory when recompiling on very large projects.

## What it actually does
Main starts the server, which loads the static environment (HIE files and the hiedb database) and then answers LSP requests: definition, hover, references, rename, symbols, code actions, autocompletion. It generates nothing itself: the user compiles with the right GHC flags and indexes with hiedb.

## How it is wired
```mermaid
flowchart TD
  v1["app/Main.hs"] --> v2["src/StaticLS/Server.hs"]
  v2 --> v3["src/StaticLS/Handlers.hs"]
  v2 --> s3["src/StaticLS/StaticEnv.hs"]
  s3 --> s1["src/StaticLS/HIE/File.hs"]
  s3 --> s2["src/StaticLS/HieDb.hs"]
  v3 --> i1["src/StaticLS/IDE/Definition.hs"]
  v3 --> i2["src/StaticLS/IDE/Hover.hs"]
```

## Trying it
```bash
cabal install
hiedb -D .hiedb index .hiefiles --src-base-dir .
```

## Cost and gotchas
Build from source with the same GHC version as the project (9.4.4 and 9.6.1 explicitly supported). You must re-index after every change.

## What it is not
Not a general replacement for haskell-language-server: the README recommends it if memory is not a problem.

## Alternatives
haskell-language-server: preferable outside very large projects.

## For you
Ignore: editor tool for Haskell, unrelated to a data/AI/MLOps profile.
