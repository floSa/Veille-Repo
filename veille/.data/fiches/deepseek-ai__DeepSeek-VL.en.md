# deepseek-ai/DeepSeek-VL

> Family of open vision-language models (1.3 and 7 billion parameters) for understanding images, diagrams and documents.

## The problem
Querying an image in natural language (diagram, web page, formula, scientific document) requires a multimodal model and the code to load it.

## What it actually does
Four checkpoints are published (1.3B and 7B, base and chat, sequence length 4096) on Hugging Face. The repository provides a `deepseek_vl` package: a conversation processor (`VLChatProcessor`), three vision encoders (CLIP, SigLIP-ViT, SAM), a projector and the language model. Two interfaces: a command-line chat and a Gradio demo.

## How it is wired
```mermaid
flowchart LR
  U["User"] --> C["CLI Chat Module / Gradio Main App"]
  C --> P["VLChatProcessor"]
  P --> V["CLIP / SigLIP-ViT / SAM Encoders"]
  V --> M["Modeling VLM + Feature Projector"]
  M --> T["HuggingFace Transformers & Hub"]
```

## Trying it
```bash
pip install -e .
python cli_chat.py --model_path "deepseek-ai/deepseek-vl-7b-chat"
pip install -e .[gradio]
python deepseek_vl/serve/app_deepseek.py
```

## Cost and gotchas
Free, but the example loads the model in bfloat16 on GPU (`.cuda()`), with `trust_remote_code=True`. The README says commercial use is allowed under the conditions of the License section, which is absent from the excerpt read: read those conditions for the weights.

## What it is not
It is not a recent model: the repository has been frozen since April 2024 (last push on 24 April 2024) and the README mentions no evolution. Nor is it an optimized inference library: the example is a basic `transformers` script.

## Alternatives
No alternative cited in the README.

## For you
Ignore for a new project: repository frozen since 2024 and GPU example, to consult only for the encoders + projector assembly.
