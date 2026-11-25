---
schema: 1
depot: software-mansion/live-debugger
source_readme_sha: 298ce4955c8f517a
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# software-mansion/live-debugger

> Débogueur dans le navigateur pour applications Phoenix LiveView (Elixir), réservé au développement.

## Le problème
Comprendre l'état et les callbacks d'une application LiveView côté serveur est opaque sans outil dédié.

## Ce que ça fait vraiment
Affiche l'arbre des LiveComponents, les assigns, trace et filtre les exécutions de callbacks, et permet d'inspecter les éléments. Un client injecté dans l'application publie des événements sur un bus interne ; l'interface LiveView les affiche sur `localhost:4007`. Une extension DevTools existe.

## Comment c'est branché
```mermaid
flowchart TD
  A["lib/live_debugger/client.ex"] --> B["client/channel.ex"]
  B --> E["lib/live_debugger/bus.ex"]
  C["callback_tracer/tracing_manager.ex"] --> E
  D["process_monitor/debugged_processes_monitor.ex"] --> E
  E --> G["debugger/web/debugger_live.ex"]
  G --> H["components_tree_live.ex"]
```

## Essayer
```bash
mix igniter.install live_debugger
```
Sinon, ajouter `{:live_debugger, "~> 1.0.0", only: :dev}` dans `mix.exs`.

## Coût et pièges
Gratuit. Doit rester en dépendance `:dev` : le README interdit la production. Demande un projet Elixir / Phoenix.

## Ce que ce n'est pas
Pas un outil d'observabilité de production. Ne sert à rien hors Phoenix LiveView.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Hors périmètre data / IA / MLOps (écosystème Elixir) : à ignorer.

