---
schema: 1
depot: linearmouse/linearmouse
source_readme_sha: db6589dc9d35a8a7
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# linearmouse/linearmouse

> Utilitaire macOS pour régler la souris et le pavé tactile (vitesse, défilement, boutons).

## Le problème
macOS applique une accélération et un défilement fixes qui conviennent mal à certaines souris externes.

## Ce que ça fait vraiment
Le README est très court (renvoi vers linearmouse.app, guide de contribution, traduction via Crowdin). D'après le code : interception des événements par un Event Tap global, chaîne de transformateurs (boutons, défilement, pointeur), gestion par appareil, configuration en modèle, modules Swift GestureKit, KeyKit et PointerKit. Nécessite l'autorisation d'accessibilité de macOS.

## Comment c'est branché
```mermaid
graph LR
  A["GlobalEventTap.swift"] --> B["Event Transformers"]
  B --> C["DeviceManager.swift"]
  B --> D["Configuration Model"]
  D --> E["Settings UI"]
  B --> F["PointerKit GestureKit KeyKit"]
```

## Essayer
Aucune commande documentée dans le README : voir https://linearmouse.app.

## Coût et pièges
Gratuit. Demande l'accès Accessibilité de macOS (interception d'événements).

## Ce que ce n'est pas
Pas une application multiplateforme : macOS uniquement. Le README ne détaille pas les fonctions.

## Alternatives
Mac Mouse Fix, cité comme source d'inspiration pour la vitesse du pointeur.

## Pour toi
À ignorer : utilitaire de confort sur Mac, sans rapport avec un travail data/IA/MLOps.

