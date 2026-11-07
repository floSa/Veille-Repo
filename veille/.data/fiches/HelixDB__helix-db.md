---
schema: 1
depot: HelixDB/helix-db
source_readme_sha: 1864fdd6d2399864
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# HelixDB/helix-db

> Base de données graphe en Rust avec recherche vectorielle et plein texte BM25, pour développeurs d'applications IA.

## Le problème
Faire cohabiter graphe de relations, embeddings et recherche textuelle impose d'assembler plusieurs bases et de synchroniser les données.

## Ce que ça fait vraiment
Un moteur transactionnel unique stocke entités, relations, vecteurs et texte sur du stockage objet. Les requêtes s'écrivent avec des SDK Rust, TypeScript, Python ou Go et partent vers `POST /v2/query` d'une instance. Le README ajoute le Cypher (lectures et CRUD) pour les builds source, un mode embarqué, `helix chef` qui lance un agent de code, et Helix Cloud, la version gérée.

## Comment c'est branché
```mermaid
flowchart TD
    SDK["Language SDKs"] -->|"sends requests"| Server["Database Server (main.rs)"]
    CLI["Helix CLI (query.rs)"] -->|"queries instance"| Server
    Server -.->|"handles queries"| QS["Query Service (query_service.rs)"]
    QS -->|"executes queries"| Interp["Query Interpreter"]
    Interp -->|"reads and writes"| Store["Storage Access (storage.rs)"]
    Interp -.->|"supports vector queries"| Vec["Vector Search"]
```

## Essayer
```bash
curl -sSL "https://install.helix-db.com" | bash
mkdir my-helix-app && cd my-helix-app
helix init local
helix start dev
helix query dev --file examples/request.json
```

## Coût et pièges
Licence Apache 2.0. L'instance locale demande Docker ou Podman ; les données sont en mémoire par défaut et `--disk` les persiste. Helix Cloud demande un compte et semble payant (tarifs non indiqués). Plusieurs SDK ont des versions 0.x.

## Ce que ce n'est pas
Ce n'est pas une base SQL : le modèle est un graphe de propriétés. Le Cypher n'est disponible que pour les builds source.

## Alternatives
Le README ne cite pas d'alternative nommée.

## Pour toi
À surveiller : pertinent pour du RAG qui mêle graphe, vecteurs et texte, mais jeune et encore peu documenté sur ses limites.

