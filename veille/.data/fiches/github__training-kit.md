---
schema: 1
depot: github/training-kit
source_readme_sha: adba3a28e046fc93
ecrite_le: 2026-10-28
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# github/training-kit

> Aide-mémoire Git et GitHub en Jekyll, publiés par l'équipe Professional Services de GitHub.

## Le problème
Les équipes ont besoin de fiches pratiques Git/GitHub à diffuser, parfois derrière un pare-feu.

## Ce que ça fait vraiment
Dépôt de cheat sheets Git et GitHub, en plusieurs langues, et de guides, sur un site Jekyll stylé avec Primer CSS. Le reste des anciens contenus (formations, vidéos) a été retiré. Un script emballe le site en archive pour un serveur interne.

## Comment c'est branché
```mermaid
flowchart LR
  A["Markdown content"] --> B["Jekyll Engine"]
  C["_layouts and _includes"] --> B
  D["assets scss"] --> B
  B --> E["_site Output"]
  E --> F["GitHub Pages"]
```

## Essayer
```bash
script/package
mkdir -p test_site/kit
tar -xzf release-XXXXXXX.tgz -C test_site/kit
cd test_site
python -m http.server
```

## Coût et pièges
Gratuit. Contenu sous CC-BY-4.0 (attribution), code sous CC0-1.0.

## Ce que ce n'est pas
Plus une formation complète : l'ancien contenu est dans l'historique.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : fiches Git pratiques à imprimer ou à héberger en interne, sans plus.

