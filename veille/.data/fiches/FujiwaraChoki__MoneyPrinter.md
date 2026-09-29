---
schema: 1
depot: FujiwaraChoki/MoneyPrinter
source_readme_sha: df74b387b1d861ee
ecrite_le: 2026-09-29
nature: app
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique, matière insuffisante]
verdict: ignorer
---

# FujiwaraChoki/MoneyPrinter

> Générateur automatique de YouTube Shorts à partir d'un sujet, avec LLM local Ollama.

## Le problème
Produire des vidéos courtes en série (script, voix, montage) est répétitif.

## Ce que ça fait vraiment
D'après l'architecture : UI web minimale → API (`main.py`) → file de jobs en Postgres → worker.
Le pipeline génère script et métadonnées via Ollama, cherche des contenus, synthétise la voix, assemble la vidéo, publie éventuellement sur YouTube.
File persistante résistante aux redémarrages.

## Comment c'est branché
```mermaid
flowchart LR
  A[Browser UI index.html] --> B[API Service main.py]
  B --> C[Job Store repository.py]
  C --> D[Job Worker worker.py]
  D --> E[Pipeline pipeline.py]
  E --> F[Ollama Adapter gpt.py]
  E --> G[Video Assembly video.py]
  E --> H[YouTube youtube.py]
```

## Essayer
```bash
ollama serve
ollama pull llama3.1:8b
```

## Coût et pièges
Ollama local, ImageMagick requis ; la voix TikTok demande un cookie `sessionid` de ton compte.

## Ce que ce n'est pas
Pas une « machine à argent » : c'est un pipeline de contenu automatisé. README surtout FAQ, installation renvoyée vers `docs/`.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : production de contenu en masse, sans intérêt data/ML hormis comme exemple de file de jobs en Postgres.
