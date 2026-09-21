---
schema: 1
depot: ccfos/nightingale
source_readme_sha: fbf2fbfc46cee708
ecrite_le: 2026-09-21
nature: app
deploiement: binaire
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# ccfos/nightingale

> Plateforme d'alerting open source qui se branche sur tes sources de données existantes.

## Le problème
Grafana met l'accent sur la visualisation ; il manque un moteur dédié à la génération, au
traitement et à la distribution des alertes.

## Ce que ça fait vraiment
Nightingale se connecte à des sources existantes (Prometheus, VictoriaMetrics, ElasticSearch, Loki,
ClickHouse, MySQL, Postgres) et y applique règles d'alerte, règles de silence, abonnements et règles
de notification, avec 20 médias intégrés et modèles de messages personnalisables. Il propose des
pipelines d'événements pour enrichir ou relabelliser les alarmes, des groupes métier avec permissions,
l'auto-remédiation par script, l'archivage et la statistique multidimensionnelle des alarmes
historiques, et un mode d'alerting distribué (`n9e-edge`) pour les centres de données mal connectés.
Le processus expose un serveur MCP intégré sur `/mcp` : 74 outils (42 lecture, 32 écriture) sur
13 jeux, en lecture seule par défaut.

## Comment c'est branché
```mermaid
flowchart LR
  categraf[Categraf] --> n9e[processus n9e]
  tsdb[(VictoriaMetrics / ES / Loki)] --> n9e
  n9e --> rules[règles d'alerte et de silence]
  rules --> pipe[event pipelines]
  pipe --> notify[20 médias de notification]
  n9e --> mcp[/mcp MCP + /a2a]
  edge[n9e-edge] --> rules
```

## Essayer
```toml
[HTTP.A2A]
# DisableMCP = true
# MCPToolsets = ["alerts", "dashboards"]
# MCPEnableWriteTools = true
```
```json
{
  "mcpServers": {
    "nightingale": {
      "type": "http",
      "url": "http://127.0.0.1:17000/mcp",
      "headers": { "X-User-Token": "<your-token>" }
    }
  }
}
```

## Coût et pièges
Gratuit. Nightingale ne collecte pas les métriques : il faut un collecteur (Categraf recommandé) et
une base temporelle. L'endpoint `/mcp` est actif d'origine et réutilise `[HTTP.TokenAuth]`, qu'il
faut donc garder activé ; les outils d'écriture supposent un opt-in explicite en configuration.

## Ce que ce n'est pas
Le README le dit franchement : ce n'est pas un produit d'astreinte. Pas de gestion de planning
d'équipe, pas d'escalade, pas de traitement collaboratif ni de consolidation multi-systèmes — pour
cela il renvoie à PagerDuty ou FlashDuty. Et si tu es à l'aise avec Grafana, il recommande de garder
Grafana pour la visualisation.

## Alternatives
- PagerDuty, FlashDuty : pour l'astreinte, l'escalade et la réponse collaborative.
- Grafana : pour la visualisation, plus mature sur ce terrain.
- `n9e-mcp-server` : serveur MCP autonome contre un Nightingale distant.

## Pour toi
Le MCP intégré est l'angle intéressant : piloter les règles d'alerte de tes pipelines depuis un agent,
avec les permissions RBAC du porteur du jeton appliquées telles quelles.
