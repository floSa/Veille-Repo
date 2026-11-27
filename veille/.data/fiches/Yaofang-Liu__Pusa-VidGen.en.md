# Yaofang-Liu/Pusa-VidGen

> Video diffusion model with vectorized timesteps, adapting Wan and Mochi for several video tasks.

## The problem
Adapting a large video model to image-to-video, extension or start/end frames is expensive in training and data.

## What it actually does
Pusa applies per-frame noise control (vectorized timesteps) on Wan2.1/Wan2.2 (V1.0) or Mochi (V0.5), through LoRAs. One base serves text-to-video, image-to-video, start/end frames, extension and transition. The README claims a training cost of about $500 and a VBench-I2V score of 87.32%, figures not verified here. LightX2V allows 4 inference steps.

## How it is wired
```mermaid
flowchart LR
  A[Texte / image / vidéo] --> B[Pipeline Runner — pipeline_runner.py]
  B --> C[Wan Pusa Video — wan_video_pusa.py]
  C --> D[Wan DiT — wan_video_dit.py]
  D --> E[Wan Video VAE — wan_video_vae.py]
  E --> F[Vidéo générée]
```

## Trying it
```bash
git clone https://github.com/genmoai/models
cd models
pip install uv
uv venv .venv
source .venv/bin/activate
uv pip install setuptools
uv pip install -e . --no-build-isolation
huggingface-cli download RaphaelLiu/Pusa-V0.5 --local-dir <path_to_downloaded_directory>
```
(V0.5 path; the V1.0 instructions are in another README, not provided.)

## Cost and gotchas
GPU (README example on 4 GPUs), weights to download from Hugging Face. The V1.0 instructions, the main version, are not in this README. Last push in February 2026.

## What it is not
Not a ready-to-use service. Quality depends on the base model, with a rendering gap between conditioning frames and generated frames (color shift), according to the README.

## Alternatives
Wan-Video: the base model, without the Pusa adaptation. Mochi: base of V0.5.

## For you
Worth watching: interesting for understanding the low-cost adaptation of a video model, but useless without a serious GPU and far from an MLOps building block.
