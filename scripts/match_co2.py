"""Match BOE entries to EEA CO2 measurements and write boe_prices_with_co2.json.

Strategy:
- Keep EEA records at (Mk, Cn, ec, ep, Ft) granularity so per-model fidelity is
  preserved (powertrain-only aggregation pollutes petrol buckets with PHEVs
  that EEA itself mis-coded as PETROL).
- For each BOE row, find candidates in EEA matching brand + normalized fuel +
  cc within tolerance + kw within tolerance, then weight by registration count
  to derive a single CO2 value.
- Drop EEA candidates with implausible CO2 for the declared fuel (e.g. a 1.4L
  petrol with wltp < 60 is a hidden PHEV).
- Prefer Spain-registered data; fall back to EU-wide when ES has no match.
- WLTP is preferred; NEDC scaled by 1.21 when only NEDC is available
  (typical EU-wide WLTP/NEDC ratio).
"""

from __future__ import annotations

import json
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data"
ES_GROUPS = ROOT / "scripts" / "co2_data" / "eea_es_groups.json"
EU_GROUPS = ROOT / "scripts" / "co2_data" / "eea_eu_groups.json"

BOE_PATH = DATA / "boe_prices_with_co2.json"

# Plausible CO2 floors per fuel category (g/km). Anything below these is
# treated as PHEV contamination — the registration was coded against a
# non-plug-in fuel type but the WLTP figure reflects electric-assisted mode.
PLAUSIBLE_MIN = {
    "petrol": 70,
    "diesel": 60,
    "petrol_electric": 0,   # genuine hybrids can be very low
    "diesel_electric": 0,
    "electric": 0,
    "lpg": 60,
    "ng": 60,
    "hydrogen": 0,
}
PLAUSIBLE_MAX = 450  # nothing in the EEA dataset should exceed this

BRAND_ALIASES = {
    "MERCEDES BENZ": "MERCEDES-BENZ",
    "MERCEDES": "MERCEDES-BENZ",
    "VW": "VOLKSWAGEN",
    "ROLLSROYCE": "ROLLS-ROYCE",
    "ROLLS ROYCE": "ROLLS-ROYCE",
    "SSANG YONG": "SSANGYONG",
    "BMW MOTORRAD": "BMW",
    "DS": "DS AUTOMOBILES",
}


def normalize_brand(s: str | None) -> str | None:
    if not s:
        return None
    s = s.strip().upper()
    for src, dst in {"Ä": "A", "Ö": "O", "Ü": "U", "Ñ": "N"}.items():
        s = s.replace(src, dst)
    return BRAND_ALIASES.get(s, s)


def normalize_eea_fuel(f: str | None) -> str | None:
    if not f:
        return None
    f = f.strip().lower()
    if not f or f == "unknown":
        return None
    if "petrol" in f and "electric" in f:
        return "petrol_electric"
    if "diesel" in f and "electric" in f:
        return "diesel_electric"
    if f in ("petrol", "gasoline", "e85"):
        return "petrol"
    if f == "diesel":
        return "diesel"
    if f == "electric":
        return "electric"
    if "lpg" in f or "gnl" in f:
        return "lpg"
    if "ng" in f or "cng" in f or "biomethane" in f:
        return "ng"
    if "hydrogen" in f:
        return "hydrogen"
    return None


BOE_FUEL_MAP = {
    "G": "petrol",
    "D": "diesel",
    "Elc": "electric",
    "GyE": "petrol_electric",
    "DyE": "diesel_electric",
    "PHEV": "petrol_electric",
    "H": "hydrogen",
}


def normalize_boe_fuel(code: str | None) -> str | None:
    if not code:
        return None
    code = code.strip()
    if code in BOE_FUEL_MAP:
        return BOE_FUEL_MAP[code]
    upper = code.upper()
    for k, v in BOE_FUEL_MAP.items():
        if k.upper() == upper:
            return v
    return None


def co2_from_group(row: dict, fuel: str) -> float | None:
    """Return WLTP if present and plausible; else NEDC*1.21 if plausible."""
    floor = PLAUSIBLE_MIN.get(fuel, 0)
    wltp = row.get("co2_wltp")
    if wltp is not None and floor <= wltp <= PLAUSIBLE_MAX:
        return wltp
    nedc = row.get("co2_nedc")
    if nedc is not None:
        # NEDC floors are typically a bit lower than WLTP — scale them up first.
        scaled = nedc * 1.21
        if floor <= scaled <= PLAUSIBLE_MAX:
            return scaled
    return None


def build_index(groups: list[dict]) -> dict:
    """brand -> fuel_cat -> list of (cc, kw, co2, n) candidates."""
    index: dict = defaultdict(lambda: defaultdict(list))
    for r in groups:
        brand = normalize_brand(r.get("Mk"))
        fuel = normalize_eea_fuel(r.get("Ft"))
        if not brand or not fuel:
            continue
        cc = r.get("ec")
        kw = r.get("ep")
        n = r.get("n") or 0
        if kw is None or n <= 0:
            continue
        # For ICE, require a sensible engine displacement.
        if fuel != "electric" and (cc is None or cc < 200):
            continue
        co2 = co2_from_group(r, fuel)
        if co2 is None:
            continue
        index[brand][fuel].append((int(cc or 0), int(kw), float(co2), int(n)))
    return index


def find_co2(index: dict, brand: str, cc: int, kw: int, fuel: str) -> float | None:
    """Find a CO2 value by matching candidates in tolerance, weighted by count."""
    candidates = index.get(brand, {}).get(fuel)
    if not candidates:
        return None

    if fuel == "electric":
        return 0.0

    cc_tol = max(80, int(cc * 0.08))
    kw_tol = max(5, int(kw * 0.08))

    # Pass 1: strict tolerance — sum count-weighted CO2 from in-range candidates.
    matches = [
        (c_co2, c_n)
        for c_cc, c_kw, c_co2, c_n in candidates
        if abs(c_cc - cc) <= cc_tol and abs(c_kw - kw) <= kw_tol
    ]
    if matches:
        total_n = sum(n for _, n in matches)
        return sum(c * n for c, n in matches) / total_n

    # Pass 2: loosen kw to ±15% if no exact-tolerance match.
    kw_tol2 = max(8, int(kw * 0.15))
    matches = [
        (c_co2, c_n)
        for c_cc, c_kw, c_co2, c_n in candidates
        if abs(c_cc - cc) <= cc_tol and abs(c_kw - kw) <= kw_tol2
    ]
    if matches:
        total_n = sum(n for _, n in matches)
        return sum(c * n for c, n in matches) / total_n

    return None


def main() -> None:
    print("Loading EEA aggregates ...", file=sys.stderr)
    es_groups = json.loads(ES_GROUPS.read_text())
    eu_groups = json.loads(EU_GROUPS.read_text())
    es_index = build_index(es_groups)
    eu_index = build_index(eu_groups)
    print(f"  ES brands: {len(es_index)}", file=sys.stderr)
    print(f"  EU brands: {len(eu_index)}", file=sys.stderr)

    print("Loading BOE ...", file=sys.stderr)
    boe = json.loads(BOE_PATH.read_text())
    print(f"  {len(boe)} rows", file=sys.stderr)

    counters = defaultdict(int)

    for row in boe:
        brand = normalize_brand(row.get("brand"))
        fuel = normalize_boe_fuel(row.get("fuel"))

        if fuel == "electric":
            row["co2"] = 0
            counters["matched_ev"] += 1
            continue

        if not brand or not fuel:
            counters["skip_brand_fuel"] += 1
            row["co2"] = None
            continue

        try:
            cc = int(row.get("cc") or 0)
            kw = int(row.get("kw") or 0)
        except (ValueError, TypeError):
            cc = kw = 0
        if cc <= 0 or kw <= 0:
            counters["skip_engine"] += 1
            row["co2"] = None
            continue

        co2 = find_co2(es_index, brand, cc, kw, fuel)
        src = "ES"
        if co2 is None:
            co2 = find_co2(eu_index, brand, cc, kw, fuel)
            src = "EU"
        if co2 is None and fuel == "petrol_electric":
            # Some PHEV/HEV BOE rows correspond to EEA petrol-only entries when
            # the manufacturer registered the trim without an electric component.
            co2 = find_co2(es_index, brand, cc, kw, "petrol") or find_co2(eu_index, brand, cc, kw, "petrol")
            src = "fallback_petrol"
        if co2 is None and fuel == "diesel_electric":
            co2 = find_co2(es_index, brand, cc, kw, "diesel") or find_co2(eu_index, brand, cc, kw, "diesel")
            src = "fallback_diesel"

        if co2 is None:
            counters["no_match"] += 1
            row["co2"] = None
        else:
            row["co2"] = round(co2)
            counters[f"matched_{src}"] += 1

    total = len(boe)
    matched = sum(v for k, v in counters.items() if k.startswith("matched"))
    print("\nResults:", file=sys.stderr)
    for k in sorted(counters):
        print(f"  {k:24} : {counters[k]}", file=sys.stderr)
    print(f"  coverage                 : {matched}/{total} ({matched/total*100:.1f}%)", file=sys.stderr)

    BOE_PATH.write_text(json.dumps(boe, ensure_ascii=False))
    print(f"\nWrote {BOE_PATH}", file=sys.stderr)


if __name__ == "__main__":
    main()
