---
schema: 1
depot: prometheus/node_exporter
source_readme_sha: 596da9c08a087d2d
ecrite_le: 2026-09-21
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# prometheus/node_exporter

> Exporteur Prometheus des métriques matérielles et système des noyaux \*NIX.

## Le problème
Prometheus ne sait rien du système sur lequel il tourne : CPU, mémoire, disque, réseau et capteurs
doivent être exposés par quelqu'un.

## Ce que ça fait vraiment
Écrit en Go, il écoute par défaut sur le port HTTP 9100 et expose les métriques via des collecteurs
enfichables. Beaucoup sont actifs par défaut (`cpu`, `meminfo`, `diskstats`, `filesystem`, `netdev`,
`hwmon`, `pressure`, `thermal_zone`, `zfs`…), d'autres désactivés parce que coûteux ou à forte
cardinalité (`perf`, `processes`, `systemd`, `tcpstat`, `slabinfo`). Les collecteurs s'activent par
`--collector.` et se filtrent par des drapeaux include/exclude. Le collecteur `textfile` lit des
fichiers `*.prom` locaux pour publier des métriques de tâches batch.

## Comment c'est branché
```mermaid
flowchart LR
  proc[/proc et /sys] --> coll[collecteurs]
  txt[répertoire textfile *.prom] --> coll
  coll --> http[endpoint :9100/metrics]
  http --> prom[serveur Prometheus]
  flags[--collector.* / exclude] --> coll
  tls[web.config.file] --> http
```

## Essayer
```bash
docker run -d \
  --net="host" \
  --pid="host" \
  -v "/:/host:ro,rslave" \
  quay.io/prometheus/node-exporter:latest \
  --path.rootfs=/host
```
```bash
git clone https://github.com/prometheus/node_exporter.git
cd node_exporter
make build
./node_exporter
```

## Coût et pièges
Gratuit. En conteneur il faut `--net=host`, `--pid=host`, le bind-mount de `/` et `--path.rootfs`,
sinon tu mesures le conteneur au lieu de l'hôte ; le collecteur `timex` peut réclamer
`--cap-add=SYS_TIME`. Activer un collecteur désactivé se fait un à la fois, hors production
d'abord, en surveillant `scrape_duration_seconds`. Le support TLS est marqué EXPERIMENTAL.

## Ce que ce n'est pas
Ce n'est pas pour Windows — le Windows exporter est recommandé — ni pour les GPU NVIDIA, où c'est
`dcgm-exporter`. Ce n'est pas une Pushgateway : le collecteur `textfile` sert aux métriques liées à
une machine, pas aux métriques de service. Les collecteurs `ntp`, `runit` et `supervisord` sont
dépréciés.

## Alternatives
- Windows exporter : recommandé pour les hôtes Windows.
- NVIDIA/dcgm-exporter : pour exposer les métriques GPU.
- Pushgateway : pour les métriques de niveau service plutôt que machine.

## Pour toi
Brique de base sous toute plateforme de données auto-hébergée : c'est ce qui te dira que le disque
de ton nœud d'entraînement est plein avant que le job ne meure.
