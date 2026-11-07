---
schema: 1
depot: DenisovAV/flutter_gemma
source_readme_sha: c3f731bfe0ba5400
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# DenisovAV/flutter_gemma

> Ensemble de paquets Flutter pour exécuter des modèles d'IA sur l'appareil, sans serveur ni cloud.

## Le problème
Embarquer un LLM, des embeddings ou de la voix dans une application Flutter oblige à intégrer soi-même plusieurs moteurs d'inférence.

## Ce que ça fait vraiment
Un noyau `flutter_edge_ai` installe les modèles et les confie à des moteurs optionnels : LiteRT-LM, MediaPipe, llama.cpp (GGUF), ONNX Runtime, modèle intégré à l'OS. Paquets séparés pour embeddings, RAG (SQLite, Qdrant), voix, skills d'agent et Genkit.

## Comment c'est branché
```mermaid
flowchart TD
  A["flutter_edge_ai"] --> B["flutter_edge_ai_litertlm"]
  A --> C["flutter_edge_ai_llama"]
  A --> D["flutter_edge_ai_onnx"]
  A --> E["flutter_edge_ai_rag"]
  E --> F["flutter_edge_ai_sqlite"]
  A --> G["flutter_edge_ai_agent"]
```

## Essayer
Aucune commande dans ce README : renvoi vers le README du noyau et le guide de démarrage. Exemple d'application dans `packages/flutter_edge_ai/example`.

## Coût et pièges
Gratuit, mais les modèles se téléchargent et pèsent lourd sur mobile. Le support varie selon la plateforme et le moteur. Les anciens noms `flutter_gemma*` restent publiés tels quels jusqu'au noyau 1.11.4.

## Ce que ce n'est pas
Pas un modèle ni un service : des paquets d'intégration. Pas une solution hors Flutter.

## Alternatives
Aucune citée dans le README.

## Pour toi
Surveiller : utile si tu portes de l'IA embarquée sur mobile avec Flutter, sinon hors de ton périmètre.

