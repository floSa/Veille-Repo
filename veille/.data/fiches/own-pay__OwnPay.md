---
schema: 1
depot: own-pay/OwnPay
source_readme_sha: 6fe885f02c9cfe85
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# own-pay/OwnPay

> Passerelle de paiement auto-hébergée en PHP, avec plus de 120 intégrations, pour commerçants et développeurs.

## Le problème
Les plateformes de paiement placent données clients et flux d'argent chez un tiers et prélèvent des frais d'intermédiaire.

## Ce que ça fait vraiment
Affiche un paiement de marque blanche, route vers la passerelle choisie, vérifie le résultat (somme de contrôle, signature, webhook) et inscrit une écriture au grand livre en partie double. Gère plusieurs boutiques, des remboursements, des rôles de personnel, une API REST et un moteur de plugins en bac à sable.

## Comment c'est branché
```mermaid
flowchart LR
    A["Marchand"] --> B["OwnPay Core"]
    B --> C["Paiement marque blanche"]
    C --> D["Client"]
    D --> E["Passerelle de paiement"]
    E --> B
```

## Essayer
```bash
git clone https://github.com/own-pay/OwnPay.git
cd OwnPay
composer install
mysql -u root -p -e "CREATE DATABASE ownpay CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
php -S localhost:8000 -t public
composer test
composer analyse
```

## Coût et pièges
Logiciel gratuit, licence AGPL-3.0. Il faut PHP 8.3 ou plus, MySQL 8 ou MariaDB 10.4 ou plus, HTTPS recommandé. Les comptes chez chaque passerelle restent à ta charge. Il manipule de l'argent réel : bêta publique, tester d'abord en préproduction.

## Ce que ce n'est pas
Pas un service géré : tu opères et sécurises le serveur. Le README annonce tantôt la version 0.2.0, tantôt 0.1.0 : état exact incertain.

## Alternatives
Aucune nommée dans le README (Laravel et Symfony sont cités seulement comme frameworks écartés).

## Pour toi
Hors du périmètre data, IA ou MLOps, et traite de l'argent réel en bêta : à ignorer.

