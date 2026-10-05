---
schema: 1
depot: zhoushoujianwork/easyeda-agent
source_readme_sha: 536d4a102803455a
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [service tiers, compte à créer]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# zhoushoujianwork/easyeda-agent

> Couche d'automatisation IA pour EasyEDA Pro : schémas, PCB, bibliothèques et vérifications pilotés par un agent.

## Le problème
Concevoir schéma et PCB à la main est long, et laisser une IA écrire du JS libre dans l'éditeur est peu auditable.

## Ce que ça fait vraiment
Un CLI `easyeda` avec daemon local parle à un connecteur (.eext) dans EasyEDA Pro via l'API officielle `eda.*`, avec actions typées. Crée des bibliothèques depuis un PDF, place et route les composants, ajuste la sérigraphie, remplace des composants par numéro LCSC, lance DRC/DFM et exporte. Vérifie avant et après écriture. Le README est en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  A[Agent IA Skill] --> C[CLI main.go]
  C --> D[Daemon local]
  D --> E[EDA connector transport.ts]
  E --> P[EasyEDA Pro]
  C --> S[cmd_sch.go]
  C --> B[cmd_pcb.go]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/zhoushoujianwork/easyeda-agent/main/install.sh | bash
easyeda daemon start
easyeda health
```

## Coût et pièges
Nécessite EasyEDA Pro V4 avec « allow external interaction ». Pas d'undo programmatique ; impédance contrôlée non vérifiable ; routage dense demande Freerouting.

## Ce que ce n'est pas
Pas une preuve de production : le README précise que certains cas ne sont pas validés. Licence non identifiée par GitHub (MIT annoncée).

## Alternatives
- Freerouting : pour le routage dense complet.

## Pour toi
À ignorer pour un profil data/IA/MLOps : outil de conception électronique hors de ton périmètre.

