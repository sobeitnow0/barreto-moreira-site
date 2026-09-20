import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Layout from './components/Layout';

const SITE_URL = 'https://barretomoreira.com.br';

// Título e descrição próprios para cada página (revise os textos).
// A Home ('/') define o próprio <Head> em pages/Home.jsx.
const pageMeta = {
  '/escritorio': {
    title: 'O Escritório | Barreto Moreira Estratégia Jurídica — Amilcar Barreto',
    description:
      'Conheça o Barreto Moreira: banca fundada por Amilcar Barreto de Barros Moreira (OAB/SP 349457), com atuação seletiva e pesquisa aprofundada.',
  },
  '/atuacao': {
    title: 'Áreas de Atuação | Barreto Moreira Estratégia Jurídica',
    description:
      'Direito Digital, Propriedade Intelectual, Direito Autoral, Direito do Consumidor, Contratos, Direito Animal e Planos de Saúde. Barreto Moreira OAB/SP 349457.',
  },
  '/atualizacoes': {
    title: 'Atualizações & Jurisprudência | Barreto Moreira Estratégia Jurídica',
    description:
      'Acompanhe análises sobre decisões dos tribunais, mudanças regulatórias e inovações no direito pelo Barreto Moreira Estratégia Jurídica.',
  },
  '/contato': {
    title: 'Contato & Avaliação | Barreto Moreira Estratégia Jurídica',
    description:
      'Solicite uma avaliação preliminar do seu caso ao Barreto Moreira Estratégia Jurídica em Santos/SP. Retorno em até 2 dias úteis.',
  },
};

const notFoundMeta = {
  title: 'Página não encontrada | Barreto Moreira Estratégia Jurídica',
  description: 'A página que você procura não foi encontrada. Retorne ao início do Barreto Moreira Estratégia Jurídica.',
  noindex: true,
};

function PageHead() {
  const { pathname } = useLocation();
  const key = pathname.replace(/\/$/, '') || '/';

  // A Home cuida do próprio <Head>.
  if (key === '/') return null;

  const meta = pageMeta[key] ?? notFoundMeta;
  const canonical = `${SITE_URL}${key}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.noindex ? 'noindex' : 'index, follow'} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
    </Head>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer = setTimeout(scrollToTarget, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <PageHead />
      <ScrollToTop />
      <Layout />
    </>
  );
}
