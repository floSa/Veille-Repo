---
schema: 1
depot: aseprite/aseprite
source_readme_sha: c7c8684e06bb02ad
ecrite_le: 2026-10-27
nature: app
deploiement: compilation
prerequis: [aucun]
cout: payant
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: ignorer
---

# aseprite/aseprite

> Éditeur de sprites animés en pixel art, en C++, avec scripts Lua et ligne de commande.

## Le problème
Dessiner des animations en pixel art demande des calques, des images clés et des palettes que les éditeurs généralistes gèrent mal.

## Ce que ça fait vraiment
Calques et images distincts, modes RGBA/indexé/niveaux de gris, aperçu temps réel avec onion skinning, outils pixel perfect, mode tuilé, export en planches de sprites, GIF, séquences PNG. Scripts Lua, CLI d'automatisation, annulation non linéaire, récupération après plantage.

## Comment c'est branché
```mermaid
flowchart LR
  M[main.cpp] --> U[src/app/ui]
  U --> C[src/app/commands]
  C --> D[src/doc modèle]
  D --> R[src/render]
  D --> F[src/app/file]
  S[script/engine.cpp Lua] --> C
```

## Essayer
Le README ne contient aucune commande de compilation ni d'installation. Rien d'inventé.

## Coût et pièges
Catalogue : aucune licence détectée par GitHub. Le README ne dit pas si le binaire est payant ; ne pas déduire. Statut d'usage du code source à vérifier avant redistribution.

## Ce que ce n'est pas
Pas un outil de retouche photo ni de modélisation 3D.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : outil de création de pixel art, sans rapport avec le travail data/IA ; la licence reste à vérifier.

