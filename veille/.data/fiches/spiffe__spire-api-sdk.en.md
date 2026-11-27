# spiffe/spire-api-sdk

> Service definitions and generated stubs for SPIRE's public APIs, for integration developers.

## The problem
Clients of the SPIRE APIs need up-to-date service definitions and generated code.

## What it actually does
The repository contains the service definitions and generated stubs of SPIRE's public APIs. It is tagged with the same versions as SPIRE, even when the API has not changed. API compatibility is maintained between versions.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
  A["Définitions des API"] --> B["Stubs générés"]
  B --> C["Client SPIRE"]
```

## Trying it
```bash
# Aucune commande documentée dans le README.
```

## Cost and gotchas
Not documented. To migrate from the Go module `github.com/spiffe/spire/proto/spire`, the README points to MIGRATING.

## What it is not
It is not SPIRE itself: only the interfaces. The README does not say which languages the stubs are generated in.

## Alternatives
No alternative named in the README.

## For you
Ignore: only useful if you are writing a SPIRE client, outside everyday data / AI concerns.
