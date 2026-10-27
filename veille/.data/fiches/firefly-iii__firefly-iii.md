---
schema: 1
depot: firefly-iii/firefly-iii
source_readme_sha: b9fd944dbb3afcc5
ecrite_le: 2026-10-27
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# firefly-iii/firefly-iii

> Gestionnaire de finances personnelles auto-hébergé, sans IA ni cloud.

## Le problème
Savoir où va son argent sans confier ses relevés à un service cloud.

## Ce que ça fait vraiment
Suit dépenses et revenus avec budgets, catégories, tags, comptabilité en partie double, transactions récurrentes, règles personnalisées, tirelires, rapports, multi-devises, authentification à deux facteurs, API REST JSON. Il ne contacte pas de serveur externe sauf demande explicite. Image Docker et déploiement Kubernetes disponibles.

## Comment c'est branché
```mermaid
flowchart LR
  UI["Interface web"] --> API["API v1 / v2"]
  API --> SV["Services / Repositories"]
  SV --> RU["Rules engine"]
  SV --> DB["Base de données"]
  API --> WH["Webhooks"]
```

## Essayer
Aucune commande documentée dans le README ; l'installation est décrite dans la documentation du projet.

## Coût et pièges
Gratuit en auto-hébergement ; hébergeurs payants proposés (Hostinger, PikaPods). Il faut être à l'aise avec l'administration de serveurs.

## Ce que ce n'est pas
Pas un agrégateur bancaire : l'import passe par des outils séparés (importeur de données).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Usage personnel, étranger à ton métier ; à ignorer côté veille, AGPL en prime si tu l'héberges pour des tiers.

