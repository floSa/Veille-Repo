---
schema: 1
depot: jumpserver/jumpserver
source_readme_sha: 7f3907ab74323b8e
ecrite_le: 2026-09-29
nature: app
deploiement: docker
prerequis: [Docker, beaucoup de RAM]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# jumpserver/jumpserver

> Bastion open source de gestion des accès à privilèges (PAM) pour équipes DevOps et IT.

## Le problème
Donner accès SSH, RDP, bases ou Kubernetes à des équipes sans traçabilité ni contrôle centralisé est risqué.

## Ce que ça fait vraiment
Cœur Django (comptes, actifs, permissions, audit, terminal) avec interface web Lina et terminal web Luna.
Connecteurs de protocoles : KoKo (SSH, etc.), Chen (bases en web), Kael (IA).
Enregistrement des sessions et audit ; composants Enterprise pour RDP, VNC, bases, applis distantes.

## Comment c'est branché
```mermaid
graph LR
  WB[Web Browser] --> LI[Lina Web UI]
  WB --> LU[Luna Web Terminal]
  LI --> CORE[JumpServer Core]
  LU --> KO[KoKo Character Protocol]
  KO --> CORE
  CORE --> PM[Permission Management]
  CORE --> AS[Audit System]
```

## Essayer
```bash
curl -sSL https://github.com/jumpserver/jumpserver/releases/latest/download/quick_start.sh | bash
```

## Coût et pièges
Serveur Linux 4 cœurs / 8 Go minimum. Identifiants par défaut `admin` / `ChangeMe` à changer. Plusieurs proxys protocolaires réservés à l'Enterprise.

## Ce que ce n'est pas
Pas un outil data/IA. Pas complet en édition communautaire pour RDP/VNC/bases avancés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Hors périmètre, sauf si tu gères l'accès à l'infrastructure.
