import os, re

html_files = [
    'index.html',
    'catsmith.html',
    'overbrewed.html',
    'domefall.html',
    'necromeowcy.html',
    'wastemancer.html',
    'prism-of-darkness.html'
]

pattern = re.compile(r'(?:src|href)=["\'](assets/[^"\']+)["\']')

all_ok = True
total_checked = 0
for h in html_files:
    with open(h, 'r', encoding='utf-8') as f:
        content = f.read()
    assets = pattern.findall(content)
    for a in assets:
        total_checked += 1
        # normalize path
        local_path = a.replace('/', os.sep)
        if not os.path.exists(local_path):
            print(f"In {h}: Missing asset {local_path}")
            all_ok = False

# Also check projects-data.js
with open('js/projects-data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()
js_assets = re.findall(r'["\'](assets/[^"\']+)["\']', js_content)
for a in js_assets:
    total_checked += 1
    local_path = a.replace('/', os.sep)
    if not os.path.exists(local_path):
        print(f"In js/projects-data.js: Missing asset {local_path}")
        all_ok = False

if all_ok:
    print(f"SUCCESS: Verified {total_checked} asset references across all pages and data files. All exist!")
