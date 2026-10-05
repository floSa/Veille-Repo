---
schema: 1
depot: fivetran/great_expectations
source_readme_sha: 96d1718f8a137d60
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# fivetran/great_expectations

> Framework Python de qualité des données : des « Expectations » testent les jeux de données et documentent les résultats.

## Le problème
Les données changent sans prévenir ; sans tests, les erreurs arrivent en aval.

## Ce que ça fait vraiment
Définit des Expectations (tests unitaires de données), connecte des sources, charge des lots, évalue via des moteurs d'exécution SQL ou Spark et produit des résultats de validation, convertibles en documentation. Des connecteurs Azure Blob et GCS (pandas, Spark) existent.

## Comment c'est branché
```mermaid
flowchart LR
  A["Data sources"] --> B["batch_manager.py"]
  B --> C["Execution engine"]
  C --> D["Expectations"]
  D --> E["Validation"]
  E --> F["Validation results"]
  F --> G["Result documentation"]
```

## Essayer
```bash
pip install great_expectations
```
```python
import great_expectations as gx
context = gx.get_context()
```

## Coût et pièges
Gratuit. Le README recommande un environnement virtuel. Le dépôt est passé sous l'organisation fivetran.

## Ce que ce n'est pas
Pas un orchestrateur ni un catalogue : un moteur de tests. Le README en dit peu sur l'usage réel au-delà de l'installation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour fiabiliser tes pipelines : Apache-2.0, actif (septembre 2026), langage commun pour les contrôles de données.

