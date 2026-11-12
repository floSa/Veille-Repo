---
schema: 1
depot: duckdb/ducklake
source_readme_sha: a05ce0a0a07fa025
ecrite_le: 2026-11-12
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
---

# duckdb/ducklake

> Une extension DuckDB qui lit et écrit un format de lakehouse SQL stockant ses données en Parquet.

## Le problème
Un lakehouse classique mélange format de table et moteur de requête, ce qui complique le versionnage et l'évolution de schéma. DuckLake veut une table SQL ordinaire, avec historique et schéma évolutif.

## Ce que ça fait vraiment
Stocke les métadonnées dans une base catalogue (DuckDB, PostgreSQL, SQLite ou Quack) et les données en fichiers Parquet. Permet `ATTACH`, création/modification de tables en SQL standard, voyage dans le temps par version, évolution de schéma sans migration et un flux de changements (`table_changes`) type CDC.

## Comment c'est branché
```mermaid
flowchart TD
  user["Utilisateur SQL"] -->|attache| extension["Extension DuckLake"]
  extension --> catalog["Catalogue DuckLake<br/>ducklake_catalog.cpp"]
  catalog --> metadata["Gestionnaire de métadonnées<br/>ducklake_metadata_manager.cpp"]
  metadata --> catalogdb[("Base catalogue<br/>DuckDB/Postgres/SQLite")]
  user -->|écrit| insert["Insertion<br/>ducklake_insert.cpp"]
  insert --> parquet[("Fichiers Parquet")]
  user -->|lit| scan["Lecture table<br/>ducklake_scan.cpp"]
  scan --> parquet
```

## Essayer
```sql
INSTALL ducklake;
ATTACH 'ducklake:metadata.ducklake' AS my_ducklake (DATA_PATH 'file_path/');
USE my_ducklake;
CREATE TABLE my_ducklake.my_table(id INTEGER, val VARCHAR);
INSERT INTO my_ducklake.my_table VALUES (1, 'Hello'), (2, 'World');
FROM my_ducklake.my_table;
```

## Coût et pièges
Gratuit et sans clé, mais c'est une extension : il faut déjà avoir DuckDB. Compiler soi-même l'extension demande les sous-modules Git et une chaîne de build C++.

## Ce que ce n'est pas
Pas un service managé ni un moteur de requête autonome : DuckLake dépend entièrement de DuckDB comme moteur d'exécution. Ne remplace pas un catalogue Hive/Iceberg complet si l'écosystème cible l'exige déjà.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour un data scientist qui veut un lakehouse léger versionné sans infrastructure lourde, directement depuis DuckDB.

