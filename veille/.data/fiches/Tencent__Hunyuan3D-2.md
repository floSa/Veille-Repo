---
schema: 1
depot: Tencent/Hunyuan3D-2
source_readme_sha: edc4d006b977c8e2
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# Tencent/Hunyuan3D-2

> Génère des objets 3D texturés à partir d'une image, pour graphistes et chercheurs en vision.

## Le problème
Produire un maillage 3D avec textures haute résolution demande des heures de modélisation manuelle.

## Ce que ça fait vraiment
Pipeline en deux étages : Hunyuan3D-DiT crée le maillage depuis une image, Hunyuan3D-Paint synthétise la texture (aussi pour un maillage existant). Plusieurs variantes (mini, multivue, Turbo, Fast). Utilisable en code (API façon diffusers), application Gradio, serveur d'API ou addon Blender. Le plan open source liste une version TensorRT non faite.

## Comment c'est branché
```mermaid
flowchart LR
  IN["API Server, Gradio, Blender Add-on"] --> SHAPE["hy3dgen/shapegen"]
  SHAPE --> DIT["Hunyuan3D-DiT"]
  DIT --> MESH["Maillage brut"]
  MESH --> TEX["hy3dgen/texgen"]
  TEX --> PAINT["Hunyuan3D-Paint"]
  PAINT --> OUT["Actif 3D texturé"]
```

## Essayer
```bash
pip install -r requirements.txt
pip install -e .
python3 gradio_app.py --model_path tencent/Hunyuan3D-2mini --subfolder hunyuan3d-dit-v2-mini --texgen_model_path tencent/Hunyuan3D-2 --low_vram_mode
python api_server.py --host 0.0.0.0 --port 8080
```

## Coût et pièges
6 Go de VRAM pour la forme, 16 Go pour forme et texture. La texture demande de compiler `custom_rasterizer` et `differentiable_renderer` (CUDA).

## Ce que ce n'est pas
Pas un service prêt à l'emploi : un site officiel existe pour qui ne veut rien héberger. Les comparaisons du README citent des modèles anonymes. Licence non déclarée dans le catalogue.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant si tu touches à la 3D générative, mais GPU et compilation CUDA en font un chantier, et la licence n'est pas déclarée.
