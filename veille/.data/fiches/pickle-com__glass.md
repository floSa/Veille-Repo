---
schema: 1
depot: pickle-com/glass
source_readme_sha: 03fcf0f153b00347
ecrite_le: 2026-11-05
nature: app
deploiement: compilation
prerequis: [Node, version de Python, clé d'API]
cout: freemium
maturite: expérimental
gouvernance: entreprise
alertes: [licence copyleft, dernier commit ancien]
verdict: ignorer
---

# pickle-com/glass

> Assistant de bureau qui voit l'écran et écoute les réunions pour produire résumés et réponses en temps réel.

## Le problème
Pendant une réunion, on perd les actions à retenir et le contexte de ce qui s'est dit ou affiché à l'écran.

## Ce que ça fait vraiment
- Notes de réunion en direct, résumés et enregistrements de sessions.
- Fonction « Ask » : questions à l'IA appuyées sur l'historique d'écran et d'audio (`Ctrl/Cmd + Enter`).
- Modèles via OpenAI, Gemini, ou Ollama et Whisper en local ; clé personnelle ou compte du service.
- Fork de CheatingDaddy ; application de bureau Electron.

## Comment c'est branché
Aucun diagramme ni architecture du code fournis : le fonctionnement interne n'est pas documenté ici.

## Essayer
```bash
node --version   # Node 20.x.x requis
npm run setup
```
Ou télécharger le .dmg macOS lié dans le README (hébergé sur Dropbox).

## Coût et pièges
Clé OpenAI ou Gemini à ta charge, ou compte gratuit chez Pickle ; sous Windows, Build Tools for Visual Studio. Node 20.x exigé pour les dépendances natives.

## Ce que ce n'est pas
Pas « invisible » de façon vérifiable : le README l'affirme (absent des captures et enregistrements) sans le démontrer, et cela pose des questions de consentement en réunion. Pas actif : dernier push en octobre 2025, 113 issues ouvertes. Licence GPL-3.0 : copyleft.

## Alternatives
Aucune alternative nommée ; CheatingDaddy est le projet dont il est le fork.

## Pour toi
À ignorer : inactif depuis plus d'un an, GPL-3.0, et une capture d'écran et d'audio permanente qui pose un risque de confidentialité sans bénéfice clair pour ton travail.

