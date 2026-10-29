---
schema: 1
depot: hashicorp/setup-packer
source_readme_sha: 89090870ecccd984
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# hashicorp/setup-packer

> Action GitHub qui installe le CLI Packer dans un workflow.

## Le problème
Les runners GitHub n'ont pas toujours la bonne version de Packer.

## Ce que ça fait vraiment
Ajoute le binaire `packer` au PATH, avec l'entrée `version` (défaut `latest`, non pré-release) et la sortie `version`. Intégration HCP Packer via `HCP_CLIENT_ID` et `HCP_CLIENT_SECRET` en secrets.

## Comment c'est branché
```mermaid
flowchart LR
  A[Workflow GitHub] --> B[setup-packer]
  B --> C[packer init]
  C --> D[packer validate]
  D --> E[packer build]
```

## Essayer
```yaml
- uses: hashicorp/setup-packer@main
  with:
    version: "latest"
- run: "packer init ./image.pkr.hcl"
```

## Coût et pièges
Gratuit ; le build peut exiger des identifiants du fournisseur. Le README référence `@main`, pas une version épinglée.

## Ce que ce n'est pas
Pas un outil de build d'images : il installe seulement Packer.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile si tu construis des images de machines (AMI GPU) en CI, sinon non.

