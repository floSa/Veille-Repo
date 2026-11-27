# open-mmlab/mmpose

> PyTorch toolbox for 2D/3D pose estimation (human, animal, face, hand) from the OpenMMLab ecosystem.

## The problem
Reproducing and comparing pose models across varied datasets is slow without a common framework.

## What it actually does
Provides an inferencer (image or video → decoded keypoints → visualization), configurable models (backbones, heads, codecs), many datasets and metrics. Includes the RTMPose/RTMO/RTMW family and demos (Gradio, TorchServe). A model zoo documents the results.

## How it is wired
```mermaid
flowchart LR
  A["Image ou vidéo"] --> B["Pose Inferencer"]
  B --> C["Data Transforms"]
  C --> D["Backbones et Pose Heads"]
  D --> E["Keypoint Codecs"]
  E --> F["Pose Visualizer"]
```

## Trying it
No real command in the provided README: installation points to `installation.md` and to "A 20-minute Tour to MMPose".

## Cost and gotchas
A GPU is practically required for training; the OpenMMLab ecosystem (MMEngine, MMCV) is installed with MIM. Some algorithms have not been migrated to 1.x.

## What it is not
Not a turnkey API. Last push in August 2025 (more than a year before the reference date, according to the catalog).

## Alternatives
No alternative named in the README.

## For you
Worth watching: a solid reference for pose-based vision, but the commit pace is slowing.
