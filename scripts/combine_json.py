import json
import os
from pathlib import Path

json_dir = Path("json")

combined = []

for file_path in sorted(json_dir.glob("*.json")):
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        combined.append(data)

with open("public/api/lolfs.json", "w", encoding="utf-8") as f:
    json.dump(combined, f, indent=2, ensure_ascii=False)

print(f"Combined {len(combined)} files into lolfs.json")

