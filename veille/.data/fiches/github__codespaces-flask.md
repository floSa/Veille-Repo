---
schema: 1
depot: github/codespaces-flask
source_readme_sha: f484dd25280d0001
ecrite_le: 2026-11-25
nature: app
deploiement: rien à installer
prerequis: [compte à créer, version de Python]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence non déclarée, matière insuffisante]
verdict: ignorer
---

# github/codespaces-flask

> Modèle de départ Flask à ouvrir dans un GitHub Codespace, pour débutants.

## Le problème
Démarrer un projet Flask demande de configurer un environnement local.

## Ce que ça fait vraiment
Un conteneur de développement installe `requirements.txt`, puis `app.py` lance une application Flask qui rend `templates/index.html`. Tout se passe dans le Codespace, sans dépôt GitHub tant qu'on ne publie pas la branche.

## Comment c'est branché
```mermaid
flowchart TD
  D[".devcontainer/devcontainer.json"] --> R["requirements.txt"]
  R --> A["app.py"]
  A --> T["templates/index.html"]
  M["README.md"] --> A
```

## Essayer
```bash
flask --debug run
```

## Coût et pièges
Gratuit dans les quotas Codespaces ; un compte GitHub est requis. Aucune licence déclarée.

## Ce que ce n'est pas
Pas un cadre ni un exemple d'application réelle : une page unique.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un squelette Flask trivial que tu écris en deux minutes toi-même.

