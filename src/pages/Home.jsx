import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Scale, Clock, Sparkles } from 'lucide-react';
import Marquee from '../components/Marquee';
import InstagramCarousel from '../components/InstagramCarousel';

export default function Home() {
  const categories = [
    {
      num: "01",
      name: "Direito Digital",
      sub: "Plataformas, Ilícitos & Reativação de Contas",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      name: "Propriedade Intelectual",
      sub: "Marcas, Patentes & INPI",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      name: "Direito Autoral",
      sub: "Harvard CopyrightX, Obras & Licenciamento",
      img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      name: "Direito do Consumidor",
      sub: "Consumidor e Fornecedor (Lato Sensu)",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "05",
      name: "Contratos Sob Medida",
      sub: "Modelagem Estratégica & Blindagem",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const features = [
    {
      num: "01",
      title: "Sem Esteira de Massa",
      desc: "Rompemos com o modelo industrial. Cada processo é tratado como uma causa singular, com defesas e teses jurídicas construídas sob medida."
    },
    {
      num: "02",
      title: "Tempo Dedicado à Causa",
      desc: "Aprofundamento analítico e dedicação direta dos fundadores no tempo que a complexidade do caso realmente exige."
    },
    {
      num: "03",
      title: "Transparência & Acesso Direto",
      desc: "Você acompanha cada passo e decisão do processo diretamente com quem cuida do caso, com clareza e sem intermediários."
    }
  ];

  return (
    <div className="flex-1 flex flex-col w-full overflow-hidden bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION MILANO (Split com Stacked Words à esquerda e Imagem Editorial à direita) */}
      <section className="pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Tipografia Stacked em Caixa Alta (Exata estética Milano) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 mb-6 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#162235]">
                Soluções Jurídicas Sob Medida
              </span>
            </div>

            {/* Palavras empilhadas monumentais */}
            <div className="flex flex-col tracking-normal font-extrabold uppercase text-[#162235] leading-[0.95] text-4xl sm:text-6xl md:text-7xl mb-6">
              <span>ADVOCACIA</span>
              <span>ESTRATÉGICA</span>
              <span className="text-brand-gold">SOB MEDIDA &</span>
              <span>ALTO PADRÃO</span>
            </div>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl mb-8 font-normal">
              Acompanhamento individualizado e rigor técnico para pessoas e empresas que exigem precisão e defesa criteriosa de seus direitos.
            </p>

            {/* Ações com botões com setas */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/contato"
                className="px-8 py-4 rounded-xl bg-[#162235] text-white font-semibold text-sm tracking-wider uppercase hover:bg-brand-hover transition-all flex items-center justify-center gap-3 shadow-md group"
              >
                <span>Agendar Consulta</span>
                <ArrowRight size={18} className="text-brand-gold transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/escritorio"
                className="px-8 py-4 rounded-xl bg-white text-[#162235] border border-[#E2E8F0] font-semibold text-sm tracking-wider uppercase hover:bg-black/[0.02] transition-all flex items-center justify-center"
              >
                O Escritório
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              <span>OAB/SP 349457</span>
              <span>•</span>
              <span>Soluções Jurídicas Sob Medida</span>
            </div>
          </div>

          {/* Lado Direito: Imagem Editorial com Enquadramento de Luxo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[580px] w-full">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Sede Barreto Moreira Advocacia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-gold block mb-1">
                  Gestão Dedicada
                </span>
                <p className="text-xs font-medium text-[#162235]">
                  Acompanhamento direto dos fundadores com foco em causas de alto valor e complexidade.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY CARDS / ÁREAS COM IMAGENS (Exatamente como o Milano Category Holder) */}
      <section className="py-12 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
                01 // Especialidades
              </span>
              <span className="w-8 h-[1px] bg-[#E2E8F0]"></span>
            </div>
            <Link
              to="/atuacao"
              className="text-xs font-bold uppercase tracking-wider text-[#162235] hover:text-brand-gold flex items-center gap-1.5 transition-colors"
            >
              <span>Ver todas as áreas</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to="/atuacao"
                className="group relative h-72 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col justify-between p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-[#0E1726]/60 to-black/30 group-hover:from-[#0E1726]/90 transition-colors"></div>

                {/* Número no topo */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-brand-gold">
                    {cat.num}.
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} className="text-brand-gold" />
                  </div>
                </div>

                {/* Texto embaixo */}
                <div className="relative z-10">
                  <h3 className="text-base font-bold uppercase tracking-normal text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-white/70 line-clamp-2">
                    {cat.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION SPLIT TITLE (Estilo Milano NEWEST / PRODUCTS) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Indicador de Seção */}
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-3">
          <span>02 // PILARES DE ATUAÇÃO</span>
        </div>

        {/* Título unificado e harmônico */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E2E8F0] pb-6 mb-10 gap-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-normal text-[#162235]">
            DIRETRIZES <span className="text-[#64748B]">DO ESCRITÓRIO</span>
          </h2>
          <span className="text-xs font-mono uppercase tracking-widest text-[#64748B] font-semibold">
            [ Rigor Técnico & Governança ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
              O <strong>Barreto Moreira</strong> opera sob um modelo intencionalmente reduzido em volume para assegurar atenção concentrada, pesquisa minuciosa e interlocução direta com os sócios fundadores.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/escritorio"
              className="px-6 py-3.5 rounded-xl bg-[#162235] text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-hover transition-all inline-flex items-center gap-2"
            >
              <span>Conhecer Estrutura</span>
              <ArrowRight size={16} className="text-brand-gold" />
            </Link>
          </div>
        </div>

        {/* Features / Pilares com visual Milano */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-brand-gold/60 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-brand-gold block mb-4">
                  {feat.num}.
                </span>
                <h3 className="text-lg font-bold uppercase tracking-normal text-[#162235] mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#162235]">
                <span>Padrão Exclusivo</span>
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BLACK SECTION MILANO (CTA Escuro de Alto Contraste com Selo/Stamp Circular) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E1726] text-white relative overflow-hidden">
        {/* Glow sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Selo Circular OAB/SP 349457 estilo Milano Stamp */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-brand-gold/40 flex items-center justify-center p-3 animate-spin-slow">
              <div className="w-full h-full rounded-full border border-dashed border-brand-gold/60 flex flex-col items-center justify-center text-center p-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  OAB/SP
                </span>
                <span className="text-2xl font-black tracking-wider text-white my-0.5">
                  349457
                </span>
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/70">
                  ESTRATÉGICA
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto e Ação */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-brand-gold mb-3">
              Atendimento Criterioso & Reservado
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-normal text-white mb-6 leading-tight">
              Pronto para tratar sua causa com a profundidade que ela exige?
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-light">
              Nossos canais são reservados para consultas preliminares com os fundadores. Cada caso recebe estudo prévio detalhado antes de qualquer proposta de atuação.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contato"
                className="px-8 py-4 rounded-xl bg-white text-[#0E1726] font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Iniciar Atendimento</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:contato@barretomoreira.com.br"
                className="px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium text-xs uppercase tracking-wider hover:bg-white/15 transition-all flex items-center justify-center"
              >
                contato@barretomoreira.com.br
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INSTAGRAM CAROUSEL */}
      <InstagramCarousel />

      {/* 6. INFINITE LOOP BANNER (TICKER) */}
      <Marquee />

    </div>
  );
}
