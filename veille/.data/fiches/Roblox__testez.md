---
schema: 1
depot: Roblox/testez
source_readme_sha: f2a5ec61a2cd61a3
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [archivé, dernier commit ancien, matière insuffisante]
verdict: ignorer
---

# Roblox/testez

> Framework de test Lua de style BDD pour Roblox, exécutable dans Roblox ou dans Lemur.

## Le problème
Tester du code Lua Roblox (apps, scripts, plugins Studio) avec une syntaxe lisible.

## Ce que ça fait vraiment
Syntaxe `describe`, `it` et `expect`, inspirée de RSpec, busted, Mocha et Chai. Une API lance tous les tests en un appel, une autre expose chaque étape. Le README est court.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Fichiers de test"] --> B["describe / it / expect"]
  B --> C["TestEZ"]
  C --> D["Roblox"]
  C --> E["Lemur (CI)"]
```

## Essayer
```bash
# Aucune commande documentée dans le README.
```

## Coût et pièges
Gratuit. Archivé, dernier push en mars 2024. Le besoin réel est Roblox.

## Ce que ce n'est pas
Pas un framework de test général : lié à Roblox Lua.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : hors périmètre data/IA, archivé et peu documenté.

