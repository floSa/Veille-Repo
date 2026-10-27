---
schema: 1
depot: spring-projects/spring-petclinic
source_readme_sha: b53440fdf1a73969
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# spring-projects/spring-petclinic

> Application d'exemple Spring Boot de clinique vétérinaire, pour apprendre ou démontrer le framework.

## Le problème
Avoir un projet Spring Boot réaliste et exécutable sous la main pour tester une pile, un outil ou une formation.

## Ce que ça fait vraiment
Gère propriétaires, animaux, visites et liste de vétérinaires, rendus en pages Thymeleaf. Base H2 en mémoire par défaut ; profils MySQL et PostgreSQL disponibles. Tests d'intégration via Testcontainers (MySQL) et Docker Compose (Postgres).

## Comment c'est branché
```mermaid
flowchart LR
  U["Clinic user"] --> W["Owner / Pet / Visit pages"]
  W --> V["Thymeleaf views"]
  W --> R["Owner repository"]
  R --> D["Clinic database"]
  S["Spring Boot app"] --> W
```

## Essayer
```bash
git clone https://github.com/spring-projects/spring-petclinic.git
cd spring-petclinic
./mvnw spring-boot:run
```
Puis http://localhost:8080. Variante Gradle : `./gradlew bootRun`.

## Coût et pièges
Gratuit. Java 17+. Pas de Dockerfile : l'image se construit avec `./mvnw spring-boot:build-image`. Console H2 exposée sur `/h2-console`.

## Ce que ce n'est pas
Pas un modèle de production : c'est une démo. Les diapositives liées décrivent une version antérieure à Spring Boot.

## Alternatives
Aucune alternative nommée dans le README (les forks d'autres piles sont dans l'organisation spring-petclinic).

## Pour toi
Ignorer : aucun lien avec data/IA/MLOps, sauf si tu apprends Spring.

