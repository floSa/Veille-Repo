---
schema: 1
depot: outline/outline
source_readme_sha: f726b4c7b465cfcf
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# outline/outline

> Base de connaissances collaborative pour équipes, en React et Node.js, hébergée ou auto-hébergée.

## Le problème
Les équipes perdent leur documentation dans des outils fermés ou dispersés, sans recherche ni édition collaborative.

## Ce que ça fait vraiment
Collections et documents, éditeur riche, commentaires, partage, modèles, import, recherche, webhooks, intégrations GitHub et GitLab. Serveur Node avec base de données, stockage S3, autorisations par politiques.

## Comment c'est branché
```mermaid
flowchart TD
    App["app/index.tsx"] --> Routes["routes"]
    Routes --> Doc["Document.tsx + éditeur"]
    Doc --> Stores["DocumentsStore.ts"]
    Server["server/main.ts"] --> DB[("database.ts")]
    Server --> Policies["policies/cancan.ts"]
    Server --> S3["S3Storage.ts"]
```

## Essayer
```bash
make test
yarn db:migrate
yarn test:server
```
Pour l'installation, le README renvoie à la documentation et aux images Docker.

## Coût et pièges
Hébergé payant (getoutline.com) ; auto-hébergement gratuit mais demande base de données, stockage de fichiers et configuration d'authentification.

## Ce que ce n'est pas
Pas un wiki prêt à lancer en une commande. La licence est présente mais non identifiée par GitHub : à vérifier.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : bon wiki d'équipe pour la doc d'un projet MLOps, sous réserve de lire la licence.

