---
schema: 1
depot: seankross/the-unix-workbench
source_readme_sha: eac8de687961c98e
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien, matière insuffisante]
verdict: adopter
---

# seankross/the-unix-workbench

> Livre d'introduction à Unix pour débutants, publié en ligne, de Sean Kross.

## Le problème
Les débutants en données ou en développement manquent de base sur le shell, les fichiers et les scripts Bash.

## Ce que ça fait vraiment
Le README ne dit que « An introduction to Unix for everyone » et la licence CC0. D'après l'architecture, c'est un livre bookdown : des chapitres Rmd (Unix, programmation Bash, premiers projets) assemblés via _bookdown.yml et _output.yml, bibliographie book.bib, rendu HTML dans docs/ pour GitHub Pages.

## Comment c'est branché
```mermaid
flowchart TD
  I["index.Rmd"] --> BY["_bookdown.yml"]
  C1["01-What-is-Unix.Rmd"] --> BY
  C5["05-Bash-Programming.Rmd"] --> BY
  BB["book.bib"] --> OY["_output.yml"]
  BY --> DI["docs/index.html"]
  OY --> DI
```

## Essayer
```bash
# Aucune commande documentée dans le README :
# lire le livre rendu dans docs/ (GitHub Pages).
```

## Coût et pièges
Gratuit. Dernier push en août 2024 : contenu possiblement un peu daté. Beaucoup d'issues ouvertes (381).

## Ce que ce n'est pas
Pas un outil ni un cours interactif. Pas un livre avancé de ligne de commande.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter comme lecture de base si tu veux consolider le shell, domaine libre (CC0), mais README trop mince pour juger de la qualité.

