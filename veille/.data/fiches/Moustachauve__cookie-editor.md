---
schema: 1
depot: Moustachauve/cookie-editor
source_readme_sha: b8f59536b62bc7bb
ecrite_le: 2026-10-08
nature: extension
deploiement: autre
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# Moustachauve/cookie-editor

> Extension de navigateur pour créer, modifier et supprimer les cookies de l'onglet courant.

## Le problème
Inspecter et modifier les cookies d'une page pour développer, tester ou gérer sa vie privée passe mal par les outils de base.

## Ce que ça fait vraiment
- Création, édition, suppression, suppression en masse des cookies du site visité.
- Export dans plusieurs formats (JSON, en-tête, Netscape).
- Panneau popup, DevTools, volet latéral, interface mobile.
- Chrome, Firefox, Safari, Edge, Opera.

## Comment c'est branché
```mermaid
flowchart LR
  POP["Popup interface (cookie-list.js)"] --> CH["Cookie handler"]
  DEV["DevTools panel (devtools.js)"] --> CH
  CH --> MOD["Cookie model (cookie.js)"]
  MOD --> FMT["Cookie formats (jsonFormat.js)"]
  OPT["Options page (options.js)"] --> THM["Theme handler (themeHandler.js)"]
```

## Essayer
```bash
npm install
grunt
```
Les fichiers sortent dans `dist`. Safari se compile dans Xcode.

## Coût et pièges
Gratuit ; le graphe mentionne un sélecteur de publicités (adHandler.js), non détaillé dans le README. Droits de lecture des cookies à accorder.

## Ce que ce n'est pas
Pas un gestionnaire de mots de passe ; ne touche que le site courant.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour déboguer des sessions de dashboards ou d'API web, sinon accessoire.

