---
schema: 1
depot: ministryofjustice/cloud-platform-infrastructure
source_readme_sha: 31cabf429445c2b9
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# ministryofjustice/cloud-platform-infrastructure

> Terraform et tests qui créent le cluster Kubernetes de la Cloud Platform du ministère britannique de la Justice.

## Le problème
Opérer plusieurs clusters Kubernetes sur AWS demande une infrastructure reproductible et testée.

## Ce que ça fait vraiment
Le dépôt contient les scripts Terraform exécutés par un pipeline et des tests d'intégration Go avec Ginkgo. Cinq répertoires Terraform ont chacun leur état dans un bucket S3 partagé, séparés par workspace, ce qui limite le rayon d'une erreur. Les ressources sont des modules dans terraform/modules.

## Comment c'est branché
```mermaid
flowchart TD
    A["terraform/global-resources"] --> S["S3 cloud-platform-terraform-state"]
    B["terraform/cloud-platform"] --> S
    C["terraform/cloud-platform-account"] --> S
    D["eks/core et core/components"] --> S
    E["test/ (Go, Ginkgo)"] -->|"valide"| F["Cluster Kubernetes"]
```

## Essayer
```bash
make run-tests
# ou
go test -v ./...
cd test; ginkgo -r -v
```

## Coût et pièges
Il faut un compte AWS, kubectl, Terraform, aws-cli, Go et Ginkgo v2, avec des versions précises. Certains tests exigent d'ajouter son ARN à OpenSearch. Le README renvoie la création de cluster à un site de runbooks.

## Ce que ce n'est pas
Ce n'est pas un produit réutilisable : c'est l'infrastructure d'une organisation particulière. Les chemins et noms de bucket sont propres au ministère.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : à lire comme exemple d'organisation de l'état Terraform par workspace, pas comme outil à adopter.

