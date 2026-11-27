# SimoneAvogadro/android-reverse-engineering-skill

> Claude Code skill that decompiles APKs/AARs and extracts the HTTP APIs of an Android app, for security analysts.

## The problem
Without the source code, documenting the network calls of an obfuscated Android app takes a lot of manual work.

## What it actually does
A set of shell (and PowerShell) scripts driven by the skill: dependency check, APK fingerprint before decompilation, decompilation with jadx or Fernflower, extraction of Retrofit, OkHttp, Ktor, Apollo calls, and recovery of Kotlin class names despite R8. Requires JDK 17+ and jadx.

## How it is wired
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

## Trying it
```text
/plugin marketplace add SimoneAvogadro/android-reverse-engineering-skill
/plugin install android-reverse-engineering@android-reverse-engineering-skill
/decompile path/to/app.apk
```

## Cost and gotchas
Free; JDK 17+ and jadx must be installed. The PowerShell scripts are described as experimental.

## What it is not
Not a circumvention tool: the README restricts use to legal purposes (research, interoperability). Does not work without the external decompilers.

## Alternatives
- jadx, Fernflower/Vineflower, apktool: the underlying tools, usable by hand.

## For you
Of little use for a data/MLOps profile; keep it only for an occasional, authorized mobile security audit.
