---
schema: 1
depot: google-labs-code/stitch-skills
source_readme_sha: 350b366bf9880cac
ecrite_le: 2026-10-25
nature: extension
deploiement: autre
prerequis: [service tiers, compte à créer, Node]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# google-labs-code/stitch-skills

> Collection de skills d'agents pour concevoir et exporter des interfaces avec Google Stitch.

## Le problème
Passer du code front à un design Stitch, puis du design à des composants, demande des étapes manuelles répétitives.

## Ce que ça fait vraiment
Trois plugins : `stitch-design` (code vers design, génération, système de design), `stitch-build` (React, React Native, Vite, vidéo Remotion, shadcn) et `stitch-utilities` (DESIGN.md, amélioration de prompts, boucle multi-pages). Chaque skill suit le standard Agent Skills (`SKILL.md`, scripts, ressources).

## Comment c'est branché
```mermaid
flowchart LR
  A[Agent de code] --> B[Skills stitch-design]
  B --> C[Extract static HTML]
  C --> D[Upload assets]
  D --> E[Stitch service]
  E --> F[Skills stitch-build]
  F --> G[React components]
```

## Essayer
```bash
npx plugins add google-labs-code/stitch-skills --scope project --target claude-code
npx skills add google-labs-code/stitch-skills
npx skills --help
```

## Coût et pièges
Nécessite le serveur MCP Stitch configuré (identifiants à fournir) et un compte Stitch. Les skills ont des dépendances croisées : une installation partielle peut casser. OpenCode demande un renommage manuel.

## Ce que ce n'est pas
« Pas un produit Google officiellement supporté », hors programme de récompenses de vulnérabilités. Inutile sans Stitch.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À surveiller : utile seulement si tu fais du design UI avec Stitch ; peu de rapport avec un travail data/MLOps.

