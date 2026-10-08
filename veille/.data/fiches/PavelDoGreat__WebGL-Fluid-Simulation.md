---
schema: 1
depot: PavelDoGreat/WebGL-Fluid-Simulation
source_readme_sha: 096bf377c0e1a093
ecrite_le: 2026-10-08
nature: app
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique, matière insuffisante]
verdict: ignorer
---

# PavelDoGreat/WebGL-Fluid-Simulation

> Simulation de fluide en WebGL dans le navigateur, interactive à la souris.

## Le problème
Non documenté dans le README : l'intention est une démonstration de dynamique des fluides sur GPU.

## Ce que ça fait vraiment
README minimal (un lien « Play here » et trois références dont un chapitre NVIDIA GPU Gems). D'après le code décrit : un seul fichier `script.js` gère la saisie du pointeur, les réglages, le solveur sur GPU, les tampons, les shaders, et des effets de bloom et de rayons de soleil.

## Comment c'est branché
```mermaid
graph LR
  A[Pointer input script.js] --> B[Fluid solver]
  B --> C[GPU buffers]
  C --> D[Shader programs]
  D --> E[Renderer]
  E --> F[Bloom effect]
  E --> G[Sunray effect]
```

## Essayer
```bash
# Aucune commande documentée.
```

## Coût et pièges
Gratuit (MIT). Dernier push en novembre 2024. README trop court pour juger la compatibilité navigateur.

## Ce que ce n'est pas
Pas une bibliothèque réutilisable : tout est dans un seul script ; pas un simulateur physique rigoureux.

## Alternatives
Références citées dans le README : mharrys/fluids-2d et haxiomic/GPU-Fluid-Experiments.

## Pour toi
Curiosité graphique, lisible comme exemple de calcul GPU en shaders ; rien pour un pipeline data/IA.

