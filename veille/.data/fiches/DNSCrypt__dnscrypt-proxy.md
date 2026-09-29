---
schema: 1
depot: DNSCrypt/dnscrypt-proxy
source_readme_sha: 8a8d525de5374b2d
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# DNSCrypt/dnscrypt-proxy

> Proxy DNS local qui chiffre les requêtes via DNSCrypt, DoH ou ODoH, pour utilisateurs soucieux de vie privée.

## Le problème
Les requêtes DNS circulent en clair et révèlent les sites visités.

## Ce que ça fait vraiment
Écoute localement, applique des filtres (blocage, cloaking, filtrage horaire), consulte un cache, puis relaie via DNSCrypt v2 (dont post-quantique), DoH sur TLS 1.3/QUIC ou ODoH. Répartit la charge entre les résolveurs les plus rapides, peut passer par Tor, SOCKS ou des relais anonymisés, journalise les requêtes et propose une interface de suivi.

## Comment c'est branché
```mermaid
flowchart LR
  C[Client] --> L[Listener]
  L --> P[Plugin Pipeline]
  P --> Q[Query Processor + Cache]
  Q --> R[Resolver Manager]
  R --> T[Cryptographic Transport]
  T --> X[External Resolver]
```

## Essayer
Le README ne contient pas de commande : il renvoie à la documentation et aux instructions d'installation avec vérification des signatures.

## Coût et pièges
Gratuit. Binaires précompilés pour de nombreuses plateformes. Rechargement à chaud de la config désactivé par défaut depuis la v2.1.10. Seulement 9 issues ouvertes.

## Ce que ce n'est pas
Pas un VPN : il ne chiffre que le DNS, pas le reste du trafic.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À adopter : simple et sous licence ISC, il protège les requêtes DNS de ta machine ou d'un réseau de labo sans effort.

