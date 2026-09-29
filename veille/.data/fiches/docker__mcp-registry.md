---
schema: 1
depot: docker/mcp-registry
source_readme_sha: eaa0fb2a1fdc2937
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# docker/mcp-registry

> Catalogue officiel de serveurs MCP publiés par Docker, exécutés en conteneurs isolés.

## Le problème
Trouver des serveurs MCP fiables et les lancer sans exposer son poste à du code non vérifié est difficile.

## Ce que ça fait vraiment
Un contributeur propose par pull request les métadonnées d'un serveur, soit construit par Docker (signatures, provenance, SBOM, publication sur `mcp/<nom>` sur Docker Hub), soit une image déjà construite. Les définitions sont validées, un catalogue est généré, puis lu par le catalogue MCP, la MCP Toolkit de Docker Desktop et Docker Hub. Le dépôt contient aussi des assistants de création et un outil de revue de sécurité assistée par IA.

## Comment c'est branché
```mermaid
flowchart LR
  A["Contributor"] --> B["Server Wizard (main.go)"]
  B --> C["Server Definitions"]
  C --> D["Metadata Validator (main.go)"]
  D --> E["Catalog Generator (main.go)"]
  E --> F["Catalog Artifact"]
  F --> G["Docker Toolkit / Docker Hub"]
```

## Essayer
Aucune commande dans le README : la contribution passe par une pull request avec les informations requises ; modifications et retraits par une issue.

## Coût et pièges
Gratuit. Le délai annoncé entre approbation et apparition dans le catalogue est de 24 heures. Les images fournies par le contributeur n'ont pas les protections renforcées (signatures, SBOM). 1 318 issues ouvertes.

## Ce que ce n'est pas
Pas un hébergement de serveurs MCP ni un garant de sécurité absolu : les serveurs non conformes peuvent être retirés, mais la revue reste un contrôle de qualité.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller comme source de serveurs MCP isolés en conteneurs, utile pour cadrer ce que tes agents peuvent lancer ; à consulter plus qu'à cloner.
