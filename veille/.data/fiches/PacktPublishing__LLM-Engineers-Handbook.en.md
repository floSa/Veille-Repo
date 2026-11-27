# PacktPublishing/LLM-Engineers-Handbook

> Code for the book: an end-to-end LLM system with ZenML pipelines, RAG and AWS deployment.

## The problem
See how to assemble data collection, fine-tuning, RAG and deployment in a single coherent project.

## What it actually does
ZenML collection pipelines (LinkedIn, Medium, GitHub crawlers), feature engineering, generation of instruct and preference datasets, SFT/DPO training and evaluation on SageMaker, RAG with Qdrant and MongoDB, REST inference service. DDD structure (domain, application, model, infrastructure). Tracking with Comet ML and Opik.

## How it is wired
```mermaid
flowchart LR
  C[Crawlers] --> P[Preprocessing]
  P --> F[Feature Engineering Steps]
  F --> Z[ZenML Pipelines]
  Z --> T[Model Finetuning & Training]
  T --> I[Inference Module]
```

## Trying it
```bash
git clone https://github.com/PacktPublishing/LLM-Engineers-Handbook.git
poetry env use 3.11
poetry install --without aws
poetry poe local-infrastructure-up
poetry poe run-digital-data-etl
```

## Cost and gotchas
About $25 for a full run with the default values (mostly SageMaker). HuggingFace, Comet, AWS and OpenAI accounts required. Training and inference require SageMaker. Chrome required for the crawlers.

## What it is not
A teaching companion tied to the book, not a reusable library. The code may be more recent than the book.

## Alternatives
The README names no alternatives.

## For you
Worth watching: a good example of complete MLOps for learning to orchestrate with ZenML, to read more than to deploy as is.
