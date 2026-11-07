---
schema: 1
depot: terraform-google-modules/terraform-google-cloud-nat
source_readme_sha: 7c217c0e523f1e26
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# terraform-google-modules/terraform-google-cloud-nat

> Module Terraform qui crée et configure un Cloud NAT Google Cloud ; l'auteur recommande plutôt le module Cloud Router.

## Le problème
Donner un accès sortant à Internet à des machines GCP sans IP publique demande une configuration NAT précise.

## Ce que ça fait vraiment
Crée un Cloud NAT sur un routeur existant (ou en crée un), avec options de ports par VM, allocation dynamique, délais d'inactivité TCP/UDP/ICMP, journaux, règles et plages de sous-réseaux. Les IP peuvent être automatiques ou fixes.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A["module cloud-nat"] --> B["Cloud Router"]
  B --> C["Cloud NAT"]
  C --> D["Sous-réseaux et IP"]
```

## Essayer
```bash
terraform init
terraform plan
terraform apply
terraform destroy
```

## Coût et pièges
Compte GCP, rôle `roles/compute.networkAdmin`, API Compute Engine activée. Plusieurs changements (ports, IP, délais) forcent la recréation du NAT. La version de Terraform du README est ancienne (0.13+).

## Ce que ce n'est pas
Pas le module recommandé : le README oriente vers le module Cloud Router, plus flexible.

## Alternatives
- Module Cloud Router de terraform-google-modules : plus flexible, gère aussi les interconnexions.

## Pour toi
Ignorer : l'auteur lui-même le déconseille au profit du module Cloud Router, et c'est de la plomberie réseau.

