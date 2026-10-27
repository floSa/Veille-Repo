---
schema: 1
depot: fluent/fluent-bit
source_readme_sha: e5f73f9f7b40338d
ecrite_le: 2026-10-27
nature: outil
deploiement: docker
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# fluent/fluent-bit

> Agent léger qui collecte, transforme et expédie logs, métriques et traces vers n'importe quelle destination.

## Le problème
Les logs et métriques de dizaines de sources doivent atteindre plusieurs backends sans gaspiller CPU et RAM sur chaque nœud.

## Ce que ça fait vraiment
Un pipeline modulaire : plugins d'entrée, filtres (dont Lua), plugins de sortie (C ou Go), avec buffer disque (`flb_storage.c`) et moteur interne (`flb_engine.c`). Traitement SQL en flux, métriques exposées en HTTP/Prometheus, TLS intégré. Plus de 70 plugins natifs selon le README.

## Comment c'est branché
```mermaid
graph LR
  A[Input plugins] --> B[Pipeline engine flb_engine.c]
  B --> C[Filter plugins]
  C --> D[Output plugins]
  B --> E[Buffer storage flb_storage.c]
  B --> F[HTTP monitoring]
```

## Essayer
```bash
cd build
cmake ..
make
bin/fluent-bit -i cpu -o stdout -f 1
```
Des paquets Linux, images Docker et binaires Windows existent aussi (README).

## Coût et pièges
Gratuit. Compilation : CMake ≥ 3.0, Flex, Bison, en-têtes YAML et OpenSSL. 803 issues ouvertes.

## Ce que ce n'est pas
Pas une plateforme d'observabilité : il ne stocke ni n'affiche rien. Pas un moteur d'analyse, malgré le SQL en flux.

## Alternatives
Fluentd, dont il fait partie de l'écosystème : plus lourd mais plus riche en plugins (lecture du README, non détaillé).

## Pour toi
À adopter pour acheminer logs de jobs ML et métriques vers ta stack d'observabilité : projet CNCF gradué, actif, empreinte faible.

