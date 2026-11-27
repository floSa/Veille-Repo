# prometheus/node_exporter

> Prometheus exporter for hardware and OS metrics of \*NIX kernels.

## The problem
Prometheus knows nothing about the system it runs on: CPU, memory, disk, network and sensors
must be exposed by someone.

## What it actually does
Written in Go, it listens by default on HTTP port 9100 and exposes metrics through pluggable
collectors. Many are enabled by default (`cpu`, `meminfo`, `diskstats`, `filesystem`, `netdev`,
`hwmon`, `pressure`, `thermal_zone`, `zfs`…), others disabled because they are costly or high
cardinality (`perf`, `processes`, `systemd`, `tcpstat`, `slabinfo`). Collectors are enabled with
`--collector.` and filtered with include/exclude flags. The `textfile` collector reads local
`*.prom` files to publish metrics from batch jobs.

## How it is wired
```mermaid
flowchart LR
  proc[/proc et /sys] --> coll[collecteurs]
  txt[répertoire textfile *.prom] --> coll
  coll --> http[endpoint :9100/metrics]
  http --> prom[serveur Prometheus]
  flags[--collector.* / exclude] --> coll
  tls[web.config.file] --> http
```

## Trying it
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

## Cost and gotchas
Free. In a container you need `--net=host`, `--pid=host`, the bind-mount of `/` and `--path.rootfs`,
otherwise you measure the container instead of the host; the `timex` collector may require
`--cap-add=SYS_TIME`. Enable a disabled collector one at a time, outside production
first, watching `scrape_duration_seconds`. TLS support is marked EXPERIMENTAL.

## What it is not
Not for Windows (the Windows exporter is recommended) nor for NVIDIA GPUs, where you want
`dcgm-exporter`. It is not a Pushgateway: the `textfile` collector is for machine-bound metrics,
not service-level metrics. The `ntp`, `runit` and `supervisord` collectors are
deprecated.

## Alternatives
- Windows exporter: recommended for Windows hosts.
- NVIDIA/dcgm-exporter: to expose GPU metrics.
- Pushgateway: for service-level metrics rather than machine-level ones.

## For you
Foundation block under any self-hosted data platform: it is what tells you the disk
of your training node is full before the job dies.
