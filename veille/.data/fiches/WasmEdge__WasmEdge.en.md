# WasmEdge/WasmEdge

> Lightweight CNCF WebAssembly runtime, to run isolated code and language models locally.

## The problem
Running third-party code or edge functions without a heavy container, with system resource isolation.

## What it actually does
Loads, validates, compiles (AOT/JIT via LLVM) and runs Wasm modules. It offers WASI, sockets, database drivers and plugins (crypto, HTTP, NN inference). LlamaEdge, built on top, runs GenAI models. SDKs exist for Rust and Java; the runtime can also be embedded through a C API.

## How it is wired
```mermaid
flowchart LR
  A[WasmEdge CLI] --> B[Loader]
  B --> C[Validator]
  C --> D[Compiler LLVM JIT/AOT]
  D --> E[Executor Engine]
  E --> F[Plugin Manager]
  F --> G[WASI-NN Plugin]
```

## Trying it
```bash
# Le README renvoie vers des guides externes ; aucune commande n'y figure.
```

## Cost and gotchas
Free. The README states that WasmEdge is not yet thread-safe. The AI plugins require suitable hardware (GPU not detailed).

## What it is not
Not an orchestrator: orchestration goes through third-party tools (Kubernetes, Dapr). "Faster" is a claim by the authors, not measured here.

## Alternatives
No alternative named in the README.

## For you
Worth watching: relevant for deploying lightweight inference at the edge, but the AI ecosystem remains less mature than classic runtimes.
