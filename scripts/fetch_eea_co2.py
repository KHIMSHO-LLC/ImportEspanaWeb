"""Fetch aggregated EEA CO2 monitoring data into a local JSON cache.

Source: European Environment Agency discodata SQL endpoint.
Dataset: CO2Emission.latest.co2cars (Regulation EU 2019/631).
Aggregation: per (Mk, Cn, Ec, Ep, Ft) — averaged across all registrations.

Output: scripts/co2_data/eea_es_groups.json  (Spain registrations)
        scripts/co2_data/eea_eu_groups.json  (EU-wide, fallback)
"""

from __future__ import annotations

import json
import subprocess
import sys
import time
import urllib.parse
from pathlib import Path

ENDPOINT = "https://discodata.eea.europa.eu/sql"
OUT_DIR = Path(__file__).parent / "co2_data"
OUT_DIR.mkdir(exist_ok=True)


def fetch(sql: str, page: int, page_size: int) -> list[dict]:
    q = urllib.parse.urlencode({"query": sql, "p": page, "nrOfHits": page_size})
    url = f"{ENDPOINT}?{q}"
    # Use system curl: Python's stdlib doesn't trust the local cert chain on this machine.
    result = subprocess.run(
        ["curl", "-sS", "--fail", "--max-time", "180", url],
        capture_output=True,
        check=True,
    )
    payload = json.loads(result.stdout)
    return payload.get("results", [])


def fetch_all(sql: str, page_size: int = 5000) -> list[dict]:
    out: list[dict] = []
    page = 1
    while True:
        try:
            rows = fetch(sql, page, page_size)
        except Exception as e:
            print(f"  page {page} failed ({e}); retrying in 5s", file=sys.stderr)
            time.sleep(5)
            rows = fetch(sql, page, page_size)
        if not rows:
            break
        out.extend(rows)
        print(f"  page {page}: +{len(rows)} (total {len(out)})", file=sys.stderr)
        if len(rows) < page_size:
            break
        page += 1
    return out


# Server-side aggregation: average WLTP/NEDC per (brand, model, displacement, power, fuel).
# We also expose count so downstream matching can prefer high-confidence groups.
QUERY_TEMPLATE = (
    "SELECT Mk, Cn, [Ec (cm3)] AS ec, [Ep (KW)] AS ep, Ft, "
    "AVG(CAST([Ewltp (g/km)] AS FLOAT)) AS co2_wltp, "
    "AVG(CAST([Enedc (g/km)] AS FLOAT)) AS co2_nedc, "
    "COUNT(*) AS n "
    "FROM [CO2Emission].[latest].[co2cars] "
    "{where} "
    "GROUP BY Mk, Cn, [Ec (cm3)], [Ep (KW)], Ft"
)


def main() -> None:
    targets = [
        ("eea_es_groups.json", "WHERE MS = 'ES'"),
        ("eea_eu_groups.json", ""),
    ]
    for filename, where in targets:
        out_path = OUT_DIR / filename
        if out_path.exists():
            print(f"{filename} exists, skipping (delete to refetch)")
            continue
        print(f"Fetching {filename} ...")
        sql = QUERY_TEMPLATE.format(where=where)
        rows = fetch_all(sql)
        out_path.write_text(json.dumps(rows))
        print(f"  wrote {out_path} ({len(rows)} groups)")


if __name__ == "__main__":
    main()
