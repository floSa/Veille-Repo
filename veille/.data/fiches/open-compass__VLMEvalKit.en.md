# open-compass/VLMEvalKit

> One-command evaluation toolkit for vision-language models across dozens of benchmarks.

## The problem
Evaluating a VLM forces you to prepare data benchmark by benchmark, across as many repositories.
Results then are no longer comparable from one model to another.

## What it actually does
Generative evaluation for all models, with exact matching and LLM-based answer extraction.
More than 70 image and video benchmarks, more than 200 models, commercial APIs included.
To plug in your own model, a single `generate_inner()` function has to be written.
`SPLIT_THINK=True` separates the model's reasoning; `PRED_FORMAT=tsv` avoids truncation beyond 32k.

## How it is wired
```mermaid
flowchart LR
  CFG[vlmeval.config supported_VLM] --> M[modèle.generate_inner]
  M --> INF[inférence générative]
  INF --> EX[can_infer_option / can_infer_text]
  EX --> LLM[extracteur LLM de réponse]
  LLM --> RES[prédictions .xlsx ou .tsv]
  RES --> LB[OpenVLM Leaderboard]
```

## Trying it
```python
from vlmeval.config import supported_VLM
model = supported_VLM['idefics_9b_instruct']()
ret = model.generate(['assets/apple.jpg', 'What is in this image?'])
print(ret)
```
The installation command is not given in the README: it points to the QuickStart guide.

## Cost and gotchas
LLM answer extraction consumes an API key at your expense; local models require a GPU.
Each VLM family imposes its own `transformers` version: the list of pins is long and constraining.

## What it is not
Not a reproducer of published figures: generative evaluation differs from the original protocols.
Not a trainer nor an inference server.
Prompt templates are uniform by default, which can disadvantage a model.

## Alternatives
No alternative named in the README.

## For you
The reference to know if you have to compare VLMs; the table of `transformers` versions should be read before anything else.
