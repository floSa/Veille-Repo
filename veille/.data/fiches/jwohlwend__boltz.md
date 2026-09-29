---
schema: 1
depot: jwohlwend/boltz
source_readme_sha: 79149435313841e6
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, version de Python, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: adopter
---

# jwohlwend/boltz

> Famille de modèles ouverts qui prédisent structures biomoléculaires et affinités de liaison, sous licence MIT.

## Le problème
Le criblage in silico de molécules pour la découverte de médicaments reste lent et coûteux avec les méthodes physiques (FEP) ou fermé (AlphaFold3).

## Ce que ça fait vraiment
`boltz predict` lit un fichier YAML décrivant les biomolécules, récupère éventuellement des MSA sur un serveur, construit les features, exécute le modèle et écrit des structures PDB/mmCIF et un JSON de résumé. Boltz-2 sort deux valeurs d'affinité : `affinity_probability_binary` pour détecter des binders, `affinity_pred_value` (log10 IC50) pour l'optimisation. Des scripts d'entraînement existent pour Boltz-1.

## Comment c'est branché
```mermaid
flowchart LR
  A["boltz predict (CLI)"] --> B["data/parse (YAML)"]
  B --> C["MSA server (option)"]
  C --> D["data/feature/featurizer"]
  D --> E["model/models/boltz*.py"]
  E --> F["data/write (PDB/mmCIF + JSON)"]
```

## Essayer
```bash
pip install boltz[cuda] -U
boltz predict input_path --use_msa_server
boltz predict --help
```

## Coût et pièges
GPU recommandé : la version CPU est nettement plus lente. `--use_msa_server` envoie les séquences à un serveur externe (authentification possible). Code d'évaluation et d'entraînement Boltz-2 annoncés « bientôt ».

## Ce que ce n'est pas
Pas un produit médical validé. L'affirmation « 1000 fois plus rapide que la FEP » vient des auteurs. 136 issues ouvertes.

## Alternatives
- AlphaFold3 : la référence de précision que Boltz vise à égaler, mais fermé.
- Chai-1 : autre modèle comparé dans leurs évaluations.

## Pour toi
À adopter si tu touches à la biologie ou à la chimie computationnelle : poids et code sous MIT, installation par pip, sinon simple veille.

