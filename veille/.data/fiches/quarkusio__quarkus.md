---
schema: 1
depot: quarkusio/quarkus
source_readme_sha: e5fd61f03cffc443
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# quarkusio/quarkus

> Framework Java orienté conteneurs et cloud, démarrage rapide, exécution JVM ou native.

## Le problème
Les applications Java classiques démarrent lentement et consomment beaucoup de mémoire dans les conteneurs.

## Ce que ça fait vraiment
Déplace une grande partie du travail à la compilation : une chaîne d'étapes et d'éléments de build (augmentation) génère le code et la configuration native-image. S'appuie sur des standards (JAX-RS/RESTEasy, Hibernate ORM, Vert.x, MicroProfile, Camel) ; modèle unifiant impératif et réactif ; Dev UI pour le développement.

## Comment c'est branché
```mermaid
flowchart LR
  Dev["Application developer"] --> Augmentor["Quarkus augmentor"]
  Augmentor --> Chain["Build chain"]
  Chain --> Steps["Build steps"]
  Steps --> Items["Build items"]
  Steps --> Codegen["Code generation"]
  Chain --> App["Quarkus application"]
```

## Essayer
Aucune commande dans le README ; renvoi à la documentation et au guide de contribution pour la compilation.

## Coût et pièges
Gratuit ; JDK requis. Le prérequis « Python » ne s'applique pas : c'est du Java. Le README ne détaille pas les prérequis de compilation native.

## Ce que ce n'est pas
Pas un framework de data science. Le README ne présente pas d'extension IA, bien que le framework en possède.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : framework Java pour microservices ; sans intérêt si ta stack est Python.

