# jixiaozhong/Sonic

> CVPR 2025 research code that animates a portrait from an image and an audio file.

## The problem
Making a still face talk convincingly requires linking sound to facial movement.

## What it actually does
The pipeline detects and aligns the face (YOLOFace), encodes the audio (Whisper-tiny, audio projections) and generates the video with Stable Video Diffusion and a 3D UNet. RIFE interpolates frames, a mask recomposes the result. A Gradio interface exists according to the architecture; the README only documents the command line.

## How it is wired
```mermaid
flowchart LR
  I["Image + audio"] --> F["Face Aligner (align.py)"]
  F --> A["Audio Projection / Bucketing"]
  A --> P["pipeline_sonic.py"]
  P --> SVD["stable-video-diffusion-img2vid-xt"]
  SVD --> RF["RIFE + Mask Processor"]
  RF --> V["Vidéo finale"]
```

## Trying it
```bash
pip3 install -r requirements.txt
huggingface-cli download LeonJoe13/Sonic --local-dir checkpoints
python3 demo.py '/path/to/input_image' '/path/to/input_audio' '/path/to/output_video'
```

## Cost and gotchas
An NVIDIA GPU with CUDA is required, tested on a 32 GB GPU, on Linux. Several models must be downloaded, including SVD-xt.

## What it is not
Not a product: usage relies on downloaded weights. The license is not identified by GitHub; read it before any use.

## Alternatives
No named alternative, except Realtalk for real time with less GPU.

## For you
Worth watching for audio-video generation: credible research results, but the license needs checking and the GPU requirement is heavy.
