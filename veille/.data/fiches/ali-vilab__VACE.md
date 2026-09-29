---
schema: 1
depot: ali-vilab/VACE
source_readme_sha: 15844abba9a2c16f
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# ali-vilab/VACE

> Modèle unifié de création et d'édition vidéo (référence, édition, édition masquée), pour chercheurs en génération vidéo.

## Le problème
Générer puis éditer une vidéo (échanger un objet, étendre une scène, animer une image) exige des modèles distincts.

## Ce que ça fait vraiment
Un pipeline unique prend texte, vidéo, masque et images de référence ; des annotateurs préparent les artefacts de conditionnement (profondeur, inpainting par bbox, composition), puis l'inférence passe par Wan2.1 ou LTX-Video. Extension de prompt optionnelle (DashScope), démos Gradio, multi-GPU pour Wan.

## Comment c'est branché
```mermaid
flowchart LR
  U["Texte + vidéo/masque/images"] --> P["vace_pipeline.py"]
  P --> A["Annotateurs (preprocess)"]
  A --> C["Conditioning artifacts"]
  C --> W["Wan VACE"]
  C --> L["LTX VACE"]
  W --> V["Vidéo générée"]
```

## Essayer
```bash
python vace/vace_pipeline.py --base wan --task depth --video assets/videos/test.mp4 --prompt 'xxx'
python vace/vace_preproccess.py --task depth --video assets/videos/test.mp4
python vace/gradios/vace_wan_demo.py
```

## Coût et pièges
CUDA 12.4, PyTorch ≥ 2.5.1 ; le 14B en 720p demande 8 GPU (`torchrun`). Les poids sont à télécharger séparément dans `/models/`. L'extension de prompt peut dériver en édition.

## Ce que ce n'est pas
Les licences varient : Apache-2.0 pour Wan, RAIL-M pour LTX-Video ; « tous les modèles héritent de la licence du modèle d'origine ».

## Alternatives
- Wan2.1 et LTX-Video : les modèles de base sur lesquels VACE s'appuie.

## Pour toi
À surveiller : à tester si tu as des GPU pour la vidéo générative ; vérifier la licence du modèle de base choisi.

