---
schema: 1
depot: gaogaotiantian/viztracer
source_readme_sha: a621c82b14f552f7
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# gaogaotiantian/viztracer

> Traceur Python à faible surcoût qui visualise l'exécution sur une timeline Perfetto.

## Le problème
cProfile donne des agrégats, pas une chronologie : difficile de comprendre threads, async ou appels PyTorch.

## Ce que ça fait vraiment
Il enregistre chaque entrée et sortie de fonction ; `vizviewer` sert le rapport sur localhost:9001.
Il gère threading, multiprocessing, async, et PyTorch via `--log_torch` (événements GPU).
Filtres (profondeur, fichiers, durée min), logs de variables sans modifier le code, événements personnalisés.
Magics Jupyter, attache à distance, extension VS Code.

## Comment c'est branché
```mermaid
flowchart LR
  APP[Script Python] --> VT[VizTracer]
  VT --> MON[sys.monitoring / setprofile]
  VT --> EV[Collecte d'événements]
  EV --> J[result.json]
  J --> VV[vizviewer]
  VV --> PF[UI Perfetto]
```

## Essayer
```bash
pip install viztracer
viztracer my_script.py arg1 arg2
vizviewer result.json
viztracer --log_torch your_model.py
```

## Coût et pièges
Gratuit. Le surcoût peut atteindre 3 à 4× sur du code très récursif ; installe `orjson` pour accélérer la sauvegarde.

## Ce que ce n'est pas
Pas un profileur par échantillonnage : il trace tout, donc il est plus lent qu'un sampler.

## Alternatives
- cProfile : profileur standard, moins détaillé.

## Pour toi
À adopter pour déboguer un pipeline de données ou un entraînement PyTorch lent : la timeline montre ce qu'un profil agrégé cache.
