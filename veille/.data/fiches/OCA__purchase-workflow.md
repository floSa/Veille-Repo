---
schema: 1
depot: OCA/purchase-workflow
source_readme_sha: 52c4d8e494dc9e70
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# OCA/purchase-workflow

> Collection communautaire de modules Odoo 19 pour les achats : demandes, approbation, remises, réception.

## Le problème
Les achats d'Odoo manquent d'options courantes : demandes d'achat, types de commande, statuts de réception, remises.

## Ce que ça fait vraiment
Catalogue d'addons Odoo 19.0 : `purchase_request`, `purchase_order_approved`, `purchase_triple_discount`, `purchase_landed_cost`, `purchase_reception_status`, `purchase_order_type`, etc. Chacun étend `purchase.order`, les lignes, les mouvements de stock ou le partenaire. Seule la table d'addons figure au README.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Odoo 19 + PostgreSQL"] --> B["purchase_request"]
  A --> C["purchase_order_approved"]
  A --> D["purchase_triple_discount"]
  A --> E["purchase_landed_cost"]
  A --> F["purchase_reception_status"]
```

## Essayer
Aucune commande documentée dans le README (table d'addons seulement).

## Coût et pièges
Suppose une instance Odoo 19. Licence AGPL-3.0 : obligations de diffusion en usage réseau. 217 issues ouvertes.

## Ce que ce n'est pas
Pas une application autonome : ce sont des extensions d'Odoo.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : ERP achats sans rapport avec data/IA/MLOps.

