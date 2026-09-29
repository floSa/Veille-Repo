---
schema: 1
depot: code-charity/youtube
source_readme_sha: 55ee033ba9c99961
ecrite_le: 2026-09-29
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# code-charity/youtube

> Extension de navigateur qui ajoute environ 80 réglages à l'interface de YouTube.

## Le problème
L'interface YouTube n'offre pas de contrôle fin sur le lecteur, l'apparence ou le filtrage de contenu.

## Ce que ça fait vraiment
Un manifeste charge un `background.js`, des scripts de contenu (`core.js`, `init.js`) et des modules par zone de YouTube, plus des scripts accessibles à la page (`player.js`, `blocklist.js`, `themes.js`). Un menu de réglages est bâti sur la bibliothèque maison Satus. Traductions gérées via Crowdin.

## Comment c'est branché
```mermaid
flowchart LR
    M["Manifest manifest.json"] --> B["Background background.js"]
    M --> C["Core core.js"]
    C --> F["Feature areas appearance general night-mode"]
    C --> W["Web-accessible player.js channel.js"]
    S["Menu app index.js"] --> C
```

## Essayer
Aucune commande documentée dans le README fourni.

## Coût et pièges
Gratuit. La licence est présente mais non reconnue par GitHub. 1 484 issues ouvertes. Dépend des changements de l'interface YouTube.

## Ce que ce n'est pas
Ce n'est pas un téléchargeur. Le README contient surtout des slogans (« only YouTube extension you'll ever need ») et très peu de matière technique.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : amélioration de confort pour YouTube, sans rapport avec ton travail data/IA.

