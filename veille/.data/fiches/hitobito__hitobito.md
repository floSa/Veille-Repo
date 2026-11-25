---
schema: 1
depot: hitobito/hitobito
source_readme_sha: ed26f9908c7c26d2
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# hitobito/hitobito

> Application web Rails libre pour gérer des organisations aux hiérarchies de groupes complexes : membres, événements, courriers.

## Le problème
Les associations et fédérations ont des structures en arbre, des rôles et des droits qu'un outil générique gère mal.

## Ce que ça fait vraiment
Un méta-modèle de groupes typés en arbre, avec des rôles et des permissions. Le cœur ne définit aucun type de groupe : il faut au moins un « wagon » (plugin) comme `hitobito_generic`. Événements, facturation, paiements EBICS, envois de courrier, exports, API JSON:API et OAuth/OIDC.

## Comment c'est branché
```mermaid
flowchart TD
  A["config/routes.rb"] --> B["application_controller.rb"]
  B --> C["abilities/ability.rb"]
  C --> D["models/group.rb"]
  D --> E["models/event.rb"]
  F["jobs/base_job.rb"] --> G["Services externes"]
  H["Wagonfile"] -.-> D
```

## Essayer
```bash
# Aucune commande dans le README : voir doc/developer et les instructions de déploiement.
```

## Coût et pièges
Gratuit (AGPL), à héberger : Rails (Ruby non listé dans les prérequis), MySQL, Delayed Job ; un Dockerfile et des manifestes OpenShift sont fournis. Guide utilisateur en allemand. 402 issues ouvertes.

## Ce que ce n'est pas
Pas un outil prêt à l'emploi : sans wagon, il n'a aucune structure de groupes.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : logiciel de gestion d'associations, à part de ton travail data/IA/MLOps.

