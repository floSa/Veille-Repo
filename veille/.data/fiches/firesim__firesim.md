---
schema: 1
depot: firesim/firesim
source_readme_sha: dc76baa254a2725f
ecrite_le: 2026-10-29
nature: outil
deploiement: autre
prerequis: [compte à créer, GPU, beaucoup de RAM]
cout: payant
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# firesim/firesim

> Plateforme de simulation matérielle accélérée par FPGA, pour concepteurs de puces et chercheurs en architecture.

## Le problème
Simuler un processeur ou un SoC en RTL avec des logiciels est trop lent pour faire tourner des charges réelles.

## Ce que ça fait vraiment
- Simule des designs écrits en Chisel ou Verilog à 10 à 100 MHz.
- Tourne sur FPGA locaux (Xilinx Alveo) ou dans le cloud (Amazon EC2 F1), jusqu'à des centaines de FPGA.
- Fournit des modèles d'E/S (DRAM, Ethernet, disques, UART) et une simulation réseau précise au cycle près.
- Livre une distribution Linux compatible avec les systèmes RISC-V simulés.
- Origine : UC Berkeley.

## Comment c'est branché
```mermaid
flowchart LR
  A[RTL Chisel ou Verilog] --> B[Compilateur Golden Gate]
  B --> C[FPGA local ou EC2 F1]
  D[Modèles E/S] --> C
  C --> E[Linux RISC-V simulé]
```

## Essayer
Aucune commande documentée dans le README (renvoi à docs.fires.im).

## Coût et pièges
Matériel FPGA ou instances cloud payantes. Licence présente mais non identifiée par GitHub.

## Ce que ce n'est pas
Pas un simulateur logiciel simple. Il faut une conception matérielle et un budget FPGA.

## Alternatives
Chipyard, Rocket Chip et BOOM (cités comme sources de designs RTL, pas comme remplaçants).

## Pour toi
À ignorer : conception de puces, hors périmètre data / IA / MLOps.

