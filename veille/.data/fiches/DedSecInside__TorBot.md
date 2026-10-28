---
schema: 1
depot: DedSecInside/TorBot
source_readme_sha: 85e2b456db30cad6
ecrite_le: 2026-10-28
nature: outil
deploiement: pip
prerequis: [version de Python, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence à vérifier]
verdict: surveiller
---

# DedSecInside/TorBot

> Outil OSINT en ligne de commande pour explorer des sites .onion, avec analyse IA optionnelle.

## Le problème
Cartographier des sites du dark web et en tirer des éléments exploitables prend du temps à la main.

## Ce que ça fait vraiment
Crawler (BFS) de liens .onion ou de domaines libres : titre, vérification de liens vivants, arbre exporté en JSON, visualisation en arbre ou tableau. `torbot analyze` produit un dossier d'enquête cité depuis un résultat de crawl, avec Ollama local par défaut ; le distant exige `--allow-remote`. Sauvegarde en base et capture d'écran restent à faire.

## Comment c'est branché
```mermaid
flowchart LR
  A["main.py CLI"] --> B["Crawler BFS"]
  B --> C["Proxy SOCKS5 Tor"]
  B --> D["Link tree"]
  D --> E["JSON ou table"]
  E --> F["torbot analyze"]
  F --> G["Ollama"]
```

## Essayer
```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m pip install -e .
python main.py -u https://example.com --depth 2 --visualize table
```

## Coût et pièges
Gratuit. Tor optionnel ; sinon `--disable-socks5`. Risque légal et de sécurité à évaluer avant de visiter des contenus .onion.

## Ce que ce n'est pas
Pas un outil d'anonymat renforcé (liste de tâches : augmenter l'anonymat). Plusieurs fonctions annoncées sont « Not done ».

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : l'analyse IA fondée sur preuves est une idée intéressante, mais l'outil reste jeune et son champ OSINT est étroit.

