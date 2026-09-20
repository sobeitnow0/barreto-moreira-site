import App from './App.jsx';
import Home from './pages/Home';
import Escritorio from './pages/Escritorio';
import Atuacao from './pages/Atuacao';
import Atualizacoes from './pages/Atualizacoes';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

// Quando criar as páginas de cada área, adicione aqui, por exemplo:
// { path: 'atuacao/propriedade-intelectual', Component: PropriedadeIntelectual },
export const routes = [
  {
    path: '/',
    element: <App />, // App renderiza o Layout, que precisa conter <Outlet />
    children: [
      { index: true, Component: Home },
      { path: 'escritorio', Component: Escritorio },
      { path: 'atuacao', Component: Atuacao },
      { path: 'atualizacoes', Component: Atualizacoes },
      { path: 'contato', Component: Contato },
      { path: '*', Component: NotFound },
    ],
  },
];
