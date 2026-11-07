---
schema: 1
depot: oliexdev/openScale
source_readme_sha: f3bf277308754ef3
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# oliexdev/openScale

> Application Android libre de suivi du poids et des mesures corporelles, avec balances Bluetooth.

## Le problème
Les applications de balances connectées exigent un compte et envoient les données dans le cloud.

## Ce que ça fait vraiment
Suit poids, IMC, graisse, eau, muscle, avec graphes, tableau et évaluation selon âge et taille. Récupère les mesures de nombreuses balances Bluetooth via des gestionnaires propres à chaque marque. Stockage local (Room), import et export CSV, multi-utilisateurs, widget d'écran d'accueil, sans permission internet.

## Comment c'est branché
```mermaid
flowchart TD
  UI["Écrans Compose"] --> F["Facades"]
  F --> UC["Use cases"]
  UC --> R["Room AppDatabase"]
  BT["Bluetooth ScaleFactory"] --> H["Scale handlers"]
  H --> S["Services d'enrichissement"]
  UC --> W["Workers sauvegarde et rappels"]
```

## Essayer
Aucune commande documentée : installer l'application via Google Play (bêta) ou la version de développement des Releases GitHub.

## Coût et pièges
Gratuit, sans publicité. Le dossier `arduino_mcu` concerne une balance maison. La synchronisation externe passe par un projet séparé.

## Ce que ce n'est pas
Pas un service cloud : aucune synchronisation intégrée. Pas d'application iOS d'après le README.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : application de santé personnelle sans lien avec la data ou le MLOps ; l'architecture en couches reste lisible si tu cherches un exemple.

