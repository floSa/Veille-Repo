---
schema: 1
depot: magnitudedev/magnitude
source_readme_sha: 8e90278740df5df1
ecrite_le: 2026-10-25
nature: app
deploiement: binaire
prerequis: [GPU]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# magnitudedev/magnitude

> Moteur d'inférence local qui règle ses noyaux sur ta machine et se branche à ton agent de code.

## Le problème
Les moteurs locaux livrent des noyaux génériques, sans réglage pour chaque modèle et puce.

## Ce que ça fait vraiment
À chaque téléchargement de modèle, passe jusqu'à une minute à tester des configurations de calcul sur ta puce et garde la plus rapide sans changer la sortie. Embarque un décodage spéculatif, un cache KV quantifié, des caches de préfixe partagés. Fonctionne sur Apple Silicon, NVIDIA, AMD ou CPU et se connecte en un clic à Pi, OpenCode, Hermes, Codex, Claude Code ou Cline. Annonce plus de deux fois la vitesse d'Ollama.

## Comment c'est branché
Non documenté en détail : l'architecture fournie décrit un autre projet (voir « Ce que ce n'est pas »). Schéma tiré du README :
```mermaid
flowchart LR
  A[Application bureau] --> B[Discover : modèles]
  B --> C[Réglage des noyaux au téléchargement]
  C --> D[Moteur d'inférence]
  D --> E[API compatible OpenAI]
  E --> F[Agent connecté]
```

## Essayer
```bash
magnitude server setup
```

## Coût et pièges
Gratuit, local, sans jeton. Le seul commande du README est le service serveur sous Linux/macOS ; le reste passe par l'application (téléchargement, Discover, Connections).

## Ce que ce n'est pas
Anomalie : l'architecture « d'après le code » décrit un framework de tests e2e (`magnitude-test`, `*.mag.ts`), sans rapport avec ce README. Le facteur 2x vient de l'auteur.

## Alternatives
Ollama, llama.cpp, LM Studio : cités comme références de comparaison.

## Pour toi
À surveiller : promesse intéressante pour l'inférence locale d'agents, mais benchmarks auto-publiés et architecture non vérifiable ici.

