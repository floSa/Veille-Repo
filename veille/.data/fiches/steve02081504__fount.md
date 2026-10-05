---
schema: 1
depot: steve02081504/fount
source_readme_sha: 5ee0cdb141e8b20d
ecrite_le: 2026-10-05
nature: app
deploiement: autre
prerequis: [Node, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# steve02081504/fount

> Plateforme modulaire d'agents IA à personnaliser par le code : personnages, mondes, shells et sources d'IA.

## Le problème
Les frontends de chat LLM figent la logique de l'agent : on règle le prompt et l'interface, rarement le comportement.

## Ce que ça fait vraiment
Serveur Deno/Express qui charge des « parts » (chars, worlds, personas, shells, AIsources). Le chat résout un personnage, construit le prompt, appelle une source d'IA (code JS libre) puis passe les réponses dans des plugins. Les blocs de code envoyés sont exécutables en direct ; shells pour Telegram, Discord, navigateur, IDE ; P2P sur LAN. Le personnage par défaut ZL-31 pilote la configuration par conversation.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur] --> S[server.mjs]
  S --> L[parts_loader.mjs]
  L --> C[ZL-31 main.mjs]
  C --> A[AIsource.ts]
  C --> P[pluginAPI.ts]
  C --> F[storage.mjs]
```

## Essayer
```bash
npx the-fount
docker pull ghcr.io/steve02081504/fount
fount remove
```

## Coût et pièges
Il faut configurer une API LLM (facturation à ta charge). Les personnages exécutent du JavaScript : le README prévient que des parts communautaires peuvent contenir du code malveillant.

## Ce que ce n'est pas
Pas un simple chat prêt à l'emploi : courbe d'apprentissage et code requis pour aller loin. La licence est présente mais non identifiée par GitHub. Migration des anciens personnages non supportée.

## Alternatives
- OpenClaw : pour essayer des agents sans personnalisation poussée.
- SillyTavern : si tu dépends de STscript ou de ses plugins.
- ChatGPT : pour simplement discuter.

## Pour toi
À surveiller : l'exécution de code tiers et la licence floue freinent un usage pro, mais l'idée de runtime d'agents programmable vaut un œil.

