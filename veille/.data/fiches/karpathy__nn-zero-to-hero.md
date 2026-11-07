---
schema: 1
depot: karpathy/nn-zero-to-hero
source_readme_sha: de022158ce6aa36e
ecrite_le: 2026-11-07
nature: doc
deploiement: rien à installer
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: adopter
---

# karpathy/nn-zero-to-hero

> Cours vidéo et notebooks pour apprendre les réseaux de neurones, de la rétropropagation au GPT.

## Le problème
Comprendre vraiment backpropagation, modèles de langage et Transformers plutôt qu'utiliser des boîtes noires.

## Ce que ça fait vraiment
Huit leçons vidéo YouTube avec notebooks Jupyter : micrograd, makemore (bigrammes, MLP, BatchNorm, rétropropagation à la main, WaveNet), construction d'un GPT et du tokenizer. Des exercices sont dans les descriptions des vidéos. Cours en cours d'évolution selon l'auteur.

## Comment c'est branché
```mermaid
flowchart TD
    Repo["GitHub Repository"] --> Micro["lectures/micrograd"]
    Repo --> Make["lectures/makemore"]
    Repo --> Jup["Local Jupyter"]
    Repo --> Colab["Google Colab"]
    Jup --> YT["YouTube lectures"]
```

## Essayer
Aucune commande dans le README : ouvrir les notebooks de `lectures/` en local ou sur Colab.

## Coût et pièges
Gratuit. Python, PyTorch et Jupyter requis. Il faut suivre les vidéos : le README ne se suffit pas.

## Ce que ce n'est pas
Pas une bibliothèque ni une formation complète à jour (dernier push 2024) ; les leçons précédentes sont supposées connues dans les suivantes.

## Alternatives
- micrograd et makemore (dépôts de l'auteur) : le code des deux premières séries.

## Pour toi
À adopter : base solide pour un profil data/IA, intemporelle même si le dépôt est peu actif.

