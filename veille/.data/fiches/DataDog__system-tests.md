---
schema: 1
depot: DataDog/system-tests
source_readme_sha: 90b71a1f138bfb6a
ecrite_le: 2026-10-29
nature: outil
deploiement: docker
prerequis: [Docker, version de Python, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# DataDog/system-tests

> Banc de test boîte noire qui exécute les mêmes tests sur les bibliothèques de tracing Datadog de dix langages.

## Le problème
Garantir qu'une fonctionnalité de traçage se comporte pareil en Java, Python, Node, PHP, Ruby, Go et autres.

## Ce que ça fait vraiment
Un scénario lance des conteneurs : application de test (weblog) instrumentée, agent de test, proxy qui intercepte le trafic, backend simulé. Des validateurs vérifient traces et signaux aux interfaces. Scénarios paramétriques, OpenTelemetry, AppSec, SSI/Kubernetes.

## Comment c'est branché
```mermaid
flowchart LR
  A[pytest.py] --> B[endtoend.py]
  B --> C[containers.py]
  C --> D[_weblog.py]
  C --> E[_test_agent.py]
  E --> F[core.py proxy]
  F --> G[_backend.py]
```

## Essayer
```bash
./build.sh python
./run.sh
./run.sh SCENARIO_NAME
```

## Coût et pièges
Docker 20.10+, Python 3.12 ; Kubernetes (Kind/Minikube) et AWS/Pulumi pour certains scénarios.

## Ce que ce n'est pas
Pas un outil de test générique : il cible les traceurs Datadog.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : le patron « mêmes tests, plusieurs implémentations, conteneurs et proxy » est réutilisable pour tester des clients multi-langages.

