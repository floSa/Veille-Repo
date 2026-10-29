---
schema: 1
depot: Homebrew/homebrew-cask
source_readme_sha: be93b7f6ae5410f1
ecrite_le: 2026-10-29
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# Homebrew/homebrew-cask

> Extension de Homebrew qui installe en une commande des applications prêtes à l'emploi sur macOS et Linux.

## Le problème
Installer une application macOS exige de télécharger un fichier, l'ouvrir et la glisser dans Applications, à la main.

## Ce que ça fait vraiment
Fournit des « casks » : des recettes d'installation pour applications graphiques, outils en ligne de commande, polices, plugins et autres artefacts distribués par leurs éditeurs. La commande `brew install` télécharge, vérifie et place l'application, par exemple dans /Applications. Les nouvelles recettes arrivent par pull request, pas par issue.

## Comment c'est branché
```mermaid
flowchart LR
  U["Utilisateur"] --> B["brew install"]
  B --> C["Recette cask"]
  C --> T["Téléchargement chez l'éditeur"]
  T --> V["Vérification"]
  V --> A["/Applications"]
```

## Essayer
```bash
brew install alfred
brew update-reset && brew update
```

## Coût et pièges
Gratuit, Homebrew déjà installé. En cas de problème, le README demande d'exécuter `brew update-reset && brew update` avant toute issue, sinon elle peut être fermée sans relecture. Les erreurs courantes listées : curl, permission refusée, somme de contrôle invalide.

## Ce que ce n'est pas
Pas un dépôt d'applications : les logiciels viennent de leurs éditeurs et ne sont pas hébergés ici. Les demandes de nouveau cask via issue sont fermées.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer comme sujet de veille : outil de poste macOS/Linux déjà connu de quiconque utilise Homebrew, sans lien direct avec le travail data/IA.

