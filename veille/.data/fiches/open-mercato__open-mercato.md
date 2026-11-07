---
schema: 1
depot: open-mercato/open-mercato
source_readme_sha: a13c868e4b85ac73
ecrite_le: 2026-11-07
nature: outil
deploiement: npm
prerequis: [Node, Docker, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# open-mercato/open-mercato

> Un framework TypeScript sur Next.js et PostgreSQL qui livre CRM, ERP et commerce, avec règles pour agents de code.

## Le problème
Les assistants de code génèrent des fichiers sans savoir où les ranger ni comment rester cohérent dans une équipe. Et un back-office se refait à chaque projet.

## Ce que ça fait vraiment
Une application générée contient des modules métier (clients, catalogue, ventes, entrepôt, portail, workflows) et un fichier `AGENTS.md` avec des skills qui disent à l'agent où placer le code. Les spécifications vivent dans `.ai/specs/`. Cezar, un IDE open source, lance les tâches dans des worktrees git. Les modules enterprise sont sous licence séparée.

## Comment c'est branché
Diagramme tiré du code, simplifié.

```mermaid
flowchart TD
  A["App user"] --> B["API catch-all route.ts"]
  B --> C["Data engine engine.ts"]
  C --> D["Query engine engine.ts"]
  E["Query indexing"] --> F["Event bus bus.ts"]
  G["AI chat API route.ts"] --> H["Conversation storage"]
```

## Essayer
```bash
npx create-mercato-app my-app --preset classic --agents all --init-git
cd my-app
yarn setup
npx cezar-run
```

## Coût et pièges
Docker, environ 8 Go de RAM libres, PostgreSQL 15+ (Redis et Meilisearch en option). Le cloud hébergé est une bêta avec compte requis. Un déploiement Railway demande un compte et un jeton.

## Ce que ce n'est pas
Pas un outil de data science : c'est un socle d'applications métier. Le dossier `packages/enterprise/` est fermé aux auteurs externes et ses modules ne sont pas MIT.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant comme exemple de harnais pour agents de code (skills, specs, garde-fous), moins comme ERP pour un profil data et IA.

