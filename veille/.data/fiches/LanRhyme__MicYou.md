---
schema: 1
depot: LanRhyme/MicYou
source_readme_sha: 816b31664cb0573b
ecrite_le: 2026-10-30
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# LanRhyme/MicYou

> Transforme un téléphone en micro de qualité pour PC, avec serveur de bureau Windows, Linux et macOS.

## Le problème
Pas de bon micro sous la main, ou une chaîne audio à router vers les appels, jeux et enregistrements.

## Ce que ça fait vraiment
- Flux depuis Android (Wi-Fi ou USB/ADB), iOS (Wi-Fi ou USB) ou navigateur mobile via QR code.
- Serveur de bureau en GUI, CLI ou TUI.
- Chaîne de traitement : suppression de bruit par IA, annulation d'écho, déréverbération, égaliseur, AGC, VAD.
- Routage via VB-CABLE (Windows), PipeWire (Linux), BlackHole (macOS) ; plugins Native et WASM.

## Comment c'est branché
```mermaid
graph LR
  A[App Android / iOS / Web] --> B[Transport Wi-Fi / USB]
  B --> C[Serveur Tauri + Rust]
  C --> D[Pipeline DSP / AEC / bruit IA]
  D --> E[Micro virtuel]
  E --> F[Appli d'appel / jeu]
```

## Essayer
Pas de commande : télécharger le paquet de bureau et l'APK depuis GitHub Releases, configurer un micro virtuel, choisir Wi-Fi, USB ou Web.

## Coût et pièges
Gratuit. Il faut un pilote de micro virtuel selon l'OS ; l'IPA iOS est à installer hors store (dépôt séparé) ; iTunes requis sous Windows pour l'USB iOS.

## Ce que ce n'est pas
Pas un outil data/IA : c'est une app audio grand public. La licence existe mais n'est pas identifiée par GitHub.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : pratique pour visios et enregistrements, mais licence à clarifier avant tout usage pro et sans lien avec le travail data/MLOps.

