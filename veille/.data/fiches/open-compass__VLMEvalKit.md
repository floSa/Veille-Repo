---
schema: 1
depot: open-compass/VLMEvalKit
source_readme_sha: f86d93987acb476a
ecrite_le: 2026-09-28
nature: outil
deploiement: pip
prerequis: [GPU, clé d'API]
cout: clé d'API à ta charge
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# open-compass/VLMEvalKit

> Boîte à outils d'évaluation en une commande pour modèles vision-langage sur des dizaines de benchmarks.

## Le problème
Évaluer un VLM oblige à préparer les données benchmark par benchmark, dans autant de dépôts.
Les résultats ne sont alors plus comparables d'un modèle à l'autre.

## Ce que ça fait vraiment
Évaluation générative pour tous les modèles, avec correspondance exacte et extraction de réponse par LLM.
Plus de 70 benchmarks image et vidéo, plus de 200 modèles, APIs commerciales comprises.
Pour brancher son propre modèle, une seule fonction `generate_inner()` est à écrire.
`SPLIT_THINK=True` sépare le raisonnement du modèle ; `PRED_FORMAT=tsv` évite la troncature au-delà de 32k.

## Comment c'est branché
```mermaid
flowchart LR
  CFG[vlmeval.config supported_VLM] --> M[modèle.generate_inner]
  M --> INF[inférence générative]
  INF --> EX[can_infer_option / can_infer_text]
  EX --> LLM[extracteur LLM de réponse]
  LLM --> RES[prédictions .xlsx ou .tsv]
  RES --> LB[OpenVLM Leaderboard]
```

## Essayer
```python
from vlmeval.config import supported_VLM
model = supported_VLM['idefics_9b_instruct']()
ret = model.generate(['assets/apple.jpg', 'What is in this image?'])
print(ret)
```
La commande d'installation n'est pas donnée dans le README : il renvoie au guide QuickStart.

## Coût et pièges
L'extraction de réponse par LLM consomme une clé d'API à ta charge ; les modèles locaux réclament un GPU.
Chaque famille de VLM impose sa version de `transformers` : la liste des épingles est longue et contraignante.

## Ce que ce n'est pas
Pas un reproducteur des chiffres publiés : l'évaluation générative diffère des protocoles d'origine.
Pas un entraîneur ni un serveur d'inférence.
Les gabarits de prompt sont uniformes par défaut, ce qui peut désavantager un modèle.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
La référence à connaître si tu dois comparer des VLM ; le tableau des versions de `transformers` est à lire avant tout.
