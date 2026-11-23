---
schema: 1
depot: google-research/paper-orchestra
source_readme_sha: 6d48d5b964cb09e8
ecrite_le: 2026-11-23
nature: outil
deploiement: pip
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# google-research/paper-orchestra

> Pipeline multi-agents qui transforme des notes et logs d'expériences en manuscrit LaTeX d'article scientifique.

## Le problème
Passer d'idées et de résultats bruts à un article formaté pour une conférence (plan, bibliographie, sections, figures) est long.

## Ce que ça fait vraiment
Une CLI et une démo Streamlit lancent un orchestrateur qui enchaîne des agents : plan, revue de littérature via Semantic Scholar, rédaction de sections, raffinement guidé par une revue automatique, et en option génération de figures. Il produit du LaTeX selon des gabarits de conférence. Le jeu de données n'est pas fourni (publication ultérieure annoncée).

## Comment c'est branché
```mermaid
flowchart TD
    CLI["paper_writing_cli.py"] --> Writer["Paper writer - paper_writer.py"]
    Writer --> Outline["outline_agent.py"]
    Writer --> Lit["literature_review_agent.py"]
    Writer --> Sec["section_writing_agent.py"]
    Writer --> Ref["content_refinement_agent.py"]
    Lit --> Scholar["scholar_utils.py"]
    Writer --> Latex["Manuscrit LaTeX"]
```

## Essayer
```bash
conda create -n paper_orchestra python=3.11
conda activate paper_orchestra
pip install -r requirements.txt
./paper_writing_cli.sh
python paper_writing_cli.py --raw_materials_dir /path_to_your_raw_materials/ \
  --latex_template_dir /path_to_your_latex_template/ \
  --output_dir /path_to_your_output_folder/ --use_plotting true
```

## Coût et pièges
Clés à fournir dans `.env` : Semantic Scholar, Gemini (ou Vertex AI) ou OpenAI. Chaque article déclenche de nombreux appels de modèles, donc une facture variable. Les identifiants SMTP sont optionnels pour la démo.

## Ce que ce n'est pas
Pas un produit Google officiel (mention explicite). Ne garantit ni exactitude des références ni qualité scientifique : relecture humaine obligatoire.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller comme référence de pipeline multi-agents de rédaction ; utilisable en recherche, sans le jeu de données d'évaluation.

