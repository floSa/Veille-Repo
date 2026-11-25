---
schema: 1
depot: lak7/devildev
source_readme_sha: 496296f37c5e8a44
ecrite_le: 2026-11-25
nature: app
deploiement: autre
prerequis: [Node, clé d'API, service tiers, compte à créer]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# lak7/devildev

> Espace de travail qui génère et rétro-analyse une architecture logicielle depuis des spécifications ou un dépôt.

## Le problème
Les assistants de code écrivent avant d'avoir posé l'architecture, et un dépôt existant reste difficile à comprendre.

## Ce que ça fait vraiment
Application Next.js : des actions serveur (architecture, reverse-architecture, chat) produisent l'architecture par prompts et outils d'agent. L'analyse d'un dépôt passe par des tâches Inngest déclenchées par les webhooks GitHub. Clerk gère les utilisateurs, Prisma persiste en PostgreSQL. Le README indique qu'il ne génère pas de code aujourd'hui.

## Comment c'est branché
```mermaid
flowchart TD
  A["src/middleware.ts"] --> B["actions/architecture.ts"]
  B --> E["prompts/dev/architecture.ts"]
  J["api/inngest/route.ts"] --> K["inngest/functions.ts"]
  K --> C["actions/reverse-architecture.ts"]
  H["webhook/clerk/route.ts"] --> M["src/lib/db.ts"]
  M --> L["prisma/schema.prisma"]
```

## Essayer
```bash
git clone https://github.com/lak7/devildev.git
npx prisma generate
npx prisma migrate dev
npm run dev
```

## Coût et pièges
Installation lourde : ngrok, Clerk, Supabase, Inngest, PostgreSQL, GitHub App, Dodo Payments. Clés OpenAI et Parallel obligatoires, facturées à ta charge. Les webhooks exigent une URL publique.

## Ce que ce n'est pas
Ce n'est pas un générateur de code, et ce n'est pas simple à auto-héberger.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : la dépendance à huit services tiers rend l'essai disproportionné pour une promesse d'architecture.

