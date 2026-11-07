---
schema: 1
depot: MotiaDev/motia
source_readme_sha: 328fb448c5bf7d15
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: surveiller
---

# MotiaDev/motia

> Moteur « iii » qui compose files, cron, HTTP, état et agents en workers observables en temps réel.

## Le problème
Chaque brique d'un backend (queue, cron, agent, observabilité) arrive avec son intégration, ses réglages de reprise et ses traces séparés.

## Ce que ça fait vraiment
Le moteur (Rust) expose trois primitives : workers, triggers et fonctions. Un worker s'enregistre, déclare ses fonctions et leurs déclencheurs, et les autres workers peuvent l'appeler tout de suite. Les workers se déclarent dans `worker-compose.yaml` ou s'ajoutent à chaud, y compris par un agent. Des SDK existent pour Node, Python, Rust et Go.

## Comment c'est branché
```mermaid
flowchart TD
  Compose["worker-compose.yaml"] --> Engine["iii Engine (engine/)"]
  Engine --> Worker["Workers"]
  Worker --> Trigger["Triggers (HTTP, cron, queue)"]
  Trigger --> Func["Functions"]
  Agent["Agent (skills)"] --> Compose
```
Le diagramme fourni décrit l'ancien projet Motia (snap, workbench) et ne correspond plus au README : schéma tiré du README.

## Essayer
```bash
curl -fsSL https://install.iii.dev/iii/main/install.sh | sh
iii compose --namespace dev --up
iii trigger -n dev compose::add worker=queue
```

## Coût et pièges
Gratuit. L'installation passe par un script `curl | sh`. Le projet a changé de nom et de contenu : la documentation et le diagramme anciens induisent en erreur.

## Ce que ce n'est pas
Pas le framework Motia décrit par l'ancien diagramme. Pas une plateforme managée : tu fais tourner le moteur toi-même.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : idée séduisante d'un catalogue de fonctions appelables par des agents, mais licence non déclarée, renommage récent et maturité inconnue.

