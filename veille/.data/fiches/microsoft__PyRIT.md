---
schema: 1
depot: microsoft/PyRIT
source_readme_sha: e062f2bd5392b4a7
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
---

# microsoft/PyRIT

> Boîte à outils de red teaming pour tester la sécurité et la sûreté de modèles et d'applications d'IA générative.

## Le problème
Les systèmes d'IA générative ont des failles (contournements, contenus nuisibles) difficiles à tester à la main et de façon répétable.

## Ce que ça fait vraiment
Trois entrées : un scanner en ligne de commande, une interface graphique CoPyRIT et un cadre Python. Il lance des évaluations automatisées, des attaques adaptatives à plusieurs tours et des tests menés par un humain, sur des cibles très variées (OpenAI, Anthropic, Azure, Bedrock, Ollama, HTTP, WebSocket, Playwright). La mémoire des conversations et le scoring sont intégrés.

## Comment c'est branché
```mermaid
flowchart TD
  A["frontend : App.tsx"] --> B["pyrit/backend/main.py"]
  B --> C["scenario_run_service.py"]
  C --> D["pyrit/memory"]
  E["pyrit/executor/attack"] --> F["pyrit/prompt_target"]
  E --> D
  G["pyrit/score"] --> H["output/score/json.py"]
```

## Essayer
```bash
# Aucune commande dans le README : installation et configuration renvoyées au site du projet
```

## Coût et pièges
Gratuit (MIT), mais les cibles et les modèles évaluateurs consomment tes quotas ou clés d'API. Les fonctions disponibles dépendent de la cible ; les liens interface-API restent non vérifiés dans le schéma fourni.

## Ce que ce n'est pas
Pas un scanner d'intrusion réseau : il teste des modèles d'IA. Pas une garantie de sécurité, les résultats dépendent des scénarios choisis.

## Alternatives
Aucune alternative citée dans le README (adaptateur LiteLLM optionnel pour plus de fournisseurs).

## Pour toi
À adopter : si tu déploies des modèles ou des agents, un test de red teaming reproductible d'un éditeur reconnu est une bonne pratique MLOps.

