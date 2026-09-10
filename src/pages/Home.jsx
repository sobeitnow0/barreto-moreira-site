import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Marquee from '../components/Marquee';
import InstagramCarousel from '../components/InstagramCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import heroImage from '../assets/hero-image.webp';

export default function Home() {
  const categories = [
    {
      num: "01",
      name: "Direito Digital",
      sub: "Responsabilidade de Plataformas & Ilícitos Cibernéticos",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      name: "Propriedade Intelectual",
      sub: "Registro de Marcas, Patentes & Atuação no INPI",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      name: "Direito Autoral",
      sub: "Proteção de Obras, Criações & Licenciamento",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      name: "Direito do Consumidor",
      sub: "Relações de Consumo Complexas & Estratégia para Fornecedores",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "05",
      name: "Contratos Sob Medida",
      sub: "Engenharia Contratual Estratégica & Blindagem Jurídica",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const features = [
    {
      num: "01",
      title: "Artesanal & Sob Medida",
      desc: "Rompemos com a advocacia de volume. Cada processo é tratado como um projeto singular, demandando arquitetura jurídica exclusiva e teses construídas sob medida para o seu cenário.",
      tag: "Atuação Singular"
    },
    {
      num: "02",
      title: "Imersão Estratégica",
      desc: "Acreditamos que a complexidade exige tempo e reflexão. Dedicamos aprofundamento dogmático e analítico intenso, garantindo que o seu caso receba a atenção que o alto padrão impõe.",
      tag: "Foco Absoluto"
    },
    {
      num: "03",
      title: "Governança & Proximidade",
      desc: "Eliminamos intermediários. Você acompanha a evolução do seu processo e as decisões estratégicas diretamente com os sócios que elaboram e defendem a sua tese.",
      tag: "Contato Direto"
    }
  ];

  return (
    <div className="flex-1 flex flex-col w-full overflow-hidden bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
      <section className="pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#162235]">
                Alta Complexidade & Exclusividade
              </span>
            </div>

            <div className="flex flex-col tracking-tight font-extrabold uppercase text-[#162235] leading-[0.92] text-5xl sm:text-6xl md:text-[5rem] mb-10">
              <span>ADVOCACIA</span>
              <span>ESTRATÉGICA</span>
              <span className="text-brand-gold">SOB MEDIDA &</span>
              <span>ALTO PADRÃO</span>
            </div>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl mb-10 font-light">
              Atuação artesanal e rigor técnico para pessoas e empresas que exigem precisão cirúrgica na defesa de seus direitos. Menos volume, mais profundidade.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <Link
                to="/contato"
                className="px-8 py-4 rounded-xl bg-[#162235] text-white font-semibold text-sm tracking-widest uppercase hover:bg-brand-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#162235]/20 group"
              >
                <span>Solicitar Avaliação do Caso</span>
                <ArrowRight size={18} className="text-brand-gold transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/escritorio"
                className="px-8 py-4 rounded-xl bg-white text-[#162235] border border-[#E2E8F0] font-semibold text-sm tracking-widest uppercase hover:bg-black/[0.02] transition-all flex items-center justify-center"
              >
                O Escritório
              </Link>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B] uppercase tracking-[0.2em]">
              <span>OAB/SP 349457</span>
              <span className="text-brand-gold">•</span>
              <span>Proteção Patrimonial & Empresarial</span>
            </div>
          </div>

          {/* Lado Direito: Imagem */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] max-h-[600px] w-full">
              <img 
                src={heroImage}
                alt="Petição e Análise Jurídica"
                className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white block mb-1.5">
                  Gestão Dedicada
                </span>
                <p className="text-sm font-medium text-white leading-relaxed">
                  Interlocução direta e exclusiva com os sócios fundadores nas demandas mais sensíveis do seu negócio.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      </ScrollReveal>

      {/* 2. CATEGORY CARDS */}
      <ScrollReveal>
      <section className="py-20 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
                01 // Especialidades
              </span>
              <span className="w-12 h-[1px] bg-[#E2E8F0]"></span>
            </div>
            <Link
              to="/atuacao"
              className="text-xs font-bold uppercase tracking-widest text-[#162235] hover:text-brand-gold flex items-center gap-2 transition-colors"
            >
              <span>Ver portfólio de atuação</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to="/atuacao"
                className="group relative h-80 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/80 via-[#0E1726]/20 to-transparent transition-colors group-hover:from-[#0E1726]/95"></div>

                {/* Número no topo */}
                <div className="relative z-10 flex justify-between items-center p-6">
                  <span className="text-xs font-bold tracking-widest text-brand-gold">
                    {cat.num}.
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Texto embaixo com Glassmorphism */}
                <div className="relative z-10 p-6 pt-10">
                  <h3 className="text-lg font-bold uppercase tracking-normal text-white mb-2 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {cat.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 3. SECTION SPLIT TITLE */}
      <ScrollReveal>
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Indicador de Seção */}
        <div className="flex items-center gap-3 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-6">
          <span>02 // PILARES DE ATUAÇÃO</span>
        </div>

        {/* Título unificado e harmônico */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E2E8F0] pb-8 mb-14 gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#162235] leading-none">
            DIRETRIZES <span className="text-[#64748B] block sm:inline">DO ESCRITÓRIO</span>
          </h2>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#64748B] font-semibold pb-2">
            [ Rigor Técnico & Governança ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-center">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-2xl text-[#334155] leading-relaxed font-light">
              O <strong>Barreto Moreira</strong> opera sob um modelo intencionalmente boutique, estruturado para rejeitar o volume em favor da precisão. Asseguramos atenção integral, pesquisa dogmática minuciosa e interlocução direta com os sócios fundadores.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/escritorio"
              className="px-8 py-4 rounded-xl bg-[#162235] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-brand-hover transition-all inline-flex items-center gap-3 shadow-lg"
            >
              <span>Conhecer Estrutura</span>
              <ArrowRight size={16} className="text-brand-gold" />
            </Link>
          </div>
        </div>

        {/* Features / Pilares com visual Milano Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-black text-brand-gold block mb-6 transition-transform group-hover:-translate-y-1">
                  {feat.num}.
                </span>
                <h3 className="text-xl font-bold uppercase tracking-normal text-[#162235] mb-4">
                  {feat.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#162235] uppercase tracking-[0.15em]">
                <span>{feat.tag}</span>
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* 4. BLACK SECTION CTA */}
      <ScrollReveal>
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden bg-[#0E1726]">
        {/* Imagem de Fundo com Parallax */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        {/* Overlay para escurecer o fundo parallax */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E1726]/95 to-[#162235]/95"></div>

        {/* Glow sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Selo Circular OAB/SP 349457 estilo Milano Stamp com Glassmorphism */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-brand-gold/30 bg-white/5 backdrop-blur-xl flex items-center justify-center p-4 animate-spin-slow shadow-[0_0_40px_rgba(212,175,55,0.05)]">
              <div className="w-full h-full rounded-full border border-dashed border-brand-gold/50 flex flex-col items-center justify-center text-center p-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gold">
                  OAB/SP
                </span>
                <span className="text-3xl font-black tracking-widest text-white my-1">
                  349457
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/70">
                  ESTRATÉGICA
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto e Ação */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="text-xs uppercase font-bold tracking-[0.4em] text-brand-gold mb-4">
              Atendimento Criterioso & Reservado
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-8 leading-[1.1]">
              Pronto para tratar sua causa com a profundidade que ela exige?
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-loose max-w-3xl mb-10 font-light">
              Nossos canais são restritos a consultas preliminares com os sócios. Cada litígio ou projeto recebe um diagnóstico prévio rigoroso antes de apresentarmos nossa proposta de atuação.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
              <Link
                to="/contato"
                className="px-10 py-5 rounded-xl bg-white text-[#0E1726] font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-goldLight transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                <span>Solicitar Avaliação</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:contato@barretomoreira.com.br"
                className="px-10 py-5 rounded-xl bg-white/5 backdrop-blur-md text-white border border-white/20 font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center shadow-lg"
              >
                contato@barretomoreira.com.br
              </a>
            </div>
          </div>

        </div>
      </section>
      </ScrollReveal>

      {/* 5. INSTAGRAM CAROUSEL */}
      <ScrollReveal>
      <InstagramCarousel />
      </ScrollReveal>

      {/* 6. INFINITE LOOP BANNER (TICKER) */}
      <Marquee />

    </div>
  );
}
