---
schema: 1
depot: paradigmxyz/centaur
source_readme_sha: 0c52c1da437be704
ecrite_le: 2026-10-05
nature: service
deploiement: autre
prerequis: [service tiers, compte à créer, clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# paradigmxyz/centaur

> Plateforme auto-hébergée d'agents partagés pour une équipe, pilotée depuis Slack avec sandbox Kubernetes.

## Le problème
Chaque personne bricole son agent en local, sans outils partagés ni traçabilité, et donne ses clés d'API à l'agent.

## Ce que ça fait vraiment
Un mot-clé dans Slack (ou l'API) déclenche une conversation exécutée dans un sandbox Kubernetes isolé, avec shell, git, Python, Node. Harnais au choix (Amp, Claude Code, Codex). Outils Python partagés, workflows durables (sleep, reprise, agents enfants), état stocké dans Postgres. Un proxy sortant, iron-proxy, injecte les identifiants : le sandbox ne voit que des valeurs factices.

## Comment c'est branché
```mermaid
flowchart LR
  S["Slack bot"] --> A["Centaur API (routes.rs)"]
  A --> M["Sandbox manager"]
  M --> H["Harness server"]
  H --> T["Outils partagés"]
  H --> P["Credential proxy"]
  A --> D["Postgres"]
```

## Essayer
```bash
brew install just
just bootstrap-secrets
just up
```

## Coût et pièges
Secrets requis (1Password, Slack, clés de signature). Kubernetes (k3s suffit en local). Coût des harnais à ta charge. Le README mentionne un chemin d'extraction local propre à l'auteur. 108 issues ouvertes.

## Ce que ce n'est pas
Pas un produit clé en main : l'installation est lourde et la licence n'est pas identifiée. Le README cite des limites connues, dont un coffre d'identifiants partagé.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : architecture d'isolation et de gestion des identifiants intéressante pour des agents d'équipe, mais jeune, lourde et sans licence claire.

