---
schema: 1
depot: awslabs/amazon-bedrock-agent-samples
source_readme_sha: 9863deb5329f1ddc
ecrite_le: 2026-09-29
nature: doc
deploiement: pip
prerequis: [compte à créer, service tiers]
cout: payant
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# awslabs/amazon-bedrock-agent-samples

> Exemples d'agents et de collaboration multi-agents sur Amazon Bedrock, pour développeurs AWS.

## Le problème
Utiliser Bedrock Agents (action groups, guardrails, mémoire, supervision multi-agents) sans exemples de départ est long.

## Ce que ça fait vraiment
Collection d'exemples (`examples/agents`, `examples/multi_agent_collaboration`, démos UX Streamlit) avec des modules partagés (`src/shared` : recherche web, mémoire de travail, données boursières) et des utilitaires boto3 (`src/utils`). D'après le code, une bibliothèque InlineAgent orchestre les appels à l'API Bedrock Agent, avec instrumentation OpenTelemetry.

## Comment c'est branché
```mermaid
flowchart LR
  A["Single-Agent Drivers (examples/agents)"] --> B["src/InlineAgent"]
  C["Multi-Agent Drivers"] --> B
  B --> D["Utility Wrappers (src/utils)"]
  D --> E["Amazon Bedrock Agent API"]
  E --> F["AWS Lambda & Step Functions (Action Groups)"]
  B --> G["OpenTelemetry Collector"]
```

## Essayer
Aucune commande dans le README : il demande d'ouvrir le README de chaque exemple sous `examples/*/*/`.

## Coût et pièges
Compte AWS et accès aux modèles Bedrock ; facturation à l'usage. Certains exemples utilisent Lambda, DynamoDB, ECS ou Amplify. Dernier push en avril 2026.

## Ce que ce n'est pas
Explicitement expérimental et éducatif : pas destiné à la production ; garde-fous (Guardrails) contre l'injection de prompt à mettre en place.

## Alternatives
- Amazon Bedrock Samples (dépôt cité) : exemples plus larges côté Bedrock.

## Pour toi
À ignorer sauf si ton entreprise est engagée sur Bedrock : exemples liés à AWS, sans portée générale pour la donnée ou le MLOps.
