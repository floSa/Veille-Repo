---
schema: 1
depot: public-transport/transitous
source_readme_sha: 08047861dfde9389
ecrite_le: 2026-11-25
nature: service
deploiement: SaaS
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée]
verdict: surveiller
---

# public-transport/transitous

> Service communautaire gratuit de calcul d'itinéraires en transports publics, alimenté par des flux GTFS ouverts.

## Le problème
Les itinéraires de transport international dépendent des opérateurs et ne passent pas les frontières.

## Ce que ça fait vraiment
Collecte des flux GTFS / GTFS-RT listés dans `feeds/*.json`, les corrige par des scripts Lua puis génère la configuration du moteur MOTIS. Le déploiement passe par Woodpecker et Ansible ; un site Hugo expose un widget de recherche. Objectifs : gratuité, vie privée, maintenance collaborative des flux.

## Comment c'est branché
```mermaid
flowchart TD
  A["feeds/fr.json"] --> B["src/fetch.py"]
  A --> D["src/generate-motis-config.py"]
  D --> H["configs/motis/config.yml"]
  F[".woodpecker/data-import.yml"] --> B
  G["ansible/motis.yml"] --> H
  H --> J["website/src/TransitousWidget.purs"]
```

## Essayer
```bash
# Aucune commande dans le README : consulter le site du projet pour ajouter une région.
```

## Coût et pièges
Gratuit à utiliser. Contribuer demande de maintenir des flux de données. Licence absente du dépôt (le commentaire de tête mentionne CC0-1.0 pour le README seulement).

## Ce que ce n'est pas
Pas un produit d'un opérateur : couverture dépendante des flux ouverts disponibles.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Beau cas de pipeline de données ouvertes (GTFS), mais hors cœur de métier : à surveiller.

