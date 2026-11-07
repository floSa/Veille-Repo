---
schema: 1
depot: xLLM-AI/xllm
source_readme_sha: f3e4db0b606e2529
ecrite_le: 2026-11-07
nature: outil
deploiement: compilation
prerequis: [GPU, Docker, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# xLLM-AI/xllm

> Moteur d'inférence LLM pour accélérateurs chinois, dont le README est identique à celui de jd-opensource/xllm.

## Le problème
Servir de grands modèles sur des puces chinoises (NPU et autres) avec un débit correct et un coût réduit.

## Ce que ça fait vraiment
Le README est mot pour mot celui de `jd-opensource/xllm`, avec les mêmes chiffres du catalogue (étoiles, dernier push, issues). C'est vraisemblablement le même projet sous un autre nom d'organisation, sans certitude. Il annonce une architecture service/moteur séparés, un déploiement en entreprise chez JD.com et la prise en charge du matériel chinois. Aucun diagramme n'est fourni pour ce dépôt.

## Comment c'est branché
```mermaid
flowchart LR
  Client["Client"] --> Service["Couche service"]
  Service --> Moteur["Couche moteur"]
  Moteur --> HW["Accélérateurs chinois"]
```
Schéma simplifié d'après la fiche, sans diagramme fourni.

## Essayer
Aucune commande dans le README : Quick Start et Launch xLLM sont renvoyés à la documentation.

## Coût et pièges
Matériel compatible requis ; les étapes d'installation ne figurent pas dans le README. Risque de confusion entre les deux dépôts jumeaux.

## Ce que ce n'est pas
Pas une alternative distincte à `jd-opensource/xllm` d'après le README : même texte, mêmes remerciements.

## Alternatives
`jd-opensource/xllm` : dépôt identique, à privilégier comme source d'origine.

## Pour toi
À surveiller via `jd-opensource/xllm` plutôt que cette copie : même contenu, et l'origine du doublon n'est pas documentée.

