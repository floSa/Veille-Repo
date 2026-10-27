---
schema: 1
depot: cloudflare/workerd
source_readme_sha: 7657997fb92fc96d
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# cloudflare/workerd

> Runtime JavaScript/Wasm de Cloudflare Workers, pour auto-héberger, tester en local ou faire proxy HTTP.

## Le problème
Exécuter hors de Cloudflare le code écrit pour Workers, ou le tester localement avec le même comportement.

## Ce que ça fait vraiment
Serveur configuré par un fichier Cap'n Proto : services, sockets, workers, liaisons par capacités. API web standard (`fetch`, flux), Durable Objects, compatibilité Node et un runtime Python. Versions datées avec « compatibility date » pour la rétrocompatibilité.

## Comment c'est branché
```mermaid
flowchart LR
  O["Operator"] --> C["Runtime Config workerd.capnp"]
  C --> S["Server"]
  S --> H["HTTP Socket"]
  H --> R["Service Routing"]
  R --> W["Worker Entrypoint"]
  W --> X["External Resources"]
```

## Essayer
```bash
npx workerd ...
workerd serve my-config.capnp
```

## Coût et pièges
Gratuit, Apache-2.0. Compilation lourde (Bazel, clang 22+). Le README prévient : ce n'est pas un bac à sable durci ; pour du code malveillant, l'isoler dans une VM.

## Ce que ce n'est pas
Pas une copie de l'hébergement Cloudflare : sans ses couches de défense supplémentaires.

## Alternatives
Wrangler (v3+) pour le développement local de Workers, via Miniflare.

## Pour toi
Surveiller : utile si tu déploies des Workers ; sinon sans lien avec data/IA.

