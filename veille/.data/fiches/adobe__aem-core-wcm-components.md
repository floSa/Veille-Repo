---
schema: 1
depot: adobe/aem-core-wcm-components
source_readme_sha: 77adf6f3a584d25d
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# adobe/aem-core-wcm-components

> Composants web standardisés pour Adobe Experience Manager, destinés aux équipes qui construisent des sites AEM.

## Le problème
Chaque site AEM réécrit les mêmes composants de page, de navigation et de formulaire.

## Ce que ça fait vraiment
Une trentaine de composants (page, navigation, texte, image, teaser, liste, carrousel, onglets, formulaires) avec modèles Sling, couche de données Adobe/Google, sortie JSON et gestion des liens. Un client Content AI et un service oEmbed sont aussi décrits dans le code.

## Comment c'est branché
```mermaid
flowchart TD
  A(("Auteur de pages")) --> P["PageImpl.java"]
  A --> N["Navigation"]
  P --> V(("Visiteur"))
  L["LinkManagerImpl.java"] --> B["LinkBuilderImpl.java"]
  C["Component.java"] --> D["Data layer"]
  K["ContentAIClientImpl.java"] --> X{{"Content AI API"}}
```

## Essayer
```bash
mvn clean install -PautoInstallPackage
mvn clean install -PautoInstallPackage,cloud
```

## Coût et pièges
Gratuit en code, mais il faut une instance AEM (produit Adobe sous licence), Java 8 à 21 et Maven 3.3.9+. L'intégration oEmbed Facebook et Instagram ne fonctionne plus sans jeton d'accès.

## Ce que ce n'est pas
Pas utilisable sans AEM : ce sont des composants pour ce CMS. Les modèles statiques et l'interface classique ne sont pas pris en charge.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
Ignorer : écosystème CMS Adobe, hors périmètre data, IA ou MLOps.

