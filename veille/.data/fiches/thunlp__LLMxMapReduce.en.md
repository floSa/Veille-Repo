# thunlp/LLMxMapReduce

> Divide-and-conquer framework for LLMs to read very long inputs and generate syntheses, for research.

## The problem
LLMs struggle to integrate very large volumes of sources to produce a long, coherent text (long-to-long).

## What it actually does
- V1: structured information protocol and confidence calibration (MiniCPM3-4B).
- V2: test-time scaling through convolution layers, behind SurveyGO.
- V3: modular multi-agent system to generate state-of-the-art surveys.
- V2 pipeline: a topic or your own papers as input, a Markdown report as output.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  A["Sujet ou .jsonl de papiers"] --> B["scripts/pipeline_start.sh"]
  B --> C["Rapport Markdown dans ./output/md"]
```
No diagram provided. The described flow: input (a topic or a `.jsonl` of papers) → `scripts/pipeline_start.sh` → report in `./output/md`. The internal detail is not documented.

## Trying it
```bash
cd LLMxMapReduce_V2
conda create -n llm_mr_v2 python=3.11
conda activate llm_mr_v2
pip install -r requirements.txt
python -m playwright install --with-deps chromium
bash scripts/pipeline_start.sh TOPIC output_file_path.jsonl
```

## Cost and gotchas
OpenAI or Google keys, and SerpAPI for crawling. Large volume of calls and concurrency: local models not recommended, Gemini Flash recommended. Evaluation consumes a lot of tokens.

## What it is not
Not a lightweight ready-to-use tool: models other than Gemini Flash may produce unknown errors. The scores are the authors' own on SurveyEval.

## Alternatives
- AutoSurvey: compared in the table, worse on precision and recall according to the authors.

## For you
Worth watching: interesting for generating literature reviews, but costly in API calls and fragile outside Gemini; last push in March 2026.
