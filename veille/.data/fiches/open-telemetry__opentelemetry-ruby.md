---
schema: 1
depot: open-telemetry/opentelemetry-ruby
source_readme_sha: fe6aa5c7ceb2db9f
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# open-telemetry/opentelemetry-ruby

> Client OpenTelemetry pour Ruby, destiné aux développeurs qui instrumentent leurs applications Ruby.

## Le problème
Une application Ruby sans instrumentation standard ne livre ni traces ni métriques exploitables par un outil d'observabilité.

## Ce que ça fait vraiment
C'est l'API et le SDK OpenTelemetry pour Ruby. Les bibliothèques d'instrumentation de gems courants (Rails, Rack, Sinatra) vivent dans un dépôt séparé, opentelemetry-ruby-contrib. Le projet suit la politique de versions d'OpenTelemetry : les signaux expérimentaux peuvent rester en 0.x.

## Comment c'est branché
```mermaid
flowchart TD
    A["Application Ruby"] --> B["opentelemetry-ruby : API et SDK"]
    C["opentelemetry-ruby-contrib"] --> B
    C --> D["Rails, Rack, Sinatra"]
    B --> E["Exportation vers un backend"]
```

## Essayer
```bash
# Aucune commande documentée dans le README : voir Getting Started (lien).
```

## Coût et pièges
Gratuit. Il faut un projet Ruby et un backend de collecte de ton choix ; l'installation (gem) n'est pas décrite dans le README.

## Ce que ce n'est pas
Ce n'est pas un backend d'observabilité : il produit la télémétrie, il ne la stocke pas. Les instrumentations sont ailleurs (contrib).

## Alternatives
- opentelemetry-ruby-contrib : pour les instrumentations de gems, complément indispensable.

## Pour toi
Ignorer sauf si tu as des services Ruby : la brique est solide côté communauté, mais Ruby n'est pas ton terrain data / MLOps.

