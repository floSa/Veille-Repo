---
schema: 1
depot: vercel-labs/agent-skills
source_readme_sha: 7c02f64b08fc6c4e
ecrite_le: 2026-09-29
nature: extension
deploiement: npm
prerequis: [Node, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: ignorer
---

# vercel-labs/agent-skills

> Collection de skills pour agents de code : audit Vercel, bonnes pratiques React et déploiement.

## Le problème
Un agent de code ne connaît pas les règles de performance React/Next.js, les conventions d'interface ni les coûts d'un projet Vercel.

## Ce que ça fait vraiment
Fournit huit skills, chacun avec un SKILL.md : vercel-optimize (audit coût et performance), react-best-practices (40+ règles), web-design-guidelines (100+ règles), writing-guidelines, react-native-guidelines, react-view-transitions, composition-patterns et vercel-deploy-claimable. Le plus détaillé, vercel-optimize, collecte des métriques Vercel, filtre les candidats, puis vérifie chaque recommandation avant de rendre un rapport classé.

## Comment c'est branché
```mermaid
flowchart LR
  VC["Vercel Client (vercel.mjs)"] --> SC["Code Scanners"]
  SC --> CG["Candidate Gates"]
  CG --> SA["Sanitizer Pipeline"]
  SA --> CV["Claim Verifier (verify-claim.mjs)"]
  CV --> RR["Report Renderer (render-report.mjs)"]
```

## Essayer
```bash
npx skills add vercel-labs/agent-skills
npm ci --ignore-scripts
node scripts/build-discovery-index.mjs https://example.com/skills
```

## Coût et pièges
Gratuit ; vercel-optimize suppose un projet et des métriques Vercel. vercel-deploy-claimable empaquette ton projet et l'envoie à un service de déploiement : ne l'utilise pas sur du code sensible. Aucune licence déclarée dans le catalogue.

## Ce que ce n'est pas
Pas des règles généralistes : elles ciblent React, Next.js et Vercel. Le fonctionnement interne des autres skills n'est pas décrit.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : focalisé sur React et Vercel, sans licence déclarée, donc peu utile à un profil data/IA/MLOps.

