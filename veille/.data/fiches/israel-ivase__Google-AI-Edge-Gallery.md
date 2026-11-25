---
schema: 1
depot: israel-ivase/Google-AI-Edge-Gallery
source_readme_sha: f2e51601ba95f6a1
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: surveiller
---

# israel-ivase/Google-AI-Edge-Gallery

> Application Android pour essayer des modèles génératifs locaux, hors ligne, avec images, chat et prompts.

## Le problème
Tester des petits modèles de langage sur un téléphone, sans cloud, demande une application qui télécharge et exécute le modèle.

## Ce que ça fait vraiment
L'application propose Ask Image, Prompt Lab et AI Chat, avec choix de modèles Hugging Face, mesures (TTFT, vitesse de décodage, latence) et ajout de ses propres modèles LiteRT `.task`. Le code lit une liste blanche de modèles et télécharge via un worker.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  A["MainActivity.kt"] --> B["GalleryApp.kt"]
  B --> C["GalleryNavGraph.kt"]
  C --> D["LlmChatScreen.kt"]
  D --> E["LlmChatModelHelper.kt"]
  C --> F["ModelManagerViewModel.kt"]
  F --> I["model_allowlist.json"]
```

## Essayer
Aucune commande documentée. Le README demande de télécharger l'APK de la dernière version et renvoie au wiki.

## Coût et pièges
Gratuit. Les modèles se téléchargent depuis Hugging Face et pèsent lourd. Le dépôt semble une copie : dernier push en juin 2025, version alpha annoncée par le README.

## Ce que ce n'est pas
Ce n'est pas le dépôt officiel de Google : le propriétaire est un particulier. iOS est annoncé « bientôt ».

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : bonne démonstration d'IA embarquée, mais préférer le dépôt d'origine à cette copie.

