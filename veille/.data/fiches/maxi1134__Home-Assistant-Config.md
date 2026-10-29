---
schema: 1
depot: maxi1134/Home-Assistant-Config
source_readme_sha: 33cb384f5db75671
ecrite_le: 2026-10-29
nature: liste
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: surveiller
---

# maxi1134/Home-Assistant-Config

> Configuration personnelle Home Assistant avec documentation et firmware ESPHome d'interphone.

## Le problème
Voir comment un particulier structure une maison connectée (Zigbee, Z-Wave, localisation intérieure, assistant vocal).

## Ce que ça fait vraiment
Dépôt de configuration : automatisations, matériel, logiciel, réseau et VLAN, appareils Zigbee, localisation par ESPresense, guide d'assistant vocal avec Ollama et ESPHome. Le code échantillonné porte surtout sur deux générations d'interphone ESP (pile audio ESP, audio UDP hérité) et quelques utilitaires.

## Comment c'est branché
```mermaid
flowchart LR
  A[Automations HA] --> B[Intercom API intercom_api.cpp]
  B --> C[audio_pipeline.cpp]
  C --> D[esp_afe.cpp]
  E[hue_effects.py] --> A
  F[mipi_dsi.cpp] --> A
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Gratuit, mais matériel (clés Zigbee/Z-Wave, ESP) à ta charge. Aucune licence.

## Ce que ce n'est pas
Pas une intégration réutilisable : une configuration personnelle à adapter.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : source d'idées pour un assistant vocal local (Ollama, ESPHome), pas un projet à installer tel quel.

