---
schema: 1
depot: richfelker/musl-cross-make
source_readme_sha: 7b347e17f69704ef
ecrite_le: 2026-11-25
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: []
verdict: surveiller
---

# richfelker/musl-cross-make

> Makefiles qui produisent des compilateurs croisés GCC ciblant la libc musl, pour de nombreuses architectures.

## Le problème
Construire une chaîne de compilation croisée vers musl impose d'enchaîner GCC, binutils et musl avec les bons patches.

## Ce que ça fait vraiment
Le Makefile principal télécharge les archives, vérifie leurs empreintes, applique les patches via cowpatch.sh, puis passe la main à litecross/Makefile qui construit GCC, binutils et musl en une seule chaîne. On choisit la cible par `TARGET` (ex. i486-linux-musl) dans config.mak. L'installation se fait au choix dans un répertoire déplaçable.

## Comment c'est branché
```mermaid
flowchart TD
  A["config.mak.dist"] --> B["Makefile"]
  H["hashes/gcc-14.3.0.tar.xz.sha1"] --> B
  B --> C["cowpatch.sh"]
  D["patches/gcc-14.3.0"] --> C
  F["patches/musl-1.2.6"] --> C
  C --> G["litecross/Makefile"]
  G --> I["Cross compilateur musl"]
```

## Essayer
```bash
make
make install
```
Avec un fichier config.mak contenant au minimum `TARGET`.

## Coût et pièges
Gratuit. La compilation de GCC prend du temps et du disque. La licence MIT ne couvre pas les patches ni les binaires produits : ils gardent la licence amont.

## Ce que ce n'est pas
Ce n'est pas un projet à fort entretien : l'auteur le décrit comme une activité annexe au bénéfice de musl.

## Alternatives
musl-cross de Gregor est cité comme système alternatif d'origine.

## Pour toi
À surveiller : utile si tu dois produire des binaires statiques pour ARM ou des cibles embarquées ; sinon inutile.

