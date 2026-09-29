---
schema: 1
depot: ultralytics/ultralytics
source_readme_sha: 0e01c0e5ca7f1868
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft, licence à clauses commerciales]
verdict: adopter
---

# ultralytics/ultralytics

> Bibliothèque et CLI YOLO pour entraîner, évaluer, prédire et exporter des modèles de vision.

## Le problème
Enchaîner détection, segmentation, pose, suivi et export vers ONNX/TensorRT exige sinon plusieurs dépôts et beaucoup de colle.

## Ce que ça fait vraiment
Une interface unique `YOLO(...)` / `yolo` pour train, val, predict, track, export, benchmark.
Tâches : détection, segmentation d'instance et sémantique, profondeur, classification, pose, OBB ; tracking ByteTrack/BoT-SORT.
Export vers ONNX, TensorRT, OpenVINO, CoreML, TFLite, NCNN… via `exporter.py` et `autobackend.py`.
Couche « solutions » : comptage, heatmaps, estimation de vitesse ; callbacks W&B, MLflow, Comet, ClearML.

## Comment c'est branché
```mermaid
flowchart LR
  A[YOLO CLI] --> B[Model core model.py]
  B --> C[Trainer trainer.py]
  B --> D[Predictor predictor.py]
  B --> E[Exporter exporter.py]
  F[Data pipeline build.py] --> C
  D --> G[Backends autobackend.py]
  D --> H[Trackers byte_tracker.py]
```

## Essayer
```bash
pip install ultralytics
yolo predict model=yolo26n.pt source='https://ultralytics.com/images/bus.jpg'
yolo val detect data=coco.yaml device=0
```

## Coût et pièges
Gratuit sous AGPL-3.0 ; tout usage commercial fermé demande une licence Enterprise payante. GPU utile pour l'entraînement ; poids téléchargés au premier usage.

## Ce que ce n'est pas
Pas libre d'intégration dans un produit propriétaire sans licence. YOLO27 annoncé mais non disponible. Le Hub Ultralytics est un service distant optionnel.

## Alternatives
Non documenté : aucun dépôt alternatif nommé dans le README.

## Pour toi
Référence pour la vision ; adopter en interne, trancher la question AGPL avant tout livrable client.
