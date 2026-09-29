---
schema: 1
depot: microsoft/skills-for-fabric
source_readme_sha: 9a907e28732fba48
ecrite_le: 2026-09-29
nature: liste
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# microsoft/skills-for-fabric

> Skills et agents Markdown qui apprennent à Copilot CLI et autres assistants de code à travailler avec Microsoft Fabric.

## Le problème
Un assistant de code connaît mal les API, requêtes et bonnes pratiques de Fabric (Spark, SQL DW, KQL, Power BI).

## Ce que ça fait vraiment
Dépôt de contenu : skills, guidances communes et 5 agents (ingénieur data, admin, migration…) packagés en bundles `fabric-skills` et `powerbi-authoring`. Couvre entrepôt SQL, Spark/Lakehouse, modèles sémantiques, Eventhouse/KQL, Eventstreams, Dataflows Gen2, migrations et médaillon. Des serveurs MCP optionnels donnent l'accès live.

## Comment c'est branché
```mermaid
flowchart LR
  S["skills/"] --> B["plugins/ (bundles)"]
  C["common/"] --> B
  A["agents/"] --> B
  B --> H["Copilot CLI / Claude Code"]
  H --> M["MCP (optionnel)"]
  M --> F["Fabric API"]
```

## Essayer
```bash
/plugin marketplace add microsoft/skills-for-fabric
/plugin install fabric-skills@fabric-collection
az login
```

## Coût et pièges
Il faut un tenant Fabric et une authentification Azure (`az login`). Un bundle s'installe en entier ; APM (`apm install ... --skill`) permet d'en activer un seul, mais enregistre tous les MCP.

## Ce que ce n'est pas
Pas un outil qui exécute quoi que ce soit : des instructions. Inutile sans licence Fabric.

## Alternatives
Le README ne cite aucune alternative.

## Pour toi
À surveiller : pertinent si ton équipe data est sur Fabric ; sinon rien à en tirer.
