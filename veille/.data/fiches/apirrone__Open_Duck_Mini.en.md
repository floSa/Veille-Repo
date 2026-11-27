# apirrone/Open_Duck_Mini

> Resource hub for building a Disney-inspired mini bipedal droid, from CAD to reinforcement learning.

## The problem
A cheap bipedal robot requires design, simulation, policy training and embedded deployment, scattered across repositories.

## What it actually does
Centralizes CAD (Onshape, URDF), MuJoCo simulation, RL training (migrating to MuJoCo Playground), actuator identification (Rhoban's BAM), printing and assembly guides, BOM. The ONNX policy runs on a Raspberry Pi Zero 2W via a separate runtime repository. The README admits that many scripts are undocumented.

## How it is wired
```mermaid
flowchart LR
  C["CAD & URDF"] --> S["MuJoCo Simulation"]
  S --> R["RL Training Pipeline"]
  R --> O["Politiques .onnx"]
  O --> E["Open_Duck_Mini_Runtime (Pi Zero 2W)"]
  E --> H["Matériel réel"]
  H --> I["Actuator Identification (BAM)"]
```

## Trying it
```bash
# Aucune commande dans le README : renvois vers guides d'impression, d'assemblage,
# dépôt runtime et document d'entraînement.
```

## Cost and gotchas
Hardware cost advertised under $400 (BOM). RL training needs GPU compute; assembly is "incomplete" according to the README; the CAD document is flagged as outdated.

## What it is not
Not an installable library: a working repository. Last push in January 2026, activity declining.

## Alternatives
- MuJoCo Playground: target of the RL migration.
- BAM (Rhoban): actuator identification.

## For you
Worth watching: relevant for sim2real and RL with MuJoCo, but partial documentation and a hardware hobby project.
