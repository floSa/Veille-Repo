---
schema: 1
depot: abus-aikorea/voice-pro
source_readme_sha: 0a5b3c2a2491e46f
ecrite_le: 2026-09-29
nature: app
deploiement: autre
prerequis: [GPU, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft, licence à vérifier]
verdict: ignorer
---

# abus-aikorea/voice-pro

> WebUI Gradio de doublage : téléchargement YouTube, transcription, traduction, clonage de voix.

## Le problème
Sous-titrer, traduire et doubler une vidéo demande plusieurs outils ou un SaaS facturé à la minute.

## Ce que ça fait vraiment
Téléchargement via yt-dlp, séparation de voix (Demucs), transcription Whisper/Faster-Whisper.
Traduction Deep-Translator (ou Azure avec tes clés), synthèse Edge-TTS, kokoro, clonage zero-shot F5-TTS, E2-TTS, CosyVoice.
Onglets Dubbing Studio, Whisper Caption, Translate, Speech Generation ; traduction en direct.

## Comment c'est branché
```mermaid
flowchart LR
  A[YouTube Input] --> B[Download]
  B --> C[Audio Separation]
  C --> D[Speech Recognition]
  D --> E[Translation]
  E --> F[TTS]
  F --> G[Output]
```

## Essayer
```bash
git clone https://github.com/abus-aikorea/voice-pro.git
```

## Coût et pièges
Gratuit ; GPU NVIDIA 4 Go+ (8 Go conseillé), ~10 Go de modèles, 20 Go de disque. Azure optionnel à ta charge.

## Ce que ce n'est pas
Développement en pause (équipe sur WeConnect). Licence incohérente : GPL-3.0 au catalogue, LGPL dans l'en-tête. Voix de célébrités proposées : risque juridique.

## Alternatives
Plateformes SaaS listées (Maestra, Kapwing, HappyScribe, Descript…), non des dépôts : aucune alternative de dépôt nommée.

## Pour toi
À ignorer : outil de bout en bout non maintenu ; les briques Whisper/F5-TTS s'utilisent mieux directement.
