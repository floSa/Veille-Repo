# teamclouday/AndroidMic

> Use an Android phone as a PC microphone, over WiFi or USB.

## The problem
A PC without a good microphone cannot simply use a phone's audio capture in Discord, OBS or Zoom.

## What it actually does
An Android app captures the microphone and sends packets to the PC over TCP, UDP (WiFi), USB ADB or USB serial. The Rust desktop application (Linux, Windows, macOS) receives them, resamples, applies noise reduction (RNNoise) and effects, then plays the sound on a virtual audio cable that other apps see as a microphone. Latency is adjustable through a jitter buffer.

## How it is wired
```mermaid
flowchart LR
    A["MicAudioManager.kt (Android)"] --> B["Stream Manager : TCP, UDP ou USB"]
    B --> C["streamer_runner.rs (PC)"]
    C --> D["process.rs : bruit, effets, resampler"]
    D --> E["player.rs"]
    E --> F["Câble audio virtuel"]
    F --> G["Discord, OBS, Zoom"]
```

## Trying it
```bash
# Linux : créer un micro virtuel (exemple du README)
pactl load-module module-null-sink sink_name=virtual_mic
pactl load-module module-remap-source master=virtual_mic.monitor source_name=virtual_mic_source
# Nix : nix run nixpkgs#android-mic
```

## Cost and gotchas
Free. A virtual audio cable is mandatory (VB Cable or VAC on Windows, PulseAudio or PipeWire on Linux, BlackHole on macOS). The Windows firewall must allow the app, and Defender may flag it by mistake. USB serial mode requires Zadig and a WinUSB driver on Windows.

## What it is not
Not a voice processing or transcription tool. Bluetooth was removed. The sound is phone-microphone quality, adjustable but without guarantee.

## Alternatives
No alternative cited in the README.

## For you
Ignore: a desktop utility unrelated to data or AI, unless you want a backup microphone for video calls or recordings.
