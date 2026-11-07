---
schema: 1
depot: appsmithorg/appsmith
source_readme_sha: 72cc207105ff9cd8
ecrite_le: 2026-11-07
nature: outil
deploiement: docker
prerequis: [Docker, service tiers]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# appsmithorg/appsmith

> Plateforme low-code open source pour construire des tableaux de bord et outils internes.

## Le problème
Les équipes ont besoin d'outils internes (admin, tableaux de bord) sans les développer entièrement.

## Ce que ça fait vraiment
Éditeur visuel de widgets, connexion à des sources de données et requêtes, workflows Git, import/export d'applications. Serveur Java avec plugins ; le README promeut aussi « Appsmith Agents », une offre d'agents IA.

## Comment c'est branché
```mermaid
flowchart TD
    Editor["AppEditorEngine.ts"] --> Widgets["Widget library"]
    Editor --> Query["useQueryAdd.tsx"]
    Query --> Run["useHandleRunClick.ts"]
    Run --> API["ApplicationControllerCE.java"]
    API --> DS["DatasourceStorageServiceCEImpl.java"]
    API --> Git["GitApplicationControllerCE.java"]
```

## Essayer
Aucune commande dans le README : installation via les guides de la documentation (Docker recommandé, Kubernetes, AWS AMI) ou Appsmith Cloud.

## Coût et pièges
Auto-hébergement gratuit ; Appsmith Cloud et Agents sont des offres de l'éditeur. 4 527 issues ouvertes.

## Ce que ce n'est pas
Pas du no-code total : requêtes et JavaScript restent nécessaires. Les liens serveur du diagramme sont non vérifiés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour monter une interface sur des données ou un modèle sans front dédié, mais lourd à héberger.

