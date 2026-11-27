# skypilot-org/skypilot

> A single layer to launch AI jobs on Kubernetes, Slurm or twenty clouds.

## The problem
Each cloud has its own syntax, GPU quotas and capacity outages; moving a training run
from one provider to another means rewriting all the launch tooling.

## What it actually does
A task is a YAML (or a Python API) declaring `resources`, `workdir`, `setup` and `run`.
`sky launch` looks for the cheapest available infrastructure, provisions pods or VMs with automatic
failover on capacity errors, syncs the workdir, installs dependencies and
streams the logs. Autostop, bin-packing and a smart scheduler maximise use of the GPU fleet.

## How it is wired
```mermaid
flowchart LR
    Yaml[my_task.yaml] --> Launch[sky launch]
    Launch --> Optim[Choix infra + failover]
    Optim --> Prov[Provisionnement pods/VM]
    Prov --> Sync[Sync workdir]
    Sync --> Setup[setup puis run]
    Setup --> Logs[Logs streamés]
```

## Trying it
```bash
uv pip install "skypilot[kubernetes,aws,gcp,azure,oci,nebius,lambda,runpod,fluidstack,paperspace,cudo,ibm,scp,seeweb,shadeform,verda]"
git clone https://github.com/pytorch/examples.git ~/torch_examples
sky launch my_task.yaml
```

## Cost and gotchas
BYOC: everything runs in your accounts, your VPCs, your clusters — the GPU bill stays yours.
The README example asks for eight A100s. Cloud access must be configured for each enabled provider.

## What it is not
Not a GPU provider: SkyPilot does not sell capacity, it orchestrates yours.
Not a replacement for Kubernetes but a layer on top. No license in the README.

## Alternatives
- **Slurm**: classic scheduler, cited as the ergonomics reference, without multi-cloud.
- **Vanilla Kubernetes**: explicitly compared by the project, more verbose for AI.

## For you
The right entry point if you juggle an internal K8s cluster and GPUs rented on spot.
