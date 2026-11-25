---
schema: 1
depot: vapor/multipart-kit
source_readme_sha: 5adc145a36aeea5d
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# vapor/multipart-kit

> Bibliothèque Swift pour analyser et produire du multipart/form-data, avec support Codable et flux asynchrones.

## Le problème
Traiter des envois de fichiers en multipart sans tout charger en mémoire est fastidieux.

## Ce que ça fait vraiment
FormDataEncoder et FormDataDecoder gèrent les types Codable, avec imbrication par crochets. L'encodeur passe par les writers, le décodeur par un parseur à machine d'états. Des séquences asynchrones traitent de gros messages en flux.

## Comment c'est branché
```mermaid
flowchart TD
  f1["FormDataEncoder/FormDataEncoder.swift"] --> w1["Writer/MultipartWriter.swift"]
  w1 --> w2["Writer/MemoryMultipartWriter.swift"]
  w2 --> w3["MultipartPart.swift"]
  f2["FormDataDecoder/FormDataDecoder.swift"] --> p1["Parser/MultipartParser.swift"]
  p1 --> p2["Parser/MultipartParser+StateMachine.swift"]
  p3["StreamingMultipartParserAsyncSequence.swift"] --> p2
```

## Essayer
```swift
.package(url: "https://github.com/vapor/multipart-kit.git", from: "5.0.0-alpha.5"),
```

## Coût et pièges
Version 5 encore en alpha. Chaîne Swift/SPM requise. Le null n'est pas pris en charge.

## Ce que ce n'est pas
Pas un client HTTP ni un serveur : seulement l'encodage multipart.

## Alternatives
Aucune alternative nommée.

## Pour toi
À ignorer : bibliothèque Swift pour serveurs web, hors data/IA.

