---
schema: 1
depot: github/explore
source_readme_sha: b6452113ea4b5eb3
ecrite_le: 2026-10-27
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# github/explore

> Contenu communautaire des pages Topics et Collections de GitHub, pour qui veut proposer une édition.

## Le problème
Les pages Topics et Collections de GitHub ont besoin d'un lieu ouvert pour être éditées et relues.

## Ce que ça fait vraiment
Dépôt de fichiers Markdown (`topics/`, `collections/`) rendus par Jekyll/Liquid en site statique. Des tests de lint (rubocop) et workflows GitHub Actions vérifient le format ; le build produit `_site/` publié sur GitHub Pages. Pas de logiciel à exécuter pour un utilisateur.

## Comment c'est branché
```mermaid
flowchart LR
  MD[Content Topics/Collections] --> GIT[Git Repository]
  GIT --> LINT[Lint Workflow]
  GIT --> TEST[Test Workflow]
  GIT --> JB[Jekyll Build Workflow]
  JB --> SITE[_site/ Static Assets]
```

## Essayer
```bash
bundle install
bundle exec rubocop
```

## Coût et pièges
Gratuit ; Ruby et Bundler requis pour les tests locaux. Contenu sous CC-BY-4.0.

## Ce que ce n'est pas
Ce n'est pas un outil ni une bibliothèque : c'est le contenu éditorial d'un site GitHub.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu veux corriger une page de topic : rien à adopter techniquement.

