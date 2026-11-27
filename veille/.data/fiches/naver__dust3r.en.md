# naver/dust3r

> Official implementation of DUSt3R, 3D reconstruction from image pairs, for vision researchers.

## The problem
Classic 3D reconstruction requires camera poses and calibrated parameters; you want to start from plain images.

## What it actually does
A ViT model predicts, for each pixel, a 3D point map and a confidence from two images; a global alignment (MST, optimization) merges several views into a point cloud, poses and focal lengths. Shipped with a Gradio demo, Docker, training code and preprocessing scripts for nine datasets.

## How it is wired
```mermaid
graph LR
  A["Images"] --> B["image_pairs"]
  B --> C["AsymmetricCroCo3DStereo"]
  C --> D["Global alignment cloud_opt"]
  D --> E["Nuage de points et poses"]
  E --> F["demo.py Gradio"]
```

## Trying it
```bash
git clone --recursive https://github.com/naver/dust3r
conda create -n dust3r python=3.11 cmake=3.14.0
pip install -r requirements.txt
python3 demo.py --model_name DUSt3R_ViTLarge_BaseDecoder_512_dpt
```

## Cost and gotchas
CUDA GPU recommended (optional RoPE kernels to compile). The checkpoints are under CC-BY-NC-SA 4.0 and the training datasets have non-commercial licenses. Last push on 2025-09-24, more than a year ago.

## What it is not
Not usable as is in a commercial product: the code license is not identified by GitHub and the weights are non-commercial.

## Alternatives
MASt3R, Pow3R and MUSt3R, cited by the README as evolutions from the same group.

## For you
Worth watching: interesting for 3D vision experimentation, but the non-commercial license and the lack of commits for over a year limit adoption.
