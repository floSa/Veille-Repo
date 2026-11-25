---
schema: 1
depot: OCA/server-brand
source_readme_sha: c944ae8b44e6bdd5
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# OCA/server-brand

> Modules Odoo 19 qui retirent la marque Odoo des courriels, du portail et du site web.

## Le problème
Les instances Odoo affichent la marque et des liens vers odoo.com partout, ce qui gêne une version personnalisée.

## Ce que ça fait vraiment
Six addons : disable_odoo_online, mail_debranding, portal_debranding, remove_odoo_enterprise, sale_portal_debranding, website_debranding. Un métapaquet les assemble. Deux modules coupent les liens vers odoo.com et vers les modules enterprise.

## Comment c'est branché
```mermaid
flowchart TD
  A["mail_debranding"] --> F["setup/_metapackage"]
  B["portal_debranding"] --> C["sale_portal_debranding"]
  B --> D["website_debranding"]
  D --> F
  E["disable_odoo_online"] --> F
  G["remove_odoo_enterprise"] --> F
```

## Essayer
```bash
# Aucune commande documentée : installer les addons dans une instance Odoo
```

## Coût et pièges
Il faut une instance Odoo 19. AGPL-3.0 : les modifications servies en réseau doivent rester ouvertes.

## Ce que ce n'est pas
Pas un outil de données. Retirer les modules enterprise relève de ta responsabilité vis-à-vis des conditions d'Odoo.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
Ignorer : de la personnalisation d'Odoo, sans lien avec data / IA / MLOps.

