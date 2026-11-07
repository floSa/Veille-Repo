---
schema: 1
depot: cloudposse/terraform-datadog-platform
source_readme_sha: 8bf06b4eec012df4
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: payant
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: adopter
---

# cloudposse/terraform-datadog-platform

> Modules Terraform pour provisionner monitors, synthetics, rôles et SLO Datadog depuis des fichiers YAML.

## Le problème
Les monitors et rôles Datadog créés à la main dans l'interface dérivent et ne se versionnent pas.

## Ce que ça fait vraiment
Sept sous-modules : monitors, synthetics, permissions, roles, slo, child_organization, organization_settings. Les définitions vivent dans un catalogue de fichiers YAML lus via `cloudposse/config/yaml`, puis passés aux modules. Les rôles peuvent restreindre l'accès à certains monitors.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
    A["Catalogue YAML"] --> B["cloudposse/config/yaml"]
    B --> C["modules/monitors"]
    D["modules/roles"] --> C
    C --> E["Datadog"]
```

## Essayer
```bash
atmos test run
atmos test clean
atmos test --help
```

## Coût et pièges
Il faut un compte Datadog payant (la multi-organisation se demande au support). Une organisation enfant créée par Terraform ne peut pas être détruite par lui : il faut contacter le support.

## Ce que ce n'est pas
Pas un outil de monitoring : il ne fait que décrire des ressources Datadog. Les commandes ci-dessus sont celles des tests, pas du déploiement.

## Alternatives
- terraform-aws-datadog-integration : pour brancher AWS à Datadog.

## Pour toi
Adopter si tu supervises tes pipelines ML avec Datadog : monitors et SLO deviennent du code relu. Sans Datadog, aucun intérêt.

