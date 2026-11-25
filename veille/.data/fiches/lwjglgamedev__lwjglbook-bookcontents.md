---
schema: 1
depot: lwjglgamedev/lwjglbook-bookcontents
source_readme_sha: 7ec44fbd45e7f06c
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# lwjglgamedev/lwjglbook-bookcontents

> Livre en ligne sur le développement de jeux 3D avec LWJGL 3 en Java.

## Le problème
Les informations pour écrire un jeu 3D en OpenGL sont éparpillées, incomplètes ou trompeuses.

## Ce que ça fait vraiment
21 chapitres en Markdown, une annexe et un glossaire, avec une feuille de style PDF. Le code d'exemple et un livre sur Vulkan sont dans d'autres dépôts. Ce dépôt ne contient pas de code.

## Comment c'est branché
```mermaid
flowchart TD
  A["README.md"] --> B["SUMMARY.md"]
  B --> C["chapter-01.md"]
  C --> D["chapter-10.md"]
  D --> E["chapter-21.md"]
  E --> F["appendix-a.md"]
  G["book.json"] --> H["styles/pdf.css"]
```

## Essayer
```bash
# Aucune commande : le livre se lit en ligne
```

## Coût et pièges
Gratuit. Les anciennes URL gitbook.io sont désynchronisées. Licence absente.

## Ce que ce n'est pas
Pas un cours d'IA ou de calcul : un livre de développement de jeu en Java.

## Alternatives
- Le livre Vulkan du même auteur, cité dans le README.

## Pour toi
Ignorer : du graphisme 3D en Java, sans rapport avec data / IA / MLOps.

