---
schema: 1
depot: manycore-research/SpatialLM
source_readme_sha: 872237353491312e
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python, beaucoup de RAM]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# manycore-research/SpatialLM

> Petit LLM 3D qui transforme un nuage de points en murs, portes, fenêtres et boîtes d'objets.

## Le problème
Passer d'un nuage de points brut (vidéo, RGBD, LiDAR) à une scène structurée exploitable en robotique.

## Ce que ça fait vraiment
Un encodeur de nuage de points (`pcd_encoder.py`) alimente un LLM Llama ou Qwen (0,5 à 1 milliard de paramètres). La sortie est un texte de mise en page décodé par le module `layout` et visualisable avec `rerun`. La version 1.1 accepte une liste de catégories parmi 59. Jeu de test de 107 nuages fourni.

## Comment c'est branché
```mermaid
flowchart LR
    P["Point Cloud PLY"] --> L["PCD Loader"]
    L --> E["PCD Encoder"]
    E --> M["SpatialLM Llama or Qwen"]
    M --> Y["Layout Module"]
    Y --> V["visualize.py"]
```

## Essayer
```bash
huggingface-cli download manycore-research/SpatialLM-Testset pcd/scene0000_00.ply --repo-type dataset --local-dir .
python inference.py --point_cloud pcd/scene0000_00.ply --output scene0000_00.txt --model_path manycore-research/SpatialLM1.1-Qwen-0.5B
python visualize.py --point_cloud pcd/scene0000_00.ply --layout scene0000_00.txt --save scene0000_00.rrd
```

## Coût et pièges
Testé avec Python 3.11, PyTorch 2.4.1 et CUDA 12.4. Compilation de torchsparse ou flash-attn longue. Licence non reconnue par GitHub.

## Ce que ce n'est pas
Ce n'est pas un modèle généraliste : nuages alignés sur l'axe z. Les scores sont mesurés sur les jeux du projet ; la détection zéro-shot sur vidéos reste modeste pour plusieurs catégories.

## Alternatives
- SceneScript, RoomFormer, V-DETR : comparés dans les benchmarks du README.

## Pour toi
À surveiller : intéressant si tu fais de la vision 3D ou de la robotique, mais la licence est à clarifier et la mise en place lourde.

