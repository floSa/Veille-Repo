---
schema: 1
depot: ipea/geocodebr
source_readme_sha: e32370e1b4674cf9
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# ipea/geocodebr

> Paquet R et Python de géocodage gratuit et sans limite d'adresses brésiliennes, d'après le CNEFE.

## Le problème
Les géocodeurs courants dépendent de services commerciaux avec quotas, peu adaptés à des millions d'adresses.

## Ce que ça fait vraiment
Trois fonctions : `geocode()` (adresses vers coordonnées), `geocode_reverso()` (coordonnées vers adresses proches) et `busca_por_cep()`. Les données du CNEFE (IBGE), environ 1,2 Go, sont téléchargées au premier appel dans un cache local. La version Python utilise DuckDB et donne les mêmes noms de fonctions que R.

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["geocode.py"] --> B["standardize.py"]
  A --> C["matching.py"]
  A --> D["download_cnefe.py"]
  D --> E["cache.py"]
  A --> F["db.py (DuckDB)"]
  A --> G["geo.py"]
```

## Essayer
```bash
python -m pip install geocodebr
python -m pip install "geocodebr[geo]"
# R : install.packages("geocodebr")
```

## Coût et pièges
Gratuit. Premier lancement lent : téléchargement de 1,2 Go. Licence non identifiée par GitHub. README en portugais.

## Ce que ce n'est pas
Limité aux adresses du Brésil. Pas un géocodeur mondial.

## Alternatives
- `tidygeocoder` (R) : interface vers plusieurs services de géocodage.
- `geopy` (Python) : client de services de géocodage (Nominatim, Google, ArcGIS).

## Pour toi
Surveiller : utile si tu traites des adresses brésiliennes en masse ; sinon sans objet.

