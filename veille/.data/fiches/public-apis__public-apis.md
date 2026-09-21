---
schema: 1
depot: public-apis/public-apis
source_readme_sha: a33209b240c586f7
ecrite_le: 2026-09-21
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# public-apis/public-apis

> Catalogue communautaire d'APIs publiques classées par domaine, pour développeurs cherchant une source de données.

## Le problème
Trouver une API gratuite pour un domaine précis oblige à fouiller Google et à tester des services morts un par un.
On perd du temps sur l'authentification et le HTTPS avant même de savoir si l'API répond.

## Ce que ça fait vraiment
Un README géant, un index de ~50 catégories (Animals, Machine Learning, Finance, Anti-Malware, Blockchain…).
Chaque entrée est une ligne de tableau : nom, description, type d'auth (`No`, `apiKey`, `OAuth`), HTTPS, CORS.
Une section MCP Servers récente liste des serveurs Model Context Protocol avec transport (`stdio`, `HTTP`) et cible d'installation.
Deux scripts de validation (`format.py`, `links.py`) vérifient la forme du README et les liens morts.

## Comment c'est branché
```mermaid
flowchart TD

subgraph group_catalog["Catalog Product"]
  node_readme_catalog["API Catalog<br/>[README.md]"]
  node_unified_access["Unified Access<br/>[README.md]"]
end

subgraph group_api_domains["API Domains"]
  node_geo_location["Geolocation APIs<br/>[README.md]"]
  node_market_weather["Market Weather APIs<br/>[README.md]"]
  node_finance_rates["Currency Rate APIs<br/>[README.md]"]
  node_identity_validation["Identity Validation APIs<br/>[README.md]"]
  node_flight_search["Flight Search APIs<br/>[README.md]"]
  node_media_file["Media File APIs<br/>[README.md]"]
end

subgraph group_validation["Validation Tools"]
  node_format_validator["Format Validator<br/>[format.py]"]
  node_link_validator["Link Validator<br/>[links.py]"]
  node_validation_reports["Validation Reports"]
end

subgraph group_external["External Providers"]
  node_api_providers["API Providers"]
end

node_developer(("Developer"))

node_developer -->|"browses"| node_readme_catalog
node_readme_catalog -->|"documents access"| node_unified_access
node_developer -->|"uses account"| node_unified_access
node_unified_access -->|"exposes APIs"| node_geo_location
node_unified_access -->|"exposes APIs"| node_market_weather
node_unified_access -->|"exposes APIs"| node_finance_rates
node_unified_access -->|"exposes APIs"| node_identity_validation
node_unified_access -->|"exposes APIs"| node_flight_search
node_unified_access -->|"exposes APIs"| node_media_file
node_readme_catalog -->|"links to"| node_geo_location
node_readme_catalog -->|"links to"| node_market_weather
node_readme_catalog -->|"links to"| node_finance_rates
node_readme_catalog -->|"links to"| node_identity_validation
node_readme_catalog -->|"links to"| node_flight_search
node_readme_catalog -->|"links to"| node_media_file
node_geo_location -->|"uses providers"| node_api_providers
node_market_weather -->|"uses providers"| node_api_providers
node_finance_rates -->|"uses providers"| node_api_providers
node_identity_validation -->|"uses providers"| node_api_providers
node_flight_search -->|"uses providers"| node_api_providers
node_media_file -->|"uses providers"| node_api_providers
node_api_providers -->|"returns JSON"| node_developer
node_developer -->|"runs checks"| node_format_validator
node_developer -->|"runs checks"| node_link_validator
node_format_validator -->|"reads file"| node_readme_catalog
node_link_validator -->|"reads file"| node_readme_catalog
node_link_validator -.->|"checks links"| node_api_providers
node_format_validator -->|"prints errors"| node_validation_reports
node_link_validator -->|"prints errors"| node_validation_reports

click node_readme_catalog "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_unified_access "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_format_validator "https://github.com/public-apis/public-apis/blob/master/scripts/validate/format.py"
click node_link_validator "https://github.com/public-apis/public-apis/blob/master/scripts/validate/links.py"
click node_validation_reports "https://github.com/public-apis/public-apis/tree/master/scripts/validate"
click node_geo_location "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_market_weather "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_finance_rates "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_identity_validation "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_flight_search "https://github.com/public-apis/public-apis/blob/master/README.md"
click node_media_file "https://github.com/public-apis/public-apis/blob/master/README.md"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_readme_catalog,node_unified_access toneBlue
class node_geo_location,node_market_weather,node_finance_rates,node_identity_validation,node_flight_search,node_media_file toneAmber
class node_format_validator,node_link_validator,node_validation_reports toneMint
class node_api_providers toneRose
class node_developer toneIndigo
```

## Essayer
```bash
# Aucune commande d'installation ou d'usage n'est documentée dans le README :
# le dépôt se consulte, il ne s'exécute pas.
# Les seuls exécutables cités sont les validateurs, sans ligne de commande fournie :
# scripts/validate/format.py et scripts/validate/links.py
```

## Coût et pièges
Le catalogue est gratuit, mais une bonne moitié des entrées exigent une `apiKey` ou un `OAuth`, donc un compte chez le fournisseur.
Le README est ouvert par un bloc promotionnel APILayer (le sponsor) : les premières APIs listées ne sont pas les plus neutres du lot.

## Ce que ce n'est pas
Ce n'est pas un proxy ni un SDK : rien n'est appelé pour toi, tu récupères juste une URL et un mode d'auth.
Ce n'est pas un annuaire vérifié en continu — la colonne CORS est souvent `Unknown`, et la fraîcheur d'une entrée dépend du dernier contributeur.
Ce n'est pas non plus un catalogue MCP sérieux : la section ne compte que quelques lignes.

## Alternatives
APILayer : si tu veux une clé unique et une facturation unique plutôt que trente comptes — mais c'est un SaaS payant.
Aucun autre dépôt concurrent n'est nommé dans le README.

## Pour toi
Utile comme signet quand tu cherches un jeu de données public pour un POC ; à ne pas confondre avec une source de données fiable en production.
