---
schema: 1
depot: LLaVA-VL/LLaVA-NeXT
source_readme_sha: 3e75ab9746089102
ecrite_le: 2026-11-05
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# LLaVA-NeXT

> Famille de modèles multimodaux ouverts (image, multi-images, vidéo) avec code d'inférence et d'évaluation.

## Le problème
Il faut des modèles vision-langage ouverts, capables aussi de vidéo et de multi-images, avec des scripts d'inférence reproductibles.

## Ce que ça fait vraiment
Regroupe les variantes LLaVA-OneVision, LLaVA-NeXT-Image, -Video et -Interleave, avec scripts de démonstration et d'évaluation (via lmms-eval). Le déploiement accéléré passe par SGLang, y compris la vidéo sur plusieurs nœuds. Les détails sont dans des pages liées, non reprises dans ce README.

## Comment c'est branché
Pas de diagramme fourni. Le README décrit un dépôt unique avec des sous-projets par modalité (OneVision, Image, Video, Interleave), le service d'inférence étant délégué à SGLang.

## Essayer
```bash
git clone https://github.com/LLaVA-VL/LLaVA-NeXT
cd LLaVA-NeXT
conda create -n llava python=3.10 -y
conda activate llava
pip install --upgrade pip
pip install -e ".[train]"
```

## Coût et pièges
GPU nécessaire en pratique (non chiffré dans le README). Il faut un second dépôt, SGLang, pour le serving. 355 issues ouvertes.

## Ce que ce n'est pas
Pas une application prête à l'emploi : le README renvoie à des sous-pages pour l'usage. Aucun exemple d'inférence n'y figure.

## Alternatives
SGLang, nommé pour l'accélération du service ; lmms-eval pour l'évaluation.

## Pour toi
À surveiller : référence utile pour du multimodal ouvert, mais README mince ; vérifie l'état des poids et de la mise à jour avant de bâtir dessus.

