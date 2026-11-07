---
schema: 1
depot: tradingeconomics/tradingeconomics
source_readme_sha: 8d5cbb8bda0cc10f
ecrite_le: 2026-11-07
nature: doc
deploiement: SaaS
prerequis: [compte à créer]
cout: payant
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée, matière insuffisante]
verdict: surveiller
---

# tradingeconomics/tradingeconomics

> Page d'accueil d'exemples pour l'API Trading Economics : indicateurs, changes, taux et matières premières.

## Le problème
Récupérer des séries macroéconomiques et de marché de façon uniforme, sans les collecter une par une.

## Ce que ça fait vraiment
Le dépôt ne contient qu'une introduction et des liens : documentation, exemples, client Python, notebooks, images Docker. L'API annonce 300 000 indicateurs, exports XML, CSV ou JSON, utilisables depuis une appli ou Excel.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A["Ton application ou Excel"] --> B["API Trading Economics"]
  B --> C["Indicateurs, changes, obligations"]
  D["tradingeconomics-python"] --> B
  E["notebooks"] --> D
```

## Essayer
```bash
# Aucune commande dans le README : ouvrir https://docs.tradingeconomics.com/
# puis le client Python https://github.com/tradingeconomics/tradingeconomics-python
```

## Coût et pièges
Le README ne parle pas de tarif ni de clé : l'accès aux données passe par un service commercial, à vérifier sur leur site. Licence absente du dépôt.

## Ce que ce n'est pas
Ce n'est pas un outil installable ni un jeu de données ouvert : c'est une vitrine vers une API tierce. Le README est trop court pour juger la couverture réelle.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
Surveiller : utile si tu as besoin de données macro pour des features, mais le dépôt n'apporte que des liens et le modèle d'accès est à confirmer.

