# FilipePS/Traduzir-paginas-web

> Firefox extension (TWP) that translates a web page on the fly via Google, Bing or Yandex.

## The problem
Reading a page in an unfamiliar language forces you to open a separate translation tab and lose the layout.

## What it actually does
A content script rewrites the page text in place and lets you switch between translated and original. The background service chooses the engine (the README mentions Google and Yandex; the code also contains Bing, DeepL and Libre resources) and keeps a cache of translations. The popup and options page set languages, engine and automatic translation. No server in the repository.

## How it is wired
```mermaid
flowchart LR
  P["Popup / Options"] --> B["background.js"]
  B --> T["translationService + cache"]
  T --> E["Google / Yandex (externe)"]
  B --> C["pageTranslator.js"]
  C --> D["Page web (DOM)"]
```

## Trying it
```bash
# Aucune commande documentée pour l'usage : installation depuis Mozilla Addons (bureau)
# ou extension « TWP - Translate For Mobile » (Firefox 120+ sur Android).
# Compilation : voir build-instructions.md (non reproduit dans le README).
```

## Cost and gotchas
Free. Page content is sent to Google or Yandex servers; the extension says it collects nothing itself. It requests access to all visited sites.

## What it is not
Not an official version for Chrome, Edge or Brave ("in the future"). Does not translate pages protected by the browser (support.mozilla.org, addons.mozilla.org).

## Alternatives
No alternative named in the README.

## For you
Ignore on the data/AI side: it is a browsing convenience tool, and it exfiltrates page text to third parties, which is a problem for internal content.
