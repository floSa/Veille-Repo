---
schema: 1
depot: openziti/zrok
source_readme_sha: d7d812c8eae75a5d
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [compte à créer, service tiers]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# openziti/zrok

> Partage de services web, fichiers et ports TCP/UDP via un réseau zero-trust, sans toucher au pare-feu.

## Le problème
Exposer un service local ou un dossier à quelqu'un d'autre sans ouvrir de port ni monter un VPN.

## Ce que ça fait vraiment
Le CLI `zrok` crée des partages publics ou privés. Un contrôleur (API REST) enregistre le partage, un agent se connecte via OpenZiti, et des backends (proxy public, dossier « drive », tunnels TCP/UDP) servent le trafic. OAuth et métriques d'usage (InfluxDB) sont présents. Un SDK Go permet d'embarquer le partage.

## Comment c'est branché
```mermaid
flowchart LR
    CLI["zrok CLI"] --> API["REST API Server"]
    API --> C["Controller Runtime"]
    C --> ZN["OpenZiti Network"]
    ZN --> B["Endpoint Backends"]
    B --> L["Local Resource"]
    B --> O["OAuth Router"]
```

## Essayer
```bash
zrok invite
zrok enable
zrok share public localhost:8080
zrok share public --backend-mode drive ~/Documents
zrok share private localhost:3000
```

## Coût et pièges
Le service zrok.io est gratuit ; un compte est requis. Auto-hébergement possible (binaire unique). Le README parle d'« enterprise reliability » sans preuve.

## Ce que ce n'est pas
Pas un simple ngrok : le partage privé suppose que l'autre personne utilise aussi zrok.

## Alternatives
- OpenZiti : la plateforme sur laquelle zrok est construit.

## Pour toi
À surveiller : pratique pour exposer un notebook ou une démo de modèle sans réseau, en gardant à l'esprit la dépendance à zrok.io si tu n'auto-héberges pas.

