---
schema: 1
depot: drush-ops/drush
source_readme_sha: 7b8702250c62c97b
ecrite_le: 2026-10-27
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence non déclarée, matière insuffisante]
verdict: ignorer
---

# drush-ops/drush

> Interface en ligne de commande et de scripts Unix pour administrer des sites Drupal.

## Le problème
Administrer un site Drupal depuis le navigateur est lent et peu automatisable.

## Ce que ça fait vraiment
Le README fait une seule phrase et renvoie vers www.drush.org. D'après la description d'architecture (générique, non vérifiée sur le code) : systèmes de commandes, amorçage Drupal, alias de sites, configuration et gestion SQL, sur Symfony Console. Détail non documenté ici.

## Comment c'est branché
```mermaid
graph LR
  E[Entry point] --> B[Bootstrap - src/Boot]
  B --> C[Command system - src/Commands]
  C --> D[Drupal integration - src/Drupal]
  C --> S[SQL handling - src/Sql]
  A[Site aliases - src/SiteAlias] --> C
```

## Essayer
Aucune commande dans le README. Non documenté ici (voir www.drush.org).

## Coût et pièges
Gratuit. Licence absente du catalogue : à vérifier avant redistribution. Beaucoup d'issues ouvertes (492).

## Ce que ce n'est pas
Pas un CMS : il suppose un site Drupal existant. README minimal, fiche volontairement sommaire.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : outil Drupal sans rapport avec data/IA/MLOps.

