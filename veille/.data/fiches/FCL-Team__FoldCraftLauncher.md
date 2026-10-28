---
schema: 1
depot: FCL-Team/FoldCraftLauncher
source_readme_sha: 92d317fed340328d
ecrite_le: 2026-10-28
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# FCL-Team/FoldCraftLauncher

> Lanceur Android de Minecraft Java Edition, fondé sur HMCL, pour joueurs mobiles.

## Le problème
Jouer à Minecraft Java sur Android demande un runtime Java et un rendu adaptés.

## Ce que ça fait vraiment
Gère profils et versions, téléchargements, modloaders (Forge, NeoForge, Fabric, Quilt, OptiFine…), Java 8/17/21/25 intégrés, souris virtuelle, clés personnalisées, conversion de dispositions ZalithLauncher2, rendus pluggables, multijoueur via Terracotta/EasyTier. Authentification Microsoft et Yggdrasil.

## Comment c'est branché
```mermaid
flowchart LR
  A["MainActivity.kt"] --> B["Profiles.kt"]
  B --> C["DownloadManager.kt"]
  B --> D["FCLauncher.java"]
  D --> E["RendererManager.kt"]
  D --> F["Controller.java"]
```

## Essayer
Aucune commande : le README décrit les fonctions et les dépendances, sans procédure d'installation.

## Coût et pièges
Gratuit. Dépendances sous licences variées (dont AGPL, LGPL ; LWJGLX à licence inconnue). README en chinois, anglais et russe.

## Ce que ce n'est pas
Pas un lanceur pour PC.

## Alternatives
- HMCL : source du cœur fonctionnel.

## Pour toi
À ignorer : lanceur de jeu mobile, hors profil data / IA / MLOps.

