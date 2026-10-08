---
schema: 1
depot: goccy/go-json
source_readme_sha: 29c92278fd347e8a
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# goccy/go-json

> Encodeur et décodeur JSON Go, compatible avec encoding/json, annoncé plus rapide.

## Le problème
`encoding/json` est lent sur les charges lourdes et les alternatives cassent la compatibilité.

## Ce que ça fait vraiment
Remplacement par simple changement d'import. Techniques décrites : réutilisation de tampons, suppression de la réflexion via `typeptr`, encodage par séquence d'opcodes, bitmaps pour la recherche de champs au décodage. Options : contexte propagé, filtrage typé de champs, sortie colorée. Les chiffres de benchmarks ne sont pas dans le texte lu.

## Comment c'est branché
```mermaid
flowchart LR
  A["json.go"] --> B["encode.go"]
  A --> C["decode.go"]
  B --> D["vm.go"]
  C --> E["context.go"]
  D --> F["options.go"]
```

## Essayer
```
go get github.com/goccy/go-json
```
```
-import "encoding/json"
+import "github.com/goccy/go-json"
```

## Coût et pièges
Gratuit. S'appuie sur `unsafe` ; la variante NoEscape est optionnelle à cause d'un bug du compilateur Go. 173 issues ouvertes.

## Ce que ce n'est pas
Pas garanti identique à encoding/json sur tous les cas limites : tester avant de basculer.

## Alternatives
json-iterator/go, segmentio/encoding/json, easyjson, gojay, simdjson-go (tableau comparatif du README).

## Pour toi
Gain possible sur des services Go à fort volume JSON ; mesurer d'abord : surveiller.

