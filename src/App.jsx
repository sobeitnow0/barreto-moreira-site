import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Escritorio from './pages/Escritorio';
import Atuacao from './pages/Atuacao';
import Atualizacoes from './pages/Atualizacoes';
import Contato from './pages/Contato';

// Scroll-to-top + Título dinâmico por página
const pageTitles = {
  '/': 'Barreto Moreira | Advocacia Estratégica',
  '/escritorio': 'O Escritório | Barreto Moreira',
  '/atuacao': 'Áreas de Atuação | Barreto Moreira',
  '/atualizacoes': 'Atualizações | Barreto Moreira',
  '/contato': 'Solicite sua Avaliação | Barreto Moreira',
};

function RouteHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamic page title
    document.title = pageTitles[pathname] || 'Barreto Moreira | Advocacia Estratégica';
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="escritorio" element={<Escritorio />} />
          <Route path="atuacao" element={<Atuacao />} />
          <Route path="atualizacoes" element={<Atualizacoes />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
