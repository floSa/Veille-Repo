---
schema: 1
depot: hummingbird-project/hummingbird
source_readme_sha: fa7e4637846a6d47
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# hummingbird-project/hummingbird

> Framework web Swift minimal sur SwiftNIO, pour écrire des serveurs HTTP en Swift.

## Le problème
Écrire une API ou un service web en Swift demande un routeur, des middlewares et du TLS sans lourde dépendance.

## Ce que ça fait vraiment
Un routeur, des middlewares, l'encodage/décodage Codable, TLS et HTTP/2. Le noyau est petit, les extensions vivent à part : HummingbirdRouter, TLS, HTTP2, Testing (inclus), puis Auth, Fluent, Redis, WebSocket, Lambda, Jobs, Mustache (dépôts séparés).

## Comment c'est branché
```mermaid
flowchart LR
  C["Client (Browser/HTTP Client)"] --> T["HummingbirdTLS.TLSChannel"]
  T --> S["HummingbirdCore.Server"]
  S --> M["Middleware Pipeline"]
  M --> R["Hummingbird.Router (TrieRouter)"]
  R --> H["User-defined Handlers"]
```

## Essayer
```swift
import Hummingbird
let router = Router()
router.get("hello") { request, _ -> String in "Hello" }
let app = Application(router: router, configuration: .init(address: .hostname("127.0.0.1", port: 8080)))
try await app.runService()
```
```bash
swift package add-dependency https://github.com/hummingbird-project/hummingbird.git --from 2.0.0
```

## Coût et pièges
Gratuit ; nécessite la chaîne Swift. Les fonctions annexes (auth, jobs) sont dans d'autres dépôts.

## Ce que ce n'est pas
Pas un framework « tout compris » ; pas fait pour la data science.

## Alternatives
Aucune alternative nommée dans le README (HummingbirdFluent s'appuie sur FluentKit de Vapor).

## Pour toi
À ignorer : backend Swift sans intérêt pour un profil data/IA/MLOps, sauf projet serveur Swift précis.

