---
schema: 1
depot: xianyu110/awesome-openclaw-tutorial
source_readme_sha: f1772e33630d7905
ecrite_le: 2026-11-07
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# xianyu110/awesome-openclaw-tutorial

> Livre-tutoriel en chinois pour installer et utiliser l'assistant IA OpenClaw, du déploiement aux cas d'usage.

## Le problème
OpenClaw change vite (ruptures de version, migrations) et les guides en ligne sont vite périmés, surtout pour un public chinophone.

## Ce que ça fait vraiment
Quinze chapitres et quinze annexes (environ 408 000 caractères) sur installation, mémoire, automatisation, skills et intégrations (Feishu, WeCom, DingTalk). Calé sur OpenClaw v2026.9.3 ; les chapitres 3, 4, 6 et 9 contiennent encore de l'ancien contenu. Une version papier existe.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  A["README et mises à jour"] --> B["Chapitres 1 à 3 : prise en main"]
  A --> C["Chapitres 4 à 7 : fonctions"]
  A --> D["Chapitres 8 à 11 : avancé"]
  A --> E["Chapitres 12 à 15 : cas pratiques"]
```

## Essayer
```bash
openclaw config set gateway.auth.mode token
openclaw config set gateway.auth.token "your-secret-token"
openclaw gateway restart
openclaw update --tag 2026.9.3 --yes
openclaw doctor --fix
```

## Coût et pièges
Lecture gratuite ; OpenClaw lui-même consomme des API de modèles (le texte annonce 5 à 50 yuans par mois) et certains services de déploiement sont payants. Licence non reconnue par GitHub, alors que le texte annonce GPL-3.0.

## Ce que ce n'est pas
Pas la documentation officielle : en cas de doute, la doc d'OpenClaw prime. Pas à jour partout : les sections historiques ne sont pas à recopier.

## Alternatives
La documentation officielle d'OpenClaw (docs.openclaw.ai) et la collection VoltAgent/awesome-openclaw-skills.

## Pour toi
À ignorer, sauf si tu utilises OpenClaw et lis le chinois : pour un profil data / IA / MLOps, c'est un guide d'outil grand public, sans valeur technique propre.

