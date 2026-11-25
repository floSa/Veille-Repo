---
schema: 1
depot: melodic-software/claude-code-plugins
source_readme_sha: ba166e1147d6d917
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: []
verdict: surveiller
---

# melodic-software/claude-code-plugins

> Place de marché publique de plugins Claude Code (skills, hooks, agents) utilisables dans tout dépôt.

## Le problème
Réutiliser les mêmes skills, hooks et agents d'un projet à l'autre sans copier des fichiers.

## Ce que ça fait vraiment
Un catalogue de plugins sous `plugins/`, listé dans `.claude-plugin/marketplace.json`. Il s'ajoute avec `/plugin marketplace add` et chaque plugin s'installe séparément. Certains déclarent des signaux de pertinence pour que Claude Code les suggère, après autorisation par un administrateur. Le README met en garde contre des sites tiers qui lui attribuent des skills inexistants.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  A[.claude-plugin/marketplace.json] --> B[plugins/]
  B --> C[Skills]
  B --> D[Hooks]
  B --> E[Agents]
  F[/plugin marketplace add] --> A
```

## Essayer
```shell
/plugin marketplace add melodic-software/claude-code-plugins
/plugin install <plugin-name>@melodic-software
/plugin marketplace update melodic-software
```

## Coût et pièges
Gratuit. L'installation depuis GitHub est une copie calée sur la `version` du plugin : un changement n'arrive qu'à la hausse de version. Le dépôt a 82 issues ouvertes.

## Ce que ce n'est pas
Pas un seul plugin : c'est une collection, dont le contenu précis n'est pas listé dans le README. Pas de présence sur les listes tierces.

## Alternatives
Aucune citée dans le README (il refuse les listes comme awesome-ai-plugins).

## Pour toi
À surveiller : source possible de skills pour ton flux Claude Code, mais jeune (juin 2026) et à parcourir avant tout usage.

