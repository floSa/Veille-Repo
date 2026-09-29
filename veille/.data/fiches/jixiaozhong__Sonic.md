---
schema: 1
depot: jixiaozhong/Sonic
source_readme_sha: 62abbb103a686f0f
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python, beaucoup de RAM]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# jixiaozhong/Sonic

> Code de recherche CVPR 2025 qui anime un portrait à partir d'une image et d'un fichier audio.

## Le problème
Faire parler un visage fixe de façon crédible demande de relier le son au mouvement du visage.

## Ce que ça fait vraiment
Le pipeline détecte et aligne le visage (YOLOFace), encode l'audio (Whisper-tiny, projections audio) et génère la vidéo avec Stable Video Diffusion et un UNet 3D. RIFE interpole les images, un masque recompose le résultat. Une interface Gradio existe d'après l'architecture ; le README ne documente que la ligne de commande.

## Comment c'est branché
```mermaid
flowchart LR
  I["Image + audio"] --> F["Face Aligner (align.py)"]
  F --> A["Audio Projection / Bucketing"]
  A --> P["pipeline_sonic.py"]
  P --> SVD["stable-video-diffusion-img2vid-xt"]
  SVD --> RF["RIFE + Mask Processor"]
  RF --> V["Vidéo finale"]
```

## Essayer
```bash
pip3 install -r requirements.txt
huggingface-cli download LeonJoe13/Sonic --local-dir checkpoints
python3 demo.py '/path/to/input_image' '/path/to/input_audio' '/path/to/output_video'
```

## Coût et pièges
GPU NVIDIA avec CUDA requis, testé sur un GPU de 32 Go, sous Linux. Il faut télécharger plusieurs modèles, dont SVD-xt.

## Ce que ce n'est pas
Pas un produit : l'usage repose sur des poids téléchargés. La licence n'est pas identifiée par GitHub, à lire avant tout usage.

## Alternatives
Aucune alternative nommée, sauf Realtalk pour du temps réel avec moins de GPU.

## Pour toi
À surveiller pour de la génération audio-vidéo : résultats de recherche crédibles, mais licence à vérifier et GPU lourd.

