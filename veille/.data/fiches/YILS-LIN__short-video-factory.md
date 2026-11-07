---
schema: 1
depot: YILS-LIN/short-video-factory
source_readme_sha: d86d96eafadf7653
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, dépend d'un SaaS, télémétrie, mainteneur unique]
verdict: ignorer
---

# YILS-LIN/short-video-factory

> Application de bureau qui génère des vidéos courtes marketing à partir d'un prompt et de plans vidéo.

## Le problème
Monter à la main des dizaines de vidéos courtes (texte, voix, sous-titres) prend un temps considérable.

## Ce que ça fait vraiment
Application Electron : un LLM compatible OpenAI écrit le texte, Edge TTS le met en voix, FFmpeg monte vidéo, audio et sous-titres. Un mode batch enchaîne des tâches selon des préréglages. Interface surtout en chinois, aussi en anglais.

## Comment c'est branché
```mermaid
flowchart TD
    Home["Home/index.vue"] --> Gen["lib/llm/generate.ts"]
    Gen --> LLM["API LLM"]
    Home --> Batch["lib/batch.ts"]
    Batch --> FFmpeg["electron/ffmpeg/index.ts"]
    FFmpeg --> TTS["electron/lib/edge-tts.ts"]
    TTS --> Edge["Service Edge TTS"]
```

## Essayer
```bash
# Aucune commande dans le README : télécharger la dernière version sur
# la page Releases de GitHub.
```

## Coût et pièges
Clé d'API LLM à ta charge. La voix passe par le service cloud Edge TTS. L'architecture montre un service d'analytics, alors que le README parle d'exécution « entièrement locale » : à vérifier.

## Ce que ce n'est pas
Pas entièrement local malgré le README. Les effets de sous-titres, plus de voix et plus de paramètres sont encore à faire (feuille de route).

## Alternatives
Aucune alternative nommée dans le README (edge-tts est cité comme brique).

## Pour toi
À ignorer : production de vidéos marketing, hors de ton périmètre, avec AGPL et appels cloud.

