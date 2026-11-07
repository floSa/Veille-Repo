---
schema: 1
depot: truenas/truenas-proxmox-plugin
source_readme_sha: 799abc96c67ae4e8
ecrite_le: 2026-11-07
nature: extension
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft]
verdict: surveiller
---

# truenas/truenas-proxmox-plugin

> Greffon Proxmox VE qui stocke disques de machines virtuelles et conteneurs sur TrueNAS, en iSCSI ou NVMe/TCP.

## Le problème
Brancher un stockage ZFS TrueNAS à Proxmox demande de créer à la main volumes, extents et cibles pour chaque disque.

## Ce que ça fait vraiment
Crée automatiquement les zvols et les extents iSCSI via l'API TrueNAS, gère les sessions sur chaque nœud, les snapshots ZFS (RAM comprise), le redimensionnement en agrandissement et les clusters. NVMe/TCP est disponible avec TrueNAS 25.10+ et Proxmox VE 9.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A[Proxmox VE] --> B[TrueNASPlugin.pm]
  B --> C[API WebSocket TrueNAS]
  C --> D[Zvols ZFS]
  D --> E[Cible iSCSI ou NVMe/TCP]
  E --> A
```

## Essayer
```bash
bash <(curl -sSL https://raw.githubusercontent.com/truenas/truenas-proxmox-plugin/main/install.sh) --non-interactive --apt-install
qm create 100 --name "test-vm" --memory 2048 --cores 2
qm set 100 --scsi0 truenas-storage:32
```

## Coût et pièges
Gratuit, mais exige TrueNAS SCALE 25.10 ou plus, une clé d'API et un dataset. Problème connu en NVMe/TCP : erreurs d'E/S sur gros transferts, voire corruption silencieuse, contournées par une règle udev.

## Ce que ce n'est pas
Pas un stockage de sauvegardes ni d'ISO. Pas compatible avec une TrueNAS antérieure à 25.10. Perl pour le greffon (non listé en prérequis).

## Alternatives
- iSCSI standard de Proxmox : sans gestion automatique de volumes ni de snapshots.
- NFS : prend en charge sauvegardes et ISO, mais sans performance de niveau bloc.

## Pour toi
À surveiller : utile seulement si tu as un homelab ou un cluster Proxmox avec TrueNAS ; sans lien direct avec ton travail IA/MLOps.

