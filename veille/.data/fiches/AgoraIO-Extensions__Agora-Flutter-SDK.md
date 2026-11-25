---
schema: 1
depot: AgoraIO-Extensions/Agora-Flutter-SDK
source_readme_sha: 56f824036884c6f1
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# AgoraIO-Extensions/Agora-Flutter-SDK

> Plugin Flutter qui enveloppe le SDK vidéo Agora pour intégrer appels vocaux et vidéo temps réel.

## Le problème
Intégrer de la communication temps réel dans une app Flutter demande des liaisons natives par plateforme.

## Ce que ça fait vraiment
Le paquet agora_rtc_engine expose le SDK natif Agora 4.x à Flutter sur Android, iOS et macOS, plus Windows et une version web en alpha (via iris_web). Il permet aussi de créer un moteur à partir du handle natif pour traiter les données audio et vidéo brutes.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Application Flutter"] --> B["agora_rtc_engine"]
  B --> C["SDK natif Android, iOS, macOS"]
  B --> D["iris_web, SDK Web 4.x"]
  C --> E["Service Agora"]
  D --> E
```

## Essayer
Dépendance `agora_rtc_engine` dans pubspec.yaml ; exemples dans le dossier example. Pas de commande plus précise dans le README.

## Coût et pièges
Demande des autorisations caméra et micro. Le service Agora est un SaaS : un compte est requis, et la grille tarifaire n'est pas dans le README. La branche main casse la compatibilité avec la série 5.x.

## Ce que ce n'est pas
Pas un moteur de communication autonome : il dépend de l'infrastructure Agora. L'API web n'est pas équivalente aux API natives.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
Ignorer : liaison vers un service tiers de visioconférence, sans lien avec un travail data ou MLOps.

