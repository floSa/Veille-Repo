---
schema: 1
depot: ucb-bar/chiseltest
source_readme_sha: 278c97fc4b912bad
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier, archivé, dernier commit ancien]
verdict: ignorer
---

# ucb-bar/chiseltest

> Bibliothèque de test et de vérification formelle pour circuits matériels écrits en Chisel.

## Le problème
Tester des conceptions RTL Chisel demande beaucoup de code répétitif et des testbenches peu lisibles.

## Ce que ça fait vraiment
S'intègre à ScalaTest : `poke`, `step`, `expect` sur le module testé, threads `fork`/`join` pour les testbenches. Simulateurs : treadle (défaut), verilator, iverilog, vcs. Couche de compatibilité avec PeekPokeTester.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Test ScalaTest"] --> B["chiseltest"]
  B --> C["treadle"]
  B --> D["verilator"]
  B --> E["iverilog / vcs"]
```

## Essayer
```bash
sbt test
sbt
> testOnly <spec name> -- -oF
```

## Coût et pièges
Gratuit. Il faut sbt, un JDK, et verilator selon le backend (hors liste des prérequis). Archivé : l'équipe a arrêté faute de mainteneur.

## Ce que ce n'est pas
Pas un outil de test logiciel général : réservé au matériel Chisel. Plus maintenu.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : conception matérielle hors périmètre et projet archivé, sauf si tu reprends un fork pour du Chisel.

