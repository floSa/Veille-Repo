---
schema: 1
depot: apache/spark
source_readme_sha: 85e2b11a7d2ffcca
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [Docker, beaucoup de RAM, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# apache/spark

> Moteur d'analyse distribué pour données volumineuses, avec API Scala, Java, Python : SQL, MLlib, streaming.

## Le problème
Un jeu de données dépasse la mémoire ou le temps d'une seule machine et il faut paralléliser le calcul.

## Ce que ça fait vraiment
Exécute des graphes de calcul sur un cluster ou en local. Sur ce moteur : Spark SQL/DataFrames, API pandas, MLlib, GraphX, Structured Streaming. L'API R est marquée dépréciée. Le dépôt contient aussi un transport de shuffle et des pipelines.

## Comment c'est branché
```mermaid
flowchart LR
  D[Développeur] --> A[RDD / DataFrame API]
  A --> E[Moteur de calcul]
  E --> T[SQL, MLlib, Streaming]
  E --> S[Shuffle / transport réseau]
```

## Essayer
```bash
./build/mvn -DskipTests clean package
./bin/pyspark
./bin/run-example SparkPi
```
Test : `spark.range(1000 * 1000 * 1000).count()` doit renvoyer 1 000 000 000.

## Coût et pièges
Gratuit ; construire depuis les sources est long. Il faut aligner la version de Hadoop avec celle du cluster. Pour un usage courant, un paquet pré-construit évite la compilation.

## Ce que ce n'est pas
Pas un outil léger : surdimensionné pour des données de quelques Go. Le README n'est qu'une base d'installation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Adopter : référence du traitement distribué pour un profil data/MLOps ; sur petites données, vise plutôt un moteur local.

