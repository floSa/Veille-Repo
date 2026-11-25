---
schema: 1
depot: Shopify/ruby-lsp
source_readme_sha: ad1adb51dc9638dc
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [matière insuffisante]
verdict: ignorer
---

# Shopify/ruby-lsp

> Serveur LSP pour Ruby qui apporte complétion, définitions et diagnostics aux éditeurs.

## Le problème
Les éditeurs ont besoin d'un serveur de langage moderne pour Ruby (navigation, complétion, formatage).

## Ce que ça fait vraiment
Gemme Ruby et extension VS Code (TypeScript). D'après l'architecture : le serveur reçoit les requêtes LSP, des écouteurs par fonctionnalité les traitent, un indexeur (lib/ruby_indexer, avec RBS) fournit les symboles, des constructeurs de réponse renvoient le résultat. Intégration RuboCop. README très court.

## Comment c'est branché
```mermaid
flowchart TD
  ED["Éditeur / extension VS Code"] --> CS["Core Server lib/ruby_lsp"]
  CS --> RQ["Requests et listeners"]
  RQ --> IX["Ruby Indexer"]
  IX --> RB["Response Builders"]
  RB --> ED
  CS --> RC["Intégration RuboCop"]
```

## Essayer
```bash
# Aucune commande documentée : installer l'extension Ruby LSP depuis le marketplace VS Code.
```

## Coût et pièges
Gratuit, mais il faut Ruby installé. Les autres éditeurs passent par le guide EDITORS.

## Ce que ce n'est pas
Pas un outil pour Python ni pour la data : strictement l'écosystème Ruby.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : sans Ruby dans ta stack data/IA, aucun intérêt.

