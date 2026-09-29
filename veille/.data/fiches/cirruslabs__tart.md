---
schema: 1
depot: cirruslabs/tart
source_readme_sha: 4702b7b83d52207b
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# cirruslabs/tart

> Outil en ligne de commande pour créer et lancer des VM macOS et Linux sur Apple Silicon.

## Le problème
Faire tourner des builds et tests macOS reproductibles en CI demande des machines virtuelles jetables et versionnées.

## Ce que ça fait vraiment
CLI Swift au-dessus de Virtualization.Framework : create, clone, run, exec, push/pull d'images de VM vers tout registre compatible OCI, cache d'IPSW et de couches, accès VNC et canal de contrôle pour exécuter des commandes dans l'invité. Plugin Packer pour automatiser la création.

## Comment c'est branché
```mermaid
graph LR
  A["tart CLI"] --> B["Commands"]
  B --> C["VM Directory"]
  C --> D["Local Storage"]
  C --> E["OCI Storage"]
  E --> F["Registry et Layerizer"]
  B --> G["Control Socket et VNC"]
```

## Essayer
```bash
brew install openai/tools/tart
tart clone ghcr.io/cirruslabs/macos-tahoe-base:latest tahoe-base
tart run tahoe-base
```

## Coût et pièges
Apple Silicon et macOS 13 minimum ; l'image de base pèse 25 Go. Licence présente mais non identifiée par GitHub : à lire avant usage en entreprise.

## Ce que ce n'est pas
Pas un outil multiplateforme : le runtime est centré sur macOS Apple Silicon, même si le code compile aussi sous Linux.

## Alternatives
Tart Packer Plugin pour l'automatisation ; aucune autre alternative nommée.

## Pour toi
À surveiller : pertinent seulement si ta CI ou tes builds tournent sur Mac Apple Silicon ; sinon hors périmètre, et la licence est à vérifier.

