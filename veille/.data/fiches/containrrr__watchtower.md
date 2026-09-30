---
schema: 1
depot: containrrr/watchtower
source_readme_sha: acbb0f2965339480
ecrite_le: 2026-09-30
nature: outil
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [archivé]
verdict: ignorer
---

# containrrr/watchtower

> Met à jour automatiquement les images de conteneurs Docker en cours d'exécution, pour homelabs.

## Le problème
Garder à jour les images de ses conteneurs demande de les tirer et de les relancer à la main.

## Ce que ça fait vraiment
Surveille les conteneurs sélectionnés, compare leurs images au registre (digest), puis arrête le conteneur et le relance avec les mêmes options. Analyses planifiées ou déclenchées par API HTTP, hooks de cycle de vie, rapports, métriques Prometheus et notifications.

## Comment c'est branché
```mermaid
flowchart LR
  CLI[root.go] --> S[Scan scheduler]
  API[api.go] --> U[update.go]
  S --> U
  U --> CH[check.go]
  CH --> R[registry.go]
  U --> DC[client.go Docker]
```

## Essayer
```bash
docker run --detach \
    --name watchtower \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
```

## Coût et pièges
Gratuit, mais monte le socket Docker. Dépôt archivé : le README déclare le projet non maintenu.

## Ce que ce n'est pas
Ce n'est pas un outil pour production : le README le déconseille et oriente vers Kubernetes, MicroK8s ou k3s.

## Alternatives
- Kubernetes, MicroK8s, k3s : recommandés par le README pour les environnements sérieux.

## Pour toi
Ignorer : archivé et non maintenu, il donne un accès au socket Docker sans aucun correctif futur.

