---
schema: 1
depot: fluent/fluentd
source_readme_sha: 8f43318bbdb605ef
ecrite_le: 2026-10-27
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# fluent/fluentd

> Collecteur de logs open source qui unifie la collecte d'événements et les envoie vers de nombreuses destinations.

## Le problème
Les logs viennent de sources hétérogènes et finissent dans des systèmes différents, avec du code de collecte ad hoc.

## Ce que ça fait vraiment
Architecture à plugins : un moteur central, un parseur de configuration (`fluent.conf`), des plugins d'entrée, de filtre, de parseur/formateur et de sortie, un tampon de buffer et un routeur d'événements. Le flux va de l'entrée au filtre, au buffer puis à la sortie. Le README cite fichiers, bases RDBMS, NoSQL, SaaS et Hadoop comme destinations. Un audit de sécurité Cure53 est mentionné.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI (fluentd)"] --> B["Configuration Parser"]
  B --> C["Core Engine"]
  C --> D["Input Plugins"]
  D --> E["Event Router"]
  E --> F["Filter Plugins"]
  F --> G["Buffer Management"]
  G --> H["Output Plugins"]
```

## Essayer
```bash
gem install fluentd
fluentd -s conf
fluentd -c conf/fluent.conf &
echo '{"json":"message"}' | fluent-cat debug.test
```

## Coût et pièges
Gratuit. Demande Ruby 3.3 ou plus pour le développement. La configuration et le choix des plugins restent à ta charge.

## Ce que ce n'est pas
Pas un stockage ni un moteur de recherche : il achemine les logs. La branche v0.12 n'est plus supportée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu centralises des logs d'entraînement ou d'inférence : Apache-2.0, très répandu, gouverné par la fondation Fluent.

