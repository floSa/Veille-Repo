---
schema: 1
depot: omacom/omarchy-iso
source_readme_sha: ce8c27c7656ec678
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# omacom/omarchy-iso

> Construit l'ISO d'installation d'Omarchy, une distribution Arch Linux préconfigurée, pour mainteneurs et testeurs.

## Le problème
Installer Omarchy proprement, y compris sans clavier, demande une image qui embarque configurateur, système de base et paquets hors ligne.

## Ce que ça fait vraiment
Écrit une image racine btrfs compressée avec `zstdcat | dd`, installe les paquets propres à la machine depuis un miroir embarqué et crée l'utilisateur. Prend en charge l'installation automatique par un disque `cidata`, des images VM nocturnes, x86 et aarch64, la vérification par somme et signature. De nombreux scénarios de test (acceptation, intégration, mise à jour) tournent sur QEMU.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  M["bin/omarchy-iso-make"] --> I["ISO"]
  I --> T["bin/omarchy-iso-test"]
  T --> S["bin/omarchy-iso-sign"]
  S --> U["bin/omarchy-iso-upload"]
  I --> V["images VM (nightly)"]
```

## Essayer
```bash
./bin/omarchy-iso-make
./bin/omarchy-iso-boot release/omarchy.iso
./test/all
```

## Coût et pièges
Machine Linux avec QEMU pour les tests ; la signature exige 1Password CLI et l'envoi exige rclone. L'image VM fait 4 à 5 Go.

## Ce que ce n'est pas
Ce n'est pas l'environnement Omarchy lui-même : il vit dans un autre dépôt. Le README s'adresse surtout aux mainteneurs ; l'installation utilisateur est dans le manuel.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : outillage d'une distribution Linux, sans rapport avec data, IA ou MLOps.

