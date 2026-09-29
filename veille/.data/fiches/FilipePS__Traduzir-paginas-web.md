---
schema: 1
depot: FilipePS/Traduzir-paginas-web
source_readme_sha: 1d2f5d192addc7a3
ecrite_le: 2026-09-29
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# FilipePS/Traduzir-paginas-web

> Extension Firefox (TWP) qui traduit une page web à la volée via Google, Bing ou Yandex.

## Le problème
Lire une page dans une langue inconnue oblige à ouvrir un onglet de traduction séparé et à perdre la mise en page.

## Ce que ça fait vraiment
Un content script réécrit le texte de la page sur place et permet de basculer entre traduit et original. Le service d'arrière-plan choisit le moteur (le README cite Google et Yandex ; le code contient aussi des ressources Bing, DeepL et Libre) et garde un cache des traductions. Popup et page d'options règlent langues, moteur et traduction automatique. Aucun serveur dans le dépôt.

## Comment c'est branché
```mermaid
flowchart LR
  P["Popup / Options"] --> B["background.js"]
  B --> T["translationService + cache"]
  T --> E["Google / Yandex (externe)"]
  B --> C["pageTranslator.js"]
  C --> D["Page web (DOM)"]
```

## Essayer
```bash
# Aucune commande documentée pour l'usage : installation depuis Mozilla Addons (bureau)
# ou extension « TWP - Translate For Mobile » (Firefox 120+ sur Android).
# Compilation : voir build-instructions.md (non reproduit dans le README).
```

## Coût et pièges
Gratuit. Le contenu des pages est envoyé aux serveurs Google ou Yandex ; l'extension dit ne rien collecter elle-même. Elle demande l'accès à tous les sites visités.

## Ce que ce n'est pas
Pas une version officielle pour Chrome, Edge ou Brave (« dans le futur »). Ne traduit pas les pages protégées par le navigateur (support.mozilla.org, addons.mozilla.org).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer côté data/IA : c'est un outil de confort de navigation, et il exfiltre le texte des pages vers des tiers, ce qui pose problème sur des contenus internes.

