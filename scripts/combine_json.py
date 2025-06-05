import json
import os
from pathlib import Path

json_dir = Path("../json")

# Get the absolute path to the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the absolute path to 'lolfs.json'
json_file_path = os.path.join(script_dir, '..', '..', 'public', 'api', 'lolfs.json')

# Ensure the path is correct
json_file_path = os.path.normpath(json_file_path)

combined = []

for file_path in sorted(json_dir.glob("*.json")):
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        combined.append(data)

with open(json_file_path, "w", encoding="utf-8") as f:
    json.dump(combined, f, indent=2, ensure_ascii=False)

print(f"Combined {len(combined)} files into lolfs.json")

