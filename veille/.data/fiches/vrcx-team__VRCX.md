---
schema: 1
depot: vrcx-team/VRCX
source_readme_sha: 3e163d6c9864c809
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [compte à créer]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# vrcx-team/VRCX

> Application compagnon pour VRChat : amis, mondes, avatars, notifications et présence Discord.

## Le problème
Le client VRChat et son site ne permettent pas de suivre facilement ses amis, ses mondes et ses avatars.

## Ce que ça fait vraiment
Gère listes d'amis, de mondes et d'avatars hors du jeu ; historique d'amitié, notes, tableau de bord à widgets, recherche, carte d'activité, métadonnées de monde dans les captures d'écran, notifications, présence Discord, surcouche VR, relance automatique après un plantage, export/import. Utilise l'API VRChat sans modifier le jeu et n'est pas approuvée par VRChat.

## Comment c'est branché
```mermaid
graph LR
  V[VRChat API] --> N[.NET App API - Cef/Electron]
  N --> IPC[IPC Mechanism]
  IPC --> E[Electron Integration]
  E --> UI[Web UI - Vue]
  N --> DB[SQLite Legacy]
  N --> D[Discord Rich Presence]
```

## Essayer
```bash
# Windows : télécharger VRCX_Setup.exe depuis les releases
# Aucune commande dans le README ; macOS et Linux : pages dédiées.
```

## Coût et pièges
Gratuit. Il faut un compte VRChat. Fonctionne via l'API de VRChat : sujet à ses limites et à ses changements.

## Ce que ce n'est pas
Pas un mod ni un outil de triche. Ne dépend pas d'une modification du jeu.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : outil pour joueurs VRChat, sans lien avec data/IA/MLOps.

