---
schema: 1
depot: meizhong986/WhisperJAV
source_readme_sha: d8845505338dbcb8
ecrite_le: 2026-10-05
nature: outil
deploiement: pip
prerequis: [GPU, version de Python, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# meizhong986/WhisperJAV

> Générateur de sous-titres local pour vidéos japonaises adultes, avec pipelines ASR réglés contre les hallucinations.

## Le problème
Whisper hallucine sur les audios longs, bruités ou pleins de vocalisations non verbales ; un débruitage aveugle aggrave parfois les choses.

## Ce que ça fait vraiment
Chaîne : extraction audio, détection de scènes, amélioration optionnelle, segmentation VAD, ASR, post-traitement japonais (filtres de répétitions, lignes non verbales, timing). Modes balanced, fidelity, fast, faster, qwen, anime-whisper, transformers, plus un ensemble à deux passes avec fusion. Traduction par Ollama, DeepSeek, Gemini, etc. Un tableau de fin de run indique le succès par fichier. GUI et CLI.

## Comment c'est branché
```mermaid
flowchart LR
  A[CLI cli.py / GUI] --> B[Scene detection]
  B --> C[Speech enhancement]
  C --> D[Speech segmentation]
  D --> E[ASR engines]
  E --> F[Subtitle post-processing]
  F --> G[.srt]
```

## Essayer
```bash
pip install torch torchaudio --index-url https://download.pytorch.org/whl/cu128
pip install "whisperjav[all] @ git+https://github.com/meizhong986/whisperjav.git"
whisperjav video.mp4
whisperjav video.mp4 --mode balanced --sensitivity aggressive
```

## Coût et pièges
GPU NVIDIA conseillé (CPU : 30–60 min par heure de vidéo). Environ 3 Go de modèles au premier lancement. Traduction cloud : API payantes.

## Ce que ce n'est pas
Contenu adulte : à n'utiliser que dans le respect de la loi. Les résultats varient selon la qualité audio.

## Alternatives
Aucune alternative nommée dans le README (il s'appuie sur faster-whisper, stable-ts, Qwen3-ASR).

## Pour toi
À surveiller : bonne étude de cas sur ASR robuste (VAD, ensemble, filtres anti-hallucination) réutilisable pour ton audio difficile, mais niche et mono-mainteneur.

