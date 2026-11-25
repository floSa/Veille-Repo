---
schema: 1
depot: intercom/intercom-rails
source_readme_sha: 0096a583be855fd2
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# intercom/intercom-rails

> Gem Rails qui installe la messagerie Intercom dans une appli en insérant le script automatiquement.

## Le problème
Brancher le widget Intercom (identifiants, sécurité, données utilisateur) dans chaque page Rails à la main.

## Ce que ça fait vraiment
Un railtie ajoute un filtre qui insère la balise script avant la fin du body, construite par `script_tag.rb` depuis la config et l'utilisateur courant. Il gère données personnalisées, entreprises, mode chiffré (HMAC ou JWT) et fermeture de session (`ShutdownHelper`).

## Comment c'est branché
```mermaid
flowchart TD
  A["intercom-rails.rb"] --> B["railtie.rb"]
  B --> D["auto_include_filter.rb"]
  D --> E["script_tag.rb"]
  E --> C["config.rb"]
  E --> G["proxy/user.rb"]
  E --> H["encrypted_mode.rb"]
```

## Essayer
```bash
bundle install
rails generate intercom:config YOUR-APP-ID
bundle exec rspec spec/
```

## Coût et pièges
Compte Intercom requis (offre payante, non détaillée). Cookies de première partie : il faut fermer la session Intercom à la déconnexion. Le secret d'API ne doit pas être versionné.

## Ce que ce n'est pas
Pas l'accès à l'API REST d'Intercom : pour cela, la gem `intercom`.

## Alternatives
La gem `intercom`, citée dans le README pour l'API REST.

## Pour toi
Ignorer : intégration d'un service de support client dans Rails, hors sujet data/IA/MLOps.

