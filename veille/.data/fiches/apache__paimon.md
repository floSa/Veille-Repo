---
schema: 1
depot: apache/paimon
source_readme_sha: 16819e0b4e29327a
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: fondation
alertes: []
verdict: surveiller
---

# apache/paimon

> Format de lac de données combinant LSM et mises à jour en temps réel, pour Flink et Spark.

## Le problème
Les formats de lac classiques gèrent mal les mises à jour continues issues du streaming.

## Ce que ça fait vraiment
Format de table pour architecture « lakehouse » temps réel, unifiant flux et lot, qui applique une structure LSM. Anciennement Flink Table Store ; son architecture s'inspire d'Iceberg. Le README n'en dit pas plus : tout le détail est sur le site du projet.

## Comment c'est branché
Non documenté : aucun diagramme fourni et le README ne décrit pas les composants.

## Essayer
```bash
mvn clean install -DskipTests
mvn spotless:apply
```

## Coût et pièges
Compilation avec JDK 8/11 et Maven ≥ 3.6.3. Flink ou Spark nécessaires pour l'utiliser.

## Ce que ce n'est pas
Pas un moteur de calcul : un format de stockage. README essentiellement des listes de diffusion.

## Alternatives
- Apache Iceberg : cité comme source d'inspiration de l'architecture.

## Pour toi
À surveiller : intéressant pour du streaming vers lac, mais le README ne permet pas de juger ; consulte la documentation officielle.

