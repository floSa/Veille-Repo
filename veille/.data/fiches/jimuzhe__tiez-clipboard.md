---
schema: 1
depot: jimuzhe/tiez-clipboard
source_readme_sha: 3d4b770e4e9ccee4
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# jimuzhe/tiez-clipboard

> Gestionnaire d'historique du presse-papiers de bureau en Tauri et Rust, avec synchronisation WebDAV.

## Le problème
Le presse-papiers du système ne garde qu'un élément et ne se synchronise pas entre appareils.

## Ce que ça fait vraiment
Capture texte, texte riche, images et chemins de fichiers. Étiquettes, recherche, masquage de données sensibles dans les aperçus, huit thèmes. Synchronise via WebDAV et MQTT, transfère des fichiers en réseau local et relaie des codes de vérification.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
    A["Presse-papiers système"] --> B["Cœur Rust (Tauri 2)"]
    B --> C["Stockage local"]
    B --> D["Interface web"]
    B --> E["WebDAV"]
    B --> F["MQTT"]
```

## Essayer
Aucune commande dans le README ; la section Installation est vide, les versions sont sur la page des releases.

## Coût et pièges
Gratuit, GPL-3.0. La synchronisation demande ton propre serveur WebDAV ou MQTT. Les plateformes exactes ne sont pas lisibles dans la fiche.

## Ce que ce n'est pas
Pas un outil de données ou d'IA, malgré la mention d'« actions assistées par IA » dans le README, sans détail. Pas de garantie sur le chiffrement : non documenté.

## Alternatives
Non documenté dans le README.

## Pour toi
À ignorer : utilitaire de bureau sans lien avec ton métier, et la fiche est trop mince pour juger la sécurité du transfert.

