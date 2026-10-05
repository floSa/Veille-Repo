---
schema: 1
depot: tilt-dev/tilt
source_readme_sha: 30e42a2da76bcf0c
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# tilt-dev/tilt

> Orchestrateur de développement local pour applications multi-services sur Kubernetes ou Docker Compose.

## Le problème
Entre un changement de code et un nouveau processus, il faut rebuild, redéployer et suivre les logs de nombreux services.

## Ce que ça fait vraiment
`tilt up` évalue un `Tiltfile`, surveille les fichiers, construit les images ou commandes, met à jour Kubernetes ou Compose et expose l'état et les logs dans un HUD web local.

## Comment c'est branché
```mermaid
flowchart LR
  A["up.go"] --> B["tiltfile.go"]
  B --> C["engine_state.go"]
  C --> D["buildcontroller.go"]
  D --> E["Docker / Compose / Kubernetes client.go"]
  C --> F["HUD server.go"]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash
tilt up
```

## Coût et pièges
Gratuit. Il faut un cluster ou Docker Compose. Installation par script piped to bash.

## Ce que ce n'est pas
Pas un outil de déploiement en production : le slogan dit « Kubernetes for Prod, Tilt for Dev ».

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour itérer sur des services d'inférence en local sur Kubernetes, sans intérêt si tu n'as pas de microservices.

