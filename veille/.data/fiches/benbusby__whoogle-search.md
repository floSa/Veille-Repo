---
schema: 1
depot: benbusby/whoogle-search
source_readme_sha: c78d8f3600bd8205
ecrite_le: 2026-09-30
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [archivé, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# benbusby/whoogle-search

> Proxy de recherche Google sans pubs ni traçage, arrêté en juillet 2026 car Google a bloqué son principe.

## Le problème
Obtenir des résultats Google sans publicités, JavaScript ni pistage de son adresse IP.

## Ce que ça fait vraiment
Historiquement : une application Flask qui interrogeait Google sans JavaScript, nettoyait les résultats, gérait bangs, thèmes, proxys et Tor. Le README du 24 juillet 2026 déclare que Whoogle ne renvoie plus de résultats : Google a bloqué les dernières chaînes User-Agent, et la voie Custom Search (BYOK) n'est plus viable.

## Comment c'est branché
```mermaid
flowchart LR
  R[routes.py] --> S[search.py]
  S --> B[bangs.py]
  S --> Q[request.py Google]
  S --> CS[cse_client.py]
  S --> F[filter.py]
```

## Essayer
```bash
docker pull benbusby/whoogle-search
docker run --publish 5000:5000 --detach --name whoogle-search benbusby/whoogle-search:latest
```
Ces commandes ne produiront plus de résultats, selon le README.

## Coût et pièges
Gratuit, mais inutilisable : plus de commits, correctifs ni support. Dépôt archivé.

## Ce que ce n'est pas
Ce n'est pas une solution fonctionnelle aujourd'hui : le README demande de ne pas s'attendre à ce qu'elle marche.

## Alternatives
- Searx : le README l'encourageait pour d'autres moteurs.
- Kagi : payant, cité comme solution de remplacement par des utilisateurs.

## Pour toi
Ignorer : archivé et cassé par le blocage de Google, ne l'installe pas.

