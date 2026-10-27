---
schema: 1
depot: openutau/OpenUtau
source_readme_sha: b13057a7f2bfae47
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# openutau/OpenUtau

> Éditeur libre pour la communauté UTAU (même README que stakira/OpenUtau, sans schéma fourni).

## Le problème
Composer des voix chantées UTAU sans les limites de l'outil d'origine.

## Ce que ça fait vraiment
Éditeur MIDI, éditeur de vibrato, phonémiseurs multilingues (VCV, CVVC, Arpasing), rééchantillonneur WORLDLINE-R, pré-rendu, import VSQX, chanteurs IA ENUNU, système de plugins. Windows, macOS, Linux. Aucune architecture d'après le code n'est fournie pour ce dépôt.

## Comment c'est branché
```mermaid
flowchart LR
  USER[Utilisateur] --> ED[Éditeur MIDI]
  ED --> PH[Phonémiseurs]
  ED --> RS[Resampler WORLDLINE-R]
  ED --> PL[Plugins]
  RS --> PRE[Pré-rendu]
```
(Schéma déduit du seul README : pas de graphe fourni.)

## Essayer
Aucune commande documentée dans le README : lire le wiki Getting-Started.

## Coût et pièges
Gratuit. Possible doublon de stakira/OpenUtau : même README, créé le même jour (2014-11-27), 4 460 étoiles contre 4 482.

## Ce que ce n'est pas
Ni une station audionumérique, ni compatible Vocaloid sauf fonctions limitées.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : doublon apparent de stakira/OpenUtau, domaine éloigné de data/IA.

