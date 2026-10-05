---
schema: 1
depot: intitni/CopilotForXcode
source_readme_sha: 513e884aaec0aaf6
ecrite_le: 2026-10-05
nature: extension
deploiement: binaire
prerequis: [clé d'API, Node, compte à créer]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# intitni/CopilotForXcode

> Extension macOS pour Xcode ajoutant suggestions, chat et modification de code via Copilot, Codeium ou OpenAI.

## Le problème
Xcode n'offre pas nativement d'assistant IA de code, ni de chat contextuel.

## Ce que ça fait vraiment
Un service d'arrière-plan lit le contexte de l'éditeur, interroge le fournisseur configuré (GitHub Copilot, Codeium, LLM compatible) et affiche suggestions, chat ou modifications. Des commandes personnalisées permettent des prompts réutilisables. Il demande l'accès Accessibilité et Dossiers.

## Comment c'est branché
```mermaid
flowchart LR
  A["Xcode SourceEditor.swift"] --> B["Extension XPC"]
  B --> C["Background service Service.swift"]
  C --> D["Workspace context"]
  C --> E["Suggestion providers"]
  C --> F["Chat service"]
```

## Essayer
```bash
brew install --cask copilot-for-xcode
```
Puis activer l'extension dans Réglages Système et accorder l'Accessibilité.

## Coût et pièges
Abonnement Copilot ou compte Codeium, ou clé OpenAI facturée à l'usage ; Node requis pour le serveur Copilot. Le README admet un suivi d'Xcode fragile avec plusieurs fenêtres.

## Ce que ce n'est pas
Pas un outil hors ligne : il dépend de services tiers. Dernier push en avril 2026, activité modeste.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer pour un profil data/IA : c'est un outil de développement iOS/macOS, sans lien avec ton périmètre.

