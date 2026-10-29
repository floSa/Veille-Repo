---
schema: 1
depot: WeakAuras/WeakAuras2
source_readme_sha: 1c4fc47f31e30029
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [compte à créer]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# WeakAuras/WeakAuras2

> Addon World of Warcraft pour afficher des alertes graphiques personnalisables sur l'interface du jeu.

## Le problème
L'interface de WoW montre peu d'informations sur les améliorations, affaiblissements et recharges.

## Ce que ça fait vraiment
Affiche des icônes, barres et textures déclenchées par auras, santé, ressources, recharges, événements de combat, objets, totems. Animations, groupes, effets annexes (sons, annonces), chargement conditionnel. Pour utilisateurs avancés : code Lua personnalisé. Se configure avec `/wa`. Partage via wago.io et WeakAuras Companion.

## Comment c'est branché
```mermaid
flowchart LR
  A[Options /wa] --> B[WeakAuras.lua]
  B --> C[GenericTrigger.lua]
  C --> D[BuffTrigger2.lua]
  C --> E[Conditions.lua]
  B --> F[Group.lua / DynamicGroup.lua]
  F --> G[Animations.lua]
```

## Essayer
Aucune commande shell documentée dans le README : taper `/wa` ou `/weakauras` dans le jeu.

## Coût et pièges
Gratuit. Il faut World of Warcraft (compte payant côté jeu).

## Ce que ce n'est pas
Pas un outil hors du jeu : un addon pour WoW.

## Alternatives
Power Auras, que WeakAuras remplace (cité dans le README).

## Pour toi
À ignorer : addon de jeu, sans valeur pour data/IA/MLOps.

