import os

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            if 'tracking-tight' in content:
                content = content.replace('tracking-tight', 'tracking-normal')
                with open(filepath, 'w') as f:
                    f.write(content)
