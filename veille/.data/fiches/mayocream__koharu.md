---
schema: 1
depot: mayocream/koharu
source_readme_sha: 694dd197f085b86a
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [GPU]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# mayocream/koharu

> Une application de bureau qui traduit les mangas en local : détection, OCR, inpainting et LLM.

## Le problème
Traduire un manga page par page à la main oblige à effacer le texte, le retaper et le recomposer.

## Ce que ça fait vraiment
Pipeline sélectionnable : détection des bulles et masques, OCR (PaddleOCR VL, Manga OCR…), effacement par inpainting (FLUX.2 Klein, LaMa, AOT GAN), traduction par LLM local GGUF (Gemma, Qwen, Ministral, LFM) ou fournisseurs distants (OpenAI, Gemini, Claude, DeepL…). Canvas WebGPU pour retouche, export PSD par calques, mode agent.

## Comment c'est branché
```mermaid
flowchart LR
  A[Next.js UI] --> B[Tauri IPC / HTTP server]
  B --> C[koharu-ml inference]
  B --> D[koharu-renderer]
  B --> E[koharu-runtime CUDA/Metal]
  C --> F[Hugging Face Hub]
  B --> G[Projets .khr et cache]
```

## Essayer
```bash
winget install koharu
brew install --cask koharu
bun install
bun dev
```
Prérequis dev : Rust, Bun, LLVM. Le README est tronqué par endroits (section de lancement incomplète).

## Coût et pièges
Gratuit en local ; GPU CUDA, ROCm, Metal ou Vulkan recommandé, CPU nettement plus lent. Modèles téléchargés depuis Hugging Face. Fournisseurs distants facturés chez toi.

## Ce que ce n'est pas
Pas un service en ligne : tout tourne chez toi. Pas pour un usage hors manga. Des modèles « uncensored » sont proposés, à vérifier selon tes règles.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : exemple complet de chaîne ML locale (détection, OCR, inpainting, LLM quantifié) intéressant à lire, sans usage métier évident.

