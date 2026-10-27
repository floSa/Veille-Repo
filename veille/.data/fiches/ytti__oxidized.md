---
schema: 1
depot: ytti/oxidized
source_readme_sha: a198a6eadf6ed9c4
ecrite_le: 2026-10-27
nature: outil
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [mainteneur unique]
verdict: ignorer
---

# ytti/oxidized

> Outil Ruby qui sauvegarde les configurations d'équipements réseau, remplaçant de RANCID, pour administrateurs réseau.

## Le problème
Les configurations de routeurs et commutateurs changent sans historique ; retrouver qui a modifié quoi est pénible.

## Ce que ça fait vraiment
Charge un inventaire (CSV, SQL, SQLite, HTTP), planifie des récupérations par un pool de threads, se connecte via un module d'entrée, applique un modèle propre à chaque OS (130+ types) puis stocke chaque version (fichier, Git, HTTP). API REST pour forcer une récupération, hooks (exec, Slack, SNS…), déclenchement par syslog.

## Comment c'est branché
```mermaid
graph LR
  A[config.rb] --> B[nodes.rb]
  B --> C[jobs.rb]
  C --> D[worker.rb]
  D --> E[node.rb]
  E --> F[Output Git]
  F --> G[Hooks]
```

## Essayer
```bash
gem install oxidized
oxidized
gem install oxidized-web
```

## Coût et pièges
Gratuit, mais s'installe par RubyGems avec paquets système (libssh2, cmake…). Ne pas le lancer en root.

## Ce que ce n'est pas
Pas un outil de configuration : il lit et archive. Le README cherche explicitement un mainteneur supplémentaire.

## Alternatives
- RANCID : l'outil que Oxidized remplace.

## Pour toi
À ignorer : domaine réseau sans rapport avec data/IA, et dépendance à très peu de mainteneurs.

