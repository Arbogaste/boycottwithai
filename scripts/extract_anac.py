"""
Simple helper: download ANAC contracts CSV and detect repeated CIGs (possible fragmentation/serial awards).
Usage:
  python3 scripts/extract_anac.py --url <CSV_URL> --out out.csv

The script saves the CSV and prints repeated CIG counts to stdout.
Replace <CSV_URL> with the ANAC open data CSV link for contract awards.
"""

import csv
import argparse
import requests
from collections import Counter


def download_csv(url, out_path):
    resp = requests.get(url, stream=True)
    resp.raise_for_status()
    with open(out_path, 'wb') as f:
        for chunk in resp.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)


def find_repeated_cig(path, cig_field='CIG'):
    counts = Counter()
    with open(path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            cig = row.get(cig_field) or row.get('cig') or row.get('Cig')
            if cig:
                counts[cig.strip()] += 1
    return counts


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--url', required=True, help='CSV URL (ANAC Open Data)')
    p.add_argument('--out', default='anac.csv', help='Output CSV file')
    p.add_argument('--top', type=int, default=30, help='Show top repeated CIGs')
    args = p.parse_args()

    print(f"Downloading {args.url} -> {args.out}")
    download_csv(args.url, args.out)
    print("Analyzing CIG repetition...")
    counts = find_repeated_cig(args.out)
    repeated = [(c,n) for c,n in counts.items() if n>1]
    repeated.sort(key=lambda x: -x[1])
    print(f"Found {len(repeated)} repeated CIGs (count>1). Showing top {args.top}:\n")
    for cig, n in repeated[:args.top]:
        print(f"{cig}: {n} awards")

if __name__ == '__main__':
    main()
