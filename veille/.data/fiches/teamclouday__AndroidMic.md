---
schema: 1
depot: teamclouday/AndroidMic
source_readme_sha: d8854dc3f6cdf02f
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft]
verdict: ignorer
---

# teamclouday/AndroidMic

> Utiliser un téléphone Android comme microphone d'un PC, via WiFi ou USB.

## Le problème
Un PC sans bon micro ne peut pas se servir simplement de la capture audio d'un téléphone dans Discord, OBS ou Zoom.

## Ce que ça fait vraiment
Une app Android capte le micro et envoie les paquets au PC par TCP, UDP (WiFi), USB ADB ou USB série. L'application de bureau en Rust (Linux, Windows, macOS) reçoit, rééchantillonne, applique réduction de bruit (RNNoise) et effets, puis joue le son sur un câble audio virtuel que les autres applis voient comme micro. Latence réglable par tampon de gigue.

## Comment c'est branché
```mermaid
flowchart LR
    A["MicAudioManager.kt (Android)"] --> B["Stream Manager : TCP, UDP ou USB"]
    B --> C["streamer_runner.rs (PC)"]
    C --> D["process.rs : bruit, effets, resampler"]
    D --> E["player.rs"]
    E --> F["Câble audio virtuel"]
    F --> G["Discord, OBS, Zoom"]
```

## Essayer
```bash
# Linux : créer un micro virtuel (exemple du README)
pactl load-module module-null-sink sink_name=virtual_mic
pactl load-module module-remap-source master=virtual_mic.monitor source_name=virtual_mic_source
# Nix : nix run nixpkgs#android-mic
```

## Coût et pièges
Gratuit. Un câble audio virtuel est obligatoire (VB Cable ou VAC sous Windows, PulseAudio ou PipeWire sous Linux, BlackHole sous macOS). Le pare-feu Windows doit autoriser l'app, et Defender peut la signaler à tort. Le mode USB série demande Zadig et un pilote WinUSB sous Windows.

## Ce que ce n'est pas
Pas un outil de traitement vocal ni de transcription. Le Bluetooth a été retiré. Le son est de qualité micro de téléphone, réglable mais sans garantie.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : utilitaire de bureau sans rapport avec la donnée ou l'IA, sauf si tu veux un micro de secours pour des visios ou des enregistrements.

