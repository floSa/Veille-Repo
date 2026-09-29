---
schema: 1
depot: icereed/paperless-gpt
source_readme_sha: 8dd09347afc9b009
ecrite_le: 2026-09-28
nature: outil
deploiement: docker
prerequis: [Docker, service tiers, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# icereed/paperless-gpt

> Compagnon de paperless-ngx qui génère titres, tags et OCR assisté par LLM, pour auto-hébergeurs.

## Le problème
Trier à la main des centaines de documents scannés prend des heures.
L'OCR classique échoue sur les scans de mauvaise qualité, les mises en page complexes et le manuscrit.

## Ce que ça fait vraiment
OCR renforcé par LLM (OpenAI, Ollama, Mistral, Anthropic), ou services dédiés : Google Document AI,
Azure Document Intelligence, serveur Docling auto-hébergé.
Génère titres, tags, date de création, correspondants, et remplit des champs personnalisés selon
trois modes d'écriture (append, update, replace). Produit des PDF cherchables avec couche de texte
transparente positionnée par mot, via hOCR. Prompts modifiables depuis l'UI web, revue manuelle
ou traitement automatique, analyse ad hoc d'une sélection de documents avec un prompt libre.

## Comment c'est branché
```mermaid
flowchart LR
  A[paperless-ngx API] --> B[paperless-gpt :8080]
  B --> C[OCR_PROVIDER llm / google_docai / azure / docling]
  C --> D[hOCR]
  D --> E[PDF couche de texte]
  E --> F[PDF_UPLOAD vers paperless-ngx]
  B --> G[LLM_PROVIDER titres / tags / champs]
  B --> H[/app/prompts UI web]
```

## Essayer
```bash
git clone https://github.com/icereed/paperless-gpt.git
mkdir prompts
docker build -t paperless-gpt .
docker run -d -e PAPERLESS_BASE_URL='http://your_paperless_ngx_url' -e PAPERLESS_API_TOKEN='your_paperless_api_token' -e LLM_PROVIDER='openai' -e LLM_MODEL='gpt-4o' -e OPENAI_API_KEY='your_openai_api_key' -v $(pwd)/prompts:/app/prompts -p 8080:8080 paperless-gpt
```

## Coût et pièges
Aucune authentification intégrée : l'UI et `/api/*` sont ouverts à qui atteint le port, et par défaut
il écoute sur toutes les interfaces — donc reverse proxy authentifié, VPN ou rien.
Facture LLM ou Document AI à ta charge. `PDF_REPLACE: "true"` supprime l'original après upload,
irréversible. La génération de couche de texte et le hOCR ne marchent qu'avec Google Document AI.
`OCR_LIMIT_PAGES` ne s'applique pas en mode `whole_pdf`.

## Ce que ce n'est pas
Ce n'est pas un gestionnaire de documents : il ne fonctionne qu'accroché à une instance paperless-ngx.
Ce n'est pas un chat sur tes documents — le README se démarque justement de ça.
La copie de métadonnées est partielle : ID, date d'ajout, date de modification, notes et champs
d'autres plugins ne suivent pas.

## Alternatives
Docling, cité comme alternative auto-hébergée aux OCR cloud ; Google Document AI, seul à permettre
les PDF cherchables ; Azure Document Intelligence pour du volume sur documents structurés.

## Pour toi
Solide si tu auto-héberges paperless-ngx, mais mets-le derrière une authentification avant tout le reste.
