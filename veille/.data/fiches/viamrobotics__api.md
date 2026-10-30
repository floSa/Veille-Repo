---
schema: 1
depot: viamrobotics/api
source_readme_sha: 77b925ebceac0957
ecrite_le: 2026-10-30
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# viamrobotics/api

> Définitions Protobuf de l'API publique de Viam, pour les développeurs de la plateforme robotique.

## Le problème
Les clients et SDK de Viam doivent partager une définition d'API commune.

## Ce que ça fait vraiment
Contient les fichiers `.proto`. Les bibliothèques Go et web sont générées par la CI quand on ajoute le label `ready-for-protos`. Les outils sont gérés avec mise. Les versions s'importent par tag sémantique, jamais par hash.

## Comment c'est branché
```mermaid
graph LR
  A[fichiers .proto] --> B[label ready-for-protos]
  B --> C[CI github-actions]
  C --> D[libs Go et web générées]
  D --> E[tag sémantique]
```

## Essayer
```bash
curl https://mise.run | sh
mise trust
mise tasks
mise r -f buf
```

## Coût et pièges
Gratuit. Ne pas modifier les fichiers générés ; ne pas déplacer ni supprimer les tags de version.

## Ce que ce n'est pas
Pas un SDK ni un client : seulement les définitions. Intérêt nul sans la plateforme Viam.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : contrat d'API d'une plateforme robotique, utile seulement si tu intègres Viam.

