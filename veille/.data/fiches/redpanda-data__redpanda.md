---
schema: 1
depot: redpanda-data/redpanda
source_readme_sha: e8e3d3105aee6c86
ecrite_le: 2026-11-07
nature: service
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: surveiller
---

# redpanda-data/redpanda

> Plateforme de streaming de données compatible Kafka, sans ZooKeeper ni JVM, pour équipes data et plateforme.

## Le problème
Exploiter Kafka est lourd : ZooKeeper, JVM, nombreux composants à faire tenir ensemble.

## Ce que ça fait vraiment
Un broker C++ compatible avec l'API Kafka, avec stockage hiérarchisé, schema registry et transformations WASM. L'outil en ligne de commande `rpk` (Go) pilote topics, cluster, sécurité, cloud, connecteurs et transformations via les clients Kafka et Admin.

## Comment c'est branché
```mermaid
flowchart TD
  op(("Opérateur")) --> rpk["rpk : main.go"]
  rpk --> root["Routeur : root.go"]
  root --> topic["topic.go"]
  topic --> kafka["Client Kafka : client_franz.go"]
  kafka --> broker["Broker Redpanda"]
  broker --> wasm["Moteur WASM : engine.h"]
```

## Essayer
```bash
curl -1sLf 'https://linux.pkg.redpanda.com/setup-redpanda.deb.sh' | sudo -E bash
sudo apt-get install redpanda
# macOS (Docker requis)
brew install redpanda-data/tap/redpanda && rpk container start
```

## Coût et pièges
Gratuit via les paquets fournis ; Docker obligatoire sur macOS. Compilation par Bazel lourde. Les versions candidates ne sont pas pour la production.

## Ce que ce n'est pas
Pas une simple bibliothèque : c'est un serveur à exploiter. La licence est absente côté catalogue, à lire dans le dépôt avant usage.

## Alternatives
Apache Kafka : référence dont il se veut compatible, avec un écosystème plus ancien.

## Pour toi
À surveiller : pertinent si tu alimentes des pipelines en flux, mais la licence non déclarée impose une vérification.

