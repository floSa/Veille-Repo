---
schema: 1
depot: JohnSnowLabs/spark-nlp
source_readme_sha: 7d1a7e8f54e45c60
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: pip
prerequis: [version de Python, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# JohnSnowLabs/spark-nlp

> Bibliothèque NLP distribuée sur Apache Spark, avec modèles et pipelines pré-entraînés, pour data engineers JVM ou Python.

## Le problème
Appliquer du NLP (NER, classification, traduction, embeddings) à de gros volumes de texte dépasse ce que fait une bibliothèque mono-machine.

## Ce que ça fait vraiment
Annotateurs NLP intégrés aux pipelines Spark ML : tokenisation, NER, classification, embeddings, traduction, résumé, QA, ASR, images. Fournit des pipelines et modèles pré-entraînés (le README annonce des dizaines de milliers de modèles dans plus de 200 langues), importés ONNX et OpenVINO, utilisables hors ligne. Variantes CPU, GPU, AArch64, Apple Silicon (ces deux dernières « expérimentales »).

## Comment c'est branché
```mermaid
flowchart LR
  A[Texte / données] --> B[SparkSession sparknlp.start]
  B --> C[PretrainedPipeline]
  C --> D[Annotateurs]
  D --> E[Sorties: entities, ner, embeddings]
  F[Models Hub] --> C
```

## Essayer
```bash
conda create -n sparknlp python=3.9 -y
conda activate sparknlp
pip install spark-nlp==7.0.0 pyspark==3.5.1
```
```python
spark = sparknlp.start()
pipeline = PretrainedPipeline('explain_document_dl', lang='en')
result = pipeline.annotate(text)
```

## Coût et pièges
Gratuit. Java 8/11 (Spark 3) ou 17 (Spark 4), mémoire driver à régler (`sparknlp.start(memory="16G")`). Matrice de paquets selon version Spark/Scala à respecter.

## Ce que ce n'est pas
Pas une bibliothèque légère : il faut Spark. La formule « seule bibliothèque open source en production » est du marketing, non vérifiable ici. Les modèles se téléchargent depuis le hub.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : pertinent si tu fais déjà du Spark sur de gros corpus texte ; sinon le surcoût d'infrastructure ne se justifie pas.

