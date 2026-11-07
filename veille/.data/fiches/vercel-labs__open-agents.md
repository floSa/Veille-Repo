---
schema: 1
depot: vercel-labs/open-agents
source_readme_sha: b5a9e78de47bd743
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: freemium
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# vercel-labs/open-agents

> Application de référence pour lancer des agents de code en arrière-plan sur Vercel, du prompt à la pull request.

## Le problème
Un agent de code qui dépend de ton portable s'arrête avec lui, et mélange raisonnement et exécution dans la même machine.

## Ce que ça fait vraiment
Trois couches : appli web Next.js (auth, sessions, chat), agent exécuté comme workflow durable hors du bac à sable, et sandbox Vercel (fichiers, shell, git, serveurs de dev). L'agent agit par outils, peut cloner, committer, pousser et ouvrir une PR, avec partage de session en lecture seule. Voix optionnelle via ElevenLabs.

## Comment c'est branché
```mermaid
flowchart TD
    Web["apps/web, Next.js"] --> Chat["api/chat, workflow"]
    Chat --> Agent["packages/agent"]
    Agent --> Tools["Outils de l'agent"]
    Tools --> Sandbox["packages/sandbox"]
    Web --> PG["Postgres"]
    Web --> GH["GitHub"]
```

## Essayer
```bash
corepack enable
pnpm install
cp apps/web/.env.example apps/web/.env
pnpm web
```

## Coût et pièges
Compte Vercel, base Postgres, application OAuth Vercel, application GitHub, et variables d'environnement nombreuses (BETTER_AUTH_SECRET, clés GitHub). Le sandbox et les workflows sont facturés par Vercel. Profil « hobby » prévu.

## Ce que ce n'est pas
Pas un produit fini : le README le présente comme une base à forker. Il dépend de Vercel pour le sandbox, les workflows et l'authentification. Dernier push en août 2026.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour étudier l'architecture agent hors sandbox, mais lié à Vercel et à une configuration lourde.

