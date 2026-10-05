---
schema: 1
depot: openai/tunnel-client
source_readme_sha: 464a8a5630498b3f
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [compte à créer, clé d'API, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# openai/tunnel-client

> Agent Go qui relie un serveur MCP privé ou local à ChatGPT, Codex et l'API Responses.

## Le problème
Exposer un serveur MCP interne à un produit OpenAI demanderait une règle de pare-feu entrante ou un endpoint public.

## Ce que ça fait vraiment
Interroge en long-polling le plan de contrôle des tunnels OpenAI en HTTPS, relaie les requêtes JSON-RPC vers ton serveur MCP (HTTP, stdio ou mémoire) et renvoie les réponses. Fournit UI d'admin, `/healthz`, `/readyz`, `/metrics`, découverte OAuth, un serveur « Harpoon » pour appels HTTP en liste blanche et un cloudflared embarqué.

## Comment c'est branché
```mermaid
flowchart LR
  O[OpenAI tunnel service] --> C[Control-plane client]
  C --> D[MCP dispatcher processor.go]
  D --> M[Serveur MCP privé]
  D --> H[Harpoon server.go]
  R[Runtime app.go] --> A[Admin UI]
  R --> F[cloudflared supervisor]
```

## Essayer
```bash
brew install openai/tools/tunnel-client
tunnel-client help quickstart
tunnel-client doctor --profile local-stdio --explain
tunnel-client run --profile local-stdio
```

## Coût et pièges
Exige un tunnel et une clé d'API runtime sur la plateforme OpenAI, avec permissions Tunnels. Une seule instance par tunnel en mode stdio.

## Ce que ce n'est pas
Pas un tunnel générique : inutilisable sans le service hébergé par OpenAI. Les ZIP téléchargés ne sont pas notarisés sur macOS.

## Alternatives
Aucune alternative citée dans le README (cloudflared est embarqué).

## Pour toi
À surveiller : utile seulement si tu branches un MCP privé sur ChatGPT ou Codex ; sinon le verrouillage OpenAI n'apporte rien.

