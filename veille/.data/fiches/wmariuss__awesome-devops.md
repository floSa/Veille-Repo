---
schema: 1
depot: wmariuss/awesome-devops
source_readme_sha: ed7ef52ee2b90ff0
ecrite_le: 2026-10-05
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# wmariuss/awesome-devops

> Liste commentée de plateformes, outils et ressources DevOps et SRE, classée par domaine.

## Le problème
L'écosystème DevOps est vaste ; repérer des outils par catégorie sans partir de zéro prend du temps.

## Ce que ça fait vraiment
Un README de liens classés : clouds publics et open source, systèmes, plateformes d'applications, plateformes de développeur internes, registres, automatisation (Terraform, Ansible, Pulumi…), CI/CD, SCM, serveurs web, SSL, bases de données, observabilité, service mesh, chaos engineering, passerelles API, messagerie, secrets, sécurité, VPN, livres et conférences. Chaque entrée a une ligne de description.

## Comment c'est branché
```mermaid
flowchart LR
  R["README.md"] --> C["Catégories d'outils"]
  C --> O["Observabilité"]
  C --> A["Automatisation"]
  C --> CI["CI/CD"]
  C --> S["Sécurité"]
  R --> RS["Livres et conférences"]
```

## Essayer
```bash
# Aucune commande documentée : liste à parcourir.
```

## Coût et pièges
Gratuit, licence CC0. Beaucoup d'entrées sont anciennes ou abandonnées (Heka, Phabricator, CoreOS…) sans indication d'état ; certaines lignes sont promotionnelles. 184 issues ouvertes.

## Ce que ce n'est pas
Pas un guide de choix ni un comparatif : les entrées ne sont pas évaluées. Peu de contenu data/ML.

## Alternatives
Non documenté dans le README : aucune alternative nommée.

## Pour toi
Un bon point d'entrée pour retrouver un nom d'outil de CI, d'observabilité ou de secrets en MLOps ; vérifie toujours l'état du projet avant d'en choisir un.

