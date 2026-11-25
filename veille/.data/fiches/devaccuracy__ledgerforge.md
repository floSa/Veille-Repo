---
schema: 1
depot: devaccuracy/ledgerforge
source_readme_sha: 422161197812cfbb
ecrite_le: 2026-11-25
nature: outil
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# devaccuracy/ledgerforge

> Registre comptable en partie double, avec plafonds de dépense pour agents IA, pour équipes fintech.

## Le problème
Faire circuler de l'argent via des agents IA sans règle serveur ni trace vérifiable est risqué.

## Ce que ça fait vraiment
Registre en partie double en unités entières, accessible par API HTTP, bibliothèque Go ou serveur MCP. Chaque clé d'API porte des limites (devises, budgets quotidiens, validations), appliquées côté serveur. Une chaîne d'audit se vérifie avec `ledgerforge verify`. PostgreSQL stocke les écritures, Redis gère les files. Il ne connecte pas les circuits de paiement.

## Comment c'est branché
```mermaid
flowchart TD
  A[cmd/ledgerforge/server.go] --> B[api/api.go]
  B --> C[api/middleware/auth.go]
  C --> D[internal/policy/engine.go]
  B --> E[internal/core/ledgerforge.go]
  E --> F[internal/core/transaction.go]
  F --> G[database/transaction.go]
  F --> H[internal/core/queue.go]
```

## Essayer
```bash
git clone https://github.com/devaccuracy/ledgerforge.git
cd ledgerforge
./examples/quickstart/start.sh
./examples/quickstart/transfer.sh
```

## Coût et pièges
Gratuit en auto-hébergement ; Docker avec Compose et Python 3 pour le quickstart. PostgreSQL et Redis à exploiter, mises à jour et sauvegardes à ta charge. Une offre cloud payante existe à côté.

## Ce que ce n'est pas
Pas une passerelle de paiement ni un modèle comptable prêt à l'emploi : ces points restent à ton application. Le quickstart est local uniquement.

## Alternatives
Aucune citée dans le README.

## Pour toi
À surveiller : les plafonds d'agents appliqués côté serveur sont un bon modèle de garde-fou, mais le projet est récent (mai 2026) et hors de ton périmètre direct.

