---
schema: 1
depot: thunlp/LLMxMapReduce
source_readme_sha: 1c5908680b96edb6
ecrite_le: 2026-11-05
nature: outil
deploiement: pip
prerequis: [clé d'API, version de Python, service tiers]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: communauté
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# thunlp/LLMxMapReduce

> Cadre diviser-pour-régner pour que les LLM lisent de très longues entrées et génèrent des synthèses, pour la recherche.

## Le problème
Les LLM intègrent mal de très grands volumes de sources pour produire un long texte cohérent (long-vers-long).

## Ce que ça fait vraiment
- V1 : protocole d'information structuré et calibration de confiance (MiniCPM3-4B).
- V2 : mise à l'échelle au test par couches de convolution, derrière SurveyGO.
- V3 : système multi-agent modulaire pour générer des états de l'art.
- Pipeline V2 : un sujet ou vos propres papiers en entrée, un rapport Markdown en sortie.

## Comment c'est branché
Pas de diagramme fourni. Le flux décrit : entrée (sujet ou `.jsonl` de papiers) → `scripts/pipeline_start.sh` → rapport dans `./output/md`. Le détail interne n'est pas documenté.

## Essayer
```bash
cd LLMxMapReduce_V2
conda create -n llm_mr_v2 python=3.11
conda activate llm_mr_v2
pip install -r requirements.txt
python -m playwright install --with-deps chromium
bash scripts/pipeline_start.sh TOPIC output_file_path.jsonl
```

## Coût et pièges
Clés OpenAI ou Google, et SerpAPI pour le crawl. Gros volume d'appels et de concurrence : modèles locaux déconseillés, Gemini Flash recommandé. L'évaluation consomme beaucoup de jetons.

## Ce que ce n'est pas
Pas un outil prêt à l'emploi léger : les autres modèles que Gemini Flash peuvent produire des erreurs inconnues. Les scores sont ceux des auteurs sur SurveyEval.

## Alternatives
- AutoSurvey : comparé dans le tableau, moins bon sur précision et rappel selon les auteurs.

## Pour toi
À surveiller : intéressant pour la génération de revues de littérature, mais coûteux en API et fragile hors Gemini ; dernier push en mars 2026.

