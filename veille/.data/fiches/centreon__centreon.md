---
schema: 1
depot: centreon/centreon
source_readme_sha: 4687da38792d8702
ecrite_le: 2026-10-28
nature: app
deploiement: autre
prerequis: [beaucoup de RAM, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# centreon/centreon

> Plateforme de supervision IT et applicative, open source, pour équipes d'exploitation.

## Le problème
Sans supervision centralisée, les pannes de serveurs et d'applications se découvrent par les utilisateurs.

## Ce que ça fait vraiment
Le README annonce quatre modes d'installation : sources, paquets, ISO, VM. D'après le code, le domaine « monitoring » envoie des commandes au moteur de collecte (`EngineService.php`), gère les downtimes, la configuration héritée (CLAPI, objets broker), l'interface (graphiques avec zoom, listings de ressources) et des intégrations de ticketing. L'analyse reste partielle.

## Comment c'est branché
```mermaid
flowchart LR
  O[Operator] --> UI[User interface]
  UI --> M[Monitoring core]
  M --> E[Engine service]
  M --> DB[(Centreon database)]
  UI --> TK[Ticketing]
  TK --> PA[Provider API]
```

## Essayer
Aucune commande dans le README ; la documentation d'installation est externe (docs.centreon.com).

## Coût et pièges
Gratuit en communauté, support commercial payant. Une version majeure par an, cycle de 18 mois ; le support long terme de 3 ans est payant.

## Ce que ce n'est pas
Pas un outil léger : c'est une plateforme complète à déployer et exploiter. Les 332 issues ouvertes montrent une grosse surface à maintenir.

## Alternatives
Aucune citée dans le README.

## Pour toi
Surveiller : pertinent si tu dois superviser l'infra qui porte tes modèles, mais le catalogue de supervision (Prometheus et consorts) est hors du README.

