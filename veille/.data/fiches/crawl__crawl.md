---
schema: 1
depot: crawl/crawl
source_readme_sha: 59ea436ba19ef03f
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# crawl/crawl

> Dungeon Crawl Stone Soup, jeu de rôle roguelike d'exploration de donjons, jouable en ASCII, en tuiles ou en ligne.

## Le problème
Un roguelike tactique profond, libre et activement maintenu, jouable hors ligne comme en navigateur ou en SSH.

## Ce que ça fait vraiment
Jeu au tour par tour : exploration de niveaux composés de cartes écrites à la main (vaults), combat, magie, dieux. Le code C++ sépare le moteur, la génération de donjons, les systèmes de monstres et d'objets, et plusieurs interfaces (terminal, tuiles SDL, Webtiles, Android). Les données et la génération passent par des fichiers de définition et du Lua.

## Comment c'est branché
```mermaid
graph TD
    core1("main.cc") --> ent1("player.cc")
    core1 --> ent2a("mon-abil.cc")
    dng1("dgn-delve.cc") --> core1
    dat2("dlua.cc (Lua)") --> core1
    core1 --> ui2a("tilesdl.cc")
    core1 --> ui3("webserver")
    core1 --> ui4("android-project")
```

## Essayer
Aucune commande documentée dans le README : télécharger la version ASCII ou tuiles, ou jouer en ligne ; la FAQ intégrée s'ouvre avec `?Q` dans le jeu.

## Coût et pièges
Gratuit. Licence présente mais non identifiée par GitHub. 470 issues ouvertes. Les contributions de vaults se testent sans compiler.

## Ce que ce n'est pas
Pas un jeu facile ni scénarisé : la difficulté est élevée. Pas un outil de travail.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
Ignorer : un jeu, sans lien avec ton métier ; seul le moteur de génération procédurale pourrait intéresser un curieux.

