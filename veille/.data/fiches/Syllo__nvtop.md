---
schema: 1
depot: Syllo/nvtop
source_readme_sha: 8bf88afb5a9f087b
ecrite_le: 2026-11-25
nature: outil
deploiement: binaire
prerequis: [GPU]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier]
verdict: adopter
---

# Syllo/nvtop

> Moniteur de GPU en terminal, façon htop, pour NVIDIA, AMD, Intel et plusieurs accélérateurs.

## Le problème
Sur une machine à plusieurs GPU, savoir qui consomme quoi oblige à enchaîner des commandes propres à chaque fabricant.

## Ce que ça fait vraiment
Affiche en temps réel utilisation, mémoire, température, puissance et horloges de chaque GPU, avec les processus qui les utilisent. Gère AMD, Intel, NVIDIA, Apple (limité), Qualcomm Adreno, Ascend, Tenstorrent et d'autres. F2 ouvre la configuration, F12 la sauvegarde. Les infos de processus passent par l'interface fdinfo du noyau.

## Comment c'est branché
```mermaid
flowchart TD
  A["src/nvtop.c"] --> C["src/extract_gpuinfo.c"]
  C --> D["extract_gpuinfo_nvidia.c"]
  C --> E["extract_gpuinfo_amdgpu.c"]
  C --> G["extract_processinfo_fdinfo.c"]
  A --> B["src/interface.c"]
  B --> H["src/plot.c"]
```

## Essayer
```bash
sudo apt install nvtop
nvtop
man nvtop
```

## Coût et pièges
Gratuit. Les processus AMD demandent un noyau 5.14 ou plus, Intel 5.19 ou plus, avec CAP_PERFMON pour les mesures complètes. Sous WSL2, ne pas réinstaller les pilotes NVIDIA Linux.

## Ce que ce n'est pas
Ni un outil d'historisation ni un exporteur de métriques : c'est un affichage interactif. Il ne remplace pas une supervision de cluster.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter : un outil léger et multi-fabricants pour surveiller les GPU d'entraînement ou d'inférence, sans dépendance lourde.

