# graphhopper/graphhopper

> A Java route-calculation engine on OpenStreetMap, for those integrating routing into an application.

## The problem
Computing distance, duration and instructions between points on real roads requires a graph engine, or a paid API.

## What it actually does
It loads OpenStreetMap data (osm or pbf) and GTFS, then computes routes, alternatives, isochrones, shortest-path trees and map matching of GPX traces. The speed (Contraction Hierarchies), hybrid and flexible modes trade off speed and flexibility. It runs as a Java library or as a web server with a Maps interface.

## How it is wired
Simplified diagram based on the fiche, no diagram provided.
```mermaid
flowchart LR
  A["OpenStreetMap / GTFS"] --> B["Import du graphe"]
  B --> C["Contraction Hierarchies"]
  C --> D["Serveur web (port 8989)"]
  D --> E["GraphHopper Maps"]
```

## Trying it
```bash
wget https://repo1.maven.org/maven2/com/graphhopper/graphhopper-web/11.1/graphhopper-web-11.1.jar \
  https://raw.githubusercontent.com/graphhopper/graphhopper/11.x/config-example.yml \
  http://download.geofabrik.de/europe/germany/berlin-latest.osm.pbf
java -D"dw.graphhopper.datareader.file=berlin-latest.osm.pbf" -jar graphhopper*.jar server config-example.yml
```

## Cost and gotchas
Free when self-hosted; a recent JVM is needed (Java 25 or later according to the README). Graph preparation consumes time and memory; the commercial Directions API offer exists. The Java requirement has no dedicated value in the prerequisites.

## What it is not
Not a complete mapping service: you must supply the OSM data. Offline mobile support is no longer official.

## Alternatives
- GraphHopper Directions API: commercial offering of the same engine, with no hosting on your side.

## For you
Keep an eye on it: useful for geospatial features (travel times, isochrones) in data work, but heavy to host if the need is occasional.
