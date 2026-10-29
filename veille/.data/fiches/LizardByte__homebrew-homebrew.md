---
schema: 1
depot: LizardByte/homebrew-homebrew
source_readme_sha: 87db2a9aa0e89d15
ecrite_le: 2026-10-29
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# LizardByte/homebrew-homebrew

> Tap Homebrew officiel de LizardByte : formules Sunshine (stable, beta) et CUDA Toolkit versionné.

## Le problème
Installer Sunshine et plusieurs versions de CUDA via Homebrew sans compiler à la main.

## Ce que ça fait vraiment
Un tap Homebrew avec les formules `sunshine`, `sunshine-beta` et `cuda@12.9` à `cuda@13.2`. Les formules CUDA partagent la logique d'installation de `lib/cuda_formula.rb`.

## Comment c'est branché
```mermaid
flowchart LR
  A[brew tap] --> B[sunshine.rb]
  A --> C[sunshine-beta.rb]
  A --> D[cuda@13.0.rb]
  D --> E[cuda_formula.rb]
```

## Essayer
```bash
brew tap LizardByte/homebrew
brew tap-info LizardByte/homebrew
brew install sunshine
brew test sunshine
```

## Coût et pièges
Gratuit ; matériel NVIDIA et licence CUDA à ta charge. README très court.

## Ce que ce n'est pas
Pas un installateur de pilotes GPU : ni garantie sur la plateforme visée, non documentée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu installes Sunshine (streaming de jeux) ou plusieurs CUDA via Homebrew ; pas de valeur pour ta veille IA.

