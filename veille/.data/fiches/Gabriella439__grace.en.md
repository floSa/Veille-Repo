# Gabriella439/grace

> Domain-specific language for composing prompts, with JSON schemas inferred from typing.

## The problem
Chaining model calls and structuring their outputs takes a lot of glue code.

## What it actually does
Built-in `prompt` function; the type checker infers the expected JSON schema from usage and constrains the model's output. `import prompt` generates Grace code. Haskell CLI: `interpret`, `text`, `format`, `builtins`, `repl`. Usable without installation at trygrace.dev.

## How it is wired
```mermaid
flowchart LR
  A[Main.hs CLI] --> B[Interpret.hs]
  B --> C[Infer.hs]
  C --> D[Encode.hs schéma JSON]
  D --> E[Prompt.hs]
  E --> F[Modèle de langage]
```

## Trying it
```bash
grace --help
grace interpret ./greet.ffg
grace repl
```

## Cost and gotchas
Provider key (the examples use an OpenAI key file); calls are billed by the provider.

## What it is not
Not an agent framework: a small, type-centered language.

## Alternatives
No alternative named in the README.

## For you
Watch: the idea of inferring the output schema from typing is worth knowing for your prompt chains; still a niche language.
