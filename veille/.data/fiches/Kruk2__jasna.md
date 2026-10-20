---
schema: 1
depot: Kruk2/jasna
source_readme_sha: 000197aedbe0c494
ecrite_le: 2026-10-20
nature: app
deploiement: binaire
prerequis: [GPU, beaucoup de RAM]
cout: freemium
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# Kruk2/jasna

> Application GPU qui détecte et restaure les mosaïques de censure dans vidéos et images, pour utilisateurs avertis.

## Le problème
Retirer une mosaïque d'une vidéo demande de traiter chaque image à la main, sans cohérence dans le temps.

## Ce que ça fait vraiment
Pipeline presque entièrement sur GPU : décodage (NVDEC ou AMF), détection des mosaïques (`rfdetr-v6`), suivi en clips jusqu'aux coupures de scène, restauration BasicVSR++, restauration secondaire facultative, fusion dans l'image, encodage (NVENC ou AMF). Interface graphique, CLI, éditeur de segments, lecteur vidéo, VR180. Le modèle LTX (NVIDIA) est réservé aux supporters.

## Comment c'est branché
```mermaid
flowchart LR
  A["Desktop GUI app.py"] --> B["Video orchestration pipeline.py"]
  C["CLI main.py"] --> B
  B --> D["Video decoding video_decoder.py"]
  B --> E["Clip tracking clip_tracker.py"]
  E --> F["Restoration pipeline"]
  F --> G["Video encoding video_encoder.py"]
```

## Essayer
```bash
jasna --input input.mp4 --output output.mkv
jasna --input photo.png --output restored.png
jasna --input input_folder --output output_folder
jasna --help
```

## Coût et pièges
BasicVSR++ est gratuit ; LTX, SD 1.5 et la restauration d'images passent par un code de licence payant (Buy Me a Coffee ou autre). GPU NVIDIA GTX 16 ou RTX 20+ (AMD RX 7000/9000 expérimental). Première tâche : 15 à 60 minutes de préparation des modèles.

## Ce que ce n'est pas
Pas un outil généraliste : il ne restaure que des mosaïques. Les modèles et dépendances ont leurs propres licences. Le chemin d'installation ne doit contenir aucun caractère non anglais. Usage sensible : le README ne traite pas du consentement.

## Alternatives
- Lada (Codeberg) : dont Jasna s'inspire, plus économe en mémoire GPU.

## Pour toi
À surveiller : technique intéressante de vidéo GPU, mais licence AGPL, un seul mainteneur et un usage qui n'a pas de rapport direct avec ton métier.

