---
schema: 1
depot: ronisarkarexe/story-spark-ai
source_readme_sha: c25451ae8aeb6678
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [clé d'API, Node, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# ronisarkarexe/story-spark-ai

> Application web qui génère des histoires à partir d'un prompt, pour auteurs amateurs et curieux d'IA.

## Le problème
Écrire une histoire à partir d'une idée brute demande du temps. L'outil propose plusieurs variantes d'un même prompt et les compare.

## Ce que ça fait vraiment
Frontend React + Vite et API Node/Express sur MongoDB. Le prompt part vers OpenAI ou Gemini, qui renvoie plusieurs variantes. Autour : analyse de texte, favoris, avis, posts communautaires, abonnements via Razorpay, connexion Google. Le README signale que les clics multiples sur « Generate » créent des appels en double.

## Comment c'est branché
```mermaid
flowchart TD
  W["Writer"] --> A["App.tsx (frontend)"]
  A --> R["story.routes.ts"]
  R --> G["ai.service.ts"]
  R --> P["post.controller.ts"]
  W --> AU["auth.service.ts"]
  AU --> U[("user.model.ts")]
  P --> S[("post.model.ts")]
```

## Essayer
```bash
pnpm install
cd backend
npx ts-node scripts/seed-admin.ts
pnpm dev
```

## Coût et pièges
Il faut une clé OpenAI ou Gemini (facturée à l'appel), une base MongoDB et de nombreuses variables d'environnement. Pas de Socket.IO sur Vercel.

## Ce que ce n'est pas
Ce n'est pas un outil de data ou de MLOps : c'est une application grand public. Les fonctions payantes dépendent de Razorpay. Aucun dédoublonnage des requêtes en vol.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : c'est un produit de génération de texte autour d'appels d'API, sans brique réutilisable pour un profil data, IA ou MLOps.

