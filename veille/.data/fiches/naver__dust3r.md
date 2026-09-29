---
schema: 1
depot: naver/dust3r
source_readme_sha: 30b6eb07fb95e241
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dernier commit ancien]
verdict: surveiller
---

# naver/dust3r

> Implémentation officielle de DUSt3R, reconstruction 3D à partir de paires d'images, pour chercheurs en vision.

## Le problème
La reconstruction 3D classique exige des poses de caméra et des paramètres calibrés ; on veut partir de simples images.

## Ce que ça fait vraiment
Un modèle ViT prédit pour chaque pixel une carte de points 3D et une confiance à partir de deux images ; un alignement global (MST, optimisation) fusionne plusieurs vues en nuage de points, poses et focales. Livré avec démo Gradio, Docker, code d'entraînement et scripts de prétraitement de neuf jeux de données.

## Comment c'est branché
```mermaid
graph LR
  A["Images"] --> B["image_pairs"]
  B --> C["AsymmetricCroCo3DStereo"]
  C --> D["Global alignment cloud_opt"]
  D --> E["Nuage de points et poses"]
  E --> F["demo.py Gradio"]
```

## Essayer
```bash
git clone --recursive https://github.com/naver/dust3r
conda create -n dust3r python=3.11 cmake=3.14.0
pip install -r requirements.txt
python3 demo.py --model_name DUSt3R_ViTLarge_BaseDecoder_512_dpt
```

## Coût et pièges
GPU CUDA conseillé (noyaux RoPE optionnels à compiler). Les checkpoints sont sous CC-BY-NC-SA 4.0 et les jeux d'entraînement ont des licences non commerciales. Dernier push le 2025-09-24, soit plus d'un an.

## Ce que ce n'est pas
Pas utilisable tel quel en produit commercial : la licence du code n'est pas identifiée par GitHub et les poids sont non commerciaux.

## Alternatives
MASt3R, Pow3R et MUSt3R, cités par le README comme évolutions du même groupe.

## Pour toi
À surveiller : intéressant pour l'expérimentation en vision 3D, mais la licence non commerciale et l'absence de commit depuis plus d'un an limitent l'adoption.

