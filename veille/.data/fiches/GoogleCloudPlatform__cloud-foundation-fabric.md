---
schema: 1
depot: GoogleCloudPlatform/cloud-foundation-fabric
source_readme_sha: 48344cd74874bace
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: payant
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# GoogleCloudPlatform/cloud-foundation-fabric

> Modules Terraform et modèle de zone d'atterrissage (FAST) pour bâtir une organisation Google Cloud.

## Le problème
Monter une organisation GCP de niveau entreprise (projets, réseau, IAM, sécurité) est long et mal standardisé.

## Ce que ça fait vraiment
Deux volets : FAST, conception d'organisation GCP avec implémentation Terraform par étapes, et une suite de modules proches des ressources du fournisseur (fondations, réseau, calcul, données, IA, développement, sécurité, serverless). Les modules d'IA couvrent AI Applications et des composants Gemini Enterprise Agent Platform. S'y ajoutent un importeur d'infrastructure existante et un pipeline d'anonymisation SecOps.

## Comment c'est branché
```mermaid
graph LR
  F[FAST landing zone] --> O[Organization setup]
  F --> N[Networking]
  F --> S[Security]
  M[Terraform modules] --> G[Google Cloud]
  I[Fabric importer] --> M
  PF[Project factory] --> G
```

## Essayer
Aucune commande dans le README : voir le README de chaque module et le guide de contribution.

## Coût et pièges
Le code est gratuit mais les ressources GCP sont facturées. Il faut un compte GCP avec droits d'organisation. Le dépôt est conçu pour être forké et possédé.

## Ce que ce n'est pas
Pas un produit supporté officiellement ni un service géré : un kit à forker. Il n'y a que Google Cloud.

## Alternatives
Aucune nommée dans le README (une comparaison avec d'autres kits est évoquée sans nom).

## Pour toi
Surveiller : utile comme référence pour industrialiser une plateforme data/IA sur GCP (projets, réseau, modules d'IA), inutile ailleurs.

