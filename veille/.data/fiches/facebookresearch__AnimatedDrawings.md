---
schema: 1
depot: facebookresearch/AnimatedDrawings
source_readme_sha: e7b008f4934c6414
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [version de Python, Docker, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [archivé, dernier commit ancien]
verdict: ignorer
---

# facebookresearch/AnimatedDrawings

> Implémentation d'un algorithme qui anime des dessins d'enfants de figures humaines à partir de mouvements BVH.

## Le problème
Animer un personnage dessiné à la main exige d'ordinaire un rigging manuel fastidieux.

## Ce que ça fait vraiment
Un détecteur et un estimateur de pose servis par TorchServe produisent masque, texture et annotations d'articulations. Le rendu OpenGL déforme le personnage (ARAP) selon un mouvement BVH et exporte MP4, GIF transparent ou fenêtre interactive, piloté par des fichiers YAML. Une interface web permet de corriger les articulations. Jeu de données de dessins d'amateurs fourni.

## Comment c'est branché
Aucun composant lisible dans le diagramme fourni ; pas de schéma.

## Essayer
```bash
conda create --name animated_drawings python=3.8.13
conda activate animated_drawings
pip install -e .
cd examples
python image_to_animation.py drawings/garlic.png garlic_out
```
Une instance TorchServe (Docker ou script macOS) doit tourner avant la dernière commande.

## Coût et pièges
Python 3.8.13 ; Docker avec parfois 16 Go de RAM pour TorchServe. Testé sur macOS Ventura et Ubuntu 18.04. Jeu de données d'environ 50 Go.

## Ce que ce n'est pas
Dépôt archivé : l'auteur ne le maintient plus. Le modèle suppose une figure humanoïde ; les autres squelettes demandent des configurations manuelles.

## Alternatives
Aucune alternative citée dans le README (une démo web est mentionnée).

## Pour toi
À ignorer : archivé et lié à Python 3.8 ; à lire seulement pour l'idée détection-pose-ARAP.

