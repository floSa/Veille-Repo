# googleprojectzero/fuzzilli

> Coverage-guided fuzzer for JavaScript interpreters, aimed at security researchers working on JIT engines.

## The problem
Finding bugs in JIT compilers requires generated programs that stay semantically valid; a syntactic fuzzer produces too many invalid ones.

## What it actually does
Fuzzilli mutates an intermediate language (FuzzIL) rather than the AST, then translates it into JavaScript. It runs the instrumented target engine through REPRL mode (the engine loops without restarting), measures coverage and minimizes crashes. Instances can form a tree, in threads or over TCP. Implemented in Swift, with C for coverage and sockets.

## How it is wired
```mermaid
graph LR
  CLI["FuzzilliCli"] --> Fuzzer["Fuzzer.swift"]
  Fuzzer --> Mut["Mutators"]
  Mut --> Lifter
  Lifter --> Runner["ScriptRunner REPRL"]
  Runner --> Engine["Moteur JS instrumenté"]
  Engine --> Eval["Evaluator"]
```

## Trying it
```bash
swift build [-c release]
swift run [-c release] FuzzilliCli --profile=<profil> [autres options] /path/to/jsshell
swift run FuzzilliCli --help
```

## Cost and gotchas
You must build the target engine with patches and instrumentation (clang >= 4.0). Fuzzing runs for a long time and consumes CPU; Docker and Google Compute Engine are supported.

## What it is not
It is not a general-purpose fuzzer: it targets JavaScript engines. It is not an official Google product (the README states this).

## Alternatives
No alternative named in the README.

## For you
Worth watching only out of curiosity: generation through an intermediate language is instructive, but the subject is JS engine security, far from data/MLOps work.
