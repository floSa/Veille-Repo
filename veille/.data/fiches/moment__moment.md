---
schema: 1
depot: moment/moment
source_readme_sha: 7b8b7a10ebe0b611
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [matière insuffisante]
verdict: ignorer
---

# moment/moment

> Bibliothèque JavaScript de dates, en mode maintenance, pour du code existant.

## Le problème
Analyser, valider, manipuler et formater des dates en JavaScript.

## Ce que ça fait vraiment
README minimal (moins de 800 caractères). Il indique un projet historique, en mode maintenance, sous l'OpenJS Foundation, sans nouvelles fonctionnalités. Le code couvre création/parsing, durées, formatage et locales.

## Comment c'est branché
```mermaid
flowchart LR
  A["Moment Core"] --> B["Create Module"]
  A --> C["Parse Module"]
  A --> D["Duration Module"]
  A --> E["Format Module"]
  E --> F["Locale Manager"]
  F --> G["Locale Files"]
```
Le texte d'architecture est un guide de dessin supposé.

## Essayer
```bash
npm install moment
```

## Coût et pièges
Gratuit. Projet hérité : le README renvoie à une note d'état, aucune nouvelle fonction acceptée.

## Ce que ce n'est pas
Ce n'est pas un choix pour un nouveau projet. Fiche minimale : le README ne détaille ni l'API ni les alternatives.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer pour du neuf : le projet est en maintenance et n'accepte plus de fonctions ; garde-le seulement pour du code déjà en place.

