---
schema: 1
depot: pulumi/pulumi-random
source_readme_sha: c30a7c91d1621d6e
ecrite_le: 2026-10-30
nature: bibliothèque
deploiement: npm
prerequis: [Node, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# pulumi/pulumi-random

> Provider Pulumi qui génère des valeurs aléatoires stables, comme des mots de passe ou des noms.

## Le problème
Une valeur aléatoire normale change à chaque évaluation du programme Pulumi et empêche d'atteindre un état cible stable.

## Ce que ça fait vraiment
Fournit des ressources (par exemple `RandomPassword`) dont le résultat reste stocké dans l'état Pulumi. Disponible en Node.js, Python, Go et .NET. L'exemple génère un mot de passe et le passe à une instance RDS AWS.

## Comment c'est branché
```mermaid
graph LR
  A[Programme Pulumi] --> B[RandomPassword]
  B --> C[output result]
  C --> D[aws.rds.Instance]
```

## Essayer
```bash
npm install @pulumi/random
pip install pulumi_random
go get github.com/pulumi/pulumi-random/sdk/v4/go/...
dotnet add package Pulumi.Random
```

## Coût et pièges
Gratuit. Il faut Pulumi installé ; non documenté dans ce README. Le mot de passe est stocké dans l'état : à chiffrer.

## Ce que ce n'est pas
Pas un générateur cryptographique autonome : il ne sert que dans un programme Pulumi.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : brique mineure mais standard si tu fais de l'IaC en Pulumi.

