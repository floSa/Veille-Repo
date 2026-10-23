---
schema: 1
depot: SimoneAvogadro/android-reverse-engineering-skill
source_readme_sha: 41cad36dc9e8279d
ecrite_le: 2026-10-23
nature: extension
deploiement: autre
prerequis: [version de Python, Node]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# SimoneAvogadro/android-reverse-engineering-skill

> Skill Claude Code qui décompile des APK/AAR et extrait les API HTTP d'une appli Android, pour analystes sécurité.

## Le problème
Sans le code source, documenter les appels réseau d'une appli Android obfusquée demande beaucoup de travail manuel.

## Ce que ça fait vraiment
Une série de scripts shell (et PowerShell) pilotés par le skill : vérification des dépendances, empreinte de l'APK avant décompilation, décompilation avec jadx ou Fernflower, extraction des appels Retrofit, OkHttp, Ktor, Apollo, et récupération des noms de classes Kotlin malgré R8. Nécessite JDK 17+ et jadx.

## Comment c'est branché
```mermaid
graph TD
  A[/decompile decompile.md] --> B[SKILL.md]
  B --> C[check-deps.sh]
  B --> D[fingerprint.sh]
  B --> E[decompile.sh jadx Fernflower]
  E --> F[find-api-calls.sh]
  E --> G[recover-kotlin-names.sh]
  G --> H[lookup-name.sh]
```

## Essayer
```text
/plugin marketplace add SimoneAvogadro/android-reverse-engineering-skill
/plugin install android-reverse-engineering@android-reverse-engineering-skill
/decompile path/to/app.apk
```

## Coût et pièges
Gratuit ; JDK 17+ et jadx à installer. Les scripts PowerShell sont qualifiés d'expérimentaux.

## Ce que ce n'est pas
Pas un outil de contournement : le README limite l'usage à des fins légales (recherche, interopérabilité). Ne marche pas sans les décompilateurs externes.

## Alternatives
- jadx, Fernflower/Vineflower, apktool : les outils sous-jacents, utilisables à la main.

## Pour toi
Peu utile pour un profil data/MLOps ; garde-le seulement pour un audit de sécurité mobile ponctuel et autorisé.

