---
schema: 1
depot: NotHarshhaa/DevOps-Projects
source_readme_sha: e0518c9f132a962f
ecrite_le: 2026-10-28
nature: liste
deploiement: rien à installer
prerequis: [compte à créer, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: surveiller
---

# NotHarshhaa/DevOps-Projects

> Collection de projets DevOps et cloud guidés, du débutant à l'avancé, pour s'entraîner.

## Le problème
Apprendre le DevOps demande des cas concrets de bout en bout, pas seulement de la théorie.

## Ce que ça fait vraiment
41 projets listés : Java 3-tier sur AWS, VPC, Django sur ECS, pipelines Jenkins, Terraform, EKS, Azure DevOps, DevSecOps (Trivy, SonarQube), monitoring Prometheus/Grafana. Chaque sous-dossier a son README. Un site Next.js présente la liste.

## Comment c'est branché
```mermaid
flowchart LR
  A["Repository"] --> B["Java Login App"]
  A --> C["Django Web App"]
  A --> D["Jenkins Pipelines"]
  A --> E["Terraform Modules"]
  A --> F["Docker K8s Manifests"]
  D --> G["DevSecOps Pipeline"]
```

## Essayer
Aucune commande au niveau racine : ouvrir le sous-dossier du projet voulu et suivre son README.

## Coût et pièges
Chaque exercice mobilise des services cloud (EC2, EKS, RDS…) facturés à ta charge. Licence absente : réutilisation du contenu non cadrée.

## Ce que ce n'est pas
Pas un outil installable ni une référence de production.

## Alternatives
- AWS-Projects : dépôt du même auteur, centré AWS.

## Pour toi
À surveiller comme banque d'exercices MLOps (CI/CD, Terraform, K8s), en gardant l'œil sur la facture cloud.

