import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Escritorio from './pages/Escritorio';
import Atuacao from './pages/Atuacao';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="escritorio" element={<Escritorio />} />
          <Route path="atuacao" element={<Atuacao />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
