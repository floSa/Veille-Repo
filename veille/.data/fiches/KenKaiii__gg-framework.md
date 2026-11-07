---
schema: 1
depot: KenKaiii/gg-framework
source_readme_sha: 7b7b4527cc8bc308
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# KenKaiii/gg-framework

> Agent de code de bureau (GG Coder) et paquets npm pour bâtir des agents sur tes abonnements IA.

## Le problème
Les agents de code consomment vite le quota d'un abonnement, et on ne sait pas quand le travail est vraiment vérifié.

## Ce que ça fait vraiment
Application de bureau (Tauri) : codage, chat, vidéo (GG Motion), objectifs multi-agents (GG Goals), vérifications de sécurité et d'accessibilité. Se connecte à Claude, ChatGPT, Kimi, MiniMax, MiMo, à une clé d'API ou à des modèles locaux. Paquets npm : gg-ai, gg-agent, gg-core, ggcoder.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["GG Coder<br/>application Tauri"] --> B["ggcoder"]
  B --> C["gg-agent"]
  C --> D["gg-ai"]
  D --> E["fournisseurs IA ou modèles locaux"]
  B --> F["gg-core"]
```

## Essayer
```bash
git clone https://github.com/KenKaiii/gg-framework.git
cd gg-framework
pnpm install
pnpm build
pnpm --filter gg-app tauri dev
npm install @kenkaiiii/gg-ai @kenkaiiii/gg-agent
```

## Coût et pièges
Abonnement ou clé d'API à ta charge. Les chiffres de vitesse et de coût viennent d'un banc d'essai de l'auteur, sans tiers. AGPL : partager les sources en cas de service réseau.

## Ce que ce n'est pas
Pas un agent neutre : la comparaison est faite par l'auteur. Le README ne dit rien sur les données envoyées aux fournisseurs.

## Alternatives
Dans le tableau du README : Goose, Kimi Code, Claude Code, Crush, Qwen Code, Hermes Agent.

## Pour toi
À surveiller : paquets d'agents utilisables en TypeScript, mais mainteneur unique et benchmark auto-déclaré invitent à vérifier avant d'adopter.

