---
schema: 1
depot: pulumi/pulumi-hcloud
source_readme_sha: f38292847a56e881
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [clé d'API, compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# pulumi/pulumi-hcloud

> Fournisseur Pulumi pour piloter les ressources Hetzner Cloud en code, en plusieurs langages.

## Le problème
Décrire des serveurs Hetzner Cloud dans le même langage de programmation que le reste de l'infrastructure.

## Ce que ça fait vraiment
Expose les ressources Hetzner Cloud à Pulumi via des paquets Node.js, Python, Go et .NET. Se configure par un jeton d'API (`hcloud:token` ou `HCLOUD_TOKEN`), un endpoint et un intervalle de polling (500 ms par défaut).

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A["Programme Pulumi"] --> B["SDK pulumi-hcloud"]
  B --> C["Fournisseur HCloud"]
  C --> D["API Hetzner Cloud"]
```

## Essayer
```bash
npm install @pulumi/hcloud
pip install pulumi-hcloud
go get github.com/pulumi/pulumi-hcloud/sdk
dotnet add package Pulumi.HCloud
```

## Coût et pièges
Pulumi CLI à installer d'abord, compte Hetzner et jeton d'API. Les ressources créées sont facturées par Hetzner. Augmenter `pollInterval` en cas de limitation de débit.

## Ce que ce n'est pas
Pas un outil autonome : il ne marche qu'avec la CLI Pulumi. Pas de documentation détaillée dans le README.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Surveiller : pratique si tu héberges tes charges IA sur Hetzner avec Pulumi, sinon sans intérêt.

