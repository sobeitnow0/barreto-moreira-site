import React from 'react';
import { Head } from 'vite-react-ssg';
import InstagramCarousel from '../components/InstagramCarousel';
import Marquee from '../components/Marquee';

export default function Atualizacoes() {
  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      <Head>
        <title>Atualizações & Jurisprudência | Barreto Moreira Estratégia Jurídica</title>
        <meta
          name="description"
          content="Acompanhe análises sobre decisões dos tribunais, mudanças regulatórias e novidades do ambiente digital pelo Barreto Moreira Advocacia."
        />
        <link rel="canonical" href="https://barretomoreira.com.br/atualizacoes" />
        <meta property="og:title" content="Atualizações & Jurisprudência | Barreto Moreira Estratégia Jurídica" />
        <meta property="og:description" content="Acompanhe análises sobre decisões dos tribunais, mudanças regulatórias e novidades do ambiente digital pelo Barreto Moreira Advocacia." />
        <meta property="og:url" content="https://barretomoreira.com.br/atualizacoes" />
      </Head>

      {/* Header Editorial */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
          <span>04 // Atualizações &amp; jurisprudência</span>
        </div>
        <div className="border-b border-[#E2E8F0] pb-4 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#18293C]">
            Acompanhe nossas <span className="text-[#64748B]">análises</span>
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-light">
          Acompanhamos decisões recentes dos tribunais, mudanças regulatórias e novidades do ambiente digital. Veja nossas notas técnicas e reflexões nos canais oficiais abaixo.
        </p>
      </section>

      {/* Carrossel */}
      <div>
        <InstagramCarousel />
      </div>

      <Marquee />
    </div>
  );
}
