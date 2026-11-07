---
schema: 1
depot: Musheer360/SwiftSlate
source_readme_sha: 9fa224bf13d7763a
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: surveiller
---

# Musheer360/SwiftSlate

> Assistant IA Android qui réécrit ton texte dans n'importe quelle application quand tu tapes un déclencheur comme ?fix.

## Le problème
Corriger ou reformuler un texte avec un LLM oblige à copier-coller entre l'application et un chatbot.

## Ce que ça fait vraiment
Un service d'accessibilité détecte un déclencheur en fin de texte, envoie le texte à Gemini, Groq ou un point d'accès compatible OpenAI (Ollama possible), puis remplace le texte sur place. Commandes IA modifiables, commandes locales hors ligne, rotation de plusieurs clés, menu de sélection de texte.

## Comment c'est branché
```mermaid
flowchart TD
  A["AssistantService.kt"] --> B["CommandManager.kt"]
  B --> C["CommandRunner.kt"]
  C --> D["KeyManager.kt"]
  C --> E["GeminiClient.kt"]
  C --> F["OpenAICompatibleClient.kt"]
  A --> G["Remplacement du texte"]
```

## Essayer
```bash
git clone https://github.com/Musheer360/SwiftSlate.git
cd SwiftSlate
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Coût et pièges
Clé d'API requise pour les commandes IA, gratuite chez Gemini dans la limite du quota. Demande l'autorisation d'accessibilité, donc le texte tapé est lu pour détecter le déclencheur. Android 6 minimum.

## Ce que ce n'est pas
Ne fonctionne pas partout : certains éditeurs personnalisés et WeChat échouent, d'où le menu de sélection. Pas de version iOS.

## Alternatives
- SwiftSlate Desktop : même principe pour Windows 10 et 11.

## Pour toi
À surveiller : l'idée est utile et les clés sont chiffrées, mais accorder l'accessibilité à une application d'une seule personne est un choix de confiance.

