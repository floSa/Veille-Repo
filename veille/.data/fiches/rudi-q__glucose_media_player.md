---
schema: 1
depot: rudi-q/glucose_media_player
source_readme_sha: a4a487317c5d4526
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# rudi-q/glucose_media_player

> Lecteur vidéo et audio de bureau Windows qui génère et traduit les sous-titres localement avec Whisper.

## Le problème
Sous-titres manquants ou mal calés, et services de transcription qui envoient tes fichiers dans le cloud.

## Ce que ça fait vraiment
Sous-titres en direct générés par Whisper sur ton PC quelques minutes en avance, traduction locale, transcription d'une vidéo entière, position des sous-titres qui évite les visages. Un onglet Features teste processeur, mémoire et graphique pour dire ce qui tournera bien. Lecteur avec galerie, picture-in-picture et formats variés. Construit avec Rust et Tauri.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
    A["Fichier video"] --> B["Lecteur Tauri Rust"]
    B --> C["Whisper local"]
    C --> D["Sous-titres"]
    D --> E["Traduction locale"]
```

## Essayer
Télécharger l'installeur Windows depuis la page Releases, puis glisser un fichier dans la fenêtre. Aucune ligne de commande n'est documentée.

## Coût et pièges
Gratuit ; les modèles se téléchargent une fois. Le README ne cite que Windows. Les fonctions lourdes demandent un PC assez puissant.

## Ce que ce n'est pas
Pas une bibliothèque de transcription réutilisable : c'est une application. Le README parle de « zéro télémétrie » mais ne détaille pas ce qui est mesuré.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : exemple concret de Whisper embarqué en local, utile à regarder, mais c'est un lecteur, pas un outil de pipeline.

