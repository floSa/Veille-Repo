---
schema: 1
depot: nextcloud/app_api
source_readme_sha: bb45e187a3d23a2a
ecrite_le: 2026-11-25
nature: extension
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: surveiller
---

# nextcloud/app_api

> Composant Nextcloud qui permet des applications externes dont le backend tourne hors de PHP, souvent en conteneur.

## Le problème
Écrire des applications Nextcloud en PHP limite les langages et les charges lourdes comme le GPU.

## Ce que ça fait vraiment
Les requêtes passent par les routes, un middleware d'authentification et un contrôleur proxy vers les services, qui déploient les ExApps via Docker ou Kubernetes et enregistrent leur état en base. Un daemon de déploiement (HaRP recommandé, DSP ancien) est nécessaire.

## Comment c'est branché
```mermaid
flowchart TD
  A["appinfo/routes.php"] --> B["AppAPIAuthMiddleware.php"]
  B --> C["ExAppProxyController.php"]
  C --> D["AppAPIService.php"]
  D --> E["ExAppService.php"]
  E --> F["DockerActions.php"]
  E --> G["ExAppMapper.php"]
```

## Essayer
```bash
occ app:disable app_api
```

## Coût et pièges
Gratuit. Sans daemon de déploiement enregistré, aucune ExApp ne tourne. Ne pas exposer HaRP/DSP à Internet.

## Ce que ce n'est pas
Utile seulement pour installer ou développer des ExApps ; le DSP est déprécié, retrait prévu avec Nextcloud 35.

## Alternatives
HaRP : daemon de déploiement recommandé à partir de Nextcloud 32.
Docker Socket Proxy : option ancienne, à éviter.

## Pour toi
À surveiller : seulement si tu auto-héberges Nextcloud et veux y brancher des services IA en conteneur.

