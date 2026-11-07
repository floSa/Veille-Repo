---
schema: 1
depot: pinpoint-apm/pinpoint
source_readme_sha: f9e26239354ee800
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# pinpoint-apm/pinpoint

> Outil APM pour systèmes distribués Java, PHP et Python, qui trace les transactions sans modifier le code.

## Le problème
Dans une architecture distribuée, le trajet d'une transaction reste une boîte noire : on ne voit ni les goulots ni les pannes.

## Ce que ça fait vraiment
Des agents tracent les transactions entre composants et fournissent une carte de topologie (ServerMap), un graphique de threads actifs, un nuage de points requêtes/réponses, la pile d'appels niveau code, un inspecteur (CPU, mémoire, JVM) et une analyse d'erreurs. Installation d'agents sans changer le code, impact annoncé d'environ 3 % de ressources. La version 4.0.0 est sortie le 28 octobre 2026.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  app["Application Java, PHP ou Python"] --> ag["Agent"]
  ag --> co["Collecteur"]
  co --> st["Stockage HBase ou Pinot"]
  st --> web["Interface web"]
```

Aucun diagramme fourni. Le README liste agent, collecteur, web et batch avec des tables de compatibilité Java, HBase et Pinot. Non documenté en détail.

## Essayer
Aucune commande dans le README : il renvoie au guide de démarrage rapide, au guide d'installation et au dépôt Kubernetes. Non documenté ici.

## Coût et pièges
Gratuit, mais l'infrastructure (collecteur, HBase, Pinot) est à ta charge. Les tables de compatibilité de versions sont strictes : un agent 4.0 exige un collecteur 4.0.

## Ce que ce n'est pas
Pas un outil de monitoring de modèles ML : c'est de l'APM applicatif. Pas léger à déployer.

## Alternatives
Aucune alternative nommée dans le README (il cite Dapper comme inspiration).

## Pour toi
À surveiller : pertinent pour tracer des services Java en production, mais le déploiement est lourd pour un usage MLOps léger.

