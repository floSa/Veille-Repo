---
schema: 1
depot: rhysd/actionlint
source_readme_sha: d78bc61d23ab010a
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# rhysd/actionlint

> Vérificateur statique de fichiers de workflow GitHub Actions, avec contrôle de types des expressions.

## Le problème
Une faute de clé, une expression `${{ }}` mal typée ou une injection de script ne se découvre qu'à l'exécution du workflow, après des cycles de push.

## Ce que ça fait vraiment
Lit les YAML de `.github/workflows`, les parse en AST et applique des règles : syntaxe, types des expressions, entrées et sorties des actions, workflows réutilisables, injection par entrées non fiables, secrets en dur, globs, `needs:`, labels de runners, cron. Peut appeler shellcheck et pyflakes sur les `run:`. Le README montre un exemple de workflow avec 7 erreurs détectées.

## Comment c'est branché
```mermaid
flowchart LR
  A["main.go"] --> B["command.go"]
  B --> C["linter.go"]
  C --> D["parse.go + ast.go"]
  C --> E["rule_expression.go / rule_action.go"]
  C --> F["process.go (shellcheck, pyflakes)"]
  C --> G["error.go"]
```

## Essayer
```bash
go install github.com/rhysd/actionlint/cmd/actionlint@latest
actionlint
```

## Coût et pièges
Gratuit. Un playground en ligne tourne en WebAssembly dans le navigateur. Les labels de runners auto-hébergés se déclarent dans `actionlint.yaml`.

## Ce que ce n'est pas
Ne vérifie pas le comportement réel des actions ni des secrets côté GitHub. 190 issues ouvertes, dont des faux positifs possibles.

## Alternatives
Aucune alternative nommée dans le README (reviewdog, super-linter et pre-commit y figurent comme intégrations).

## Pour toi
À adopter : tes pipelines CI et de déploiement ML tiennent à ces workflows, et un linter local, gratuit et éprouvé évite des allers-retours de push.

