---
schema: 1
depot: open-mmlab/mmpose
source_readme_sha: a3c23bb64606398e
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [dernier commit ancien]
verdict: surveiller
---

# open-mmlab/mmpose

> Boîte à outils PyTorch d'estimation de pose 2D/3D (humain, animal, visage, main) de l'écosystème OpenMMLab.

## Le problème
Reproduire et comparer des modèles de pose avec des jeux de données variés est long sans cadre commun.

## Ce que ça fait vraiment
Fournit un inferencer (image ou vidéo → keypoints décodés → visualisation), des modèles configurables (backbones, têtes, codecs), de nombreux jeux de données et métriques. Inclut la famille RTMPose/RTMO/RTMW et des démos (Gradio, TorchServe). Un zoo de modèles documente les résultats.

## Comment c'est branché
```mermaid
flowchart LR
  A["Image ou vidéo"] --> B["Pose Inferencer"]
  B --> C["Data Transforms"]
  C --> D["Backbones et Pose Heads"]
  D --> E["Keypoint Codecs"]
  E --> F["Pose Visualizer"]
```

## Essayer
Aucune commande réelle dans le README fourni : l'installation renvoie à `installation.md` et à « A 20-minute Tour to MMPose ».

## Coût et pièges
Un GPU est pratiquement nécessaire pour l'entraînement ; l'écosystème OpenMMLab (MMEngine, MMCV) s'installe avec MIM. Certains algorithmes ne sont pas migrés vers la 1.x.

## Ce que ce n'est pas
Pas une API clé en main. Dernier push en août 2025 (plus d'un an avant la date de référence, d'après le catalogue).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : référence solide pour la vision par pose, mais le rythme de commits ralentit.

