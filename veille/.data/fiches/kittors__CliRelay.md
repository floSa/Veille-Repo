---
schema: 1
depot: kittors/CliRelay
source_readme_sha: e83e1cec964bcc65
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker, service tiers, compte à créer]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: []
verdict: surveiller
---

# kittors/CliRelay

> Passerelle auto-hébergée qui place abonnements IA et clés d'API derrière un point d'entrée unique, avec panneau multi-tenant.

## Le problème
Une équipe qui utilise Claude Code, Codex ou Gemini CLI jongle avec plusieurs comptes, sans vue sur la consommation ni basculement quand un quota est épuisé.

## Ce que ça fait vraiment
Les clients parlent au protocole OpenAI, Anthropic ou Gemini ; CliRelay authentifie par clé, applique quotas et limites, choisit un compte sain, traduit le protocole et enregistre chaque requête. Un panneau web gère comptes, tarifs, rôles, tenants et journal d'audit. PostgreSQL stocke l'état, Redis les caches.

## Comment c'est branché
```mermaid
flowchart LR
  A["Claude Code, Codex, Gemini CLI"] --> B["Clé client, compte portail"]
  B --> C["Quotas et limites"]
  C --> D["Routage par groupe de canaux"]
  D --> E["Exécuteurs et traducteurs, internal/translator"]
  E --> F["Comptes OAuth et clés fournisseurs"]
  D -.-> G["PostgreSQL, Redis"]
```

## Essayer
```bash
git clone https://github.com/kittors/CliRelay.git
cd CliRelay
docker compose up -d
export ANTHROPIC_BASE_URL=http://localhost:8317
export ANTHROPIC_AUTH_TOKEN=sk-your-client-key
claude
```

## Coût et pièges
Les abonnements et clés amont restent à ta charge. Le README mentionne l'import de cookies ou jetons de session de comptes d'abonnement : à vérifier au regard des conditions d'usage des fournisseurs.

## Ce que ce n'est pas
Pas un fournisseur de modèles : il redistribue des comptes que tu possèdes. Fork très étendu de CLIProxyAPI, nommé comme tel par le README.

## Alternatives
CLIProxyAPI, dont il est un fork étendu.

## Pour toi
À surveiller : pratique pour mesurer et plafonner l'usage LLM d'une équipe, mais le montage sur des abonnements grand public pose un risque de conformité.

