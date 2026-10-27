---
schema: 1
depot: JetBrains/intellij-community
source_readme_sha: c426d2cbf6a7468d
ecrite_le: 2026-10-27
nature: app
deploiement: compilation
prerequis: [Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# JetBrains/intellij-community

> Code source ouvert des IDE JetBrains, base de la plateforme IntelliJ, pour contributeurs et auteurs de plugins.

## Le problème
Construire ou étendre un IDE JetBrains exige d'accéder à son code et à son système de build.

## Ce que ça fait vraiment
Dépôt de l'édition communautaire d'IntelliJ IDEA et PyCharm : services Java (PSI), regex, grille de données, images, résolution de dépendances, données d'éditeur de Fleet. Migration en cours vers Bazel ; scripts `installers.cmd` et `tests.cmd`, environnement de build Docker.

## Comment c'est branché
```mermaid
flowchart LR
  A[Java PSI model] --> B[Java types]
  A --> C[Nullability service]
  D[Regex editor support] --> A
  E[Data grid] --> F[Grid mutations]
  G[Fleet editor data] --> H[Durable storage]
```

## Essayer
```bash
git clone https://github.com/JetBrains/intellij-community.git
./getPlugins.sh
./bazel.cmd run //build:idea_community
```

## Coût et pièges
IntelliJ IDEA 2026.1+ avec plugin Bazel ; clone volumineux (clone superficiel possible) ; modules Android à récupérer ; certains tests ne tournent pas encore sous Bazel.

## Ce que ce n'est pas
Pas un produit à installer : l'IDE se télécharge ailleurs. Licence présente mais non identifiée par GitHub.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : réservé à qui développe des plugins ou contribue à l'IDE ; utilise simplement PyCharm.

