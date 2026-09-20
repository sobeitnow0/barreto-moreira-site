import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  ssgOptions: {
    dirStyle: 'nested', // gera dist/atuacao/index.html, dist/contato/index.html, etc.
  },
})
