---
schema: 1
depot: Bennettxai/FounderOS-DEMO
source_readme_sha: 4b53d8b56179bd72
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [Node]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# Bennettxai/FounderOS-DEMO

> Tableau de bord Next.js pour gérer clients, finances et agents IA d'une entreprise d'une personne.

## Le problème
Un indépendant jongle entre CRM, boîte mail, finances et réseaux sociaux, sans vue d'ensemble.

## Ce que ça fait vraiment
Application Node unique (Next.js 14, SQLite locale) avec centre de commande, entonnoir clients, boîte de réception, finances, campagnes sociales et tableau d'agents. Elle démarre en mode démo avec une société fictive. Les connecteurs (mail, Slack, Notion, Stripe) restent inactifs sans identifiants. Le chat d'agents passe par Vercel AI Gateway.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A[Navigateur :4100] --> B[Next.js App Router]
  B --> C[SQLite data/ et demo-data/]
  B --> D[Vercel AI Gateway]
  B --> E[Connecteurs IMAP Slack Stripe]
```

## Essayer
```bash
git clone https://github.com/Bennettxai/FounderOS.git
cd FounderOS
npm ci
npm run dev
```

## Coût et pièges
Démo sans clé. Les agents réels exigent `AI_GATEWAY_API_KEY`, à ta charge. Node 22 requis : Node 24 peut faire planter `better-sqlite3`. Aucun login par défaut (écoute sur 127.0.0.1).

## Ce que ce n'est pas
Ce dépôt est une démo, pas la version complète (le clone pointe vers FounderOS). Les identifiants restent en local, mais aucun audit de sécurité n'est documenté.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : outil de gestion d'entreprise sans lien avec la data ou le MLOps ; seul l'assemblage d'agents mérite un coup d'œil.

