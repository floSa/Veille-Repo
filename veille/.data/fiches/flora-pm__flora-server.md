---
schema: 1
depot: flora-pm/flora-server
source_readme_sha: 7d9c8fd3fdf17f6c
ecrite_le: 2026-11-25
nature: service
deploiement: compilation
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# flora-pm/flora-server

> Serveur d'un méta-index de paquets Haskell avec catégories, espaces de noms et interface mobile.

## Le problème
Le catalogue Hackage contient des doublons et manque de catégories organisées.

## Ce que ça fait vraiment
Un serveur web expose pages et API qui interrogent le modèle de paquets, lequel accède à PostgreSQL. Un exécutable de jobs importe les paquets en arrière-plan, un autre applique les migrations SQL. Fonctions : catégories, espaces de noms, thème clair/sombre.

## Comment c'est branché
```mermaid
flowchart TD
  a1["app/server/Main.hs"] --> w1["src/web/FloraWeb/Server.hs"]
  w1 --> w2["src/web/FloraWeb/Pages/Server/Packages.hs"]
  w1 --> w3["src/web/FloraWeb/API/Server/Packages.hs"]
  w2 --> c1["src/core/Flora/Model/Package/Query.hs"]
  c1 --> c2["src/core/Flora/Database.hs"]
  a2["app/jobs/Main.hs"] --> c4["src/jobs-worker/FloraJobs/Runner.hs"]
```

## Essayer
Aucune commande dans le README (guides sur docs.flora.pm).

## Coût et pièges
PostgreSQL requis ; Docker non documenté dans le README. Une clause civile refuse dons et partenariats liés à la guerre ou à la surveillance.

## Ce que ce n'est pas
Pas un remplaçant de Hackage ni un outil de build : un index de recherche.

## Alternatives
Hackage (implicite, non nommé).

## Pour toi
À ignorer : index de paquets Haskell, aucun usage data/IA.

