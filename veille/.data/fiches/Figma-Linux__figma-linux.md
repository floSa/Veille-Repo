---
schema: 1
depot: Figma-Linux/figma-linux
source_readme_sha: fd3e1c948f154e74
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft, dépend d'un SaaS]
verdict: ignorer
---

# Figma-Linux/figma-linux

> Client de bureau Electron non officiel pour utiliser Figma sous Linux.

## Le problème
Figma n'a pas d'application de bureau officielle pour Linux.

## Ce que ça fait vraiment
Enveloppe Figma dans Electron avec onglets et fenêtres gérés, navigation communautaire, thèmes personnalisables, extensions locales, polices locales et réglages. Le processus principal gère cycle de vie, onglets et persistance ; l'interface est en Svelte.

## Comment c'est branché
```mermaid
graph LR
  A[App.ts] --> B[Session.ts]
  A --> C[WindowManager.ts]
  C --> D[TabManager.ts]
  D --> E[MainTab.ts]
  A --> F[Theme Manager]
  A --> G[Storage.ts]
```

## Essayer
```bash
sudo snap install figma-linux
```

## Coût et pièges
Nécessite un compte Figma. Aucune licence de sa part n'est fournie ici. Dernier push en janvier 2026.

## Ce que ce n'est pas
Pas un produit de Figma : application non officielle, dépendante du service Figma.

## Alternatives
- Aucune citée dans le README.

## Pour toi
À ignorer : outil de design sans lien avec data/IA, sauf si tu travailles sous Linux avec Figma.

