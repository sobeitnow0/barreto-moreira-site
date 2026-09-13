import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star } from 'lucide-react';
import Marquee from '../components/Marquee';
import InstagramCarousel from '../components/InstagramCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import heroImage from '../assets/hero-image.webp';

export default function Home() {
  useEffect(() => {
    document.title = 'Barreto Moreira | Advocacia Estratégica';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Barreto Moreira Advocacia Estratégica. Soluções jurídicas sob medida para causas complexas. OAB/SP 349457. Fundado por Amilcar Barreto de Barros Moreira.'
      );
    }
  }, []);

  const categories = [
    {
      num: "01",
      name: "Direito Digital",
      sub: "Remoção de conteúdo, perfis falsos e responsabilidade civil de provedores",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      name: "Propriedade Intelectual",
      sub: "Proteção de ativos imateriais, oposições e recursos estratégicos no INPI",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      name: "Direito Autoral",
      sub: "Estruturação de licenciamentos, contratos de cessão e tutela de obras intelectuais",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      name: "Direito do Consumidor",
      sub: "Defesa preventiva para fornecedores e ações indenizatórias de alta complexidade",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "05",
      name: "Contratos Sob Medida",
      sub: "Elaboração, mitigação de riscos operacionais e engenharia contratual",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "06",
      name: "Direito Animal",
      sub: "Ações de guarda, erro médico-veterinário e responsabilidade civil por maus-tratos",
      img: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  
 // ⚠️ Troque para `true` quando os depoimentos reais estiverem prontos.
  const SHOW_TESTIMONIALS = false;
  
  // ⚠️ PLACEHOLDER — substitua por depoimentos reais de clientes antes de publicar.
  // Peça autorização por escrito do cliente antes de usar nome/foto real.
  const testimonials = [
    {
      quote: "[Exemplo — substitua pelo depoimento real do cliente sobre o resultado obtido e a experiência com o escritório.]",
      name: "[Nome do cliente]",
      context: "[Tipo de causa, ex: Direito Digital]",
      rating: 5
    },
    {
      quote: "[Exemplo — substitua pelo depoimento real do cliente sobre o resultado obtido e a experiência com o escritório.]",
      name: "[Nome do cliente]",
      context: "[Tipo de causa, ex: Propriedade Intelectual]",
      rating: 5
    },
    {
      quote: "[Exemplo — substitua pelo depoimento real do cliente sobre o resultado obtido e a experiência com o escritório.]",
      name: "[Nome do cliente]",
      context: "[Tipo de causa, ex: Contratos Sob Medida]",
      rating: 5
    }
  ];

  const features = [
    {
      num: "01",
      title: "Diagnóstico Individual de Cada Caso",
      desc: "Nenhuma causa entra em um fluxo padronizado. Cada processo passa por um diagnóstico próprio, no qual a estratégia nasce das particularidades dos fatos e da jurisprudência mais recente aplicável.",
      tag: "Investigação Detalhada"
    },
    {
      num: "02",
      title: "Pesquisa Doutrinária Aprofundada",
      desc: "Teses sólidas exigem tempo de estudo. Investimos na pesquisa documental e doutrinária necessária para sustentar cada argumento com base consistente perante os tribunais.",
      tag: "Rigor Técnico"
    },
    {
      num: "03",
      title: "Atendimento Direto pelos Sócios",
      desc: "Sem intermediários e sem filas de atendimento. O cliente fala diretamente com o advogado responsável pela tese e pela condução do processo, do início ao fim.",
      tag: "Governança & Transparência"
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
              <span className="text-xs font-semibold text-[#162235]">
                Advocacia consultiva e litigiosa de alto impacto
              </span>
            </div>

            <h1 className="flex flex-col tracking-tight font-bold text-[#162235] leading-[1.1] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] mb-8">
              <span>Rigor técnico e defesa</span>
              <span className="text-brand-gold">estratégica patrimonial.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#475569] leading-relaxed max-w-xl mb-10 font-light">
              Cada caso passa por investigação aprofundada e por uma tese construída sob medida — sem modelos prontos, sem escala em massa. Mantemos um número limitado de causas ativas para garantir dedicação real aos nossos clientes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <Link
                to="/contato"
                className="px-8 py-4 rounded-xl bg-[#162235] text-white font-semibold text-sm hover:bg-brand-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#162235]/20 group"
              >
                <span>Solicitar avaliação do caso</span>
                <ArrowRight size={18} className="text-brand-gold transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/escritorio"
                className="px-8 py-4 rounded-xl bg-white text-[#162235] border border-[#E2E8F0] font-semibold text-sm hover:bg-black/[0.02] transition-all flex items-center justify-center"
              >
                O escritório
              </Link>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B]">
              <span>OAB/SP 349457</span>
              <span className="text-brand-gold">•</span>
              <span>Proteção patrimonial &amp; empresarial</span>
            </div>
          </div>

          {/* Lado Direito: Imagem */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] max-h-[600px] w-full bg-white">
              <img 
                src={heroImage}
                alt="Petição e análise jurídica"
                className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
              />
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
              <span className="text-xs font-bold text-brand-gold">
                01 // Especialidades
              </span>
              <span className="w-12 h-[1px] bg-[#E2E8F0]"></span>
            </div>
            <Link
              to="/atuacao"
              className="text-xs font-bold text-[#162235] hover:text-brand-gold flex items-center gap-2 transition-colors"
            >
              <span>Ver portfólio de atuação</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to="/atuacao"
                className="group relative h-80 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <img
                  src={cat.img}
                  alt=""
                  role="presentation"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/80 via-[#0E1726]/20 to-transparent transition-colors group-hover:from-[#0E1726]/95"></div>

                <div className="relative z-10 flex justify-between items-center p-6">
                  <span className="text-xs font-bold text-brand-gold">
                    {cat.num}.
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>

                <div className="relative z-10 p-6 pt-10">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
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
        <div className="flex items-center gap-3 text-xs font-bold text-brand-gold mb-6">
          <span>02 // Pilares de atuação</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E2E8F0] pb-8 mb-14 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#162235] leading-tight">
            Diretrizes <span className="text-[#64748B]">do escritório</span>
          </h2>
          <span className="text-xs font-mono text-[#64748B] font-semibold pb-2">
            [ Rigor técnico &amp; governança ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-center">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-2xl text-[#334155] leading-relaxed font-light">
              O <strong>Barreto Moreira</strong> opera como uma banca boutique por escolha, não por tamanho. Aceitamos um número controlado de causas para garantir atenção integral, pesquisa aprofundada e contato direto com os sócios fundadores em cada etapa.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/escritorio"
              className="px-8 py-4 rounded-xl bg-[#162235] text-white font-semibold text-xs hover:bg-brand-hover transition-all inline-flex items-center gap-3 shadow-lg"
            >
              <span>Conhecer estrutura</span>
              <ArrowRight size={16} className="text-brand-gold" />
            </Link>
          </div>
        </div>

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
                <h3 className="text-xl font-bold text-[#162235] mb-4">
                  {feat.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#162235]">
                <span>{feat.tag}</span>
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* 3.5 DEPOIMENTOS — conteúdo placeholder, substituir antes de publicar */}
      <ScrollReveal>
      <section className="py-20 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-bold text-brand-gold">
              03 // Depoimentos
            </span>
            <span className="w-12 h-[1px] bg-[#E2E8F0]"></span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#162235] leading-tight">
              O que dizem <span className="text-[#64748B]">nossos clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote size={28} className="text-brand-gold mb-6" />
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-light italic mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, starIdx) => (
                      <Star key={starIdx} size={14} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#162235] block">
                    {t.name}
                  </span>
                  <span className="text-xs text-[#64748B] font-medium">
                    {t.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 4. BLACK SECTION CTA */}
      <ScrollReveal>
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden bg-[#0E1726]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E1726]/95 to-[#162235]/95"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="w-48 h-48 rounded-full border border-dashed border-brand-gold/50 flex flex-col items-center justify-center text-center p-6">
              <span className="text-[11px] font-bold text-brand-gold">
                OAB/SP
              </span>
              <span className="text-3xl font-black tracking-widest text-white my-1">
                349457
              </span>
              <span className="text-[10px] font-bold text-white/70">
                Estratégica
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="text-xs font-bold text-brand-gold mb-4">
              Atendimento criterioso &amp; reservado
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Submeta seu caso a uma análise jurídica preliminar
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-loose max-w-3xl mb-10 font-light">
              Antes de assumirmos qualquer demanda, realizamos um estudo de viabilidade técnica para mapear riscos, probabilidades e caminhos estratégicos. Envie os elementos do seu caso e receba um retorno criterioso em até 2 dias úteis.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
              <Link
                to="/contato"
                className="px-10 py-5 rounded-xl bg-white text-[#0E1726] font-bold text-xs hover:bg-brand-goldLight transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                <span>Solicitar avaliação</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:contato@barretomoreira.com.br"
                className="px-10 py-5 rounded-xl bg-white/5 backdrop-blur-md text-white border border-white/20 font-medium text-xs hover:bg-white/10 transition-all flex items-center justify-center shadow-lg"
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
