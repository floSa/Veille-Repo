---
schema: 1
depot: Sylius/Sylius
source_readme_sha: 7c8f1e97c058a079
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# Sylius/Sylius

> Framework e-commerce open source sur Symfony, pour développeurs PHP construisant des boutiques sur mesure.

## Le problème
Les plateformes e-commerce prêtes à l'emploi se plient mal à des besoins métier spécifiques.

## Ce que ça fait vraiment
Framework PHP organisé autour de la vitrine, du catalogue, du panier, du paiement, des commandes, de l'expédition et des promotions, avec une administration et une API REST. Culture de tests BDD (PHPUnit et Behat). L'architecture montre une abstraction de machine à états avec adaptateur Winzou.

## Comment c'est branché
```mermaid
flowchart LR
  S["Shop storefront"] --> C["Checkout"]
  C --> O["Orders"]
  A["Admin application"] --> K["Catalog management"]
  R["REST API"] --> O
  O --> W["State machine abstraction"]
```

## Essayer
Aucune commande documentée. Le README renvoie vers l'installation par Composer et le tutoriel « Getting started ».

## Coût et pièges
Le cœur est gratuit ; Sylius Plus (multi-boutique, B2B, fidélité, support SLA) est une offre payante.

## Ce que ce n'est pas
Pas une boutique prête à l'emploi : c'est un cadre de développement. Le catalogue de plugins est un marché séparé.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : e-commerce PHP, sans rapport avec la data/IA.

