---
schema: 1
depot: koreader/contrib
source_readme_sha: 479083d6e09d45be
ecrite_le: 2026-11-25
nature: liste
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# koreader/contrib

> Recueil de plugins KOReader peu courants, déclarés en sous-modules git.

## Le problème
Des plugins utiles à une minorité n'ont pas leur place dans le code principal de KOReader.

## Ce que ça fait vraiment
Chaque plugin est un sous-module (`.gitmodules`) pointant vers un dépôt amont : `findhistory`, `loc`, `provider-old-exporters` (flomo, memos), `readwisereader`. Le README prévient qu'ils peuvent cesser de fonctionner après une mise à jour de KOReader.

## Comment c'est branché
```mermaid
flowchart TD
  R["README.md"] --> G[".gitmodules"]
  G --> F["findhistory.koplugin/main.lua"]
  G --> L["loc.koplugin/main.lua"]
  G --> P["provider-old-exporters.koplugin/main.lua"]
  L --> A["loc.koplugin/locapi.lua"]
  P --> M["flomo.lua / memos.lua"]
```

## Essayer
```bash
# Aucune commande documentée dans le README.
```

## Coût et pièges
Gratuit, mais chaque plugin a sa propre licence et son propre état ; licence AGPL-3.0 pour le dépôt. En cas de panne après mise à jour, signaler sur le dépôt amont.

## Ce que ce n'est pas
Pas un catalogue garanti : aucune compatibilité promise avec toutes les versions de KOReader.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : extensions pour liseuse électronique, hors périmètre data / IA / MLOps.

