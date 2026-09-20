import os

files_to_update = [
    'src/pages/Home.jsx',
    'src/pages/Escritorio.jsx',
    'src/components/Marquee.jsx',
    'src/components/Layout.jsx'
]

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        
        new_content = content.replace('34957', '349457')
        
        with open(filepath, 'w') as f:
            f.write(new_content)
