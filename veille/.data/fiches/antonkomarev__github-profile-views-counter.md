---
schema: 1
depot: antonkomarev/github-profile-views-counter
source_readme_sha: 6eae3bebd0b8532b
ecrite_le: 2026-11-25
nature: service
deploiement: SaaS
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# antonkomarev/github-profile-views-counter

> Badge compteur de visites de profil GitHub, hébergé gratuitement, pour personnaliser un README de profil.

## Le problème
GitHub n'affiche pas combien de fois ton profil est consulté.

## Ce que ça fait vraiment
Une image dynamique du service komarev.com compte les requêtes reçues du proxy d'images de GitHub (Camo) et affiche le total. Options : couleur, style, libellé, nombre de départ, abréviation. Le README précise que c'est une preuve de concept : il compte des chargements de page, pas des visiteurs uniques.

## Comment c'est branché
```mermaid
flowchart TD
  A["public/index.php"] --> B["src/Request.php"]
  B --> C["src/Username.php"]
  A --> D["CounterRepositoryFactory.php"]
  D --> E["CounterFileRepository.php"]
  D --> F["CounterPdoRepository.php"]
  E --> H["BadgeImageRendererService.php"]
```

## Essayer
```bash
# Aucune commande : ajouter dans le README du profil
# ![](https://komarev.com/ghpvc/?username=your-github-username)
```

## Coût et pièges
Gratuit, mais le compteur dépend du serveur de l'auteur, financé par dons ; ne pas compter sur sa durée. Les chiffres sont gonflables et ne mesurent pas des visiteurs uniques.

## Ce que ce n'est pas
Pas un outil d'analyse : pas de statistiques détaillées (renvoyées vers un autre service). Pas une mesure d'audience fiable.

## Alternatives
- Ÿ HŸPE : service plus complet, avec statistiques détaillées.

## Pour toi
À ignorer : gadget cosmétique, sans valeur pour un travail data, IA ou MLOps.

