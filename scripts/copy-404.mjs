import { copyFileSync, readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// 1. Copia dist/404/index.html → dist/404.html para o GitHub Pages
copyFileSync('dist/404/index.html', 'dist/404.html');
console.log('✓ dist/404.html criado a partir de dist/404/index.html');

// 2. Remove título template duplicado onde o vite-react-ssg já injetou <title data-rh="true">
function cleanDuplicateTitles(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      cleanDuplicateTitles(fullPath);
    } else if (entry.endsWith('.html')) {
      let content = readFileSync(fullPath, 'utf8');
      if (content.includes('<title data-rh="true">')) {
        // Remove qualquer <title> estático de template que não seja o gerado por página
        const cleaned = content.replace(/<title>(.*?)<\/title>/g, '');
        if (cleaned !== content) {
          writeFileSync(fullPath, cleaned, 'utf8');
        }
      }
    }
  }
}

cleanDuplicateTitles('dist');
console.log('✓ Títulos duplicados limpos nas páginas estáticas');

