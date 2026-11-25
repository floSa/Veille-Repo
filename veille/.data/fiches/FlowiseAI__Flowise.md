---
schema: 1
depot: FlowiseAI/Flowise
source_readme_sha: 21b4384ec2e29529
ecrite_le: 2026-11-25
nature: app
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, archivé]
verdict: ignorer
---

# FlowiseAI/Flowise

> Constructeur visuel d'agents IA, auto-hébergeable, désormais archivé par ses auteurs.

## Le problème
Assembler des chaînes et agents LLM demande du code ; un éditeur visuel abaisse la barrière.

## Ce que ça fait vraiment
Monorepo : `ui` (React), `server` (Express, TypeORM sur SQLite, MySQL ou Postgres), `components` (nœuds d'intégration LLM, loaders, outils) et documentation Swagger. Un worker Redis traite les prédictions en file. Métriques Prometheus et OpenTelemetry.

## Comment c'est branché
```mermaid
flowchart TD
  A["React/Vite UI"] --> B["Express API"]
  B --> C["Components Library"]
  B --> D["Relational DB"]
  B --> E["Redis"]
  F["Worker Process"] --> E
  F --> G["LLM & Embedding Providers"]
```

## Essayer
```bash
npm install -g flowise
npx flowise start
# puis http://localhost:3000
docker compose up -d
```

## Coût et pièges
Gratuit, mais les fournisseurs LLM utilisés restent à ta charge. Node 20 ou plus requis. Le build depuis les sources peut dépasser la mémoire (code 134) : relever `NODE_OPTIONS`.

## Ce que ce n'est pas
Ce n'est plus un projet vivant : le README annonce l'archivage. Dépôt archivé, plus de correctifs attendus.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : archivé, donc sans correctifs de sécurité futurs ; préfère un outil maintenu.

