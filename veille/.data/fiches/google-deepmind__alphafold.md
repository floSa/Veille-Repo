---
schema: 1
depot: google-deepmind/alphafold
source_readme_sha: 39a82c6f8ecfaf16
ecrite_le: 2026-09-29
nature: outil
deploiement: docker
prerequis: [GPU, Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# google-deepmind/alphafold

> Pipeline d'inférence AlphaFold v2 pour prédire la structure 3D de protéines à partir de leur séquence.

## Le problème
Obtenir une structure de protéine ou de complexe sans passer par cristallographie ou cryo-EM, à partir de la seule séquence FASTA.

## Ce que ça fait vraiment
`run_docker.py` prend un fichier FASTA, cherche des alignements multiples dans des bases génétiques (BFD, MGnify, PDB70, UniRef…), produit des caractéristiques, exécute le réseau (Evoformer puis module de structure) puis relaxe par minimisation Amber. Sorties : modèles PDB classés par pLDDT, `features.pkl`, `timings.json`. Modes monomère, monomère pTM et multimère.

## Comment c'est branché
```mermaid
flowchart LR
  F["FASTA"] --> M["MSA Tools (alphafold/data)"]
  M --> P["Feature Processing"]
  P --> E["Evoformer Module"]
  E --> G["Geometry / Structure"]
  G --> R["Relaxation (alphafold/relax)"]
  R --> O["Output PDB + JSON"]
```

## Essayer
```bash
git clone https://github.com/deepmind/alphafold.git
scripts/download_all_data.sh <DOWNLOAD_DIR>
docker build -f docker/Dockerfile -t alphafold .
pip3 install -r docker/requirements.txt
python3 docker/run_docker.py --fasta_paths=your_protein.fasta --max_template_date=2022-01-01 --data_dir=$DOWNLOAD_DIR --output_dir=/home/user/absolute_path_to_the_output_dir
```

## Coût et pièges
Linux seulement, GPU NVIDIA moderne et Docker avec NVIDIA Container Toolkit. Bases : environ 556 Go à télécharger, 2,62 To décompressés ; SSD conseillé. Poids sous licence CC BY 4.0, distincte du code Apache-2.0. Le temps de prédiction explose avec la taille (près de 5,2 h pour 5 000 résidus sur A100).

## Ce que ce n'est pas
Pas un service prêt à l'emploi ni un outil de conception de protéines. Le script est optimisé pour une protéine à la fois ; aucun script d'inférence en masse n'est fourni.

## Alternatives
Le README mentionne des versions simplifiées maintenues par la communauté et des installations Singularity tierces, sans les nommer précisément.

## Pour toi
Surveiller : référence en repliement de protéines, mais matériel et stockage lourds ; ne vaut l'effort que si la bio-informatique fait partie de ton périmètre.

