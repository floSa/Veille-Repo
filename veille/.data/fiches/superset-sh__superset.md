---
schema: 1
depot: superset-sh/superset
source_readme_sha: 460fb2f84e9034e8
ecrite_le: 2026-10-25
nature: app
deploiement: binaire
prerequis: [compte à créer, service tiers]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: surveiller
---

# superset-sh/superset

> Application de bureau qui lance plusieurs agents de code en parallèle, chacun dans son worktree git.

## Le problème
Piloter plusieurs agents CLI en parallèle impose de jongler entre terminaux, branches et prévisualisations.

## Ce que ça fait vraiment
Crée un workspace par tâche (worktree git, branche, terminaux), lance l'agent choisi (Claude Code, Codex…), affiche diff, commentaires et navigateur intégré avec ports par workspace. Ajoute automatisations planifiées, accès distant, CLI, SDK TypeScript et serveur MCP. Mobile iOS réservé à l'offre Pro.

## Comment c'est branché
```mermaid
flowchart LR
  A[Desktop app] --> B[Workspace creation]
  B --> C[Git and worktrees]
  B --> D[Agent sessions]
  D --> E[Terminal sessions]
  C --> F[Change review]
  A --> G[Browser preview browser.ts]
  A --> H[API service route.ts]
```

## Essayer
```bash
curl -fsSL https://superset.sh/cli/install.sh | sh
# ou
brew install superset-sh/tap/superset
# développement
./.superset/setup.local.sh
bun run dev
```

## Coût et pièges
macOS principal, Linux expérimental, Windows absent. Le mobile exige Superset Pro et iOS 26. Compiler depuis les sources demande Bun, Docker, jq et gh.

## Ce que ce n'est pas
Les worktrees ne sont pas un bac à sable : pas d'isolation des processus ni anti-conflits de fusion. Licence présente mais non identifiée par GitHub : à lire avant tout usage pro.

## Alternatives
- max-sixty/worktrunk : CLI seule pour les worktrees, plus léger.

## Pour toi
À surveiller : pratique si tu orchestres beaucoup d'agents sur macOS, mais la licence floue et les offres payantes appellent une vérification.

