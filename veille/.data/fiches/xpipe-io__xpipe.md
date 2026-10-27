---
schema: 1
depot: xpipe-io/xpipe
source_readme_sha: 49c03896f4908d32
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# xpipe-io/xpipe

> Centre de connexions de bureau vers serveurs, conteneurs et VM, par-dessus SSH, Docker et consorts.

## Le problème
Gérer des centaines de connexions (SSH, conteneurs, Kubernetes, VM) et leurs fichiers depuis un seul endroit.

## Ce que ça fait vraiment
Application Java de bureau : hub hiérarchique de connexions, navigateur de fichiers distant, lanceur de terminal, scripts réutilisables, coffre chiffré synchronisable via git. S'appuie sur les programmes installés (ssh, docker, kubectl), sans rien installer sur les cibles. Serveur MCP intégré optionnel, API HTTP.

## Comment c'est branché
```mermaid
flowchart LR
  UI[User Interface] --> Core[Core Application Logic]
  Core --> Beacon[Beacon Communication]
  Core --> Ext[Extensions base proc system uacc]
  API[API Server HTTP] --> Core
  Ext --> Ext2[SSH Docker Kubernetes VMs]
```

## Essayer
```bash
bash <(curl -sL https://github.com/xpipe-io/xpipe/raw/master/get-xpipe.sh)
winget install xpipe-io.xpipe --source winget
brew install --cask xpipe-io/tap/xpipe
```

## Coût et pièges
Modèle « open core » : fonctions homelab/professionnelles et bibliothèque de gestion des shells sont fermées et payantes. Application de bureau, à ne pas installer sur un serveur.

## Ce que ce n'est pas
Pas un outil d'orchestration ni de supervision, pas une interface web (sauf conteneur webtop).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : confortable pour jongler entre machines GPU et clusters ; vérifier le périmètre gratuit avant adoption d'équipe.

