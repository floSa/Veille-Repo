---
schema: 1
depot: mailru/easyjson
source_readme_sha: e6e5154460b2274f
ecrite_le: 2026-10-08
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# mailru/easyjson

> Générateur de code Go pour sérialiser des structs en JSON sans réflexion, destiné aux services Go sensibles aux performances.

## Le problème
`encoding/json` repose sur la réflexion et coûte du temps et des allocations sur de gros volumes.

## Ce que ça fait vraiment
Une CLI lit vos structs Go, lance un générateur et écrit un fichier `_easyjson.go` avec des marshalers et unmarshalers. Le runtime fournit lexer, writer, pool de buffers et wrappers optionnels. Le README annonce 4 à 6 fois plus vite que la stdlib selon ses propres benchmarks, datés de 2016.

## Comment c'est branché
```mermaid
graph TD
  CLI[Generator CLI : main.go] --> Boot[Bootstrap runner : bootstrap.go]
  Boot --> Gen[Generator core : generator.go]
  Gen --> Enc[encoder.go]
  Gen --> Dec[decoder.go]
  Dec --> Lexer[JSON lexer : lexer.go]
  Enc --> Writer[JSON writer : writer.go]
```

## Essayer
```bash
go get github.com/mailru/easyjson && go install github.com/mailru/easyjson/...@latest
easyjson -all <file>.go
```

## Coût et pièges
Gratuit. Nécessite un environnement Go complet. Utilise `unsafe` par défaut (désactivable avec le tag `easyjson_nounsafe`). Clés sensibles à la casse, pas de validation complète, pas de streaming.

## Ce que ce n'est pas
Pas un remplaçant transparent de `encoding/json` : le README dit lui-même qu'il manque des fonctions. Ne fonctionne pas sur les fichiers `package main`.

## Alternatives
- encoding/json : la stdlib, sans étape de génération.
- ffjson : même approche, jugé plus lent et moins stable en concurrence par le README.

## Pour toi
À surveiller : utile seulement si tu as un service Go où le JSON est mesuré comme goulot ; sinon la génération de code n'en vaut pas le coût.

