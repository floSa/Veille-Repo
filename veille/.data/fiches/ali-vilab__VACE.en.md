# ali-vilab/VACE

> A unified video creation and editing model (reference, editing, masked editing), for video generation researchers.

## The problem
Generating and then editing a video (swapping an object, extending a scene, animating an image) requires separate models.

## What it actually does
A single pipeline takes text, video, mask and reference images; annotators prepare the conditioning artifacts (depth, bbox inpainting, composition), then inference runs through Wan2.1 or LTX-Video. Optional prompt extension (DashScope), Gradio demos, multi-GPU for Wan.

## How it is wired
```mermaid
flowchart LR
  U["Texte + vidéo/masque/images"] --> P["vace_pipeline.py"]
  P --> A["Annotateurs (preprocess)"]
  A --> C["Conditioning artifacts"]
  C --> W["Wan VACE"]
  C --> L["LTX VACE"]
  W --> V["Vidéo générée"]
```

## Trying it
```bash
python vace/vace_pipeline.py --base wan --task depth --video assets/videos/test.mp4 --prompt 'xxx'
python vace/vace_preproccess.py --task depth --video assets/videos/test.mp4
python vace/gradios/vace_wan_demo.py
```

## Cost and gotchas
CUDA 12.4, PyTorch ≥ 2.5.1; the 14B model at 720p requires 8 GPUs (`torchrun`). Weights must be downloaded separately into `/models/`. Prompt extension can drift into editing.

## What it is not
Licenses vary: Apache-2.0 for Wan, RAIL-M for LTX-Video; "all models inherit the license of the original model".

## Alternatives
- Wan2.1 and LTX-Video: the base models VACE builds on.

## For you
Worth watching: test it if you have GPUs for generative video; check the license of the base model you choose.
