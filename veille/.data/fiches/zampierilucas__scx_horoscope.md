---
schema: 1
depot: zampierilucas/scx_horoscope
source_readme_sha: 84e19c6265aef634
ecrite_le: 2026-11-25
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# zampierilucas/scx_horoscope

> Planificateur CPU Linux sched_ext fondé sur les positions planétaires, pensé pour l'humour et la pédagogie.

## Le problème
Aucun, au sens strict : c'est une démonstration humoristique de ce que permet sched_ext, pour conférences et hackathons.

## Ce que ça fait vraiment
Charge dans le noyau un ordonnanceur eBPF qui classe les tâches par domaine planétaire, applique des bonus ou malus selon les éléments du zodiaque, et divise par deux le quantum en cas de rétrograde. Les positions viennent de la crate `astro`. Les durées sont recalculées toutes les 60 s par défaut. Le README précise qu'il tourne de façon stable mais le déconseille en production.

## Comment c'est branché
```mermaid
flowchart TD
  A["main.bpf.c"] --> B["intf.h"]
  C["src/main.rs"] --> D["src/bpf.rs"]
  C --> F["src/astrology/scheduler.rs"]
  F --> G["src/astrology/planets.rs"]
  F --> H["src/astrology/tasks.rs"]
  I["build.rs"] --> E["src/bpf_skel.rs"]
```

## Essayer
```bash
cargo build --release
sudo target/release/scx_horoscope --cosmic-weather -v
sudo target/release/scx_horoscope --debug-decisions
```

## Coût et pièges
Gratuit. Noyau Linux 6.12 ou plus récent et droits root requis ; toolchain Rust nécessaire (non listée dans les prérequis). Aucune licence déclarée.

## Ce que ce n'est pas
Pas un ordonnanceur sérieux : « scientifiquement douteux » selon l'auteur, et sans licence claire.

## Alternatives
Aucune alternative nommée dans le README (il s'appuie sur scx_rustland_core).

## Pour toi
Ignorer : amusant pour comprendre sched_ext, mais sans valeur pour un profil data, IA ou MLOps et sans licence.

