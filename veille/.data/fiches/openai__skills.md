---
schema: 1
depot: openai/skills
source_readme_sha: 0f6a07580f3c6272
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: ignorer
---

# openai/skills

> Catalogue déprécié de skills pour Codex, remplacé par le dépôt OpenAI Plugins.

## Le problème
Donner à Codex des capacités réutilisables (déploiement, CI, design) sans réécrire les instructions à chaque fois.

## Ce que ça fait vraiment
Chaque skill est un dossier avec `SKILL.md`, métadonnées `agents/openai.yaml`, licence et scripts éventuels.
Trois tiers : `.system` (installés d'office), `.curated`, `.experimental`.
Installation par le skill `$skill-installer` dans Codex, redémarrage requis.
Intégrations décrites : GitHub, Cloudflare, Figma, Notion, API OpenAI.

## Comment c'est branché
```mermaid
flowchart LR
  U[Codex user or agent] --> INS[System installer skill]
  INS --> CUR[Curated skills]
  CUR --> SK[SKILL.md]
  SK --> REF[Reference material]
  SK --> SCR[cli.py scripts]
  SCR --> EXT[Workspace and external services]
```

## Essayer
```bash
$skill-installer gh-address-comments
```

## Coût et pièges
Gratuit, mais lié à Codex ; dépôt déprécié. Licences au niveau de chaque skill, aucune au niveau du dépôt.

## Ce que ce n'est pas
Plus maintenu comme source de référence : les exemples actuels sont dans OpenAI Plugins.

## Alternatives
- OpenAI Plugins : le dépôt qui remplace celui-ci.

## Pour toi
Ignorer : déprécié et centré Codex ; au mieux une source d'inspiration pour écrire tes propres skills Claude.
