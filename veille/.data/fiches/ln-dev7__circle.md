---
schema: 1
depot: ln-dev7/circle
source_readme_sha: 13a447e5d35b9f87
ecrite_le: 2026-11-25
nature: app
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: []
verdict: ignorer
---

# ln-dev7/circle

> Maquette d'interface de gestion de projet à la Linear, en Next.js et shadcn/ui.

## Le problème
Avoir un exemple d'interface de suivi de tickets, projets et équipes moderne et réactive.

## Ce que ça fait vraiment
Application Next.js (TypeScript, Tailwind, shadcn/ui) avec pages par organisation : tickets, projets, équipes, membres, réglages. D'après l'architecture, l'état vit dans des stores côté client et les données viennent de modules de données factices, sans backend réel.

## Comment c'est branché
```mermaid
flowchart TD
  A["Navigateur"] --> B["Serveur Next.js"]
  B --> C["app/[orgId]/page.tsx"]
  C --> D["main-layout.tsx"]
  C --> E["store/issues-store.ts"]
  E --> F["mock-data/issues.ts"]
  D --> G["components/ui"]
```

## Essayer
```bash
git clone https://github.com/ln-dev7/circle.git
cd circle
pnpm install
pnpm dev
```

## Coût et pièges
Gratuit. Aucun backend : les données sont fictives, donc rien ne persiste. Node et pnpm requis.

## Ce que ce n'est pas
Pas un outil de gestion de projet utilisable en vrai : c'est un front de démonstration. La version BaseUI est vendue à part.

## Alternatives
Aucune alternative nommée dans le README, qui s'inspire de Linear.

## Pour toi
Ignorer : un gabarit d'interface Next.js, utile seulement pour t'inspirer d'un front.

