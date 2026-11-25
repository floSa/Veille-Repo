---
schema: 1
depot: OCA/helpdesk
source_readme_sha: 6f209dd34a0c4d7f
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence copyleft]
verdict: ignorer
---

# OCA/helpdesk

> Suite de modules Odoo de l'OCA pour gérer des tickets d'assistance, de la saisie à la résolution.

## Le problème
Suivre les demandes clients par courriel ou portail, avec équipes, étapes et délais, demande un outil dédié dans Odoo.

## Ce que ça fait vraiment
Le module de base reçoit les tickets via le portail ou la passerelle courriel, les assigne par équipe et étape. Des modules ajoutent SLA, fusion de tickets, clôture des tickets inactifs, notation client, liens vers CRM, projets, ventes, produits et service terrain.

## Comment c'est branché
```mermaid
flowchart TD
  A["Portail client"] --> B["helpdesk_ticket.py"]
  C["Passerelle courriel"] --> B
  B --> D["Équipes et étapes"]
  B --> E["SLA"]
  B --> F["Fusion de tickets"]
  B --> G["CRM et projets"]
```

## Essayer
Aucune commande documentée dans le README, qui ne contient que le tableau des modules en version 19.0.

## Coût et pièges
Gratuit, suppose une instance Odoo 19. Licence AGPL-3.0, 73 issues ouvertes.

## Ce que ce n'est pas
Pas un service de support en ligne : des extensions à installer dans ton propre Odoo.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : un gestionnaire de tickets Odoo, sans lien avec un travail data, IA ou MLOps.

