---
schema: 1
depot: githubnext/agentics
source_readme_sha: 595bcb0156312766
ecrite_le: 2026-11-05
nature: liste
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# githubnext/agentics

> Collection de workflows agentiques GitHub réutilisables (triage, CI, revue, docs), pour mainteneurs de dépôts.

## Le problème
Automatiser triage d'issues, analyse de CI, revue de code et documentation demande d'écrire soi-même des workflows pilotés par agent.

## Ce que ça fait vraiment
- Catalogue de workflows prêts à ajouter : Issue Triage, Repo Assist, CI Doctor, Grumpy Reviewer, Daily Test Improver, etc.
- Certains sont déclenchés par commandes `/` (Archie, Plan, PR Fix, Repo Ask).
- Sécurité (Daily Malicious Code Scan, VEX Generator) et vérification formelle Lean 4 (Lean Squad).
- Fragments partagés (serveurs MCP arXiv, MarkItDown, Microsoft Docs ; FFmpeg ; sq).

## Comment c'est branché
Pas de diagramme fourni. Le README décrit seulement : workflows importés dans un dépôt, mis à jour par l'extension `gh aw`. Le fonctionnement interne n'est pas documenté.

## Essayer
```bash
gh extensions upgrade github/gh-aw
gh aw upgrade
gh aw update
```
Ce sont les commandes de mise à jour ; l'installation d'un workflow n'est pas détaillée dans le README.

## Coût et pièges
Repose sur gh-aw et GitHub ; le Cost Tracker suggère des dépenses de jetons par exécution, non chiffrées. Facture et moteur d'agent non précisés.

## Ce que ce n'est pas
Pas un produit unique : un échantillon de modèles. Les workflows agissent sur ton dépôt (PR, issues, commentaires) : à relire avant activation.

## Alternatives
Aucune nommée dans le README (renvoie à la collection compagnon Agentics Beyond Code pour les non-ingénieurs).

## Pour toi
À surveiller : bon réservoir d'idées de workflows pour un dépôt MLOps, mais dépendant de GitHub et du coût en jetons.

