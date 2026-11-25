---
schema: 1
depot: hashicorp/vault-ruby
source_readme_sha: 441f7007f0d07087
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# hashicorp/vault-ruby

> Client Ruby officiel pour parler à un serveur HashiCorp Vault : secrets, jetons et authentification.

## Le problème
Appeler l'API HTTP de Vault à la main, avec TLS, authentification et reprises, est répétitif.

## Ce que ça fait vraiment
Le gem expose un singleton `Vault` et des clients indépendants. Il couvre les secrets KV v1 et v2, le système (montages, politiques, état de scellement), les jetons, l'encapsulation de réponse, la transformation et plusieurs méthodes d'authentification (LDAP, AppRole, GitHub, AWS). `with_retries` relance sur erreurs réseau ou HTTP.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  A["lib/vault.rb"] --> B["client.rb"]
  A --> C["configurable.rb"]
  B --> D["request.rb"]
  D --> E["errors.rb"]
  B --> F["api.rb"]
  F --> G["api/kv.rb, logical.rb, sys.rb, auth.rb"]
```

## Essayer
```bash
gem install vault
```

## Coût et pièges
Gratuit, mais il faut un serveur Vault à héberger. Ruby 3.1 ou plus. La licence est MPL-2.0, à copyleft par fichier.

## Ce que ce n'est pas
Ce n'est pas un serveur Vault. La branche master peut contenir des fonctions non publiées.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : seulement si tu as du Ruby ; pour les secrets d'un pipeline MLOps, un client dans ton langage suffit.

