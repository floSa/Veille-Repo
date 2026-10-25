---
schema: 1
depot: Emanuele-web04/remodex
source_readme_sha: d229e94e9c46182d
ecrite_le: 2026-10-25
nature: app
deploiement: npm
prerequis: [Node, compte à créer, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# Emanuele-web04/remodex

> Pont local et application iOS pour piloter Codex, qui tourne sur ton Mac, depuis l'iPhone.

## Le problème
Codex s'exécute sur le Mac ; dès qu'on s'en éloigne, impossible de suivre, relancer ou valider une tâche en cours.

## Ce que ça fait vraiment
Un pont Node (`remodex`) lance `codex app-server` et relaie du JSON-RPC vers l'iPhone via un relais WebSocket. L'appairage se fait par QR, puis le canal est chiffré de bout en bout (X25519, Ed25519, AES-256-GCM). L'app permet plan mode, sous-agents, actions git, pièces jointes, terminal SSH. Sur macOS, un service `launchd` maintient la reconnexion.

## Comment c'est branché
```
iOS app ⇄ relais WebSocket ⇄ remodex (pont, Mac) ⇄ codex app-server
                                       │
                                  git local, ~/.codex/sessions
```
```mermaid
flowchart LR
  I[App iOS] --> R[Relais WebSocket]
  R --> B[Pont remodex]
  B --> C[codex app-server]
  B --> G[git local]
  C --> S[~/.codex/sessions]
```

## Essayer
```bash
npm install -g remodex@latest
remodex up
codex login status
./run-local-remodex.sh
```

## Coût et pièges
L'app doit être installée (App Store ou build Xcode 16+). Il faut Codex CLI authentifié sur le Mac. Le relais auto-hébergé est conseillé via Tailscale ; le LAN en `ws://` est fragile sur iOS.

## Ce que ce n'est pas
Pas un client autonome : sans Mac allumé avec Codex, rien ne tourne. Le service d'arrière-plan n'existe que sur macOS. L'auteur prévient : projet très jeune, bugs attendus.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique si Codex est ton agent principal, mais le relais, le chiffrement maison et le statut précoce justifient d'attendre avant d'y confier du code sensible.

