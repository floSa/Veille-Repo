---
schema: 1
depot: skypilot-org/skypilot
source_readme_sha: 02b7acf646787700
ecrite_le: 2026-09-28
nature: outil
deploiement: pip
prerequis: [compte à créer, GPU, Docker]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: adopter
---

# skypilot-org/skypilot

> Couche unique pour lancer des jobs IA sur Kubernetes, Slurm ou vingt clouds.

## Le problème
Chaque cloud a sa syntaxe, ses quotas GPU et ses pannes de capacité ; déplacer un entraînement
d'un fournisseur à l'autre veut dire réécrire tout l'outillage de lancement.

## Ce que ça fait vraiment
Une tâche est un YAML (ou une API Python) déclarant `resources`, `workdir`, `setup` et `run`.
`sky launch` cherche l'infra la moins chère et disponible, provisionne pods ou VM avec bascule
automatique en cas d'erreur de capacité, synchronise le workdir, installe les dépendances et
streame les logs. Autostop, binpacking et ordonnanceur intelligent maximisent l'usage du parc GPU.

## Comment c'est branché
```mermaid
flowchart LR
    Yaml[my_task.yaml] --> Launch[sky launch]
    Launch --> Optim[Choix infra + failover]
    Optim --> Prov[Provisionnement pods/VM]
    Prov --> Sync[Sync workdir]
    Sync --> Setup[setup puis run]
    Setup --> Logs[Logs streamés]
```

## Essayer
```bash
uv pip install "skypilot[kubernetes,aws,gcp,azure,oci,nebius,lambda,runpod,fluidstack,paperspace,cudo,ibm,scp,seeweb,shadeform,verda]"
git clone https://github.com/pytorch/examples.git ~/torch_examples
sky launch my_task.yaml
```

## Coût et pièges
BYOC : tout tourne dans vos comptes, vos VPC, vos clusters — la facture GPU reste la vôtre.
L'exemple du README demande huit A100. Il faut des accès cloud configurés pour chaque provider activé.

## Ce que ce n'est pas
Pas un fournisseur de GPU : SkyPilot ne vend pas de capacité, il orchestre la vôtre.
Pas un remplaçant de Kubernetes mais une couche au-dessus. Aucune licence dans le README.

## Alternatives
- **Slurm** : ordonnanceur classique, cité comme référence d'ergonomie, sans multi-cloud.
- **Kubernetes vanilla** : comparé explicitement par le projet, plus verbeux pour l'IA.

## Pour toi
Le bon point d'entrée si tu jongles entre un cluster K8s interne et des GPU loués au spot.
