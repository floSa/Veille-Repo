---
schema: 1
depot: talentdeficit/jsx
source_readme_sha: 0d8b7cc49619fc5a
ecrite_le: 2026-10-30
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# talentdeficit/jsx

> Bibliothèque Erlang pour lire, produire et manipuler du JSON, en flux ou en bloc.

## Le problème
Erlang n'a pas, dans ce README, de chemin simple entre texte JSON et termes Erlang, surtout pour les entrées incomplètes.

## Ce que ça fait vraiment
`decode`, `encode`, `format`, `minify`, `prettify`, `is_json`, `is_term`. Tolère commentaires, virgule finale, guillemets simples ; mode `strict` pour exiger la norme. Décodage en flux (`stream`) pour entrées partielles. Parseur à callbacks (`init/1`, `handle_event/2`). Inspiré de yajl.

## Comment c'est branché
```mermaid
graph LR
  Texte[JSON utf8] --> Decoder[decoder/3]
  Decoder --> Events[Événements]
  Events --> Handler[Module:handle_event/2]
  Handler --> Terme[Terme Erlang]
```

## Essayer
```bash
rebar3 compile
rebar3 eunit
```
```erlang
jsx:decode(<<"{\"library\": \"jsx\", \"awesome\": true}">>, []).
```

## Coût et pièges
Gratuit. Dernier push en juin 2024. Les entrées doivent être des binaires utf8.

## Ce que ce n'est pas
Pas un validateur strict par défaut : tolérant, il faut activer `strict`.

## Alternatives
Le README ne nomme que yajl, qui l'a inspiré.

## Pour toi
À ignorer : bibliothèque Erlang, hors stack data/IA.

