---
schema: 1
depot: rubycdp/ferrum
source_readme_sha: 969dff5d3696f392
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [Docker, aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# rubycdp/ferrum

> API Ruby de haut niveau pour piloter Chrome ou Chromium via le protocole CDP, sans Selenium.

## Le problème
Automatiser Chrome en Ruby via WebDriver est limité et dépend d'un pilote externe.

## Ce que ça fait vraiment
Elle se connecte directement à Chrome en CDP, headless par défaut. Navigation, captures d'écran, évaluation de JavaScript, souris, clavier. Cuprite (pilote Capybara) et Vessel (crawling) s'appuient dessus.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
    Ruby["Code Ruby"] --> Browser["Ferrum::Browser"]
    Browser --> Page["Page"]
    Page -->|"CDP"| Chrome["Chrome ou Chromium"]
    Cuprite["Cuprite"] --> Browser
    Vessel["Vessel"] --> Browser
```

## Essayer
```bash
bundle install
docker run --rm -p 3000:3000 ghcr.io/rubycdp/chromium
bundle exec rake test
```

## Coût et pièges
Gratuit ; il faut Chrome ou Chromium officiel dans le PATH ou via `BROWSER_PATH`, ou l'image Docker fournie.

## Ce que ce n'est pas
Pas un outil multi-navigateurs : Chrome uniquement. Ruby uniquement.

## Alternatives
Selenium/WebDriver, mentionné comme ce dont Ferrum se passe.

## Pour toi
À ignorer si tu travailles en Python : le scraping et le test navigateur se font ailleurs, cette bibliothèque est Ruby.

