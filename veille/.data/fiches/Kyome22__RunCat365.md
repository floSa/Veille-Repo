---
schema: 1
depot: Kyome22/RunCat365
source_readme_sha: 51c20892545d3560
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [matière insuffisante, mainteneur unique]
verdict: ignorer
---

# Kyome22/RunCat365

> Animation de chat qui court dans la barre des tâches Windows, pour les curieux de leur charge CPU.

## Le problème
Voir l'activité de la machine d'un coup d'œil sans ouvrir le gestionnaire de tâches.

## Ce que ça fait vraiment
Application Windows en C# (.NET 9.0) qui affiche un chat animé dans la zone de notification. D'après l'architecture, des dépôts de métriques lisent CPU, mémoire et stockage, et une fenêtre de jeu de course sans fin est incluse. Un projet distinct sert à l'empaqueter pour le Microsoft Store.

## Comment c'est branché

```mermaid
flowchart TD
  C["CPURepository"] --> F["ByteFormatter"]
  M["MemoryRepository"] --> F
  S["StorageRepository"] --> F
  F --> E["EndlessGameForm"]
  E --> T["ContextMenuManager"]
  E --> W["WapForStore"]
```

## Essayer
Aucune commande documentée : installation depuis le Microsoft Store (https://apps.microsoft.com/detail/9nw5lpnvwfwj), Windows 10 version 19041.0 ou plus.

## Coût et pièges
Gratuit, mais réservé à Windows. README très court : matière insuffisante pour juger plus loin. Les issues hors anglais ou hors modèle sont refusées.

## Ce que ce n'est pas
Pas une version macOS : le README le refuse explicitement. Pas un outil de supervision sérieux.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : gadget de bureau Windows, sans intérêt pour un travail data, IA ou MLOps.

