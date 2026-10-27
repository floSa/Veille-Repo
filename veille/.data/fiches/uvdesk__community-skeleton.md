---
schema: 1
depot: uvdesk/community-skeleton
source_readme_sha: 2c8025b50b7f4cbf
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [version de Python, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# uvdesk/community-skeleton

> Squelette Symfony d'un helpdesk open source, pour monter et personnaliser son propre support client.

## Le problème
Centraliser les demandes clients reçues par mail en tickets suivis, avec équipes, réponses types et base de connaissances.

## Ce que ça fait vraiment
Distribution PHP (Symfony + Backbone.js) assemblant des paquets : Core Framework, Extension Framework, Automation (workflows), Mailbox (mails → tickets), Support Center (portail). Fonctions listées : agents, groupes, réponses enregistrées, notes, FAQ, API. Un installeur web ou la commande `uvdesk:configure-helpdesk` configure l'instance. Développement mené par l'équipe UVdesk, adossée à Webkul.

## Comment c'est branché
```mermaid
flowchart LR
  A["Administrator"] --> B["Web Installer wizard.js"]
  B --> C["Database Migration"]
  C --> D["Default User Setup"]
  D --> E["HTTP Entry index.php"]
  E --> F["Helpdesk Packages"]
```

## Essayer
```bash
composer create-project uvdesk/community-skeleton helpdesk-project
php bin/console uvdesk:configure-helpdesk
php bin/console server:run
```

## Coût et pièges
Prérequis : PHP 8.1, MySQL 5.7.23+, Composer 2, extensions PHP IMAP et Mailparse, 4 Go de RAM. Licence OSL-3.0 (copyleft) : modifications redistribuées sous la même licence. Modules « Apps » à part.

## Ce que ce n'est pas
Pas un produit clé en main : c'est un squelette. Les fonctions de ticketing viennent de paquets externes non audités ici.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Un helpdesk PHP n'a pas d'usage dans un parcours data/IA : à ignorer.

