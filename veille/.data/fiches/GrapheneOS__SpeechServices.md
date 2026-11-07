---
schema: 1
depot: GrapheneOS/SpeechServices
source_readme_sha: b4de34152056bc45
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [matière insuffisante]
verdict: surveiller
---

# GrapheneOS/SpeechServices

> Service de synthèse vocale local pour GrapheneOS, fondé sur un modèle Matcha-TTS exécuté sur l'appareil.

## Le problème
La synthèse vocale d'un téléphone passe souvent par un service cloud. Ici le texte reste sur l'appareil.

## Ce que ça fait vraiment
Le README ne tient qu'en quelques lignes : un moteur de synthèse vocale pour GrapheneOS, avec un fork de Matcha-TTS plus rapide, un phonémiseur écrit en Kotlin inspiré de Misaki et Apache OpenNLP pour le prétraitement du texte. Le reste n'est pas documenté.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A["Texte"] --> B["Prétraitement OpenNLP"]
  B --> C["Phonémiseur Kotlin"]
  C --> D["Fork Matcha-TTS"]
  D --> E["Audio sur l'appareil"]
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Installation non documentée. Il vise GrapheneOS, donc un téléphone compatible.

## Ce que ce n'est pas
Ce n'est pas une bibliothèque Python de TTS. La matière du README est trop mince pour juger les langues, la qualité ou la taille des modèles.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : si tu travailles sur du TTS embarqué, le fork Matcha-TTS est à regarder, mais rien n'est documenté pour l'évaluer.

