---
schema: 1
depot: killkimno/MORT
source_readme_sha: cd15c66f077b099d
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# killkimno/MORT

> Application Windows qui lit des dialogues à l'écran par OCR et les traduit en temps réel, pour joueurs.

## Le problème
Jouer à un jeu non traduit oblige à copier chaque ligne dans un traducteur.

## Ce que ça fait vraiment
Elle capture une zone de l'écran, la passe à un moteur OCR (Tesseract, Windows OCR, Google Cloud Vision, EasyOCR, Snipping Tool) puis traduit via Papago, Google, DeepL, ezTrans ou une API HTTP maison. Le résultat s'affiche dans une fenêtre superposée. Elle gère plusieurs zones et un patch de langue par base de données.

## Comment c'est branché
```mermaid
flowchart TD
  A["Form1.cs"] --> B["ScreenCapture.cs"]
  B --> C["OcrManager.cs"]
  C --> D["EasyOcr.cs"]
  C --> E["WindowOcr.cs"]
  C --> F["ProcessTranslateService.cs"]
  F --> G["TransManager.cs"]
  F --> H["TransFormOver.cs"]
```

## Essayer
Aucune commande : l'usage passe par l'interface (régler la langue OCR, choisir la zone, cliquer sur Translate).

## Coût et pièges
Windows 10 ou plus, 64 bits, .NET 9 et VC++ redistribuable. Une version 32 bits existe pour les CPU sans AVX2. Certaines traductions exigent une clé ou un compte tiers. Les jeux en plein écran ne fonctionnent pas.

## Ce que ce n'est pas
Ce n'est pas un outil multiplateforme ni une bibliothèque d'OCR. Pas de mode plein écran.

## Alternatives
Pour la traduction maison, le README cite LibreTranslate et nllb-serve.

## Pour toi
À ignorer : utilitaire de jeu Windows, sans usage dans un flux data / IA.

