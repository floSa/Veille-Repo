---
schema: 1
depot: VirtusLab/besom
source_readme_sha: 6b2f1ac4329828c8
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# VirtusLab/besom

> SDK Scala pour écrire des programmes Pulumi d'infrastructure as code, en bêta publique.

## Le problème
Les équipes Scala veulent décrire leur infrastructure cloud dans leur langage plutôt qu'en YAML ou en un autre langage.

## Ce que ça fait vraiment
Permet d'écrire des ressources Pulumi (AWS, Azure, Google Cloud, Kubernetes) en Scala 3, avec Scala CLI, sbt, Maven ou Gradle. Ce n'est pas un wrapper du SDK Java de Pulumi : l'implémentation est séparée. Les ressources sont évaluées paresseusement.

## Comment c'est branché
```mermaid
flowchart LR
  A[Main.scala] --> B[besom-core]
  B --> C[Plugin de langage Pulumi]
  C --> D[Pulumi CLI]
  D --> E[Cloud]
```

## Essayer
```bash
curl -fsSL https://get.pulumi.com/ | sh
curl -sSLf https://scala-cli.virtuslab.org/get | sh
pulumi plugin install language scala 0.5.0 --server github://api.github.com/VirtusLab/besom
pulumi new https://github.com/VirtusLab/besom/tree/v0.5.0/templates/aws
pulumi up
pulumi destroy -y
```

## Coût et pièges
Compte cloud et facture à ta charge. JDK 11+ et Scala 3.3.1+ nécessaires (non listés dans les prérequis). Pas de support de Mill. Ne pas utiliser `com.pulumi:*`.

## Ce que ce n'est pas
Pas le SDK Java de Pulumi. Les versions du README (0.5.0) peuvent être en retard sur le code.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant seulement si ton infra est déjà en Scala ; sinon Pulumi en Python te suffit sans passer par ce SDK.

