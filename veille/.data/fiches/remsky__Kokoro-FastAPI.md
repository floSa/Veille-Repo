---
schema: 1
depot: remsky/Kokoro-FastAPI
source_readme_sha: f8a6e87253ec6700
ecrite_le: 2026-09-29
nature: service
deploiement: docker
prerequis: [Docker, GPU]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# remsky/Kokoro-FastAPI

> Serveur FastAPI dockerisé, compatible OpenAI, pour synthèse vocale locale avec le modèle Kokoro-82M.

## Le problème
Générer de longues pistes audio de qualité sans passer par une API de synthèse vocale payante.

## Ce que ça fait vraiment
Expose `/v1/audio/speech` compatible OpenAI, avec streaming, mélange pondéré de voix, alias, balises multi-locuteurs, pauses, SSML expérimental, timestamps par mot et endpoints de phonèmes. Interface web optionnelle. Images CPU, NVIDIA CUDA et AMD ROCm (expérimental). Le README annonce 35x à 100x le temps réel sur une RTX 4060 Ti.

## Comment c'est branché
```mermaid
flowchart LR
  C[Clients / Web UI] --> R[API Routers OpenAI-Compatible]
  R --> T[Core Services & Text Processing]
  T --> I[Inference Manager & Voice Manager]
  I --> V[Voice Resources]
  I --> A[Streaming Audio Writer]
```

## Essayer
```bash
docker run -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-cpu:latest
docker run --gpus all -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-gpu:latest
```

## Coût et pièges
Gratuit ; GPU recommandé pour la vitesse (~3,5 s de latence CPU sur un vieux i7 contre ~300 ms GPU). Épingler une version plutôt que `:latest`. Les routes `/dev/*` et `/debug/*` peuvent changer.

## Ce que ce n'est pas
Pas le modèle lui-même : c'est un enrobage ; l'auteur n'est pas affilié à Kokoro. Le clonage de voix est un « tuner » expérimental, pas un clone fidèle.

## Alternatives
Le README ne nomme aucune alternative directe.

## Pour toi
À adopter si tu veux une TTS locale branchée sur du code OpenAI existant : un simple changement de `base_url`, licence Apache-2.0, actif.
