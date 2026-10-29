---
schema: 1
depot: haskell/haskell-language-server
source_readme_sha: bfaecd87fe72457f
ecrite_le: 2026-10-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# haskell/haskell-language-server

> Serveur de langage (LSP) officiel de Haskell, pour les développeurs Haskell dans leur éditeur.

## Le problème
Sans serveur LSP, l'éditeur n'offre ni complétion ni diagnostics pour Haskell.

## Ce que ça fait vraiment
Le README ne contient qu'une phrase et une table des matières (Features, Installation, GHC supportés, Configuration, Troubleshooting, Contributing, Components). Le détail est dans la documentation externe : non documenté ici.

## Comment c'est branché
```mermaid
flowchart LR
  A[Editeur] --> B[haskell-language-server]
  B --> C[GHC]
```
Schéma déduit de la définition d'un LSP, pas d'un diagramme fourni.

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Gratuit. 580 issues ouvertes. Versions de GHC supportées à vérifier dans la doc.

## Ce que ce n'est pas
Pas un compilateur ni un outil de build. README trop court pour juger le reste.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu écris du Haskell : aucun lien avec un pipeline data / IA.

