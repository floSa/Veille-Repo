---
schema: 1
depot: kenn-io/msgvault
source_readme_sha: 192fa824027ce22d
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# kenn-io/msgvault

> Archive locale de courriels, chats, réunions, calendriers et contacts, interrogeable par CLI, web ou MCP.

## Le problème
L'historique de communications est dispersé chez plusieurs fournisseurs et difficile à chercher, sauvegarder ou relier aux personnes.

## Ce que ça fait vraiment
Synchronise ou importe messages, réunions, calendriers et contacts vers une base locale (SQLite, DuckDB), avec pièces jointes. Recherche par mots-clés, option sémantique et extraction de texte de documents. Résolution d'identités pour regrouper les adresses d'une même personne, CardDAV, export, sauvegarde et revue de suppressions. Interfaces : navigateur, TUI, CLI, API HTTP, serveur MCP.

## Comment c'est branché
```mermaid
flowchart LR
  S["Source Sync"] --> D["Archive Database"]
  I["Archive Importers"] --> D
  D --> Q["Query Engine"]
  D --> X["Document Index"]
  Q --> A["HTTP API / MCP Server"]
  A --> U["CLI / Browser UI"]
```

## Essayer
```bash
curl -fsSL https://msgvault.io/install.sh | bash
msgvault init-db
msgvault add-account you@gmail.com
msgvault sync-full you@gmail.com --limit 100
msgvault serve
```

## Coût et pièges
Gmail exige de créer des identifiants OAuth. Les fonctions IA facultatives envoient des données choisies vers les points de terminaison configurés. Logiciel alpha : format de stockage et CLI peuvent changer.

## Ce que ce n'est pas
Pas un client de messagerie ni un service hébergé. La suppression distante est explicite et ne détruit pas l'archive.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
Surveiller : utile pour donner à un agent un accès local à tes courriels, mais alpha et données très sensibles.
