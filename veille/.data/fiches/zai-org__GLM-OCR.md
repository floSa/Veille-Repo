---
schema: 1
depot: zai-org/GLM-OCR
source_readme_sha: 9ac38aea0e14e24e
ecrite_le: 2026-09-29
nature: modèle
deploiement: pip
prerequis: [GPU, clé d'API, version de Python]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: adopter
---

# zai-org/GLM-OCR

> Modèle OCR de 0,9 milliard de paramètres et SDK pour lire des documents complexes.

## Le problème
Extraire texte, tableaux et formules de documents réels avec un modèle léger et déployable.

## Ce que ça fait vraiment
Pipeline en deux temps : détection de mise en page (PP-DocLayout-V3) puis reconnaissance en parallèle, sortie Markdown ou JSON. SDK Python et CLI, service Flask, déploiement via vLLM, SGLang, Ollama ou MLX. Le README revendique 94,62 sur OmniDocBench V1.5 (mesure des auteurs). Mode cloud MaaS Zhipu sans GPU.

## Comment c'est branché
```mermaid
graph LR
  I[PDF / image] --> PL[PageLoader]
  PL --> LD[PPDocLayoutDetector]
  LD --> OC[OCRClient]
  OC --> M[vLLM / SGLang ou MaaS]
  OC --> RF[ResultFormatter]
```

## Essayer
```bash
pip install glmocr
pip install "glmocr[selfhosted]"
glmocr parse examples/source/code.png
python -m glmocr.server
```

## Coût et pièges
Le mode MaaS demande une clé sur open.bigmodel.cn (facturation non détaillée). L'auto-hébergement suppose un GPU et vLLM ≥ 0.19 ou SGLang ≥ 0.5.10.

## Ce que ce n'est pas
Ne remplace pas une vérification humaine des extractions critiques.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Adopter : OCR documentaire léger, déployable en local, pertinent pour des pipelines RAG et d'extraction ; tester sur tes propres documents.

