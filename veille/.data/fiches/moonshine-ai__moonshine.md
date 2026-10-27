---
schema: 1
depot: moonshine-ai/moonshine
source_readme_sha: d666f3f97157caf3
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: adopter
---

# moonshine-ai/moonshine

> Boîte à outils locale de reconnaissance vocale en flux pour agents vocaux et applications.

## Le problème
Les agents vocaux dépendent d'API cloud : latence, coût, confidentialité.

## Ce que ça fait vraiment
Tourne sur l'appareil, sans compte ni clé d'API. Modèles de transcription entraînés de zéro, du plus précis (supérieur à Whisper Large V3 selon le README) à 1 Mo. Un runtime C/C++ gère transcription en flux, détection de voix (Silero), rééchantillonnage, diarisation, synthèse vocale et embeddings. Bindings : Python, JavaScript/WASM, iOS, Android, desktop, Raspberry Pi.

## Comment c'est branché
```mermaid
flowchart LR
  AU["Audio"] --> RS["resampler.cpp"]
  RS --> VD["silero-vad.cpp"]
  VD --> TR["transcriber.cpp"]
  TR --> CA["C / C++ API"]
  CA --> WK["WASM worker"]
  CA --> TT["moonshine-tts.cpp"]
```

## Essayer
```bash
pip install moonshine-voice
moonshine-voice mic --language en
```

## Coût et pièges
Gratuit, sans clé. Licence présente mais non identifiée par GitHub : à vérifier (les modèles peuvent avoir une licence distincte, non précisée).

## Ce que ce n'est pas
Les chiffres de précision sont ceux du README, non vérifiés. Pas un service hébergé.

## Alternatives
- Whisper : cité comme référence de précision ; Moonshine vise la latence en flux.

## Pour toi
À adopter pour essayer de la transcription locale : une commande suffit, mais vérifie la licence des modèles avant tout usage commercial.

