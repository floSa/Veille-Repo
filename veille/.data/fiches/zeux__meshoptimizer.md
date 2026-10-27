---
schema: 1
depot: zeux/meshoptimizer
source_readme_sha: 69dee313d6982ef8
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: []
verdict: ignorer
---

# zeux/meshoptimizer

> Bibliothèque C/C++ d'optimisation, de compression et de simplification de maillages 3D pour le rendu GPU.

## Le problème
Les maillages mal ordonnés gaspillent la bande passante mémoire, les caches de sommets et les pixels calculés sur GPU.

## Ce que ça fait vraiment
Un pipeline d'algorithmes : indexation, cache de sommets, surdessin, récupération de sommets, quantification, filtrage d'index. S'y ajoutent la compression de sommets et d'index, les meshlets pour le mesh shading, la simplification de maillage, le remaillage voxel (expérimental) et des analyseurs. Compagnons : gltfpack et clusterlod.h.

## Comment c'est branché
```mermaid
flowchart LR
  R["Raw Mesh Data"] --> I["Indexing / Vertex Remap"]
  I --> C["Cache Optimization"]
  C --> F["Vertex Fetch Optimization"]
  F --> Q["Quantization & Compression"]
  Q --> S["Simplification"]
```

## Essayer
```bash
git clone -b v1.3 https://github.com/zeux/meshoptimizer.git
```
Puis inclure `src/meshoptimizer.h` et les fichiers `src/*.cpp` ou utiliser CMake.

## Coût et pièges
Gratuit. L'ordre des étapes compte ; certaines API sont marquées expérimentales et peuvent changer.

## Ce que ce n'est pas
Pas un moteur de rendu ni un outil généraliste : il prépare les données géométriques.

## Alternatives
- Google Draco : cité pour la compression, avec un autre compromis (taux de compression contre ordre de rendu).

## Pour toi
À ignorer : pertinent pour le rendu 3D et glTF, pas pour la data ou l'IA.

