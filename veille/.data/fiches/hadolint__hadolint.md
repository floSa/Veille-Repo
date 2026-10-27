---
schema: 1
depot: hadolint/hadolint
source_readme_sha: f8882af54426ed46
ecrite_le: 2026-10-27
nature: outil
deploiement: docker
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: adopter
---

# hadolint/hadolint

> Linter de Dockerfile en Haskell qui applique les bonnes pratiques et s'appuie sur ShellCheck.

## Le problème
Un Dockerfile mal écrit donne des images lourdes, non reproductibles ou peu sûres, sans alerte du build.

## Ce que ça fait vraiment
Il parse le Dockerfile en AST (bibliothèque language-docker), applique des règles `DL…` propres à hadolint et les règles `SC…` de ShellCheck sur les instructions `RUN`. Sorties en tty, JSON, SARIF, JUnit, etc. Configuration par `.hadolint.yaml` ou variables d'environnement, ignores en ligne ou globaux, schéma de labels, registres de confiance.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI (app/Main.hs)"] --> B["Dockerfile Parser (src/Hadolint.hs)"]
  B --> C["Linting Engine (src/Hadolint/Lint.hs)"]
  C --> D["Rules (src/Hadolint/Rule)"]
  C --> E["ShellCheck"]
  F["Config (src/Hadolint/Config)"] --> C
  C --> G["Formatter (src/Hadolint/Formatter)"]
```

## Essayer
```bash
hadolint Dockerfile
hadolint --ignore DL3003 --ignore DL3006 Dockerfile
docker run --rm -i hadolint/hadolint < Dockerfile
brew install hadolint
hadolint --config /path/to/config.yaml Dockerfile
```

## Coût et pièges
Gratuit. Image Docker de base sans shell : prendre les variantes Debian ou Alpine si besoin. Sans configuration, ses alertes peuvent bloquer un CI : régler `failure-threshold`.

## Ce que ce n'est pas
Pas un scanner de vulnérabilités d'images. Il analyse le fichier, pas l'image construite.

## Alternatives
- replicatedhq/dockerfilelint : l'autre linter du super-linter.
- RedCoolBeans/dockerlint
- projectatomic/dockerfile_lint

## Pour toi
À adopter : une étape de CI qui coûte presque rien et rend tes images d'entraînement et de service plus propres.

