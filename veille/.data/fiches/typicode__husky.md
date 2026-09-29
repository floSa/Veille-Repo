---
schema: 1
depot: typicode/husky
source_readme_sha: b4271e0d36e92244
ecrite_le: 2026-09-29
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique, matière insuffisante]
verdict: surveiller
---

# typicode/husky

> Outil npm qui simplifie l'installation de hooks Git natifs dans un projet.

## Le problème
Faire exécuter des vérifications (lint, tests) avant chaque commit exige de gérer des hooks Git qui ne sont pas versionnés.

## Ce que ça fait vraiment
Le README ne contient qu'une adresse ; la suite vient de l'architecture d'après le code. Husky s'appuie sur le réglage Git `core.hooksPath` pour pointer vers un dossier `.husky/` versionné. Le CLI (`bin.js`) délègue à un module (`index.js`), et des scripts shell exécutent les hooks. Zéro dépendance, tests d'intégration en scripts shell.

## Comment c'est branché
```mermaid
flowchart LR
  Dev[Machine développeur] --> NPM[npm ou yarn]
  NPM --> CLI[Husky CLI bin.js]
  CLI --> Lib[index.js]
  Lib --> Cfg[core.hooksPath]
  Cfg --> Hooks[.husky/ pre-commit]
  Hooks --> Sh[husky.sh]
```

## Essayer
Aucune commande documentée dans le README (une seule adresse vers https://typicode.github.io/husky).

## Coût et pièges
Gratuit. Demande Node et Git. Le dernier push date de mars 2026 ; 107 issues ouvertes. Matière insuffisante ici pour détailler l'usage : lire le site de documentation.

## Ce que ce n'est pas
Ce n'est pas un outil de lint ou de test : il ne fait que déclencher ce que tu lui indiques au moment des événements Git.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour imposer lint et tests avant commit dans un dépôt JavaScript ; hors du cœur data/IA, et à vérifier sur le site officiel puisque le README est vide.

