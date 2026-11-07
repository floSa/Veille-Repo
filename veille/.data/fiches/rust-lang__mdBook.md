---
schema: 1
depot: rust-lang/mdBook
source_readme_sha: 25d6f218da18298d
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence copyleft, matière insuffisante]
verdict: surveiller
---

# rust-lang/mdBook

> Outil qui transforme des fichiers Markdown en livre en ligne, pour documenter un projet.

## Le problème
Publier une documentation structurée en pages navigables sans monter un site à la main.

## Ce que ça fait vraiment
D'après le README, mdBook crée des livres en ligne à partir de fichiers Markdown. Les fonctionnalités, l'installation et l'usage sont décrits dans le guide utilisateur, qui sert aussi de démonstration. Le README ne dit rien de plus.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  md["Fichiers Markdown"] --> mdbook["mdBook"]
  mdbook --> livre["Livre en ligne"]
```

## Essayer
Aucune commande documentée dans le README : tout est renvoyé au guide utilisateur.

## Coût et pièges
Gratuit (licence MPL-2.0). Le mode d'installation n'est pas dans le README : le besoin réel (outil écrit en Rust) n'y est pas décrit, non documenté ici.

## Ce que ce n'est pas
Pas un générateur de site généraliste ni un wiki. Le README est trop court pour juger les limites : à lire dans le guide.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour publier la doc d'un projet data ou MLOps, mais rien dans ce README ne permet d'aller plus loin que « Markdown vers livre ».

