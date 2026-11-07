---
schema: 1
depot: DIYgod/RSSHub
source_readme_sha: 3925f2061d75f565
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: adopter
---

# DIYgod/RSSHub

> Générateur de flux RSS pour des sites qui n'en publient pas, à auto-héberger ou à utiliser en instance publique.

## Le problème
Beaucoup de sites et de réseaux sociaux n'offrent pas de flux RSS, donc on ne peut pas les suivre dans un lecteur.

## Ce que ça fait vraiment
Un service reçoit une requête de flux, choisit une route (`lib/routes`), récupère le contenu de la source et renvoie un flux RSS ou Atom. Il comprend cache, middleware, gestion d'erreurs, API et point d'entrée worker. Le README parle de plus de 5 000 instances. Les routes et le câblage n'ont pas été examinés, d'où les liens en pointillés.

## Comment c'est branché
```mermaid
flowchart TD
  Rd(("Lecteur de flux")) --> Svc["lib/app.worker.tsx"]
  Svc -.-> Reg["lib/registry.ts"]
  Reg -.-> Rt["lib/routes"]
  Svc -.-> Rss["lib/views/rss.tsx"]
  Svc -.-> Cache["lib/utils/cache/index.worker.ts"]
```

## Essayer
Aucune commande dans le README : il renvoie vers la documentation de déploiement et le Quick Start.

## Coût et pièges
Gratuit. L'auto-hébergement impose de gérer les routes cassées quand un site change. Un lien « un clic » passe par Hostinger, un hébergeur payant.

## Ce que ce n'est pas
Pas un lecteur RSS (Folo, cité, en est un). Pas une garantie de disponibilité des routes. Licence AGPL-3.0.

## Alternatives
RSSHub Radar (extension pour découvrir des flux), Folo (lecteur). Ces deux projets complètent RSSHub plus qu'ils ne le remplacent.

## Pour toi
Utile pour alimenter une veille automatisée en flux (blogs, dépôts, réseaux) : adopte-le en auto-hébergé, en gardant l'AGPL en tête.

