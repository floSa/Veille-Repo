---
schema: 1
depot: TwiN/gatus
source_readme_sha: e1156f61879dcac5
ecrite_le: 2026-09-28
nature: service
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# TwiN/gatus

> Tableau de bord de santé auto-hébergé qui sonde vos services et alerte, pour développeurs et petites équipes.

## Le problème
Les métriques ne remontent un incident que s'il y a du trafic : si personne n'appelle l'endpoint, rien ne se déclenche.
Résultat, ce sont les clients qui vous apprennent que le load balancer est tombé.

## Ce que ça fait vraiment
Interroge des endpoints en HTTP, ICMP, TCP, DNS ou SSH à intervalle choisi, et évalue des conditions sur le résultat.
Les conditions portent sur `[STATUS]`, `[RESPONSE_TIME]`, `[BODY]` avec chemin JSON ou motif, l'IP, l'expiration de certificat.
Les endpoints externes sont poussés par vous (`gatus-cli external-endpoint push` ou `POST /api/v1/endpoints/{key}/external`), avec heartbeat facultatif.
Les suites (ALPHA) enchaînent des endpoints avec un contexte partagé : `store` capture une valeur, `[CONTEXT].itemId` la réutilise.

## Comment c'est branché
```mermaid
flowchart TD
  A[config/config.yaml ou GATUS_CONFIG_PATH] --> B[endpoints + conditions]
  B --> C[sondes HTTP/ICMP/TCP/DNS/SSH]
  C --> D[évaluation des conditions]
  D --> E[alerting Slack/PagerDuty/Discord…]
  D --> F[dashboard + badges]
  D --> G[/metrics Prometheus]
  H[external-endpoints token] --> D
  I[suites contexte partagé] --> C
```

## Essayer
```console
docker run -p 8080:8080 --name gatus ghcr.io/twin/gatus:stable
docker run -p 8080:8080 --name gatus twinproduction/gatus:stable
gatus-cli external-endpoint push --url https://status.example.org --key "core_ext-ep-test" --token "potato" --success
```

## Coût et pièges
Gratuit, un conteneur suffit. Configuration en YAML, fusionnable par répertoire — mais une valeur primitive ne peut être définie qu'une fois, sinon conflit.
Un `$` dans une valeur doit s'écrire `$$`. `concurrency` vaut 3 par défaut, ce qui sérialise les sondes si vous en avez beaucoup.

## Ce que ce n'est pas
Pas un système de métriques : il expose `/metrics` mais ne remplace ni Prometheus ni Alertmanager, il couvre leur angle mort.
Pas un outil de tests d'acceptation à part entière, même si le README suggère cet usage via les conditions.
Les suites sont en ALPHA et les alertes au niveau suite ne sont pas encore supportées.

## Alternatives
- Prometheus Alertmanager, CloudWatch, Splunk : cités comme le point de comparaison, aveugles en l'absence de trafic.
- Gatus.io : l'offre gérée du même auteur, si vous ne voulez pas héberger.

## Pour toi
Le bon réflexe pour surveiller tes endpoints d'inférence et tes webhooks : conditions lisibles, conteneur unique.
