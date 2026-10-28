---
schema: 1
depot: dependabot/dependabot-core
source_readme_sha: 1a6bc301fe8095e9
ecrite_le: 2026-10-28
nature: bibliothèque
deploiement: docker
prerequis: [Docker, clé d'API]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# dependabot/dependabot-core

> Bibliothèque Ruby de mises à jour de dépendances, pour héberger son propre Dependabot.

## Le problème
Les dépendances vieillissent et les failles s'accumulent sans mises à jour automatisées.

## Ce que ça fait vraiment
Cherche la dernière version résolvable d'une dépendance, régénère manifestes et lockfiles, et rédige la description de PR avec changelogs. Couvre une douzaine d'écosystèmes plus Docker, Terraform et git submodules. Ce n'est qu'une bibliothèque : il faut un point d'entrée (Dependabot CLI recommandé).

## Comment c'est branché
```mermaid
flowchart LR
  A["Fetch dependency files"] --> B["Parse dependencies"]
  B --> C["Check resolvable versions"]
  C --> D["Update manifests and locks"]
  D --> E["Release metadata"]
  E --> F["Create pull requests"]
```

## Essayer
```bash
docker pull ghcr.io/dependabot/dependabot-updater-gomod
bin/docker-dev-shell go_modules
bin/dry-run.rb go_modules rsc/quote
```

## Coût et pièges
Gratuit. Environnement jetable requis (code arbitraire des manifestes). Le CLI produit des diffs, pas des PR : à câbler soi-même.

## Ce que ce n'est pas
Pas le service GitHub clé en main : celui-ci s'active via `dependabot.yml`.

## Alternatives
- Dependabot CLI : point d'entrée recommandé pour l'usage autonome.

## Pour toi
À surveiller : utile seulement si tu auto-héberges la mise à jour de dépendances ; sinon le service GitHub suffit.

