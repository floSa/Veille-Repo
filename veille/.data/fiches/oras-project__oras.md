---
schema: 1
depot: oras-project/oras
source_readme_sha: e26c119419347ec4
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [matière insuffisante]
verdict: surveiller
---

# oras-project/oras

> CLI pour pousser, tirer et copier des artefacts OCI vers des registres ; fiche minimale, README quasi vide.

## Le problème
Non documenté dans le README, qui renvoie à oras.land/cli.

## Ce que ça fait vraiment
D'après l'architecture tirée du code : commandes pull/push, copie d'artefacts entre registres et layouts OCI (`cp`, avec options de copie de graphe et étiquettes supplémentaires), découverte, manifestes, blobs, dépôts, sauvegarde/restauration et authentification, avec sorties formatées et progression.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI entry (main.go)"] --> B["Command root (cmd.go)"]
  B --> C["Copy artifacts (cp.go)"]
  C --> D["Target options (target.go)"]
  C --> E["Content traversal (traverse.go)"]
  E --> F["Artifact graph (graph.go)"]
  F --> G["OCI registries"]
```

## Essayer
Aucune commande documentée dans le README ; voir https://oras.land/cli.

## Coût et pièges
Non documenté dans le README.

## Ce que ce n'est pas
Pas une documentation : le README ne contient qu'un lien et un guide de développement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour stocker modèles et artefacts dans un registre OCI, mais le README ne permet pas de juger plus.

