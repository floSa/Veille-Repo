---
schema: 1
depot: Questie/Questie
source_readme_sha: 085a90c0ce3d2915
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [compte à créer]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# Questie/Questie

> Addon World of Warcraft Classic qui affiche quêtes, objectifs et suivi sur la carte.

## Le problème
Le jeu Classic montre peu d'informations sur les quêtes.

## Ce que ça fait vraiment
Affiche départs, rendus et objectifs de quêtes sur la carte, trajets des PNJ, suivi de quêtes, progression de groupe, journal de parcours, quêtes par zone, recherche dans la base, nombreuses options. Traductions pour les langues officielles de Classic. API pour intégrer Questie à d'autres addons.

## Comment c'est branché
Matière insuffisante pour un schéma fidèle : pas d'architecture fournie, le README décrit les fonctions et le développement.

## Essayer
```bash
luacheck -q Database Localization Modules Questie.lua
busted -p ".test.lua" .
lua cli/validate-loader-usage.lua
```

## Coût et pièges
Gratuit ; exige le jeu. Développement : Lua 5.1, luarocks, busted, luacheck.

## Ce que ce n'est pas
Pas un outil hors du jeu.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : addon de jeu, hors data/IA/MLOps.

