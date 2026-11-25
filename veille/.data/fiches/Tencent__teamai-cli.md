---
schema: 1
depot: Tencent/teamai-cli
source_readme_sha: 57c3b0da986cda9f
ecrite_le: 2026-11-25
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier, télémétrie]
verdict: surveiller
---

# Tencent/teamai-cli

> CLI qui synchronise skills, règles, agents et MCP d'une équipe depuis un dépôt git vers ses outils d'IA.

## Le problème
Chaque développeur règle ses outils d'IA de codage à sa manière, et les bonnes pratiques de l'équipe ne circulent pas.

## Ce que ça fait vraiment
Un dépôt git partagé contient les ressources d'IA de l'équipe. `teamai init` puis des hooks tirent les mises à jour à chaque session, pour Claude Code, Codex, Cursor et une vingtaine d'autres. Couches bêta : contexte d'équipe (wiki, graphe de code, recall) et amélioration (transcripts expurgés, digest, tableau de bord).

## Comment c'est branché
```mermaid
flowchart TD
  E["CLI (src/index.ts)"] --> P["pull.ts"]
  E --> U["push.ts"]
  P --> R[("Dépôt git de l'équipe")]
  P --> H["Hooks (hook-dispatch.ts)"]
  H --> C["recall.ts"]
  S["session-collector.ts"] -.-> R
```

## Essayer
```bash
npm install -g teamai-cli
teamai init https://github.com/your-org/your-repo
teamai init https://github.com/your-org/your-repo --scope user
```

## Coût et pièges
Gratuit, Node requis, dépôt git partagé à créer. Fournisseurs pris en charge : GitHub, GitLab, GitCode, CNB, TGit. La collecte de sessions est optionnelle mais touche à des transcripts, expurgés selon le code. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas un agent de codage : il distribue des ressources aux agents existants. Fonctions de contexte et d'amélioration encore en bêta.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : pertinent si ton équipe partage des skills Claude Code, mais jeune (créé en 2026), en bêta et sans licence claire.

