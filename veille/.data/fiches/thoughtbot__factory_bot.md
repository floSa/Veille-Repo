---
schema: 1
depot: thoughtbot/factory_bot
source_readme_sha: 9145d044c08c943d
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# thoughtbot/factory_bot

> Remplaçant des fixtures pour tests Ruby, avec stratégies de construction multiples et héritage.

## Le problème
Les fixtures figées sont rigides et difficiles à faire évoluer dans une suite de tests.

## Ce que ça fait vraiment
On déclare des fabriques d'objets avec un DSL (traits, séquences, callbacks, héritage). À l'usage, on choisit une stratégie : instance sauvée, non sauvée, hash d'attributs ou objet simulé. Un linter vérifie les définitions.

## Comment c'est branché
```mermaid
flowchart TD
  A["Tests / RSpec"] --> B["Public DSL API"]
  B --> C["Factory Definition & Registry"]
  C --> D["Attribute & Sequence"]
  C --> E["Build Strategies"]
  E --> F["Callbacks"]
```

## Essayer
```bash
bundle add factory_bot
gem install factory_bot
```

## Coût et pièges
Gratuit. Pour Rails, il faut le gem séparé factory_bot_rails. Aucune clé ni service.

## Ce que ce n'est pas
Ce n'est pas un générateur de données de test aléatoires ni un outil de données synthétiques pour l'IA : il construit des objets Ruby pour des tests.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : bibliothèque de tests Ruby, sans usage dans un flux data/IA en Python.

