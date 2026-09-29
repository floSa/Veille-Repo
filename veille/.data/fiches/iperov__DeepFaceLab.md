---
schema: 1
depot: iperov/DeepFaceLab
source_readme_sha: 81c2a5c2a0e5ecaa
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [GPU, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, archivé, mainteneur unique]
verdict: ignorer
---

# iperov/DeepFaceLab

> Logiciel d'échange, de rajeunissement de visage et de remplacement de tête par apprentissage profond, archivé.

## Le problème
Produire un échange de visage vidéo de qualité demande de chaîner extraction, entraînement et fusion.

## Ce que ça fait vraiment
Le README fourni est très mince : liens et images retirés. D'après l'architecture décrite : extraction de visages (détecteur S3FD, repères FAN), segmentation XSeg, entraînement de modèles (SAEHD, Quick96, AMP) sur un cadre maison (Leras, TensorFlow), puis fusion vers les vidéos de sortie.

## Comment c'est branché
Le graphe fourni n'a aucun composant lisible ; schéma minimal d'après l'explication :
```mermaid
graph LR
  I[Vidéos source] --> E[facelib extraction]
  E --> S[samplelib]
  S --> T[models entraînement]
  T --> M[merger]
  M --> O[Vidéo de sortie]
```

## Essayer
Aucune commande documentée dans le README fourni ; les versions se téléchargent par torrent.

## Coût et pièges
Gratuit, mais GPU nécessaire. Le dépôt est archivé (dernier push en novembre 2024) avec 537 issues ouvertes, sans correctif à attendre.

## Ce que ce n'est pas
Ce n'est pas un outil pour changer un visage sans consentement ; le droit à l'image et la loi locale s'appliquent. Le README ne précise pas de garde-fou éthique, contrairement à faceswap.

## Alternatives
Le README mentionne un projet de face swap en temps réel pour le streaming, sans le nommer. Aucun autre dépôt nommé.

## Pour toi
À ignorer : archivé, README quasi vide et sans utilité pour un profil data/MLOps ; préfère un projet maintenu si tu étudies ces modèles.
