---
schema: 1
depot: typst/typst
source_readme_sha: ddaf0de156f6a442
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
---

# typst/typst

> Système de composition de documents par balisage, aussi puissant que LaTeX et plus simple à apprendre.

## Le problème
LaTeX est puissant mais difficile à apprendre, lent à compiler et avare en messages d'erreur clairs.

## Ce que ça fait vraiment
Le compilateur et sa CLI transforment un fichier `.typ` en PDF. Balisage léger, fonctions, scripts intégrés, mathématiques, bibliographie. Compilation incrémentale grâce à `comemo`, mode `watch`, requêtes sur le document, sorties paginées, HTML et paquets multi-fichiers.

## Comment c'est branché
```mermaid
flowchart LR
  U["CLI User"] --> D["CLI dispatcher"]
  D --> C["Compile/export"]
  C --> P["Syntax parser"]
  P --> E["Script evaluator"]
  E --> L["Paged layout"]
  L --> X["PDF export"]
```

## Essayer
```sh
typst compile file.typ
typst watch file.typ
typst fonts --font-path path/to/fonts
```

## Coût et pièges
Gratuit. L'éditeur en ligne collaboratif est un service distinct ; Tinymist est un serveur de langage communautaire. Les paquets des gestionnaires peuvent être en retard sur la dernière version.

## Ce que ce n'est pas
Pas un éditeur : le dépôt contient le compilateur et la CLI.

## Alternatives
LaTeX, cité comme référence que Typst vise à remplacer.

## Pour toi
À adopter : pertinent pour produire rapports et articles reproductibles depuis des scripts, avec des sorties générées par programme.

