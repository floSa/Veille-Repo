---
schema: 1
depot: xxnuo/open-coreui
source_readme_sha: 368c9ab04ece7ad8
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: surveiller
---

# xxnuo/open-coreui

> Version allégée en Rust d'Open WebUI, en client de bureau ou serveur, pour discuter avec des modèles.

## Le problème
Open WebUI demande Docker, Python, PostgreSQL et Redis, et consomme beaucoup de mémoire pour une simple interface de chat.

## Ce que ça fait vraiment
Fork réécrit d'Open WebUI v0.6.32 : le frontend original, un backend Rust et un exécutable unique. Deux clients indépendants : application de bureau (Tauri) ou serveur en ligne de commande avec accès par navigateur. Le README précise que seul le chat de base est implémenté pour l'instant.

## Comment c'est branché
```mermaid
flowchart TD
  desk["Client bureau<br/>Tauri"]
  web["Client web<br/>SvelteKit"]
  http["Serveur HTTP Rust<br/>[main.rs]"]
  chat["Service Chat"]
  rag["Service RAG"]
  db[("SQLite")]
  oa["API OpenAI"]
  desk --> http
  web --> http
  http --> chat --> db
  http --> rag --> oa
```

## Essayer
```bash
chmod +x open-coreui-*
./open-coreui-*
```
Puis ouvrir l'adresse affichée, en général `http://localhost:8168`. Sur macOS, en cas d'erreur « app is damaged » : `sudo xattr -d com.apple.quarantine "/Applications/Open CoreUI Desktop.app"`.

## Coût et pièges
Gratuit, mais aucune licence déclarée alors que le code dérive d'Open WebUI. Le diagramme évoque aussi un bac à sable d'exécution de code.

## Ce que ce n'est pas
Ce n'est pas une version officielle ni complète : « early development ». Ce n'est pas un modèle, il faut un fournisseur derrière.

## Alternatives
- Open WebUI : l'original, plus complet mais plus lourd.

## Pour toi
À surveiller : pratique pour un chat local léger sans Docker, mais trop jeune et sans licence claire pour t'y fier.

