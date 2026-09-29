---
schema: 1
depot: MetaMask/metamask-extension
source_readme_sha: 5e27f27bf53761c4
ecrite_le: 2026-09-29
nature: extension
deploiement: compilation
prerequis: [Node, clé d'API]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, télémétrie]
verdict: ignorer
---

# MetaMask/metamask-extension

> Extension de navigateur qui sert de portefeuille Ethereum et de passerelle vers les applications web3.

## Le problème
Interagir avec des applications décentralisées exige de gérer clés et signatures depuis le navigateur.

## Ce que ça fait vraiment
Extension pour Chrome, Firefox et navigateurs Chromium : interface React/Redux, service en arrière-plan, scripts de contenu et fournisseur injecté. Gère comptes, transactions et réseaux ; LavaMoat contraint l'accès des dépendances. Le README est surtout un guide de développement : build Yarn, tests unitaires et E2E (Selenium, Playwright), feature flags. Aucun schéma lisible n'est fourni.

## Comment c'est branché
Aucun composant lisible dans le diagramme fourni ; l'architecture décrite est générique, donc pas de schéma.

## Essayer
```bash
corepack enable
cp .metamaskrc{.dist,}
yarn install
yarn start
```

## Coût et pièges
Node 24 et une clé Infura personnelle dans `.metamaskrc`. Clés Segment et Sentry optionnelles pour la télémétrie. Codespaces devient payant après le quota gratuit. 2 808 issues ouvertes.

## Ce que ce n'est pas
Pas un dépôt pour utiliser le portefeuille : il sert à le développer. Licence non identifiée par GitHub.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : produit crypto grand public, sans lien avec data/IA/MLOps ; lire seulement pour l'organisation des tests et de LavaMoat.

