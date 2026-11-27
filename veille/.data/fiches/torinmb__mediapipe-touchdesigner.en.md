# torinmb/mediapipe-touchdesigner

> TouchDesigner plugin that brings GPU-accelerated MediaPipe vision models, for digital artists.

## The problem
Getting tracking data (face, hands, pose) into TouchDesigner requires installing local libraries.

## What it actually does
A `MediaPipe.tox` component launches an embedded Chromium that runs MediaPipe in JavaScript/WebAssembly with GPU acceleration. Results come back as JSON through a local WebSocket server, then `.tox` components (face, hands, pose, objects, segmentation, classification) convert them. Models are embedded in the file. Input is limited to 720p; Spout (Windows) or Syphon via OBS (Mac) to inject a source.

## How it is wired
```mermaid
flowchart LR
    CAM[Webcam / SpoutCam] --> CHR[Chromium embarqué - main.js]
    CHR --> TASK[Modules de tâches MediaPipe]
    TASK --> WS[WebSocket local]
    WS --> TD[MediaPipe.tox]
    TD --> AD[face / hand / pose_tracking.tox]
```

## Trying it
```bash
npm install --global yarn
yarn install
yarn dev
yarn build
```
Common usage: download `release.zip` and open `MediaPipe TouchDesigner.toe`.

## Cost and gotchas
Requires TouchDesigner (third-party software). Tick "Enable External .tox", otherwise the file becomes huge. Tasks are CPU/GPU hungry: disable the ones you do not use.

## What it is not
It is not a Python vision library: it only works inside TouchDesigner. Interactive segmentation and image embedding are not supported.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you do generative art in TouchDesigner: outside the data/AI/MLOps scope.
