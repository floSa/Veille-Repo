---
schema: 1
depot: google/artemis
source_readme_sha: 81f270ad4930dd28
ecrite_le: 2026-10-20
nature: outil
deploiement: pip
prerequis: [clé d'API, version de Python, service tiers]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# google/artemis

> Agent qui pilote de vrais téléphones Android en langage naturel, pour tests mobiles et assistants IDE via MCP.

## Le problème
Tester ou utiliser une application Android demande de scripter chaque écran ; un agent doit voir l'interface et agir comme un humain.

## Ce que ça fait vraiment
Observe l'écran (arbre d'accessibilité, OCR, modèles visuels) et agit par ADB. Deux profils : Flash (boucle réactive, 3 à 5 s par étape) et Pro (graphe multi-agents avec Planner, Operator, Checker). Exposé par CLI, console web, serveur MCP (pour Antigravity, Claude Code, Windsurf…) et SDK Python. Installe sur le téléphone un petit service d'accessibilité.

## Comment c'est branché
```mermaid
flowchart LR
  A["MCP server server.py"] --> B["Task tools task_runner.py"]
  C["CLI run.py"] --> B
  B --> D["Planner planner.py / Flash runner.py"]
  D --> E["LLM router router.py"]
  D --> F["Android driver adb_driver.py"]
  F --> G["Appareil Android"]
  D --> H["Trace engine.py"]
```

## Essayer
```bash
git clone https://github.com/google/artemis.git && cd artemis
./start.sh
uv run artemis run "Open Settings, find Battery and tell me current level" --profile flash
uv run artemis mcp --install antigravity
```

## Coût et pièges
Le script installe ADB, scrcpy, FFmpeg et dépendances `uv`, puis propose d'écrire dans les configurations de tes IDE. Il faut un fournisseur LLM (clé à ta charge) et un téléphone avec débogage USB. Un service d'accessibilité est déployé sur l'appareil à la première tâche.

## Ce que ce n'est pas
Pas un framework de test déterministe : le résultat dépend du modèle. Le score « 99 %+ sur AndroidWorld » est une affirmation du README, sans méthode détaillée. Flash n'a ni plan, ni vérification finale.

## Alternatives
Aucune alternative nommée dans le README (il intègre du code de mobile-use de Minitap, sous Apache 2.0).

## Pour toi
À surveiller : très pertinent pour tester des applications mobiles avec un agent, mais jeune (créé en août 2026) et couplé à un LLM tiers.

