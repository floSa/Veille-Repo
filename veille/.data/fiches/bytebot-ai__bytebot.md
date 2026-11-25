---
schema: 1
depot: bytebot-ai/bytebot
source_readme_sha: 796cc24df9874c71
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [clé d'API, Docker]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [archivé, dernier commit ancien]
verdict: ignorer
---

# bytebot-ai/bytebot

> Agent IA doté de son propre bureau Ubuntu virtuel, pour exécuter des tâches décrites en langage naturel.

## Le problème
Les agents limités au navigateur ou aux API ne savent pas utiliser un logiciel de bureau ni manipuler des fichiers locaux.

## Ce que ça fait vraiment
Fournit un bureau Ubuntu/XFCE conteneurisé que l'agent pilote (souris, clavier, captures). Une interface web permet de créer des tâches, de regarder le bureau en direct et de reprendre la main. Des API REST permettent de créer des tâches et de piloter le bureau. Les modèles passent par un proxy LiteLLM.

## Comment c'est branché
```mermaid
flowchart TD
  UI["bytebot-ui:3000"] --> Agent["bytebot-agent:9991"]
  Agent --> DB["PostgreSQL"]
  Agent --> Desktop["bytebotd:9990"]
  Agent --> Proxy["bytebot-llm-proxy"]
  Proxy --> LLM["LLM Providers"]
```

## Essayer
```bash
git clone https://github.com/bytebot-ai/bytebot.git
cd bytebot
echo "ANTHROPIC_API_KEY=sk-ant-..." > docker/.env
docker-compose -f docker/docker-compose.yml up -d
# ouvrir http://localhost:9992
```

## Coût et pièges
Les appels au modèle sont facturés à ta charge. Docker obligatoire. Le dépôt est archivé et son dernier push date de septembre 2025.

## Ce que ce n'est pas
Pas un produit maintenu : plus de correctifs attendus. Les identifiants saisis dans le bureau (gestionnaires de mots de passe) restent sous ta responsabilité.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer en production car archivé ; à lire seulement comme exemple d'architecture agent plus bureau virtuel.

