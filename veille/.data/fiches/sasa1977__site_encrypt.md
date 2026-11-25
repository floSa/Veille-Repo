---
schema: 1
depot: sasa1977/site_encrypt
source_readme_sha: 13bbef6b572fb837
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# sasa1977/site_encrypt

> Obtient et renouvelle automatiquement les certificats Let's Encrypt d'un site Elixir, sans processus externe.

## Le problème
Un petit site Elixir sans proxy inverse doit gérer lui-même ses certificats HTTPS et leur renouvellement.

## Ce que ça fait vraiment
Un endpoint Phoenix s'appuie sur `site_encrypt.ex` pour lancer une certification périodique, par le client ACME natif ou par Certbot ; un serveur ACME local sert aux tests. Les certificats sont stockés dans un dossier à fixer hors du dossier de déploiement.

## Comment c'est branché
```mermaid
flowchart TD
  A["phoenix/endpoint.ex"] --> B["site_encrypt.ex"]
  B --> C["certification/periodic.ex"]
  C --> D["certification/native.ex"]
  C --> E["certification/certbot.ex"]
  D --> F["acme/client.ex"]
  F --> G["acme/server.ex"]
```

## Essayer
```bash
# mix.exs : ajouter {:site_encrypt, "~> 0.7"}, puis
mix deps.get
iex -S mix phx.server
```

## Coût et pièges
Gratuit. Le port 80 doit être joignable depuis Internet pour Let's Encrypt, et ses limites de débit s'appliquent. Le client natif est jeune ; Certbot (>= 0.31) est plus stable mais doit être installé. L'API n'est pas stable.

## Ce que ce n'est pas
Pas un outil pour d'autres langages ni pour des sites derrière un proxy.

## Alternatives
Certbot, utilisable comme client à la place du client natif.

## Pour toi
À ignorer : utile seulement à qui exploite un site Elixir/Phoenix ; hors périmètre data/IA/MLOps.

