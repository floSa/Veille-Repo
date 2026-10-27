---
schema: 1
depot: xiaoyaocz/dart_simple_live
source_readme_sha: f676792dc29bc42d
ecrite_le: 2026-10-27
nature: app
deploiement: compilation
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# xiaoyaocz/dart_simple_live

> Application Flutter pour regarder des directs chinois (Huya, Douyu, Bilibili, Douyin), à compiler soi-même.

## Le problème
Regarder des plateformes de direct chinoises avec un client simple et des commentaires défilants (danmaku).

## Ce que ça fait vraiment
Monorepo Dart : `simple_live_core` (adaptateurs de sites, réseau, danmaku, protocoles Tars/protobuf), `simple_live_app` (Flutter), `simple_live_tv_app` (Android TV) et `simple_live_console`. Suivis, historique, synchronisation (WebDAV, SignalR), base locale. README en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  App["Flutter app"] --> Ctrl["Controllers"]
  Ctrl --> Services["App services"]
  Services --> Core["Core API (simple_live_core)"]
  Core --> Sites["Site adapters"]
  Core --> Danmaku["Danmaku clients"]
  Services --> DB["Persistence"]
```

## Essayer
Aucune commande dans le README. Flutter 3.38 requis ; pas de paquet d'installation fourni, à compiler.

## Coût et pièges
Gratuit. Dépend de plateformes tierces et de leurs API non officielles. Usage commercial interdit selon la déclaration, alors que la licence est GPL-3.0.

## Ce que ce n'est pas
Pas de version précompilée : le README demande de compiler. Plateformes de bureau en bêta.

## Alternatives
Le README cite AllLive, la version C# du même auteur.

## Pour toi
À ignorer : application grand public sans rapport avec ton métier, fondée sur des API non officielles.

