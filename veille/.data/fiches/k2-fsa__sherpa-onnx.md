---
schema: 1
depot: k2-fsa/sherpa-onnx
source_readme_sha: e9e425854ec9c1c5
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# k2-fsa/sherpa-onnx

> Reconnaissance vocale, synthèse, VAD et diarisation hors ligne via ONNX, sur de nombreuses plateformes.

## Le problème
Faire de la parole (ASR, TTS) en local, sur mobile, embarqué ou navigateur, sans cloud.

## Ce que ça fait vraiment
Noyau C++ au-dessus d'ONNX Runtime : ASR en flux et hors ligne, TTS, VAD, mots-clés, diarisation, identification de locuteur, rehaussement, séparation de sources. Une API C sert de contrat, avec liaisons Python, Java/Kotlin, Rust, Node, WASM, Flutter, Swift, Go, C#. Accélérateurs : CUDA, QNN, RKNN, Ascend.

## Comment c'est branché
```mermaid
flowchart LR
  Models[Modèles ONNX] --> Core[csrc core]
  Core --> Session[session.cc provider.cc]
  Core --> ASR[Offline Streaming ASR]
  Core --> TTS[offline-tts.cc]
  Core --> CAPI[c-api.h]
  CAPI --> Bind[Python JNI Rust Dart]
```

## Essayer
Le README fourni est tronqué en tête (début manquant) et ne contient aucune commande d'installation : il renvoie vers Hugging Face Spaces, APK précompilés et la documentation https://k2-fsa.github.io/sherpa/onnx/.

## Coût et pièges
Gratuit. Les modèles se téléchargent séparément (releases du dépôt), parfois de l'ordre du Go.

## Ce que ce n'est pas
Pas une application finie : une bibliothèque et des démos. Pas d'API cloud.

## Alternatives
Whisper et Moonshine sont des modèles cités, utilisables via sherpa-onnx plutôt que concurrents.

## Pour toi
Adopter pour de la voix locale ou embarquée : large couverture de modèles et de langages, Apache-2.0, activité forte.

