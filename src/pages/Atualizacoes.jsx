import React, { useEffect } from 'react';
import InstagramCarousel from '../components/InstagramCarousel';
import Marquee from '../components/Marquee';

export default function Atualizacoes() {
  useEffect(() => {
    document.title = 'Atualizações & Jurisprudência | Barreto Moreira';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Acompanhe análises sobre decisões dos tribunais, mudanças regulatórias e novidades do ambiente digital pelo Barreto Moreira Advocacia.'
      );
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      {/* Header Editorial */}
      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-gold mb-4">
          <span>04 // Atualizações &amp; jurisprudência</span>
        </div>
        <div className="border-b border-[#E2E8F0] pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#162235]">
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
