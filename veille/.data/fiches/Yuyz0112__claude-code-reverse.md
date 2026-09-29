---
schema: 1
depot: Yuyz0112/claude-code-reverse
source_readme_sha: 7ebd4b44f32b67fd
ecrite_le: 2026-09-29
nature: doc
deploiement: rien à installer
prerequis: [Node]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, dernier commit ancien, mainteneur unique]
verdict: surveiller
---

# Yuyz0112/claude-code-reverse

> Analyse par le trafic API du fonctionnement interne de Claude Code, avec prompts et outils extraits.

## Le problème
Comprendre comment un agent de code abouti orchestre ses prompts et outils, alors que le code source est minifié.

## Ce que ça fait vraiment
Un correctif `cli.js.patch` intercepte `beta.messages.create` du SDK Anthropic et journalise requêtes et réponses. `parser.js` structure les journaux, `visualize.html` les affiche en repérant les prompts communs. Le dossier de résultats contient les prompts (workflow, compaction, détection de sujet, IDE) et les définitions d'outils en YAML. La v1 (analyse de bundle par LLM) est archivée.

## Comment c'est branché
```mermaid
graph LR
    A["CLI patch (cli.js.patch)"] --> B["Claude Code"]
    B --> C["Raw logs"]
    C --> D["Parser (parser.js)"]
    D --> E["Viewer (visualize.html)"]
    E --> F["Results"]
    F --> G["Tools"]
```

## Essayer
```bash
which claude
mv cli.js cli.bak
js-beautify cli.bak > cli.js
```
Puis appliquer `cli.js.patch` (détails dans le dépôt) ; un `messages.log` est créé à chaque lancement.

## Coût et pièges
Suppose une installation de Claude Code (compte à ta charge). Modifier les fichiers installés peut casser à la prochaine mise à jour. Aucune licence déclarée : réutilisation des prompts extraits à vérifier. Le README note que ce type de reverse engineering n'est pas soutenu par Anthropic.

## Ce que ce n'est pas
Pas un outil à déployer : un travail d'étude, daté de juillet 2025 (modèles Sonnet 4, Haiku 3.5).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller comme lecture : utile pour concevoir tes propres agents (prompts, sous-agents, compaction), mais sans licence et figé sur une version ancienne.
