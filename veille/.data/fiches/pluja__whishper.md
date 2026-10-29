---
schema: 1
depot: pluja/whishper
source_readme_sha: 374c1dd957e8b756
ecrite_le: 2026-10-29
nature: app
deploiement: docker
prerequis: [Docker, GPU]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# pluja/whishper

> Application web locale de transcription et sous-titrage avec FasterWhisper, pour qui veut tout garder sur sa machine.

## Le problème
Transcrire, traduire et corriger des sous-titres oblige à enchaîner des services cloud ou des outils séparés, avec envoi de ses médias à des tiers.

## Ce que ça fait vraiment
Transcrit audio et vidéo (fichier envoyé ou URL via yt-dlp) avec FasterWhisper, exporte en TXT, JSON, VTT, SRT, traduit via LibreTranslate, et propose un éditeur de sous-titres (surlignage, alertes de caractères par seconde, découpe et insertion de segments). Tourne sur CPU ou GPU NVIDIA, annoncé fonctionnel hors ligne.

## Comment c'est branché
```mermaid
flowchart LR
  A[Frontend] --> B[Nginx]
  B --> C[Whishper-Backend]
  C --> D[transcription-api]
  C --> E[LibreTranslate]
  C --> F[MongoDB]
```

## Essayer
Le README fourni ne contient aucune commande : il renvoie à un script de démarrage rapide et à une documentation externe, non reproduits ici.

## Coût et pièges
Gratuit, mais six conteneurs à faire tourner (dont MongoDB et LibreTranslate). Un GPU NVIDIA accélère nettement, sinon CPU plus lent.

## Ce que ce n'est pas
Ce n'est pas une bibliothèque : c'est une application complète à héberger. Le README ne donne ni précision de transcription ni benchmark.

## Alternatives
Aucune alternative nommée ; il s'appuie sur Faster Whisper et LibreTranslate.

## Pour toi
Surveiller : pratique pour de la transcription locale, mais pile lourde et mainteneur unique pour une brique de production.

