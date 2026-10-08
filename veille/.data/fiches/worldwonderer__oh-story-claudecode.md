---
schema: 1
depot: worldwonderer/oh-story-claudecode
source_readme_sha: 7cb2d1fa050a637d
ecrite_le: 2026-10-08
nature: outil
deploiement: npm
prerequis: [Node, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# worldwonderer/oh-story-claudecode

> Pack de 13 skills pour écrire des romans web avec un agent de code, destiné aux auteurs chinois.

## Le problème
Un long roman écrit avec un agent perd vite le fil : fils narratifs oubliés, personnages qui savent trop, ton qui sonne « IA ».

## Ce que ça fait vraiment
Installe 13 skills couvrant scan de classements, analyse de textes, écriture longue et courte, import de manuscrits, relecture, « dé-IA » et couverture. La mémoire passe par des fichiers : un `_tracking-state.json` unique génère les vues de suivi (contexte, intrigues, personnages). Des hooks bloquent l'écriture d'un chapitre sans plan détaillé ; des scripts lint repèrent les tournures typiques d'IA et vérifient le nombre de mots. Aucun GPU requis : le modèle est celui de l'agent hôte. Documentation en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  A["story-setup"] --> B["Long scan / Short scan"]
  B --> C["Long analysis / Short analysis"]
  C --> D["Draft writing"]
  D --> E["Prose cleanup"]
  D --> F["Continuity tracking (tracking_commit.py)"]
  A --> G["Agent hooks (story_hook_core.js)"]
```

## Essayer
```bash
npx skills add zenstory-ai/oh-story-claudecode -y -g
```
Puis `/story-setup` à la racine du projet d'écriture et ouvrir une nouvelle session.

## Coût et pièges
Les tokens de l'agent hôte sont à ta charge ; la couverture (`story-cover`) appelle GPT-Image-2. Il faut relancer `/story-setup` après chaque mise à jour.

## Ce que ce n'est pas
Pas un générateur de romans autonome ni un moyen de contourner les détecteurs d'IA : le README dit viser la lisibilité.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : la gestion de mémoire par fichiers et les portes de contrôle sont un bon modèle d'orchestration d'agents, même si le domaine (romans web chinois) est éloigné du tien.

