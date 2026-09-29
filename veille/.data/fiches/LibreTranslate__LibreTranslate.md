---
schema: 1
depot: LibreTranslate/LibreTranslate
source_readme_sha: d433462c87a95a56
ecrite_le: 2026-09-29
nature: service
deploiement: docker
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft, matière insuffisante]
verdict: adopter
---

# LibreTranslate/LibreTranslate

> API de traduction automatique open source, entièrement auto-hébergée, basée sur Argos Translate.

## Le problème
Traduire du texte sans envoyer les données à Google ou Azure.

## Ce que ça fait vraiment
README très court (matière insuffisante). D'après le code : application Flask exposant traduction, détection de langue, liste des langues, santé, traduction de fichiers, suggestions et interface web. Au démarrage, les modèles Argos sont initialisés ; un cache, un stockage partagé (Redis), des clés d'API et des contrôles de débit sont disponibles.

## Comment c'est branché
```mermaid
flowchart LR
  C[Client API / navigateur] --> A[Flask app.py]
  A --> L[Language service]
  L --> G[Argos translation engine]
  A --> D[Language detector]
  A --> K[API keys + flood.py]
  A --> R[Cache / Redis]
```

## Essayer
Aucune commande dans le README fourni (renvoi vers Quickstart et Usage Instructions, non lus).

## Coût et pièges
Gratuit ; les modèles occupent de l'espace disque et de la mémoire (non documenté ici). Un déploiement public demande de configurer clés et limites de débit.

## Ce que ce n'est pas
Pas un moteur propriétaire : la qualité dépend d'Argos Translate. Licence AGPL-3.0 : les modifications servies en réseau doivent être publiées. La marque est encadrée (Trademark Guidelines).

## Alternatives
Aucune alternative nommée ; les API Google et Azure sont citées comme ce qu'il remplace.

## Pour toi
À adopter pour une traduction interne sans fuite de données, en gardant en tête la licence AGPL.
