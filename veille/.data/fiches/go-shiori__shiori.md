---
schema: 1
depot: go-shiori/shiori
source_readme_sha: f7e1e6524b1e4aba
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# go-shiori/shiori

> Gestionnaire de favoris auto-hébergé en Go, clone simple de Pocket, en CLI ou web.

## Le problème
Les services de favoris « lire plus tard » ferment ou gardent tes données ; il faut une alternative locale et portable.

## Ce que ça fait vraiment
Ajout, édition, suppression et recherche de favoris en ligne de commande ou via une interface web.
Import/export au format Netscape, import depuis Pocket.
Archive hors ligne du contenu lisible des pages par défaut.
Binaire unique, bases SQLite, PostgreSQL, MariaDB ou MySQL ; extension navigateur en bêta.

## Comment c'est branché
```mermaid
graph LR
  W[Web Interface] --> H[HTTP Server]
  C[CLI Interface] --> B[Bookmark Management]
  E[Web Extension] --> H
  H --> B
  B --> A[Archive Management]
  B --> D[Database Abstraction]
  D --> S[SQLite]
```

## Essayer
Aucune commande dans le README : il renvoie au dossier docs.

## Coût et pièges
Gratuit, MIT ; rien d'autre de documenté dans le README.

## Ce que ce n'est pas
Pas un lecteur RSS ni un outil de veille collaboratif.
L'extension navigateur est en bêta.

## Alternatives
Aucune alternative nommée dans le README (Pocket est l'outil imité, pas une alternative).

## Pour toi
À ignorer : sans rapport avec la data ou l'IA, sauf à vouloir archiver localement des articles de veille.
