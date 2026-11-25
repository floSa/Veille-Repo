---
schema: 1
depot: mjmirza/app-store-compliance
source_readme_sha: 2a025c73d1dbd011
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# mjmirza/app-store-compliance

> Guide et garde automatisée qui scanne une app iOS ou Android pour prévenir les rejets des stores.

## Le problème
Un rejet par Apple ou Google coûte une semaine de cycle ; les causes (manifeste de confidentialité, compte démo) sont souvent connues mais oubliées.

## Ce que ça fait vraiment
Un script shell analyse un projet Xcode ou Android et signale les risques de rejet, avec fichier, ligne et correction ; il se termine par `BLOCKED.`, `CLEAR.` ou `NOT CHECKED.`. Un installateur le branche comme hook avant les commandes de soumission dans Claude Code, Codex, Gemini CLI, Cursor et d'autres. Des moniteurs de politiques et des audits complètent l'ensemble.

## Comment c'est branché
```mermaid
flowchart TD
  A["Développeur"] --> B["app-store-compliance-guard.sh"]
  B --> C["data/rejection-patterns.json"]
  D["install_harness.py"] --> E["Outils de code IA, hooks"]
  F["release-audit.py"] --> B
  G["monitor.py"] --> H["Flux Apple et Google"]
```

## Essayer
```bash
git clone https://github.com/mjmirza/app-store-compliance ~/repositories/app-store-compliance
bash ~/repositories/app-store-compliance/agent-os/hooks/app-store-compliance-guard.sh "/path/to/your/app"
```

## Coût et pièges
Gratuit ; git et bash, et python3 pour tous les outils sauf Claude Code. Licence non identifiée par GitHub. L'installateur modifie les configurations de tes outils (une sauvegarde est faite). Les moniteurs lisent des données d'exemple sans l'option `--live`.

## Ce que ce n'est pas
Ce n'est pas une garantie d'approbation : un scan de code ne voit pas l'état du compte développeur. Statistiques et témoignages du README sont ceux de l'auteur.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utile seulement si tu publies des apps mobiles, sans lien avec le travail data / IA.

