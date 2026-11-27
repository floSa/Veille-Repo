# AssemblyScript/assemblyscript

> TypeScript-to-WebAssembly compiler, for developers who want Wasm with a familiar syntax.

## The problem
Producing WebAssembly normally requires C, C++ or Rust; here the source language is close to TypeScript.

## What it actually does
Minimal sheet: the README contains only acknowledgements and development instructions. The architecture, based on the code, describes a command-line compiler: tokenizer, parser, AST, resolver, flow analysis, type system, code generation, Wasm module, Binaryen glue, optimization passes, JS bindings, plus a standard library, a Wasm runtime, a JS loader and runtime tracing.

## How it is wired
```mermaid
flowchart LR
  D["Développeur"] --> CLI["Compiler CLI (index.js)"]
  CLI --> P["parser.ts"]
  P --> R["resolver.ts"]
  R --> G["compiler.ts"]
  G --> M["module.ts + Binaryen"]
  M --> W["Wasm + liaisons JS"]
```

## Trying it
```bash
git clone https://github.com/AssemblyScript/assemblyscript.git
cd assemblyscript
npm install
npm link
```
(These are the commands for developing the compiler, not for using it.)

## Cost and gotchas
Free, Apache-2.0. The README provided documents neither user installation nor a usage example.

## What it is not
Not full TypeScript: the README does not detail this, but the project name indicates a "TypeScript-like" dialect. No usage guide in the excerpt.

## Alternatives
None named in the README.

## For you
Worth watching: interesting for portable computation in the browser, but the README lacks details to judge; nothing immediate on the data/AI side.
