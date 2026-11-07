---
schema: 1
depot: holaboss-ai/holaOS
source_readme_sha: aa3cae9963d37333
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [Node, compte à créer]
cout: freemium
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: surveiller
---

# holaboss-ai/holaOS

> Espace de travail local où des agents pilotent tes outils, applications et chats d'équipe.

## Le problème
Les agents arrivent en produit fermé : difficile de les brancher sur ses propres outils, mémoire et conversations.

## Ce que ça fait vraiment
Application de bureau (Electron) qui fait tourner Claude Code, Codex ou son agent maison côte à côte, avec une mémoire partagée en fichiers locaux. Ajoute des apps dans un marché interne, des intégrations OAuth, des serveurs MCP, un navigateur piloté, des tâches planifiées et une plateforme de recettes (HolaHub).

## Comment c'est branché
Pas de diagramme fourni. Schéma tiré du README :
```mermaid
flowchart TD
  D["Application de bureau"] --> A["Agents Claude Code, Codex, holaOS"]
  A --> MEM[("Mémoire locale en fichiers")]
  A --> APP["HolaApps et MCP"]
  A --> INT["Intégrations OAuth"]
  A --> LLM["Modèles intégrés ou clés perso"]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/holaboss-ai/holaOS/refs/heads/main/scripts/install.sh | bash -s -- --launch
npm run desktop:install
cp apps/desktop/.env.example apps/desktop/.env
npm run desktop:prepare-runtime:local
npm run desktop:dev
```

## Coût et pièges
Modèles intégrés via un compte et un forfait holaOS ; clés perso possibles. Le script d'installation est à lire avant de l'exécuter.

## Ce que ce n'est pas
« Local-first » mais les modèles par défaut passent par le compte holaOS. Licence décrite comme « Apache 2.0 modifiée » et non identifiée par GitHub. Les allégations de confidentialité ne sont pas vérifiées.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Surveiller : intéressant pour voir une mémoire d'agents partagée en local, mais licence modifiée et dépendance à un compte pour les modèles par défaut.

