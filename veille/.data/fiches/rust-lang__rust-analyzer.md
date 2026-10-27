---
schema: 1
depot: rust-lang/rust-analyzer
source_readme_sha: 12088386740a84f3
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# rust-lang/rust-analyzer

> Serveur de langage donnant à n'importe quel éditeur LSP l'IDE Rust : navigation, complétion, refactorings.

## Le problème
Écrire du Rust sans navigation sémantique ni complétion rend le travail lent, surtout avec macros et traits.

## Ce que ça fait vraiment
Charge le projet Cargo, analyse la syntaxe, développe les macros, déduit les types dans une base incrémentale, et répond aux requêtes LSP : définitions, références, complétion, refactorings, diagnostics (rustc, clippy), format (rustfmt). Extension VS Code fournie ; autres éditeurs via LSP.

## Comment c'est branché
```mermaid
flowchart LR
  Editor["VS Code extension"] --> LSP["Request loop"]
  LSP --> Load["Workspace loading"]
  Load --> Parser["Rust parser"]
  Parser --> DB["Incremental database"]
  DB --> HIR["HIR / Type analysis"]
  HIR --> IDE["IDE features"]
```

## Essayer
Aucune commande dans le README ; installation décrite sur rust-analyzer.github.io/book/installation.html.

## Coût et pièges
Gratuit. Peut consommer beaucoup de mémoire sur de gros projets (non documenté dans le README).

## Ce que ce n'est pas
Pas un compilateur ni un outil de build. Ne remplace pas rustc, qu'il appelle pour les diagnostics.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : indispensable si tu écris du Rust (par exemple Burn, ast-grep) ; inutile sinon.

