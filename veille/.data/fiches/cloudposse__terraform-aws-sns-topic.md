---
schema: 1
depot: cloudposse/terraform-aws-sns-topic
source_readme_sha: 42af4c34a0237dbf
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée, dernier commit ancien]
verdict: surveiller
---

# cloudposse/terraform-aws-sns-topic

> Module Terraform qui crée un topic AWS SNS, sa politique, ses abonnements et une file d'erreurs SQS.

## Le problème
Un topic SNS avec chiffrement, politique d'accès et abonnés demande plusieurs ressources liées, longues à écrire correctement.

## Ce que ça fait vraiment
Crée le topic SNS (standard ou FIFO), sa politique et ses abonnements (sqs, lambda, https, etc.). Il chiffre par défaut avec la clé KMS `alias/aws/sns`. Une file SQS de lettres mortes est possible. Exemple cité : alertes CloudWatch vers PagerDuty ou OpsGenie.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A[module sns] --> B[aws_sns_topic]
  B --> C[aws_sns_topic_policy]
  B --> D[aws_sns_topic_subscription]
  D --> E[aws_sqs_queue dead_letter_queue]
  E --> F[aws_sqs_queue_policy]
```

## Essayer
```bash
atmos test run
atmos test clean
```
L'usage lui-même est un bloc HCL (`module "sns"` avec `source = "cloudposse/sns-topic/aws"`) donné dans le README.

## Coût et pièges
Compte AWS requis ; SNS et SQS facturent à l'usage. Le catalogue n'affiche aucune licence, et le dernier push date d'août 2025.

## Ce que ce n'est pas
Ce n'est pas une messagerie prête à l'emploi : il ne provisionne que l'infrastructure. Les alarmes CloudWatch relèvent de modules voisins.

## Alternatives
Des modules voisins sont listés sous « Related Projects » (par exemple terraform-aws-sqs-cloudwatch-sns-alarms), mais ce sont des compléments, pas des remplaçants.

## Pour toi
À surveiller : pratique pour l'alerting d'une plateforme MLOps sur AWS, mais licence absente et dépôt peu actif.

