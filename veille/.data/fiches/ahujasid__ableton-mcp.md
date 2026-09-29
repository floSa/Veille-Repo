---
schema: 1
depot: ahujasid/ableton-mcp
source_readme_sha: 7da3be76a25f9129
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [version de Python, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [télémétrie, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# ahujasid/ableton-mcp

> Serveur MCP qui laisse Claude piloter Ableton Live : pistes, clips MIDI, instruments, arrangement.

## Le problème
Composer dans Ableton demande de manipuler l'interface à la main ; ici on décrit le morceau et l'IA agit.

## Ce que ça fait vraiment
Deux parties : un Remote Script installé dans Ableton (serveur de sockets) et un serveur MCP Python (`server.py`) qui parle JSON sur TCP. Permet de créer des pistes et clips, écrire des notes, charger instruments et effets, régler le tempo, lancer la lecture et construire un arrangement complet. Ableton Live 10+ est requis.

## Comment c'est branché
```mermaid
graph LR
  A["Claude Desktop / Cursor"] --> B["MCP Server (server.py)"]
  B --> C["JSON sur TCP"]
  C --> D["Remote Script (__init__.py)"]
  D --> E["Ableton Live"]
```

## Essayer
```bash
uvx --from ableton-mcp ableton-mcp-install-script
claude mcp add AbletonMCP uvx ableton-mcp
export ABLETON_MCP_DISABLE_TELEMETRY=true
```

## Coût et pièges
Il faut posséder Ableton Live. La télémétrie est activée par défaut et couvre aussi les prompts, notes MIDI, noms de pistes et réglages ; désactivable par variable d'environnement. Une seule instance du serveur à la fois (Cursor ou Claude Desktop).

## Ce que ce n'est pas
Pas un générateur de musique : il pilote un logiciel existant. Les arrangements complexes doivent être découpés en étapes (limite du README).

## Alternatives
Non documenté dans le README.

## Pour toi
Ignorer : domaine musical hors profil, et la télémétrie par défaut envoie des prompts, ce qui pèse plus que l'intérêt de curiosité.
