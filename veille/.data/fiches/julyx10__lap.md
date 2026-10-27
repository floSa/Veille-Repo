---
schema: 1
depot: julyx10/lap
source_readme_sha: efd8969a270a07aa
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# julyx10/lap

> Gestionnaire de photos local de bureau, sans cloud, avec recherche IA locale.

## Le problème
Les services de photos en ligne imposent l'envoi des fichiers ; gérer 100 000 photos hors ligne reste pénible.

## Ce que ça fait vraiment
Indexe des dossiers existants dans une base SQLite locale, sans les déplacer. Recherche par texte et similarité (CLIP), visages (InsightFace), doublons, albums intelligents, carte, édition de base, 60+ formats dont RAW et HEIC. Tauri/Rust, frontend Vue ; l'inférence passe par ONNX Runtime. Tags, notes et collections ne sont pas écrits dans les fichiers.

## Comment c'est branché
```mermaid
flowchart LR
  A[main.js Vue] --> B[api.js]
  B --> C[t_cmds.rs]
  C --> D[t_sqlite.rs]
  C --> E[t_ai.rs]
  C --> F[t_dedup.rs]
  C --> G[t_image.rs]
```

## Essayer
```bash
brew tap julyx10/lap
brew install --cask lap
```

## Coût et pièges
Gratuit. Les modèles se récupèrent par `./scripts/download_models.sh` en compilation. Windows non signé (SmartScreen). Sauvegarder la base avec les photos : les tags n'y sont pas intégrés. Certains services en ligne sont optionnels (carte).

## Ce que ce n'est pas
Pas un éditeur RAW complet. L'organisation est liée à la base Lap : déplacer les fichiers hors de Lap la casse.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : exemple concret d'IA locale embarquée (CLIP, visages, ONNX) dans une app de bureau, utile comme référence d'architecture.

