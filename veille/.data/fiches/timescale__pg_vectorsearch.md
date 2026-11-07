---
schema: 1
depot: timescale/pg_vectorsearch
source_readme_sha: 3fc141291caaa992
ecrite_le: 2026-11-07
nature: outil
deploiement: compilation
prerequis: [service tiers]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# timescale/pg_vectorsearch

> Extension PostgreSQL de recherche vectorielle approchée avec l'index PRISM, pour grands volumes de vecteurs.

## Le problème
Les index pgvector (IVFFlat, HNSW) deviennent lents ou gourmands en mémoire vers des centaines de millions de vecteurs.

## Ce que ça fait vraiment
Ajoute un type d'accès d'index `prism` : arbre de centroïdes hiérarchique, listes de postes quantifiées en RaBitQ avec bornes d'erreur, distances accélérées par SIMD, puis réordonnancement en pleine précision. Il fournit les types `vec32` et `vec16` et peut indexer les colonnes pgvector existantes sans les modifier.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
    A["requête ORDER BY"] --> B["arbre de centroïdes"]
    B --> C["listes de postes RaBitQ"]
    C --> D["filtrage avec bornes d'erreur"]
    D --> E["reranking depuis le heap"]
    E --> F["k plus proches voisins"]
```

## Essayer
```bash
meson setup builddir --buildtype=release
meson install -C builddir
```
```sql
CREATE EXTENSION pg_vectorsearch;
CREATE INDEX ON items USING prism (embedding vec32_l2_ops);
```

## Coût et pièges
PostgreSQL 18 et plus avec en-têtes de développement, compilateur C11 et Meson. Statut alpha : une mise à jour entre préversions peut obliger à supprimer et recréer l'extension et ses index.

## Ce que ce n'est pas
Pas prêt pour la production, selon son auteur. Pas un remplaçant de pgvector pour les types : il s'installe à côté.

## Alternatives
- pgvector : type de vecteur et index IVFFlat et HNSW, plus mûr.
- pgvectorscale : index fondé sur DiskANN.

## Pour toi
Surveiller : prometteur pour du RAG à grande échelle sur Postgres, mais alpha ; à tester sur un jeu de données copié, pas en production.

