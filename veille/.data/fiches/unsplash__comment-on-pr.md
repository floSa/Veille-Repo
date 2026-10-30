---
schema: 1
depot: unsplash/comment-on-pr
source_readme_sha: 18cdbf2de8acd006
ecrite_le: 2026-10-30
nature: extension
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [dernier commit ancien]
verdict: ignorer
---

# unsplash/comment-on-pr

> Action GitHub qui poste un commentaire sur la pull request ouverte lors d'un push.

## Le problème
Un workflow CI a besoin de publier un message sur la PR concernée sans script maison.

## Ce que ça fait vraiment
Poste le message `msg` sur la PR liée, pour les événements push, pull_request et pull_request_review. Options : éviter les doublons (`check_for_duplicate_msg`), supprimer les anciens messages selon une regex, motif de doublon. Utilise `GITHUB_TOKEN`.

## Comment c'est branché
```mermaid
graph LR
  A[Workflow GitHub] --> B[unsplash/comment-on-pr@v1.3.0]
  B --> C[GITHUB_TOKEN]
  B --> D[commentaire sur la PR]
```

## Essayer
```bash
# Dans .github/workflows/ :
# uses: unsplash/comment-on-pr@v1.3.0
#   env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
#   with: msg: "Check out this message!"
```

## Coût et pièges
Gratuit dans les limites GitHub Actions. Dernier push en février 2023 : plus suivi.

## Ce que ce n'est pas
Pas un outil de revue de code. Pas de maintenance récente.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : action minimale et sans mises à jour depuis 2023, mieux vaut un appel `gh` ou une action maintenue.

