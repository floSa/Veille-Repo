# xLLM-AI/xllm

> LLM inference engine for Chinese accelerators, whose README is identical to that of jd-opensource/xllm.

## The problem
Serving large models on Chinese chips (NPU and others) with decent throughput and reduced cost.

## What it actually does
The README is word for word that of `jd-opensource/xllm`, with the same catalog figures (stars, last push, issues). It is presumably the same project under another organization name, without certainty. It announces a separate service/engine architecture, enterprise deployment at JD.com and support for Chinese hardware. No diagram is provided for this repository.

## How it is wired
```mermaid
flowchart LR
  Client["Client"] --> Service["Couche service"]
  Service --> Moteur["Couche moteur"]
  Moteur --> HW["Accélérateurs chinois"]
```
Simplified diagram based on the sheet, no diagram provided.

## Trying it
No command in the README: Quick Start and Launch xLLM are referred to the documentation.

## Cost and gotchas
Compatible hardware required; the installation steps are not in the README. Risk of confusion between the two twin repositories.

## What it is not
Not a distinct alternative to `jd-opensource/xllm` according to the README: same text, same acknowledgments.

## Alternatives
`jd-opensource/xllm`: identical repository, to be preferred as the original source.

## For you
Worth watching through `jd-opensource/xllm` rather than this copy: same content, and the origin of the duplicate is not documented.
