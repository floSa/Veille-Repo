---
schema: 1
depot: K9i-0/ccpocket
source_readme_sha: 262bea19e6624cd4
ecrite_le: 2026-10-23
nature: app
deploiement: npm
prerequis: [Node, clé d'API, service tiers]
cout: freemium
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# K9i-0/ccpocket

> Client mobile et bureau pour piloter Codex et Claude depuis un téléphone via un serveur « Bridge » local.

## Le problème
Lancer, approuver et relire le travail d'un agent de code oblige à rester devant la machine qui l'héberge.

## Ce que ça fait vraiment
Un serveur Bridge (npm) tourne sur ta machine, pilote les CLI Codex ou Claude et relaie sessions, approbations, fichiers, diffs git et worktrees à l'application. Connexion par QR code, mDNS ou Tailscale ; messages en file hors ligne. Le code reste sur ta machine.

## Comment c'est branché
```mermaid
flowchart LR
  A[CC Pocket app] --> B[Bridge Server]
  B --> W[websocket.ts]
  B --> S[session.ts]
  S --> C[claude-provider.ts]
  S --> X[codex-process.ts]
  B --> G[git-operations.ts]
```

## Essayer
```bash
npx @ccpocket/bridge@latest
```
```bash
npx @ccpocket/bridge@1 setup
```

## Coût et pièges
Claude utilise `ANTHROPIC_API_KEY` par défaut ; l'authentification par abonnement exige `BRIDGE_ALLOW_CLAUDE_OAUTH=1`, de portée floue selon le README. Achats « Supporter » optionnels dans l'application.

## Ce que ce n'est pas
Pas un hébergement cloud d'agent. Non affilié à Anthropic ni OpenAI. Linux et Windows restent expérimentaux.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour suivre un agent à distance, mais exposer un Bridge demande de soigner l'accès (Tailscale) ; MIT.

