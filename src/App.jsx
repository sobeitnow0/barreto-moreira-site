import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Layout from './components/Layout';

const SITE_URL = 'https://barretomoreira.com.br';

// Título e descrição próprios para cada página (revise os textos).
// A Home ('/') define o próprio <Head> em pages/Home.jsx.
const pageMeta = {
  '/escritorio': {
    title: 'O Escritório | Barreto Moreira Advocacia em Santos',
    description:
      'Conheça o Barreto Moreira, escritório de advocacia em Santos/SP fundado por Amilcar Barreto de Barros Moreira (OAB/SP 349457). Atuação seletiva e pesquisa aprofundada.',
  },
  '/atuacao': {
    title: 'Áreas de Atuação | Barreto Moreira Advocacia',
    description:
      'Áreas de atuação do Barreto Moreira: Direito Digital, Propriedade Intelectual, Direito Autoral, Direito do Consumidor, Contratos, Direito Animal e Planos de Saúde.',
  },
  '/atualizacoes': {
    title: 'Atualizações Jurídicas | Barreto Moreira',
    description:
      'Artigos e atualizações jurídicas do Barreto Moreira sobre Direito Digital, Propriedade Intelectual, Direito do Consumidor e outras áreas de atuação.',
  },
  '/contato': {
    title: 'Solicite sua Avaliação | Barreto Moreira Advocacia',
    description:
      'Solicite a análise preliminar do seu caso ao Barreto Moreira, escritório de advocacia em Santos/SP. Retorno em até 2 dias úteis.',
  },
};

const notFoundMeta = {
  title: 'Página não encontrada | Barreto Moreira',
  description: 'A página que você procura não foi encontrada. Volte ao início do site Barreto Moreira.',
  noindex: true,
};

function PageHead() {
  const { pathname } = useLocation();
  const key = pathname.replace(/\/$/, '') || '/';

  // A Home cuida do próprio <Head>.
  if (key === '/') return null;

  const meta = pageMeta[key] ?? notFoundMeta;
  const canonical = `${SITE_URL}${key}/`;

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

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
