# allenai/open-instruct

> Open code for fine-tuning, preference tuning (DPO) and reinforcement learning with verifiable rewards (RLVR) of LLMs.

## The problem
Reproducing the post-training of an LLM (SFT, DPO, RL) on public data requires unified, proven code.

## What it actually does
Scripts and code for SFT, DPO and RLVR (`grpo_fast.py`), used for Tülu 3 and OLMo-2, with DeepSpeed configurations, evaluation-set decontamination and quantization scripts. OLMo-core support for a more GPU-efficient SFT. The native evaluation is no longer maintained (OLMES recommended).

## How it is wired
```mermaid
flowchart LR
  D["Jeux d'instructions"] --> S["SFT"]
  S --> P["DPO"]
  P --> R["RLVR (grpo_fast.py)"]
  DC["decontamination/"] --> D
  R --> M["Checkpoints Hugging Face"]
```

## Trying it
```bash
uv sync
bash scripts/train/tulu3/finetune_8b.sh
bash scripts/train/tulu3/dpo_8b.sh
./scripts/train/build_image_and_launch.sh scripts/train/debug/single_gpu_on_beaker.sh
```

## Cost and gotchas
8 GPUs for the 8B examples; the RL launch relies on Beaker (internal to AI2). No backward-compatibility guarantee ("research codebase"). The V2 models fall under the AI2 ImpACT license.

## What it is not
Not a stable library: research code. Llama models inherit the licenses of their base.

## Alternatives
- OLMES: recommended evaluation instead of the native evaluation.
- OLMo-core: more efficient SFT for the supported models.

## For you
Adopt as a reference for an open post-training recipe; run it only if you have several GPUs.
