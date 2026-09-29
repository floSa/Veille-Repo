---
schema: 1
depot: loopwork-ai/iMCP
source_readme_sha: 0d315cd2fc80382d
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# loopwork-ai/iMCP

> App macOS qui expose calendrier, contacts, messages et plus à un client MCP comme Claude Desktop.

## Le problème
Un assistant ne connaît rien de tes données personnelles locales sur Mac sans copier-coller.

## Ce que ça fait vraiment
Une app de barre de menus lance un serveur MCP avec des services : calendrier, contacts, localisation, cartes, messages (base SQLite iMessage), téléphone, rappels, raccourcis, météo. Un exécutable `imcp-server` parle en stdio au client et relaie à l'app via Bonjour. Les résultats sont en JSON-LD. Chaque service demande l'autorisation macOS.

## Comment c'est branché
```mermaid
flowchart LR
  CLIENT["Claude Desktop, Cursor, Amp"] --> CLI["imcp-server stdio"]
  CLI --> BON["Bonjour et TCP local"]
  BON --> APP["iMCP.app"]
  APP --> SVC["Services: Calendar, Contacts, Messages"]
  SVC --> SYS["EventKit, chat.db"]
```

## Essayer
```console
brew install --cask mattt/tap/iMCP
claude mcp add --scope user iMCP -- /Applications/iMCP.app/Contents/MacOS/imcp-server
```

## Coût et pièges
Gratuit. Exige macOS 15.3 ou plus. Le README précise qu'iMCP ne stocke rien, mais que les clients envoient les données hors de l'appareil dans leurs appels d'outils.

## Ce que ce n'est pas
Pas multiplateforme, et pas un coffre privé : dès qu'un client cloud l'appelle, tes messages et contacts quittent le Mac.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique sur Mac avec Claude Desktop, mais il expose des données très sensibles et la licence n'est pas déclarée.
