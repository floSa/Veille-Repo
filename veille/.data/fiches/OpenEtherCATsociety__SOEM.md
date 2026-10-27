---
schema: 1
depot: OpenEtherCATsociety/SOEM
source_readme_sha: 0c4ea823b01ee86e
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# OpenEtherCATsociety/SOEM

> Bibliothèque C légère pour écrire un maître EtherCAT temps réel sur systèmes embarqués, Linux ou Windows.

## Le problème
Communiquer avec des esclaves EtherCAT (variateurs, E/S industrielles) exige une pile protocolaire temps réel.

## Ce que ça fait vraiment
Bibliothèque (pas une application) : interface publique `soem.h`, opérations maître, configuration des esclaves, horloges distribuées, services CoE, EoE, FoE et SoE, couche d'abstraction système (`osal.h`) et pilotes de carte réseau pour Linux, Windows et RTK. D'après le code, certains liens entre étapes de protocole ne sont pas détaillés.

## Comment c'est branché
```mermaid
graph LR
  A[MainDevice application] --> API[SOEM interface - soem.h]
  API --> M[Master operations - ec_main.c]
  M --> CFG[Slave configuration - ec_config.c]
  M --> COE[CoE services - ec_coe.c]
  M --> N[NIC driver - nicdrv.c]
  N --> S[EtherCAT slaves]
```

## Essayer
Aucune commande dans le README : voir https://docs.rt-labs.com/soem.

## Coût et pièges
Gratuit, mais la licence est présente sans être identifiée par GitHub : à lire avant usage. Les contributions exigent un Contributor License Agreement signé.

## Ce que ce n'est pas
Pas un esclave EtherCAT ni un outil de configuration : seulement le maître. README très court.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : automatisme industriel, hors data/IA/MLOps sauf passerelle vers des machines.

