---
schema: 1
depot: tensorflow/tflite-micro
source_readme_sha: 7c8150c11e873ca2
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [matière insuffisante]
verdict: surveiller
---

# tensorflow/tflite-micro

> Moteur d'inférence TensorFlow Lite pour microcontrôleurs et DSP, destiné aux ingénieurs de l'IA embarquée.

## Le problème
Faire tourner un modèle sur du matériel avec quelques dizaines ou centaines de kilo-octets de mémoire sans système d'exploitation.

## Ce que ça fait vraiment
Le README est très court : il présente le projet et une liste de documents. D'après l'architecture déduite du code, un modèle FlatBuffer est lu par un interpréteur ; un résolveur d'opérateurs choisit les noyaux ; un planificateur de mémoire préalloue les tenseurs. Des noyaux optimisés existent pour Cortex-M, Hexagon, RISC-V, Xtensa et CEVA.

## Comment c'est branché
```mermaid
flowchart TD
    A["Modèle FlatBuffer"] --> B["Micro Interpreter"]
    B --> C["Micro Mutable Op Resolver"]
    B --> D["Memory Planner et Allocator"]
    C --> E["Noyaux (kernels)"]
    D --> E
    E --> F["Cortex-M, Hexagon, RISC-V, Xtensa, CEVA"]
```

## Essayer
Aucune commande documentée dans le README ; voir les guides listés (mémoire, portage, outil de compression, interpréteur Python).

## Coût et pièges
Gratuit. Le modèle doit être converti au préalable avec LiteRT ou TensorFlow. Le build s'appuie sur Bazel.

## Ce que ce n'est pas
Pas un cadre d'entraînement ni un runtime pour serveurs ou téléphones. Le README ne donne ni exemple ni démarrage rapide.

## Alternatives
Non documenté dans le README.

## Pour toi
À surveiller : la référence de l'inférence sur microcontrôleur si ton projet MLOps cible de l'embarqué, sans intérêt pour du déploiement cloud.

