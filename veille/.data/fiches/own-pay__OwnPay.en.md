# own-pay/OwnPay

> Self-hosted payment gateway in PHP, with more than 120 integrations, for merchants and developers.

## The problem
Payment platforms put customer data and money flows in a third party's hands and charge intermediary fees.

## What it actually does
Displays a white-label payment, routes to the chosen gateway, verifies the result (checksum, signature, webhook) and records a double-entry ledger entry. Handles multiple stores, refunds, staff roles, a REST API and a sandboxed plugin engine.

## How it is wired
```mermaid
flowchart LR
    A["Marchand"] --> B["OwnPay Core"]
    B --> C["Paiement marque blanche"]
    C --> D["Client"]
    D --> E["Passerelle de paiement"]
    E --> B
```

## Trying it
```bash
git clone https://github.com/own-pay/OwnPay.git
cd OwnPay
composer install
mysql -u root -p -e "CREATE DATABASE ownpay CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
php -S localhost:8000 -t public
composer test
composer analyse
```

## Cost and gotchas
Free software, AGPL-3.0 license. Requires PHP 8.3 or later, MySQL 8 or MariaDB 10.4 or later, HTTPS recommended. Accounts with each gateway remain at your expense. It handles real money: public beta, test in staging first.

## What it is not
Not a managed service: you operate and secure the server. The README announces sometimes version 0.2.0, sometimes 0.1.0: exact state uncertain.

## Alternatives
None named in the README (Laravel and Symfony are cited only as frameworks that were ruled out).

## For you
Outside the data, AI or MLOps scope, and deals with real money in beta: ignore.
