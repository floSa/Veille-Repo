---
schema: 1
depot: luckyPipewrench/pipelock
source_readme_sha: b24f45d6ab79bece
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# luckyPipewrench/pipelock

> Pare-feu de sortie pour agents IA qui inspecte le trafic réseau et MCP et signe ses décisions.

## Le problème
Un agent qui possède tes clés d'API et un accès shell peut les exfiltrer en une requête, ou être détourné par une injection de prompt.

## Ce que ça fait vraiment
S'interpose comme proxy HTTP, WebSocket, MCP et A2A. Détecte secrets (65 motifs), injections, SSRF et empoisonnement d'outils, avec trois modes (strict, balanced, audit). Émet des reçus signés vérifiables hors ligne, offre un bac à sable (Landlock, seccomp) et un kill switch. Le noyau est Apache-2.0 ; tableau de bord Pro et flotte Enterprise sont sous licence payante.

## Comment c'est branché
```mermaid
flowchart LR
  AG["AI agent"] --> PX["Proxy runtime (server.go)"]
  PX --> SC["Content scanner"]
  PX --> MG["MCP gates (pipeline_gates.go)"]
  PX --> SR["Signed receipts"]
  SR --> FR["Flight recorder"]
  PX --> NET["Internet"]
```

## Essayer
```bash
pipelock init
pipelock check --url "https://evil.com/?k=AKIAIOSFODNN7EXAMPLE"
pipelock demo --receipts-dir ./out
docker pull ghcr.io/luckypipewrench/pipelock:3.5.0
```

## Coût et pièges
Cœur gratuit ; les fonctions par agent, dashboard et flotte exigent une licence. Le README admet que la protection dépend du blocage du trafic direct et que la vérification indépendante des ancrages reste à prouver.

## Ce que ce n'est pas
Pas une garantie de sécurité totale : le trafic hors proxy échappe au contrôle. Les chiffres du banc d'essai viennent de l'auteur.

## Alternatives
agent-scan (scanner), srt (sandbox), agentsh (agent noyau), comparés dans le README.

## Pour toi
À surveiller : très pertinent si tu laisses des agents tourner avec des secrets ; projet récent d'un seul mainteneur, teste en mode audit d'abord.

