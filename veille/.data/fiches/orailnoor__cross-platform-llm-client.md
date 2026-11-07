---
schema: 1
depot: orailnoor/cross-platform-llm-client
source_readme_sha: 8bd62b09a89836d8
ecrite_le: 2026-11-07
nature: app
deploiement: compilation
prerequis: [GPU, clé d'API, service tiers, beaucoup de RAM]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# orailnoor/cross-platform-llm-client

> Client de chat Flutter (PrivateLM) mêlant inférence locale sur Android et API cloud.

## Le problème
Discuter avec un LLM sur téléphone, soit hors ligne avec un modèle local, soit via un fournisseur cloud, dans une même application.

## Ce que ça fait vraiment
Sur Android, télécharge et exécute des modèles GGUF via un plugin enveloppant llama.cpp, avec accélération Vulkan. En repli, utilise OpenAI, Anthropic, Gemini ou Kimi. Gère le multimodal (texte et images), stocke chats et réglages dans Hive, et choisit le contexte selon la RAM détectée. La vue des tâches est annoncée en développement.

## Comment c'est branché
```mermaid
flowchart TD
  UI["UI Views"] --> Ctrl["Controllers GetX"]
  Ctrl --> Inf["InferenceService local GGUF"]
  Ctrl --> Cloud["CloudService"]
  Ctrl --> Dl["DownloadService"]
  Inf --> Llama["llama_flutter_android"]
  Cloud --> API["OpenAI, Claude, Gemini, Kimi"]
```

## Essayer
```bash
flutter pub get
flutter build apk --debug
flutter build web --release
```

## Coût et pièges
Clés d'API cloud à ta charge. Les modèles locaux consomment RAM et stockage. Sur iOS : installation par AltStore, expirant après 7 jours. Une clé de signature stable est nécessaire pour les APK de release.

## Ce que ce n'est pas
Pas une inférence locale sur le web (cloud seulement). Le README se dit « production-ready », ce que rien ne prouve ici.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : curieux pour tester des petits modèles sur mobile, mais récent, mono-mainteneur et sans mesure de performance.

