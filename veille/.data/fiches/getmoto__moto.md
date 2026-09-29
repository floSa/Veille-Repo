---
schema: 1
depot: getmoto/moto
source_readme_sha: 654fa1fb2242accb
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# getmoto/moto

> Bibliothèque Python qui simule les services AWS en mémoire pour tester du code boto3.

## Le problème
Tester du code qui appelle S3, DynamoDB ou autre service AWS oblige soit à toucher un vrai compte (lent, coûteux), soit à écrire des mocks fragiles.

## Ce que ça fait vraiment
Le décorateur `@mock_aws` intercepte les appels boto3 et les sert depuis un compte AWS virtuel qui garde l'état (buckets, clés…). Un mode serveur HTTP accepte aussi des requêtes au format AWS. Couverture large des services, détaillée dans la page de couverture ; les Step Functions ont même un évaluateur de workflow et un historique d'événements.

## Comment c'est branché
```mermaid
graph LR
  Test[Test or application] --> Mock[AWS SDK mock decorator.py]
  Test --> Srv[HTTP server server.py]
  Mock --> Routes[Service routes urls.py]
  Srv --> Routes
  Routes --> Handlers[Service response handlers]
  Handlers --> State[Service backend state]
  State --> Reg[Backend registry backends.py]
```

## Essayer
```bash
pip install 'moto[ec2,s3,all]'
```

## Coût et pièges
Gratuit, financé via OpenCollective. Les extras (`[s3]`, `[all]`) conditionnent les services disponibles.

## Ce que ce n'est pas
Pas un émulateur complet d'AWS : la couverture varie selon les services et les fonctionnalités. Ne remplace pas un test d'intégration contre le vrai cloud.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour tester des pipelines qui lisent ou écrivent sur S3/DynamoDB : un décorateur suffit, les tests deviennent rapides et gratuits, et le projet est maintenu depuis 2013.
