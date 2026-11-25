---
schema: 1
depot: renovatebot/renovate
source_readme_sha: 1a79d53cfd7a0abb
ecrite_le: 2026-11-25
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: adopter
---

# renovatebot/renovate

> Outil qui détecte les dépendances obsolètes d'un dépôt et ouvre les pull requests de mise à jour.

## Le problème
Mettre à jour à la main des dizaines de dépendances, sans savoir lesquelles sont sûres.

## Ce que ça fait vraiment
Renovate découvre les fichiers de dépendances, extrait les versions via plus de 90 gestionnaires de paquets, interroge les registres, applique des règles de regroupement puis ouvre des PR sur GitHub, GitLab, Bitbucket, Azure DevOps, Gitea et autres. Il fournit âge, adoption, taux de réussite et confiance de fusion.

## Comment c'est branché
```mermaid
flowchart TD
  A["Config processing"] --> B["File discovery"]
  B --> C["Manager extraction"]
  C --> D["Datasource registry"]
  D --> E["Package registries"]
  C --> F["Update processing"]
  F --> G["Repository platforms"]
```

## Essayer
```bash
npx renovate
```
Le README mentionne aussi une GitHub Action et un GitLab Runner.

## Coût et pièges
Gratuit en auto-hébergé ; Mend propose des offres cloud. Il faut un jeton d'accès à la plateforme cible (non détaillé dans le README). Licence AGPL.

## Ce que ce n'est pas
Ce n'est pas un scanner de vulnérabilités : il met à jour des versions. Les issues sont réservées aux mainteneurs, les questions passent par Discussions.

## Alternatives
Dependabot, via la page de comparaison « Renovate vs Dependabot » citée.

## Pour toi
À adopter : très mûr, couvre pip, Docker, GitHub Actions et npm, donc les dépôts MLOps restent à jour sans effort.

