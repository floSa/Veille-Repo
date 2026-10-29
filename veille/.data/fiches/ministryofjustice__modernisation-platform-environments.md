---
schema: 1
depot: ministryofjustice/modernisation-platform-environments
source_readme_sha: 41bc7a3c5a07d3a5
ecrite_le: 2026-10-29
nature: outil
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [matière insuffisante]
verdict: ignorer
---

# ministryofjustice/modernisation-platform-environments

> Infrastructure Terraform des environnements AWS utilisateurs de la Modernisation Platform du ministère de la Justice.

## Le problème
Chaque équipe doit décrire son compte AWS en code sans casser les garde-fous de la plateforme.

## Ce que ça fait vraiment
Les équipes ajoutent leur infrastructure en Terraform, appliquée par des workflows GitHub, un par environnement. Le README renvoie au dépôt principal pour les demandes d'environnement et le guide utilisateur. Le reste n'est pas documenté ici.

## Comment c'est branché
```mermaid
graph TD
  T[Terraform par environnement] --> W[workflow GitHub]
  W --> A[compte AWS]
  MP[modernisation-platform] --> T
```

## Essayer
Aucune commande documentée. Demander un environnement par une issue sur le dépôt principal.

## Coût et pièges
Réservé aux équipes qui ont un compte sur la plateforme. Dépend de l'organisation.

## Ce que ce n'est pas
Pas un outil public réutilisable : c'est la configuration de comptes d'une administration.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : configuration interne d'une plateforme, sans usage direct pour toi.

