# uvdesk/community-skeleton

> Symfony skeleton of an open source helpdesk, to set up and customize your own customer support.

## The problem
Centralizing customer requests received by email into tracked tickets, with teams, canned replies and a knowledge base.

## What it actually does
A PHP distribution (Symfony + Backbone.js) assembling packages: Core Framework, Extension Framework, Automation (workflows), Mailbox (mails → tickets), Support Center (portal). Listed features: agents, groups, saved replies, notes, FAQ, API. A web installer or the `uvdesk:configure-helpdesk` command configures the instance. Development is led by the UVdesk team, backed by Webkul.

## How it is wired
```mermaid
flowchart LR
  A["Administrator"] --> B["Web Installer wizard.js"]
  B --> C["Database Migration"]
  C --> D["Default User Setup"]
  D --> E["HTTP Entry index.php"]
  E --> F["Helpdesk Packages"]
```

## Trying it
```bash
composer create-project uvdesk/community-skeleton helpdesk-project
php bin/console uvdesk:configure-helpdesk
php bin/console server:run
```

## Cost and gotchas
Requirements: PHP 8.1, MySQL 5.7.23+, Composer 2, the PHP IMAP and Mailparse extensions, 4 GB of RAM. OSL-3.0 license (copyleft): modifications must be redistributed under the same license. "Apps" modules are separate.

## What it is not
Not a turnkey product: it is a skeleton. The ticketing features come from external packages not audited here.

## Alternatives
No alternative named in the README.

## For you
A PHP helpdesk has no use in a data/AI path: ignore.
