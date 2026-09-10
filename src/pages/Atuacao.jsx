import React from 'react';
import { Network, Database, ArrowUpRight, CheckCircle2, ArrowRight, Building2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';

export default function Atuacao() {
  const areas = [
    {
      num: "01",
      title: "Direito Digital & Plataformas",
      desc: "Responsabilidade civil nas plataformas digitais e redes sociais, remoção de conteúdos lesivos e ilícitos, e medidas de urgência para a reativação de contas indevidamente suspensas ou banidas.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      tag: "Proteção Digital"
    },
    {
      num: "02",
      title: "Propriedade Intelectual & Marcas",
      desc: "Proteção estratégica e contencioso de marcas e patentes perante o INPI, segredos industriais, repressão à concorrência desleal e combate à contrafação.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tag: "Registro & Defesa"
    },
    {
      num: "03",
      title: "Direito Autoral & Criações",
      desc: "Tutela dos direitos morais e patrimoniais de criadores, obras audiovisuais, artísticas e softwares, licenciamento e indenizações por uso indevido.",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      tag: "Proteção de Obras"
    },
    {
      num: "04",
      title: "Direito do Consumidor (Consumidor & Fornecedor)",
      desc: "Atuação bivalente: defesa técnica intransigente dos direitos do consumidor (lato sensu), e assessoria preventiva e contenciosa corporativa para o fornecedor (lato sensu) na adequação ao CDC e mitigação de passivos.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tag: "Consumidor & Fornecedor"
    },
    {
      num: "05",
      title: "Contratos Estratégicos & Pareceres",
      desc: "Modelagem contratual sob medida para blindagem de patrimônio, acordos comerciais, estruturação de parcerias, instrumentos negociais complexos e elaboração de pareceres jurídicos.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      tag: "Engenharia Contratual"
    },
    {
      num: "06",
      title: "Direito Animal & Tutela Especial",
      desc: "Atuação pioneira e engajada na defesa e tutela dos direitos e bem-estar animal em instâncias judiciais e administrativas.",
      img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      tag: "Tutela Especial"
    }
  ];

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      {/* Header Editorial */}
      <section className="pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-3">
          <span>01 // ESCOPO DE ATUAÇÃO</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5 border-b border-[#E2E8F0] pb-6 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-normal text-[#162235]">
            ÁREAS DE
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-normal text-[#64748B]">
            PRÁTICA
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed">
          Nossas estratégias jurídicas sob medida refletem-se em um escopo criteriosamente selecionado. Quando a demanda extrapola o nosso núcleo direto, operamos através de uma rede de elite sob nossa coordenação central.
        </p>
      </section>

      {/* Grid de Áreas com Cards Imersivos estilo Milano */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/80 via-[#0E1726]/30 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#0E1726]/80 backdrop-blur-md text-brand-gold text-xs font-bold font-mono border border-brand-gold/30">
                    {item.num}.
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold uppercase tracking-normal text-[#162235] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#E2E8F0]/60 text-xs font-semibold text-[#162235]">
                <span>{item.tag}</span>
                <CheckCircle2 size={15} className="text-brand-gold" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* Seções Especiais: Atuação em Rede, Buscador DJEN e Abrangência */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Bloco 1: Atuação em Rede */}
        <div className="bg-[#0E1726] text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl flex flex-col md:flex-row gap-8 items-start">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-brand-gold border border-white/10">
            <Network size={28} />
          </div>
          <div className="flex-1 w-full">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-gold block mb-2">
              Ecossistema Jurídico Estratégico
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-normal mb-4">
              Atuação em Rede para Matérias Multidisciplinares
            </h3>
            <p className="text-white/75 leading-relaxed text-sm sm:text-base font-normal mb-6">
              Para demandas complementares e matérias altamente especializadas — como Direito Bancário, Imobiliário, da Saúde, Trabalhista Corporativo e Falências —, integramos alianças com bancas parceiras de reconhecida solidez técnica. Mantemos a <strong>gestão, governança e coordenação técnica centralizadas no Barreto Moreira</strong>, assegurando ao cliente interlocutor exclusivo, rigor metodológico e padrão sob medida em todas as frentes.
            </p>

            {/* Escritórios Colaboradores */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-brand-gold font-bold block mb-4">
                Escritórios Colaboradores & Bancas Parceiras
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Passos & Martins */}
                <a
                  href="https://passosemartins.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-brand-gold/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-brand-gold" />
                        <h4 className="text-base font-bold text-white group-hover:text-brand-gold transition-colors">
                          Passos & Martins
                        </h4>
                      </div>
                      <ExternalLink size={14} className="text-white/40 group-hover:text-brand-gold transition-colors shrink-0" />
                    </div>
                    <span className="text-[11px] text-brand-gold/80 block mb-2.5 font-mono">
                      Sociedade de Advogados
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Banca parceira com destacada especialização técnica em <strong>Direito Bancário</strong>, <strong>Direito Imobiliário</strong>, <strong>Direito da Saúde</strong> e Contencioso Cível Estratégico.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-gold font-semibold tracking-wide">
                    <span>passosemartins.com.br</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>

                {/* Alianças em Matérias Corporativas */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Network size={16} className="text-brand-gold" />
                      <h4 className="text-base font-bold text-white">
                        Alianças Especializadas
                      </h4>
                    </div>
                    <span className="text-[11px] text-white/40 block mb-2.5 font-mono">
                      Sob Gestão Barreto Moreira
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Articulação sob demanda com bancas especializadas em <strong>Direito Tributário</strong>, <strong>Trabalhista Patronal</strong> e <strong>M&A</strong>, sob estrito acordo de confidencialidade e governança.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-white/60">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Tributário Estratégico</span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Trabalhista Patronal</span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">M&A & Fusões</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Buscador DJEN */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#162235]">
            <Database size={28} />
          </div>
          <div className="flex-1">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-gold block mb-2">
              Tecnologia Própria
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-normal text-[#162235] mb-4">
              Buscador DJEN: Inteligência Aplicada à Prática Jurídica
            </h3>
            <p className="text-[#334155] leading-relaxed text-sm sm:text-base mb-6">
              Desenvolvemos o <strong>Buscador DJEN</strong>, uma plataforma proprietária para indexação e pesquisa avançada no Diário de Justiça Eletrônico Nacional, garantindo velocidade de monitoramento e antecipação de teses.
            </p>
            <a
              href="https://www.buscadordjen.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#162235] text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-hover transition-all group"
            >
              <span>Acessar Plataforma Buscador DJEN</span>
              <ArrowUpRight size={16} className="text-brand-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
