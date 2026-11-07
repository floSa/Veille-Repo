---
schema: 1
depot: TomWhitwell/Workshop_Computer
source_readme_sha: 0f7384525833d392
ecrite_le: 2026-11-07
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# TomWhitwell/Workshop_Computer

> Dépôt de développement des cartes programmables du Workshop Computer, pour les créateurs de modules musicaux.

## Le problème
Les auteurs de cartes pour le Workshop System ont besoin d'un endroit commun pour partager documentation, code et firmwares.

## Ce que ça fait vraiment
Rassemble un guide de démarrage, des exemples de départ (Arduino, Pico SDK, CircuitPython, MicroPython), la bibliothèque ComputerCard de Chris Johnson et un dossier `releases` où chacun dépose sa carte (uf2, source ou lien). Un DevContainer VS Code facilite la compilation, le flash et le débogage. Un site de métadonnées est hébergé à part.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
graph LR
  A["Développeur"] --> B["ComputerCard"]
  B --> C["DevContainer VS Code"]
  C --> D["Firmware uf2"]
  D --> E["Dossier releases"]
  E --> F["Site de métadonnées"]
```

## Essayer
Aucune commande documentée : le README renvoie à `.devcontainer/README.md`.

## Coût et pièges
Matériel Workshop Computer nécessaire pour tester. Aucune licence déclarée au catalogue : la réutilisation du code n'est pas garantie.

## Ce que ce n'est pas
Pas un logiciel installable ni un outil data : c'est un dépôt de contributions matérielles musicales. Le README ne fixe pas de règle de contribution stricte.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : domaine de la musique modulaire matérielle, sans rapport avec la donnée, l'IA ou le MLOps.

