# hummingbird-project/hummingbird

> Minimal Swift web framework on SwiftNIO, for writing HTTP servers in Swift.

## The problem
Writing an API or a web service in Swift requires a router, middlewares and TLS without a heavy dependency.

## What it actually does
A router, middlewares, Codable encoding/decoding, TLS and HTTP/2. The core is small, the extensions live separately: HummingbirdRouter, TLS, HTTP2, Testing (included), then Auth, Fluent, Redis, WebSocket, Lambda, Jobs, Mustache (separate repositories).

## How it is wired
```mermaid
flowchart LR
  C["Client (Browser/HTTP Client)"] --> T["HummingbirdTLS.TLSChannel"]
  T --> S["HummingbirdCore.Server"]
  S --> M["Middleware Pipeline"]
  M --> R["Hummingbird.Router (TrieRouter)"]
  R --> H["User-defined Handlers"]
```

## Trying it
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

## Cost and gotchas
Free; requires the Swift toolchain. Ancillary features (auth, jobs) are in other repositories.

## What it is not
Not an "all-inclusive" framework; not made for data science.

## Alternatives
No alternative named in the README (HummingbirdFluent builds on Vapor's FluentKit).

## For you
Ignore: a Swift backend of no interest to a data/AI/MLOps profile, unless you have a specific Swift server project.
