---
schema: 1
depot: jamesyc/TimeCapsuleSMB
source_readme_sha: f77ce3c57501d81d
ecrite_le: 2026-10-08
nature: outil
deploiement: autre
prerequis: [version de Python, compte à créer]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, télémétrie]
verdict: ignorer
---

# jamesyc/TimeCapsuleSMB

> Installe Samba 4 directement sur une Apple Time Capsule pour la rendre compatible avec macOS 27.

## Le problème
Les Time Capsules ne parlent qu'AFP et SMB1, retirés des macOS récents, ce qui casse les sauvegardes Time Machine.

## Ce que ça fait vraiment
Déploie par SSH un binaire Samba 4.25 statique (fork modifié pour NetBSD) sur l'appareil. Il annonce SMB par Bonjour, copie le runtime en RAM au démarrage et sert les disques HFS+. Sur les modèles NetBSD 4, un patch de firmware assure le démarrage auto. Application macOS ou CLI `tcapsule` (deploy, doctor, flash, activate).

## Comment c'est branché
```mermaid
flowchart LR
  A[Administrateur] --> M[main.py CLI]
  A --> G[main.swift app macOS]
  M --> S[service.py]
  S --> D[Déploiement Samba]
  D --> T[Time Capsule]
  S --> K[doctor_steps.py]
  S --> F[flash.py]
```

## Essayer
```bash
./tcapsule bootstrap
.venv/bin/tcapsule configure
.venv/bin/tcapsule deploy
.venv/bin/tcapsule doctor
```

## Coût et pièges
Gratuit. Modifier le firmware peut rendre l'appareil inutilisable ; des réinitialisations pendant le déploiement sont signalées. L'accès SMB est mappé sur root. Le README dit que les commandes ont une télémétrie activée par défaut.

## Ce que ce n'est pas
Ne doit pas être exposé sur Internet. Disques HFS+ uniquement, pas FAT32.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : utile seulement si tu possèdes une Time Capsule, hors périmètre data/IA, avec télémétrie et modification de firmware.

