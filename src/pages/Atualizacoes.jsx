import React from 'react';
import InstagramCarousel from '../components/InstagramCarousel';
import Marquee from '../components/Marquee';

export default function Atualizacoes() {
  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      {/* Header Editorial */}
      <section className="pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-3">
          <span>04 // ATUALIZAÇÕES E NOVIDADES</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5 border-b border-[#E2E8F0] pb-6 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-normal text-[#162235]">
            ACOMPANHE AS
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-normal text-[#64748B]">
            NOVIDADES
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed">
          Acompanhe nossas publicações mais recentes. Compartilhamos análises jurídicas, decisões relevantes dos Tribunais e conteúdos sobre as áreas de atuação no nosso Instagram.
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
