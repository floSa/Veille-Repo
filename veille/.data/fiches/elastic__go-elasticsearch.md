---
schema: 1
depot: elastic/go-elasticsearch
source_readme_sha: 7ad67b3010f4953d
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# elastic/go-elasticsearch

> Client Go officiel d'Elasticsearch, avec API bas niveau, API typée et helpers d'indexation en masse.

## Le problème
Interroger et alimenter Elasticsearch depuis Go sans construire les requêtes HTTP à la main.

## Ce que ça fait vraiment
Fournit un client configurable, une API bas niveau et une API typée avec builders de requêtes (`esdsl`). Le paquet `esutil` offre `JSONReader` et `BulkIndexer`. Gère intercepteurs et observabilité. Plusieurs versions majeures peuvent coexister dans un même projet.

## Comment c'est branché
```mermaid
flowchart LR
  A["Go application"] --> B["Client setup elasticsearch.go"]
  B --> C["Low-level APIs"]
  B --> D["Typed API"]
  C --> E["HTTP transport"]
  D --> E
  E --> F["Elasticsearch"]
```

## Essayer
```bash
go get github.com/elastic/go-elasticsearch/v9
```
Le README fourni renvoie à la documentation pour l'installation et la connexion.

## Coût et pièges
Gratuit ; un cluster Elasticsearch (ou Elastic Cloud) est nécessaire. Inclure le suffixe de version majeure (`/v8`, `/v9`) dans l'import.

## Ce que ce n'est pas
Ce n'est pas Elasticsearch ni un ORM : c'est un client.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu indexes ou cherches des données depuis Go : client officiel, maintenu par Elastic.

