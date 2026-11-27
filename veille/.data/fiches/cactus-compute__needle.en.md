# cactus-compute/needle

> 8 to 29 MB model for tool calling and structured extraction on mobile, watch, robot, microcontroller.

## The problem
Making a tool call or extracting typed fields on a constrained device usually means a network round trip to a large model.
Models small enough to fit locally fail at filling in arguments and produce invalid JSON.

## What it actually does
Three tasks: choose the right tools and fill in their arguments, extract a declared structure from text, and return an embedding vector.
A byte-level grammar, compiled from your schemas, constrains every token: the output parses by construction; each answer carries a calibrated confidence score.
Needle 3 is a "Laddered Simple Attention Network": Monarch Hadamard MLP, GQA attention with causal convolutional taps, "engram" n-gram memory read by gather, multi-lane hyper-connections — every depth from 2 to 20 layers is deployable.
Decorating a function with `@needle.tool` is enough: signature = argument types, docstring = description, `run()` executes and loops.

## How it is wired
```mermaid
flowchart TD
  A[@needle.tool fonctions Python] --> B[grammaire octet compilée depuis les schémas]
  B --> C[needle.Needle&#40;tools=…&#41;]
  C --> D[function_calls + reasoning + confidence]
  D --> E[run&#40;&#41; exécute et renvoie results]
  F[needle finetune LoRA local] --> G[needle build --lora --layers N]
  H[needle platform finetune 2-bit] --> G
  G --> I[needle3.cact + moteur < 1 Mo par plateforme]
```

## Trying it
```sh
pip install cactus-needle
pip install "cactus-needle[train]"
needle finetune data.jsonl --epochs 10 --out adapter.safetensors
needle build --lora adapter.safetensors --layers 8 --out tuned.cact
export NEEDLE_API_KEY=needle_ft_...
needle platform generate --tools tools.json --examples 1000 --out ./data
needle build --platform macos-arm64
./macos-arm64/needle --model needle3.cact --tools tools.json --serve
```

## Cost and gotchas
The package and weights are accessible; "Platform" fine-tuning goes through Cactus GPUs with `NEEDLE_API_KEY`, so it is billed. Local fine-tuning runs on your machine in JAX (CPU, CUDA or Metal).
Telemetry is enabled by default in the binary: `NEEDLE_TELEMETRY=0` and `DO_NOT_TRACK=1` turn it off. With local LoRA, the confidence head is not trained and `confidence` is `None`.

## What it is not
Not a chat model: the README accepts trading general chat ability for tool calling.
Not a documented multilingual general-purpose model: the announced scores concern tool calling and extraction.
Not a service: it is a memory-mapped binary, the platform is only used for fine-tuning.

## Alternatives
- DeepSeek V4 Flash: cited point of comparison, outperformed according to them by a sub-network tuned from 4 layers.

## For you
Worth testing if you need to route tool calls offline or at the edge; not a substitute for a server-side LLM.
