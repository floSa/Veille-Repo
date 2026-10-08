---
schema: 1
depot: brookhong/Surfingkeys
source_readme_sha: 748f8ec35d72ed1d
ecrite_le: 2026-10-08
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# brookhong/Surfingkeys

> Extension de navigateur pour naviguer au clavier à la Vim, configurable en JavaScript.

## Le problème
Naviguer au clavier sur le web est limité aux raccourcis du navigateur et chaque site impose les siens.

## Ce que ça fait vraiment
Modes normal, visuel, insertion, indices de liens (hints), omnibar, marques, sessions, éditeur Vim intégré, aperçu Markdown, visionneuse PDF, proxy. Tous les réglages sont du JavaScript (`api.mapkey`). Un chat LLM (touche `A`) parle à Ollama, Bedrock ou toute API compatible OpenAI avec tes identifiants ; chaque appel d'outil navigateur est confirmé par l'utilisateur.

## Comment c'est branché
```mermaid
flowchart LR
  K[Utilisateur] --> KB["keyboardUtils.js"]
  KB --> MD["mode.js"]
  MD --> HT["hints.js"]
  MD --> OM["omnibar.js"]
  K --> LC["llmchat.js"]
  LC --> LT["llmtools.js"]
  MD --> BG["start.js"]
```

## Essayer
```bash
# installer depuis le Chrome Web Store, Firefox Add-ons, Edge ou Mac App Store
# puis dans une page : ? pour l'aide, f pour suivre un lien, A pour le chat LLM
```

## Coût et pièges
Gratuit. Le chat LLM nécessite des identifiants dans `settings.llm`. Certaines fonctions manquent sur Firefox et Safari ; charger des réglages depuis un fichier local demande un native host.

## Ce que ce n'est pas
Pas un outil d'automatisation de navigateur ni un scraper. Chrome limite certaines touches, d'où un build Chromium dédié mentionné. 426 issues ouvertes.

## Alternatives
vimium et cVim : cités dans les crédits comme prédécesseurs.

## Pour toi
Surveiller : un confort de navigation pour lire de la doc et des papiers, sans enjeu data/IA ; le chat LLM est un bonus facultatif.

