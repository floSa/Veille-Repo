---
schema: 1
depot: container-storage-interface/spec
source_readme_sha: 70ddcd38d823158e
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: surveiller
---

# container-storage-interface/spec

> Spécification CSI et fichiers protobuf pour brancher des systèmes de stockage aux orchestrateurs de conteneurs.

## Le problème
Chaque orchestrateur avait sa propre façon de parler aux systèmes de stockage.

## Ce que ça fait vraiment
Le README tient en deux phrases : le dépôt contient la spécification CSI et ses fichiers protobuf. Il liste les orchestrateurs qui l'adoptent : Cloud Foundry, Kubernetes, Mesos, Nomad. Le reste : non documenté ici.

## Comment c'est branché
```mermaid
flowchart LR
  A[Orchestrateur] --> B[Spécification CSI]
  B --> C[Pilote de stockage]
```
Schéma déduit de l'objet de la spécification, pas d'un diagramme fourni.

## Essayer
Aucune commande documentée.

## Coût et pièges
Gratuit. C'est une spécification : il faut un pilote CSI pour l'utiliser.

## Ce que ce n'est pas
Pas un pilote de stockage ni un outil installable.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller comme référence si tu écris ou déboguer des volumes persistants sur Kubernetes pour du MLOps ; rien à y exécuter.

