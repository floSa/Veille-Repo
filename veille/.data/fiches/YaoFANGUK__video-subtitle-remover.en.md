# YaoFANGUK/video-subtitle-remover

> AI software that erases hardcoded subtitles from a video, with a GUI or on the command line.

## The problem
Subtitles burned into the image cannot be turned off; masking them degrades the video.

## What it actually does
Detects the text area (or takes coordinates) and fills it by inpainting with STTN, LAMA or ProPainter, without changing the resolution. Ffmpeg handles frames and remuxing. CUDA (11.8, 12.6, 12.8), DirectML, CPU and macOS Apple Silicon modes. Docker images and prebuilt Windows archives. The README is in Chinese.

## How it is wired
```mermaid
flowchart LR
  U[gui.py / backend/main.py] --> Ff[FFmpeg Binaries]
  Ff --> Sd[Scene Detection]
  Sd --> Io[Inpaint Orchestrator config.py]
  Io --> Al[STTN / LAMA / ProPainter]
  Al --> Mx[Frame Reassembler & Muxing]
  Mx --> Out[Output Video]
```

## Trying it
```bash
docker run -it --name vsr --gpus all eritpchy/video-subtitle-remover:1.4.0-cuda11.8 python backend/main.py -i test/test.mp4 -o test/test_no_sub.mp4
python gui.py
```

## Cost and gotchas
Free; a GPU is recommended, ProPainter is VRAM-hungry and slow. Heavy dependencies (PaddlePaddle, Torch, ONNX). On Apple Silicon, detection seems less accurate.

## What it is not
Not a subtitle extractor (VSE is a separate project). Results vary with the algorithm and the video.

## Alternatives
video-subtitle-extractor (VSE), cited as a companion for extracting subtitles.

## For you
Worth watching: a good example of video inpainting under Apache-2.0, but heavy to install and documented mostly in Chinese.
