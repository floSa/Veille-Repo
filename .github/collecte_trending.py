#!/usr/bin/env python3
"""Lit github.com/trending (tous langages + les principaux langages) et écrit le jour dans trending/AAAA-MM-JJ.json.

Tourne chaque jour sur GitHub (workflow collecte-trending), machine allumée ou non. Bibliothèque standard seulement.
"""
import json, re, sys, time, urllib.request
from datetime import datetime, timezone
from pathlib import Path

LIEN = re.compile(r'href="/([A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+)/stargazers"')
LANGUES = ("c# c++ c css dart elixir erlang go haskell html java javascript kotlin lua markdown perl php "
           "python r ruby rust scala shell svelte swift typescript vue webassembly").split()


def lire(url):
    for essai in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
            return list(dict.fromkeys(LIEN.findall(html)))
        except Exception as e:
            print(url, e, file=sys.stderr); time.sleep(5 * (essai + 1))
    return []


jour = datetime.now(timezone.utc).date().isoformat()
sortie = Path("trending") / f"{jour}.json"
sortie.parent.mkdir(exist_ok=True)
# Deux lancements par jour : on garde l'union, la page change au fil de la journée.
data = json.loads(sortie.read_text()) if sortie.exists() else {}
for since in ("daily", "weekly", "monthly"):
    data[since] = sorted(set(data.get(since, [])) | set(lire(f"https://github.com/trending?since={since}")))
data.setdefault("langues", {})
for l in LANGUES:
    data["langues"][l] = sorted(set(data["langues"].get(l, [])) | set(lire(f"https://github.com/trending/{l.replace('#','%23').replace('+','%2B')}?since=daily")))
    time.sleep(1)
if not data["daily"]:
    sys.exit("page vide : le HTML de GitHub a sans doute changé")
sortie.write_text(json.dumps(data, ensure_ascii=False, indent=0))
print(jour, {k: len(v) for k, v in data.items() if k != "langues"}, sum(len(v) for v in data["langues"].values()))
