---
schema: 1
depot: OpenCageData/address-formatting
source_readme_sha: 053814c46bdc5872
ecrite_le: 2026-10-29
nature: dataset
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# OpenCageData/address-formatting

> Modèles et cas de test de mise en forme d'adresses pour 251 territoires, indépendants du langage.

## Le problème
Afficher une adresse selon la convention locale à partir de composants (rue, ville, code postal).

## Ce que ça fait vraiment
Modèles Mustache et configuration YAML par pays, avec règles `replace`, `postformat_replace`, `add_component`, `change_country`, `use_country`. Cas de test par territoire. Des processeurs existent pour une dizaine de langages (Python et Rust non maintenus). Ne gère pas étages, boîtes postales ni traduction.

## Comment c'est branché
```mermaid
flowchart LR
  A[Composants d'adresse] --> B[conf/countries/worldwide.yaml]
  B --> C[Modèle Mustache]
  C --> D[Adresse formatée]
  E[testcases/countries] --> F[Processeur]
  F --> D
```

## Essayer
```bash
bin/coverage.pl
bin/coverage.pl -d
```

## Coût et pièges
Gratuit (MIT). Prévu pour l'affichage, pas pour l'envoi postal ; abréviations par langue à compléter.

## Ce que ce n'est pas
Pas un géocodeur ni un validateur d'adresses.

## Alternatives
Aucune alternative nommée dans le README (OpenCage Geocoder est le service des mêmes auteurs).

## Pour toi
À surveiller : base de règles utile si tu normalises des adresses dans un pipeline de données.

