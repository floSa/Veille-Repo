---
schema: 1
depot: spring-projects/spring-ai
source_readme_sha: 83a3eae47c9f8154
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# spring-projects/spring-ai

> Abstractions Spring pour brancher modèles d'IA, vector stores et outils dans des applications Java.

## Le problème
Intégrer des LLM, de la RAG et des outils dans une application Spring sans coller au SDK de chaque fournisseur.

## Ce que ça fait vraiment
API portable pour chat, embeddings, image, audio, modération ; sorties structurées mappées en POJO ; tool calling ; ChatClient fluide, advisors, mémoire de conversation, pipeline RAG et ETL de documents ; support MCP (client et serveur) ; une vingtaine de vector stores listés ; observabilité.

## Comment c'est branché
```mermaid
flowchart LR
  A["Application"] --> C["ChatClient"]
  C --> V["Advisors"]
  V --> R["RAG pipeline"]
  R --> S["Vector stores"]
  C --> M["Chat models"]
  M --> T["Tool calling"]
```

## Essayer
```bash
./mvnw clean install
```
Le README recommande plutôt de consommer les artefacts et le guide « Getting Started » ; le build source n'est utile que pour la dernière version.

## Coût et pièges
Clé d'API du fournisseur choisi à ta charge. Compatibilité : Spring AI 2.x avec Spring Boot 4.x, 1.1.x avec Spring Boot 3.5.x.

## Ce que ce n'est pas
Pas un modèle ni une plateforme : une couche d'intégration Java. Peu pertinent hors écosystème JVM.

## Alternatives
Aucune alternative nommée dans le README (Awesome Spring AI et Spring AI Community sont des ressources liées).

## Pour toi
Surveiller : à adopter si tes services IA sont en Spring Boot ; en Python, cette brique ne te sert à rien.

