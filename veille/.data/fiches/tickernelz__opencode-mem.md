---
schema: 1
depot: tickernelz/opencode-mem
source_readme_sha: e86cd23b65f16d5d
ecrite_le: 2026-11-07
nature: extension
deploiement: npm
prerequis: [Node, beaucoup de RAM]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# tickernelz/opencode-mem

> Plugin de mémoire persistante pour l'agent de code OpenCode, avec recherche vectorielle locale.

## Le problème
Un agent de code oublie tout d'une session à l'autre : décisions de projet, erreurs passées et préférences sont à répéter.

## Ce que ça fait vraiment
Quand une session est inactive, une requête IA résume le travail technique et le range dans une base Turso/libSQL locale avec vecteurs. Les souvenirs pertinents et un profil d'utilisateur sont injectés dans le contexte. Il masque les identifiants avant capture, déduplique, chiffre la base en option et offre une interface web, une bibliothèque de skills et un export.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  A["OpenCode"] --> B["Plugin opencode-mem"]
  B --> C["Auto-capture (requête IA)"]
  B --> D["Base Turso/libSQL locale"]
  B --> E["Embeddings locaux CPU"]
  B --> F["Interface web 127.0.0.1:4747"]
```

## Essayer
```jsonc
// ~/.config/opencode/opencode.json (OpenCode v1)
{
  "plugin": ["opencode-mem@latest"]
}
```

## Coût et pièges
L'auto-capture a besoin d'un fournisseur IA, à ta charge. Les embeddings locaux prennent environ 0,5 à 2 Go de RAM et le modèle se télécharge au premier usage. Mac Intel non pris en charge.

## Ce que ce n'est pas
Ce n'est pas une protection fiable des secrets : la suppression des identifiants est faite au mieux et ne couvre pas tous les chemins. Ce n'est pas un remplaçant d'AGENTS.md.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pertinent si tu utilises OpenCode au quotidien et veux une mémoire de projet locale, mais il faut accepter l'envoi de résumés à un fournisseur IA.

