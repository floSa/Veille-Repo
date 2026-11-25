---
schema: 1
depot: sendgrid/sendgrid-ruby
source_readme_sha: 18984c5da9f09a65
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [clé d'API, compte à créer]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# sendgrid/sendgrid-ruby

> Bibliothèque Ruby officielle de l'API web v3 de Twilio SendGrid pour envoyer des courriels.

## Le problème
Envoyer des courriels transactionnels depuis Ruby sans écrire soi-même les appels HTTP de l'API.

## Ce que ça fait vraiment
Un client à interface fluide appelle tous les endpoints v3 avec une clé d'API. Des classes Mail, Personalization, Email et Content construisent la charge utile d'envoi. Des assistants traitent le courrier entrant, vérifient les webhooks et lisent les statistiques.

## Comment c'est branché
```mermaid
flowchart TD
  A["sendgrid-ruby.rb"] --> B["sendgrid.rb"]
  B --> C["base_interface.rb"]
  D["mail.rb"] --> C
  E["personalization.rb"] --> D
  F["email.rb"] --> D
  G["content.rb"] --> D
```

## Essayer
```bash
gem install sendgrid-ruby
```
```ruby
sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
```

## Coût et pièges
Le service SendGrid démarre au niveau gratuit, avec une clé d'API à protéger. Ruby 2.4 ou plus est requis (sauf 2.6.0) ; Ruby n'existe pas dans la liste des prérequis.

## Ce que ce n'est pas
Pas un serveur de courriel : c'est un client d'un service tiers.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : client Ruby d'un service d'envoi, sans rapport avec le travail data, IA ou MLOps.

