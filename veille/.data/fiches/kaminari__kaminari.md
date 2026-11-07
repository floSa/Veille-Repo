---
schema: 1
depot: kaminari/kaminari
source_readme_sha: 4bdd12fabe8bd40a
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# kaminari/kaminari

> Gem Ruby de pagination par scopes pour applications Rails et autres frameworks.

## Le problème
Paginer des enregistrements et afficher les liens de pages sans polluer les classes de base.

## Ce que ça fait vraiment
Ajoute les scopes `page`, `per` et `padding` aux modèles et un helper `paginate` qui rend des liens HTML via des partials surchargeables. Gère i18n, génération de vues et de configuration, mode `without_count` et tableaux génériques. Trois gems : kaminari-core, kaminari-activerecord, kaminari-actionview. Adaptateurs pour Mongoid, Sinatra, Grape.

## Comment c'est branché
```mermaid
flowchart TB
    Entry["lib/kaminari.rb"] --> Core["kaminari-core"]
    Entry --> AR["kaminari-activerecord"]
    Entry --> AV["kaminari-actionview"]
    AR --> Model["Modèle hôte (User.page)"]
    AV --> View["Vue hôte (paginate @users)"]
```

## Essayer
```sh
bundle
rails g kaminari:config
rails g kaminari:views default
```
Ajouter `gem 'kaminari'` au Gemfile.

## Coût et pièges
Aucun coût. Pas d'`order` ajouté automatiquement : le préciser pour éviter des résultats instables.

## Ce que ce n'est pas
Pas un outil data/IA : pagination de vues web Ruby.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : uniquement utile si tu écris une application Rails, ce qui sort de ton profil.

