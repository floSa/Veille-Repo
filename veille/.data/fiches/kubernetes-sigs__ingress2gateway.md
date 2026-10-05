---
schema: 1
depot: kubernetes-sigs/ingress2gateway
source_readme_sha: a3ac1849b9e8e624
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# kubernetes-sigs/ingress2gateway

> CLI qui convertit des ressources Ingress Kubernetes et CRD de fournisseurs en ressources Gateway API.

## Le problème
Migrer d'Ingress vers Gateway API à la main est long et sujet aux oublis, surtout avec des annotations propres à chaque contrôleur.

## Ce que ça fait vraiment
Lit des Ingress depuis un cluster ou des fichiers, les convertit via des providers en représentation intermédiaire, puis un emitter (standard par défaut) produit Gateway et HTTPRoute en YAML, JSON ou KYAML. Signale les champs non traduits. Providers documentés : ingress-nginx, gce, openapi3, entre autres.

## Comment c'est branché
```mermaid
flowchart LR
  M["main.go"] --> PR["Print command (print.go)"]
  PR --> R["Conversion runner (ingress2gateway.go)"]
  R --> PV["Provider selection (provider.go)"]
  PV --> C["Common conversion (converter.go)"]
  C --> E["Standard emitter (standard.go)"]
  E --> RP["Conversion report (report.go)"]
```

## Essayer
```bash
brew install ingress2gateway
ingress2gateway print --providers=ingress-nginx
```

## Coût et pièges
Gratuit. Les annotations très spécifiques peuvent ne pas être prises en charge ; relire la sortie avant d'appliquer.

## Ce que ce n'est pas
Ne copie pas les annotations d'Ingress vers Gateway API et n'applique rien au cluster : il imprime sur la sortie standard.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu migres un cluster qui sert des modèles : outil officiel d'un sous-projet Kubernetes, simple, à relire avant déploiement.

