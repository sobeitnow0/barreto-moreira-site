// Copia dist/404/index.html → dist/404.html
// O GitHub Pages serve dist/404.html quando uma rota não é encontrada.
// O vite-react-ssg gera dist/404/index.html a partir da rota { path: '404' }.
import { copyFileSync } from 'node:fs';

copyFileSync('dist/404/index.html', 'dist/404.html');
console.log('✓ dist/404.html criado a partir de dist/404/index.html');
