---
schema: 1
depot: HarrisonKramer/optiland
source_readme_sha: 51262eea61c7865b
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée]
verdict: ignorer
---

# HarrisonKramer/optiland

> Plateforme Python de conception optique, différentiable via PyTorch, pour ingénieurs et chercheurs en optique.

## Le problème
Concevoir et optimiser des systèmes de lentilles passe par des logiciels fermés, peu scriptables et sans gradients.

## Ce que ça fait vraiment
Construction de systèmes réfractifs et réflectifs, tracé de rayons, analyses (PSF/MTF, front d'onde, Zernike), optimisation par fonctions de mérite, tolérancement Monte Carlo. Deux moteurs : NumPy (CPU) et PyTorch (GPU, autograd). Import/export Zemax, CODE V et OSLO, visualisation Matplotlib et VTK, GUI en option. Le tracé non séquentiel est en pré-version.

## Comment c'est branché
```mermaid
flowchart LR
  OPT["optic.py"] --> SEQ["real_ray_tracer.py"]
  OPT --> NSQ["tracer.py non séquentiel"]
  SEQ --> ANA["Analyses: wavefront, PSF, MTF"]
  OPT --> OPTI["problem.py optimisation"]
  OPT --> GUI["main_window.py"]
```

## Essayer
```bash
pip install optiland
pip install optiland[gui]
pip install optiland[torch]
```
```python
from optiland.optic import Optic
lens = Optic()
```

## Coût et pièges
Gratuit. Le GPU demande d'installer soi-même un build CUDA de PyTorch. Le README précise que le code évolue en continu.

## Ce que ce n'est pas
Pas un outil de machine learning : le ML n'y sert qu'à différencier la physique. Les modules non séquentiel et multi-séquence sont marqués pre-release et beta.

## Alternatives
Aucune alternative open source nommée dans le README.

## Pour toi
À ignorer sauf si tu fais de l'optique : hors du champ data/IA usuel, même si l'angle simulation différentiable est original.
