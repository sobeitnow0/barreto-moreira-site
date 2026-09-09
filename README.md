# Barreto Moreira | Advocacia Estratégica

Portal institucional da **Barreto Moreira Advocacia Estratégica**, desenvolvido com foco em estética editorial moderna, performance e responsividade integral.

- **Fundador**: Amilcar Barreto de Barros Moreira (OAB/SP 34957)
- **Co-fundador**: Alan Miranda
- **Tecnologias**: React 19, Vite, TailwindCSS, Lucide Icons, Google Sans Flex.

---

## Estrutura do Projeto

- `src/pages/Home.jsx`: Apresentação institucional, hero stacked editorial, áreas de prática e diretrizes.
- `src/pages/Atuacao.jsx`: Escopo de práticas, ecossistema jurídico com bancas parceiras (Passos & Martins) e Buscador DJEN.
- `src/pages/Escritorio.jsx`: Histórico institucional, posicionamento contra automatismos e perfis dos fundadores.
- `src/pages/Contato.jsx`: Canais oficiais de atendimento e formulário de contato prévio.
- `.github/workflows/deploy.yml`: Pipeline de CI/CD para deploy automatizado no GitHub Pages.

---

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## Publicação no GitHub & GitHub Pages

### 1. Criar repositório e enviar código
```bash
git add .
git commit -m "feat: portal Barreto Moreira Advocacia Estratégica"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

### 2. Ativar o GitHub Pages no Repositório
1. No GitHub, acesse **Settings** > **Pages**.
2. Na opção **Source** (Build and deployment), selecione **GitHub Actions**.
3. A cada push na branch `main`, a action contida em `.github/workflows/deploy.yml` fará o build e publicação automaticamente.
