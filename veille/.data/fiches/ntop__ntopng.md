---
schema: 1
depot: ntop/ntopng
source_readme_sha: a73ce44dcf8e955e
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# ntop/ntopng

> Application web de supervision du trafic réseau, pour administrateurs réseau.

## Le problème
Comprendre qui consomme la bande passante et détecter des comportements anormaux sur un réseau.

## Ce que ça fait vraiment
Capture du trafic (PCAP, ZMQ, sFlow), analyse en flux et en hôtes, vérifications de risques et d'alertes, puis tableaux de bord, rapports et séries temporelles exportées (RRD, InfluxDB). Prend aussi en charge syslog et SNMP, avec des intégrations Redis et ElasticSearch optionnelles. Descendant d'ntop (1998).

## Comment c'est branché
```mermaid
flowchart LR
  P["PcapInterface.cpp"] --> F["Flow.cpp"]
  F --> H["Host.cpp"]
  H --> A["AlertsQueue.cpp"]
  F --> D["FlowDB.cpp"]
  W["HTTPserver.cpp"] --> L["LuaEngine.cpp"]
  L --> T["Timeseries Export"]
```

## Essayer
Aucune commande documentée : le README renvoie à `doc/README.md` et aux paquets de packages.ntop.org (Debian/Ubuntu, CentOS, Windows, FreeBSD, Raspberry Pi).

## Coût et pièges
Gratuit sous GPLv3 ; marque déposée aux États-Unis et dans l'UE. Les détails de versions payantes ne sont pas dans le README.

## Ce que ce n'est pas
Pas un outil d'analyse de données généraliste : il surveille des flux réseau.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : supervision réseau, hors périmètre data/IA, sauf si tu opères toi-même une infrastructure.

