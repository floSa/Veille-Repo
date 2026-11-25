---
schema: 1
depot: nvidia-isaac/cuVSLAM
source_readme_sha: 8c4c5c3950c070e7
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# nvidia-isaac/cuVSLAM

> Bibliothèque NVIDIA d'odométrie visuelle et de SLAM accélérés par CUDA, pour caméras, IMU et robots.

## Le problème
Un robot doit se localiser et cartographier en temps réel à partir de caméras, sans réglages à la main.

## Ce que ça fait vraiment
Cinq modes d'odométrie : Mono, RGBD, Multicamera, Inertial, Multisensor (ce dernier expérimental). Le SLAM asynchrone ferme les boucles, enregistre les cartes dans LMDB et peut se relocaliser, y compris sans pose de départ via AnyLoc (DINOv2, TensorRT). Interfaces C++ et Python.

## Comment c'est branché
```mermaid
flowchart TD
  CL["Appelant : caméras, IMU"] --> API["libs/cuvslam/cuvslam2.h"]
  API --> TR["tracker.cpp"]
  TR --> SOF["libs/sof/sof.h (front-end)"]
  SOF --> PL["tracker_state_machine.cpp"]
  PL --> OD["libs/odometry/*"]
  OD --> AS["async_slam.cpp"]
  AS --> DB["lmdb_slam_database.cpp"]
```

## Essayer
```bash
pip install cuvslam_cu12-*.whl
pip install "./cuvslam_cu12-<version>-<tags>.whl[cuda]"
cmake -S . -B build
cmake --build build --parallel $(nproc)
```

## Coût et pièges
Gratuit, mais exige un GPU NVIDIA, CUDA 12 ou 13 et Ubuntu 22.04+ (ou Jetson). Les roues ne couvrent que des combinaisons précises. Licence non identifiée par GitHub. Calibration et synchronisation des caméras à 1 ms sont déterminantes.

## Ce que ce n'est pas
Pas un logiciel clés en main : aucun réglage n'est attendu, mais il faut des caméras calibrées. Le mode Multisensor reste expérimental.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant si tu fais de la vision ou de la robotique sur GPU NVIDIA, mais la licence est à vérifier et le champ est étroit.

