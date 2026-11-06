---
schema: 1
depot: MichaelCade/90DaysOfDevOps
source_readme_sha: a49f8a1cc74d4d75
ecrite_le: 2026-11-06
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# MichaelCade/90DaysOfDevOps

> Parcours communautaire de 90 jours pour apprendre DevOps, avec traductions et labs d'exemple.

## Le problème
Aborder DevOps sans fil conducteur : outils nombreux, ressources gratuites éparses.

## Ce que ça fait vraiment
- Leçons Markdown jour par jour (2022, 2023, 2024), plus DevSecOps et sessions communautaires.
- Labs autonomes : Jenkins, Terraform, Ansible/Vagrant, Docker Compose, Kubernetes, stack Elastic, scripts réseau Netmiko, exercices Go.
- Copies traduites en plusieurs langues (dont fr).
- Site statique de type GitHub Pages, publié par workflows.

## Comment c'est branché
```mermaid
flowchart TD
  root["Site shell README.md"] -->|links to| y22["2022 guide 2022.md"]
  root -->|links to| y23["2023 guide 2023.md"]
  root -->|links to| y24["2024 guide 2024.md"]
  y22 -->|organizes| d22["2022 lessons"]
  d22 -->|contains| labs["Lab tracks: Jenkins, Terraform, K8s..."]
  flow["Publish flow workflows"] -->|deploys| root
```

## Essayer
Aucune commande documentée : on lit le contenu sur le site ou dans le dépôt.

## Coût et pièges
Gratuit, logiciels libres. Licence présente mais non identifiée par GitHub : à vérifier avant réutilisation. Dernier push le 2026-06-24 : contenu en partie daté (2022-2024).

## Ce que ce n'est pas
Pas un cours exhaustif sur DevOps (l'auteur le dit), ni une application. Les labs sont des exercices isolés, non composés.

## Alternatives
Le README ne nomme aucune alternative.

## Pour toi
À surveiller : utile pour combler des bases DevOps/MLOps (CI/CD, K8s, IaC), à lire en piochant les jours utiles plutôt qu'en suivant les 90.

