# LanRhyme/MicYou

> Turns a phone into a high-quality PC microphone, with a desktop server for Windows, Linux and macOS.

## The problem
No good microphone at hand, or an audio chain to route into calls, games and recordings.

## What it actually does
- Streams from Android (Wi-Fi or USB/ADB), iOS (Wi-Fi or USB) or a mobile browser via QR code.
- Desktop server as GUI, CLI or TUI.
- Processing chain: AI noise suppression, echo cancellation, dereverberation, equalizer, AGC, VAD.
- Routing through VB-CABLE (Windows), PipeWire (Linux), BlackHole (macOS); Native and WASM plugins.

## How it is wired
```mermaid
graph LR
  A[App Android / iOS / Web] --> B[Transport Wi-Fi / USB]
  B --> C[Serveur Tauri + Rust]
  C --> D[Pipeline DSP / AEC / bruit IA]
  D --> E[Micro virtuel]
  E --> F[Appli d'appel / jeu]
```

## Trying it
No command: download the desktop package and the APK from GitHub Releases, set up a virtual microphone, choose Wi-Fi, USB or Web.

## Cost and gotchas
Free. A virtual microphone driver is needed depending on the OS; the iOS IPA must be installed outside the store (separate repo); iTunes is required on Windows for iOS over USB.

## What it is not
Not a data/AI tool: it is a consumer audio app. The license exists but is not identified by GitHub.

## Alternatives
No alternative named in the README.

## For you
Keep an eye on it: handy for video calls and recordings, but the license needs clarifying before any professional use and it has no link to data/MLOps work.
