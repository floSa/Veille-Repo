---
schema: 1
depot: getzola/zola
source_readme_sha: 51002f7e8c56252f
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: surveiller
---

# getzola/zola

> Générateur de sites statiques en un seul binaire, avec moteur de templates Tera, pour blogs et documentation.

## Le problème
Publier un site de documentation ou un blog sans dépendre d'une chaîne d'outils lourde ni d'un moteur de templates pénible.

## Ce que ça fait vraiment
Transforme du Markdown et des templates en HTML : coloration syntaxique, Sass, traitement d'images, taxonomies, pagination, recherche sans serveur, vérificateur de liens, rechargement en direct, thèmes, multilingue basique. Sous-commandes : build, serve, init, check.

## Comment c'est branché
Schéma d'après le diagramme du code, simplifié.

```mermaid
flowchart TD
    CLI["CLI (build, serve, init, check)"] --> PIPE["Build Pipeline"]
    PIPE --> CONTENT["Content Processing"]
    PIPE --> TEMPL["Template Processing"]
    PIPE --> ASSET["Image / SASS Processing"]
    PIPE --> SEARCH["Search (Elasticlunr, Fuse)"]
    CONF["Site Config"] --> PIPE
```

## Essayer
Aucune commande dans le README : voir la documentation Zola (dossier docs/content).

## Coût et pièges
Gratuit (EUPL-1.2). Les templates Tera sont propres à Zola. Le multilingue est décrit comme « basique ».

## Ce que ce n'est pas
Pas un CMS : pas d'interface d'édition. Pas un framework d'application web. Le README, très court, renvoie à la documentation.

## Alternatives
- Hugo : cité comme l'outil que l'auteur a quitté à cause de son moteur de templates.

## Pour toi
À surveiller : pratique pour publier une documentation de projet ML en un binaire, sans Node ni Python, si tu n'as pas déjà un outil en place.

