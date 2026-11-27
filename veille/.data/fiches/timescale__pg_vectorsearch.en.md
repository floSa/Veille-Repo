# timescale/pg_vectorsearch

> PostgreSQL extension for approximate vector search with the PRISM index, for large volumes of vectors.

## The problem
pgvector indexes (IVFFlat, HNSW) become slow or memory-hungry toward hundreds of millions of vectors.

## What it actually does
Adds a `prism` index access method: a hierarchical centroid tree, posting lists quantized with RaBitQ with error bounds, SIMD-accelerated distances, then full-precision reranking. It provides the `vec32` and `vec16` types and can index existing pgvector columns without modifying them.

## How it is wired
Simplified diagram based on the fiche, no diagram provided.

```mermaid
flowchart LR
    A["ORDER BY query"] --> B["centroid tree"]
    B --> C["RaBitQ posting lists"]
    C --> D["filtering with error bounds"]
    D --> E["reranking from the heap"]
    E --> F["k nearest neighbors"]
```

## Trying it
```bash
meson setup builddir --buildtype=release
meson install -C builddir
```
```sql
CREATE EXTENSION pg_vectorsearch;
CREATE INDEX ON items USING prism (embedding vec32_l2_ops);
```

## Cost and gotchas
PostgreSQL 18 and above with development headers, a C11 compiler, and Meson. Alpha status: a preview-to-preview update may require dropping and recreating the extension and its indexes.

## What it is not
Not ready for production, per its author. Not a replacement for pgvector's types: it installs alongside it.

## Alternatives
- pgvector: vector type and IVFFlat and HNSW indexes, more mature.
- pgvectorscale: index built on DiskANN.

## For you
To watch: promising for large-scale RAG on Postgres, but alpha; test it on a copied dataset, not in production.
