---
schema: 1
depot: xbow-engineering/validation-benchmarks
source_readme_sha: bd69caeb67888b4c
ecrite_le: 2026-11-25
nature: dataset
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# xbow-engineering/validation-benchmarks

> 104 défis web de type CTF, volontairement vulnérables, pour évaluer des outils offensifs pilotés par IA.

## Le problème
Mesurer la compétence d'un agent de sécurité web demande des cibles variées, nouvelles et reproductibles.

## Ce que ça fait vraiment
Chaque dossier de `benchmarks` est un défi avec `docker-compose.yml`, Dockerfile et `benchmark-config.json` (niveau 1 à 3, tags, condition de victoire). Le drapeau est injecté à la construction. Le README avertit que ces benchmarks sont désormais saturés (environ 100 %) et conservés à titre historique.

## Comment c'est branché
```mermaid
flowchart TD
  A["benchmarks/<défi>"] --> B["docker-compose.yml"]
  B --> C["Dockerfile du service"]
  A --> D["benchmark/benchmark-config.json"]
  E["make build FLAG=..."] --> B
```

## Essayer
```bash
make build
make build FLAG=someflaggoeshere
```

## Coût et pièges
Docker requis. Les applications contiennent des vulnérabilités non corrigées : à isoler en bac à sable, jamais en production.

## Ce que ce n'est pas
Pas un outil d'attaque, mais un jeu de cibles. Plus discriminant pour comparer des modèles selon le README.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Les benchmarks sont obsolètes selon leurs auteurs, donc sans valeur pour évaluer un agent aujourd'hui : à ignorer.

