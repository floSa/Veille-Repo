---
schema: 1
depot: vapor/websocket-kit
source_readme_sha: 8df82ede0c7a3b0c
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# vapor/websocket-kit

> Surcouche Swift à SwiftNIO pour écrire des clients et serveurs WebSocket plus simplement.

## Le problème
Utiliser les WebSockets de SwiftNIO directement est bas niveau.

## Ce que ça fait vraiment
Il fournit l'envoi et la réception de données, les ping/pong, le texte, la gestion de connexion et de la montée de protocole (upgrade). D'après le code : `WebSocket+Connect.swift` démarre la connexion, `WebSocketClient` et la requête d'upgrade HTTP précèdent `WebSocketHandler`, qui produit l'objet `WebSocket`. Des extensions de concurrence ajoutent les variantes async.

## Comment c'est branché
```mermaid
flowchart TD
  B["WebSocket+Connect.swift"] --> D["WebSocketClient.swift"]
  D --> E["HTTPUpgradeRequestHandler.swift"]
  E --> F["WebSocketHandler.swift"]
  F --> A["WebSocket.swift"]
  C["WebSocket+Concurrency.swift"] --> A
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Nécessite Swift et SwiftNIO (non détaillé). README très court : peu d'information.

## Ce que ce n'est pas
Pas un framework web : il ne gère ni routage ni application. Il vise Swift uniquement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : bibliothèque Swift sans lien avec data/IA/MLOps.

