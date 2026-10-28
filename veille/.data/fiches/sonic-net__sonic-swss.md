---
schema: 1
depot: sonic-net/sonic-swss
source_readme_sha: e1b3826eb0e5f56a
ecrite_le: 2026-10-28
nature: service
deploiement: compilation
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# sonic-net/sonic-swss

> Service d'état des commutateurs SONiC, couche base de données entre applications réseau et matériel.

## Le problème
Les applications réseau et le matériel de commutation doivent partager un état cohérent sans dépendre d'une puce en particulier.

## Ce que ça fait vraiment
SWSS est un ensemble de démons qui lisent la configuration et les routes (FPM/BGP), synchronisent liens, voisins, FDB et interfaces d'équipe via les bases Redis, puis les orchestrateurs poussent les objets vers le matériel via l'API SAI. Un service Rust collecte compteurs et télémétrie IPFIX. L'installation passe par des paquets Debian et une compilation avec autotools.

## Comment c'est branché
```mermaid
flowchart LR
  B[BGP control plane] --> R[FPM route sync routesync.cpp]
  R --> A[Application database]
  A --> O[Orchestration daemon orchdaemon.cpp]
  O --> RO[Routes and neighbors routeorch.cpp]
  RO --> H[SAI switch hardware]
```

## Essayer
```
./autogen.sh
./configure
make && sudo make install
```
Les dépendances (`redis-server`, `libhiredis`, `libzmq`, paquets SONiC) s'installent d'abord, détail dans le README.

## Coût et pièges
Gratuit, mais l'installation est lourde : paquets Debian spécifiques, dépendances parfois introuvables sur Ubuntu 20.04, et des commandes qui peuvent supprimer des paquets installés. Licence présente mais non identifiée par GitHub. 831 issues ouvertes.

## Ce que ce n'est pas
Pas un système d'exploitation complet de commutateur : c'est une partie de SONiC.

## Alternatives
Le README ne nomme pas d'alternative.

## Pour toi
Ignorer : infrastructure de commutateurs réseau, sans rapport avec la data ou l'IA.

