---
schema: 1
depot: ferdium/ferdium-recipes
source_readme_sha: 673b7fc235c928f2
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# ferdium/ferdium-recipes

> Petits scripts d'intégration qui relient WhatsApp, Gmail, Slack et autres au client Ferdium.

## Le problème
Un agrégateur de messageries a besoin d'un connecteur par service pour compter les notifications.

## Ce que ça fait vraiment
Chaque recette fournit à Ferdium le nombre de notifications, active le mode sombre et adapte l'expérience du service. Le README renvoie à des guides : créer, mettre à jour, configurer (`package.json`), API frontend (`webview.js`) et backend (`index.js`).

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  F["Ferdium"] --> R["Recette"]
  R --> P["package.json"]
  R --> W["webview.js"]
  R --> I["index.js"]
  W --> S["Service (WhatsApp, Gmail, Slack)"]
```

## Essayer
```bash
pnpm validate
```

## Coût et pièges
Gratuit. Le README est court. Le prérequis réel (pnpm) vient de la seule commande documentée.

## Ce que ce n'est pas
Pas une application : sans Ferdium, ces recettes ne servent à rien.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : connecteurs de messagerie sans lien avec ton métier.

