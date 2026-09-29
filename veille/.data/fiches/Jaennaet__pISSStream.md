---
schema: 1
depot: Jaennaet/pISSStream
source_readme_sha: ee4389e911d56f01
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [compte à créer]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# Jaennaet/pISSStream

> Application Apple affichant en direct le niveau du réservoir d'urine de l'ISS, blague technique pour curieux.

## Le problème
Aucun problème métier : l'auteur assume un projet volontairement absurde pour apprendre Swift.

## Ce que ça fait vraiment
Se branche sur le flux de télémétrie public de la NASA via Lightstreamer (WebSocket) et montre le pourcentage de remplissage dans la barre de menus macOS, sur iOS, watchOS et visionOS. Affiche « Connecting » ou « No Signal » si le flux tombe. L'auteur reconnaît une gestion d'erreurs minimale.

## Comment c'est branché
```mermaid
flowchart LR
  N["NASA ISS Telemetry Service"] --> L["Lightstreamer Service"]
  L --> S["PissSocket (WebSocket)"]
  S --> V["AppStateViewModel"]
  V --> U["Menu bar item (PissLabel.swift)"]
```

## Essayer
```bash
git clone https://github.com/Jaennaet/pISSStream.git
cd pISSStream
open pISSStream.xcodeproj
```
Sur macOS, le README indique de télécharger le DMG des releases.

## Coût et pièges
Gratuit. iOS, watchOS et visionOS exigent Xcode 15.2+ et un compte développeur Apple (ou 7 jours de profil gratuit). Dernier push en septembre 2025.

## Ce que ce n'est pas
Pas un outil de monitoring sérieux, et pas une source de données exploitable : l'auteur refuse d'ajouter d'autres métriques.

## Alternatives
iss-mimic (Mimic), cité dans le README, propose bien plus de statistiques.

## Pour toi
À ignorer : gadget Apple sans utilité data, IA ou MLOps, et inactif depuis plus d'un an.

