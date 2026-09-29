---
schema: 1
depot: YaoFANGUK/video-subtitle-remover
source_readme_sha: d8a6b677dc5e5319
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [GPU, version de Python, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# YaoFANGUK/video-subtitle-remover

> Logiciel IA qui efface les sous-titres incrustés d'une vidéo, en GUI ou en ligne de commande.

## Le problème
Les sous-titres gravés dans l'image ne peuvent pas être désactivés ; les masquer dégrade la vidéo.

## Ce que ça fait vraiment
Détecte la zone de texte (ou prend des coordonnées) et remplit par inpainting avec STTN, LAMA ou ProPainter, sans changer la résolution. Ffmpeg gère les images et le remuxage. Modes CUDA (11.8, 12.6, 12.8), DirectML, CPU et macOS Apple Silicon. Images Docker et archives Windows précompilées. Le README est en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  U[gui.py / backend/main.py] --> Ff[FFmpeg Binaries]
  Ff --> Sd[Scene Detection]
  Sd --> Io[Inpaint Orchestrator config.py]
  Io --> Al[STTN / LAMA / ProPainter]
  Al --> Mx[Frame Reassembler & Muxing]
  Mx --> Out[Output Video]
```

## Essayer
```bash
docker run -it --name vsr --gpus all eritpchy/video-subtitle-remover:1.4.0-cuda11.8 python backend/main.py -i test/test.mp4 -o test/test_no_sub.mp4
python gui.py
```

## Coût et pièges
Gratuit ; GPU recommandé, ProPainter est gourmand en VRAM et lent. Dépendances lourdes (PaddlePaddle, Torch, ONNX). Sur Apple Silicon, la détection semble moins précise.

## Ce que ce n'est pas
Pas un extracteur de sous-titres (VSE est un autre projet). Le résultat varie selon l'algorithme et la vidéo.

## Alternatives
video-subtitle-extractor (VSE), cité comme compagnon pour extraire les sous-titres.

## Pour toi
À surveiller : bon exemple d'inpainting vidéo sous Apache-2.0, mais lourd à installer et documenté surtout en chinois.

