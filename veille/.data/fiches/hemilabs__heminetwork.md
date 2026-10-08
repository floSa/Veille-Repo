---
schema: 1
depot: hemilabs/heminetwork
source_readme_sha: 33d7afaabc617d3a
ecrite_le: 2026-10-08
nature: service
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# hemilabs/heminetwork

> Démons Go du réseau Hemi (L2 EVM ancré sur Bitcoin) : nœud Bitcoin, finalité, mineur PoP, proxy RPC.

## Le problème
Un L2 compatible EVM qui veut hériter de la sécurité de Bitcoin a besoin de services pour lire Bitcoin, exposer la finalité et miner les preuves.

## Ce que ça fait vraiment
Quatre démons : `tbcd` (nœud Bitcoin personnalisé et embarquable), `bfgd` (information de finalité via API), `popmd` (mineur Proof-of-Proof avec portefeuille Bitcoin) et `hproxyd` (équilibrage de requêtes RPC vers les nœuds op-geth de Hemi). S'y ajoutent `btctool`, `hemictl` et `keygen`. Le nœud Hemi L2 est dans un autre dépôt.

## Comment c'est branché
```mermaid
graph TD
  TB["tbcd Daemon - tbcd.go"] --> SVC["Node Service - tbc.go"]
  SVC --> DB["Level Storage - level.go"]
  SVC --> API["Bitcoin RPC - tbcapi.go"]
  BF["bfgd Daemon - bfgd.go"] --> FIN["Finality Service - bfg.go"]
  PO["popmd Daemon - popmd.go"] --> PM["PoP Miner - popm.go"]
  HP["hproxyd Daemon - hproxyd.go"] --> RP["RPC Proxy - hproxy.go"]
```

## Essayer
```bash
git clone https://github.com/hemilabs/heminetwork.git
cd heminetwork
make deps
make install
```
Des images Docker existent : `hemilabs/bfgd`, `hemilabs/hproxyd`, `hemilabs/popmd`, `hemilabs/tbcd`.

## Coût et pièges
Go 1.26+, `git`, `make`. Faire tourner `tbcd` implique d'indexer Bitcoin (espace disque non précisé dans le README). Le mineur PoP manipule des clés Bitcoin.

## Ce que ce n'est pas
Pas le nœud Hemi complet (voir hemilabs/hemi-node). Pas un outil d'analyse de données blockchain prêt à l'emploi.

## Alternatives
- hemilabs/hemi-node : documentation et fichiers pour exécuter les nœuds L2.

## Pour toi
À ignorer : infrastructure blockchain, loin du profil data/IA/MLOps, sauf si tu travailles justement sur Hemi.

