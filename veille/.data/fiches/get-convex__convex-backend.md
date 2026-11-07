---
schema: 1
depot: get-convex/convex-backend
source_readme_sha: 8b097e2463fbea30
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, télémétrie]
verdict: surveiller
---

# get-convex/convex-backend

> Base de données réactive open source où l'on écrit la logique serveur en TypeScript, pour développeurs d'applications web.

## Le problème
Garder une interface synchronisée avec des données cohérentes oblige à assembler base, fonctions serveur, cache et temps réel.

## Ce que ça fait vraiment
Le client s'abonne à des requêtes en direct via WebSocket ; le backend Rust exécute des fonctions JavaScript contre une base transactionnelle. S'y ajoutent stockage de fichiers, import/export de snapshots, index texte et vectoriel, connecteur Fivetran. Auto-hébergement par Docker ou binaire précompilé.

## Comment c'est branché
```mermaid
flowchart TD
  client["Client Convex : client.ts"] -.-> backend["Serveur : router.rs"]
  backend -.-> runner["Function runner : server.rs"]
  runner -.-> isolate["Exécution JS : mod.rs"]
  runner -.-> db[("Base réactive : transaction.rs")]
  db -.-> vec["Index vectoriel"]
  isolate --> files[("Stockage : core.rs")]
```

## Essayer
```bash
# Aucune commande documentée dans le README ; voir le guide d'auto-hébergement et BUILD.md.
```

## Coût et pièges
Le cloud a un palier gratuit. En auto-hébergement, changer le secret d'instance et la clé admin par défaut. Une balise anonyme (identifiant, version, uptime) est envoyée, désactivable par `--disable-beacon`.

## Ce que ce n'est pas
Ce n'est pas une base SQL classique. Les tests (dont l'aléatoire) ne sont pas fournis. Moins éprouvé sous Windows.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : intéressant pour des démos et apps temps réel, mais licence non identifiée et peu de lien avec le travail data.

