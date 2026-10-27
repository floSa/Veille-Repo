---
schema: 1
depot: dataease/dataease
source_readme_sha: e48af7cbbb7aecb9
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# dataease/dataease

> Outil de BI open source en glisser-déposer, pour analyser et partager des tableaux de bord.

## Le problème
Les équipes métier ont besoin de graphiques sur leurs données sans écrire de code.

## Ce que ça fait vraiment
Se connecte à des bases OLTP (MySQL, PostgreSQL, Oracle…), OLAP (ClickHouse, Doris, StarRocks), entrepôts (Redshift), fichiers Excel/CSV et API ; crée des jeux de données et des graphiques par glisser-déposer, des tableaux de bord, un tableur (Univer), des modèles et des exports. Pile : Vue.js/Element, AntV, Spring Boot, MySQL, Calcite, SeaTunnel. README en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  A["Analyste"] --> UI["BI interface"]
  UI --> DS["Datasource management"]
  DS --> ES["External data sources"]
  DS --> DT["Dataset management"]
  DT --> CH["Chart data service"]
  CH --> DB["Dashboards"]
```

## Essayer
```bash
tar zxvf dataease-offline-installer-v3.0.0.tar.gz
cd dataease-offline-installer-v3.0.0
bash install.sh
```

## Coût et pièges
Serveur Linux 2 cœurs / 4 Go minimum. Mot de passe admin par défaut documenté (`DataEase@123456`) : à changer. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas un outil de modélisation ni de ML. La documentation est en chinois.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
BI libre-service comparable à d'autres ; à regarder si tu cherches un outil auto-hébergé de tableaux de bord, après avoir lu la licence.

