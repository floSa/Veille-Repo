---
schema: 1
depot: deepflowio/deepflow
source_readme_sha: dea833b27e264f19
ecrite_le: 2026-09-30
nature: outil
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# deepflowio/deepflow

> Observabilité sans instrumentation par eBPF pour applications cloud-native et IA, avec traces, métriques et profilage.

## Le problème
Instrumenter chaque service pour obtenir traces et métriques est lourd, et laisse des zones aveugles (passerelles, bases, DNS).

## Ce que ça fait vraiment
Un agent par nœud collecte via eBPF et capture de paquets les flux, protocoles L7, traces distribuées et profils (CPU, mémoire, GPU). Un serveur dans le cluster gère les agents, injecte les étiquettes (SmartEncoding), ingère les données dans ClickHouse et expose SQL, PromQL et des interfaces compatibles Prometheus, OpenTelemetry, SkyWalking et Pyroscope. Trois éditions : Community, Enterprise, Cloud (bêta).

## Comment c'est branché
```mermaid
flowchart LR
  A["trident.rs agent"] --> B["ebpf_dispatcher.rs"]
  B --> C["flow_map.rs"]
  C --> D["protocol_logs.rs"]
  D --> E["ingester.go"]
  E --> F["ClickHouse"]
  F --> G["query.go"]
```

## Essayer
Aucune commande documentée dans le README fourni : il renvoie à la documentation pour l'installation et à une page pour compiler `deepflow-agent`.

## Coût et pièges
Édition Community gratuite ; Enterprise et Cloud sont des offres commerciales. L'agent fonctionne sur les nœuds Linux (eBPF) et le serveur exige un cluster Kubernetes.

## Ce que ce n'est pas
Pas un outil de monitoring de modèles : il observe le réseau et les services, pas la qualité des prédictions.

## Alternatives
- Prometheus, OpenTelemetry, SkyWalking, Pyroscope : écosystèmes avec lesquels il s'intègre.

## Pour toi
À surveiller : intéressant pour diagnostiquer la latence de services d'inférence sans toucher au code, à condition d'avoir la maîtrise du noyau et du cluster.

