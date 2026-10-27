---
schema: 1
depot: lakehq/sail
source_readme_sha: 9c8ffa9563a90419
ecrite_le: 2026-10-27
nature: outil
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# lakehq/sail

> Moteur en Rust compatible Spark Connect, qui exécute du PySpark sans JVM, pour data engineers.

## Le problème
Spark repose sur la JVM : démarrage lent, mémoire à régler, coûts d'infrastructure élevés.

## Ce que ça fait vraiment
Un serveur Spark Connect analyse le SQL et les plans, puis exécute en local ou en mode distribué (driver/workers, shuffle Celeborn). Lit et écrit Delta Lake et Iceberg, avec catalogues (Glue, Unity, Hive, OneLake) et stockages S3, Azure, GCS, HDFS. Les UDF Python tournent via Arrow.

## Comment c'est branché
```mermaid
graph LR
  A[Spark clients] --> B[Spark Connect server.rs]
  B --> C[SQL parser]
  C --> D[Plan resolver]
  D --> E[Execution driver]
  E --> F[Execution worker]
  F --> G[Data source formats]
```

## Essayer
```bash
pip install pysail
pip install "pyspark-client"
sail spark server --port 50051
```

## Coût et pièges
Gratuit. Les chiffres « ~10× plus rapide » viennent d'un TPC-H dérivé fourni par l'éditeur. Le script de compatibilité ne vérifie que l'existence des fonctions.

## Ce que ce n'est pas
Pas une parité de comportement garantie avec Spark ; il ne couvre pas les chaînes Spark SQL dans le vérificateur.

## Alternatives
- Aucune citée dans le README.

## Pour toi
À surveiller : promesse forte pour tes jobs PySpark, mais à mesurer toi-même sur tes charges avant migration.

