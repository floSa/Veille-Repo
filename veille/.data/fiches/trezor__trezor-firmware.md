---
schema: 1
depot: trezor/trezor-firmware
source_readme_sha: bf3fb63a7bc41111
ecrite_le: 2026-11-25
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# trezor/trezor-firmware

> Firmware des portefeuilles matériels Trezor, avec bibliothèque cliente Python et stockage NORCOW.

## Le problème
Garder des clés de cryptomonnaies dans un appareil dédié, séparé de l'ordinateur.

## Ce que ça fait vraiment
Le dépôt contient le firmware Trezor Core (T, Safe 3, 5, 7), celui du Trezor One, une bibliothèque cryptographique autonome, le stockage NORCOW et le client Python avec `trezorctl`. L'hôte envoie des requêtes protobuf ; le dispatcher exécute des workflows enregistrés qui utilisent l'état de l'appareil et le stockage sécurisé.

## Comment c'est branché
```mermaid
flowchart TD
  PC["Client Python (client.py)"] --> FW["Firmware (main.py)"]
  FW --> WI["Sessions wire"]
  WI --> MH["message_handler.py"]
  MH --> WF["Workflows (apps)"]
  WF --> DS["Device state (device.py)"]
  DS --> NS["NORCOW (storage.c)"]
```

## Essayer
```bash
# Aucune commande documentée dans le README : la documentation est dans docs/ et sur docs.trezor.io.
```

## Coût et pièges
Gratuit, mais la compilation de firmware embarqué est lourde. Licence présente mais non identifiée par GitHub. Beaucoup d'issues ouvertes (771).

## Ce que ce n'est pas
Pas un portefeuille logiciel : il faut un appareil Trezor. Pas une bibliothèque générique de cryptographie.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : firmware de portefeuille crypto, sans rapport avec un profil data / IA / MLOps.

