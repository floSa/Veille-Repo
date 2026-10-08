---
schema: 1
depot: WECENG/ticket-purchase
source_readme_sha: b73c7f49ae262c77
ecrite_le: 2026-10-08
nature: outil
deploiement: pip
prerequis: [version de Python, Node, compte à créer]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# WECENG/ticket-purchase

> Automatisation de l'achat de billets Damai par Selenium (web) et Appium (Android).

## Le problème
Les billets de concerts partent en secondes ; cliquer à la main est trop lent.

## Ce que ça fait vraiment
Deux scripts Python : Web (Selenium, `damai.py`, connexion et cookies, choix de ville, prix, spectateurs, soumission) et mobile (Appium + UiAutomator2, `damai_app_v2.py`). Configuration en JSON, tentatives automatiques. Le mobile est présenté comme l'option recommandée.

## Comment c'est branché
```mermaid
flowchart LR
  A["Web launcher (damai.py)"] --> B["Web ticket flow (concert.py)"]
  B --> C["Chrome et WebDriver"]
  D["Optimized app bot (damai_app_v2.py)"] --> E["Appium server"]
  E --> F["Damai Android app"]
  G["config.py"] --> D
```

## Essayer
```bash
poetry install
appium --port 4723
cd damai_appium
python damai_app_v2.py
```

## Coût et pièges
Gratuit, mais exige Appium, SDK Android, Node 20.19+ et un appareil. Chemins personnels codés dans le README. Aucune licence ; usage « étude et recherche » seulement. README en chinois.

## Ce que ce n'est pas
Pas un outil garanti : risque de blocage du compte, et possible violation des conditions de la billetterie.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À ignorer : sans licence, usage de revente douteux et hors périmètre data/IA.

