---
schema: 1
depot: levnikolaevich/claude-code-skills
source_readme_sha: 48a3b16992f96596
ecrite_le: 2026-10-05
nature: liste
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# levnikolaevich/claude-code-skills

> Collection de skills Claude Code et Codex couvrant le cycle de la découverte produit à l'exploitation.

## Le problème
Un agent dit « terminé » sans que tu saches ce qu'il a vérifié ni ce qui reste en suspens.

## Ce que ça fait vraiment
Huit plugins thématiques : découverte produit, architecture, planification, implémentation, assurance qualité, livraison, opérations, maintenance de skills. Chaque skill est indépendant (ex. `ln-41-surgical-change-implementer`) et vise un livrable borné avec preuves et limites explicites. Les revues restent en lecture seule ; la publication suit des frontières d'autorisation.

## Comment c'est branché
```mermaid
flowchart LR
  D[Product discovery] --> A[Architecture]
  A --> P[Delivery planning]
  P --> I[Implementation]
  I --> Q[Quality assurance]
  Q --> L[Delivery]
  L --> O[Operations]
```

## Essayer
```text
/plugin marketplace add levnikolaevich/claude-code-skills
/plugin install implementation-suite@levnikolaevich-skills-marketplace
/reload-plugins
```

## Coût et pièges
Gratuit ; consomme ton quota d'agent. Le contenu des skills n'a pas été échantillonné dans la fiche : qualité non vérifiée.

## Ce que ce n'est pas
Pas un framework d'orchestration : des skills à invoquer à la main, sans exécution garantie.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : installe un seul plugin (implementation-suite) pour juger ; l'ensemble est vaste et opiniâtre.

