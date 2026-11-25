---
schema: 1
depot: RubyMoney/money
source_readme_sha: 016a15939962c945
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# RubyMoney/money

> Bibliothèque Ruby pour manipuler des montants et des devises sans erreur d'arrondi flottant.

## Le problème
Stocker de l'argent en flottants fausse les calculs ; convertir et formater selon la devise est fastidieux.

## Ce que ça fait vraiment
Classe `Money` qui stocke des entiers en cents, classe `Money::Currency` (ISO 4217), arithmétique, comparaisons, conversion via une « banque » de taux (mémoire par défaut, magasins personnalisés ActiveRecord ou Redis), arrondis configurables, formatage localisé via I18n. Des gems tiers fournissent les taux en ligne.

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["Caller"] --> B["Money API"]
  B --> C["Currency"]
  B --> D["Exchange Bank"]
  B --> E["Locale Backend"]
  D --> F["Rate Store"]
  E --> G["I18n"]
```

## Essayer
```bash
gem install money
```
```ruby
require 'money'
Money.from_cents(1000, "USD").format  # => "$10.00"
```

## Coût et pièges
Gratuit, Ruby requis (non listé dans les prérequis : mettre aucun). UTF-8 obligatoire. Les taux de change ne sont pas fournis : à toi de les alimenter. Le comportement de localisation par défaut est déprécié.

## Ce que ce n'est pas
Pas un client de taux de change en direct, ni un analyseur de chaînes (voir monetize).

## Alternatives
monetize pour parser des chaînes ; money-rails pour Rails.

## Pour toi
À ignorer : bibliothèque Ruby, sauf si tu maintiens un backend Ruby manipulant des devises.

