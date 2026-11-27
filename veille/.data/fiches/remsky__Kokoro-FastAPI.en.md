# remsky/Kokoro-FastAPI

> Dockerized FastAPI server, OpenAI-compatible, for local speech synthesis with the Kokoro-82M model.

## The problem
Generating long, high-quality audio tracks without going through a paid text-to-speech API.

## What it actually does
Exposes an OpenAI-compatible `/v1/audio/speech`, with streaming, weighted voice mixing, aliases, multi-speaker tags, pauses, experimental SSML, per-word timestamps and phoneme endpoints. Optional web interface. CPU, NVIDIA CUDA and AMD ROCm (experimental) images. The README claims 35x to 100x real time on an RTX 4060 Ti.

## How it is wired
```mermaid
flowchart LR
  C[Clients / Web UI] --> R[API Routers OpenAI-Compatible]
  R --> T[Core Services & Text Processing]
  T --> I[Inference Manager & Voice Manager]
  I --> V[Voice Resources]
  I --> A[Streaming Audio Writer]
```

## Trying it
```bash
docker run -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-cpu:latest
docker run --gpus all -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-gpu:latest
```

## Cost and gotchas
Free; GPU recommended for speed (~3.5 s latency on CPU on an old i7 versus ~300 ms on GPU). Pin a version rather than `:latest`. The `/dev/*` and `/debug/*` routes may change.

## What it is not
Not the model itself: it is a wrapper; the author is not affiliated with Kokoro. Voice cloning is an experimental "tuner", not a faithful clone.

## Alternatives
The README names no direct alternative.

## For you
Adopt if you want local TTS plugged into existing OpenAI code: a simple `base_url` change, Apache-2.0 license, active.
