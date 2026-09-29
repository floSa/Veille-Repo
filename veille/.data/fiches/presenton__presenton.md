---
schema: 1
depot: presenton/presenton
source_readme_sha: 04ef9a584841ee71
ecrite_le: 2026-09-28
nature: app
deploiement: docker
prerequis: [Docker, clé d'API, compte à créer]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [télémétrie, dépend d'un SaaS]
verdict: surveiller
---

# presenton/presenton

> Générateur de présentations auto-hébergé, sous Apache 2.0, exportant du PPTX réellement éditable.

## Le problème
Les générateurs de slides IA sont des SaaS fermés : données envoyées ailleurs, abonnement obligatoire,
export figé, et aucun moyen d'imposer sa charte ou son propre modèle.

## Ce que ça fait vraiment
Génère une présentation depuis un prompt, un document importé ou un PowerPoint servant de gabarit,
puis exporte en PPTX éditable ou PDF. Templates HTML/Tailwind personnalisables, serveur MCP intégré,
mémoire par présentation (Mem0 + Qdrant + SQLite local), génération d'images (Pexels, Pixabay, DALL-E 3,
Gemini Flash, ComfyUI), espaces multi-utilisateurs avec panneau d'administration. Fournisseurs de modèles
interchangeables : OpenAI, Gemini, Vertex, Azure, Bedrock, Anthropic, Ollama, LM Studio, endpoints compatibles.

## Comment c'est branché
```mermaid
flowchart LR
    Entree[Prompt ou document] --> FastAPI[Backend FastAPI]
    FastAPI --> LLM[Fournisseur LLM choisi]
    FastAPI --> Images[Fournisseur d'images]
    LLM --> Template[Template HTML/Tailwind]
    Images --> Template
    Template --> Export[PPTX / PDF]
    MCP[/mcp] --> FastAPI
```

## Essayer
```bash
docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest
```

## Coût et pièges
Apache 2.0 et BYOK : vous payez vos appels modèle et images. Télémétrie anonyme active par défaut,
à couper via `DISABLE_ANONYMOUS_TRACKING=true`. La galerie « Community » appelle un service cloud :
`PRESENTON_COMMUNITY_ENABLED=false` en environnement isolé. Offres Cloud et Enterprise séparées.

## Ce que ce n'est pas
Pas gratuit de bout en bout si vous n'hébergez pas le modèle. Pas un éditeur PowerPoint complet.
La surface de configuration est énorme (des dizaines de variables d'environnement) : le déploiement
propre demande du temps. README tronqué à la source : la partie API/MCP n'est pas complète ici.

## Alternatives
- **Ollama / LM Studio** comme backend local, si la confidentialité prime sur la qualité.

## Pour toi
Le seul candidat crédible pour industrialiser des decks sans envoyer les sources à un SaaS.
