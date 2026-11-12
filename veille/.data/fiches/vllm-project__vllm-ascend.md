---
schema: 1
depot: vllm-project/vllm-ascend
source_readme_sha: d7675e94c70e2989
ecrite_le: 2026-11-12
nature: outil
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# vllm-project/vllm-ascend

> Plugin matériel communautaire qui permet d'exécuter vLLM sur les NPU Huawei Ascend.

## Le problème
vLLM cible nativement le GPU ; sans adaptation, il ne peut pas utiliser l'accélérateur Ascend NPU des déploiements chinois ou spécialisés.

## Ce que ça fait vraiment
Fournit les chemins d'exécution Ascend pour les workers vLLM (runner v1 et v2, compatibilité Ascend 310P), l'attention (standard, MLA, sparse, FA3, context-parallel), la compilation de graphe ACL, le MoE fusionné, la quantification, et le transfert/déchargement de KV-cache via HCCL.

## Comment c'est branché
```mermaid
flowchart TD
  plugin["Bootstrap plugin<br/>__init__.py"] --> platform["Sélection plateforme<br/>platform.py"]
  platform --> runner["Model runner v2<br/>model_runner.py"]
  runner --> attention["Attention NPU<br/>attention_v1.py"]
  runner --> compiler["Compilateur ACL graph<br/>acl_graph.py"]
  compiler --> nativeops{{"Opérateurs natifs Ascend<br/>CMakeLists.txt"}}
  runner --> moe["MoE fusionné<br/>fused_moe.py"]
  runner --> communicator["Communicateur NPU (HCCL)"]
```

## Essayer
Aucune commande d'installation/usage n'est documentée dans l'extrait disponible : le README liste surtout les prérequis matériels et logiciels (Python 3.12, CANN 9.2.1, PyTorch/TorchNPU 2.10.0).

## Coût et pièges
Nécessite du matériel Ascend NPU (Atlas 800I/300I) réel, pas un GPU standard, plus des versions précises de CANN et PyTorch/TorchNPU : contrainte lourde et spécifique.

## Ce que ce n'est pas
Pas un fork de vLLM : c'est un plugin qui s'y greffe. Ne fonctionne pas sans accès à du matériel Ascend NPU, inaccessible à la majorité des utilisateurs.

## Alternatives
Aucune alternative nommée dans le README (le dépôt évoque vLLM lui-même comme projet parent, pas comme alternative).

## Pour toi
À surveiller seulement si ton infrastructure MLOps dépend de matériel Huawei Ascend ; sinon sans intérêt pratique immédiat.

