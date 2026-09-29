---
schema: 1
depot: google-deepmind/alphagenome
source_readme_sha: b29db5e94d54c226
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [clé d'API, compte à créer, version de Python]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# google-deepmind/alphagenome

> Client Python de l'API AlphaGenome pour prédire l'effet de variants dans l'ADN régulateur, pour chercheurs en génomique.

## Le problème
Prédire l'expression génique, l'épissage ou la chromatine à partir de séquences d'ADN de 1 Mpb, sans entraîner son propre modèle.

## Ce que ça fait vraiment
Le dépôt ne contient ni poids ni entraînement : c'est un SDK client. Objets génomiques (intervalle, variant, transcrit, ontologie), client `dna_client` qui appelle le service distant en RPC (protobuf), scoring de variants, mutagenèse in silico, visualisation matplotlib et notebooks Colab. L'API est gratuite en usage non commercial.

## Comment c'est branché
```mermaid
graph LR
  Data["data genome"] --> Client["dna_client.py"]
  Client --> Rpc["protos RPC"]
  Rpc --> Svc["Service AlphaGenome"]
  Client --> Out["dna_output.py"]
  Out --> ISM["ism.py"]
  Out --> Plot["visualization"]
```

## Essayer
```bash
git clone https://github.com/google-deepmind/alphagenome.git
pip install ./alphagenome
```
```python
model = dna_client.create(API_KEY)
```

## Coût et pièges
Clé d'API requise, gratuite en non commercial ; quotas variables, inadaptée à plus d'un million de prédictions. Les sorties ne servent pas à entraîner d'autres modèles ni à la décision clinique. Usage commercial via Google Cloud.

## Ce que ce n'est pas
Pas un modèle local : sans service distant, rien ne tourne. Le code est Apache-2.0 mais les sorties ont des conditions d'usage restrictives.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant pour la bio-informatique, mais dépendance à un service et interdiction de réutiliser les sorties pour entraîner.

