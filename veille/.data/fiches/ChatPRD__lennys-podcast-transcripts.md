---
schema: 1
depot: ChatPRD/lennys-podcast-transcripts
source_readme_sha: 6149f6cf9b46f85f
ecrite_le: 2026-11-07
nature: dataset
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: surveiller
---

# ChatPRD/lennys-podcast-transcripts

> Archive de 269 transcriptions du podcast de Lenny, en Markdown, prête pour assistants IA et RAG.

## Le problème
Exploiter des centaines d'heures de podcast produit demande des transcriptions propres et structurées.

## Ce que ça fait vraiment
Un dossier par invité avec `transcript.md` et un en-tête YAML (titre, date, durée, URL YouTube). Un index de plus de 50 thèmes, généré avec le CLI Claude, aide à naviguer. Le script `build-index.sh` le régénère. Le README liste de nombreux projets bâtis dessus (RAG, MCP, graphes).

## Comment c'est branché
```mermaid
flowchart LR
  A[episodes/invité/transcript.md] --> B[scripts/build-index.sh]
  B --> C[Claude CLI]
  C --> D[index/*.md]
  D --> E[index/README.md]
```

## Essayer
```bash
grep -r "product-market fit" episodes/
./scripts/build-index.sh
```

## Coût et pièges
Gratuit pour lire ; régénérer l'index consomme du Claude CLI. Dernier push le 2026-01-28, sans nouvelles depuis.

## Ce que ce n'est pas
Pas une licence ouverte : aucune n'est déclarée, et le README indique que le contenu appartient au podcast et à ses invités, pour usage éducatif et recherche.

## Alternatives
Aucune alternative nommée dans le README, mais il liste des projets dérivés (Lenny MCP, Lennyhub RAG).

## Pour toi
À surveiller : corpus pratique pour tester un RAG, mais droits flous, donc à réserver à l'expérimentation interne.

