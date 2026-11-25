---
schema: 1
depot: SuperStudio/SuperCom
source_readme_sha: 2f0d960757cd8475
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# SuperStudio/SuperCom

> Outil Windows de débogage de ports série : collecte, stockage et affichage coloré des journaux.

## Le problème
Surveiller plusieurs ports série et garder leurs journaux demande des outils austères.

## Ce que ça fait vraiment
Application WPF : écoute de plusieurs ports série à la fois, sauvegarde automatique des journaux, défilement fixe ou libre, réglage du débit, envoi de commandes AT, coloration syntaxique, conversion hex/texte, formatage JSON, client Telnet. Les ports virtuels viennent de com0com. La version 4.5 est la dernière à recevoir des fonctions : le projet migre vers SuperConnectX.

## Comment c'est branché
```mermaid
flowchart TD
  A["MainWindow.xaml.cs"] --> B["VieModel_Main.cs"]
  B --> C["SerialPortEx.cs"]
  B --> D["TelnetClient.cs"]
  C --> E["FilterManager.cs"]
  E --> F["AnsiColorizer.cs"]
  G["ConfigManager.cs"] --> A
```

## Essayer
Aucune commande documentée : le README renvoie vers un lien de téléchargement et le Wiki.

## Coût et pièges
Gratuit, Windows seulement. README en chinois. Fonctions gelées depuis 4.5, seuls les correctifs critiques sont prévus.

## Ce que ce n'est pas
Pas un outil multiplateforme, malgré ses raisons de quitter WPF : la migration vers un autre produit est en cours.

## Alternatives
SuperConnectX, le projet de remplacement cité dans le README.

## Pour toi
Ignorer : utilitaire Windows pour l'électronique embarquée, hors de ton profil data/IA ; et le projet pointe lui-même vers son successeur.

