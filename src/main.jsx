import { ViteReactSSG } from 'vite-react-ssg';
import './index.css';
import { routes } from './routes.jsx';

// O vite-react-ssg monta o app e gera um HTML estático para cada rota no build.
export const createRoot = ViteReactSSG({ routes });
